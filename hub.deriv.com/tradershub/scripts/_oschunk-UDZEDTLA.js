import {
    a as se,
    b as le,
    c as de,
    d as ce
} from "./_oschunk-L3ORMVZR.js";
import {
    a as ue
} from "./_oschunk-AE7Q6OZQ.js";
import "./_oschunk-XBOQBJKW.js";
import {
    a as oe
} from "./_oschunk-VWJXDAKN.js";
import {
    a as ne,
    b as T,
    h as l,
    j as O,
    k as ae,
    q as j,
    r as w,
    u as x,
    w as z,
    y as R
} from "./_oschunk-E7JQAU4J.js";
import {
    a as L
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as U,
    g as I,
    i as P
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as C,
    d as W
} from "./_oschunk-VADNKVBQ.js";
import {
    l as m
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    Nd as k,
    a as B,
    pg as ie,
    te as re
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as A
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as F
} from "./_oschunk-DVBKI63I.js";
var E = F(U());
var g = F(U());
var Pe = {
        "fhCRQxgCyECXT86a1VW0uQ#Value": "Inscrivez-vous",
        "ijryZ8R+MUmHm7BSQ0C_xQ#Value": "Se connecter",
        "fS3pka52LEe7Q6K66yY6zA#Value": "Portefeuilles",
        "Kg4q4alnPECOwBzGWNi9Gw#Value": "Options",
        "ZW3fSTCq1U+q3QQPQFkXZg#Value": "CFD",
        "YXsvVzwyQkq3by_ay6UZRQ#Value": "Hub"
    },
    fe = {
        "fr-FR": {
            translations: Pe,
            isRTL: !1
        }
    };
