import {
    a as B,
    b as G
} from "./_oschunk-IEEMNE3S.js";
import {
    a as z
} from "./_oschunk-UM2KCABP.js";
import {
    a as O
} from "./_oschunk-T235ANIR.js";
import "./_oschunk-3YBO6G6W.js";
import "./_oschunk-SLDZWO3Q.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as g,
    f as N,
    g as V,
    h as L,
    n as W,
    u as $
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-YFNTRMC5.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as T
} from "./_oschunk-6WALBPGV.js";
import {
    a as D,
    g as _,
    i as v
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-BFQJHNK7.js";
import "./_oschunk-RO5KMNGS.js";
import "./_oschunk-4XEIQ5YX.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as C,
    p as R
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as A
} from "./_oschunk-5KJVGEL7.js";
import {
    c as o,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var b = F(D());
var l = F(D());
var M = {};
var a = A; {
    let i = class i extends a.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, M);
            var n = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getAccountPurposes$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getAccountPurposes$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getAccountPurposes$AggrRefresh() {
            return this.hasOwnProperty("_getAccountPurposes$AggrRefresh") || (this._getAccountPurposes$AggrRefresh = function() {
                var e = function(t, r, u) {
                    var f = this.model,
                        s = this.controller,
                        u = s.callContext(u);
                    return s.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAccountPurposes", "screenservices/PartnersHub/RealAccountCreation/AccountPurposeBlock/ScreenDataSetGetAccountPurposes", "syYKVD1+RbIc9NlZCoKJ2A", t, r, function(P) {
                        f.variables.getAccountPurposesAggr.dataFetchStatusAttr = P
                    }, function(P) {
                        f.variables.getAccountPurposesAggr.replaceWith(a.DataConversion.ServerDataConverter.from(P, f.variables.getAccountPurposesAggr.constructor))
                    }, void 0, void 0, void 0, u, C, !0)
                }.bind(this);
                return a.Logger.startActiveSpan("GetAccountPurposes", function(t) {
                    return t && (t.setAttribute("code.function", "GetAccountPurposes"), t.setAttribute("outsystems.function.key", "703a25a0-f07a-4d65-92e1-5f0eb1fd2781"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), a.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        t && t.end()
                    })
                }, 0)
            }), this._getAccountPurposes$AggrRefresh
        }
        set getAccountPurposes$AggrRefresh(e) {
            this._getAccountPurposes$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getAccountPurposes$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _listItem2OnClick$Action() {
            return this.hasOwnProperty("__listItem2OnClick$Action") || (this.__listItem2OnClick$Action = function(e, t) {
                var r = this.model,
                    n = this.controller,
                    f = this.idService;
                return a.Logger.startActiveSpan("ListItem2OnClick", function(s) {
                    s && (s.setAttribute("code.function", "ListItem2OnClick"), s.setAttribute("outsystems.function.key", "50478ceb-f248-44d0-9551-3d14e00f95e0"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        n.ensureControllerAlive("ListItem2OnClick"), t = n.callContext(t);
                        var u = new a.DataTypes.VariableHolder(new(n.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.AccountPurposeBlock.ListItem2OnClick$vars")));
                        if (u.value.purposeInLocal = e, C.setRealSignupAccountPurpose(u.value.purposeInLocal), C.getRealSignupIsIDVSupported()) return R.realSignupNextStep$Action(1, t), a.Navigation.navigateTo(a.Navigation.generateScreenURL("PartnersHub", "IDVScreen", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), t, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__listItem2OnClick$Action
        }
        set _listItem2OnClick$Action(e) {
            this.__listItem2OnClick$Action = e
        }
        listItem2OnClick$Action(e, t) {
            var r = this.controller;
            return a.Logger.startActiveSpan("ListItem2OnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "ListItem2OnClick"), n.setAttribute("outsystems.function.key", "50478ceb-f248-44d0-9551-3d14e00f95e0"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._listItem2OnClick$Action, t, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return R.defaultTimeout
        }
    };
    o(i, "ControllerInner");
    let S = i;
    E = S, E.registerVariableGroupType("PartnersHub.RealAccountCreation.AccountPurposeBlock.ListItem2OnClick$vars", [{
        name: "Purpose",
        attrName: "purposeInLocal",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var E, K = new a.Controller.ControllerFactory(E, T);
var H = A,
    w = v.PlaceholderContent,
    Y = v.IteratorPlaceholderContent,
    p = class p extends _.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.AccountPurposeBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountPurposeBlock",
                functionKey: "70054fee-4f7b-4269-84b1-2dd12ef1a95e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return B
        }
        get controllerFactory() {
            return K
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                t = c.validationService,
                r = this.widgetsRecordProvider,
                n = c.callContext(),
                f = p.ifWidget,
                s = p.textWidget,
                u = p.asPrimitiveValue,
                P = p.getTranslation,
                h = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, l.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, l.createElement($, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 16px;"
                },
                text: ["Select your account purpose"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            })), l.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            }, l.createElement(V, {
                animateItems: !0,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: i.variables.getAccountPurposesAggr.listOut,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r,
                source_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables.getAccountPurposesAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new Y(function(d, y) {
                        return [l.createElement(L, {
                            extendedProperties: {
                                style: "align-items: center; background: var(--Neutral-Neutral-1, #F8F9FA); border: 1px solid var(--Neutral-Neutral-2, #F1F3F5); border-radius: 4px; cursor: pointer; display: flex; padding: 16px; width: 100%;"
                            },
                            onClick: o(function() {
                                var U = y.clone();
                                c.listItem2OnClick$Action(i.variables.getAccountPurposesAggr.listOut.getCurrent(y.iterationContext).accountPurposeAttr.purposeAttr, c.callContext(U))
                            }, "onClick"),
                            style: "",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: d,
                                name: "ListItem2"
                            },
                            _widgetRecordProvider: r,
                            placeholders: {
                                leftActions: w.Empty,
                                content: new w(function() {
                                    return [l.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; justify-content: space-between;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: d,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: r
                                    }, l.createElement(N, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 14px; font-style: normal; font-weight: 500px; line-height: 21px;"
                                        },
                                        value: i.variables.getAccountPurposesAggr.listOut.getCurrent(y.iterationContext).accountPurposeAttr.purposeAttr,
                                        _idProps: {
                                            service: d,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: r,
                                        value_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables.getAccountPurposesAggr.dataFetchStatusAttr)
                                    }), l.createElement(W, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: H.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: d,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: r
                                    }))]
                                }),
                                rightActions: w.Empty
                            },
                            _dependencies: [u(i.variables.getAccountPurposesAggr.dataFetchStatusAttr), u(i.variables.getAccountPurposesAggr.listOut.getCurrent(y.iterationContext).accountPurposeAttr.purposeAttr)]
                        })]
                    }, n, e, "1")
                },
                _dependencies: [u(i.variables.getAccountPurposesAggr.dataFetchStatusAttr)]
            }))))
        }
    };
