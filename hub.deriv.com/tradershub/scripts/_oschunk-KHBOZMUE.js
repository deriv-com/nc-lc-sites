import {
    a as mr,
    b as fr
} from "./_oschunk-7TKCLJO5.js";
import "./_oschunk-EKNLTNCL.js";
import {
    a as ge
} from "./_oschunk-UHVNGUMG.js";
import {
    a as et,
    b as it
} from "./_oschunk-MESF6Q3U.js";
import {
    a as rt
} from "./_oschunk-7DMOHYBT.js";
import {
    a as tt
} from "./_oschunk-MAFTJFMD.js";
import {
    a as Ze
} from "./_oschunk-ODSHDLTB.js";
import {
    a as nt
} from "./_oschunk-ZKDZ5ICL.js";
import {
    a as Xt,
    b as Yt,
    c as Zt,
    d as er,
    e as tr,
    f as rr,
    g as ir,
    h as nr,
    i as or,
    j as ar,
    k as sr,
    l as lr,
    m as cr,
    n as dr
} from "./_oschunk-O5FRS3XE.js";
import "./_oschunk-PSUEQKJH.js";
import "./_oschunk-OICUE63D.js";
import "./_oschunk-WER75YAS.js";
import "./_oschunk-BY4KTNYI.js";
import "./_oschunk-HBEXL7KK.js";
import {
    a as ur
} from "./_oschunk-56IFB5ET.js";
import "./_oschunk-J62WATEC.js";
import "./_oschunk-GEKOGHNU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as Kt
} from "./_oschunk-BHZNFATE.js";
import {
    a as Jt,
    b as H,
    h as d,
    j as h,
    k as ce,
    q as W,
    r as p,
    s as Me,
    t as Be,
    u as ve,
    v as B,
    w as Ye,
    y as _
} from "./_oschunk-WAXNMQCP.js";
import {
    a as $
} from "./_oschunk-LHY3WMNC.js";
import {
    a as X,
    g as D,
    i as S
} from "./_oschunk-J7LCUWB3.js";
import "./_oschunk-ESOYZIPG.js";
import {
    a as V,
    b as qt,
    d as I
} from "./_oschunk-XMOR6XCC.js";
import {
    a as O
} from "./_oschunk-H7UK4VZM.js";
import "./_oschunk-JSVFHRDW.js";
import "./_oschunk-LUKJNVXR.js";
import "./_oschunk-X4K3PA43.js";
import {
    Bd as Xe,
    a as $e
} from "./_oschunk-44PT7RP7.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as a,
    g as K
} from "./_oschunk-DVBKI63I.js";
var u = K(X());
var Y = K(X());
var vr = {};
var pe = y; {
    let r = class r extends pe.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, vr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickAction$Action() {
            return this.hasOwnProperty("__onClickAction$Action") || (this.__onClickAction$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return pe.Logger.startActiveSpan("OnClickAction", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickAction"), i.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), pe.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), pe.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        onClickAction$Action(e) {
            var n = this.controller;
            return pe.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), pe.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onClickEvent$Action() {
            return this.hasOwnProperty("_onClickEvent$Action") || (this._onClickEvent$Action = function() {
                return Promise.resolve()
            }), this._onClickEvent$Action
        }
        set onClickEvent$Action(e) {
            this._onClickEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    gr = v
}
var gr, pr = new pe.Controller.ControllerFactory(gr, $);
var de = y,
    hn = S.PlaceholderContent,
    _n = S.IteratorPlaceholderContent,
    he = class he extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MyAccountCard"
        }
        static getAttributes() {
            return {
                codeFunction: "MyAccountCard",
                functionKey: "67369083-c559-4434-9335-fdab63827c13",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.MyAccountCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Xt
        }
        get controllerFactory() {
            return pr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = he.ifWidget,
                c = he.textWidget,
                m = he.asPrimitiveValue,
                f = he.getTranslation,
                g = this;
            return Y.createElement("div", this.getRootNodeProperties(), Y.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.onClickAction$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "my-account-card",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, Y.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FirstRowContainer"
                },
                _widgetRecordProvider: t
            }, Y.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductImageContainer"
                },
                _widgetRecordProvider: t
            }, Y.createElement(p, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "ProductImage"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            }), Y.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #FEF5E5; border-radius: 100px; border-style: solid; border-width: 0px; color: #AC6F00; height: 24px; padding: 3px 8px 3px 8px;"
                },
                style: "display-flex align-items-center column-gap-xs display-flex",
                visible: r.variables.statusIn !== "",
                _idProps: {
                    service: e,
                    name: "StatusBadge"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, Y.createElement(p, {
                extendedProperties: {
                    style: "font-size: 24px; height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                image: de.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), Y.createElement(h, {
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: r.getCachedValue(e.getId("ServerStatus.Value"), function() {
                    return r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "maintenance" ? "Server maintenance" : r.variables.statusIn
                }, function() {
                    return r.variables.statusIn
                }),
                _idProps: {
                    service: e,
                    name: "ServerStatus"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            })))), Y.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer"
                },
                _widgetRecordProvider: t
            }, Y.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-block",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TextContainer"
                },
                _widgetRecordProvider: t
            }, Y.createElement(h, {
                style: "display-block",
                value: r.variables.nameIn,
                _idProps: {
                    service: e,
                    name: "ProductName"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._nameInDataFetchStatus)
            }), Y.createElement(h, {
                extendedProperties: {
                    style: "margin-top: 4px;"
                },
                style: r.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Style"), function() {
                    return r.variables.statusIn !== "" ? "balance-unavailable" : "balance-text"
                }, function() {
                    return r.variables.statusIn
                }),
                value: r.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Value"), function() {
                    return r.variables.statusIn !== "" ? "(Balance unavailable)" : r.variables.balanceIn
                }, function() {
                    return r.variables.statusIn
                }, function() {
                    return r.variables.balanceIn
                }),
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus),
                value_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus, r.variables._balanceInDataFetchStatus)
            })), Y.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ArrowIconContainer"
                },
                _widgetRecordProvider: t
            }, Y.createElement(p, {
                image: de.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                style: r.getCachedValue(e.getId("Krj1ndw00EeLC7EeErzINg.Style"), function() {
                    return r.variables.statusIn !== "" ? "disabled" : ""
                }, function() {
                    return r.variables.statusIn
                }),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: de.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            })))))
        }
    };
a(he, "View");
var ot = he,
    at = ot;
