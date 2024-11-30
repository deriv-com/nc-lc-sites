import {
    a as w
} from "./_oschunk-VLOO5HJV.js";
import {
    a as h
} from "./_oschunk-FVTZGXVK.js";
import {
    h as l,
    j as b,
    r as O
} from "./_oschunk-WAXNMQCP.js";
import {
    a as P
} from "./_oschunk-LHY3WMNC.js";
import {
    a as V,
    g as S,
    i as p
} from "./_oschunk-J7LCUWB3.js";
import {
    a as R,
    d as C
} from "./_oschunk-XMOR6XCC.js";
import {
    tc as y
} from "./_oschunk-44PT7RP7.js";
import {
    ia as _
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as x
} from "./_oschunk-DVBKI63I.js";
var a = x(V());
var H = {};
var s = _; {
    let i = class i extends s.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, H);
            var f = this.controller;
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
                    f = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(y)));
                        r.variables.isLoadingVar = !0, m.value.dataOut = s.JSONUtils.deserializeFromJSON(R.getActiveWallet(), y, !1), r.variables.activeWalletVar = m.value.dataOut, r.variables.isLoadingVar = !1
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
            return s.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0d4e3418-97da-44ba-a575-43f06206830e"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
                    f = this.idService;
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
            return C.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let v = i;
    A = v
}
var A, W = new s.Controller.ControllerFactory(A, P);
var Y = p.PlaceholderContent,
    Z = p.IteratorPlaceholderContent,
    d = class d extends S.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsCashierHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsCashierHeader",
                functionKey: "db31b58d-787e-4a06-ae6d-6087868a7467",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsCashierHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [h]
        }
        get modelFactory() {
            return w
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                r = c.validationService,
                t = this.widgetsRecordProvider,
                f = c.callContext(),
                n = d.ifWidget,
                m = d.textWidget,
                N = d.asPrimitiveValue,
                k = d.getTranslation,
                u = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(l, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-radius: 8px; padding-bottom: 12px; padding-left: var(--space-base); padding-right: var(--space-base); padding-top: 12px;"
                },
                style: "display-flex align-items-center justify-content-space-between gap-s full-width background-neutral-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MainContainer"
                },
                _widgetRecordProvider: t
            }, n(i.variables.isLoadingVar, !1, this, function() {
                return [a.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "currency-icon-skeleton",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [a.createElement(O, {
                    gridProperties: {
                        width: "32px"
                    },
                    type: 1,
                    url: i.variables.activeWalletVar.iconAttr,
                    _idProps: {
                        service: e,
                        name: "WalletCashierHeaderIcon"
                    },
                    _widgetRecordProvider: t
                })]
            }), n(i.variables.isLoadingVar, !1, this, function() {
                return [a.createElement(h, {
                    getOwnerSpan: o(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(g) {
                            c.handleError(g)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return [a.createElement(b, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    style: "font-bold font-size-s",
                    value: i.variables.activeWalletVar.nameAttr,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }), a.createElement(l, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-right",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, n(i.variables.isLoadingVar, !1, this, function() {
                return [a.createElement(l, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-flex-end",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, a.createElement(h, {
                    getOwnerSpan: o(function() {
                        return u.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return u.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: o(function(g) {
                            c.handleError(g)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: e,
                        uuid: "7",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            }, function() {
                return [a.createElement(b, {
                    style: "font-size-s font-bold",
                    value: i.variables.activeWalletVar.formattedBalanceAttr,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })]
            }))))
        }
    };
o(d, "View");
var E = d,
    ee = E;
export {
    ee as a
};