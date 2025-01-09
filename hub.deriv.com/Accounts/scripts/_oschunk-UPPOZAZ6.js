import {
    a as Se
} from "./_oschunk-AFO3ZMSV.js";
import {
    a as lt
} from "./_oschunk-EU2TENQY.js";
import {
    a as ot,
    b as at,
    c as st,
    d as ct,
    e as de,
    f as ut,
    g as dt,
    h as ft,
    i as yt
} from "./_oschunk-2XQYSV6A.js";
import {
    c as pe
} from "./_oschunk-ENDX3VJY.js";
import {
    b as T
} from "./_oschunk-GPNNXU3M.js";
import {
    b as ue,
    d as S,
    f as Z,
    g as it,
    j as oe,
    k as F,
    n as Ce,
    p as w
} from "./_oschunk-M2CKCDBB.js";
import {
    a as ce
} from "./_oschunk-NQZZDANH.js";
import {
    a as x,
    g as E,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import {
    a as Q,
    i as Ae,
    k as _e,
    m as d,
    o as ie
} from "./_oschunk-KZFTAIEG.js";
import {
    Eg as O,
    Xb as nt,
    zg as le
} from "./_oschunk-UATY3RVV.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l,
    h as N
} from "./_oschunk-QHO7QY6K.js";
var $ = N(x());
var mt = h; {
    let a = class a extends mt.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
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
            return ie.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    vt = f
}
var vt, bt = new mt.Controller.ControllerFactory(vt, ce);
var Bt = h,
    ar = _.PlaceholderContent,
    sr = _.IteratorPlaceholderContent,
    W = class W extends E.BaseWebBlock {
        static get displayName() {
            return "Layouts.DesktopNavigationWizard"
        }
        static getAttributes() {
            return {
                codeFunction: "DesktopNavigationWizard",
                functionKey: "ebd1ada6-0599-4951-8e93-2ee4f608219c",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.DesktopNavigationWizard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [pe]
        }
        get modelFactory() {
            return ot
        }
        get controllerFactory() {
            return bt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = W.ifWidget,
                o = W.textWidget,
                s = W.asPrimitiveValue,
                v = W.getTranslation,
                u = this;
            return $.createElement("div", this.getRootNodeProperties(), $.createElement(S, {
                align: 0,
                animate: !1,
                style: "full-height",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, $.createElement(S, {
                align: 0,
                animate: !0,
                visible: !Q.getIsWorkflow(),
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, $.createElement(pe, {
                getOwnerSpan: l(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: l(function(b) {
                        y.handleError(b)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), $.createElement(S, {
                align: 0,
                animate: !1,
                style: a.getCachedValue(e.getId("MEadJ_0N+U2cofjObKCnyg.Style"), function() {
                    return "full-width display-grid navigation-wizard " + (Q.getIsWorkflow() ? "full-height" : "full-height-minus-header")
                }, function() {
                    return Q.getIsWorkflow()
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, $.createElement(S, {
                align: 0,
                animate: !1,
                style: "navigation-section row-gap-m display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, $.createElement(S, {
                align: 0,
                animate: !1,
                style: "font-bold font-size-h5 navigation-section__title",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, $.createElement(Z, {
                value: a.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Bt.Model.calculateDataFetchStatus(a.variables._titleInDataFetchStatus)
            })), $.createElement(w, {
                align: 0,
                content: u.props.placeholders.navigationItem,
                _idProps: {
                    service: e,
                    name: "NavigationItem"
                },
                _widgetRecordProvider: t
            })), $.createElement(w, {
                align: 0,
                content: u.props.placeholders.content,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
l(W, "View");
var Ie = W,
    lr = Ie;
var k = N(x());
var H = h; {
    let a = class a extends H.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickCloseIcon$Action() {
            return this.hasOwnProperty("__onClickCloseIcon$Action") || (this.__onClickCloseIcon$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return H.Logger.startActiveSpan("OnClickCloseIcon", function(o) {
                    o && (o.setAttribute("code.function", "OnClickCloseIcon"), o.setAttribute("outsystems.function.key", "a8e2dd70-2143-4ae1-93e2-5403d3dbbe9f"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnClickCloseIcon"), r = i.callContext(r);
                        var s = new H.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("Accounts.Layouts.DesktopContentHeader.OnClickCloseIcon$vars")));
                        s.value.isModalVisibleInLocal = e, Q.getIsWorkflow() ? ie.closeTab$Action(r) : t.variables.shouldDisplayExitConfimModalVar = s.value.isModalVisibleInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickCloseIcon$Action
        }
        set _onClickCloseIcon$Action(e) {
            this.__onClickCloseIcon$Action = e
        }
        get _onClickBackIcon$Action() {
            return this.hasOwnProperty("__onClickBackIcon$Action") || (this.__onClickBackIcon$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return H.Logger.startActiveSpan("OnClickBackIcon", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickBackIcon"), n.setAttribute("outsystems.function.key", "c34e2f0c-7943-428f-b975-96ae65d7ccc2"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), H.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickBackIcon"), e = t.callContext(e), H.Flow.executeAsyncFlow(function() {
                            return t.navigateBack$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickBackIcon$Action
        }
        set _onClickBackIcon$Action(e) {
            this.__onClickBackIcon$Action = e
        }
        onClickCloseIcon$Action(e, r) {
            var t = this.controller;
            return H.Logger.startActiveSpan("OnClickCloseIcon__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnClickCloseIcon"), i.setAttribute("outsystems.function.key", "a8e2dd70-2143-4ae1-93e2-5403d3dbbe9f"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickCloseIcon$Action, r, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onClickBackIcon$Action(e) {
            var r = this.controller;
            return H.Logger.startActiveSpan("OnClickBackIcon__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickBackIcon"), t.setAttribute("outsystems.function.key", "c34e2f0c-7943-428f-b975-96ae65d7ccc2"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), H.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickBackIcon$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get navigateBack$Action() {
            return this.hasOwnProperty("_navigateBack$Action") || (this._navigateBack$Action = function() {
                return Promise.resolve()
            }), this._navigateBack$Action
        }
        set navigateBack$Action(e) {
            this._navigateBack$Action = e
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
            return ie.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    Oe = f, Oe.registerVariableGroupType("Accounts.Layouts.DesktopContentHeader.OnClickCloseIcon$vars", [{
        name: "IsModalVisible",
        attrName: "isModalVisibleInLocal",
        mandatory: !0,
        dataType: H.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }])
}
var Oe, ht = new H.Controller.ControllerFactory(Oe, ce);
var ee = h,
    Sr = _.PlaceholderContent,
    Ir = _.IteratorPlaceholderContent,
    B = class B extends E.BaseWebBlock {
        static get displayName() {
            return "Layouts.DesktopContentHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "DesktopContentHeader",
                functionKey: "695bef3a-8b0a-44e5-aadf-0242b1805f9e",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Layouts.DesktopContentHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Se]
        }
        get modelFactory() {
            return ct
        }
        get controllerFactory() {
            return ht
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = B.ifWidget,
                o = B.textWidget,
                s = B.asPrimitiveValue,
                v = B.getTranslation,
                u = this;
            return k.createElement("div", this.getRootNodeProperties(), k.createElement(Se, {
                getOwnerSpan: l(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsOpen: a.variables.shouldDisplayExitConfimModalVar,
                    Heading: a.variables.exitConfimModalHeadingIn,
                    _headingInDataFetchStatus: ee.Model.calculateDataFetchStatus(a.variables._exitConfimModalHeadingInDataFetchStatus)
                },
                events: {
                    _handleError: l(function(b) {
                        y.handleError(b)
                    }, "_handleError"),
                    event$Action: l(function(b) {
                        var P = i.clone();
                        y.onClickCloseIcon$Action(b, y.callContext(P))
                    }, "event$Action")
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
                _dependencies: []
            }), k.createElement(S, {
                align: 0,
                animate: !1,
                style: "desktop-content-header align-items-center justify-content-space-between display-flex full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, k.createElement(Ce, {
                enabled: !0,
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var b = i.clone();
                        return y.onClickBackIcon$Action(y.callContext(b))
                    })
                }, "onClick"),
                visible: a.variables.shouldDisplayBackButtonIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: ee.Model.calculateDataFetchStatus(a.variables._shouldDisplayBackButtonInDataFetchStatus)
            }, k.createElement(F, {
                image: ee.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), k.createElement(S, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center desktop-content-header__text",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, k.createElement(Z, {
                style: "font-size-h5 font-bold",
                value: a.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ee.Model.calculateDataFetchStatus(a.variables._titleInDataFetchStatus)
            }), k.createElement(w, {
                align: 0,
                content: u.props.placeholders.additionalcontent,
                _idProps: {
                    service: e,
                    name: "Additionalcontent"
                },
                _widgetRecordProvider: t
            })), k.createElement(Ce, {
                enabled: !0,
                onClick: l(function() {
                    var b = i.clone();
                    y.onClickCloseIcon$Action(!0, y.callContext(b))
                }, "onClick"),
                visible: a.variables.shouldDisplayCloseIn,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: ee.Model.calculateDataFetchStatus(a.variables._shouldDisplayCloseInDataFetchStatus)
            }, k.createElement(F, {
                image: ee.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                style: "desktop-content-header__icon",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
l(B, "View");
var Ee = B,
    Or = Ee;
var we = N(x());
var gt = {};
var At = h; {
    let a = class a extends At.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, gt);
            var i = this.controller;
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    _t = f
}
var _t, Ct = new At.Controller.ControllerFactory(_t, T);
var Mt = h,
    Ur = _.PlaceholderContent,
    Vr = _.IteratorPlaceholderContent,
    M = class M extends E.BaseWebBlock {
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
            return at
        }
        get controllerFactory() {
            return Ct
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = M.ifWidget,
                o = M.textWidget,
                s = M.asPrimitiveValue,
                v = M.getTranslation,
                u = this;
            return we.createElement("div", this.getRootNodeProperties(), we.createElement(w, {
                align: 0,
                content: u.props.placeholders.content,
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
                style_dataFetchStatus: Mt.Model.calculateDataFetchStatus(a.variables._isVerticalInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
l(M, "View");
var Pe = M,
    Lr = Pe;
var re = N(x());
var pt = {};

function Re(f, a, y, e) {
    var r = document.getElementById(f.WidgetId),
        t = r.querySelector(".wizard-item-label").textContent;
    r.setAttribute("aria-label", t)
}
l(Re, "default");

function De(f, a, y) {
    event.keyCode === 13 && f.TriggerClick()
}
l(De, "default");
var R = h; {
    let a = class a extends R.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, pt);
            var i = this.controller;
            this.clientActionProxies = {
                triggerClick$Action: l(function() {
                    return i.executeActionInsideJSNode(i._triggerClick$Action.bind(i), i.callContext(), function(n) {
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
                    i = this.idService;
                return R.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "134be174-3029-4947-8cb2-316417ab0c04"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), R.Logger.startActiveSpan("SetAriaLabel", function(o) {
                            o && (o.setAttribute("code.function", "SetAriaLabel"), o.setAttribute("outsystems.function.key", "5e15b99f-7182-4f9e-b579-f7aed8d10959"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Re, "SetAriaLabel", "OnReady", {
                                    WidgetId: R.DataConversion.JSNodeParamConverter.to(i.getId("WizardWrapperItem"), R.DataTypes.DataTypes.Text)
                                }, function(s) {}, {}, {})
                            } finally {
                                o && o.end()
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
                    i = this.idService;
                return R.Logger.startActiveSpan("TriggerClick", function(n) {
                    return n && (n.setAttribute("code.function", "TriggerClick"), n.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("TriggerClick"), e = t.callContext(e), R.Flow.executeAsyncFlow(function() {
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
                    i = this.idService;
                return R.Logger.startActiveSpan("WizardItemOnKeypress", function(n) {
                    n && (n.setAttribute("code.function", "WizardItemOnKeypress"), n.setAttribute("outsystems.function.key", "7ec5b89d-888b-4353-b4b7-acc68a58ee22"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WizardItemOnKeypress"), e = t.callContext(e), R.Logger.startActiveSpan("OnKeyPress_CheckEnter", function(o) {
                            o && (o.setAttribute("code.function", "OnKeyPress_CheckEnter"), o.setAttribute("outsystems.function.key", "42174d82-1844-4efd-9901-f8b9db0600e7"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(De, "OnKeyPress_CheckEnter", "WizardItemOnKeypress", null, function(s) {}, {
                                    TriggerClick: t.clientActionProxies.triggerClick$Action
                                }, {})
                            } finally {
                                o && o.end()
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
            return R.Logger.startActiveSpan("OnReady__proxy", function(t) {
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
            return R.Logger.startActiveSpan("TriggerClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "TriggerClick"), t.setAttribute("outsystems.function.key", "34244f6e-370e-4c05-a372-278b11ab20f8"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._triggerClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        wizardItemOnKeypress$Action(e) {
            var r = this.controller;
            return R.Logger.startActiveSpan("WizardItemOnKeypress__proxy", function(t) {
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    St = f
}
var St, It = new R.Controller.ControllerFactory(St, T);
var Ot = h,
    on = _.PlaceholderContent,
    an = _.IteratorPlaceholderContent,
    J = class J extends E.BaseWebBlock {
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
            return st
        }
        get controllerFactory() {
            return It
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = J.ifWidget,
                o = J.textWidget,
                s = J.asPrimitiveValue,
                v = J.getTranslation,
                u = this;
            return re.createElement("div", this.getRootNodeProperties(), re.createElement(S, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: l(function() {
                        return Promise.resolve().then(function() {
                            var b = i.clone();
                            return y.triggerClick$Action(y.callContext(b))
                        })
                    }, "onClick"),
                    onKeyPress: l(function() {
                        var b = i.clone();
                        y.wizardItemOnKeypress$Action(y.callContext(b))
                    }, "onKeyPress")
                },
                extendedProperties: {
                    role: "tab",
                    tabIndex: a.getCachedValue(e.getId("WizardWrapperItem.tabindex"), function() {
                        return (a.variables.statusIn === O.steps.next ? -1 : 0).toString()
                    }, function() {
                        return a.variables.statusIn
                    })
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: a.getCachedValue(e.getId("WizardWrapperItem.Style"), function() {
                    return "wizard-wrapper-item" + (a.variables.statusIn === Ot.BuiltinFunctions.nullTextIdentifier() ? "" : " " + a.variables.statusIn) + (a.variables.useTopLabelIn ? " label-top" : " label-bottom") + " " + a.variables.extendedClassIn
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
                style_dataFetchStatus: Ot.Model.calculateDataFetchStatus(a.variables._statusInDataFetchStatus, a.variables._useTopLabelInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }, re.createElement(S, {
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
            }, re.createElement(w, {
                align: 0,
                content: u.props.placeholders.icon,
                style: "wizard-item-icon",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            })), re.createElement(w, {
                align: 0,
                content: u.props.placeholders.label,
                extendedProperties: {
                    "aria-current": a.getCachedValue(e.getId("Label.aria-current"), function() {
                        return a.variables.statusIn === O.steps.active ? "step" : ""
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
l(J, "View");
var Te = J,
    sn = Te;
var He = N(x());
var Et = {};

function $e(f, a, y, e) {
    f.Initialized = a.InitializedHandler, f.OnSelected = a.OnSelectHandler
}
l($e, "default");
var c = h; {
    let a = class a extends c.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Et);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, c.DataConversion.JSNodeParamConverter.from(n, c.DataTypes.DataTypes.Text)), i.callContext(), function(o) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onSelectHandler$Action: l(function(n, o) {
                    return n = n === void 0 ? "" : n, o = o === void 0 ? "" : o, i.executeActionInsideJSNode(i._onSelectHandler$Action.bind(i, c.DataConversion.JSNodeParamConverter.from(n, c.DataTypes.DataTypes.Text), c.DataConversion.JSNodeParamConverter.from(o, c.DataTypes.DataTypes.Text)), i.callContext(), function(s) {
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return c.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), d.dropdownDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return c.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new c.DataTypes.VariableHolder,
                            s = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(O.logType.general, "Going to create Dropdown Search", e), o.value = d.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = o.value.unique_IDOut, r.variables.internalConfigsVar.optionsListAttr = r.variables.optionsListIn, r.variables.internalConfigsVar.startingSelectionAttr = r.variables.startingSelectionIn, r.variables.internalConfigsVar.isDisabledAttr = r.variables.optionalConfigsIn.isDisabledAttr, r.variables.internalConfigsVar.promptAttr = r.variables.promptIn === "" ? r.variables.prompt_DefaultVar : r.variables.promptIn, r.variables.internalConfigsVar.noResultsTextAttr = r.variables.optionalConfigsIn.noResultsTextAttr === "" ? r.variables.noResultsText_DefaultVar : r.variables.optionalConfigsIn.noResultsTextAttr, r.variables.internalConfigsVar.searchPromptAttr = r.variables.optionalConfigsIn.searchPromptAttr === "" ? r.variables.searchPrompt_DefaultVar : r.variables.optionalConfigsIn.searchPromptAttr, r.variables.internalConfigsVar.allowMultipleSelectionAttr = r.variables.optionalConfigsIn.allowMultipleSelectionAttr, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, r.variables.internalConfigsVar.noOptionsTextAttr = r.variables.optionalConfigsIn.noOptionsTextAttr === "" ? r.variables.noOptionsText_DefaultVar : r.variables.optionalConfigsIn.noOptionsTextAttr, s.value.jSONOut = c.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), d.dropdownCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, O.dropdownType.search, O.dropdownProvider.virtualSelect, s.value.jSONOut, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.dropdownInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), d.logEvent$Action(O.logType.general, "Dropdown Search created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return c.Logger.startActiveSpan("InitializedHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var s = new c.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars")));
                        return s.value.dropdownSearchIdInLocal = e, c.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.dropdownSearchIdInLocal, r)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return c.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var o = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            s = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            v = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            u = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType);
                        o.value.jSONOut = c.JSONUtils.serializeToJSON(r.variables.optionsListIn, !1, !1), u.value.jSONOut = c.JSONUtils.serializeToJSON(r.variables.internalConfigsVar.optionsListAttr, !1, !1), o.value.jSONOut !== u.value.jSONOut && (r.variables.internalConfigsVar.optionsListAttr = r.variables.optionsListIn, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "OptionsList", o.value.jSONOut, e)), v.value.jSONOut = c.JSONUtils.serializeToJSON(r.variables.startingSelectionIn, !1, !1), s.value.jSONOut = c.JSONUtils.serializeToJSON(r.variables.internalConfigsVar.startingSelectionAttr, !1, !1), v.value.jSONOut !== s.value.jSONOut && (r.variables.internalConfigsVar.startingSelectionAttr = r.variables.startingSelectionIn, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "StartingSelection", v.value.jSONOut, e)), r.variables.promptIn !== r.variables.internalConfigsVar.promptAttr && (r.variables.internalConfigsVar.promptAttr = r.variables.promptIn === "" ? r.variables.prompt_DefaultVar : r.variables.promptIn, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Prompt", r.variables.internalConfigsVar.promptAttr, e)), r.variables.optionalConfigsIn.isDisabledAttr !== r.variables.internalConfigsVar.isDisabledAttr && (r.variables.internalConfigsVar.isDisabledAttr = r.variables.optionalConfigsIn.isDisabledAttr, d.dropdownChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", r.variables.internalConfigsVar.isDisabledAttr, e)), r.variables.optionalConfigsIn.noResultsTextAttr !== r.variables.internalConfigsVar.noResultsTextAttr && (r.variables.internalConfigsVar.noResultsTextAttr = r.variables.optionalConfigsIn.noResultsTextAttr === "" ? r.variables.noResultsText_DefaultVar : r.variables.optionalConfigsIn.noResultsTextAttr, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "NoResultsText", r.variables.internalConfigsVar.noResultsTextAttr, e)), r.variables.optionalConfigsIn.noOptionsTextAttr !== r.variables.internalConfigsVar.noOptionsTextAttr && (r.variables.internalConfigsVar.noOptionsTextAttr = r.variables.optionalConfigsIn.noOptionsTextAttr === "" ? r.variables.noOptionsText_DefaultVar : r.variables.optionalConfigsIn.noOptionsTextAttr, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "NoOptionsText", r.variables.internalConfigsVar.noOptionsTextAttr, e)), r.variables.optionalConfigsIn.searchPromptAttr !== r.variables.internalConfigsVar.searchPromptAttr && (r.variables.internalConfigsVar.searchPromptAttr = r.variables.optionalConfigsIn.searchPromptAttr === "" ? r.variables.searchPrompt_DefaultVar : r.variables.optionalConfigsIn.searchPromptAttr, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "SearchPrompt", r.variables.internalConfigsVar.searchPromptAttr, e)), r.variables.optionalConfigsIn.allowMultipleSelectionAttr !== r.variables.internalConfigsVar.allowMultipleSelectionAttr && (r.variables.internalConfigsVar.allowMultipleSelectionAttr = r.variables.optionalConfigsIn.allowMultipleSelectionAttr, d.dropdownChangeBooleanProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "AllowMultipleSelection", r.variables.internalConfigsVar.allowMultipleSelectionAttr, e)), r.variables.extendedClassIn !== r.variables.internalConfigsVar.extendedClassAttr && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, d.dropdownChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onSelectHandler$Action() {
            return this.hasOwnProperty("__onSelectHandler$Action") || (this.__onSelectHandler$Action = function(e, r, t) {
                var i = this.model,
                    n = this.controller,
                    o = this.idService;
                return c.Logger.startActiveSpan("OnSelectHandler", function(s) {
                    return s && (s.setAttribute("code.function", "OnSelectHandler"), s.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnSelectHandler"), t = n.callContext(t);
                        var v = new c.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars")));
                        v.value.dropdownSearchIdInLocal = e, v.value.selectedOptionsJSONInLocal = r;
                        var u = new c.DataTypes.VariableHolder(new(c.Controller.BaseController.getJSONDeserializeOutputType(_e)));
                        return c.Flow.executeAsyncFlow(function() {
                            return u.value.dataOut = c.JSONUtils.deserializeFromJSON(v.value.selectedOptionsJSONInLocal, _e, !1), n.onChanged$Action(v.value.dropdownSearchIdInLocal, u.value.dataOut, t)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onSelectHandler$Action
        }
        set _onSelectHandler$Action(e) {
            this.__onSelectHandler$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return c.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var o = new c.DataTypes.VariableHolder;
                        o.value = c.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "e042847c-74b0-49ac-b76b-1a6c2c1e5522"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode($e, "GetCallbackHandlers", "RegisterCallbacks", {
                                    OnSelected: c.DataConversion.JSNodeParamConverter.to(null, c.DataTypes.DataTypes.Object),
                                    Initialized: c.DataConversion.JSNodeParamConverter.to(null, c.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.onSelectedOut = c.DataConversion.JSNodeParamConverter.from(v.OnSelected, c.DataTypes.DataTypes.Object), u.initializedOut = c.DataConversion.JSNodeParamConverter.from(v.Initialized, c.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnSelectHandler: t.clientActionProxies.onSelectHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.dropdownRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, O.registeredCallbackEvents.onSelected, o.value.onSelectedOut, e), d.dropdownRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, O.registeredCallbackEvents.initialized, o.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "0d159f84-d40b-428b-8fcf-df8a7d87a020"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1829e28b-fb2a-4de4-897f-3c5571d2e267"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "300cda6f-bc6d-4ad5-9077-8037b6e5082b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return c.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "448950a4-050f-4479-93a4-a88cbeac8025"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "5c3e9294-b0aa-4efc-9d8f-36887d45bc69"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSelectHandler$Action(e, r, t) {
            var i = this.controller;
            return c.Logger.startActiveSpan("OnSelectHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnSelectHandler"), n.setAttribute("outsystems.function.key", "7c7c4cf1-f156-4ef8-92cb-84f29f556a1f"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onSelectHandler$Action, t, e, r)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return c.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "b3e3288b-aff8-45b1-91d8-35d03b871702"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get onChanged$Action() {
            return this.hasOwnProperty("_onChanged$Action") || (this._onChanged$Action = function() {
                return Promise.resolve()
            }), this._onChanged$Action
        }
        set onChanged$Action(e) {
            this._onChanged$Action = e
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    se = f, se.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.InitializedHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), se.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.OnSelectHandler$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !1,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SelectedOptionsJSON",
        attrName: "selectedOptionsJSONInLocal",
        mandatory: !1,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), se.registerVariableGroupType("OutSystemsUI.Interaction.DropdownSearch.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "OnSelected",
        attrName: "onSelectedOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }, {
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var se, wt = new c.Controller.ControllerFactory(se, T);
var pn = _.PlaceholderContent,
    Sn = _.IteratorPlaceholderContent,
    G = class G extends E.BaseWebBlock {
        static get displayName() {
            return "Interaction.DropdownSearch"
        }
        static getAttributes() {
            return {
                codeFunction: "DropdownSearch",
                functionKey: "b808428c-a355-4da5-ae16-6203477cd31c",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.Virtualselect.js", "scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return lt
        }
        get controllerFactory() {
            return wt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = G.ifWidget,
                o = G.textWidget,
                s = G.asPrimitiveValue,
                v = G.getTranslation,
                u = this;
            return He.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [He.createElement(S, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: a.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-dropdown-search",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "DropdownSearch"
                    },
                    _widgetRecordProvider: t
                })]
            }))
        }
    };
l(G, "View");
var ke = G,
    In = ke;
var I = N(x());
var Jt = h,
    xe = class xe extends Jt.LanguageResources.BaseMessagesProvider {
        constructor(a) {
            super(a), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
l(xe, "MessagesProvider");
var Ne = xe,
    Pt = new Ne;

function ze(f, a, y, e) {
    document.getElementById(`fileUploader-${f.ElementId}`).value = ""
}
l(ze, "default");

function Ue(f, a, y, e) {
    (function(r) {
        function t(n, o) {
            if (!(!o || typeof o != "function")) {
                var s;
                n.dataTransfer ? s = n.dataTransfer.files : n.target && (s = n.target.files), o.call(null, s)
            }
        }
        l(t, "triggerCallback");

        function i(n, o) {
            var s = document.createElement("input");
            s.setAttribute("type", "file"), s.setAttribute("id", `fileUploader-${f.ElementId}`), f.Multipe && s.setAttribute("multiple", !0), s.style.display = "none", s.addEventListener("change", function(v) {
                t(v, o)
            }), n.appendChild(s), n.addEventListener("dragover", function(v) {
                v.preventDefault(), v.stopPropagation(), n.classList.add("dragover")
            }), n.addEventListener("dragleave", function(v) {
                v.preventDefault(), v.stopPropagation(), n.classList.remove("dragover")
            }), n.addEventListener("drop", function(v) {
                v.preventDefault(), v.stopPropagation(), n.classList.remove("dragover"), t(v, o)
            }), n.addEventListener("click", function() {
                s.value = null, s.click()
            })
        }
        l(i, "makeDroppable"), r.makeDroppable = i
    })(window),
    function(r) {
        makeDroppable(r.document.querySelector(`.${f.ElementId}`), function(t) {
            for (var i = 0; i < t.length; i++) new Promise(function(o, s) {
                (function(v) {
                    var u = new FileReader;
                    u.readAsDataURL(v);
                    var b = v.name,
                        P = v.size,
                        D = v.type;
                    u.onloadend = function() {
                        var ne = u.result;
                        o({
                            base64: ne,
                            filename: b,
                            filesize: P,
                            filetype: D
                        })
                    }
                })(t[i])
            }).then(function(o) {
                a.OnDrop(o.filename, o.base64, o.filesize, o.filetype)
            })
        })
    }(window)
}
l(Ue, "default");
var m = h; {
    let a = class a extends m.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var i = this.controller;
            this.clientActionProxies = {
                onDrop$Action: l(function(n, o, s, v) {
                    return n = n === void 0 ? "" : n, o = o === void 0 ? "" : o, s = s === void 0 ? 0 : s, v = v === void 0 ? "" : v, i.executeActionInsideJSNode(i._onDrop$Action.bind(i, m.DataConversion.JSNodeParamConverter.from(n, m.DataTypes.DataTypes.Text), m.DataConversion.JSNodeParamConverter.from(o, m.DataTypes.DataTypes.Text), m.DataConversion.JSNodeParamConverter.from(s, m.DataTypes.DataTypes.Integer), m.DataConversion.JSNodeParamConverter.from(v, m.DataTypes.DataTypes.Text)), i.callContext(), function(u) {
                        return {}
                    }, function() {}, "OnDrop")
                }, "onDrop$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onDrop$Action() {
            return this.hasOwnProperty("__onDrop$Action") || (this.__onDrop$Action = function(e, r, t, i, n) {
                var o = this.model,
                    s = this.controller,
                    v = this.idService;
                return m.Logger.startActiveSpan("OnDrop", function(u) {
                    return u && (u.setAttribute("code.function", "OnDrop"), u.setAttribute("outsystems.function.key", "ab5db6eb-6ffb-465c-a8cf-db0603ce8bd6"), u.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), u.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        s.ensureControllerAlive("OnDrop"), n = s.callContext(n);
                        var b = new m.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("DerivDroppableFileUploadOfficial.DroppableFileUpload.DroppableFileUpload.OnDrop$vars")));
                        b.value.fileNameInLocal = e, b.value.fileContentInLocal = r, b.value.fileSizeInLocal = t, b.value.fileTypeInLocal = i;
                        var P = new m.DataTypes.VariableHolder(new m.DataTypes.ErrorHandlerOutputType),
                            D = new m.DataTypes.VariableHolder,
                            ne = new m.DataTypes.VariableHolder;
                        return m.Flow.executeAsyncFlow(function() {
                            return o.flush(), de.file_Validate$Action(b.value.fileSizeInLocal, o.variables.filesMaxSizeIn, b.value.fileContentInLocal, o.variables.acceptedFileTypesIn, b.value.fileTypeInLocal, n).then(function(p) {
                                D.value = p
                            }).then(function() {
                                return m.Flow.executeSequence(function() {
                                    return D.value.errorOut.successAttr ? (ne.value = de.base64ToBinary$Action(D.value.validBase64Out, n), m.SystemActions.listClear(o.variables.viewImageListVar, n), m.SystemActions.listAppend(o.variables.viewImageListVar, function() {
                                        var p = new le;
                                        return p.fileNameAttr = b.value.fileNameInLocal, p.fileMimeTypeAttr = b.value.fileTypeInLocal, p.fileSizeAttr = b.value.fileSizeInLocal.toString(), p.fileContentAttr = ne.value.binaryOut, p.fileContentURLAttr = b.value.fileContentInLocal, p
                                    }(), n), o.variables.droppedFileVar = !0, s.onDropFile$Action(function() {
                                        var p = new le;
                                        return p.fileNameAttr = b.value.fileNameInLocal, p.fileMimeTypeAttr = b.value.fileTypeInLocal, p.fileSizeAttr = b.value.fileSizeInLocal.toString(), p.fileContentAttr = ne.value.binaryOut, p.fileContentURLAttr = b.value.fileContentInLocal, p
                                    }(), function() {
                                        var p = new nt;
                                        return p.successAttr = !0, p.errorMessageAttr = "", p
                                    }(), n)) : s.onDropFile$Action(function() {
                                        var p = new le;
                                        return p
                                    }(), D.value.errorOut, n)
                                })
                            })
                        }).catch(function(p) {
                            if (m.Logger.debug("DroppableFileUpload.OnDrop", m.Exceptions.getMessage(p)), m.Exceptions.isInstanceOf(p, m.Exceptions.Exceptions.CommunicationException)) return m.Logger.error(null, p, null, null, 1), P.value.exceptionMessageAttr = m.Exceptions.getMessage(p), m.Logger.startActiveSpan("CommunicationException", function(L) {
                                return L && (L.setAttribute("code.function", "CommunicationException"), L.setAttribute("outsystems.function.key", "7eeb3580-8e42-45f9-bf63-8283bae53a85"), L.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), L.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), L.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER")), m.Flow.tryFinally(function() {
                                    return m.Flow.executeAsyncFlow(function() {
                                        return m.FeedbackMessageService.showFeedbackMessage(P.value.exceptionMessageAttr, 3), m.Flow.returnAsync()
                                    })
                                }, function() {
                                    L && L.end()
                                })
                            }, 1);
                            throw p
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onDrop$Action
        }
        set _onDrop$Action(e) {
            this.__onDrop$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("ButtonOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ButtonOnClick"), n.setAttribute("outsystems.function.key", "ccfbb1a1-5ba9-42be-98b2-10af63be6270"), n.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), n.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ButtonOnClick"), e = t.callContext(e), m.Flow.executeAsyncFlow(function() {
                            return m.SystemActions.listClear(r.variables.viewImageListVar, e), r.variables.droppedFileVar = !1, m.Logger.startActiveSpan("JavaScript1", function(o) {
                                o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "6a33d28b-1203-4391-aab9-6e1e0370d5f9"), o.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), o.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(ze, "JavaScript1", "ButtonOnClick", {
                                        ElementId: m.DataConversion.JSNodeParamConverter.to(r.variables.elementIdIn, m.DataTypes.DataTypes.Text)
                                    }, function(s) {}, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1), t.onClearFile$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return m.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "e58fe823-8083-45a3-be1a-1d3322c15598"), n.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), n.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), m.Logger.startActiveSpan("DropAreaJS", function(o) {
                            o && (o.setAttribute("code.function", "DropAreaJS"), o.setAttribute("outsystems.function.key", "682cd509-bceb-462c-b1fb-e363777c1b64"), o.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), o.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ue, "DropAreaJS", "OnReady", {
                                    ElementId: m.DataConversion.JSNodeParamConverter.to(r.variables.elementIdIn, m.DataTypes.DataTypes.Text),
                                    Multipe: m.DataConversion.JSNodeParamConverter.to(r.variables.multipeIn, m.DataTypes.DataTypes.Boolean)
                                }, function(s) {}, {
                                    OnDrop: t.clientActionProxies.onDrop$Action
                                }, {})
                            } finally {
                                o && o.end()
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
        onDrop$Action(e, r, t, i, n) {
            var o = this.controller;
            return m.Logger.startActiveSpan("OnDrop__proxy", function(s) {
                return s && (s.setAttribute("code.function", "OnDrop"), s.setAttribute("outsystems.function.key", "ab5db6eb-6ffb-465c-a8cf-db0603ce8bd6"), s.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), s.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onDrop$Action, n, e, r, t, i)
                }, function() {
                    s && s.end()
                })
            }, 0)
        }
        buttonOnClick$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("ButtonOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ButtonOnClick"), t.setAttribute("outsystems.function.key", "ccfbb1a1-5ba9-42be-98b2-10af63be6270"), t.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), t.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), m.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._buttonOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return m.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "e58fe823-8083-45a3-be1a-1d3322c15598"), t.setAttribute("outsystems.function.owner.name", "DerivDroppableFileUploadOfficial"), t.setAttribute("outsystems.function.owner.key", "322ccb89-ea0b-4950-a9bb-02ac51742785"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClearFile$Action() {
            return this.hasOwnProperty("_onClearFile$Action") || (this._onClearFile$Action = function() {
                return Promise.resolve()
            }), this._onClearFile$Action
        }
        set onClearFile$Action(e) {
            this._onClearFile$Action = e
        }
        get onDropFile$Action() {
            return this.hasOwnProperty("_onDropFile$Action") || (this._onDropFile$Action = function() {
                return Promise.resolve()
            }), this._onDropFile$Action
        }
        set onDropFile$Action(e) {
            this._onDropFile$Action = e
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
            return de.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    Ve = f, Ve.registerVariableGroupType("DerivDroppableFileUploadOfficial.DroppableFileUpload.DroppableFileUpload.OnDrop$vars", [{
        name: "FileName",
        attrName: "fileNameInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FileContent",
        attrName: "fileContentInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "FileSize",
        attrName: "fileSizeInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Integer,
        defaultValue: l(function() {
            return 0
        }, "defaultValue")
    }, {
        name: "FileType",
        attrName: "fileTypeInLocal",
        mandatory: !0,
        dataType: m.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var Ve, Rt = new m.Controller.ControllerFactory(Ve, Pt);
var Fe = N(x());
var Dt = {};

function Le(f, a, y, e) {
    f.Initialized = a.InitializedHandler
}
l(Le, "default");
var g = h; {
    let a = class a extends g.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Dt);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, g.DataConversion.JSNodeParamConverter.from(n, g.DataTypes.DataTypes.Text)), i.callContext(), function(o) {
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
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "5459d23f-0390-4502-84fa-01a15f551924"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), d.galleryDestroy$Action(r.variables.internal_configsVar.uniqueIdAttr, e)
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
                    i = this.idService;
                return g.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "993aa900-c093-4af7-9b2f-047e319926a0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.galleryInitialize$Action(r.variables.internal_configsVar.uniqueIdAttr, e), d.logEvent$Action(O.logType.general, "Gallery created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "9a476224-82c4-4d0f-9d2f-18e89e77161b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.rowItemsPhoneIn.toString() !== r.variables.internal_configsVar.rowItemsPhoneAttr && (r.variables.internal_configsVar.rowItemsPhoneAttr = r.variables.rowItemsPhoneIn.toString(), d.galleryChangeTextProperty$Action(r.variables.internal_configsVar.uniqueIdAttr, "RowItemsPhone", r.variables.internal_configsVar.rowItemsPhoneAttr, e)), r.variables.rowItemsTabletIn.toString() !== r.variables.internal_configsVar.rowItemsTabletAttr && (r.variables.internal_configsVar.rowItemsTabletAttr = r.variables.rowItemsTabletIn.toString(), d.galleryChangeTextProperty$Action(r.variables.internal_configsVar.uniqueIdAttr, "RowItemsTablet", r.variables.internal_configsVar.rowItemsTabletAttr, e)), r.variables.rowItemsDesktopIn.toString() !== r.variables.internal_configsVar.rowItemsDesktopAttr && (r.variables.internal_configsVar.rowItemsDesktopAttr = r.variables.rowItemsDesktopIn.toString(), d.galleryChangeTextProperty$Action(r.variables.internal_configsVar.uniqueIdAttr, "RowItemsDesktop", r.variables.internal_configsVar.rowItemsDesktopAttr, e)), r.variables.itemsGapIn !== r.variables.internal_configsVar.itemsGapAttr && (r.variables.internal_configsVar.itemsGapAttr = r.variables.itemsGapIn, d.galleryChangeTextProperty$Action(r.variables.internal_configsVar.uniqueIdAttr, "ItemsGap", r.variables.internal_configsVar.itemsGapAttr, e)), r.variables.extendedClassIn !== r.variables.internal_configsVar.extendedClassAttr && (r.variables.internal_configsVar.extendedClassAttr = r.variables.extendedClassIn, d.galleryChangeTextProperty$Action(r.variables.internal_configsVar.uniqueIdAttr, "ExtendedClass", r.variables.internal_configsVar.extendedClassAttr, e))
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
                return g.Logger.startActiveSpan("InitializedHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "bc44f04e-d3a6-4da3-ac29-f9f7800c0b3b"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var s = new g.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Adaptive.Gallery.InitializedHandler$vars")));
                        return s.value.galleryIdInLocal = e, g.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.galleryIdInLocal, r)
                        })
                    }, function() {
                        o && o.end()
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
                    i = this.idService;
                return g.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e6191de5-d11f-4bd9-b0a1-80a8af1cec45"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var o = new g.DataTypes.VariableHolder;
                        o.value = g.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "a250a322-bea6-44b5-b40d-212a6964f1fa"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Le, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: g.DataConversion.JSNodeParamConverter.to(null, g.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.initializedOut = g.DataConversion.JSNodeParamConverter.from(v.Initialized, g.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.galleryRegisterCallback$Action(r.variables.internal_configsVar.uniqueIdAttr, O.registeredCallbackEvents.initialized, o.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return g.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "f590b1c8-2ce5-4213-b875-6ab4cbaf666d"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new g.DataTypes.VariableHolder,
                            s = new g.DataTypes.VariableHolder(new g.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(O.logType.general, "Creating Gallery", e), o.value = d.generateUniqueId$Action(r.variables.internal_configsVar.uniqueIdAttr, e), r.variables.internal_configsVar.uniqueIdAttr = o.value.unique_IDOut, r.variables.internal_configsVar.rowItemsPhoneAttr = r.variables.rowItemsPhoneIn.toString(), r.variables.internal_configsVar.rowItemsTabletAttr = r.variables.rowItemsTabletIn.toString(), r.variables.internal_configsVar.rowItemsDesktopAttr = r.variables.rowItemsDesktopIn.toString(), r.variables.internal_configsVar.itemsGapAttr = r.variables.itemsGapIn, r.variables.internal_configsVar.extendedClassAttr = r.variables.extendedClassIn, s.value.jSONOut = g.JSONUtils.serializeToJSON(r.variables.internal_configsVar, !0, !1), d.galleryCreate$Action(r.variables.internal_configsVar.uniqueIdAttr, s.value.jSONOut, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "5459d23f-0390-4502-84fa-01a15f551924"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "993aa900-c093-4af7-9b2f-047e319926a0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "9a476224-82c4-4d0f-9d2f-18e89e77161b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return g.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "bc44f04e-d3a6-4da3-ac29-f9f7800c0b3b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "e6191de5-d11f-4bd9-b0a1-80a8af1cec45"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return g.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "f590b1c8-2ce5-4213-b875-6ab4cbaf666d"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    fe = f, fe.registerVariableGroupType("OutSystemsUI.Adaptive.Gallery.InitializedHandler$vars", [{
        name: "GalleryId",
        attrName: "galleryIdInLocal",
        mandatory: !1,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), fe.registerVariableGroupType("OutSystemsUI.Adaptive.Gallery.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var fe, Tt = new g.Controller.ControllerFactory(fe, T);
var Qn = _.PlaceholderContent,
    Zn = _.IteratorPlaceholderContent,
    q = class q extends E.BaseWebBlock {
        static get displayName() {
            return "Adaptive.Gallery"
        }
        static getAttributes() {
            return {
                codeFunction: "Gallery",
                functionKey: "858e3702-ebcf-4395-b63d-04282d7f04b6",
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
            return ut
        }
        get controllerFactory() {
            return Tt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = q.ifWidget,
                o = q.textWidget,
                s = q.asPrimitiveValue,
                v = q.getTranslation,
                u = this;
            return Fe.createElement("div", this.getRootNodeProperties(), Fe.createElement(w, {
                align: 0,
                content: u.props.placeholders.content,
                extendedProperties: {
                    name: a.variables.internal_configsVar.uniqueIdAttr
                },
                style: "osui-gallery",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }))
        }
    };
l(q, "View");
var We = q,
    Be = We;
var Me = N(x());
var $t = {};
var Ht = h; {
    let a = class a extends Ht.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, $t);
            var i = this.controller;
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    kt = f
}
var kt, Nt = new Ht.Controller.ControllerFactory(kt, T);
var Gt = h,
    fi = _.PlaceholderContent,
    yi = _.IteratorPlaceholderContent,
    j = class j extends E.BaseWebBlock {
        static get displayName() {
            return "Content.Card"
        }
        static getAttributes() {
            return {
                codeFunction: "Card",
                functionKey: "57a5fe1e-02aa-4ada-89ca-750832d53968",
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
            return dt
        }
        get controllerFactory() {
            return Nt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = j.ifWidget,
                o = j.textWidget,
                s = j.asPrimitiveValue,
                v = j.getTranslation,
                u = this;
            return Me.createElement("div", this.getRootNodeProperties(), Me.createElement(w, {
                align: 0,
                content: u.props.placeholders.content,
                style: a.getCachedValue(e.getId("Content.Style"), function() {
                    return "ph card card-content" + (a.variables.usePaddingIn ? "" : " padding-none ") + (a.variables.extendedClassIn === "" ? "" : " " + a.variables.extendedClassIn)
                }, function() {
                    return a.variables.usePaddingIn
                }, function() {
                    return a.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Gt.Model.calculateDataFetchStatus(a.variables._usePaddingInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
l(j, "View");
var Je = j,
    Ge = Je;
var ye = h,
    xt = _.PlaceholderContent,
    qt = _.IteratorPlaceholderContent,
    K = class K extends E.BaseWebBlock {
        static get displayName() {
            return "DroppableFileUpload.DroppableFileUpload"
        }
        static getAttributes() {
            return {
                codeFunction: "DroppableFileUpload",
                functionKey: "18646977-587f-4763-96dd-44198a51e864",
                functionOwnerName: "DerivDroppableFileUploadOfficial",
                functionOwnerKey: "322ccb89-ea0b-4950-a9bb-02ac51742785",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/DerivDroppableFileUploadOfficial.DroppableFileUpload.DroppableFileUpload.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Be, Ge]
        }
        get modelFactory() {
            return ft
        }
        get controllerFactory() {
            return Rt
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = K.ifWidget,
                o = K.textWidget,
                s = K.asPrimitiveValue,
                v = K.getTranslation,
                u = this;
            return I.createElement("div", this.getRootNodeProperties(), I.createElement(S, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, I.createElement(S, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, I.createElement(w, {
                align: 0,
                content: u.props.placeholders.dropArea,
                style: "drop-area ph " + a.variables.elementIdIn,
                _idProps: {
                    service: e,
                    name: "DropArea"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: ye.Model.calculateDataFetchStatus(a.variables._elementIdInDataFetchStatus)
            }), n(a.variables.droppedFileVar, !1, this, function() {
                return [I.createElement(S, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return []
            })), I.createElement(S, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, n(a.variables.showImagePreviewIn, !1, this, function() {
                return [I.createElement(Be, {
                    getOwnerSpan: l(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: l(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        RowItemsDesktop: 5
                    },
                    events: {
                        _handleError: l(function(b) {
                            y.handleError(b)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "5",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new xt(function() {
                            return [I.createElement(it, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: a.variables.viewImageListVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new qt(function(b, P) {
                                        return [I.createElement(Ge, {
                                            getOwnerSpan: l(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: l(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                UsePadding: !1,
                                                ExtendedClass: "padding-base preview-height"
                                            },
                                            events: {
                                                _handleError: l(function(D) {
                                                    y.handleError(D)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: r
                                            },
                                            _idProps: {
                                                service: b,
                                                uuid: "7",
                                                alias: "2"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                content: new xt(function() {
                                                    return [I.createElement(S, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "text-align-center full-height",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: b,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, n(ye.BuiltinFunctions.index(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileMimeTypeAttr, "image", 0, !1, !1) !== -1, !1, this, function() {
                                                        return [n(ye.BuiltinFunctions.index(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileMimeTypeAttr, "image/svg+xml", 0, !1, !1) !== -1, !1, this, function() {
                                                            return [I.createElement(ue, {
                                                                enabled: !0,
                                                                extendedProperties: {
                                                                    style: "align-item: right; background-color: black; border-radius: 50px; border-width: 0px; display: flex; height: 20px; justify-content: right; padding: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    width: "20px"
                                                                },
                                                                isDefault: !1,
                                                                onClick: l(function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var D = P.clone();
                                                                        return y.buttonOnClick$Action(y.callContext(D))
                                                                    })
                                                                }, "onClick"),
                                                                style: "btn remove-doc",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "9"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, I.createElement(oe, {
                                                                extendedProperties: {
                                                                    style: "color: #fff; font-size: 14px; height: 20px; line-height: 19px; width: 20px;"
                                                                },
                                                                icon: "times",
                                                                iconSize: 0,
                                                                style: "icon font-regular",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "10"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })), I.createElement(F, {
                                                                extendedProperties: {
                                                                    style: "height: 190px; object-fit: contain;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                type: 1,
                                                                url: a.variables.viewImageListVar.getCurrent(P.iterationContext).fileContentURLAttr,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "11"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })]
                                                        }, function() {
                                                            return [I.createElement(ue, {
                                                                enabled: !0,
                                                                extendedProperties: {
                                                                    style: "align-item: right; background-color: black; border-radius: 50px; border-width: 0px; display: flex; height: 20px; justify-content: right; padding: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    width: "20px"
                                                                },
                                                                isDefault: !1,
                                                                onClick: l(function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var D = P.clone();
                                                                        return y.buttonOnClick$Action(y.callContext(D))
                                                                    })
                                                                }, "onClick"),
                                                                style: "btn remove-doc",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "12"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, I.createElement(oe, {
                                                                extendedProperties: {
                                                                    style: "color: #fff; font-size: 14px; height: 20px; line-height: 19px; width: 20px;"
                                                                },
                                                                icon: "times",
                                                                iconSize: 0,
                                                                style: "icon font-regular",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "13"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })), I.createElement(F, {
                                                                extendedProperties: {
                                                                    style: "height: 190px; object-fit: contain;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                imageContent: a.variables.viewImageListVar.getCurrent(P.iterationContext).fileContentAttr,
                                                                type: 2,
                                                                _idProps: {
                                                                    service: b,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })]
                                                        })]
                                                    }, function() {
                                                        return [I.createElement(S, {
                                                            align: 0,
                                                            animate: !1,
                                                            extendedProperties: {
                                                                style: "height: 100%;"
                                                            },
                                                            style: "display-flex align-items-center justify-content-center flex-direction-column",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "15"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, I.createElement(ue, {
                                                            enabled: !0,
                                                            extendedProperties: {
                                                                style: "align-item: right; background-color: black; border-radius: 50px; border-width: 0px; display: flex; height: 20px; justify-content: right; padding: 0px;"
                                                            },
                                                            gridProperties: {
                                                                width: "20px"
                                                            },
                                                            isDefault: !1,
                                                            onClick: l(function() {
                                                                return Promise.resolve().then(function() {
                                                                    var D = P.clone();
                                                                    return y.buttonOnClick$Action(y.callContext(D))
                                                                })
                                                            }, "onClick"),
                                                            style: "btn remove-doc",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "16"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, I.createElement(oe, {
                                                            extendedProperties: {
                                                                style: "color: #fff; font-size: 14px; height: 20px; line-height: 19px; width: 20px;"
                                                            },
                                                            icon: "times",
                                                            iconSize: 0,
                                                            style: "icon font-regular",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "17"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })), I.createElement(oe, {
                                                            extendedProperties: {
                                                                style: "height: 50px; width: 50px;"
                                                            },
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            icon: "flag",
                                                            iconSize: 3,
                                                            style: "custom-icon custom-icon-file text-primary display-none",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "18"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), I.createElement(F, {
                                                            gridProperties: {
                                                                classes: "ThemeGrid_MarginGutter"
                                                            },
                                                            image: ye.Navigation.VersionedURL.getVersionedUrl("img/DerivDroppableFileUploadOfficial.filepdfxl.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "19"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }), I.createElement(S, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "20"
                                                            },
                                                            _widgetRecordProvider: t
                                                        }, I.createElement(Z, {
                                                            extendedProperties: {
                                                                style: "font-weight: bold; margin-top: 10px;"
                                                            },
                                                            value: a.variables.viewImageListVar.getCurrent(P.iterationContext).fileNameAttr,
                                                            _idProps: {
                                                                service: b,
                                                                uuid: "21"
                                                            },
                                                            _widgetRecordProvider: t
                                                        })))]
                                                    }))]
                                                })
                                            },
                                            _dependencies: [s(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileNameAttr), s(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileContentAttr), s(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileContentURLAttr), s(a.variables.viewImageListVar.getCurrent(P.iterationContext).fileMimeTypeAttr)]
                                        })]
                                    }, i, e, "1")
                                },
                                _dependencies: []
                            })]
                        })
                    },
                    _dependencies: [s(a.variables.viewImageListVar)]
                })]
            }, function() {
                return []
            }))))
        }
    };
l(K, "View");
var qe = K,
    pi = qe;
var Ke = N(x());
var zt = {};

function je(f, a, y, e) {
    f.Initialized = a.InitializedHandler
}
l(je, "default");
var C = h; {
    let a = class a extends C.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, zt);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, C.DataConversion.JSNodeParamConverter.from(n, C.DataTypes.DataTypes.Text)), i.callContext(), function(o) {
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
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return C.Logger.startActiveSpan("InitializedHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var s = new C.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars")));
                        return s.value.buttonLoadingIdInLocal = e, C.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.buttonLoadingIdInLocal, r)
                        })
                    }, function() {
                        o && o.end()
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
                    i = this.idService;
                return C.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), d.buttonLoadingDestroy$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e)
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
                return C.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.isLoadingIn !== r.variables.internal_ConfigsVar.isLoadingAttr && (r.variables.internal_ConfigsVar.isLoadingAttr = r.variables.isLoadingIn, d.buttonLoadingChangeBooleanProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "IsLoading", r.variables.isLoadingIn, e)), r.variables.showLabelOnLoadingIn !== r.variables.internal_ConfigsVar.showLoadingAndLabelAttr && (r.variables.internal_ConfigsVar.showLoadingAndLabelAttr = r.variables.showLabelOnLoadingIn, d.buttonLoadingChangeBooleanProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ShowLoadingAndLabel", r.variables.internal_ConfigsVar.showLoadingAndLabelAttr, e)), r.variables.extendedClassIn !== r.variables.internal_ConfigsVar.extendedClassAttr && (r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, d.buttonLoadingChangeTextProperty$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internal_ConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _registerCallbacks$Action() {
            return this.hasOwnProperty("__registerCallbacks$Action") || (this.__registerCallbacks$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("RegisterCallbacks", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallbacks"), n.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallbacks"), e = t.callContext(e);
                        var o = new C.DataTypes.VariableHolder;
                        o.value = C.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "3c6ce000-aef8-452c-acd4-1bdfdcfa8c7a"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(je, "GetCallbackHandlers", "RegisterCallbacks", {
                                    Initialized: C.DataConversion.JSNodeParamConverter.to(null, C.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult"));
                                    return u.initializedOut = C.DataConversion.JSNodeParamConverter.from(v.Initialized, C.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.buttonLoadingRegisterCallback$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, O.registeredCallbackEvents.initialized, o.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallbacks$Action
        }
        set _registerCallbacks$Action(e) {
            this.__registerCallbacks$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new C.DataTypes.VariableHolder;
                        d.logEvent$Action(O.logType.general, "Going to create ButtonLoading", e), o.value = d.generateUniqueId$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), r.variables.internal_ConfigsVar.uniqueIdAttr = o.value.unique_IDOut, r.variables.internal_ConfigsVar.isLoadingAttr = r.variables.isLoadingIn, r.variables.internal_ConfigsVar.showLoadingAndLabelAttr = r.variables.showLabelOnLoadingIn, r.variables.internal_ConfigsVar.extendedClassAttr = r.variables.extendedClassIn, d.buttonLoadingCreate$Action(r.variables.internal_ConfigsVar, e), t._registerCallbacks$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.buttonLoadingInitialize$Action(r.variables.internal_ConfigsVar.uniqueIdAttr, e), d.logEvent$Action(O.logType.general, "ButtonLoading created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return C.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "0edfd226-b70a-4aaf-8ff2-c0c972952aac"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "80963e7d-89b9-472a-9f6b-c1cfa982a8e0"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "db8aafb9-abe6-405b-a7ac-a76048fca091"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallbacks$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("RegisterCallbacks__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallbacks"), t.setAttribute("outsystems.function.key", "e9af2ffc-de9d-4700-b1b8-a3f0ad0f9943"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallbacks$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "eb8e028b-e0d2-4a0d-99a7-f97618a1eada"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ff263e3c-bfcd-47ea-a0b9-96fb1264fae5"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    me = f, me.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.InitializedHandler$vars", [{
        name: "ButtonLoadingId",
        attrName: "buttonLoadingIdInLocal",
        mandatory: !1,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }]), me.registerVariableGroupType("OutSystemsUI.Utilities.ButtonLoading.RegisterCallbacks$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }])
}
var me, Ut = new C.Controller.ControllerFactory(me, T);
var zi = _.PlaceholderContent,
    Ui = _.IteratorPlaceholderContent,
    Y = class Y extends E.BaseWebBlock {
        static get displayName() {
            return "Utilities.ButtonLoading"
        }
        static getAttributes() {
            return {
                codeFunction: "ButtonLoading",
                functionKey: "b6fb29b1-5745-4f43-b887-e98b7a5eb5d1",
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
            return yt
        }
        get controllerFactory() {
            return Ut
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = Y.ifWidget,
                o = Y.textWidget,
                s = Y.asPrimitiveValue,
                v = Y.getTranslation,
                u = this;
            return Ke.createElement("div", this.getRootNodeProperties(), Ke.createElement(w, {
                align: 0,
                content: u.props.placeholders.button,
                extendedProperties: {
                    name: a.variables.internal_ConfigsVar.uniqueIdAttr
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "osui-btn-loading",
                _idProps: {
                    service: e,
                    name: "Button"
                },
                _widgetRecordProvider: t
            }))
        }
    };
l(Y, "View");
var Ye = Y,
    Vi = Ye;
var ge = N(x());
var V = h,
    Qe = class Qe extends V.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", !0, !1, V.DataTypes.DataTypes.Record, function() {
                return V.DataTypes.ImmutableBase.getData(new Ae)
            }, !1, Ae), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, V.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, V.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(V.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(Qe, "VariablesRecord");
var ve = Qe;
ve.init();
var Ze = class Ze extends V.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(Ze, "WidgetsRecord");
var Xe = Ze,
    et = class et extends V.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ve
        }
        static getWidgetsRecordConstructor() {
            return Xe
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(a) {
            "ExtendedClass" in a && (this.variables.extendedClassIn = a.ExtendedClass, "_extendedClassInDataFetchStatus" in a && (this.variables._extendedClassInDataFetchStatus = a._extendedClassInDataFetchStatus))
        }
    };
l(et, "Model");
var be = et;
be._hasValidationWidgetsValue = void 0;
var Vt = new V.Model.ModelFactory(be);
var Lt = {};

function tt(f, a, y, e) {
    f.Initialized = a.InitializedHandler
}
l(tt, "default");
var A = h; {
    let a = class a extends A.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Lt);
            var i = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: l(function(n) {
                    return n = n === void 0 ? "" : n, i.executeActionInsideJSNode(i._initializedHandler$Action.bind(i, A.DataConversion.JSNodeParamConverter.from(n, A.DataTypes.DataTypes.Text)), i.callContext(), function(o) {
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
                    i = this.idService;
                return A.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new A.DataTypes.VariableHolder,
                            s = new A.DataTypes.VariableHolder(new A.DataTypes.JSONSerializeOutputType);
                        d.logEvent$Action(O.logType.general, "Going to create Search", e), o.value = d.generateUniqueId$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), r.variables.internalConfigsVar.uniqueIdAttr = o.value.unique_IDOut, r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, s.value.jSONOut = A.JSONUtils.serializeToJSON(r.variables.internalConfigsVar, !0, !1), d.searchCreate$Action(r.variables.internalConfigsVar.uniqueIdAttr, s.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), d.searchInitialize$Action(r.variables.internalConfigsVar.uniqueIdAttr, e), d.logEvent$Action(O.logType.general, "Search created", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("RegisterCallback", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var o = new A.DataTypes.VariableHolder;
                        o.value = A.Logger.startActiveSpan("GetCallbackHandlers", function(s) {
                            s && (s.setAttribute("code.function", "GetCallbackHandlers"), s.setAttribute("outsystems.function.key", "9c432a08-c627-4b5d-91f6-501d1160194d"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(tt, "GetCallbackHandlers", "RegisterCallback", {
                                    Initialized: A.DataConversion.JSNodeParamConverter.to(null, A.DataTypes.DataTypes.Object)
                                }, function(v) {
                                    var u = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult"));
                                    return u.initializedOut = A.DataConversion.JSNodeParamConverter.from(v.Initialized, A.DataTypes.DataTypes.Object), u
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action
                                }, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1), d.searchRegisterCallback$Action(r.variables.internalConfigsVar.uniqueIdAttr, "Initialized", o.value.initializedOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, r) {
                var t = this.model,
                    i = this.controller,
                    n = this.idService;
                return A.Logger.startActiveSpan("InitializedHandler", function(o) {
                    return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        i.ensureControllerAlive("InitializedHandler"), r = i.callContext(r);
                        var s = new A.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars")));
                        return s.value.searchIdInLocal = e, A.Flow.executeAsyncFlow(function() {
                            return i.initialized$Action(s.value.searchIdInLocal, r)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), r.variables.internalConfigsVar.extendedClassAttr !== r.variables.extendedClassIn && (r.variables.internalConfigsVar.extendedClassAttr = r.variables.extendedClassIn, d.searchChangeTextProperty$Action(r.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", r.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), d.searchDestroy$Action(r.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onInitialize$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1fda24b2-9038-452c-8866-a057a0c98055"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "4d3f8309-dad2-4bd0-b49f-88ca49029751"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallback$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "7f5abbc7-65ec-4f3f-861b-ff22dd1b84dc"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        initializedHandler$Action(e, r) {
            var t = this.controller;
            return A.Logger.startActiveSpan("InitializedHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "InitializedHandler"), i.setAttribute("outsystems.function.key", "85d31c3d-ca1d-4447-b098-cf0bdbab6f80"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, r, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onParametersChanged$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "ed0f2d76-86e9-415c-a077-407b4e34c58c"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onDestroy$Action(e) {
            var r = this.controller;
            return A.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "eeab6233-b538-4c61-8eeb-44b1a5703172"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onDestroy$Action, e)
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
            return d.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let f = a;
    he = f, he.registerVariableGroupType("OutSystemsUI.Interaction.Search.RegisterCallback$getCallbackHandlersJSResult", [{
        name: "Initialized",
        attrName: "initializedOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Object,
        defaultValue: l(function() {
            return null
        }, "defaultValue")
    }]), he.registerVariableGroupType("OutSystemsUI.Interaction.Search.InitializedHandler$vars", [{
        name: "SearchId",
        attrName: "searchIdInLocal",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var he, Ft = new A.Controller.ControllerFactory(he, T);
var no = _.PlaceholderContent,
    io = _.IteratorPlaceholderContent,
    X = class X extends E.BaseWebBlock {
        static get displayName() {
            return "Interaction.Search"
        }
        static getAttributes() {
            return {
                codeFunction: "Search",
                functionKey: "4fa4ad57-278f-47ec-9dd8-527c45a0eac9",
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
            return Vt
        }
        get controllerFactory() {
            return Ft
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                y = this.controller,
                e = this.idService,
                r = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                n = X.ifWidget,
                o = X.textWidget,
                s = X.asPrimitiveValue,
                v = X.getTranslation,
                u = this;
            return ge.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [ge.createElement(S, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        role: "search",
                        name: a.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-search",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                }, ge.createElement(w, {
                    align: 0,
                    content: u.props.placeholders.input,
                    style: "osui-search__input",
                    _idProps: {
                        service: e,
                        name: "Input"
                    },
                    _widgetRecordProvider: t
                }))]
            }))
        }
    };
l(X, "View");
var rt = X,
    oo = rt;
export {
    lr as a, Lr as b, sn as c, In as d, Or as e, pi as f, Vi as g, oo as h
};