import {
    a as _
} from "./_oschunk-J62WATEC.js";
import {
    a as v
} from "./_oschunk-LHY3WMNC.js";
import {
    a as D,
    d as g
} from "./_oschunk-XMOR6XCC.js";
import {
    La as C
} from "./_oschunk-44PT7RP7.js";
import {
    ia as F
} from "./_oschunk-NTQBNJ73.js";
import {
    c as A
} from "./_oschunk-DVBKI63I.js";
var O = {};

function y(u, h, S, t) {
    let o = JSON.parse(u.CreatedCFDAccounts),
        i = JSON.parse(u.AvailableAccounts),
        f = JSON.parse(u.CFDConfig),
        c = f.filter(n => {
            let r = n.CFDAccounts;
            return i.some(a => a.identifier === r.ProductIdentifier)
        }).map(n => {
            let r = n.CFDAccounts,
                a = o.some(m => m.identifier === r.ProductIdentifier);
            return {
                Id: r.Id,
                Label: r.Label,
                Icon: r.Icon,
                Description: r.Description,
                ProductIdentifier: r.ProductIdentifier,
                Spreads: r.Spreads,
                Commission: r.Commission,
                MinimumDeposit: r.MinimumDeposit,
                AssetClasses: r.AssetClasses,
                isAdded: a
            }
        }),
        d = o.map(n => {
            let r = f.find(m => m.CFDAccounts.ProductIdentifier === n.identifier),
                a = r ? r.CFDAccounts : {};
            return {
                Id: a.Id,
                Label: n.label,
                Icon: n.icon,
                Description: n.description,
                ProductIdentifier: n.identifier,
                Spreads: a.Spreads,
                Commission: a.Commission,
                MinimumDeposit: a.MinimumDeposit,
                AssetClasses: a.AssetClasses,
                isAdded: !0
            }
        }).filter(n => !c.some(r => r.ProductIdentifier === n.ProductIdentifier)),
        l = [...c, ...d].sort((n, r) => n.isAdded - r.isAdded);
    u.ModifiedData = JSON.stringify(l)
}
A(y, "default");
var e = F; {
    let h = class h extends e.Controller.BaseViewController {
        constructor(t, o, i) {
            super(t, o, i, O);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCFDAccounts$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCFDAccounts$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCFDAccounts$AggrRefresh() {
            return this.hasOwnProperty("_getCFDAccounts$AggrRefresh") || (this._getCFDAccounts$AggrRefresh = function() {
                var t = function(o, i, d) {
                    var s = this.model,
                        c = this.controller,
                        d = c.callContext(d);
                    return c.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDAccounts", "screenservices/tradershub/CFDFlows/TradingSpecification/ScreenDataSetGetCFDAccounts", "i1AITAe1GDlGnVTWZhXZHw", o, i, function(l) {
                        s.variables.getCFDAccountsAggr.dataFetchStatusAttr = l
                    }, function(l) {
                        s.variables.getCFDAccountsAggr.replaceWith(e.DataConversion.ServerDataConverter.from(l, s.variables.getCFDAccountsAggr.constructor))
                    }, void 0, void 0, void 0, d, void 0, !0).then(function() {
                        c._getCFDAccountsOnAfterFetch$Action(c.callContext(d))
                    })
                }.bind(this);
                return e.Logger.startActiveSpan("GetCFDAccounts", function(o) {
                    return o && (o.setAttribute("code.function", "GetCFDAccounts"), o.setAttribute("outsystems.function.key", "38f5d794-8a7e-4ffd-80a8-bfba57bad35a"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), e.Flow.tryFinally(function() {
                        return t()
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getCFDAccounts$AggrRefresh
        }
        set getCFDAccounts$AggrRefresh(t) {
            this._getCFDAccounts$AggrRefresh = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getCFDAccounts$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _getCFDAccountsOnAfterFetch$Action() {
            return this.hasOwnProperty("__getCFDAccountsOnAfterFetch$Action") || (this.__getCFDAccountsOnAfterFetch$Action = function(t) {
                var o = this.model,
                    i = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("GetCFDAccountsOnAfterFetch", function(s) {
                    s && (s.setAttribute("code.function", "GetCFDAccountsOnAfterFetch"), s.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("GetCFDAccountsOnAfterFetch"), t = i.callContext(t);
                        var c = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            l = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        D.getAuthToken() !== e.BuiltinFunctions.nullTextIdentifier() ? (d.value.jSONOut = e.JSONUtils.serializeToJSON(o.variables.getCFDAccountsAggr.listOut, !1, !1), c.value = e.Logger.startActiveSpan("ModifyData", function(n) {
                            n && (n.setAttribute("code.function", "ModifyData"), n.setAttribute("outsystems.function.key", "1f223cdd-5938-43ae-a8ba-55bd8e578506"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(y, "ModifyData", "GetCFDAccountsOnAfterFetch", {
                                    CreatedCFDAccounts: e.DataConversion.JSNodeParamConverter.to(D.getCreatedCFDAccounts(), e.DataTypes.DataTypes.Text),
                                    AvailableAccounts: e.DataConversion.JSNodeParamConverter.to(D.getAvailableCFDAccounts(), e.DataTypes.DataTypes.Text),
                                    CFDConfig: e.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    ModifiedData: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(r) {
                                    var a = new(i.constructor.getVariableGroupType("tradershub.CFDFlows.TradingSpecification.GetCFDAccountsOnAfterFetch$modifyDataJSResult"));
                                    return a.modifiedDataOut = e.DataConversion.JSNodeParamConverter.from(r.ModifiedData, e.DataTypes.DataTypes.Text), a
                                }, {}, {})
                            } finally {
                                n && n.end()
                            }
                        }, 1), l.value.dataOut = e.JSONUtils.deserializeFromJSON(c.value.modifiedDataOut, C, !1), o.variables.tradingSpecificationVar = l.value.dataOut) : o.variables.tradingSpecificationVar = e.DataConversion.JSConversions.typeConvertRecordList(o.variables.getCFDAccountsAggr.listOut, new C, function(n, r) {
                            return r.labelAttr = n.cFDAccountsAttr.labelAttr, r.iconAttr = n.cFDAccountsAttr.iconAttr, r.descriptionAttr = n.cFDAccountsAttr.descriptionAttr, r.productIdentifierAttr = n.cFDAccountsAttr.productIdentifierAttr, r.spreadsAttr = n.cFDAccountsAttr.spreadsAttr, r.commissionAttr = n.cFDAccountsAttr.commissionAttr, r.minimumDepositAttr = n.cFDAccountsAttr.minimumDepositAttr, r.assetClassesAttr = n.cFDAccountsAttr.assetClassesAttr, r.isAddedAttr = n.cFDAccountsAttr.isAddedAttr, r
                        })
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__getCFDAccountsOnAfterFetch$Action
        }
        set _getCFDAccountsOnAfterFetch$Action(t) {
            this.__getCFDAccountsOnAfterFetch$Action = t
        }
        get _headerOnClick$Action() {
            return this.hasOwnProperty("__headerOnClick$Action") || (this.__headerOnClick$Action = function(t) {
                var o = this.model,
                    i = this.controller,
                    f = this.idService;
                return e.Logger.startActiveSpan("HeaderOnClick", function(s) {
                    s && (s.setAttribute("code.function", "HeaderOnClick"), s.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return i.ensureControllerAlive("HeaderOnClick"), t = i.callContext(t), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Fade), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(t) {
            this.__headerOnClick$Action = t
        }
        getCFDAccountsOnAfterFetch$Action(t) {
            var o = this.controller;
            return e.Logger.startActiveSpan("GetCFDAccountsOnAfterFetch__proxy", function(i) {
                i && (i.setAttribute("code.function", "GetCFDAccountsOnAfterFetch"), i.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._getCFDAccountsOnAfterFetch$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        headerOnClick$Action(t) {
            var o = this.controller;
            return e.Logger.startActiveSpan("HeaderOnClick__proxy", function(i) {
                i && (i.setAttribute("code.function", "HeaderOnClick"), i.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._headerOnClick$Action, t)
                } finally {
                    i && i.end()
                }
            }, 0)
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
                return _.default.handleError(t, this.callContext())
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return g.defaultTimeout
        }
    };
    A(h, "ControllerInner");
    let u = h;
    b = u, b.registerVariableGroupType("tradershub.CFDFlows.TradingSpecification.GetCFDAccountsOnAfterFetch$modifyDataJSResult", [{
        name: "ModifiedData",
        attrName: "modifiedDataOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: A(function() {
            return ""
        }, "defaultValue")
    }])
}
var b, L = new e.Controller.ControllerFactory(b, v);
export {
    L as a
};