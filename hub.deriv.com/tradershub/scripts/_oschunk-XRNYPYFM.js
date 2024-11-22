import {
    a as L
} from "./_oschunk-IWEUGVST.js";
import {
    a as q
} from "./_oschunk-DDSAAS3R.js";
import "./_oschunk-3EM3HOK7.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-KE67QEAX.js";
import {
    a as de
} from "./_oschunk-2TBSMBLB.js";
import {
    a as ue
} from "./_oschunk-ENP264B2.js";
import "./_oschunk-UK73WSZT.js";
import "./_oschunk-XGQAZLYY.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as R
} from "./_oschunk-XFSPMJPV.js";
import {
    a as j
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-MZYHHGAU.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as Q
} from "./_oschunk-2FL724PB.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as D,
    c as ce,
    d as z,
    h as o,
    j as d,
    k as E,
    l as I,
    r as y,
    s as G,
    t as le,
    v as U,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import {
    a as se
} from "./_oschunk-Y45M2O2K.js";
import {
    a as oe,
    g as B,
    i as T
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    d as ne
} from "./_oschunk-27GDEXUT.js";
import {
    a as $
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as w,
    kf as F,
    zb as N
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as x
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as ae
} from "./_oschunk-DVBKI63I.js";
var i = ae(oe());
var h = ae(oe());
var A = x,
    X = class X extends A.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AccountListByKey", "accountListByKeyVar", "AccountListByKey", !0, !1, A.DataTypes.DataTypes.RecordList, function() {
                return A.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("AccountList", "accountListIn", "AccountList", !0, !1, A.DataTypes.DataTypes.RecordList, function() {
                return A.DataTypes.ImmutableBase.getData(new F)
            }, !1, F), this.attr("_accountListInDataFetchStatus", "_accountListInDataFetchStatus", "_accountListInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AccountKey", "accountKeyIn", "AccountKey", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(A.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(X, "VariablesRecord");
var k = X;
k.init();
var Y = class Y extends A.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(Y, "WidgetsRecord");
var J = Y,
    Z = class Z extends A.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return J
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "AccountList" in e && (this.variables.accountListIn = e.AccountList, "_accountListInDataFetchStatus" in e && (this.variables._accountListInDataFetchStatus = e._accountListInDataFetchStatus)), "AccountKey" in e && (this.variables.accountKeyIn = e.AccountKey, "_accountKeyInDataFetchStatus" in e && (this.variables._accountKeyInDataFetchStatus = e._accountKeyInDataFetchStatus))
        }
    };
