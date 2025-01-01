import {
    a as V,
    b as L
} from "./_oschunk-YRIYJHWP.js";
import {
    a as F
} from "./_oschunk-KMIPHFQV.js";
import {
    a as w
} from "./_oschunk-WGHHTA53.js";
import {
    a as R
} from "./_oschunk-ZL2HTVZN.js";
import {
    d as h,
    f as D,
    n as B
} from "./_oschunk-LWMGEL7F.js";
import {
    a as H
} from "./_oschunk-4GXKK3IG.js";
import {
    a as x,
    g as T,
    i as E
} from "./_oschunk-WZHUAZJP.js";
import {
    q as g
} from "./_oschunk-BDI2RWOA.js";
import {
    Ac as A,
    a as $
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as N
} from "./_oschunk-QHO7QY6K.js";
var b = N(x());
var W = {};
var r = f; {
    let n = class n extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, W);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getBDEnableCFDScreens$ServerAction() {
            return this.hasOwnProperty("_getBDEnableCFDScreens$ServerAction") || (this._getBDEnableCFDScreens$ServerAction = function(e) {
                var a = this.controller;
                return r.Logger.startActiveSpan("GetBDEnableCFDScreens", function(t) {
                    return t && (t.setAttribute("code.function", "GetBDEnableCFDScreens"), t.setAttribute("outsystems.function.key", "7eca81a1-5ec3-449c-b6ab-0bca5f9ecfbf"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        return a.callServerAction("GetBDEnableCFDScreens", "screenservices/PartnersHub/Home/CommissionPlansSection/ActionGetBDEnableCFDScreens", "LjNg3yE0AdZRJluRGkzpGw", {}, a.callContext(e), void 0, void 0, !0).then(function(m) {
                            var i = new(a.constructor.getVariableGroupType("PartnersHub.Home.CommissionPlansSection$ActionGetBDEnableCFDScreens"));
                            return i.enableCFDScreensOut = r.DataConversion.ServerDataConverter.from(m.EnableCFDScreens, r.DataTypes.DataTypes.Boolean), i
                        })
                    }, function() {
                        t && t.end()
                    })
                }, 0)
            }), this._getBDEnableCFDScreens$ServerAction
        }
        set getBDEnableCFDScreens$ServerAction(e) {
            this._getBDEnableCFDScreens$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickToTurnoverPlan$Action() {
            return this.hasOwnProperty("__onClickToTurnoverPlan$Action") || (this.__onClickToTurnoverPlan$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("OnClickToTurnoverPlan", function(i) {
                    i && (i.setAttribute("code.function", "OnClickToTurnoverPlan"), i.setAttribute("outsystems.function.key", "611a4979-beae-4b5b-87d3-5d9771ae10ab"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToTurnoverPlan"), e = t.callContext(e), g.rudderstackTrackEvent$Action(function() {
                            var l = new A;
                            return l.actionAttr = "click_cta", l.cta_nameAttr = "Learn more", l.cta_placementAttr = "commission plans turnover section", l.timestampAttr = r.BuiltinFunctions.dateTimeToText(r.BuiltinFunctions.currDateTime()), l.show_user_idAttr = !1, l
                        }(), "ce_partnershub_form", e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickToTurnoverPlan$Action
        }
        set _onClickToTurnoverPlan$Action(e) {
            this.__onClickToTurnoverPlan$Action = e
        }
        get _onClickToRevShare$Action() {
            return this.hasOwnProperty("__onClickToRevShare$Action") || (this.__onClickToRevShare$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("OnClickToRevShare", function(i) {
                    i && (i.setAttribute("code.function", "OnClickToRevShare"), i.setAttribute("outsystems.function.key", "c8ecf212-0ba3-452d-9b9c-e0a78205ac36"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickToRevShare"), e = t.callContext(e), g.rudderstackTrackEvent$Action(function() {
                            var l = new A;
                            return l.actionAttr = "click_cta", l.cta_nameAttr = "Learn more", l.cta_placementAttr = "commission plans revshare section", l.timestampAttr = r.BuiltinFunctions.dateTimeToText(r.BuiltinFunctions.currDateTime()), l.show_user_idAttr = !1, l
                        }(), "ce_partnershub_form", e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "RevShare", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickToRevShare$Action
        }
        set _onClickToRevShare$Action(e) {
            this.__onClickToRevShare$Action = e
        }
        get _onClickToCFDs$Action() {
            return this.hasOwnProperty("__onClickToCFDs$Action") || (this.__onClickToCFDs$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("OnClickToCFDs", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickToCFDs"), i.setAttribute("outsystems.function.key", "ecb33b03-1715-441d-bf2b-77e71c07de24"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnClickToCFDs"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return g.rudderstackTrackEvent$Action(function() {
                                var v = new A;
                                return v.actionAttr = "click_cta", v.cta_nameAttr = "Learn more", v.cta_placementAttr = "commission plans cfds section", v.timestampAttr = r.BuiltinFunctions.dateTimeToText(r.BuiltinFunctions.currDateTime()), v.show_user_idAttr = !1, v
                            }(), "ce_partnershub_form", e), a.flush(), t.getBDEnableCFDScreens$ServerAction(e).then(function(v) {
                                l.value = v
                            }).then(function() {
                                if (l.value.enableCFDScreensOut) return r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "CFDs", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.None), e, !0));
                                g.redirectToExternalNewTab$Action("https://docs.deriv.com/partners/ib-cfds-commissions-table.pdf", e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickToCFDs$Action
        }
        set _onClickToCFDs$Action(e) {
            this.__onClickToCFDs$Action = e
        }
        onClickToTurnoverPlan$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToTurnoverPlan"), t.setAttribute("outsystems.function.key", "611a4979-beae-4b5b-87d3-5d9771ae10ab"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onClickToTurnoverPlan$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickToRevShare$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnClickToRevShare__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickToRevShare"), t.setAttribute("outsystems.function.key", "c8ecf212-0ba3-452d-9b9c-e0a78205ac36"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onClickToRevShare$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickToCFDs$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnClickToCFDs__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickToCFDs"), t.setAttribute("outsystems.function.key", "ecb33b03-1715-441d-bf2b-77e71c07de24"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickToCFDs$Action, e)
                }, function() {
                    t && t.end()
                })
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
            return g.defaultTimeout
        }
    };
    o(n, "ControllerInner");
    let C = n;
    O = C, O.registerVariableGroupType("PartnersHub.Home.CommissionPlansSection$ActionGetBDEnableCFDScreens", [{
        name: "EnableCFDScreens",
        attrName: "enableCFDScreensOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var O, M = new r.Controller.ControllerFactory(O, H);
var u = N(x());
var G = {};
var z = f; {
    let n = class n extends z.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, G);
            var m = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClick$Action() {
            return this.hasOwnProperty("_onClick$Action") || (this._onClick$Action = function() {
                return Promise.resolve()
            }), this._onClick$Action
        }
        set onClick$Action(e) {
            this._onClick$Action = e
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
            return g.defaultTimeout
        }
    };
    o(n, "ControllerInner");
    let C = n;
    U = C
}
var U, K = new z.Controller.ControllerFactory(U, H);
var _ = f,
    Se = E.PlaceholderContent,
    pe = E.IteratorPlaceholderContent,
    S = class S extends T.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlan"
        }
        static getAttributes() {
            return {
                codeFunction: "CommissionPlan",
                functionKey: "b5efb300-c4b3-4d1c-89c7-335b5ff20980",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlan.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R, w]
        }
        get modelFactory() {
            return V
        }
        get controllerFactory() {
            return K
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                c = this.controller,
                e = this.idService,
                a = c.validationService,
                t = this.widgetsRecordProvider,
                m = c.callContext(),
                i = S.ifWidget,
                l = S.textWidget,
                v = S.asPrimitiveValue,
                J = S.getTranslation,
                d = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(h, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var s = m.clone();
                        c.onClick$Action(c.callContext(s))
                    }, "onClick")
                },
                style: "ph-commissions-card-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, u.createElement(h, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("Details.Style"), function() {
                    return "ph-commission-plan-top" + (n.variables.hasDividerIn ? " ph-commissions-card-container-gap__medium" : " ph-commissions-card-container-gap__small")
                }, function() {
                    return n.variables.hasDividerIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Details"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._hasDividerInDataFetchStatus)
            }, u.createElement(h, {
                align: 0,
                animate: !1,
                style: "ph-commissions-card-title",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, i(n.variables.iconIn !== _.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [u.createElement(R, {
                    getOwnerSpan: o(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: n.variables.iconIn,
                        _sVGCodeInDataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._iconInDataFetchStatus)
                    },
                    events: {
                        _handleError: o(function(s) {
                            c.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
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
                return []
            }), u.createElement(D, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "ph-section-subtitle ph-commission-subtitle",
                value: n.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._titleInDataFetchStatus)
            }), u.createElement(R, {
                getOwnerSpan: o(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g clip-path="url(#clip0_24393_1618)">\r
<path d="M12.3438 7.65625C12.5312 7.84375 12.5312 8.1875 12.3438 8.375L6.34375 14.375C6.15625 14.5625 5.8125 14.5625 5.625 14.375C5.4375 14.1875 5.4375 13.8438 5.625 13.6562L11.2812 8L5.625 2.375C5.4375 2.1875 5.4375 1.84375 5.625 1.65625C5.8125 1.46875 6.15625 1.46875 6.34375 1.65625L12.3438 7.65625Z" fill="#272B30"/>\r
</g>\r
<defs>\r
<clipPath id="clip0_24393_1618">\r
<rect width="16" height="16" fill="white"/>\r
</clipPath>\r
</defs>\r
</svg>\r
`
                },
                events: {
                    _handleError: o(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), i(n.variables.hasDividerIn, !1, this, function() {
                return [u.createElement(w, {
                    getOwnerSpan: o(function() {
                        return d.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: o(function() {
                        return d.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: $.space.none
                    },
                    events: {
                        _handleError: o(function(s) {
                            c.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: e,
                        uuid: "6",
                        alias: "3"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                })]
            }, function() {
                return []
            }), u.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, i(n.variables.descriptionHeadIn !== _.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [u.createElement(D, {
                    style: "ph-section-head",
                    value: n.variables.descriptionHeadIn,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._descriptionHeadInDataFetchStatus)
                })]
            }, function() {
                return []
            }), u.createElement(D, {
                style: "ph-section-description",
                value: n.variables.descriptionIn,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._descriptionInDataFetchStatus)
            }))), i(n.variables.imageIn !== _.BuiltinFunctions.nullTextIdentifier() && !n.variables.noImageIn, !1, this, function() {
                return [u.createElement(h, {
                    align: 0,
                    animate: !1,
                    style: "display-flex justify-content-center align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ImageContainer"
                    },
                    _widgetRecordProvider: t
                }, u.createElement(B, {
                    style: "ph-commissions-card-image",
                    type: 1,
                    url: n.variables.imageIn,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t,
                    url_dataFetchStatus: _.Model.calculateDataFetchStatus(n.variables._imageInDataFetchStatus)
                }))]
            }, function() {
                return []
            })))
        }
    };
o(S, "View");
var k = S,
    y = k;
var p = f,
    Oe = E.PlaceholderContent,
    ke = E.IteratorPlaceholderContent,
    P = class P extends T.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlansSection"
        }
        static getAttributes() {
            return {
                codeFunction: "CommissionPlansSection",
                functionKey: "62a14c79-3749-4ddb-8456-46d90a67651c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlansSection.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [F, y]
        }
        get modelFactory() {
            return L
        }
        get controllerFactory() {
            return M
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                c = this.controller,
                e = this.idService,
                a = c.validationService,
                t = this.widgetsRecordProvider,
                m = c.callContext(),
                i = P.ifWidget,
                l = P.textWidget,
                v = P.asPrimitiveValue,
                J = P.getTranslation,
                d = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(h, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "ph-commission-block_main-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, b.createElement(F, {
                getOwnerSpan: o(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Label: n.variables.customTitleIn,
                    _labelInDataFetchStatus: p.Model.calculateDataFetchStatus(n.variables._customTitleInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(s) {
                        c.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), b.createElement(h, {
                align: 0,
                animate: !1,
                style: "ph-commission-block_container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, b.createElement(y, {
                getOwnerSpan: o(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "CFDs trading",
                    Description: "Earn with our instrument-based commission plan.",
                    HasDivider: !0,
                    NoImage: n.variables.noImageIn,
                    _noImageInDataFetchStatus: p.Model.calculateDataFetchStatus(n.variables._noImageInDataFetchStatus),
                    Image: p.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.cfds_trading.png")
                },
                events: {
                    _handleError: o(function(s) {
                        c.handleError(s)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        return Promise.resolve().then(function() {
                            var s = m.clone();
                            return c.onClickToCFDs$Action(c.callContext(s))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    name: "CFDsTrding",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), b.createElement(y, {
                getOwnerSpan: o(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    DescriptionHead: "RevShare plan: ",
                    Image: p.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rev_share.png"),
                    Description: "Earn up to 40% commissions from client trades.",
                    Title: "Options trading",
                    HasDivider: !0,
                    NoImage: n.variables.noImageIn,
                    _noImageInDataFetchStatus: p.Model.calculateDataFetchStatus(n.variables._noImageInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(s) {
                        c.handleError(s)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var s = m.clone();
                        c.onClickToRevShare$Action(c.callContext(s))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    name: "OptionsTrading_Revshare_",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), b.createElement(y, {
                getOwnerSpan: o(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Image: p.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.turn_over.png"),
                    NoImage: n.variables.noImageIn,
                    _noImageInDataFetchStatus: p.Model.calculateDataFetchStatus(n.variables._noImageInDataFetchStatus),
                    Title: "Options trading",
                    HasDivider: !0,
                    DescriptionHead: "Turnover plan: ",
                    Description: "Earn based on each contract\u2019s payout  probability."
                },
                events: {
                    _handleError: o(function(s) {
                        c.handleError(s)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var s = m.clone();
                        c.onClickToTurnoverPlan$Action(c.callContext(s))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    name: "OptionsTrading_Turnover_",
                    alias: "4"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))))
        }
    };
o(P, "View");
var I = P,
    Ie = I;
export {
    y as a, Ie as b
};