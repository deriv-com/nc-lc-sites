import {
    a as jt,
    b as Kt
} from "./_oschunk-7TKCLJO5.js";
import "./_oschunk-BMQ2ZZZM.js";
import {
    a as fe
} from "./_oschunk-XFSPMJPV.js";
import {
    a as Be,
    b as Ue,
    c as Ge
} from "./_oschunk-AVFVZVQC.js";
import {
    a as ze
} from "./_oschunk-CJZXGA6I.js";
import {
    a as Me
} from "./_oschunk-RRERX77H.js";
import {
    a as Je
} from "./_oschunk-72W6T2YH.js";
import {
    a as Tt,
    b as Vt,
    c as Lt,
    d as $t,
    e as Wt,
    f as Ht,
    g as Nt,
    h as Mt,
    i as Bt,
    j as zt,
    k as Ut,
    l as Gt
} from "./_oschunk-MJALCVPC.js";
import "./_oschunk-MZYHHGAU.js";
import "./_oschunk-PP376XGC.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import {
    a as Jt
} from "./_oschunk-345E5GW3.js";
import "./_oschunk-CHDRSEFP.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as W,
    h as c,
    j as b,
    k as oe,
    q as T,
    r as _,
    s as Ie,
    t as De,
    u as ue,
    v as U,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import {
    a as H
} from "./_oschunk-Y45M2O2K.js";
import {
    a as Q,
    g as D,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as k,
    b as Ft,
    d as I
} from "./_oschunk-27GDEXUT.js";
import {
    a as $
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as Ne
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as y
} from "./_oschunk-NTQBNJ73.js";
import {
    c as o,
    g as X
} from "./_oschunk-DVBKI63I.js";
var u = X(Q());
var J = X(Q());
var qt = {};
var ve = y; {
    let r = class r extends ve.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, qt);
            var s = this.controller;
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
                    s = this.idService;
                return ve.Logger.startActiveSpan("OnClickAction", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickAction"), i.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ve.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), ve.Flow.executeAsyncFlow(function() {
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
            return ve.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ve.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    Xt = v
}
var Xt, Qt = new ve.Controller.ControllerFactory(Xt, H);
var ae = y,
    Jr = S.PlaceholderContent,
    jr = S.IteratorPlaceholderContent,
    me = class me extends D.BaseWebBlock {
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
            return Tt
        }
        get controllerFactory() {
            return Qt
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = me.ifWidget,
                l = me.textWidget,
                f = me.asPrimitiveValue,
                h = me.getTranslation,
                m = this;
            return J.createElement("div", this.getRootNodeProperties(), J.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.onClickAction$Action(a.callContext(d))
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
            }, J.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FirstRowContainer"
                },
                _widgetRecordProvider: t
            }, J.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductImageContainer"
                },
                _widgetRecordProvider: t
            }, J.createElement(_, {
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
                url_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            }), J.createElement(c, {
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
                visible_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, J.createElement(_, {
                extendedProperties: {
                    style: "font-size: 24px; height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                image: ae.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), J.createElement(b, {
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: r.getCachedValue(e.getId("ServerStatus.Value"), function() {
                    return r.variables.statusIn === "under_maintenance" ? "Server maintenance" : r.variables.statusIn
                }, function() {
                    return r.variables.statusIn
                }),
                _idProps: {
                    service: e,
                    name: "ServerStatus"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            })))), J.createElement(c, {
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
            }, J.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-block",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TextContainer"
                },
                _widgetRecordProvider: t
            }, J.createElement(b, {
                style: "display-block",
                value: r.variables.nameIn,
                _idProps: {
                    service: e,
                    name: "ProductName"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._nameInDataFetchStatus)
            }), J.createElement(b, {
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
                style_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus),
                value_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus, r.variables._balanceInDataFetchStatus)
            })), J.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ArrowIconContainer"
                },
                _widgetRecordProvider: t
            }, J.createElement(_, {
                image: ae.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
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
                style_dataFetchStatus: ae.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            })))))
        }
    };
o(me, "View");
var je = me,
    Ke = je;
