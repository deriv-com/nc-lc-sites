import {
    a as ge,
    b as fe,
    c as ve,
    d as me
} from "./_oschunk-Z3EGUX6T.js";
import {
    a as j
} from "./_oschunk-NJYKWZYU.js";
import {
    a as z
} from "./_oschunk-BHZNFATE.js";
import {
    b as B,
    h as m,
    j as K,
    q as P,
    r as N,
    t as de,
    u as J,
    v as ue,
    w as I,
    y as b
} from "./_oschunk-HUOHOHZB.js";
import {
    a as le
} from "./_oschunk-Y45M2O2K.js";
import {
    a as U,
    g as k,
    i as O
} from "./_oschunk-6LASTRK7.js";
import {
    a as o,
    d as F
} from "./_oschunk-27GDEXUT.js";
import {
    a as C
} from "./_oschunk-D2MH3QEK.js";
import {
    a as u,
    rd as x
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as R
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as L
} from "./_oschunk-DVBKI63I.js";
var i = L(U());
var Ie = {
        "TGotkGwAd0mP+Rfg+z+ejQ#Value": "Aller \xE0 la d\xE9mo",
        "dfo3eZPJdEadIldymCRAug#Value": "Continuer la configuration",
        "NPlnceVpDk+tMW25I6omMA#Value": "Vous allez perdre vos progr\xE8s.",
        "wFdeBW5220eorYzALA2eOA#Value": "Configuration du profil de sortie",
        "QC5KEkHuP0mPcwxemuVquw#Value": "Conditions d'utilisation",
        "b02eW34UxUy49oPg8bFPnQ#Value": "D\xE9tails de l'adresse",
        "jbqd8r2bAUyUQKP5xMX6ig#Value": "D\xE9tails de l'emploi",
        "jeb1VJzeh0yPqx00dbXQrA#Value": "D\xE9tails personnels",
        "_Qh01L9OBEKB80B9xRVjsg#Value": "Devise du compte",
        "nInBD5tGTUORcqBs_93Upw#Value": "Conditions d'utilisation",
        "3r6CQujXqEy2bFPl3WH1kg#Value": "D\xE9tails de l'adresse",
        "s0Z9jyrWWUW+ye0A1K4jFg#Value": "D\xE9tails de l'adresse",
        "KDifqlY4KkmSKxDOKQqZTg#Value": "D\xE9tails de l'adresse",
        "pm61pFa7OkWW7AsLNva1vQ#Value": "D\xE9tails de l'emploi",
        "P45gzted7EuEZzqKFs2Fjg#Value": "D\xE9tails personnels",
        "1+XdSru5c06jRXS70xJrRA#Value": "Devise du compte",
        "GUwJJeampkGR2XUJyILgfw#Value": "Conditions d'utilisation",
        "gi313ljLuU6jS8TOtY5r2w#Value": "D\xE9tails de l'adresse",
        "vw6lScPcw0+Fmxkmet36Cg#Value": "D\xE9tails de l'emploi",
        "WnNWxB+9Qk6Fll_MJQySwg#Value": "V\xE9rification d'identit\xE9",
        "HSuugJpXv0yhQKBD_yZzRA#Value": "D\xE9tails personnels",
        "NFfRCmwYtkyXwItR0dgtAw#Value": "Devise du compte",
        "00Hg9JXhFU+VYKs5xFdaZg#Value": "Ajouter un compte r\xE9el"
    },
    pe = {
        "fr-FR": {
            translations: Ie,
            isRTL: !1
        }
    };

function G(S, a, g) {
    if (!window.flatpickr) {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css", document.head.appendChild(e)
    }
}
s(G, "default");

