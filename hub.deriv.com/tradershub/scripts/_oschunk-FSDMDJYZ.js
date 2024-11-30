import {
    a as L
} from "./_oschunk-R6VX6FEB.js";
import {
    a as Q
} from "./_oschunk-6LHMKEZD.js";
import "./_oschunk-IDZWQMUL.js";
import "./_oschunk-4HOLBSDB.js";
import "./_oschunk-VLOO5HJV.js";
import {
    a as de
} from "./_oschunk-TDCEBXTG.js";
import {
    a as ue
} from "./_oschunk-2XS27EXV.js";
import "./_oschunk-RFENF4ST.js";
import "./_oschunk-IQUI5AIQ.js";
import "./_oschunk-FVTZGXVK.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as V
} from "./_oschunk-UHVNGUMG.js";
import {
    a as q
} from "./_oschunk-ODSHDLTB.js";
import "./_oschunk-PSUEQKJH.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as j
} from "./_oschunk-5D6SYFW4.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as x,
    c as ce,
    d as z,
    h as o,
    j as d,
    k as O,
    l as I,
    r as b,
    s as U,
    t as le,
    v as G,
    y as p
} from "./_oschunk-WAXNMQCP.js";
import {
    a as se
} from "./_oschunk-LHY3WMNC.js";
import {
    a as oe,
    g as B,
    i as W
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    d as ne
} from "./_oschunk-XMOR6XCC.js";
import {
    a as $
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    Bf as D,
    Eb as M,
    a as w
} from "./_oschunk-44PT7RP7.js";
import {
    ia as E
} from "./_oschunk-NTQBNJ73.js";
import {
    c,
    g as ae
} from "./_oschunk-DVBKI63I.js";
var i = ae(oe());
var h = ae(oe());
var A = E,
    X = class X extends A.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AccountListByKey", "accountListByKeyVar", "AccountListByKey", !0, !1, A.DataTypes.DataTypes.RecordList, function() {
                return A.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("AccountList", "accountListIn", "AccountList", !0, !1, A.DataTypes.DataTypes.RecordList, function() {
                return A.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("_accountListInDataFetchStatus", "_accountListInDataFetchStatus", "_accountListInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AccountKey", "accountKeyIn", "AccountKey", !0, !1, A.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", !0, !1, A.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(A.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(X, "VariablesRecord");
var k = X;
k.init();
var Z = class Z extends A.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
c(Z, "WidgetsRecord");
var J = Z,
    Y = class Y extends A.Model.BaseViewModel {
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
c(Y, "Model");
var N = Y;
N._hasValidationWidgetsValue = void 0;
var fe = new A.Model.ModelFactory(N);
var ge = {};
var P = E; {
    let e = class e extends P.Controller.BaseViewController {
        constructor(t, u, r) {
            super(t, u, r, ge);
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
                return P.Logger.startActiveSpan("OnReady", function(g) {
                    g && (g.setAttribute("code.function", "OnReady"), g.setAttribute("outsystems.function.key", "3da149ed-a4c5-4a2a-a67e-9a2a8f9eeb13"), g.setAttribute("outsystems.function.owner.name", "tradershub"), g.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var y = new P.DataTypes.VariableHolder;
                        y.value = P.SystemActions.listFilter(u.variables.accountListIn, function(n) {
                            return u.variables.accountKeyIn === n.accountCategoryAttr
                        }, t), u.variables.accountListByKeyVar = y.value.filteredListOut
                    } finally {
                        g && g.end()
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
                    g = this.idService;
                return P.Logger.startActiveSpan("OnClickAccount", function(y) {
                    return y && (y.setAttribute("code.function", "OnClickAccount"), y.setAttribute("outsystems.function.key", "a52ee1b6-ed65-4d60-9316-d4d1a677bd65"), y.setAttribute("outsystems.function.owner.name", "tradershub"), y.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), y.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        v.ensureControllerAlive("OnClickAccount"), u = v.callContext(u);
                        var n = new P.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars")));
                        return n.value.accountDataInLocal = t.clone(), P.Flow.executeAsyncFlow(function() {
                            return v.onClickAction$Action(n.value.accountDataInLocal, u)
                        })
                    }, function() {
                        y && y.end()
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
    c(e, "ControllerInner");
    let K = e;
    ee = K, ee.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars", [{
        name: "AccountData",
        attrName: "accountDataInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Record,
        defaultValue: c(function() {
            return new M
        }, "defaultValue"),
        complexType: M
    }])
}
var ee, me = new P.Controller.ControllerFactory(ee, se);
var te = W.PlaceholderContent,
    ye = W.IteratorPlaceholderContent,
    T = class T extends B.BaseWebBlock {
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
            return me
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
                g = T.ifWidget,
                y = T.textWidget,
                n = T.asPrimitiveValue,
                pe = T.getTranslation,
                f = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(O, {
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
                    content: new ye(function(s, m) {
                        return [h.createElement(I, {
                            onClick: c(function() {
                                return Promise.resolve().then(function() {
                                    var _ = m.clone();
                                    return l.onClickAccount$Action(e.variables.accountListByKeyVar.getCurrent(m.iterationContext), l.callContext(_))
                                })
                            }, "onClick"),
                            style: "walets-list-item display-flex flex-direction-column gap-s gap-s",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: s,
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
                                            service: s,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: r
                                    }, h.createElement(b, {
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: 1,
                                        url: e.variables.accountListByKeyVar.getCurrent(m.iterationContext).iconAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: r
                                    }), h.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex-1",
                                        visible: !0,
                                        _idProps: {
                                            service: s,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: r
                                    }, h.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: s,
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
                                        value: e.variables.accountListByKeyVar.getCurrent(m.iterationContext).nameAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    })), h.createElement(d, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: e.variables.accountListByKeyVar.getCurrent(m.iterationContext).formattedBalanceAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                rightActions: te.Empty
                            },
                            _dependencies: [n(e.variables.accountListByKeyVar.getCurrent(m.iterationContext).formattedBalanceAttr), n(e.variables.accountListByKeyVar.getCurrent(m.iterationContext).nameAttr), n(e.variables.accountListByKeyVar.getCurrent(m.iterationContext).iconAttr)]
                        })]
                    }, v, t, "1")
                },
                _dependencies: []
            }))
        }
    };
c(T, "View");
var re = T,
    F = re;
var a = E,
    R = W.PlaceholderContent,
    H = W.IteratorPlaceholderContent,
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
            return ["scripts/tradershub.UserScripts.yupumd.js"]
        }
        static getBlocks() {
            return [q, Q, V, F, L, j]
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
                g = S.getTranslation,
                y = this;
            return a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1", "Transfer")
        }
        internalRender() {
            let e = this.model,
                l = this.controller,
                t = this.idService,
                u = l.validationService,
                r = this.widgetsRecordProvider,
                v = l.callContext(),
                g = S.ifWidget,
                y = S.textWidget,
                n = S.asPrimitiveValue,
                pe = S.getTranslation,
                f = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(q, {
                getOwnerSpan: c(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(s) {
                        l.handleError(s)
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
                    content: new R(function() {
                        return [i.createElement(Q, {
                            getOwnerSpan: c(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                HideWalletHeader: !0,
                                PageTitle: "Transfer"
                            },
                            events: {
                                _handleError: c(function(s) {
                                    l.handleError(s)
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
                                walletOverlayPageContent: new R(function() {
                                    return [g(e.variables.hasNoFundsVar, !1, this, function() {
                                        return [i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column align-items-center justify-content-center gap-m",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "HasNoFundContainer"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(b, {
                                            image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.spreadrisk.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: t,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(p, {
                                            extendedProperties: {
                                                style: "font-size: 18px;"
                                            },
                                            style: "font-bold",
                                            text: ["No funds available"],
                                            _idProps: {
                                                service: t,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: r
                                        }), i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(d, {
                                            value: "Add funds to your " + e.variables.activeWalletVar.nameAttr + " to make a transfer.",
                                            _idProps: {
                                                service: t,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: r
                                        }))), i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            style: "wallets-transfer-success-footer",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: c(function() {
                                                var s = v.clone();
                                                l.buttonOnClick$Action(l.callContext(s))
                                            }, "onClick"),
                                            style: "btn btn-primary",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Deposit")))]
                                    }, function() {
                                        return [g(e.variables.hasNoAccountsVar, !1, this, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center gap-m",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "HasNoAccountContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(b, {
                                                image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Notavailable.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: r
                                            }), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "text-align: center;"
                                                },
                                                style: "display-flex flex-direction-column align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(p, {
                                                extendedProperties: {
                                                    style: "font-size: 18px;"
                                                },
                                                style: "font-bold",
                                                text: ["No trading accounts or Wallets"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: r
                                            }), "Add a trading account or Wallet in Trader's Hub to receive funds from this Wallet."), i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallets-transfer-success-footer",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(x, {
                                                enabled: !0,
                                                isDefault: !1,
                                                onClick: c(function() {
                                                    try {
                                                        a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (s) {
                                                        if (s.name !== "RedirectOccurredException") throw s
                                                    }
                                                }, "onClick"),
                                                style: "btn btn-primary",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: r
                                            }, "OK")))]
                                        }, function() {
                                            return [g(e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                                return [g(e.variables.isTransferSuccessVar, !1, this, function() {
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
                                                    }, i.createElement(b, {
                                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.TransferSuccessfulIcon.svg"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(p, {
                                                        style: "font-bold font-size-h6 margin-y-l",
                                                        text: ["Transfer successful"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "full-width",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
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
                                                                    uuid: "22"
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
                                                                    uuid: "24"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(b, {
                                                                gridProperties: {
                                                                    width: "16px",
                                                                    marginLeft: "0px"
                                                                },
                                                                style: "margin-right-xs",
                                                                type: 1,
                                                                url: e.variables.transferFromVar.iconAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "25"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferFromVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "26"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(d, {
                                                                style: "text-red",
                                                                value: e.getCachedValue(t.getId("l62WSyWRNUOgqQtfJZEviQ.Value"), function() {
                                                                    return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.transferFromVar.fractionalDigitsAttr
                                                                }, function() {
                                                                    return e.variables.transferAmountVar
                                                                }, function() {
                                                                    return e.variables.transferFromVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "27"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
                                                                getOwnerSpan: c(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: c(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    Space: w.space.base
                                                                },
                                                                events: {
                                                                    _handleError: c(function(s) {
                                                                        l.handleError(s)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "28",
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
                                                                    uuid: "30"
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
                                                                    uuid: "32"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(b, {
                                                                gridProperties: {
                                                                    width: "16px",
                                                                    marginLeft: "0px"
                                                                },
                                                                style: "margin-right-xs",
                                                                type: 1,
                                                                url: e.variables.transferToVar.iconAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "33"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferToVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "34"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(d, {
                                                                style: "text-green",
                                                                value: e.getCachedValue(t.getId("XMAybDKLTkqk3GXfj80Lhg.Value"), function() {
                                                                    return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.transferToVar.fractionalDigitsAttr
                                                                }, function() {
                                                                    return e.variables.transferFromConvertedAmountVar
                                                                }, function() {
                                                                    return e.variables.transferToVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "35"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
                                                                getOwnerSpan: c(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: c(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    Space: w.space.base
                                                                },
                                                                events: {
                                                                    _handleError: c(function(s) {
                                                                        l.handleError(s)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "36",
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
                                                                    uuid: "38"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.getCachedValue(t.getId("zJO7Ake8lE6Sauidfc6H0A.Value"), function() {
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
                                                                    uuid: "39"
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
                                                                    uuid: "42"
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
                                                                    uuid: "44"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(b, {
                                                                gridProperties: {
                                                                    width: "16px",
                                                                    marginLeft: "0px"
                                                                },
                                                                style: "margin-right-xs",
                                                                type: 1,
                                                                url: e.variables.transferFromVar.iconAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "45"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.variables.transferFromVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "46"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(d, {
                                                                style: "text-red",
                                                                value: e.getCachedValue(t.getId("PzhvZUlP4kqAtBx2GiEorQ.Value"), function() {
                                                                    return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.transferFromVar.fractionalDigitsAttr
                                                                }, function() {
                                                                    return e.variables.convertedTransferAmountVar
                                                                }, function() {
                                                                    return e.variables.transferFromVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "47"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
                                                                getOwnerSpan: c(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: c(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    Space: w.space.base
                                                                },
                                                                events: {
                                                                    _handleError: c(function(s) {
                                                                        l.handleError(s)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "48",
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
                                                                    uuid: "50"
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
                                                                    uuid: "52"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(b, {
                                                                extendedProperties: {
                                                                    style: "margin-right: var(--space-xs);"
                                                                },
                                                                gridProperties: {
                                                                    width: "16px",
                                                                    marginLeft: "0px"
                                                                },
                                                                style: "margin-right-xs",
                                                                type: 1,
                                                                url: e.variables.transferToVar.iconAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "53"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.variables.transferToVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "54"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })), i.createElement(d, {
                                                                style: "text-green",
                                                                value: e.getCachedValue(t.getId("c2lI9KhuIkSXJs9+XMf2Tg.Value"), function() {
                                                                    return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.transferToVar.fractionalDigitsAttr
                                                                }, function() {
                                                                    return e.variables.transferToConvertedAmountVar
                                                                }, function() {
                                                                    return e.variables.transferToVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "55"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
                                                                getOwnerSpan: c(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: c(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    Space: w.space.base
                                                                },
                                                                events: {
                                                                    _handleError: c(function(s) {
                                                                        l.handleError(s)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "56",
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
                                                                    uuid: "58"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.getCachedValue(t.getId("1O8P8MDrEEC3qUVH7c_b3A.Value"), function() {
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
                                                                    uuid: "59"
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
                                                                uuid: "62"
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
                                                                uuid: "64"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(b, {
                                                            gridProperties: {
                                                                width: "16px",
                                                                marginLeft: "0px"
                                                            },
                                                            style: "margin-right-xs",
                                                            type: 1,
                                                            url: e.variables.transferFromVar.iconAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "65"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.variables.transferFromVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "66"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(d, {
                                                            style: "text-red",
                                                            value: e.getCachedValue(t.getId("GwB_yLoXA0ev+QiBdWWBYg.Value"), function() {
                                                                return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                            }, function() {
                                                                return e.variables.transferFromVar.fractionalDigitsAttr
                                                            }, function() {
                                                                return e.variables.transferAmountVar
                                                            }, function() {
                                                                return e.variables.transferFromVar.currencyAttr
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "67"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))), i.createElement(V, {
                                                            getOwnerSpan: c(function() {
                                                                return f.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: c(function() {
                                                                return f.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                Space: w.space.base
                                                            },
                                                            events: {
                                                                _handleError: c(function(s) {
                                                                    l.handleError(s)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "68",
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
                                                                uuid: "70"
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
                                                                uuid: "72"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(b, {
                                                            gridProperties: {
                                                                width: "16px",
                                                                marginLeft: "0px"
                                                            },
                                                            style: "margin-right-xs",
                                                            type: 1,
                                                            url: e.variables.transferToVar.iconAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "73"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.variables.transferToVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "74"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(d, {
                                                            style: "text-green",
                                                            value: e.getCachedValue(t.getId("5m+XixrQ0EuLTMsPiid8qQ.Value"), function() {
                                                                return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                            }, function() {
                                                                return e.variables.transferToVar.fractionalDigitsAttr
                                                            }, function() {
                                                                return e.variables.transferAmountVar
                                                            }, function() {
                                                                return e.variables.transferToVar.currencyAttr
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "75"
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
                                                    }, i.createElement(x, {
                                                        enabled: !0,
                                                        extendedProperties: {
                                                            style: "color: #101213;"
                                                        },
                                                        isDefault: !1,
                                                        onClick: c(function() {
                                                            var s = v.clone();
                                                            l.makeNewTransferOnClick$Action(l.callContext(s))
                                                        }, "onClick"),
                                                        style: "btn",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "77"
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
                                                            uuid: "79"
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
                                                        onClick: c(function() {
                                                            var s = v.clone();
                                                            l.fromListItemOnClick$Action(l.callContext(s))
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
                                                            leftActions: R.Empty,
                                                            content: new R(function() {
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
                                                                        uuid: "82"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(o, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "wallets-selected-item__icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "83"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(b, {
                                                                    gridProperties: {
                                                                        width: "16px"
                                                                    },
                                                                    type: 1,
                                                                    url: e.variables.transferFromVar.iconAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "84"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })), i.createElement(o, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "flex-1",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "85"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(o, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex flex-direction-column",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "86"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(o, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "87"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(p, {
                                                                    style: "font-bold",
                                                                    text: ["From"],
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "88"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }), i.createElement(d, {
                                                                    gridProperties: {
                                                                        marginLeft: "0px"
                                                                    },
                                                                    value: " " + e.variables.transferFromVar.nameAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "89"
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
                                                                        uuid: "90"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }))), i.createElement(o, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "91"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(b, {
                                                                    image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "92"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })))]
                                                            }),
                                                            rightActions: R.Empty
                                                        }
                                                    }), g(e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                                        return [i.createElement(V, {
                                                            getOwnerSpan: c(function() {
                                                                return f.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: c(function() {
                                                                return f.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                IsVertical: !0,
                                                                Space: w.space.small
                                                            },
                                                            events: {
                                                                _handleError: c(function(s) {
                                                                    l.handleError(s)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "93",
                                                                alias: "8"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            _dependencies: []
                                                        }), i.createElement(I, {
                                                            onClick: c(function() {
                                                                var s = v.clone();
                                                                l.toListItemOnClick$Action(l.callContext(s))
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
                                                                leftActions: R.Empty,
                                                                content: new R(function() {
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
                                                                            uuid: "95"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "wallets-selected-item__icon",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "96"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(b, {
                                                                        extendedProperties: {
                                                                            style: "height: 16px;"
                                                                        },
                                                                        type: 1,
                                                                        url: e.variables.transferToVar.iconAttr,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "97"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })), i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "flex-1",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "98"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "99"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "100"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(p, {
                                                                        style: "font-bold",
                                                                        text: ["To"],
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "101"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }), i.createElement(d, {
                                                                        gridProperties: {
                                                                            marginLeft: "0px"
                                                                        },
                                                                        value: " " + e.variables.transferToVar.nameAttr,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "102"
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
                                                                            uuid: "103"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }))), i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "104"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(b, {
                                                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                        type: 0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "105"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })))]
                                                                }),
                                                                rightActions: R.Empty
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
                                                                uuid: "106"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(p, {
                                                            style: "font-bold font-size-h6",
                                                            text: ["Transfer to"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "107"
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
                                                        }, i.createElement(O, {
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
                                                                uuid: "109"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            placeholders: {
                                                                content: new H(function(s, m) {
                                                                    return [i.createElement(o, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: s,
                                                                            uuid: "110"
                                                                        },
                                                                        _widgetRecordProvider: r,
                                                                        _dependencies: [n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(m.iterationContext))]
                                                                    }, i.createElement(d, {
                                                                        extendedProperties: {
                                                                            style: "font-size: 16px;"
                                                                        },
                                                                        value: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                                        _idProps: {
                                                                            service: s,
                                                                            uuid: "111"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }), i.createElement(F, {
                                                                        getOwnerSpan: c(function() {
                                                                            return f.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: c(function() {
                                                                            return f.getChildSpan("destroy")
                                                                        }, "getOwnerDisposeSpan"),
                                                                        inputs: {
                                                                            AccountKey: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                                            AccountList: e.variables.transferAccountListVar
                                                                        },
                                                                        events: {
                                                                            _handleError: c(function(_) {
                                                                                l.handleError(_)
                                                                            }, "_handleError"),
                                                                            onClickAction$Action: c(function(_) {
                                                                                var C = m.clone();
                                                                                l.onClickTransferToAccount$Action(_, l.callContext(C))
                                                                            }, "onClickAction$Action")
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: u
                                                                        },
                                                                        _idProps: {
                                                                            service: s,
                                                                            uuid: "112",
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
                                                            uuid: "114"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, "Transfer amount", i.createElement(L, {
                                                        getOwnerSpan: c(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: c(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            PrefixText: "",
                                                            SuffixText: "",
                                                            AlwaysShowDecimalDigits: !0,
                                                            InputId: t.getId("InputTransferExchangeAmount"),
                                                            GroupSeparator: "",
                                                            UseNumericInput: !0,
                                                            DecimalDigits: e.getCachedValue(t.getId("OGWHX2_QAUqx2J_9opZrMQ.DecimalDigits"), function() {
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
                                                            DecimalSeparator: "."
                                                        },
                                                        events: {
                                                            _handleError: c(function(s) {
                                                                l.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "115",
                                                            alias: "10"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    })), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
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
                                                        }, i.createElement(U, {
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
                                                            onChange: c(function() {
                                                                var s = v.clone();
                                                                l.onChangeInputTransferConvertedAmount$Action(l.callContext(s))
                                                            }, "onChange"),
                                                            style: "form-control full-height full-width",
                                                            variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(s) {
                                                                e.variables.transferAmountVar = s
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
                                                            onChange: c(function() {
                                                                var s = v.clone();
                                                                l.exchangeRateSwitcherOnChange$Action(l.callContext(s))
                                                            }, "onChange"),
                                                            style: "real-demo-switcher",
                                                            variable: e.createVariable(a.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(s) {
                                                                e.variables.currencySwitcherVar = s
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
                                                                uuid: "120"
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
                                                                uuid: "122"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))))]
                                                    }, function() {
                                                        return [i.createElement(j, {
                                                            getOwnerSpan: c(function() {
                                                                return f.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: c(function() {
                                                                return f.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                AlignIconRight: !0
                                                            },
                                                            events: {
                                                                _handleError: c(function(s) {
                                                                    l.handleError(s)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "123",
                                                                alias: "11"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            placeholders: {
                                                                icon: new R(function() {
                                                                    return [i.createElement(d, {
                                                                        value: e.variables.activeWalletVar.currencyAttr,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "124"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })]
                                                                }),
                                                                input: new R(function() {
                                                                    return [i.createElement(U, {
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
                                                                        onChange: c(function() {
                                                                            var s = v.clone();
                                                                            l.onChangeInputTransferAmount$Action(l.callContext(s))
                                                                        }, "onChange"),
                                                                        style: "form-control",
                                                                        variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(s) {
                                                                            e.variables.transferAmountVar = s
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
                                                        getOwnerSpan: c(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: c(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            InputId: t.getId("InputTransferAmount"),
                                                            AlwaysShowDecimalDigits: !0,
                                                            PrefixText: "",
                                                            SuffixText: "",
                                                            DecimalSeparator: ".",
                                                            GroupSeparator: e.getCachedValue(t.getId("+RiLRP8+zEexBj2kbmK2rg.GroupSeparator"), function() {
                                                                return e.variables.transferFromVar.fractionalDigitsAttr === 8 ? "" : ","
                                                            }, function() {
                                                                return e.variables.transferFromVar.fractionalDigitsAttr
                                                            }),
                                                            UseNumericInput: !0,
                                                            DecimalDigits: a.BuiltinFunctions.integerToDecimal(e.variables.transferFromVar.fractionalDigitsAttr)
                                                        },
                                                        events: {
                                                            _handleError: c(function(s) {
                                                                l.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "126",
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
                                                            uuid: "128"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [i.createElement(o, {
                                                            align: 0,
                                                            animate: !0,
                                                            visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "129"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "full-width display-flex justify-content-space-between",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "130"
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
                                                                uuid: "131"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                            return [i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                value: e.getCachedValue(t.getId("e8b2z7JRgES4dpNUhm8K8Q.Value"), function() {
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
                                                                    uuid: "132"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return [i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                value: e.getCachedValue(t.getId("OKy39snRs0W+tcIYVsjKwg.Value"), function() {
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
                                                                    uuid: "133"
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
                                                                uuid: "134"
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
                                                                uuid: "135"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                            return [i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                value: e.getCachedValue(t.getId("0TF4Fxtj202Tpi3qoRlbdg.Value"), function() {
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
                                                                    uuid: "136"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }, function() {
                                                            return [i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                value: e.getCachedValue(t.getId("_RJqw7Z_DUWAhmsPUUhcSA.Value"), function() {
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
                                                                    uuid: "137"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        })), i.createElement(V, {
                                                            getOwnerSpan: c(function() {
                                                                return f.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: c(function() {
                                                                return f.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                Space: w.space.small
                                                            },
                                                            events: {
                                                                _handleError: c(function(s) {
                                                                    l.handleError(s)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "138",
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
                                                            uuid: "139"
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
                                                            uuid: "140"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "141"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                            return [i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column align-items-flex-end",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "142"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(d, {
                                                                value: e.getCachedValue(t.getId("0JF9VTefOUO_cvfZAEraKQ.Value"), function() {
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
                                                                    uuid: "143"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.getCachedValue(t.getId("9dou_0bVaUu58RxLGixsAw.Value"), function() {
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
                                                                    uuid: "144"
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
                                                                    uuid: "145"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(d, {
                                                                value: e.getCachedValue(t.getId("3djIglu9WUCAchErcgUZIg.Value"), function() {
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
                                                                    uuid: "146"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 12px;"
                                                                },
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.getCachedValue(t.getId("JQTMOBBFM02jEl+ALp2_Fg.Value"), function() {
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
                                                                    uuid: "147"
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
                                                            value: e.getCachedValue(t.getId("saWRv2ZghkmDQ6+qv8fyyw.Value"), function() {
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
                                                                uuid: "148"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    })), i.createElement(x, {
                                                        enabled: e.getCachedValue(t.getId("__uNI9vtnEuzzvdI4Gb_eA.Enabled"), function() {
                                                            return e.variables.showCurrencySwitcherVar ? e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr && !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)) : e.widgets.get(t.getId("InputTransferAmount")).validAttr && !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0))
                                                        }, function() {
                                                            return e.variables.showCurrencySwitcherVar
                                                        }, function() {
                                                            return e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.widgets.get(t.getId("InputTransferAmount")).validAttr
                                                        }),
                                                        isDefault: !1,
                                                        onClick: c(function() {
                                                            return Promise.resolve().then(function() {
                                                                var s = v.clone();
                                                                return l.transferOnClick$Action(l.callContext(s))
                                                            })
                                                        }, "onClick"),
                                                        style: "btn btn-primary",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "149"
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
                                                        uuid: "150"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(p, {
                                                    style: "font-bold font-size-h6",
                                                    text: ["Transfer from"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "151"
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
                                                }, i.createElement(O, {
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
                                                        uuid: "153"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        content: new H(function(s, m) {
                                                            return [i.createElement(o, {
                                                                align: 0,
                                                                animate: !1,
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "154"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: [n(e.variables.transferFromAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(m.iterationContext))]
                                                            }, i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "font-size: 16px;"
                                                                },
                                                                value: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "155"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(F, {
                                                                getOwnerSpan: c(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: c(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    AccountList: e.variables.transferFromAccountListVar,
                                                                    AccountKey: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext)
                                                                },
                                                                events: {
                                                                    _handleError: c(function(_) {
                                                                        l.handleError(_)
                                                                    }, "_handleError"),
                                                                    onClickAction$Action: c(function(_) {
                                                                        var C = m.clone();
                                                                        l.onClickTransferFromAccount$Action(_, l.callContext(C))
                                                                    }, "onClickAction$Action")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "156",
                                                                    alias: "14"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }))]
                                                        }, v, t, "2")
                                                    },
                                                    _dependencies: [n(e.variables.transferFromAccountListVar)]
                                                })))]
                                            })]
                                        })]
                                    }), i.createElement(G, {
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
                                            uuid: "159"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(b, {
                                        extendedEvents: {
                                            onClick: c(function() {
                                                var s = v.clone();
                                                l.onCloseTransferFromModal$Action(l.callContext(s))
                                            }, "onClick")
                                        },
                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "160"
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
                                    }, i.createElement(O, {
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
                                            uuid: "162"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new H(function(s, m) {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "163"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: [n(e.variables.transferFromAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(m.iterationContext))]
                                                }, i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    value: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "164"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(F, {
                                                    getOwnerSpan: c(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: c(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferFromAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: c(function(_) {
                                                            l.handleError(_)
                                                        }, "_handleError"),
                                                        onClickAction$Action: c(function(_) {
                                                            var C = m.clone();
                                                            l.onClickTransferFromAccount$Action(_, l.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "165",
                                                        alias: "15"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }))]
                                            }, v, t, "3")
                                        },
                                        _dependencies: [n(e.variables.transferFromAccountListVar)]
                                    }))), i.createElement(G, {
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
                                            uuid: "168"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(b, {
                                        extendedEvents: {
                                            onClick: c(function() {
                                                var s = v.clone();
                                                l.onCloseTransferToModal$Action(l.callContext(s))
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
                                            uuid: "169"
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
                                    }, i.createElement(O, {
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
                                            uuid: "171"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new H(function(s, m) {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "172"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: [n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar.getCurrent(m.iterationContext))]
                                                }, i.createElement(d, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    value: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "173"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(F, {
                                                    getOwnerSpan: c(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: c(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(m.iterationContext),
                                                        AccountList: e.variables.transferAccountListVar
                                                    },
                                                    events: {
                                                        _handleError: c(function(_) {
                                                            l.handleError(_)
                                                        }, "_handleError"),
                                                        onClickAction$Action: c(function(_) {
                                                            var C = m.clone();
                                                            l.onClickTransferToAccount$Action(_, l.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "174",
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
                                mobileFooterContent: new R(function() {
                                    return [g(e.variables.hasNoFundsVar, !1, this, function() {
                                        return [i.createElement(o, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base background-neutral-0",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "175"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: c(function() {
                                                var s = v.clone();
                                                l.buttonOnClick$Action(l.callContext(s))
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "176"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Deposit"))]
                                    }, function() {
                                        return [g(e.variables.hasNoAccountsVar, !1, this, function() {
                                            return [i.createElement(o, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                                },
                                                style: "full-width padding-base background-neutral-0",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "177"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(x, {
                                                enabled: !0,
                                                isDefault: !1,
                                                onClick: c(function() {
                                                    try {
                                                        a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (s) {
                                                        if (s.name !== "RedirectOccurredException") throw s
                                                    }
                                                }, "onClick"),
                                                style: "btn btn-primary full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "178"
                                                },
                                                _widgetRecordProvider: r
                                            }, "OK"))]
                                        }, function() {
                                            return [g(e.variables.isTransferSuccessVar, !1, this, function() {
                                                return [i.createElement(o, {
                                                    align: 0,
                                                    animate: !0,
                                                    extendedProperties: {
                                                        style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                                    },
                                                    style: "full-width padding-base background-neutral-0",
                                                    visible: e.getCachedValue(t.getId("1BuOGz4b206FPWX9jt_mPg.Visible"), function() {
                                                        return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                    }, function() {
                                                        return e.variables.transferFromVar.iconAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.iconAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "179"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(x, {
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-color: #101213; color: #101213;"
                                                    },
                                                    isDefault: !1,
                                                    onClick: c(function() {
                                                        var s = v.clone();
                                                        l.makeNewTransferOnClick$Action(l.callContext(s))
                                                    }, "onClick"),
                                                    style: "btn full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "180"
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
                                                    style: "full-width padding-base background-neutral-0",
                                                    visible: e.getCachedValue(t.getId("kLFP8LHcM0e_VMxfTjLmuQ.Visible"), function() {
                                                        return e.variables.transferFromVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                    }, function() {
                                                        return e.variables.transferFromVar.iconAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.iconAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "181"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !0,
                                                        visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "182"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "full-width display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "183"
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
                                                            uuid: "184"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                        return [i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: e.getCachedValue(t.getId("8BQ3VktJK0S7XiDjWxzLLA.Value"), function() {
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
                                                                uuid: "185"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    }, function() {
                                                        return [i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: e.getCachedValue(t.getId("iXU5WBz9LUCoeUDNK+Izew.Value"), function() {
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
                                                                uuid: "186"
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
                                                            uuid: "187"
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
                                                            uuid: "188"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                        return [i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: e.getCachedValue(t.getId("0ZZoNxvWb0+TvHp2eh6kPQ.Value"), function() {
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
                                                                uuid: "189"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    }, function() {
                                                        return [i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            value: e.getCachedValue(t.getId("czX3t+qN40WGlBGBvR1_tA.Value"), function() {
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
                                                                uuid: "190"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    })), i.createElement(V, {
                                                        getOwnerSpan: c(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: c(function() {
                                                            return f.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: w.space.small
                                                        },
                                                        events: {
                                                            _handleError: c(function(s) {
                                                                l.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "191",
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
                                                        uuid: "192"
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
                                                        uuid: "193"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                    return [i.createElement(o, {
                                                        align: 0,
                                                        animate: !1,
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "194"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                        return [i.createElement(o, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column align-items-flex-end",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "195"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(d, {
                                                            value: e.getCachedValue(t.getId("d9ERWUAXFU+FeGxBDM1j3A.Value"), function() {
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
                                                                uuid: "196"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.getCachedValue(t.getId("gf2I0+O2LEem2fFY2JDNfw.Value"), function() {
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
                                                                uuid: "197"
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
                                                                uuid: "198"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(d, {
                                                            value: e.getCachedValue(t.getId("srkIqKbM_kCKLNydJM6REQ.Value"), function() {
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
                                                                uuid: "199"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.getCachedValue(t.getId("9VKGg5_NAUet7dVkA1qpTw.Value"), function() {
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
                                                                uuid: "200"
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
                                                        value: e.getCachedValue(t.getId("8l3C1c09Skqpiec65wqkwQ.Value"), function() {
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
                                                            uuid: "201"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                })), i.createElement(x, {
                                                    enabled: e.getCachedValue(t.getId("lBkB3Gl2o021t3fu_OGPkg.Enabled"), function() {
                                                        return e.variables.showCurrencySwitcherVar ? e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr && !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)) : e.widgets.get(t.getId("InputTransferAmount")).validAttr && !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0))
                                                    }, function() {
                                                        return e.variables.showCurrencySwitcherVar
                                                    }, function() {
                                                        return e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.widgets.get(t.getId("InputTransferAmount")).validAttr
                                                    }),
                                                    isDefault: !1,
                                                    onClick: c(function() {
                                                        return Promise.resolve().then(function() {
                                                            var s = v.clone();
                                                            return l.transferOnClick$Action(l.callContext(s))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "202"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Transfer"))]
                                            })]
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [n(e.variables.isTransferToOpenVar), n(e.variables.isTransferFromOpenVar), n(e.variables.transferFromAccountListVar), n(e.widgets.get(t.getId("InputTransferAmount")).validAttr), n(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), n(e.variables.convertedFinalAmountVar), n(e.variables.exchangeRateCountdownTimerVar), n(e.variables.finalAmountVar), n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar), n(e.variables.convertedCalculatedFeesVar), n(e.variables.transferToConvertedAmountVar), n(e.variables.convertedTransferAmountVar), n(e.variables.calculatedFeesVar), n(e.variables.transferFromConvertedAmountVar), n(e.variables.transferToVar.formattedBalanceAttr), n(e.variables.transferToVar.currencyAttr), n(e.variables.transferToVar.fractionalDigitsAttr), n(e.variables.transferToVar.nameAttr), n(e.variables.transferToVar.iconAttr), n(e.variables.transferAmountVar), n(e.variables.currencySwitcherVar), n(e.variables.showCurrencySwitcherVar), n(e.variables.isTransferSuccessVar), n(e.variables.transferFromVar.formattedBalanceAttr), n(e.variables.transferFromVar.currencyAttr), n(e.variables.transferFromVar.fractionalDigitsAttr), n(e.variables.transferFromVar.nameAttr), n(e.variables.transferFromVar.iconAttr), n(e.variables.hasNoAccountsVar), n(e.variables.activeWalletVar.isCrpytoAttr), n(e.variables.activeWalletVar.currencyAttr), n(e.variables.activeWalletVar.nameAttr), n(e.variables.hasNoFundsVar)]
                        })]
                    })
                },
                _dependencies: [n(e.variables.isTransferToOpenVar), n(e.variables.isTransferFromOpenVar), n(e.variables.transferFromAccountListVar), n(e.widgets.get(t.getId("InputTransferAmount")).validAttr), n(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), n(e.variables.convertedFinalAmountVar), n(e.variables.exchangeRateCountdownTimerVar), n(e.variables.finalAmountVar), n(e.variables.transferAccountListVar), n(e.variables.transferAccountKeyVar), n(e.variables.convertedCalculatedFeesVar), n(e.variables.transferToConvertedAmountVar), n(e.variables.convertedTransferAmountVar), n(e.variables.calculatedFeesVar), n(e.variables.transferFromConvertedAmountVar), n(e.variables.transferToVar.formattedBalanceAttr), n(e.variables.transferToVar.currencyAttr), n(e.variables.transferToVar.fractionalDigitsAttr), n(e.variables.transferToVar.nameAttr), n(e.variables.transferToVar.iconAttr), n(e.variables.transferAmountVar), n(e.variables.currencySwitcherVar), n(e.variables.showCurrencySwitcherVar), n(e.variables.isTransferSuccessVar), n(e.variables.transferFromVar.formattedBalanceAttr), n(e.variables.transferFromVar.currencyAttr), n(e.variables.transferFromVar.fractionalDigitsAttr), n(e.variables.transferFromVar.nameAttr), n(e.variables.transferFromVar.iconAttr), n(e.variables.hasNoAccountsVar), n(e.variables.activeWalletVar.isCrpytoAttr), n(e.variables.activeWalletVar.currencyAttr), n(e.variables.activeWalletVar.nameAttr), n(e.variables.hasNoFundsVar)]
            }))
        }
    };
c(S, "View");
var ie = S,
    Ze = ie;
export {
    Ze as
    default
};