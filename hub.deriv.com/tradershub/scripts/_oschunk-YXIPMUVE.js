import {
    a as ue
} from "./_oschunk-QM25DKMW.js";
import {
    a as oe
} from "./_oschunk-HQIWX2S2.js";
import "./_oschunk-CYRJE4ZJ.js";
import {
    a as X
} from "./_oschunk-M2HM6MS3.js";
import "./_oschunk-QIDNIYQN.js";
import {
    a as st
} from "./_oschunk-IMVCP5OI.js";
import {
    a as ot
} from "./_oschunk-WMAK2UUF.js";
import "./_oschunk-FJZMBCV5.js";
import "./_oschunk-ESAL6IS4.js";
import "./_oschunk-FRF3DI3V.js";
import "./_oschunk-26LPX23H.js";
import "./_oschunk-QYZYO3AQ.js";
import "./_oschunk-I4HVSXAZ.js";
import "./_oschunk-ZSU2JK2M.js";
import {
    a as de
} from "./_oschunk-3DUHVNXP.js";
import {
    b as xe
} from "./_oschunk-G7GFWP74.js";
import {
    a as W
} from "./_oschunk-5ETXRNLC.js";
import "./_oschunk-T6VVD72L.js";
import "./_oschunk-O5AQVDN2.js";
import "./_oschunk-4SG3ZAXH.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as Ee
} from "./_oschunk-CM2AGQGL.js";
import {
    a as ce
} from "./_oschunk-ALAP5CBN.js";
import "./_oschunk-QVXOCHAU.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as M,
    c as at,
    d as Te,
    h as l,
    j as m,
    k as U,
    l as se,
    r as g,
    s as Ce,
    t as it,
    v as Re,
    w as nt,
    y as b
} from "./_oschunk-42NACYKQ.js";
import {
    a as H
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as ne,
    g as I,
    i as S
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as E,
    b as Z,
    c as k
} from "./_oschunk-DOFMR6EA.js";
import {
    l as N
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Fd as B,
    a as O,
    bk as ie,
    fc as we
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as p
} from "./_oschunk-2JKANR6M.js";
import {
    c as n,
    g as ae
} from "./_oschunk-DVBKI63I.js";
var a = ae(ne());
var T = ae(ne());
var P = p,
    Oe = class Oe extends P.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PageTitle", "pageTitleIn", "PageTitle", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Title", "titleIn", "Title", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Description", "descriptionIn", "Description", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ButtonText", "buttonTextIn", "ButtonText", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLoading", "isLoadingIn", "IsLoading", !0, !1, P.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Image", "imageIn", "Image", !0, !1, P.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", !0, !1, P.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(P.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(Oe, "VariablesRecord");
var ve = Oe;
ve.init();
var De = class De extends P.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(De, "WidgetsRecord");
var Fe = De,
    ee = class ee extends P.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ve
        }
        static getWidgetsRecordConstructor() {
            return Fe
        }
        static get hasValidationWidgets() {
            return ee._hasValidationWidgetsValue === void 0 && (ee._hasValidationWidgetsValue = void 0), ee._hasValidationWidgetsValue
        }
        setInputs(e) {
            "PageTitle" in e && (this.variables.pageTitleIn = e.PageTitle, "_pageTitleInDataFetchStatus" in e && (this.variables._pageTitleInDataFetchStatus = e._pageTitleInDataFetchStatus)), "Title" in e && (this.variables.titleIn = e.Title, "_titleInDataFetchStatus" in e && (this.variables._titleInDataFetchStatus = e._titleInDataFetchStatus)), "Description" in e && (this.variables.descriptionIn = e.Description, "_descriptionInDataFetchStatus" in e && (this.variables._descriptionInDataFetchStatus = e._descriptionInDataFetchStatus)), "ButtonText" in e && (this.variables.buttonTextIn = e.ButtonText, "_buttonTextInDataFetchStatus" in e && (this.variables._buttonTextInDataFetchStatus = e._buttonTextInDataFetchStatus)), "IsLoading" in e && (this.variables.isLoadingIn = e.IsLoading, "_isLoadingInDataFetchStatus" in e && (this.variables._isLoadingInDataFetchStatus = e._isLoadingInDataFetchStatus)), "Image" in e && (this.variables.imageIn = e.Image, "_imageInDataFetchStatus" in e && (this.variables._imageInDataFetchStatus = e._imageInDataFetchStatus))
        }
    };
n(ee, "Model");
var fe = ee;
fe._hasValidationWidgetsValue = void 0;
var ct = new P.Model.ModelFactory(fe);
var dt = {};
var K = p; {
    let e = class e extends K.Controller.BaseViewController {
        constructor(t, d, r) {
            super(t, d, r, dt);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(t) {
                var d = this.model,
                    r = this.controller,
                    v = this.idService;
                return K.Logger.startActiveSpan("ButtonOnClick", function(f) {
                    return f && (f.setAttribute("code.function", "ButtonOnClick"), f.setAttribute("outsystems.function.key", "25f5514c-33dc-463a-81df-4313cca168e6"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("ButtonOnClick"), t = r.callContext(t), K.Flow.executeAsyncFlow(function() {
                            return r.onClick$Action(t)
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(t) {
            this.__buttonOnClick$Action = t
        }
        buttonOnClick$Action(t) {
            var d = this.controller;
            return K.Logger.startActiveSpan("ButtonOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "ButtonOnClick"), r.setAttribute("outsystems.function.key", "25f5514c-33dc-463a-81df-4313cca168e6"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return d.safeExecuteClientAction(d._buttonOnClick$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(t) {
            this._onClick$Action = t
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return k.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let V = e;
    ut = V
}
var ut, vt = new K.Controller.ControllerFactory(ut, H);
var D = p,
    ft = S.PlaceholderContent,
    Jt = S.IteratorPlaceholderContent,
    z = class z extends I.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.WalletActionScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "WalletActionScreen",
                functionKey: "64eb747f-e858-4c12-a1a5-a00bce6d56b4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return [X]
        }
        get modelFactory() {
            return ct
        }
        get controllerFactory() {
            return vt
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                f = z.ifWidget,
                _ = z.textWidget,
                i = z.asPrimitiveValue,
                le = z.getTranslation,
                u = this;
            return T.createElement("div", this.getRootNodeProperties(), T.createElement(X, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HideBackButton: !0,
                    IsLoading: e.variables.isLoadingIn,
                    _isLoadingInDataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._isLoadingInDataFetchStatus),
                    PageTitle: e.variables.pageTitleIn,
                    _pageTitleInDataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._pageTitleInDataFetchStatus),
                    HideWalletHeader: !0
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    walletOverlayPageContent: new ft(function() {
                        return [T.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column justify-content-center align-items-center full-width gap-m",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(g, {
                            type: 1,
                            url: e.variables.imageIn,
                            _idProps: {
                                service: t,
                                uuid: "2"
                            },
                            _widgetRecordProvider: r,
                            url_dataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._imageInDataFetchStatus)
                        }), T.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-s text-align-center",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "DescriptionWrapper"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(m, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: e.getCachedValue(t.getId("_3w3l7mSOEem74v6WvYoxQ.Style"), function() {
                                return "font-bold " + (N.isDesktop$Action(v).isDesktopOut ? "heading5" : "heading4")
                            }),
                            value: e.variables.titleIn,
                            _idProps: {
                                service: t,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._titleInDataFetchStatus)
                        }), T.createElement(m, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            value: e.variables.descriptionIn,
                            _idProps: {
                                service: t,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._descriptionInDataFetchStatus)
                        })), T.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.getCachedValue(t.getId("ButtonWrapper.Visible"), function() {
                                return N.isDesktop$Action(v).isDesktopOut
                            }),
                            _idProps: {
                                service: t,
                                name: "ButtonWrapper"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(M, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: n(function() {
                                return Promise.resolve().then(function() {
                                    var s = v.clone();
                                    return c.buttonOnClick$Action(c.callContext(s))
                                })
                            }, "onClick"),
                            style: e.getCachedValue(t.getId("5dnXK8StiUSEx9ggp4nkXg.Style"), function() {
                                return "btn btn-primary " + (N.isDesktop$Action(v).isDesktopOut ? "" : "full-width")
                            }),
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(m, {
                            value: e.variables.buttonTextIn,
                            _idProps: {
                                service: t,
                                uuid: "8"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._buttonTextInDataFetchStatus)
                        }))))]
                    }),
                    mobileFooterContent: new ft(function() {
                        return [T.createElement(l, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-top: 1px solid var(--color-neutral-3);"
                            },
                            style: "padding-base",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "9"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(M, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: n(function() {
                                try {
                                    D.Navigation.navigateTo(D.Navigation.generateScreenURL("tradershub", "wallets", {}), D.Transitions.createTransition(D.Transitions.TransitionAnimation.Default), null, !0)
                                } catch (s) {
                                    if (s.name !== "RedirectOccurredException") throw s
                                }
                            }, "onClick"),
                            style: "btn btn-primary full-width",
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "10"
                            },
                            _widgetRecordProvider: r
                        }, T.createElement(m, {
                            value: e.variables.buttonTextIn,
                            _idProps: {
                                service: t,
                                uuid: "11"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: D.Model.calculateDataFetchStatus(e.variables._buttonTextInDataFetchStatus)
                        })))]
                    })
                },
                _dependencies: [i(e.variables.buttonTextIn), i(e.variables.descriptionIn), i(e.variables.titleIn), i(e.variables._buttonTextInDataFetchStatus), i(e.variables._descriptionInDataFetchStatus), i(e.variables._titleInDataFetchStatus), i(e.variables._imageInDataFetchStatus), i(e.variables.imageIn)]
            }))
        }
    };
n(z, "View");
var We = z,
    pe = We;
var R = ae(ne());
var x = p,
    ke = class ke extends x.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AccountListByKey", "accountListByKeyVar", "AccountListByKey", !0, !1, x.DataTypes.DataTypes.RecordList, function() {
                return x.DataTypes.ImmutableBase.getData(new ie)
            }, !1, ie), this.attr("AccountList", "accountListIn", "AccountList", !0, !1, x.DataTypes.DataTypes.RecordList, function() {
                return x.DataTypes.ImmutableBase.getData(new ie)
            }, !1, ie), this.attr("_accountListInDataFetchStatus", "_accountListInDataFetchStatus", "_accountListInDataFetchStatus", !0, !1, x.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("AccountKey", "accountKeyIn", "AccountKey", !0, !1, x.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", "_accountKeyInDataFetchStatus", !0, !1, x.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(x.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(ke, "VariablesRecord");
var be = ke;
be.init();
var He = class He extends x.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(He, "WidgetsRecord");
var Le = He,
    Me = class Me extends x.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return be
        }
        static getWidgetsRecordConstructor() {
            return Le
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "AccountList" in e && (this.variables.accountListIn = e.AccountList, "_accountListInDataFetchStatus" in e && (this.variables._accountListInDataFetchStatus = e._accountListInDataFetchStatus)), "AccountKey" in e && (this.variables.accountKeyIn = e.AccountKey, "_accountKeyInDataFetchStatus" in e && (this.variables._accountKeyInDataFetchStatus = e._accountKeyInDataFetchStatus))
        }
    };