var se = K(X());
var hr = {};
var _e = y; {
    let r = class r extends _e.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, hr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickAction$Action() {
            return this.hasOwnProperty("__onClickAction$Action") || (this.__onClickAction$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return _e.Logger.startActiveSpan("OnClickAction", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickAction"), i.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _e.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), _e.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        onClickAction$Action(e) {
            var n = this.controller;
            return _e.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _e.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClickAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onClickEvent$Action() {
            return this.hasOwnProperty("_onClickEvent$Action") || (this._onClickEvent$Action = function() {
                return Promise.resolve()
            }), this._onClickEvent$Action
        }
        set onClickEvent$Action(e) {
            this._onClickEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    _r = v
}
var _r, br = new _e.Controller.ControllerFactory(_r, $);
var ze = y,
    Fn = S.PlaceholderContent,
    Wn = S.IteratorPlaceholderContent,
    be = class be extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.AvailableAccountCard"
        }
        static getAttributes() {
            return {
                codeFunction: "AvailableAccountCard",
                functionKey: "98e50be2-a3ea-4cff-82f2-19c5390ecf2b",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.AvailableAccountCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Yt
        }
        get controllerFactory() {
            return br
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = be.ifWidget,
                c = be.textWidget,
                m = be.asPrimitiveValue,
                f = be.getTranslation,
                g = this;
            return se.createElement("div", this.getRootNodeProperties(), se.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.onClickAction$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                style: "available_account_card",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, se.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, se.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 40px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "40px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductIconContainerSmall"
                },
                _widgetRecordProvider: t
            }, se.createElement(p, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            })), se.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 0 16px;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, se.createElement(h, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                style: "display-block",
                value: r.variables.productNameIn,
                _idProps: {
                    service: e,
                    name: "Product"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productNameInDataFetchStatus)
            }), se.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px; margin-top: 4px;"
                },
                value: r.variables.productDescriptionIn,
                _idProps: {
                    service: e,
                    name: "Description"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ze.Model.calculateDataFetchStatus(r.variables._productDescriptionInDataFetchStatus)
            }))), se.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: 40px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "40px"
                },
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconContainer"
                },
                _widgetRecordProvider: t
            }, se.createElement(p, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                image: ze.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
a(be, "View");
var st = be,
    Ue = st;
var L = K(X());
var Zr = {
        "CPbKy+0QdkiEybCU+HUEZg#Value": "Mot de passe oubli\xE9 ?"
    },
    yr = {
        "fr-FR": {
            translations: Zr,
            isRTL: !1
        }
    };
var C = y; {
    let r = class r extends C.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, yr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _setPasswordOnClick$Action() {
            return this.hasOwnProperty("__setPasswordOnClick$Action") || (this.__setPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("SetPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "SetPasswordOnClick"), i.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetPasswordOnClick"), e = t.callContext(e);
                        var c = new C.DataTypes.VariableHolder;
                        return C.Flow.executeAsyncFlow(function() {
                            return C.Flow.executeSequence(function() {
                                return n.variables.isPasswordSetIn ? t._addAccountOnClick$Action(e) : (n.flush(), I.tradingPlatformPasswordChange$Action("", n.variables.selectedAccountIn.platformAttr, n.variables.passwordInputValueVar, e).then(function(m) {
                                    c.value = m
                                }).then(function() {
                                    return t._addAccountOnClick$Action(e)
                                }))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__setPasswordOnClick$Action
        }
        set _setPasswordOnClick$Action(e) {
            this.__setPasswordOnClick$Action = e
        }
        get _validate$Action() {
            return this.hasOwnProperty("__validate$Action") || (this.__validate$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("Validate", function(i) {
                    i && (i.setAttribute("code.function", "Validate"), i.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), e = t.callContext(e), n.variables.passwordInputValueVar === "" ? (n.widgets.get(o.getId("Input_password")).validAttr = !1, n.widgets.get(o.getId("Input_password")).validationMessageAttr = "Password is required.") : (n.widgets.get(o.getId("Input_password")).validAttr = !0, n.widgets.get(o.getId("Input_password")).validationMessageAttr = C.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__validate$Action
        }
        set _validate$Action(e) {
            this.__validate$Action = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("ForgotPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ForgotPasswordOnClick"), i.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        get _handleError$Action() {
            return this.hasOwnProperty("__handleError$Action") || (this.__handleError$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("HandleError", function(c) {
                    return c && (c.setAttribute("code.function", "HandleError"), c.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        o.ensureControllerAlive("HandleError"), n = o.callContext(n);
                        var m = new C.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars")));
                        return m.value.errorCodeInLocal = e, C.Flow.executeAsyncFlow(function() {
                            return C.Flow.executeSequence(function() {
                                if (m.value.errorCodeInLocal === "ASK_FIX_DETAILS") return o.needsKYCEvent$Action(n).then(function() {
                                    t.variables.isLoadingVar = !1, t.variables.passwordInputValueVar = ""
                                });
                                m.value.errorCodeInLocal === "TradingPlatformInvalidAccount" && C.FeedbackMessageService.showFeedbackMessage("To trade CFDs, you'll need to use your USD Wallet. Click Transfer to move your BTC to your USD Wallet.", 0)
                            })
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__handleError$Action
        }
        set _handleError$Action(e) {
            this.__handleError$Action = e
        }
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("PasswordPolicyCompliant", function(c) {
                    c && (c.setAttribute("code.function", "PasswordPolicyCompliant"), c.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("PasswordPolicyCompliant"), n = o.callContext(n);
                        var m = new C.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars")));
                        m.value.isValidInLocal = e, t.variables.isPasswordValidVar = m.value.isValidInLocal
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__passwordPolicyCompliant$Action
        }
        set _passwordPolicyCompliant$Action(e) {
            this.__passwordPolicyCompliant$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                n.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("OnClickShowPassword", function(i) {
                    i && (i.setAttribute("code.function", "OnClickShowPassword"), i.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), e = t.callContext(e), n.variables.showPasswordVar = !n.variables.showPasswordVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        get _addAccountOnClick$Action() {
            return this.hasOwnProperty("__addAccountOnClick$Action") || (this.__addAccountOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return C.Logger.startActiveSpan("AddAccountOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "AddAccountOnClick"), i.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        t.ensureControllerAlive("AddAccountOnClick"), e = t.callContext(e);
                        var c = new C.DataTypes.VariableHolder,
                            m = new C.DataTypes.VariableHolder;
                        return C.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, C.Flow.executeSequence(function() {
                                return n.variables.selectedAccountIn.platformAttr === "mt5" ? (n.flush(), I.mT5NewAccount$Action(n.variables.passwordInputValueVar, n.variables.selectedAccountIn.productAttr, n.variables.selectedAccountIn.shortcodeAttr, e).then(function(f) {
                                    c.value = f
                                }).then(function() {
                                    return C.Flow.executeSequence(function() {
                                        return c.value.errorOut !== C.BuiltinFunctions.nullTextIdentifier() ? t._handleError$Action(c.value.responseOut.errorAttr.codeAttr, e).then(function() {
                                            return C.Flow.returnAsync()
                                        }) : t.refetchMT5Event$Action(e)
                                    })
                                })) : (n.flush(), I.tradingPlatformNewAccount$Action("all", n.variables.passwordInputValueVar, n.variables.selectedAccountIn.platformAttr, e).then(function(f) {
                                    m.value = f
                                }).then(function() {
                                    return C.Flow.executeSequence(function() {
                                        return m.value.responseOut.msg_typeAttr === C.BuiltinFunctions.nullTextIdentifier() ? (n.variables.isLoadingVar = !1, n.variables.passwordInputValueVar = "", C.Flow.returnAsync()) : t.refetchDxtradeEvent$Action(e)
                                    })
                                }))
                            }).then(function() {
                                n.variables.isLoadingVar = !1, n.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__addAccountOnClick$Action
        }
        set _addAccountOnClick$Action(e) {
            this.__addAccountOnClick$Action = e
        }
        setPasswordOnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("SetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetPasswordOnClick"), t.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        validate$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("Validate__proxy", function(t) {
                t && (t.setAttribute("code.function", "Validate"), t.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._validate$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        forgotPasswordOnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        handleError$Action(e, n) {
            var t = this.controller;
            return C.Logger.startActiveSpan("HandleError__proxy", function(o) {
                return o && (o.setAttribute("code.function", "HandleError"), o.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._handleError$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        passwordPolicyCompliant$Action(e, n) {
            var t = this.controller;
            return C.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(o) {
                o && (o.setAttribute("code.function", "PasswordPolicyCompliant"), o.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickShowPassword$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        addAccountOnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("AddAccountOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "AddAccountOnClick"), t.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._addAccountOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get needsKYCEvent$Action() {
            return this.hasOwnProperty("_needsKYCEvent$Action") || (this._needsKYCEvent$Action = function() {
                return Promise.resolve()
            }), this._needsKYCEvent$Action
        }
        set needsKYCEvent$Action(e) {
            this._needsKYCEvent$Action = e
        }
        get refetchMT5Event$Action() {
            return this.hasOwnProperty("_refetchMT5Event$Action") || (this._refetchMT5Event$Action = function() {
                return Promise.resolve()
            }), this._refetchMT5Event$Action
        }
        set refetchMT5Event$Action(e) {
            this._refetchMT5Event$Action = e
        }
        get refetchDxtradeEvent$Action() {
            return this.hasOwnProperty("_refetchDxtradeEvent$Action") || (this._refetchDxtradeEvent$Action = function() {
                return Promise.resolve()
            }), this._refetchDxtradeEvent$Action
        }
        set refetchDxtradeEvent$Action(e) {
            this._refetchDxtradeEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    je = v, je.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars", [{
        name: "ErrorCode",
        attrName: "errorCodeInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), je.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var je, Cr = new C.Controller.ControllerFactory(je, $);
var Q = y,
    Zn = S.PlaceholderContent,
    eo = S.IteratorPlaceholderContent,
    ye = class ye extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.PasswordModal"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordModal",
                functionKey: "53e37419-74a6-48a1-868f-55c9df17f185",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.PasswordModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [nt]
        }
        get modelFactory() {
            return Zt
        }
        get controllerFactory() {
            return Cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = ye.ifWidget,
                c = ye.textWidget,
                m = ye.asPrimitiveValue,
                f = ye.getTranslation,
                g = this;
            return L.createElement("div", this.getRootNodeProperties(), L.createElement(B, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, L.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "HeaderContainer"
                },
                _widgetRecordProvider: t
            }, L.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("fSgl+j5+0UKZIVTyJ5OjXg.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Add " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "a Deriv X" : "an MT5") + " account" : "Set up your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " password"
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), L.createElement(p, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Q.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), L.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ContentContainer"
                },
                _widgetRecordProvider: t
            }, L.createElement(h, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: r.getCachedValue(e.getId("Title.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Enter your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " password to enable your " + V.getAccountType() + " account." : "Enable your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " account by setting a password. Use this password for all your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " accounts."
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }, function() {
                    return V.getAccountType()
                }),
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), L.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "position-relative",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PasswordInputContainer"
                },
                _widgetRecordProvider: t
            }, L.createElement(Me, {
                _validationProps: {
                    validationService: n
                },
                enabled: !r.variables.isLoadingVar,
                extendedEvents: {
                    onBlur: a(function() {
                        var l = o.clone();
                        s.validate$Action(s.callContext(l))
                    }, "onBlur")
                },
                extendedProperties: {
                    type: r.getCachedValue(e.getId("Input_password.type"), function() {
                        return r.variables.showPasswordVar ? "text" : "password"
                    }, function() {
                        return r.variables.showPasswordVar
                    })
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 1,
                mandatory: !0,
                maxLength: 16,
                prompt: "Enter your password",
                style: "form-control",
                variable: r.createVariable(Q.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(l) {
                    r.variables.passwordInputValueVar = l
                }),
                _idProps: {
                    service: e,
                    name: "Input_password"
                },
                _widgetRecordProvider: t
            }), i(r.variables.showPasswordVar, !1, this, function() {
                return [L.createElement(p, {
                    extendedEvents: {
                        onClick: a(function() {
                            var l = o.clone();
                            s.onClickShowPassword$Action(s.callContext(l))
                        }, "onClick")
                    },
                    image: Q.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
                    style: r.getCachedValue(e.getId("A5jyuhicUE2e4Pp8p0KqZQ.Style"), function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [L.createElement(p, {
                    extendedEvents: {
                        onClick: a(function() {
                            var l = o.clone();
                            s.onClickShowPassword$Action(s.callContext(l))
                        }, "onClick")
                    },
                    image: Q.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                    style: r.getCachedValue(e.getId("FLORvYxN7kGkgrgx24rwlQ.Style"), function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return r.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                })]
            })), L.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "padding: 16px 16px 0px 16px;"
                },
                visible: !r.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "PasswordPolicyContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, L.createElement(nt, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    NeedToCheckSpecialCharacter: !0,
                    Password: r.variables.passwordInputValueVar,
                    Type: "CREATE"
                },
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError"),
                    compliant$Action: a(function(l) {
                        var x = o.clone();
                        s.passwordPolicyCompliant$Action(l, s.callContext(x))
                    }, "compliant$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "11",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), L.createElement(d, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.forgotPasswordOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "margin-top: 24px; text-align: right;"
                },
                visible: r.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, L.createElement(_, {
                extendedProperties: {
                    style: "color: #333333; font-size: 14px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [c(f("CPbKy+0QdkiEybCU+HUEZg#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), L.createElement(d, {
                align: 0,
                animate: !1,
                style: "cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: t
            }, L.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 8px; margin-right: 16px; padding: 8px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                style: "display-flex align-items-flex-start",
                visible: V.getAccountType() === "real",
                _idProps: {
                    service: e,
                    name: "RegulatoryInformation"
                },
                _widgetRecordProvider: t
            }, L.createElement(p, {
                image: Q.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), L.createElement(h, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.getCachedValue(e.getId("6ELDmySp7Uqpvj+llw1hVw.Value"), function() {
                    return "You are adding your " + (r.variables.selectedAccountIn.platformAttr === "mt5" ? "Deriv " + Q.BuiltinFunctions.toUpper(r.variables.selectedAccountIn.platformAttr) + " " + r.variables.selectedAccountIn.labelAttr : r.variables.selectedAccountIn.labelAttr) + " account under " + r.variables.selectedAccountIn.nameAttr + (r.variables.selectedAccountIn.regulatory_authorityAttr !== Q.BuiltinFunctions.nullTextIdentifier() ? ", regulated by the " + r.variables.selectedAccountIn.regulatory_authorityAttr : "") + (r.variables.selectedAccountIn.licence_numberAttr !== Q.BuiltinFunctions.nullTextIdentifier() ? " (licence no. " + r.variables.selectedAccountIn.licence_numberAttr + ")." : "")
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }, function() {
                    return r.variables.selectedAccountIn.labelAttr
                }, function() {
                    return r.variables.selectedAccountIn.nameAttr
                }, function() {
                    return r.variables.selectedAccountIn.regulatory_authorityAttr
                }, function() {
                    return r.variables.selectedAccountIn.licence_numberAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })), L.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "color: #333333; margin-right: 16px; margin-top: 24px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: V.getAccountType() === "real",
                _idProps: {
                    service: e,
                    name: "AcceptTermsAndCondition"
                },
                _widgetRecordProvider: t
            }, L.createElement(h, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: r.getCachedValue(e.getId("KSGfXiAafkGGiobvnyUBgA.Value"), function() {
                    return "By clicking " + (r.variables.isPasswordSetIn ? "'Add account'" : "'Set up password'") + ", I accept " + r.variables.selectedAccountIn.nameAttr + "'s terms and conditions."
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.nameAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            })), L.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: solid; border-width: 1px 0px 0px 0px; margin-top: 16px; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionBtnContainer"
                },
                _widgetRecordProvider: t
            }, L.createElement(H, {
                enabled: r.getCachedValue(e.getId("ActionButton.Enabled"), function() {
                    return r.variables.isPasswordSetIn ? r.variables.passwordInputValueVar !== "" && !r.variables.isLoadingVar : r.variables.passwordInputValueVar !== "" && !r.variables.isLoadingVar && r.variables.isPasswordValidVar
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.passwordInputValueVar
                }, function() {
                    return r.variables.isLoadingVar
                }, function() {
                    return r.variables.isPasswordValidVar
                }),
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.setPasswordOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButton"
                },
                _widgetRecordProvider: t,
                enabled_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, L.createElement(h, {
                value: r.getCachedValue(e.getId("SyRNTNEVdEu8Q8GmQN8J8Q.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Add account" : "Set up password"
                }, function() {
                    return r.variables.isPasswordSetIn
                }),
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Q.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }))))))
        }
    };
a(ye, "View");
var lt = ye,
    ct = lt;
var M = K(X());
var ei = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u064A\u0633 \u0645\u062D\u062C\u0648\u0628\u064B\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u062C\u062F\u0631\u0627\u0646 \u0627\u0644\u0646\u0627\u0631\u064A\u0629 \u0623\u0648 \u0627\u0644\u0641\u0644\u0627\u062A\u0631.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u062C\u0644\u062F \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u063A\u064A\u0631 \u0627\u0644\u0645\u0631\u063A\u0648\u0628 \u0641\u064A\u0647\u0627.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u0644\u0645 \u062A\u062A\u0644\u0642\u064E \u0628\u0631\u064A\u062F\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627\u061F",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    ti = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "-Stellen Sie sicher, dass die E-Mail nicht durch Firewalls oder Filter blockiert wird.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\xDCberpr\xFCfen Sie Ihren Spam-Ordner.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Haben Sie die E-Mail nicht erhalten?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Passwort vergessen"
    },
    ri = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Aseg\xFArese de que el correo electr\xF3nico no est\xE9 bloqueado por firewall o filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Revise su carpeta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\xBFNo recibi\xF3 un correo electr\xF3nico?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Olvid\xE9 la contrase\xF1a"
    },
    ii = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Assicurati che l'email non sia bloccata da firewall o filtri.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Controlla la tua cartella spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Non hai ricevuto un'email?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Password dimenticata"
    },
    ni = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Upewnij si\u0119, \u017Ce ten adres e-mail nie jest blokowany przez zapory ogniowe i filtry.",
        "riMD8BNieE+VC9anaRAgtw#Value": "- Sprawd\u017A sw\xF3j folder spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Nie otrzyma\u0142e\u015B e-maila?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Nie pami\u0119tam has\u0142a"
    },
    oi = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "Certifique-se de que o e-mail n\xE3o est\xE1 bloqueado por firewalls ou filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Verifique a sua pasta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "N\xE3o recebeu o e-mail?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Esqueceu-se da palavra-passe"
    },
    ai = {
        "riMD8BNieE+VC9anaRAgtw#Value": "V\xE9rifiez votre dossier de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Vous n'avez pas re\xE7u d'e-mail ?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Mot de passe oubli\xE9"
    },
    si = {
        "riMD8BNieE+VC9anaRAgtw#Value": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u0441\u043E \u0441\u043F\u0430\u043C\u043E\u043C.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Pr = {
        "ar-001": {
            translations: ei,
            isRTL: !0
        },
        "de-DE": {
            translations: ti,
            isRTL: !1
        },
        "es-ES": {
            translations: ri,
            isRTL: !1
        },
        "it-IT": {
            translations: ii,
            isRTL: !1
        },
        "pl-PL": {
            translations: ni,
            isRTL: !1
        },
        "pt-PT": {
            translations: oi,
            isRTL: !1
        },
        "fr-FR": {
            translations: ai,
            isRTL: !1
        },
        "ru-RU": {
            translations: si,
            isRTL: !1
        }
    };
var ie = y; {
    let r = class r extends ie.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Pr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _resendEmailOnClick$Action() {
            return this.hasOwnProperty("__resendEmailOnClick$Action") || (this.__resendEmailOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return ie.Logger.startActiveSpan("ResendEmailOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ResendEmailOnClick"), i.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ie.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var c = new ie.DataTypes.VariableHolder;
                        return ie.Flow.executeAsyncFlow(function() {
                            return n.flush(), I.verifyEmail$Action("trading_platform_mt5_password_reset", V.getSignupEmail(), e).then(function(m) {
                                c.value = m
                            }).then(function() {
                                return t.resendEmailEvent$Action(e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__resendEmailOnClick$Action
        }
        set _resendEmailOnClick$Action(e) {
            this.__resendEmailOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return ie.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ie.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), ie.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        resendEmailOnClick$Action(e) {
            var n = this.controller;
            return ie.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ie.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._resendEmailOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return ie.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ie.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get resendEmailEvent$Action() {
            return this.hasOwnProperty("_resendEmailEvent$Action") || (this._resendEmailEvent$Action = function() {
                return Promise.resolve()
            }), this._resendEmailEvent$Action
        }
        set resendEmailEvent$Action(e) {
            this._resendEmailEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    wr = v
}
var wr, Ar = new ie.Controller.ControllerFactory(wr, $);
var Qe = y,
    Co = S.PlaceholderContent,
    Po = S.IteratorPlaceholderContent,
    Ce = class Ce extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.EmailSentModal"
        }
        static getAttributes() {
            return {
                codeFunction: "EmailSentModal",
                functionKey: "92343ed3-e206-49ef-97f8-b76302ae890d",
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
            return [ge]
        }
        get modelFactory() {
            return er
        }
        get controllerFactory() {
            return Ar
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Ce.ifWidget,
                c = Ce.textWidget,
                m = Ce.asPrimitiveValue,
                f = Ce.getTranslation,
                g = this;
            return M.createElement("div", this.getRootNodeProperties(), M.createElement(B, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Qe.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalHeader"
                },
                _widgetRecordProvider: t
            }, M.createElement(_, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [c(f("lE4y1p4_cUyDg4u6gB0Weg#Value", "Forgot password"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), M.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Qe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1; height: 70vh; padding: 16px; text-align: center;"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalContent"
                },
                _widgetRecordProvider: t
            }, M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, M.createElement(p, {
                image: Qe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email2.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, M.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "We\u2019ve sent a verification link to " + V.getSignupEmail(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))), M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "bottom: 0; height: 30vh; padding: 16px; position: fixed;"
                },
                style: "display-flex flex-direction-column justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordFooter"
                },
                _widgetRecordProvider: t
            }, M.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #e5f5fc; border-color: #017AAD; border-radius: 8px; border-style: solid; border-width: 0px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "display-flex column-gap-s align-items-flex-start",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "InfoBox"
                },
                _widgetRecordProvider: t
            }, M.createElement(p, {
                image: Qe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }), M.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, M.createElement(_, {
                extendedProperties: {
                    style: "margin-bottom: 10px;"
                },
                text: [c(f("gAOjnJo6UEmQdDDWvqw3iQ#Value", "Didn't get an email? "))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }), M.createElement(_, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [c(f("riMD8BNieE+VC9anaRAgtw#Value", "- Check your spam folder."))],
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), M.createElement(_, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [c(f("XlfKqilSdEuhxDi7XQt_HQ#Value", "- Make sure the email isn\u2019t blocked by firewalls or filters."))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }))), M.createElement(ge, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "16",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), M.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #fff; border-width: 1px; color: #ff4450; height: 48px; margin-bottom: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.resendEmailOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResendEmailButton"
                },
                _widgetRecordProvider: t
            }, M.createElement(h, {
                extendedProperties: {
                    style: "font-size: 14px; font-weight: 500; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; wi: ;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                value: "Resend email",
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(Ce, "View");
var dt = Ce,
    ut = dt;
var T = K(X());
var li = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    ci = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Passwort aktualisiert",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Geben Sie Ihr Passwort ein"
    },
    di = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Contrase\xF1a actualizada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduzca su contrase\xF1a"
    },
    ui = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Mot de passe mis \xE0 jour",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Entrez votre mot de passe"
    },
    mi = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Password aggiornata",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Inserisci la tua password"
    },
    fi = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Has\u0142o zaktualizowane",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Wprowad\u017A swoje has\u0142o"
    },
    vi = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Palavra-passe alterada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduza a sua palavra-passe"
    },
    gi = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Er = {
        "ar-001": {
            translations: li,
            isRTL: !0
        },
        "de-DE": {
            translations: ci,
            isRTL: !1
        },
        "es-ES": {
            translations: di,
            isRTL: !1
        },
        "fr-FR": {
            translations: ui,
            isRTL: !1
        },
        "it-IT": {
            translations: mi,
            isRTL: !1
        },
        "pl-PL": {
            translations: fi,
            isRTL: !1
        },
        "pt-PT": {
            translations: vi,
            isRTL: !1
        },
        "ru-RU": {
            translations: gi,
            isRTL: !1
        }
    };
var te = y; {
    let r = class r extends te.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Er);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return te.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), te.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                n.variables.passwordInputValueVar = "", n.variables.isVisibleIn = !1, n.variables.isUpdatedVar = !1
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _resetPasswordOnClick$Action() {
            return this.hasOwnProperty("__resetPasswordOnClick$Action") || (this.__resetPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return te.Logger.startActiveSpan("ResetPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ResetPasswordOnClick"), i.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResetPasswordOnClick"), e = t.callContext(e);
                        var c = new te.DataTypes.VariableHolder;
                        return te.Flow.executeAsyncFlow(function() {
                            return n.flush(), I.tradingPlatformPasswordReset$Action(n.variables.passwordInputValueVar, n.variables.platformIn === "dxtrade" ? V.gettrading_platform_dxtrade_password_reset() : V.gettrading_platform_mt5_password_reset(), n.variables.platformIn, e).then(function(m) {
                                c.value = m
                            }).then(function() {
                                c.value.responseOut.trading_platform_password_resetAttr.equals(te.BuiltinFunctions.integerToLongInteger(1)) && (n.variables.isUpdatedVar = !0, n.variables.isVisibleIn = !1)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__resetPasswordOnClick$Action
        }
        set _resetPasswordOnClick$Action(e) {
            this.__resetPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return te.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        resetPasswordOnClick$Action(e) {
            var n = this.controller;
            return te.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResetPasswordOnClick"), t.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._resetPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Sr = v
}
var Sr, xr = new te.Controller.ControllerFactory(Sr, $);
var k = K(X());
var N = y,
    ft = class ft extends N.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, N.DataTypes.DataTypes.Record, function() {
                return N.DataTypes.ImmutableBase.getData(new N.SystemStructures.PasswordValidationResultRec)
            }, !1, N.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, N.DataTypes.DataTypes.Record, function() {
                return N.DataTypes.ImmutableBase.getData(new N.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, N.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, N.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, N.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, N.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(N.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(ft, "VariablesRecord");
var Ge = ft;
Ge.init();
var vt = class vt extends N.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(vt, "WidgetsRecord");
var mt = vt,
    gt = class gt extends N.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Ge
        }
        static getWidgetsRecordConstructor() {
            return mt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Password" in r && (this.variables.passwordIn = r.Password, "_passwordInDataFetchStatus" in r && (this.variables._passwordInDataFetchStatus = r._passwordInDataFetchStatus)), "Length" in r && (this.variables.lengthIn = r.Length, "_lengthInDataFetchStatus" in r && (this.variables._lengthInDataFetchStatus = r._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in r && (this.variables.hasAtLeastUppercaseAndLowercaseIn = r.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in r && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = r._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in r && (this.variables.hasAtLeastOneNumberIn = r.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in r && (this.variables._hasAtLeastOneNumberInDataFetchStatus = r._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in r && (this.variables.hasAtLeastOneSpecialCharacterIn = r.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in r && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = r._hasAtLeastOneSpecialCharacterInDataFetchStatus))
        }
    };
a(gt, "Model");
var qe = gt;
qe._hasValidationWidgetsValue = void 0;
var Rr = new N.Model.ModelFactory(qe);

function pt(v, r, s, e) {
    function n(m) {
        return m.toUpperCase() != m
    }
    a(n, "hasLowerCase");

    function t(m) {
        return /[A-Z]/.test(m)
    }
    a(t, "containsUppercase");

    function o(m) {
        return /\d/.test(m)
    }
    a(o, "hasNumber");

    function i(m) {
        return m.length >= v.Length
    }
    a(i, "hasGoodLength");

    function c(m) {
        var f = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return f.test(m)
    }
    a(c, "hasSpecialChar"), v.HasLowerCase = v.RequiresLowerCaseAndUpperCase ? n(v.String) : !0, v.HasUpperCase = v.RequiresLowerCaseAndUpperCase ? t(v.String) : !0, v.HasNumber = v.RequiresNumber ? o(v.String) : !0, v.hasGoodLength = v.RequiresNumber ? i(v.String) : !0, v.hasSpecialChar = v.RequiresSpecialChar ? c(v.String) : !0
}
a(pt, "default");
var P = y; {
    let r = class r extends P.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), i.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), i.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), n.variables.passwordComplexityPolicyVar.minimumLengthAttr = n.variables.lengthIn, n.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = n.variables.hasAtLeastUppercaseAndLowercaseIn, n.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = n.variables.hasAtLeastUppercaseAndLowercaseIn, n.variables.passwordComplexityPolicyVar.numberRequiredAttr = n.variables.hasAtLeastOneNumberIn, n.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = n.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return P.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    return i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), i.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), i.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var c = new P.DataTypes.VariableHolder;
                        return P.Flow.executeAsyncFlow(function() {
                            if (n.variables.isPasswordEmptyVar = P.BuiltinFunctions.length(n.variables.passwordIn) === 0, c.value = P.Logger.startActiveSpan("checkValid", function(m) {
                                    m && (m.setAttribute("code.function", "checkValid"), m.setAttribute("outsystems.function.key", "2db79931-6cd1-41a6-a1b1-6c0293e23188"), m.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), m.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(pt, "checkValid", "OnParametersChanged", {
                                            RequiresSpecialChar: P.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastOneSpecialCharacterIn, P.DataTypes.DataTypes.Boolean),
                                            RequiresNumber: P.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastOneNumberIn, P.DataTypes.DataTypes.Boolean),
                                            Length: P.DataConversion.JSNodeParamConverter.to(n.variables.lengthIn, P.DataTypes.DataTypes.Integer),
                                            RequiresLowerCaseAndUpperCase: P.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastUppercaseAndLowercaseIn, P.DataTypes.DataTypes.Boolean),
                                            String: P.DataConversion.JSNodeParamConverter.to(n.variables.passwordIn, P.DataTypes.DataTypes.Text),
                                            HasLowerCase: P.DataConversion.JSNodeParamConverter.to(!1, P.DataTypes.DataTypes.Boolean),
                                            HasUpperCase: P.DataConversion.JSNodeParamConverter.to(!1, P.DataTypes.DataTypes.Boolean),
                                            HasNumber: P.DataConversion.JSNodeParamConverter.to(!1, P.DataTypes.DataTypes.Boolean),
                                            hasGoodLength: P.DataConversion.JSNodeParamConverter.to(!1, P.DataTypes.DataTypes.Boolean),
                                            hasSpecialChar: P.DataConversion.JSNodeParamConverter.to(!1, P.DataTypes.DataTypes.Boolean)
                                        }, function(f) {
                                            var g = new(t.constructor.getVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                            return g.hasLowerCaseOut = P.DataConversion.JSNodeParamConverter.from(f.HasLowerCase, P.DataTypes.DataTypes.Boolean), g.hasUpperCaseOut = P.DataConversion.JSNodeParamConverter.from(f.HasUpperCase, P.DataTypes.DataTypes.Boolean), g.hasNumberOut = P.DataConversion.JSNodeParamConverter.from(f.HasNumber, P.DataTypes.DataTypes.Boolean), g.hasGoodLengthOut = P.DataConversion.JSNodeParamConverter.from(f.hasGoodLength, P.DataTypes.DataTypes.Boolean), g.hasSpecialCharOut = P.DataConversion.JSNodeParamConverter.from(f.hasSpecialChar, P.DataTypes.DataTypes.Boolean), g
                                        }, {}, {})
                                    } finally {
                                        m && m.end()
                                    }
                                }, 1), n.variables.passwordValidationResultVar.isValidAttr = c.value.hasLowerCaseOut && c.value.hasUpperCaseOut && c.value.hasNumberOut && c.value.hasGoodLengthOut && c.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !c.value.hasLowerCaseOut, n.variables.passwordValidationResultVar.missingMinimumLengthAttr = !c.value.hasGoodLengthOut, n.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !c.value.hasUpperCaseOut, n.variables.passwordValidationResultVar.missingNumberAttr = !c.value.hasNumberOut, n.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !c.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.isValidAttr) {
                                if (n.variables.isValidPasswordVar) return P.Flow.returnAsync();
                                n.variables.isValidPasswordVar = !0
                            } else if (n.variables.isValidPasswordVar) n.variables.isValidPasswordVar = !1;
                            else return P.Flow.returnAsync();
                            return t.compliant$Action(n.variables.passwordValidationResultVar.isValidAttr, e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return P.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), t.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), t.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return P.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), t.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), t.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get compliant$Action() {
            return this.hasOwnProperty("_compliant$Action") || (this._compliant$Action = function() {
                return Promise.resolve()
            }), this._compliant$Action
        }
        set compliant$Action(e) {
            this._compliant$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return mr.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    ht = v, ht.registerVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var ht, Or = new P.Controller.ControllerFactory(ht, fr);
var Zo = S.PlaceholderContent,
    ea = S.IteratorPlaceholderContent,
    Pe = class Pe extends D.BaseWebBlock {
        static get displayName() {
            return "PasswordPolicy.PasswordPolicy"
        }
        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "ea1033a7-cc02-4c18-a11c-706fa5848aae",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return Rr
        }
        get controllerFactory() {
            return Or
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Pe.ifWidget,
                c = Pe.textWidget,
                m = Pe.asPrimitiveValue,
                f = Pe.getTranslation,
                g = this;
            return k.createElement("div", this.getRootNodeProperties(), k.createElement(d, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, k.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 6px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, i(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [k.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }, i(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [k.createElement(W, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [i(r.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: r.getCachedValue(e.getId("W2WQgo1KZ0W9aSiNkHstVg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(_, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least "],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), k.createElement(h, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: r.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), k.createElement(_, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["\xA0characters"],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), i(r.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && r.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [k.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, i(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [k.createElement(W, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "13"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [i(r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("wS63C2AnqkiB2hn+etNgfQ.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(_, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one uppercase letter and one lowercase letter"],
                    _idProps: {
                        service: e,
                        uuid: "17"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), i(r.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [k.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "18"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "19"
                    },
                    _widgetRecordProvider: t
                }, i(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [k.createElement(W, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "20"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [i(r.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("AFlsfhJmA0CeXZDlx_IIzg.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(_, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one number"],
                    _idProps: {
                        service: e,
                        uuid: "24"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }), i(r.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [k.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "25"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "26"
                    },
                    _widgetRecordProvider: t
                }, i(r.variables.isPasswordEmptyVar, !1, this, function() {
                    return [k.createElement(W, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: 0,
                        style: "icon",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "27"
                        },
                        _widgetRecordProvider: t
                    })]
                }, function() {
                    return [i(r.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        })]
                    }, function() {
                        return [k.createElement(W, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        })]
                    })]
                })), k.createElement(d, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: r.getCachedValue(e.getId("cEfQZ9nEOkWYb+Y6Pe1s7w.Style"), function() {
                        return r.variables.isPasswordEmptyVar ? "" : r.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return r.variables.isPasswordEmptyVar
                    }, function() {
                        return r.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, k.createElement(_, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least one special character"],
                    _idProps: {
                        service: e,
                        uuid: "31"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            }))))
        }
    };
a(Pe, "View");
var _t = Pe,
    bt = _t;
var le = y,
    ua = S.PlaceholderContent,
    ma = S.IteratorPlaceholderContent,
    we = class we extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ResetPasswordModal"
        }
        static getAttributes() {
            return {
                codeFunction: "ResetPasswordModal",
                functionKey: "41b7435a-29e5-4887-b49d-0c8e5812285f",
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
            return [bt, ge]
        }
        get modelFactory() {
            return tr
        }
        get controllerFactory() {
            return xr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = we.ifWidget,
                c = we.textWidget,
                m = we.asPrimitiveValue,
                f = we.getTranslation,
                g = this;
            return T.createElement("div", this.getRootNodeProperties(), T.createElement(B, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: r.variables.isVisibleIn && !r.variables.isUpdatedVar,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: le.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, T.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetHeader"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("SetUpPassword2.Value"), function() {
                    return "Reset your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password"
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    name: "SetUpPassword2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: le.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }), T.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: le.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            })), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;"
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetContent"
                },
                _widgetRecordProvider: t
            }, T.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column display-flex gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CreatePasswordContent3"
                },
                _widgetRecordProvider: t
            }, T.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer4"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                value: r.getCachedValue(e.getId("MBFxetrkcUK1tR8I_WsVbw.Value"), function() {
                    return "You can use this password for all your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts."
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: le.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), T.createElement(Me, {
                _validationProps: {
                    validationService: n
                },
                enabled: !r.variables.isLoadingVar,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 1,
                mandatory: !1,
                maxLength: 16,
                prompt: le.Injector.resolve(le.ServiceNames.TranslationsService).getMessage("TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1", "Enter your password"),
                style: "form-control",
                variable: r.createVariable(le.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(l) {
                    r.variables.passwordInputValueVar = l
                }),
                _idProps: {
                    service: e,
                    name: "PasswordInput7"
                },
                _widgetRecordProvider: t
            }), T.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LiveCheckboxContainer5"
                },
                _widgetRecordProvider: t
            }, T.createElement(bt, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    Password: r.variables.passwordInputValueVar
                },
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-weight: bold; height: auto; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between full-width gap-s cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResetFooter"
                },
                _widgetRecordProvider: t
            }, T.createElement(ge, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "12",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), T.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.resetPasswordOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "Reset password",
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            })), T.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #FFF; border-color: #ff4450; border-radius: 100px; border-width: 1px; color: #ff4450; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.closeOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CancelButton"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "color: #ff4450; font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "Cancel",
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            })))), T.createElement(B, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;"
                },
                showPopup: r.variables.isUpdatedVar,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper2"
                },
                _widgetRecordProvider: t
            }, T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessHeader"
                },
                _widgetRecordProvider: t
            }, T.createElement(_, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [c(f("7lHQes3WJUmcTHuOiLZbxQ#Value", "Password updated"))],
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), T.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: le.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: calc(100vh - 160px); margin-top: 0px; padding: 16px;"
                },
                style: "display-flex flex-direction-column display-flex gap-m justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessContent"
                },
                _widgetRecordProvider: t
            }, T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, T.createElement(p, {
                image: le.Navigation.VersionedURL.getVersionedUrl("img/tradershub.PasswordSaved.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            })), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: r.getCachedValue(e.getId("YNRVaDWGYUqvNeR3YU+nzA.Value"), function() {
                    return "Your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password has \u2028been reset"
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: le.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                value: r.getCachedValue(e.getId("EHLMqwEON0Sqt0sA5zPRJA.Value"), function() {
                    return "You can now log in to your " + (r.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts with your new password on web and mobile."
                }, function() {
                    return r.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: le.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }))), T.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "SuccessFooter"
                },
                _widgetRecordProvider: t
            }, T.createElement(ge, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "29",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), T.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.closeOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "OK"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    width: "auto"
                },
                value: "OK",
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(we, "View");
var yt = we,
    Ct = yt;
var q = K(X());
var pi = {
        "JOpCme7W6EenufmYu25eRw#Value": "\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0648\u0645 \u0628\u0641\u0639\u0627\u0644\u064A\u0629.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "\u0627\u062D\u062A\u0641\u0638 \u0628\u062D\u0633\u0627\u0628 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 \u062E\u0627\u0644\u064D \u0645\u0646 \u0643\u0648\u0646\u0647 \u0645\u0632\u0648\u062F \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\u0645\u0632\u0648\u062F \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0648\u062D\u0633\u0627\u0628 \u062C\u0645\u0639 \u0627\u0644\u0631\u0633\u0648\u0645.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "\u0644\u0627 \u064A\u0645\u0643\u0646",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 cTrader \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0644\u062D\u0633\u0627\u0628 Deriv \u0627\u0644\u062E\u0627\u0635 \u0628\u0643.
2. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 5 \u062D\u0633\u0627\u0628\u0627\u062A Deriv cTrader.
3. \u064A\u0645\u0643\u0646\u0643 \u062C\u0639\u0644 \u0623\u064A \u062D\u0633\u0627\u0628 cTrader \u062D\u0633\u0627\u0628\u064B\u0627 \u0644\u0645\u0632\u0648\u062F \u0627\u0644\u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629. \u0647\u0630\u0627 \u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u062F\u0627\u0626\u0645.
4. \u0625\u0630\u0627 \u0638\u0644\u062A \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u062A\u0643 \u063A\u064A\u0631 \u0646\u0634\u0637\u0629 \u0644\u0645\u062F\u0629 30 \u064A\u0648\u0645\u064B\u0627\u060C \u0641\u0633\u064A\u062A\u0645 \u062D\u0630\u0641\u0647\u0627 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627. \u064A\u0645\u0643\u0646\u0643 \u0625\u0646\u0634\u0627\u0621 \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062C\u062F\u064A\u062F\u0629 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u062D\u0633\u0627\u0628 \u0628\u0639\u062F \u0630\u0644\u0643.
5. \u064A\u0645\u0643\u0646\u0643 \u0641\u0631\u0636 \u0631\u0633\u0648\u0645 \u0639\u0646\u062F \u0625\u0639\u062F\u0627\u062F \u0625\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629.
6. \u0642\u0645 \u0628\u062A\u0639\u064A\u064A\u0646 \u0623\u062D\u062F \u062D\u0633\u0627\u0628\u0627\u062A\u0643 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0631\u0633\u0648\u0645. \u064A\u0645\u0643\u0646 \u0644\u0646\u0641\u0633 "\u062D\u0633\u0627\u0628 \u0627\u0644\u0631\u0633\u0648\u0645" \u062F\u0639\u0645 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u062A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0648\u0645.
7. \u0644\u0627 \u062A\u062A\u0637\u0644\u0628 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629 "\u062D\u0633\u0627\u0628 \u0631\u0633\u0648\u0645".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0647\u0645\u0629"
    },
    hi = {
        "JOpCme7W6EenufmYu25eRw#Value": "Geb\xFChrenbasierte Strategien effektiv verwalten.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Halten Sie mindestens ein Konto frei von der Rolle eines Strategielieferanten",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "sowohl ein Strategieanbieter als auch ein Geb\xFChrenkonto.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "kann nicht sein",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Hinweis: Ein Konto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Melden Sie sich bei cTrader mit Ihrer Deriv-Konto-E-Mail-Adresse und Ihrem Passwort an.
2. Sie k\xF6nnen bis zu 5 Deriv cTrader-Konten besitzen.
3. Jedes cTrader-Konto kann in ein Strategiekonto umgewandelt werden. Diese \xC4nderung ist dauerhaft.
4. Wenn Ihre Strategie 30 Tage lang inaktiv bleibt, wird sie automatisch gel\xF6scht. Sie k\xF6nnen anschlie\xDFend eine neue Strategie mit demselben Konto erstellen.
5. Sie k\xF6nnen Geb\xFChren festlegen, wenn Sie eine Strategie einrichten.
6. Weisen Sie eines Ihrer bestehenden Konten zur Abwicklung der Geb\xFChren zu. Dasselbe \u201EGeb\xFChrenkonto\u201C kann mehrere geb\xFChrenbasierte Strategien unterst\xFCtzen.
7. Kostenlose Strategien erfordern kein \u201EGeb\xFChrenkonto\u201C.`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Wichtige Hinweise"
    },
    _i = {
        "JOpCme7W6EenufmYu25eRw#Value": "gestionar estrategias basadas en comisiones de manera efectiva.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantenga al menos una cuenta libre de ser un proveedor de estrategias",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "tanto un proveedor de estrategias como una cuenta de cobro de tarifas.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "no puede ser",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: Una cuenta ",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Inicie sesi\xF3n en cTrader con el correo electr\xF3nico y la contrase\xF1a de su cuenta Deriv.
2. Puede tener hasta 5 cuentas de Deriv cTrader.
3. Usted puede convertir cualquier cuenta de cTrader en una cuenta de proveedor de estrategia. Este cambio es permanente.
4. Si su estrategia permanece inactiva durante 30 d\xEDas, se eliminar\xE1 autom\xE1ticamente. Posteriormente podr\xE1 crear una nueva estrategia en la misma cuenta.
5. Puede imponer comisiones al crear una estrategia.
6. Asigne una de sus cuentas existentes para procesar las comisiones. La misma "Cuenta para comisiones" puede soportar m\xFAltiples estrategias basadas en comisiones.
7. Las estrategias gratuitas no requieren una "Cuenta para Comisiones".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Notas importantes"
    },
    bi = {
        "JOpCme7W6EenufmYu25eRw#Value": "g\xE9rer efficacement des strat\xE9gies bas\xE9es sur des frais.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Gardez au moins un compte exempt d'\xEAtre un fournisseur de strat\xE9gie",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\xE0 la fois un fournisseur de strat\xE9gies et un compte de collecte de frais.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "ne peut pas \xEAtre"
    },
    yi = {
        "JOpCme7W6EenufmYu25eRw#Value": "gestire efficacemente strategie basate su commissioni.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantieni almeno un conto libero dall'essere un fornitore di strategie",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "sia un fornitore di strategie che un conto di raccolta delle commissioni.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "non pu\xF2 essere",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: un conto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Accedi a cTrader con l'email e la password del tuo conto Deriv.
2. Puoi avere fino a 5 conti Deriv cTrader.
3. Puoi rendere qualsiasi conto cTrader un conto fornitore di strategie. Questo cambiamento \xE8 permanente.
4. Se la tua strategia rimane inattiva per 30 giorni, verr\xE0 eliminata automaticamente. Successivamente potrai creare una nuova strategia sullo stesso conto.
5. Puoi imporre commissioni quando imposti una strategia.
6. Assegna uno dei tuoi conti esistenti all'elaborazione delle commissioni. Lo stesso "Conto per commissioni" pu\xF2 supportare pi\xF9 strategie basate su commissioni.
7. Le strategie gratuite non richiedono un "Conto per commissioni".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Note importanti"
    },
    Ci = {
        "JOpCme7W6EenufmYu25eRw#Value": "skutecznie zarz\u0105dza\u0107 strategiami opartymi na op\u0142atach.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Zachowaj przynajmniej jedno konto, gdzie nie jeste\u015B dostawc\u0105 strategii",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "zar\xF3wno dostawca strategii, jak i konto do pobierania op\u0142at.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "nie mo\u017Ce by\u0107",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Uwaga: Konto",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Zaloguj si\u0119 do cTrader przy u\u017Cyciu adresu e-mail i has\u0142a do konta Deriv.
2. Mo\u017Cesz mie\u0107 do 5 kont Deriv cTrader.
3. Twoje dowolne konto cTrader mo\u017Ce by\u0107 kontem dostarczaj\u0105cym strategie. Ta zmiana jest na sta\u0142e.
4. Je\u015Bli Twoja strategia jest nieaktywna przez 30 dni, zostanie automatycznie usuni\u0119ta. Mo\u017Cesz p\xF3\u017Aniej utworzy\u0107 now\u0105 strategi\u0119 na tym samym koncie.
5. Podczas ustanawiania strategii mo\u017Cesz na\u0142o\u017Cy\u0107 op\u0142aty.
6. Wybierz jedno ze swoich istniej\u0105cych kont do przetwarzania tych op\u0142at. Jedno \u201EKonto do op\u0142at\u201D mo\u017Ce s\u0142u\u017Cy\u0107 do obs\u0142ugi kilku strategiii opartych na op\u0142atach.
7. Strategie darmowe nie wymagaj\u0105 \u201EKonta do op\u0142at\u201D.`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Wa\u017Cne uwagi"
    },
    Pi = {
        "JOpCme7W6EenufmYu25eRw#Value": "gerir estrat\xE9gias baseadas em taxas de forma eficaz.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Mantenha pelo menos uma conta livre de ser um fornecedor de estrat\xE9gias",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "tanto como fornecedor de estrat\xE9gias quanto conta de cobran\xE7a de taxas.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "n\xE3o \xE9 poss\xEDvel",
        "6LoFciGR9E2OxvDLEWWOBw#Value": "Nota: Uma conta",
        "Wu8gdu2m7E2ZQWvJ76W7yA#Value": `1. Inicie sess\xE3o na cTrader com o e-mail e a palavra-passe da sua conta Deriv.
2. Pode ter at\xE9 cinco contas Deriv cTrader.
3. \xC9 poss\xEDvel transformar qualquer conta cTrader numa conta de fornecedor de estrat\xE9gias, mas esta altera\xE7\xE3o \xE9 permanente.
4. Se a sua estrat\xE9gia estiver inativa durante 30 dias, ser\xE1 eliminada automaticamente. Posteriormente, poder\xE1 criar uma nova estrat\xE9gia na mesma conta.
5. Ao configurar uma estrat\xE9gia, pode definir taxas.
6. Atribua uma das suas contas existentes para processar as taxas. A mesma "Conta para Taxas" pode suportar v\xE1rias estrat\xE9gias baseadas em taxas.
7. Estrat\xE9gias gratuitas n\xE3o necessitam de uma "Conta para Taxas".`,
        "bKbhwz3WMEaN6X8SBwDEkA#Value": "Notas importantes"
    },
    wi = {
        "JOpCme7W6EenufmYu25eRw#Value": "\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F\u043C\u0438, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0431\u043E\u0440\u0430\u0445.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u043E\u0442 \u0440\u043E\u043B\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\u043A\u0430\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439, \u0442\u0430\u043A \u0438 \u0441\u0447\u0435\u0442 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0431\u043E\u0440\u043E\u0432.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "\u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C"
    },
    kr = {
        "ar-001": {
            translations: pi,
            isRTL: !0
        },
        "de-DE": {
            translations: hi,
            isRTL: !1
        },
        "es-ES": {
            translations: _i,
            isRTL: !1
        },
        "fr-FR": {
            translations: bi,
            isRTL: !1
        },
        "it-IT": {
            translations: yi,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ci,
            isRTL: !1
        },
        "pt-PT": {
            translations: Pi,
            isRTL: !1
        },
        "ru-RU": {
            translations: wi,
            isRTL: !1
        }
    };
var Je = y; {
    let r = class r extends Je.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, kr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _headerOnClick$Action() {
            return this.hasOwnProperty("__headerOnClick$Action") || (this.__headerOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return Je.Logger.startActiveSpan("HeaderOnClick", function(i) {
                    i && (i.setAttribute("code.function", "HeaderOnClick"), i.setAttribute("outsystems.function.key", "5aca1bf8-c17c-402d-924b-12f8bc6ca9ad"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("HeaderOnClick"), e = t.callContext(e), n.variables.showInfoVar = !n.variables.showInfoVar
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(e) {
            this.__headerOnClick$Action = e
        }
        headerOnClick$Action(e) {
            var n = this.controller;
            return Je.Logger.startActiveSpan("HeaderOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "HeaderOnClick"), t.setAttribute("outsystems.function.key", "5aca1bf8-c17c-402d-924b-12f8bc6ca9ad"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._headerOnClick$Action, e)
                } finally {
                    t && t.end()
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Tr = v
}
var Tr, Ir = new Je.Controller.ControllerFactory(Tr, $);
var Dr = y,
    Oa = S.PlaceholderContent,
    ka = S.IteratorPlaceholderContent,
    Ae = class Ae extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ImportantNotes"
        }
        static getAttributes() {
            return {
                codeFunction: "ImportantNotes",
                functionKey: "47857bc1-8a4d-496c-8092-a1b421db2bee",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.ImportantNotes.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return rr
        }
        get controllerFactory() {
            return Ir
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Ae.ifWidget,
                c = Ae.textWidget,
                m = Ae.asPrimitiveValue,
                f = Ae.getTranslation,
                g = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(d, {
                align: 0,
                animate: !1,
                style: "important-notes",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, q.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        var l = o.clone();
                        s.headerOnClick$Action(s.callContext(l))
                    }, "onClick")
                },
                style: "display-flex align-items-center justify-content-space-between cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, q.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [c(f("bKbhwz3WMEaN6X8SBwDEkA#Value", "Important notes"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), q.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, i(r.variables.showInfoVar, !0, this, function() {
                return [q.createElement(p, {
                    image: Dr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ChevronUpSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [q.createElement(p, {
                    image: Dr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })]
            }))), i(r.variables.showInfoVar, !0, this, function() {
                return [q.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [c(f("Wu8gdu2m7E2ZQWvJ76W7yA#Value", `1. Log in to cTrader with your Deriv account email and password.
2. You can have up to 5 Deriv cTrader accounts.
3. You can make any cTrader account a strategy provider account. This change is permanent.
4. If your strategy remains inactive for 30 days, it will be deleted automatically. You can create a new strategy on the same account afterwards.
5. You can impose fees when setting up a strategy.
6. Assign one of your existing accounts to process fees. The same "Account for Fees" can support multiple fee-based strategies.
7. Free strategies do not require an "Account for Fees".`))],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "font-size: 12px; margin-top: 8px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }, q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [c(f("6LoFciGR9E2OxvDLEWWOBw#Value", "Note: An account "))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [c(f("KvKTHZR9Lk+MElbGTt7Vvg#Value", "can't be "))],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [c(f("j4NW6o0pbEaOYM4yykmC3g#Value", "both a strategy provider and a fee collection account. "))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [c(f("q02llmFnP0ykcjtPnVCfJw#Value", "Keep at least one account free from being a strategy provider "))],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), q.createElement(_, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [c(f("JOpCme7W6EenufmYu25eRw#Value", "to manage fee-based strategies effectively."))],
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })))]
            }, function() {
                return []
            })))
        }
    };
a(Ae, "View");
var Pt = Ae,
    wt = Pt;
var We = K(X());
var Vr = {};
var Fr = y; {
    let r = class r extends Fr.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Vr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Wr = v
}
var Wr, Hr = new Fr.Controller.ControllerFactory(Wr, $);
var At = y,
    Ga = S.PlaceholderContent,
    qa = S.IteratorPlaceholderContent,
    Ee = class Ee extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MaintenanceMessage"
        }
        static getAttributes() {
            return {
                codeFunction: "MaintenanceMessage",
                functionKey: "89e2f438-16ae-4d8c-8de5-f4afdba8d1ef",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.MaintenanceMessage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ir
        }
        get controllerFactory() {
            return Hr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Ee.ifWidget,
                c = Ee.textWidget,
                m = Ee.asPrimitiveValue,
                f = Ee.getTranslation,
                g = this;
            return We.createElement("div", this.getRootNodeProperties(), We.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "maintenance-message",
                visible: r.variables.isDowntimeIn,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: At.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
            }, We.createElement(p, {
                image: At.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InfoBlue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), We.createElement(h, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.variables.infoMessageIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: At.Model.calculateDataFetchStatus(r.variables._infoMessageInDataFetchStatus)
            })))
        }
    };
a(Ee, "View");
var Et = Ee,
    ue = Et;
var b = K(X());
var Ai = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0648",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "\u0645\u062A\u0627\u062D \u0644\u0640",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629: \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u062D\u062F \u0627\u0644\u0633\u0627\u0639\u0629 01:00 \u0628\u062A\u0648\u0642\u064A\u062A \u062C\u0631\u064A\u0646\u062A\u0634 \u0644\u0645\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 \u0633\u0627\u0639\u062A\u064A\u0646. \u0642\u062F \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0629.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u062A\u062D\u0648\u064A\u0644",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    Ei = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannen, um die mobile App herunterzuladen.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "und",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Verf\xFCgbar f\xFCr",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "W\xF6chentliche Wartung: Sonntags um 01:00 GMT f\xFCr bis zu 2 Stunden. Der Service kann beeintr\xE4chtigt sein.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Passwort vergessen?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\xDCberweisung",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Kontodaten",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Kopiert!"
    },
    Si = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Escanee para descargar la aplicaci\xF3n m\xF3vil.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "y",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Mantenimiento semanal: Domingos a la 01:00 GMT durante un m\xE1ximo de 2 horas. El servicio puede verse afectado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\xBFOlvid\xF3 la contrase\xF1a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transferencia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Detalles de la cuenta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\xA1Copiado!"
    },
    xi = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "et",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible pour",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Mot de passe oubli\xE9 ?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfert",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "D\xE9tails du compte",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copi\xE9 !"
    },
    Ri = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scansiona per scaricare l'app mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponibile per",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manutenzione settimanale: domenica alle 01:00 GMT per un massimo di 2 ore. Il servizio potrebbe subire interruzioni.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Hai dimenticato la password?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Trasferimento",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Dettagli del conto",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiato!"
    },
    Oi = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Zeskanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " i",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dost\u0119pne na",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Cotygodniona konserwacja: Niedziele o 01:00 GMT do 2 godz. Mo\u017Ce mie\u0107 wp\u0142yw na dost\u0119pno\u015B\u0107 us\u0142ug.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Nie pami\u0119tasz has\u0142a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Przelew",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Szczeg\xF3\u0142y konta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Skopiowane!"
    },
    ki = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Digitalize para transferir a aplica\xE7\xE3o m\xF3vel.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dispon\xEDvel para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manuten\xE7\xE3o semanal: Domingos \xE0s 01:00 GMT, com uma dura\xE7\xE3o de at\xE9 2 horas. O servi\xE7o poder\xE1 ser afetado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Esqueceu a palavra-passe?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfer\xEAncia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Informa\xE7\xE3o da conta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiado!"
    },
    Ti = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0438",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    Lr = {
        "ar-001": {
            translations: Ai,
            isRTL: !0
        },
        "de-DE": {
            translations: Ei,
            isRTL: !1
        },
        "es-ES": {
            translations: Si,
            isRTL: !1
        },
        "fr-FR": {
            translations: xi,
            isRTL: !1
        },
        "it-IT": {
            translations: Ri,
            isRTL: !1
        },
        "pl-PL": {
            translations: Oi,
            isRTL: !1
        },
        "pt-PT": {
            translations: ki,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ti,
            isRTL: !1
        }
    };

