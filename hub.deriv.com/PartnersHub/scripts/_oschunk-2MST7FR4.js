import {
    a as $,
    b as x
} from "./_oschunk-CLRE6NFZ.js";
import {
    a as O
} from "./_oschunk-VDU6C3OQ.js";
import {
    a as B,
    b as I
} from "./_oschunk-TWAMG3Q4.js";
import {
    b as w,
    d as C,
    f as F,
    s as D
} from "./_oschunk-LWMGEL7F.js";
import {
    a as R
} from "./_oschunk-4GXKK3IG.js";
import {
    a as k,
    g as p,
    i as f
} from "./_oschunk-WZHUAZJP.js";
import {
    q as A
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as l
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var _ = H(k());
var N = {};
var V = l; {
    let e = class e extends V.Controller.BaseViewController {
        constructor(t, a, n) {
            super(t, a, n, N);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get secondaryOnClick$Action() {
            return this.hasOwnProperty("_secondaryOnClick$Action") || (this._secondaryOnClick$Action = function() {
                return Promise.resolve()
            }), this._secondaryOnClick$Action
        }
        set secondaryOnClick$Action(t) {
            this._secondaryOnClick$Action = t
        }
        get primaryOnClick$Action() {
            return this.hasOwnProperty("_primaryOnClick$Action") || (this._primaryOnClick$Action = function() {
                return Promise.resolve()
            }), this._primaryOnClick$Action
        }
        set primaryOnClick$Action(t) {
            this._primaryOnClick$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    r(e, "ControllerInner");
    let c = e;
    T = c
}
var T, W = new V.Controller.ControllerFactory(T, R);
var g = H(k());
var u = l; {
    let e = class e extends u.Controller.BaseViewController {
        constructor(t, a, n) {
            super(t, a, n);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _triggerOnClick$Action() {
            return this.hasOwnProperty("__triggerOnClick$Action") || (this.__triggerOnClick$Action = function(t) {
                var a = this.model,
                    n = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("TriggerOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "TriggerOnClick"), o.setAttribute("outsystems.function.key", "645bcb6b-f923-4150-b2a9-eebf2520344d"), o.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), o.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("TriggerOnClick"), t = n.callContext(t), u.Flow.executeAsyncFlow(function() {
                            return n.onClick$Action(t)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__triggerOnClick$Action
        }
        set _triggerOnClick$Action(t) {
            this.__triggerOnClick$Action = t
        }
        triggerOnClick$Action(t) {
            var a = this.controller;
            return u.Logger.startActiveSpan("TriggerOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "TriggerOnClick"), n.setAttribute("outsystems.function.key", "645bcb6b-f923-4150-b2a9-eebf2520344d"), n.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), n.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._triggerOnClick$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(t) {
            this._onClick$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return B.defaultTimeout
        }
    };
    r(e, "ControllerInner");
    let c = e;
    L = c
}
var L, z = new u.Controller.ControllerFactory(L, I);
var y = l,
    ht = f.PlaceholderContent,
    mt = f.IteratorPlaceholderContent,
    h = class h extends p.BaseWebBlock {
        static get displayName() {
            return "ButtonVariants.PrimaryButtonOutline"
        }
        static getAttributes() {
            return {
                codeFunction: "PrimaryButtonOutline",
                functionKey: "1d79ff1f-bf6b-4558-9192-9fcc9ff2b66d",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.ButtonVariants.PrimaryButtonOutline.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return $
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                i = this.controller,
                t = this.idService,
                a = i.validationService,
                n = this.widgetsRecordProvider,
                d = i.callContext(),
                o = h.ifWidget,
                M = h.textWidget,
                K = h.asPrimitiveValue,
                G = h.getTranslation,
                v = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(w, {
                enabled: e.variables.enabledIn,
                extendedProperties: {
                    style: "width: " + e.variables.widthIn + ";height: " + e.variables.heightIn + ";background: " + e.variables.backgroundColorIn + ";border-radius: " + e.variables.borderRadiusIn + ";",
                    type: e.variables.buttonTypeIn,
                    "data-button": e.variables.builtInValidationIn ? "True" : "False"
                },
                isDefault: !1,
                onClick: r(function() {
                    return Promise.resolve().then(function() {
                        var s = d.clone();
                        return i.triggerOnClick$Action(i.callContext(s))
                    })
                }, "onClick"),
                style: "primary-button-outline " + e.variables.classIn,
                visible: e.variables.visibleIn,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n,
                enabled_dataFetchStatus: y.Model.calculateDataFetchStatus(e.variables._enabledInDataFetchStatus),
                style_dataFetchStatus: y.Model.calculateDataFetchStatus(e.variables._classInDataFetchStatus),
                visible_dataFetchStatus: y.Model.calculateDataFetchStatus(e.variables._visibleInDataFetchStatus)
            }, g.createElement(C, {
                align: 0,
                animate: !1,
                style: "primary-label-outline",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, g.createElement(C, {
                align: 0,
                animate: !0,
                style: "primary-button-outline-loading",
                visible: e.variables.isLoadingIn,
                _idProps: {
                    service: t,
                    name: "LoadingContainer"
                },
                _widgetRecordProvider: n,
                visible_dataFetchStatus: y.Model.calculateDataFetchStatus(e.variables._isLoadingInDataFetchStatus)
            }), g.createElement(F, {
                value: e.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: y.Model.calculateDataFetchStatus(e.variables._titleInDataFetchStatus)
            }))))
        }
    };
r(h, "View");
var E = h,
    P = E;
var b = l,
    Pt = f.PlaceholderContent,
    St = f.IteratorPlaceholderContent,
    m = class m extends p.BaseWebBlock {
        static get displayName() {
            return "Common.StickyButtonBottom"
        }
        static getAttributes() {
            return {
                codeFunction: "StickyButtonBottom",
                functionKey: "9fb2371c-6d33-49e9-af47-2d06e295e4fe",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.StickyButtonBottom.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, P]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                i = this.controller,
                t = this.idService,
                a = i.validationService,
                n = this.widgetsRecordProvider,
                d = i.callContext(),
                o = m.ifWidget,
                M = m.textWidget,
                K = m.asPrimitiveValue,
                G = m.getTranslation,
                v = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(C, {
                align: 0,
                animate: !1,
                style: e.getCachedValue(t.getId("Aa7gmU1kFUi4Ef8S5DS2lQ.Style"), function() {
                    return "ph-sticky-btn-bottom display-flex gap-s " + (e.variables.shouldHideOnDesktopIn === !0 ? "ph-should-hide-on-desktop" : "")
                }, function() {
                    return e.variables.shouldHideOnDesktopIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: n,
                style_dataFetchStatus: b.Model.calculateDataFetchStatus(e.variables._shouldHideOnDesktopInDataFetchStatus)
            }, o(!e.variables.hasCustomButtonIn, !1, this, function() {
                return [_.createElement(O, {
                    getOwnerSpan: r(function() {
                        return v.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: r(function() {
                        return v.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        title: e.variables.primaryButtonLabelIn,
                        _titleInDataFetchStatus: b.Model.calculateDataFetchStatus(e.variables._primaryButtonLabelInDataFetchStatus),
                        borderRadius: "100px",
                        Width: "100%"
                    },
                    events: {
                        _handleError: r(function(s) {
                            i.handleError(s)
                        }, "_handleError"),
                        onClick$Action: r(function() {
                            var s = d.clone();
                            i.primaryOnClick$Action(i.callContext(s))
                        }, "onClick$Action")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        name: "PrimaryButton",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    _dependencies: []
                }), o(e.variables.secondaryButtonLabelIn !== b.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                    return [_.createElement(P, {
                        getOwnerSpan: r(function() {
                            return v.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: r(function() {
                            return v.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Width: "100%",
                            borderRadius: "100px",
                            title: e.variables.secondaryButtonLabelIn,
                            _titleInDataFetchStatus: b.Model.calculateDataFetchStatus(e.variables._secondaryButtonLabelInDataFetchStatus)
                        },
                        events: {
                            _handleError: r(function(s) {
                                i.handleError(s)
                            }, "_handleError"),
                            onClick$Action: r(function() {
                                var s = d.clone();
                                i.secondaryOnClick$Action(i.callContext(s))
                            }, "onClick$Action")
                        },
                        _validationProps: {
                            validationService: a
                        },
                        _idProps: {
                            service: t,
                            name: "SecondaryButton",
                            alias: "2"
                        },
                        _widgetRecordProvider: n,
                        _dependencies: []
                    })]
                }, function() {
                    return []
                })]
            }, function() {
                return [_.createElement(D, {
                    align: 0,
                    content: v.props.placeholders.customButton,
                    _idProps: {
                        service: t,
                        name: "CustomButton"
                    },
                    _widgetRecordProvider: n
                })]
            })))
        }
    };
r(m, "View");
var S = m,
    Ht = S;
export {
    P as a, Ht as b
};