var M = A; {
    let o = class o extends M.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, fe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return M.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "767d2e4f-d133-4866-8c17-d520503ff569"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), C.setIsAuthorized(!1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return M.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "767d2e4f-d133-4866-8c17-d520503ff569"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
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
            return W.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let S = o;
    ge = S
}
var ge, ve = new M.Controller.ControllerFactory(ge, L);
var u = A,
    ze = P.PlaceholderContent,
    Me = P.IteratorPlaceholderContent,
    D = class D extends I.BaseWebBlock {
        static get displayName() {
            return "Layouts.TradingSpecificationLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingSpecificationLayout",
                functionKey: "9be1504a-2955-457b-b50b-9168f3f118f3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.TradingSpecificationLayout.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return se
        }
        get controllerFactory() {
            return ve
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                a = y.callContext(),
                i = D.ifWidget,
                c = D.textWidget,
                f = D.asPrimitiveValue,
                p = D.getTranslation,
                _ = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(l, {
                align: 0,
                animate: !1,
                style: "header-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, g.createElement(l, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LeftContainer"
                },
                _widgetRecordProvider: t
            }, g.createElement(x, {
                enabled: !0,
                extendedProperties: {
                    target: "_blank"
                },
                style: "display-flex align-items-center",
                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                url: u.Navigation.generateScreenURL("https://deriv.com/", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, g.createElement(w, {
                image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivIcon.svg"),
                style: "logo",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), g.createElement(l, {
                align: 0,
                animate: !1,
                style: "tabs-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Tabs"
                },
                _widgetRecordProvider: t
            }, g.createElement(l, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "tab",
                visible: o.getCachedValue(e.getId("Hub.Visible"), function() {
                    return C.getAuthToken() !== u.BuiltinFunctions.nullTextIdentifier() && !1
                }, function() {
                    return C.getAuthToken()
                }),
                _idProps: {
                    service: e,
                    name: "Hub"
                },
                _widgetRecordProvider: t
            }, g.createElement(x, {
                enabled: !0,
                style: "tab-link",
                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                url: u.Navigation.generateScreenURL("tradershub", "hub", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, g.createElement(R, {
                style: "tab-text",
                text: [c(p("YXsvVzwyQkq3by_ay6UZRQ#Value", "Hub"))],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }))), g.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 56px; margin-right: 24px;"
                },
                gridProperties: {
                    marginLeft: "24px"
                },
                style: "tab tab-active",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CFDs"
                },
                _widgetRecordProvider: t
            }, g.createElement(x, {
                enabled: !0,
                style: "tab-link",
                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                url: u.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, g.createElement(R, {
                style: "tab-text",
                text: [c(p("ZW3fSTCq1U+q3QQPQFkXZg#Value", "CFDs"))],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))), g.createElement(l, {
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
            }, g.createElement(x, {
                enabled: !0,
                style: "tab-link",
                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                url: u.Navigation.generateScreenURL("tradershub", "options", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, g.createElement(R, {
                style: "tab-text",
                text: [c(p("Kg4q4alnPECOwBzGWNi9Gw#Value", "Options"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), g.createElement(l, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "height: 56px;"
                },
                gridProperties: {
                    marginLeft: "24px"
                },
                style: "tab",
                visible: o.getCachedValue(e.getId("Wallets.Visible"), function() {
                    return C.getAuthToken() !== u.BuiltinFunctions.nullTextIdentifier()
                }, function() {
                    return C.getAuthToken()
                }),
                _idProps: {
                    service: e,
                    name: "Wallets"
                },
                _widgetRecordProvider: t
            }, g.createElement(x, {
                enabled: !0,
                style: "tab-link",
                transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                url: u.Navigation.generateScreenURL("tradershub", "wallets", {}),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }, g.createElement(R, {
                style: "tab-text",
                text: [c(p("fS3pka52LEe7Q6K66yY6zA#Value", "Wallets"))],
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }))))), i(C.getAuthToken() !== u.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [g.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center justify-content-flex-end",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(w, {
                    image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.bellMd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                }), g.createElement(x, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "24px"
                    },
                    style: "account-link",
                    transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                    url: u.Navigation.generateScreenURL("tradershub", "Account", {}),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(w, {
                    image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleUserMd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "20"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return [g.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "RightContainer"
                    },
                    _widgetRecordProvider: t
                }, g.createElement(T, {
                    enabled: !0,
                    isDefault: !1,
                    onClick: s(function() {
                        try {
                            u.Navigation.navigateTo(u.Navigation.generateScreenURL("https://" + C.getURL() + "/oauth2/authorize?app_id=" + C.getAppId() + "&l=" + C.getLang() + "&brand=deriv", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (d) {
                            if (d.name !== "RedirectOccurredException") throw d
                        }
                    }, "onClick"),
                    style: "btn header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Login"
                    },
                    _widgetRecordProvider: t
                }, c(p("ijryZ8R+MUmHm7BSQ0C_xQ#Value", "Log in"))), g.createElement(T, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    isDefault: !1,
                    onClick: s(function() {
                        try {
                            u.Navigation.navigateTo(u.Navigation.generateScreenURL("tradershub", "signup", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), null, !0)
                        } catch (d) {
                            if (d.name !== "RedirectOccurredException") throw d
                        }
                    }, "onClick"),
                    style: "btn btn-primary header-btn",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "Signup"
                    },
                    _widgetRecordProvider: t
                }, c(p("fhCRQxgCyECXT86a1VW0uQ#Value", "Sign up"))))]
            })), g.createElement(l, {
                align: 0,
                animate: !1,
                style: "content-wrapper",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "contentContainer"
                },
                _widgetRecordProvider: t
            }, g.createElement(z, {
                align: 0,
                content: _.props.placeholders.content,
                gridProperties: {
                    classes: "ThemeGrid_Width10"
                },
                style: "content",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            })))
        }
    };
s(D, "View");
var q = D,
    Q = q;
var h = F(U());
var me = {};

function K(S, o, y, e) {
    S.OnSlideMovedObj = o.OnSlideMovedHandler, S.OnCarouselInitializedObj = o.InitializeHandler
}
s(K, "default");
var n = A; {
    let o = class o extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, me);
            var a = this.controller;
            this.clientActionProxies = {
                onSlideMovedHandler$Action: s(function(i, c) {
                    return i = i === void 0 ? "" : i, c = c === void 0 ? 0 : c, a.executeActionInsideJSNode(a._onSlideMovedHandler$Action.bind(a, n.DataConversion.JSNodeParamConverter.from(i, n.DataTypes.DataTypes.Text), n.DataConversion.JSNodeParamConverter.from(c, n.DataTypes.DataTypes.Integer)), a.callContext(), function(f) {
                        return {}
                    }, function() {}, "OnSlideMovedHandler")
                }, "onSlideMovedHandler$Action"),
                initializeHandler$Action: s(function(i) {
                    return i = i === void 0 ? "" : i, a.executeActionInsideJSNode(a._initializeHandler$Action.bind(a, n.DataConversion.JSNodeParamConverter.from(i, n.DataTypes.DataTypes.Text)), a.callContext(), function(c) {
                        return {}
                    }, function() {}, "InitializeHandler")
                }, "initializeHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), m.carouselDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _initializeHandler$Action() {
            return this.hasOwnProperty("__initializeHandler$Action") || (this.__initializeHandler$Action = function(e, r) {
                var t = this.model,
                    a = this.controller,
                    i = this.idService;
                return n.Logger.startActiveSpan("InitializeHandler", function(c) {
                    return c && (c.setAttribute("code.function", "InitializeHandler"), c.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        a.ensureControllerAlive("InitializeHandler"), r = a.callContext(r);
                        var f = new n.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars")));
                        return f.value.carouselIdInLocal = e, n.Flow.executeAsyncFlow(function() {
                            return a.initialized$Action(f.value.carouselIdInLocal, r)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__initializeHandler$Action
        }
        set _initializeHandler$Action(e) {
            this.__initializeHandler$Action = e
        }
        get _onSlideMovedHandler$Action() {
            return this.hasOwnProperty("__onSlideMovedHandler$Action") || (this.__onSlideMovedHandler$Action = function(e, r, t) {
                var a = this.model,
                    i = this.controller,
                    c = this.idService;
                return n.Logger.startActiveSpan("OnSlideMovedHandler", function(f) {
                    return f && (f.setAttribute("code.function", "OnSlideMovedHandler"), f.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), f.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), f.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnSlideMovedHandler"), t = i.callContext(t);
                        var p = new n.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars")));
                        return p.value.carouselIdInLocal = e, p.value.indexInLocal = r, n.Flow.executeAsyncFlow(function() {
                            return i.onSlideMoved$Action(p.value.carouselIdInLocal, p.value.indexInLocal, t)
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onSlideMovedHandler$Action
        }
        set _onSlideMovedHandler$Action(e) {
            this.__onSlideMovedHandler$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.navigationIn !== r.variables.internalConfigsVar.navigationAttr && (r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, m.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Navigation", r.variables.internalConfigsVar.navigationAttr, e)), r.variables.itemsPerSlideIn.desktopAttr !== r.variables.internalConfigsVar.itemsDesktopAttr && (r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, m.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsDesktop", r.variables.internalConfigsVar.itemsDesktopAttr, e)), r.variables.itemsPerSlideIn.tabletAttr !== r.variables.internalConfigsVar.itemsTabletAttr && (r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, m.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsTablet", r.variables.internalConfigsVar.itemsTabletAttr, e)), r.variables.itemsPerSlideIn.phoneAttr !== r.variables.internalConfigsVar.itemsPhoneAttr && (r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, m.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsPhone", r.variables.internalConfigsVar.itemsPhoneAttr, e)), r.variables.optionalConfigsIn.autoPlayAttr !== r.variables.internalConfigsVar.autoPlayAttr && (r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, m.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "AutoPlay", r.variables.internalConfigsVar.autoPlayAttr, e)), r.variables.optionalConfigsIn.loopAttr !== r.variables.internalConfigsVar.loopAttr && (r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, m.carouselChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Loop", r.variables.internalConfigsVar.loopAttr, e)), r.variables.optionalConfigsIn.paddingAttr !== r.variables.internalConfigsVar.paddingAttr && (r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, m.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Padding", r.variables.internalConfigsVar.paddingAttr, e)), r.variables.optionalConfigsIn.itemsGapAttr !== r.variables.internalConfigsVar.itemsGapAttr && (r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, m.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ItemsGap", r.variables.internalConfigsVar.itemsGapAttr, e)), r.variables.optionalConfigsIn.startingPositionAttr !== r.variables.internalConfigsVar.startingPositionAttr && (r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, m.carouselChangeIntegerProp$Action(r.variables.internalConfigsVar.uniqueIdAttr, "StartingPosition", r.variables.internalConfigsVar.startingPositionAttr, e)), r.variables.heightIn !== r.variables.internalConfigsVar.heightAttr && (r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, m.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Height", r.variables.internalConfigsVar.heightAttr, e)), r.variables.extendedClassIn !== r.variables.internalConfigsVar.extendedClassAttr && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, m.carouselChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.carouselInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), m.logEvent$Action(k.logType.general, "Carousel created", e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var c = new n.DataTypes.VariableHolder,
                            f = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType);
                        m.logEvent$Action(k.logType.general, "Going to create Carousel", e), c.value = m.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = c.value.unique_IDOut, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internalConfigsVar.navigationAttr = r.variables.navigationIn, r.variables.internalConfigsVar.heightAttr = r.variables.heightIn, r.variables.internalConfigsVar.autoPlayAttr = r.variables.optionalConfigsIn.autoPlayAttr, r.variables.internalConfigsVar.loopAttr = r.variables.optionalConfigsIn.loopAttr, r.variables.internalConfigsVar.paddingAttr = r.variables.optionalConfigsIn.paddingAttr, r.variables.internalConfigsVar.itemsGapAttr = r.variables.optionalConfigsIn.itemsGapAttr, r.variables.internalConfigsVar.startingPositionAttr = r.variables.optionalConfigsIn.startingPositionAttr, r.variables.internalConfigsVar.itemsDesktopAttr = r.variables.itemsPerSlideIn.desktopAttr, r.variables.internalConfigsVar.itemsTabletAttr = r.variables.itemsPerSlideIn.tabletAttr, r.variables.internalConfigsVar.itemsPhoneAttr = r.variables.itemsPerSlideIn.phoneAttr, f.value.jSONOut = n.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), m.carouselCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, f.value.jSONOut, k.carouselProvider.splide, e), t._registerCallbacks$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("RegisterCallbacks", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallbacks"), i.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var c = new n.DataTypes.VariableHolder;
                        c.value = n.Logger.startActiveSpan("GetCallbackHandlers", function(f) {
                            f && (f.setAttribute("code.function", "GetCallbackHandlers"), f.setAttribute("outsystems.function.key", "12086b05-e58f-48cd-bdd4-a449983a20de"), f.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), f.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(K, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSlideMovedObj: n.DataConversion.JSNodeParamConverter.to(null, n.DataTypes.DataTypes.Object),
                                    OnCarouselInitializedObj: n.DataConversion.JSNodeParamConverter.to(null, n.DataTypes.DataTypes.Object)
                                }, function(p) {
                                    var _ = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return _.onSlideMovedObjOut = n.DataConversion.JSNodeParamConverter.from(p.OnSlideMovedObj, n.DataTypes.DataTypes.Object), _.onCarouselInitializedObjOut = n.DataConversion.JSNodeParamConverter.from(p.OnCarouselInitializedObj, n.DataTypes.DataTypes.Object), _
                                }, {
                                    OnSlideMovedHandler: t.clientActionProxies.onSlideMovedHandler$Action,
                                    InitializeHandler: t.clientActionProxies.initializeHandler$Action
                                }, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), m.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, k.registeredCallbackEvents.carousel_OnSlideMoved, c.value.onSlideMovedObjOut, e), m.carouselRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, k.registeredCallbackEvents.initialized, c.value.onCarouselInitializedObjOut, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    a = this.idService;
                return n.Logger.startActiveSpan("OnRender", function(i) {
                    i && (i.setAttribute("code.function", "OnRender"), i.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), m.carouselUpdateOnRender$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "1c69d0f1-3724-475c-b06f-bae9655df488"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializeHandler$Action(e, r) {
            var t = this.controller;
            return n.Logger.startActiveSpan("InitializeHandler__proxy", function(a) {
                return a && (a.setAttribute("code.function", "InitializeHandler"), a.setAttribute("outsystems.function.key", "2878f020-349a-4095-92b5-64914bdbefc7"), a.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), a.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializeHandler$Action, r, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onSlideMovedHandler$Action(e, r, t) {
            var a = this.controller;
            return n.Logger.startActiveSpan("OnSlideMovedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnSlideMovedHandler"), i.setAttribute("outsystems.function.key", "2b489ae5-936e-4624-b650-e33d88fbc446"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onSlideMovedHandler$Action, t, e, r)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "4c5a128f-3f2a-4cb0-b2f3-031aef45cb2d"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "55a88d23-f92e-4195-9c3a-18901ac10ad0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "dafe53b9-d39c-4d96-baa2-2002b3bd13b5"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "e67db216-47ed-4faa-9f19-6598ecde7b6f"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRender$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "ff217726-3e54-4696-a30d-8293d473e1b0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onRender$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onSlideMoved$Action() {
            return this.hasOwnProperty("_onSlideMoved$Action") || (this._onSlideMoved$Action = function() {
                return Promise.resolve()
            }), this._onSlideMoved$Action
        }
        set onSlideMoved$Action(e) {
            this._onSlideMoved$Action = e
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
                    a = this.idService;
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
                    a = this.idService;
                return r.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
                return r.onRender$Action(e)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    a = this.idService;
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
                    a = this.idService;
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
            return m.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let S = o;
    $ = S, $.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.InitializeHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), $.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.OnSlideMovedHandler$vars", [{
        name: "CarouselId",
        attrName: "carouselIdInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Index",
        attrName: "indexInLocal",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Integer,
        defaultValue: s(function() {
            return 0
        }, "defaultValue")
    }]), $.registerVariableGroupType("OutSystemsUI.Interaction.Carousel.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSlideMovedObj",
        attrName: "onSlideMovedObjOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnCarouselInitializedObj",
        attrName: "onCarouselInitializedObjOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Object,
        defaultValue: s(function() {
            return null
        }, "defaultValue")
    }])
}
var $, be = new n.Controller.ControllerFactory($, oe);
var nt = P.PlaceholderContent,
    at = P.IteratorPlaceholderContent,
    H = class H extends I.BaseWebBlock {
        static get displayName() {
            return "Interaction.Carousel"
        }
        static getAttributes() {
            return {
                codeFunction: "Carousel",
                functionKey: "322c145b-0e8d-472c-b394-9fc44623687f",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.Splide.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return le
        }
        get controllerFactory() {
            return be
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                a = y.callContext(),
                i = H.ifWidget,
                c = H.textWidget,
                f = H.asPrimitiveValue,
                p = H.getTranslation,
                _ = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    name: o.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-carousel",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, h.createElement(l, {
                align: 0,
                animate: !1,
                style: "osui-carousel__track",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, i(!1, !1, this, function() {
                return []
            }, function() {
                return [h.createElement(z, {
                    align: 0,
                    content: _.props.placeholders.carouselItems,
                    style: "osui-carousel__content",
                    _idProps: {
                        service: e,
                        name: "CarouselItems"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrows",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Arrows"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--prev background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(j, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-left",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__arrow splide__arrow--next background-neutral-0",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(j, {
                    extendedProperties: {
                        style: "font-size: 18px;"
                    },
                    icon: "angle-right",
                    iconSize: 0,
                    style: "icon text-neutral-7",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }))), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    style: "splide__pagination",
                    visible: !1,
                    _idProps: {
                        service: e,
                        name: "Pagination"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(ne, {
                    tag: "li",
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }, h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page is-active",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                }), h.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "splide__pagination__page",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "15"
                    },
                    _widgetRecordProvider: t
                })))]
            }))))
        }
    };
s(H, "View");
var Z = H,
    Y = Z;
var v = F(U());
var ye = {};
var he = A; {
    let o = class o extends he.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ye);
            var a = this.controller;
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
            return W.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let S = o;
    pe = S
}
var pe, _e = new he.Controller.ControllerFactory(pe, L);
var b = A,
    St = P.PlaceholderContent,
    At = P.IteratorPlaceholderContent,
    V = class V extends I.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.TradingSpecificationCard"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingSpecificationCard",
                functionKey: "9fd971e7-24bf-44ed-84bf-9fbee9ec0795",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.TradingSpecificationCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return _e
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                a = y.callContext(),
                i = V.ifWidget,
                c = V.textWidget,
                f = V.asPrimitiveValue,
                p = V.getTranslation,
                _ = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-radius: 8px; border-style: solid; border-width: 1px; padding: 16px;"
                },
                style: "card-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, v.createElement(l, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 8px;"
                },
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductDetails"
                },
                _widgetRecordProvider: t
            }, v.createElement(w, {
                gridProperties: {
                    width: "32px"
                },
                style: "",
                type: 1,
                url: o.variables.tradingSpecificationIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            }), v.createElement(O, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: o.variables.tradingSpecificationIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "Product"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            })), v.createElement(O, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 12px;"
                },
                value: o.variables.tradingSpecificationIn.descriptionAttr,
                _idProps: {
                    service: e,
                    name: "Description"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            })), v.createElement(l, {
                align: 0,
                animate: !1,
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #F8F9FA; border-radius: 4px; margin-top: 16px; padding: 8px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SpreadsRow"
                },
                _widgetRecordProvider: t
            }, v.createElement(O, {
                extendedProperties: {
                    style: "color: #272B30; font-size: 12px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Spreads",
                _idProps: {
                    service: e,
                    name: "DynamicSpreadsLabel"
                },
                _widgetRecordProvider: t
            }), v.createElement(O, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px;"
                },
                value: o.variables.tradingSpecificationIn.spreadsAttr,
                _idProps: {
                    service: e,
                    name: "DynamicSpreads"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            })), v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #F8F9FA; border-radius: 4px; margin-top: 8px; padding: 8px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CommissionRow"
                },
                _widgetRecordProvider: t
            }, v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                value: "Commission",
                _idProps: {
                    service: e,
                    name: "DynamicCommissionLabel"
                },
                _widgetRecordProvider: t
            }), v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                value: o.variables.tradingSpecificationIn.commissionAttr,
                _idProps: {
                    service: e,
                    name: "DynamicCommission"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            })), v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #F8F9FA; border-radius: 4px; margin-top: 8px; padding: 8px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MinimumDepositRow"
                },
                _widgetRecordProvider: t
            }, v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Minimum deposit",
                _idProps: {
                    service: e,
                    name: "MinimumDepositLabel"
                },
                _widgetRecordProvider: t
            }), v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: o.variables.tradingSpecificationIn.minimumDepositAttr,
                _idProps: {
                    service: e,
                    name: "MinimumDeposit"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            })), v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #F8F9FA; border-radius: 4px; height: 114px; margin-top: 8px; padding: 8px 16px;"
                },
                style: "",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AssetClassesRow"
                },
                _widgetRecordProvider: t
            }, v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Asset classes",
                _idProps: {
                    service: e,
                    name: "AssetClassesLabel"
                },
                _widgetRecordProvider: t
            }), v.createElement(O, {
                extendedProperties: {
                    style: "font-size: 12px; margin-top: 8px;"
                },
                style: "display-block",
                value: o.variables.tradingSpecificationIn.assetClassesAttr,
                _idProps: {
                    service: e,
                    name: "AssetClasses"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: b.Model.calculateDataFetchStatus(o.variables._tradingSpecificationInDataFetchStatus)
            }))), v.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ButtonContainer"
                },
                _widgetRecordProvider: t
            }, i(C.getAuthToken() !== "", !1, this, function() {
                return [i(o.variables.tradingSpecificationIn.isAddedAttr === !0, !1, this, function() {
                    return [v.createElement(T, {
                        enabled: !1,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        isDefault: !1,
                        onClick: s(function() {
                            try {
                                b.Navigation.navigateTo(b.Navigation.generateScreenURL("tradershub", "CommonLogin", {}), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Default), null, !0)
                            } catch (d) {
                                if (d.name !== "RedirectOccurredException") throw d
                            }
                        }, "onClick"),
                        style: "btn btn-primary",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "20"
                        },
                        _widgetRecordProvider: t
                    }, v.createElement(R, {
                        text: ["Added"],
                        _idProps: {
                            service: e,
                            name: "Added"
                        },
                        _widgetRecordProvider: t
                    }))]
                }, function() {
                    return [v.createElement(T, {
                        enabled: !0,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        isDefault: !1,
                        onClick: s(function() {
                            try {
                                b.Navigation.navigateTo(b.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {
                                    ProductIdentifier: b.DataConversion.ServerDataConverter.to(o.variables.tradingSpecificationIn.productIdentifierAttr, b.DataTypes.DataTypes.Text)
                                }), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Fade), null, !0)
                            } catch (d) {
                                if (d.name !== "RedirectOccurredException") throw d
                            }
                        }, "onClick"),
                        style: "btn btn-primary",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "22"
                        },
                        _widgetRecordProvider: t
                    }, v.createElement(R, {
                        text: ["Get account"],
                        _idProps: {
                            service: e,
                            name: "GetAccount"
                        },
                        _widgetRecordProvider: t
                    }))]
                })]
            }, function() {
                return [v.createElement(T, {
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    isDefault: !1,
                    onClick: s(function() {
                        try {
                            b.Navigation.navigateTo(b.Navigation.generateScreenURL("tradershub", "signup", {}), b.Transitions.createTransition(b.Transitions.TransitionAnimation.Fade), null, !0)
                        } catch (d) {
                            if (d.name !== "RedirectOccurredException") throw d
                        }
                    }, "onClick"),
                    style: "btn btn-primary",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                }, v.createElement(R, {
                    text: ["Trade now"],
                    _idProps: {
                        service: e,
                        name: "TradeNow"
                    },
                    _widgetRecordProvider: t
                }))]
            }))))
        }
    };
