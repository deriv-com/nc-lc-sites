import {
    a as nr,
    b as ir
} from "./_oschunk-FLQXSIWE.js";
import {
    a as Xe
} from "./_oschunk-AFJAHMER.js";
import {
    a as Wt,
    b as Mt,
    c as Bt,
    d as zt,
    e as Ut,
    f as jt,
    g as Qt,
    h as qt,
    i as Jt,
    j as Kt,
    k as Xt,
    l as Yt,
    m as Zt,
    n as er,
    o as tr,
    p as rr
} from "./_oschunk-I2ZHC7XU.js";
import {
    a as Gt
} from "./_oschunk-ZSU2JK2M.js";
import {
    a as ce
} from "./_oschunk-5ETXRNLC.js";
import {
    a as Be
} from "./_oschunk-EROCOLS7.js";
import {
    a as $t,
    b as L,
    h as c,
    j as p,
    q as V,
    r as C,
    s as We,
    t as Me,
    u as Te,
    v as G,
    w as De,
    y as w
} from "./_oschunk-42NACYKQ.js";
import {
    a as T
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as U,
    g as R,
    i as y
} from "./_oschunk-RKYF3TWC.js";
import {
    a as W,
    c as O
} from "./_oschunk-DOFMR6EA.js";
import {
    l as S
} from "./_oschunk-2ZI4JQLD.js";
import {
    a as Ge,
    bh as Ke
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as v
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as z
} from "./_oschunk-DVBKI63I.js";
var X = z(U());
var or = {};
var K = v; {
    let r = class r extends K.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, or);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return K.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "3534da71-b945-4317-94fb-a905a2cc40eb"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), i.variables.statusIn = i.variables.statusIn
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _onClickAction$Action() {
            return this.hasOwnProperty("__onClickAction$Action") || (this.__onClickAction$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return K.Logger.startActiveSpan("OnClickAction", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickAction"), n.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), K.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        get _statusBadgeOnClick$Action() {
            return this.hasOwnProperty("__statusBadgeOnClick$Action") || (this.__statusBadgeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return K.Logger.startActiveSpan("StatusBadgeOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "StatusBadgeOnClick"), n.setAttribute("outsystems.function.key", "8aaa6218-8f49-4335-bbdd-f269376046d6"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("StatusBadgeOnClick"), e = t.callContext(e), K.Flow.executeAsyncFlow(function() {
                            return t.needVerificationEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__statusBadgeOnClick$Action
        }
        set _statusBadgeOnClick$Action(e) {
            this.__statusBadgeOnClick$Action = e
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return K.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "3534da71-b945-4317-94fb-a905a2cc40eb"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickAction$Action(e) {
            var i = this.controller;
            return K.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        statusBadgeOnClick$Action(e) {
            var i = this.controller;
            return K.Logger.startActiveSpan("StatusBadgeOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "StatusBadgeOnClick"), t.setAttribute("outsystems.function.key", "8aaa6218-8f49-4335-bbdd-f269376046d6"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._statusBadgeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onClickEvent$Action() {
            return this.hasOwnProperty("_onClickEvent$Action") || (this._onClickEvent$Action = function() {
                return Promise.resolve()
            }), this._onClickEvent$Action
        }
        set onClickEvent$Action(e) {
            this._onClickEvent$Action = e
        }
        get needVerificationEvent$Action() {
            return this.hasOwnProperty("_needVerificationEvent$Action") || (this._needVerificationEvent$Action = function() {
                return Promise.resolve()
            }), this._needVerificationEvent$Action
        }
        set needVerificationEvent$Action(e) {
            this._needVerificationEvent$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onParametersChanged$Action(e)
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    ar = f
}
var ar, sr = new K.Controller.ControllerFactory(ar, T);
var Ve = z(U());
var lr = {};
var cr = v; {
    let r = class r extends cr.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, lr);
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    dr = f
}
var dr, ur = new cr.Controller.ControllerFactory(dr, T);
var Ye = z(U());
var fr = {};
var mr = v; {
    let r = class r extends mr.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, fr);
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
            return S.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    vr = f
}
var vr, hr = new mr.Controller.ControllerFactory(vr, Be);
var gr = v,
    Fi = y.PlaceholderContent,
    Vi = y.IteratorPlaceholderContent,
    de = class de extends R.BaseWebBlock {
        static get displayName() {
            return "Content.Tag"
        }
        static getAttributes() {
            return {
                codeFunction: "Tag",
                functionKey: "8a67ba94-c4c8-4792-a082-33aeb0de5590",
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
            return Wt
        }
        get controllerFactory() {
            return hr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = de.ifWidget,
                s = de.textWidget,
                u = de.asPrimitiveValue,
                m = de.getTranslation,
                b = this;
            return Ye.createElement("div", this.getRootNodeProperties(), Ye.createElement(De, {
                align: 0,
                content: b.props.placeholders.tag,
                gridProperties: {
                    classes: "OSInline"
                },
                style: r.getCachedValue(e.getId("Tag.Style"), function() {
                    return "tag" + (r.variables.sizeIn !== gr.BuiltinFunctions.nullTextIdentifier() ? " tag-" + r.variables.sizeIn : "") + " border-radius-" + r.variables.shapeIn + (r.variables.isLightIn ? " background-" + r.variables.colorIn + "-lightest text-" + r.variables.colorIn + "-darker" : " background-" + r.variables.colorIn) + (r.variables.extendedClassIn === "" ? "" : " " + r.variables.extendedClassIn)
                }, function() {
                    return r.variables.sizeIn
                }, function() {
                    return r.variables.shapeIn
                }, function() {
                    return r.variables.isLightIn
                }, function() {
                    return r.variables.colorIn
                }, function() {
                    return r.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Tag"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: gr.Model.calculateDataFetchStatus(r.variables._sizeInDataFetchStatus, r.variables._shapeInDataFetchStatus, r.variables._isLightInDataFetchStatus, r.variables._colorInDataFetchStatus, r.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
a(de, "View");
var Ze = de,
    et = Ze;
var tt = v,
    nn = y.PlaceholderContent,
    ji = y.IteratorPlaceholderContent,
    ue = class ue extends R.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.StatusBadge"
        }
        static getAttributes() {
            return {
                codeFunction: "StatusBadge",
                functionKey: "29bb1088-d710-48b8-9d2c-1ab0fb648bf3",
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
            return [et]
        }
        get modelFactory() {
            return Mt
        }
        get controllerFactory() {
            return ur
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = ue.ifWidget,
                s = ue.textWidget,
                u = ue.asPrimitiveValue,
                m = ue.getTranslation,
                b = this;
            return Ve.createElement("div", this.getRootNodeProperties(), Ve.createElement(et, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLight: !0,
                    Color: r.getCachedValue(e.getId("buu9EGItgEyk0GecndJaWw.Color"), function() {
                        return r.variables.statusIn === "Verification failed" || r.variables.statusIn === "Disabled" ? Ge.color.red : Ge.color.yellow
                    }, function() {
                        return r.variables.statusIn
                    }),
                    _colorInDataFetchStatus: tt.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    tag: new nn(function() {
                        return [Ve.createElement(C, {
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            image: tt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }), Ve.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 12px; text-decoration: underline;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "8px"
                            },
                            value: r.variables.statusIn,
                            _idProps: {
                                service: e,
                                name: "ServerStatus"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: tt.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [u(r.variables._statusInDataFetchStatus), u(r.variables.statusIn)]
            }))
        }
    };
a(ue, "View");
var rt = ue,
    nt = rt;
var se = v,
    to = y.PlaceholderContent,
    ro = y.IteratorPlaceholderContent,
    fe = class fe extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MyAccountCard"
        }
        static getAttributes() {
            return {
                codeFunction: "MyAccountCard",
                functionKey: "67369083-c559-4434-9335-fdab63827c13",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.MyAccountCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [nt]
        }
        get modelFactory() {
            return Bt
        }
        get controllerFactory() {
            return sr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = fe.ifWidget,
                s = fe.textWidget,
                u = fe.asPrimitiveValue,
                m = fe.getTranslation,
                b = this;
            return X.createElement("div", this.getRootNodeProperties(), X.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClickAction$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "my-account-card",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, X.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FirstRowContainer"
                },
                _widgetRecordProvider: t
            }, X.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductImageContainer"
                },
                _widgetRecordProvider: t
            }, X.createElement(C, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "ProductImage"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            }), X.createElement(c, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.statusBadgeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                visible: r.variables.statusIn !== "",
                _idProps: {
                    service: e,
                    name: "StatusBadgeContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, X.createElement(nt, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Status: r.getCachedValue(e.getId("ctxYidXDoEe9cpM9LUeV8w.Status"), function() {
                        return r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "maintenance" ? "Server maintenance" : r.variables.statusIn === "unavailable" ? "Temporarily unavailable" : r.variables.statusIn === "poa_required" || r.variables.statusIn === "needs_verification" ? "Needs verification" : r.variables.statusIn === "verification_pending" || r.variables.statusIn === "poa_pending" ? "Verification in review" : r.variables.statusIn === "proof_failed" || r.variables.statusIn === "poa_failed" || r.variables.statusIn === "poa_outdated" ? "Verification failed" : r.variables.statusIn
                    }, function() {
                        return r.variables.statusIn
                    }),
                    _statusInDataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))), X.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer"
                },
                _widgetRecordProvider: t
            }, X.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-block",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TextContainer"
                },
                _widgetRecordProvider: t
            }, X.createElement(p, {
                style: "display-block",
                value: r.variables.nameIn,
                _idProps: {
                    service: e,
                    name: "ProductName"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._nameInDataFetchStatus)
            }), X.createElement(p, {
                extendedProperties: {
                    style: "margin-top: 4px;"
                },
                style: r.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Style"), function() {
                    return r.variables.statusIn === "maintenance" || r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "unavailable" || r.variables.statusIn === "disabled" ? "balance-unavailable" : "balance-text"
                }, function() {
                    return r.variables.statusIn
                }),
                value: r.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Value"), function() {
                    return r.variables.statusIn === "maintenance" || r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "unavailable" || r.variables.statusIn === "disabled" ? "(Balance unavailable)" : r.variables.balanceIn
                }, function() {
                    return r.variables.statusIn
                }, function() {
                    return r.variables.balanceIn
                }),
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus),
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus, r.variables._balanceInDataFetchStatus)
            })), X.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ArrowIconContainer"
                },
                _widgetRecordProvider: t
            }, X.createElement(C, {
                image: se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                style: r.getCachedValue(e.getId("Krj1ndw00EeLC7EeErzINg.Style"), function() {
                    return r.variables.statusIn !== "" ? "disabled" : ""
                }, function() {
                    return r.variables.statusIn
                }),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            })))))
        }
    };
a(fe, "View");
var it = fe,
    no = it;
