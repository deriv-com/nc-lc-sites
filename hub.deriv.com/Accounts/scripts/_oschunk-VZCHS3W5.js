import {
    a as G,
    b as te,
    c as ne
} from "./_oschunk-ENDX3VJY.js";
import {
    a as F
} from "./_oschunk-FTYAL2B7.js";
import {
    b as Se
} from "./_oschunk-GPNNXU3M.js";
import {
    d as S,
    f as Z,
    k as y,
    n as ee,
    p as H,
    r as A
} from "./_oschunk-M2CKCDBB.js";
import {
    a as D
} from "./_oschunk-NQZZDANH.js";
import {
    a as j,
    g as P,
    i as E
} from "./_oschunk-WZHUAZJP.js";
import {
    a as he,
    b as ge,
    c as me,
    d as fe,
    e as _e
} from "./_oschunk-4PNSWRUJ.js";
import {
    m as I,
    o as R
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as K,
    a as x
} from "./_oschunk-UATY3RVV.js";
import {
    ia as b
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var k = B(j());
var pe = b; {
    let i = class i extends pe.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var o = this.controller;
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
            return R.defaultTimeout
        }
    };
    n(i, "ControllerInner");
    let p = i;
    ye = p
}
var ye, be = new pe.Controller.ControllerFactory(ye, D);
var Oe = b,
    re = E.PlaceholderContent,
    je = E.IteratorPlaceholderContent,
    V = class V extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutTopMenu"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutTopMenu",
                functionKey: "2cc2a24c-0ee3-4a4e-b7ef-32c7feff1982",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.LayoutTopMenu.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [G, ne, te]
        }
        get modelFactory() {
            return he
        }
        get controllerFactory() {
            return be
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                d = V.ifWidget,
                g = V.textWidget,
                u = V.asPrimitiveValue,
                W = V.getTranslation,
                c = this;
            return k.createElement("div", this.getRootNodeProperties(), k.createElement(G, {
                getOwnerSpan: n(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        s.handleError(a)
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
                    onDesktop: new re(function() {
                        return [k.createElement(ne, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    }),
                    onTablet: re.Empty,
                    onPhone: new re(function() {
                        return [k.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "layout-top--mobile",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, k.createElement(te, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), k.createElement(y, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: Oe.Navigation.VersionedURL.getVersionedUrl("img/Accounts.LabelPairedBellMdRegularIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "NotificationIcon"
                            },
                            _widgetRecordProvider: t
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
n(V, "View");
var ae = V,
    qe = ae;
var l = B(j());
var f = b; {
    let i = class i extends f.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _logOutOnClick$Action() {
            return this.hasOwnProperty("__logOutOnClick$Action") || (this.__logOutOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return f.Logger.startActiveSpan("LogOutOnClick", function(d) {
                    return d && (d.setAttribute("code.function", "LogOutOnClick"), d.setAttribute("outsystems.function.key", "3926b8a3-f7e6-4a61-a445-39301ba20d97"), d.setAttribute("outsystems.function.owner.name", "Accounts"), d.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("LogOutOnClick"), e = t.callContext(e), f.Flow.executeAsyncFlow(function() {
                            return r.flush(), R.handleLogout$Action(e)
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 1)
            }), this.__logOutOnClick$Action
        }
        set _logOutOnClick$Action(e) {
            this.__logOutOnClick$Action = e
        }
        get _menuItemEvent$Action() {
            return this.hasOwnProperty("__menuItemEvent$Action") || (this.__menuItemEvent$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    d = this.idService;
                return f.Logger.startActiveSpan("MenuItemEvent", function(g) {
                    g && (g.setAttribute("code.function", "MenuItemEvent"), g.setAttribute("outsystems.function.key", "e3f7501c-3088-4e1c-8bce-b29766999b24"), g.setAttribute("outsystems.function.owner.name", "Accounts"), g.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("MenuItemEvent"), r = o.callContext(r);
                        var u = new f.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.Layouts.LayoutSideMenu.MenuItemEvent$vars")));
                        if (u.value.selectedItemInLocal = e, t.variables.activeSectionIn = u.value.selectedItemInLocal, t.variables.activeSectionIn === "profile") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Profile", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), r, !0);
                        if (t.variables.activeSectionIn === "verification") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Verification", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), r, !0);
                        if (t.variables.activeSectionIn === "assessments") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Assessments", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), r, !0);
                        if (t.variables.activeSectionIn === "security") return f.Navigation.navigateTo(f.Navigation.generateScreenURL("Accounts", "Security", {}), f.Transitions.createTransition(f.Transitions.TransitionAnimation.Default), r, !0)
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__menuItemEvent$Action
        }
        set _menuItemEvent$Action(e) {
            this.__menuItemEvent$Action = e
        }
        get _footerItemEvent$Action() {
            return this.hasOwnProperty("__footerItemEvent$Action") || (this.__footerItemEvent$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    d = this.idService;
                return f.Logger.startActiveSpan("FooterItemEvent", function(g) {
                    g && (g.setAttribute("code.function", "FooterItemEvent"), g.setAttribute("outsystems.function.key", "ff6c9379-79aa-435e-a642-44628f2004fe"), g.setAttribute("outsystems.function.owner.name", "Accounts"), g.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("FooterItemEvent"), r = o.callContext(r);
                        var u = new f.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.Layouts.LayoutSideMenu.FooterItemEvent$vars")));
                        u.value.selectedMenuInLocal = e, t.variables.activeMenuIn = u.value.selectedMenuInLocal
                    } finally {
                        g && g.end()
                    }
                }, 1)
            }), this.__footerItemEvent$Action
        }
        set _footerItemEvent$Action(e) {
            this.__footerItemEvent$Action = e
        }
        logOutOnClick$Action(e) {
            var r = this.controller;
            return f.Logger.startActiveSpan("LogOutOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "LogOutOnClick"), t.setAttribute("outsystems.function.key", "3926b8a3-f7e6-4a61-a445-39301ba20d97"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), f.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._logOutOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        menuItemEvent$Action(e, r) {
            var t = this.controller;
            return f.Logger.startActiveSpan("MenuItemEvent__proxy", function(o) {
                o && (o.setAttribute("code.function", "MenuItemEvent"), o.setAttribute("outsystems.function.key", "e3f7501c-3088-4e1c-8bce-b29766999b24"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._menuItemEvent$Action, r, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        footerItemEvent$Action(e, r) {
            var t = this.controller;
            return f.Logger.startActiveSpan("FooterItemEvent__proxy", function(o) {
                o && (o.setAttribute("code.function", "FooterItemEvent"), o.setAttribute("outsystems.function.key", "ff6c9379-79aa-435e-a642-44628f2004fe"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._footerItemEvent$Action, r, e)
                } finally {
                    o && o.end()
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
            return R.defaultTimeout
        }
    };
    n(i, "ControllerInner");
    let p = i;
    Y = p, Y.registerVariableGroupType("Accounts.Layouts.LayoutSideMenu.MenuItemEvent$vars", [{
        name: "SelectedItem",
        attrName: "selectedItemInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), Y.registerVariableGroupType("Accounts.Layouts.LayoutSideMenu.FooterItemEvent$vars", [{
        name: "SelectedMenu",
        attrName: "selectedMenuInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }])
}
var Y, Ae = new f.Controller.ControllerFactory(Y, D);
var $ = B(j());
var O = b; {
    let i = class i extends O.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    d = this.idService;
                return O.Logger.startActiveSpan("OnClick", function(g) {
                    return g && (g.setAttribute("code.function", "OnClick"), g.setAttribute("outsystems.function.key", "d22e7ef8-f404-4bbb-af3a-d6b38de697a6"), g.setAttribute("outsystems.function.owner.name", "Accounts"), g.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), O.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnClick"), r = o.callContext(r);
                        var u = new O.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("Accounts.Common.MenuItem.OnClick$vars")));
                        return u.value.referenceInLocal = e, O.Flow.executeAsyncFlow(function() {
                            return o.event$Action(u.value.referenceInLocal, r)
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onClick$Action(e, r) {
            var t = this.controller;
            return O.Logger.startActiveSpan("OnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnClick"), o.setAttribute("outsystems.function.key", "d22e7ef8-f404-4bbb-af3a-d6b38de697a6"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), O.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onClick$Action, r, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
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
            return R.defaultTimeout
        }
    };
    n(i, "ControllerInner");
    let p = i;
    oe = p, oe.registerVariableGroupType("Accounts.Common.MenuItem.OnClick$vars", [{
        name: "Reference",
        attrName: "referenceInLocal",
        mandatory: !0,
        dataType: O.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }])
}
var oe, Ee = new O.Controller.ControllerFactory(oe, D);
var De = b,
    gt = E.PlaceholderContent,
    mt = E.IteratorPlaceholderContent,
    T = class T extends P.BaseWebBlock {
        static get displayName() {
            return "Common.MenuItem"
        }
        static getAttributes() {
            return {
                codeFunction: "MenuItem",
                functionKey: "d6591675-45df-484b-a801-4bc67a6d44be",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.MenuItem.css"]
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
            return Ee
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                d = T.ifWidget,
                g = T.textWidget,
                u = T.asPrimitiveValue,
                W = T.getTranslation,
                c = this;
            return $.createElement("div", this.getRootNodeProperties(), $.createElement(S, {
                align: 0,
                animate: !1,
                style: i.getCachedValue(e.getId("FB45_jahRkOmLWWoE6e82g.Style"), function() {
                    return "tab--layout display-flex align-items-center justify-content-space-between " + (i.variables.isSelectedIn ? "active-tab" : "")
                }, function() {
                    return i.variables.isSelectedIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: De.Model.calculateDataFetchStatus(i.variables._isSelectedInDataFetchStatus)
            }, $.createElement(S, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        return Promise.resolve().then(function() {
                            var a = o.clone();
                            return s.onClick$Action(i.variables.refIn, s.callContext(a))
                        })
                    }, "onClick")
                },
                style: "display-flex column-gap-s align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, $.createElement(H, {
                align: 0,
                content: c.props.placeholders.iconplaceholder,
                _idProps: {
                    service: e,
                    name: "Iconplaceholder"
                },
                _widgetRecordProvider: t
            }), $.createElement(H, {
                align: 0,
                content: c.props.placeholders.titleplaceholder,
                _idProps: {
                    service: e,
                    name: "Titleplaceholder"
                },
                _widgetRecordProvider: t
            })), $.createElement(H, {
                align: 0,
                content: c.props.placeholders.trailingcontent,
                _idProps: {
                    service: e,
                    name: "Trailingcontent"
                },
                _widgetRecordProvider: t
            })))
        }
    };
n(T, "View");
var se = T,
    C = se;
var le = B(j());
var Ce = {};

function ce(p, i, s, e) {
    p.OnInitialize = i.InitializedHandler
}
n(ce, "default");
var _ = b; {
    let i = class i extends _.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ce);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: n(function(d) {
                    return d = d === void 0 ? "" : d, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, _.DataConversion.JSNodeParamConverter.from(d, _.DataTypes.DataTypes.Text)), o.callContext(), function(g) {
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
                    o = this.idService;
                return _.Logger.startActiveSpan("OnInitialize", function(d) {
                    d && (d.setAttribute("code.function", "OnInitialize"), d.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var g = new _.DataTypes.VariableHolder;
                        I.logEvent$Action(K.logType.general, "Going to create InlineSVG", e), g.value = I.generateUniqueId$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), r.variables.internal_ConfigsVar.uniqueIdAttr = g.value.unique_IDOut, r.variables.internal_ConfigsVar.sVGCodeAttr = r.variables.sVGCodeIn, r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, I.inlineSVGCreate$Action(r.variables.internal_ConfigsVar, e), t._registerCallbacks$Action(e)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    o = this.controller,
                    d = this.idService;
                return _.Logger.startActiveSpan("InitializedHandler", function(g) {
                    return g && (g.setAttribute("code.function", "InitializedHandler"), g.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), g.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), g.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), r = o.callContext(r);
                        var u = new _.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars")));
                        return u.value.inlineSVGIdInLocal = e, _.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(u.value.inlineSVGIdInLocal, r)
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("RegisterCallbacks", function(d) {
                    d && (d.setAttribute("code.function", "RegisterCallbacks"), d.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var g = new _.DataTypes.VariableHolder;
                        g.value = _.Logger.startActiveSpan("GetCallbackHandlers", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandlers"), u.setAttribute("outsystems.function.key", "9b91d794-4429-4af6-b0bd-2a7253bbdfa6"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ce, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnInitialize: _.DataConversion.JSNodeParamConverter.to(null, _.DataTypes.DataTypes.Object)
                                }, function(W) {
                                    var c = new(t.constructor.getVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return c.onInitializeOut = _.DataConversion.JSNodeParamConverter.from(W.OnInitialize, _.DataTypes.DataTypes.Object), c
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), I.inlineSVGRegisterCallback$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, K.registeredCallbackEvents.initialized, g.value.onInitializeOut, e)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("OnDestroy", function(d) {
                    d && (d.setAttribute("code.function", "OnDestroy"), d.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), I.inlineSVGDestroy$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e)
                    } finally {
                        d && d.end()
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
                    o = this.idService;
                return _.Logger.startActiveSpan("OnParametersChanged", function(d) {
                    d && (d.setAttribute("code.function", "OnParametersChanged"), d.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.sVGCodeIn !== r.variables.internal_ConfigsVar.sVGCodeAttr && (r.variables.internal_ConfigsVar.sVGCodeAttr = r.variables.sVGCodeIn, I.inlineSVGChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "SVGCode", r.variables.sVGCodeIn, e)), r.variables.extendedClassIn !== r.variables.internal_ConfigsVar.extendedClassAttr && (r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, I.inlineSVGChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.extendedClassIn, e))
                    } finally {
                        d && d.end()
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
                    o = this.idService;
                return _.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), d.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), d.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), I.inlineSVGInitialize$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), I.logEvent$Action(K.logType.general, "InlineSVG created", e)
                    } finally {
                        d && d.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "16d8197c-f524-454b-87e8-248b777f7a19"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return _.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "23325e27-1714-4616-ba98-0a2043f685a1"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "8537c7ac-98fa-46d2-99b7-0bb80061b601"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "a086a83f-7dcf-4c12-9aca-f940817a1ff0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "a2ff6ca3-3e20-4772-b3c1-180a72b4024f"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return _.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "f87f2c0b-771a-45fe-953d-27cd08e51f3e"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
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
                    o = this.idService;
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
                    o = this.idService;
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
                    o = this.idService;
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
                    o = this.idService;
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
            return I.defaultTimeout
        }
    };
    n(i, "ControllerInner");
    let p = i;
    X = p, X.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.InitializedHandler$vars", [{
        name: "InlineSVGId",
        attrName: "inlineSVGIdInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }]), X.registerVariableGroupType("OutSystemsUI.Utilities.InlineSVG.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnInitialize",
        attrName: "onInitializeOut",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Object,
        defaultValue: n(function() {
            return null
        }, "defaultValue")
    }])
}
var X, we = new _.Controller.ControllerFactory(X, Se);
var xt = E.PlaceholderContent,
    Ht = E.IteratorPlaceholderContent,
    N = class N extends P.BaseWebBlock {
        static get displayName() {
            return "Utilities.InlineSVG"
        }
        static getAttributes() {
            return {
                codeFunction: "InlineSVG",
                functionKey: "58181461-a594-47fd-bfd1-2188b1380220",
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
            return me
        }
        get controllerFactory() {
            return we
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                d = N.ifWidget,
                g = N.textWidget,
                u = N.asPrimitiveValue,
                W = N.getTranslation,
                c = this;
            return le.createElement("div", this.getRootNodeProperties(), d(!1, !1, this, function() {
                return []
            }, function() {
                return [le.createElement(S, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: i.variables.internal_ConfigsVar.uniqueIdAttr,
                        style: "height: 100%;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "osui-inline-svg svg-wrapper",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "SVG"
                    },
                    _widgetRecordProvider: t
                })]
            }))
        }
    };
n(N, "View");
var de = N,
    w = de;
var q = B(j());
var L = b; {
    let i = class i extends L.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return L.Logger.startActiveSpan("OnClick", function(d) {
                    return d && (d.setAttribute("code.function", "OnClick"), d.setAttribute("outsystems.function.key", "dbfc8ad5-0e17-4bbe-b9f1-1d58fe1c1b99"), d.setAttribute("outsystems.function.owner.name", "Accounts"), d.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), L.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), L.Flow.executeAsyncFlow(function() {
                            return t.event$Action(r.variables.refIn, e)
                        })
                    }, function() {
                        d && d.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        onClick$Action(e) {
            var r = this.controller;
            return L.Logger.startActiveSpan("OnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "dbfc8ad5-0e17-4bbe-b9f1-1d58fe1c1b99"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), L.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get event$Action() {
            return this.hasOwnProperty("_event$Action") || (this._event$Action = function() {
                return Promise.resolve()
            }), this._event$Action
        }
        set event$Action(e) {
            this._event$Action = e
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
            return R.defaultTimeout
        }
    };
    n(i, "ControllerInner");
    let p = i;
    Ie = p
}
var Ie, Pe = new L.Controller.ControllerFactory(Ie, D);
var Re = b,
    Kt = E.PlaceholderContent,
    Jt = E.IteratorPlaceholderContent,
    M = class M extends P.BaseWebBlock {
        static get displayName() {
            return "Common.FooterItem"
        }
        static getAttributes() {
            return {
                codeFunction: "FooterItem",
                functionKey: "2319ef61-67a7-42bb-8f4f-87a8be66021e",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.FooterItem.css"]
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
            return Pe
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                d = M.ifWidget,
                g = M.textWidget,
                u = M.asPrimitiveValue,
                W = M.getTranslation,
                c = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(S, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        return Promise.resolve().then(function() {
                            var a = o.clone();
                            return s.onClick$Action(s.callContext(a))
                        })
                    }, "onClick")
                },
                style: "display-flex flex-direction-column align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, q.createElement(H, {
                align: 0,
                content: c.props.placeholders.sVGPlaceholder,
                style: i.getCachedValue(e.getId("SVGPlaceholder.Style"), function() {
                    return "footer-item--image " + (i.variables.isSelectedIn ? "footer-item--selected" : "")
                }, function() {
                    return i.variables.isSelectedIn
                }),
                _idProps: {
                    service: e,
                    name: "SVGPlaceholder"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Re.Model.calculateDataFetchStatus(i.variables._isSelectedInDataFetchStatus)
            }), q.createElement(H, {
                align: 0,
                content: c.props.placeholders.textPlaceholder,
                style: i.getCachedValue(e.getId("TextPlaceholder.Style"), function() {
                    return "footer-item--text font-size-xs " + (i.variables.isSelectedIn ? "footer-item--selected" : "")
                }, function() {
                    return i.variables.isSelectedIn
                }),
                _idProps: {
                    service: e,
                    name: "TextPlaceholder"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Re.Model.calculateDataFetchStatus(i.variables._isSelectedInDataFetchStatus)
            })))
        }
    };
n(M, "View");
var ue = M,
    z = ue;
var h = b,
    v = E.PlaceholderContent,
    dn = E.IteratorPlaceholderContent,
    U = class U extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutSideMenu"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutSideMenu",
                functionKey: "70e6cd7e-814c-4348-835c-ae61eded75a5",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.LayoutSideMenu.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [G, C, F, w, z]
        }
        get modelFactory() {
            return _e
        }
        get controllerFactory() {
            return Ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                r = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                d = U.ifWidget,
                g = U.textWidget,
                u = U.asPrimitiveValue,
                W = U.getTranslation,
                c = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(G, {
                getOwnerSpan: n(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(a) {
                        s.handleError(a)
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
                    onDesktop: new v(function() {
                        return [l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "padding-top-m padding-bottom-m side-bar-layout-desktop display-grid row-gap-base full-height-minus-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "font-size: 24px;"
                            },
                            style: "font-bold side-bar-layout-desktop--title-text",
                            text: ["Account settings"],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        })), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "profile",
                                IsSelected: i.variables.activeSectionIn === "profile",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
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
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneCircleUserRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("26Gz1jmGZ0SP3VE9cB8WZA.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "profile" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Profile"],
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "verification",
                                IsSelected: i.variables.activeSectionIn === "verification",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "8",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneBadgeCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("DfMlTzLSDUO3+R9zcJvtjg.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "verification" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Verification"],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSelected: i.variables.activeSectionIn === "assessments",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus),
                                Ref: "assessments"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneFileCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("7o7I6ObXI06RHuEZgZZj2g.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "assessments" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Assessments"],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "security",
                                IsSelected: i.variables.activeSectionIn === "security",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneShieldCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("DytgQeKHukCbyBrHj4My+g.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "security" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Security"],
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "integration",
                                IsSelected: i.variables.activeSectionIn === "integration",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "17",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandalonePuzzleRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("79Wj9evy806hFGT8+JhQXA.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "integration" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Integration"],
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.base
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "20",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "help",
                                IsSelected: i.variables.activeSectionIn === "help",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "21",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneLifeRingRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("BYPsaGLzj0uXhmAYWF9yzw.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "help" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Help"],
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: v.Empty
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "language",
                                IsSelected: i.variables.activeSectionIn === "language",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "24",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneLanguageRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("0frCPujQ3UaxY+9UOWq9mA.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "language" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Language"],
                                        _idProps: {
                                            service: e,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.FlagUnitedKingdomIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        })), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex column-gap-s align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(y, {
                            image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneRightFromBracketRegularIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }), l.createElement(ee, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: n(function() {
                                return Promise.resolve().then(function() {
                                    var a = o.clone();
                                    return s.logOutOnClick$Action(s.callContext(a))
                                })
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: #dc2020;"
                            },
                            style: "",
                            text: ["Log out"],
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }))))]
                    }),
                    onTablet: v.Empty,
                    onPhone: new v(function() {
                        return [l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column justify-content-space-between full-height-minus-header side-layout--phone",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "side-layout--phone__header padding-base font-size-h6 font-bold",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: t
                        }, "Account settings"), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "padding-base side-layout--phone__user--layout display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex column-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(w, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36" role="img" fill="##272B30" id="selected_downloadable_icon_id"><g><path d="M19.313 25.547A10.51 10.51 0 0 0 22.5 18c0-5.766-4.734-10.5-10.5-10.5C6.188 7.5 1.5 12.234 1.5 18c0 2.953 1.219 5.625 3.14 7.547C5.298 22.969 7.689 21 10.5 21h3c2.766 0 5.156 1.969 5.813 4.547m-1.36 1.078v.047c-.187-2.344-2.11-4.172-4.453-4.172h-3c-2.39 0-4.312 1.828-4.5 4.172 1.688 1.172 3.75 1.828 6 1.828 2.203 0 4.266-.656 5.953-1.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-12c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C13.5 13.969 12.797 13.5 12 13.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C10.453 17.578 11.156 18 12 18m-3.75-2.25c0-1.312.703-2.531 1.875-3.234 1.125-.657 2.578-.657 3.75 0 1.125.703 1.875 1.922 1.875 3.234 0 1.36-.75 2.578-1.875 3.281-1.172.657-2.625.657-3.75 0-1.172-.703-1.875-1.922-1.875-3.281"></path></g><defs><clipPath id="0d7a9972700851a6b81d0e436b8b873b__a"><path d="M0 0h24v36H0z"></path></clipPath></defs></svg>'
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "37",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column font-size-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "38"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(Z, {
                            style: "side-layout--phone__user--name font-bold",
                            value: i.variables.userIn.nameAttr,
                            _idProps: {
                                service: e,
                                name: "Username"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._userInDataFetchStatus)
                        }), l.createElement(Z, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            value: i.variables.userIn.emailAttr,
                            _idProps: {
                                service: e,
                                name: "UserEmail"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._userInDataFetchStatus)
                        }))), l.createElement(w, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "side-layout--phone__chevron",
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>'
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "41",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "side-layout--phone__options",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "verification",
                                IsSelected: i.variables.activeSectionIn === "verification",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "43",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneBadgeCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "44"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("m9_KPUnE1kWviQLEPUbYGA.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "verification" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Verification"],
                                        _idProps: {
                                            service: e,
                                            uuid: "45"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>',
                                            ExtendedClass: "side-layout--phone__chevron"
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "46",
                                            alias: "13"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.small
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "47",
                                alias: "14"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "assessments",
                                IsSelected: i.variables.activeSectionIn === "assessments",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "48",
                                alias: "15"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneFileCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "49"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("Ft9Q66pqx06iJeMQwnqgQg.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "assessments" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Assessments"],
                                        _idProps: {
                                            service: e,
                                            uuid: "50"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>',
                                            ExtendedClass: "side-layout--phone__chevron"
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "51",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.small
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "52",
                                alias: "17"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSelected: i.variables.activeSectionIn === "security",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus),
                                Ref: "security"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "53",
                                alias: "18"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneShieldCheckRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "54"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("iLvsqmcKQU6_8fpsXfxuTQ.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "security" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Security"],
                                        _idProps: {
                                            service: e,
                                            uuid: "55"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>',
                                            ExtendedClass: "side-layout--phone__chevron"
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "56",
                                            alias: "19"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.small
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "57",
                                alias: "20"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSelected: i.variables.activeSectionIn === "integration",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus),
                                Ref: "integration"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "58",
                                alias: "21"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandalonePuzzleRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "59"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("qXmMchyNSk22PT8miWU9DQ.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "integration" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Integration"],
                                        _idProps: {
                                            service: e,
                                            uuid: "60"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ExtendedClass: "side-layout--phone__chevron",
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "61",
                                            alias: "22"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.small
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "62",
                                alias: "23"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSelected: i.variables.activeSectionIn === "help",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus),
                                Ref: "help"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "63",
                                alias: "24"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneLifeRingRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "64"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("YicNSteBpUq9VznUnD9LEQ.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "help" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Help"],
                                        _idProps: {
                                            service: e,
                                            uuid: "65"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ExtendedClass: "side-layout--phone__chevron",
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id" fill="#272b30"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "66",
                                            alias: "25"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        }), l.createElement(F, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Space: x.space.small
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "67",
                                alias: "26"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), l.createElement(C, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "language",
                                IsSelected: i.variables.activeSectionIn === "language",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.menuItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "68",
                                alias: "27"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                iconplaceholder: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneLanguageRegularIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                titleplaceholder: new v(function() {
                                    return [l.createElement(A, {
                                        style: i.getCachedValue(e.getId("EHO2KGLVvEKV3FiGeM7eYg.Style"), function() {
                                            return "side-bar-layout-desktop__menu-item " + (i.variables.activeSectionIn === "language" ? "side-bar-layout-desktop__menu-item--bold" : "")
                                        }, function() {
                                            return i.variables.activeSectionIn
                                        }),
                                        text: ["Language"],
                                        _idProps: {
                                            service: e,
                                            uuid: "70"
                                        },
                                        _widgetRecordProvider: t,
                                        style_dataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeSectionInDataFetchStatus)
                                    })]
                                }),
                                trailingcontent: new v(function() {
                                    return [l.createElement(y, {
                                        image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.FlagUnitedKingdomIcon.svg"),
                                        style: "side-bar-layout-desktop--img",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "71"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                })
                            },
                            _dependencies: [u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
                        })), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex column-gap-s align-items-center side-layout--phone__logout",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "72"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(y, {
                            image: h.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneRightFromBracketRegularIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "73"
                            },
                            _widgetRecordProvider: t
                        }), l.createElement(ee, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            onClick: n(function() {
                                return Promise.resolve().then(function() {
                                    var a = o.clone();
                                    return s.logOutOnClick$Action(s.callContext(a))
                                })
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "74"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: #dc2020;"
                            },
                            style: "side-bar-layout-desktop--logout",
                            text: ["Log out"],
                            _idProps: {
                                service: e,
                                uuid: "75"
                            },
                            _widgetRecordProvider: t
                        })))), l.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "side-layout--phone__footer-layout display-flex justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "76"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(z, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "hub",
                                IsSelected: i.variables.activeMenuIn === "hub",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeMenuInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.footerItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "77",
                                alias: "28"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sVGPlaceholder: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><path d="M9.125 9a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM9.125 19a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM22.875 9h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m0 11.25a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z"></path></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "78",
                                            alias: "29"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }),
                                textPlaceholder: new v(function() {
                                    return ["Hub"]
                                })
                            },
                            _dependencies: []
                        }), l.createElement(z, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "cfd",
                                IsSelected: i.variables.activeMenuIn === "cfd",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeMenuInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.footerItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "79",
                                alias: "30"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sVGPlaceholder: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><g><path d="M21.084 28.667c-.69 0-1.38-.28-1.904-.827l-4.817-5.027a1.8 1.8 0 0 1 0-2.466l.881-.92a1.625 1.625 0 0 1 2.364 0l1.29 1.346V16.16c0-.96.755-1.747 1.675-1.747h1.048c.92 0 1.673.787 1.673 1.747v4.613l1.291-1.346a1.625 1.625 0 0 1 2.364 0l.881.92c.32.333.486.773.486 1.226 0 .454-.179.907-.485 1.227l-4.805 5.013a2.64 2.64 0 0 1-1.904.827zm-4.664-8.4a.39.39 0 0 0-.281.12l-.882.906a.415.415 0 0 0 0 .574l4.817 5.026c.55.574 1.457.574 2.007 0l4.804-5.026a.4.4 0 0 0 .115-.28.42.42 0 0 0-.115-.294l-.882-.92a.374.374 0 0 0-.55 0l-1.622 1.694c-.307.32-.78.413-1.175.24a1.12 1.12 0 0 1-.665-1.04V16.16a.407.407 0 0 0-.396-.413h-1.048a.407.407 0 0 0-.396.413v5.107c0 .453-.268.866-.664 1.04-.41.173-.87.08-1.176-.24l-1.623-1.694a.39.39 0 0 0-.28-.12zM11.743 17.56h-1.047c-.92 0-1.674-.787-1.674-1.747V11.2l-1.29 1.347c-.653.68-1.713.68-2.365 0l-.881-.92A1.76 1.76 0 0 1 4 10.4c0-.453.179-.907.486-1.227L9.29 4.16a2.635 2.635 0 0 1 3.82 0l4.818 5.013a1.8 1.8 0 0 1 0 2.467l-.882.92c-.652.68-1.712.68-2.364 0l-1.29-1.347v4.614c0 .96-.754 1.746-1.674 1.746zM9.226 9.573q.21 0 .422.08c.409.174.664.587.664 1.04V15.8c0 .227.18.413.396.413h1.048a.407.407 0 0 0 .396-.413v-5.107c0-.453.269-.866.665-1.04.409-.173.869-.08 1.175.24l1.623 1.694c.153.16.396.16.55 0l.881-.907a.415.415 0 0 0 0-.573L12.23 5.093a1.385 1.385 0 0 0-2.006 0L5.418 10.12a.4.4 0 0 0-.115.28c0 .107.039.213.115.293l.882.92c.153.16.396.16.55 0L8.471 9.92c.205-.213.486-.333.767-.333z"></path></g></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "80",
                                            alias: "31"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }),
                                textPlaceholder: new v(function() {
                                    return ["CFD"]
                                })
                            },
                            _dependencies: []
                        }), l.createElement(z, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsSelected: i.variables.activeMenuIn === "options",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeMenuInDataFetchStatus),
                                Ref: "options"
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.footerItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "81",
                                alias: "32"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sVGPlaceholder: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><g><path d="M6.84 28a2.82 2.82 0 0 1-2.813-2.813V18.08c0-.96.773-1.747 1.733-1.747h1.293c.96 0 1.747.787 1.747 1.747v1.907l1.52-1.52a4.64 4.64 0 0 1 3.293-1.374h3.467c.96 0 1.733.774 1.733 1.734v1.106a1.73 1.73 0 0 1-1.733 1.734h-2.667c-.52 0-1.04.213-1.413.586l-.96.96h1.907c.96 0 1.746.787 1.746 1.747v1.293c0 .96-.786 1.747-1.746 1.747zM5.76 17.68a.415.415 0 0 0-.413.413V25.2c0 .813.666 1.48 1.48 1.48h7.093a.415.415 0 0 0 .413-.413v-1.294a.415.415 0 0 0-.413-.413h-2.4a1.126 1.126 0 0 1-.8-1.92l1.307-1.307a3.32 3.32 0 0 1 2.36-.973h2.666c.227 0 .4-.173.4-.4v-1.107c0-.226-.173-.4-.4-.4h-3.466a3.34 3.34 0 0 0-2.36.974L9.36 21.293c-.32.32-.8.427-1.227.24a1.12 1.12 0 0 1-.693-1.04v-2.4a.415.415 0 0 0-.413-.413H5.733zM26.227 15.667h-1.294c-.96 0-1.746-.787-1.746-1.747v-1.907l-1.52 1.52a4.64 4.64 0 0 1-3.294 1.374h-3.466a1.73 1.73 0 0 1-1.733-1.734v-1.106c0-.96.773-1.734 1.733-1.734h2.666c.52 0 1.04-.213 1.414-.586l.96-.96H18.04c-.96 0-1.746-.787-1.746-1.747V5.747c0-.96.786-1.747 1.746-1.747h7.094a2.823 2.823 0 0 1 2.813 2.813v7.107c0 .96-.773 1.747-1.733 1.747zM23.4 10.4q.22 0 .44.08c.427.173.694.587.694 1.04v2.4c0 .227.186.413.413.413h1.293a.415.415 0 0 0 .414-.413V6.813c0-.813-.667-1.48-1.48-1.48H18.08a.415.415 0 0 0-.413.414V7.04c0 .227.186.413.413.413h2.4a1.127 1.127 0 0 1 .8 1.92l-1.306 1.307a3.32 3.32 0 0 1-2.36.973h-2.667c-.227 0-.4.174-.4.4v1.107c0 .227.173.4.4.4h3.467a3.34 3.34 0 0 0 2.36-.973l1.866-1.867c.213-.213.507-.333.8-.333z"></path></g></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "82",
                                            alias: "33"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }),
                                textPlaceholder: new v(function() {
                                    return ["Options"]
                                })
                            },
                            _dependencies: []
                        }), l.createElement(z, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "wallets",
                                IsSelected: i.variables.activeMenuIn === "wallets",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeMenuInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.footerItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "83",
                                alias: "34"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sVGPlaceholder: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><path d="M9.125 7.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C8.07 9 7.25 9.86 7.25 10.875v11.25C7.25 23.18 8.07 24 9.125 24h13.75c1.016 0 1.875-.82 1.875-1.875v-8.75c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 26 13.375v8.75a3.11 3.11 0 0 1-3.125 3.125H9.125C7.367 25.25 6 23.883 6 22.125v-11.25A3.11 3.11 0 0 1 9.125 7.75M21 18.688c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938"></path></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "84",
                                            alias: "35"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }),
                                textPlaceholder: new v(function() {
                                    return ["Wallets"]
                                })
                            },
                            _dependencies: []
                        }), l.createElement(z, {
                            getOwnerSpan: n(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Ref: "account",
                                IsSelected: i.variables.activeMenuIn === "account",
                                _isSelectedInDataFetchStatus: h.Model.calculateDataFetchStatus(i.variables._activeMenuInDataFetchStatus)
                            },
                            events: {
                                _handleError: n(function(a) {
                                    s.handleError(a)
                                }, "_handleError"),
                                event$Action: n(function(a) {
                                    var m = o.clone();
                                    s.footerItemEvent$Action(a, s.callContext(m))
                                }, "event$Action")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "85",
                                alias: "36"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sVGPlaceholder: new v(function() {
                                    return [l.createElement(w, {
                                        getOwnerSpan: n(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: n(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><path d="M22.094 22.79a8.76 8.76 0 0 0 2.656-6.29c0-4.805-3.945-8.75-8.75-8.75-4.844 0-8.75 3.945-8.75 8.75a8.89 8.89 0 0 0 2.617 6.29c.547-2.15 2.54-3.79 4.883-3.79h2.5c2.305 0 4.297 1.64 4.844 3.79m-1.133.898v.039c-.156-1.954-1.758-3.477-3.711-3.477h-2.5A3.754 3.754 0 0 0 11 23.727c1.406.976 3.125 1.523 5 1.523 1.836 0 3.555-.547 4.96-1.562M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-10c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874A1.87 1.87 0 0 0 16 16.5m-3.125-1.875c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.124 0 .938.586 1.563 1.601 1.563 2.695 0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.125 0a3.16 3.16 0 0 1-1.563-2.734"></path></svg>'
                                        },
                                        events: {
                                            _handleError: n(function(a) {
                                                s.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: r
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "86",
                                            alias: "37"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }),
                                textPlaceholder: new v(function() {
                                    return ["Account"]
                                })
                            },
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: [u(i.variables.activeMenuIn), u(i.variables.userIn.emailAttr), u(i.variables.userIn.nameAttr), u(i.variables._activeMenuInDataFetchStatus), u(i.variables._userInDataFetchStatus), u(i.variables._activeSectionInDataFetchStatus), u(i.variables.activeSectionIn)]
            }))
        }
    };
n(U, "View");
var ve = U,
    un = ve;
export {
    qe as a, w as b, un as c
};