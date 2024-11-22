import {
    a as M,
    b as $
} from "./_oschunk-HBEXL7KK.js";
import {
    a as W
} from "./_oschunk-NJYKWZYU.js";
import {
    a as z
} from "./_oschunk-BHZNFATE.js";
import {
    b as L,
    h as u,
    r as h,
    u as _,
    w as T,
    y as x
} from "./_oschunk-HUOHOHZB.js";
import {
    a as k
} from "./_oschunk-Y45M2O2K.js";
import {
    a as B,
    g as A,
    i as O
} from "./_oschunk-6LASTRK7.js";
import {
    a as P,
    d as U
} from "./_oschunk-27GDEXUT.js";
import {
    a as F
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as n,
    g as N
} from "./_oschunk-DVBKI63I.js";
var i = N(B());
var Y = {
        "z3Xgo1EJ4U66TekcF3FtkQ#Value": "Compte",
        "mwg36cd2ykm8Lp2+ZuTyYg#Value": "Portefeuilles",
        "3PrWmaocKES8BZp00psl3g#Value": "Options",
        "23L1I2NBGEWdW_1td988fw#Value": "CFD",
        "WQhzFWzrfEmZKoVwi_zfRA#Value": "Inscrivez-vous",
        "9KT96p9skk2eY8FZoy2JcA#Value": "Se connecter",
        "61Sfqplm5ECuZ5_5FCkuwg#Value": "Portefeuilles",
        "wpOSZ2b4z0G9b+gZ0DgdAQ#Value": "Options",
        "kB7UxZmyl0y9giWJ7ErMdw#Value": "CFD"
    },
    Z = {
        "fr-FR": {
            translations: Y,
            isRTL: !1
        }
    };