o(p, "View");
var x = p,
    I = x;
var Z = v.PlaceholderContent,
    be = v.IteratorPlaceholderContent,
    m = class m extends _.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AccountPurposeScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountPurposeScreen",
                functionKey: "1831cd98-171c-427e-a5d9-ad57e8c61e64",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, I]
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return _.BaseWebScreen.getTranslation("mM0xGBwXfkKl2a1X6MYeZA#Title", "AccountPurposeScreen")
        }
        internalRender() {
            let i = this.model,
                c = this.controller,
                e = this.idService,
                t = c.validationService,
                r = this.widgetsRecordProvider,
                n = c.callContext(),
                f = m.ifWidget,
                s = m.textWidget,
                u = m.asPrimitiveValue,
                P = m.getTranslation,
                h = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(O, {
                getOwnerSpan: o(function() {
                    return h.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return h.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        c.handleError(d)
                    }, "_handleError"),
                    onClickBack2$Action: o(function() {
                        var d = n.clone();
                        c.realAccountCreationLayoutScreenBasedonClickBack2$Action(c.callContext(d))
                    }, "onClickBack2$Action")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    content: new Z(function() {
                        return [b.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: r
                        }, b.createElement(I, {
                            getOwnerSpan: o(function() {
                                return h.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return h.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(d) {
                                    c.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: t
                            },
                            _idProps: {
                                service: e,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
o(m, "View");
var k = m,
    ye = k;
export {
    ye as
    default
};