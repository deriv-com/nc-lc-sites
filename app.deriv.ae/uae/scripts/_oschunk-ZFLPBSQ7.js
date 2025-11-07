import {
    a as F
} from "./_oschunk-4CXZFUZT.js";
import {
    a as M
} from "./_oschunk-7ZNALR7E.js";
import {
    a as x
} from "./_oschunk-TUCZO4XG.js";
import {
    a as I
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as B
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as $
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as re,
    f as u,
    h as R,
    n as H,
    u as y
} from "./_oschunk-VR5BNL2K.js";
import {
    a as fe,
    g as W,
    m as X,
    n as ee,
    q as te,
    r as ne,
    s as ie,
    t as N
} from "./_oschunk-4VHUVDBV.js";
import {
    a as Q
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as q,
    Sb as P,
    lb as E,
    ra as L,
    ub as S
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as O,
    c,
    e as ue,
    f as h,
    p as D
} from "./_oschunk-M5BUVJ72.js";
var oe = {};

function K(b, g, l, n) {
    function e() {
        return h(this, null, function*() {
            var f;
            let t = b.lang,
                s = document.querySelector('[target="sumsub-websdk-container-poa"]'),
                {
                    token: i,
                    email: m,
                    phone: v
                } = JSON.parse(b.response);
            snsWebSdk.init(i, () => g.EndMeBro()).withConf({
                lang: (f = t.match(/^../)[0]) != null ? f : "en",
                email: m,
                phone: v,
                theme: "light",
                country: "ARE"
            }).withOptions({
                addViewportTag: !1,
                adaptIframeHeight: !0
            }).on("idCheck.onReady", d => {
                console.log("onReady", d)
            }).on("idCheck.onStepCompleted", d => {
                console.log("onStepCompleted", JSON.stringify(d)), d.idDocSetType === "PROOF_OF_RESIDENCE" && g.OnPOACompleted()
            }).on("idCheck.onApplicantStatusChanged", d => {
                console.log("applicant status change"), console.log(d), console.log(JSON.stringify(d))
            }).on("idCheck.onInitialized", d => {
                console.log("init", d), g.OnLoadingComplete()
            }).on("idCheck.onError", d => {
                console.log("onError", d), g.HandleOnBlockingStatus("error")
            }).build().launch(s)
        })
    }
    c(e, "launchWebSDK"), h(null, null, function*() {
        yield e()
    })
}
c(K, "default");