function St(v, r, s) {
    window.open("https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux", "_blank")
}
a(St, "default");

function xt(v, r, s, e) {
    v.FormattedLogin = v.SelectedAccountLogin.slice(3)
}
a(xt, "default");

function Rt(v, r, s, e) {
    window.open(v.WebtraderUrl + "?login=" + v.Login + "&server=" + v.Server, "_blank")
}
a(Rt, "default");

function Ot(v, r, s, e) {
    navigator.clipboard.writeText(v.TextToCopy)
}
a(Ot, "default");
var A = y; {
    let r = class r extends A.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Lr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), A.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _linux_OnClick$Action() {
            return this.hasOwnProperty("__linux_OnClick$Action") || (this.__linux_OnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("Linux_OnClick", function(i) {
                    i && (i.setAttribute("code.function", "Linux_OnClick"), i.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Linux_OnClick"), e = t.callContext(e), A.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "657bc2ad-bd0a-4fb2-b9e2-73831402464a"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(St, "JavaScript1", "Linux_OnClick", null, function(m) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__linux_OnClick$Action
        }
        set _linux_OnClick$Action(e) {
            this.__linux_OnClick$Action = e
        }
        get _formatLogin$Action() {
            return this.hasOwnProperty("__formatLogin$Action") || (this.__formatLogin$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("FormatLogin", function(i) {
                    i && (i.setAttribute("code.function", "FormatLogin"), i.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FormatLogin"), e = t.callContext(e);
                        var c = new A.DataTypes.VariableHolder;
                        c.value = A.Logger.startActiveSpan("FormatDynamicLogin", function(m) {
                            m && (m.setAttribute("code.function", "FormatDynamicLogin"), m.setAttribute("outsystems.function.key", "9cff8aa6-5c38-466f-9b25-9407fcd47bf5"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(xt, "FormatDynamicLogin", "FormatLogin", {
                                    SelectedAccountLogin: A.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.loginAttr, A.DataTypes.DataTypes.Text),
                                    FormattedLogin: A.DataConversion.JSNodeParamConverter.to("", A.DataTypes.DataTypes.Text)
                                }, function(f) {
                                    var g = new(t.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult"));
                                    return g.formattedLoginOut = A.DataConversion.JSNodeParamConverter.from(f.FormattedLogin, A.DataTypes.DataTypes.Text), g
                                }, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), n.variables.displayLoginVar = c.value.formattedLoginOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__formatLogin$Action
        }
        set _formatLogin$Action(e) {
            this.__formatLogin$Action = e
        }
        get _webterminalOnClick$Action() {
            return this.hasOwnProperty("__webterminalOnClick$Action") || (this.__webterminalOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("WebterminalOnClick", function(i) {
                    i && (i.setAttribute("code.function", "WebterminalOnClick"), i.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), A.Logger.startActiveSpan("windowOpen", function(c) {
                            c && (c.setAttribute("code.function", "windowOpen"), c.setAttribute("outsystems.function.key", "57324806-8c70-436a-8a40-9a348d4f656a"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Rt, "windowOpen", "WebterminalOnClick", {
                                    Login: A.DataConversion.JSNodeParamConverter.to(n.variables.displayLoginVar, A.DataTypes.DataTypes.Text),
                                    Server: A.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.server_infoAttr.environmentAttr, A.DataTypes.DataTypes.Text),
                                    WebtraderUrl: A.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.white_label_linksAttr.webtrader_urlAttr, A.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__webterminalOnClick$Action
        }
        set _webterminalOnClick$Action(e) {
            this.__webterminalOnClick$Action = e
        }
        get _downloadAppOnClick$Action() {
            return this.hasOwnProperty("__downloadAppOnClick$Action") || (this.__downloadAppOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("DownloadAppOnClick", function(i) {
                    i && (i.setAttribute("code.function", "DownloadAppOnClick"), i.setAttribute("outsystems.function.key", "8843b791-01bf-4ecf-8072-faa9886c35a9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), I.openDeepLink$Action("mt5", n.variables.displayLoginVar, n.variables.selectedAccountIn.server_infoAttr.environmentAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__downloadAppOnClick$Action
        }
        set _downloadAppOnClick$Action(e) {
            this.__downloadAppOnClick$Action = e
        }
        get _copyToClipboard$Action() {
            return this.hasOwnProperty("__copyToClipboard$Action") || (this.__copyToClipboard$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return A.Logger.startActiveSpan("CopyToClipboard", function(c) {
                    c && (c.setAttribute("code.function", "CopyToClipboard"), c.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), n = o.callContext(n);
                        var m = new A.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars")));
                        m.value.textToCopyInLocal = e, A.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "f3bd06ff-fdb9-4475-aac5-755e9d375a61"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(Ot, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: A.DataConversion.JSNodeParamConverter.to(m.value.textToCopyInLocal, A.DataTypes.DataTypes.Text)
                                }, function(g) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), A.FeedbackMessageService.showFeedbackMessage(A.Injector.resolve(A.ServiceNames.TranslationsService).getMessage("a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(e) {
            this.__copyToClipboard$Action = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return A.Logger.startActiveSpan("ForgotPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ForgotPasswordOnClick"), i.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), A.Flow.executeAsyncFlow(function() {
                            return qt.consoleLog$Action("ForgotPasswordOnClick Platform " + n.variables.selectedAccountIn.platformAttr, 0, e), t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linux_OnClick$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("Linux_OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "Linux_OnClick"), t.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._linux_OnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        formatLogin$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("FormatLogin__proxy", function(t) {
                t && (t.setAttribute("code.function", "FormatLogin"), t.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._formatLogin$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        webterminalOnClick$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WebterminalOnClick"), t.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._webterminalOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        downloadAppOnClick$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "DownloadAppOnClick"), t.setAttribute("outsystems.function.key", "8843b791-01bf-4ecf-8072-faa9886c35a9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._downloadAppOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        copyToClipboard$Action(e, n) {
            var t = this.controller;
            return A.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
                o && (o.setAttribute("code.function", "CopyToClipboard"), o.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        forgotPasswordOnClick$Action(e) {
            var n = this.controller;
            return A.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.formatLogin$Action(e)
            }), this._onParametersChangedEventHandler
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Ke = v, Ke.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult", [{
        name: "FormattedLogin",
        attrName: "formattedLoginOut",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), Ke.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: A.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Ke, Nr = new A.Controller.ControllerFactory(Ke, $);
var G = y,
    Rs = S.PlaceholderContent,
    Os = S.IteratorPlaceholderContent,
    Se = class Se extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.MT5TradeModal"
        }
        static getAttributes() {
            return {
                codeFunction: "MT5TradeModal",
                functionKey: "83dddc5f-f2ca-4f25-9c74-643d50dd600a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.QRCodeJS.js"]
        }
        static getBlocks() {
            return [ue]
        }
        get modelFactory() {
            return nr
        }
        get controllerFactory() {
            return Nr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Se.ifWidget,
                c = Se.textWidget,
                m = Se.asPrimitiveValue,
                f = Se.getTranslation,
                g = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(B, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalHeader"
                },
                _widgetRecordProvider: t
            }, b.createElement(_, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [c(f("_5rlJUomd0WgdtC4GTMIrg#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "height: 30px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100px"
                },
                style: "display-flex align-items-center justify-content-flex-end cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, b.createElement(p, {
                image: G.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalContent"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, b.createElement(p, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), b.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductNameBalanceContainer2"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), b.createElement(Be, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), b.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), b.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    try {
                        G.Navigation.navigateTo(G.Navigation.generateScreenURL("tradershub", "wallets", {}), G.Transitions.createTransition(G.Transitions.TransitionAnimation.Fade), null, !0)
                    } catch (l) {
                        if (l.name !== "RedirectOccurredException") throw l
                    }
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, b.createElement(p, {
                image: G.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), b.createElement(_, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [c(f("stfUk9qHTUuvEO+Qfaqcig#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AccountInfoRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtBrokerRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Broker",
                _idProps: {
                    service: e,
                    name: "BrokerLabel2"
                },
                _widgetRecordProvider: t
            })), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.landing_companyAttr,
                _idProps: {
                    service: e,
                    name: "DynamicBrokerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), b.createElement(W, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = o.clone();
                        s.copyToClipboard$Action(r.variables.selectedAccountIn.landing_companyAttr, s.callContext(l))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtServerRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Server",
                _idProps: {
                    service: e,
                    name: "ServerLabel2"
                },
                _widgetRecordProvider: t
            })), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.server_infoAttr.environmentAttr,
                _idProps: {
                    service: e,
                    name: "DynamicServerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), b.createElement(W, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = o.clone();
                        s.copyToClipboard$Action(r.variables.selectedAccountIn.server_infoAttr.environmentAttr, s.callContext(l))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MtLoginIdRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "31"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Login ID",
                _idProps: {
                    service: e,
                    name: "LoginIdLabel2"
                },
                _widgetRecordProvider: t
            })), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }, b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.displayLoginVar,
                _idProps: {
                    service: e,
                    name: "DynamicLoginIdLabel2"
                },
                _widgetRecordProvider: t
            }), b.createElement(W, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = o.clone();
                        s.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, s.callContext(l))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            })))), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordRow2"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.forgotPasswordOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "auto"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t
            }, b.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [c(f("kbdHtooVbUi8Rr8jct4z_A#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }))), b.createElement(ue, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: G.Injector.resolve(G.ServiceNames.TranslationsService).getMessage("Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1", "Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: G.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "39",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), b.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("Mt5TradeModalFooter.class"), function() {
                        return O.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
                    }),
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalFooter"
                },
                _widgetRecordProvider: t
            }, b.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, b.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #1a78cb; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = o.clone();
                    s.downloadAppOnClick$Action(s.callContext(l))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return O.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, b.createElement(W, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "43"
                },
                _widgetRecordProvider: t
            }), b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: e,
                    uuid: "44"
                },
                _widgetRecordProvider: t
            })), b.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#1a78cb")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = o.clone();
                    s.webterminalOnClick$Action(s.callContext(l))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, b.createElement(W, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("ruZVukZi8Ee4oehk0bQhGA.style"), function() {
                        return O.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
                    })
                },
                icon: "globe",
                iconSize: 0,
                style: '"icon"',
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "46"
                },
                _widgetRecordProvider: t
            }), b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 web terminal",
                _idProps: {
                    service: e,
                    uuid: "47"
                },
                _widgetRecordProvider: t
            })), b.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #f3f6f8; color: #222; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = o.clone();
                    s.downloadAppOnClick$Action(s.callContext(l))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("DesktopDownloadAppLink2.Visible"), function() {
                    return O.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "DesktopDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, b.createElement(W, {
                icon: "desktop",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "49"
                },
                _widgetRecordProvider: t
            }), b.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "MetaTrader 5 app",
                _idProps: {
                    service: e,
                    uuid: "50"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
                },
                style: "display-flex justify-content-center column-gap-xs align-items-baseline",
                visible: r.getCachedValue(e.getId("AvailableForMacOSAndLinuxText2.Visible"), function() {
                    return O.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "AvailableForMacOSAndLinuxText2"
                },
                _widgetRecordProvider: t
            }, b.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [c(f("bnNmCWFI7kujP2WEB9S+gg#Value", "Available for"))],
                _idProps: {
                    service: e,
                    uuid: "52"
                },
                _widgetRecordProvider: t
            }), b.createElement(ve, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var l = o.clone();
                    s.downloadAppOnClick$Action(s.callContext(l))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Macos"
                },
                _widgetRecordProvider: t
            }, b.createElement(_, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: ["macOS"],
                _idProps: {
                    service: e,
                    uuid: "54"
                },
                _widgetRecordProvider: t
            })), b.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [c(f("S3d3t1eSmUm5WVx_6xyWnw#Value", " and "))],
                _idProps: {
                    service: e,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            }), b.createElement(ve, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var l = o.clone();
                    s.linux_OnClick$Action(s.callContext(l))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }, b.createElement(_, {
                extendedProperties: {
                    style: "color: #222; font-size: 12px; font-weight: normal; text-decoration: underline;"
                },
                style: " cursor-pointer",
                text: ["Linux."],
                _idProps: {
                    service: e,
                    uuid: "57"
                },
                _widgetRecordProvider: t
            }))), b.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8",
                    marginLeft: "auto"
                },
                style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
                visible: r.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return O.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, b.createElement(p, {
                gridProperties: {
                    width: "80px"
                },
                image: G.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mt5Onelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "59"
                },
                _widgetRecordProvider: t
            }), b.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [c(f("jaHw+m0lXEyM3mg6fxY1lw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText2"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(Se, "View");
var kt = Se,
    Tt = kt;
var R = K(X());
var Ii = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X \u0645\u062D\u0637\u0629 \u0627\u0644\u0648\u064A\u0628",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X \u062A\u0637\u0628\u064A\u0642",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629: \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u062D\u062F \u0627\u0644\u0633\u0627\u0639\u0629 01:00 \u0628\u062A\u0648\u0642\u064A\u062A \u062C\u0631\u064A\u0646\u062A\u0634 \u0644\u0645\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 \u0633\u0627\u0639\u062A\u064A\u0646. \u0642\u062F \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0629.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\u062A\u062D\u0648\u064A\u0644",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    Di = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannen Sie, um die mobile App herunterzuladen.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X Webterminal",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "W\xF6chentliche Wartung: Sonntags um 06:00 GMT f\xFCr bis zu 2 Stunden. Der Service kann beeintr\xE4chtigt sein.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Passwort vergessen?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Benutzername",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\xDCbertragung",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Kontodetails",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Kopiert!"
    },
    Vi = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Escanee para descargar la aplicaci\xF3n m\xF3vil.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Mantenimiento semanal: Domingos a las 06:00 GMT durante un m\xE1ximo de 2 horas. El servicio puede verse afectado.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\xBFOlvid\xF3 la contrase\xF1a?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nombre de usuario",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transferencia",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Detalles de la cuenta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\xA1Copiado!"
    },
    Fi = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Mot de passe oubli\xE9 ?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nom d'utilisateur",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfert",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "D\xE9tails du compte",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copi\xE9 !"
    },
    Wi = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scansiona per scaricare l'app mobile.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Terminale web di Deriv X",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Manutenzione settimanale: domenica alle 06:00 GMT per un massimo di 2 ore. Il servizio potrebbe subire interruzioni.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Hai dimenticato la password?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nome utente",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Trasferimento",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Dettagli del conto",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copiato!"
    },
    Hi = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Zeskanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Cotygodniona konserwacja: Niedziele o 01:00 GMT do 2 godz. Mo\u017Ce mie\u0107 wp\u0142yw na dost\u0119pno\u015B\u0107 us\u0142ug.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Nie pami\u0119tasz has\u0142a?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nazwa u\u017Cytkownika",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Przelew",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Szczeg\xF3\u0142y konta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Skopiowano!"
    },
    Li = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Digitalize para transferir a aplica\xE7\xE3o m\xF3vel.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Terminal web Deriv X",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Aplica\xE7\xE3o Deriv X",
        "9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1": "Manuten\xE7\xE3o semanal: Domingos \xE0s 06:00 GMT, com uma dura\xE7\xE3o de at\xE9 2 horas. O servi\xE7o poder\xE1 ser afetado.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Esqueceu-se da palavra-passe?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nome de utilizador",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfer\xEAncia",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "Informa\xE7\xE3o da conta",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copiado!"
    },
    Ni = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X \u0432\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0441\u0447\u0435\u0442\u0430",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    $r = {
        "ar-001": {
            translations: Ii,
            isRTL: !0
        },
        "de-DE": {
            translations: Di,
            isRTL: !1
        },
        "es-ES": {
            translations: Vi,
            isRTL: !1
        },
        "fr-FR": {
            translations: Fi,
            isRTL: !1
        },
        "it-IT": {
            translations: Wi,
            isRTL: !1
        },
        "pl-PL": {
            translations: Hi,
            isRTL: !1
        },
        "pt-PT": {
            translations: Li,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ni,
            isRTL: !1
        }
    };

