import {
    a as x
} from "./_oschunk-REKE2HUI.js";
import {
    a as M,
    b as K,
    c as J,
    d as X
} from "./_oschunk-NGNQD7FO.js";
import "./_oschunk-ETP52G4K.js";
import {
    a as U
} from "./_oschunk-JBJK3LYA.js";
import "./_oschunk-7UUH74EP.js";
import "./_oschunk-HVBO7UJ7.js";
import "./_oschunk-LS2CNLHX.js";
import {
    a as N
} from "./_oschunk-ZGZGC7WW.js";
import "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-ZOYETE4I.js";
import "./_oschunk-CCRNOUNW.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    h as F,
    q as L,
    y as D
} from "./_oschunk-E7JQAU4J.js";
import {
    a as C
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as H,
    g as m,
    i as l
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as A,
    d as y
} from "./_oschunk-VADNKVBQ.js";
import "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-KG7LSUIA.js";
import {
    ia as h
} from "./_oschunk-5EPHB76O.js";
import {
    c as o,
    g as O
} from "./_oschunk-DVBKI63I.js";
var d = O(H());
var Q = O(H());
var G = {};
var R = h; {
    let a = class a extends R.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, G);
            var c = this.controller;
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
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return R.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "675c16a8-4680-4f8f-b6f0-ffd379313eb0"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), A.getAuthToken(), R.BuiltinFunctions.nullTextIdentifier()
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
            return R.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "675c16a8-4680-4f8f-b6f0-ffd379313eb0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), R.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    c = this.idService;
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
    o(a, "ControllerInner");
    let u = a;
    Y = u
}
var Y, j = new R.Controller.ControllerFactory(Y, C);
var Ee = l.PlaceholderContent,
    Ae = l.IteratorPlaceholderContent,
    g = class g extends m.BaseWebBlock {
        static get displayName() {
            return "CFDNew.MT5AvailableAccounts"
        }
        static getAttributes() {
            return {
                codeFunction: "MT5AvailableAccounts",
                functionKey: "d2ea3455-5686-40e0-b174-44d50df6aeec",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return []
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
            return j
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                r = i.validationService,
                t = this.widgetsRecordProvider,
                c = i.callContext(),
                n = g.ifWidget,
                _ = g.textWidget,
                P = g.asPrimitiveValue,
                S = g.getTranslation,
                s = this;
            return Q.createElement("div", this.getRootNodeProperties())
        }
    };
o(g, "View");
var T = g,
    I = T;
var re = O(H());
var Z = {};
var w = h; {
    let a = class a extends w.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Z);
            var c = this.controller;
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
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return w.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "531636d0-795c-4853-809b-31fcaa65001e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), A.getAuthToken(), w.BuiltinFunctions.nullTextIdentifier()
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
            return w.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "531636d0-795c-4853-809b-31fcaa65001e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    c = this.idService;
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
    o(a, "ControllerInner");
    let u = a;
    ee = u
}
var ee, te = new w.Controller.ControllerFactory(ee, C);
var ke = l.PlaceholderContent,
    We = l.IteratorPlaceholderContent,
    b = class b extends m.BaseWebBlock {
        static get displayName() {
            return "CFDNew.CTraderAvailableAccounts"
        }
        static getAttributes() {
            return {
                codeFunction: "CTraderAvailableAccounts",
                functionKey: "b5619a5b-9e84-46bf-9030-50c5c9a9664e",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return []
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return K
        }
        get controllerFactory() {
            return te
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                r = i.validationService,
                t = this.widgetsRecordProvider,
                c = i.callContext(),
                n = b.ifWidget,
                _ = b.textWidget,
                P = b.asPrimitiveValue,
                S = b.getTranslation,
                s = this;
            return re.createElement("div", this.getRootNodeProperties())
        }
    };
o(b, "View");
var $ = b,
    k = $;
var ae = O(H());
var ne = {};
var v = h; {
    let a = class a extends v.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, ne);
            var c = this.controller;
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
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return v.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "6ea49b65-33b8-4452-9bcd-1aaf39c40443"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var _ = new v.DataTypes.VariableHolder;
                        return v.Flow.executeAsyncFlow(function() {
                            return v.Flow.executeSequence(function() {
                                if (A.getAuthToken() !== v.BuiltinFunctions.nullTextIdentifier()) return r.variables.isLoadingVar = !0, r.flush(), y.getTradingPlatformAvailableAccounts$Action("dxtrade", e).then(function(P) {
                                    _.value = P
                                })
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return v.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6ea49b65-33b8-4452-9bcd-1aaf39c40443"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), v.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
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
                    c = this.idService;
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
    o(a, "ControllerInner");
    let u = a;
    oe = u
}
var oe, ie = new v.Controller.ControllerFactory(oe, C);
var tt = l.PlaceholderContent,
    rt = l.IteratorPlaceholderContent,
    p = class p extends m.BaseWebBlock {
        static get displayName() {
            return "CFDNew.DerivXAvailableAccounts"
        }
        static getAttributes() {
            return {
                codeFunction: "DerivXAvailableAccounts",
                functionKey: "e9308b58-6564-4c9a-bcc9-343fdb7d68ee",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return []
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return J
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                r = i.validationService,
                t = this.widgetsRecordProvider,
                c = i.callContext(),
                n = p.ifWidget,
                _ = p.textWidget,
                P = p.asPrimitiveValue,
                S = p.getTranslation,
                s = this;
            return ae.createElement("div", this.getRootNodeProperties())
        }
    };
o(p, "View");
var W = p,
    B = W;
var se = l.PlaceholderContent,
    yt = l.IteratorPlaceholderContent,
    E = class E extends m.BaseWebScreen {
        static get displayName() {
            return "CFDNew.CFDNew"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDNew",
                functionKey: "a980f8cc-20a5-4c45-bc73-526f0a40fc60",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [N, x, I, k, B]
        }
        get modelFactory() {
            return X
        }
        get controllerFactory() {
            return U
        }
        get title() {
            return m.BaseWebScreen.getTranslation("zPiAqaUgRUy8c1JvCkD8YA#Title", "CFDNew")
        }
        internalRender() {
            let a = this.model,
                i = this.controller,
                e = this.idService,
                r = i.validationService,
                t = this.widgetsRecordProvider,
                c = i.callContext(),
                n = E.ifWidget,
                _ = E.textWidget,
                P = E.asPrimitiveValue,
                S = E.getTranslation,
                s = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(N, {
                getOwnerSpan: o(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(f) {
                        i.handleError(f)
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
                    content: new se(function() {
                        return [d.createElement(x, {
                            getOwnerSpan: o(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: "CFDs trading",
                                Description: "Trade bigger positions with less capital on a wide range of global markets."
                            },
                            events: {
                                _handleError: o(function(f) {
                                    i.handleError(f)
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
                            placeholders: {
                                rightSectionPlaceholder: se.Empty
                            },
                            _dependencies: []
                        }), d.createElement(F, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(D, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [_(S("fAKgyKCJXE6pkJc3DrOa4w#Value", "Available accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(F, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ViewSpecificationsContainer"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(D, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [_(S("rfiKVwHAFU6oeVY1C3zBEg#Value", "View specifications"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(L, {
                            extendedProperties: {
                                style: "color: #101213;"
                            },
                            gridProperties: {
                                marginLeft: "4.5px"
                            },
                            icon: "angle-right",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(F, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AvailableAccounts"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(I, {
                            getOwnerSpan: o(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(f) {
                                    i.handleError(f)
                                }, "_handleError")
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
                            _dependencies: []
                        }), d.createElement(k, {
                            getOwnerSpan: o(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(f) {
                                    i.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "9",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(B, {
                            getOwnerSpan: o(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(f) {
                                    i.handleError(f)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
o(E, "View");
var z = E,
    gt = z;
export {
    gt as
    default
};