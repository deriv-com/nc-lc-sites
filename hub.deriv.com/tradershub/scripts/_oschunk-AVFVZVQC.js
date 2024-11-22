import {
    a as ce,
    b as de,
    c as ue,
    d as me
} from "./_oschunk-PP376XGC.js";
import {
    a as le
} from "./_oschunk-BHZNFATE.js";
import {
    a as M,
    b as W,
    c as ne,
    d as j,
    e as ie,
    h as f,
    j as D,
    r as P,
    t as oe,
    u as ae,
    v as se,
    w as B,
    y as I
} from "./_oschunk-HUOHOHZB.js";
import {
    a as N
} from "./_oschunk-Y45M2O2K.js";
import {
    a as z,
    g as w,
    i as R
} from "./_oschunk-6LASTRK7.js";
import {
    a as A,
    c as re,
    d as $
} from "./_oschunk-27GDEXUT.js";
import {
    a as b
} from "./_oschunk-D2MH3QEK.js";
import {
    rd as x
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l,
    g as U
} from "./_oschunk-DVBKI63I.js";
var u = U(z());
var Pe = {
        "qZpPgIx_s0il9nH3dce2Eg#Value": "Excellent",
        "XqrcCv7Mk0SAM7Fkxikvnw#Value": "Notre client dit",
        "eoP8o9VVVUSXsa3ZtbZH5A#Value": "Commencez",
        "ChL_Y+QsQUaYtB962otG7Q#Value": "Rejoignez plus de 2,5 millions de traders"
    },
    fe = {
        "fr-FR": {
            translations: Pe,
            isRTL: !1
        }
    };