n(Me, "Model");
var he = Me;
he._hasValidationWidgetsValue = void 0;
var mt = new x.Model.ModelFactory(he);
var gt = {};
var C = p; {
    let e = class e extends C.Controller.BaseViewController {
        constructor(t, d, r) {
            super(t, d, r, gt);
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
                var d = this.model,
                    r = this.controller,
                    v = this.idService;
                return C.Logger.startActiveSpan("OnReady", function(f) {
                    f && (f.setAttribute("code.function", "OnReady"), f.setAttribute("outsystems.function.key", "3da149ed-a4c5-4a2a-a67e-9a2a8f9eeb13"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), t = r.callContext(t);
                        var _ = new C.DataTypes.VariableHolder;
                        _.value = C.SystemActions.listFilter(d.variables.accountListIn, function(i) {
                            return d.variables.accountKeyIn === i.accountCategoryAttr
                        }, t), d.variables.accountListByKeyVar = _.value.filteredListOut
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onClickAccount$Action() {
            return this.hasOwnProperty("__onClickAccount$Action") || (this.__onClickAccount$Action = function(t, d) {
                var r = this.model,
                    v = this.controller,
                    f = this.idService;
                return C.Logger.startActiveSpan("OnClickAccount", function(_) {
                    return _ && (_.setAttribute("code.function", "OnClickAccount"), _.setAttribute("outsystems.function.key", "a52ee1b6-ed65-4d60-9316-d4d1a677bd65"), _.setAttribute("outsystems.function.owner.name", "tradershub"), _.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), _.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        v.ensureControllerAlive("OnClickAccount"), d = v.callContext(d);
                        var i = new C.DataTypes.VariableHolder(new(v.constructor.getVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars")));
                        return i.value.accountDataInLocal = t.clone(), C.Flow.executeAsyncFlow(function() {
                            return v.onClickAction$Action(i.value.accountDataInLocal, d)
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
            var d = this.controller;
            return C.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "3da149ed-a4c5-4a2a-a67e-9a2a8f9eeb13"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return d.safeExecuteClientAction(d._onReady$Action, t)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onClickAccount$Action(t, d) {
            var r = this.controller;
            return C.Logger.startActiveSpan("OnClickAccount__proxy", function(v) {
                return v && (v.setAttribute("code.function", "OnClickAccount"), v.setAttribute("outsystems.function.key", "a52ee1b6-ed65-4d60-9316-d4d1a677bd65"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClickAccount$Action, d, t)
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
                var d = this.controller,
                    r = this.model,
                    v = this.idService;
                return d.onReady$Action(t)
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
            return k.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let V = e;
    $e = V, $e.registerVariableGroupType("tradershub.WalletBlocks.WalletsTransferList.OnClickAccount$vars", [{
        name: "AccountData",
        attrName: "accountDataInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Record,
        defaultValue: n(function() {
            return new B
        }, "defaultValue"),
        complexType: B
    }])
}
var $e, pt = new C.Controller.ControllerFactory($e, H);
var Ct = p,
    Ne = S.PlaceholderContent,
    Rt = S.IteratorPlaceholderContent,
    G = class G extends I.BaseWebBlock {
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
            return mt
        }
        get controllerFactory() {
            return pt
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                f = G.ifWidget,
                _ = G.textWidget,
                i = G.asPrimitiveValue,
                le = G.getTranslation,
                u = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(l, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, R.createElement(l, {
                align: 0,
                animate: !0,
                visible: !e.variables.accountListByKeyVar.isEmpty,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, R.createElement(m, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: e.variables.accountKeyIn,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: Ct.Model.calculateDataFetchStatus(e.variables._accountKeyInDataFetchStatus)
            })), R.createElement(U, {
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
                    content: new Rt(function(s, h) {
                        return [R.createElement(se, {
                            onClick: n(function() {
                                return Promise.resolve().then(function() {
                                    var A = h.clone();
                                    return c.onClickAccount$Action(e.variables.accountListByKeyVar.getCurrent(h.iterationContext), c.callContext(A))
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
                                leftActions: Ne.Empty,
                                content: new Ne(function() {
                                    return [R.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: s,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(g, {
                                        gridProperties: {
                                            width: "32px"
                                        },
                                        type: 1,
                                        url: e.variables.accountListByKeyVar.getCurrent(h.iterationContext).iconAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }), R.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "flex-1",
                                        visible: !0,
                                        _idProps: {
                                            service: s,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between",
                                        visible: !0,
                                        _idProps: {
                                            service: s,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }, R.createElement(m, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "text-neutral-8",
                                        value: e.variables.accountListByKeyVar.getCurrent(h.iterationContext).nameAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: r
                                    })), R.createElement(m, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: e.variables.accountListByKeyVar.getCurrent(h.iterationContext).formattedBalanceAttr,
                                        _idProps: {
                                            service: s,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: r
                                    })))]
                                }),
                                rightActions: Ne.Empty
                            },
                            _dependencies: [i(e.variables.accountListByKeyVar.getCurrent(h.iterationContext).formattedBalanceAttr), i(e.variables.accountListByKeyVar.getCurrent(h.iterationContext).nameAttr), i(e.variables.accountListByKeyVar.getCurrent(h.iterationContext).iconAttr)]
                        })]
                    }, v, t, "1")
                },
                _dependencies: []
            })))
        }
    };
n(G, "View");
var Ue = G,
    te = Ue;
var Q = ae(ne());
var q = p,
    ze = class ze extends q.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("HideArrow", "hideArrowIn", "HideArrow", !0, !1, q.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hideArrowInDataFetchStatus", "_hideArrowInDataFetchStatus", "_hideArrowInDataFetchStatus", !0, !1, q.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(q.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(ze, "VariablesRecord");
var ye = ze;
ye.init();
var Ge = class Ge extends q.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Ge, "WidgetsRecord");
var Ke = Ge,
    qe = class qe extends q.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ye
        }
        static getWidgetsRecordConstructor() {
            return Ke
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "HideArrow" in e && (this.variables.hideArrowIn = e.HideArrow, "_hideArrowInDataFetchStatus" in e && (this.variables._hideArrowInDataFetchStatus = e._hideArrowInDataFetchStatus))
        }
    };
n(qe, "Model");
var _e = qe;
_e._hasValidationWidgetsValue = void 0;
var bt = new q.Model.ModelFactory(_e);
var ht = {};
var j = p; {
    let e = class e extends j.Controller.BaseViewController {
        constructor(t, d, r) {
            super(t, d, r, ht);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickMessage$Action() {
            return this.hasOwnProperty("__onClickMessage$Action") || (this.__onClickMessage$Action = function(t) {
                var d = this.model,
                    r = this.controller,
                    v = this.idService;
                return j.Logger.startActiveSpan("OnClickMessage", function(f) {
                    return f && (f.setAttribute("code.function", "OnClickMessage"), f.setAttribute("outsystems.function.key", "dd554e5d-7142-44ab-8923-de42125f3140"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), j.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickMessage"), t = r.callContext(t), j.Flow.executeAsyncFlow(function() {
                            return r.onClickAction$Action(t)
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onClickMessage$Action
        }
        set _onClickMessage$Action(t) {
            this.__onClickMessage$Action = t
        }
        onClickMessage$Action(t) {
            var d = this.controller;
            return j.Logger.startActiveSpan("OnClickMessage__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickMessage"), r.setAttribute("outsystems.function.key", "dd554e5d-7142-44ab-8923-de42125f3140"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), j.Flow.tryFinally(function() {
                    return d.safeExecuteClientAction(d._onClickMessage$Action, t)
                }, function() {
                    r && r.end()
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
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return k.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let V = e;
    yt = V
}
var yt, _t = new j.Controller.ControllerFactory(yt, H);
var At = p,
    Ir = S.PlaceholderContent,
    Wr = S.IteratorPlaceholderContent,
    Y = class Y extends I.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.TransferLimitMessage"
        }
        static getAttributes() {
            return {
                codeFunction: "TransferLimitMessage",
                functionKey: "f0007a8b-37a3-4a3e-ad10-716ca0694e8a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return []
        }
        get modelFactory() {
            return bt
        }
        get controllerFactory() {
            return _t
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                f = Y.ifWidget,
                _ = Y.textWidget,
                i = Y.asPrimitiveValue,
                le = Y.getTranslation,
                u = this;
            return Q.createElement("div", this.getRootNodeProperties(), Q.createElement(l, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: n(function() {
                        return Promise.resolve().then(function() {
                            var s = v.clone();
                            return c.onClickMessage$Action(c.callContext(s))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "display-flex background-warning-light padding-base gap-sm",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, Q.createElement(g, {
                extendedProperties: {
                    style: "height: min-content;"
                },
                image: At.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }), Q.createElement(l, {
                align: 0,
                animate: !1,
                gridProperties: {
                    marginLeft: "8px"
                },
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, Q.createElement(nt, {
                align: 0,
                content: u.props.placeholders.placeholder1,
                _idProps: {
                    service: t,
                    name: "Placeholder1"
                },
                _widgetRecordProvider: r
            })), f(e.variables.hideArrowIn, !1, this, function() {
                return []
            }, function() {
                return [Q.createElement(g, {
                    image: At.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: r
                })]
            })))
        }
    };
n(Y, "View");
var je = Y,
    Ae = je;
var re = ae(ne());
var w = p,
    Ye = class Ye extends w.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("IsVisible", "isVisibleVar", "IsVisible", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("DailyTransferLimitCount", "dailyTransferLimitCountIn", "DailyTransferLimitCount", !0, !1, w.DataTypes.DataTypes.Record, function() {
                return w.DataTypes.ImmutableBase.getData(new we)
            }, !1, we), this.attr("_dailyTransferLimitCountInDataFetchStatus", "_dailyTransferLimitCountInDataFetchStatus", "_dailyTransferLimitCountInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("From", "fromIn", "From", !0, !1, w.DataTypes.DataTypes.Record, function() {
                return w.DataTypes.ImmutableBase.getData(new B)
            }, !1, B), this.attr("_fromInDataFetchStatus", "_fromInDataFetchStatus", "_fromInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("To", "toIn", "To", !0, !1, w.DataTypes.DataTypes.Record, function() {
                return w.DataTypes.ImmutableBase.getData(new B)
            }, !1, B), this.attr("_toInDataFetchStatus", "_toInDataFetchStatus", "_toInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(w.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(Ye, "VariablesRecord");
var Pe = Ye;
Pe.init();
var Je = class Je extends w.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(Je, "WidgetsRecord");
var Qe = Je,
    Ze = class Ze extends w.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Pe
        }
        static getWidgetsRecordConstructor() {
            return Qe
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "DailyTransferLimitCount" in e && (this.variables.dailyTransferLimitCountIn = e.DailyTransferLimitCount, "_dailyTransferLimitCountInDataFetchStatus" in e && (this.variables._dailyTransferLimitCountInDataFetchStatus = e._dailyTransferLimitCountInDataFetchStatus)), "From" in e && (this.variables.fromIn = e.From, "_fromInDataFetchStatus" in e && (this.variables._fromInDataFetchStatus = e._fromInDataFetchStatus)), "To" in e && (this.variables.toIn = e.To, "_toInDataFetchStatus" in e && (this.variables._toInDataFetchStatus = e._toInDataFetchStatus))
        }
    };
n(Ze, "Model");
var Ve = Ze;
Ve._hasValidationWidgetsValue = void 0;
var Pt = new w.Model.ModelFactory(Ve);
var Vt = {};
var F = p; {
    let e = class e extends F.Controller.BaseViewController {
        constructor(t, d, r) {
            super(t, d, r, Vt);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(t) {
                var d = this.model,
                    r = this.controller,
                    v = this.idService;
                return F.Logger.startActiveSpan("OnParametersChanged", function(f) {
                    return f && (f.setAttribute("code.function", "OnParametersChanged"), f.setAttribute("outsystems.function.key", "5cecf2f5-d6c2-433d-8a43-a7d71a81ed29"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnParametersChanged"), t = r.callContext(t), F.Flow.executeAsyncFlow(function() {
                            return d.variables.isVisibleVar = d.variables.fromIn.accountTypeAttr === "wallet" && d.variables.toIn.accountTypeAttr === "wallet" ? d.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.internalAttr.availableAttr.equals(F.BuiltinFunctions.integerToLongInteger(0)) : d.variables.fromIn.accountTypeAttr === "standard" || d.variables.toIn.accountTypeAttr === "standard" ? d.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.dtradeAttr.availableAttr.equals(F.BuiltinFunctions.integerToLongInteger(0)) : d.variables.fromIn.accountTypeAttr === "ctrader" || d.variables.toIn.accountTypeAttr === "ctrader" ? d.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.ctraderAttr.availableAttr.equals(F.BuiltinFunctions.integerToLongInteger(0)) : d.variables.fromIn.accountTypeAttr === "dxtrade" || d.variables.toIn.accountTypeAttr === "dxtrade" ? d.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.dxtradeAttr.availableAttr.equals(F.BuiltinFunctions.integerToLongInteger(0)) : d.variables.fromIn.accountTypeAttr === "mt5" || d.variables.toIn.accountTypeAttr === "mt5" ? d.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.mt5Attr.availableAttr.equals(F.BuiltinFunctions.integerToLongInteger(0)) : !1, r.isDisabledEvent$Action(d.variables.isVisibleVar, t)
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(t) {
            this.__onParametersChanged$Action = t
        }
        onParametersChanged$Action(t) {
            var d = this.controller;
            return F.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "5cecf2f5-d6c2-433d-8a43-a7d71a81ed29"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                    return d.safeExecuteClientAction(d._onParametersChanged$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get isDisabledEvent$Action() {
            return this.hasOwnProperty("_isDisabledEvent$Action") || (this._isDisabledEvent$Action = function() {
                return Promise.resolve()
            }), this._isDisabledEvent$Action
        }
        set isDisabledEvent$Action(t) {
            this._isDisabledEvent$Action = t
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var d = this.controller,
                    r = this.model,
                    v = this.idService;
                return d.onParametersChanged$Action(t)
            }), this._onParametersChangedEventHandler
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
            return k.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let V = e;
    St = V
}
var St, wt = new F.Controller.ControllerFactory(St, H);
var Xe = p,
    ea = S.PlaceholderContent,
    ta = S.IteratorPlaceholderContent,
    J = class J extends I.BaseWebBlock {
        static get displayName() {
            return "WalletBlocks.TransferCountLimitMessage"
        }
        static getAttributes() {
            return {
                codeFunction: "TransferCountLimitMessage",
                functionKey: "88a48829-3de7-4e98-a2d6-f8bb36ebfda9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return []
        }
        get modelFactory() {
            return Pt
        }
        get controllerFactory() {
            return wt
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                f = J.ifWidget,
                _ = J.textWidget,
                i = J.asPrimitiveValue,
                le = J.getTranslation,
                u = this;
            return re.createElement("div", this.getRootNodeProperties(), re.createElement(l, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "border-radius: 8px;"
                },
                style: "display-flex background-warning-light padding-base gap-sm",
                visible: e.variables.isVisibleVar,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, re.createElement(g, {
                extendedProperties: {
                    style: "height: min-content;"
                },
                image: Xe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WarningLight.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }), re.createElement(l, {
                align: 0,
                animate: !1,
                gridProperties: {
                    marginLeft: "8px"
                },
                style: "flex-1",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, re.createElement(m, {
                value: "You have reached your daily transfer limit of " + Xe.BuiltinFunctions.longIntegerToText(e.variables.dailyTransferLimitCountIn.get_limitsAttr.daily_transfersAttr.walletsAttr.allowedAttr) + " transfers between your " + e.variables.fromIn.nameAttr + " and " + e.variables.toIn.nameAttr + ". The limit will reset at 00:00 GMT.",
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: Xe.Model.calculateDataFetchStatus(e.variables._dailyTransferLimitCountInDataFetchStatus, e.variables._fromInDataFetchStatus, e.variables._toInDataFetchStatus)
            }))))
        }
    };
n(J, "View");
var et = J,
    tt = et;
var o = p,
    y = S.PlaceholderContent,
    Se = S.IteratorPlaceholderContent,
    L = class L extends I.BaseWebScreen {
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
            return [xe, oe, pe, X, te, W, ue, Ee, Ae, tt, de, ce]
        }
        get modelFactory() {
            return st
        }
        get controllerFactory() {
            return ot
        }
        get title() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = c.callContext(),
                v = L.asPrimitiveValue,
                f = L.getTranslation,
                _ = this;
            return o.Injector.resolve(o.ServiceNames.TranslationsService).getMessage("cH8gH+dwOESRCJqOQ77NlA#TitleExpression.1345526795.1", "Transfer")
        }
        internalRender() {
            let e = this.model,
                c = this.controller,
                t = this.idService,
                d = c.validationService,
                r = this.widgetsRecordProvider,
                v = c.callContext(),
                f = L.ifWidget,
                _ = L.textWidget,
                i = L.asPrimitiveValue,
                le = L.getTranslation,
                u = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(xe, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: e.variables.isLoadingVar
                },
                events: {
                    _handleError: n(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new y(function() {
                        return [a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "CashierLock",
                            _idProps: {
                                service: t,
                                name: "CashierLock"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(oe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Description: "Contact us via live chat for assistance.",
                                Title: "Transfers paused",
                                ButtonText: "Contact us",
                                IsLoading: e.variables.isLoadingVar,
                                PageTitle: e.variables.pageTitleVar
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError"),
                                onClick$Action: n(function() {
                                    var s = v.clone();
                                    c.cashierLockOnClick$Action(c.callContext(s))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "IsSystemMaintenance",
                            _idProps: {
                                service: t,
                                name: "IsSystemMaintenance"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(oe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PageTitle: e.variables.pageTitleVar,
                                Title: "Transfers paused",
                                IsLoading: e.variables.isLoadingVar,
                                Description: "Transfers are temporarily unavailable due to system maintenance. Try again later.",
                                ButtonText: "Ok"
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError"),
                                onClick$Action: n(function() {
                                    var s = v.clone();
                                    c.cashierLockOnClick$Action(c.callContext(s))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "ServerError",
                            _idProps: {
                                service: t,
                                name: "ServerError"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(oe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "Transfer is temporarily down",
                                PageTitle: e.variables.pageTitleVar,
                                IsLoading: e.variables.isLoadingVar,
                                ButtonText: "Live chat",
                                Description: "Please contact us via live chat for assistance."
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError"),
                                onClick$Action: n(function() {
                                    var s = v.clone();
                                    c.cashierLockOnClick$Action(c.callContext(s))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "6",
                                alias: "4"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "NoFundsAvailable",
                            _idProps: {
                                service: t,
                                name: "NoFundsAvailable"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(pe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ButtonText: e.getCachedValue(t.getId("_xsKbkjwGECHw9lL7CAP7g.ButtonText"), function() {
                                    return E.getAccountType() === "demo" ? "Reset balance" : "Deposit"
                                }, function() {
                                    return E.getAccountType()
                                }),
                                IsLoading: e.variables.isLoadingVar,
                                Description: e.getCachedValue(t.getId("_xsKbkjwGECHw9lL7CAP7g.Description"), function() {
                                    return E.getAccountType() === "demo" ? "Reset balance for your demo Wallet to make a transfer." : "Add funds to your " + e.variables.activeWalletVar.nameAttr + " to make a transfer."
                                }, function() {
                                    return E.getAccountType()
                                }, function() {
                                    return e.variables.activeWalletVar.nameAttr
                                }),
                                PageTitle: e.variables.pageTitleVar,
                                Title: "No funds available",
                                Image: "/tradershub/img/tradershub.spreadrisk.svg"
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError"),
                                onClick$Action: n(function() {
                                    var s = v.clone();
                                    c.walletActionScreenOnClick$Action(c.callContext(s))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "8",
                                alias: "5"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "NoTradingAccount",
                            _idProps: {
                                service: t,
                                name: "NoTradingAccount"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(pe, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: e.variables.isLoadingVar,
                                Title: e.getCachedValue(t.getId("qD7Z5r8UpECUjHaeIFsllw.Title"), function() {
                                    return E.getAccountType() === "demo" ? "No trading accounts available to receive funds" : "No trading accounts or Wallets"
                                }, function() {
                                    return E.getAccountType()
                                }),
                                ButtonText: "OK",
                                PageTitle: e.variables.pageTitleVar,
                                Description: "Add a trading account or Wallet in Trader's Hub to receive funds from this Wallet.",
                                Image: "/tradershub/img/tradershub.Notavailable.svg"
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError"),
                                onClick$Action: n(function() {
                                    var s = v.clone();
                                    c.walletActionScreenOnClick2$Action(c.callContext(s))
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "10",
                                alias: "6"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })), a.createElement(l, {
                            align: 0,
                            animate: !0,
                            visible: e.variables.showContentVar === "TransferScreen",
                            _idProps: {
                                service: t,
                                name: "TransferAccount"
                            },
                            _widgetRecordProvider: r
                        }, a.createElement(X, {
                            getOwnerSpan: n(function() {
                                return u.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return u.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                HideBackButton: !0,
                                PageTitle: e.variables.pageTitleVar,
                                IsLoading: e.variables.isLoadingVar,
                                HideWalletHeader: !0
                            },
                            events: {
                                _handleError: n(function(s) {
                                    c.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: d
                            },
                            _idProps: {
                                service: t,
                                uuid: "12",
                                alias: "7"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                walletOverlayPageContent: new y(function() {
                                    return [f(e.variables.transferFromVar.equals(e.variables.nullTransferAccountVar) && e.variables.showInitialTransferModalVar, !1, this, function() {
                                        return [a.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex flex-direction-column gap-m",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: r
                                        }, a.createElement(b, {
                                            style: "font-bold font-size-h6",
                                            text: ["Transfer from"],
                                            _idProps: {
                                                service: t,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: r
                                        }), a.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                name: "ModalContent3"
                                            },
                                            _widgetRecordProvider: r
                                        }, a.createElement(U, {
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
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: r,
                                            placeholders: {
                                                content: new Se(function(s, h) {
                                                    return [a.createElement(te, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            AccountKey: e.variables.transferAccountKeyVar.getCurrent(h.iterationContext),
                                                            AccountList: e.variables.transferFromAccountListVar
                                                        },
                                                        events: {
                                                            _handleError: n(function(A) {
                                                                c.handleError(A)
                                                            }, "_handleError"),
                                                            onClickAction$Action: n(function(A) {
                                                                var $ = h.clone();
                                                                c.onClickTransferFromAccount$Action(A, c.callContext($))
                                                            }, "onClickAction$Action")
                                                        },
                                                        _validationProps: {
                                                            validationService: d
                                                        },
                                                        _idProps: {
                                                            service: s,
                                                            uuid: "17",
                                                            alias: "8"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    })]
                                                }, v, t, "1")
                                            },
                                            _dependencies: [i(e.variables.transferFromAccountListVar)]
                                        })))]
                                    }, function() {
                                        return [f(e.variables.isTransferSuccessVar, !1, this, function() {
                                            return [a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex flex-direction-column align-items-center justify-content-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "SuccessMainContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(g, {
                                                image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.TransferSuccessfulIcon.svg"),
                                                type: 0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: r
                                            }), a.createElement(b, {
                                                style: "font-bold font-size-h6 margin-y-l",
                                                text: ["Transfer successful"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: r
                                            }), a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: r
                                            }, f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [a.createElement(l, {
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
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFromDetails2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["From"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "FromTransactionDetailsWrapper2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "26"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(g, {
                                                        gridProperties: {
                                                            width: "16px",
                                                            marginLeft: "0px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferFromVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "27"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.variables.transferFromVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "28"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), a.createElement(m, {
                                                        style: "text-red",
                                                        value: e.getCachedValue(t.getId("oUCmxqpDDk2nuMsXCORzJg.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "29"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), a.createElement(W, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: O.space.base
                                                        },
                                                        events: {
                                                            _handleError: n(function(s) {
                                                                c.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: d
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "30",
                                                            alias: "9"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferToDetails2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["To"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "32"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "ToTransactionDetailsWrapper2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "34"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(g, {
                                                        gridProperties: {
                                                            width: "16px",
                                                            marginLeft: "0px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferToVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "35"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.variables.transferToVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "36"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), a.createElement(m, {
                                                        style: "text-green",
                                                        value: e.getCachedValue(t.getId("ve99W9kYhEK2tOhviH+ojg.Value"), function() {
                                                            return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferFromConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "37"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), a.createElement(W, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: O.space.base
                                                        },
                                                        events: {
                                                            _handleError: n(function(s) {
                                                                c.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: d
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "38",
                                                            alias: "10"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFees"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8",
                                                        text: ["Transfer fee (2%)"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "40"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.getCachedValue(t.getId("2pMy77DeWkOchIX35i1LXg.Value"), function() {
                                                            return (e.variables.activeWalletVar.is_cryptoAttr ? o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".") : o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.is_cryptoAttr
                                                        }, function() {
                                                            return e.variables.calculatedFeesVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "41"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })))]
                                                }, function() {
                                                    return [a.createElement(l, {
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
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFromDetails3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["From"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "44"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "FromTransactionDetailsWrapper3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "46"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(g, {
                                                        gridProperties: {
                                                            width: "16px",
                                                            marginLeft: "0px"
                                                        },
                                                        style: "margin-right-xs",
                                                        type: 1,
                                                        url: e.variables.transferFromVar.iconAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "47"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.variables.transferFromVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "48"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), a.createElement(m, {
                                                        style: "text-red",
                                                        value: e.getCachedValue(t.getId("ij4Omw1W20yYyKK3jjTDAw.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedTransferAmountVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "49"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), a.createElement(W, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: O.space.base
                                                        },
                                                        events: {
                                                            _handleError: n(function(s) {
                                                                c.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: d
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "50",
                                                            alias: "11"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferToDetails3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8 margin-bottom-s",
                                                        text: ["To"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "52"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "ToTransactionDetailsWrapper3"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "54"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(g, {
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
                                                            uuid: "55"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.variables.transferToVar.nameAttr,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "56"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })), a.createElement(m, {
                                                        style: "text-green",
                                                        value: e.getCachedValue(t.getId("bT3x3WyGNE+P5I0QHISDnQ.Value"), function() {
                                                            return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferToConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "57"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))), a.createElement(W, {
                                                        getOwnerSpan: n(function() {
                                                            return u.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: n(function() {
                                                            return u.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {
                                                            Space: O.space.base
                                                        },
                                                        events: {
                                                            _handleError: n(function(s) {
                                                                c.handleError(s)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: d
                                                        },
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "58",
                                                            alias: "12"
                                                        },
                                                        _widgetRecordProvider: r,
                                                        _dependencies: []
                                                    }), a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex justify-content-space-between",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            name: "TransferFees2"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(b, {
                                                        style: "text-neutral-8",
                                                        text: ["Transfer fee (2%)"],
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "60"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        gridProperties: {
                                                            classes: "ThemeGrid_MarginGutter"
                                                        },
                                                        value: e.getCachedValue(t.getId("z_ndJ0WWfU+fwoYF+ZwqfQ.Value"), function() {
                                                            return (e.variables.activeWalletVar.is_cryptoAttr ? o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".") : o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",")) + " " + e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.activeWalletVar.is_cryptoAttr
                                                        }, function() {
                                                            return e.variables.convertedCalculatedFeesVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "61"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })))]
                                                })]
                                            }, function() {
                                                return [a.createElement(l, {
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
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TransferFromDetails"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(b, {
                                                    style: "text-neutral-8 margin-bottom-s",
                                                    text: ["From"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "64"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "FromTransactionDetailsWrapper"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "66"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(g, {
                                                    gridProperties: {
                                                        width: "16px",
                                                        marginLeft: "0px"
                                                    },
                                                    style: "margin-right-xs",
                                                    type: 1,
                                                    url: e.variables.transferFromVar.iconAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "67"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.variables.transferFromVar.nameAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "68"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), a.createElement(m, {
                                                    style: "text-red",
                                                    value: e.getCachedValue(t.getId("UVdf_d2ATkyQqvuhRIRtiQ.Value"), function() {
                                                        return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferFromVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.transferFromVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "69"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))), a.createElement(W, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: O.space.base
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "70",
                                                        alias: "13"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }), a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TransferToDetails"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(b, {
                                                    style: "text-neutral-8 margin-bottom-s",
                                                    text: ["To"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "72"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ToTransactionDetailsWrapper"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "74"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(g, {
                                                    gridProperties: {
                                                        width: "16px",
                                                        marginLeft: "0px"
                                                    },
                                                    style: "margin-right-xs",
                                                    type: 1,
                                                    url: e.variables.transferToVar.iconAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "75"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.variables.transferToVar.nameAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "76"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), a.createElement(m, {
                                                    style: "text-green",
                                                    value: e.getCachedValue(t.getId("p5R4_DzwnEm1Ow3qWN3eQA.Value"), function() {
                                                        return "+ " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.transferToVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "77"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))))]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "wallets-transfer-success-footer",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferSuccessButton"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(M, {
                                                enabled: !0,
                                                extendedProperties: {
                                                    style: "color: #101213;"
                                                },
                                                isDefault: !1,
                                                onClick: n(function() {
                                                    try {
                                                        o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                                    } catch (s) {
                                                        if (s.name !== "RedirectOccurredException") throw s
                                                    }
                                                }, "onClick"),
                                                style: "btn",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "79"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Make new Transfer")))]
                                        }, function() {
                                            return [a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "display-flex flex-direction-column gap-m",
                                                visible: !e.variables.isLoadingVar,
                                                _idProps: {
                                                    service: t,
                                                    name: "MainContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(b, {
                                                style: "font-bold font-size-h6",
                                                text: ["Transfer Amount"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "81"
                                                },
                                                _widgetRecordProvider: r
                                            }), a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferListContainer"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(se, {
                                                onClick: n(function() {
                                                    var s = v.clone();
                                                    c.openTransferFromModal$Action(c.callContext(s))
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
                                                    leftActions: y.Empty,
                                                    content: new y(function() {
                                                        return [a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            gridProperties: {
                                                                classes: "OSInline"
                                                            },
                                                            style: "display-flex align-items-center gap-base",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "84"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "wallets-selected-item__icon",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "85"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(g, {
                                                            gridProperties: {
                                                                width: "16px"
                                                            },
                                                            type: 1,
                                                            url: e.variables.transferFromVar.iconAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "86"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "flex-1",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "87"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex flex-direction-column",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "88"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "89"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(b, {
                                                            style: "font-bold",
                                                            text: ["From"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "90"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), a.createElement(m, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            value: " " + e.variables.transferFromVar.nameAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "91"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })), a.createElement(m, {
                                                            gridProperties: {
                                                                marginLeft: "0px"
                                                            },
                                                            style: "text-neutral-8",
                                                            value: e.variables.transferFromVar.formattedBalanceAttr,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "92"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))), a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "display-flex",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "93"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(g, {
                                                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "94"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })))]
                                                    }),
                                                    rightActions: y.Empty
                                                }
                                            }), f(e.variables.transferToVar.equals(e.variables.nullTransferAccountVar) && e.variables.showInitialTransferModalVar, !1, this, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column margin-top-m",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "95"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(b, {
                                                    style: "font-bold font-size-h6 margin-bottom-base",
                                                    text: ["Transfer to"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "96"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ModalContent4"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(U, {
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
                                                        uuid: "98"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        content: new Se(function(s, h) {
                                                            return [a.createElement(te, {
                                                                getOwnerSpan: n(function() {
                                                                    return u.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: n(function() {
                                                                    return u.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    AccountKey: e.variables.transferAccountKeyVar.getCurrent(h.iterationContext),
                                                                    AccountList: e.variables.transferAccountListVar
                                                                },
                                                                events: {
                                                                    _handleError: n(function(A) {
                                                                        c.handleError(A)
                                                                    }, "_handleError"),
                                                                    onClickAction$Action: n(function(A) {
                                                                        var $ = h.clone();
                                                                        c.onClickTransferToAccount$Action(A, c.callContext($))
                                                                    }, "onClickAction$Action")
                                                                },
                                                                _validationProps: {
                                                                    validationService: d
                                                                },
                                                                _idProps: {
                                                                    service: s,
                                                                    uuid: "99",
                                                                    alias: "14"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            })]
                                                        }, v, t, "2")
                                                    },
                                                    _dependencies: [i(e.variables.transferAccountListVar)]
                                                })))]
                                            }, function() {
                                                return [a.createElement(W, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: O.space.small,
                                                        IsVertical: !0
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "100",
                                                        alias: "15"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                }), a.createElement(se, {
                                                    onClick: n(function() {
                                                        var s = v.clone();
                                                        c.openTransferToModal$Action(c.callContext(s))
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
                                                        leftActions: y.Empty,
                                                        content: new y(function() {
                                                            return [f(e.variables.transferToVar.iconAttr !== o.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                                                return [a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    gridProperties: {
                                                                        classes: "OSInline"
                                                                    },
                                                                    style: "display-flex align-items-center gap-base",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "102"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !0,
                                                                    style: "wallets-selected-item__icon",
                                                                    visible: e.getCachedValue(t.getId("Zser1A2ku0+BCOLSaz1Tbg.Visible"), function() {
                                                                        return e.variables.transferToVar.iconAttr !== o.BuiltinFunctions.nullIdentifier().toString()
                                                                    }, function() {
                                                                        return e.variables.transferToVar.iconAttr
                                                                    }),
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "103"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(g, {
                                                                    extendedProperties: {
                                                                        style: "height: 16px;"
                                                                    },
                                                                    type: 1,
                                                                    url: e.variables.transferToVar.iconAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "104"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })), a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !0,
                                                                    style: "flex-1",
                                                                    visible: e.getCachedValue(t.getId("Jip36aKSoE+PB8cysmK7xA.Visible"), function() {
                                                                        return e.variables.transferToVar.iconAttr !== o.BuiltinFunctions.nullIdentifier().toString()
                                                                    }, function() {
                                                                        return e.variables.transferToVar.iconAttr
                                                                    }),
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "105"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex flex-direction-column",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "106"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "107"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(b, {
                                                                    style: "font-bold",
                                                                    text: ["To"],
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "108"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }), a.createElement(m, {
                                                                    gridProperties: {
                                                                        marginLeft: "0px"
                                                                    },
                                                                    value: " " + e.variables.transferToVar.nameAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "109"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })), a.createElement(m, {
                                                                    gridProperties: {
                                                                        marginLeft: "0px"
                                                                    },
                                                                    style: "text-neutral-8",
                                                                    value: e.variables.transferToVar.formattedBalanceAttr,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "110"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }))), a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "111"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(g, {
                                                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "112"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })))]
                                                            }, function() {
                                                                return [a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    gridProperties: {
                                                                        classes: "OSInline"
                                                                    },
                                                                    style: "display-flex align-items-center gap-base",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "113"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "flex-1",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "114"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(b, {
                                                                    style: "font-bold",
                                                                    text: ["Select a trading account or a Wallet"],
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "115"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })), a.createElement(l, {
                                                                    align: 0,
                                                                    animate: !1,
                                                                    style: "display-flex",
                                                                    visible: !0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "116"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                }, a.createElement(g, {
                                                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                                                                    type: 0,
                                                                    _idProps: {
                                                                        service: t,
                                                                        uuid: "117"
                                                                    },
                                                                    _widgetRecordProvider: r
                                                                })))]
                                                            })]
                                                        }),
                                                        rightActions: y.Empty
                                                    }
                                                })]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                visible: (e.variables.transferFromVar !== e.variables.nullTransferAccountVar || e.variables.transferToVar !== e.variables.nullTransferAccountVar) && !e.variables.showInitialTransferModalVar,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferAmountInput"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(it, {
                                                gridProperties: {
                                                    classes: "OSFillParent"
                                                },
                                                style: "margin-bottom-s",
                                                _idProps: {
                                                    service: t,
                                                    uuid: "119"
                                                },
                                                _widgetRecordProvider: r
                                            }, "Transfer amount"), f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex gap-s full-width align-items-flex-start",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "InputAmountContainer"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "full-width",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "121"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(Ce, {
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    enabled: e.getCachedValue(t.getId("InputTransferExchangeAmount.Enabled"), function() {
                                                        return e.variables.isInputDisabledVar ? !1 : e.variables.transferToVar.nameAttr !== o.BuiltinFunctions.nullTextIdentifier() && (e.variables.pOIStatusVar === "none" ? !e.variables.transferFromVar.isCryptoAttr && e.variables.transferToVar.isCryptoAttr && e.variables.fiatToCryptoAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr) || e.variables.transferFromVar.isCryptoAttr && e.variables.transferToVar.isCryptoAttr && e.variables.cryptoToCryptoAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr) ? !0 : !!(e.variables.transferFromVar.isCryptoAttr && !e.variables.transferToVar.isCryptoAttr && e.variables.cryptoToFiatAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr)) : !0)
                                                    }, function() {
                                                        return e.variables.isInputDisabledVar
                                                    }, function() {
                                                        return e.variables.transferToVar.nameAttr
                                                    }, function() {
                                                        return e.variables.pOIStatusVar
                                                    }, function() {
                                                        return e.variables.transferFromVar.isCryptoAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.isCryptoAttr
                                                    }, function() {
                                                        return e.variables.fiatToCryptoAvailableLimitVar
                                                    }, function() {
                                                        return e.variables.transferFromVar.minTransferAttr
                                                    }, function() {
                                                        return e.variables.cryptoToCryptoAvailableLimitVar
                                                    }, function() {
                                                        return e.variables.cryptoToFiatAvailableLimitVar
                                                    }),
                                                    extendedEvents: {
                                                        onClick: n(function() {
                                                            var s = v.clone();
                                                            c.inputTransferExchangeAmountOnClick$Action(t.getId("InputTransferExchangeAmount"), c.callContext(s))
                                                        }, "onClick")
                                                    },
                                                    extendedProperties: {
                                                        "data-dirty": "False",
                                                        pattern: "[0-9]*",
                                                        maxLength: "14",
                                                        "show-default-value": "True",
                                                        min: "0"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: 2,
                                                    mandatory: !1,
                                                    maxLength: 0,
                                                    onChange: n(function() {
                                                        return Promise.resolve().then(function() {
                                                            var s = v.clone();
                                                            return c.onChangeInputTransferConvertedAmount$Action(c.callContext(s))
                                                        })
                                                    }, "onChange"),
                                                    style: "form-control full-height full-width",
                                                    variable: e.createVariable(o.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(s) {
                                                        e.variables.transferAmountVar = s
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        name: "InputTransferExchangeAmount"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(ue, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        DecimalSeparator: ".",
                                                        GroupSeparator: "",
                                                        PrefixText: "",
                                                        InputId: t.getId("InputTransferExchangeAmount"),
                                                        DecimalDigits: e.getCachedValue(t.getId("tBS0a3fz3UCDBETArnAgnA.DecimalDigits"), function() {
                                                            return o.BuiltinFunctions.integerToDecimal(e.variables.currencySwitcherVar === o.BuiltinFunctions.nullTextIdentifier() || e.variables.currencySwitcherVar === e.variables.transferFromVar.currencyAttr ? e.variables.transferFromVar.fractionalDigitsAttr : e.variables.transferToVar.fractionalDigitsAttr)
                                                        }, function() {
                                                            return e.variables.currencySwitcherVar
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }),
                                                        UseNumericInput: !0,
                                                        SuffixText: "",
                                                        AlwaysShowDecimalDigits: !0
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "123",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })), a.createElement(at, {
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    enabled: e.getCachedValue(t.getId("ExchangeRateSwitcher.Enabled"), function() {
                                                        return e.variables.transferToVar.nameAttr !== o.BuiltinFunctions.nullTextIdentifier()
                                                    }, function() {
                                                        return e.variables.transferToVar.nameAttr
                                                    }),
                                                    mandatory: !1,
                                                    onChange: n(function() {
                                                        var s = v.clone();
                                                        c.exchangeRateSwitcherOnChange$Action(c.callContext(s))
                                                    }, "onChange"),
                                                    style: "real-demo-switcher",
                                                    variable: e.createVariable(o.DataTypes.DataTypes.Text, e.variables.currencySwitcherVar, function(s) {
                                                        e.variables.currencySwitcherVar = s
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        name: "ExchangeRateSwitcher"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(Te, {
                                                    enabled: !0,
                                                    style: "real-demo-switcher-item",
                                                    value: e.variables.transferFromVar.currencyAttr,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ButtonGroupItem2"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(m, {
                                                    value: e.variables.transferFromVar.currencyAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "126"
                                                    },
                                                    _widgetRecordProvider: r
                                                })), a.createElement(Te, {
                                                    enabled: !0,
                                                    style: "real-demo-switcher-item",
                                                    value: e.variables.transferToVar.currencyAttr,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "ButtonGroupItem1"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(m, {
                                                    value: e.variables.transferToVar.currencyAttr,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "128"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))))]
                                            }, function() {
                                                return [a.createElement(Ee, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AlignIconRight: !0
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "129",
                                                        alias: "17"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        icon: new y(function() {
                                                            return [a.createElement(m, {
                                                                value: e.variables.activeWalletVar.currencyAttr,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "130"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }),
                                                        input: new y(function() {
                                                            return [a.createElement(Ce, {
                                                                _validationProps: {
                                                                    validationService: d
                                                                },
                                                                enabled: e.getCachedValue(t.getId("InputTransferAmount.Enabled"), function() {
                                                                    return e.variables.transferToVar.nameAttr !== o.BuiltinFunctions.nullTextIdentifier() && (E.getAccountType() === "real" ? e.variables.transferFromVar.accountTypeAttr === "standard" || e.variables.transferToVar.accountTypeAttr === "standard" ? !!e.variables.dtradeDailyAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr) : o.BuiltinFunctions.index(e.variables.transferToVar.loginidAttr, "mt5", 0, !1, !0) > -1 || o.BuiltinFunctions.index(e.variables.transferFromVar.loginidAttr, "mt5", 0, !1, !0) > -1 ? !!e.variables.mT5DailyAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr) : e.variables.transferFromVar.accountTypeAttr === "dxtrade" || e.variables.transferToVar.accountTypeAttr === "dxtrade" ? !!e.variables.dxtradeDailyAvailableLimitVar.gt(e.variables.transferFromVar.minTransferAttr) : !0 : !0)
                                                                }, function() {
                                                                    return e.variables.transferToVar.nameAttr
                                                                }, function() {
                                                                    return E.getAccountType()
                                                                }, function() {
                                                                    return e.variables.transferFromVar.accountTypeAttr
                                                                }, function() {
                                                                    return e.variables.transferToVar.accountTypeAttr
                                                                }, function() {
                                                                    return e.variables.dtradeDailyAvailableLimitVar
                                                                }, function() {
                                                                    return e.variables.transferFromVar.minTransferAttr
                                                                }, function() {
                                                                    return e.variables.transferToVar.loginidAttr
                                                                }, function() {
                                                                    return e.variables.transferFromVar.loginidAttr
                                                                }, function() {
                                                                    return e.variables.mT5DailyAvailableLimitVar
                                                                }, function() {
                                                                    return e.variables.dxtradeDailyAvailableLimitVar
                                                                }),
                                                                extendedEvents: {
                                                                    onClick: n(function() {
                                                                        var s = v.clone();
                                                                        c.inputTransferExchangeAmountOnClick$Action(t.getId("InputTransferAmount"), c.callContext(s))
                                                                    }, "onClick")
                                                                },
                                                                extendedProperties: {
                                                                    maxLength: "14",
                                                                    "show-default-value": "True",
                                                                    min: "0"
                                                                },
                                                                inputType: 2,
                                                                mandatory: !1,
                                                                maxLength: 0,
                                                                onChange: n(function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var s = v.clone();
                                                                        return c.onChangeInputTransferAmount$Action(c.callContext(s))
                                                                    })
                                                                }, "onChange"),
                                                                style: "form-control",
                                                                variable: e.createVariable(o.DataTypes.DataTypes.Decimal, e.variables.transferAmountVar, function(s) {
                                                                    e.variables.transferAmountVar = s
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    name: "InputTransferAmount"
                                                                },
                                                                _widgetRecordProvider: r
                                                            }), a.createElement(ue, {
                                                                getOwnerSpan: n(function() {
                                                                    return u.getChildSpan("render")
                                                                }, "getOwnerSpan"),
                                                                getOwnerDisposeSpan: n(function() {
                                                                    return u.getChildSpan("destroy")
                                                                }, "getOwnerDisposeSpan"),
                                                                inputs: {
                                                                    PrefixText: "",
                                                                    InputId: t.getId("InputTransferAmount"),
                                                                    UseNumericInput: !0,
                                                                    DecimalSeparator: ".",
                                                                    GroupSeparator: e.getCachedValue(t.getId("EY3lv421nEi_2cXjU+esgw.GroupSeparator"), function() {
                                                                        return e.variables.transferFromVar.fractionalDigitsAttr === 8 ? "" : ","
                                                                    }, function() {
                                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                                    }),
                                                                    AlwaysShowDecimalDigits: !0,
                                                                    SuffixText: "",
                                                                    DecimalDigits: o.BuiltinFunctions.integerToDecimal(e.variables.transferFromVar.fractionalDigitsAttr)
                                                                },
                                                                events: {
                                                                    _handleError: n(function(s) {
                                                                        c.handleError(s)
                                                                    }, "_handleError")
                                                                },
                                                                _validationProps: {
                                                                    validationService: d
                                                                },
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "132",
                                                                    alias: "18"
                                                                },
                                                                _widgetRecordProvider: r,
                                                                _dependencies: []
                                                            })]
                                                        })
                                                    },
                                                    _dependencies: [i(e.variables.dxtradeDailyAvailableLimitVar), i(e.variables.mT5DailyAvailableLimitVar), i(e.variables.dtradeDailyAvailableLimitVar), i(e.variables.transferFromVar.fractionalDigitsAttr), i(e.variables.transferFromVar.loginidAttr), i(e.variables.transferFromVar.minTransferAttr), i(e.variables.transferFromVar.accountTypeAttr), i(E.getAccountType()), i(e.variables.transferToVar.loginidAttr), i(e.variables.transferToVar.accountTypeAttr), i(e.variables.transferToVar.nameAttr), i(e.variables.transferAmountVar), i(e.variables.activeWalletVar.currencyAttr)]
                                                })]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                visible: e.getCachedValue(t.getId("LifetimeLimitReached.Visible"), function() {
                                                    return e.variables.transferToVar.nameAttr !== o.BuiltinFunctions.nullTextIdentifier() && (!e.variables.transferFromVar.isCryptoAttr && e.variables.transferToVar.isCryptoAttr ? e.variables.fiatToCryptoAvailableLimitVar.lt(e.variables.transferFromVar.minTransferAttr) : e.variables.transferFromVar.isCryptoAttr && e.variables.transferToVar.isCryptoAttr ? e.variables.cryptoToCryptoAvailableLimitVar.lt(e.variables.transferFromVar.minTransferAttr) : e.variables.transferFromVar.isCryptoAttr && !e.variables.transferToVar.isCryptoAttr ? e.variables.cryptoToFiatAvailableLimitVar.lt(e.variables.transferFromVar.minTransferAttr) : !1) && e.variables.pOIStatusVar !== "verified"
                                                }, function() {
                                                    return e.variables.transferToVar.nameAttr
                                                }, function() {
                                                    return e.variables.transferFromVar.isCryptoAttr
                                                }, function() {
                                                    return e.variables.transferToVar.isCryptoAttr
                                                }, function() {
                                                    return e.variables.fiatToCryptoAvailableLimitVar
                                                }, function() {
                                                    return e.variables.transferFromVar.minTransferAttr
                                                }, function() {
                                                    return e.variables.cryptoToCryptoAvailableLimitVar
                                                }, function() {
                                                    return e.variables.cryptoToFiatAvailableLimitVar
                                                }, function() {
                                                    return e.variables.pOIStatusVar
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    name: "LifetimeLimitReached"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(Ae, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    HideArrow: e.variables.pOIStatusVar === "pending"
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError"),
                                                    onClickAction$Action: n(function() {
                                                        return Promise.resolve().then(function() {
                                                            var s = v.clone();
                                                            return c.onClickLifetimeLimitReached$Action(c.callContext(s))
                                                        })
                                                    }, "onClickAction$Action")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "134",
                                                    alias: "19"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    placeholder1: new y(function() {
                                                        return [a.createElement(l, {
                                                            align: 0,
                                                            animate: !0,
                                                            gridProperties: {
                                                                marginLeft: "8px"
                                                            },
                                                            visible: e.variables.pOIStatusVar === "none",
                                                            _idProps: {
                                                                service: t,
                                                                name: "StatusNone"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(m, {
                                                            style: "flex-1",
                                                            value: e.getCachedValue(t.getId("BEZEfteeT06vS1rv+ZQgYw.Value"), function() {
                                                                return "Transfer limit " + (e.variables.fiatToCryptoAllowedLimitVar.equals(o.BuiltinFunctions.integerToDecimal(0)) ? e.variables.cryptoToFiatAllowedLimitVar.equals(o.BuiltinFunctions.integerToDecimal(0)) ? o.BuiltinFunctions.decimalToText(e.variables.cryptoToCryptoAllowedLimitVar) : Z.formatMoney$Action(o.BuiltinFunctions.decimalToText(e.variables.cryptoToFiatAllowedLimitVar), e.variables.activeWalletVar.currencyAttr, "en-US", "", v).formattedNumberOut : Z.formatMoney$Action(o.BuiltinFunctions.decimalToText(e.variables.fiatToCryptoAllowedLimitVar), e.variables.activeWalletVar.currencyAttr, "en-US", "", v).formattedNumberOut) + " " + e.variables.activeWalletVar.currencyAttr + " reached."
                                                            }, function() {
                                                                return e.variables.fiatToCryptoAllowedLimitVar
                                                            }, function() {
                                                                return e.variables.activeWalletVar.currencyAttr
                                                            }, function() {
                                                                return e.variables.cryptoToFiatAllowedLimitVar
                                                            }, function() {
                                                                return e.variables.cryptoToCryptoAllowedLimitVar
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "136"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), a.createElement(b, {
                                                            style: "font-bold",
                                                            text: ["Verify your account"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "137"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), " to upgrade the limit."), a.createElement(l, {
                                                            align: 0,
                                                            animate: !0,
                                                            gridProperties: {
                                                                marginLeft: "8px"
                                                            },
                                                            visible: e.variables.pOIStatusVar === "pending",
                                                            _idProps: {
                                                                service: t,
                                                                name: "StatusPending"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, "Verification in progress. You'll be able to transfer once it's complete."), a.createElement(l, {
                                                            align: 0,
                                                            animate: !0,
                                                            gridProperties: {
                                                                marginLeft: "8px"
                                                            },
                                                            visible: e.variables.pOIStatusVar === "rejected",
                                                            _idProps: {
                                                                service: t,
                                                                name: "StatusRejected"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, "Verify failed.", a.createElement(b, {
                                                            style: "font-bold",
                                                            text: [" Resubmit"],
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "140"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))]
                                                    })
                                                },
                                                _dependencies: [i(e.variables.cryptoToCryptoAllowedLimitVar), i(e.variables.cryptoToFiatAllowedLimitVar), i(e.variables.activeWalletVar.currencyAttr), i(e.variables.fiatToCryptoAllowedLimitVar), i(e.variables.pOIStatusVar)]
                                            })), a.createElement(tt, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    To: e.variables.transferToVar,
                                                    DailyTransferLimitCount: e.variables.dailyTransferLimitCountVar,
                                                    From: e.variables.transferFromVar
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError"),
                                                    isDisabledEvent$Action: n(function(s) {
                                                        var h = v.clone();
                                                        c.transferCountLimitMessageIsDisabledEvent$Action(s, c.callContext(h))
                                                    }, "isDisabledEvent$Action")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "141",
                                                    alias: "20"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            }), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                visible: e.getCachedValue(t.getId("DailyLimitReached2.Visible"), function() {
                                                    return e.variables.pOIStatusVar === "verified" && (e.variables.transferFromVar.accountTypeAttr === "wallet" && e.variables.transferToVar.accountTypeAttr === "wallet" && e.variables.walletDailyAvailableLimitVar.equals(o.BuiltinFunctions.integerToDecimal(0)) || e.variables.transferFromVar.accountTypeAttr === "standard" || e.variables.transferToVar.accountTypeAttr === "standard" && e.variables.dtradeDailyAvailableLimitVar.equals(o.BuiltinFunctions.integerToDecimal(0)) ? !0 : !!(e.variables.transferFromVar.accountTypeAttr === "dxtrade" || e.variables.transferToVar.accountTypeAttr === "dxtrade" && e.variables.dxtradeDailyAvailableLimitVar.equals(o.BuiltinFunctions.integerToDecimal(0))))
                                                }, function() {
                                                    return e.variables.pOIStatusVar
                                                }, function() {
                                                    return e.variables.transferFromVar.accountTypeAttr
                                                }, function() {
                                                    return e.variables.transferToVar.accountTypeAttr
                                                }, function() {
                                                    return e.variables.walletDailyAvailableLimitVar
                                                }, function() {
                                                    return e.variables.dtradeDailyAvailableLimitVar
                                                }, function() {
                                                    return e.variables.dxtradeDailyAvailableLimitVar
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    name: "DailyLimitReached2"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(Ae, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    HideArrow: !0
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "143",
                                                    alias: "21"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    placeholder1: new y(function() {
                                                        return [a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            gridProperties: {
                                                                marginLeft: "8px"
                                                            },
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                name: "DailyAmountLimitReached2"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(m, {
                                                            value: e.getCachedValue(t.getId("h3_On8RlGE6AAr5AlIzAKQ.Value"), function() {
                                                                return "You have reached your daily transfer limit of " + (e.variables.transferFromVar.accountTypeAttr === "wallet" && e.variables.transferToVar.accountTypeAttr === "wallet" ? Z.formatMoney$Action(o.BuiltinFunctions.decimalToText(e.variables.walletDailyAllowedLimitVar), "USD", "en-US", "", v).formattedNumberOut : e.variables.transferFromVar.accountTypeAttr === "standard" || e.variables.transferToVar.accountTypeAttr === "standard" ? Z.formatMoney$Action(o.BuiltinFunctions.decimalToText(e.variables.dtradeDailyAllowedLimitVar), "USD", "en-US", "", v).formattedNumberOut : e.variables.transferFromVar.accountTypeAttr === "dxtrade" || e.variables.transferToVar.accountTypeAttr === "dxtrade" ? Z.formatMoney$Action(o.BuiltinFunctions.decimalToText(e.variables.dxtradeDailyAllowedLimitVar), "USD", "en-US", "", v).formattedNumberOut : "0") + " USD between your " + e.variables.transferFromVar.nameAttr + " and " + e.variables.transferToVar.nameAttr + " . This will reset at 00:00 GMT."
                                                            }, function() {
                                                                return e.variables.transferFromVar.accountTypeAttr
                                                            }, function() {
                                                                return e.variables.transferToVar.accountTypeAttr
                                                            }, function() {
                                                                return e.variables.walletDailyAllowedLimitVar
                                                            }, function() {
                                                                return e.variables.dtradeDailyAllowedLimitVar
                                                            }, function() {
                                                                return e.variables.dxtradeDailyAllowedLimitVar
                                                            }, function() {
                                                                return e.variables.transferFromVar.nameAttr
                                                            }, function() {
                                                                return e.variables.transferToVar.nameAttr
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "145"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }))]
                                                    })
                                                },
                                                _dependencies: [i(e.variables.dxtradeDailyAllowedLimitVar), i(e.variables.dtradeDailyAllowedLimitVar), i(e.variables.walletDailyAllowedLimitVar), i(e.variables.transferToVar.nameAttr), i(e.variables.transferToVar.accountTypeAttr), i(e.variables.transferFromVar.nameAttr), i(e.variables.transferFromVar.accountTypeAttr)]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "wallets-transfer-footer",
                                                visible: e.variables.transferFromVar !== e.variables.nullTransferAccountVar && e.variables.transferToVar !== e.variables.nullTransferAccountVar && !e.variables.showInitialTransferModalVar,
                                                _idProps: {
                                                    service: t,
                                                    name: "TransferFooter"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "full-width",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "147"
                                                },
                                                _widgetRecordProvider: r
                                            }, f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !0,
                                                    visible: !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "148"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "full-width display-flex justify-content-space-between",
                                                    visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "149"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(b, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    style: "text-neutral-8",
                                                    text: ["Transfer amount"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "150"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("rjfbBvnlskOJWGucDM9VRA.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "151"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("nfEVuLHPh06crPlQIaurGA.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedTransferAmountVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "152"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                })), a.createElement(l, {
                                                    align: 0,
                                                    animate: !0,
                                                    style: "display-flex justify-content-space-between align-items-center",
                                                    visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "153"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex align-items-center",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        name: "TooltipContainer"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(b, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    style: "text-neutral-8",
                                                    text: ["Transfer fee"],
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "155"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(de, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Position: O.position.topLeft
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "156",
                                                        alias: "22"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    placeholders: {
                                                        content: new y(function() {
                                                            return [a.createElement(g, {
                                                                extendedProperties: {
                                                                    style: "margin-top: 5px;"
                                                                },
                                                                gridProperties: {
                                                                    width: "20px"
                                                                },
                                                                image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                                                                type: 0,
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "157"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        }),
                                                        tooltip: new y(function() {
                                                            return [a.createElement(m, {
                                                                value: e.getCachedValue(t.getId("anHeV8tlCkOm+TbF_Xiy5Q.Value"), function() {
                                                                    return "A " + e.variables.feePercentageVar.toString() + "% transfer fee or " + e.variables.minimumFeeAmountVar + " " + e.variables.activeWalletVar.currencyAttr + " , whichever is higher, applies for transfers between your " + e.variables.transferFromVar.nameAttr + " and " + (e.variables.transferToVar.isCryptoAttr ? "cryptocurrency" : "fiat") + " Wallets"
                                                                }, function() {
                                                                    return e.variables.feePercentageVar
                                                                }, function() {
                                                                    return e.variables.minimumFeeAmountVar
                                                                }, function() {
                                                                    return e.variables.activeWalletVar.currencyAttr
                                                                }, function() {
                                                                    return e.variables.transferFromVar.nameAttr
                                                                }, function() {
                                                                    return e.variables.transferToVar.isCryptoAttr
                                                                }),
                                                                _idProps: {
                                                                    service: t,
                                                                    uuid: "158"
                                                                },
                                                                _widgetRecordProvider: r
                                                            })]
                                                        })
                                                    },
                                                    _dependencies: [i(e.variables.transferToVar.isCryptoAttr), i(e.variables.transferFromVar.nameAttr), i(e.variables.activeWalletVar.currencyAttr), i(e.variables.minimumFeeAmountVar), i(e.variables.feePercentageVar)]
                                                })), f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("WSIMCKXjU0qk76DYTkK99A.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.calculatedFeesVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "159"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                }, function() {
                                                    return [a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        value: e.getCachedValue(t.getId("Fqr13+tPAkqdI_QGTRSkYA.Value"), function() {
                                                            return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferFromVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.convertedCalculatedFeesVar
                                                        }, function() {
                                                            return e.variables.activeWalletVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "160"
                                                        },
                                                        _widgetRecordProvider: r
                                                    })]
                                                })), a.createElement(l, {
                                                    align: 0,
                                                    animate: !0,
                                                    visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "161"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(W, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        Space: O.space.small
                                                    },
                                                    events: {
                                                        _handleError: n(function(s) {
                                                            c.handleError(s)
                                                        }, "_handleError")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "162",
                                                        alias: "23"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })))]
                                            }, function() {
                                                return []
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "full-width display-flex justify-content-space-between",
                                                visible: !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "163"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(b, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Amount received"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "164"
                                                },
                                                _widgetRecordProvider: r
                                            }), f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "165"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                    return [a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column align-items-flex-end",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "166"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(m, {
                                                        value: e.getCachedValue(t.getId("d9GFZUZhjUWHgAAkqbB+1A.Value"), function() {
                                                            return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferFromConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "167"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.getCachedValue(t.getId("nC1hO0slBEmkShhWCMFAPQ.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
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
                                                            uuid: "168"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))]
                                                }, function() {
                                                    return [a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex flex-direction-column align-items-flex-end",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "169"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(m, {
                                                        value: e.getCachedValue(t.getId("jJnK9jt5YEC29y7uc6V7bw.Value"), function() {
                                                            return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                        }, function() {
                                                            return e.variables.transferToVar.fractionalDigitsAttr
                                                        }, function() {
                                                            return e.variables.transferToConvertedAmountVar
                                                        }, function() {
                                                            return e.variables.transferToVar.currencyAttr
                                                        }),
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "170"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), a.createElement(m, {
                                                        extendedProperties: {
                                                            style: "font-size: 12px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "0px"
                                                        },
                                                        value: e.getCachedValue(t.getId("rclEpaCikUarmjadfqia7A.Value"), function() {
                                                            return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + "s)"
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
                                                            uuid: "171"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }))]
                                                }))]
                                            }, function() {
                                                return [a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 16px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("0ixKBgWb8kGZhQECQKFOFQ.Value"), function() {
                                                        return (e.variables.activeWalletVar.is_cryptoAttr ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.activeWalletVar.is_cryptoAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "172"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), a.createElement(ce, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    IsLoading: e.variables.isTransferButtonLoadingVar,
                                                    ShowLabelOnLoading: !1
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "173",
                                                    alias: "24"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    button: new y(function() {
                                                        return [a.createElement(M, {
                                                            enabled: e.getCachedValue(t.getId("_uS0aqiNUE+dFJoUacg9sw.Enabled"), function() {
                                                                return e.variables.showCurrencySwitcherVar ? e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr && !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)) : e.widgets.get(t.getId("InputTransferAmount")).validAttr && !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0))
                                                            }, function() {
                                                                return e.variables.showCurrencySwitcherVar
                                                            }, function() {
                                                                return e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr
                                                            }, function() {
                                                                return e.variables.transferAmountVar
                                                            }, function() {
                                                                return e.widgets.get(t.getId("InputTransferAmount")).validAttr
                                                            }),
                                                            gridProperties: {
                                                                classes: "OSFillParent"
                                                            },
                                                            isDefault: !1,
                                                            onClick: n(function() {
                                                                return Promise.resolve().then(function() {
                                                                    var s = v.clone();
                                                                    return c.submitTransferOnClick$Action(c.callContext(s))
                                                                })
                                                            }, "onClick"),
                                                            style: "btn btn-primary",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "174"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }, a.createElement(l, {
                                                            align: 0,
                                                            animate: !1,
                                                            style: "osui-btn-loading__spinner-animation",
                                                            visible: !0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "175"
                                                            },
                                                            _widgetRecordProvider: r
                                                        }), "Transfer")]
                                                    })
                                                },
                                                _dependencies: [i(e.widgets.get(t.getId("InputTransferAmount")).validAttr), i(e.variables.transferAmountVar), i(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), i(e.variables.showCurrencySwitcherVar)]
                                            })))]
                                        })]
                                    }), a.createElement(Re, {
                                        showPopup: e.variables.isTransferFromOpenVar,
                                        style: e.getCachedValue(t.getId("ModalTransferFrom.Style"), function() {
                                            return "popup-dialog " + (N.isDesktop$Action(v).isDesktopOut ? "" : "popup-dialog__mobile")
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "ModalTransferFrom"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "modal-title",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(b, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer from"],
                                        _idProps: {
                                            service: t,
                                            uuid: "178"
                                        },
                                        _widgetRecordProvider: r
                                    }), a.createElement(g, {
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var s = v.clone();
                                                c.onCloseTransferFromModal$Action(c.callContext(s))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "179"
                                        },
                                        _widgetRecordProvider: r
                                    })), a.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(U, {
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
                                            uuid: "181"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new Se(function(s, h) {
                                                return [a.createElement(te, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferFromAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(h.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: n(function(A) {
                                                            c.handleError(A)
                                                        }, "_handleError"),
                                                        onClickAction$Action: n(function(A) {
                                                            var $ = h.clone();
                                                            c.onClickTransferFromAccount$Action(A, c.callContext($))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "182",
                                                        alias: "25"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })]
                                            }, v, t, "3")
                                        },
                                        _dependencies: [i(e.variables.transferFromAccountListVar)]
                                    }))), a.createElement(Re, {
                                        showPopup: e.variables.isTransferToOpenVar,
                                        style: e.getCachedValue(t.getId("ModalTransferTo.Style"), function() {
                                            return "popup-dialog " + (N.isDesktop$Action(v).isDesktopOut ? "" : "popup-dialog__mobile")
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "ModalTransferTo"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "modal-title",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalHeader2"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(b, {
                                        extendedProperties: {
                                            style: "font-size: 18px;"
                                        },
                                        style: "flex-1 font-bold",
                                        text: ["Transfer to"],
                                        _idProps: {
                                            service: t,
                                            uuid: "185"
                                        },
                                        _widgetRecordProvider: r
                                    }), a.createElement(g, {
                                        extendedEvents: {
                                            onClick: n(function() {
                                                var s = v.clone();
                                                c.onCloseTransferToModal$Action(c.callContext(s))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "186"
                                        },
                                        _widgetRecordProvider: r
                                    })), a.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            name: "ModalContent2"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(U, {
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
                                            uuid: "188"
                                        },
                                        _widgetRecordProvider: r,
                                        placeholders: {
                                            content: new Se(function(s, h) {
                                                return [a.createElement(te, {
                                                    getOwnerSpan: n(function() {
                                                        return u.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: n(function() {
                                                        return u.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        AccountList: e.variables.transferAccountListVar,
                                                        AccountKey: e.variables.transferAccountKeyVar.getCurrent(h.iterationContext)
                                                    },
                                                    events: {
                                                        _handleError: n(function(A) {
                                                            c.handleError(A)
                                                        }, "_handleError"),
                                                        onClickAction$Action: n(function(A) {
                                                            var $ = h.clone();
                                                            c.onClickTransferToAccount$Action(A, c.callContext($))
                                                        }, "onClickAction$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: d
                                                    },
                                                    _idProps: {
                                                        service: s,
                                                        uuid: "189",
                                                        alias: "26"
                                                    },
                                                    _widgetRecordProvider: r,
                                                    _dependencies: []
                                                })]
                                            }, v, t, "4")
                                        },
                                        _dependencies: [i(e.variables.transferAccountListVar)]
                                    }), a.createElement(l, {
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
                                    }, a.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex gap-s align-items-flex-start",
                                        visible: !0,
                                        _idProps: {
                                            service: t,
                                            uuid: "191"
                                        },
                                        _widgetRecordProvider: r
                                    }, a.createElement(g, {
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: t,
                                            uuid: "192"
                                        },
                                        _widgetRecordProvider: r
                                    }), a.createElement(m, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: "You can only transfer funds from your " + e.variables.transferFromVar.nameAttr + " account to your linked " + e.variables.transferToVar.nameAttr + ".",
                                        _idProps: {
                                            service: t,
                                            uuid: "193"
                                        },
                                        _widgetRecordProvider: r
                                    })))))]
                                }),
                                mobileFooterContent: new y(function() {
                                    return [f(e.variables.isTransferSuccessVar, !1, this, function() {
                                        return [a.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base background-neutral-0",
                                            visible: e.getCachedValue(t.getId("ms3e8u0NRkWc5ULGALf9kg.Visible"), function() {
                                                return e.variables.transferFromVar.iconAttr !== o.BuiltinFunctions.nullTextIdentifier() && e.variables.transferToVar.iconAttr !== o.BuiltinFunctions.nullTextIdentifier()
                                            }, function() {
                                                return e.variables.transferFromVar.iconAttr
                                            }, function() {
                                                return e.variables.transferToVar.iconAttr
                                            }),
                                            _idProps: {
                                                service: t,
                                                uuid: "194"
                                            },
                                            _widgetRecordProvider: r
                                        }, a.createElement(M, {
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "background-color: #fff; border-color: #101213; color: #101213;"
                                            },
                                            isDefault: !1,
                                            onClick: n(function() {
                                                try {
                                                    o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                                } catch (s) {
                                                    if (s.name !== "RedirectOccurredException") throw s
                                                }
                                            }, "onClick"),
                                            style: "btn full-width",
                                            visible: !0,
                                            _idProps: {
                                                service: t,
                                                uuid: "195"
                                            },
                                            _widgetRecordProvider: r
                                        }, "Make new transfer"))]
                                    }, function() {
                                        return [a.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            extendedProperties: {
                                                style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px;"
                                            },
                                            style: "full-width padding-base background-neutral-0",
                                            visible: e.variables.transferFromVar !== e.variables.nullTransferAccountVar && e.variables.transferToVar !== e.variables.nullTransferAccountVar && !e.variables.showInitialTransferModalVar,
                                            _idProps: {
                                                service: t,
                                                uuid: "196"
                                            },
                                            _widgetRecordProvider: r
                                        }, f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                            return [a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                visible: !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "197"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "full-width display-flex justify-content-space-between",
                                                visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "198"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(b, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Transfer amount"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "199"
                                                },
                                                _widgetRecordProvider: r
                                            }), f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("YBGFrrYwKkuyFoYKPVwIGg.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "200"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            }, function() {
                                                return [a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("N6cTs5jAQE+7BoiPXQAjVw.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedTransferAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.convertedTransferAmountVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "201"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "display-flex justify-content-space-between align-items-center",
                                                visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "202"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                style: "display-flex align-items-center",
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "203"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(b, {
                                                extendedProperties: {
                                                    style: "font-size: 12px;"
                                                },
                                                style: "text-neutral-8",
                                                text: ["Transfer fee"],
                                                _idProps: {
                                                    service: t,
                                                    uuid: "204"
                                                },
                                                _widgetRecordProvider: r
                                            }), a.createElement(de, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Position: O.position.topLeft
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "205",
                                                    alias: "27"
                                                },
                                                _widgetRecordProvider: r,
                                                placeholders: {
                                                    content: new y(function() {
                                                        return [a.createElement(g, {
                                                            extendedProperties: {
                                                                style: "margin-top: 5px;"
                                                            },
                                                            gridProperties: {
                                                                width: "20px"
                                                            },
                                                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "206"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    }),
                                                    tooltip: new y(function() {
                                                        return [a.createElement(m, {
                                                            value: e.getCachedValue(t.getId("d45hcr2ZuUmwVhnWChdaEg.Value"), function() {
                                                                return "A " + e.variables.feePercentageVar.toString() + "% transfer fee or " + e.variables.minimumFeeAmountVar + " " + e.variables.activeWalletVar.currencyAttr + " , whichever is higher, applies for transfers between your " + e.variables.transferFromVar.nameAttr + " and " + (e.variables.transferToVar.isCryptoAttr ? "cryptocurrency" : "fiat") + " Wallets"
                                                            }, function() {
                                                                return e.variables.feePercentageVar
                                                            }, function() {
                                                                return e.variables.minimumFeeAmountVar
                                                            }, function() {
                                                                return e.variables.activeWalletVar.currencyAttr
                                                            }, function() {
                                                                return e.variables.transferFromVar.nameAttr
                                                            }, function() {
                                                                return e.variables.transferToVar.isCryptoAttr
                                                            }),
                                                            _idProps: {
                                                                service: t,
                                                                uuid: "207"
                                                            },
                                                            _widgetRecordProvider: r
                                                        })]
                                                    })
                                                },
                                                _dependencies: [i(e.variables.transferToVar.isCryptoAttr), i(e.variables.transferFromVar.nameAttr), i(e.variables.activeWalletVar.currencyAttr), i(e.variables.minimumFeeAmountVar), i(e.variables.feePercentageVar)]
                                            })), f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("THGmDJ_l70qvMpbn6zd73w.Value"), function() {
                                                        return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.calculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.calculatedFeesVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "208"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            }, function() {
                                                return [a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    value: e.getCachedValue(t.getId("+Wr68fzNPECWm7E1c17Eew.Value"), function() {
                                                        return "- " + (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedCalculatedFeesVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferFromVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.convertedCalculatedFeesVar
                                                    }, function() {
                                                        return e.variables.activeWalletVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "209"
                                                    },
                                                    _widgetRecordProvider: r
                                                })]
                                            })), a.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                visible: !e.variables.calculatedFeesVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "210"
                                                },
                                                _widgetRecordProvider: r
                                            }, a.createElement(W, {
                                                getOwnerSpan: n(function() {
                                                    return u.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: n(function() {
                                                    return u.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Space: O.space.small
                                                },
                                                events: {
                                                    _handleError: n(function(s) {
                                                        c.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: d
                                                },
                                                _idProps: {
                                                    service: t,
                                                    uuid: "211",
                                                    alias: "28"
                                                },
                                                _widgetRecordProvider: r,
                                                _dependencies: []
                                            })))]
                                        }, function() {
                                            return []
                                        }), a.createElement(l, {
                                            align: 0,
                                            animate: !0,
                                            style: "full-width display-flex justify-content-space-between margin-bottom-base",
                                            visible: !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)),
                                            _idProps: {
                                                service: t,
                                                uuid: "212"
                                            },
                                            _widgetRecordProvider: r
                                        }, a.createElement(b, {
                                            extendedProperties: {
                                                style: "font-size: 16px;"
                                            },
                                            style: "text-neutral-8",
                                            text: ["Amount received"],
                                            _idProps: {
                                                service: t,
                                                uuid: "213"
                                            },
                                            _widgetRecordProvider: r
                                        }), f(e.variables.showCurrencySwitcherVar, !1, this, function() {
                                            return [a.createElement(l, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: t,
                                                    uuid: "214"
                                                },
                                                _widgetRecordProvider: r
                                            }, f(e.variables.currencySwitcherVar === e.variables.activeWalletVar.currencyAttr, !1, this, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column align-items-flex-end",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "215"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(m, {
                                                    value: e.getCachedValue(t.getId("1h+9ZO5hkECUrr2gTZ+P1Q.Value"), function() {
                                                        return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
                                                    }, function() {
                                                        return e.variables.transferToVar.fractionalDigitsAttr
                                                    }, function() {
                                                        return e.variables.transferFromConvertedAmountVar
                                                    }, function() {
                                                        return e.variables.transferToVar.currencyAttr
                                                    }),
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "216"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("jwC4WkEZWUe9VqxtXpIVdw.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.finalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
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
                                                        uuid: "217"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }, function() {
                                                return [a.createElement(l, {
                                                    align: 0,
                                                    animate: !1,
                                                    style: "display-flex flex-direction-column align-items-flex-end",
                                                    visible: !0,
                                                    _idProps: {
                                                        service: t,
                                                        uuid: "218"
                                                    },
                                                    _widgetRecordProvider: r
                                                }, a.createElement(m, {
                                                    value: e.getCachedValue(t.getId("AWuAxszvxEmFfhg8rvFzqA.Value"), function() {
                                                        return "\u2248 " + (e.variables.transferToVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.transferToConvertedAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.transferFromConvertedAmountVar, 8, ".", ".")) + " " + e.variables.transferToVar.currencyAttr
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
                                                        uuid: "219"
                                                    },
                                                    _widgetRecordProvider: r
                                                }), a.createElement(m, {
                                                    extendedProperties: {
                                                        style: "font-size: 12px;"
                                                    },
                                                    gridProperties: {
                                                        marginLeft: "0px"
                                                    },
                                                    value: e.getCachedValue(t.getId("tgPbZJMZek2fXNX+QCjdnA.Value"), function() {
                                                        return (e.variables.transferFromVar.fractionalDigitsAttr === 2 ? o.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 2, ".", ",") : o.BuiltinFunctions.formatDecimal(e.variables.convertedFinalAmountVar, 8, ".", ".")) + " " + e.variables.activeWalletVar.currencyAttr + " (" + e.variables.exchangeRateCountdownTimerVar.toString() + ")"
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
                                                        uuid: "220"
                                                    },
                                                    _widgetRecordProvider: r
                                                }))]
                                            }))]
                                        }, function() {
                                            return [a.createElement(m, {
                                                extendedProperties: {
                                                    style: "font-size: 16px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                value: e.getCachedValue(t.getId("GCwbQ3xhBES8PKei7CQwHQ.Value"), function() {
                                                    return (e.variables.activeWalletVar.is_cryptoAttr ? o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 8, ".", ".") : o.BuiltinFunctions.formatDecimal(e.variables.transferAmountVar, 2, ".", ",")) + " " + e.variables.activeWalletVar.currencyAttr
                                                }, function() {
                                                    return e.variables.activeWalletVar.is_cryptoAttr
                                                }, function() {
                                                    return e.variables.transferAmountVar
                                                }, function() {
                                                    return e.variables.activeWalletVar.currencyAttr
                                                }),
                                                _idProps: {
                                                    service: t,
                                                    uuid: "221"
                                                },
                                                _widgetRecordProvider: r
                                            })]
                                        })), a.createElement(ce, {
                                            getOwnerSpan: n(function() {
                                                return u.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: n(function() {
                                                return u.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                IsLoading: e.variables.isTransferButtonLoadingVar,
                                                ShowLabelOnLoading: !1
                                            },
                                            events: {
                                                _handleError: n(function(s) {
                                                    c.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: d
                                            },
                                            _idProps: {
                                                service: t,
                                                uuid: "222",
                                                alias: "29"
                                            },
                                            _widgetRecordProvider: r,
                                            placeholders: {
                                                button: new y(function() {
                                                    return [a.createElement(M, {
                                                        enabled: e.getCachedValue(t.getId("L8LFOptkIUWnGkK7X1x1wg.Enabled"), function() {
                                                            return e.variables.showCurrencySwitcherVar ? e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr && !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0)) : e.widgets.get(t.getId("InputTransferAmount")).validAttr && !e.variables.transferAmountVar.equals(o.BuiltinFunctions.integerToDecimal(0))
                                                        }, function() {
                                                            return e.variables.showCurrencySwitcherVar
                                                        }, function() {
                                                            return e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr
                                                        }, function() {
                                                            return e.variables.transferAmountVar
                                                        }, function() {
                                                            return e.widgets.get(t.getId("InputTransferAmount")).validAttr
                                                        }),
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        isDefault: !1,
                                                        onClick: n(function() {
                                                            return Promise.resolve().then(function() {
                                                                var s = v.clone();
                                                                return c.submitTransferOnClick$Action(c.callContext(s))
                                                            })
                                                        }, "onClick"),
                                                        style: "btn btn-primary full-width",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "223"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }, a.createElement(l, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "osui-btn-loading__spinner-animation",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: t,
                                                            uuid: "224"
                                                        },
                                                        _widgetRecordProvider: r
                                                    }), "Transfer")]
                                                })
                                            },
                                            _dependencies: [i(e.widgets.get(t.getId("InputTransferAmount")).validAttr), i(e.variables.transferAmountVar), i(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), i(e.variables.showCurrencySwitcherVar)]
                                        }))]
                                    })]
                                })
                            },
                            _dependencies: [i(e.variables.showDisclaimerMessageVar), i(e.variables.isTransferToOpenVar), i(e.variables.isTransferFromOpenVar), i(e.widgets.get(t.getId("InputTransferAmount")).validAttr), i(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), i(e.variables.isTransferButtonLoadingVar), i(e.variables.convertedFinalAmountVar), i(e.variables.exchangeRateCountdownTimerVar), i(e.variables.finalAmountVar), i(e.variables.minimumFeeAmountVar), i(e.variables.feePercentageVar), i(e.variables.dxtradeDailyAllowedLimitVar), i(e.variables.dtradeDailyAllowedLimitVar), i(e.variables.walletDailyAllowedLimitVar), i(e.variables.walletDailyAvailableLimitVar), i(e.variables.dailyTransferLimitCountVar), i(e.variables.cryptoToCryptoAllowedLimitVar), i(e.variables.cryptoToFiatAllowedLimitVar), i(e.variables.fiatToCryptoAllowedLimitVar), i(e.variables.dxtradeDailyAvailableLimitVar), i(e.variables.mT5DailyAvailableLimitVar), i(e.variables.dtradeDailyAvailableLimitVar), i(E.getAccountType()), i(e.variables.cryptoToFiatAvailableLimitVar), i(e.variables.cryptoToCryptoAvailableLimitVar), i(e.variables.fiatToCryptoAvailableLimitVar), i(e.variables.pOIStatusVar), i(e.variables.isInputDisabledVar), i(e.variables.transferAccountListVar), i(e.variables.isLoadingVar), i(e.variables.convertedCalculatedFeesVar), i(e.variables.transferToConvertedAmountVar), i(e.variables.convertedTransferAmountVar), i(e.variables.calculatedFeesVar), i(e.variables.transferFromConvertedAmountVar), i(e.variables.transferToVar), i(e.variables.transferAmountVar), i(e.variables.activeWalletVar.is_cryptoAttr), i(e.variables.activeWalletVar.currencyAttr), i(e.variables.currencySwitcherVar), i(e.variables.showCurrencySwitcherVar), i(e.variables.isTransferSuccessVar), i(e.variables.transferFromAccountListVar), i(e.variables.transferAccountKeyVar), i(e.variables.showInitialTransferModalVar), i(e.variables.nullTransferAccountVar), i(e.variables.transferFromVar)]
                        }))]
                    })
                },
                _dependencies: [i(e.variables.showDisclaimerMessageVar), i(e.variables.isTransferToOpenVar), i(e.variables.isTransferFromOpenVar), i(e.widgets.get(t.getId("InputTransferAmount")).validAttr), i(e.widgets.get(t.getId("InputTransferExchangeAmount")).validAttr), i(e.variables.isTransferButtonLoadingVar), i(e.variables.convertedFinalAmountVar), i(e.variables.exchangeRateCountdownTimerVar), i(e.variables.finalAmountVar), i(e.variables.minimumFeeAmountVar), i(e.variables.feePercentageVar), i(e.variables.dxtradeDailyAllowedLimitVar), i(e.variables.dtradeDailyAllowedLimitVar), i(e.variables.walletDailyAllowedLimitVar), i(e.variables.walletDailyAvailableLimitVar), i(e.variables.dailyTransferLimitCountVar), i(e.variables.cryptoToCryptoAllowedLimitVar), i(e.variables.cryptoToFiatAllowedLimitVar), i(e.variables.fiatToCryptoAllowedLimitVar), i(e.variables.dxtradeDailyAvailableLimitVar), i(e.variables.mT5DailyAvailableLimitVar), i(e.variables.dtradeDailyAvailableLimitVar), i(e.variables.cryptoToFiatAvailableLimitVar), i(e.variables.cryptoToCryptoAvailableLimitVar), i(e.variables.fiatToCryptoAvailableLimitVar), i(e.variables.pOIStatusVar), i(e.variables.isInputDisabledVar), i(e.variables.transferAccountListVar), i(e.variables.convertedCalculatedFeesVar), i(e.variables.transferToConvertedAmountVar), i(e.variables.convertedTransferAmountVar), i(e.variables.calculatedFeesVar), i(e.variables.transferFromConvertedAmountVar), i(e.variables.transferToVar), i(e.variables.transferAmountVar), i(e.variables.currencySwitcherVar), i(e.variables.showCurrencySwitcherVar), i(e.variables.isTransferSuccessVar), i(e.variables.transferFromAccountListVar), i(e.variables.transferAccountKeyVar), i(e.variables.showInitialTransferModalVar), i(e.variables.nullTransferAccountVar), i(e.variables.transferFromVar), i(e.variables.activeWalletVar.is_cryptoAttr), i(e.variables.activeWalletVar.currencyAttr), i(e.variables.activeWalletVar.nameAttr), i(E.getAccountType()), i(e.variables.pageTitleVar), i(e.variables.isLoadingVar), i(e.variables.showContentVar)]
            }))
        }
    };
n(L, "View");
var rt = L,
    Sa = rt;
export {
    Sa as
    default
};