var te = X(Q());
var Yt = {};
var ge = y; {
    let r = class r extends ge.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Yt);
            var s = this.controller;
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
                    s = this.idService;
                return ge.Logger.startActiveSpan("OnClickAction", function(i) {
                    return i && (i.setAttribute("code.function", "OnClickAction"), i.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ge.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), ge.Flow.executeAsyncFlow(function() {
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
            return ge.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ge.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    Zt = v
}
var Zt, er = new ge.Controller.ControllerFactory(Zt, H);
var Fe = y,
    li = S.PlaceholderContent,
    ui = S.IteratorPlaceholderContent,
    pe = class pe extends D.BaseWebBlock {
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
            return Vt
        }
        get controllerFactory() {
            return er
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = pe.ifWidget,
                l = pe.textWidget,
                f = pe.asPrimitiveValue,
                h = pe.getTranslation,
                m = this;
            return te.createElement("div", this.getRootNodeProperties(), te.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.onClickAction$Action(a.callContext(d))
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
            }, te.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, te.createElement(c, {
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
            }, te.createElement(_, {
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
                url_dataFetchStatus: Fe.Model.calculateDataFetchStatus(r.variables._productIconInDataFetchStatus)
            })), te.createElement(c, {
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
            }, te.createElement(b, {
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
                value_dataFetchStatus: Fe.Model.calculateDataFetchStatus(r.variables._productNameInDataFetchStatus)
            }), te.createElement(b, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px; margin-top: 4px;"
                },
                value: r.variables.productDescriptionIn,
                _idProps: {
                    service: e,
                    name: "Description"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Fe.Model.calculateDataFetchStatus(r.variables._productDescriptionInDataFetchStatus)
            }))), te.createElement(c, {
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
            }, te.createElement(_, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                image: Fe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
o(pe, "View");
var qe = pe,
    Te = qe;
var V = X(Q());
var Rr = {
        "CPbKy+0QdkiEybCU+HUEZg#Value": "Mot de passe oubli\xE9 ?"
    },
    tr = {
        "fr-FR": {
            translations: Rr,
            isRTL: !1
        }
    };
var w = y; {
    let r = class r extends w.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, tr);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _addAccountOnClick$Action() {
            return this.hasOwnProperty("__addAccountOnClick$Action") || (this.__addAccountOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return w.Logger.startActiveSpan("AddAccountOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "AddAccountOnClick"), i.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        t.ensureControllerAlive("AddAccountOnClick"), e = t.callContext(e);
                        var l = new w.DataTypes.VariableHolder,
                            f = new w.DataTypes.VariableHolder;
                        return w.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, w.Flow.executeSequence(function() {
                                return n.variables.selectedAccountIn.platformAttr === "mt5" ? (n.flush(), I.mT5NewAccount$Action(n.variables.passwordInputValueVar, k.getSignupEmail(), k.getUserName(), n.variables.selectedAccountIn.productAttr, n.variables.selectedAccountIn.shortcodeAttr, e).then(function(h) {
                                    l.value = h
                                }).then(function() {
                                    return w.Flow.executeSequence(function() {
                                        return l.value.responseOut.msg_typeAttr === w.BuiltinFunctions.nullTextIdentifier() ? (n.variables.isLoadingVar = !1, w.Flow.returnAsync()) : t.refetchMT5Event$Action(e)
                                    })
                                })) : (n.flush(), I.tradingPlatformNewAccount$Action("all", n.variables.passwordInputValueVar, n.variables.selectedAccountIn.platformAttr, e).then(function(h) {
                                    f.value = h
                                }).then(function() {
                                    return w.Flow.executeSequence(function() {
                                        return f.value.responseOut.msg_typeAttr === w.BuiltinFunctions.nullTextIdentifier() ? (n.variables.isLoadingVar = !1, w.Flow.returnAsync()) : t.refetchDxtradeEvent$Action(e)
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
        get _setPasswordOnClick$Action() {
            return this.hasOwnProperty("__setPasswordOnClick$Action") || (this.__setPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return w.Logger.startActiveSpan("SetPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "SetPasswordOnClick"), i.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetPasswordOnClick"), e = t.callContext(e);
                        var l = new w.DataTypes.VariableHolder;
                        return w.Flow.executeAsyncFlow(function() {
                            return w.Flow.executeSequence(function() {
                                return n.variables.isPasswordSetIn ? t._addAccountOnClick$Action(e) : (n.flush(), I.tradingPlatformPasswordChange$Action("", n.variables.selectedAccountIn.platformAttr, n.variables.passwordInputValueVar, e).then(function(f) {
                                    l.value = f
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
                    s = this.idService;
                return w.Logger.startActiveSpan("Validate", function(i) {
                    i && (i.setAttribute("code.function", "Validate"), i.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), e = t.callContext(e), n.variables.passwordInputValueVar === "" ? (n.widgets.get(s.getId("Input_password")).validAttr = !1, n.widgets.get(s.getId("Input_password")).validationMessageAttr = "Password is required.") : (n.widgets.get(s.getId("Input_password")).validAttr = !0, n.widgets.get(s.getId("Input_password")).validationMessageAttr = w.BuiltinFunctions.nullTextIdentifier())
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
                    s = this.idService;
                return w.Logger.startActiveSpan("ForgotPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ForgotPasswordOnClick"), i.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
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
        get _passwordPolicyCompliant$Action() {
            return this.hasOwnProperty("__passwordPolicyCompliant$Action") || (this.__passwordPolicyCompliant$Action = function(e, n) {
                var t = this.model,
                    s = this.controller,
                    i = this.idService;
                return w.Logger.startActiveSpan("PasswordPolicyCompliant", function(l) {
                    l && (l.setAttribute("code.function", "PasswordPolicyCompliant"), l.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("PasswordPolicyCompliant"), n = s.callContext(n);
                        var f = new w.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars")));
                        f.value.isValidInLocal = e, t.variables.isPasswordValidVar = f.value.isValidInLocal
                    } finally {
                        l && l.end()
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
                    s = this.idService;
                return w.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), w.Flow.executeAsyncFlow(function() {
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
                    s = this.idService;
                return w.Logger.startActiveSpan("OnClickShowPassword", function(i) {
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
        addAccountOnClick$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("AddAccountOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "AddAccountOnClick"), t.setAttribute("outsystems.function.key", "38705109-adbe-4569-b38f-367b31b71405"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._addAccountOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        setPasswordOnClick$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("SetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetPasswordOnClick"), t.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        validate$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("Validate__proxy", function(t) {
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
            return w.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        passwordPolicyCompliant$Action(e, n) {
            var t = this.controller;
            return w.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(s) {
                s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._passwordPolicyCompliant$Action, n, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), w.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var n = this.controller;
            return w.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickShowPassword$Action, e)
                } finally {
                    t && t.end()
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
    o(r, "ControllerInner");
    let v = r;
    Xe = v, Xe.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: w.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var Xe, rr = new w.Controller.ControllerFactory(Xe, H);
var z = y,
    Ei = S.PlaceholderContent,
    Oi = S.IteratorPlaceholderContent,
    he = class he extends D.BaseWebBlock {
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
            return [Je]
        }
        get modelFactory() {
            return Lt
        }
        get controllerFactory() {
            return rr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = he.ifWidget,
                l = he.textWidget,
                f = he.asPrimitiveValue,
                h = he.getTranslation,
                m = this;
            return V.createElement("div", this.getRootNodeProperties(), V.createElement(U, {
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
                showPopup_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, V.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
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
            }, V.createElement(b, {
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
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), V.createElement(_, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), V.createElement(c, {
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
            }, V.createElement(b, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: r.getCachedValue(e.getId("Title.Value"), function() {
                    return r.variables.isPasswordSetIn ? "Enter your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " password to enable your " + k.getAccountType() + " account." : "Enable your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " account by setting a password. Use this password for all your " + (r.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " accounts."
                }, function() {
                    return r.variables.isPasswordSetIn
                }, function() {
                    return r.variables.selectedAccountIn.platformAttr
                }, function() {
                    return k.getAccountType()
                }),
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            }), V.createElement(c, {
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
            }, V.createElement(Ie, {
                _validationProps: {
                    validationService: n
                },
                enabled: !r.variables.isLoadingVar,
                extendedEvents: {
                    onBlur: o(function() {
                        var d = s.clone();
                        a.validate$Action(a.callContext(d))
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
                variable: r.createVariable(z.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(d) {
                    r.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "Input_password"
                },
                _widgetRecordProvider: t
            }), i(r.variables.showPasswordVar, !1, this, function() {
                return [V.createElement(_, {
                    extendedEvents: {
                        onClick: o(function() {
                            var d = s.clone();
                            a.onClickShowPassword$Action(a.callContext(d))
                        }, "onClick")
                    },
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
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
                return [V.createElement(_, {
                    extendedEvents: {
                        onClick: o(function() {
                            var d = s.clone();
                            a.onClickShowPassword$Action(a.callContext(d))
                        }, "onClick")
                    },
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
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
            })), V.createElement(c, {
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
                visible_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, V.createElement(Je, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    NeedToCheckSpecialCharacter: !0,
                    Password: r.variables.passwordInputValueVar,
                    Type: "CREATE"
                },
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
                    }, "_handleError"),
                    compliant$Action: o(function(d) {
                        var A = s.clone();
                        a.passwordPolicyCompliant$Action(d, a.callContext(A))
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
            })), V.createElement(c, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.forgotPasswordOnClick$Action(a.callContext(d))
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
                visible_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, V.createElement(p, {
                extendedProperties: {
                    style: "color: #333333; font-size: 14px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [l(h("CPbKy+0QdkiEybCU+HUEZg#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), V.createElement(c, {
                align: 0,
                animate: !1,
                style: "cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: t
            }, V.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 8px; margin-right: 16px; padding: 8px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                style: "display-flex align-items-flex-start",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "RegulatoryInformation"
                },
                _widgetRecordProvider: t
            }, V.createElement(_, {
                image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), V.createElement(b, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: r.getCachedValue(e.getId("6ELDmySp7Uqpvj+llw1hVw.Value"), function() {
                    return "You are adding your " + (r.variables.selectedAccountIn.platformAttr === "mt5" ? "Deriv " + z.BuiltinFunctions.toUpper(r.variables.selectedAccountIn.platformAttr) + " " + r.variables.selectedAccountIn.labelAttr : r.variables.selectedAccountIn.labelAttr) + " account under " + r.variables.selectedAccountIn.nameAttr + (r.variables.selectedAccountIn.regulatory_authorityAttr !== z.BuiltinFunctions.nullTextIdentifier() ? ", regulated by the " + r.variables.selectedAccountIn.regulatory_authorityAttr : "") + (r.variables.selectedAccountIn.licence_numberAttr !== z.BuiltinFunctions.nullTextIdentifier() ? " (licence no. " + r.variables.selectedAccountIn.licence_numberAttr + ")." : "")
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
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })), V.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "color: #333333; margin-right: 16px; margin-top: 24px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AcceptTermsAndCondition"
                },
                _widgetRecordProvider: t
            }, V.createElement(b, {
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
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus, r.variables._selectedAccountInDataFetchStatus)
            })), V.createElement(c, {
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
            }, V.createElement(W, {
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
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.setPasswordOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButton"
                },
                _widgetRecordProvider: t,
                enabled_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }, V.createElement(b, {
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
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(r.variables._isPasswordSetInDataFetchStatus)
            }))))))
        }
    };
o(he, "View");
var Qe = he,
    Ye = Qe;
var M = X(Q());
var ir = {};
var Y = y; {
    let r = class r extends Y.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ir);
            var s = this.controller;
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
                    s = this.idService;
                return Y.Logger.startActiveSpan("ResendEmailOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ResendEmailOnClick"), i.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var l = new Y.DataTypes.VariableHolder;
                        return Y.Flow.executeAsyncFlow(function() {
                            return n.flush(), I.verifyEmail$Action("trading_platform_mt5_password_reset", k.getSignupEmail(), e).then(function(f) {
                                l.value = f
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
                    s = this.idService;
                return Y.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), Y.Flow.executeAsyncFlow(function() {
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
            return Y.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._resendEmailOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return Y.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Y.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    nr = v
}
var nr, or = new Y.Controller.ControllerFactory(nr, H);
var Ve = y,
    Ki = S.PlaceholderContent,
    qi = S.IteratorPlaceholderContent,
    be = class be extends D.BaseWebBlock {
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
            return [fe]
        }
        get modelFactory() {
            return $t
        }
        get controllerFactory() {
            return or
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = be.ifWidget,
                l = be.textWidget,
                f = be.asPrimitiveValue,
                h = be.getTranslation,
                m = this;
            return M.createElement("div", this.getRootNodeProperties(), M.createElement(U, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Ve.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, M.createElement(c, {
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
            }, M.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Forgot password"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), M.createElement(_, {
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: Ve.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), M.createElement(c, {
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
            }, M.createElement(c, {
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
            }, M.createElement(_, {
                image: Ve.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email2.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), M.createElement(c, {
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
            }, M.createElement(b, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "We\u2019ve sent a verification link to " + k.getSignupEmail(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))), M.createElement(c, {
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
            }, M.createElement(c, {
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
            }, M.createElement(_, {
                image: Ve.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }), M.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, M.createElement(p, {
                extendedProperties: {
                    style: "margin-bottom: 10px;"
                },
                text: ["Didn't get an email? "],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }), M.createElement(p, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: ["- Check your spam folder."],
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), M.createElement(p, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: ["- Make sure the email isn\u2019t blocked by firewalls or filters."],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }))), M.createElement(fe, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            }), M.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #fff; border-width: 1px; color: #ff4450; height: 48px; margin-bottom: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.resendEmailOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResendEmailButton"
                },
                _widgetRecordProvider: t
            }, M.createElement(b, {
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
o(be, "View");
var Ze = be,
    tt = Ze;
var O = X(Q());
var ar = {};
var K = y; {
    let r = class r extends K.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ar);
            var s = this.controller;
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
                    s = this.idService;
                return K.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), K.Flow.executeAsyncFlow(function() {
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
                    s = this.idService;
                return K.Logger.startActiveSpan("ResetPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ResetPasswordOnClick"), i.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResetPasswordOnClick"), e = t.callContext(e);
                        var l = new K.DataTypes.VariableHolder;
                        return K.Flow.executeAsyncFlow(function() {
                            return n.flush(), I.tradingPlatformPasswordReset$Action(n.variables.passwordInputValueVar, n.variables.platformIn === "dxtrade" ? k.gettrading_platform_dxtrade_password_reset() : k.gettrading_platform_mt5_password_reset(), n.variables.platformIn, e).then(function(f) {
                                l.value = f
                            }).then(function() {
                                l.value.responseOut.trading_platform_password_resetAttr.equals(K.BuiltinFunctions.integerToLongInteger(1)) && (n.variables.isUpdatedVar = !0, n.variables.isVisibleIn = !1)
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
            return K.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        resetPasswordOnClick$Action(e) {
            var n = this.controller;
            return K.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResetPasswordOnClick"), t.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    sr = v
}
var sr, dr = new K.Controller.ControllerFactory(sr, H);
var E = X(Q());
var L = y,
    it = class it extends L.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, L.DataTypes.DataTypes.Record, function() {
                return L.DataTypes.ImmutableBase.getData(new L.SystemStructures.PasswordValidationResultRec)
            }, !1, L.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, L.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, L.DataTypes.DataTypes.Record, function() {
                return L.DataTypes.ImmutableBase.getData(new L.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, L.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, L.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, L.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, L.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, L.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, L.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, L.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(L.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(it, "VariablesRecord");
var Le = it;
Le.init();
var nt = class nt extends L.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(nt, "WidgetsRecord");
var rt = nt,
    ot = class ot extends L.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return Le
        }
        static getWidgetsRecordConstructor() {
            return rt
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(r) {
            "Password" in r && (this.variables.passwordIn = r.Password, "_passwordInDataFetchStatus" in r && (this.variables._passwordInDataFetchStatus = r._passwordInDataFetchStatus)), "Length" in r && (this.variables.lengthIn = r.Length, "_lengthInDataFetchStatus" in r && (this.variables._lengthInDataFetchStatus = r._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in r && (this.variables.hasAtLeastUppercaseAndLowercaseIn = r.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in r && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = r._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in r && (this.variables.hasAtLeastOneNumberIn = r.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in r && (this.variables._hasAtLeastOneNumberInDataFetchStatus = r._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in r && (this.variables.hasAtLeastOneSpecialCharacterIn = r.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in r && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = r._hasAtLeastOneSpecialCharacterInDataFetchStatus))
        }
    };
o(ot, "Model");
var $e = ot;
$e._hasValidationWidgetsValue = void 0;
var cr = new L.Model.ModelFactory($e);

function at(v, r, a, e) {
    function n(f) {
        return f.toUpperCase() != f
    }
    o(n, "hasLowerCase");

    function t(f) {
        return /[A-Z]/.test(f)
    }
    o(t, "containsUppercase");

    function s(f) {
        return /\d/.test(f)
    }
    o(s, "hasNumber");

    function i(f) {
        return f.length >= v.Length
    }
    o(i, "hasGoodLength");

    function l(f) {
        var h = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return h.test(f)
    }
    o(l, "hasSpecialChar"), v.HasLowerCase = v.RequiresLowerCaseAndUpperCase ? n(v.String) : !0, v.HasUpperCase = v.RequiresLowerCaseAndUpperCase ? t(v.String) : !0, v.HasNumber = v.RequiresNumber ? s(v.String) : !0, v.hasGoodLength = v.RequiresNumber ? i(v.String) : !0, v.hasSpecialChar = v.RequiresSpecialChar ? l(v.String) : !0
}
o(at, "default");
var P = y; {
    let r = class r extends P.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t);
            var s = this.controller;
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
                    s = this.idService;
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
                    s = this.idService;
                return P.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    return i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), i.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), i.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var l = new P.DataTypes.VariableHolder;
                        return P.Flow.executeAsyncFlow(function() {
                            if (n.variables.isPasswordEmptyVar = P.BuiltinFunctions.length(n.variables.passwordIn) === 0, l.value = P.Logger.startActiveSpan("checkValid", function(f) {
                                    f && (f.setAttribute("code.function", "checkValid"), f.setAttribute("outsystems.function.key", "2db79931-6cd1-41a6-a1b1-6c0293e23188"), f.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), f.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(at, "checkValid", "OnParametersChanged", {
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
                                        }, function(h) {
                                            var m = new(t.constructor.getVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                            return m.hasLowerCaseOut = P.DataConversion.JSNodeParamConverter.from(h.HasLowerCase, P.DataTypes.DataTypes.Boolean), m.hasUpperCaseOut = P.DataConversion.JSNodeParamConverter.from(h.HasUpperCase, P.DataTypes.DataTypes.Boolean), m.hasNumberOut = P.DataConversion.JSNodeParamConverter.from(h.HasNumber, P.DataTypes.DataTypes.Boolean), m.hasGoodLengthOut = P.DataConversion.JSNodeParamConverter.from(h.hasGoodLength, P.DataTypes.DataTypes.Boolean), m.hasSpecialCharOut = P.DataConversion.JSNodeParamConverter.from(h.hasSpecialChar, P.DataTypes.DataTypes.Boolean), m
                                        }, {}, {})
                                    } finally {
                                        f && f.end()
                                    }
                                }, 1), n.variables.passwordValidationResultVar.isValidAttr = l.value.hasLowerCaseOut && l.value.hasUpperCaseOut && l.value.hasNumberOut && l.value.hasGoodLengthOut && l.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !l.value.hasLowerCaseOut, n.variables.passwordValidationResultVar.missingMinimumLengthAttr = !l.value.hasGoodLengthOut, n.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !l.value.hasUpperCaseOut, n.variables.passwordValidationResultVar.missingNumberAttr = !l.value.hasNumberOut, n.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !l.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.isValidAttr) {
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
                    s = this.idService;
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
                    s = this.idService;
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
            return jt.defaultTimeout
        }
    };
    o(r, "ControllerInner");
    let v = r;
    st = v, st.registerVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var st, lr = new P.Controller.ControllerFactory(st, Kt);
var En = S.PlaceholderContent,
    On = S.IteratorPlaceholderContent,
    _e = class _e extends D.BaseWebBlock {
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
            return cr
        }
        get controllerFactory() {
            return lr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = _e.ifWidget,
                l = _e.textWidget,
                f = _e.asPrimitiveValue,
                h = _e.getTranslation,
                m = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(c, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
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
                return [E.createElement(c, {
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
                }, E.createElement(c, {
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
                    return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                })), E.createElement(c, {
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
                }, E.createElement(p, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least "],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), E.createElement(b, {
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
                }), E.createElement(p, {
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
                return [E.createElement(c, {
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
                }, E.createElement(c, {
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
                    return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                })), E.createElement(c, {
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
                }, E.createElement(p, {
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
                return [E.createElement(c, {
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
                }, E.createElement(c, {
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
                    return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                })), E.createElement(c, {
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
                }, E.createElement(p, {
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
                return [E.createElement(c, {
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
                }, E.createElement(c, {
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
                    return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                        return [E.createElement(T, {
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
                })), E.createElement(c, {
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
                }, E.createElement(p, {
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
o(_e, "View");
var dt = _e,
    ct = dt;
var se = y,
    Hn = S.PlaceholderContent,
    Nn = S.IteratorPlaceholderContent,
    ye = class ye extends D.BaseWebBlock {
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
            return [ct, fe]
        }
        get modelFactory() {
            return Wt
        }
        get controllerFactory() {
            return dr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = ye.ifWidget,
                l = ye.textWidget,
                f = ye.asPrimitiveValue,
                h = ye.getTranslation,
                m = this;
            return O.createElement("div", this.getRootNodeProperties(), O.createElement(U, {
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
                showPopup_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, O.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
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
            }, O.createElement(b, {
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
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }), O.createElement(_, {
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            })), O.createElement(c, {
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
            }, O.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column display-flex gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CreatePasswordContent3"
                },
                _widgetRecordProvider: t
            }, O.createElement(c, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer4"
                },
                _widgetRecordProvider: t
            }, O.createElement(b, {
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
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), O.createElement(Ie, {
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
                prompt: "Enter your password",
                style: "form-control",
                variable: r.createVariable(se.DataTypes.DataTypes.Text, r.variables.passwordInputValueVar, function(d) {
                    r.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "PasswordInput7"
                },
                _widgetRecordProvider: t
            }), O.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LiveCheckboxContainer5"
                },
                _widgetRecordProvider: t
            }, O.createElement(ct, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    Password: r.variables.passwordInputValueVar
                },
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            })))), O.createElement(c, {
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
            }, O.createElement(fe, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            }), O.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.resetPasswordOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, O.createElement(b, {
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
            })), O.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #FFF; border-color: #ff4450; border-radius: 100px; border-width: 1px; color: #ff4450; font-weight: normal; height: 48px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.closeOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CancelButton"
                },
                _widgetRecordProvider: t
            }, O.createElement(b, {
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
            })))), O.createElement(U, {
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
            }, O.createElement(c, {
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
            }, O.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Password updated"],
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), O.createElement(_, {
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), O.createElement(c, {
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
            }, O.createElement(c, {
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
            }, O.createElement(_, {
                image: se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.PasswordSaved.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            })), O.createElement(c, {
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
            }, O.createElement(b, {
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
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            })), O.createElement(c, {
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
            }, O.createElement(b, {
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
                value_dataFetchStatus: se.Model.calculateDataFetchStatus(r.variables._platformInDataFetchStatus)
            }))), O.createElement(c, {
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
            }, O.createElement(fe, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            }), O.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.closeOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "OK"
                },
                _widgetRecordProvider: t
            }, O.createElement(b, {
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
o(ye, "View");
var lt = ye,
    ut = lt;
var N = X(Q());
var ur = {};
var We = y; {
    let r = class r extends We.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ur);
            var s = this.controller;
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
                    s = this.idService;
                return We.Logger.startActiveSpan("HeaderOnClick", function(i) {
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
            return We.Logger.startActiveSpan("HeaderOnClick__proxy", function(t) {
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
    o(r, "ControllerInner");
    let v = r;
    fr = v
}
var fr, vr = new We.Controller.ControllerFactory(fr, H);
var mr = y,
    io = S.PlaceholderContent,
    no = S.IteratorPlaceholderContent,
    Pe = class Pe extends D.BaseWebBlock {
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
            return Ht
        }
        get controllerFactory() {
            return vr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Pe.ifWidget,
                l = Pe.textWidget,
                f = Pe.asPrimitiveValue,
                h = Pe.getTranslation,
                m = this;
            return N.createElement("div", this.getRootNodeProperties(), N.createElement(c, {
                align: 0,
                animate: !1,
                style: "important-notes",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, N.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var d = s.clone();
                        a.headerOnClick$Action(a.callContext(d))
                    }, "onClick")
                },
                style: "display-flex align-items-center justify-content-space-between cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, N.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: ["Important notes"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), N.createElement(c, {
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
                return [N.createElement(_, {
                    image: mr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ChevronUpSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [N.createElement(_, {
                    image: mr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })]
            }))), i(r.variables.showInfoVar, !0, this, function() {
                return [N.createElement(c, {
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
                }, N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: ["1. Log in to cTrader with your Deriv account email and password.", N.createElement("br"), "2. You can have up to 5 Deriv cTrader accounts.", N.createElement("br"), "3. You can make any cTrader account a strategy provider account. This change is permanent.", N.createElement("br"), "4. If your strategy remains inactive for 30 days, it will be deleted automatically. You can create a new strategy on the same account afterwards.", N.createElement("br"), "5. You can impose fees when setting up a strategy.", N.createElement("br"), '6. Assign one of your existing accounts to process fees. The same "Account for Fees" can support multiple fee-based strategies.', N.createElement("br"), '7. Free strategies do not require an "Account for Fees".'],
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }), N.createElement(c, {
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
                }, N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: ["Note: An account "],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: ["can't be "],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: ["both a strategy provider and a fee collection account. "],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: ["Keep at least one account free from being a strategy provider "],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), N.createElement(p, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: ["to manage fee-based strategies effectively."],
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
o(Pe, "View");
var ft = Pe,
    vt = ft;
var Re = X(Q());
var gr = {};
var pr = y; {
    let r = class r extends pr.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, gr);
            var s = this.controller;
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
    o(r, "ControllerInner");
    let v = r;
    hr = v
}
var hr, br = new pr.Controller.ControllerFactory(hr, H);
var mt = y,
    Co = S.PlaceholderContent,
    wo = S.IteratorPlaceholderContent,
    Ce = class Ce extends D.BaseWebBlock {
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
            return Nt
        }
        get controllerFactory() {
            return br
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Ce.ifWidget,
                l = Ce.textWidget,
                f = Ce.asPrimitiveValue,
                h = Ce.getTranslation,
                m = this;
            return Re.createElement("div", this.getRootNodeProperties(), Re.createElement(c, {
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
                visible_dataFetchStatus: mt.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
            }, Re.createElement(_, {
                image: mt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InfoBlue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Re.createElement(b, {
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
                value_dataFetchStatus: mt.Model.calculateDataFetchStatus(r.variables._infoMessageInDataFetchStatus)
            })))
        }
    };
o(Ce, "View");
var gt = Ce,
    de = gt;
var g = X(Q());
var kr = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "et",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible pour",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Mot de passe oubli\xE9 ?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfert"
    },
    _r = {
        "fr-FR": {
            translations: kr,
            isRTL: !1
        }
    };

function pt(v, r, a) {
    window.open("https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux", "_blank")
}
o(pt, "default");

function ht(v, r, a, e) {
    v.FormattedLogin = v.SelectedAccountLogin.slice(3)
}
o(ht, "default");

function bt(v, r, a, e) {
    window.open(v.WebtraderUrl + "?login=" + v.Login + "&server=" + v.Server, "_blank")
}
o(bt, "default");

function _t(v, r, a, e) {
    navigator.clipboard.writeText(v.TextToCopy)
}
o(_t, "default");
var C = y; {
    let r = class r extends C.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, _r);
            var s = this.controller;
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
                    s = this.idService;
                return C.Logger.startActiveSpan("CloseOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "CloseOnClick"), i.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
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
                    s = this.idService;
                return C.Logger.startActiveSpan("Linux_OnClick", function(i) {
                    i && (i.setAttribute("code.function", "Linux_OnClick"), i.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Linux_OnClick"), e = t.callContext(e), C.Logger.startActiveSpan("JavaScript1", function(l) {
                            l && (l.setAttribute("code.function", "JavaScript1"), l.setAttribute("outsystems.function.key", "657bc2ad-bd0a-4fb2-b9e2-73831402464a"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(pt, "JavaScript1", "Linux_OnClick", null, function(f) {}, {}, {})
                            } finally {
                                l && l.end()
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
                    s = this.idService;
                return C.Logger.startActiveSpan("FormatLogin", function(i) {
                    i && (i.setAttribute("code.function", "FormatLogin"), i.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FormatLogin"), e = t.callContext(e);
                        var l = new C.DataTypes.VariableHolder;
                        l.value = C.Logger.startActiveSpan("FormatDynamicLogin", function(f) {
                            f && (f.setAttribute("code.function", "FormatDynamicLogin"), f.setAttribute("outsystems.function.key", "9cff8aa6-5c38-466f-9b25-9407fcd47bf5"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ht, "FormatDynamicLogin", "FormatLogin", {
                                    SelectedAccountLogin: C.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.loginAttr, C.DataTypes.DataTypes.Text),
                                    FormattedLogin: C.DataConversion.JSNodeParamConverter.to("", C.DataTypes.DataTypes.Text)
                                }, function(h) {
                                    var m = new(t.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult"));
                                    return m.formattedLoginOut = C.DataConversion.JSNodeParamConverter.from(h.FormattedLogin, C.DataTypes.DataTypes.Text), m
                                }, {}, {})
                            } finally {
                                f && f.end()
                            }
                        }, 1), n.variables.displayLoginVar = l.value.formattedLoginOut
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
                    s = this.idService;
                return C.Logger.startActiveSpan("WebterminalOnClick", function(i) {
                    i && (i.setAttribute("code.function", "WebterminalOnClick"), i.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), C.Logger.startActiveSpan("windowOpen", function(l) {
                            l && (l.setAttribute("code.function", "windowOpen"), l.setAttribute("outsystems.function.key", "57324806-8c70-436a-8a40-9a348d4f656a"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(bt, "windowOpen", "WebterminalOnClick", {
                                    Login: C.DataConversion.JSNodeParamConverter.to(n.variables.displayLoginVar, C.DataTypes.DataTypes.Text),
                                    Server: C.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.server_infoAttr.environmentAttr, C.DataTypes.DataTypes.Text),
                                    WebtraderUrl: C.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.white_label_linksAttr.webtrader_urlAttr, C.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                l && l.end()
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
                    s = this.idService;
                return C.Logger.startActiveSpan("DownloadAppOnClick", function(i) {
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
                    s = this.controller,
                    i = this.idService;
                return C.Logger.startActiveSpan("CopyToClipboard", function(l) {
                    l && (l.setAttribute("code.function", "CopyToClipboard"), l.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("CopyToClipboard"), n = s.callContext(n);
                        var f = new C.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars")));
                        f.value.textToCopyInLocal = e, C.Logger.startActiveSpan("JavaScript1", function(h) {
                            h && (h.setAttribute("code.function", "JavaScript1"), h.setAttribute("outsystems.function.key", "f3bd06ff-fdb9-4475-aac5-755e9d375a61"), h.setAttribute("outsystems.function.owner.name", "tradershub"), h.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(_t, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: C.DataConversion.JSNodeParamConverter.to(f.value.textToCopyInLocal, C.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                h && h.end()
                            }
                        }, 1), C.FeedbackMessageService.showFeedbackMessage("Copied!", 0)
                    } finally {
                        l && l.end()
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
                    s = this.idService;
                return C.Logger.startActiveSpan("ForgotPasswordOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "ForgotPasswordOnClick"), i.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), C.Flow.executeAsyncFlow(function() {
                            return Ft.consoleLog$Action("ForgotPasswordOnClick Platform " + n.variables.selectedAccountIn.platformAttr, 0, e), t.forgotPasswordEvent$Action(e)
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
            return C.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linux_OnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("Linux_OnClick__proxy", function(t) {
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
            return C.Logger.startActiveSpan("FormatLogin__proxy", function(t) {
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
            return C.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
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
            return C.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
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
            return C.Logger.startActiveSpan("CopyToClipboard__proxy", function(s) {
                s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, n, e)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        forgotPasswordOnClick$Action(e) {
            var n = this.controller;
            return C.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), C.Flow.tryFinally(function() {
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
                    s = this.idService;
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
    o(r, "ControllerInner");
    let v = r;
    He = v, He.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult", [{
        name: "FormattedLogin",
        attrName: "formattedLoginOut",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), He.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: C.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var He, yr = new C.Controller.ControllerFactory(He, H);
var j = y,
    ia = S.PlaceholderContent,
    na = S.IteratorPlaceholderContent,
    we = class we extends D.BaseWebBlock {
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
            return [de]
        }
        get modelFactory() {
            return Mt
        }
        get controllerFactory() {
            return yr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = we.ifWidget,
                l = we.textWidget,
                f = we.asPrimitiveValue,
                h = we.getTranslation,
                m = this;
            return g.createElement("div", this.getRootNodeProperties(), g.createElement(U, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, g.createElement(c, {
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
            }, g.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Account details"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), g.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
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
            }, g.createElement(_, {
                image: j.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            }))), g.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalContent"
                },
                _widgetRecordProvider: t
            }, g.createElement(c, {
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
            }, g.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, g.createElement(_, {
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
                url_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), g.createElement(c, {
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
            }, g.createElement(b, {
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
                value_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), g.createElement(De, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, g.createElement(b, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), g.createElement(b, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), g.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: o(function() {
                    try {
                        j.Navigation.navigateTo(j.Navigation.generateScreenURL("tradershub", "wallets", {}), j.Transitions.createTransition(j.Transitions.TransitionAnimation.Fade), null, !0)
                    } catch (d) {
                        if (d.name !== "RedirectOccurredException") throw d
                    }
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, g.createElement(_, {
                image: j.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), g.createElement(p, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [l(h("stfUk9qHTUuvEO+Qfaqcig#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), g.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AccountInfoRow2"
                },
                _widgetRecordProvider: t
            }, g.createElement(c, {
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
            }, g.createElement(c, {
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
            }, g.createElement(b, {
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
            })), g.createElement(c, {
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
            }, g.createElement(b, {
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
                value_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), g.createElement(T, {
                extendedEvents: {
                    onClick: o(function() {
                        var d = s.clone();
                        a.copyToClipboard$Action(r.variables.selectedAccountIn.landing_companyAttr, a.callContext(d))
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
            }))), g.createElement(c, {
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
            }, g.createElement(c, {
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
            }, g.createElement(b, {
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
            })), g.createElement(c, {
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
            }, g.createElement(b, {
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
                value_dataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), g.createElement(T, {
                extendedEvents: {
                    onClick: o(function() {
                        var d = s.clone();
                        a.copyToClipboard$Action(r.variables.selectedAccountIn.server_infoAttr.environmentAttr, a.callContext(d))
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
            }))), g.createElement(c, {
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
            }, g.createElement(c, {
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
            }, g.createElement(b, {
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
            })), g.createElement(c, {
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
            }, g.createElement(b, {
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
            }), g.createElement(T, {
                extendedEvents: {
                    onClick: o(function() {
                        var d = s.clone();
                        a.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, a.callContext(d))
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
            })))), g.createElement(c, {
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
            }, g.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.forgotPasswordOnClick$Action(a.callContext(d))
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
            }, g.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [l(h("kbdHtooVbUi8Rr8jct4z_A#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }))), g.createElement(de, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: "Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours. Service may be affected.",
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: j.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            })), g.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("Mt5TradeModalFooter.class"), function() {
                        return $.isPhone$Action(s).isPhoneOut ? "cfd-modal-sticky-footer" : ""
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
            }, g.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, g.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #1a78cb; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var d = s.clone();
                    a.downloadAppOnClick$Action(a.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return $.isPhone$Action(s).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, g.createElement(T, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "43"
                },
                _widgetRecordProvider: t
            }), g.createElement(b, {
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
            })), g.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "background:#f3f6f8" : "background:#1a78cb")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var d = s.clone();
                    a.webterminalOnClick$Action(a.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, g.createElement(T, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("ruZVukZi8Ee4oehk0bQhGA.style"), function() {
                        return $.isPhone$Action(s).isPhoneOut ? "color:black" : "color:white"
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
            }), g.createElement(b, {
                extendedProperties: {
                    style: "font-size: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "color:black" : "color:white")
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
            })), g.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #f3f6f8; color: #222; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var d = s.clone();
                    a.downloadAppOnClick$Action(a.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("DesktopDownloadAppLink2.Visible"), function() {
                    return $.isDesktop$Action(s).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "DesktopDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, g.createElement(T, {
                icon: "desktop",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "49"
                },
                _widgetRecordProvider: t
            }), g.createElement(b, {
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
            }))), g.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
                },
                style: "display-flex justify-content-center column-gap-xs align-items-baseline",
                visible: r.getCachedValue(e.getId("AvailableForMacOSAndLinuxText2.Visible"), function() {
                    return $.isDesktop$Action(s).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "AvailableForMacOSAndLinuxText2"
                },
                _widgetRecordProvider: t
            }, g.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [l(h("bnNmCWFI7kujP2WEB9S+gg#Value", "Available for"))],
                _idProps: {
                    service: e,
                    uuid: "52"
                },
                _widgetRecordProvider: t
            }), g.createElement(ue, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: o(function() {
                    var d = s.clone();
                    a.downloadAppOnClick$Action(a.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Macos"
                },
                _widgetRecordProvider: t
            }, g.createElement(p, {
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
            })), g.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [l(h("S3d3t1eSmUm5WVx_6xyWnw#Value", " and "))],
                _idProps: {
                    service: e,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            }), g.createElement(ue, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: o(function() {
                    var d = s.clone();
                    a.linux_OnClick$Action(a.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }, g.createElement(p, {
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
            }))), g.createElement(c, {
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
                    return $.isDesktop$Action(s).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, g.createElement(_, {
                gridProperties: {
                    width: "80px"
                },
                image: j.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mt5Onelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "59"
                },
                _widgetRecordProvider: t
            }), g.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [l(h("jaHw+m0lXEyM3mg6fxY1lw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText2"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
o(we, "View");
var yt = we,
    Pt = yt;
var x = X(Q());
var Ir = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Mot de passe oubli\xE9 ?",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfert"
    },
    Pr = {
        "fr-FR": {
            translations: Ir,
            isRTL: !1
        }
    };

function Ct(v, r, a, e) {
    window.open(v.AccountType = "https://dx.deriv.com/", "_blank")
}
o(Ct, "default");

function wt(v, r, a, e) {
    navigator.clipboard.writeText(v.TextToCopy)
}
o(wt, "default");
var F = y; {
    let r = class r extends F.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Pr);
            var s = this.controller;
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
                    s = this.idService;
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
                    s = this.idService;
                return F.Logger.startActiveSpan("WebterminalOnClick", function(i) {
                    i && (i.setAttribute("code.function", "WebterminalOnClick"), i.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), F.Logger.startActiveSpan("DxWebterminal", function(l) {
                            l && (l.setAttribute("code.function", "DxWebterminal"), l.setAttribute("outsystems.function.key", "e255b3cd-27fd-4e18-9e8d-65a70a49caab"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(Ct, "DxWebterminal", "WebterminalOnClick", {
                                    AccountType: F.DataConversion.JSNodeParamConverter.to(k.getAccountType(), F.DataTypes.DataTypes.Text)
                                }, function(f) {}, {}, {})
                            } finally {
                                l && l.end()
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
                    s = this.idService;
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
                    s = this.idService;
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
                    s = this.controller,
                    i = this.idService;
                return F.Logger.startActiveSpan("CopyToClipboard", function(l) {
                    l && (l.setAttribute("code.function", "CopyToClipboard"), l.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("CopyToClipboard"), n = s.callContext(n);
                        var f = new F.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars")));
                        f.value.textToCopyInLocal = e, F.Logger.startActiveSpan("JavaScript1", function(h) {
                            h && (h.setAttribute("code.function", "JavaScript1"), h.setAttribute("outsystems.function.key", "fcdde90d-dd04-4fbb-9c69-59f7b4b83a9f"), h.setAttribute("outsystems.function.owner.name", "tradershub"), h.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(wt, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: F.DataConversion.JSNodeParamConverter.to(f.value.textToCopyInLocal, F.DataTypes.DataTypes.Text)
                                }, function(m) {}, {}, {})
                            } finally {
                                h && h.end()
                            }
                        }, 1), F.FeedbackMessageService.showFeedbackMessage("Copied!", 0)
                    } finally {
                        l && l.end()
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
            return F.Logger.startActiveSpan("CopyToClipboard__proxy", function(s) {
                s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._copyToClipboard$Action, n, e)
                } finally {
                    s && s.end()
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
    o(r, "ControllerInner");
    let v = r;
    At = v, At.registerVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: F.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var At, Cr = new F.Controller.ControllerFactory(At, H);
var ne = y,
    Ra = S.PlaceholderContent,
    ka = S.IteratorPlaceholderContent,
    Ae = class Ae extends D.BaseWebBlock {
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
            return [de]
        }
        get modelFactory() {
            return Bt
        }
        get controllerFactory() {
            return Cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Ae.ifWidget,
                l = Ae.textWidget,
                f = Ae.asPrimitiveValue,
                h = Ae.getTranslation,
                m = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(U, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: r.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, x.createElement(c, {
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
            }, x.createElement(p, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Account details"],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), x.createElement(_, {
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.closeOnClick$Action(a.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: ne.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon3"
                },
                _widgetRecordProvider: t
            })), x.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalContent"
                },
                _widgetRecordProvider: t
            }, x.createElement(c, {
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
            }, x.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, x.createElement(_, {
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
                url_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), x.createElement(c, {
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
            }, x.createElement(b, {
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
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), x.createElement(De, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, x.createElement(b, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), x.createElement(b, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: r.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            })))), x.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.closeOnClick$Action(a.callContext(d))
                    })
                }, "onClick"),
                style: "btn gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TransferButton2"
                },
                _widgetRecordProvider: t
            }, x.createElement(_, {
                image: ne.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), x.createElement(p, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [l(h("0A55Iqpuk0ym_YWurf8vgA#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), x.createElement(c, {
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
            }, x.createElement(c, {
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
            }, x.createElement(b, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: "Username",
                _idProps: {
                    service: e,
                    name: "UsernameLabel"
                },
                _widgetRecordProvider: t
            })), x.createElement(c, {
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
            }, x.createElement(b, {
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
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._selectedAccountInDataFetchStatus)
            }), x.createElement(T, {
                extendedEvents: {
                    onClick: o(function() {
                        var d = s.clone();
                        a.copyToClipboard$Action(r.variables.selectedAccountIn.loginAttr, a.callContext(d))
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
            }))), x.createElement(c, {
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
            }, x.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.forgotPasswordOnClick$Action(a.callContext(d))
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
            }, x.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [l(h("zyRf+i4DOEay7byfR1VdqQ#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            }))), x.createElement(de, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: "Weekly maintenance: Sundays at 06:00 GMT for up to 2 hours. Service may be affected.",
                    IsDowntime: r.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: ne.Model.calculateDataFetchStatus(r.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
            })), x.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: r.getCachedValue(e.getId("DxtradeTradeModalFooter.class"), function() {
                        return $.isPhone$Action(s).isPhoneOut ? "cfd-modal-sticky-footer" : ""
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
            }, x.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, x.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450; color: #f3f6f8; font-weight: normal; height: 48px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var d = s.clone();
                    a.downloadAppOnClick$Action(a.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: r.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return $.isPhone$Action(s).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, x.createElement(T, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }), x.createElement(b, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "Deriv X app",
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            })), x.createElement(W, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "background:#f3f6f8" : "background:#ff4450")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: o(function() {
                    var d = s.clone();
                    a.webterminalOnClick$Action(a.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, x.createElement(T, {
                extendedProperties: {
                    style: r.getCachedValue(e.getId("n_TJr+KecE+HkzWKnzBg3w.style"), function() {
                        return $.isPhone$Action(s).isPhoneOut ? "color:black" : "color:white"
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
            }), x.createElement(b, {
                extendedProperties: {
                    style: "font-size: 16px;" + ($.isPhone$Action(s).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: "Deriv X web terminal",
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }))), x.createElement(c, {
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
                    return $.isDesktop$Action(s).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, x.createElement(_, {
                gridProperties: {
                    width: "80px"
                },
                image: ne.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dxtradeOnelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }), x.createElement(p, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [l(h("mrqnSVBRmE6If_BJN329Mw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText3"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
o(Ae, "View");
var St = Ae,
    xt = St;
var B = X(Q());
var wr = {};
var ce = y; {
    let r = class r extends ce.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, wr);
            var s = this.controller;
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
                    s = this.idService;
                return ce.Logger.startActiveSpan("RedirectToAction", function(i) {
                    return i && (i.setAttribute("code.function", "RedirectToAction"), i.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ce.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RedirectToAction"), e = t.callContext(e), ce.Flow.executeAsyncFlow(function() {
                            return ce.Flow.executeSequence(function() {
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
            return ce.Logger.startActiveSpan("RedirectToAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RedirectToAction"), t.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ce.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    Ar = v
}
var Ar, Sr = new ce.Controller.ControllerFactory(Ar, H);
var re = y,
    ja = S.PlaceholderContent,
    Ka = S.IteratorPlaceholderContent,
    Se = class Se extends D.BaseWebBlock {
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
            return zt
        }
        get controllerFactory() {
            return Sr
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Se.ifWidget,
                l = Se.textWidget,
                f = Se.asPrimitiveValue,
                h = Se.getTranslation,
                m = this;
            return B.createElement("div", this.getRootNodeProperties(), B.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.redirectToAction$Action(a.callContext(d))
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
                style_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, i(r.variables.statusIn === "In Review", !1, this, function() {
                return [B.createElement(c, {
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
                }, B.createElement(_, {
                    image: re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InReview.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(p, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: ["In review"],
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), i(r.variables.statusIn === "Verified" || r.variables.statusIn === "Completed", !1, this, function() {
                return [B.createElement(c, {
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
                }, B.createElement(_, {
                    image: re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.IconSuccessful.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(b, {
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
                    value_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
                }))]
            }, function() {
                return []
            }), i(r.variables.statusIn === "Failed", !1, this, function() {
                return [B.createElement(c, {
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
                }, B.createElement(_, {
                    image: re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Error.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(p, {
                    extendedProperties: {
                        style: "color: #8C1D1D; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: ["Failed"],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), B.createElement(c, {
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
                style_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus)
            }, B.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, B.createElement(_, {
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
                url_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._iconInDataFetchStatus)
            }), B.createElement(b, {
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
                value_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            })), i(r.variables.isDisabledIn, !1, this, function() {
                return []
            }, function() {
                return [B.createElement(_, {
                    image: re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                })]
            })), B.createElement(b, {
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
                style_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._isDisabledInDataFetchStatus),
                value_dataFetchStatus: re.Model.calculateDataFetchStatus(r.variables._descriptionInDataFetchStatus)
            })))
        }
    };
o(Se, "View");
var Et = Se,
    Ot = Et;
var q = X(Q());
var xr = {};
var xe = y; {
    let r = class r extends xe.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, xr);
            var s = this.controller;
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
                    s = this.idService;
                return xe.Logger.startActiveSpan("OnClose", function(i) {
                    return i && (i.setAttribute("code.function", "OnClose"), i.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), xe.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClose"), e = t.callContext(e), xe.Flow.executeAsyncFlow(function() {
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
            return xe.Logger.startActiveSpan("OnClose__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), xe.Flow.tryFinally(function() {
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
    o(r, "ControllerInner");
    let v = r;
    Er = v
}
var Er, Or = new xe.Controller.ControllerFactory(Er, H);
var ke = y,
    us = S.PlaceholderContent,
    fs = S.IteratorPlaceholderContent,
    Ee = class Ee extends D.BaseWebBlock {
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
            return Ut
        }
        get controllerFactory() {
            return Or
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Ee.ifWidget,
                l = Ee.textWidget,
                f = Ee.asPrimitiveValue,
                h = Ee.getTranslation,
                m = this;
            return q.createElement("div", this.getRootNodeProperties(), q.createElement(U, {
                showPopup: r.variables.isVisibleIn,
                style: "popup-dialog warning-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: ke.Model.calculateDataFetchStatus(r.variables._isVisibleInDataFetchStatus)
            }, q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupHeader"
                },
                _widgetRecordProvider: t
            }, q.createElement(_, {
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var d = s.clone();
                            return a.onClose$Action(a.callContext(d))
                        })
                    }, "onClick")
                },
                image: ke.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), q.createElement(c, {
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
            }, q.createElement(_, {
                image: ke.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCircleExclamation.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }), q.createElement(c, {
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
                visible_dataFetchStatus: ke.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, q.createElement(p, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Account unavailable"],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), q.createElement(p, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Check back in a few minutes by refreshing the page."],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), q.createElement(c, {
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
                visible_dataFetchStatus: ke.Model.calculateDataFetchStatus(r.variables._statusInDataFetchStatus)
            }, q.createElement(p, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Maintenance in progress"],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), q.createElement(p, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Some services may be affected and your balance is temporarily unavailable."],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))), q.createElement(W, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: o(function() {
                    return Promise.resolve().then(function() {
                        var d = s.clone();
                        return a.onClose$Action(a.callContext(d))
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
o(Ee, "View");
var Rt = Ee,
    kt = Rt;
var R = y,
    It = S.PlaceholderContent,
    le = S.IteratorPlaceholderContent,
    Oe = class Oe extends D.BaseWebScreen {
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
            return [Me, Be, ze, Ue, Ke, Te, Ge, Ye, tt, ut, vt, de, Pt, xt, Ot, kt]
        }
        get modelFactory() {
            return Gt
        }
        get controllerFactory() {
            return Jt
        }
        get title() {
            return D.BaseWebScreen.getTranslation("udH3+2_3H0u60V+POOITRA#Title", "CFDs")
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                e = this.idService,
                n = a.validationService,
                t = this.widgetsRecordProvider,
                s = a.callContext(),
                i = Oe.ifWidget,
                l = Oe.textWidget,
                f = Oe.asPrimitiveValue,
                h = Oe.getTranslation,
                m = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(Me, {
                getOwnerSpan: o(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: o(function(d) {
                        a.handleError(d)
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
                    content: new It(function() {
                        return [u.createElement(Be, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(c, {
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
                        }, u.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Title"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            style: "main-title",
                            text: [l(h("wDlKcbQEL0SpHAWlCti6Kw#Value", "CFDs trading"))],
                            _idProps: {
                                service: e,
                                name: "CFDsTrading"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(ze, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Position: r.getCachedValue(e.getId("BSYlSQCImU6gkLf69PXoLA.Position"), function() {
                                    return $.isDesktop$Action(s).isDesktopOut ? Ne.position.right : Ne.position.bottom
                                })
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new It(function() {
                                    return [u.createElement(c, {
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
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    }, u.createElement(_, {
                                        image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                tooltip: new It(function() {
                                    return [u.createElement(p, {
                                        extendedProperties: {
                                            style: "line-height: 21px;"
                                        },
                                        text: [l(h("gcgQSS26UkK60r3pOIaf5g#Value", "Trade bigger positions with less capital on a wide range of global markets."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                })
                            },
                            _dependencies: []
                        })), u.createElement(Ue, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                realClickEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.setRealValue$Action(a.callContext(d))
                                    })
                                }, "realClickEvent$Action"),
                                demoClickEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.setDemoValue$Action(a.callContext(d))
                                    })
                                }, "demoClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "9",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), u.createElement(c, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: r.getCachedValue(e.getId("MyAccountsContainer.Visible"), function() {
                                return k.getAuthToken() !== R.BuiltinFunctions.nullTextIdentifier() && !r.variables.dataLoadingVar && !r.variables.createdCFDAccountsVar.isEmpty
                            }, function() {
                                return k.getAuthToken()
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
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [l(h("K34fG267aE23l2enpmqezA#Value", "My accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }), i(r.variables.dataLoadingVar, !1, this, function() {
                            return [u.createElement(oe, {
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
                                source_dataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getMockDataAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new le(function(d, A) {
                                        return [u.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            style: "skeleton my-account-loader",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, s, e, "1")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [u.createElement(oe, {
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
                                    content: new le(function(d, A) {
                                        return [u.createElement(Ke, {
                                            getOwnerSpan: o(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).statusAttr,
                                                ProductIcon: r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).iconAttr,
                                                Name: r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).labelAttr,
                                                Balance: r.getCachedValue(d.getId("T1RGubqgfEeSgjX8KERkdw.Balance"), function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).identifierAttr === "ctrader_standard" ? r.variables.totalCTraderBalanceVar : r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).display_balanceAttr + " " + r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).currencyAttr
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).identifierAttr
                                                }, function() {
                                                    return r.variables.totalCTraderBalanceVar
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).display_balanceAttr
                                                }, function() {
                                                    return r.variables.createdCFDAccountsVar.getCurrent(A.iterationContext).currencyAttr
                                                })
                                            },
                                            events: {
                                                _handleError: o(function(G) {
                                                    a.handleError(G)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    var G = A.clone();
                                                    a.createdAccountOnClick$Action(a.callContext(G))
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: d,
                                                uuid: "15",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, s, e, "2")
                                },
                                _dependencies: [f(r.variables.totalCTraderBalanceVar)]
                            })]
                        })), u.createElement(c, {
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
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [l(h("6IiGdsEYP06nsIpsfm4H7Q#Value", "Available accounts"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(ue, {
                            enabled: !0,
                            style: "display-flex align-items-center justify-content-center",
                            transition: R.Transitions.createTransition(R.Transitions.TransitionAnimation.Fade),
                            url: R.Navigation.generateScreenURL("tradershub", "tradingSpecification", {}),
                            visible: k.getAuthToken() !== "",
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: [l(h("uPBzeqBKgE69LZnOCO4bew#Value", "View specifications"))],
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(T, {
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
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }))), i(r.variables.isEmptyVar, !1, this, function() {
                            return [u.createElement(oe, {
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
                                source_dataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new le(function(d, A) {
                                        return [u.createElement(Te, {
                                            getOwnerSpan: o(function() {
                                                return m.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: o(function() {
                                                return m.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ProductDescription: r.variables.getCFDAccountsAggr.listOut.getCurrent(A.iterationContext).cFDAccountsAttr.descriptionAttr,
                                                _productDescriptionInDataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                                ProductIcon: r.variables.getCFDAccountsAggr.listOut.getCurrent(A.iterationContext).cFDAccountsAttr.iconAttr,
                                                _productIconInDataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                                ProductName: r.variables.getCFDAccountsAggr.listOut.getCurrent(A.iterationContext).cFDAccountsAttr.labelAttr,
                                                _productNameInDataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: o(function(G) {
                                                    a.handleError(G)
                                                }, "_handleError"),
                                                onClickEvent$Action: o(function() {
                                                    return Promise.resolve().then(function() {
                                                        var G = A.clone();
                                                        return a.availableAccountOnClick$Action(a.callContext(G))
                                                    })
                                                }, "onClickEvent$Action")
                                            },
                                            _validationProps: {
                                                validationService: n
                                            },
                                            _idProps: {
                                                service: d,
                                                uuid: "22",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, s, e, "3")
                                },
                                _dependencies: [f(r.variables.getCFDAccountsAggr.dataFetchStatusAttr)]
                            })]
                        }, function() {
                            return [i(r.variables.dataLoadingVar, !1, this, function() {
                                return [u.createElement(oe, {
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
                                    source_dataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getCFDAccountsAggr.dataFetchStatusAttr),
                                    placeholders: {
                                        content: new le(function(d, A) {
                                            return [u.createElement(c, {
                                                align: 0,
                                                animate: !1,
                                                style: "skeleton available-accounts-loader",
                                                visible: !0,
                                                _idProps: {
                                                    service: d,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, s, e, "4")
                                    },
                                    _dependencies: []
                                })]
                            }, function() {
                                return [u.createElement(oe, {
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
                                        content: new le(function(d, A) {
                                            return [u.createElement(Te, {
                                                getOwnerSpan: o(function() {
                                                    return m.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: o(function() {
                                                    return m.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    ProductIcon: r.variables.availableCFDAccountsVar.getCurrent(A.iterationContext).iconAttr,
                                                    ProductDescription: r.variables.availableCFDAccountsVar.getCurrent(A.iterationContext).descriptionAttr,
                                                    ProductName: r.variables.availableCFDAccountsVar.getCurrent(A.iterationContext).labelAttr
                                                },
                                                events: {
                                                    _handleError: o(function(G) {
                                                        a.handleError(G)
                                                    }, "_handleError"),
                                                    onClickEvent$Action: o(function() {
                                                        return Promise.resolve().then(function() {
                                                            var G = A.clone();
                                                            return a.availableAccountOnClick$Action(a.callContext(G))
                                                        })
                                                    }, "onClickEvent$Action")
                                                },
                                                _validationProps: {
                                                    validationService: n
                                                },
                                                _idProps: {
                                                    service: d,
                                                    uuid: "26",
                                                    alias: "7"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, s, e, "5")
                                    },
                                    _dependencies: []
                                })]
                            })]
                        }), u.createElement(Ge, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowRestrictedCountryWarningModal"
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                onCloseClick$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "onCloseClick$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "27",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(Ye, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedAccount: r.variables.selectedAvailableAccountVar,
                                IsPasswordSet: r.getCachedValue(e.getId("oVu8K6jS1US34nVXGRpTMw.IsPasswordSet"), function() {
                                    return r.variables.selectedAccountVar.platformAttr === "mt5" ? r.variables.isMt5PasswordSetVar : r.variables.isDxtradePasswordSetVar
                                }, function() {
                                    return r.variables.selectedAccountVar.platformAttr
                                }, function() {
                                    return r.variables.isMt5PasswordSetVar
                                }, function() {
                                    return r.variables.isDxtradePasswordSetVar
                                }),
                                IsVisible: r.variables.showModalVar === "ShowPasswordModal"
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                refetchMT5Event$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.onAccountCreated$Action("mt5", a.callContext(d))
                                    })
                                }, "refetchMT5Event$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.handleForgotPassword$Action(a.callContext(d))
                                    })
                                }, "forgotPasswordEvent$Action"),
                                refetchDxtradeEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.onAccountCreated$Action("dxtrade", a.callContext(d))
                                    })
                                }, "refetchDxtradeEvent$Action"),
                                closeEvent$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "28",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(tt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowForgotPasswordModal"
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.handleForgotPassword$Action(a.callContext(d))
                                    })
                                }, "closeEvent$Action"),
                                resendEmailEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.handleForgotPassword$Action(a.callContext(d))
                                    })
                                }, "resendEmailEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "29",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(ut, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.getCachedValue(e.getId("5v+F4ZKSDkW_t6bSmuzmNw.IsVisible"), function() {
                                    return k.gettrading_platform_dxtrade_password_reset() !== R.BuiltinFunctions.nullTextIdentifier() || k.gettrading_platform_mt5_password_reset() !== R.BuiltinFunctions.nullTextIdentifier() || r.variables.showModalVar === "ShowResetPasswordModal"
                                }, function() {
                                    return k.gettrading_platform_dxtrade_password_reset()
                                }, function() {
                                    return k.gettrading_platform_mt5_password_reset()
                                }, function() {
                                    return r.variables.showModalVar
                                }),
                                Platform: r.getCachedValue(e.getId("5v+F4ZKSDkW_t6bSmuzmNw.Platform"), function() {
                                    return k.gettrading_platform_dxtrade_password_reset() !== R.BuiltinFunctions.nullTextIdentifier() ? "dxtrade" : k.gettrading_platform_mt5_password_reset() !== R.BuiltinFunctions.nullTextIdentifier() ? "mt5" : ""
                                }, function() {
                                    return k.gettrading_platform_dxtrade_password_reset()
                                }, function() {
                                    return k.gettrading_platform_mt5_password_reset()
                                })
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "closeEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "30",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(U, {
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
                        }, u.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
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
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: ["Account details"],
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(c, {
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
                        }, u.createElement(c, {
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
                        }, u.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftSide"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(c, {
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
                        }, u.createElement(_, {
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivctrader.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "16px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(b, {
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
                            return [u.createElement(c, {
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
                                    uuid: "42"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [u.createElement(b, {
                                value: "Total balance: " + r.variables.totalCTraderBalanceVar,
                                _idProps: {
                                    service: e,
                                    name: "Balance"
                                },
                                _widgetRecordProvider: t
                            })]
                        }))), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RightSide"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(W, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            isDefault: !1,
                            onClick: o(function() {
                                try {
                                    R.Navigation.navigateTo(R.Navigation.generateScreenURL("tradershub", "wallets", {}), R.Transitions.createTransition(R.Transitions.TransitionAnimation.Fade), null, !0)
                                } catch (d) {
                                    if (d.name !== "RedirectOccurredException") throw d
                                }
                            }, "onClick"),
                            style: "btn-primary transfer-btn cursor-pointer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            style: "",
                            text: [l(h("tk2AVO3sjUu0VGDL_Ce+jA#Value", "Transfer"))],
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: t
                        })))), i(r.variables.accountCreationLoadingVar, !1, this, function() {
                            return [u.createElement(oe, {
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
                                    uuid: "48"
                                },
                                _widgetRecordProvider: t,
                                source_dataFetchStatus: R.Model.calculateDataFetchStatus(r.variables.getMockDataAggr.dataFetchStatusAttr),
                                placeholders: {
                                    content: new le(function(d, A) {
                                        return [u.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-radius: 4px; height: 42px; margin-top: 8px;"
                                            },
                                            style: "skeleton",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, s, e, "6")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [u.createElement(oe, {
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
                                    uuid: "50"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new le(function(d, A) {
                                        return [u.createElement(c, {
                                            align: 0,
                                            animate: !1,
                                            style: "ctrader-list-item",
                                            visible: !0,
                                            _idProps: {
                                                service: d,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: [f(r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).currencyAttr), f(r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).display_balanceAttr), f(r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).loginAttr)]
                                        }, u.createElement(b, {
                                            value: r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).loginAttr,
                                            _idProps: {
                                                service: d,
                                                name: "AccountId"
                                            },
                                            _widgetRecordProvider: t
                                        }), u.createElement(b, {
                                            gridProperties: {
                                                classes: "ThemeGrid_MarginGutter"
                                            },
                                            value: r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).display_balanceAttr + " " + r.variables.createdCTraderAccountsVar.getCurrent(A.iterationContext).currencyAttr,
                                            _idProps: {
                                                service: d,
                                                name: "Balance2"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    }, s, e, "7")
                                },
                                _dependencies: []
                            })]
                        }), i(k.getAccountType() === "real" && r.variables.cTraderAvailableAccountsCountVar > 0 && !r.variables.accountCreationLoadingVar, !1, this, function() {
                            return [u.createElement(c, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: o(function() {
                                        return Promise.resolve().then(function() {
                                            var d = s.clone();
                                            return a.cTraderAccountCreation$Action(r.variables.createdCTraderAccountsVar.getCurrent(s.iterationContext).market_typeAttr, "svg", a.callContext(d))
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
                            }, u.createElement(_, {
                                image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCirclePlus.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: t
                            }), u.createElement(p, {
                                extendedProperties: {
                                    style: "font-size: 12px; margin-left: 8px;"
                                },
                                text: ["Get another cTrader account"],
                                _idProps: {
                                    service: e,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return []
                        }), u.createElement(vt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "57",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(de, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                InfoMessage: "Scheduled downtime: Monthly on the first Saturday, 07:00-10:00 GMT. Service may be affected.",
                                IsDowntime: r.variables.isDowntimeVar
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "58",
                                alias: "13"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "ctrader-redirections-desktop",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DesktopView"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(W, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                return Promise.resolve().then(function() {
                                    var d = s.clone();
                                    return a.ctraderWebTerminalOnClick$Action(a.callContext(d))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GlobeSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "61"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: ["cTrader web terminal"],
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(ue, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            extendedProperties: {
                                target: "_blank",
                                style: "border-color: #101213; border-radius: 100px; border-style: solid; border-width: 1px; height: 48px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            onClick: o(function() {
                                var d = s.clone();
                                a.ctraderAppOnClick$Action(a.callContext(d))
                            }, "onClick"),
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "63"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.LaptopSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "64"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px; margin-left: 8px; margin-top: 1px;"
                            },
                            style: "hide-text-decoration",
                            text: ["cTrader app"],
                            _idProps: {
                                service: e,
                                uuid: "65"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "66"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["Also available on "],
                            _idProps: {
                                service: e,
                                uuid: "67"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(ue, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                marginLeft: "4px"
                            },
                            style: "hide-text-decoration",
                            transition: R.Transitions.createTransition(R.Transitions.TransitionAnimation.Fade),
                            url: R.Navigation.generateScreenURL("https://getctradermac.com/deriv/ctrader-deriv-setup.dmg", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "68"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px; text-decoration: underline;"
                            },
                            style: "cursor-pointer",
                            text: ["macOS"],
                            _idProps: {
                                service: e,
                                uuid: "69"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 12px;"
                            },
                            text: ["."],
                            _idProps: {
                                service: e,
                                uuid: "70"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; margin-top: 16px; padding: 8px;"
                            },
                            style: "display-flex align-items-center flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "71"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            extendedProperties: {
                                style: "height: 80px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                width: "80px"
                            },
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CTraderQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "72"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: ["Scan to download the mobile app."],
                            _idProps: {
                                service: e,
                                uuid: "73"
                            },
                            _widgetRecordProvider: t
                        }))), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "mobile-btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MobileView"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(W, {
                            enabled: !r.variables.accountCreationLoadingVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: o(function() {
                                var d = s.clone();
                                a.ctraderAppOnClick$Action(a.callContext(d))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "75"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(_, {
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.MobileNotchSM.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "76"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-left: 8px;"
                            },
                            text: ["cTrader app"],
                            _idProps: {
                                service: e,
                                uuid: "77"
                            },
                            _widgetRecordProvider: t
                        }))))), u.createElement(Pt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowMT5TradeModal",
                                SelectedAccount: r.variables.selectedAccountVar,
                                IsDowntime: r.variables.isDowntimeVar
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.handleForgotPassword$Action(a.callContext(d))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "78",
                                alias: "14"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(xt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDowntime: r.variables.isDowntimeVar,
                                IsVisible: r.variables.showModalVar === "ShowDxtradeTradeModal",
                                SelectedAccount: r.variables.selectedAccountVar
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeEvent$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "closeEvent$Action"),
                                forgotPasswordEvent$Action: o(function() {
                                    return Promise.resolve().then(function() {
                                        var d = s.clone();
                                        return a.handleForgotPassword$Action(a.callContext(d))
                                    })
                                }, "forgotPasswordEvent$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "79",
                                alias: "15"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), u.createElement(U, {
                            showPopup: r.variables.showModalVar === "ShowVerificationModal",
                            style: "popup-dialog full-height-popup",
                            _idProps: {
                                service: e,
                                name: "CompleteProfileSetupPopup"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
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
                        }, u.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            text: ["Complete profile setup"],
                            _idProps: {
                                service: e,
                                uuid: "82"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(_, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "onClick")
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            image: R.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "CloseIcon2"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "84"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(b, {
                            value: "To enable your MT5 " + r.variables.selectedAccountVar.labelAttr + " account, complete these steps.",
                            _idProps: {
                                service: e,
                                uuid: "85"
                            },
                            _widgetRecordProvider: t
                        }), u.createElement(oe, {
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
                                uuid: "86"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new le(function(d, A) {
                                    return [u.createElement(Ot, {
                                        getOwnerSpan: o(function() {
                                            return m.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: o(function() {
                                            return m.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            IsDisabled: r.variables.profileSetupVar.getCurrent(A.iterationContext).isDisabledAttr,
                                            Title: r.variables.profileSetupVar.getCurrent(A.iterationContext).titleAttr,
                                            Description: r.variables.profileSetupVar.getCurrent(A.iterationContext).descriptionAttr,
                                            Status: r.variables.profileSetupVar.getCurrent(A.iterationContext).statusLabelAttr,
                                            Icon: r.variables.profileSetupVar.getCurrent(A.iterationContext).iconAttr
                                        },
                                        events: {
                                            _handleError: o(function(G) {
                                                a.handleError(G)
                                            }, "_handleError"),
                                            redirectToEvent$Action: o(function() {
                                                return Promise.resolve().then(function() {
                                                    var G = A.clone();
                                                    return a.redirectToAccounts$Action(r.variables.profileSetupVar.getCurrent(A.iterationContext).identifierAttr === "poi" ? "account/proof-of-identity" : r.variables.profileSetupVar.getCurrent(A.iterationContext).identifierAttr === "poa" ? "account/proof-of-address" : "account/personal-details", a.callContext(G))
                                                })
                                            }, "redirectToEvent$Action")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: d,
                                            uuid: "87",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, s, e, "8")
                            },
                            _dependencies: []
                        }))), u.createElement(kt, {
                            getOwnerSpan: o(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: r.variables.showModalVar === "ShowBOLocksModal",
                                status: r.getCachedValue(e.getId("p7pi4ns3+EmhXI0xVm35YA.status"), function() {
                                    return r.variables.selectedAccountVar.statusAttr !== R.BuiltinFunctions.nullTextIdentifier() ? r.variables.selectedAccountVar.statusAttr : "under_maintenance"
                                }, function() {
                                    return r.variables.selectedAccountVar.statusAttr
                                })
                            },
                            events: {
                                _handleError: o(function(d) {
                                    a.handleError(d)
                                }, "_handleError"),
                                closeBOLockModal$Action: o(function() {
                                    var d = s.clone();
                                    a.closeModal$Action(a.callContext(d))
                                }, "closeBOLockModal$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "88",
                                alias: "17"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [f(r.variables.profileSetupVar), f(r.variables.isDowntimeVar), f(r.variables.cTraderAvailableAccountsCountVar), f(k.getAccountType()), f(r.variables.createdCTraderAccountsVar), f(r.variables.accountCreationLoadingVar), f(k.gettrading_platform_mt5_password_reset()), f(k.gettrading_platform_dxtrade_password_reset()), f(r.variables.isDxtradePasswordSetVar), f(r.variables.isMt5PasswordSetVar), f(r.variables.selectedAccountVar), f(r.variables.selectedAvailableAccountVar), f(r.variables.showModalVar), f(r.variables.getCFDAccountsAggr.listOut), f(r.variables.availableCFDAccountsVar), f(r.variables.isEmptyVar), f(r.variables.totalCTraderBalanceVar), f(r.variables.getCFDAccountsAggr.dataFetchStatusAttr), f(r.variables.getMockDataAggr.dataFetchStatusAttr), f(r.variables.getMockDataAggr.listOut), f(r.variables.createdCFDAccountsVar), f(r.variables.dataLoadingVar), f(k.getAuthToken())]
            }))
        }
    };
o(Oe, "View");
var Dt = Oe,
    Ws = Dt;
export {
    Ws as
    default
};