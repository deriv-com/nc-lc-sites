import {
    a as T
} from "./_oschunk-TPECJ72M.js";
import {
    a as E
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as b,
    c as A
} from "./_oschunk-DOFMR6EA.js";
import {
    hc as f
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as O
} from "./_oschunk-2JKANR6M.js";
import {
    c
} from "./_oschunk-DVBKI63I.js";
var D = {};

function v(s, y, p, e) {
    let a = JSON.parse(s.CreatedCFDAccounts),
        n = JSON.parse(s.AvailableAccounts),
        d = JSON.parse(s.CFDConfig),
        l = d.filter(o => n.some(t => t.identifier === o.ProductIdentifier)).map(o => {
            let t = a.some(u => u.identifier === o.ProductIdentifier);
            return {
                Id: o.Id,
                Label: o.Label,
                Icon: o.Icon,
                Description: o.Description,
                ProductIdentifier: o.ProductIdentifier,
                Spreads: o.Spreads,
                Commission: o.Commission,
                MinimumDeposit: o.MinimumDeposit,
                AssetClasses: o.AssetClasses,
                isAdded: t
            }
        }),
        h = a.map(o => {
            let t = d.find(u => u.ProductIdentifier === o.identifier);
            return {
                Id: (t == null ? void 0 : t.Id) || null,
                Label: o.label,
                Icon: o.icon,
                Description: o.description,
                ProductIdentifier: o.identifier,
                Spreads: (t == null ? void 0 : t.Spreads) || "N/A",
                Commission: (t == null ? void 0 : t.Commission) || "N/A",
                MinimumDeposit: (t == null ? void 0 : t.MinimumDeposit) || "N/A",
                AssetClasses: (t == null ? void 0 : t.AssetClasses) || "N/A",
                isAdded: !0
            }
        }).filter(o => !l.some(t => t.ProductIdentifier === o.ProductIdentifier)),
        m = [...l, ...h].sort((o, t) => t.isAdded - o.isAdded);
    s.ModifiedData = JSON.stringify(m)
}
c(v, "default");
var r = O; {
    let y = class y extends r.Controller.BaseViewController {
        constructor(e, a, n) {
            super(e, a, n, D);
            var d = this.controller;
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
                var a = this.model,
                    n = this.controller,
                    d = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("OnReady"), e = n.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder,
                            m = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(f))),
                            o = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(f)));
                        l.value = A.getCFDAccountsStatic$Action(e), b.getAuthToken() !== r.BuiltinFunctions.nullTextIdentifier() ? (h.value = r.Logger.startActiveSpan("ModifyData", function(t) {
                            t && (t.setAttribute("code.function", "ModifyData"), t.setAttribute("outsystems.function.key", "1f223cdd-5938-43ae-a8ba-55bd8e578506"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return n.safeExecuteJSNode(v, "ModifyData", "OnReady", {
                                    CreatedCFDAccounts: r.DataConversion.JSNodeParamConverter.to(b.getCreatedCFDAccounts(), r.DataTypes.DataTypes.Text),
                                    AvailableAccounts: r.DataConversion.JSNodeParamConverter.to(b.getAvailableCFDAccounts(), r.DataTypes.DataTypes.Text),
                                    CFDConfig: r.DataConversion.JSNodeParamConverter.to(l.value.cFDAccountsOut, r.DataTypes.DataTypes.Text),
                                    ModifiedData: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(u) {
                                    var _ = new(n.constructor.getVariableGroupType("tradershub.CFDFlows.TradingSpecification.OnReady$modifyDataJSResult"));
                                    return _.modifiedDataOut = r.DataConversion.JSNodeParamConverter.from(u.ModifiedData, r.DataTypes.DataTypes.Text), _
                                }, {}, {})
                            } finally {
                                t && t.end()
                            }
                        }, 1), o.value.dataOut = r.JSONUtils.deserializeFromJSON(h.value.modifiedDataOut, f, !1), a.variables.tradingSpecificationVar = o.value.dataOut) : (m.value.dataOut = r.JSONUtils.deserializeFromJSON(l.value.cFDAccountsOut, f, !1), a.variables.tradingSpecificationVar = m.value.dataOut)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _headerOnClick$Action() {
            return this.hasOwnProperty("__headerOnClick$Action") || (this.__headerOnClick$Action = function(e) {
                var a = this.model,
                    n = this.controller,
                    d = this.idService;
                return r.Logger.startActiveSpan("HeaderOnClick", function(i) {
                    i && (i.setAttribute("code.function", "HeaderOnClick"), i.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("HeaderOnClick"), e = n.callContext(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "cfds", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Fade), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(e) {
            this.__headerOnClick$Action = e
        }
        onReady$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(n) {
                n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                } finally {
                    n && n.end()
                }
            }, 0)
        }
        headerOnClick$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("HeaderOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "HeaderOnClick"), n.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._headerOnClick$Action, e)
                } finally {
                    n && n.end()
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
                var a = this.controller,
                    n = this.model,
                    d = this.idService;
                return a.onReady$Action(e)
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
                return T.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    c(y, "ControllerInner");
    let s = y;
    C = s, C.registerVariableGroupType("tradershub.CFDFlows.TradingSpecification.OnReady$modifyDataJSResult", [{
        name: "ModifiedData",
        attrName: "modifiedDataOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, L = new r.Controller.ControllerFactory(C, E);
export {
    L as a
};