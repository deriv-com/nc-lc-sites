import {
    a as k
} from "./_oschunk-CYRJE4ZJ.js";
import {
    a as C
} from "./_oschunk-M2HM6MS3.js";
import {
    b as y,
    h as m,
    j as g,
    r as w
} from "./_oschunk-42NACYKQ.js";
import {
    a as P
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as H,
    g as R,
    i as _
} from "./_oschunk-RKYF3TWC.js";
import {
    c as O
} from "./_oschunk-DOFMR6EA.js";
import {
    l as b
} from "./_oschunk-2ZI4JQLD.js";
import {
    ia as f
} from "./_oschunk-2JKANR6M.js";
import {
    c as o,
    g as F
} from "./_oschunk-DVBKI63I.js";
var n = F(H());
var A = {};
var l = f; {
    let r = class r extends l.Controller.BaseViewController {
        constructor(e, s, t) {
            super(e, s, t, A);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var s = this.model,
                    t = this.controller,
                    d = this.idService;
                return l.Logger.startActiveSpan("ButtonOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "ButtonOnClick"), a.setAttribute("outsystems.function.key", "7f1cb0c4-6aa8-4e73-b765-b7b4a7114ccb"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ButtonOnClick"), e = t.callContext(e), l.Flow.executeAsyncFlow(function() {
                            return t.onClick$Action(e)
                        })
                    }, function() {
                        a && a.end()
                    })
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        buttonOnClick$Action(e) {
            var s = this.controller;
            return l.Logger.startActiveSpan("ButtonOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ButtonOnClick"), t.setAttribute("outsystems.function.key", "7f1cb0c4-6aa8-4e73-b765-b7b4a7114ccb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._buttonOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
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
            return O.defaultTimeout
        }
    };
    o(r, "ControllerInner");
    let p = r;
    x = p
}
var x, I = new l.Controller.ControllerFactory(x, P);
var i = f,
    D = _.PlaceholderContent,
    ie = _.IteratorPlaceholderContent,
    c = class c extends R.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.CashierLock"
        }
        static getAttributes() {
            return {
                codeFunction: "CashierLock",
                functionKey: "1f26c60d-de60-4450-b1b2-480266d540b6",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return [C]
        }
        get modelFactory() {
            return k
        }
        get controllerFactory() {
            return I
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                v = this.controller,
                e = this.idService,
                s = v.validationService,
                t = this.widgetsRecordProvider,
                d = v.callContext(),
                a = c.ifWidget,
                W = c.textWidget,
                u = c.asPrimitiveValue,
                T = c.getTranslation,
                E = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(C, {
                getOwnerSpan: o(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    PageTitle: r.variables.pageTitleIn,
                    _pageTitleInDataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._pageTitleInDataFetchStatus),
                    IsLoading: r.variables.isLoadingIn,
                    _isLoadingInDataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._isLoadingInDataFetchStatus),
                    HideBackButton: !0,
                    HideWalletHeader: !0
                },
                events: {
                    _handleError: o(function(h) {
                        v.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    walletOverlayPageContent: new D(function() {
                        return [n.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(w, {
                            image: i.Navigation.VersionedURL.getVersionedUrl("img/tradershub.cashier_down.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }), n.createElement(m, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s text-align-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DescriptionWrapper"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(g, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: r.getCachedValue(e.getId("UTcxIQAkn0q2glmWqiyuzg.Style"), function() {
                                return "font-bold " + (b.isDesktop$Action(d).isDesktopOut ? "heading5" : "heading4")
                            }),
                            value: r.variables.titleIn,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
                        }), n.createElement(g, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            value: r.variables.descriptionIn,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._descriptionInDataFetchStatus)
                        })), n.createElement(m, {
                            align: 0,
                            animate: !0,
                            visible: r.getCachedValue(e.getId("ButtonWrapper.Visible"), function() {
                                return b.isDesktop$Action(d).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                name: "ButtonWrapper"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(y, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var h = d.clone();
                                    return v.buttonOnClick$Action(v.callContext(h))
                                })
                            }, "onClick"),
                            style: r.getCachedValue(e.getId("ayrLqFf9ZEW7DIZkxrMfiA.Style"), function() {
                                return "btn btn-primary " + (b.isDesktop$Action(d).isDesktopOut ? "" : "full-width")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(g, {
                            value: r.variables.buttonTextIn,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._buttonTextInDataFetchStatus)
                        }))))]
                    }),
                    mobileFooterContent: new D(function() {
                        return [n.createElement(m, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-top: 1px solid var(--color-neutral-3);"
                            },
                            style: "padding-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(y, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    i.Navigation.navigateTo(i.Navigation.generateScreenURL("tradershub", "wallets", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (h) {
                                    if (h.name !== "RedirectOccurredException") throw h
                                }
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(g, {
                            value: r.variables.buttonTextIn,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: i.Model.calculateDataFetchStatus(r.variables._buttonTextInDataFetchStatus)
                        })))]
                    })
                },
                _dependencies: [u(r.variables.buttonTextIn), u(r.variables.descriptionIn), u(r.variables._buttonTextInDataFetchStatus), u(r.variables._descriptionInDataFetchStatus), u(r.variables._titleInDataFetchStatus), u(r.variables.titleIn)]
            }))
        }
    };
o(c, "View");
var S = c,
    ae = S;
export {
    ae as a
};