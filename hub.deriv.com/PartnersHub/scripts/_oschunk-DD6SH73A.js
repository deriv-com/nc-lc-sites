import {
    a as _
} from "./_oschunk-F2QOJGMT.js";
import {
    a as E
} from "./_oschunk-HQNDBRSO.js";
import {
    s as c
} from "./_oschunk-LWMGEL7F.js";
import {
    a as p
} from "./_oschunk-4GXKK3IG.js";
import {
    a as S,
    g as b,
    i as f
} from "./_oschunk-WZHUAZJP.js";
import {
    q as y
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as v
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var a = O(S());
var R = {};
var l = v; {
    let d = class d extends l.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, R);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
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
                    m = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0195eb49-7435-462f-bb5e-c2d435953b4d"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), y.useDevice$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0195eb49-7435-462f-bb5e-c2d435953b4d"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    m = this.idService;
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
            return y.defaultTimeout
        }
    };
    o(d, "ControllerInner");
    let u = d;
    H = u
}
var H, C = new l.Controller.ControllerFactory(H, p);
var g = f.PlaceholderContent,
    Q = f.IteratorPlaceholderContent,
    i = class i extends b.BaseWebBlock {
        static get displayName() {
            return "Layouts.DeviceLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "DeviceLayout",
                functionKey: "31d7193d-1f01-490c-aabd-1b44eb322adc",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [_]
        }
        get modelFactory() {
            return E
        }
        get controllerFactory() {
            return C
        }
        get title() {
            return ""
        }
        internalRender() {
            let d = this.model,
                h = this.controller,
                e = this.idService,
                r = h.validationService,
                t = this.widgetsRecordProvider,
                m = h.callContext(),
                n = i.ifWidget,
                w = i.textWidget,
                D = i.asPrimitiveValue,
                N = i.getTranslation,
                s = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(_, {
                getOwnerSpan: o(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(A) {
                        h.handleError(A)
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
                    onDesktop: new g(function() {
                        return [a.createElement(c, {
                            align: 0,
                            content: s.props.placeholders.desktopContent,
                            _idProps: {
                                service: e,
                                name: "DesktopContent"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    onTablet: new g(function() {
                        return [a.createElement(c, {
                            align: 0,
                            content: s.props.placeholders.tabletContent,
                            _idProps: {
                                service: e,
                                name: "TabletContent"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    onPhone: new g(function() {
                        return [a.createElement(c, {
                            align: 0,
                            content: s.props.placeholders.mobileContent,
                            _idProps: {
                                service: e,
                                name: "MobileContent"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                }
            }))
        }
    };
o(i, "View");
var P = i,
    X = P;
export {
    X as a
};