function U(b, g, l, n) {
    function e() {
        return h(this, null, function*() {
            var f;
            let t = b.lang,
                s = document.querySelector('[target="sumsub-websdk-container-poa"]'),
                {
                    token: i,
                    email: m,
                    phone: v
                } = JSON.parse(b.response);
            snsWebSdk.init(i, () => g.EndMeBro()).withConf({
                lang: (f = t.match(/^../)[0]) != null ? f : "en",
                email: m,
                phone: v,
                theme: "light",
                country: "ARE"
            }).withOptions({
                addViewportTag: !1,
                adaptIframeHeight: !0
            }).on("idCheck.onReady", d => {
                console.log("onReady", d)
            }).on("idCheck.onStepCompleted", d => {
                console.log("onStepCompleted", JSON.stringify(d)), d.idDocSetType === "PROOF_OF_RESIDENCE" && g.OnPOACompleted()
            }).on("idCheck.onApplicantStatusChanged", d => {
                var p, _;
                if (console.log("applicant status change in us citixiwx"), console.log(d), console.log(JSON.stringify(d)), d.reviewResult.reviewAnswer === "RED" && ((d == null ? void 0 : d.reviewStatus) === "completed" || d.reviewStatus === "onHold")) {
                    console.log("updated kyc 1");
                    let Z = ((_ = (p = d.reviewResult) == null ? void 0 : p.moderationComment) == null ? void 0 : _.toLowerCase()) || "";
                    if (d.reviewResult.reviewRejectType === "FINAL" && (Z.includes("region") || Z.includes("\u0645\u0646\u0637\u0642\u062A\u0643"))) {
                        console.log("User is from a blocked region"), g.HandleOnBlockingStatus("region_blocked");
                        return
                    }
                }
            }).on("idCheck.onInitialized", d => {
                console.log("init", d), g.OnLoadingComplete()
            }).on("idCheck.onError", d => {
                console.log("onError", d), g.HandleOnBlockingStatus("error")
            }).build().launch(s)
        })
    }
    c(e, "launchWebSDK"), h(null, null, function*() {
        yield e()
    })
}
c(U, "default");
var r = O; {
    let g = class g extends r.Controller.BaseViewController {
        constructor(n, e, t) {
            super(n, e, t, oe);
            var s = this.controller;
            this.clientActionProxies = {
                endMeBro$Action: c(function() {
                    return s.executeActionInsideJSNode(s._endMeBro$Action.bind(s), s.callContext(), function(i) {
                        return {}
                    }, function() {}, "EndMeBro")
                }, "endMeBro$Action"),
                onPOACompleted$Action: c(function() {
                    return s.executeActionInsideJSNode(s._onPOACompleted$Action.bind(s), s.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnPOACompleted")
                }, "onPOACompleted$Action"),
                handleOnBlockingStatus$Action: c(function(i) {
                    return i = i === void 0 ? "" : i, s.executeActionInsideJSNode(s._handleOnBlockingStatus$Action.bind(s, r.DataConversion.JSNodeParamConverter.from(i, r.DataTypes.DataTypes.Text)), s.callContext(), function(m) {
                        return {}
                    }, function() {}, "HandleOnBlockingStatus")
                }, "handleOnBlockingStatus$Action"),
                onLoadingComplete$Action: c(function() {
                    return s.executeActionInsideJSNode(s._onLoadingComplete$Action.bind(s), s.callContext(), function(i) {
                        return {}
                    }, function() {}, "OnLoadingComplete")
                }, "onLoadingComplete$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get postKYCAccesstoken$ServerAction() {
            return this.hasOwnProperty("_postKYCAccesstoken$ServerAction") || (this._postKYCAccesstoken$ServerAction = function(n, e, t) {
                var s = this.controller;
                return r.Logger.startActiveSpan("PostKYCAccesstoken", function(i) {
                    return i && (i.setAttribute("code.function", "PostKYCAccesstoken"), i.setAttribute("outsystems.function.key", "33341751-eb96-41f0-9777-ad8e6398b87f"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        var m = {
                            Request: r.DataConversion.ServerDataConverter.to(n, r.DataTypes.DataTypes.Record),
                            authorization: r.DataConversion.ServerDataConverter.to(e, r.DataTypes.DataTypes.Text)
                        };
                        return s.callServerAction("PostKYCAccesstoken", "screenservices/uae/V2Flow/SubmitPOA/ActionPostKYCAccesstoken", "dih2ZjS5XfDX4SvAn7iJbA", m, s.callContext(t), void 0, void 0, !0).then(function(v) {
                            var o = new(s.constructor.getVariableGroupType("uae.V2Flow.SubmitPOA$ActionPostKYCAccesstoken"));
                            return o.responseOut = r.DataConversion.ServerDataConverter.from(v.Response, E), o
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 0)
            }), this._postKYCAccesstoken$ServerAction
        }
        set postKYCAccesstoken$ServerAction(n) {
            this._postKYCAccesstoken$ServerAction = n
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onPOACompleted$Action() {
            return this.hasOwnProperty("__onPOACompleted$Action") || (this.__onPOACompleted$Action = function(n) {
                var e = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnPOACompleted", function(i) {
                    i && (i.setAttribute("code.function", "OnPOACompleted"), i.setAttribute("outsystems.function.key", "104e074b-e4de-4922-8811-95ceb3422312"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnPOACompleted"), n = t.callContext(n), r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "verification-status", {
                            shouldShowPOA: r.DataConversion.ServerDataConverter.to(!0, r.DataTypes.DataTypes.Boolean),
                            shouldShowPOI: r.DataConversion.ServerDataConverter.to(!0, r.DataTypes.DataTypes.Boolean)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onPOACompleted$Action
        }
        set _onPOACompleted$Action(n) {
            this.__onPOACompleted$Action = n
        }
        get _onContinueClick$Action() {
            return this.hasOwnProperty("__onContinueClick$Action") || (this.__onContinueClick$Action = function(n) {
                var e = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnContinueClick", function(i) {
                    i && (i.setAttribute("code.function", "OnContinueClick"), i.setAttribute("outsystems.function.key", "517436e7-31b4-4833-97bc-874af27cdce7"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnContinueClick"), n = t.callContext(n), e.variables.is_submittingVar = !1, e.variables.stepVar = "poa"
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onContinueClick$Action
        }
        set _onContinueClick$Action(n) {
            this.__onContinueClick$Action = n
        }
        get _endMeBro$Action() {
            return this.hasOwnProperty("__endMeBro$Action") || (this.__endMeBro$Action = function(n) {
                var e = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("EndMeBro", function(i) {
                    return i && (i.setAttribute("code.function", "EndMeBro"), i.setAttribute("outsystems.function.key", "809e38c8-43f7-4581-937a-19b3d88568bc"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("EndMeBro"), n = t.callContext(n);
                        var m = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return v.value = P.getAuth$Action(n), e.flush(), t.postKYCAccesstoken$ServerAction((function() {
                                var o = new L;
                                return o.flowAttr = "poa", o
                            })(), v.value.tokenOut, n).then(function(o) {
                                m.value = o
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__endMeBro$Action
        }
        set _endMeBro$Action(n) {
            this.__endMeBro$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var e = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "8e204c62-153f-4ab3-9b3e-e7440d658503"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), n = t.callContext(n);
                        var m = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder,
                            o = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return v.value = P.getAuth$Action(n), e.flush(), t.postKYCAccesstoken$ServerAction((function() {
                                var f = new L;
                                return f.flowAttr = "poa", f
                            })(), v.value.tokenOut, n).then(function(f) {
                                m.value = f
                            }).then(function() {
                                o.value.jSONOut = r.JSONUtils.serializeToJSON(m.value.responseOut.dataAttr.getCurrent(n.iterationContext), !1, !1)
                            }).then(function() {
                                S.getenableUSkycFlow() ? r.Logger.startActiveSpan("LoadSumsubWebSDK2", function(f) {
                                    f && (f.setAttribute("code.function", "LoadSumsubWebSDK2"), f.setAttribute("outsystems.function.key", "faf34fe1-332a-433e-b422-5f93c9912604"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(U, "LoadSumsubWebSDK2", "OnReady", {
                                            lang: r.DataConversion.JSNodeParamConverter.to(S.getlanguage(), r.DataTypes.DataTypes.Text),
                                            response: r.DataConversion.JSNodeParamConverter.to(o.value.jSONOut, r.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {
                                            EndMeBro: t.clientActionProxies.endMeBro$Action,
                                            OnPOACompleted: t.clientActionProxies.onPOACompleted$Action,
                                            HandleOnBlockingStatus: t.clientActionProxies.handleOnBlockingStatus$Action,
                                            OnLoadingComplete: t.clientActionProxies.onLoadingComplete$Action
                                        }, {})
                                    } finally {
                                        f && f.end()
                                    }
                                }, 1) : r.Logger.startActiveSpan("LoadSumsubWebSDK3", function(f) {
                                    f && (f.setAttribute("code.function", "LoadSumsubWebSDK3"), f.setAttribute("outsystems.function.key", "93eb65a9-1076-4bc1-bb55-1cb481a761c9"), f.setAttribute("outsystems.function.owner.name", "uae"), f.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(K, "LoadSumsubWebSDK3", "OnReady", {
                                            lang: r.DataConversion.JSNodeParamConverter.to(S.getlanguage(), r.DataTypes.DataTypes.Text),
                                            response: r.DataConversion.JSNodeParamConverter.to(o.value.jSONOut, r.DataTypes.DataTypes.Text)
                                        }, function(d) {}, {
                                            EndMeBro: t.clientActionProxies.endMeBro$Action,
                                            OnPOACompleted: t.clientActionProxies.onPOACompleted$Action,
                                            HandleOnBlockingStatus: t.clientActionProxies.handleOnBlockingStatus$Action,
                                            OnLoadingComplete: t.clientActionProxies.onLoadingComplete$Action
                                        }, {})
                                    } finally {
                                        f && f.end()
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
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _handleOnBlockingStatus$Action() {
            return this.hasOwnProperty("__handleOnBlockingStatus$Action") || (this.__handleOnBlockingStatus$Action = function(n, e) {
                var t = this.model,
                    s = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("HandleOnBlockingStatus", function(m) {
                    m && (m.setAttribute("code.function", "HandleOnBlockingStatus"), m.setAttribute("outsystems.function.key", "9ae7cff4-4923-4d47-b0b1-413601110f88"), m.setAttribute("outsystems.function.owner.name", "uae"), m.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("HandleOnBlockingStatus"), e = s.callContext(e);
                        var v = new r.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("uae.V2Flow.SubmitPOA.HandleOnBlockingStatus$vars")));
                        return v.value.typeInLocal = n, P.consoleLog$Action("type" + v.value.typeInLocal, e), S.getenableUSkycFlow() && v.value.typeInLocal === "region_blocked" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "kyc-status", {
                            type: r.DataConversion.ServerDataConverter.to("poa", r.DataTypes.DataTypes.Text),
                            status: r.DataConversion.ServerDataConverter.to("region_blocked", r.DataTypes.DataTypes.Text)
                        }), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : (v.value.typeInLocal === "rejected" || v.value.typeInLocal === "pending") && S.getkyc_flow_from() !== "banner_add_funds" && S.getkyc_flow_from() !== "trade" && S.getkyc_flow_from() !== "wallet" && S.getkyc_flow_from() !== "profile" ? r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "kyc-status", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0) : r.Navigation.navigateTo(r.Navigation.generateScreenURL("uae", "kyc-inprogress", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__handleOnBlockingStatus$Action
        }
        set _handleOnBlockingStatus$Action(n) {
            this.__handleOnBlockingStatus$Action = n
        }
        get _onLoadingComplete$Action() {
            return this.hasOwnProperty("__onLoadingComplete$Action") || (this.__onLoadingComplete$Action = function(n) {
                var e = this.model,
                    t = this.controller,
                    s = this.idService;
                return r.Logger.startActiveSpan("OnLoadingComplete", function(i) {
                    i && (i.setAttribute("code.function", "OnLoadingComplete"), i.setAttribute("outsystems.function.key", "a4e276b2-c634-43fb-9197-60e704236650"), i.setAttribute("outsystems.function.owner.name", "uae"), i.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnLoadingComplete"), n = t.callContext(n), e.variables.is_loadingVar = !1
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onLoadingComplete$Action
        }
        set _onLoadingComplete$Action(n) {
            this.__onLoadingComplete$Action = n
        }
        onPOACompleted$Action(n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnPOACompleted__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnPOACompleted"), t.setAttribute("outsystems.function.key", "104e074b-e4de-4922-8811-95ceb3422312"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onPOACompleted$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onContinueClick$Action(n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnContinueClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnContinueClick"), t.setAttribute("outsystems.function.key", "517436e7-31b4-4833-97bc-874af27cdce7"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onContinueClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        endMeBro$Action(n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("EndMeBro__proxy", function(t) {
                return t && (t.setAttribute("code.function", "EndMeBro"), t.setAttribute("outsystems.function.key", "809e38c8-43f7-4581-937a-19b3d88568bc"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._endMeBro$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "8e204c62-153f-4ab3-9b3e-e7440d658503"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onReady$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        handleOnBlockingStatus$Action(n, e) {
            var t = this.controller;
            return r.Logger.startActiveSpan("HandleOnBlockingStatus__proxy", function(s) {
                s && (s.setAttribute("code.function", "HandleOnBlockingStatus"), s.setAttribute("outsystems.function.key", "9ae7cff4-4923-4d47-b0b1-413601110f88"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._handleOnBlockingStatus$Action, e, n)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        onLoadingComplete$Action(n) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnLoadingComplete__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnLoadingComplete"), t.setAttribute("outsystems.function.key", "a4e276b2-c634-43fb-9197-60e704236650"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onLoadingComplete$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var e = this.controller,
                    t = this.model,
                    s = this.idService;
                return e.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(n) {
            this._onDestroyEventHandler = n
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(n) {
            this._onParametersChangedEventHandler = n
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(n) {
            this._onSyncStartEventHandler = n
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(n) {
            this._onSyncCompleteEventHandler = n
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(n) {
            this._onSyncErrorEventHandler = n
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(n) {
                return M.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return P.defaultTimeout
        }
    };
    c(g, "ControllerInner");
    let b = g;
    T = b, T.registerVariableGroupType("uae.V2Flow.SubmitPOA$ActionPostKYCAccesstoken", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new E
        }, "defaultValue"),
        complexType: E
    }]), T.registerVariableGroupType("uae.V2Flow.SubmitPOA.HandleOnBlockingStatus$vars", [{
        name: "type",
        attrName: "typeInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, J = new r.Controller.ControllerFactory(T, Q);
var a = ue(fe());
var C = O,
    z = class z extends C.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("step", "stepVar", "step", !0, !1, C.DataTypes.DataTypes.Text, function() {
                return "confirm_details"
            }, !1), this.attr("is_submitting", "is_submittingVar", "is_submitting", !0, !1, C.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1)].concat(C.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(z, "VariablesRecord");
var k = z;
k.init();
var j = class j extends C.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(j, "WidgetsRecord");
var G = j,
    A = class A extends C.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return G
        }
        static get hasValidationWidgets() {
            return A._hasValidationWidgetsValue === void 0 && (A._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0), A._hasValidationWidgetsValue
        }
        setInputs(g) {}
    };
c(A, "Model");
var V = A;
V._hasValidationWidgetsValue = void 0;
var Y = new C.Model.ModelFactory(V);
var w = W.PlaceholderContent,
    Xe = W.IteratorPlaceholderContent,
    ge = c(function() {
        var b = ee(function(g) {
            var l = g.model,
                n = g.controller,
                e = g.controller.idService,
                t = n.validationService,
                s = n.callContext(),
                i = ie,
                m = N,
                v = {
                    props: g,
                    validateWidget: c(function(_) {
                        g.validateWidget(g, _)
                    }, "validateWidget")
                },
                o = l,
                f = ne,
                d = te,
                p = X();
            return a.createElement("div", g.rootNodeProperties, a.createElement(F, {
                getOwnerSpan: c(function() {
                    return p.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return p.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    BtnSkipVisible: !1,
                    BtnCloseVisible: l.getCachedValue(e.getId("8dUF2VF3H0ePLBT1h1GGzQ.BtnCloseVisible"), function() {
                        return l.variables.stepVar !== "poa"
                    }, function() {
                        return l.variables.stepVar
                    }),
                    BtnBackVisible: !1,
                    SubHeading2: l.getCachedValue(e.getId("8dUF2VF3H0ePLBT1h1GGzQ.SubHeading2"), function() {
                        return l.variables.stepVar === "poa" ? "" : "Verify your address by submitting one of the following documents"
                    }, function() {
                        return l.variables.stepVar
                    }),
                    Heading: l.getCachedValue(e.getId("8dUF2VF3H0ePLBT1h1GGzQ.Heading"), function() {
                        return l.variables.stepVar === "poa" ? "" : "Submit your proof of address"
                    }, function() {
                        return l.variables.stepVar
                    })
                },
                events: {
                    _handleError: c(function(_) {
                        n.handleError(_)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new w(function() {
                        return [a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: l.getCachedValue(e.getId("POAWidget.Style"), function() {
                                return l.variables.stepVar === "poa" ? "" : "hidden"
                            }, function() {
                                return l.variables.stepVar
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "POAWidget"
                            },
                            _widgetRecordProvider: o
                        }, f(q.isDesktop$Action(s).isDesktopOut, !1, this, function() {
                            return [a.createElement(B, {
                                getOwnerSpan: c(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: c(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    ShowClosebutton: !0,
                                    ShowBackbutton: !0
                                },
                                events: {
                                    _handleError: c(function(_) {
                                        n.handleError(_)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "3",
                                    alias: "2"
                                },
                                _widgetRecordProvider: o,
                                placeholders: {
                                    contentbody: new w(function() {
                                        return [a.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; border-radius: 16px; color: rgb(249, 250, 251); display: flex; justify-content: center; min-height: 648px;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: o
                                        }, a.createElement(x, {
                                            getOwnerSpan: c(function() {
                                                return p.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: c(function() {
                                                return p.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                show: l.variables.is_loadingVar || l.variables.is_submittingVar
                                            },
                                            events: {
                                                _handleError: c(function(_) {
                                                    n.handleError(_)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: t
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "5",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: o,
                                            _dependencies: []
                                        }), a.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                target: "sumsub-websdk-container-poa",
                                                style: "height: 100%;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline ThemeGrid_MarginGutter",
                                                width: "100%"
                                            },
                                            style: l.getCachedValue(e.getId("SumsubSDKContainer.Style"), function() {
                                                return !l.variables.is_loadingVar && !l.variables.is_submittingVar ? "visible" : "hidden"
                                            }, function() {
                                                return l.variables.is_loadingVar
                                            }, function() {
                                                return l.variables.is_submittingVar
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "SumsubSDKContainer"
                                            },
                                            _widgetRecordProvider: o
                                        }))]
                                    })
                                },
                                _dependencies: [i(l.variables.is_submittingVar), i(l.variables.is_loadingVar)]
                            })]
                        }, function() {
                            return [a.createElement(I, {
                                getOwnerSpan: c(function() {
                                    return p.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: c(function() {
                                    return p.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    hasActionLeftButton: !0,
                                    has_back_button: !0,
                                    has_close_icon: !0
                                },
                                events: {
                                    _handleError: c(function(_) {
                                        n.handleError(_)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: t
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "7",
                                    alias: "4"
                                },
                                _widgetRecordProvider: o,
                                placeholders: {
                                    content: new w(function() {
                                        return [a.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; border-radius: 16px; color: rgb(249, 250, 251); display: flex; justify-content: center; min-height: 648px;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: o
                                        }, a.createElement(x, {
                                            getOwnerSpan: c(function() {
                                                return p.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: c(function() {
                                                return p.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                show: l.variables.is_loadingVar || l.variables.is_submittingVar
                                            },
                                            events: {
                                                _handleError: c(function(_) {
                                                    n.handleError(_)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: t
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "9",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: o,
                                            _dependencies: []
                                        }), a.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                target: "sumsub-websdk-container-poa",
                                                style: "height: 100%;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            style: l.getCachedValue(e.getId("SumsubSDKContainer2.Style"), function() {
                                                return !l.variables.is_loadingVar && !l.variables.is_submittingVar ? "visible" : "hidden"
                                            }, function() {
                                                return l.variables.is_loadingVar
                                            }, function() {
                                                return l.variables.is_submittingVar
                                            }),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "SumsubSDKContainer2"
                                            },
                                            _widgetRecordProvider: o
                                        }))]
                                    }),
                                    footer: w.Empty
                                },
                                _dependencies: [i(l.variables.is_submittingVar), i(l.variables.is_loadingVar)]
                            })]
                        })), a.createElement(u, {
                            align: 0,
                            animate: !0,
                            style: "display-flex flex-direction-column gap-m",
                            visible: l.variables.stepVar !== "poa",
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-start; align-self: stretch; background: rgba(44, 154, 255, 0.08); border-radius: 16px; display: flex; gap: 8px; margin-bottom: 16px; padding: 16px;"
                            },
                            style: "padding-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement($, {
                            getOwnerSpan: c(function() {
                                return p.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return p.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12.0742 5.5C9.73047 5.5 7.60547 6.75 6.41797 8.75C5.26172 10.7812 5.26172 13.25 6.41797 15.25C7.60547 17.2812 9.73047 18.5 12.0742 18.5C14.3867 18.5 16.5117 17.2812 17.6992 15.25C18.8555 13.25 18.8555 10.7812 17.6992 8.75C16.5117 6.75 14.3867 5.5 12.0742 5.5ZM12.0742 20C9.19922 20 6.57422 18.5 5.13672 16C3.69922 13.5312 3.69922 10.5 5.13672 8C6.57422 5.53125 9.19922 4 12.0742 4C14.918 4 17.543 5.53125 18.9805 8C20.418 10.5 20.418 13.5312 18.9805 16C17.543 18.5 14.918 20 12.0742 20ZM10.8242 14.5H11.5742V12.5H10.8242C10.3867 12.5 10.0742 12.1875 10.0742 11.75C10.0742 11.3438 10.3867 11 10.8242 11H12.3242C12.7305 11 13.0742 11.3438 13.0742 11.75V14.5H13.3242C13.7305 14.5 14.0742 14.8438 14.0742 15.25C14.0742 15.6875 13.7305 16 13.3242 16H10.8242C10.3867 16 10.0742 15.6875 10.0742 15.25C10.0742 14.8438 10.3867 14.5 10.8242 14.5ZM12.0742 10C11.5117 10 11.0742 9.5625 11.0742 9C11.0742 8.46875 11.5117 8 12.0742 8C12.6055 8 13.0742 8.46875 13.0742 9C13.0742 9.5625 12.6055 10 12.0742 10Z' fill='#0777C4'/>\r
</svg>`
                            },
                            events: {
                                _handleError: c(function(_) {
                                    n.handleError(_)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "6"
                            },
                            _widgetRecordProvider: o,
                            _dependencies: []
                        }), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-block flex-direction-row w-full",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(R, {
                            value: "Your document must be dated within the last ",
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: o
                        }), a.createElement(R, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            gridProperties: {
                                marginLeft: "0px !important"
                            },
                            value: "3 months ",
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: o
                        }), a.createElement(R, {
                            gridProperties: {
                                marginLeft: "0px !important"
                            },
                            value: "and clearly shows your full name and the issue date.",
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: o
                        }))), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 8px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AcceptedDocuments2"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-flex gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Title3"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(H, {
                            image: D.VersionedURL.getVersionedUrl("img/uae.circlechecksm.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: o
                        }), a.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700;"
                            },
                            text: ["We accept"],
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex-wrap: wrap; gap: 8px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Bank statement"],
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Utility bill"],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Home purchase deed"],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Internet/TV bill/house phone bill"],
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Mortgage statement"],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Rent bill from a real estate agency"],
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Employer's letter"],
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Tenancy contract/lease agreement"],
                            _idProps: {
                                service: e,
                                uuid: "38"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Government-issued certifications"],
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: o
                        })))), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 8px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "NotAcceptedDocuments2"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "display-flex gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Title4"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(H, {
                            image: D.VersionedURL.getVersionedUrl("img/uae.circlexmarksm.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "43"
                            },
                            _widgetRecordProvider: o
                        }), a.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: 700;"
                            },
                            text: ["We don't accept"],
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex-wrap: wrap; gap: 8px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Mobile phone bill"],
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Medical invoice"],
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Receipt"],
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Insurance statement"],
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(u, {
                            align: 0,
                            animate: !1,
                            style: "tags_os",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(y, {
                            style: "tags_text",
                            text: ["Cropped documents"],
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: o
                        }))))))]
                    }),
                    buttonContainer: new w(function() {
                        return [a.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: flex-end; display: flex; flex-direction: column;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(re, {
                            enabled: !0,
                            extendedProperties: {
                                style: "background: var(--component-button-bg-coral-primary-default, #FF444F); border-radius: var(--component-button-border-radius-lg, 24px); height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            isDefault: !1,
                            onClick: c(function() {
                                var _ = typeof s != "undefined" && s !== null ? s.clone() : n.callContext().clone();
                                n.onContinueClick$Action(n.callContext(_))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: l.variables.stepVar !== "poa",
                            _idProps: {
                                service: e,
                                name: "Continue2"
                            },
                            _widgetRecordProvider: o
                        }, "Continue"))]
                    })
                },
                _dependencies: [i(l.variables.is_submittingVar), i(l.variables.is_loadingVar), i(l.variables.stepVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: c(function() {
                return {
                    codeFunction: "SubmitPOA",
                    functionKey: "92fa4fea-356f-401c-95ac-85fd27b678ab",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "V2Flow.SubmitPOA",
            modelFactory: Y,
            controllerFactory: J,
            getTitle: c(function() {
                return N("6k_6km81HECVrIX9J7Z4qw#Title", "SubmitPOA")
            }, "getTitle")
        });
        return b.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.V2Flow.SubmitPOA.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, b.getJsDependencies = function() {
            return []
        }, b.getBlocks = function() {
            return [F, B, x, I, $]
        }, b
    }, "componentFactory"),
    me = ge();
export {
    J as controllerModule, Y as modelModule, me as viewModule, M as webFlowControllerModule
};