function It(v, r, s, e) {
    window.open(v.AccountType = "https://dx.deriv.com/", "_blank")
}
a(It, "default");

function Dt(v, r, s, e) {
    navigator.clipboard.writeText(v.TextToCopy)
}
a(Dt, "default");
var F = y; {
    let r = class r extends F.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, $r);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("__forgotPasswordOnClick$Action") || (this.__forgotPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return F.Logger.startActiveSpan("ForgotPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ForgotPasswordOnClick"), i.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), F.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        get _webterminalOnClick$Action() {
            return this.hasOwnProperty("__webterminalOnClick$Action") || (this.__webterminalOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return F.Logger.startActiveSpan("WebterminalOnClick", function(i) {
                    i && (i.setAttribute("code.function", "WebterminalOnClick"), i.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), F.Logger.startActiveSpan("DxWebterminal", function(c) {
                            c && (c.setAttribute("code.function", "DxWebterminal"), c.setAttribute("outsystems.function.key", "e255b3cd-27fd-4e18-9e8d-65a70a49caab"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(It, "DxWebterminal", "WebterminalOnClick", {
                                    AccountType: F.DataConversion.JSNodeParamConverter.to(V.getAccountType(), F.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__webterminalOnClick$Action
        }
        set _webterminalOnClick$Action(e) {
            this.__webterminalOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return F.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), F.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        get _downloadAppOnClick$Action() {
            return this.hasOwnProperty("__downloadAppOnClick$Action") || (this.__downloadAppOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return F.Logger.startActiveSpan("DownloadAppOnClick", function(i) {
                    i && (i.setAttribute("code.function", "DownloadAppOnClick"), i.setAttribute("outsystems.function.key", "b2736a09-9cd7-4ecb-b1bb-0076e660b3dd"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), I.openDeepLink$Action(n.variables.selectedAccountIn.platformAttr, "", "", e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__downloadAppOnClick$Action
        }
        set _downloadAppOnClick$Action(e) {
            this.__downloadAppOnClick$Action = e
        }
        get _copyToClipboard$Action() {
            return this.hasOwnProperty("__copyToClipboard$Action") || (this.__copyToClipboard$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return F.Logger.startActiveSpan("CopyToClipboard", function(c) {
                    c && (c.setAttribute("code.function", "CopyToClipboard"), c.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), n = o.callContext(n);
                        var m = new F.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars")));
                        m.value.textToCopyInLocal = e, F.Logger.startActiveSpan("JavaScript1", function(f) {
                            f && (f.setAttribute("code.function", "JavaScript1"), f.setAttribute("outsystems.function.key", "fcdde90d-dd04-4fbb-9c69-59f7b4b83a9f"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(Dt, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: F.DataConversion.JSNodeParamConverter.to(m.value.textToCopyInLocal, F.DataTypes.DataTypes.Text)
                                }, function(g) {}, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), F.FeedbackMessageService.showFeedbackMessage(F.Injector.resolve(F.ServiceNames.TranslationsService).getMessage("SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        c && c.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(e) {
            this.__copyToClipboard$Action = e
        }
        forgotPasswordOnClick$Action(e) {
            var n = this.controller;
            return F.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        webterminalOnClick$Action(e) {
            var n = this.controller;
            return F.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "WebterminalOnClick"), t.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._webterminalOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return F.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), F.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        downloadAppOnClick$Action(e) {
            var n = this.controller;
            return F.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "DownloadAppOnClick"), t.setAttribute("outsystems.function.key", "b2736a09-9cd7-4ecb-b1bb-0076e660b3dd"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._downloadAppOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        copyToClipboard$Action(e, n) {
            var t = this.controller;
            return F.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
                o && (o.setAttribute("code.function", "CopyToClipboard"), o.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        get forgotPasswordEvent$Action() {
            return this.hasOwnProperty("_forgotPasswordEvent$Action") || (this._forgotPasswordEvent$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordEvent$Action
        }
        set forgotPasswordEvent$Action(e) {
            this._forgotPasswordEvent$Action = e
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Vt = v, Vt.registerVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: F.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Vt, Mr = new F.Controller.ControllerFactory(Vt, $);
var U = y,
    el = S.PlaceholderContent,
    tl = S.IteratorPlaceholderContent,
    xe = class xe extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.DerivXTradeModal"
        }
        static getAttributes() {
            return {
                codeFunction: "DerivXTradeModal",
                functionKey: "bae00962-f80a-49bb-b04b-4defba2dfd2c",
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
            return [ue]
        }
        get modelFactory() {
            return or
        }
        get controllerFactory() {
            return Mr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = xe.ifWidget,
                c = xe.textWidget,
                m = xe.asPrimitiveValue,
                f = xe.getTranslation,
                g = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(B, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalHeader"
                },
                _widgetRecordProvider: t
            }, R.createElement(_, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [c(f("oN_h5NvgWUSd55sAGYve9Q#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), R.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: U.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon3"
                },
                _widgetRecordProvider: t
            })), R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalContent"
                },
                _widgetRecordProvider: t
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; padding: 0px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductRow2"
                },
                _widgetRecordProvider: t
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, R.createElement(p, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: r.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), R.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductNameBalanceContainer2"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), R.createElement(Be, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), R.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), R.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.closeOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, R.createElement(p, {
                image: U.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), R.createElement(_, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [c(f("0A55Iqpuk0ym_YWurf8vgA#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #f3f6f8; border-color: #dee2e6; border-radius: 8px; border-style: solid; border-width: 0px; height: 42px; padding: 16px;"
                },
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxAccountInfoRow"
                },
                _widgetRecordProvider: t
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "ThemeGrid_Width4"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: U.Injector.resolve(U.ServiceNames.TranslationsService).getMessage("6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1", "Username"),
                _idProps: {
                    service: e,
                    name: "UsernameLabel"
                },
                _widgetRecordProvider: t
            })), R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8"
                },
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.loginAttr,
                _idProps: {
                    service: e,
                    name: "DynamicUsernameLabel"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), R.createElement(W, {
                extendedEvents: {
                    onClick: a(function() {
                        var l = o.clone();
                        s.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, s.callContext(l))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "clone",
                iconSize: 0,
                style: "icon cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }))), R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: right;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxForgotPasswordRow"
                },
                _widgetRecordProvider: t
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.forgotPasswordOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "auto"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t
            }, R.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [c(f("zyRf+i4DOEay7byfR1VdqQ#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            }))), R.createElement(ue, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: U.Injector.resolve(U.ServiceNames.TranslationsService).getMessage("9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1", "Weekly maintenance: Sundays at 06:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: U.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "25",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), R.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("DxtradeTradeModalFooter.class"), function() {
                        return O.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
                    }),
                    style: "font-weight: bold; padding: 16px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width12"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-space-between gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalFooter"
                },
                _widgetRecordProvider: t
            }, R.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, R.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = o.clone();
                    s.downloadAppOnClick$Action(s.callContext(l))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return O.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, R.createElement(W, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }), R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: U.Injector.resolve(U.ServiceNames.TranslationsService).getMessage("7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1", "Deriv X app"),
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            })), R.createElement(H, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#ff4450")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var l = o.clone();
                    s.webterminalOnClick$Action(s.callContext(l))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, R.createElement(W, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("n_TJr+KecE+HkzWKnzBg3w.style"), function() {
                        return O.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
                    })
                },
                icon: "globe",
                iconSize: 0,
                style: '"icon"',
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "32"
                },
                _widgetRecordProvider: t
            }), R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: U.Injector.resolve(U.ServiceNames.TranslationsService).getMessage("izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1", "Deriv X web terminal"),
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }))), R.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "border-color: #f3f6f8; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: auto; padding: 8px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_Width8",
                    marginLeft: "auto"
                },
                style: "display-flex flex-direction-column justify-content-center align-items-center align-self-center gap-s",
                visible: r.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return O.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, R.createElement(p, {
                gridProperties: {
                    width: "80px"
                },
                image: U.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dxtradeOnelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }), R.createElement(_, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [c(f("mrqnSVBRmE6If_BJN329Mw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText3"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(xe, "View");
var Ft = xe,
    Wt = Ft;
var j = K(X());
var $i = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u0641\u0634\u0644",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u0641\u0634\u0644",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0645\u0643\u062A\u0645\u0644",
        "somkOTVlNkWj6olwMh4slw#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
    },
    Mi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fehlgeschlagen",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fehlgeschlagen",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verifiziert",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Abgeschlossen",
        "somkOTVlNkWj6olwMh4slw#Value": "In \xDCberpr\xFCfung",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In \xDCberpr\xFCfung"
    },
    Bi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fallido",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fallido",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completado",
        "somkOTVlNkWj6olwMh4slw#Value": "En revisi\xF3n",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En revisi\xF3n"
    },
    zi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\xC9chou\xE9",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\xC9chou\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "V\xE9rifi\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Termin\xE9",
        "somkOTVlNkWj6olwMh4slw#Value": "En r\xE9vision",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En r\xE9vision"
    },
    Ui = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Operazione non riuscita",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Operazione non riuscita",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificato",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completato",
        "somkOTVlNkWj6olwMh4slw#Value": "In revisione",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In revisione"
    },
    ji = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Niepowodzenie",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Niepowodzenie",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Zweryfikowane",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Zako\u0144czono",
        "somkOTVlNkWj6olwMh4slw#Value": "W trakcie sprawdzania",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "W trakcie sprawdzania"
    },
    Qi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Falhou",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Falhou",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Conclu\xEDdo",
        "somkOTVlNkWj6olwMh4slw#Value": "Em an\xE1lise",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "Em an\xE1lise"
    },
    Gi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        "somkOTVlNkWj6olwMh4slw#Value": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438"
    },
    Br = {
        "ar-001": {
            translations: $i,
            isRTL: !0
        },
        "de-DE": {
            translations: Mi,
            isRTL: !1
        },
        "es-ES": {
            translations: Bi,
            isRTL: !1
        },
        "fr-FR": {
            translations: zi,
            isRTL: !1
        },
        "it-IT": {
            translations: Ui,
            isRTL: !1
        },
        "pl-PL": {
            translations: ji,
            isRTL: !1
        },
        "pt-PT": {
            translations: Qi,
            isRTL: !1
        },
        "ru-RU": {
            translations: Gi,
            isRTL: !1
        }
    };
var me = y; {
    let r = class r extends me.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Br);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _redirectToAction$Action() {
            return this.hasOwnProperty("__redirectToAction$Action") || (this.__redirectToAction$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return me.Logger.startActiveSpan("RedirectToAction", function(i) {
                    return i && (i.setAttribute("code.function", "RedirectToAction"), i.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), me.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RedirectToAction"), e = t.callContext(e), me.Flow.executeAsyncFlow(function() {
                            return me.Flow.executeSequence(function() {
                                if (!n.variables.isDisabledIn) return t.redirectToEvent$Action(e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__redirectToAction$Action
        }
        set _redirectToAction$Action(e) {
            this.__redirectToAction$Action = e
        }
        redirectToAction$Action(e) {
            var n = this.controller;
            return me.Logger.startActiveSpan("RedirectToAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RedirectToAction"), t.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), me.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._redirectToAction$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get redirectToEvent$Action() {
            return this.hasOwnProperty("_redirectToEvent$Action") || (this._redirectToEvent$Action = function() {
                return Promise.resolve()
            }), this._redirectToEvent$Action
        }
        set redirectToEvent$Action(e) {
            this._redirectToEvent$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    zr = v
}
var zr, Ur = new me.Controller.ControllerFactory(zr, $);
var z = y,
    _l = S.PlaceholderContent,
    bl = S.IteratorPlaceholderContent,
    Re = class Re extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.ProfileSetupCard"
        }
        static getAttributes() {
            return {
                codeFunction: "ProfileSetupCard",
                functionKey: "9af3ca67-5d18-4ffc-a7da-5bafa5fd2543",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.ProfileSetupCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ar
        }
        get controllerFactory() {
            return Ur
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Re.ifWidget,
                c = Re.textWidget,
                m = Re.asPrimitiveValue,
                f = Re.getTranslation,
                g = this;
            return j.createElement("div", this.getRootNodeProperties(), j.createElement(d, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.redirectToAction$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; margin-top: 24px; padding: 16px;"
                },
                style: r.getCachedValue(e.getId("oXZ1Z0pb7kOjZiILWyRZxg.Style"), function() {
                    return r.variables.isDisabledIn ? "default-cursor" : "cursor-pointer"
                }, function() {
                    return r.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, i(r.variables.statusIn === z.Injector.resolve(z.ServiceNames.TranslationsService).getMessage("s7xI84343EmHa3yrSOasog#Condition.415251123.1", "In Review"), !1, this, function() {
                return [j.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FEF0E6; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "InReviewStatus"
                    },
                    _widgetRecordProvider: t
                }, j.createElement(p, {
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InReview.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }), j.createElement(_, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [c(f("somkOTVlNkWj6olwMh4slw#Value", "In review"))],
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), i(r.variables.statusIn === z.Injector.resolve(z.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1", "Verified") || r.variables.statusIn === z.Injector.resolve(z.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1", "Completed"), !1, this, function() {
                return [j.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #EBF7ED; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "VerifiedStatus"
                    },
                    _widgetRecordProvider: t
                }, j.createElement(p, {
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.IconSuccessful.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), j.createElement(h, {
                    extendedProperties: {
                        style: "color: #267D36; font-size: 12px; font-weight: bold;"
                    },
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    value: r.variables.statusIn,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                }))]
            }, function() {
                return []
            }), i(r.variables.statusIn === z.Injector.resolve(z.ServiceNames.TranslationsService).getMessage("Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1", "Failed"), !1, this, function() {
                return [j.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #FAEAEA; border-radius: 100px; margin-bottom: 8px; padding: 3px 8px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center justify-content-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "FailedStatus"
                    },
                    _widgetRecordProvider: t
                }, j.createElement(p, {
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Error.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), j.createElement(_, {
                    extendedProperties: {
                        style: "color: #8C1D1D; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [c(f("aK_wOyqFv06BBkBTCUMb_w#Value", "Failed"))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), j.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 8px;"
                },
                style: r.getCachedValue(e.getId("4t1YJ84txEumevu+f4CqOA.Style"), function() {
                    return r.variables.isDisabledIn ? "disabled-class display-flex align-items-center justify-content-space-between" : "display-flex align-items-center justify-content-space-between"
                }, function() {
                    return r.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, j.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, j.createElement(p, {
                gridProperties: {
                    width: "32px"
                },
                type: 1,
                url: r.variables.iconIn,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._iconInDataFetchStatus)
            }), j.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            })), i(r.variables.isDisabledIn, !1, this, function() {
                return []
            }, function() {
                return [j.createElement(p, {
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                })]
            })), j.createElement(h, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                style: r.getCachedValue(e.getId("7H3hQssJoUmatQccgqXuYA.Style"), function() {
                    return r.variables.isDisabledIn ? "disabled-class" : ""
                }, function() {
                    return r.variables.isDisabledIn
                }),
                value: r.variables.descriptionIn,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus),
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._descriptionInDataFetchStatus)
            })))
        }
    };
a(Re, "View");
var Ht = Re,
    Lt = Ht;
var re = K(X());
var jr = {};
var Oe = y; {
    let r = class r extends Oe.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, jr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return Oe.Logger.startActiveSpan("OnClose", function(i) {
                    return i && (i.setAttribute("code.function", "OnClose"), i.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Oe.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClose"), e = t.callContext(e), Oe.Flow.executeAsyncFlow(function() {
                            return t.closeBOLockModal$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onClose$Action(e) {
            var n = this.controller;
            return Oe.Logger.startActiveSpan("OnClose__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Oe.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onClose$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeBOLockModal$Action() {
            return this.hasOwnProperty("_closeBOLockModal$Action") || (this._closeBOLockModal$Action = function() {
                return Promise.resolve()
            }), this._closeBOLockModal$Action
        }
        set closeBOLockModal$Action(e) {
            this._closeBOLockModal$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Qr = v
}
var Qr, Gr = new Oe.Controller.ControllerFactory(Qr, $);
var He = y,
    Wl = S.PlaceholderContent,
    Hl = S.IteratorPlaceholderContent,
    ke = class ke extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.BOLocksPopup"
        }
        static getAttributes() {
            return {
                codeFunction: "BOLocksPopup",
                functionKey: "04bf10db-c46a-4cd9-8fd1-fe9146486eab",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.CFDBlocks.BOLocksPopup.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return sr
        }
        get controllerFactory() {
            return Gr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = ke.ifWidget,
                c = ke.textWidget,
                m = ke.asPrimitiveValue,
                f = ke.getTranslation,
                g = this;
            return re.createElement("div", this.getRootNodeProperties(), re.createElement(B, {
                showPopup: r.variables.isVisibleIn,
                style: "popup-dialog warning-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: He.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, re.createElement(d, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupHeader"
                },
                _widgetRecordProvider: t
            }, re.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.onClose$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                image: He.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), re.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 24px;"
                },
                style: "display-flex align-items-center justify-content-center flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupContent"
                },
                _widgetRecordProvider: t
            }, re.createElement(p, {
                image: He.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCircleExclamation.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }), re.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: r.variables.statusIn === "unavailable",
                _idProps: {
                    service: e,
                    name: "AccountUnavailableContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: He.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, re.createElement(_, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Account unavailable"],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), re.createElement(_, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Check back in a few minutes by refreshing the page."],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), re.createElement(d, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: r.variables.statusIn === "under_maintenance" || r.variables.statusIn === "maintenance",
                _idProps: {
                    service: e,
                    name: "ServerMaintenanceContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: He.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, re.createElement(_, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Maintenance in progress"],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), re.createElement(_, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Some services may be affected and your balance is temporarily unavailable."],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))), re.createElement(H, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.onClose$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, "OK")))
        }
    };
a(ke, "View");
var Nt = ke,
    $t = Nt;
var ne = K(X());
var qi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    Ji = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Passwort vergessen"
    },
    Ki = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Olvid\xE9 la contrase\xF1a"
    },
    Xi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Mot de passe oubli\xE9"
    },
    Yi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Password dimenticato"
    },
    Zi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Nie pami\u0119tam has\u0142a"
    },
    en = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Esqueceu-se da palavra-passe"
    },
    tn = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    qr = {
        "ar-001": {
            translations: qi,
            isRTL: !0
        },
        "de-DE": {
            translations: Ji,
            isRTL: !1
        },
        "es-ES": {
            translations: Ki,
            isRTL: !1
        },
        "fr-FR": {
            translations: Xi,
            isRTL: !1
        },
        "it-IT": {
            translations: Yi,
            isRTL: !1
        },
        "pl-PL": {
            translations: Zi,
            isRTL: !1
        },
        "pt-PT": {
            translations: en,
            isRTL: !1
        },
        "ru-RU": {
            translations: tn,
            isRTL: !1
        }
    };
var oe = y; {
    let r = class r extends oe.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, qr);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _updateProfileOnClick$Action() {
            return this.hasOwnProperty("__updateProfileOnClick$Action") || (this.__updateProfileOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return oe.Logger.startActiveSpan("UpdateProfileOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "UpdateProfileOnClick"), i.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), oe.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("UpdateProfileOnClick"), e = t.callContext(e), oe.Flow.executeAsyncFlow(function() {
                            return t.updateProfile$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__updateProfileOnClick$Action
        }
        set _updateProfileOnClick$Action(e) {
            this.__updateProfileOnClick$Action = e
        }
        get _closeOnClick$Action() {
            return this.hasOwnProperty("__closeOnClick$Action") || (this.__closeOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return oe.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), oe.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), oe.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        updateProfileOnClick$Action(e) {
            var n = this.controller;
            return oe.Logger.startActiveSpan("UpdateProfileOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "UpdateProfileOnClick"), t.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), oe.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._updateProfileOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return oe.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), oe.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get closeEvent$Action() {
            return this.hasOwnProperty("_closeEvent$Action") || (this._closeEvent$Action = function() {
                return Promise.resolve()
            }), this._closeEvent$Action
        }
        set closeEvent$Action(e) {
            this._closeEvent$Action = e
        }
        get updateProfile$Action() {
            return this.hasOwnProperty("_updateProfile$Action") || (this._updateProfile$Action = function() {
                return Promise.resolve()
            }), this._updateProfile$Action
        }
        set updateProfile$Action(e) {
            this._updateProfile$Action = e
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
            return I.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Jr = v
}
var Jr, Kr = new oe.Controller.ControllerFactory(Jr, $);
var Mt = y,
    rc = S.PlaceholderContent,
    ic = S.IteratorPlaceholderContent,
    Te = class Te extends D.BaseWebBlock {
        static get displayName() {
            return "CFDBlocks.CompleteYourProfileModal"
        }
        static getAttributes() {
            return {
                codeFunction: "CompleteYourProfileModal",
                functionKey: "ccd5c6a7-692c-4dc8-912c-1e4ac462b907",
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
            return lr
        }
        get controllerFactory() {
            return Kr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Te.ifWidget,
                c = Te.textWidget,
                m = Te.asPrimitiveValue,
                f = Te.getTranslation,
                g = this;
            return ne.createElement("div", this.getRootNodeProperties(), ne.createElement(B, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (O.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Mt.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, ne.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalHeader"
                },
                _widgetRecordProvider: t
            }, ne.createElement(_, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [c(f("buIw4sV9uUGBm0zbchclxw#Value", "Complete your profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), ne.createElement(p, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var l = o.clone();
                            return s.closeOnClick$Action(s.callContext(l))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Mt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), ne.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "flex: 1; height: 70vh; padding: 16px; text-align: center;"
                },
                style: "display-flex flex-direction-column align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordModalContent"
                },
                _widgetRecordProvider: t
            }, ne.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkImage"
                },
                _widgetRecordProvider: t
            }, ne.createElement(p, {
                extendedProperties: {
                    style: "height: 100px;"
                },
                gridProperties: {
                    width: "100px"
                },
                image: Mt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), ne.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "VerificationLinkDescription"
                },
                _widgetRecordProvider: t
            }, ne.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "Complete your Profile",
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }), "To continue, provide the required information in the Personal Details section."), ne.createElement(H, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var l = o.clone();
                        return s.updateProfileOnClick$Action(s.callContext(l))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, "Update profile")), ne.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "bottom: 0; height: 30vh; padding: 16px; position: fixed;"
                },
                style: "display-flex flex-direction-column justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordFooter"
                },
                _widgetRecordProvider: t
            })))
        }
    };
