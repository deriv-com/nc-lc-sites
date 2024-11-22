import {
    a as p
} from "./_oschunk-UK73WSZT.js";
import {
    a as _
} from "./_oschunk-Y45M2O2K.js";
import {
    d as A
} from "./_oschunk-27GDEXUT.js";
import {
    ia as b
} from "./_oschunk-NTQBNJ73.js";
import {
    c as d
} from "./_oschunk-DVBKI63I.js";
var R = {};

function h(i, l, D, t) {
    let n = i.Address;

    function r(o, s) {
        if (!o || s < 1 || o.length <= s) return o;
        if (s == 1) return o.substring(0, 1) + "...";
        var u = Math.ceil(o.length / 2),
            c = o.length - s,
            a = Math.ceil(c / 2),
            y = c - a;
        return o.substring(0, u - a) + "..." + o.substring(u + y)
    }
    d(r, "smartTrim"), i.FormattedAddress = r(n, 8)
}
d(h, "default");

function v(i, l, D, t) {
    let n = i.CryptoAmount,
        r = i.TransactionFee;
    i.FinalAmount = parseFloat(n - r).toFixed(8)
}
d(v, "default");
var e = b; {
    let l = class l extends e.Controller.BaseViewController {
        constructor(t, n, r) {
            super(t, n, r, R);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var n = this.model,
                    r = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(s) {
                    s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "db958149-d4fb-4d3b-b38f-93baf89a2b58"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var u = new e.DataTypes.VariableHolder,
                            c = new e.DataTypes.VariableHolder;
                        n.variables.isLoadingVar = !0, u.value = e.Logger.startActiveSpan("FormatCryptoDestination", function(a) {
                            a && (a.setAttribute("code.function", "FormatCryptoDestination"), a.setAttribute("outsystems.function.key", "0a2dde07-071a-4ae9-958d-a1e9a942b68b"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(h, "FormatCryptoDestination", "OnReady", {
                                    Address: e.DataConversion.JSNodeParamConverter.to(n.variables.cryptoAddressIn, e.DataTypes.DataTypes.Text),
                                    FormattedAddress: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(y) {
                                    var f = new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsReceiptWithdrawal.OnReady$formatCryptoDestinationJSResult"));
                                    return f.formattedAddressOut = e.DataConversion.JSNodeParamConverter.from(y.FormattedAddress, e.DataTypes.DataTypes.Text), f
                                }, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), n.variables.formattedAddressVar = u.value.formattedAddressOut, n.variables.isPriorityIn && (c.value = e.Logger.startActiveSpan("CalculateAmount", function(a) {
                            a && (a.setAttribute("code.function", "CalculateAmount"), a.setAttribute("outsystems.function.key", "7e33c71a-3a9d-4379-9bfb-1b675316fec8"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(v, "CalculateAmount", "OnReady", {
                                    TransactionFee: e.DataConversion.JSNodeParamConverter.to(n.variables.transactionFeeIn, e.DataTypes.DataTypes.Decimal),
                                    CryptoAmount: e.DataConversion.JSNodeParamConverter.to(n.variables.cryptoAmountIn, e.DataTypes.DataTypes.Decimal),
                                    FinalAmount: e.DataConversion.JSNodeParamConverter.to(e.DataTypes.Decimal.defaultValue, e.DataTypes.DataTypes.Decimal)
                                }, function(y) {
                                    var f = new(r.constructor.getVariableGroupType("tradershub.WalletFlows.WalletsReceiptWithdrawal.OnReady$calculateAmountJSResult"));
                                    return f.finalAmountOut = e.DataConversion.JSNodeParamConverter.from(y.FinalAmount, e.DataTypes.DataTypes.Decimal), f
                                }, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), n.variables.amountAfterFeesVar = c.value.finalAmountOut), n.variables.isLoadingVar = !1
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        onReady$Action(t) {
            var n = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "db958149-d4fb-4d3b-b38f-93baf89a2b58"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, t)
                } finally {
                    r && r.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var n = this.controller,
                    r = this.model,
                    o = this.idService;
                return n.onReady$Action(t)
            }), this._onReadyEventHandler
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
                return p.default.handleError(t, this.callContext())
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
    d(l, "ControllerInner");
    let i = l;
    m = i, m.registerVariableGroupType("tradershub.WalletFlows.WalletsReceiptWithdrawal.OnReady$formatCryptoDestinationJSResult", [{
        name: "FormattedAddress",
        attrName: "formattedAddressOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), m.registerVariableGroupType("tradershub.WalletFlows.WalletsReceiptWithdrawal.OnReady$calculateAmountJSResult", [{
        name: "FinalAmount",
        attrName: "finalAmountOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Decimal,
        defaultValue: d(function() {
            return e.DataTypes.Decimal.defaultValue
        }, "defaultValue")
    }])
}
var m, x = new e.Controller.ControllerFactory(m, _);
export {
    x as a
};