var O = y; {
    let s = class s extends O.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, fe);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                trustPilot$DataActRefresh: 0
            }, this.dataFetchDependentsGraph = {
                trustPilot$DataActRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get trustPilot$DataActRefresh() {
            return this.hasOwnProperty("_trustPilot$DataActRefresh") || (this._trustPilot$DataActRefresh = function() {
                var e = function(n) {
                    var t = this.model,
                        i = this.controller,
                        n = i.callContext(n);
                    return i.callDataAction("DataActionTrustPilot", "screenservices/tradershub/MainFlowBlocks/LoggedOutBanner/DataActionTrustPilot", "CSzIWZjEeCvW3TyFIxjWfw", function(a) {
                        t.variables.trustPilotDataAct.dataFetchStatusAttr = a
                    }, function(a) {
                        t.variables.trustPilotDataAct.replaceWith(O.DataConversion.ServerDataConverter.from(a, t.variables.trustPilotDataAct.constructor))
                    }, void 0, void 0, void 0, n, void 0, !0)
                }.bind(this);
                return O.Logger.startActiveSpan("TrustPilot", function(r) {
                    return r && (r.setAttribute("code.function", "TrustPilot"), r.setAttribute("outsystems.function.key", "8967933a-d26e-4e12-8962-6aac7447d4d2"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "SCREEN_SERVICE_DATA_ACTION_CALL")), O.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        r && r.end()
                    })
                }, 0)
            }), this._trustPilot$DataActRefresh
        }
        set trustPilot$DataActRefresh(e) {
            this._trustPilot$DataActRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["trustPilot$DataActRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _bannerOnClick$Action() {
            return this.hasOwnProperty("__bannerOnClick$Action") || (this.__bannerOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return O.Logger.startActiveSpan("BannerOnClick", function(n) {
                    n && (n.setAttribute("code.function", "BannerOnClick"), n.setAttribute("outsystems.function.key", "e1570476-7868-43f1-8ead-5fcd94490acb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("BannerOnClick"), e = t.callContext(e), O.Navigation.navigateTo(O.Navigation.generateScreenURL("https://" + A.getURL() + "/oauth2/authorize?app_id=" + A.getAppId() + "&l=" + A.getLang() + "&brand=deriv", {}), O.Transitions.createTransition(O.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__bannerOnClick$Action
        }
        set _bannerOnClick$Action(e) {
            this.__bannerOnClick$Action = e
        }
        bannerOnClick$Action(e) {
            var r = this.controller;
            return O.Logger.startActiveSpan("BannerOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "BannerOnClick"), t.setAttribute("outsystems.function.key", "e1570476-7868-43f1-8ead-5fcd94490acb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._bannerOnClick$Action, e)
                } finally {
                    t && t.end()
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
            return $.defaultTimeout
        }
    };
    l(s, "ControllerInner");
    let v = s;
    ge = v
}
var ge, he = new O.Controller.ControllerFactory(ge, N);
var p = U(z());
var pe = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u062A\u0642\u064A\u064A\u0645"
    },
    we = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Bewertung"
    },
    Ie = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Rating"
    },
    ke = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Calificaci\xF3n"
    },
    He = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\xC9valuation"
    },
    Te = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\xC9valuation"
    },
    Ve = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u0930\u0947\u091F\u093F\u0902\u0917"
    },
    $e = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Valutazione"
    },
    Ne = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u8A55\u4FA1"
    },
    De = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\uD3C9\uAC00"
    },
    xe = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Beoordeling"
    },
    Fe = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Avalia\xE7\xE3o"
    },
    Le = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "Avalia\xE7\xE3o"
    },
    Ue = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u8BC4\u7EA7"
    },
    ze = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u8BC4\u7EA7"
    },
    We = {
        "arVVe3kmtEySH2hfvXjAOw#Value": "\u8A55\u5206"
    },
    ye = {
        ar: {
            translations: pe,
            isRTL: !0
        },
        "de-DE": {
            translations: we,
            isRTL: !1
        },
        en: {
            translations: Ie,
            isRTL: !1
        },
        es: {
            translations: ke,
            isRTL: !1
        },
        "fr-CA": {
            translations: He,
            isRTL: !1
        },
        "fr-FR": {
            translations: Te,
            isRTL: !1
        },
        "hi-IN": {
            translations: Ve,
            isRTL: !1
        },
        "it-IT": {
            translations: $e,
            isRTL: !1
        },
        "ja-JP": {
            translations: Ne,
            isRTL: !1
        },
        "ko-KR": {
            translations: De,
            isRTL: !1
        },
        nl: {
            translations: xe,
            isRTL: !1
        },
        pt: {
            translations: Fe,
            isRTL: !1
        },
        "pt-BR": {
            translations: Le,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ue,
            isRTL: !1
        },
        "zh-Hans": {
            translations: ze,
            isRTL: !1
        },
        "zh-Hant": {
            translations: We,
            isRTL: !1
        }
    };