function q(S, a, g, e) {
    return new Promise(function(r, t) {
        cacheTrackEvents.track({
            name: "ce_real_account_signup_form",
            properties: {
                action: "close",
                step_num: Number(S.StepNumber),
                step_codename: S.StepCodename,
                form_name: "real_account_signup_form_outsystems"
            }
        }), r()
    })
}
s(q, "default");
var y = R; {
    let a = class a extends y.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, pe);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onCloseModal$Action() {
            return this.hasOwnProperty("__onCloseModal$Action") || (this.__onCloseModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("OnCloseModal", function(n) {
                    n && (n.setAttribute("code.function", "OnCloseModal"), n.setAttribute("outsystems.function.key", "3fa93052-da0f-4ec6-84c6-68bdc9fe298c"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnCloseModal"), e = t.callContext(e), r.variables.showCloseModalVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onCloseModal$Action
        }
        set _onCloseModal$Action(e) {
            this.__onCloseModal$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "61a8c98a-1ffb-4382-9765-e71faa59f643"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new y.DataTypes.VariableHolder;
                        c.value = C.scrollToElement$Action(l.getId("HeaderContainer"), !0, 0, r.variables.titleIn, 0, e), y.Logger.startActiveSpan("Flatpickr", function(v) {
                            v && (v.setAttribute("code.function", "Flatpickr"), v.setAttribute("outsystems.function.key", "92d30d69-810f-455a-b4c5-973528316133"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "Flatpickr", "OnReady", null, function(h) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1)
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
                    l = this.idService;
                return y.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "8e01303b-543f-4139-aed4-8049b3b0c73c"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _goToDemoOnClick$Action() {
            return this.hasOwnProperty("__goToDemoOnClick$Action") || (this.__goToDemoOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("GoToDemoOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "GoToDemoOnClick"), n.setAttribute("outsystems.function.key", "90bca2f7-c283-42a3-bc22-e018b7b45819"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), y.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("GoToDemoOnClick"), e = t.callContext(e), y.Flow.executeAsyncFlow(function() {
                            return y.Logger.startActiveSpan("RudderStack", function(c) {
                                c && (c.setAttribute("code.function", "RudderStack"), c.setAttribute("outsystems.function.key", "90b982d7-4bbd-4e22-94c6-0964d0ee3563"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(q, "RudderStack", "GoToDemoOnClick", {
                                        StepNumber: y.DataConversion.JSNodeParamConverter.to(r.variables.analyticsIn.stepNumberAttr, y.DataTypes.DataTypes.Text),
                                        StepCodename: y.DataConversion.JSNodeParamConverter.to(r.variables.analyticsIn.stepCodenameAttr, y.DataTypes.DataTypes.Text)
                                    }, function(v) {}, {}, {})
                                } finally {
                                    c && c.end()
                                }
                            }, 1).then(function() {
                                F.syncAccountInfo$Action(e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__goToDemoOnClick$Action
        }
        set _goToDemoOnClick$Action(e) {
            this.__goToDemoOnClick$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "91980ee4-5c5c-4cbb-b7ad-b52efdb573ff"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), r.variables.isLoadingVar = !0, o.getAuthToken() === y.BuiltinFunctions.nullTextIdentifier() || o.getActiveLoginId() === y.BuiltinFunctions.nullIdentifier().toString()) return y.Navigation.navigateTo(y.Navigation.generateScreenURL("https://app.deriv.com", {}), y.Transitions.createTransition(y.Transitions.TransitionAnimation.Default), e, !0);
                        y.BuiltinFunctions.index(o.getActiveLoginId(), "VRTC", 0, !1, !0) === -1 || !o.getInitializeRealSignup() ? F.syncAccountInfo$Action(e) : r.variables.isLoadingVar = !1
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onOpenModal$Action() {
            return this.hasOwnProperty("__onOpenModal$Action") || (this.__onOpenModal$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("OnOpenModal", function(n) {
                    n && (n.setAttribute("code.function", "OnOpenModal"), n.setAttribute("outsystems.function.key", "bc753c43-7c5e-4f8b-a20d-c61dcd7f55cb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnOpenModal"), e = t.callContext(e), r.variables.showCloseModalVar = !0
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onOpenModal$Action
        }
        set _onOpenModal$Action(e) {
            this.__onOpenModal$Action = e
        }
        get _previousScreen$Action() {
            return this.hasOwnProperty("__previousScreen$Action") || (this.__previousScreen$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return y.Logger.startActiveSpan("PreviousScreen", function(n) {
                    n && (n.setAttribute("code.function", "PreviousScreen"), n.setAttribute("outsystems.function.key", "d76b8eda-0191-4207-84af-7d33624c28ee"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("PreviousScreen"), e = t.callContext(e), y.Navigation.navigateBack(null, e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__previousScreen$Action
        }
        set _previousScreen$Action(e) {
            this.__previousScreen$Action = e
        }
        onCloseModal$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("OnCloseModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnCloseModal"), t.setAttribute("outsystems.function.key", "3fa93052-da0f-4ec6-84c6-68bdc9fe298c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onCloseModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "61a8c98a-1ffb-4382-9765-e71faa59f643"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "8e01303b-543f-4139-aed4-8049b3b0c73c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        goToDemoOnClick$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("GoToDemoOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "GoToDemoOnClick"), t.setAttribute("outsystems.function.key", "90bca2f7-c283-42a3-bc22-e018b7b45819"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), y.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._goToDemoOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "91980ee4-5c5c-4cbb-b7ad-b52efdb573ff"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onOpenModal$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("OnOpenModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnOpenModal"), t.setAttribute("outsystems.function.key", "bc753c43-7c5e-4f8b-a20d-c61dcd7f55cb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onOpenModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        previousScreen$Action(e) {
            var r = this.controller;
            return y.Logger.startActiveSpan("PreviousScreen__proxy", function(t) {
                t && (t.setAttribute("code.function", "PreviousScreen"), t.setAttribute("outsystems.function.key", "d76b8eda-0191-4207-84af-7d33624c28ee"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._previousScreen$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    l = this.idService;
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
                    l = this.idService;
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
                    l = this.idService;
                return r.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return F.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let S = a;
    ye = S
}
var ye, _e = new y.Controller.ControllerFactory(ye, le);
var X = L(U());
var he = {};
var Se = R; {
    let a = class a extends Se.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, he);
            var l = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return C.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let S = a;
    be = S
}
var be, Ce = new Se.Controller.ControllerFactory(be, z);
var xe = R,
    it = O.PlaceholderContent,
    ot = O.IteratorPlaceholderContent,
    T = class T extends k.BaseWebBlock {
        static get displayName() {
            return "Navigation.Wizard"
        }
        static getAttributes() {
            return {
                codeFunction: "Wizard",
                functionKey: "d77eab3d-b0dd-4236-8453-6d0a8c9a770f",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return ge
        }
        get controllerFactory() {
            return Ce
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                g = this.controller,
                e = this.idService,
                r = g.validationService,
                t = this.widgetsRecordProvider,
                l = g.callContext(),
                n = T.ifWidget,
                c = T.textWidget,
                v = T.asPrimitiveValue,
                h = T.getTranslation,
                f = this;
            return X.createElement("div", this.getRootNodeProperties(), X.createElement(I, {
                align: 0,
                content: f.props.placeholders.content,
                extendedProperties: {
                    role: "tablist",
                    "aria-orientation": a.getCachedValue(e.getId("Content.aria-orientation"), function() {
                        return a.variables.isVerticalIn ? "vertical" : "horizontal"
                    }, function() {
                        return a.variables.isVerticalIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: a.getCachedValue(e.getId("Content.Style"), function() {
                    return "wizard-wrapper display-flex " + (a.variables.isVerticalIn ? "wizard-vertical flex-direction-column" : "flex-direction-row") + (a.variables.extendedClassIn === "" ? "" : " " + a.variables.extendedClassIn)
                }, function() {
                    return a.variables.isVerticalIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: xe.Model.calculateDataFetchStatus(a.variables._isVerticalInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
s(T, "View");
var Z = T,
    te = Z;
var W = L(U());
var Ae = {};

function re(S, a, g, e) {
    var r = document.getElementById(S.WidgetId),
        t = r.querySelector(".wizard-item-label").textContent;
    r.setAttribute("aria-label", t)
}
s(re, "default");

function ne(S, a, g) {
    event.keyCode === 13 && S.TriggerClick()
}
s(ne, "default");
var E = R; {
    let a = class a extends E.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ae);
            var l = this.controller;
            this.clientActionProxies = {
                triggerClick$Action: s(function() {
                    return l.executeActionInsideJSNode(l._triggerClick$Action.bind(l), l.callContext(), function(n) {
                        return {}
                    }, function() {}, "TriggerClick")
                }, "triggerClick$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return E.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), E.Logger.startActiveSpan("SetAriaLabel", function(c) {
                            c && (c.setAttribute("code.function", "SetAriaLabel"), c.setAttribute("outsystems.function.key", "5e15b99f-7182-4f9e-b579-f7aed8d10959"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(re, "SetAriaLabel", "OnReady", {
                                    WidgetId: E.DataConversion.JSNodeParamConverter.to(l.getId("WizardWrapperItem"), E.DataTypes.DataTypes.Text)
                                }, function(v) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _triggerClick$Action() {
            return this.hasOwnProperty("__triggerClick$Action") || (this.__triggerClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return E.Logger.startActiveSpan("TriggerClick", function(n) {
                    return n && (n.setAttribute("code.function", "TriggerClick"), n.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerClick"), e = t.callContext(e), E.Flow.executeAsyncFlow(function() {
                            return t.onClick$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__triggerClick$Action
        }
        set _triggerClick$Action(e) {
            this.__triggerClick$Action = e
        }
        get _wizardItemOnKeypress$Action() {
            return this.hasOwnProperty("__wizardItemOnKeypress$Action") || (this.__wizardItemOnKeypress$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return E.Logger.startActiveSpan("WizardItemOnKeypress", function(n) {
                    n && (n.setAttribute("code.function", "WizardItemOnKeypress"), n.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WizardItemOnKeypress"), e = t.callContext(e), E.Logger.startActiveSpan("OnKeyPress_CheckEnter", function(c) {
                            c && (c.setAttribute("code.function", "OnKeyPress_CheckEnter"), c.setAttribute("outsystems.function.key", "42174d82-1844-4efd-9901-f8b9db0600e7"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ne, "OnKeyPress_CheckEnter", "WizardItemOnKeypress", null, function(v) {}, {
                                    TriggerClick: t.clientActionProxies.triggerClick$Action
                                }, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__wizardItemOnKeypress$Action
        }
        set _wizardItemOnKeypress$Action(e) {
            this.__wizardItemOnKeypress$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return E.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        triggerClick$Action(e) {
            var r = this.controller;
            return E.Logger.startActiveSpan("TriggerClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerClick"), t.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), E.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._triggerClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        wizardItemOnKeypress$Action(e) {
            var r = this.controller;
            return E.Logger.startActiveSpan("WizardItemOnKeypress__proxy", function(t) {
                t && (t.setAttribute("code.function", "WizardItemOnKeypress"), t.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._wizardItemOnKeypress$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(e) {
            this._onClick$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    l = this.idService;
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
            return C.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let S = a;
    Pe = S
}
var Pe, Re = new E.Controller.ControllerFactory(Pe, z);
var Ee = R,
    At = O.PlaceholderContent,
    Pt = O.IteratorPlaceholderContent,
    $ = class $ extends k.BaseWebBlock {
        static get displayName() {
            return "Navigation.WizardItem"
        }
        static getAttributes() {
            return {
                codeFunction: "WizardItem",
                functionKey: "a464a45b-2897-42b1-ab7d-a8ca3ccc3d1c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return fe
        }
        get controllerFactory() {
            return Re
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                g = this.controller,
                e = this.idService,
                r = g.validationService,
                t = this.widgetsRecordProvider,
                l = g.callContext(),
                n = $.ifWidget,
                c = $.textWidget,
                v = $.asPrimitiveValue,
                h = $.getTranslation,
                f = this;
            return W.createElement("div", this.getRootNodeProperties(), W.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        return Promise.resolve().then(function() {
                            var d = l.clone();
                            return g.triggerClick$Action(g.callContext(d))
                        })
                    }, "onClick"),
                    onKeyPress: s(function() {
                        var d = l.clone();
                        g.wizardItemOnKeypress$Action(g.callContext(d))
                    }, "onKeyPress")
                },
                extendedProperties: {
                    role: "tab",
                    tabIndex: a.getCachedValue(e.getId("WizardWrapperItem.tabindex"), function() {
                        return (a.variables.statusIn === x.steps.next ? -1 : 0).toString()
                    }, function() {
                        return a.variables.statusIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: a.getCachedValue(e.getId("WizardWrapperItem.Style"), function() {
                    return "wizard-wrapper-item" + (a.variables.statusIn === Ee.BuiltinFunctions.nullTextIdentifier() ? "" : " " + a.variables.statusIn) + (a.variables.useTopLabelIn ? " label-top" : " label-bottom") + " " + a.variables.extendedClassIn
                }, function() {
                    return a.variables.statusIn
                }, function() {
                    return a.variables.useTopLabelIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WizardWrapperItem"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Ee.Model.calculateDataFetchStatus(a.variables._statusInDataFetchStatus, a.variables._useTopLabelInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }, W.createElement(m, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "wizard-item-icon-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, W.createElement(I, {
                align: 0,
                content: f.props.placeholders.icon,
                style: "wizard-item-icon",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            })), W.createElement(I, {
                align: 0,
                content: f.props.placeholders.label,
                extendedProperties: {
                    "aria-current": a.getCachedValue(e.getId("Label.aria-current"), function() {
                        return a.variables.statusIn === x.steps.active ? "step" : ""
                    }, function() {
                        return a.variables.statusIn
                    })
                },
                style: "wizard-item-label ph",
                _idProps: {
                    service: e,
                    name: "Label"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s($, "View");
var ie = $,
    A = ie;
var H = L(U());
var Oe = {};

function oe(S, a, g, e) {
    S.Initialized = a.InitializedHandler
}
s(oe, "default");
var _ = R; {
    let a = class a extends _.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Oe);
            var l = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: s(function(n) {
                    return n = n === void 0 ? "" : n, l.executeActionInsideJSNode(l._initializedHandler$Action.bind(l, _.DataConversion.JSNodeParamConverter.from(n, _.DataTypes.DataTypes.Text)), l.callContext(), function(c) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return _.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var c = new _.DataTypes.VariableHolder;
                        C.logEvent$Action(x.logType.general, "Going to create ProgressBar", e), c.value = C.generateUniqueId$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), r.variables.internal_ConfigsVar.uniqueIdAttr = c.value.unique_IDOut, r.variables.internal_ConfigsVar.progressAttr = r.variables.progressIn, r.variables.internal_ConfigsVar.progressColorAttr = r.variables.progressColorIn, r.variables.internal_ConfigsVar.trailColorAttr = r.variables.trailColorIn, r.variables.internal_ConfigsVar.shapeAttr = r.variables.optionalConfigsIn.shapeAttr, r.variables.internal_ConfigsVar.thicknessAttr = r.variables.thicknessIn, r.variables.internal_ConfigsVar.animateInitialProgressAttr = r.variables.optionalConfigsIn.animateInitialProgressAttr, r.variables.internal_ConfigsVar.typeAttr = x.progressType.bar, r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internal_ConfigsVar.initialProgressAttr = r.variables.internal_ConfigsVar.progressAttr, C.progressBarCreate$Action(r.variables.internal_ConfigsVar, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return _.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.progressIn !== r.variables.internal_ConfigsVar.progressAttr && (r.variables.internal_ConfigsVar.progressAttr = r.variables.progressIn, C.progressChangeIntegerProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", _.BuiltinFunctions.integerToLongInteger(r.variables.internal_ConfigsVar.progressAttr), e)), r.variables.progressColorIn !== r.variables.internal_ConfigsVar.progressColorAttr && (r.variables.internal_ConfigsVar.progressColorAttr = r.variables.progressColorIn, C.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", r.variables.internal_ConfigsVar.progressColorAttr, e)), r.variables.trailColorIn !== r.variables.internal_ConfigsVar.trailColorAttr && (r.variables.internal_ConfigsVar.trailColorAttr = r.variables.trailColorIn, C.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", r.variables.internal_ConfigsVar.trailColorAttr, e)), r.variables.thicknessIn !== r.variables.internal_ConfigsVar.thicknessAttr && (r.variables.internal_ConfigsVar.thicknessAttr = r.variables.thicknessIn, C.progressChangeIntegerProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", _.BuiltinFunctions.integerToLongInteger(r.variables.internal_ConfigsVar.thicknessAttr), e)), r.variables.optionalConfigsIn.shapeAttr !== r.variables.internal_ConfigsVar.shapeAttr && (r.variables.internal_ConfigsVar.shapeAttr = r.variables.optionalConfigsIn.shapeAttr, C.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", r.variables.internal_ConfigsVar.shapeAttr, e)), r.variables.extendedClassIn !== r.variables.internal_ConfigsVar.extendedClassAttr && (r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, C.progressChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internal_ConfigsVar.extendedClassAttr, e))
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
                    l = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("InitializedHandler", function(c) {
                    return c && (c.setAttribute("code.function", "InitializedHandler"), c.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        l.ensureControllerAlive("InitializedHandler"), r = l.callContext(r);
                        var v = new _.DataTypes.VariableHolder(new(l.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars")));
                        return v.value.progressBarIdInLocal = e, _.Flow.executeAsyncFlow(function() {
                            return l.initialized$Action(v.value.progressBarIdInLocal, r)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return _.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), C.progressDestroy$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return _.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), C.progressInitialize$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), C.logEvent$Action(x.logType.general, "ProgressBar Created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    l = this.idService;
                return _.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var c = new _.DataTypes.VariableHolder;
                        c.value = _.Logger.startActiveSpan("GetCallbackHandlers", function(v) {
                            v && (v.setAttribute("code.function", "GetCallbackHandlers"), v.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc"), v.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), v.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(oe, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: _.DataConversion.JSNodeParamConverter.to(null, _.DataTypes.DataTypes.Object)
                                }, function(h) {
                                    var f = new(t.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return f.initializedOut = _.DataConversion.JSNodeParamConverter.from(h.Initialized, _.DataTypes.DataTypes.Object), f
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), C.progressRegisterCallback$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, x.registeredCallbackEvents.initialized, c.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return _.Logger.startActiveSpan("InitializedHandler__proxy", function(l) {
                return l && (l.setAttribute("code.function", "InitializedHandler"), l.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7"), l.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), l.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    l && l.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
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
                    l = this.idService;
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
                    l = this.idService;
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
                    l = this.idService;
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
                    l = this.idService;
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
            return C.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let S = a;
    M = S, M.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
        name: "ProgressBarId",
        attrName: "progressBarIdInLocal",
        mandatory: !1,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), M.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var M, we = new _.Controller.ControllerFactory(M, z);
var Ht = O.PlaceholderContent,
    Lt = O.IteratorPlaceholderContent,
    D = class D extends k.BaseWebBlock {
        static get displayName() {
            return "Numbers.ProgressBar"
        }
        static getAttributes() {
            return {
                codeFunction: "ProgressBar",
                functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
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
            return ve
        }
        get controllerFactory() {
            return we
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                g = this.controller,
                e = this.idService,
                r = g.validationService,
                t = this.widgetsRecordProvider,
                l = g.callContext(),
                n = D.ifWidget,
                c = D.textWidget,
                v = D.asPrimitiveValue,
                h = D.getTranslation,
                f = this;
            return H.createElement("div", this.getRootNodeProperties(), H.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: a.variables.internal_ConfigsVar.uniqueIdAttr
                },
                style: "osui-progress-bar",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressBar"
                },
                _widgetRecordProvider: t
            }, H.createElement(m, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressContainer"
                },
                _widgetRecordProvider: t
            }, H.createElement(m, {
                align: 0,
                animate: !1,
                style: "osui-progress-bar__value",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressValue"
                },
                _widgetRecordProvider: t
            }), H.createElement(I, {
                align: 0,
                content: f.props.placeholders.content,
                style: "osui-progress-bar__content ph",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
s(D, "View");
var se = D,
    ae = se;
var w = R,
    p = O.PlaceholderContent,
    er = O.IteratorPlaceholderContent,
    V = class V extends k.BaseWebBlock {
        static get displayName() {
            return "Layouts.RealAccountCreationLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "RealAccountCreationLayout",
                functionKey: "78975d16-4c73-48c5-9852-90b30675abc7",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.RealAccountCreationLayout.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.Flatpickr.js", "scripts/tradershub.UserScripts.JSCookie.js", "scripts/tradershub.UserScripts.yupumd.js"]
        }
        static getBlocks() {
            return [te, A, ae, j]
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return _e
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                g = this.controller,
                e = this.idService,
                r = g.validationService,
                t = this.widgetsRecordProvider,
                l = g.callContext(),
                n = V.ifWidget,
                c = V.textWidget,
                v = V.asPrimitiveValue,
                h = V.getTranslation,
                f = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(m, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__sidebar",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SidebarMenu"
                },
                _widgetRecordProvider: t
            }, i.createElement(de, {
                extendedProperties: {
                    style: "margin-bottom: 24px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                _idProps: {
                    service: e,
                    name: "AddRealAccount"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: bold;"
                },
                text: [c(h("00Hg9JXhFU+VYKs5xFdaZg#Value", "Add a real account"))],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), i.createElement(te, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsVertical: !0
                },
                events: {
                    _handleError: s(function(d) {
                        g.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new p(function() {
                        return [n(o.getRealSignupIsIDVSupported(), !1, this, function() {
                            return [i.createElement(m, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            }, i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("AccountCurrency.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 1 ? u.steps.active : o.getRealSignupCurrentStep() < 1 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "AccountCurrency",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 1, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("NFfRCmwYtkyXwItR0dgtAw#Value", "Account currency"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }), i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("PersonalDetails.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 2 ? u.steps.active : o.getRealSignupCurrentStep() < 2 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "PersonalDetails",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 2, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("HSuugJpXv0yhQKBD_yZzRA#Value", "Personal details"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }), i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("IdentityVerification.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 3 ? u.steps.active : o.getRealSignupCurrentStep() < 3 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "IdentityVerification",
                                    alias: "4"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 3, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("WnNWxB+9Qk6Fll_MJQySwg#Value", "Identity verification"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }), i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("EmploymentDetails.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 4 ? u.steps.active : o.getRealSignupCurrentStep() < 4 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "EmploymentDetails",
                                    alias: "5"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 4, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("vw6lScPcw0+Fmxkmet36Cg#Value", "Employment details"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }), i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("AddressDetails.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 5 ? u.steps.active : o.getRealSignupCurrentStep() < 5 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "AddressDetails",
                                    alias: "6"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 5, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "23"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("gi313ljLuU6jS8TOtY5r2w#Value", "Address details"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }), i.createElement(A, {
                                getOwnerSpan: s(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: a.getCachedValue(e.getId("TermsOfUse.Status"), function() {
                                        return o.getRealSignupCurrentStep() === 6 ? u.steps.active : o.getRealSignupCurrentStep() < 6 ? u.steps.next : u.steps.past
                                    }, function() {
                                        return o.getRealSignupCurrentStep()
                                    })
                                },
                                events: {
                                    _handleError: s(function(d) {
                                        g.handleError(d)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "TermsOfUse",
                                    alias: "7"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    icon: new p(function() {
                                        return [n(o.getRealSignupCurrentStep() > 6, !1, this, function() {
                                            return [i.createElement(P, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                icon: "check",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "27"
                                                },
                                                _widgetRecordProvider: t
                                            })]
                                        }, function() {
                                            return []
                                        })]
                                    }),
                                    label: new p(function() {
                                        return [i.createElement(m, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: left;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: t
                                        }, i.createElement(b, {
                                            extendedProperties: {
                                                style: "color: #101213;"
                                            },
                                            text: [c(h("GUwJJeampkGR2XUJyILgfw#Value", "Terms of use"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "29"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    })
                                },
                                _dependencies: [v(o.getRealSignupCurrentStep())]
                            }))]
                        }, function() {
                            return [n(o.getIsEuUser(), !1, this, function() {
                                return [i.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "30"
                                    },
                                    _widgetRecordProvider: t
                                }, i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("AccountCurrency3.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 1 ? u.steps.active : o.getRealSignupCurrentStep() < 1 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "AccountCurrency3",
                                        alias: "8"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 1, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "32"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "33"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("1+XdSru5c06jRXS70xJrRA#Value", "Account currency"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "34"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("PersonalDetails3.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 2 ? u.steps.active : o.getRealSignupCurrentStep() < 2 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "PersonalDetails3",
                                        alias: "9"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 2, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "36"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "37"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("P45gzted7EuEZzqKFs2Fjg#Value", "Personal details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "38"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("EmploymentDetails3.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 3 ? u.steps.active : o.getRealSignupCurrentStep() < 3 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "EmploymentDetails3",
                                        alias: "10"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 3, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "40"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "41"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("pm61pFa7OkWW7AsLNva1vQ#Value", "Employment details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "42"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("AddressDetails3.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 4 ? u.steps.active : o.getRealSignupCurrentStep() < 4 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "AddressDetails3",
                                        alias: "11"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 4, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "44"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "45"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("KDifqlY4KkmSKxDOKQqZTg#Value", "Address details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "46"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("TradingAssessment.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 5 ? u.steps.active : o.getRealSignupCurrentStep() < 5 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "TradingAssessment",
                                        alias: "12"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 4, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "48"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "49"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("s0Z9jyrWWUW+ye0A1K4jFg#Value", "Trading assessment"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "50"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("FinancialAssessment.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 6 ? u.steps.active : o.getRealSignupCurrentStep() < 6 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "FinancialAssessment",
                                        alias: "13"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 4, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "52"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "53"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("3r6CQujXqEy2bFPl3WH1kg#Value", "Financial assessment"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "54"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("TermsOfUse3.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 7 ? u.steps.active : o.getRealSignupCurrentStep() < 7 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "TermsOfUse3",
                                        alias: "14"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 5, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "56"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "57"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("nInBD5tGTUORcqBs_93Upw#Value", "Terms of use"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "58"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }))]
                            }, function() {
                                return [i.createElement(m, {
                                    align: 0,
                                    animate: !1,
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "59"
                                    },
                                    _widgetRecordProvider: t
                                }, i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("AccountCurrency2.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 1 ? u.steps.active : o.getRealSignupCurrentStep() < 1 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "AccountCurrency2",
                                        alias: "15"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 1, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "61"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "62"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("_Qh01L9OBEKB80B9xRVjsg#Value", "Account currency"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "63"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("PersonalDetails2.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 2 ? u.steps.active : o.getRealSignupCurrentStep() < 2 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "PersonalDetails2",
                                        alias: "16"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 2, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "65"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "66"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("jeb1VJzeh0yPqx00dbXQrA#Value", "Personal details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "67"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("EmploymentDetails2.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 3 ? u.steps.active : o.getRealSignupCurrentStep() < 3 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "EmploymentDetails2",
                                        alias: "17"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 3, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "69"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "70"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("jbqd8r2bAUyUQKP5xMX6ig#Value", "Employment details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "71"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("AddressDetails2.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 4 ? u.steps.active : o.getRealSignupCurrentStep() < 4 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "AddressDetails2",
                                        alias: "18"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 4, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "73"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "74"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("b02eW34UxUy49oPg8bFPnQ#Value", "Address details"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "75"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }), i.createElement(A, {
                                    getOwnerSpan: s(function() {
                                        return f.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: s(function() {
                                        return f.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        Status: a.getCachedValue(e.getId("TermsOfUse2.Status"), function() {
                                            return o.getRealSignupCurrentStep() === 5 ? u.steps.active : o.getRealSignupCurrentStep() < 5 ? u.steps.next : u.steps.past
                                        }, function() {
                                            return o.getRealSignupCurrentStep()
                                        })
                                    },
                                    events: {
                                        _handleError: s(function(d) {
                                            g.handleError(d)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: r
                                    },
                                    _idProps: {
                                        service: e,
                                        name: "TermsOfUse2",
                                        alias: "19"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        icon: new p(function() {
                                            return [n(o.getRealSignupCurrentStep() > 5, !1, this, function() {
                                                return [i.createElement(P, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    icon: "check",
                                                    iconSize: 1,
                                                    style: "icon",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "77"
                                                    },
                                                    _widgetRecordProvider: t
                                                })]
                                            }, function() {
                                                return []
                                            })]
                                        }),
                                        label: new p(function() {
                                            return [i.createElement(m, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: left;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "78"
                                                },
                                                _widgetRecordProvider: t
                                            }, i.createElement(b, {
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                text: [c(h("QC5KEkHuP0mPcwxemuVquw#Value", "Terms of use"))],
                                                _idProps: {
                                                    service: e,
                                                    uuid: "79"
                                                },
                                                _widgetRecordProvider: t
                                            }))]
                                        })
                                    },
                                    _dependencies: [v(o.getRealSignupCurrentStep())]
                                }))]
                            })]
                        })]
                    })
                },
                _dependencies: [v(o.getIsEuUser()), v(o.getRealSignupCurrentStep()), v(o.getRealSignupIsIDVSupported())]
            })), i.createElement(m, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__main-content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContent"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "real-account-signup-layout__content",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "81"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__header-mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MobileHeader"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #F1F3F5; border-style: solid; border-width: 0px 0px 2px 0px; padding: 20px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "HeaderContainerMobile"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LeftArrowContainer"
                },
                _widgetRecordProvider: t
            }, n(o.getRealSignupCurrentStep() > 1, !1, this, function() {
                return [i.createElement(J, {
                    enabled: !0,
                    onClick: s(function() {
                        var d = l.clone();
                        g.previousScreen$Action(g.callContext(d))
                    }, "onClick"),
                    style: "display-flex",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "85"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(N, {
                    image: w.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneArrowLeftSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "86"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            })), i.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 0px 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProgressBarContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(ae, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ProgressColor: u.color.primary,
                    Progress: w.BuiltinFunctions.decimalToInteger(w.BuiltinFunctions.trunc(w.BuiltinFunctions.integerToDecimal(o.getRealSignupCurrentStep()).div(w.BuiltinFunctions.integerToDecimal(6)).times(w.BuiltinFunctions.integerToDecimal(100)))),
                    Thickness: 8
                },
                events: {
                    _handleError: s(function(d) {
                        g.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "88",
                    alias: "20"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: p.Empty
                },
                _dependencies: []
            })), i.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: s(function() {
                        var d = l.clone();
                        g.onOpenModal$Action(g.callContext(d))
                    }, "onClick")
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CloseContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(N, {
                image: w.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneMDClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "90"
                },
                _widgetRecordProvider: t
            }))), n(a.variables.hideTitleIn, !1, this, function() {
                return []
            }, function() {
                return [i.createElement(m, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "padding: 16px; padding-bottom: 0;"
                    },
                    style: "display-flex align-items-center justify-content-space-between",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "TitleContainerMobile"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(K, {
                    extendedProperties: {
                        style: "color: #101213; font-size: 18px; font-weight: bold;"
                    },
                    value: a.variables.titleIn,
                    _idProps: {
                        service: e,
                        uuid: "92"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: w.Model.calculateDataFetchStatus(a.variables._titleInDataFetchStatus)
                }))]
            })), i.createElement(m, {
                align: 0,
                animate: !1,
                style: "real-account-signup-layout__header-desktop",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DesktopHeader"
                },
                _widgetRecordProvider: t
            }, n(o.getRealSignupCurrentStep() > 1, !1, this, function() {
                return [i.createElement(J, {
                    enabled: !0,
                    onClick: s(function() {
                        var d = l.clone();
                        g.previousScreen$Action(g.callContext(d))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "94"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(N, {
                    image: w.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneArrowLeft.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "95"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return [i.createElement(m, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "96"
                    },
                    _widgetRecordProvider: t
                })]
            }), i.createElement(K, {
                extendedProperties: {
                    style: "color: #333333; font-size: 20px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: a.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "97"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: w.Model.calculateDataFetchStatus(a.variables._titleInDataFetchStatus)
            }), i.createElement(N, {
                extendedEvents: {
                    onClick: s(function() {
                        var d = l.clone();
                        g.onOpenModal$Action(g.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: w.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closenormal.png"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "98"
                },
                _widgetRecordProvider: t
            })), n(a.variables.isLoadingVar, !1, this, function() {
                return [i.createElement(j, {
                    getOwnerSpan: s(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(d) {
                            g.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "99",
                        alias: "21"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(I, {
                    align: 0,
                    content: f.props.placeholders.content,
                    style: "real-account-signup-layout__placeholder",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })]
            }))), i.createElement(ue, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px;"
                },
                showPopup: a.variables.showCloseModalVar,
                style: "popup-dialog",
                _idProps: {
                    service: e,
                    uuid: "101"
                },
                _widgetRecordProvider: t
            }, i.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; font-weight: bold;"
                },
                text: [c(h("wFdeBW5220eorYzALA2eOA#Value", "Exit profile setup"))],
                _idProps: {
                    service: e,
                    uuid: "103"
                },
                _widgetRecordProvider: t
            }), i.createElement(N, {
                extendedEvents: {
                    onClick: s(function() {
                        var d = l.clone();
                        g.onCloseModal$Action(g.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: w.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                style: "cursor-pointer",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "104"
                },
                _widgetRecordProvider: t
            })), i.createElement(m, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px 0px 0px 0px;"
                },
                style: "confirmation-popup__content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                text: [c(h("NPlnceVpDk+tMW25I6omMA#Value", "You will lose your progress."))],
                _idProps: {
                    service: e,
                    uuid: "106"
                },
                _widgetRecordProvider: t
            }), i.createElement(B, {
                enabled: !0,
                extendedProperties: {
                    style: "height: 32px; margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: s(function() {
                    var d = l.clone();
                    g.onCloseModal$Action(g.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "107"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [c(h("dfo3eZPJdEadIldymCRAug#Value", "Continue setup"))],
                _idProps: {
                    service: e,
                    uuid: "108"
                },
                _widgetRecordProvider: t
            })), i.createElement(B, {
                enabled: !0,
                extendedProperties: {
                    style: "height: 32px; margin-top: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: s(function() {
                    return Promise.resolve().then(function() {
                        var d = l.clone();
                        return g.goToDemoOnClick$Action(g.callContext(d))
                    })
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "109"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [c(h("TGotkGwAd0mP+Rfg+z+ejQ#Value", "Go to demo"))],
                _idProps: {
                    service: e,
                    uuid: "110"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
s(V, "View");
var ce = V,
    tr = ce;
export {
    tr as a
};