s(Z, "Model");
var K = Z;
K._hasValidationWidgetsValue = void 0;
var fe = new A.Model.ModelFactory(K);
var me = {};
var P = x; {
    let e = class e extends P.Controller.BaseViewController {
        constructor(t, u, r) {
            super(t, u, r, me);
            var v = this.controller;
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
                var u = this.model,
                    r = this.controller,
                    v = this.idService;
                return P.Logger.startActiveSpan("OnReady", function(m) {
                    m && (m.setAttribute("code.function", "OnReady"), m.setAttribute("outsystems.function.key", "3da149ed-a4c5-4a2a-a67e-9a2a8f9eeb13"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var _ = new P.DataTypes.VariableHolder;
                        _.value = P.SystemActions.listFilter(u.variables.accountListIn, function(n) {
                            return u.variables.accountKeyIn === n.accountCategoryAttr
                        }, t), u.variables.accountListByKeyVar = _.value.filteredListOut
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickAccount$Action() {
            return this.hasOwnProperty("__onClickAccount$Action") || (this.__onClickAccount$Action = function(t, u) {
                var r = this.model,
                    v = this.controller,
                    m = this.idService;
                return P.Logger.startActiveSpan("OnClickAccount", function(_) {
                    return _ && (_.setAttribute("code.function", "OnClickAccount"), _.setAttribute("outsystems.function.key", "a52ee1b6-ed65-4d60-9316-d4d1a677bd65"), _.setAttribute("outsystems.function.owner.name", "tradershub"), _.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), _.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        v.ensureControllerAlive("OnClickAccount"), u = v.callContext(u);
                        var n = new P.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars")));
                        return n.value.accountDataInLocal = t.clone(), P.Flow.executeAsyncFlow(function() {
                            return v.onClickAction$Action(n.value.accountDataInLocal, u)
                        })
                    }, function() {
                        _ && _.end()
                    })
                }, 1)
            }), this.__onClickAccount$Action
        }
        set _onClickAccount$Action(t) {
            this.__onClickAccount$Action = t
        }
        onReady$Action(t) {
            var u = this.controller;
            return P.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "3da149ed-a4c5-4a2a-a67e-9a2a8f9eeb13"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return u.safeExecuteClientAction(u._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickAccount$Action(t, u) {
            var r = this.controller;
            return P.Logger.startActiveSpan("OnClickAccount__proxy", function(v) {
                return v && (v.setAttribute("code.function", "OnClickAccount"), v.setAttribute("outsystems.function.key", "a52ee1b6-ed65-4d60-9316-d4d1a677bd65"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickAccount$Action, u, t)
                }, function() {
                    v && v.end()
                })
            }, 0)
        }
        get onClickAction$Action() {
            return this.hasOwnProperty("_onClickAction$Action") || (this._onClickAction$Action = function() {
                return Promise.resolve()
            }), this._onClickAction$Action
        }
        set onClickAction$Action(t) {
            this._onClickAction$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var u = this.controller,
                    r = this.model,
                    v = this.idService;
                return u.onReady$Action(t)
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return ne.defaultTimeout
        }
    };
    s(e, "ControllerInner");
    let H = e;
    ee = H, ee.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars", [{
        name: "AccountData",
        attrName: "accountDataInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new N
        }, "defaultValue"),
        complexType: N
    }])
}
var ee, ge = new P.Controller.ControllerFactory(ee, se);
var te = T.PlaceholderContent,
    _e = T.IteratorPlaceholderContent,
    O = class O extends B.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletsTransferList"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransferList",
                functionKey: "53e39b97-6d34-4fec-8a04-41e7157a58d5",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.WalletBlocks.WalletsTransferList.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return fe
        }
        get controllerFactory() {
            return ge
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                l = this.controller,
                t = this.idService,
                u = l.validationService,
                r = this.widgetsRecordProvider,
                v = l.callContext(),
                m = O.ifWidget,
                _ = O.textWidget,
                n = O.asPrimitiveValue,
                pe = O.getTranslation,
                f = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(E, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: e.variables.accountListByKeyVar,
                style: "display-flex flex-direction-column gap-s margin-top-s",
                tag: "div",
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new _e(function(c, g) {
                        return [h.createElement(I, {
                            onClick: s(function() {
                                return Promise.resolve().then(function() {
                                    var b = g.clone();
                                    return l.onClickAccount$Action(e.variables.accountListByKeyVar.getCurrent(g.iterationContext), l.callContext(b))
                                })
                            }, "onClick"),
                            style: "walets-list-item display-flex flex-direction-column gap-s gap-s",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: c,
                                name: "ListItem"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                leftActions: te.Empty,
                                content: new te(function() {
                                    return [h.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: c,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, h.createElement(y, {
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: 1,
                                        url: e.variables.accountListByKeyVar.getCurrent(g.iterationContext).iconAttr,
                                        _idProps: {
                                            service: c,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), h.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex-1",
                                        visible: !0,
                                        _idProps: {
                                            service: c,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, h.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: c,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }, h.createElement(d, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "text-neutral-8",
                                        value: e.variables.accountListByKeyVar.getCurrent(g.iterationContext).nameAttr,
                                        _idProps: {
                                            service: c,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    })), h.createElement(d, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: e.variables.accountListByKeyVar.getCurrent(g.iterationContext).formattedBalanceAttr,
                                        _idProps: {
                                            service: c,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                rightActions: te.Empty
                            },
                            _dependencies: [n(e.variables.accountListByKeyVar.getCurrent(g.iterationContext).formattedBalanceAttr), n(e.variables.accountListByKeyVar.getCurrent(g.iterationContext).nameAttr), n(e.variables.accountListByKeyVar.getCurrent(g.iterationContext).iconAttr)]
                        })]
                    }, v, t, "1")
                },
                _dependencies: []
            }))
        }
    };
s(O, "View");
var re = O,
    W = re;
var a = x,
    V = T.PlaceholderContent,
    M = T.IteratorPlaceholderContent,
    S = class S extends B.BaseWebScreen {
        static get displayName() {
            return "WalletFlows.WalletsTransfer"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletsTransfer",
                functionKey: "1f207f70-70e7-4438-9108-9a8e43becd94",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.WalletFlows.WalletsTransfer.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [j, q, R, W, L, Q]
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return ue
        }
        get title() {
            let e = this.model,
                l = this.controller,
                t = this.idService,
                u = l.validationService,
                r = l.callContext(),
                v = S.asPrimitiveValue,
                m = S.getTranslation,
                _ = this;
            return "Transfer"
        }
        internalRender() {
            let e = this.model,
                l = this.controller,
                t = this.idService,
                u = l.validationService,
                r = this.widgetsRecordProvider,
                v = l.callContext(),
                m = S.ifWidget,
                _ = S.textWidget,
                n = S.asPrimitiveValue,
                pe = S.getTranslation,
                f = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(j, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(c) {
                        l.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new V(function() {
                        return [i.createElement(q, {
                            getOwnerSpan: s(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                HideWalletHeader: !0,
                                PageTitle: "Transfer"
                            },
                            events: {
                                _handleError: s(function(c) {
                                    l.handleError(c)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: u
                            },
                            _idProps: {
                                service: t,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new V(function() {
                                    return [m(e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                        return [m(e.variables.isTransferSuccessVar, !1, this, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "SuccessMainContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(y, {
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.TransferSuccessfulIcon.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "3"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(p, {
                                                style: "font-bold font-size-h6 margin-y-l",
                                                text: ["Transfer successful"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "4"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "5"
                                                },
                                                _widgetRecordProvider: r
                                            }, m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "border-radius: 8px;"
                                                        },
                                                        style: "full-width background-neutral-1 padding-base margin-bottom-m",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferDetailsForCurrencySwitcherEqualsWithWallet"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFromDetails2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["From"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "8"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "FromTransactionDetailsWrapper2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(y, {
                                                        gridProperties: {
                                                            width: "16px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferFromVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.variables.transferFromVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), i.createElement(d, {
                                                        style: "text-red",
                                                        value: e.getCachedValue(t.getId("DabR1cMrVkmR6sQnE4DwIg.Value"), function() {
                                                            return "- " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), i.createElement(R, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: w.space.base
                                                        },
                                                        events: {
                                                            _handleError: s(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "14",
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferToDetails2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["To"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "16"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "ToTransactionDetailsWrapper2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(y, {
                                                        gridProperties: {
                                                            width: "16px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferToVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.variables.transferToVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), i.createElement(d, {
                                                        style: "text-green",
                                                        value: e.getCachedValue(t.getId("0TRTvUV_sk6Nk5CmilensA.Value"), function() {
                                                            return "+ " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.transferFromConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "21"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), i.createElement(R, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: w.space.base
                                                        },
                                                        events: {
                                                            _handleError: s(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "22",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFees"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8",
                                                        text: ["Transfer fee (2%)"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.getCachedValue(t.getId("ZkkLCbTnUkKO5uSEiKlM8A.Value"), function() {
                                                            return (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.calculatedFeesVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "25"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })))]
                                                }, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "border-radius: 8px;"
                                                        },
                                                        style: "full-width background-neutral-1 padding-base margin-bottom-m",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferDetailsForCurrencySwitcherNotEqualsWithWal"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFromDetails3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["From"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "28"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "FromTransactionDetailsWrapper3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "30"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(y, {
                                                        gridProperties: {
                                                            width: "16px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferFromVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "31"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.variables.transferFromVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "32"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), i.createElement(d, {
                                                        style: "text-red",
                                                        value: e.getCachedValue(t.getId("8mwnYQ8uOEC74H408hwZtA.Value"), function() {
                                                            return "- " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.convertedTransferAmountVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "33"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), i.createElement(R, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: w.space.base
                                                        },
                                                        events: {
                                                            _handleError: s(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "34",
                                                            alias: "5"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferToDetails3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["To"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "36"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "ToTransactionDetailsWrapper3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "38"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(y, {
                                                        gridProperties: {
                                                            width: "16px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferToVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "39"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.variables.transferToVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "40"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), i.createElement(d, {
                                                        style: "text-green",
                                                        value: e.getCachedValue(t.getId("4sU3luFOQ0W8O5gdJOmKyg.Value"), function() {
                                                            return "+ " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.transferToConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "41"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), i.createElement(R, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: w.space.base
                                                        },
                                                        events: {
                                                            _handleError: s(function(c) {
                                                                l.handleError(c)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "42",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFees2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(p, {
                                                        style: "text-neutral-8",
                                                        text: ["Transfer fee (2%)"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.getCachedValue(t.getId("V8_9H9zGd0ayb6QOXOkU4w.Value"), function() {
                                                            return (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.isCrpytoAttr
                                                        }, function() {
                                                            return e.variables.convertedCalculatedFeesVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "45"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })))]
                                                })]
                                            }, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "border-radius: 8px;"
                                                    },
                                                    style: "full-width background-neutral-1 padding-base margin-bottom-m",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TransferDetailsForNoCurrencySwitcher"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TransferFromDetails"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    style: "text-neutral-8 margin-bottom-s",
                                                    text: ["From"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "48"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "FromTransactionDetailsWrapper"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "50"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(y, {
                                                    gridProperties: {
                                                        width: "16px"
                                                    },
                                                    style: "margin-right-xs",
                                                    type: 1,
                                                    url: e.variables.transferFromVar.iconAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "51"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(d, {
                                                    gridProperties: {
                                                        classes: "ThemeGrid_MarginGutter"
                                                    },
                                                    value: e.variables.transferFromVar.nameAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "52"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), i.createElement(d, {
                                                    style: "text-red",
                                                    value: e.getCachedValue(t.getId("olvWPbWiMEOmNC8FgHc9Qg.Value"), function() {
                                                        return "- " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.activeWalletVar.isCrpytoAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.transferFromVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "53"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))), i.createElement(R, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: w.space.base
                                                    },
                                                    events: {
                                                        _handleError: s(function(c) {
                                                            l.handleError(c)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "54",
                                                        alias: "7"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }), i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TransferToDetails"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    style: "text-neutral-8 margin-bottom-s",
                                                    text: ["To"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "56"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ToTransactionDetailsWrapper"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "58"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(y, {
                                                    gridProperties: {
                                                        width: "16px"
                                                    },
                                                    style: "margin-right-xs",
                                                    type: 1,
                                                    url: e.variables.transferToVar.iconAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "59"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(d, {
                                                    gridProperties: {
                                                        classes: "ThemeGrid_MarginGutter"
                                                    },
                                                    value: e.variables.transferToVar.nameAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "60"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), i.createElement(d, {
                                                    style: "text-green",
                                                    value: e.getCachedValue(t.getId("z9pa+KGFPEKooaw0aiQiQA.Value"), function() {
                                                        return "+ " + (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.transferToVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.activeWalletVar.isCrpytoAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.transferToVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "61"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))))]
                                            })), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallets-transfer-success-footer",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferSuccessButton"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(D, {
                                                enabled: !0,
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                isDefault: !1,
                                                onClick: s(function() {
                                                    var c = v.clone();
                                                    l.makeNewTransferOnClick$Action(e.variables.walletsAccountListIn, l.callContext(c))
                                                }, "onClick"),
                                                style: "btn",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "63"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Make new Transfer")))]
                                        }, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column gap-m",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "MainContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(p, {
                                                style: "font-bold font-size-h6",
                                                text: ["Transfer Amount"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "65"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferListContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(I, {
                                                onClick: s(function() {
                                                    var c = v.clone();
                                                    l.fromListItemOnClick$Action(l.callContext(c))
                                                }, "onClick"),
                                                style: "list-item wallets-selected-item margin-bottom-s",
                                                triggerActionOnFullSwipeLeft: !0,
                                                triggerActionOnFullSwipeRight: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "FromListItem"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    leftActions: V.Empty,
                                                    content: new V(function() {
                                                        return [i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            gridProperties: {
                                                                classes: "OSInline"
                                                            },
                                                            style: "display-flex align-items-center gap-base",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "68"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "wallets-selected-item__icon",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "69"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(y, {
                                                            gridProperties: {
                                                                width: "16px"
                                                            },
                                                            type: 1,
                                                            url: e.variables.transferFromVar.iconAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "70"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "flex-1",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "71"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "72"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "73"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(p, {
                                                            style: "font-bold",
                                                            text: ["From"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "74"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: " " + e.variables.transferFromVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "75"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(d, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            style: "text-neutral-8",
                                                            value: e.variables.transferFromVar.formattedBalanceAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "76"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))), i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "77"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(y, {
                                                            image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "78"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })))]
                                                    }),
                                                    rightActions: V.Empty
                                                }
                                            }), m(e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                                return [i.createElement(R, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: w.space.small,
                                                        IsVertical: !0
                                                    },
                                                    events: {
                                                        _handleError: s(function(c) {
                                                            l.handleError(c)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "79",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }), i.createElement(I, {
                                                    onClick: s(function() {
                                                        var c = v.clone();
                                                        l.toListItemOnClick$Action(l.callContext(c))
                                                    }, "onClick"),
                                                    style: "list-item wallets-selected-item",
                                                    triggerActionOnFullSwipeLeft: !0,
                                                    triggerActionOnFullSwipeRight: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ToListItem"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        leftActions: V.Empty,
                                                        content: new V(function() {
                                                            return [i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                gridProperties: {
                                                                    classes: "OSInline"
                                                                },
                                                                style: "display-flex align-items-center gap-base",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "81"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "wallets-selected-item__icon",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "82"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(y, {
                                                                extendedProperties: {
                                                                    style: "height: 16px;"
                                                                },
                                                                type: 1,
                                                                url: e.variables.transferToVar.iconAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "83"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "flex-1",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "84"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "85"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "86"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(p, {
                                                                style: "font-bold",
                                                                text: ["To"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "87"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: " " + e.variables.transferToVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "88"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                style: "text-neutral-8",
                                                                value: e.variables.transferToVar.formattedBalanceAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "89"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "90"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(y, {
                                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "91"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })))]
                                                        }),
                                                        rightActions: V.Empty
                                                    }
                                                })]
                                            }, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column gap-m",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "92"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    style: "font-bold font-size-h6",
                                                    text: ["Transfer to"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "93"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ModalContent4"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(E, {
                                                    animateItems: !0,
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mode: 0,
                                                    source: e.variables.transferAccountKeyVar,
                                                    style: "display-flex flex-direction-column gap-base",
                                                    tag: "div",
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "95"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        content: new M(function(c, g) {
                                                            return [i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "96"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: [n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(g.iterationContext))]
                                                            }, i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 16px;"
                                                                },
                                                                value: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "97"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(W, {
                                                                getOwnerSpan: s(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: s(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    AccountList: e.variables.transferAccountListVar,
                                                                    AccountKey: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext)
                                                                },
                                                                events: {
                                                                    _handleError: s(function(b) {
                                                                        l.handleError(b)
                                                                    }, "_handleError"),
                                                                    onClickAction$Action: s(function(b) {
                                                                        var C = g.clone();
                                                                        l.onClickTransferToAccount$Action(b, l.callContext(C))
                                                                    }, "onClickAction$Action")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: c,
                                                                    uuid: "98",
                                                                    alias: "9"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }))]
                                                        }, v, t, "1")
                                                    },
                                                    _dependencies: [n(e.variables.transferAccountListVar)]
                                                })))]
                                            })), i.createElement(o, {
                                                align: 0,
                                                animate: !0,
                                                visible: e.getCachedValue(t.getId("TransferAmountInput.Visible"), function() {
                                                    return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                }, function() {
                                                    return e.variables.transferFromVar.iconAttr
                                                }, function() {
                                                    return e.variables.transferToVar.iconAttr
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferAmountInput"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(le, {
                                                gridProperties: {
                                                    classes: "OSFillParent"
                                                },
                                                style: "margin-bottom-s",
                                                _idProps: {
                                                    service: t,
                                                    uuid: "100"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Transfer amount", i.createElement(L, {
                                                getOwnerSpan: s(function() {
                                                    return f.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: s(function() {
                                                    return f.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    UseNumericInput: !0,
                                                    InputId: t.getId("InputTransferExchangeAmount"),
                                                    AlwaysShowDecimalDigits: !0,
                                                    DecimalDigits: e.getCachedValue(t.getId("GAzTdC1X3k6lcf3Lt5oU2g.DecimalDigits"), function() {
                                                        return a.BuiltinFunctions.integerToDecimal(e.variables.currencySwitcherVar === a.BuiltinFunctions.nullTextIdentifier() || e.variables.currencySwitcherVar === e.variables.transferFromVar.currencyAttr ? e.variables.transferFromVar.fractionalDigitsAttr : e.variables.transferToVar.fractionalDigitsAttr)
                                                    }, function() {
                                                        return e.variables.currencySwitcherVar
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.fractionalDigitsAttr
                                                    }),
                                                    DecimalSeparator: ".",
                                                    SuffixText: "",
                                                    PrefixText: "",
                                                    GroupSeparator: ""
                                                },
                                                events: {
                                                    _handleError: s(function(c) {
                                                        l.handleError(c)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: u
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "101",
                                                    alias: "10"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            })), m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex gap-s full-width align-items-flex-start",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "InputAmountContainer"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(G, {
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        "data-dirty": "False",
                                                        pattern: "[0-9]*",
                                                        "show-default-value": "True"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 2,
                                                    mandatory: !1,
                                                    maxLength: 0,
                                                    onChange: s(function() {
                                                        var c = v.clone();
                                                        l.onChangeInputTransferAmount$Action(l.callContext(c))
                                                    }, "onChange"),
                                                    style: "form-control full-height full-width",
                                                    variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(c) {
                                                        e.variables.transferAmountVar = c
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        name: "InputTransferExchangeAmount"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(ce, {
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    enabled: !0,
                                                    mandatory: !1,
                                                    onChange: s(function() {
                                                        var c = v.clone();
                                                        l.exchangeRateSwitcherOnChange$Action(l.callContext(c))
                                                    }, "onChange"),
                                                    style: "real-demo-switcher",
                                                    variable: e.createVariable(a.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(c) {
                                                        e.variables.currencySwitcherVar = c
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        name: "ExchangeRateSwitcher"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(z, {
                                                    enabled: !0,
                                                    style: "real-demo-switcher-item",
                                                    value: e.variables.transferFromVar.currencyAttr,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ButtonGroupItem2"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(d, {
                                                    value: e.variables.transferFromVar.currencyAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "106"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), i.createElement(z, {
                                                    enabled: !0,
                                                    style: "real-demo-switcher-item",
                                                    value: e.variables.transferToVar.currencyAttr,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ButtonGroupItem1"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(d, {
                                                    value: e.variables.transferToVar.currencyAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "108"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))))]
                                            }, function() {
                                                return [i.createElement(Q, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AlignIconRight: !0
                                                    },
                                                    events: {
                                                        _handleError: s(function(c) {
                                                            l.handleError(c)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "109",
                                                        alias: "11"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        icon: new V(function() {
                                                            return [i.createElement(d, {
                                                                value: e.variables.activeWalletVar.currencyAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "110"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }),
                                                        input: new V(function() {
                                                            return [i.createElement(G, {
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                enabled: !0,
                                                                extendedProperties: {
                                                                    "show-default-value": "True"
                                                                },
                                                                inputType: 2,
                                                                mandatory: !1,
                                                                maxLength: 0,
                                                                style: "form-control",
                                                                variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(c) {
                                                                    e.variables.transferAmountVar = c
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "InputTransferAmount"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        })
                                                    },
                                                    _dependencies: [n(e.variables.transferAmountVar), n(e.variables.activeWalletVar.currencyAttr)]
                                                })]
                                            }), i.createElement(L, {
                                                getOwnerSpan: s(function() {
                                                    return f.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: s(function() {
                                                    return f.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    PrefixText: "",
                                                    AlwaysShowDecimalDigits: !0,
                                                    InputId: t.getId("InputTransferAmount"),
                                                    DecimalSeparator: ".",
                                                    GroupSeparator: e.getCachedValue(t.getId("0xMnKZLdr0OIuPJQyiOoVg.GroupSeparator"), function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr === 8 ? "" : ","
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }),
                                                    DecimalDigits: a.BuiltinFunctions.integerToDecimal(e.variables.transferFromVar.fractionalDigitsAttr),
                                                    UseNumericInput: !0,
                                                    SuffixText: ""
                                                },
                                                events: {
                                                    _handleError: s(function(c) {
                                                        l.handleError(c)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: u
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "112",
                                                    alias: "12"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            })), i.createElement(o, {
                                                align: 0,
                                                animate: !0,
                                                style: "wallets-transfer-footer",
                                                visible: e.getCachedValue(t.getId("TransferFooter.Visible"), function() {
                                                    return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                }, function() {
                                                    return e.variables.transferFromVar.iconAttr
                                                }, function() {
                                                    return e.variables.transferToVar.iconAttr
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferFooter"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "114"
                                                },
                                                _widgetRecordProvider: r
                                            }, m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !0,
                                                    visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "115"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "full-width display-flex justify-content-space-between",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "116"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    style: "text-neutral-8",
                                                    text: ["Transfer amount"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "117"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("m_v7D40l50qo0alczEbGXg.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "118"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("PCrmvWWb70uDjdesDtFPmQ.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedTransferAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "119"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                })), i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "120"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    style: "text-neutral-8",
                                                    text: ["Transfer fee"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "121"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("Wl9pb7nE9kWZHHCnt24KfA.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.calculatedFeesVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "122"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("ZQkCzqRzeU+G7bNAu0XL8A.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedCalculatedFeesVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "123"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                })), i.createElement(R, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: w.space.small
                                                    },
                                                    events: {
                                                        _handleError: s(function(c) {
                                                            l.handleError(c)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "124",
                                                        alias: "13"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }))]
                                            }, function() {
                                                return []
                                            })), i.createElement(o, {
                                                align: 0,
                                                animate: !0,
                                                style: "full-width display-flex justify-content-space-between",
                                                visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "125"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(p, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Amount received"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "126"
                                                },
                                                _widgetRecordProvider: r
                                            }), m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "127"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column align-items-flex-end",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "128"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(d, {
                                                        value: e.getCachedValue(t.getId("shJvwl0EtESeVVZAVTBN+w.Value"), function() {
                                                            return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferFromConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "129"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.getCachedValue(t.getId("ucOekh0QqUy2Ky2wOX5zBg.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.finalAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.exchangeRateCountdownTimerVar
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "130"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))]
                                                }, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column align-items-flex-end",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "131"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(d, {
                                                        value: e.getCachedValue(t.getId("sgfS9+pMSUiaDVKpjAmIIg.Value"), function() {
                                                            return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferToConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "132"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.getCachedValue(t.getId("Xty80AvQ5065ewKg5xPJ1w.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedFinalAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.exchangeRateCountdownTimerVar
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "133"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))]
                                                }))]
                                            }, function() {
                                                return [i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("72wfmlDz6UG4u7YkM6Le4A.Value"), function() {
                                                        return (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.activeWalletVar.isCrpytoAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "134"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), i.createElement(D, {
                                                enabled: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                isDefault: !1,
                                                onClick: s(function() {
                                                    try {
                                                        a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets/transfer", {
                                                            WalletsAccountList: a.DataConversion.ServerDataConverter.to(e.variables.walletsAccountListIn, a.DataTypes.DataTypes.Text)
                                                        }), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (c) {
                                                        if (c.name !== "RedirectOccurredException") throw c
                                                    }
                                                }, "onClick"),
                                                style: "btn btn-primary",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "135"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Transfer")))]
                                        })]
                                    }, function() {
                                        return [i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-m",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "136"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            style: "font-bold font-size-h6",
                                            text: ["Transfer from"],
                                            _idProps: {
                                                service: t,
                                                uuid: "137"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalContent3"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(E, {
                                            animateItems: !0,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: 0,
                                            source: e.variables.transferAccountKeyVar,
                                            style: "display-flex flex-direction-column gap-base",
                                            tag: "div",
                                            _idProps: {
                                                service: t,
                                                uuid: "139"
                                            },
                                            _widgetRecordProvider: r,
                                            placeholders: {
                                                content: new M(function(c, g) {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        visible: !0,
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "140"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: [n(e.variables.transferFromAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(g.iterationContext))]
                                                    }, i.createElement(d, {
                                                        extendedProperties: {
                                                            style: "font-size: 16px;"
                                                        },
                                                        value: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "141"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(W, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            AccountKey: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                            AccountList: e.variables.transferFromAccountListVar
                                                        },
                                                        events: {
                                                            _handleError: s(function(b) {
                                                                l.handleError(b)
                                                            }, "_handleError"),
                                                            onClickAction$Action: s(function(b) {
                                                                var C = g.clone();
                                                                l.onClickTransferFromAccount$Action(b, l.callContext(C))
                                                            }, "onClickAction$Action")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: c,
                                                            uuid: "142",
                                                            alias: "14"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }))]
                                                }, v, t, "2")
                                            },
                                            _dependencies: [n(e.variables.transferFromAccountListVar)]
                                        })))]
                                    }), i.createElement(U, {
                                        showPopup: e.variables.isTransferFromOpenVar,
                                        style: e.getCachedValue(t.getId("ModalTransferFrom.Style"), function() {
                                            return "popup-dialog " + ($.isDesktop$Action(v).isDesktopOut ? "" : "popup-dialog__mobile")
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "ModalTransferFrom"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer from"],
                                        _idProps: {
                                            service: t,
                                            uuid: "145"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(y, {
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var c = v.clone();
                                                l.onCloseTransferFromModal$Action(l.callContext(c))
                                            }, "onClick")
                                        },
                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "146"
                                        },
                                        _widgetRecordProvider: r
                                    })), i.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(E, {
                                        animateItems: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: e.variables.transferAccountKeyVar,
                                        style: "display-flex flex-direction-column gap-base",
                                        tag: "div",
                                        _idProps: {
                                            service: t,
                                            uuid: "148"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new M(function(c, g) {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "149"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: [n(e.variables.transferFromAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(g.iterationContext))]
                                                }, i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    value: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "150"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(W, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferFromAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: s(function(b) {
                                                            l.handleError(b)
                                                        }, "_handleError"),
                                                        onClickAction$Action: s(function(b) {
                                                            var C = g.clone();
                                                            l.onClickTransferFromAccount$Action(b, l.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "151",
                                                        alias: "15"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }))]
                                            }, v, t, "3")
                                        },
                                        _dependencies: [n(e.variables.transferFromAccountListVar)]
                                    }))), i.createElement(U, {
                                        showPopup: e.variables.isTransferToOpenVar,
                                        style: e.getCachedValue(t.getId("ModalTransferTo.Style"), function() {
                                            return "popup-dialog " + ($.isDesktop$Action(v).isDesktopOut ? "" : "popup-dialog__mobile")
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "ModalTransferTo"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader2"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(p, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer to"],
                                        _idProps: {
                                            service: t,
                                            uuid: "154"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(y, {
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var c = v.clone();
                                                l.onCloseTransferToModal$Action(l.callContext(c))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "155"
                                        },
                                        _widgetRecordProvider: r
                                    })), i.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent2"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(E, {
                                        animateItems: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: e.variables.transferAccountKeyVar,
                                        style: "display-flex flex-direction-column gap-base",
                                        tag: "div",
                                        _idProps: {
                                            service: t,
                                            uuid: "157"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new M(function(c, g) {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "158"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: [n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(g.iterationContext))]
                                                }, i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    value: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "159"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(W, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(g.iterationContext),
                                                        AccountList: e.variables.transferAccountListVar
                                                    },
                                                    events: {
                                                        _handleError: s(function(b) {
                                                            l.handleError(b)
                                                        }, "_handleError"),
                                                        onClickAction$Action: s(function(b) {
                                                            var C = g.clone();
                                                            l.onClickTransferToAccount$Action(b, l.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: c,
                                                        uuid: "160",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }))]
                                            }, v, t, "4")
                                        },
                                        _dependencies: [n(e.variables.transferAccountListVar)]
                                    })))]
                                }),
                                mobileFooterContent: new V(function() {
                                    return [m(e.variables.isTransferSuccessVar, !1, this, function() {
                                        return [i.createElement(o, {
                                            align: 0,
                                            animate: !0,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base",
                                            visible: e.getCachedValue(t.getId("PMqv7lgAr0GcC2UfGwsh4g.Visible"), function() {
                                                return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return e.variables.transferFromVar.iconAttr
                                            }, function() {
                                                return e.variables.transferToVar.iconAttr
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "161"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(D, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background-color: #fff; border-color: #101213; color: #101213;"
                                            },
                                            isDefault: !1,
                                            onClick: s(function() {
                                                var c = v.clone();
                                                l.makeNewTransferOnClick$Action(e.variables.walletsAccountListIn, l.callContext(c))
                                            }, "onClick"),
                                            style: "btn full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "162"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Make new transfer"))]
                                    }, function() {
                                        return [i.createElement(o, {
                                            align: 0,
                                            animate: !0,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base",
                                            visible: e.getCachedValue(t.getId("2BmsXO+ENUKAUuLyoE11WQ.Visible"), function() {
                                                return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return e.variables.transferFromVar.iconAttr
                                            }, function() {
                                                return e.variables.transferToVar.iconAttr
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "163"
                                            },
                                            _widgetRecordProvider: r
                                        }, m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !0,
                                                visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "164"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width display-flex justify-content-space-between",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "165"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(p, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Transfer amount"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "166"
                                                },
                                                _widgetRecordProvider: r
                                            }), m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("NICkT99nHEyqrPJadSivlA.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "167"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            }, function() {
                                                return [i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("FwNmNysYk02CHeo6nBRlAQ.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.convertedTransferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "168"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex justify-content-space-between align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "169"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(p, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Transfer fee"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "170"
                                                },
                                                _widgetRecordProvider: r
                                            }), m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("3YSeq1mhOUqIi_hKK2yfcQ.Value"), function() {
                                                        return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.calculatedFeesVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "171"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            }, function() {
                                                return [i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("J4GTi6QKuE699TDinNSNXQ.Value"), function() {
                                                        return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.convertedCalculatedFeesVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "172"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), i.createElement(R, {
                                                getOwnerSpan: s(function() {
                                                    return f.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: s(function() {
                                                    return f.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Space: w.space.small
                                                },
                                                events: {
                                                    _handleError: s(function(c) {
                                                        l.handleError(c)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: u
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "173",
                                                    alias: "17"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            }))]
                                        }, function() {
                                            return []
                                        }), i.createElement(o, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-width display-flex justify-content-space-between margin-bottom-base",
                                            visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                            _idProps: {
                                                service: t,
                                                uuid: "174"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            style: "text-neutral-8",
                                            text: ["Amount received"],
                                            _idProps: {
                                                service: t,
                                                uuid: "175"
                                            },
                                            _widgetRecordProvider: r
                                        }), m(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "176"
                                                },
                                                _widgetRecordProvider: r
                                            }, m(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column align-items-flex-end",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "177"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(d, {
                                                    value: e.getCachedValue(t.getId("22lzIMdcQkW7Tj47Q8YKww.Value"), function() {
                                                        return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferFromConvertedAmountVar
                                                    }, function() {
                                                        return e.variables.transferToVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "178"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("hl8VJjFCa02N3Pe+qh+L1g.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.finalAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.exchangeRateCountdownTimerVar
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "179"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column align-items-flex-end",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "180"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(d, {
                                                    value: e.getCachedValue(t.getId("7ODCNfRQnkWh_YdXR7sCiQ.Value"), function() {
                                                        return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferToConvertedAmountVar
                                                    }, function() {
                                                        return e.variables.transferFromConvertedAmountVar
                                                    }, function() {
                                                        return e.variables.transferToVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "181"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("F1NlkEOyWEORaFkyvv+3qw.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.convertedFinalAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.exchangeRateCountdownTimerVar
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "182"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }))]
                                        }, function() {
                                            return [i.createElement(d, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                value: e.getCachedValue(t.getId("dDuQqy5IAUuvz1YButB+Sw.Value"), function() {
                                                    return (e.variables.activeWalletVar.isCrpytoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                }, function() {
                                                    return e.variables.activeWalletVar.isCrpytoAttr
                                                }, function() {
                                                    return e.variables.transferAmountVar
                                                }, function() {
                                                    return e.variables.activeWalletVar.currencyAttr
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "183"
                                                },
                                                _widgetRecordProvider: r
                                            })]
                                        })), i.createElement(D, {
                                            enabled: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                            isDefault: !1,
                                            onClick: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var c = v.clone();
                                                    return l.transferOnClick$Action(l.callContext(c))
                                                })
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "184"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Transfer"))]
                                    })]
                                })
                            },
                            _dependencies: [n(e.variables.isTransferToOpenVar), n(e.variables.isTransferFromOpenVar), n(e.variables.transferFromAccountListVar), n(e.variables.convertedFinalAmountVar), n(e.variables.exchangeRateCountdownTimerVar), n(e.variables.finalAmountVar), n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar), n(e.variables.convertedCalculatedFeesVar), n(e.variables.transferToConvertedAmountVar), n(e.variables.convertedTransferAmountVar), n(e.variables.calculatedFeesVar), n(e.variables.transferFromConvertedAmountVar), n(e.variables.transferToVar.fractionalDigitsAttr), n(e.variables.transferToVar.formattedBalanceAttr), n(e.variables.transferToVar.currencyAttr), n(e.variables.transferToVar.nameAttr), n(e.variables.transferToVar.iconAttr), n(e.variables.transferAmountVar), n(e.variables.activeWalletVar.isCrpytoAttr), n(e.variables.activeWalletVar.currencyAttr), n(e.variables.currencySwitcherVar), n(e.variables.showCurrencySwitcherVar), n(e.variables.isTransferSuccessVar), n(e.variables.transferFromVar.fractionalDigitsAttr), n(e.variables.transferFromVar.formattedBalanceAttr), n(e.variables.transferFromVar.currencyAttr), n(e.variables.transferFromVar.nameAttr), n(e.variables.transferFromVar.iconAttr)]
                        })]
                    })
                },
                _dependencies: [n(e.variables.isTransferToOpenVar), n(e.variables.isTransferFromOpenVar), n(e.variables.transferFromAccountListVar), n(e.variables.convertedFinalAmountVar), n(e.variables.exchangeRateCountdownTimerVar), n(e.variables.finalAmountVar), n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar), n(e.variables.convertedCalculatedFeesVar), n(e.variables.transferToConvertedAmountVar), n(e.variables.convertedTransferAmountVar), n(e.variables.calculatedFeesVar), n(e.variables.transferFromConvertedAmountVar), n(e.variables.transferToVar.fractionalDigitsAttr), n(e.variables.transferToVar.formattedBalanceAttr), n(e.variables.transferToVar.currencyAttr), n(e.variables.transferToVar.nameAttr), n(e.variables.transferToVar.iconAttr), n(e.variables.transferAmountVar), n(e.variables.activeWalletVar.isCrpytoAttr), n(e.variables.activeWalletVar.currencyAttr), n(e.variables.currencySwitcherVar), n(e.variables.showCurrencySwitcherVar), n(e.variables.isTransferSuccessVar), n(e.variables.transferFromVar.fractionalDigitsAttr), n(e.variables.transferFromVar.formattedBalanceAttr), n(e.variables.transferFromVar.currencyAttr), n(e.variables.transferFromVar.nameAttr), n(e.variables.transferFromVar.iconAttr)]
            }))
        }
    };
s(S, "View");
var ie = S,
    Je = ie;
export {
    Je as
    default
};