a(Te, "View");
var Bt = Te,
    zt = Bt;
var Ie = K(X());
var Xr = {};

function Ut(v, r, s, e) {
    v.OnInitializedHandler = r.InitializedHandler, v.OnToggleHandler = r.OnToggleHandler
}
a(Ut, "default");
var w = y; {
    let r = class r extends w.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Xr);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: a(function(i) {
                    return i = i === void 0 ? "" : i, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, w.DataConversion.JSNodeParamConverter.from(i, w.DataTypes.DataTypes.Text)), o.callContext(), function(c) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: a(function(i, c) {
                    return i = i === void 0 ? "" : i, c = c === void 0 ? !1 : c, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, w.DataConversion.JSNodeParamConverter.from(i, w.DataTypes.DataTypes.Text), w.DataConversion.JSNodeParamConverter.from(c, w.DataTypes.DataTypes.Boolean)), o.callContext(), function(m) {
                        return {}
                    }, function() {}, "OnToggleHandler")
                }, "onToggleHandler$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return w.Logger.startActiveSpan("OnInitialize", function(i) {
                    i && (i.setAttribute("code.function", "OnInitialize"), i.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var c = new w.DataTypes.VariableHolder,
                            m = new w.DataTypes.VariableHolder(new w.DataTypes.JSONSerializeOutputType);
                        c.value = O.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = c.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, m.value.jSONOut = w.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), O.bottomSheetCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, m.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _registerCallback$Action() {
            return this.hasOwnProperty("__registerCallback$Action") || (this.__registerCallback$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return w.Logger.startActiveSpan("RegisterCallback", function(i) {
                    i && (i.setAttribute("code.function", "RegisterCallback"), i.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var c = new w.DataTypes.VariableHolder;
                        c.value = w.Logger.startActiveSpan("GetCallbackHandler", function(m) {
                            m && (m.setAttribute("code.function", "GetCallbackHandler"), m.setAttribute("outsystems.function.key", "e152b377-7633-4d47-a17f-69d217822e08"), m.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), m.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ut, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: w.DataConversion.JSNodeParamConverter.to(null, w.DataTypes.DataTypes.Object),
                                    OnToggleHandler: w.DataConversion.JSNodeParamConverter.to(null, w.DataTypes.DataTypes.Object)
                                }, function(f) {
                                    var g = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"));
                                    return g.onInitializedHandlerOut = w.DataConversion.JSNodeParamConverter.from(f.OnInitializedHandler, w.DataTypes.DataTypes.Object), g.onToggleHandlerOut = w.DataConversion.JSNodeParamConverter.from(f.OnToggleHandler, w.DataTypes.DataTypes.Object), g
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: t.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), O.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, Xe.registeredCallbackEvents.initialized, c.value.onInitializedHandlerOut, e), O.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, Xe.registeredCallbackEvents.onToggle, c.value.onToggleHandlerOut, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__registerCallback$Action
        }
        set _registerCallback$Action(e) {
            this.__registerCallback$Action = e
        }
        get _onToggleHandler$Action() {
            return this.hasOwnProperty("__onToggleHandler$Action") || (this.__onToggleHandler$Action = function(e, n, t) {
                var o = this.model,
                    i = this.controller,
                    c = this.idService;
                return w.Logger.startActiveSpan("OnToggleHandler", function(m) {
                    return m && (m.setAttribute("code.function", "OnToggleHandler"), m.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), m.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), m.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnToggleHandler"), t = i.callContext(t);
                        var f = new w.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars")));
                        return f.value.bottomSheetIdInLocal = e, f.value.isBottomSheetOpenInLocal = n, w.Flow.executeAsyncFlow(function() {
                            return i.onToggle$Action(f.value.bottomSheetIdInLocal, f.value.isBottomSheetOpenInLocal, t)
                        })
                    }, function() {
                        m && m.end()
                    })
                }, 1)
            }), this.__onToggleHandler$Action
        }
        set _onToggleHandler$Action(e) {
            this.__onToggleHandler$Action = e
        }
        get _initializedHandler$Action() {
            return this.hasOwnProperty("__initializedHandler$Action") || (this.__initializedHandler$Action = function(e, n) {
                var t = this.model,
                    o = this.controller,
                    i = this.idService;
                return w.Logger.startActiveSpan("InitializedHandler", function(c) {
                    return c && (c.setAttribute("code.function", "InitializedHandler"), c.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), c.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), c.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var m = new w.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars")));
                        return m.value.bottomSheetIdInLocal = e, w.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(m.value.bottomSheetIdInLocal, n)
                        })
                    }, function() {
                        c && c.end()
                    })
                }, 1)
            }), this.__initializedHandler$Action
        }
        set _initializedHandler$Action(e) {
            this.__initializedHandler$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return w.Logger.startActiveSpan("OnDestroy", function(i) {
                    i && (i.setAttribute("code.function", "OnDestroy"), i.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), O.bottomSheetDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return w.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), O.bottomSheetInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return w.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.internalConfigsVar.shapeAttr !== n.variables.shapeIn && (n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, O.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Shape", n.variables.internalConfigsVar.shapeAttr, e)), n.variables.internalConfigsVar.showHandlerAttr !== n.variables.showHandlerIn && (n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, O.bottomSheetChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", n.variables.internalConfigsVar.showHandlerAttr, e)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, O.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        registerCallback$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
                t && (t.setAttribute("code.function", "RegisterCallback"), t.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._registerCallback$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onToggleHandler$Action(e, n, t) {
            var o = this.controller;
            return w.Logger.startActiveSpan("OnToggleHandler__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnToggleHandler"), i.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), i.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), i.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, t, e, n)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return w.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), t.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), t.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get initialized$Action() {
            return this.hasOwnProperty("_initialized$Action") || (this._initialized$Action = function() {
                return Promise.resolve()
            }), this._initialized$Action
        }
        set initialized$Action(e) {
            this._initialized$Action = e
        }
        get onToggle$Action() {
            return this.hasOwnProperty("_onToggle$Action") || (this._onToggle$Action = function() {
                return Promise.resolve()
            }), this._onToggle$Action
        }
        set onToggle$Action(e) {
            this._onToggle$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onReady$Action(e)
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    o = this.idService;
                return n.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return O.defaultTimeout
        }
    };
    a(r, "ControllerInner");
    let v = r;
    Le = v, Le.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggleHandler",
        attrName: "onToggleHandlerOut",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }]), Le.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsBottomSheetOpen",
        attrName: "isBottomSheetOpenInLocal",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), Le.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !1,
        dataType: w.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var Le, Yr = new w.Controller.ControllerFactory(Le, Kt);