s(V, "View");
var X = V,
    ee = X;
var Ie = A,
    Se = P.PlaceholderContent,
    we = P.IteratorPlaceholderContent,
    N = class N extends I.BaseWebScreen {
        static get displayName() {
            return "CFDFlows.TradingSpecification"
        }
        static getAttributes() {
            return {
                codeFunction: "TradingSpecification",
                functionKey: "fa795d7e-919e-4b78-8964-2b562f57564b",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.TradingSpecification.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Q, Y, ee]
        }
        get modelFactory() {
            return ce
        }
        get controllerFactory() {
            return ue
        }
        get title() {
            return I.BaseWebScreen.getTranslation("fl15+p6ReEuJZCtWL1dWSw#Title", "TradingSpecification")
        }
        internalRender() {
            let o = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                a = y.callContext(),
                i = N.ifWidget,
                c = N.textWidget,
                f = N.asPrimitiveValue,
                p = N.getTranslation,
                _ = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(Q, {
                getOwnerSpan: s(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(d) {
                        y.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Se(function() {
                        return [E.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: s(function() {
                                    var d = a.clone();
                                    y.headerOnClick$Action(y.callContext(d))
                                }, "onClick")
                            },
                            style: "header-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Header"
                            },
                            _widgetRecordProvider: t
                        }, E.createElement(w, {
                            extendedEvents: {
                                onClick: s(function() {
                                    var d = a.clone();
                                    y.headerOnClick$Action(y.callContext(d))
                                }, "onClick")
                            },
                            image: Ie.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon3"
                            },
                            _widgetRecordProvider: t
                        }), E.createElement(R, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 20px; font-weight: bold; margin-left: 16px;"
                            },
                            text: ["Account specifications"],
                            _idProps: {
                                service: e,
                                name: "AccountSpecifications"
                            },
                            _widgetRecordProvider: t
                        })), E.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "carousel-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, E.createElement(Y, {
                            getOwnerSpan: s(function() {
                                return _.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return _.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Navigation: o.getCachedValue(e.getId("adTNYV33EUmgEP4kfIomoA.Navigation"), function() {
                                    return m.isDesktop$Action(a).isDesktopOut && o.variables.tradingSpecificationVar.length > 3 ? B.carouselNavigation.both : B.carouselNavigation.dots
                                }, function() {
                                    return o.variables.tradingSpecificationVar.length
                                }),
                                ItemsPerSlide: o.getCachedValue(e.getId("adTNYV33EUmgEP4kfIomoA.ItemsPerSlide"), function() {
                                    return function() {
                                        var d = new ie;
                                        return d.desktopAttr = 3, d.tabletAttr = 2, d.phoneAttr = 1, d
                                    }()
                                }),
                                OptionalConfigs: o.getCachedValue(e.getId("adTNYV33EUmgEP4kfIomoA.OptionalConfigs"), function() {
                                    return function() {
                                        var d = new re;
                                        return d.autoPlayAttr = !0, d.loopAttr = !1, d
                                    }()
                                })
                            },
                            events: {
                                _handleError: s(function(d) {
                                    y.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                carouselItems: new Se(function() {
                                    return [E.createElement(ae, {
                                        animateItems: !1,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: o.variables.tradingSpecificationVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            content: new we(function(d, Ae) {
                                                return [E.createElement(ee, {
                                                    getOwnerSpan: s(function() {
                                                        return _.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return _.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        TradingSpecification: o.variables.tradingSpecificationVar.getCurrent(Ae.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: s(function(Ce) {
                                                            y.handleError(Ce)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: r
                                                    },
                                                    _idProps: {
                                                        service: d,
                                                        uuid: "7",
                                                        alias: "3"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    _dependencies: []
                                                })]
                                            }, a, e, "1")
                                        },
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [f(o.variables.tradingSpecificationVar)]
                        }))]
                    })
                },
                _dependencies: [f(o.variables.tradingSpecificationVar)]
            }))
        }
    };
s(N, "View");
var te = N,
    Vt = te;
export {
    Vt as
    default
};