function V(b, o, p, e) {
    let d = ["/cfds", "/options", "/wallets"],
        t = window.location.pathname.toLowerCase();
    t.includes("/tradingspecification") && (t = "/cfds");
    let m = d.findIndex(s => t.includes(s.toLowerCase()));
    m === -1 && (m = 0);
    let a = document.querySelectorAll(".tab"),
        l = document.querySelectorAll(".bottom-navigation-item");
    if (a.length > 0 && m < a.length) {
        let s = a[m],
            g = s.querySelector(".tab-text");
        s.classList.add("tab-active"), g.classList.add("tab-text-active")
    }
    l.length > 0 && m < l.length && l[m].querySelector(".bottom-bar-item-text").classList.add("bottom-bar-item-text-active"), b.Active = m
}
n(V, "default");
var f = y; {
    let o = class o extends f.Controller.BaseViewController {
        constructor(e, d, t) {
            super(e, d, t, Z);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var d = this.model,
                    t = this.controller,
                    m = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new f.DataTypes.VariableHolder;
                        l.value = f.Logger.startActiveSpan("AddActiveTab", function(s) {
                            s && (s.setAttribute("code.function", "AddActiveTab"), s.setAttribute("outsystems.function.key", "2e50b9a3-6bd0-4482-b4a4-80eb6a95ec91"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(V, "AddActiveTab", "OnReady", {
                                    Active: f.DataConversion.JSNodeParamConverter.to(0, f.DataTypes.DataTypes.Integer)
                                }, function(g) {
                                    var c = new(t.constructor.getVariableGroupType("tradershub.Layouts.MainLayout.OnReady$addActiveTabJSResult"));
                                    return c.activeOut = f.DataConversion.JSNodeParamConverter.from(g.Active, f.DataTypes.DataTypes.Integer), c
                                }, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.variables.activeTabVar = l.value.activeOut
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var d = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return d.safeExecuteClientAction(d._onReady$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var d = this.controller,
                    t = this.model,
                    m = this.idService;
                return d.onReady$Action(e)
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
            return U.defaultTimeout
        }
    };
    n(o, "ControllerInner");
    let b = o;
    I = b, I.registerVariableGroupType("tradershub.Layouts.MainLayout.OnReady$addActiveTabJSResult", [{
        name: "Active",
        attrName: "activeOut",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Integer,
        defaultValue: n(function() {
            return 0
        }, "defaultValue")
    }])
}
var I, J = new f.Controller.ControllerFactory(I, k);
var C = N(B());
var K = {};
var G = y; {
    let o = class o extends G.Controller.BaseViewController {
        constructor(e, d, t) {
            super(e, d, t, K);
            var m = this.controller;
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
            return F.defaultTimeout
        }
    };
    n(o, "ControllerInner");
    let b = o;
    q = b
}
var q, Q = new G.Controller.ControllerFactory(q, z);
var ee = y,
    Ee = O.PlaceholderContent,
    Oe = O.IteratorPlaceholderContent,
    S = class S extends A.BaseWebBlock {
        static get displayName() {
            return "Navigation.BottomBarItem"
        }
        static getAttributes() {
            return {
                codeFunction: "BottomBarItem",
                functionKey: "d79ab315-2bb1-4098-b112-4d368de99365",
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
            return M
        }
        get controllerFactory() {
            return Q
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                p = this.controller,
                e = this.idService,
                d = p.validationService,
                t = this.widgetsRecordProvider,
                m = p.callContext(),
                a = S.ifWidget,
                l = S.textWidget,
                s = S.asPrimitiveValue,
                g = S.getTranslation,
                c = this;
            return C.createElement("div", this.getRootNodeProperties(), C.createElement(u, {
                align: 0,
                animate: !1,
                style: "bottom-bar-item " + o.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: ee.Model.calculateDataFetchStatus(o.variables._extendedClassInDataFetchStatus)
            }, C.createElement(T, {
                align: 2,
                content: c.props.placeholders.icon,
                style: "ph bottom-bar-item-icon",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            }), C.createElement(T, {
                align: 2,
                content: c.props.placeholders.text,
                style: "ph bottom-bar-item-text",
                _idProps: {
                    service: e,
                    name: "Text"
                },
                _widgetRecordProvider: t
            })))
        }
    };
n(S, "View");
var H = S,
    w = H;
var r = y,
    R = O.PlaceholderContent,
    He = O.IteratorPlaceholderContent,
    E = class E extends A.BaseWebBlock {
        static get displayName() {
            return "Layouts.MainLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "MainLayout",
                functionKey: "5bbb9b41-8e23-403f-8d60-0043ba3e67ab",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.MainLayout.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [W, w]
        }
        get modelFactory() {
            return $
        }
        get controllerFactory() {
            return J
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                p = this.controller,
                e = this.idService,
                d = p.validationService,
                t = this.widgetsRecordProvider,
                m = p.callContext(),
                a = E.ifWidget,
                l = E.textWidget,
                s = E.asPrimitiveValue,
                g = E.getTranslation,
                c = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "header-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LeftContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                enabled: !0,
                extendedProperties: {
                    target: "_blank"
                },
                style: "display-flex align-items-center",
                transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                url: r.Navigation.generateScreenURL("https://deriv.com/", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, i.createElement(h, {
                image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivIcon.svg"),
                style: "logo",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "tabs-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Tabs"
                },
                _widgetRecordProvider: t
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px; margin-right: 24px;"
                },
                gridProperties: {
                    marginLeft: "24px"
                },
                style: "tab",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CFDs"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                enabled: !0,
                style: "tab-link",
                transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                url: r.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, i.createElement(x, {
                style: "tab-text",
                text: [l(g("kB7UxZmyl0y9giWJ7ErMdw#Value", "CFDs"))],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }))), i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "tab",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Options"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                enabled: !0,
                style: "tab-link",
                transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                url: r.Navigation.generateScreenURL("tradershub", "options", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, i.createElement(x, {
                style: "tab-text",
                text: [l(g("wpOSZ2b4z0G9b+gZ0DgdAQ#Value", "Options"))],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))), a(P.getAuthToken() !== r.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 56px;"
                    },
                    gridProperties: {
                        marginLeft: "24px"
                    },
                    style: "tab",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Wallets"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(_, {
                    enabled: !0,
                    style: "tab-link",
                    transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                    url: r.Navigation.generateScreenURL("tradershub", "wallets", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(x, {
                    style: "tab-text",
                    text: [l(g("61Sfqplm5ECuZ5_5FCkuwg#Value", "Wallets"))],
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }))), a(P.getAuthToken() !== r.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center justify-content-flex-end",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(h, {
                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.bellMd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                }), i.createElement(_, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "24px"
                    },
                    style: "account-link",
                    transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                    url: r.Navigation.generateScreenURL("tradershub", "Account", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(h, {
                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleUserMd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "RightContainer"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(L, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: n(function() {
                        try {
                            r.Navigation.navigateTo(r.Navigation.generateScreenURL("https://" + P.getURL() + "/oauth2/authorize?app_id=" + P.getAppId() + "&l=" + P.getLang() + "&brand=deriv", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (v) {
                            if (v.name !== "RedirectOccurredException") throw v
                        }
                    }, "onClick"),
                    style: "btn header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Login"
                    },
                    _widgetRecordProvider: t
                }, l(g("9KT96p9skk2eY8FZoy2JcA#Value", "Log in"))), i.createElement(L, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    isDefault: !1,
                    onClick: n(function() {
                        try {
                            r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "signup", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (v) {
                            if (v.name !== "RedirectOccurredException") throw v
                        }
                    }, "onClick"),
                    style: "btn btn-primary header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Signup"
                    },
                    _widgetRecordProvider: t
                }, l(g("WQhzFWzrfEmZKoVwi_zfRA#Value", "Sign up"))))]
            })), a(o.variables.isLoadingIn, !1, this, function() {
                return [i.createElement(W, {
                    getOwnerSpan: n(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(v) {
                            p.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: d
                    },
                    _idProps: {
                        service: e,
                        uuid: "21",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "content-wrapper",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "contentContainer"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(T, {
                    align: 0,
                    content: c.props.placeholders.content,
                    gridProperties: {
                        classes: "ThemeGrid_Width10"
                    },
                    style: "content",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                }))]
            }), i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #FFF;"
                },
                style: "bottom-navigation",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "BottomNavigation"
                },
                _widgetRecordProvider: t
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "bottom-navigation-item",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CFDsContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                url: r.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, i.createElement(w, {
                getOwnerSpan: n(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(v) {
                        p.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: e,
                    uuid: "27",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    icon: new R(function() {
                        return [a(o.variables.activeTabVar === 1, !1, this, function() {
                            return [i.createElement(h, {
                                image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdActiveSm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [i.createElement(h, {
                                image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdSm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            })]
                        })]
                    }),
                    text: new R(function() {
                        return [l(g("23L1I2NBGEWdW_1td988fw#Value", "CFDs"))]
                    })
                },
                _dependencies: [s(o.variables.activeTabVar)]
            }))), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "bottom-navigation-item",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "OptionsContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                url: r.Navigation.generateScreenURL("tradershub", "options", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            }, i.createElement(w, {
                getOwnerSpan: n(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(v) {
                        p.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: e,
                    uuid: "32",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    icon: new R(function() {
                        return [a(o.variables.activeTabVar === 2, !1, this, function() {
                            return [i.createElement(h, {
                                image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsActiveSm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [i.createElement(h, {
                                image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsSm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: t
                            })]
                        })]
                    }),
                    text: new R(function() {
                        return [l(g("3PrWmaocKES8BZp00psl3g#Value", "Options"))]
                    })
                },
                _dependencies: [s(o.variables.activeTabVar)]
            }))), a(P.getAuthToken() !== r.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "bottom-navigation-item",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "WalletsContainer"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(_, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                    url: r.Navigation.generateScreenURL("tradershub", "wallets", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "36"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    getOwnerSpan: n(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(v) {
                            p.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: d
                    },
                    _idProps: {
                        service: e,
                        uuid: "37",
                        alias: "4"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        icon: new R(function() {
                            return [a(o.variables.activeTabVar === 3, !1, this, function() {
                                return [i.createElement(h, {
                                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsActiveSm.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "38"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            }, function() {
                                return [i.createElement(h, {
                                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsSm.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "39"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            })]
                        }),
                        text: new R(function() {
                            return [l(g("mwg36cd2ykm8Lp2+ZuTyYg#Value", "Wallets"))]
                        })
                    },
                    _dependencies: [s(o.variables.activeTabVar)]
                }))), i.createElement(u, {
                    align: 0,
                    animate: !1,
                    style: "bottom-navigation-item",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "AccountContainer"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(_, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default),
                    url: r.Navigation.generateScreenURL("tradershub", "Account", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "41"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(w, {
                    getOwnerSpan: n(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: n(function(v) {
                            p.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: d
                    },
                    _idProps: {
                        service: e,
                        uuid: "42",
                        alias: "5"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        icon: new R(function() {
                            return [a(o.variables.activeTabVar === 4, !1, this, function() {
                                return [i.createElement(h, {
                                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountActiveSm.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "43"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            }, function() {
                                return [i.createElement(h, {
                                    image: r.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountSm.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "44"
                                    },
                                    _widgetRecordProvider: t
                                })]
                            })]
                        }),
                        text: new R(function() {
                            return [l(g("z3Xgo1EJ4U66TekcF3FtkQ#Value", "Account"))]
                        })
                    },
                    _dependencies: [s(o.variables.activeTabVar)]
                })))]
            }, function() {
                return []
            })))
        }
    };
n(E, "View");
var D = E,
    De = D;
export {
    De as a
};