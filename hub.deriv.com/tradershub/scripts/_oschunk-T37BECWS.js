import {
    a as v
} from "./_oschunk-CHDRSEFP.js";
import {
    a as b
} from "./_oschunk-Y45M2O2K.js";
import {
    a as D,
    d as g
} from "./_oschunk-27GDEXUT.js";
import {
    Ja as A
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as m
} from "./_oschunk-NTQBNJ73.js";
import {
    c as u
} from "./_oschunk-DVBKI63I.js";
var F = {};

function h(d, l, O, t) {
    let o = JSON.parse(d.CreatedCFDAccounts),
        f = JSON.parse(d.CFDAccounts).map(n => {
            let i = n.CFDAccounts,
                s = o.some(a => a.identifier === i.ProductIdentifier);
            return {
                Id: i.Id,
                Label: i.Label,
                Icon: i.Icon,
                Description: i.Description,
                ProductIdentifier: i.ProductIdentifier,
                Spreads: i.Spreads,
                Commission: i.Commission,
                MinimumDeposit: i.MinimumDeposit,
                AssetClasses: i.AssetClasses,
                isAdded: s
            }
        }).sort((n, i) => n.isAdded - i.isAdded);
    d.ModifiedData = JSON.stringify(f)
}
u(h, "default");
var r = m; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(t, o, e) {
            super(t, o, e, F);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getCFDAccounts$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getCFDAccounts$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !1
        }
        get getCFDAccounts$AggrRefresh() {
            return this.hasOwnProperty("_getCFDAccounts$AggrRefresh") || (this._getCFDAccounts$AggrRefresh = function() {
                var t = function(o, e, s) {
                    var n = this.model,
                        i = this.controller,
                        s = i.callContext(s);
                    return i.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetCFDAccounts", "screenservices/tradershub/CFDFlows/TradingSpecification/ScreenDataSetGetCFDAccounts", "i1AITAe1GDlGnVTWZhXZHw", o, e, function(a) {
                        n.variables.getCFDAccountsAggr.dataFetchStatusAttr = a
                    }, function(a) {
                        n.variables.getCFDAccountsAggr.replaceWith(r.DataConversion.ServerDataConverter.from(a, n.variables.getCFDAccountsAggr.constructor))
                    }, void 0, void 0, void 0, s, void 0, !0).then(function() {
                        i._getCFDAccountsOnAfterFetch$Action(i.callContext(s))
                    })
                }.bind(this);
                return r.Logger.startActiveSpan("GetCFDAccounts", function(o) {
                    return o && (o.setAttribute("code.function", "GetCFDAccounts"), o.setAttribute("outsystems.function.key", "74fd8eb2-a336-4c19-b022-0d8ed4862c30"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), r.Flow.tryFinally(function() {
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
                    e = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("GetCFDAccountsOnAfterFetch", function(n) {
                    n && (n.setAttribute("code.function", "GetCFDAccountsOnAfterFetch"), n.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        e.ensureControllerAlive("GetCFDAccountsOnAfterFetch"), t = e.callContext(t);
                        var i = new r.DataTypes.VariableHolder,
                            s = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            a = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        s.value.jSONOut = r.JSONUtils.serializeToJSON(o.variables.getCFDAccountsAggr.listOut, !1, !1), i.value = r.Logger.startActiveSpan("ModifyData", function(c) {
                            c && (c.setAttribute("code.function", "ModifyData"), c.setAttribute("outsystems.function.key", "1f223cdd-5938-43ae-a8ba-55bd8e578506"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return e.safeExecuteJSNode(h, "ModifyData", "GetCFDAccountsOnAfterFetch", {
                                    CreatedCFDAccounts: r.DataConversion.JSNodeParamConverter.to(D.getCreatedCFDAccounts(), r.DataTypes.DataTypes.Text),
                                    CFDAccounts: r.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    ModifiedData: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(_) {
                                    var y = new(e.constructor.getVariableGroupType("tradershub.CFDFlows.TradingSpecification.GetCFDAccountsOnAfterFetch$modifyDataJSResult"));
                                    return y.modifiedDataOut = r.DataConversion.JSNodeParamConverter.from(_.ModifiedData, r.DataTypes.DataTypes.Text), y
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), a.value.dataOut = r.JSONUtils.deserializeFromJSON(i.value.modifiedDataOut, A, !1), o.variables.tradingSpecificationVar = a.value.dataOut
                    } finally {
                        n && n.end()
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
                    e = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("HeaderOnClick", function(n) {
                    n && (n.setAttribute("code.function", "HeaderOnClick"), n.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), n.setAttribute("outsystems.function.owner.name", "tradershub"), n.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("HeaderOnClick"), t = e.callContext(t), r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "cfds/:ProductIdentifier?", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Fade), t, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(t) {
            this.__headerOnClick$Action = t
        }
        getCFDAccountsOnAfterFetch$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("GetCFDAccountsOnAfterFetch__proxy", function(e) {
                e && (e.setAttribute("code.function", "GetCFDAccountsOnAfterFetch"), e.setAttribute("outsystems.function.key", "24ce4c99-a322-4421-aed8-6e06a9d7608a"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._getCFDAccountsOnAfterFetch$Action, t)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        headerOnClick$Action(t) {
            var o = this.controller;
            return r.Logger.startActiveSpan("HeaderOnClick__proxy", function(e) {
                e && (e.setAttribute("code.function", "HeaderOnClick"), e.setAttribute("outsystems.function.key", "4deedc55-e208-48fb-8d93-597144211d68"), e.setAttribute("outsystems.function.owner.name", "tradershub"), e.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._headerOnClick$Action, t)
                } finally {
                    e && e.end()
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
                return v.default.handleError(t, this.callContext())
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
    u(l, "ControllerInner");
    let d = l;
    C = d, C.registerVariableGroupType("tradershub.CFDFlows.TradingSpecification.GetCFDAccountsOnAfterFetch$modifyDataJSResult", [{
        name: "ModifiedData",
        attrName: "modifiedDataOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, G = new r.Controller.ControllerFactory(C, b);
export {
    G as a
};