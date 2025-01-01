import {
    a as p
} from "./_oschunk-QIDNIYQN.js";
import {
    a as S
} from "./_oschunk-ESAL6IS4.js";
import {
    a as b
} from "./_oschunk-MOYCBUII.js";
import {
    h as d,
    j as w,
    r as C,
    w as y
} from "./_oschunk-42NACYKQ.js";
import {
    a as E
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as x,
    g as k,
    i as _
} from "./_oschunk-RKYF3TWC.js";
import {
    c as P
} from "./_oschunk-DOFMR6EA.js";
import {
    l as A
} from "./_oschunk-2ZI4JQLD.js";
import {
    ia as f
} from "./_oschunk-2JKANR6M.js";
import {
    c as s,
    g as H
} from "./_oschunk-DVBKI63I.js";
var i = H(x());
var R = {};
var r = f; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, R);
            var h = this.controller;
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
                var a = this.model,
                    t = this.controller,
                    h = this.idService;
                return r.Logger.startActiveSpan("CloseBtnOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseBtnOnClick"), n.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseBtnOnClick"), e = t.callContext(e), r.Flow.executeAsyncFlow(function() {
                            return t.onCloseAction$Action(e).then(function() {
                                return r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "wallets", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeBtnOnClick$Action
        }
        set _closeBtnOnClick$Action(e) {
            this.__closeBtnOnClick$Action = e
        }
        get _backBtnOnClick$Action() {
            return this.hasOwnProperty("__backBtnOnClick$Action") || (this.__backBtnOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    h = this.idService;
                return r.Logger.startActiveSpan("BackBtnOnClick", function(n) {
                    n && (n.setAttribute("code.function", "BackBtnOnClick"), n.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("BackBtnOnClick"), e = t.callContext(e), r.Navigation.navigateBack(null, e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__backBtnOnClick$Action
        }
        set _backBtnOnClick$Action(e) {
            this.__backBtnOnClick$Action = e
        }
        closeBtnOnClick$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("CloseBtnOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseBtnOnClick"), t.setAttribute("outsystems.function.key", "055ef609-a027-4acf-b7dc-4bc57ce327b1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._closeBtnOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        backBtnOnClick$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("BackBtnOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "BackBtnOnClick"), t.setAttribute("outsystems.function.key", "e1b08f55-26ec-4299-aa92-2784af3e1ebc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._backBtnOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onCloseAction$Action() {
            return this.hasOwnProperty("_onCloseAction$Action") || (this._onCloseAction$Action = function() {
                return Promise.resolve()
            }), this._onCloseAction$Action
        }
        set onCloseAction$Action(e) {
            this._onCloseAction$Action = e
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
            return P.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let g = o;
    B = g
}
var B, W = new r.Controller.ControllerFactory(B, E);
var m = f,
    oe = _.PlaceholderContent,
    ae = _.IteratorPlaceholderContent,
    u = class u extends k.BaseWebBlock {
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
            return [p, b]
        }
        get modelFactory() {
            return S
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                l = this.controller,
                e = this.idService,
                a = l.validationService,
                t = this.widgetsRecordProvider,
                h = l.callContext(),
                n = u.ifWidget,
                I = u.textWidget,
                F = u.asPrimitiveValue,
                $ = u.getTranslation,
                v = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(d, {
                align: 0,
                animate: !1,
                style: "wallet-overlay-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainWalletOverlayContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: "wallet-title-container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: t
            }, n(o.variables.hideBackButtonIn, !1, this, function() {
                return []
            }, function() {
                return [i.createElement(C, {
                    extendedEvents: {
                        onClick: s(function() {
                            var c = h.clone();
                            l.backBtnOnClick$Action(l.callContext(c))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px;"
                    },
                    image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.backicon2.png"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: e,
                        name: "BackBtn"
                    },
                    _widgetRecordProvider: t
                })]
            }), i.createElement(d, {
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
            }, i.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: o.variables.pageTitleIn,
                _idProps: {
                    service: e,
                    name: "OverlayTItle"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: m.Model.calculateDataFetchStatus(o.variables._pageTitleInDataFetchStatus)
            })), n(o.variables.hideCloseButtonIn, !1, this, function() {
                return []
            }, function() {
                return [i.createElement(C, {
                    extendedEvents: {
                        onClick: s(function() {
                            return Promise.resolve().then(function() {
                                var c = h.clone();
                                return l.closeBtnOnClick$Action(l.callContext(c))
                            })
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "font-size: 16px; padding: 0px 6px 0px 0px;"
                    },
                    image: m.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                    style: "cursor-pointer",
                    type: 0,
                    _idProps: {
                        service: e,
                        name: "CloseBtn"
                    },
                    _widgetRecordProvider: t
                })]
            })), i.createElement(d, {
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
            }, n(o.variables.hideWalletHeaderIn, !1, this, function() {
                return []
            }, function() {
                return [i.createElement(p, {
                    getOwnerSpan: s(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(c) {
                            l.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: e,
                        uuid: "7",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }), n(o.variables.isLoadingIn, !1, this, function() {
                return [i.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "wallet-loading-container",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, i.createElement(b, {
                    getOwnerSpan: s(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(c) {
                            l.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
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
                return [i.createElement(y, {
                    align: 0,
                    content: v.props.placeholders.walletOverlayPageContent,
                    style: o.getCachedValue(e.getId("WalletOverlayPageContent.Style"), function() {
                        return "full-width " + (A.isDesktop$Action(h).isDesktopOut ? "margin-top-m" : "margin-top-base")
                    }),
                    _idProps: {
                        service: e,
                        name: "WalletOverlayPageContent"
                    },
                    _widgetRecordProvider: t
                })]
            })), i.createElement(d, {
                align: 0,
                animate: !0,
                style: "wallet-overlay-footer",
                visible: !o.variables.isLoadingIn,
                _idProps: {
                    service: e,
                    name: "FooterWrapper"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: m.Model.calculateDataFetchStatus(o.variables._isLoadingInDataFetchStatus)
            }, i.createElement(y, {
                align: 0,
                content: v.props.placeholders.mobileFooterContent,
                _idProps: {
                    service: e,
                    name: "MobileFooterContent"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
s(u, "View");
var O = u,
    se = O;
export {
    se as a
};