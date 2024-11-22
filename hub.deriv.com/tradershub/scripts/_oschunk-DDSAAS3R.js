import {
    a as O
} from "./_oschunk-3EM3HOK7.js";
import {
    a as B
} from "./_oschunk-4HOLBSDB.js";
import {
    a as A
} from "./_oschunk-NJYKWZYU.js";
import {
    h as f,
    j as w,
    r as b,
    w as C
} from "./_oschunk-HUOHOHZB.js";
import {
    a as R
} from "./_oschunk-Y45M2O2K.js";
import {
    a as $,
    g as P,
    i as _
} from "./_oschunk-6LASTRK7.js";
import {
    d as k
} from "./_oschunk-27GDEXUT.js";
import {
    a as S
} from "./_oschunk-D2MH3QEK.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as N
} from "./_oschunk-DVBKI63I.js";
var o = N($());
var W = {};

function p(h, a, l, e) {
    document.getElementById(h.Id)
}
s(p, "default");
var i = y; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, W);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _closeBtnOnClick$Action() {
            return this.hasOwnProperty("__closeBtnOnClick$Action") || (this.__closeBtnOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("CloseBtnOnClick", function(r) {
                    r && (r.setAttribute("code.function", "CloseBtnOnClick"), r.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("CloseBtnOnClick"), e = t.callContext(e), i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__closeBtnOnClick$Action
        }
        set _closeBtnOnClick$Action(e) {
            this.__closeBtnOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "54868f08-a655-4c83-81f8-1f83ca99905f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "75b438e0-180d-4a3d-bd31-1db07a24b738"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(p, "JavaScript1", "OnReady", {
                                    Id: i.DataConversion.JSNodeParamConverter.to(c.getId("ContentWrapper"), i.DataTypes.DataTypes.Text)
                                }, function(H) {}, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _backBtnOnClick$Action() {
            return this.hasOwnProperty("__backBtnOnClick$Action") || (this.__backBtnOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("BackBtnOnClick", function(r) {
                    r && (r.setAttribute("code.function", "BackBtnOnClick"), r.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("BackBtnOnClick"), e = t.callContext(e), i.Navigation.navigateBack(null, e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__backBtnOnClick$Action
        }
        set _backBtnOnClick$Action(e) {
            this.__backBtnOnClick$Action = e
        }
        closeBtnOnClick$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("CloseBtnOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseBtnOnClick"), t.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._closeBtnOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "54868f08-a655-4c83-81f8-1f83ca99905f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        backBtnOnClick$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("BackBtnOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "BackBtnOnClick"), t.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._backBtnOnClick$Action, e)
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
                var n = this.controller,
                    t = this.model,
                    c = this.idService;
                return n.onReady$Action(e)
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
            return k.defaultTimeout
        }
    };
    s(a, "ControllerInner");
    let h = a;
    I = h
}
var I, x = new i.Controller.ControllerFactory(I, R);
var g = y,
    ce = _.PlaceholderContent,
    de = _.IteratorPlaceholderContent,
    v = class v extends P.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsOverlayPage"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsOverlayPage",
                functionKey: "932c55d3-3f02-4046-9648-043994771643",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsOverlayPage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, A]
        }
        get modelFactory() {
            return B
        }
        get controllerFactory() {
            return x
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                c = l.callContext(),
                r = v.ifWidget,
                d = v.textWidget,
                H = v.asPrimitiveValue,
                T = v.getTranslation,
                m = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(f, {
                align: 0,
                animate: !1,
                style: "wallet-overlay-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainWrapper"
                },
                _widgetRecordProvider: t
            }, o.createElement(f, {
                align: 0,
                animate: !1,
                style: "wallet-title-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: t
            }, r(a.variables.hideBackButtonIn, !1, this, function() {
                return []
            }, function() {
                return [o.createElement(b, {
                    extendedEvents: {
                        onClick: s(function() {
                            var u = c.clone();
                            l.backBtnOnClick$Action(l.callContext(u))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: e,
                        name: "BackBtn"
                    },
                    _widgetRecordProvider: t
                })]
            }), o.createElement(f, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width1"
                },
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TitleContainer"
                },
                _widgetRecordProvider: t
            }, o.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: a.variables.pageTitleIn,
                _idProps: {
                    service: e,
                    name: "OverlayTItle"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: g.Model.calculateDataFetchStatus(a.variables._pageTitleInDataFetchStatus)
            })), r(a.variables.hideCloseButtonIn, !1, this, function() {
                return []
            }, function() {
                return [o.createElement(b, {
                    extendedEvents: {
                        onClick: s(function() {
                            var u = c.clone();
                            l.closeBtnOnClick$Action(l.callContext(u))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px; padding: 0px 6px 0px 0px;"
                    },
                    image: g.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: e,
                        name: "CloseBtn"
                    },
                    _widgetRecordProvider: t
                })]
            })), o.createElement(f, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: (Auto);"
                },
                style: "wallet-overlay-content",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: t
            }, r(a.variables.hideWalletHeaderIn, !1, this, function() {
                return []
            }, function() {
                return [o.createElement(O, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(u) {
                            l.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: e,
                        uuid: "7",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }), r(a.variables.isLoadingIn, !1, this, function() {
                return [o.createElement(f, {
                    align: 0,
                    animate: !1,
                    style: "wallet-loading-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, o.createElement(A, {
                    getOwnerSpan: s(function() {
                        return m.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return m.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(u) {
                            l.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: e,
                        uuid: "9",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            }, function() {
                return [o.createElement(C, {
                    align: 0,
                    content: m.props.placeholders.walletOverlayPageContent,
                    style: a.getCachedValue(e.getId("WalletOverlayPageContent.Style"), function() {
                        return "full-width " + (S.isDesktop$Action(c).isDesktopOut ? "margin-top-m" : "margin-top-base")
                    }),
                    _idProps: {
                        service: e,
                        name: "WalletOverlayPageContent"
                    },
                    _widgetRecordProvider: t
                })]
            })), o.createElement(f, {
                align: 0,
                animate: !0,
                style: "wallet-overlay-footer",
                visible: !a.variables.isLoadingIn,
                _idProps: {
                    service: e,
                    name: "FooterWrapper"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: g.Model.calculateDataFetchStatus(a.variables._isLoadingInDataFetchStatus)
            }, o.createElement(C, {
                align: 0,
                content: m.props.placeholders.mobileFooterContent,
                _idProps: {
                    service: e,
                    name: "MobileFooterContent"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
s(v, "View");
var E = v,
    ue = E;
export {
    ue as a
};