function G(v, s, d, e) {
    v.OnInitializedHandler = s.InitializedHandler, v.OnSelectHandler = s.OnSelectHandler
}
l(G, "default");
var o = y; {
    let s = class s extends o.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ye);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(n, o.DataTypes.DataTypes.Text)), i.callContext(), function(a) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onSelectHandler$Action: l(function(n, a) {
                    return n = n === void 0 ? "" : n, a = a === void 0 ? o.DataTypes.Decimal.defaultValue : a, i.executeActionInsideJSNode(i._onSelectHandler$Action.bind(i, o.DataConversion.JSNodeParamConverter.from(n, o.DataTypes.DataTypes.Text), o.DataConversion.JSNodeParamConverter.from(a, o.DataTypes.DataTypes.Decimal)), i.callContext(), function(c) {
                        return {}
                    }, function() {}, "OnSelectHandler")
                }, "onSelectHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("RegisterCallback", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "53539d73-b016-454d-a464-0d732018b34f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var a = new o.DataTypes.VariableHolder;
                        a.value = o.Logger.startActiveSpan("GetCallbackHandler", function(c) {
                            c && (c.setAttribute("code.function", "GetCallbackHandler"), c.setAttribute("outsystems.function.key", "c0543a17-2259-43a9-a309-929c7db1184e"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object),
                                    OnSelectHandler: o.DataConversion.JSNodeParamConverter.to(null, o.DataTypes.DataTypes.Object)
                                }, function(m) {
                                    var S = new(t.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.RegisterCallback$getCallbackHandlerJSResult"));
                                    return S.onInitializedHandlerOut = o.DataConversion.JSNodeParamConverter.from(m.OnInitializedHandler, o.DataTypes.DataTypes.Object), S.onSelectHandlerOut = o.DataConversion.JSNodeParamConverter.from(m.OnSelectHandler, o.DataTypes.DataTypes.Object), S
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnSelectHandler: t.clientActionProxies.onSelectHandler$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), b.ratingRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, x.registeredCallbackEvents.initialized, a.value.onInitializedHandlerOut, e), b.ratingRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, x.registeredCallbackEvents.onSelected, a.value.onSelectHandlerOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "7d3cd0a9-811e-4b40-abb4-14445aa1b8cb"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var a = new o.DataTypes.VariableHolder,
                            c = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType);
                        b.logEvent$Action(x.logType.general, "Going to create Rating", e), a.value = b.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = a.value.unique_IDOut, r.variables.internalConfigsVar.ratingScaleAttr = r.variables.ratingScaleIn, r.variables.internalConfigsVar.ratingValueAttr = r.variables.ratingValueIn, r.variables.internalConfigsVar.isEditAttr = r.variables.isEditIn, r.variables.internalConfigsVar.sizeAttr = r.variables.sizeIn, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, c.value.jSONOut = o.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), b.ratingCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, c.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onSelectHandler$Action() {
            return this.hasOwnProperty("__onSelectHandler$Action") || (this.__onSelectHandler$Action = function(e, r, t) {
                var i = this.model,
                    n = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("OnSelectHandler", function(c) {
                    return c && (c.setAttribute("code.function", "OnSelectHandler"), c.setAttribute("outsystems.function.key", "87ba2f83-4e3a-4783-a105-7760ab2b2494"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSelectHandler"), t = n.callContext(t);
                        var m = new o.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.OnSelectHandler$vars")));
                        return m.value.ratingIdInLocal = e, m.value.valueInLocal = r, o.Flow.executeAsyncFlow(function() {
                            return i.variables.internalConfigsVar.ratingValueAttr = m.value.valueInLocal, n.onSelect$Action(m.value.ratingIdInLocal, m.value.valueInLocal, t)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__onSelectHandler$Action
        }
        set _onSelectHandler$Action(e) {
            this.__onSelectHandler$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ab94f8d0-5183-4712-b3a4-7ea43e9f7ff1"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), b.ratingInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), b.logEvent$Action(x.logType.general, "Rating created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "b9b4e5d8-29df-4329-97ad-34959b7ca41f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), b.ratingDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "c6ee0d8b-03f8-4b01-b1e6-ad85f935a1bd"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.ratingScaleIn > 0 && r.variables.ratingScaleIn !== r.variables.internalConfigsVar.ratingScaleAttr && (r.variables.internalConfigsVar.ratingScaleAttr = r.variables.ratingScaleIn, b.ratingChangeRatingScale$Action(r.variables.internalConfigsVar.uniqueIdAttr, r.variables.internalConfigsVar.ratingScaleAttr, e)), o.BuiltinFunctions.decimalToText(r.variables.ratingValueIn) !== o.BuiltinFunctions.decimalToText(r.variables.internalConfigsVar.ratingValueAttr) && (r.variables.internalConfigsVar.ratingValueAttr = r.variables.ratingValueIn, b.ratingChangeRatingValue$Action(r.variables.internalConfigsVar.uniqueIdAttr, r.variables.internalConfigsVar.ratingValueAttr, e)), r.variables.isEditIn !== r.variables.internalConfigsVar.isEditAttr && (r.variables.internalConfigsVar.isEditAttr = r.variables.isEditIn, b.ratingChangeIsEdit$Action(r.variables.internalConfigsVar.uniqueIdAttr, r.variables.internalConfigsVar.isEditAttr, e)), r.variables.sizeIn !== r.variables.internalConfigsVar.sizeAttr && (r.variables.internalConfigsVar.sizeAttr = r.variables.sizeIn, b.ratingChangeSize$Action(r.variables.internalConfigsVar.uniqueIdAttr, r.variables.internalConfigsVar.sizeAttr, e)), r.variables.extendedClassIn !== r.variables.internalConfigsVar.extendedClassAttr && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, b.ratingChangeExtendedClass$Action(r.variables.internalConfigsVar.uniqueIdAttr, r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return o.Logger.startActiveSpan("InitializedHandler", function(a) {
                    return a && (a.setAttribute("code.function", "InitializedHandler"), a.setAttribute("outsystems.function.key", "e0c56d54-1695-4da9-bde8-73653b4fbf5e"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var c = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Numbers.Rating.InitializedHandler$vars")));
                        return c.value.ratingIdInLocal = e, o.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(c.value.ratingIdInLocal, r)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        registerCallback$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "53539d73-b016-454d-a464-0d732018b34f"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "7d3cd0a9-811e-4b40-abb4-14445aa1b8cb"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectHandler$Action(e, r, t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnSelectHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSelectHandler"), n.setAttribute("outsystems.function.key", "87ba2f83-4e3a-4783-a105-7760ab2b2494"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onSelectHandler$Action, t, e, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ab94f8d0-5183-4712-b3a4-7ea43e9f7ff1"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "b9b4e5d8-29df-4329-97ad-34959b7ca41f"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "c6ee0d8b-03f8-4b01-b1e6-ad85f935a1bd"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return o.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "e0c56d54-1695-4da9-bde8-73653b4fbf5e"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        get onSelect$Action() {
            return this.hasOwnProperty("_onSelect$Action") || (this._onSelect$Action = function() {
                return Promise.resolve()
            }), this._onSelect$Action
        }
        set onSelect$Action(e) {
            this._onSelect$Action = e
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onReady$Action(e)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    i = this.idService;
                return r.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
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
            return b.defaultTimeout
        }
    };
    l(s, "ControllerInner");
    let v = s;
    F = v, F.registerVariableGroupType("OutSystemsUI.Numbers.Rating.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnSelectHandler",
        attrName: "onSelectHandlerOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }]), F.registerVariableGroupType("OutSystemsUI.Numbers.Rating.OnSelectHandler$vars", [{
        name: "RatingId",
        attrName: "ratingIdInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Value",
        attrName: "valueInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Decimal,
        defaultValue: l(function() {
            return o.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }]), F.registerVariableGroupType("OutSystemsUI.Numbers.Rating.InitializedHandler$vars", [{
        name: "RatingId",
        attrName: "ratingIdInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var F, be = new o.Controller.ControllerFactory(F, le);
var mt = R.PlaceholderContent,
    ft = R.IteratorPlaceholderContent,
    k = class k extends w.BaseWebBlock {
        static get displayName() {
            return "Numbers.Rating"
        }
        static getAttributes() {
            return {
                codeFunction: "Rating",
                functionKey: "5b620d10-93dc-4232-8db0-79fbc4bf83b9",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ce
        }
        get controllerFactory() {
            return be
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                n = k.ifWidget,
                a = k.textWidget,
                c = k.asPrimitiveValue,
                m = k.getTranslation,
                S = this;
            return p.createElement("div", this.getRootNodeProperties(), p.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: s.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "rating",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Rating"
                },
                _widgetRecordProvider: t
            }, p.createElement(M, {
                tag: "fieldset",
                _idProps: {
                    service: e,
                    name: "Fieldset"
                },
                _widgetRecordProvider: t
            }, p.createElement(M, {
                extendedProperties: {
                    className: "wcag-hide-text"
                },
                tag: "legend",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, a(m("arVVe3kmtEySH2hfvXjAOw#Value", "Rating"))), p.createElement(f, {
                align: 0,
                animate: !1,
                style: "icon-states",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconSates"
                },
                _widgetRecordProvider: t
            }, p.createElement(B, {
                align: 0,
                content: S.props.placeholders.filledState,
                style: "rating-item-filled",
                _idProps: {
                    service: e,
                    name: "FilledState"
                },
                _widgetRecordProvider: t
            }), n(!1, !1, this, function() {
                return []
            }, function() {
                return [p.createElement(B, {
                    align: 0,
                    content: S.props.placeholders.halfState,
                    style: "rating-item-half",
                    _idProps: {
                        service: e,
                        name: "HalfState"
                    },
                    _widgetRecordProvider: t
                }), p.createElement(B, {
                    align: 0,
                    content: S.props.placeholders.emptyState,
                    style: "rating-item-empty",
                    _idProps: {
                        service: e,
                        name: "EmptyState"
                    },
                    _widgetRecordProvider: t
                })]
            })))))
        }
    };
l(k, "View");
var J = k,
    K = J;
var _ = y,
    Q = R.PlaceholderContent,
    St = R.IteratorPlaceholderContent,
    H = class H extends w.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.LoggedOutBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "LoggedOutBanner",
                functionKey: "1dce0a0a-5e93-4c2f-a406-be2d0f5dd393",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.LoggedOutBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [K]
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                n = H.ifWidget,
                a = H.textWidget,
                c = H.asPrimitiveValue,
                m = H.getTranslation,
                S = this;
            return u.createElement("div", this.getRootNodeProperties(), n(A.getAuthToken() !== _.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return []
            }, function() {
                return [u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "banner-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Container"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: l(function() {
                            var h = i.clone();
                            d.bannerOnClick$Action(d.callContext(h))
                        }, "onClick")
                    },
                    style: "banner",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Banner"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "banner-content",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BannerContent"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(I, {
                    style: "banner-title",
                    text: [a(m("ChL_Y+QsQUaYtB962otG7Q#Value", "Join over 2.5 million traders"))],
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }), u.createElement(W, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: l(function() {
                        var h = i.clone();
                        d.bannerOnClick$Action(d.callContext(h))
                    }, "onClick"),
                    style: "get-started-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, a(m("eoP8o9VVVUSXsa3ZtbZH5A#Value", "Get started")))), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "hide-mobile",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ImageContainerDesktop"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(P, {
                    image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LoggedOutBannerCoinsDesktop.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                })), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "banner-img-responsive",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ImageContainerResponsive"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(P, {
                    image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LoggedOutBannerCoinsResponsive.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }))), u.createElement(ae, {
                    enabled: !0,
                    extendedProperties: {
                        target: "_blank",
                        style: "text-decoration: none;"
                    },
                    transition: _.Transitions.createTransition(_.Transitions.TransitionAnimation.Default),
                    url: _.Navigation.generateScreenURL("https://www.trustpilot.com/review/deriv.com", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "TrustpilotLink"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "trustpilot",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(I, {
                    style: "hide-mobile",
                    text: [a(m("XqrcCv7Mk0SAM7Fkxikvnw#Value", "Our customer say"))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin: 0 24px;"
                    },
                    style: "hide-mobile",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Excellent"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(I, {
                    extendedProperties: {
                        style: "font-weight: bold;"
                    },
                    text: [a(m("qZpPgIx_s0il9nH3dce2Eg#Value", "Excellent"))],
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "RatingContainer"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(K, {
                    getOwnerSpan: l(function() {
                        return S.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return S.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        RatingValue: s.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.starsAttr,
                        _ratingValueInDataFetchStatus: _.Model.calculateDataFetchStatus(s.variables.trustPilotDataAct.dataFetchStatusAttr)
                    },
                    events: {
                        _handleError: l(function(h) {
                            d.handleError(h)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "15",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        filledState: new Q(function() {
                            return [u.createElement(P, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_star.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            })]
                        }),
                        halfState: new Q(function() {
                            return [u.createElement(P, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_half_star.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: t
                            })]
                        }),
                        emptyState: new Q(function() {
                            return [u.createElement(P, {
                                image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot_start_empty.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: t
                            })]
                        })
                    },
                    _dependencies: []
                })), u.createElement(f, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin: 0 24px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "hide-mobile",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(D, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    value: s.getCachedValue(e.getId("a8pnSUb5+kmNBQ5rSTWnAw.Value"), function() {
                        return _.BuiltinFunctions.formatDecimal(s.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr, 2, ".", ",") + " out of 5 based on " + _.BuiltinFunctions.formatDecimal(_.BuiltinFunctions.longIntegerToDecimal(s.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr), 0, ",", ",") + " reviews"
                    }, function() {
                        return s.variables.trustPilotDataAct.trustPilotOutputOut.scoreAttr.trustScoreAttr
                    }, function() {
                        return s.variables.trustPilotDataAct.trustPilotOutputOut.numberOfReviewsAttr.totalAttr
                    }),
                    _idProps: {
                        service: e,
                        uuid: "20"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: _.Model.calculateDataFetchStatus(s.variables.trustPilotDataAct.dataFetchStatusAttr)
                })), u.createElement(P, {
                    image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.trustpilot.svg"),
                    style: "trustpilot-text",
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "21"
                    },
                    _widgetRecordProvider: t
                }))))]
            }))
        }
    };
l(H, "View");
var Z = H,
    Rt = Z;
var L = U(z());
var Be = {
        "ggfnr5HPPUCxE3D9mz+sbw#Value": "R\xE9el",
        "Iu0uTGMV2U+scsffftluAw#Value": "D\xE9mo"
    },
    _e = {
        "fr-FR": {
            translations: Be,
            isRTL: !1
        }
    };
var E = y; {
    let s = class s extends E.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, _e);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _realClick$Action() {
            return this.hasOwnProperty("__realClick$Action") || (this.__realClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return E.Logger.startActiveSpan("RealClick", function(n) {
                    return n && (n.setAttribute("code.function", "RealClick"), n.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RealClick"), e = t.callContext(e), E.Flow.executeAsyncFlow(function() {
                            return t.realClickEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__realClick$Action
        }
        set _realClick$Action(e) {
            this.__realClick$Action = e
        }
        get _demoClick$Action() {
            return this.hasOwnProperty("__demoClick$Action") || (this.__demoClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return E.Logger.startActiveSpan("DemoClick", function(n) {
                    return n && (n.setAttribute("code.function", "DemoClick"), n.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("DemoClick"), e = t.callContext(e), E.Flow.executeAsyncFlow(function() {
                            return t.demoClickEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__demoClick$Action
        }
        set _demoClick$Action(e) {
            this.__demoClick$Action = e
        }
        realClick$Action(e) {
            var r = this.controller;
            return E.Logger.startActiveSpan("RealClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RealClick"), t.setAttribute("outsystems.function.key", "bcc0d613-a6c1-4533-ac9e-b52fe59572a4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._realClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        demoClick$Action(e) {
            var r = this.controller;
            return E.Logger.startActiveSpan("DemoClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "DemoClick"), t.setAttribute("outsystems.function.key", "bcf439d6-84b8-4342-90bd-94f65263ab26"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._demoClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get demoClickEvent$Action() {
            return this.hasOwnProperty("_demoClickEvent$Action") || (this._demoClickEvent$Action = function() {
                return Promise.resolve()
            }), this._demoClickEvent$Action
        }
        set demoClickEvent$Action(e) {
            this._demoClickEvent$Action = e
        }
        get realClickEvent$Action() {
            return this.hasOwnProperty("_realClickEvent$Action") || (this._realClickEvent$Action = function() {
                return Promise.resolve()
            }), this._realClickEvent$Action
        }
        set realClickEvent$Action(e) {
            this._realClickEvent$Action = e
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
            return $.defaultTimeout
        }
    };
    l(s, "ControllerInner");
    let v = s;
    Ae = v
}
var Ae, Ce = new E.Controller.ControllerFactory(Ae, N);
var Se = y,
    Lt = R.PlaceholderContent,
    Ut = R.IteratorPlaceholderContent,
    T = class T extends w.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.RealDemoSwitcher"
        }
        static getAttributes() {
            return {
                codeFunction: "RealDemoSwitcher",
                functionKey: "ab7c8517-98d5-4615-b795-4a857fd3d6a4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.RealDemoSwitcher.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ue
        }
        get controllerFactory() {
            return Ce
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                n = T.ifWidget,
                a = T.textWidget,
                c = T.asPrimitiveValue,
                m = T.getTranslation,
                S = this;
            return L.createElement("div", this.getRootNodeProperties(), n(A.getAuthToken() !== Se.BuiltinFunctions.nullTextIdentifier(), !0, this, function() {
                return [L.createElement(ne, {
                    _validationProps: {
                        validationService: r
                    },
                    enabled: !0,
                    mandatory: !0,
                    style: "real-demo-switcher",
                    variable: s.createVariable(Se.DataTypes.DataTypes.Text, A.getAccountType(), function(h) {
                        A.setAccountType(h)
                    }),
                    _idProps: {
                        service: e,
                        name: "RealDemoSwitcher"
                    },
                    _widgetRecordProvider: t
                }, L.createElement(j, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var h = i.clone();
                                return d.demoClick$Action(d.callContext(h))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "demo",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "demo"
                    },
                    _widgetRecordProvider: t
                }, a(m("Iu0uTGMV2U+scsffftluAw#Value", "Demo"))), L.createElement(j, {
                    enabled: !0,
                    extendedEvents: {
                        onClick: l(function() {
                            return Promise.resolve().then(function() {
                                var h = i.clone();
                                return d.realClick$Action(d.callContext(h))
                            })
                        }, "onClick")
                    },
                    style: "real-demo-switcher-item",
                    value: "real",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "real"
                    },
                    _widgetRecordProvider: t
                }, a(m("ggfnr5HPPUCxE3D9mz+sbw#Value", "Real"))))]
            }, function() {
                return []
            }))
        }
    };
l(T, "View");
var Y = T,
    zt = Y;
var g = U(z());
var Me = {
        "+ueTxt0iAUm452+bk52Vpg#Value": "Proc\xE9der",
        "qGjnvT+9xUuk9yM3JkK5SA#Value": "Avertissement"
    },
    Re = {
        "fr-FR": {
            translations: Me,
            isRTL: !1
        }
    };
var C = y; {
    let s = class s extends C.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Re);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _triggerCloseEvent$Action() {
            return this.hasOwnProperty("__triggerCloseEvent$Action") || (this.__triggerCloseEvent$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("TriggerCloseEvent", function(n) {
                    return n && (n.setAttribute("code.function", "TriggerCloseEvent"), n.setAttribute("outsystems.function.key", "74c7e7bb-ca6f-420e-8702-dc2dc05d3440"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerCloseEvent"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
                            return t.onCloseClick$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__triggerCloseEvent$Action
        }
        set _triggerCloseEvent$Action(e) {
            this.__triggerCloseEvent$Action = e
        }
        get _derivComRedirection$Action() {
            return this.hasOwnProperty("__derivComRedirection$Action") || (this.__derivComRedirection$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("DerivComRedirection", function(n) {
                    n && (n.setAttribute("code.function", "DerivComRedirection"), n.setAttribute("outsystems.function.key", "f98a86ee-9b31-485b-9794-af1be9cdb7a4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DerivComRedirection"), e = t.callContext(e);
                        var a = new C.DataTypes.VariableHolder;
                        return a.value = re.getURL$Action(e), C.Navigation.navigateTo(C.Navigation.generateScreenURL(a.value.uRLsOut.derivComProductionAttr, {}), C.Transitions.createTransition(C.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__derivComRedirection$Action
        }
        set _derivComRedirection$Action(e) {
            this.__derivComRedirection$Action = e
        }
        triggerCloseEvent$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("TriggerCloseEvent__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerCloseEvent"), t.setAttribute("outsystems.function.key", "74c7e7bb-ca6f-420e-8702-dc2dc05d3440"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._triggerCloseEvent$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        derivComRedirection$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("DerivComRedirection__proxy", function(t) {
                t && (t.setAttribute("code.function", "DerivComRedirection"), t.setAttribute("outsystems.function.key", "f98a86ee-9b31-485b-9794-af1be9cdb7a4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._derivComRedirection$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onCloseClick$Action() {
            return this.hasOwnProperty("_onCloseClick$Action") || (this._onCloseClick$Action = function() {
                return Promise.resolve()
            }), this._onCloseClick$Action
        }
        set onCloseClick$Action(e) {
            this._onCloseClick$Action = e
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
            return $.defaultTimeout
        }
    };
    l(s, "ControllerInner");
    let v = s;
    Ee = v
}
var Ee, Oe = new C.Controller.ControllerFactory(Ee, N);
var ee = y,
    lr = R.PlaceholderContent,
    cr = R.IteratorPlaceholderContent,
    V = class V extends w.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.EmptyPlatformModal"
        }
        static getAttributes() {
            return {
                codeFunction: "EmptyPlatformModal",
                functionKey: "dc896ad6-cd1f-435c-b7c6-619c689b851f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.EmptyPlatformModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return Oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                d = this.controller,
                e = this.idService,
                r = d.validationService,
                t = this.widgetsRecordProvider,
                i = d.callContext(),
                n = V.ifWidget,
                a = V.textWidget,
                c = V.asPrimitiveValue,
                m = V.getTranslation,
                S = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(se, {
                extendedProperties: {
                    style: "padding: 0px; width: 368px;"
                },
                showPopup: s.variables.isVisibleIn,
                style: '"popup-dialog"',
                _idProps: {
                    service: e,
                    name: "EmptyPlatformModal"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: ee.Model.calculateDataFetchStatus(s.variables._isVisibleInDataFetchStatus)
            }, g.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "restricted-country-popup-dialog",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, g.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ModalHeader"
                },
                _widgetRecordProvider: t
            }, g.createElement(I, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                text: [a(m("qGjnvT+9xUuk9yM3JkK5SA#Value", "Warning"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), g.createElement(f, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: l(function() {
                        var h = i.clone();
                        d.derivComRedirection$Action(d.callContext(h))
                    }, "onClick")
                },
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, g.createElement(P, {
                image: ee.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }))), g.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin: 16px 0;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "content3"
                },
                _widgetRecordProvider: t
            }, g.createElement(D, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px;"
                },
                value: "According to our policy, we do not provide services to residents or entities based in " + A.getClientCountryText() + ".",
                _idProps: {
                    service: e,
                    name: "FirstParagraph3"
                },
                _widgetRecordProvider: t
            }), g.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SecondParagraph3"
                },
                _widgetRecordProvider: t
            }, g.createElement(D, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px;"
                },
                value: "If you are not a resident of " + A.getClientCountryText() + ", you may proceed.",
                _idProps: {
                    service: e,
                    name: "paragraph3"
                },
                _widgetRecordProvider: t
            }))), g.createElement(f, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center gap-s checkbox-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Checkbox2"
                },
                _widgetRecordProvider: t
            }, g.createElement(ie, {
                _validationProps: {
                    validationService: r
                },
                enabled: !0,
                style: "checkbox",
                variable: s.createVariable(ee.DataTypes.DataTypes.Boolean, s.variables.isNotResidentVar, function(h) {
                    s.variables.isNotResidentVar = h
                }),
                _idProps: {
                    service: e,
                    name: "CheckIcon2"
                },
                _widgetRecordProvider: t
            }), g.createElement(oe, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "cursor-pointer",
                targetWidget: "CheckIcon2",
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, g.createElement(D, {
                extendedProperties: {
                    style: "color: #272B30;"
                },
                value: "I confirm that I am not a resident of " + A.getClientCountryText() + ".",
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), g.createElement(W, {
                enabled: s.variables.isNotResidentVar,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var h = i.clone();
                        return d.triggerCloseEvent$Action(d.callContext(h))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }, g.createElement(I, {
                extendedProperties: {
                    style: "font-size: 14px;"
                },
                text: [a(m("+ueTxt0iAUm452+bk52Vpg#Value", "Proceed"))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
l(V, "View");
var te = V,
    dr = te;
export {
    Rt as a, zt as b, dr as c
};