var ie = z(U());
var pr = {};
var me = v; {
    let r = class r extends me.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, pr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickAction$Action() {
            return this.hasOwnProperty("__onClickAction$Action") || (this.__onClickAction$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return me.Logger.startActiveSpan("OnClickAction", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickAction"), n.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), me.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), me.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        onClickAction$Action(e) {
            var i = this.controller;
            return me.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), me.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onClickEvent$Action() {
            return this.hasOwnProperty("_onClickEvent$Action") || (this._onClickEvent$Action = function() {
                return Promise.resolve()
            }), this._onClickEvent$Action
        }
        set onClickEvent$Action(e) {
            this._onClickEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    br = f
}
var br, _r = new me.Controller.ControllerFactory(br, T);
var ze = v,
    Co = y.PlaceholderContent,
    Ao = y.IteratorPlaceholderContent,
    ve = class ve extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.AvailableAccountCard"
        }
        static getAttributes() {
            return {
                codeFunction: "AvailableAccountCard",
                functionKey: "98e50be2-a3ea-4cff-82f2-19c5390ecf2b",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.AvailableAccountCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return zt
        }
        get controllerFactory() {
            return _r
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = ve.ifWidget,
                s = ve.textWidget,
                u = ve.asPrimitiveValue,
                m = ve.getTranslation,
                b = this;
            return ie.createElement("div", this.getRootNodeProperties(), ie.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClickAction$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                style: "available_account_card",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, ie.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, ie.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 40px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "40px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductIconContainerSmall"
                },
                _widgetRecordProvider: t
            }, ie.createElement(C, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            })), ie.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 0 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, ie.createElement(p, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                style: "display-block",
                value: r.variables.productNameIn,
                _idProps: {
                    service: e,
                    name: "Product"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productNameInDataFetchStatus)
            }), ie.createElement(p, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px; margin-top: 4px;"
                },
                value: r.variables.productDescriptionIn,
                _idProps: {
                    service: e,
                    name: "Description"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productDescriptionInDataFetchStatus)
            }))), ie.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 40px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "40px"
                },
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconContainer"
                },
                _widgetRecordProvider: t
            }, ie.createElement(C, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                image: ze.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
a(ve, "View");
var ot = ve,
    Po = ot;
var D = z(U());
var on = {
        "CPbKy+0QdkiEybCU+HUEZg#Value": "Mot de passe oubli\xE9 ?"
    },
    yr = {
        "fr-FR": {
            translations: on,
            isRTL: !1
        }
    };
var _ = v; {
    let r = class r extends _.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, yr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _setPasswordOnClick$Action() {
            return this.hasOwnProperty("__setPasswordOnClick$Action") || (this.__setPasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("SetPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "SetPasswordOnClick"), n.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetPasswordOnClick"), e = t.callContext(e);
                        var s = new _.DataTypes.VariableHolder;
                        return _.Flow.executeAsyncFlow(function() {
                            return _.Flow.executeSequence(function() {
                                return i.variables.isPasswordSetIn ? t._addAccountOnClick$Action(e) : (i.flush(), O.tradingPlatformPasswordChange$Action("", i.variables.selectedAccountIn.platformAttr, i.variables.passwordInputValueVar, e).then(function(u) {
                                    s.value = u
                                }).then(function() {
                                    return t._addAccountOnClick$Action(e)
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__setPasswordOnClick$Action
        }
        set _setPasswordOnClick$Action(e) {
            this.__setPasswordOnClick$Action = e
        }
        get _validate$Action() {
            return this.hasOwnProperty("__validate$Action") || (this.__validate$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("Validate", function(n) {
                    n && (n.setAttribute("code.function", "Validate"), n.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), e = t.callContext(e), i.variables.passwordInputValueVar === "" ? (i.widgets.get(o.getId("Input_password")).validAttr = !1, i.widgets.get(o.getId("Input_password")).validationMessageAttr = "Password is required.") : (i.widgets.get(o.getId("Input_password")).validAttr = !0, i.widgets.get(o.getId("Input_password")).validationMessageAttr = _.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__validate$Action
        }
        set _validate$Action(e) {
            this.__validate$Action = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("ForgotPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ForgotPasswordOnClick"), n.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), _.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        get _handleError$Action() {
            return this.hasOwnProperty("__handleError$Action") || (this.__handleError$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("HandleError", function(s) {
                    return s && (s.setAttribute("code.function", "HandleError"), s.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        o.ensureControllerAlive("HandleError"), i = o.callContext(i);
                        var u = new _.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars")));
                        return u.value.errorCodeInLocal = e, _.Flow.executeAsyncFlow(function() {
                            return u.value.errorCodeInLocal !== "ASK_FIX_DETAILS" && u.value.errorCodeInLocal !== "FinancialAssessmentRequired" ? u.value.errorCodeInLocal === "TradingPlatformInvalidAccount" ? (_.FeedbackMessageService.showFeedbackMessage("To trade CFDs, you'll need to use your USD Wallet. Click Transfer to move your BTC to your USD Wallet.", 0), _.Flow.returnAsync()) : u.value.errorCodeInLocal === "InputValidationFailed" ? (_.FeedbackMessageService.showFeedbackMessage("Your password is incorrect, please try again.", 3), t.variables.isLoadingVar = !1, _.Flow.returnAsync()) : (_.FeedbackMessageService.showFeedbackMessage(u.value.errorCodeInLocal, 0), _.Flow.returnAsync()) : o.needsKYCEvent$Action(i).then(function() {
                                t.variables.isLoadingVar = !1, t.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__handleError$Action
        }
        set _handleError$Action(e) {
            this.__handleError$Action = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return _.Logger.startActiveSpan("PasswordPolicyCompliant", function(s) {
                    s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("PasswordPolicyCompliant"), i = o.callContext(i);
                        var u = new _.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars")));
                        u.value.isValidInLocal = e, t.variables.isPasswordValidVar = u.value.isValidInLocal
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), _.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                i.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("OnClickShowPassword", function(n) {
                    n && (n.setAttribute("code.function", "OnClickShowPassword"), n.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), e = t.callContext(e), i.variables.showPasswordVar = !i.variables.showPasswordVar
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _addAccountOnClick$Action() {
            return this.hasOwnProperty("__addAccountOnClick$Action") || (this.__addAccountOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("AddAccountOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "AddAccountOnClick"), n.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        t.ensureControllerAlive("AddAccountOnClick"), e = t.callContext(e);
                        var s = new _.DataTypes.VariableHolder,
                            u = new _.DataTypes.VariableHolder;
                        return _.Flow.executeAsyncFlow(function() {
                            return i.variables.isLoadingVar = !0, _.Flow.executeSequence(function() {
                                return i.variables.selectedAccountIn.platformAttr === "mt5" ? (i.flush(), O.mT5NewAccount$Action(i.variables.passwordInputValueVar, i.variables.selectedAccountIn.productAttr, i.variables.selectedAccountIn.shortcodeAttr, e).then(function(m) {
                                    s.value = m
                                }).then(function() {
                                    i.variables.isLoadingVar = !1, i.variables.passwordInputValueVar = ""
                                }).then(function() {
                                    return _.Flow.executeSequence(function() {
                                        return s.value.errorCodeOut !== _.BuiltinFunctions.nullTextIdentifier() ? t._handleError$Action(s.value.errorCodeOut, e) : t.refetchMT5Event$Action(e)
                                    })
                                })) : (i.flush(), O.tradingPlatformNewAccount$Action("all", i.variables.passwordInputValueVar, i.variables.selectedAccountIn.platformAttr, e).then(function(m) {
                                    u.value = m
                                }).then(function() {
                                    i.variables.isLoadingVar = !1, i.variables.passwordInputValueVar = ""
                                }).then(function() {
                                    return _.Flow.executeSequence(function() {
                                        if (u.value.responseOut.msg_typeAttr !== _.BuiltinFunctions.nullTextIdentifier()) return t.refetchDxtradeEvent$Action(e)
                                    })
                                }))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__addAccountOnClick$Action
        }
        set _addAccountOnClick$Action(e) {
            this.__addAccountOnClick$Action = e
        }
        get _termsAndConditionsOnClick$Action() {
            return this.hasOwnProperty("__termsAndConditionsOnClick$Action") || (this.__termsAndConditionsOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("TermsAndConditionsOnClick", function(n) {
                    n && (n.setAttribute("code.function", "TermsAndConditionsOnClick"), n.setAttribute("outsystems.function.key", "e30991b1-411f-447a-b3ac-babc53a938c9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TermsAndConditionsOnClick"), e = t.callContext(e), O.redirectToExternalURL$Action(i.variables.selectedAccountIn.shortcodeAttr === "svg" ? "https://docs.deriv.com/tnc/general-terms.pdf" : i.variables.selectedAccountIn.shortcodeAttr === "bvi" ? "https://docs.deriv.com/tnc/deriv-(bvi)-ltd.pdf" : i.variables.selectedAccountIn.shortcodeAttr === "vanuatu" ? "https://docs.deriv.com/tnc/deriv-(v)-ltd.pdf" : i.variables.selectedAccountIn.shortcodeAttr === "labuan" ? "https://docs.deriv.com/tnc/deriv-(fx)-ltd.pdf" : i.variables.selectedAccountIn.shortcodeAttr === "dml" ? "https://docs.deriv.com/tnc/deriv-mauritius-ltd.pdf" : "https://docs.deriv.com/tnc/general-terms.pdf", !0, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__termsAndConditionsOnClick$Action
        }
        set _termsAndConditionsOnClick$Action(e) {
            this.__termsAndConditionsOnClick$Action = e
        }
        setPasswordOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("SetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetPasswordOnClick"), t.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._setPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        validate$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("Validate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Validate"), t.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._validate$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        forgotPasswordOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        handleError$Action(e, i) {
            var t = this.controller;
            return _.Logger.startActiveSpan("HandleError__proxy", function(o) {
                return o && (o.setAttribute("code.function", "HandleError"), o.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._handleError$Action, i, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        passwordPolicyCompliant$Action(e, i) {
            var t = this.controller;
            return _.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(o) {
                o && (o.setAttribute("code.function", "PasswordPolicyCompliant"), o.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, i, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickShowPassword$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        addAccountOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("AddAccountOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "AddAccountOnClick"), t.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._addAccountOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        termsAndConditionsOnClick$Action(e) {
            var i = this.controller;
            return _.Logger.startActiveSpan("TermsAndConditionsOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "TermsAndConditionsOnClick"), t.setAttribute("outsystems.function.key", "e30991b1-411f-447a-b3ac-babc53a938c9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._termsAndConditionsOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get needsKYCEvent$Action() {
            return this.hasOwnProperty("_needsKYCEvent$Action") || (this._needsKYCEvent$Action = function() {
                return Promise.resolve()
            }), this._needsKYCEvent$Action
        }
        set needsKYCEvent$Action(e) {
            this._needsKYCEvent$Action = e
        }
        get refetchMT5Event$Action() {
            return this.hasOwnProperty("_refetchMT5Event$Action") || (this._refetchMT5Event$Action = function() {
                return Promise.resolve()
            }), this._refetchMT5Event$Action
        }
        set refetchMT5Event$Action(e) {
            this._refetchMT5Event$Action = e
        }
        get refetchDxtradeEvent$Action() {
            return this.hasOwnProperty("_refetchDxtradeEvent$Action") || (this._refetchDxtradeEvent$Action = function() {
                return Promise.resolve()
            }), this._refetchDxtradeEvent$Action
        }
        set refetchDxtradeEvent$Action(e) {
            this._refetchDxtradeEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Ue = f, Ue.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars", [{
        name: "ErrorCode",
        attrName: "errorCodeInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Ue.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var Ue, Cr = new _.Controller.ControllerFactory(Ue, T);
var M = v,
    Wo = y.PlaceholderContent,
    Mo = y.IteratorPlaceholderContent,
    he = class he extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.PasswordModal"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordModal",
                functionKey: "53e37419-74a6-48a1-868f-55c9df17f185",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.PasswordModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Xe]
        }
        get modelFactory() {
            return Ut
        }
        get controllerFactory() {
            return Cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = he.ifWidget,
                s = he.textWidget,
                u = he.asPrimitiveValue,
                m = he.getTranslation,
                b = this;
            return D.createElement("div", this.getRootNodeProperties(), D.createElement(G, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, D.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: t
            }, D.createElement(p, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("fSgl+j5+0UKZIVTyJ5OjXg.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Add " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "a Deriv X" : "an MT5") + " account" : "Set up your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " password"
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), D.createElement(C, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: M.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), D.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, D.createElement(p, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: r.getCachedValue(e.getId("Title.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Enter your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " password to enable your " + W.getAccountType() + " account." : "Enable your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " account by setting a password. Use this password for all your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " accounts."
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }, function() {
                    return W.getAccountType()
                }),
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), D.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "position-relative",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PasswordInputContainer"
                },
                _widgetRecordProvider: t
            }, D.createElement(We, {
                _validationProps: {
                    validationService: i
                },
                enabled: !r.variables.isLoadingVar,
                extendedEvents: {
                    onBlur: a(function() {
                        var d = o.clone();
                        l.validate$Action(l.callContext(d))
                    }, "onBlur")
                },
                extendedProperties: {
                    type: r.getCachedValue(e.getId("Input_password.type"), function() {
                        return r.variables.showPasswordVar ? "text" : "password"
                    }, function() {
                        return r.variables.showPasswordVar
                    })
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 1,
                mandatory: !0,
                maxLength: 16,
                prompt: "Enter your password",
                style: "form-control",
                variable: r.createVariable(M.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(d) {
                    r.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "Input_password"
                },
                _widgetRecordProvider: t
            }), n(r.variables.showPasswordVar, !1, this, function() {
                return [D.createElement(C, {
                    extendedEvents: {
                        onClick: a(function() {
                            var d = o.clone();
                            l.onClickShowPassword$Action(l.callContext(d))
                        }, "onClick")
                    },
                    image: M.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
                    style: r.getCachedValue(e.getId("A5jyuhicUE2e4Pp8p0KqZQ.Style"), function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [D.createElement(C, {
                    extendedEvents: {
                        onClick: a(function() {
                            var d = o.clone();
                            l.onClickShowPassword$Action(l.callContext(d))
                        }, "onClick")
                    },
                    image: M.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                    style: r.getCachedValue(e.getId("FLORvYxN7kGkgrgx24rwlQ.Style"), function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                })]
            })), D.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "padding: 16px 16px 0px 16px;"
                },
                visible: !r.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "PasswordPolicyContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, D.createElement(Xe, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    NeedToCheckSpecialCharacter: !0,
                    Password: r.variables.passwordInputValueVar,
                    Type: "CREATE"
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError"),
                    compliant$Action: a(function(d) {
                        var rn = o.clone();
                        l.passwordPolicyCompliant$Action(d, l.callContext(rn))
                    }, "compliant$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), D.createElement(c, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "margin-top: 24px; text-align: right;"
                },
                visible: r.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, D.createElement(w, {
                extendedProperties: {
                    style: "color: #333333; font-size: 14px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("CPbKy+0QdkiEybCU+HUEZg#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), D.createElement(c, {
                align: 0,
                animate: !1,
                style: "cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: t
            }, D.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 8px; margin-right: 16px; padding: 8px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                style: "display-flex align-items-flex-start",
                visible: W.getAccountType() === "real" && r.variables.selectedAccountIn.platformAttr === "mt5",
                _idProps: {
                    service: e,
                    name: "RegulatoryInformation"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }, D.createElement(C, {
                image: M.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), D.createElement(p, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.getCachedValue(e.getId("6ELDmySp7Uqpvj+llw1hVw.Value"), function() {
                    return "You are adding your " + (r.variables.selectedAccountIn.platformAttr === "mt5" ? "Deriv " + M.BuiltinFunctions.toUpper(r.variables.selectedAccountIn.platformAttr) + " " + r.variables.selectedAccountIn.labelAttr : r.variables.selectedAccountIn.labelAttr) + " account under " + r.variables.selectedAccountIn.nameAttr + (r.variables.selectedAccountIn.regulatory_authorityAttr !== M.BuiltinFunctions.nullTextIdentifier() ? ", regulated by the " + r.variables.selectedAccountIn.regulatory_authorityAttr : "") + (r.variables.selectedAccountIn.licence_numberAttr !== M.BuiltinFunctions.nullTextIdentifier() ? " (licence no. " + r.variables.selectedAccountIn.licence_numberAttr + ")." : "")
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }, function() {
                    return r.variables.selectedAccountIn.labelAttr
                }, function() {
                    return r.variables.selectedAccountIn.nameAttr
                }, function() {
                    return r.variables.selectedAccountIn.regulatory_authorityAttr
                }, function() {
                    return r.variables.selectedAccountIn.licence_numberAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })), D.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "color: #333333; margin-right: 16px; margin-top: 24px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: W.getAccountType() === "real" && r.variables.selectedAccountIn.platformAttr === "mt5",
                _idProps: {
                    service: e,
                    name: "AcceptTermsAndCondition"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }, D.createElement(p, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: r.getCachedValue(e.getId("KSGfXiAafkGGiobvnyUBgA.Value"), function() {
                    return "By clicking " + (r.variables.isPasswordSetIn ? "'Add account'" : "'Set up password'") + ", I accept " + r.variables.selectedAccountIn.nameAttr + "'s "
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.nameAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), D.createElement(Te, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var d = o.clone();
                    l.termsAndConditionsOnClick$Action(l.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "20"
                },
                _widgetRecordProvider: t
            }, D.createElement(w, {
                extendedProperties: {
                    style: "color: #222; font-style: normal; font-weight: bold; text-decoration: underline;"
                },
                text: ["terms and conditions"],
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            })), "."), D.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px; margin-top: 16px; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionBtnContainer"
                },
                _widgetRecordProvider: t
            }, D.createElement(L, {
                enabled: !r.variables.isLoadingVar,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.setPasswordOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButton"
                },
                _widgetRecordProvider: t
            }, D.createElement(p, {
                value: r.getCachedValue(e.getId("SyRNTNEVdEu8Q8GmQN8J8Q.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Add account" : "Set up password"
                }, function() {
                    return r.variables.isPasswordSetIn
                }),
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: M.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }))))))
        }
    };
a(he, "View");
var at = he,
    Bo = at;
var N = z(U());
var an = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u064A\u0633 \u0645\u062D\u062C\u0648\u0628\u064B\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u062C\u062F\u0631\u0627\u0646 \u0627\u0644\u0646\u0627\u0631\u064A\u0629 \u0623\u0648 \u0627\u0644\u0641\u0644\u0627\u062A\u0631.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u062C\u0644\u062F \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u063A\u064A\u0631 \u0627\u0644\u0645\u0631\u063A\u0648\u0628 \u0641\u064A\u0647\u0627.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u0644\u0645 \u062A\u062A\u0644\u0642\u064E \u0628\u0631\u064A\u062F\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627\u061F",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    sn = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "-Stellen Sie sicher, dass die E-Mail nicht durch Firewalls oder Filter blockiert wird.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\xDCberpr\xFCfen Sie Ihren Spam-Ordner.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Haben Sie die E-Mail nicht erhalten?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Passwort vergessen"
    },
    ln = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Aseg\xFArese de que el correo electr\xF3nico no est\xE9 bloqueado por firewall o filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Revise su carpeta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\xBFNo recibi\xF3 un correo electr\xF3nico?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Olvid\xE9 la contrase\xF1a"
    },
    cn = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Assicurati che l'email non sia bloccata da firewall o filtri.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Controlla la tua cartella spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Non hai ricevuto un'email?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Password dimenticata"
    },
    dn = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Upewnij si\u0119, \u017Ce ten adres e-mail nie jest blokowany przez zapory ogniowe i filtry.",
        "riMD8BNieE+VC9anaRAgtw#Value": "- Sprawd\u017A sw\xF3j folder spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Nie otrzyma\u0142e\u015B e-maila?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Nie pami\u0119tam has\u0142a"
    },
    un = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "Certifique-se de que o e-mail n\xE3o est\xE1 bloqueado por firewalls ou filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Verifique a sua pasta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "N\xE3o recebeu o e-mail?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Esqueceu-se da palavra-passe"
    },
    fn = {
        "riMD8BNieE+VC9anaRAgtw#Value": "V\xE9rifiez votre dossier de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Vous n'avez pas re\xE7u d'e-mail ?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Mot de passe oubli\xE9"
    },
    mn = {
        "riMD8BNieE+VC9anaRAgtw#Value": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u0441\u043E \u0441\u043F\u0430\u043C\u043E\u043C.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Ar = {
        "ar-001": {
            translations: an,
            isRTL: !0
        },
        "de-DE": {
            translations: sn,
            isRTL: !1
        },
        "es-ES": {
            translations: ln,
            isRTL: !1
        },
        "it-IT": {
            translations: cn,
            isRTL: !1
        },
        "pl-PL": {
            translations: dn,
            isRTL: !1
        },
        "pt-PT": {
            translations: un,
            isRTL: !1
        },
        "fr-FR": {
            translations: fn,
            isRTL: !1
        },
        "ru-RU": {
            translations: mn,
            isRTL: !1
        }
    };
var te = v; {
    let r = class r extends te.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Ar);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resendEmailOnClick$Action() {
            return this.hasOwnProperty("__resendEmailOnClick$Action") || (this.__resendEmailOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return te.Logger.startActiveSpan("ResendEmailOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ResendEmailOnClick"), n.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var s = new te.DataTypes.VariableHolder;
                        return te.Flow.executeAsyncFlow(function() {
                            return i.flush(), O.verifyEmail$Action("trading_platform_mt5_password_reset", W.getSignupEmail(), e).then(function(u) {
                                s.value = u
                            }).then(function() {
                                return t.resendEmailEvent$Action(e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resendEmailOnClick$Action
        }
        set _resendEmailOnClick$Action(e) {
            this.__resendEmailOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return te.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), te.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        resendEmailOnClick$Action(e) {
            var i = this.controller;
            return te.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._resendEmailOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return te.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get resendEmailEvent$Action() {
            return this.hasOwnProperty("_resendEmailEvent$Action") || (this._resendEmailEvent$Action = function() {
                return Promise.resolve()
            }), this._resendEmailEvent$Action
        }
        set resendEmailEvent$Action(e) {
            this._resendEmailEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Pr = f
}
var Pr, wr = new te.Controller.ControllerFactory(Pr, T);
var je = v,
    la = y.PlaceholderContent,
    ca = y.IteratorPlaceholderContent,
    ge = class ge extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.EmailSentModal"
        }
        static getAttributes() {
            return {
                codeFunction: "EmailSentModal",
                functionKey: "92343ed3-e206-49ef-97f8-b76302ae890d",
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
            return [ce]
        }
        get modelFactory() {
            return jt
        }
        get controllerFactory() {
            return wr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = ge.ifWidget,
                s = ge.textWidget,
                u = ge.asPrimitiveValue,
                m = ge.getTranslation,
                b = this;
            return N.createElement("div", this.getRootNodeProperties(), N.createElement(G, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: je.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalHeader"
                },
                _widgetRecordProvider: t
            }, N.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("lE4y1p4_cUyDg4u6gB0Weg#Value", "Forgot password"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), N.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: je.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1; height: 70vh; padding: 16px; text-align: center;"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalContent"
                },
                _widgetRecordProvider: t
            }, N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, N.createElement(C, {
                image: je.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email2.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, N.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "We\u2019ve sent a verification link to " + W.getSignupEmail(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))), N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "bottom: 0; height: 30vh; padding: 16px; position: fixed;"
                },
                style: "display-flex flex-direction-column justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordFooter"
                },
                _widgetRecordProvider: t
            }, N.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #e5f5fc; border-color: #017AAD; border-radius: 8px; border-style: solid; border-width: 0px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "display-flex column-gap-s align-items-flex-start",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "InfoBox"
                },
                _widgetRecordProvider: t
            }, N.createElement(C, {
                image: je.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }), N.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, N.createElement(w, {
                extendedProperties: {
                    style: "margin-bottom: 10px;"
                },
                text: [s(m("gAOjnJo6UEmQdDDWvqw3iQ#Value", "Didn't get an email? "))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }), N.createElement(w, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [s(m("riMD8BNieE+VC9anaRAgtw#Value", "- Check your spam folder."))],
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), N.createElement(w, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [s(m("XlfKqilSdEuhxDi7XQt_HQ#Value", "- Make sure the email isn\u2019t blocked by firewalls or filters."))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }))), N.createElement(ce, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "16",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), N.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #fff; border-width: 1px; color: #ff4450; height: 48px; margin-bottom: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.resendEmailOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResendEmailButton"
                },
                _widgetRecordProvider: t
            }, N.createElement(p, {
                extendedProperties: {
                    style: "font-size: 14px; font-weight: 500; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; wi: ;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                value: "Resend email",
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(ge, "View");
var st = ge,
    da = st;
var k = z(U());
var vn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    hn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Passwort aktualisiert",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Geben Sie Ihr Passwort ein"
    },
    gn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Contrase\xF1a actualizada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduzca su contrase\xF1a"
    },
    pn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Mot de passe mis \xE0 jour",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Entrez votre mot de passe"
    },
    bn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Password aggiornata",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Inserisci la tua password"
    },
    _n = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Has\u0142o zaktualizowane",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Wprowad\u017A swoje has\u0142o"
    },
    yn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Palavra-passe alterada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduza a sua palavra-passe"
    },
    Cn = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Er = {
        "ar-001": {
            translations: vn,
            isRTL: !0
        },
        "de-DE": {
            translations: hn,
            isRTL: !1
        },
        "es-ES": {
            translations: gn,
            isRTL: !1
        },
        "fr-FR": {
            translations: pn,
            isRTL: !1
        },
        "it-IT": {
            translations: bn,
            isRTL: !1
        },
        "pl-PL": {
            translations: _n,
            isRTL: !1
        },
        "pt-PT": {
            translations: yn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Cn,
            isRTL: !1
        }
    };
var Y = v; {
    let r = class r extends Y.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Er);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return Y.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), Y.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                i.variables.passwordInputValueVar = "", i.variables.isVisibleIn = !1, i.variables.isUpdatedVar = !1, W.setTradingPlatformDxtradePasswordReset(""), W.setTradingPlatformMt5PasswordReset("")
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _resetPasswordOnClick$Action() {
            return this.hasOwnProperty("__resetPasswordOnClick$Action") || (this.__resetPasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return Y.Logger.startActiveSpan("ResetPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ResetPasswordOnClick"), n.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResetPasswordOnClick"), e = t.callContext(e);
                        var s = new Y.DataTypes.VariableHolder;
                        return Y.Flow.executeAsyncFlow(function() {
                            return i.flush(), O.tradingPlatformPasswordReset$Action(i.variables.passwordInputValueVar, i.variables.platformIn === "dxtrade" ? W.getTradingPlatformDxtradePasswordReset() : W.getTradingPlatformMt5PasswordReset(), i.variables.platformIn, e).then(function(u) {
                                s.value = u
                            }).then(function() {
                                s.value.responseOut.trading_platform_password_resetAttr.equals(Y.BuiltinFunctions.integerToLongInteger(1)) ? (i.variables.isUpdatedVar = !0, i.variables.isVisibleIn = !1) : (W.setTradingPlatformMt5PasswordReset(""), W.setTradingPlatformDxtradePasswordReset(""))
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__resetPasswordOnClick$Action
        }
        set _resetPasswordOnClick$Action(e) {
            this.__resetPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return Y.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        resetPasswordOnClick$Action(e) {
            var i = this.controller;
            return Y.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResetPasswordOnClick"), t.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._resetPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Sr = f
}
var Sr, Or = new Y.Controller.ControllerFactory(Sr, T);
var x = z(U());
var F = v,
    ct = class ct extends F.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, F.DataTypes.DataTypes.Record, function() {
                return F.DataTypes.ImmutableBase.getData(new F.SystemStructures.PasswordValidationResultRec)
            }, !1, F.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, F.DataTypes.DataTypes.Record, function() {
                return F.DataTypes.ImmutableBase.getData(new F.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, F.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, F.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, F.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, F.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(F.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ct, "VariablesRecord");
var Qe = ct;
Qe.init();
var dt = class dt extends F.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(dt, "WidgetsRecord");
var lt = dt,
    ut = class ut extends F.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Qe
        }
        static getWidgetsRecordConstructor() {
            return lt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Password" in r && (this.variables.passwordIn = r.Password, "_passwordInDataFetchStatus" in r && (this.variables._passwordInDataFetchStatus = r._passwordInDataFetchStatus)), "Length" in r && (this.variables.lengthIn = r.Length, "_lengthInDataFetchStatus" in r && (this.variables._lengthInDataFetchStatus = r._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in r && (this.variables.hasAtLeastUppercaseAndLowercaseIn = r.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in r && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = r._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in r && (this.variables.hasAtLeastOneNumberIn = r.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in r && (this.variables._hasAtLeastOneNumberInDataFetchStatus = r._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in r && (this.variables.hasAtLeastOneSpecialCharacterIn = r.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in r && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = r._hasAtLeastOneSpecialCharacterInDataFetchStatus))
        }
    };
a(ut, "Model");
var qe = ut;
qe._hasValidationWidgetsValue = void 0;
var Rr = new F.Model.ModelFactory(qe);

function ft(f, r, l, e) {
    function i(u) {
        return u.toUpperCase() != u
    }
    a(i, "hasLowerCase");

    function t(u) {
        return /[A-Z]/.test(u)
    }
    a(t, "containsUppercase");

    function o(u) {
        return /\d/.test(u)
    }
    a(o, "hasNumber");

    function n(u) {
        return u.length >= f.Length
    }
    a(n, "hasGoodLength");

    function s(u) {
        var m = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return m.test(u)
    }
    a(s, "hasSpecialChar"), f.HasLowerCase = f.RequiresLowerCaseAndUpperCase ? i(f.String) : !0, f.HasUpperCase = f.RequiresLowerCaseAndUpperCase ? t(f.String) : !0, f.HasNumber = f.RequiresNumber ? o(f.String) : !0, f.hasGoodLength = f.RequiresNumber ? n(f.String) : !0, f.hasSpecialChar = f.RequiresSpecialChar ? s(f.String) : !0
}
a(ft, "default");
var A = v; {
    let r = class r extends A.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), n.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), n.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), i.variables.passwordComplexityPolicyVar.minimumLengthAttr = i.variables.lengthIn, i.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = i.variables.hasAtLeastUppercaseAndLowercaseIn, i.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = i.variables.hasAtLeastUppercaseAndLowercaseIn, i.variables.passwordComplexityPolicyVar.numberRequiredAttr = i.variables.hasAtLeastOneNumberIn, i.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = i.variables.hasAtLeastOneSpecialCharacterIn
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
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), n.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), n.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var s = new A.DataTypes.VariableHolder;
                        return A.Flow.executeAsyncFlow(function() {
                            if (i.variables.isPasswordEmptyVar = A.BuiltinFunctions.length(i.variables.passwordIn) === 0, s.value = A.Logger.startActiveSpan("checkValid", function(u) {
                                    u && (u.setAttribute("code.function", "checkValid"), u.setAttribute("outsystems.function.key", "2db79931-6cd1-41a6-a1b1-6c0293e23188"), u.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), u.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(ft, "checkValid", "OnParametersChanged", {
                                            RequiresSpecialChar: A.DataConversion.JSNodeParamConverter.to(i.variables.hasAtLeastOneSpecialCharacterIn, A.DataTypes.DataTypes.Boolean),
                                            RequiresNumber: A.DataConversion.JSNodeParamConverter.to(i.variables.hasAtLeastOneNumberIn, A.DataTypes.DataTypes.Boolean),
                                            Length: A.DataConversion.JSNodeParamConverter.to(i.variables.lengthIn, A.DataTypes.DataTypes.Integer),
                                            RequiresLowerCaseAndUpperCase: A.DataConversion.JSNodeParamConverter.to(i.variables.hasAtLeastUppercaseAndLowercaseIn, A.DataTypes.DataTypes.Boolean),
                                            String: A.DataConversion.JSNodeParamConverter.to(i.variables.passwordIn, A.DataTypes.DataTypes.Text),
                                            HasLowerCase: A.DataConversion.JSNodeParamConverter.to(!1, A.DataTypes.DataTypes.Boolean),
                                            HasUpperCase: A.DataConversion.JSNodeParamConverter.to(!1, A.DataTypes.DataTypes.Boolean),
                                            HasNumber: A.DataConversion.JSNodeParamConverter.to(!1, A.DataTypes.DataTypes.Boolean),
                                            hasGoodLength: A.DataConversion.JSNodeParamConverter.to(!1, A.DataTypes.DataTypes.Boolean),
                                            hasSpecialChar: A.DataConversion.JSNodeParamConverter.to(!1, A.DataTypes.DataTypes.Boolean)
                                        }, function(m) {
                                            var b = new(t.constructor.getVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                            return b.hasLowerCaseOut = A.DataConversion.JSNodeParamConverter.from(m.HasLowerCase, A.DataTypes.DataTypes.Boolean), b.hasUpperCaseOut = A.DataConversion.JSNodeParamConverter.from(m.HasUpperCase, A.DataTypes.DataTypes.Boolean), b.hasNumberOut = A.DataConversion.JSNodeParamConverter.from(m.HasNumber, A.DataTypes.DataTypes.Boolean), b.hasGoodLengthOut = A.DataConversion.JSNodeParamConverter.from(m.hasGoodLength, A.DataTypes.DataTypes.Boolean), b.hasSpecialCharOut = A.DataConversion.JSNodeParamConverter.from(m.hasSpecialChar, A.DataTypes.DataTypes.Boolean), b
                                        }, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), i.variables.passwordValidationResultVar.isValidAttr = s.value.hasLowerCaseOut && s.value.hasUpperCaseOut && s.value.hasNumberOut && s.value.hasGoodLengthOut && s.value.hasSpecialCharOut, i.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !s.value.hasLowerCaseOut, i.variables.passwordValidationResultVar.missingMinimumLengthAttr = !s.value.hasGoodLengthOut, i.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !s.value.hasUpperCaseOut, i.variables.passwordValidationResultVar.missingNumberAttr = !s.value.hasNumberOut, i.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !s.value.hasSpecialCharOut, i.variables.passwordValidationResultVar.isValidAttr) {
                                if (i.variables.isValidPasswordVar) return A.Flow.returnAsync();
                                i.variables.isValidPasswordVar = !0
                            } else if (i.variables.isValidPasswordVar) i.variables.isValidPasswordVar = !1;
                            else return A.Flow.returnAsync();
                            return t.compliant$Action(i.variables.passwordValidationResultVar.isValidAttr, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return A.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), t.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), t.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return A.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), t.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), t.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(e) {
            this._compliant$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onParametersChanged$Action(e)
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
            return nr.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    mt = f, mt.registerVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var mt, xr = new A.Controller.ControllerFactory(mt, ir);
var Ma = y.PlaceholderContent,
    Ba = y.IteratorPlaceholderContent,
    pe = class pe extends R.BaseWebBlock {
        static get displayName() {
            return "PasswordPolicy.PasswordPolicy"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "ea1033a7-cc02-4c18-a11c-706fa5848aae",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Rr
        }
        get controllerFactory() {
            return xr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = pe.ifWidget,
                s = pe.textWidget,
                u = pe.asPrimitiveValue,
                m = pe.getTranslation,
                b = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(c, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, x.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 6px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, n(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [x.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, n(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [x.createElement(V, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [n(r.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: r.getCachedValue(e.getId("W2WQgo1KZ0W9aSiNkHstVg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least "],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), x.createElement(p, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: r.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), x.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["\xA0characters"],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), n(r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [x.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, n(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [x.createElement(V, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "13"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [n(r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("wS63C2AnqkiB2hn+etNgfQ.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one uppercase letter and one lowercase letter"],
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), n(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [x.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, n(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [x.createElement(V, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "20"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [n(r.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("AFlsfhJmA0CeXZDlx_IIzg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one number"],
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), n(r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [x.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "26"
                    },
                    _widgetRecordProvider: t
                }, n(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [x.createElement(V, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "27"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [n(r.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [x.createElement(V, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), x.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("cEfQZ9nEOkWYb+Y6Pe1s7w.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, x.createElement(w, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one special character"],
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }))))
        }
    };
a(pe, "View");
var vt = pe,
    ht = vt;
var oe = v,
    Za = y.PlaceholderContent,
    es = y.IteratorPlaceholderContent,
    be = class be extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ResetPasswordModal"
        }
        static getAttributes() {
            return {
                codeFunction: "ResetPasswordModal",
                functionKey: "41b7435a-29e5-4887-b49d-0c8e5812285f",
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
            return [ht, ce]
        }
        get modelFactory() {
            return Qt
        }
        get controllerFactory() {
            return Or
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = be.ifWidget,
                s = be.textWidget,
                u = be.asPrimitiveValue,
                m = be.getTranslation,
                b = this;
            return k.createElement("div", this.getRootNodeProperties(), k.createElement(G, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: r.variables.isVisibleIn && !r.variables.isUpdatedVar,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: oe.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, k.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetHeader"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("SetUpPassword2.Value"), function() {
                    return "Reset your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password"
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    name: "SetUpPassword2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }), k.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: oe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            })), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;"
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetContent"
                },
                _widgetRecordProvider: t
            }, k.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column display-flex gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CreatePasswordContent3"
                },
                _widgetRecordProvider: t
            }, k.createElement(c, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer4"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                value: r.getCachedValue(e.getId("MBFxetrkcUK1tR8I_WsVbw.Value"), function() {
                    return "You can use this password for all your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts."
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), k.createElement(We, {
                _validationProps: {
                    validationService: i
                },
                enabled: !r.variables.isLoadingVar,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 1,
                mandatory: !1,
                maxLength: 16,
                prompt: oe.Injector.resolve(oe.ServiceNames.TranslationsService).getMessage("TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1", "Enter your password"),
                style: "form-control",
                variable: r.createVariable(oe.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(d) {
                    r.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "PasswordInput7"
                },
                _widgetRecordProvider: t
            }), k.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LiveCheckboxContainer5"
                },
                _widgetRecordProvider: t
            }, k.createElement(ht, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    Password: r.variables.passwordInputValueVar
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-weight: bold; height: auto; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between full-width gap-s cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetFooter"
                },
                _widgetRecordProvider: t
            }, k.createElement(ce, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "12",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), k.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.resetPasswordOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "Reset password",
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            })), k.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #FFF; border-color: #ff4450; border-radius: 100px; border-width: 1px; color: #ff4450; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.closeOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CancelButton"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                extendedProperties: {
                    style: "color: #ff4450; font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "Cancel",
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            })))), k.createElement(G, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;"
                },
                showPopup: r.variables.isUpdatedVar,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper2"
                },
                _widgetRecordProvider: t
            }, k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessHeader"
                },
                _widgetRecordProvider: t
            }, k.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("7lHQes3WJUmcTHuOiLZbxQ#Value", "Password updated"))],
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), k.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: oe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: calc(100vh - 160px); margin-top: 0px; padding: 16px;"
                },
                style: "display-flex flex-direction-column display-flex gap-m justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessContent"
                },
                _widgetRecordProvider: t
            }, k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, k.createElement(C, {
                image: oe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.PasswordSaved.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            })), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("YNRVaDWGYUqvNeR3YU+nzA.Value"), function() {
                    return "Your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password has \u2028been reset"
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                value: r.getCachedValue(e.getId("EHLMqwEON0Sqt0sA5zPRJA.Value"), function() {
                    return "You can now log in to your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts with your new password on web and mobile."
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }))), k.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessFooter"
                },
                _widgetRecordProvider: t
            }, k.createElement(ce, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "29",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), k.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.closeOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "OK"
                },
                _widgetRecordProvider: t
            }, k.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "OK",
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(be, "View");
var gt = be,
    ts = gt;
var q = z(U());
var An = {
        "JOpCme7W6EenufmYu25eRw#Value": "\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0648\u0645 \u0628\u0641\u0639\u0627\u0644\u064A\u0629.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "\u0627\u062D\u062A\u0641\u0638 \u0628\u062D\u0633\u0627\u0628 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062E\u0627\u0644\u064D \u0645\u0646 \u0643\u0648\u0646\u0647 \u0645\u0632\u0648\u062F \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\u0645\u0632\u0648\u062F \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u062D\u0633\u0627\u0628 \u062C\u0645\u0639 \u0627\u0644\u0631\u0633\u0648\u0645.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "\u0644\u0627 \u064A\u0645\u0643\u0646",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 cTrader \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u062D\u0633\u0627\u0628 Deriv \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.
2. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 5 \u062D\u0633\u0627\u0628\u0627\u062A Deriv cTrader.
3. \u064A\u0645\u0643\u0646\u0643 \u062C\u0639\u0644 \u0623\u064A \u062D\u0633\u0627\u0628 cTrader \u062D\u0633\u0627\u0628\u064B\u0627 \u0644\u0645\u0632\u0648\u062F \u0627\u0644\u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629. \u0647\u0630\u0627 \u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u062F\u0627\u0626\u0645.
4. \u0625\u0630\u0627 \u0638\u0644\u062A \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u062A\u0643 \u063A\u064A\u0631 \u0646\u0634\u0637\u0629 \u0644\u0645\u062F\u0629 30 \u064A\u0648\u0645\u064B\u0627\u060C \u0641\u0633\u064A\u062A\u0645 \u062D\u0630\u0641\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627. \u064A\u0645\u0643\u0646\u0643 \u0625\u0646\u0634\u0627\u0621 \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u062D\u0633\u0627\u0628 \u0628\u0639\u062F \u0630\u0644\u0643.
5. \u064A\u0645\u0643\u0646\u0643 \u0641\u0631\u0636 \u0631\u0633\u0648\u0645 \u0639\u0646\u062F \u0625\u0639\u062F\u0627\u062F \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629.
6. \u0642\u0645 \u0628\u062A\u0639\u064A\u064A\u0646 \u0623\u062D\u062F \u062D\u0633\u0627\u0628\u0627\u062A\u0643 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0631\u0633\u0648\u0645. \u064A\u0645\u0643\u0646 \u0644\u0646\u0641\u0633 "\u062D\u0633\u0627\u0628 \u0627\u0644\u0631\u0633\u0648\u0645" \u062F\u0639\u0645 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0648\u0645.
7. \u0644\u0627 \u062A\u062A\u0637\u0644\u0628 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629 "\u062D\u0633\u0627\u0628 \u0631\u0633\u0648\u0645".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629"
    },
    Pn = {
        "JOpCme7W6EenufmYu25eRw#Value": "Geb\xFChrenbasierte Strategien effektiv verwalten.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Halten Sie mindestens ein Konto frei von der Rolle eines Strategielieferanten",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "sowohl ein Strategieanbieter als auch ein Geb\xFChrenkonto.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "kann nicht sein",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Hinweis: Ein Konto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Melden Sie sich bei cTrader mit Ihrer Deriv-Konto-E-Mail-Adresse und Ihrem Passwort an.
2. Sie k\xF6nnen bis zu 5 Deriv cTrader-Konten besitzen.
3. Jedes cTrader-Konto kann in ein Strategiekonto umgewandelt werden. Diese \xC4nderung ist dauerhaft.
4. Wenn Ihre Strategie 30 Tage lang inaktiv bleibt, wird sie automatisch gel\xF6scht. Sie k\xF6nnen anschlie\xDFend eine neue Strategie mit demselben Konto erstellen.
5. Sie k\xF6nnen Geb\xFChren festlegen, wenn Sie eine Strategie einrichten.
6. Weisen Sie eines Ihrer bestehenden Konten zur Abwicklung der Geb\xFChren zu. Dasselbe \u201EGeb\xFChrenkonto\u201C kann mehrere geb\xFChrenbasierte Strategien unterst\xFCtzen.
7. Kostenlose Strategien erfordern kein \u201EGeb\xFChrenkonto\u201C.`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Wichtige Hinweise"
    },
    wn = {
        "JOpCme7W6EenufmYu25eRw#Value": "gestionar estrategias basadas en comisiones de manera efectiva.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantenga al menos una cuenta libre de ser un proveedor de estrategias",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "tanto un proveedor de estrategias como una cuenta de cobro de tarifas.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "no puede ser",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: Una cuenta ",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Inicie sesi\xF3n en cTrader con el correo electr\xF3nico y la contrase\xF1a de su cuenta Deriv.
2. Puede tener hasta 5 cuentas de Deriv cTrader.
3. Usted puede convertir cualquier cuenta de cTrader en una cuenta de proveedor de estrategia. Este cambio es permanente.
4. Si su estrategia permanece inactiva durante 30 d\xEDas, se eliminar\xE1 autom\xE1ticamente. Posteriormente podr\xE1 crear una nueva estrategia en la misma cuenta.
5. Puede imponer comisiones al crear una estrategia.
6. Asigne una de sus cuentas existentes para procesar las comisiones. La misma "Cuenta para comisiones" puede soportar m\xFAltiples estrategias basadas en comisiones.
7. Las estrategias gratuitas no requieren una "Cuenta para Comisiones".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Notas importantes"
    },
    En = {
        "JOpCme7W6EenufmYu25eRw#Value": "g\xE9rer efficacement des strat\xE9gies bas\xE9es sur des frais.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Gardez au moins un compte exempt d'\xEAtre un fournisseur de strat\xE9gie",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\xE0 la fois un fournisseur de strat\xE9gies et un compte de collecte de frais.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "ne peut pas \xEAtre"
    },
    Sn = {
        "JOpCme7W6EenufmYu25eRw#Value": "gestire efficacemente strategie basate su commissioni.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantieni almeno un conto libero dall'essere un fornitore di strategie",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "sia un fornitore di strategie che un conto di raccolta delle commissioni.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "non pu\xF2 essere",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: un conto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Accedi a cTrader con l'email e la password del tuo conto Deriv.
2. Puoi avere fino a 5 conti Deriv cTrader.
3. Puoi rendere qualsiasi conto cTrader un conto fornitore di strategie. Questo cambiamento \xE8 permanente.
4. Se la tua strategia rimane inattiva per 30 giorni, verr\xE0 eliminata automaticamente. Successivamente potrai creare una nuova strategia sullo stesso conto.
5. Puoi imporre commissioni quando imposti una strategia.
6. Assegna uno dei tuoi conti esistenti all'elaborazione delle commissioni. Lo stesso "Conto per commissioni" pu\xF2 supportare pi\xF9 strategie basate su commissioni.
7. Le strategie gratuite non richiedono un "Conto per commissioni".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Note importanti"
    },
    On = {
        "JOpCme7W6EenufmYu25eRw#Value": "skutecznie zarz\u0105dza\u0107 strategiami opartymi na op\u0142atach.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Zachowaj przynajmniej jedno konto, gdzie nie jeste\u015B dostawc\u0105 strategii",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "zar\xF3wno dostawca strategii, jak i konto do pobierania op\u0142at.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "nie mo\u017Ce by\u0107",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Uwaga: Konto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Zaloguj si\u0119 do cTrader przy u\u017Cyciu adresu e-mail i has\u0142a do konta Deriv.
2. Mo\u017Cesz mie\u0107 do 5 kont Deriv cTrader.
3. Twoje dowolne konto cTrader mo\u017Ce by\u0107 kontem dostarczaj\u0105cym strategie. Ta zmiana jest na sta\u0142e.
4. Je\u015Bli Twoja strategia jest nieaktywna przez 30 dni, zostanie automatycznie usuni\u0119ta. Mo\u017Cesz p\xF3\u017Aniej utworzy\u0107 now\u0105 strategi\u0119 na tym samym koncie.
5. Podczas ustanawiania strategii mo\u017Cesz na\u0142o\u017Cy\u0107 op\u0142aty.
6. Wybierz jedno ze swoich istniej\u0105cych kont do przetwarzania tych op\u0142at. Jedno \u201EKonto do op\u0142at\u201D mo\u017Ce s\u0142u\u017Cy\u0107 do obs\u0142ugi kilku strategiii opartych na op\u0142atach.
7. Strategie darmowe nie wymagaj\u0105 \u201EKonta do op\u0142at\u201D.`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Wa\u017Cne uwagi"
    },
    Rn = {
        "JOpCme7W6EenufmYu25eRw#Value": "gerir estrat\xE9gias baseadas em taxas de forma eficaz.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantenha pelo menos uma conta livre de ser um fornecedor de estrat\xE9gias",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "tanto como fornecedor de estrat\xE9gias quanto conta de cobran\xE7a de taxas.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "n\xE3o \xE9 poss\xEDvel",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: Uma conta",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Inicie sess\xE3o na cTrader com o e-mail e a palavra-passe da sua conta Deriv.
2. Pode ter at\xE9 cinco contas Deriv cTrader.
3. \xC9 poss\xEDvel transformar qualquer conta cTrader numa conta de fornecedor de estrat\xE9gias, mas esta altera\xE7\xE3o \xE9 permanente.
4. Se a sua estrat\xE9gia estiver inativa durante 30 dias, ser\xE1 eliminada automaticamente. Posteriormente, poder\xE1 criar uma nova estrat\xE9gia na mesma conta.
5. Ao configurar uma estrat\xE9gia, pode definir taxas.
6. Atribua uma das suas contas existentes para processar as taxas. A mesma "Conta para Taxas" pode suportar v\xE1rias estrat\xE9gias baseadas em taxas.
7. Estrat\xE9gias gratuitas n\xE3o necessitam de uma "Conta para Taxas".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Notas importantes"
    },
    xn = {
        "JOpCme7W6EenufmYu25eRw#Value": "\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F\u043C\u0438, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0431\u043E\u0440\u0430\u0445.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u043E\u0442 \u0440\u043E\u043B\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\u043A\u0430\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439, \u0442\u0430\u043A \u0438 \u0441\u0447\u0435\u0442 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0431\u043E\u0440\u043E\u0432.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "\u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C"
    },
    kr = {
        "ar-001": {
            translations: An,
            isRTL: !0
        },
        "de-DE": {
            translations: Pn,
            isRTL: !1
        },
        "es-ES": {
            translations: wn,
            isRTL: !1
        },
        "fr-FR": {
            translations: En,
            isRTL: !1
        },
        "it-IT": {
            translations: Sn,
            isRTL: !1
        },
        "pl-PL": {
            translations: On,
            isRTL: !1
        },
        "pt-PT": {
            translations: Rn,
            isRTL: !1
        },
        "ru-RU": {
            translations: xn,
            isRTL: !1
        }
    };
var Je = v; {
    let r = class r extends Je.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, kr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _headerOnClick$Action() {
            return this.hasOwnProperty("__headerOnClick$Action") || (this.__headerOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return Je.Logger.startActiveSpan("HeaderOnClick", function(n) {
                    n && (n.setAttribute("code.function", "HeaderOnClick"), n.setAttribute("outsystems.function.key", "5aca1bf8-c17c-402d-924b-12f8bc6ca9ad"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("HeaderOnClick"), e = t.callContext(e), i.variables.showInfoVar = !i.variables.showInfoVar
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(e) {
            this.__headerOnClick$Action = e
        }
        headerOnClick$Action(e) {
            var i = this.controller;
            return Je.Logger.startActiveSpan("HeaderOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "HeaderOnClick"), t.setAttribute("outsystems.function.key", "5aca1bf8-c17c-402d-924b-12f8bc6ca9ad"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._headerOnClick$Action, e)
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    Ir = f
}
var Ir, Tr = new Je.Controller.ControllerFactory(Ir, T);
var Dr = v,
    bs = y.PlaceholderContent,
    _s = y.IteratorPlaceholderContent,
    _e = class _e extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ImportantNotes"
        }
        static getAttributes() {
            return {
                codeFunction: "ImportantNotes",
                functionKey: "47857bc1-8a4d-496c-8092-a1b421db2bee",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.ImportantNotes.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return qt
        }
        get controllerFactory() {
            return Tr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = _e.ifWidget,
                s = _e.textWidget,
                u = _e.asPrimitiveValue,
                m = _e.getTranslation,
                b = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(c, {
                align: 0,
                animate: !1,
                style: "important-notes",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, q.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.headerOnClick$Action(l.callContext(d))
                    }, "onClick")
                },
                style: "display-flex align-items-center justify-content-space-between cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, q.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [s(m("bKbhwz3WMEaN6X8SBwDEkA#Value", "Important notes"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, n(r.variables.showInfoVar, !0, this, function() {
                return [q.createElement(C, {
                    image: Dr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ChevronUpSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [q.createElement(C, {
                    image: Dr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })]
            }))), n(r.variables.showInfoVar, !0, this, function() {
                return [q.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("Wu8gdu2m7E2ZQWvJ76W7yA#Value", `1. Log in to cTrader with your Deriv account email and password.
2. You can have up to 5 Deriv cTrader accounts.
3. You can make any cTrader account a strategy provider account. This change is permanent.
4. If your strategy remains inactive for 30 days, it will be deleted automatically. You can create a new strategy on the same account afterwards.
5. You can impose fees when setting up a strategy.
6. Assign one of your existing accounts to process fees. The same "Account for Fees" can support multiple fee-based strategies.
7. Free strategies do not require an "Account for Fees".`))],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "font-size: 12px; margin-top: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("6LoFciGR9E2OxvDLEWWOBw#Value", "Note: An account "))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [s(m("KvKTHZR9Lk+MElbGTt7Vvg#Value", "can't be "))],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("j4NW6o0pbEaOYM4yykmC3g#Value", "both a strategy provider and a fee collection account. "))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [s(m("q02llmFnP0ykcjtPnVCfJw#Value", "Keep at least one account free from being a strategy provider "))],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(w, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("JOpCme7W6EenufmYu25eRw#Value", "to manage fee-based strategies effectively."))],
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            })))
        }
    };
a(_e, "View");
var pt = _e,
    ys = pt;
var He = z(U());
var Fr = {};
var Vr = v; {
    let r = class r extends Vr.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Fr);
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    Hr = f
}
var Hr, Lr = new Vr.Controller.ControllerFactory(Hr, T);
var bt = v,
    Ls = y.PlaceholderContent,
    Ns = y.IteratorPlaceholderContent,
    ye = class ye extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MaintenanceMessage"
        }
        static getAttributes() {
            return {
                codeFunction: "MaintenanceMessage",
                functionKey: "89e2f438-16ae-4d8c-8de5-f4afdba8d1ef",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.MaintenanceMessage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Jt
        }
        get controllerFactory() {
            return Lr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = ye.ifWidget,
                s = ye.textWidget,
                u = ye.asPrimitiveValue,
                m = ye.getTranslation,
                b = this;
            return He.createElement("div", this.getRootNodeProperties(), He.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "maintenance-message",
                visible: r.variables.isDowntimeIn,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: bt.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
            }, He.createElement(C, {
                image: bt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InfoBlue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), He.createElement(p, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.variables.infoMessageIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: bt.Model.calculateDataFetchStatus(r.variables._infoMessageInDataFetchStatus)
            })))
        }
    };
a(ye, "View");
var _t = ye,
    Ie = _t;
var h = z(U());
var kn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0648",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "\u0645\u062A\u0627\u062D \u0644\u0640",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629: \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u062D\u062F \u0627\u0644\u0633\u0627\u0639\u0629 01:00 \u0628\u062A\u0648\u0642\u064A\u062A \u062C\u0631\u064A\u0646\u062A\u0634 \u0644\u0645\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 \u0633\u0627\u0639\u062A\u064A\u0646. \u0642\u062F \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0629.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u062A\u062D\u0648\u064A\u0644",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    In = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannen, um die mobile App herunterzuladen.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "und",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Verf\xFCgbar f\xFCr",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "W\xF6chentliche Wartung: Sonntags um 01:00 GMT f\xFCr bis zu 2 Stunden. Der Service kann beeintr\xE4chtigt sein.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Passwort vergessen?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\xDCberweisung",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Kontodaten",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Kopiert!"
    },
    Tn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Escanee para descargar la aplicaci\xF3n m\xF3vil.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "y",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Mantenimiento semanal: Domingos a la 01:00 GMT durante un m\xE1ximo de 2 horas. El servicio puede verse afectado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\xBFOlvid\xF3 la contrase\xF1a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transferencia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Detalles de la cuenta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\xA1Copiado!"
    },
    Dn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "et",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible pour",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Mot de passe oubli\xE9 ?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfert",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "D\xE9tails du compte",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copi\xE9 !"
    },
    Fn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scansiona per scaricare l'app mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponibile per",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manutenzione settimanale: domenica alle 01:00 GMT per un massimo di 2 ore. Il servizio potrebbe subire interruzioni.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Hai dimenticato la password?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Trasferimento",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Dettagli del conto",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiato!"
    },
    Vn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Zeskanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " i",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dost\u0119pne na",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Cotygodniona konserwacja: Niedziele o 01:00 GMT do 2 godz. Mo\u017Ce mie\u0107 wp\u0142yw na dost\u0119pno\u015B\u0107 us\u0142ug.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Nie pami\u0119tasz has\u0142a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Przelew",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Szczeg\xF3\u0142y konta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Skopiowane!"
    },
    Hn = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Digitalize para transferir a aplica\xE7\xE3o m\xF3vel.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dispon\xEDvel para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manuten\xE7\xE3o semanal: Domingos \xE0s 01:00 GMT, com uma dura\xE7\xE3o de at\xE9 2 horas. O servi\xE7o poder\xE1 ser afetado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Esqueceu a palavra-passe?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfer\xEAncia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Informa\xE7\xE3o da conta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiado!"
    },
    Ln = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0438",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    Nr = {
        "ar-001": {
            translations: kn,
            isRTL: !0
        },
        "de-DE": {
            translations: In,
            isRTL: !1
        },
        "es-ES": {
            translations: Tn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Dn,
            isRTL: !1
        },
        "it-IT": {
            translations: Fn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Vn,
            isRTL: !1
        },
        "pt-PT": {
            translations: Hn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ln,
            isRTL: !1
        }
    };

function yt(f, r, l) {
    window.open("https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux", "_blank")
}
a(yt, "default");

function Ct(f, r, l, e) {
    f.FormattedLogin = f.SelectedAccountLogin.slice(3)
}
a(Ct, "default");

function At(f, r, l, e) {
    window.open(f.WebtraderUrl + "?login=" + f.Login + "&server=" + f.Server, "_blank")
}
a(At, "default");

function Pt(f, r, l, e) {
    navigator.clipboard.writeText(f.TextToCopy)
}
a(Pt, "default");
var g = v; {
    let r = class r extends g.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Nr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _linux_OnClick$Action() {
            return this.hasOwnProperty("__linux_OnClick$Action") || (this.__linux_OnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("Linux_OnClick", function(n) {
                    n && (n.setAttribute("code.function", "Linux_OnClick"), n.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Linux_OnClick"), e = t.callContext(e), g.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "657bc2ad-bd0a-4fb2-b9e2-73831402464a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(yt, "JavaScript1", "Linux_OnClick", null, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__linux_OnClick$Action
        }
        set _linux_OnClick$Action(e) {
            this.__linux_OnClick$Action = e
        }
        get _transferOnClick$Action() {
            return this.hasOwnProperty("__transferOnClick$Action") || (this.__transferOnClick$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return g.Logger.startActiveSpan("TransferOnClick", function(s) {
                    return s && (s.setAttribute("code.function", "TransferOnClick"), s.setAttribute("outsystems.function.key", "27d63ab6-b395-4d65-8efa-4101aaec4087"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        o.ensureControllerAlive("TransferOnClick"), i = o.callContext(i);
                        var u = new g.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.TransferOnClick$vars")));
                        return u.value.toInLocal = e, g.Flow.executeAsyncFlow(function() {
                            return t.flush(), O.getWalletsList$Action(i).then(function() {
                                return g.Flow.returnAsync(g.Navigation.navigateTo(g.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {
                                    to: g.DataConversion.ServerDataConverter.to(u.value.toInLocal, g.DataTypes.DataTypes.Text)
                                }), g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default), i, !0))
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__transferOnClick$Action
        }
        set _transferOnClick$Action(e) {
            this.__transferOnClick$Action = e
        }
        get _formatLogin$Action() {
            return this.hasOwnProperty("__formatLogin$Action") || (this.__formatLogin$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("FormatLogin", function(n) {
                    n && (n.setAttribute("code.function", "FormatLogin"), n.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FormatLogin"), e = t.callContext(e);
                        var s = new g.DataTypes.VariableHolder;
                        s.value = g.Logger.startActiveSpan("FormatDynamicLogin", function(u) {
                            u && (u.setAttribute("code.function", "FormatDynamicLogin"), u.setAttribute("outsystems.function.key", "9cff8aa6-5c38-466f-9b25-9407fcd47bf5"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ct, "FormatDynamicLogin", "FormatLogin", {
                                    SelectedAccountLogin: g.DataConversion.JSNodeParamConverter.to(i.variables.selectedAccountIn.loginAttr, g.DataTypes.DataTypes.Text),
                                    FormattedLogin: g.DataConversion.JSNodeParamConverter.to("", g.DataTypes.DataTypes.Text)
                                }, function(m) {
                                    var b = new(t.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult"));
                                    return b.formattedLoginOut = g.DataConversion.JSNodeParamConverter.from(m.FormattedLogin, g.DataTypes.DataTypes.Text), b
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), i.variables.displayLoginVar = s.value.formattedLoginOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__formatLogin$Action
        }
        set _formatLogin$Action(e) {
            this.__formatLogin$Action = e
        }
        get _webterminalOnClick$Action() {
            return this.hasOwnProperty("__webterminalOnClick$Action") || (this.__webterminalOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("WebterminalOnClick", function(n) {
                    n && (n.setAttribute("code.function", "WebterminalOnClick"), n.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), g.Logger.startActiveSpan("windowOpen", function(s) {
                            s && (s.setAttribute("code.function", "windowOpen"), s.setAttribute("outsystems.function.key", "57324806-8c70-436a-8a40-9a348d4f656a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(At, "windowOpen", "WebterminalOnClick", {
                                    Login: g.DataConversion.JSNodeParamConverter.to(i.variables.displayLoginVar, g.DataTypes.DataTypes.Text),
                                    Server: g.DataConversion.JSNodeParamConverter.to(i.variables.selectedAccountIn.server_infoAttr.environmentAttr, g.DataTypes.DataTypes.Text),
                                    WebtraderUrl: g.DataConversion.JSNodeParamConverter.to(i.variables.selectedAccountIn.white_label_linksAttr.webtrader_urlAttr, g.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__webterminalOnClick$Action
        }
        set _webterminalOnClick$Action(e) {
            this.__webterminalOnClick$Action = e
        }
        get _downloadAppOnClick$Action() {
            return this.hasOwnProperty("__downloadAppOnClick$Action") || (this.__downloadAppOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("DownloadAppOnClick", function(n) {
                    n && (n.setAttribute("code.function", "DownloadAppOnClick"), n.setAttribute("outsystems.function.key", "8843b791-01bf-4ecf-8072-faa9886c35a9"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), O.openDeepLink$Action("mt5", i.variables.displayLoginVar, i.variables.selectedAccountIn.server_infoAttr.environmentAttr, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__downloadAppOnClick$Action
        }
        set _downloadAppOnClick$Action(e) {
            this.__downloadAppOnClick$Action = e
        }
        get _copyToClipboard$Action() {
            return this.hasOwnProperty("__copyToClipboard$Action") || (this.__copyToClipboard$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return g.Logger.startActiveSpan("CopyToClipboard", function(s) {
                    s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), i = o.callContext(i);
                        var u = new g.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars")));
                        u.value.textToCopyInLocal = e, g.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "f3bd06ff-fdb9-4475-aac5-755e9d375a61"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(Pt, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: g.DataConversion.JSNodeParamConverter.to(u.value.textToCopyInLocal, g.DataTypes.DataTypes.Text)
                                }, function(b) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), g.FeedbackMessageService.showFeedbackMessage(g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(e) {
            this.__copyToClipboard$Action = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return g.Logger.startActiveSpan("ForgotPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ForgotPasswordOnClick"), n.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return Gt.consoleLog$Action("ForgotPasswordOnClick Platform " + i.variables.selectedAccountIn.platformAttr, 0, e), t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linux_OnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("Linux_OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "Linux_OnClick"), t.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._linux_OnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        transferOnClick$Action(e, i) {
            var t = this.controller;
            return g.Logger.startActiveSpan("TransferOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "TransferOnClick"), o.setAttribute("outsystems.function.key", "27d63ab6-b395-4d65-8efa-4101aaec4087"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._transferOnClick$Action, i, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        formatLogin$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("FormatLogin__proxy", function(t) {
                t && (t.setAttribute("code.function", "FormatLogin"), t.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._formatLogin$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        webterminalOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WebterminalOnClick"), t.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._webterminalOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        downloadAppOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "DownloadAppOnClick"), t.setAttribute("outsystems.function.key", "8843b791-01bf-4ecf-8072-faa9886c35a9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._downloadAppOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        copyToClipboard$Action(e, i) {
            var t = this.controller;
            return g.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
                o && (o.setAttribute("code.function", "CopyToClipboard"), o.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, i, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        forgotPasswordOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.formatLogin$Action(e)
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    Le = f, Le.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.TransferOnClick$vars", [{
        name: "to",
        attrName: "toInLocal",
        mandatory: !1,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Le.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult", [{
        name: "FormattedLogin",
        attrName: "formattedLoginOut",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Le.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: g.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Le, $r = new g.Controller.ControllerFactory(Le, T);
var Ne = z(U());
var Wr = {};

function wt(f, r, l, e) {
    f.RedirectionLink && window.open(f.RedirectionLink, "_blank", "noopener,noreferrer")
}
a(wt, "default");
var ae = v; {
    let r = class r extends ae.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Wr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _openExternalLink$Action() {
            return this.hasOwnProperty("__openExternalLink$Action") || (this.__openExternalLink$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return ae.Logger.startActiveSpan("OpenExternalLink", function(s) {
                    s && (s.setAttribute("code.function", "OpenExternalLink"), s.setAttribute("outsystems.function.key", "93b94969-a7a1-448d-a5de-2911b6ffe044"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OpenExternalLink"), i = o.callContext(i);
                        var u = new ae.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.InformationBanner.OpenExternalLink$vars")));
                        u.value.redirectionLinkInLocal = e, ae.Logger.startActiveSpan("OpenLinkInNewTab", function(m) {
                            m && (m.setAttribute("code.function", "OpenLinkInNewTab"), m.setAttribute("outsystems.function.key", "43823744-7079-477a-b687-d92044935baa"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(wt, "OpenLinkInNewTab", "OpenExternalLink", {
                                    RedirectionLink: ae.DataConversion.JSNodeParamConverter.to(u.value.redirectionLinkInLocal, ae.DataTypes.DataTypes.Text)
                                }, function(b) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__openExternalLink$Action
        }
        set _openExternalLink$Action(e) {
            this.__openExternalLink$Action = e
        }
        openExternalLink$Action(e, i) {
            var t = this.controller;
            return ae.Logger.startActiveSpan("OpenExternalLink__proxy", function(o) {
                o && (o.setAttribute("code.function", "OpenExternalLink"), o.setAttribute("outsystems.function.key", "93b94969-a7a1-448d-a5de-2911b6ffe044"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._openExternalLink$Action, i, e)
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    Et = f, Et.registerVariableGroupType("tradershub.CFDBlocks.InformationBanner.OpenExternalLink$vars", [{
        name: "RedirectionLink",
        attrName: "redirectionLinkInLocal",
        mandatory: !0,
        dataType: ae.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Et, Mr = new ae.Controller.ControllerFactory(Et, T);
var Br = v,
    Ol = y.PlaceholderContent,
    Rl = y.IteratorPlaceholderContent,
    Ce = class Ce extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.InformationBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "InformationBanner",
                functionKey: "d8cd7d06-45e3-456b-be70-95c765d116ae",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.InformationBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Kt
        }
        get controllerFactory() {
            return Mr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = Ce.ifWidget,
                s = Ce.textWidget,
                u = Ce.asPrimitiveValue,
                m = Ce.getTranslation,
                b = this;
            return Ne.createElement("div", this.getRootNodeProperties(), Ne.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.openExternalLink$Action(r.variables.linkIn, l.callContext(d))
                    }, "onClick")
                },
                extendedProperties: {
                    className: r.getCachedValue(e.getId("XxkJnw4vkUS6AKuhAd8n+A.class"), function() {
                        return r.variables.showBannerIn ? "information-banner" : "hide-banner information-banner"
                    }, function() {
                        return r.variables.showBannerIn
                    })
                },
                style: "information-banner",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, Ne.createElement(p, {
                value: r.variables.informationMessageIn,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Br.Model.calculateDataFetchStatus(r.variables._informationMessageInDataFetchStatus)
            }), Ne.createElement(C, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Br.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowuprightsm.svg"),
                style: "information-banner-image",
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })))
        }
    };
a(Ce, "View");
var St = Ce,
    Ot = St;
var Z = v,
    Wl = y.PlaceholderContent,
    Ml = y.IteratorPlaceholderContent,
    Ae = class Ae extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MT5TradeModal"
        }
        static getAttributes() {
            return {
                codeFunction: "MT5TradeModal",
                functionKey: "83dddc5f-f2ca-4f25-9c74-643d50dd600a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.QRCodeJS.js"]
        }
        static getBlocks() {
            return [Ie, Ot]
        }
        get modelFactory() {
            return Xt
        }
        get controllerFactory() {
            return $r
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = Ae.ifWidget,
                s = Ae.textWidget,
                u = Ae.asPrimitiveValue,
                m = Ae.getTranslation,
                b = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(G, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalHeader"
                },
                _widgetRecordProvider: t
            }, h.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("_5rlJUomd0WgdtC4GTMIrg#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "height: 30px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100px"
                },
                style: "display-flex align-items-center justify-content-flex-end cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, h.createElement(C, {
                image: Z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalContent"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, h.createElement(C, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), h.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductNameBalanceContainer2"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), h.createElement(Me, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), h.createElement(p, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), h.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.transferOnClick$Action(r.variables.selectedAccountIn.loginAttr, l.callContext(d))
                    })
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, h.createElement(C, {
                image: Z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), h.createElement(w, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [s(m("stfUk9qHTUuvEO+Qfaqcig#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AccountInfoRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtBrokerRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Broker",
                _idProps: {
                    service: e,
                    name: "BrokerLabel2"
                },
                _widgetRecordProvider: t
            })), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.landing_companyAttr,
                _idProps: {
                    service: e,
                    name: "DynamicBrokerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), h.createElement(V, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(r.variables.selectedAccountIn.landing_companyAttr, l.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtServerRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Server",
                _idProps: {
                    service: e,
                    name: "ServerLabel2"
                },
                _widgetRecordProvider: t
            })), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.server_infoAttr.environmentAttr,
                _idProps: {
                    service: e,
                    name: "DynamicServerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), h.createElement(V, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(r.variables.selectedAccountIn.server_infoAttr.environmentAttr, l.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtLoginIdRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Login ID",
                _idProps: {
                    service: e,
                    name: "LoginIdLabel2"
                },
                _widgetRecordProvider: t
            })), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }, h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.displayLoginVar,
                _idProps: {
                    service: e,
                    name: "DynamicLoginIdLabel2"
                },
                _widgetRecordProvider: t
            }), h.createElement(V, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, l.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            })))), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordRow2"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "auto"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t
            }, h.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("kbdHtooVbUi8Rr8jct4z_A#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }))), h.createElement(Ie, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: Z.Injector.resolve(Z.ServiceNames.TranslationsService).getMessage("Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1", "Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "39",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), h.createElement(Ot, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Link: "https://docs.deriv.com/misc/alpha_generation_guide.pdf",
                    InformationMessage: "Learn to set up expert driven trading indicators.",
                    ShowBanner: r.variables.selectedAccountIn.labelAttr !== "Gold",
                    _showBannerInDataFetchStatus: Z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "40",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), h.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("Mt5TradeModalFooter.class"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
                    }),
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalFooter"
                },
                _widgetRecordProvider: t
            }, h.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, h.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #1a78cb; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return S.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, h.createElement(V, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "44"
                },
                _widgetRecordProvider: t
            }), h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: e,
                    uuid: "45"
                },
                _widgetRecordProvider: t
            })), h.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#1a78cb")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.webterminalOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, h.createElement(V, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("ruZVukZi8Ee4oehk0bQhGA.style"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
                    })
                },
                icon: "globe",
                iconSize: 0,
                style: '"icon"',
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "47"
                },
                _widgetRecordProvider: t
            }), h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 web terminal",
                _idProps: {
                    service: e,
                    uuid: "48"
                },
                _widgetRecordProvider: t
            })), h.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #f3f6f8; color: #222; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("DesktopDownloadAppLink2.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "DesktopDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, h.createElement(V, {
                icon: "desktop",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "50"
                },
                _widgetRecordProvider: t
            }), h.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: e,
                    uuid: "51"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
                },
                style: "display-flex justify-content-center column-gap-xs align-items-baseline",
                visible: r.getCachedValue(e.getId("AvailableForMacOSAndLinuxText2.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "AvailableForMacOSAndLinuxText2"
                },
                _widgetRecordProvider: t
            }, h.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("bnNmCWFI7kujP2WEB9S+gg#Value", "Available for"))],
                _idProps: {
                    service: e,
                    uuid: "53"
                },
                _widgetRecordProvider: t
            }), h.createElement(Te, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Macos"
                },
                _widgetRecordProvider: t
            }, h.createElement(w, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: ["macOS"],
                _idProps: {
                    service: e,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            })), h.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("S3d3t1eSmUm5WVx_6xyWnw#Value", " and "))],
                _idProps: {
                    service: e,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }), h.createElement(Te, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var d = o.clone();
                    l.linux_OnClick$Action(l.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "57"
                },
                _widgetRecordProvider: t
            }, h.createElement(w, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: " cursor-pointer",
                text: ["Linux."],
                _idProps: {
                    service: e,
                    uuid: "58"
                },
                _widgetRecordProvider: t
            }))), h.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8",
                    marginLeft: "auto"
                },
                style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
                visible: r.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, h.createElement(C, {
                gridProperties: {
                    width: "80px"
                },
                image: Z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mt5Onelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "60"
                },
                _widgetRecordProvider: t
            }), h.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("jaHw+m0lXEyM3mg6fxY1lw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText2"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(Ae, "View");
var Rt = Ae,
    Bl = Rt;
var E = z(U());
var Nn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X \u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u064A\u0628",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X \u062A\u0637\u0628\u064A\u0642",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629: \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u062D\u062F \u0627\u0644\u0633\u0627\u0639\u0629 01:00 \u0628\u062A\u0648\u0642\u064A\u062A \u062C\u0631\u064A\u0646\u062A\u0634 \u0644\u0645\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 \u0633\u0627\u0639\u062A\u064A\u0646. \u0642\u062F \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0629.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\u062A\u062D\u0648\u064A\u0644",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    $n = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannen Sie, um die mobile App herunterzuladen.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X Webterminal",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "W\xF6chentliche Wartung: Sonntags um 06:00 GMT f\xFCr bis zu 2 Stunden. Der Service kann beeintr\xE4chtigt sein.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Passwort vergessen?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Benutzername",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\xDCbertragung",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Kontodetails",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Kopiert!"
    },
    Wn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Escanee para descargar la aplicaci\xF3n m\xF3vil.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Mantenimiento semanal: Domingos a las 06:00 GMT durante un m\xE1ximo de 2 horas. El servicio puede verse afectado.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\xBFOlvid\xF3 la contrase\xF1a?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nombre de usuario",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transferencia",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Detalles de la cuenta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\xA1Copiado!"
    },
    Mn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Mot de passe oubli\xE9 ?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nom d'utilisateur",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfert",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "D\xE9tails du compte",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copi\xE9 !"
    },
    Bn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scansiona per scaricare l'app mobile.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Terminale web di Deriv X",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Manutenzione settimanale: domenica alle 06:00 GMT per un massimo di 2 ore. Il servizio potrebbe subire interruzioni.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Hai dimenticato la password?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nome utente",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Trasferimento",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Dettagli del conto",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copiato!"
    },
    zn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Zeskanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Cotygodniona konserwacja: Niedziele o 01:00 GMT do 2 godz. Mo\u017Ce mie\u0107 wp\u0142yw na dost\u0119pno\u015B\u0107 us\u0142ug.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Nie pami\u0119tasz has\u0142a?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nazwa u\u017Cytkownika",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Przelew",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Szczeg\xF3\u0142y konta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Skopiowano!"
    },
    Un = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Digitalize para transferir a aplica\xE7\xE3o m\xF3vel.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Terminal web Deriv X",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Aplica\xE7\xE3o Deriv X",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Manuten\xE7\xE3o semanal: Domingos \xE0s 06:00 GMT, com uma dura\xE7\xE3o de at\xE9 2 horas. O servi\xE7o poder\xE1 ser afetado.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Esqueceu-se da palavra-passe?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nome de utilizador",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfer\xEAncia",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Informa\xE7\xE3o da conta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copiado!"
    },
    jn = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X \u0432\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0441\u0447\u0435\u0442\u0430",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    zr = {
        "ar-001": {
            translations: Nn,
            isRTL: !0
        },
        "de-DE": {
            translations: $n,
            isRTL: !1
        },
        "es-ES": {
            translations: Wn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Mn,
            isRTL: !1
        },
        "it-IT": {
            translations: Bn,
            isRTL: !1
        },
        "pl-PL": {
            translations: zn,
            isRTL: !1
        },
        "pt-PT": {
            translations: Un,
            isRTL: !1
        },
        "ru-RU": {
            translations: jn,
            isRTL: !1
        }
    };

function xt(f, r, l, e) {
    window.open(f.AccountType = "https://dx.deriv.com/", "_blank")
}
a(xt, "default");

function kt(f, r, l, e) {
    navigator.clipboard.writeText(f.TextToCopy)
}
a(kt, "default");
var I = v; {
    let r = class r extends I.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, zr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return I.Logger.startActiveSpan("ForgotPasswordOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ForgotPasswordOnClick"), n.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), I.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), I.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        get _webterminalOnClick$Action() {
            return this.hasOwnProperty("__webterminalOnClick$Action") || (this.__webterminalOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return I.Logger.startActiveSpan("WebterminalOnClick", function(n) {
                    n && (n.setAttribute("code.function", "WebterminalOnClick"), n.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), I.Logger.startActiveSpan("DxWebterminal", function(s) {
                            s && (s.setAttribute("code.function", "DxWebterminal"), s.setAttribute("outsystems.function.key", "e255b3cd-27fd-4e18-9e8d-65a70a49caab"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(xt, "DxWebterminal", "WebterminalOnClick", {
                                    AccountType: I.DataConversion.JSNodeParamConverter.to(W.getAccountType(), I.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__webterminalOnClick$Action
        }
        set _webterminalOnClick$Action(e) {
            this.__webterminalOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return I.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), I.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), I.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _downloadAppOnClick$Action() {
            return this.hasOwnProperty("__downloadAppOnClick$Action") || (this.__downloadAppOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return I.Logger.startActiveSpan("DownloadAppOnClick", function(n) {
                    n && (n.setAttribute("code.function", "DownloadAppOnClick"), n.setAttribute("outsystems.function.key", "b2736a09-9cd7-4ecb-b1bb-0076e660b3dd"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), O.openDeepLink$Action(i.variables.selectedAccountIn.platformAttr, "", "", e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__downloadAppOnClick$Action
        }
        set _downloadAppOnClick$Action(e) {
            this.__downloadAppOnClick$Action = e
        }
        get _copyToClipboard$Action() {
            return this.hasOwnProperty("__copyToClipboard$Action") || (this.__copyToClipboard$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return I.Logger.startActiveSpan("CopyToClipboard", function(s) {
                    s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), i = o.callContext(i);
                        var u = new I.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars")));
                        u.value.textToCopyInLocal = e, I.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "fcdde90d-dd04-4fbb-9c69-59f7b4b83a9f"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(kt, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: I.DataConversion.JSNodeParamConverter.to(u.value.textToCopyInLocal, I.DataTypes.DataTypes.Text)
                                }, function(b) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), I.FeedbackMessageService.showFeedbackMessage(I.Injector.resolve(I.ServiceNames.TranslationsService).getMessage("SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(e) {
            this.__copyToClipboard$Action = e
        }
        forgotPasswordOnClick$Action(e) {
            var i = this.controller;
            return I.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), I.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        webterminalOnClick$Action(e) {
            var i = this.controller;
            return I.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WebterminalOnClick"), t.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._webterminalOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return I.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), I.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        downloadAppOnClick$Action(e) {
            var i = this.controller;
            return I.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "DownloadAppOnClick"), t.setAttribute("outsystems.function.key", "b2736a09-9cd7-4ecb-b1bb-0076e660b3dd"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._downloadAppOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        copyToClipboard$Action(e, i) {
            var t = this.controller;
            return I.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
                o && (o.setAttribute("code.function", "CopyToClipboard"), o.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, i, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    It = f, It.registerVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: I.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var It, Ur = new I.Controller.ControllerFactory(It, T);
var H = v,
    mc = y.PlaceholderContent,
    vc = y.IteratorPlaceholderContent,
    Pe = class Pe extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.DerivXTradeModal"
        }
        static getAttributes() {
            return {
                codeFunction: "DerivXTradeModal",
                functionKey: "bae00962-f80a-49bb-b04b-4defba2dfd2c",
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
            return [Ie]
        }
        get modelFactory() {
            return Yt
        }
        get controllerFactory() {
            return Ur
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = Pe.ifWidget,
                s = Pe.textWidget,
                u = Pe.asPrimitiveValue,
                m = Pe.getTranslation,
                b = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(G, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalHeader"
                },
                _widgetRecordProvider: t
            }, E.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("oN_h5NvgWUSd55sAGYve9Q#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), E.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon3"
                },
                _widgetRecordProvider: t
            })), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalContent"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductRow2"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, E.createElement(C, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductNameBalanceContainer2"
                },
                _widgetRecordProvider: t
            }, E.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(Me, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, E.createElement(p, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(p, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), E.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    try {
                        H.Navigation.navigateTo(H.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), H.Transitions.createTransition(H.Transitions.TransitionAnimation.Fade), null, !0)
                    } catch (d) {
                        if (d.name !== "RedirectOccurredException") throw d
                    }
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, E.createElement(C, {
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), E.createElement(w, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [s(m("0A55Iqpuk0ym_YWurf8vgA#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxAccountInfoRow"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            }, E.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1", "Username"),
                _idProps: {
                    service: e,
                    name: "UsernameLabel"
                },
                _widgetRecordProvider: t
            })), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, E.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.loginAttr,
                _idProps: {
                    service: e,
                    name: "DynamicUsernameLabel"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(V, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, l.callContext(d))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }))), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxForgotPasswordRow"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "auto"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t
            }, E.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("zyRf+i4DOEay7byfR1VdqQ#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            }))), E.createElement(Ie, {
                getOwnerSpan: a(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return b.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1", "Weekly maintenance: Sundays at 06:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: H.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "25",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("DxtradeTradeModalFooter.class"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
                    }),
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalFooter"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, E.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return S.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, E.createElement(V, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }), E.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1", "Deriv X app"),
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            })), E.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#ff4450")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.webterminalOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, E.createElement(V, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("n_TJr+KecE+HkzWKnzBg3w.style"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
                    })
                },
                icon: "globe",
                iconSize: 0,
                style: '"icon"',
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "32"
                },
                _widgetRecordProvider: t
            }), E.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1", "Deriv X web terminal"),
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }))), E.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8",
                    marginLeft: "auto"
                },
                style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
                visible: r.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, E.createElement(C, {
                gridProperties: {
                    width: "80px"
                },
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dxtradeOnelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }), E.createElement(w, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("mrqnSVBRmE6If_BJN329Mw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText3"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(Pe, "View");
var Tt = Pe,
    hc = Tt;
var B = z(U());
var Qn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u0641\u0634\u0644",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u0641\u0634\u0644",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0645\u0643\u062A\u0645\u0644",
        "somkOTVlNkWj6olwMh4slw#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
    },
    qn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fehlgeschlagen",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fehlgeschlagen",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verifiziert",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Abgeschlossen",
        "somkOTVlNkWj6olwMh4slw#Value": "In \xDCberpr\xFCfung",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In \xDCberpr\xFCfung"
    },
    Jn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fallido",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fallido",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completado",
        "somkOTVlNkWj6olwMh4slw#Value": "En revisi\xF3n",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En revisi\xF3n"
    },
    Gn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\xC9chou\xE9",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\xC9chou\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "V\xE9rifi\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Termin\xE9",
        "somkOTVlNkWj6olwMh4slw#Value": "En r\xE9vision",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En r\xE9vision"
    },
    Kn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Operazione non riuscita",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Operazione non riuscita",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificato",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completato",
        "somkOTVlNkWj6olwMh4slw#Value": "In revisione",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In revisione"
    },
    Xn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Niepowodzenie",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Niepowodzenie",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Zweryfikowane",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Zako\u0144czono",
        "somkOTVlNkWj6olwMh4slw#Value": "W trakcie sprawdzania",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "W trakcie sprawdzania"
    },
    Yn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Falhou",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Falhou",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Conclu\xEDdo",
        "somkOTVlNkWj6olwMh4slw#Value": "Em an\xE1lise",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "Em an\xE1lise"
    },
    Zn = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        "somkOTVlNkWj6olwMh4slw#Value": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438"
    },
    jr = {
        "ar-001": {
            translations: Qn,
            isRTL: !0
        },
        "de-DE": {
            translations: qn,
            isRTL: !1
        },
        "es-ES": {
            translations: Jn,
            isRTL: !1
        },
        "fr-FR": {
            translations: Gn,
            isRTL: !1
        },
        "it-IT": {
            translations: Kn,
            isRTL: !1
        },
        "pl-PL": {
            translations: Xn,
            isRTL: !1
        },
        "pt-PT": {
            translations: Yn,
            isRTL: !1
        },
        "ru-RU": {
            translations: Zn,
            isRTL: !1
        }
    };
var le = v; {
    let r = class r extends le.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, jr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _redirectToAction$Action() {
            return this.hasOwnProperty("__redirectToAction$Action") || (this.__redirectToAction$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return le.Logger.startActiveSpan("RedirectToAction", function(n) {
                    return n && (n.setAttribute("code.function", "RedirectToAction"), n.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), le.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RedirectToAction"), e = t.callContext(e), le.Flow.executeAsyncFlow(function() {
                            return le.Flow.executeSequence(function() {
                                if (!i.variables.isDisabledIn) return t.redirectToEvent$Action(e)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__redirectToAction$Action
        }
        set _redirectToAction$Action(e) {
            this.__redirectToAction$Action = e
        }
        redirectToAction$Action(e) {
            var i = this.controller;
            return le.Logger.startActiveSpan("RedirectToAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RedirectToAction"), t.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), le.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._redirectToAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get redirectToEvent$Action() {
            return this.hasOwnProperty("_redirectToEvent$Action") || (this._redirectToEvent$Action = function() {
                return Promise.resolve()
            }), this._redirectToEvent$Action
        }
        set redirectToEvent$Action(e) {
            this._redirectToEvent$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Qr = f
}
var Qr, qr = new le.Controller.ControllerFactory(Qr, T);
var $ = v,
    Tc = y.PlaceholderContent,
    Dc = y.IteratorPlaceholderContent,
    we = class we extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ProfileSetupCard"
        }
        static getAttributes() {
            return {
                codeFunction: "ProfileSetupCard",
                functionKey: "9af3ca67-5d18-4ffc-a7da-5bafa5fd2543",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.ProfileSetupCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Zt
        }
        get controllerFactory() {
            return qr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = we.ifWidget,
                s = we.textWidget,
                u = we.asPrimitiveValue,
                m = we.getTranslation,
                b = this;
            return B.createElement("div", this.getRootNodeProperties(), B.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.redirectToAction$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; margin-top: 24px; padding: 16px;"
                },
                style: r.getCachedValue(e.getId("oXZ1Z0pb7kOjZiILWyRZxg.Style"), function() {
                    return r.variables.isDisabledIn ? "default-cursor" : "cursor-pointer"
                }, function() {
                    return r.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, n(r.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("s7xI84343EmHa3yrSOasog#Condition.415251123.1", "In Review"), !1, this, function() {
                return [B.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FEF0E6; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "InReviewStatus"
                    },
                    _widgetRecordProvider: t
                }, B.createElement(C, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InReview.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(w, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [s(m("somkOTVlNkWj6olwMh4slw#Value", "In review"))],
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), n(r.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1", "Verified") || r.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1", "Completed"), !1, this, function() {
                return [B.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #EBF7ED; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "VerifiedStatus"
                    },
                    _widgetRecordProvider: t
                }, B.createElement(C, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.IconSuccessful.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(p, {
                    extendedProperties: {
                        style: "color: #267D36; font-size: 12px; font-weight: bold;"
                    },
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    value: r.variables.statusIn,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                }))]
            }, function() {
                return []
            }), n(r.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1", "Failed"), !1, this, function() {
                return [B.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FAEAEA; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "FailedStatus"
                    },
                    _widgetRecordProvider: t
                }, B.createElement(C, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Error.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(w, {
                    extendedProperties: {
                        style: "color: #8C1D1D; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [s(m("aK_wOyqFv06BBkBTCUMb_w#Value", "Failed"))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), B.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 8px;"
                },
                style: r.getCachedValue(e.getId("4t1YJ84txEumevu+f4CqOA.Style"), function() {
                    return r.variables.isDisabledIn ? "disabled-class display-flex align-items-center justify-content-space-between" : "display-flex align-items-center justify-content-space-between"
                }, function() {
                    return r.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, B.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, B.createElement(C, {
                gridProperties: {
                    width: "32px"
                },
                type: 1,
                url: r.variables.iconIn,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._iconInDataFetchStatus)
            }), B.createElement(p, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            })), n(r.variables.isDisabledIn, !1, this, function() {
                return []
            }, function() {
                return [B.createElement(C, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                })]
            })), B.createElement(p, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                style: r.getCachedValue(e.getId("7H3hQssJoUmatQccgqXuYA.Style"), function() {
                    return r.variables.isDisabledIn ? "disabled-class" : ""
                }, function() {
                    return r.variables.isDisabledIn
                }),
                value: r.variables.descriptionIn,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus),
                value_dataFetchStatus: $.Model.calculateDataFetchStatus(r.variables._descriptionInDataFetchStatus)
            })))
        }
    };
a(we, "View");
var Dt = we,
    Fc = Dt;
var J = z(U());
var Jr = {};
var Ee = v; {
    let r = class r extends Ee.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Jr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return Ee.Logger.startActiveSpan("OnClose", function(n) {
                    return n && (n.setAttribute("code.function", "OnClose"), n.setAttribute("outsystems.function.key", "d885b076-8efc-4c0f-9cdc-f8081aa0d1b3"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Ee.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClose"), e = t.callContext(e), Ee.Flow.executeAsyncFlow(function() {
                            return t.closeBOLockModal$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onClose$Action(e) {
            var i = this.controller;
            return Ee.Logger.startActiveSpan("OnClose__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "d885b076-8efc-4c0f-9cdc-f8081aa0d1b3"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Ee.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClose$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeBOLockModal$Action() {
            return this.hasOwnProperty("_closeBOLockModal$Action") || (this._closeBOLockModal$Action = function() {
                return Promise.resolve()
            }), this._closeBOLockModal$Action
        }
        set closeBOLockModal$Action(e) {
            this._closeBOLockModal$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Gr = f
}
var Gr, Kr = new Ee.Controller.ControllerFactory(Gr, T);
var Se = v,
    Xc = y.PlaceholderContent,
    Yc = y.IteratorPlaceholderContent,
    Oe = class Oe extends R.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.BOLocksPopup"
        }
        static getAttributes() {
            return {
                codeFunction: "BOLocksPopup",
                functionKey: "15e68ee5-bc37-4308-8d20-5debd19b0304",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.BOLocksPopup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return er
        }
        get controllerFactory() {
            return Kr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = Oe.ifWidget,
                s = Oe.textWidget,
                u = Oe.asPrimitiveValue,
                m = Oe.getTranslation,
                b = this;
            return J.createElement("div", this.getRootNodeProperties(), J.createElement(G, {
                showPopup: r.variables.isVisibleIn,
                style: "popup-dialog warning-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Se.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, J.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 16px;"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupHeader"
                },
                _widgetRecordProvider: t
            }, J.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClose$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                image: Se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), J.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 0px;"
                },
                style: "display-flex align-items-center justify-content-center flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupContent"
                },
                _widgetRecordProvider: t
            }, J.createElement(C, {
                image: Se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCircleExclamation.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }), J.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: r.variables.statusIn === "unavailable",
                _idProps: {
                    service: e,
                    name: "AccountUnavailableContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, J.createElement(w, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Account temporarily unavailable"],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), J.createElement(w, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Check back in a few minutes by refreshing the page."],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), J.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "maintenance",
                _idProps: {
                    service: e,
                    name: "ServerMaintenanceContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, J.createElement(w, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Maintenance in progress"],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), J.createElement(w, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Some services may be affected and your balance is temporarily unavailable."],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            })), J.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: !(r.variables.statusIn === "unavailable" || r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "maintenance"),
                _idProps: {
                    service: e,
                    name: "DefaultContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, J.createElement(p, {
                value: r.variables.statusIn,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Se.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }))), J.createElement(L, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.onClose$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, "OK")))
        }
    };
a(Oe, "View");
var Ft = Oe,
    Zc = Ft;
var re = z(U());
var ei = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    ti = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Passwort vergessen"
    },
    ri = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Olvid\xE9 la contrase\xF1a"
    },
    ni = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Mot de passe oubli\xE9"
    },
    ii = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Password dimenticato"
    },
    oi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Nie pami\u0119tam has\u0142a"
    },
    ai = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Esqueceu-se da palavra-passe"
    },
    si = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Xr = {
        "ar-001": {
            translations: ei,
            isRTL: !0
        },
        "de-DE": {
            translations: ti,
            isRTL: !1
        },
        "es-ES": {
            translations: ri,
            isRTL: !1
        },
        "fr-FR": {
            translations: ni,
            isRTL: !1
        },
        "it-IT": {
            translations: ii,
            isRTL: !1
        },
        "pl-PL": {
            translations: oi,
            isRTL: !1
        },
        "pt-PT": {
            translations: ai,
            isRTL: !1
        },
        "ru-RU": {
            translations: si,
            isRTL: !1
        }
    };
var ne = v; {
    let r = class r extends ne.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Xr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _updateProfileOnClick$Action() {
            return this.hasOwnProperty("__updateProfileOnClick$Action") || (this.__updateProfileOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return ne.Logger.startActiveSpan("UpdateProfileOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "UpdateProfileOnClick"), n.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ne.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("UpdateProfileOnClick"), e = t.callContext(e), ne.Flow.executeAsyncFlow(function() {
                            return t.updateProfile$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__updateProfileOnClick$Action
        }
        set _updateProfileOnClick$Action(e) {
            this.__updateProfileOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return ne.Logger.startActiveSpan("CloseOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CloseOnClick"), n.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ne.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), ne.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        updateProfileOnClick$Action(e) {
            var i = this.controller;
            return ne.Logger.startActiveSpan("UpdateProfileOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "UpdateProfileOnClick"), t.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ne.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._updateProfileOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var i = this.controller;
            return ne.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ne.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get updateProfile$Action() {
            return this.hasOwnProperty("_updateProfile$Action") || (this._updateProfile$Action = function() {
                return Promise.resolve()
            }), this._updateProfile$Action
        }
        set updateProfile$Action(e) {
            this._updateProfile$Action = e
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
    a(r, "ControllerInner");
    let f = r;
    Yr = f
}
var Yr, Zr = new ne.Controller.ControllerFactory(Yr, T);
var Vt = v,
    bd = y.PlaceholderContent,
    _d = y.IteratorPlaceholderContent,
    Re = class Re extends R.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.CompleteYourProfileModal"
        }
        static getAttributes() {
            return {
                codeFunction: "CompleteYourProfileModal",
                functionKey: "ccd5c6a7-692c-4dc8-912c-1e4ac462b907",
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
            return []
        }
        get modelFactory() {
            return tr
        }
        get controllerFactory() {
            return Zr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = Re.ifWidget,
                s = Re.textWidget,
                u = Re.asPrimitiveValue,
                m = Re.getTranslation,
                b = this;
            return re.createElement("div", this.getRootNodeProperties(), re.createElement(G, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Vt.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, re.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalHeader"
                },
                _widgetRecordProvider: t
            }, re.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("buIw4sV9uUGBm0zbchclxw#Value", "Complete your profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), re.createElement(C, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Vt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), re.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1; height: 70vh; padding: 16px; text-align: center;"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalContent"
                },
                _widgetRecordProvider: t
            }, re.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, re.createElement(C, {
                extendedProperties: {
                    style: "height: 100px;"
                },
                gridProperties: {
                    width: "100px"
                },
                image: Vt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), re.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, re.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "Complete your Profile",
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }), "To continue, provide the required information in the Personal Details section."), re.createElement(L, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.updateProfileOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, "Update profile")), re.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "bottom: 0; height: 30vh; padding: 16px; position: fixed;"
                },
                style: "display-flex flex-direction-column justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordFooter"
                },
                _widgetRecordProvider: t
            })))
        }
    };
a(Re, "View");
var Ht = Re,
    yd = Ht;
var xe = z(U());
var en = {};

function Lt(f, r, l, e) {
    f.OnInitializedHandler = r.InitializedHandler, f.OnToggleHandler = r.OnToggleHandler
}
a(Lt, "default");
var P = v; {
    let r = class r extends P.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, en);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: a(function(n) {
                    return n = n === void 0 ? "" : n, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, P.DataConversion.JSNodeParamConverter.from(n, P.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: a(function(n, s) {
                    return n = n === void 0 ? "" : n, s = s === void 0 ? !1 : s, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, P.DataConversion.JSNodeParamConverter.from(n, P.DataTypes.DataTypes.Text), P.DataConversion.JSNodeParamConverter.from(s, P.DataTypes.DataTypes.Boolean)), o.callContext(), function(u) {
                        return {}
                    }, function() {}, "OnToggleHandler")
                }, "onToggleHandler$Action")
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
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var s = new P.DataTypes.VariableHolder,
                            u = new P.DataTypes.VariableHolder(new P.DataTypes.JSONSerializeOutputType);
                        s.value = S.generateUniqueId$Action(i.variables.internalConfigsVar.uniqueIdAttr, e), i.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, i.variables.internalConfigsVar.extendedClassAttr = i.variables.extendedClassIn, i.variables.internalConfigsVar.shapeAttr = i.variables.shapeIn, i.variables.internalConfigsVar.showHandlerAttr = i.variables.showHandlerIn, u.value.jSONOut = P.JSONUtils.serializeToJSON(i.variables.internalConfigsVar, !0, !1), S.bottomSheetCreate$Action(i.variables.internalConfigsVar.uniqueIdAttr, u.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("RegisterCallback", function(n) {
                    n && (n.setAttribute("code.function", "RegisterCallback"), n.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var s = new P.DataTypes.VariableHolder;
                        s.value = P.Logger.startActiveSpan("GetCallbackHandler", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandler"), u.setAttribute("outsystems.function.key", "e152b377-7633-4d47-a17f-69d217822e08"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Lt, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: P.DataConversion.JSNodeParamConverter.to(null, P.DataTypes.DataTypes.Object),
                                    OnToggleHandler: P.DataConversion.JSNodeParamConverter.to(null, P.DataTypes.DataTypes.Object)
                                }, function(m) {
                                    var b = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"));
                                    return b.onInitializedHandlerOut = P.DataConversion.JSNodeParamConverter.from(m.OnInitializedHandler, P.DataTypes.DataTypes.Object), b.onToggleHandlerOut = P.DataConversion.JSNodeParamConverter.from(m.OnToggleHandler, P.DataTypes.DataTypes.Object), b
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: t.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), S.bottomSheetRegisterCallback$Action(i.variables.internalConfigsVar.uniqueIdAttr, Ke.registeredCallbackEvents.initialized, s.value.onInitializedHandlerOut, e), S.bottomSheetRegisterCallback$Action(i.variables.internalConfigsVar.uniqueIdAttr, Ke.registeredCallbackEvents.onToggle, s.value.onToggleHandlerOut, e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(e, i, t) {
                var o = this.model,
                    n = this.controller,
                    s = this.idService;
                return P.Logger.startActiveSpan("OnToggleHandler", function(u) {
                    return u && (u.setAttribute("code.function", "OnToggleHandler"), u.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        n.ensureControllerAlive("OnToggleHandler"), t = n.callContext(t);
                        var m = new P.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars")));
                        return m.value.bottomSheetIdInLocal = e, m.value.isBottomSheetOpenInLocal = i, P.Flow.executeAsyncFlow(function() {
                            return n.onToggle$Action(m.value.bottomSheetIdInLocal, m.value.isBottomSheetOpenInLocal, t)
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(e) {
            this.__onToggleHandler$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, i) {
                var t = this.model,
                    o = this.controller,
                    n = this.idService;
                return P.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), i = o.callContext(i);
                        var u = new P.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars")));
                        return u.value.bottomSheetIdInLocal = e, P.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(u.value.bottomSheetIdInLocal, i)
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnDestroy", function(n) {
                    n && (n.setAttribute("code.function", "OnDestroy"), n.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), S.bottomSheetDestroy$Action(i.variables.internalConfigsVar.uniqueIdAttr, e)
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
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), S.bottomSheetInitialize$Action(i.variables.internalConfigsVar.uniqueIdAttr, e)
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
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), i.variables.internalConfigsVar.shapeAttr !== i.variables.shapeIn && (i.variables.internalConfigsVar.shapeAttr = i.variables.shapeIn, S.bottomSheetChangeTextProperty$Action(i.variables.internalConfigsVar.uniqueIdAttr, "Shape", i.variables.internalConfigsVar.shapeAttr, e)), i.variables.internalConfigsVar.showHandlerAttr !== i.variables.showHandlerIn && (i.variables.internalConfigsVar.showHandlerAttr = i.variables.showHandlerIn, S.bottomSheetChangeBooleanProperty$Action(i.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", i.variables.internalConfigsVar.showHandlerAttr, e)), i.variables.internalConfigsVar.extendedClassAttr !== i.variables.extendedClassIn && (i.variables.internalConfigsVar.extendedClassAttr = i.variables.extendedClassIn, S.bottomSheetChangeTextProperty$Action(i.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", i.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return P.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallback$Action(e) {
            var i = this.controller;
            return P.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onToggleHandler$Action(e, i, t) {
            var o = this.controller;
            return P.Logger.startActiveSpan("OnToggleHandler__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnToggleHandler"), n.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), n.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), n.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, t, e, i)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        initializedHandler$Action(e, i) {
            var t = this.controller;
            return P.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, i, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var i = this.controller;
            return P.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return P.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return P.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
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
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(e) {
            this._onToggle$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onReady$Action(e)
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
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onParametersChanged$Action(e)
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
            return S.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let f = r;
    $e = f, $e.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggleHandler",
        attrName: "onToggleHandlerOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }]), $e.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsBottomSheetOpen",
        attrName: "isBottomSheetOpenInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), $e.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !1,
        dataType: P.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var $e, tn = new P.Controller.ControllerFactory($e, Be);
var Hd = y.PlaceholderContent,
    Ld = y.IteratorPlaceholderContent,
    ke = class ke extends R.BaseWebBlock {
        static get displayName() {
            return "Interaction.BottomSheet"
        }
        static getAttributes() {
            return {
                codeFunction: "BottomSheet",
                functionKey: "4fb64c61-8941-44be-b854-da0b608a625b",
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
            return rr
        }
        get controllerFactory() {
            return tn
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                n = ke.ifWidget,
                s = ke.textWidget,
                u = ke.asPrimitiveValue,
                m = ke.getTranslation,
                b = this;
            return xe.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [xe.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: r.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: t
                }, xe.createElement($t, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t
                }, xe.createElement(De, {
                    align: 0,
                    content: b.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: e,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: t
                })), xe.createElement(De, {
                    align: 0,
                    content: b.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), xe.createElement(c, {
                    align: 0,
                    animate: !1,
                    style: "osui-bottom-sheet-overlay",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }))
        }
    };
a(ke, "View");
var Nt = ke,
    Nd = Nt;
export {
    no as a, Po as b, Bo as c, da as d, ts as e, ys as f, Ie as g, Bl as h, hc as i, Fc as j, Zc as k, yd as l, Nd as m
};