var bc = S.PlaceholderContent,
    yc = S.IteratorPlaceholderContent,
    De = class De extends D.BaseWebBlock {
        static get displayName() {
            return "Interaction.BottomSheet"
        }
        static getAttributes() {
            return {
                codeFunction: "BottomSheet",
                functionKey: "4fb64c61-8941-44be-b854-da0b608a625b",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return ["scripts/OutSystemsUI.UserScripts.OutSystemsUI.js"]
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return cr
        }
        get controllerFactory() {
            return Yr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = De.ifWidget,
                c = De.textWidget,
                m = De.asPrimitiveValue,
                f = De.getTranslation,
                g = this;
            return Ie.createElement("div", this.getRootNodeProperties(), i(!1, !1, this, function() {
                return []
            }, function() {
                return [Ie.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: r.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: t
                }, Ie.createElement(Jt, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t
                }, Ie.createElement(Ye, {
                    align: 0,
                    content: g.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: e,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: t
                })), Ie.createElement(Ye, {
                    align: 0,
                    content: g.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), Ie.createElement(d, {
                    align: 0,
                    animate: !1,
                    style: "osui-bottom-sheet-overlay",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }))
        }
    };
a(De, "View");
var jt = De,
    Qt = jt;
var E = y,
    Ne = S.PlaceholderContent,
    fe = S.IteratorPlaceholderContent,
    Ve = class Ve extends D.BaseWebScreen {
        static get displayName() {
            return "CFDFlows.CFDs"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDs",
                functionKey: "fbf7d1b9-f76f-4b1f-bad1-5f8f38e21344",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.CFDFlows.CFDs.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/tradershub.UserScripts.JSCookie.js"]
        }
        static getBlocks() {
            return [Ze, et, tt, rt, at, Ue, it, ct, ut, Ct, wt, ue, Tt, Wt, Lt, $t, zt, Qt]
        }
        get modelFactory() {
            return dr
        }
        get controllerFactory() {
            return ur
        }
        get title() {
            return D.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs")
        }
        internalRender() {
            let r = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                o = s.callContext(),
                i = Ve.ifWidget,
                c = Ve.textWidget,
                m = Ve.asPrimitiveValue,
                f = Ve.getTranslation,
                g = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(Ze, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(l) {
                        s.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Ne(function() {
                        return [i(r.variables.hasRealAccountVar, !1, this, function() {
                            return []
                        }, function() {
                            return [u.createElement(ve, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent",
                                    marginLeft: "0"
                                },
                                transition: E.Transitions.createTransition(E.Transitions.TransitionAnimation.Default),
                                url: E.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: !r.variables.dataLoadingVar,
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "demo-blue-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(_, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: [c(f("VbhCD_bUgEK7BxBM9TaOaw#Value", "Fill in your account details to make your first deposit."))],
                                _idProps: {
                                    service: e,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: t
                            }), u.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(p, {
                                image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }), u.createElement(et, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px;"
                            },
                            style: "header-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Header"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Title"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            style: "main-title",
                            text: [c(f("wDlKcbQEL0SpHAWlCti6Kw#Value", "CFDs trading"))],
                            _idProps: {
                                service: e,
                                name: "CFDsTrading"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(tt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: r.getCachedValue(e.getId("BSYlSQCImU6gkLf69PXoLA.Position"), function() {
                                    return O.isDesktop$Action(o).isDesktopOut ? $e.position.right : $e.position.bottom
                                })
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new Ne(function() {
                                    return [u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "margin-top: 8px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(p, {
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new Ne(function() {
                                    return [u.createElement(_, {
                                        extendedProperties: {
                                            style: "line-height: 21px;"
                                        },
                                        text: [c(f("gcgQSS26UkK60r3pOIaf5g#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                })
                            },
                            _dependencies: []
                        })), u.createElement(rt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                realClickEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.setRealValue$Action(s.callContext(l))
                                    })
                                }, "realClickEvent$Action"),
                                demoClickEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.setDemoValue$Action(s.callContext(l))
                                    })
                                }, "demoClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), u.createElement(d, {
                            align: 0,
                            animate: !0,
                            visible: !r.variables.dataLoadingVar,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: r.getCachedValue(e.getId("MyAccountsContainer.Visible"), function() {
                                return V.getAuthToken() !== E.BuiltinFunctions.nullTextIdentifier() && !r.variables.dataLoadingVar && !r.variables.createdCFDAccountsVar.isEmpty
                            }, function() {
                                return V.getAuthToken()
                            }, function() {
                                return r.variables.dataLoadingVar
                            }, function() {
                                return r.variables.createdCFDAccountsVar.isEmpty
                            }),
                            _idProps: {
                                service: e,
                                name: "MyAccountsContainer"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [c(f("lDJkd5YFeki2bNzL2UfcQQ#Value", "My accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }), i(r.variables.dataLoadingVar, !1, this, function() {
                            return [u.createElement(ce, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: r.variables.getMockDataAggr.listOut,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "MyAccountsCardsListLoading"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getMockDataAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new fe(function(l, x) {
                                        return [u.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            style: "skeleton my-account-loader",
                                            visible: !0,
                                            _idProps: {
                                                service: l,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, o, e, "1")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [u.createElement(ce, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: r.variables.createdCFDAccountsVar,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "MyAccountsCardsList"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new fe(function(l, x) {
                                        return [u.createElement(at, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).statusAttr,
                                                Name: r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).labelAttr,
                                                Balance: r.getCachedValue(l.getId("hmzxefqNr0a5Dvs5TeE3nw.Balance"), function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).identifierAttr === "ctrader_standard" ? r.variables.totalCTraderBalanceVar : r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).display_balanceAttr + " " + r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).currencyAttr
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).identifierAttr
                                                }, function() {
                                                    return r.variables.totalCTraderBalanceVar
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).display_balanceAttr
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).currencyAttr
                                                }),
                                                ProductIcon: r.variables.createdCFDAccountsVar.getCurrent(x.iterationContext).iconAttr
                                            },
                                            events: {
                                                _handleError: a(function(J) {
                                                    s.handleError(J)
                                                }, "_handleError"),
                                                onClickEvent$Action: a(function() {
                                                    var J = x.clone();
                                                    s.createdAccountOnClick$Action(s.callContext(J))
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: l,
                                                uuid: "21",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, o, e, "2")
                                },
                                _dependencies: [m(r.variables.totalCTraderBalanceVar)]
                            })]
                        })), u.createElement(d, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: r.getCachedValue(e.getId("AvailableAccountsHeader.Visible"), function() {
                                return r.variables.isEmptyVar || r.variables.dataLoadingVar ? !0 : r.variables.availableCFDAccountsVar.length > 0
                            }, function() {
                                return r.variables.isEmptyVar
                            }, function() {
                                return r.variables.dataLoadingVar
                            }, function() {
                                return r.variables.availableCFDAccountsVar.length
                            }),
                            _idProps: {
                                service: e,
                                name: "AvailableAccountsHeader"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [c(f("y62KkkJ5zkq6dYSrp32IZw#Value", "Available accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(d, {
                            align: 0,
                            animate: !0,
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.goToAccountSpecification$Action(s.callContext(l))
                                }, "onClick")
                            },
                            visible: !r.variables.dataLoadingVar,
                            _idProps: {
                                service: e,
                                name: "ViewSpecificationsContainer"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [c(f("PFIizTgBwE2aqHjEpYmznA#Value", "View specifications"))],
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(W, {
                            extendedProperties: {
                                style: "color: #101213;"
                            },
                            gridProperties: {
                                marginLeft: "4.5px"
                            },
                            icon: "angle-right",
                            iconSize: 0,
                            style: "icon",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: t
                        })))), i(r.variables.isEmptyVar, !1, this, function() {
                            return [u.createElement(ce, {
                                animateItems: !1,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                mode: 0,
                                source: r.variables.getCFDAccountsAggr.listOut,
                                style: "available-accounts__container",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "EmptyAvailableAccountsCardsList"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new fe(function(l, x) {
                                        return [u.createElement(Ue, {
                                            getOwnerSpan: a(function() {
                                                return g.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: a(function() {
                                                return g.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductDescription: r.variables.getCFDAccountsAggr.listOut.getCurrent(x.iterationContext).cFDAccountsAttr.descriptionAttr,
                                                _productDescriptionInDataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                                ProductIcon: r.variables.getCFDAccountsAggr.listOut.getCurrent(x.iterationContext).cFDAccountsAttr.iconAttr,
                                                _productIconInDataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                                ProductName: r.variables.getCFDAccountsAggr.listOut.getCurrent(x.iterationContext).cFDAccountsAttr.labelAttr,
                                                _productNameInDataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: a(function(J) {
                                                    s.handleError(J)
                                                }, "_handleError"),
                                                onClickEvent$Action: a(function() {
                                                    return Promise.resolve().then(function() {
                                                        var J = x.clone();
                                                        return s.availableAccountOnClick$Action(s.callContext(J))
                                                    })
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: l,
                                                uuid: "28",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, o, e, "3")
                                },
                                _dependencies: [m(r.variables.getCFDAccountsAggr.dataFetchStatusAttr)]
                            })]
                        }, function() {
                            return [i(r.variables.dataLoadingVar, !1, this, function() {
                                return [u.createElement(ce, {
                                    animateItems: !1,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    mode: 0,
                                    source: r.variables.getCFDAccountsAggr.listOut,
                                    style: "available-accounts__container",
                                    tag: "div",
                                    _idProps: {
                                        service: e,
                                        name: "LoadingMockData"
                                    },
                                    _widgetRecordProvider: t,
                                    source_dataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new fe(function(l, x) {
                                            return [u.createElement(d, {
                                                align: 0,
                                                animate: !1,
                                                style: "skeleton available-accounts-loader",
                                                visible: !0,
                                                _idProps: {
                                                    service: l,
                                                    uuid: "30"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, o, e, "4")
                                    },
                                    _dependencies: []
                                })]
                            }, function() {
                                return [u.createElement(ce, {
                                    animateItems: !1,
                                    extendedProperties: {
                                        "disable-virtualization": "True"
                                    },
                                    mode: 0,
                                    source: r.variables.availableCFDAccountsVar,
                                    style: "available-accounts__container",
                                    tag: "div",
                                    _idProps: {
                                        service: e,
                                        name: "AvailableAccountsCardsList"
                                    },
                                    _widgetRecordProvider: t,
                                    placeholders: {
                                        content: new fe(function(l, x) {
                                            return [u.createElement(Ue, {
                                                getOwnerSpan: a(function() {
                                                    return g.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: a(function() {
                                                    return g.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    ProductIcon: r.variables.availableCFDAccountsVar.getCurrent(x.iterationContext).iconAttr,
                                                    ProductDescription: r.variables.availableCFDAccountsVar.getCurrent(x.iterationContext).descriptionAttr,
                                                    ProductName: r.variables.availableCFDAccountsVar.getCurrent(x.iterationContext).labelAttr
                                                },
                                                events: {
                                                    _handleError: a(function(J) {
                                                        s.handleError(J)
                                                    }, "_handleError"),
                                                    onClickEvent$Action: a(function() {
                                                        return Promise.resolve().then(function() {
                                                            var J = x.clone();
                                                            return s.availableAccountOnClick$Action(s.callContext(J))
                                                        })
                                                    }, "onClickEvent$Action")
                                                },
                                                _validationProps: {
                                                    validationService: n
                                                },
                                                _idProps: {
                                                    service: l,
                                                    uuid: "32",
                                                    alias: "7"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, o, e, "5")
                                    },
                                    _dependencies: []
                                })]
                            })]
                        }), u.createElement(it, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowRestrictedCountryWarningModal"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                onCloseClick$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onCloseClick$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "33",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(ct, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedAccount: r.variables.selectedAvailableAccountVar,
                                IsPasswordSet: r.getCachedValue(e.getId("oVu8K6jS1US34nVXGRpTMw.IsPasswordSet"), function() {
                                    return r.variables.selectedAvailableAccountVar.platformAttr === "mt5" ? r.variables.isMt5PasswordSetVar : r.variables.isDxtradePasswordSetVar
                                }, function() {
                                    return r.variables.selectedAvailableAccountVar.platformAttr
                                }, function() {
                                    return r.variables.isMt5PasswordSetVar
                                }, function() {
                                    return r.variables.isDxtradePasswordSetVar
                                }),
                                IsVisible: r.variables.showModalVar === "ShowPasswordModal"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                refetchMT5Event$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.onAccountCreated$Action("mt5", s.callContext(l))
                                    })
                                }, "refetchMT5Event$Action"),
                                forgotPasswordEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.handleForgotPassword$Action(s.callContext(l))
                                    })
                                }, "forgotPasswordEvent$Action"),
                                needsKYCEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.onNeedKYC$Action(s.callContext(l))
                                }, "needsKYCEvent$Action"),
                                refetchDxtradeEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.onAccountCreated$Action("dxtrade", s.callContext(l))
                                    })
                                }, "refetchDxtradeEvent$Action"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "34",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(ut, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "EmailSentModal"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action"),
                                resendEmailEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.handleForgotPassword$Action(s.callContext(l))
                                    })
                                }, "resendEmailEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "35",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(Ct, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.getCachedValue(e.getId("5v+F4ZKSDkW_t6bSmuzmNw.IsVisible"), function() {
                                    return V.gettrading_platform_dxtrade_password_reset() !== E.BuiltinFunctions.nullTextIdentifier() || V.gettrading_platform_mt5_password_reset() !== E.BuiltinFunctions.nullTextIdentifier() || r.variables.showModalVar === "ShowResetPasswordModal"
                                }, function() {
                                    return V.gettrading_platform_dxtrade_password_reset()
                                }, function() {
                                    return V.gettrading_platform_mt5_password_reset()
                                }, function() {
                                    return r.variables.showModalVar
                                }),
                                Platform: r.getCachedValue(e.getId("5v+F4ZKSDkW_t6bSmuzmNw.Platform"), function() {
                                    return V.gettrading_platform_dxtrade_password_reset() !== E.BuiltinFunctions.nullTextIdentifier() ? "dxtrade" : V.gettrading_platform_mt5_password_reset() !== E.BuiltinFunctions.nullTextIdentifier() ? "mt5" : ""
                                }, function() {
                                    return V.gettrading_platform_dxtrade_password_reset()
                                }, function() {
                                    return V.gettrading_platform_mt5_password_reset()
                                })
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(B, {
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            showPopup: r.variables.showModalVar === "ShowCTraderTradeModal",
                            style: "popup-dialog full-height-popup position-relative vertical-scroll",
                            _idProps: {
                                service: e,
                                name: "CTraderTradeModal"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "CTraderModalHeader"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [c(f("OdL0mQh74UyusJbhJs+HmQ#Value", "Account details"))],
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "cTrader-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Content"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px 0;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ProductDetailsContainer"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftSide"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "height: 32px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "32px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Icon"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(h, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            style: "display-block",
                            value: "Deriv cTrader",
                            _idProps: {
                                service: e,
                                name: "ProductName"
                            },
                            _widgetRecordProvider: t
                        }), i(r.variables.accountCreationLoadingVar, !1, this, function() {
                            return [u.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "border-radius: 4px; height: 22px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "103px"
                                },
                                style: "skeleton",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "48"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [u.createElement(h, {
                                value: "Total balance: " + r.variables.totalCTraderBalanceVar,
                                _idProps: {
                                    service: e,
                                    name: "Balance"
                                },
                                _widgetRecordProvider: t
                            })]
                        }))), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RightSide"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(H, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            isDefault: !1,
                            onClick: a(function() {
                                try {
                                    E.Navigation.navigateTo(E.Navigation.generateScreenURL("tradershub", "wallets", {}), E.Transitions.createTransition(E.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (l) {
                                    if (l.name !== "RedirectOccurredException") throw l
                                }
                            }, "onClick"),
                            style: "btn-primary transfer-btn cursor-pointer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            style: "",
                            text: [c(f("tk2AVO3sjUu0VGDL_Ce+jA#Value", "Transfer"))],
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: t
                        })))), i(r.variables.accountCreationLoadingVar, !1, this, function() {
                            return [u.createElement(ce, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: r.variables.getMockDataAggr.listOut,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: E.Model.calculateDataFetchStatus(r.variables.getMockDataAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new fe(function(l, x) {
                                        return [u.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                            },
                                            style: "skeleton",
                                            visible: !0,
                                            _idProps: {
                                                service: l,
                                                uuid: "55"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, o, e, "6")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [u.createElement(ce, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: r.variables.createdCTraderAccountsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new fe(function(l, x) {
                                        return [u.createElement(d, {
                                            align: 0,
                                            animate: !1,
                                            style: "ctrader-list-item",
                                            visible: !0,
                                            _idProps: {
                                                service: l,
                                                uuid: "57"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [m(r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).currencyAttr), m(r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).display_balanceAttr), m(r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).loginAttr)]
                                        }, u.createElement(h, {
                                            value: r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).loginAttr,
                                            _idProps: {
                                                service: l,
                                                name: "AccountId"
                                            },
                                            _widgetRecordProvider: t
                                        }), u.createElement(h, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).display_balanceAttr + " " + r.variables.createdCTraderAccountsVar.getCurrent(x.iterationContext).currencyAttr,
                                            _idProps: {
                                                service: l,
                                                name: "Balance2"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    }, o, e, "7")
                                },
                                _dependencies: []
                            })]
                        }), i(V.getAccountType() === "real" && r.variables.cTraderAvailableAccountsCountVar > 0 && !r.variables.accountCreationLoadingVar, !1, this, function() {
                            return [u.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: a(function() {
                                        return Promise.resolve().then(function() {
                                            var l = o.clone();
                                            return s.cTraderAccountCreation$Action(r.variables.createdCTraderAccountsVar.getCurrent(o.iterationContext).market_typeAttr, "svg", s.callContext(l))
                                        })
                                    }, "onClick")
                                },
                                style: "add-another-account",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "AddAnotherAccount"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(p, {
                                image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "61"
                                },
                                _widgetRecordProvider: t
                            }), u.createElement(_, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-left: 8px;"
                                },
                                text: [c(f("MaHBLUEyYESwj+mg90G3Rg#Value", "Get another cTrader account"))],
                                _idProps: {
                                    service: e,
                                    uuid: "62"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return []
                        }), u.createElement(wt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "63",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(ue, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                InfoMessage: E.Injector.resolve(E.ServiceNames.TranslationsService).getMessage("e6KxVhk5uk6yga8dnIsH8w#Value.1054975282.1", "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected."),
                                IsDowntime: r.variables.isDowntimeVar
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "64",
                                alias: "13"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "ctrader-redirections-desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DesktopView"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(H, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                return Promise.resolve().then(function() {
                                    var l = o.clone();
                                    return s.ctraderWebTerminalOnClick$Action(s.callContext(l))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "67"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [c(f("FSrKgQ9nyEa6tu5ow5j+gQ#Value", "cTrader web terminal"))],
                            _idProps: {
                                service: e,
                                uuid: "68"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(ve, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            extendedProperties: {
                                target: "_blank",
                                style: "border-color: #101213; border-radius: 100px; border-style: solid; border-width: 1px; height: 48px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            onClick: a(function() {
                                var l = o.clone();
                                s.ctraderAppOnClick$Action(s.callContext(l))
                            }, "onClick"),
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "69"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "70"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px; margin-left: 8px; margin-top: 1px;"
                            },
                            style: "hide-text-decoration",
                            text: ["cTrader app"],
                            _idProps: {
                                service: e,
                                uuid: "71"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "72"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [c(f("7uu7S6s+90qGRDlYfjnzRA#Value", "Also available on "))],
                            _idProps: {
                                service: e,
                                uuid: "73"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(ve, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "hide-text-decoration",
                            transition: E.Transitions.createTransition(E.Transitions.TransitionAnimation.Fade),
                            url: E.Navigation.generateScreenURL("https://getctradermac.com/deriv/ctrader-deriv-setup.dmg", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "74"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px; text-decoration: underline;"
                            },
                            style: "cursor-pointer",
                            text: ["macOS"],
                            _idProps: {
                                service: e,
                                uuid: "75"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(_, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "76"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; margin-top: 16px; padding: 8px;"
                            },
                            style: "display-flex align-items-center flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "77"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "height: 80px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CTraderQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "78"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [c(f("FcZYSO4dmUaXQG237W5ukA#Value", "Scan to download the mobile app."))],
                            _idProps: {
                                service: e,
                                uuid: "79"
                            },
                            _widgetRecordProvider: t
                        }))), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            style: "mobile-btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MobileView"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(H, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: a(function() {
                                var l = o.clone();
                                s.ctraderAppOnClick$Action(s.callContext(l))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "81"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "82"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: [c(f("U8TrPQVGsUWkJF3zJ6JPYg#Value", "cTrader app"))],
                            _idProps: {
                                service: e,
                                uuid: "83"
                            },
                            _widgetRecordProvider: t
                        }))))), u.createElement(Tt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowMT5TradeModal",
                                SelectedAccount: r.variables.selectedAccountVar,
                                IsDowntime: r.variables.isDowntimeVar
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.handleForgotPassword$Action(s.callContext(l))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "84",
                                alias: "14"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(Wt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: r.variables.isDowntimeVar,
                                IsVisible: r.variables.showModalVar === "ShowDxtradeTradeModal",
                                SelectedAccount: r.variables.selectedAccountVar
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.handleForgotPassword$Action(s.callContext(l))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "85",
                                alias: "15"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(B, {
                            showPopup: r.variables.showModalVar === "ShowVerificationModal",
                            style: "popup-dialog full-height-popup",
                            _idProps: {
                                service: e,
                                name: "CompleteProfileSetupPopup"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 14px 16px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ModalHeader"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: [c(f("6jgLMRXT20GcAAeNcOf01w#Value", "Complete profile setup"))],
                            _idProps: {
                                service: e,
                                uuid: "88"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon2"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "90"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(h, {
                            value: E.Injector.resolve(E.ServiceNames.TranslationsService).getMessage("j7VH+TDZ3Uu4fQfQmE6acA#ValueExpression.-513209657.1", "To enable your MT5 ") + r.variables.selectedAccountVar.labelAttr + E.Injector.resolve(E.ServiceNames.TranslationsService).getMessage("j7VH+TDZ3Uu4fQfQmE6acA#ValueExpression.489677834.1", " account, complete these steps."),
                            _idProps: {
                                service: e,
                                uuid: "91"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(ce, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: r.variables.profileSetupVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: e,
                                uuid: "92"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new fe(function(l, x) {
                                    return [u.createElement(Lt, {
                                        getOwnerSpan: a(function() {
                                            return g.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: a(function() {
                                            return g.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            IsDisabled: r.variables.profileSetupVar.getCurrent(x.iterationContext).isDisabledAttr,
                                            Title: r.variables.profileSetupVar.getCurrent(x.iterationContext).titleAttr,
                                            Description: r.variables.profileSetupVar.getCurrent(x.iterationContext).descriptionAttr,
                                            Status: r.variables.profileSetupVar.getCurrent(x.iterationContext).statusLabelAttr,
                                            Icon: r.variables.profileSetupVar.getCurrent(x.iterationContext).iconAttr
                                        },
                                        events: {
                                            _handleError: a(function(J) {
                                                s.handleError(J)
                                            }, "_handleError"),
                                            redirectToEvent$Action: a(function() {
                                                return Promise.resolve().then(function() {
                                                    var J = x.clone();
                                                    return s.redirectToKYC$Action(r.variables.profileSetupVar.getCurrent(x.iterationContext).identifierAttr === "poi" ? "account/proof-of-identity" : r.variables.profileSetupVar.getCurrent(x.iterationContext).identifierAttr === "poa" ? "account/proof-of-address" : "account/personal-details", s.callContext(J))
                                                })
                                            }, "redirectToEvent$Action")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: l,
                                            uuid: "93",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, o, e, "8")
                            },
                            _dependencies: []
                        }))), u.createElement($t, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowBOLocksModal",
                                status: r.getCachedValue(e.getId("p7pi4ns3+EmhXI0xVm35YA.status"), function() {
                                    return r.variables.selectedAccountVar.statusAttr !== E.BuiltinFunctions.nullTextIdentifier() ? r.variables.selectedAccountVar.statusAttr : "under_maintenance"
                                }, function() {
                                    return r.variables.selectedAccountVar.statusAttr
                                })
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeBOLockModal$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeBOLockModal$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "94",
                                alias: "17"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(zt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "CompleteYourProfile"
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError"),
                                closeEvent$Action: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "closeEvent$Action"),
                                updateProfile$Action: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.redirectToKYC$Action("account/personal-details", s.callContext(l))
                                    })
                                }, "updateProfile$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "95",
                                alias: "18"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "NoFiatWallet"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(B, {
                            extendedProperties: {
                                style: "height: 100%; margin-top: 0px; padding: 16px;"
                            },
                            showPopup: r.variables.showModalVar === "SelectAWalletModal",
                            style: "full-height-popup display-flex flex-direction-column gap-m",
                            _idProps: {
                                service: e,
                                name: "SelectWalletDesktopPopup"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex justify-content-space-between align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SelectWalletHeader"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(h, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            value: "Select a Wallet",
                            _idProps: {
                                service: e,
                                name: "SelectWallet"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedEvents: {
                                onClick: a(function() {
                                    var l = o.clone();
                                    s.closeModal$Action(s.callContext(l))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon3"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "SelectWalletContent"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(h, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                            _idProps: {
                                service: e,
                                name: "SelectWalletDescription"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.addNewWalletOnClick$Action("USD", s.callContext(l))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "USD"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "104"
                            },
                            _widgetRecordProvider: t
                        }), "US dollar (USD)"), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.addNewWalletOnClick$Action("EUR", s.callContext(l))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "EUR"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "106"
                            },
                            _widgetRecordProvider: t
                        }), "Euro (EUR)"), u.createElement(d, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: a(function() {
                                    return Promise.resolve().then(function() {
                                        var l = o.clone();
                                        return s.addNewWalletOnClick$Action("GBP", s.callContext(l))
                                    })
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                            },
                            style: "display-flex column-gap-m align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "GBP"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            gridProperties: {
                                width: "24px"
                            },
                            image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "108"
                            },
                            _widgetRecordProvider: t
                        }), "Pound Sterling (GBP)"))), u.createElement(Qt, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Shape: $e.shape.rounded,
                                ShowHandler: !0
                            },
                            events: {
                                _handleError: a(function(l) {
                                    s.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                name: "SelectWalletBottomSheet",
                                alias: "19"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                topBar: new Ne(function() {
                                    return [u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                var l = o.clone();
                                                s.closeBottomSheet$Action(s.callContext(l))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "SelectWalletHeaderContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(h, {
                                        extendedProperties: {
                                            style: "font-size: 18px; font-weight: bold;"
                                        },
                                        value: "Select a Wallet",
                                        _idProps: {
                                            service: e,
                                            uuid: "111"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                content: new Ne(function() {
                                    return [u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "WalletsList"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: left;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "113"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(h, {
                                        extendedProperties: {
                                            style: "font-size: 16px;"
                                        },
                                        value: "To trade CFDs, choose a Wallet in your preferred currency from the options below.",
                                        _idProps: {
                                            service: e,
                                            uuid: "114"
                                        },
                                        _widgetRecordProvider: t
                                    })), u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                return Promise.resolve().then(function() {
                                                    var l = o.clone();
                                                    return s.addNewWalletOnClick$Action("USD", s.callContext(l))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "USD2"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currencyusd.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "116"
                                        },
                                        _widgetRecordProvider: t
                                    }), "US dollar (USD)"), u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                return Promise.resolve().then(function() {
                                                    var l = o.clone();
                                                    return s.addNewWalletOnClick$Action("EUR", s.callContext(l))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "EUR2"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.currency_eur.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "118"
                                        },
                                        _widgetRecordProvider: t
                                    }), "Euro (EUR)"), u.createElement(d, {
                                        align: 0,
                                        animate: !1,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                return Promise.resolve().then(function() {
                                                    var l = o.clone();
                                                    return s.addNewWalletOnClick$Action("GBP", s.callContext(l))
                                                })
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "background-color: #f3f6f8; border-radius: 4px; font-size: 16px; padding: 16px;"
                                        },
                                        style: "display-flex column-gap-m align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "GBP2"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(p, {
                                        gridProperties: {
                                            width: "24px"
                                        },
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/tradershub.gbp.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "120"
                                        },
                                        _widgetRecordProvider: t
                                    }), "Pound Sterling (GBP)"))]
                                })
                            },
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [m(r.variables.profileSetupVar), m(r.variables.selectedAccountVar), m(r.variables.isDowntimeVar), m(r.variables.cTraderAvailableAccountsCountVar), m(V.getAccountType()), m(r.variables.createdCTraderAccountsVar), m(r.variables.accountCreationLoadingVar), m(V.gettrading_platform_mt5_password_reset()), m(V.gettrading_platform_dxtrade_password_reset()), m(r.variables.isDxtradePasswordSetVar), m(r.variables.isMt5PasswordSetVar), m(r.variables.selectedAvailableAccountVar), m(r.variables.showModalVar), m(r.variables.getCFDAccountsAggr.listOut), m(r.variables.availableCFDAccountsVar), m(r.variables.isEmptyVar), m(r.variables.totalCTraderBalanceVar), m(r.variables.getCFDAccountsAggr.dataFetchStatusAttr), m(r.variables.getMockDataAggr.dataFetchStatusAttr), m(r.variables.getMockDataAggr.listOut), m(r.variables.createdCFDAccountsVar), m(V.getAuthToken()), m(r.variables.dataLoadingVar), m(r.variables.hasRealAccountVar)]
            }))
        }
    };
a(Ve, "View");
var Gt = Ve,
    Jc = Gt;
export {
    Jc as
    default
};