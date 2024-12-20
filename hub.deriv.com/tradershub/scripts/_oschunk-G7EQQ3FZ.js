import {
    a as B
} from "./_oschunk-HMQZOKZD.js";
import {
    a as de
} from "./_oschunk-HZQ7AFCF.js";
import {
    a as ue
} from "./_oschunk-IEM42HJQ.js";
import "./_oschunk-OO74O67H.js";
import {
    a as Q
} from "./_oschunk-MQ3SXFQ7.js";
import "./_oschunk-W6ZEDFD5.js";
import "./_oschunk-AKPRKE3L.js";
import "./_oschunk-7EJDEKFB.js";
import "./_oschunk-EK7BIWKQ.js";
import "./_oschunk-RAZ4EXDC.js";
import "./_oschunk-PCMUJO6C.js";
import {
    a as q
} from "./_oschunk-ZGZGC7WW.js";
import {
    a as V
} from "./_oschunk-GSA6MIEZ.js";
import "./_oschunk-PASQVAVD.js";
import "./_oschunk-TMT5K6IM.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import {
    a as j
} from "./_oschunk-LURWXPZ6.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as x,
    c as le,
    d as U,
    h as n,
    j as d,
    k as T,
    l as I,
    r as b,
    s as z,
    t as ce,
    v as G,
    y as m
} from "./_oschunk-E7JQAU4J.js";
import {
    a as se
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as oe,
    g as L,
    i as W
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    d as ne
} from "./_oschunk-VADNKVBQ.js";
import {
    l as $
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    Pf as D,
    Rb as K,
    a as w
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as E
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as ae
} from "./_oschunk-DVBKI63I.js";
var i = ae(oe());
var R = ae(oe());
var h = E,
    X = class X extends h.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AccountListByKey", "accountListByKeyVar", "AccountListByKey", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("AccountList", "accountListIn", "AccountList", !0, !1, h.DataTypes.DataTypes.RecordList, function() {
                return h.DataTypes.ImmutableBase.getData(new D)
            }, !1, D), this.attr("_accountListInDataFetchStatus", "_accountListInDataFetchStatus", "_accountListInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AccountKey", "accountKeyIn", "AccountKey", !0, !1, h.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", !0, !1, h.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(h.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(X, "VariablesRecord");
var k = X;
k.init();
var Z = class Z extends h.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(Z, "WidgetsRecord");
var J = Z,
    Y = class Y extends h.Model.BaseViewModel {
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
s(Y, "Model");
var M = Y;
M._hasValidationWidgetsValue = void 0;
var fe = new h.Model.ModelFactory(M);
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
                        y.value = P.SystemActions.listFilter(u.variables.accountListIn, function(l) {
                            return u.variables.accountKeyIn === l.accountCategoryAttr
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
                        var l = new P.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars")));
                        return l.value.accountDataInLocal = t.clone(), P.Flow.executeAsyncFlow(function() {
                            return v.onClickAction$Action(l.value.accountDataInLocal, u)
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
    s(e, "ControllerInner");
    let H = e;
    ee = H, ee.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars", [{
        name: "AccountData",
        attrName: "accountDataInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new K
        }, "defaultValue"),
        complexType: K
    }])
}
var ee, me = new P.Controller.ControllerFactory(ee, se);
var ye = E,
    te = W.PlaceholderContent,
    Pe = W.IteratorPlaceholderContent,
    O = class O extends L.BaseWebBlock {
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
                c = this.controller,
                t = this.idService,
                u = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                g = O.ifWidget,
                y = O.textWidget,
                l = O.asPrimitiveValue,
                pe = O.getTranslation,
                f = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(n, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, R.createElement(n, {
                align: 0,
                animate: !0,
                visible: !e.variables.accountListByKeyVar.isEmpty,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, R.createElement(d, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: e.variables.accountKeyIn,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: ye.Model.calculateDataFetchStatus(e.variables._accountKeyInDataFetchStatus)
            })), R.createElement(T, {
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
                    uuid: "3"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new Pe(function(o, p) {
                        return [R.createElement(I, {
                            onClick: s(function() {
                                return Promise.resolve().then(function() {
                                    var _ = p.clone();
                                    return c.onClickAccount$Action(e.variables.accountListByKeyVar.getCurrent(p.iterationContext), c.callContext(_))
                                })
                            }, "onClick"),
                            style: "walets-list-item display-flex flex-direction-column gap-s gap-s",
                            triggerActionOnFullSwipeLeft: !1,
                            triggerActionOnFullSwipeRight: !1,
                            _idProps: {
                                service: o,
                                name: "ListItem"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                leftActions: te.Empty,
                                content: new te(function() {
                                    return [R.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: o,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(b, {
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: 1,
                                        url: e.variables.accountListByKeyVar.getCurrent(p.iterationContext).iconAttr,
                                        _idProps: {
                                            service: o,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }), R.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex-1",
                                        visible: !0,
                                        _idProps: {
                                            service: o,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: o,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(d, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "text-neutral-8",
                                        value: e.variables.accountListByKeyVar.getCurrent(p.iterationContext).nameAttr,
                                        _idProps: {
                                            service: o,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    })), R.createElement(d, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: e.variables.accountListByKeyVar.getCurrent(p.iterationContext).formattedBalanceAttr,
                                        _idProps: {
                                            service: o,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                rightActions: te.Empty
                            },
                            _dependencies: [l(e.variables.accountListByKeyVar.getCurrent(p.iterationContext).formattedBalanceAttr), l(e.variables.accountListByKeyVar.getCurrent(p.iterationContext).nameAttr), l(e.variables.accountListByKeyVar.getCurrent(p.iterationContext).iconAttr)]
                        })]
                    }, v, t, "1")
                },
                _dependencies: []
            })))
        }
    };
s(O, "View");
var re = O,
    F = re;
var a = E,
    A = W.PlaceholderContent,
    N = W.IteratorPlaceholderContent,
    S = class S extends L.BaseWebScreen {
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
            return [q, Q, F, V, B, j]
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return ue
        }
        get title() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                u = c.validationService,
                r = c.callContext(),
                v = S.asPrimitiveValue,
                g = S.getTranslation,
                y = this;
            return a.Injector.resolve(a.ServiceNames.TranslationsService).getMessage("cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1", "Transfer")
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                u = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                g = S.ifWidget,
                y = S.textWidget,
                l = S.asPrimitiveValue,
                pe = S.getTranslation,
                f = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(q, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: e.variables.isLoadingVar
                },
                events: {
                    _handleError: s(function(o) {
                        c.handleError(o)
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
                    content: new A(function() {
                        return [i.createElement(Q, {
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
                                _handleError: s(function(o) {
                                    c.handleError(o)
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
                                walletOverlayPageContent: new A(function() {
                                    return [g(e.variables.hasNoFundsVar, !1, this, function() {
                                        return [i.createElement(n, {
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
                                        }), i.createElement(n, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column align-items-center",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(m, {
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
                                        }), i.createElement(n, {
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
                                        }))), i.createElement(n, {
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
                                            onClick: s(function() {
                                                try {
                                                    a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                } catch (o) {
                                                    if (o.name !== "RedirectOccurredException") throw o
                                                }
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
                                            return [i.createElement(n, {
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
                                            }), i.createElement(n, {
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
                                            }, i.createElement(m, {
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
                                            }), "Add a trading account or Wallet in Trader's Hub to receive funds from this Wallet."), i.createElement(n, {
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
                                                onClick: s(function() {
                                                    try {
                                                        a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (o) {
                                                        if (o.name !== "RedirectOccurredException") throw o
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
                                            return [g(e.variables.transferFromVar.equals(e.variables.nullTransferAccountVar) && e.variables.showInitialTransferModalVar, !1, this, function() {
                                                return [i.createElement(n, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column gap-m",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "16"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(m, {
                                                    style: "font-bold font-size-h6",
                                                    text: ["Transfer from"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "17"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), i.createElement(n, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ModalContent3"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(T, {
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
                                                        uuid: "19"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        content: new N(function(o, p) {
                                                            return [i.createElement(F, {
                                                                getOwnerSpan: s(function() {
                                                                    return f.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: s(function() {
                                                                    return f.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    AccountList: e.variables.transferFromAccountListVar,
                                                                    AccountKey: e.variables.transferAccountKeyVar.getCurrent(p.iterationContext)
                                                                },
                                                                events: {
                                                                    _handleError: s(function(_) {
                                                                        c.handleError(_)
                                                                    }, "_handleError"),
                                                                    onClickAction$Action: s(function(_) {
                                                                        var C = p.clone();
                                                                        c.onClickTransferFromAccount$Action(_, c.callContext(C))
                                                                    }, "onClickAction$Action")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: o,
                                                                    uuid: "20",
                                                                    alias: "3"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            })]
                                                        }, v, t, "1")
                                                    },
                                                    _dependencies: [l(e.variables.transferFromAccountListVar)]
                                                })))]
                                            }, function() {
                                                return [g(e.variables.isTransferSuccessVar, !1, this, function() {
                                                    return [i.createElement(n, {
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
                                                            uuid: "22"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(m, {
                                                        style: "font-bold font-size-h6 margin-y-l",
                                                        text: ["Transfer successful"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "23"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(n, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "full-width",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                            return [i.createElement(n, {
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
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferFromDetails2"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8 margin-bottom-s",
                                                                text: ["From"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "27"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between align-items-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "FromTransactionDetailsWrapper2"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "29"
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
                                                                    uuid: "30"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferFromVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "31"
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
                                                                    uuid: "32"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
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
                                                                    _handleError: s(function(o) {
                                                                        c.handleError(o)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "33",
                                                                    alias: "4"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferToDetails2"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8 margin-bottom-s",
                                                                text: ["To"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "35"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between align-items-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "ToTransactionDetailsWrapper2"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "37"
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
                                                                    uuid: "38"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferToVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "39"
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
                                                                    uuid: "40"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
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
                                                                    _handleError: s(function(o) {
                                                                        c.handleError(o)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "41",
                                                                    alias: "5"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferFees"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8",
                                                                text: ["Transfer fee (2%)"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "43"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.getCachedValue(t.getId("zJO7Ake8lE6Sauidfc6H0A.Value"), function() {
                                                                    return (e.variables.activeWalletVar.is_cryptoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.activeWalletVar.is_cryptoAttr
                                                                }, function() {
                                                                    return e.variables.calculatedFeesVar
                                                                }, function() {
                                                                    return e.variables.transferFromVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "44"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })))]
                                                        }, function() {
                                                            return [i.createElement(n, {
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
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferFromDetails3"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8 margin-bottom-s",
                                                                text: ["From"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "47"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between align-items-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "FromTransactionDetailsWrapper3"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "49"
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
                                                                    uuid: "50"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferFromVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "51"
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
                                                                    uuid: "52"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
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
                                                                    _handleError: s(function(o) {
                                                                        c.handleError(o)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "53",
                                                                    alias: "6"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferToDetails3"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8 margin-bottom-s",
                                                                text: ["To"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "55"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between align-items-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "ToTransactionDetailsWrapper3"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "57"
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
                                                                    uuid: "58"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                extendedProperties: {
                                                                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    marginLeft: "0px"
                                                                },
                                                                value: e.variables.transferToVar.nameAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "59"
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
                                                                    uuid: "60"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))), i.createElement(V, {
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
                                                                    _handleError: s(function(o) {
                                                                        c.handleError(o)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: u
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "61",
                                                                    alias: "7"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            }), i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex justify-content-space-between",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "TransferFees2"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }, i.createElement(m, {
                                                                style: "text-neutral-8",
                                                                text: ["Transfer fee (2%)"],
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "63"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), i.createElement(d, {
                                                                gridProperties: {
                                                                    classes: "ThemeGrid_MarginGutter"
                                                                },
                                                                value: e.getCachedValue(t.getId("1O8P8MDrEEC3qUVH7c_b3A.Value"), function() {
                                                                    return (e.variables.activeWalletVar.is_cryptoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.activeWalletVar.is_cryptoAttr
                                                                }, function() {
                                                                    return e.variables.convertedCalculatedFeesVar
                                                                }, function() {
                                                                    return e.variables.transferFromVar.currencyAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "64"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })))]
                                                        })]
                                                    }, function() {
                                                        return [i.createElement(n, {
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
                                                        }, i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "TransferFromDetails"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(m, {
                                                            style: "text-neutral-8 margin-bottom-s",
                                                            text: ["From"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "67"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "FromTransactionDetailsWrapper"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "69"
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
                                                                uuid: "70"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.variables.transferFromVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "71"
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
                                                                uuid: "72"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))), i.createElement(V, {
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
                                                                _handleError: s(function(o) {
                                                                    c.handleError(o)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "73",
                                                                alias: "8"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            _dependencies: []
                                                        }), i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "TransferToDetails"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(m, {
                                                            style: "text-neutral-8 margin-bottom-s",
                                                            text: ["To"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "75"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "ToTransactionDetailsWrapper"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "77"
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
                                                                uuid: "78"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(d, {
                                                            extendedProperties: {
                                                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                            },
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: e.variables.transferToVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "79"
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
                                                                uuid: "80"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))))]
                                                    })), i.createElement(n, {
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
                                                        onClick: s(function() {
                                                            var o = v.clone();
                                                            c.makeNewTransferBtnOnClick$Action(c.callContext(o))
                                                        }, "onClick"),
                                                        style: "btn",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "82"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, "Make new Transfer")))]
                                                }, function() {
                                                    return [i.createElement(n, {
                                                        align: 0,
                                                        animate: !0,
                                                        style: "display-flex flex-direction-column gap-m",
                                                        visible: !e.variables.isLoadingVar,
                                                        _idProps: {
                                                            service: t,
                                                            name: "MainContainer"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(m, {
                                                        style: "font-bold font-size-h6",
                                                        text: ["Transfer Amount"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "84"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), i.createElement(n, {
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
                                                            var o = v.clone();
                                                            c.openTransferFromModal$Action(c.callContext(o))
                                                        }, "onClick"),
                                                        style: "list-item wallets-selected-item margin-bottom-s",
                                                        triggerActionOnFullSwipeLeft: !1,
                                                        triggerActionOnFullSwipeRight: !1,
                                                        _idProps: {
                                                            service: t,
                                                            name: "FromListItem"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        placeholders: {
                                                            leftActions: A.Empty,
                                                            content: new A(function() {
                                                                return [i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    gridProperties: {
                                                                        classes: "OSInline"
                                                                    },
                                                                    style: "display-flex align-items-center gap-base",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "87"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "wallets-selected-item__icon",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "88"
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
                                                                        uuid: "89"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })), i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "flex-1",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "90"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex flex-direction-column",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "91"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "92"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(m, {
                                                                    style: "font-bold",
                                                                    text: ["From"],
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "93"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }), i.createElement(d, {
                                                                    gridProperties: {
                                                                        marginLeft: "0px"
                                                                    },
                                                                    value: " " + e.variables.transferFromVar.nameAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "94"
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
                                                                        uuid: "95"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }))), i.createElement(n, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "96"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, i.createElement(b, {
                                                                    image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "97"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })))]
                                                            }),
                                                            rightActions: A.Empty
                                                        }
                                                    }), g(e.variables.transferToVar.equals(e.variables.nullTransferAccountVar) && e.variables.showInitialTransferModalVar, !1, this, function() {
                                                        return [i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column margin-top-m",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "98"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(m, {
                                                            style: "font-bold font-size-h6 margin-bottom-base",
                                                            text: ["Transfer to"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "99"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "ModalContent4"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(T, {
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
                                                                uuid: "101"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            placeholders: {
                                                                content: new N(function(o, p) {
                                                                    return [i.createElement(F, {
                                                                        getOwnerSpan: s(function() {
                                                                            return f.getChildSpan("render")
                                                                        }, "getOwnerSpan"),
                                                                        getOwnerDisposeSpan: s(function() {
                                                                            return f.getChildSpan("destroy")
                                                                        }, "getOwnerDisposeSpan"),
                                                                        inputs: {
                                                                            AccountKey: e.variables.transferAccountKeyVar.getCurrent(p.iterationContext),
                                                                            AccountList: e.variables.transferAccountListVar
                                                                        },
                                                                        events: {
                                                                            _handleError: s(function(_) {
                                                                                c.handleError(_)
                                                                            }, "_handleError"),
                                                                            onClickAction$Action: s(function(_) {
                                                                                var C = p.clone();
                                                                                c.onClickTransferToAccount$Action(_, c.callContext(C))
                                                                            }, "onClickAction$Action")
                                                                        },
                                                                        _validationProps: {
                                                                            validationService: u
                                                                        },
                                                                        _idProps: {
                                                                            service: o,
                                                                            uuid: "102",
                                                                            alias: "9"
                                                                        },
                                                                        _widgetRecordProvider: r,
                                                                        _dependencies: []
                                                                    })]
                                                                }, v, t, "2")
                                                            },
                                                            _dependencies: [l(e.variables.transferAccountListVar)]
                                                        })))]
                                                    }, function() {
                                                        return [i.createElement(V, {
                                                            getOwnerSpan: s(function() {
                                                                return f.getChildSpan("render")
                                                            }, "getOwnerSpan"),
                                                            getOwnerDisposeSpan: s(function() {
                                                                return f.getChildSpan("destroy")
                                                            }, "getOwnerDisposeSpan"),
                                                            inputs: {
                                                                IsVertical: !0,
                                                                Space: w.space.small
                                                            },
                                                            events: {
                                                                _handleError: s(function(o) {
                                                                    c.handleError(o)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "103",
                                                                alias: "10"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            _dependencies: []
                                                        }), i.createElement(I, {
                                                            onClick: s(function() {
                                                                var o = v.clone();
                                                                c.openTransferToModal$Action(c.callContext(o))
                                                            }, "onClick"),
                                                            style: "list-item wallets-selected-item",
                                                            triggerActionOnFullSwipeLeft: !1,
                                                            triggerActionOnFullSwipeRight: !1,
                                                            _idProps: {
                                                                service: t,
                                                                name: "ToListItem"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            placeholders: {
                                                                leftActions: A.Empty,
                                                                content: new A(function() {
                                                                    return [i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        gridProperties: {
                                                                            classes: "OSInline"
                                                                        },
                                                                        style: "display-flex align-items-center gap-base",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "105"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !0,
                                                                        style: "wallets-selected-item__icon",
                                                                        visible: e.getCachedValue(t.getId("OYab2G1R4kGBDm9d0oiing.Visible"), function() {
                                                                            return e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                                        }, function() {
                                                                            return e.variables.transferToVar.iconAttr
                                                                        }),
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "106"
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
                                                                            uuid: "107"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })), i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !0,
                                                                        style: "flex-1",
                                                                        visible: e.getCachedValue(t.getId("aqC+ZpSejEW_vLONOGODfw.Visible"), function() {
                                                                            return e.variables.transferToVar.iconAttr !== a.BuiltinFunctions.nullTextIdentifier()
                                                                        }, function() {
                                                                            return e.variables.transferToVar.iconAttr
                                                                        }),
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "108"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex flex-direction-column",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "109"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "110"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(m, {
                                                                        style: "font-bold",
                                                                        text: ["To"],
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "111"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }), i.createElement(d, {
                                                                        gridProperties: {
                                                                            marginLeft: "0px"
                                                                        },
                                                                        value: " " + e.variables.transferToVar.nameAttr,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "112"
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
                                                                            uuid: "113"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }))), i.createElement(n, {
                                                                        align: 0,
                                                                        animate: !1,
                                                                        style: "display-flex",
                                                                        visible: !0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "114"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    }, i.createElement(b, {
                                                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                        type: 0,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "115"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })))]
                                                                }),
                                                                rightActions: A.Empty
                                                            }
                                                        })]
                                                    })), i.createElement(n, {
                                                        align: 0,
                                                        animate: !0,
                                                        visible: (e.variables.transferFromVar !== e.variables.nullTransferAccountVar || e.variables.transferToVar !== e.variables.nullTransferAccountVar) && !e.variables.showInitialTransferModalVar,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferAmountInput"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(ce, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        style: "margin-bottom-s",
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "117"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, "Transfer amount", i.createElement(B, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
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
                                                            _handleError: s(function(o) {
                                                                c.handleError(o)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "118",
                                                            alias: "11"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    })), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex gap-s full-width align-items-flex-start",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "InputAmountContainer"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "full-width",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "120"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(z, {
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            enabled: !0,
                                                            extendedProperties: {
                                                                "data-dirty": "False",
                                                                pattern: "[0-9]*"
                                                            },
                                                            gridProperties: {
                                                                classes: "OSFillParent"
                                                            },
                                                            inputType: 2,
                                                            mandatory: !1,
                                                            maxLength: 0,
                                                            onChange: s(function() {
                                                                var o = v.clone();
                                                                c.onChangeInputTransferConvertedAmount$Action(c.callContext(o))
                                                            }, "onChange"),
                                                            style: "form-control full-height full-width",
                                                            variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(o) {
                                                                e.variables.transferAmountVar = o
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                name: "InputTransferExchangeAmount"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(le, {
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            enabled: !0,
                                                            mandatory: !1,
                                                            onChange: s(function() {
                                                                var o = v.clone();
                                                                c.exchangeRateSwitcherOnChange$Action(c.callContext(o))
                                                            }, "onChange"),
                                                            style: "real-demo-switcher",
                                                            variable: e.createVariable(a.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(o) {
                                                                e.variables.currencySwitcherVar = o
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                name: "ExchangeRateSwitcher"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(U, {
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
                                                                uuid: "124"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), i.createElement(U, {
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
                                                                uuid: "126"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))))]
                                                    }, function() {
                                                        return [i.createElement(j, {
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
                                                                _handleError: s(function(o) {
                                                                    c.handleError(o)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "127",
                                                                alias: "12"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            placeholders: {
                                                                icon: new A(function() {
                                                                    return [i.createElement(d, {
                                                                        value: e.variables.activeWalletVar.currencyAttr,
                                                                        _idProps: {
                                                                            service: t,
                                                                            uuid: "128"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })]
                                                                }),
                                                                input: new A(function() {
                                                                    return [i.createElement(z, {
                                                                        _validationProps: {
                                                                            validationService: u
                                                                        },
                                                                        enabled: !0,
                                                                        inputType: 2,
                                                                        mandatory: !1,
                                                                        maxLength: 0,
                                                                        onChange: s(function() {
                                                                            return Promise.resolve().then(function() {
                                                                                var o = v.clone();
                                                                                return c.onChangeInputTransferAmount$Action(c.callContext(o))
                                                                            })
                                                                        }, "onChange"),
                                                                        style: "form-control",
                                                                        variable: e.createVariable(a.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(o) {
                                                                            e.variables.transferAmountVar = o
                                                                        }),
                                                                        _idProps: {
                                                                            service: t,
                                                                            name: "InputTransferAmount"
                                                                        },
                                                                        _widgetRecordProvider: r
                                                                    })]
                                                                })
                                                            },
                                                            _dependencies: [l(e.variables.transferAmountVar), l(e.variables.activeWalletVar.currencyAttr)]
                                                        })]
                                                    }), i.createElement(B, {
                                                        getOwnerSpan: s(function() {
                                                            return f.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: s(function() {
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
                                                            _handleError: s(function(o) {
                                                                c.handleError(o)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "130",
                                                            alias: "13"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    })), i.createElement(n, {
                                                        align: 0,
                                                        animate: !0,
                                                        style: "wallets-transfer-footer",
                                                        visible: e.variables.transferFromVar !== e.variables.nullTransferAccountVar && e.variables.transferToVar !== e.variables.nullTransferAccountVar && !e.variables.showInitialTransferModalVar,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFooter"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(n, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "full-width",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "132"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [i.createElement(n, {
                                                            align: 0,
                                                            animate: !0,
                                                            visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "133"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "full-width display-flex justify-content-space-between",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "134"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(m, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            style: "text-neutral-8",
                                                            text: ["Transfer amount"],
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
                                                                    uuid: "136"
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
                                                                    uuid: "137"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        })), i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex justify-content-space-between align-items-center",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "138"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, i.createElement(m, {
                                                            extendedProperties: {
                                                                style: "font-size: 12px;"
                                                            },
                                                            style: "text-neutral-8",
                                                            text: ["Transfer fee"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "139"
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
                                                                    uuid: "140"
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
                                                                    uuid: "141"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        })), i.createElement(V, {
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
                                                                _handleError: s(function(o) {
                                                                    c.handleError(o)
                                                                }, "_handleError")
                                                            },
                                                            _validationProps: {
                                                                validationService: u
                                                            },
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "142",
                                                                alias: "14"
                                                            },
                                                            _widgetRecordProvider: r,
                                                            _dependencies: []
                                                        }))]
                                                    }, function() {
                                                        return []
                                                    })), i.createElement(n, {
                                                        align: 0,
                                                        animate: !0,
                                                        style: "full-width display-flex justify-content-space-between",
                                                        visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "143"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 16px;"
                                                        },
                                                        style: "text-neutral-8",
                                                        text: ["Amount received"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "144"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                        return [i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "145"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                            return [i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column align-items-flex-end",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "146"
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
                                                                    uuid: "147"
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
                                                                    uuid: "148"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }))]
                                                        }, function() {
                                                            return [i.createElement(n, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: "display-flex flex-direction-column align-items-flex-end",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "149"
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
                                                                    uuid: "150"
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
                                                                    uuid: "151"
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
                                                                return (e.variables.activeWalletVar.is_cryptoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                            }, function() {
                                                                return e.variables.activeWalletVar.is_cryptoAttr
                                                            }, function() {
                                                                return e.variables.transferAmountVar
                                                            }, function() {
                                                                return e.variables.activeWalletVar.currencyAttr
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "152"
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
                                                        onClick: s(function() {
                                                            return Promise.resolve().then(function() {
                                                                var o = v.clone();
                                                                return c.submitTransferOnClick$Action(c.callContext(o))
                                                            })
                                                        }, "onClick"),
                                                        style: "btn btn-primary",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "153"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, "Transfer")))]
                                                })]
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
                                    }, i.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "modal-title",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer from"],
                                        _idProps: {
                                            service: t,
                                            uuid: "156"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(b, {
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var o = v.clone();
                                                c.onCloseTransferFromModal$Action(c.callContext(o))
                                            }, "onClick")
                                        },
                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "157"
                                        },
                                        _widgetRecordProvider: r
                                    })), i.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(T, {
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
                                            uuid: "159"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new N(function(o, p) {
                                                return [i.createElement(F, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferFromAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(p.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: s(function(_) {
                                                            c.handleError(_)
                                                        }, "_handleError"),
                                                        onClickAction$Action: s(function(_) {
                                                            var C = p.clone();
                                                            c.onClickTransferFromAccount$Action(_, c.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: o,
                                                        uuid: "160",
                                                        alias: "15"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })]
                                            }, v, t, "3")
                                        },
                                        _dependencies: [l(e.variables.transferFromAccountListVar)]
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
                                    }, i.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "modal-title",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader2"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer to"],
                                        _idProps: {
                                            service: t,
                                            uuid: "163"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(b, {
                                        extendedEvents: {
                                            onClick: s(function() {
                                                var o = v.clone();
                                                c.onCloseTransferToModal$Action(c.callContext(o))
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
                                            uuid: "164"
                                        },
                                        _widgetRecordProvider: r
                                    })), i.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent2"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(T, {
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
                                            uuid: "166"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new N(function(o, p) {
                                                return [i.createElement(F, {
                                                    getOwnerSpan: s(function() {
                                                        return f.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: s(function() {
                                                        return f.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(p.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: s(function(_) {
                                                            c.handleError(_)
                                                        }, "_handleError"),
                                                        onClickAction$Action: s(function(_) {
                                                            var C = p.clone();
                                                            c.onClickTransferToAccount$Action(_, c.callContext(C))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: u
                                                    },
                                                    _idProps: {
                                                        service: o,
                                                        uuid: "167",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })]
                                            }, v, t, "4")
                                        },
                                        _dependencies: [l(e.variables.transferAccountListVar)]
                                    }), i.createElement(n, {
                                        align: 0,
                                        animate: !0,
                                        extendedProperties: {
                                            style: "border-radius: 8px;"
                                        },
                                        style: "background-info-light padding-base",
                                        visible: e.variables.showDisclaimerMessageVar,
                                        _idProps: {
                                            service: t,
                                            name: "DisclaimerMessage"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(n, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s align-items-flex-start",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "169"
                                        },
                                        _widgetRecordProvider: r
                                    }, i.createElement(b, {
                                        image: a.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "170"
                                        },
                                        _widgetRecordProvider: r
                                    }), i.createElement(d, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: "You can only transfer funds from your " + e.variables.transferFromVar.nameAttr + " account to your linked " + e.variables.transferToVar.nameAttr + ".",
                                        _idProps: {
                                            service: t,
                                            uuid: "171"
                                        },
                                        _widgetRecordProvider: r
                                    })))))]
                                }),
                                mobileFooterContent: new A(function() {
                                    return [g(e.variables.hasNoFundsVar, !1, this, function() {
                                        return [i.createElement(n, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base background-neutral-0",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "172"
                                            },
                                            _widgetRecordProvider: r
                                        }, i.createElement(x, {
                                            enabled: !0,
                                            isDefault: !1,
                                            onClick: s(function() {
                                                try {
                                                    a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets/deposit", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                } catch (o) {
                                                    if (o.name !== "RedirectOccurredException") throw o
                                                }
                                            }, "onClick"),
                                            style: "btn btn-primary full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "173"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Deposit"))]
                                    }, function() {
                                        return [g(e.variables.hasNoAccountsVar, !1, this, function() {
                                            return [i.createElement(n, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                                },
                                                style: "full-width padding-base background-neutral-0",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "174"
                                                },
                                                _widgetRecordProvider: r
                                            }, i.createElement(x, {
                                                enabled: !0,
                                                isDefault: !1,
                                                onClick: s(function() {
                                                    try {
                                                        a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "wallets", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (o) {
                                                        if (o.name !== "RedirectOccurredException") throw o
                                                    }
                                                }, "onClick"),
                                                style: "btn btn-primary full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "175"
                                                },
                                                _widgetRecordProvider: r
                                            }, "OK"))]
                                        }, function() {
                                            return [g(e.variables.isTransferSuccessVar, !1, this, function() {
                                                return [i.createElement(n, {
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
                                                        uuid: "176"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(x, {
                                                    enabled: !0,
                                                    extendedProperties: {
                                                        style: "background-color: #fff; border-color: #101213; color: #101213;"
                                                    },
                                                    isDefault: !1,
                                                    onClick: s(function() {
                                                        var o = v.clone();
                                                        c.makeNewTransferBtnOnClick$Action(c.callContext(o))
                                                    }, "onClick"),
                                                    style: "btn full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "177"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Make new transfer"))]
                                            }, function() {
                                                return [i.createElement(n, {
                                                    align: 0,
                                                    animate: !0,
                                                    extendedProperties: {
                                                        style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                                    },
                                                    style: "full-width padding-base background-neutral-0",
                                                    visible: e.variables.transferFromVar !== e.variables.nullTransferAccountVar && e.variables.transferToVar !== e.variables.nullTransferAccountVar && !e.variables.showInitialTransferModalVar,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "178"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                    return [i.createElement(n, {
                                                        align: 0,
                                                        animate: !0,
                                                        visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "179"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(n, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "full-width display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "180"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        style: "text-neutral-8",
                                                        text: ["Transfer amount"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "181"
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
                                                                uuid: "182"
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
                                                                uuid: "183"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    })), i.createElement(n, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "184"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, i.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        style: "text-neutral-8",
                                                        text: ["Transfer fee"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "185"
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
                                                                uuid: "186"
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
                                                                uuid: "187"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    })), i.createElement(V, {
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
                                                            _handleError: s(function(o) {
                                                                c.handleError(o)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: u
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "188",
                                                            alias: "17"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }))]
                                                }, function() {
                                                    return []
                                                }), i.createElement(n, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-width display-flex justify-content-space-between margin-bottom-base",
                                                    visible: !e.variables.transferAmountVar.equals(a.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "189"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, i.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    style: "text-neutral-8",
                                                    text: ["Amount received"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "190"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), g(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                    return [i.createElement(n, {
                                                        align: 0,
                                                        animate: !1,
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "191"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, g(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                        return [i.createElement(n, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column align-items-flex-end",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "192"
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
                                                                uuid: "193"
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
                                                                uuid: "194"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))]
                                                    }, function() {
                                                        return [i.createElement(n, {
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
                                                                uuid: "197"
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
                                                            return (e.variables.activeWalletVar.is_cryptoAttr ? a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : a.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.is_cryptoAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "198"
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
                                                    onClick: s(function() {
                                                        return Promise.resolve().then(function() {
                                                            var o = v.clone();
                                                            return c.submitTransferOnClick$Action(c.callContext(o))
                                                        })
                                                    }, "onClick"),
                                                    style: "btn btn-primary full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "199"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, "Transfer"))]
                                            })]
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [l(e.variables.showDisclaimerMessageVar), l(e.variables.isTransferToOpenVar), l(e.variables.isTransferFromOpenVar), l(e.widgets.get(t.getId("InputTransferAmount")).validAttr), l(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), l(e.variables.convertedFinalAmountVar), l(e.variables.exchangeRateCountdownTimerVar), l(e.variables.finalAmountVar), l(e.variables.transferAccountListVar), l(e.variables.isLoadingVar), l(e.variables.convertedCalculatedFeesVar), l(e.variables.transferToConvertedAmountVar), l(e.variables.convertedTransferAmountVar), l(e.variables.calculatedFeesVar), l(e.variables.transferFromConvertedAmountVar), l(e.variables.transferToVar), l(e.variables.transferAmountVar), l(e.variables.currencySwitcherVar), l(e.variables.showCurrencySwitcherVar), l(e.variables.isTransferSuccessVar), l(e.variables.transferFromAccountListVar), l(e.variables.transferAccountKeyVar), l(e.variables.showInitialTransferModalVar), l(e.variables.nullTransferAccountVar), l(e.variables.transferFromVar), l(e.variables.hasNoAccountsVar), l(e.variables.activeWalletVar.is_cryptoAttr), l(e.variables.activeWalletVar.currencyAttr), l(e.variables.activeWalletVar.nameAttr), l(e.variables.hasNoFundsVar)]
                        })]
                    })
                },
                _dependencies: [l(e.variables.showDisclaimerMessageVar), l(e.variables.isTransferToOpenVar), l(e.variables.isTransferFromOpenVar), l(e.widgets.get(t.getId("InputTransferAmount")).validAttr), l(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), l(e.variables.convertedFinalAmountVar), l(e.variables.exchangeRateCountdownTimerVar), l(e.variables.finalAmountVar), l(e.variables.transferAccountListVar), l(e.variables.isLoadingVar), l(e.variables.convertedCalculatedFeesVar), l(e.variables.transferToConvertedAmountVar), l(e.variables.convertedTransferAmountVar), l(e.variables.calculatedFeesVar), l(e.variables.transferFromConvertedAmountVar), l(e.variables.transferToVar), l(e.variables.transferAmountVar), l(e.variables.currencySwitcherVar), l(e.variables.showCurrencySwitcherVar), l(e.variables.isTransferSuccessVar), l(e.variables.transferFromAccountListVar), l(e.variables.transferAccountKeyVar), l(e.variables.showInitialTransferModalVar), l(e.variables.nullTransferAccountVar), l(e.variables.transferFromVar), l(e.variables.hasNoAccountsVar), l(e.variables.activeWalletVar.is_cryptoAttr), l(e.variables.activeWalletVar.currencyAttr), l(e.variables.activeWalletVar.nameAttr), l(e.variables.hasNoFundsVar)]
            }))
        }
    };
s(S, "View");
var ie = S,
    tt = ie;
export {
    tt as
    default
};