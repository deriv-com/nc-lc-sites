import {
    a as Nt,
    b as Lt
} from "./_oschunk-34QHXKVM.js";
import {
    a as ze
} from "./_oschunk-5ZGJAYBW.js";
import {
    a as se
} from "./_oschunk-GSA6MIEZ.js";
import {
    a as wt,
    b as Et,
    c as St,
    d as Ot,
    e as Rt,
    f as xt,
    g as kt,
    h as It,
    i as Tt,
    j as Dt,
    k as Vt,
    l as Ft,
    m as Ht
} from "./_oschunk-UKFA3NWH.js";
import {
    a as At
} from "./_oschunk-VWJXDAKN.js";
import {
    a as Pt,
    b as N,
    h as c,
    j as h,
    q as F,
    r as y,
    s as ke,
    t as Ie,
    u as Me,
    v as j,
    w as Be,
    y as C
} from "./_oschunk-E7JQAU4J.js";
import {
    a as V
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as J,
    g as I,
    i as w
} from "./_oschunk-T77XORCW.js";
import {
    a as M,
    b as Ct,
    d as x
} from "./_oschunk-VADNKVBQ.js";
import {
    l as S
} from "./_oschunk-OOUVJ7PM.js";
import {
    Nd as $e
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as g
} from "./_oschunk-5EPHB76O.js";
import {
    c as a,
    g as q
} from "./_oschunk-DVBKI63I.js";
var Q = q(J());
var Wt = {};
var le = g; {
    let i = class i extends le.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Wt);
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
                return le.Logger.startActiveSpan("OnClickAction", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickAction"), r.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), le.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), le.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        onClickAction$Action(e) {
            var n = this.controller;
            return le.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "70b1ad66-8208-45c2-aaa3-d2eba482a91d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), le.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    $t = f
}
var $t, Mt = new le.Controller.ControllerFactory($t, V);
var oe = g,
    Bi = w.PlaceholderContent,
    zi = w.IteratorPlaceholderContent,
    ce = class ce extends I.BaseWebBlock {
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
            return wt
        }
        get controllerFactory() {
            return Mt
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = ce.ifWidget,
                s = ce.textWidget,
                u = ce.asPrimitiveValue,
                m = ce.getTranslation,
                A = this;
            return Q.createElement("div", this.getRootNodeProperties(), Q.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClickAction$Action(l.callContext(d))
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
            }, Q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FirstRowContainer"
                },
                _widgetRecordProvider: t
            }, Q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ProductImageContainer"
                },
                _widgetRecordProvider: t
            }, Q.createElement(y, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: i.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "ProductImage"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._productIconInDataFetchStatus)
            }), Q.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #FEF5E5; border-radius: 100px; border-style: solid; border-width: 0px; color: #AC6F00; height: 24px; padding: 3px 8px 3px 8px;"
                },
                style: "display-flex align-items-center column-gap-xs display-flex",
                visible: i.variables.statusIn !== "",
                _idProps: {
                    service: e,
                    name: "StatusBadge"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
            }, Q.createElement(y, {
                extendedProperties: {
                    style: "font-size: 24px; height: 24px;"
                },
                gridProperties: {
                    width: "24px",
                    marginLeft: "0"
                },
                image: oe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), Q.createElement(h, {
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: i.getCachedValue(e.getId("ServerStatus.Value"), function() {
                    return i.variables.statusIn === "under_maintenance" || i.variables.statusIn === "maintenance" ? "Server maintenance" : i.variables.statusIn
                }, function() {
                    return i.variables.statusIn
                }),
                _idProps: {
                    service: e,
                    name: "ServerStatus"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
            })))), Q.createElement(c, {
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
            }, Q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-block",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "TextContainer"
                },
                _widgetRecordProvider: t
            }, Q.createElement(h, {
                style: "display-block",
                value: i.variables.nameIn,
                _idProps: {
                    service: e,
                    name: "ProductName"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._nameInDataFetchStatus)
            }), Q.createElement(h, {
                extendedProperties: {
                    style: "margin-top: 4px;"
                },
                style: i.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Style"), function() {
                    return i.variables.statusIn !== "" ? "balance-unavailable" : "balance-text"
                }, function() {
                    return i.variables.statusIn
                }),
                value: i.getCachedValue(e.getId("69AW6+dU2U+rXhkRmfJwKg.Value"), function() {
                    return i.variables.statusIn !== "" ? "(Balance unavailable)" : i.variables.balanceIn
                }, function() {
                    return i.variables.statusIn
                }, function() {
                    return i.variables.balanceIn
                }),
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus),
                value_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus, i.variables._balanceInDataFetchStatus)
            })), Q.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ArrowIconContainer"
                },
                _widgetRecordProvider: t
            }, Q.createElement(y, {
                image: oe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                style: i.getCachedValue(e.getId("Krj1ndw00EeLC7EeErzINg.Style"), function() {
                    return i.variables.statusIn !== "" ? "disabled" : ""
                }, function() {
                    return i.variables.statusIn
                }),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: oe.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
            })))))
        }
    };
a(ce, "View");
var Ue = ce,
    Ui = Ue;
var ie = q(J());
var Bt = {};
var de = g; {
    let i = class i extends de.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Bt);
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
                return de.Logger.startActiveSpan("OnClickAction", function(r) {
                    return r && (r.setAttribute("code.function", "OnClickAction"), r.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), de.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClickAction"), e = t.callContext(e), de.Flow.executeAsyncFlow(function() {
                            return t.onClickEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClickAction$Action
        }
        set _onClickAction$Action(e) {
            this.__onClickAction$Action = e
        }
        onClickAction$Action(e) {
            var n = this.controller;
            return de.Logger.startActiveSpan("OnClickAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClickAction"), t.setAttribute("outsystems.function.key", "37af0de6-f3f4-41bf-a187-3846485533d0"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), de.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    zt = f
}
var zt, Ut = new de.Controller.ControllerFactory(zt, V);
var Te = g,
    ln = w.PlaceholderContent,
    cn = w.IteratorPlaceholderContent,
    ue = class ue extends I.BaseWebBlock {
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
            return Et
        }
        get controllerFactory() {
            return Ut
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = ue.ifWidget,
                s = ue.textWidget,
                u = ue.asPrimitiveValue,
                m = ue.getTranslation,
                A = this;
            return ie.createElement("div", this.getRootNodeProperties(), ie.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClickAction$Action(l.callContext(d))
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
            }, ie.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, ie.createElement(c, {
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
            }, ie.createElement(y, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                style: "display-flex ",
                type: 1,
                url: i.variables.productIconIn,
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: Te.Model.calculateDataFetchStatus(i.variables._productIconInDataFetchStatus)
            })), ie.createElement(c, {
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
            }, ie.createElement(h, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                style: "display-block",
                value: i.variables.productNameIn,
                _idProps: {
                    service: e,
                    name: "Product"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Te.Model.calculateDataFetchStatus(i.variables._productNameInDataFetchStatus)
            }), ie.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 12px; margin-top: 4px;"
                },
                value: i.variables.productDescriptionIn,
                _idProps: {
                    service: e,
                    name: "Description"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: Te.Model.calculateDataFetchStatus(i.variables._productDescriptionInDataFetchStatus)
            }))), ie.createElement(c, {
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
            }, ie.createElement(y, {
                extendedProperties: {
                    style: "height: fill;"
                },
                gridProperties: {
                    width: "fill"
                },
                image: Te.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
a(ue, "View");
var je = ue,
    dn = je;
var T = q(J());
var Er = {
        "CPbKy+0QdkiEybCU+HUEZg#Value": "Mot de passe oubli\xE9 ?"
    },
    jt = {
        "fr-FR": {
            translations: Er,
            isRTL: !1
        }
    };
var p = g; {
    let i = class i extends p.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, jt);
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
                return p.Logger.startActiveSpan("SetPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "SetPasswordOnClick"), r.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SetPasswordOnClick"), e = t.callContext(e);
                        var s = new p.DataTypes.VariableHolder;
                        return p.Flow.executeAsyncFlow(function() {
                            return p.Flow.executeSequence(function() {
                                return n.variables.isPasswordSetIn ? t._addAccountOnClick$Action(e) : (n.flush(), x.tradingPlatformPasswordChange$Action("", n.variables.selectedAccountIn.platformAttr, n.variables.passwordInputValueVar, e).then(function(u) {
                                    s.value = u
                                }).then(function() {
                                    return t._addAccountOnClick$Action(e)
                                }))
                            })
                        })
                    }, function() {
                        r && r.end()
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
                return p.Logger.startActiveSpan("Validate", function(r) {
                    r && (r.setAttribute("code.function", "Validate"), r.setAttribute("outsystems.function.key", "4d77746d-e082-4edd-8a07-a5fadd70570d"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Validate"), e = t.callContext(e), n.variables.passwordInputValueVar === "" ? (n.widgets.get(o.getId("Input_password")).validAttr = !1, n.widgets.get(o.getId("Input_password")).validationMessageAttr = "Password is required.") : (n.widgets.get(o.getId("Input_password")).validAttr = !0, n.widgets.get(o.getId("Input_password")).validationMessageAttr = p.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        r && r.end()
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
                return p.Logger.startActiveSpan("ForgotPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ForgotPasswordOnClick"), r.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), p.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
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
                    r = this.idService;
                return p.Logger.startActiveSpan("HandleError", function(s) {
                    return s && (s.setAttribute("code.function", "HandleError"), s.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        o.ensureControllerAlive("HandleError"), n = o.callContext(n);
                        var u = new p.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars")));
                        return u.value.errorCodeInLocal = e, p.Flow.executeAsyncFlow(function() {
                            return p.Flow.executeSequence(function() {
                                if (u.value.errorCodeInLocal === "ASK_FIX_DETAILS") return o.needsKYCEvent$Action(n).then(function() {
                                    t.variables.isLoadingVar = !1, t.variables.passwordInputValueVar = ""
                                });
                                u.value.errorCodeInLocal === "TradingPlatformInvalidAccount" && p.FeedbackMessageService.showFeedbackMessage("To trade CFDs, you'll need to use your USD Wallet. Click Transfer to move your BTC to your USD Wallet.", 0)
                            })
                        })
                    }, function() {
                        s && s.end()
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
                    r = this.idService;
                return p.Logger.startActiveSpan("PasswordPolicyCompliant", function(s) {
                    s && (s.setAttribute("code.function", "PasswordPolicyCompliant"), s.setAttribute("outsystems.function.key", "79726958-3be7-4ec7-9d70-6a1860cf1773"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("PasswordPolicyCompliant"), n = o.callContext(n);
                        var u = new p.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars")));
                        u.value.isValidInLocal = e, t.variables.isPasswordValidVar = u.value.isValidInLocal
                    } finally {
                        s && s.end()
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
                return p.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), p.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                n.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        r && r.end()
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
                return p.Logger.startActiveSpan("OnClickShowPassword", function(r) {
                    r && (r.setAttribute("code.function", "OnClickShowPassword"), r.setAttribute("outsystems.function.key", "d2e9fea3-2bd5-4998-8c3c-aebce6bbd8c4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), e = t.callContext(e), n.variables.showPasswordVar = !n.variables.showPasswordVar
                    } finally {
                        r && r.end()
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
                return p.Logger.startActiveSpan("AddAccountOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "AddAccountOnClick"), r.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        t.ensureControllerAlive("AddAccountOnClick"), e = t.callContext(e);
                        var s = new p.DataTypes.VariableHolder,
                            u = new p.DataTypes.VariableHolder;
                        return p.Flow.executeAsyncFlow(function() {
                            return n.variables.isLoadingVar = !0, p.Flow.executeSequence(function() {
                                return n.variables.selectedAccountIn.platformAttr === "mt5" ? (n.flush(), x.mT5NewAccount$Action(n.variables.passwordInputValueVar, n.variables.selectedAccountIn.productAttr, n.variables.selectedAccountIn.shortcodeAttr, e).then(function(m) {
                                    s.value = m
                                }).then(function() {
                                    return p.Flow.executeSequence(function() {
                                        return s.value.errorCodeOut !== p.BuiltinFunctions.nullTextIdentifier() ? t._handleError$Action(s.value.errorCodeOut, e).then(function() {
                                            return p.Flow.returnAsync()
                                        }) : t.refetchMT5Event$Action(e)
                                    })
                                })) : (n.flush(), x.tradingPlatformNewAccount$Action("all", n.variables.passwordInputValueVar, n.variables.selectedAccountIn.platformAttr, e).then(function(m) {
                                    u.value = m
                                }).then(function() {
                                    return p.Flow.executeSequence(function() {
                                        return u.value.responseOut.msg_typeAttr === p.BuiltinFunctions.nullTextIdentifier() ? (n.variables.isLoadingVar = !1, n.variables.passwordInputValueVar = "", p.Flow.returnAsync()) : t.refetchDxtradeEvent$Action(e)
                                    })
                                }))
                            }).then(function() {
                                n.variables.isLoadingVar = !1, n.variables.passwordInputValueVar = ""
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__addAccountOnClick$Action
        }
        set _addAccountOnClick$Action(e) {
            this.__addAccountOnClick$Action = e
        }
        setPasswordOnClick$Action(e) {
            var n = this.controller;
            return p.Logger.startActiveSpan("SetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SetPasswordOnClick"), t.setAttribute("outsystems.function.key", "45cc1744-92ff-4c58-8c38-be10958c7543"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._setPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        validate$Action(e) {
            var n = this.controller;
            return p.Logger.startActiveSpan("Validate__proxy", function(t) {
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
            return p.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "4eba8086-80bd-43e8-88ef-03149d3491b2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        handleError$Action(e, n) {
            var t = this.controller;
            return p.Logger.startActiveSpan("HandleError__proxy", function(o) {
                return o && (o.setAttribute("code.function", "HandleError"), o.setAttribute("outsystems.function.key", "5778564e-b6f3-4ae4-9209-bcccfd406efc"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._handleError$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        passwordPolicyCompliant$Action(e, n) {
            var t = this.controller;
            return p.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(o) {
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
            return p.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "98b33e72-ea9f-4fc5-94c7-b779de152e50"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var n = this.controller;
            return p.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
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
            return p.Logger.startActiveSpan("AddAccountOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "AddAccountOnClick"), t.setAttribute("outsystems.function.key", "e06a80c7-d448-4b3b-a2c4-ac8bd27d7972"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    De = f, De.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.HandleError$vars", [{
        name: "ErrorCode",
        attrName: "errorCodeInLocal",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), De.registerVariableGroupType("tradershub.CFDBlocks.PasswordModal.PasswordPolicyCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var De, Qt = new p.Controller.ControllerFactory(De, V);
var z = g,
    On = w.PlaceholderContent,
    Rn = w.IteratorPlaceholderContent,
    fe = class fe extends I.BaseWebBlock {
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
            return [ze]
        }
        get modelFactory() {
            return St
        }
        get controllerFactory() {
            return Qt
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = fe.ifWidget,
                s = fe.textWidget,
                u = fe.asPrimitiveValue,
                m = fe.getTranslation,
                A = this;
            return T.createElement("div", this.getRootNodeProperties(), T.createElement(j, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: i.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, T.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
            }, T.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold;"
                },
                value: i.getCachedValue(e.getId("fSgl+j5+0UKZIVTyJ5OjXg.Value"), function() {
                    return i.variables.isPasswordSetIn ? "Add " + (i.variables.selectedAccountIn.platformAttr === "dxtrade" ? "a Deriv X" : "an MT5") + " account" : "Set up your " + (i.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " password"
                }, function() {
                    return i.variables.isPasswordSetIn
                }, function() {
                    return i.variables.selectedAccountIn.platformAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus, i.variables._selectedAccountInDataFetchStatus)
            }), T.createElement(y, {
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
            })), T.createElement(c, {
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
            }, T.createElement(h, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: i.getCachedValue(e.getId("Title.Value"), function() {
                    return i.variables.isPasswordSetIn ? "Enter your " + (i.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " password to enable your " + M.getAccountType() + " account." : "Enable your " + (i.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "Deriv MT5") + " account by setting a password. Use this password for all your " + (i.variables.selectedAccountIn.platformAttr === "dxtrade" ? "Deriv X" : "MT5") + " accounts."
                }, function() {
                    return i.variables.isPasswordSetIn
                }, function() {
                    return i.variables.selectedAccountIn.platformAttr
                }, function() {
                    return M.getAccountType()
                }),
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus, i.variables._selectedAccountInDataFetchStatus)
            }), T.createElement(c, {
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
            }, T.createElement(ke, {
                _validationProps: {
                    validationService: n
                },
                enabled: !i.variables.isLoadingVar,
                extendedEvents: {
                    onBlur: a(function() {
                        var d = o.clone();
                        l.validate$Action(l.callContext(d))
                    }, "onBlur")
                },
                extendedProperties: {
                    type: i.getCachedValue(e.getId("Input_password.type"), function() {
                        return i.variables.showPasswordVar ? "text" : "password"
                    }, function() {
                        return i.variables.showPasswordVar
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
                variable: i.createVariable(z.DataTypes.DataTypes.Text, i.variables.passwordInputValueVar, function(d) {
                    i.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "Input_password"
                },
                _widgetRecordProvider: t
            }), r(i.variables.showPasswordVar, !1, this, function() {
                return [T.createElement(y, {
                    extendedEvents: {
                        onClick: a(function() {
                            var d = o.clone();
                            l.onClickShowPassword$Action(l.callContext(d))
                        }, "onClick")
                    },
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeunsplash.svg"),
                    style: i.getCachedValue(e.getId("A5jyuhicUE2e4Pp8p0KqZQ.Style"), function() {
                        return i.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return i.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [T.createElement(y, {
                    extendedEvents: {
                        onClick: a(function() {
                            var d = o.clone();
                            l.onClickShowPassword$Action(l.callContext(d))
                        }, "onClick")
                    },
                    image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.eyeslashsm.svg"),
                    style: i.getCachedValue(e.getId("FLORvYxN7kGkgrgx24rwlQ.Style"), function() {
                        return i.widgets.get(e.getId("Input_password")).validAttr === !1 ? "eye-image-error" : "eye-image"
                    }, function() {
                        return i.widgets.get(e.getId("Input_password")).validAttr
                    }),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                })]
            })), T.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "padding: 16px 16px 0px 16px;"
                },
                visible: !i.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "PasswordPolicyContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus)
            }, T.createElement(ze, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    NeedToCheckSpecialCharacter: !0,
                    Password: i.variables.passwordInputValueVar,
                    Type: "CREATE"
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError"),
                    compliant$Action: a(function(d) {
                        var wr = o.clone();
                        l.passwordPolicyCompliant$Action(d, l.callContext(wr))
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
            })), T.createElement(c, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "margin-top: 24px; text-align: right;"
                },
                visible: i.variables.isPasswordSetIn,
                _idProps: {
                    service: e,
                    name: "ForgotPasswordContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus)
            }, T.createElement(C, {
                extendedProperties: {
                    style: "color: #333333; font-size: 14px; font-weight: normal; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("CPbKy+0QdkiEybCU+HUEZg#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))), T.createElement(c, {
                align: 0,
                animate: !1,
                style: "cfd-modal-sticky-footer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "FooterContainer"
                },
                _widgetRecordProvider: t
            }, T.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 8px; margin-right: 16px; padding: 8px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                style: "display-flex align-items-flex-start",
                visible: M.getAccountType() === "real",
                _idProps: {
                    service: e,
                    name: "RegulatoryInformation"
                },
                _widgetRecordProvider: t
            }, T.createElement(y, {
                image: z.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), T.createElement(h, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: i.getCachedValue(e.getId("6ELDmySp7Uqpvj+llw1hVw.Value"), function() {
                    return "You are adding your " + (i.variables.selectedAccountIn.platformAttr === "mt5" ? "Deriv " + z.BuiltinFunctions.toUpper(i.variables.selectedAccountIn.platformAttr) + " " + i.variables.selectedAccountIn.labelAttr : i.variables.selectedAccountIn.labelAttr) + " account under " + i.variables.selectedAccountIn.nameAttr + (i.variables.selectedAccountIn.regulatory_authorityAttr !== z.BuiltinFunctions.nullTextIdentifier() ? ", regulated by the " + i.variables.selectedAccountIn.regulatory_authorityAttr : "") + (i.variables.selectedAccountIn.licence_numberAttr !== z.BuiltinFunctions.nullTextIdentifier() ? " (licence no. " + i.variables.selectedAccountIn.licence_numberAttr + ")." : "")
                }, function() {
                    return i.variables.selectedAccountIn.platformAttr
                }, function() {
                    return i.variables.selectedAccountIn.labelAttr
                }, function() {
                    return i.variables.selectedAccountIn.nameAttr
                }, function() {
                    return i.variables.selectedAccountIn.regulatory_authorityAttr
                }, function() {
                    return i.variables.selectedAccountIn.licence_numberAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            })), T.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "color: #333333; margin-right: 16px; margin-top: 24px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: M.getAccountType() === "real",
                _idProps: {
                    service: e,
                    name: "AcceptTermsAndCondition"
                },
                _widgetRecordProvider: t
            }, T.createElement(h, {
                extendedProperties: {
                    style: "color: #333333;"
                },
                value: i.getCachedValue(e.getId("KSGfXiAafkGGiobvnyUBgA.Value"), function() {
                    return "By clicking " + (i.variables.isPasswordSetIn ? "'Add account'" : "'Set up password'") + ", I accept " + i.variables.selectedAccountIn.nameAttr + "'s terms and conditions."
                }, function() {
                    return i.variables.isPasswordSetIn
                }, function() {
                    return i.variables.selectedAccountIn.nameAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus, i.variables._selectedAccountInDataFetchStatus)
            })), T.createElement(c, {
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
            }, T.createElement(N, {
                enabled: i.getCachedValue(e.getId("ActionButton.Enabled"), function() {
                    return i.variables.isPasswordSetIn ? i.variables.passwordInputValueVar !== "" && !i.variables.isLoadingVar : i.variables.passwordInputValueVar !== "" && !i.variables.isLoadingVar && i.variables.isPasswordValidVar
                }, function() {
                    return i.variables.isPasswordSetIn
                }, function() {
                    return i.variables.passwordInputValueVar
                }, function() {
                    return i.variables.isLoadingVar
                }, function() {
                    return i.variables.isPasswordValidVar
                }),
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.setPasswordOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ActionButton"
                },
                _widgetRecordProvider: t,
                enabled_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus)
            }, T.createElement(h, {
                value: i.getCachedValue(e.getId("SyRNTNEVdEu8Q8GmQN8J8Q.Value"), function() {
                    return i.variables.isPasswordSetIn ? "Add account" : "Set up password"
                }, function() {
                    return i.variables.isPasswordSetIn
                }),
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: z.Model.calculateDataFetchStatus(i.variables._isPasswordSetInDataFetchStatus)
            }))))))
        }
    };
a(fe, "View");
var Qe = fe,
    xn = Qe;
var L = q(J());
var Sr = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u064A\u0633 \u0645\u062D\u062C\u0648\u0628\u064B\u0627 \u0628\u0648\u0627\u0633\u0637\u0629 \u0627\u0644\u062C\u062F\u0631\u0627\u0646 \u0627\u0644\u0646\u0627\u0631\u064A\u0629 \u0623\u0648 \u0627\u0644\u0641\u0644\u0627\u062A\u0631.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u062C\u0644\u062F \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u063A\u064A\u0631 \u0627\u0644\u0645\u0631\u063A\u0648\u0628 \u0641\u064A\u0647\u0627.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u0644\u0645 \u062A\u062A\u0644\u0642\u064E \u0628\u0631\u064A\u062F\u064B\u0627 \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u064B\u0627\u061F",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    Or = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "-Stellen Sie sicher, dass die E-Mail nicht durch Firewalls oder Filter blockiert wird.",
        "riMD8BNieE+VC9anaRAgtw#Value": "\xDCberpr\xFCfen Sie Ihren Spam-Ordner.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Haben Sie die E-Mail nicht erhalten?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Passwort vergessen"
    },
    Rr = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Aseg\xFArese de que el correo electr\xF3nico no est\xE9 bloqueado por firewall o filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Revise su carpeta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\xBFNo recibi\xF3 un correo electr\xF3nico?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Olvid\xE9 la contrase\xF1a"
    },
    xr = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Assicurati che l'email non sia bloccata da firewall o filtri.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Controlla la tua cartella spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Non hai ricevuto un'email?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Password dimenticata"
    },
    kr = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "- Upewnij si\u0119, \u017Ce ten adres e-mail nie jest blokowany przez zapory ogniowe i filtry.",
        "riMD8BNieE+VC9anaRAgtw#Value": "- Sprawd\u017A sw\xF3j folder spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Nie otrzyma\u0142e\u015B e-maila?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Nie pami\u0119tam has\u0142a"
    },
    Ir = {
        "XlfKqilSdEuhxDi7XQt_HQ#Value": "Certifique-se de que o e-mail n\xE3o est\xE1 bloqueado por firewalls ou filtros.",
        "riMD8BNieE+VC9anaRAgtw#Value": "Verifique a sua pasta de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "N\xE3o recebeu o e-mail?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Esqueceu-se da palavra-passe"
    },
    Tr = {
        "riMD8BNieE+VC9anaRAgtw#Value": "V\xE9rifiez votre dossier de spam.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "Vous n'avez pas re\xE7u d'e-mail ?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "Mot de passe oubli\xE9"
    },
    Dr = {
        "riMD8BNieE+VC9anaRAgtw#Value": "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0430\u043F\u043A\u0443 \u0441\u043E \u0441\u043F\u0430\u043C\u043E\u043C.",
        "gAOjnJo6UEmQdDDWvqw3iQ#Value": "\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443?",
        "lE4y1p4_cUyDg4u6gB0Weg#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    qt = {
        "ar-001": {
            translations: Sr,
            isRTL: !0
        },
        "de-DE": {
            translations: Or,
            isRTL: !1
        },
        "es-ES": {
            translations: Rr,
            isRTL: !1
        },
        "it-IT": {
            translations: xr,
            isRTL: !1
        },
        "pl-PL": {
            translations: kr,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ir,
            isRTL: !1
        },
        "fr-FR": {
            translations: Tr,
            isRTL: !1
        },
        "ru-RU": {
            translations: Dr,
            isRTL: !1
        }
    };
var Z = g; {
    let i = class i extends Z.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, qt);
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
                return Z.Logger.startActiveSpan("ResendEmailOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ResendEmailOnClick"), r.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Z.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResendEmailOnClick"), e = t.callContext(e);
                        var s = new Z.DataTypes.VariableHolder;
                        return Z.Flow.executeAsyncFlow(function() {
                            return n.flush(), x.verifyEmail$Action("trading_platform_mt5_password_reset", M.getSignupEmail(), e).then(function(u) {
                                s.value = u
                            }).then(function() {
                                return t.resendEmailEvent$Action(e)
                            })
                        })
                    }, function() {
                        r && r.end()
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
                return Z.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Z.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), Z.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        resendEmailOnClick$Action(e) {
            var n = this.controller;
            return Z.Logger.startActiveSpan("ResendEmailOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResendEmailOnClick"), t.setAttribute("outsystems.function.key", "12dbf9df-2a06-494a-9fe0-1ee5b84baecc"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Z.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._resendEmailOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return Z.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "f0b3eb48-02f8-4159-96d6-a543ffb6bcb2"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Z.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Jt = f
}
var Jt, Gt = new Z.Controller.ControllerFactory(Jt, V);
var Ve = g,
    Gn = w.PlaceholderContent,
    Kn = w.IteratorPlaceholderContent,
    me = class me extends I.BaseWebBlock {
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
            return [se]
        }
        get modelFactory() {
            return Ot
        }
        get controllerFactory() {
            return Gt
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = me.ifWidget,
                s = me.textWidget,
                u = me.asPrimitiveValue,
                m = me.getTranslation,
                A = this;
            return L.createElement("div", this.getRootNodeProperties(), L.createElement(j, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: i.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Ve.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, L.createElement(c, {
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
            }, L.createElement(C, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("lE4y1p4_cUyDg4u6gB0Weg#Value", "Forgot password"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), L.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
            })), L.createElement(c, {
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
            }, L.createElement(c, {
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
            }, L.createElement(y, {
                image: Ve.Navigation.VersionedURL.getVersionedUrl("img/tradershub.email2.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), L.createElement(c, {
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
            }, L.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "We\u2019ve sent a verification link to " + M.getSignupEmail(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }))), L.createElement(c, {
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
            }, L.createElement(c, {
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
            }, L.createElement(y, {
                image: Ve.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_blue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }), L.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, L.createElement(C, {
                extendedProperties: {
                    style: "margin-bottom: 10px;"
                },
                text: [s(m("gAOjnJo6UEmQdDDWvqw3iQ#Value", "Didn't get an email? "))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }), L.createElement(C, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [s(m("riMD8BNieE+VC9anaRAgtw#Value", "- Check your spam folder."))],
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), L.createElement(C, {
                extendedProperties: {
                    style: "margin-left: 10px;"
                },
                text: [s(m("XlfKqilSdEuhxDi7XQt_HQ#Value", "- Make sure the email isn\u2019t blocked by firewalls or filters."))],
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }))), L.createElement(se, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            }), L.createElement(N, {
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
                        var d = o.clone();
                        return l.resendEmailOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ResendEmailButton"
                },
                _widgetRecordProvider: t
            }, L.createElement(h, {
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
a(me, "View");
var qe = me,
    Xn = qe;
var R = q(J());
var Vr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    Fr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Passwort aktualisiert",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Geben Sie Ihr Passwort ein"
    },
    Hr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Contrase\xF1a actualizada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduzca su contrase\xF1a"
    },
    Nr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Mot de passe mis \xE0 jour",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Entrez votre mot de passe"
    },
    Lr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Password aggiornata",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Inserisci la tua password"
    },
    Wr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Has\u0142o zaktualizowane",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Wprowad\u017A swoje has\u0142o"
    },
    $r = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "Palavra-passe alterada",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "Introduza a sua palavra-passe"
    },
    Mr = {
        "7lHQes3WJUmcTHuOiLZbxQ#Value": "\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D",
        "TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    Kt = {
        "ar-001": {
            translations: Vr,
            isRTL: !0
        },
        "de-DE": {
            translations: Fr,
            isRTL: !1
        },
        "es-ES": {
            translations: Hr,
            isRTL: !1
        },
        "fr-FR": {
            translations: Nr,
            isRTL: !1
        },
        "it-IT": {
            translations: Lr,
            isRTL: !1
        },
        "pl-PL": {
            translations: Wr,
            isRTL: !1
        },
        "pt-PT": {
            translations: $r,
            isRTL: !1
        },
        "ru-RU": {
            translations: Mr,
            isRTL: !1
        }
    };
var G = g; {
    let i = class i extends G.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Kt);
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
                return G.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), G.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), G.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e).then(function() {
                                n.variables.passwordInputValueVar = "", n.variables.isVisibleIn = !1, n.variables.isUpdatedVar = !1, M.setTradingPlatformDxtradePasswordReset(""), M.setTradingPlatformMt5PasswordReset("")
                            })
                        })
                    }, function() {
                        r && r.end()
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
                return G.Logger.startActiveSpan("ResetPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ResetPasswordOnClick"), r.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), G.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ResetPasswordOnClick"), e = t.callContext(e);
                        var s = new G.DataTypes.VariableHolder;
                        return G.Flow.executeAsyncFlow(function() {
                            return n.flush(), x.tradingPlatformPasswordReset$Action(n.variables.passwordInputValueVar, n.variables.platformIn === "dxtrade" ? M.getTradingPlatformDxtradePasswordReset() : M.getTradingPlatformMt5PasswordReset(), n.variables.platformIn, e).then(function(u) {
                                s.value = u
                            }).then(function() {
                                s.value.responseOut.trading_platform_password_resetAttr.equals(G.BuiltinFunctions.integerToLongInteger(1)) ? (n.variables.isUpdatedVar = !0, n.variables.isVisibleIn = !1) : (M.setTradingPlatformMt5PasswordReset(""), M.setTradingPlatformDxtradePasswordReset(""))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__resetPasswordOnClick$Action
        }
        set _resetPasswordOnClick$Action(e) {
            this.__resetPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return G.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "0c9eaac9-ef47-4397-8902-32ab48b20957"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), G.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        resetPasswordOnClick$Action(e) {
            var n = this.controller;
            return G.Logger.startActiveSpan("ResetPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ResetPasswordOnClick"), t.setAttribute("outsystems.function.key", "de9681e5-9ea3-4195-9d9f-4f1899937939"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), G.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Xt = f
}
var Xt, Yt = new G.Controller.ControllerFactory(Xt, V);
var O = q(J());
var D = g,
    Ge = class Ge extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", !0, !1, D.DataTypes.DataTypes.Record, function() {
                return D.DataTypes.ImmutableBase.getData(new D.SystemStructures.PasswordValidationResultRec)
            }, !1, D.SystemStructures.PasswordValidationResultRec), this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", !0, !1, D.DataTypes.DataTypes.Record, function() {
                return D.DataTypes.ImmutableBase.getData(new D.SystemStructures.PasswordComplexityPolicyRec)
            }, !1, D.SystemStructures.PasswordComplexityPolicyRec), this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Password", "passwordIn", "Password", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Length", "lengthIn", "Length", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(Ge, "VariablesRecord");
var He = Ge;
He.init();
var Ke = class Ke extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(Ke, "WidgetsRecord");
var Je = Ke,
    Xe = class Xe extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return He
        }
        static getWidgetsRecordConstructor() {
            return Je
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "Password" in i && (this.variables.passwordIn = i.Password, "_passwordInDataFetchStatus" in i && (this.variables._passwordInDataFetchStatus = i._passwordInDataFetchStatus)), "Length" in i && (this.variables.lengthIn = i.Length, "_lengthInDataFetchStatus" in i && (this.variables._lengthInDataFetchStatus = i._lengthInDataFetchStatus)), "HasAtLeastUppercaseAndLowercase" in i && (this.variables.hasAtLeastUppercaseAndLowercaseIn = i.HasAtLeastUppercaseAndLowercase, "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in i && (this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = i._hasAtLeastUppercaseAndLowercaseInDataFetchStatus)), "HasAtLeastOneNumber" in i && (this.variables.hasAtLeastOneNumberIn = i.HasAtLeastOneNumber, "_hasAtLeastOneNumberInDataFetchStatus" in i && (this.variables._hasAtLeastOneNumberInDataFetchStatus = i._hasAtLeastOneNumberInDataFetchStatus)), "HasAtLeastOneSpecialCharacter" in i && (this.variables.hasAtLeastOneSpecialCharacterIn = i.HasAtLeastOneSpecialCharacter, "_hasAtLeastOneSpecialCharacterInDataFetchStatus" in i && (this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = i._hasAtLeastOneSpecialCharacterInDataFetchStatus))
        }
    };
a(Xe, "Model");
var Ne = Xe;
Ne._hasValidationWidgetsValue = void 0;
var Zt = new D.Model.ModelFactory(Ne);

function Ye(f, i, l, e) {
    function n(u) {
        return u.toUpperCase() != u
    }
    a(n, "hasLowerCase");

    function t(u) {
        return /[A-Z]/.test(u)
    }
    a(t, "containsUppercase");

    function o(u) {
        return /\d/.test(u)
    }
    a(o, "hasNumber");

    function r(u) {
        return u.length >= f.Length
    }
    a(r, "hasGoodLength");

    function s(u) {
        var m = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return m.test(u)
    }
    a(s, "hasSpecialChar"), f.HasLowerCase = f.RequiresLowerCaseAndUpperCase ? n(f.String) : !0, f.HasUpperCase = f.RequiresLowerCaseAndUpperCase ? t(f.String) : !0, f.HasNumber = f.RequiresNumber ? o(f.String) : !0, f.hasGoodLength = f.RequiresNumber ? r(f.String) : !0, f.hasSpecialChar = f.RequiresSpecialChar ? s(f.String) : !0
}
a(Ye, "default");
var b = g; {
    let i = class i extends b.Controller.BaseViewController {
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
                return b.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "1debce88-cb2e-4f11-9869-0fd78206eba4"), r.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), r.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), n.variables.passwordComplexityPolicyVar.minimumLengthAttr = n.variables.lengthIn, n.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = n.variables.hasAtLeastUppercaseAndLowercaseIn, n.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = n.variables.hasAtLeastUppercaseAndLowercaseIn, n.variables.passwordComplexityPolicyVar.numberRequiredAttr = n.variables.hasAtLeastOneNumberIn, n.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = n.variables.hasAtLeastOneSpecialCharacterIn
                    } finally {
                        r && r.end()
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
                return b.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), r.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), r.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e);
                        var s = new b.DataTypes.VariableHolder;
                        return b.Flow.executeAsyncFlow(function() {
                            if (n.variables.isPasswordEmptyVar = b.BuiltinFunctions.length(n.variables.passwordIn) === 0, s.value = b.Logger.startActiveSpan("checkValid", function(u) {
                                    u && (u.setAttribute("code.function", "checkValid"), u.setAttribute("outsystems.function.key", "2db79931-6cd1-41a6-a1b1-6c0293e23188"), u.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), u.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(Ye, "checkValid", "OnParametersChanged", {
                                            RequiresSpecialChar: b.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastOneSpecialCharacterIn, b.DataTypes.DataTypes.Boolean),
                                            RequiresNumber: b.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastOneNumberIn, b.DataTypes.DataTypes.Boolean),
                                            Length: b.DataConversion.JSNodeParamConverter.to(n.variables.lengthIn, b.DataTypes.DataTypes.Integer),
                                            RequiresLowerCaseAndUpperCase: b.DataConversion.JSNodeParamConverter.to(n.variables.hasAtLeastUppercaseAndLowercaseIn, b.DataTypes.DataTypes.Boolean),
                                            String: b.DataConversion.JSNodeParamConverter.to(n.variables.passwordIn, b.DataTypes.DataTypes.Text),
                                            HasLowerCase: b.DataConversion.JSNodeParamConverter.to(!1, b.DataTypes.DataTypes.Boolean),
                                            HasUpperCase: b.DataConversion.JSNodeParamConverter.to(!1, b.DataTypes.DataTypes.Boolean),
                                            HasNumber: b.DataConversion.JSNodeParamConverter.to(!1, b.DataTypes.DataTypes.Boolean),
                                            hasGoodLength: b.DataConversion.JSNodeParamConverter.to(!1, b.DataTypes.DataTypes.Boolean),
                                            hasSpecialChar: b.DataConversion.JSNodeParamConverter.to(!1, b.DataTypes.DataTypes.Boolean)
                                        }, function(m) {
                                            var A = new(t.constructor.getVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult"));
                                            return A.hasLowerCaseOut = b.DataConversion.JSNodeParamConverter.from(m.HasLowerCase, b.DataTypes.DataTypes.Boolean), A.hasUpperCaseOut = b.DataConversion.JSNodeParamConverter.from(m.HasUpperCase, b.DataTypes.DataTypes.Boolean), A.hasNumberOut = b.DataConversion.JSNodeParamConverter.from(m.HasNumber, b.DataTypes.DataTypes.Boolean), A.hasGoodLengthOut = b.DataConversion.JSNodeParamConverter.from(m.hasGoodLength, b.DataTypes.DataTypes.Boolean), A.hasSpecialCharOut = b.DataConversion.JSNodeParamConverter.from(m.hasSpecialChar, b.DataTypes.DataTypes.Boolean), A
                                        }, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), n.variables.passwordValidationResultVar.isValidAttr = s.value.hasLowerCaseOut && s.value.hasUpperCaseOut && s.value.hasNumberOut && s.value.hasGoodLengthOut && s.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !s.value.hasLowerCaseOut, n.variables.passwordValidationResultVar.missingMinimumLengthAttr = !s.value.hasGoodLengthOut, n.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !s.value.hasUpperCaseOut, n.variables.passwordValidationResultVar.missingNumberAttr = !s.value.hasNumberOut, n.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !s.value.hasSpecialCharOut, n.variables.passwordValidationResultVar.isValidAttr) {
                                if (n.variables.isValidPasswordVar) return b.Flow.returnAsync();
                                n.variables.isValidPasswordVar = !0
                            } else if (n.variables.isValidPasswordVar) n.variables.isValidPasswordVar = !1;
                            else return b.Flow.returnAsync();
                            return t.compliant$Action(n.variables.passwordValidationResultVar.isValidAttr, e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return b.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
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
            return b.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "d04d1920-a487-41a3-b3e6-a8d1aa85abff"), t.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial"), t.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), b.Flow.tryFinally(function() {
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
            return Nt.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    Ze = f, Ze.registerVariableGroupType("CustomComponentsOfficial.PasswordPolicy.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
        name: "HasLowerCase",
        attrName: "hasLowerCaseOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasUpperCase",
        attrName: "hasUpperCaseOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "HasNumber",
        attrName: "hasNumberOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasGoodLength",
        attrName: "hasGoodLengthOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }, {
        name: "hasSpecialChar",
        attrName: "hasSpecialCharOut",
        mandatory: !0,
        dataType: b.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }])
}
var Ze, er = new b.Controller.ControllerFactory(Ze, Lt);
var xo = w.PlaceholderContent,
    ko = w.IteratorPlaceholderContent,
    ve = class ve extends I.BaseWebBlock {
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
            return Zt
        }
        get controllerFactory() {
            return er
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = ve.ifWidget,
                s = ve.textWidget,
                u = ve.asPrimitiveValue,
                m = ve.getTranslation,
                A = this;
            return O.createElement("div", this.getRootNodeProperties(), O.createElement(c, {
                align: 0,
                animate: !1,
                style: "font-size-xs",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, O.createElement(c, {
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
            }, r(i.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [O.createElement(c, {
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
                }, O.createElement(c, {
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
                }, r(i.variables.isPasswordEmptyVar, !1, this, function() {
                    return [O.createElement(F, {
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
                    return [r(i.variables.passwordValidationResultVar.missingMinimumLengthAttr, !1, this, function() {
                        return [O.createElement(F, {
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
                        return [O.createElement(F, {
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
                })), O.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: i.getCachedValue(e.getId("W2WQgo1KZ0W9aSiNkHstVg.Style"), function() {
                        return i.variables.isPasswordEmptyVar ? "" : i.variables.passwordValidationResultVar.missingMinimumLengthAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return i.variables.isPasswordEmptyVar
                    }, function() {
                        return i.variables.passwordValidationResultVar.missingMinimumLengthAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, O.createElement(C, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    text: ["At least "],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), O.createElement(h, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 15px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: i.variables.passwordComplexityPolicyVar.minimumLengthAttr.toString(),
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), O.createElement(C, {
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
            }), r(i.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && i.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, !1, this, function() {
                return [O.createElement(c, {
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
                }, O.createElement(c, {
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
                }, r(i.variables.isPasswordEmptyVar, !1, this, function() {
                    return [O.createElement(F, {
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
                    return [r(i.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || i.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, !1, this, function() {
                        return [O.createElement(F, {
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
                        return [O.createElement(F, {
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
                })), O.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: i.getCachedValue(e.getId("wS63C2AnqkiB2hn+etNgfQ.Style"), function() {
                        return i.variables.isPasswordEmptyVar ? "" : i.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || i.variables.passwordValidationResultVar.missingUpperCaseLetterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return i.variables.isPasswordEmptyVar
                    }, function() {
                        return i.variables.passwordValidationResultVar.missingLowerCaseLetterAttr
                    }, function() {
                        return i.variables.passwordValidationResultVar.missingUpperCaseLetterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "16"
                    },
                    _widgetRecordProvider: t
                }, O.createElement(C, {
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
            }), r(i.variables.passwordComplexityPolicyVar.numberRequiredAttr, !1, this, function() {
                return [O.createElement(c, {
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
                }, O.createElement(c, {
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
                }, r(i.variables.isPasswordEmptyVar, !1, this, function() {
                    return [O.createElement(F, {
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
                    return [r(i.variables.passwordValidationResultVar.missingNumberAttr, !1, this, function() {
                        return [O.createElement(F, {
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
                        return [O.createElement(F, {
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
                })), O.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: i.getCachedValue(e.getId("AFlsfhJmA0CeXZDlx_IIzg.Style"), function() {
                        return i.variables.isPasswordEmptyVar ? "" : i.variables.passwordValidationResultVar.missingNumberAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return i.variables.isPasswordEmptyVar
                    }, function() {
                        return i.variables.passwordValidationResultVar.missingNumberAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "23"
                    },
                    _widgetRecordProvider: t
                }, O.createElement(C, {
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
            }), r(i.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, !1, this, function() {
                return [O.createElement(c, {
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
                }, O.createElement(c, {
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
                }, r(i.variables.isPasswordEmptyVar, !1, this, function() {
                    return [O.createElement(F, {
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
                    return [r(i.variables.passwordValidationResultVar.missingSpecialCharacterAttr, !1, this, function() {
                        return [O.createElement(F, {
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
                        return [O.createElement(F, {
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
                })), O.createElement(c, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: i.getCachedValue(e.getId("cEfQZ9nEOkWYb+Y6Pe1s7w.Style"), function() {
                        return i.variables.isPasswordEmptyVar ? "" : i.variables.passwordValidationResultVar.missingSpecialCharacterAttr ? "password-policy__rule--error" : "password-policy__rule--success"
                    }, function() {
                        return i.variables.isPasswordEmptyVar
                    }, function() {
                        return i.variables.passwordValidationResultVar.missingSpecialCharacterAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "30"
                    },
                    _widgetRecordProvider: t
                }, O.createElement(C, {
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
a(ve, "View");
var et = ve,
    tt = et;
var ne = g,
    Mo = w.PlaceholderContent,
    Bo = w.IteratorPlaceholderContent,
    ge = class ge extends I.BaseWebBlock {
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
            return [tt, se]
        }
        get modelFactory() {
            return Rt
        }
        get controllerFactory() {
            return Yt
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = ge.ifWidget,
                s = ge.textWidget,
                u = ge.asPrimitiveValue,
                m = ge.getTranslation,
                A = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(j, {
                extendedProperties: {
                    style: "height: 100%; margin-top: 0px; padding: 16px;"
                },
                showPopup: i.variables.isVisibleIn && !i.variables.isUpdatedVar,
                style: "full-height-popup display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: ne.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, R.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
            }, R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: i.getCachedValue(e.getId("SetUpPassword2.Value"), function() {
                    return "Reset your " + (i.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password"
                }, function() {
                    return i.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    name: "SetUpPassword2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(i.variables._platformInDataFetchStatus)
            }), R.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            })), R.createElement(c, {
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
            }, R.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column display-flex gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CreatePasswordContent3"
                },
                _widgetRecordProvider: t
            }, R.createElement(c, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DescriptionContainer4"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
                value: i.getCachedValue(e.getId("MBFxetrkcUK1tR8I_WsVbw.Value"), function() {
                    return "You can use this password for all your " + (i.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts."
                }, function() {
                    return i.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(i.variables._platformInDataFetchStatus)
            })), R.createElement(ke, {
                _validationProps: {
                    validationService: n
                },
                enabled: !i.variables.isLoadingVar,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 1,
                mandatory: !1,
                maxLength: 16,
                prompt: ne.Injector.resolve(ne.ServiceNames.TranslationsService).getMessage("TqO2XQeEBke7pE3RAPjhCw#ValueExpression.1758829696.1", "Enter your password"),
                style: "form-control",
                variable: i.createVariable(ne.DataTypes.DataTypes.Text, i.variables.passwordInputValueVar, function(d) {
                    i.variables.passwordInputValueVar = d
                }),
                _idProps: {
                    service: e,
                    name: "PasswordInput7"
                },
                _widgetRecordProvider: t
            }), R.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LiveCheckboxContainer5"
                },
                _widgetRecordProvider: t
            }, R.createElement(tt, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Length: 8,
                    Password: i.variables.passwordInputValueVar
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            })))), R.createElement(c, {
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
            }, R.createElement(se, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            }), R.createElement(N, {
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
                        var d = o.clone();
                        return l.resetPasswordOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
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
            })), R.createElement(N, {
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
                        var d = o.clone();
                        return l.closeOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CancelButton"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
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
            })))), R.createElement(j, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;"
                },
                showPopup: i.variables.isUpdatedVar,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper2"
                },
                _widgetRecordProvider: t
            }, R.createElement(c, {
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
            }, R.createElement(C, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("7lHQes3WJUmcTHuOiLZbxQ#Value", "Password updated"))],
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), R.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), R.createElement(c, {
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
            }, R.createElement(c, {
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
            }, R.createElement(y, {
                image: ne.Navigation.VersionedURL.getVersionedUrl("img/tradershub.PasswordSaved.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            })), R.createElement(c, {
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
            }, R.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: i.getCachedValue(e.getId("YNRVaDWGYUqvNeR3YU+nzA.Value"), function() {
                    return "Your " + (i.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " password has \u2028been reset"
                }, function() {
                    return i.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(i.variables._platformInDataFetchStatus)
            })), R.createElement(c, {
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
            }, R.createElement(h, {
                value: i.getCachedValue(e.getId("EHLMqwEON0Sqt0sA5zPRJA.Value"), function() {
                    return "You can now log in to your " + (i.variables.platformIn === "mt5" ? "Deriv MT5" : "Deriv X") + " accounts with your new password on web and mobile."
                }, function() {
                    return i.variables.platformIn
                }),
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: ne.Model.calculateDataFetchStatus(i.variables._platformInDataFetchStatus)
            }))), R.createElement(c, {
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
            }, R.createElement(se, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            }), R.createElement(N, {
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
                        var d = o.clone();
                        return l.closeOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "OK"
                },
                _widgetRecordProvider: t
            }, R.createElement(h, {
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
a(ge, "View");
var rt = ge,
    zo = rt;
var U = q(J());
var Br = {
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
    zr = {
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
    Ur = {
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
    jr = {
        "JOpCme7W6EenufmYu25eRw#Value": "g\xE9rer efficacement des strat\xE9gies bas\xE9es sur des frais.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "Gardez au moins un compte exempt d'\xEAtre un fournisseur de strat\xE9gie",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\xE0 la fois un fournisseur de strat\xE9gies et un compte de collecte de frais.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "ne peut pas \xEAtre"
    },
    Qr = {
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
    qr = {
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
    Jr = {
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
    Gr = {
        "JOpCme7W6EenufmYu25eRw#Value": "\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F\u043C\u0438, \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0431\u043E\u0440\u0430\u0445.",
        "q02llmFnP0ykcjtPnVCfJw#Value": "\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u043E\u0442 \u0440\u043E\u043B\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439",
        "j4NW6o0pbEaOYM4yykmC3g#Value": "\u043A\u0430\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439, \u0442\u0430\u043A \u0438 \u0441\u0447\u0435\u0442 \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u0431\u043E\u0440\u043E\u0432.",
        "KvKTHZR9Lk+MElbGTt7Vvg#Value": "\u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C"
    },
    tr = {
        "ar-001": {
            translations: Br,
            isRTL: !0
        },
        "de-DE": {
            translations: zr,
            isRTL: !1
        },
        "es-ES": {
            translations: Ur,
            isRTL: !1
        },
        "fr-FR": {
            translations: jr,
            isRTL: !1
        },
        "it-IT": {
            translations: Qr,
            isRTL: !1
        },
        "pl-PL": {
            translations: qr,
            isRTL: !1
        },
        "pt-PT": {
            translations: Jr,
            isRTL: !1
        },
        "ru-RU": {
            translations: Gr,
            isRTL: !1
        }
    };
var Le = g; {
    let i = class i extends Le.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, tr);
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
                return Le.Logger.startActiveSpan("HeaderOnClick", function(r) {
                    r && (r.setAttribute("code.function", "HeaderOnClick"), r.setAttribute("outsystems.function.key", "5aca1bf8-c17c-402d-924b-12f8bc6ca9ad"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("HeaderOnClick"), e = t.callContext(e), n.variables.showInfoVar = !n.variables.showInfoVar
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__headerOnClick$Action
        }
        set _headerOnClick$Action(e) {
            this.__headerOnClick$Action = e
        }
        headerOnClick$Action(e) {
            var n = this.controller;
            return Le.Logger.startActiveSpan("HeaderOnClick__proxy", function(t) {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    rr = f
}
var rr, ir = new Le.Controller.ControllerFactory(rr, V);
var nr = g,
    aa = w.PlaceholderContent,
    sa = w.IteratorPlaceholderContent,
    he = class he extends I.BaseWebBlock {
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
            return xt
        }
        get controllerFactory() {
            return ir
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = he.ifWidget,
                s = he.textWidget,
                u = he.asPrimitiveValue,
                m = he.getTranslation,
                A = this;
            return U.createElement("div", this.getRootNodeProperties(), U.createElement(c, {
                align: 0,
                animate: !1,
                style: "important-notes",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, U.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.headerOnClick$Action(l.callContext(d))
                    }, "onClick")
                },
                style: "display-flex align-items-center justify-content-space-between cursor-pointer",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Header"
                },
                _widgetRecordProvider: t
            }, U.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [s(m("bKbhwz3WMEaN6X8SBwDEkA#Value", "Important notes"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), U.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, r(i.variables.showInfoVar, !0, this, function() {
                return [U.createElement(y, {
                    image: nr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.ChevronUpSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [U.createElement(y, {
                    image: nr.Navigation.VersionedURL.getVersionedUrl("img/tradershub.chevronDownSM.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })]
            }))), r(i.variables.showInfoVar, !0, this, function() {
                return [U.createElement(c, {
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
                }, U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("Wu8gdu2m7E2ZQWvJ76W7yA#Value", `1. Log in to cTrader with your Deriv account email and password.
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
                }), U.createElement(c, {
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
                }, U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("6LoFciGR9E2OxvDLEWWOBw#Value", "Note: An account "))],
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }), U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [s(m("KvKTHZR9Lk+MElbGTt7Vvg#Value", "can't be "))],
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }), U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("j4NW6o0pbEaOYM4yykmC3g#Value", "both a strategy provider and a fee collection account. "))],
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                }), U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px; font-weight: bold;"
                    },
                    text: [s(m("q02llmFnP0ykcjtPnVCfJw#Value", "Keep at least one account free from being a strategy provider "))],
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }), U.createElement(C, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    text: [s(m("JOpCme7W6EenufmYu25eRw#Value", "to manage fee-based strategies effectively."))],
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
a(he, "View");
var it = he,
    la = it;
var Oe = q(J());
var or = {};
var ar = g; {
    let i = class i extends ar.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, or);
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    sr = f
}
var sr, lr = new ar.Controller.ControllerFactory(sr, V);
var nt = g,
    Ea = w.PlaceholderContent,
    Sa = w.IteratorPlaceholderContent,
    pe = class pe extends I.BaseWebBlock {
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
            return kt
        }
        get controllerFactory() {
            return lr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = pe.ifWidget,
                s = pe.textWidget,
                u = pe.asPrimitiveValue,
                m = pe.getTranslation,
                A = this;
            return Oe.createElement("div", this.getRootNodeProperties(), Oe.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                style: "maintenance-message",
                visible: i.variables.isDowntimeIn,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: nt.Model.calculateDataFetchStatus(i.variables._isDowntimeInDataFetchStatus)
            }, Oe.createElement(y, {
                image: nt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InfoBlue.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), Oe.createElement(h, {
                extendedProperties: {
                    style: "color: #4F575E; font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: i.variables.infoMessageIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: nt.Model.calculateDataFetchStatus(i.variables._infoMessageInDataFetchStatus)
            })))
        }
    };
a(pe, "View");
var ot = pe,
    Se = ot;
var v = q(J());
var Kr = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0648",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "\u0645\u062A\u0627\u062D \u0644\u0640",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "\u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629: \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u062D\u062F \u0627\u0644\u0633\u0627\u0639\u0629 01:00 \u0628\u062A\u0648\u0642\u064A\u062A \u062C\u0631\u064A\u0646\u062A\u0634 \u0644\u0645\u062F\u0629 \u062A\u0635\u0644 \u0625\u0644\u0649 \u0633\u0627\u0639\u062A\u064A\u0646. \u0642\u062F \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u062E\u062F\u0645\u0629.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u062A\u062D\u0648\u064A\u0644",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062D\u0633\u0627\u0628",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    Xr = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannen, um die mobile App herunterzuladen.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "und",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Verf\xFCgbar f\xFCr",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "W\xF6chentliche Wartung: Sonntags um 01:00 GMT f\xFCr bis zu 2 Stunden. Der Service kann beeintr\xE4chtigt sein.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Passwort vergessen?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\xDCberweisung",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Kontodaten",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Kopiert!"
    },
    Yr = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Escanee para descargar la aplicaci\xF3n m\xF3vil.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "y",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Mantenimiento semanal: Domingos a la 01:00 GMT durante un m\xE1ximo de 2 horas. El servicio puede verse afectado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\xBFOlvid\xF3 la contrase\xF1a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transferencia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Detalles de la cuenta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\xA1Copiado!"
    },
    Zr = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "et",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponible pour",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Mot de passe oubli\xE9 ?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfert",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "D\xE9tails du compte",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copi\xE9 !"
    },
    ei = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Scansiona per scaricare l'app mobile.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Disponibile per",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manutenzione settimanale: domenica alle 01:00 GMT per un massimo di 2 ore. Il servizio potrebbe subire interruzioni.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Hai dimenticato la password?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Trasferimento",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Dettagli del conto",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiato!"
    },
    ti = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Zeskanuj, aby pobra\u0107 aplikacj\u0119 mobiln\u0105.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " i",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dost\u0119pne na",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Cotygodniona konserwacja: Niedziele o 01:00 GMT do 2 godz. Mo\u017Ce mie\u0107 wp\u0142yw na dost\u0119pno\u015B\u0107 us\u0142ug.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Nie pami\u0119tasz has\u0142a?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Przelew",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Szczeg\xF3\u0142y konta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Skopiowane!"
    },
    ri = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "Digitalize para transferir a aplica\xE7\xE3o m\xF3vel.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": " e",
        "bnNmCWFI7kujP2WEB9S+gg#Value": "Dispon\xEDvel para",
        "Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1": "Manuten\xE7\xE3o semanal: Domingos \xE0s 01:00 GMT, com uma dura\xE7\xE3o de at\xE9 2 horas. O servi\xE7o poder\xE1 ser afetado.",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "Esqueceu a palavra-passe?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "Transfer\xEAncia",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "Informa\xE7\xE3o da conta",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "Copiado!"
    },
    ii = {
        "jaHw+m0lXEyM3mg6fxY1lw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "S3d3t1eSmUm5WVx_6xyWnw#Value": "\u0438",
        "kbdHtooVbUi8Rr8jct4z_A#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "stfUk9qHTUuvEO+Qfaqcig#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "_5rlJUomd0WgdtC4GTMIrg#Value": "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438",
        "a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    cr = {
        "ar-001": {
            translations: Kr,
            isRTL: !0
        },
        "de-DE": {
            translations: Xr,
            isRTL: !1
        },
        "es-ES": {
            translations: Yr,
            isRTL: !1
        },
        "fr-FR": {
            translations: Zr,
            isRTL: !1
        },
        "it-IT": {
            translations: ei,
            isRTL: !1
        },
        "pl-PL": {
            translations: ti,
            isRTL: !1
        },
        "pt-PT": {
            translations: ri,
            isRTL: !1
        },
        "ru-RU": {
            translations: ii,
            isRTL: !1
        }
    };

function at(f, i, l) {
    window.open("https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux", "_blank")
}
a(at, "default");

function st(f, i, l, e) {
    f.FormattedLogin = f.SelectedAccountLogin.slice(3)
}
a(st, "default");

function lt(f, i, l, e) {
    window.open(f.WebtraderUrl + "?login=" + f.Login + "&server=" + f.Server, "_blank")
}
a(lt, "default");

function ct(f, i, l, e) {
    navigator.clipboard.writeText(f.TextToCopy)
}
a(ct, "default");
var P = g; {
    let i = class i extends P.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, cr);
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
                return P.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), P.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
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
                return P.Logger.startActiveSpan("Linux_OnClick", function(r) {
                    r && (r.setAttribute("code.function", "Linux_OnClick"), r.setAttribute("outsystems.function.key", "0f978c28-ab9c-4ab0-bf80-6fceafded2a9"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("Linux_OnClick"), e = t.callContext(e), P.Logger.startActiveSpan("JavaScript1", function(s) {
                            s && (s.setAttribute("code.function", "JavaScript1"), s.setAttribute("outsystems.function.key", "657bc2ad-bd0a-4fb2-b9e2-73831402464a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(at, "JavaScript1", "Linux_OnClick", null, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
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
                return P.Logger.startActiveSpan("FormatLogin", function(r) {
                    r && (r.setAttribute("code.function", "FormatLogin"), r.setAttribute("outsystems.function.key", "6af7ff83-ca6b-4cc8-a542-281db4b76684"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("FormatLogin"), e = t.callContext(e);
                        var s = new P.DataTypes.VariableHolder;
                        s.value = P.Logger.startActiveSpan("FormatDynamicLogin", function(u) {
                            u && (u.setAttribute("code.function", "FormatDynamicLogin"), u.setAttribute("outsystems.function.key", "9cff8aa6-5c38-466f-9b25-9407fcd47bf5"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(st, "FormatDynamicLogin", "FormatLogin", {
                                    SelectedAccountLogin: P.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.loginAttr, P.DataTypes.DataTypes.Text),
                                    FormattedLogin: P.DataConversion.JSNodeParamConverter.to("", P.DataTypes.DataTypes.Text)
                                }, function(m) {
                                    var A = new(t.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult"));
                                    return A.formattedLoginOut = P.DataConversion.JSNodeParamConverter.from(m.FormattedLogin, P.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), n.variables.displayLoginVar = s.value.formattedLoginOut
                    } finally {
                        r && r.end()
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
                return P.Logger.startActiveSpan("WebterminalOnClick", function(r) {
                    r && (r.setAttribute("code.function", "WebterminalOnClick"), r.setAttribute("outsystems.function.key", "7db26802-01a6-4020-86d6-25ef33330a84"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), P.Logger.startActiveSpan("windowOpen", function(s) {
                            s && (s.setAttribute("code.function", "windowOpen"), s.setAttribute("outsystems.function.key", "57324806-8c70-436a-8a40-9a348d4f656a"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(lt, "windowOpen", "WebterminalOnClick", {
                                    Login: P.DataConversion.JSNodeParamConverter.to(n.variables.displayLoginVar, P.DataTypes.DataTypes.Text),
                                    Server: P.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.server_infoAttr.environmentAttr, P.DataTypes.DataTypes.Text),
                                    WebtraderUrl: P.DataConversion.JSNodeParamConverter.to(n.variables.selectedAccountIn.white_label_linksAttr.webtrader_urlAttr, P.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
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
                return P.Logger.startActiveSpan("DownloadAppOnClick", function(r) {
                    r && (r.setAttribute("code.function", "DownloadAppOnClick"), r.setAttribute("outsystems.function.key", "8843b791-01bf-4ecf-8072-faa9886c35a9"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), x.openDeepLink$Action("mt5", n.variables.displayLoginVar, n.variables.selectedAccountIn.server_infoAttr.environmentAttr, e)
                    } finally {
                        r && r.end()
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
                    r = this.idService;
                return P.Logger.startActiveSpan("CopyToClipboard", function(s) {
                    s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "d0fb12b9-2f36-4c33-ae28-fed40afb51dd"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), n = o.callContext(n);
                        var u = new P.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars")));
                        u.value.textToCopyInLocal = e, P.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "f3bd06ff-fdb9-4475-aac5-755e9d375a61"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(ct, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: P.DataConversion.JSNodeParamConverter.to(u.value.textToCopyInLocal, P.DataTypes.DataTypes.Text)
                                }, function(A) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), P.FeedbackMessageService.showFeedbackMessage(P.Injector.resolve(P.ServiceNames.TranslationsService).getMessage("a2fjE0+800Km_yS4o0ha2A#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        s && s.end()
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
                return P.Logger.startActiveSpan("ForgotPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ForgotPasswordOnClick"), r.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), P.Flow.executeAsyncFlow(function() {
                            return Ct.consoleLog$Action("ForgotPasswordOnClick Platform " + n.variables.selectedAccountIn.platformAttr, 0, e), t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__forgotPasswordOnClick$Action
        }
        set _forgotPasswordOnClick$Action(e) {
            this.__forgotPasswordOnClick$Action = e
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return P.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "06987c87-2cc1-4c9e-aa7d-095631afc545"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        linux_OnClick$Action(e) {
            var n = this.controller;
            return P.Logger.startActiveSpan("Linux_OnClick__proxy", function(t) {
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
            return P.Logger.startActiveSpan("FormatLogin__proxy", function(t) {
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
            return P.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
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
            return P.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
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
            return P.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
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
            return P.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "e945c4b7-3c28-4023-807f-cabc84ad4981"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), P.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    We = f, We.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.FormatLogin$formatDynamicLoginJSResult", [{
        name: "FormattedLogin",
        attrName: "formattedLoginOut",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), We.registerVariableGroupType("tradershub.CFDBlocks.MT5TradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: P.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var We, dr = new P.Controller.ControllerFactory(We, V);
var W = g,
    as = w.PlaceholderContent,
    ss = w.IteratorPlaceholderContent,
    be = class be extends I.BaseWebBlock {
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
            return [Se]
        }
        get modelFactory() {
            return It
        }
        get controllerFactory() {
            return dr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = be.ifWidget,
                s = be.textWidget,
                u = be.asPrimitiveValue,
                m = be.getTranslation,
                A = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(j, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: i.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, v.createElement(c, {
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
            }, v.createElement(C, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("_5rlJUomd0WgdtC4GTMIrg#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), v.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
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
            }, v.createElement(y, {
                image: W.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon2"
                },
                _widgetRecordProvider: t
            }))), v.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mt5TradeModalContent"
                },
                _widgetRecordProvider: t
            }, v.createElement(c, {
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
            }, v.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, v.createElement(y, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: i.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), v.createElement(c, {
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
            }, v.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), v.createElement(Ie, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, v.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), v.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            })))), v.createElement(N, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    try {
                        W.Navigation.navigateTo(W.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {
                            to: W.DataConversion.ServerDataConverter.to(i.variables.selectedAccountIn.loginAttr, W.DataTypes.DataTypes.Text)
                        }), W.Transitions.createTransition(W.Transitions.TransitionAnimation.Fade), null, !0)
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
            }, v.createElement(y, {
                image: W.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }), v.createElement(C, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [s(m("stfUk9qHTUuvEO+Qfaqcig#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), v.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AccountInfoRow2"
                },
                _widgetRecordProvider: t
            }, v.createElement(c, {
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
            }, v.createElement(c, {
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
            }, v.createElement(h, {
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
            })), v.createElement(c, {
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
            }, v.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.landing_companyAttr,
                _idProps: {
                    service: e,
                    name: "DynamicBrokerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), v.createElement(F, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(i.variables.selectedAccountIn.landing_companyAttr, l.callContext(d))
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
            }))), v.createElement(c, {
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
            }, v.createElement(c, {
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
            }, v.createElement(h, {
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
            })), v.createElement(c, {
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
            }, v.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.server_infoAttr.environmentAttr,
                _idProps: {
                    service: e,
                    name: "DynamicServerLabel2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), v.createElement(F, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(i.variables.selectedAccountIn.server_infoAttr.environmentAttr, l.callContext(d))
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
            }))), v.createElement(c, {
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
            }, v.createElement(c, {
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
            }, v.createElement(h, {
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
            })), v.createElement(c, {
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
            }, v.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.displayLoginVar,
                _idProps: {
                    service: e,
                    name: "DynamicLoginIdLabel2"
                },
                _widgetRecordProvider: t
            }), v.createElement(F, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(i.variables.selectedAccountIn.loginAttr, l.callContext(d))
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
            })))), v.createElement(c, {
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
            }, v.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
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
            }, v.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("kbdHtooVbUi8Rr8jct4z_A#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "38"
                },
                _widgetRecordProvider: t
            }))), v.createElement(Se, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: W.Injector.resolve(W.ServiceNames.TranslationsService).getMessage("Dlo8lQIlvk2_qaFURYsfMQ#Value.1330676080.1", "Weekly maintenance: Sundays at 01:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: i.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: W.Model.calculateDataFetchStatus(i.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            })), v.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: i.getCachedValue(e.getId("Mt5TradeModalFooter.class"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
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
            }, v.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, v.createElement(N, {
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
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: i.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return S.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, v.createElement(F, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "43"
                },
                _widgetRecordProvider: t
            }), v.createElement(h, {
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
            })), v.createElement(N, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#1a78cb")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.webterminalOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, v.createElement(F, {
                extendedProperties: {
                    style: i.getCachedValue(e.getId("ruZVukZi8Ee4oehk0bQhGA.style"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
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
            }), v.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
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
            })), v.createElement(N, {
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
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: i.getCachedValue(e.getId("DesktopDownloadAppLink2.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "DesktopDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, v.createElement(F, {
                icon: "desktop",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "49"
                },
                _widgetRecordProvider: t
            }), v.createElement(h, {
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
            }))), v.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-bottom: 16px; margin-top: 16px; text-align: center;"
                },
                style: "display-flex justify-content-center column-gap-xs align-items-baseline",
                visible: i.getCachedValue(e.getId("AvailableForMacOSAndLinuxText2.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "AvailableForMacOSAndLinuxText2"
                },
                _widgetRecordProvider: t
            }, v.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("bnNmCWFI7kujP2WEB9S+gg#Value", "Available for"))],
                _idProps: {
                    service: e,
                    uuid: "52"
                },
                _widgetRecordProvider: t
            }), v.createElement(Me, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Macos"
                },
                _widgetRecordProvider: t
            }, v.createElement(C, {
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
            })), v.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("S3d3t1eSmUm5WVx_6xyWnw#Value", " and "))],
                _idProps: {
                    service: e,
                    uuid: "55"
                },
                _widgetRecordProvider: t
            }), v.createElement(Me, {
                enabled: !0,
                gridProperties: {
                    marginLeft: "0"
                },
                onClick: a(function() {
                    var d = o.clone();
                    l.linux_OnClick$Action(l.callContext(d))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "56"
                },
                _widgetRecordProvider: t
            }, v.createElement(C, {
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
            }))), v.createElement(c, {
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
                visible: i.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, v.createElement(y, {
                gridProperties: {
                    width: "80px"
                },
                image: W.Navigation.VersionedURL.getVersionedUrl("img/tradershub.mt5Onelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "59"
                },
                _widgetRecordProvider: t
            }), v.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("jaHw+m0lXEyM3mg6fxY1lw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText2"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(be, "View");
var dt = be,
    ls = dt;
var E = q(J());
var ni = {
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
    oi = {
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
    ai = {
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
    si = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "Scannez pour t\xE9l\xE9charger l'application mobile.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X terminal web",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "Mot de passe oubli\xE9 ?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "Nom d'utilisateur",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "Transfert",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "D\xE9tails du compte",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "Copi\xE9 !"
    },
    li = {
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
    ci = {
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
    di = {
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
    ui = {
        "mrqnSVBRmE6If_BJN329Mw#Value": "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        "izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1": "Deriv X \u0432\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1": "Deriv X app",
        "zyRf+i4DOEay7byfR1VdqQ#Value": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?",
        "6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1": "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        "0A55Iqpuk0ym_YWurf8vgA#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "oN_h5NvgWUSd55sAGYve9Q#Value": "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0441\u0447\u0435\u0442\u0430",
        "SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    ur = {
        "ar-001": {
            translations: ni,
            isRTL: !0
        },
        "de-DE": {
            translations: oi,
            isRTL: !1
        },
        "es-ES": {
            translations: ai,
            isRTL: !1
        },
        "fr-FR": {
            translations: si,
            isRTL: !1
        },
        "it-IT": {
            translations: li,
            isRTL: !1
        },
        "pl-PL": {
            translations: ci,
            isRTL: !1
        },
        "pt-PT": {
            translations: di,
            isRTL: !1
        },
        "ru-RU": {
            translations: ui,
            isRTL: !1
        }
    };

function ut(f, i, l, e) {
    window.open(f.AccountType = "https://dx.deriv.com/", "_blank")
}
a(ut, "default");

function ft(f, i, l, e) {
    navigator.clipboard.writeText(f.TextToCopy)
}
a(ft, "default");
var k = g; {
    let i = class i extends k.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, ur);
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
                return k.Logger.startActiveSpan("ForgotPasswordOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ForgotPasswordOnClick"), r.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), k.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("ForgotPasswordOnClick"), e = t.callContext(e), k.Flow.executeAsyncFlow(function() {
                            return t.forgotPasswordEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
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
                return k.Logger.startActiveSpan("WebterminalOnClick", function(r) {
                    r && (r.setAttribute("code.function", "WebterminalOnClick"), r.setAttribute("outsystems.function.key", "2703e66a-7bba-4454-8fa6-06b8a723e839"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("WebterminalOnClick"), e = t.callContext(e), k.Logger.startActiveSpan("DxWebterminal", function(s) {
                            s && (s.setAttribute("code.function", "DxWebterminal"), s.setAttribute("outsystems.function.key", "e255b3cd-27fd-4e18-9e8d-65a70a49caab"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ut, "DxWebterminal", "WebterminalOnClick", {
                                    AccountType: k.DataConversion.JSNodeParamConverter.to(M.getAccountType(), k.DataTypes.DataTypes.Text)
                                }, function(u) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        r && r.end()
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
                return k.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), k.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), k.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
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
                return k.Logger.startActiveSpan("DownloadAppOnClick", function(r) {
                    r && (r.setAttribute("code.function", "DownloadAppOnClick"), r.setAttribute("outsystems.function.key", "b2736a09-9cd7-4ecb-b1bb-0076e660b3dd"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("DownloadAppOnClick"), e = t.callContext(e), x.openDeepLink$Action(n.variables.selectedAccountIn.platformAttr, "", "", e)
                    } finally {
                        r && r.end()
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
                    r = this.idService;
                return k.Logger.startActiveSpan("CopyToClipboard", function(s) {
                    s && (s.setAttribute("code.function", "CopyToClipboard"), s.setAttribute("outsystems.function.key", "f9ff6bc1-a5a0-4f36-8333-3e5da30ca13c"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CopyToClipboard"), n = o.callContext(n);
                        var u = new k.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars")));
                        u.value.textToCopyInLocal = e, k.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "fcdde90d-dd04-4fbb-9c69-59f7b4b83a9f"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(ft, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: k.DataConversion.JSNodeParamConverter.to(u.value.textToCopyInLocal, k.DataTypes.DataTypes.Text)
                                }, function(A) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), k.FeedbackMessageService.showFeedbackMessage(k.Injector.resolve(k.ServiceNames.TranslationsService).getMessage("SBFqhR9H1EuKxd1vJcE86Q#Message.-1677264451.1", "Copied!"), 0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(e) {
            this.__copyToClipboard$Action = e
        }
        forgotPasswordOnClick$Action(e) {
            var n = this.controller;
            return k.Logger.startActiveSpan("ForgotPasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ForgotPasswordOnClick"), t.setAttribute("outsystems.function.key", "189b07a1-5293-4978-8357-dc98ad4be7d5"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), k.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._forgotPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        webterminalOnClick$Action(e) {
            var n = this.controller;
            return k.Logger.startActiveSpan("WebterminalOnClick__proxy", function(t) {
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
            return k.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "74296830-bc30-4317-8be2-9b105aaf6a2f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), k.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._closeOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        downloadAppOnClick$Action(e) {
            var n = this.controller;
            return k.Logger.startActiveSpan("DownloadAppOnClick__proxy", function(t) {
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
            return k.Logger.startActiveSpan("CopyToClipboard__proxy", function(o) {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    mt = f, mt.registerVariableGroupType("tradershub.CFDBlocks.DerivXTradeModal.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: k.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var mt, fr = new k.Controller.ControllerFactory(mt, V);
var H = g,
    Ds = w.PlaceholderContent,
    Vs = w.IteratorPlaceholderContent,
    _e = class _e extends I.BaseWebBlock {
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
            return [Se]
        }
        get modelFactory() {
            return Tt
        }
        get controllerFactory() {
            return fr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = _e.ifWidget,
                s = _e.textWidget,
                u = _e.asPrimitiveValue,
                m = _e.getTranslation,
                A = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(j, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: i.variables.isVisibleIn,
                style: "full-height-popup",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, E.createElement(c, {
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
            }, E.createElement(C, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("oN_h5NvgWUSd55sAGYve9Q#Value", "Account details"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), E.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon3"
                },
                _widgetRecordProvider: t
            })), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "overflow: scroll; height: calc(100vh - 200px);" : "")
                },
                style: "display-flex flex-direction-column display-flex flex-1 gap-m",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "DxtradeTradeModalContent"
                },
                _widgetRecordProvider: t
            }, E.createElement(c, {
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
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center flex-1",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "IconAndText2"
                },
                _widgetRecordProvider: t
            }, E.createElement(y, {
                extendedProperties: {
                    style: "height: 40px; margin-right: 16px;"
                },
                gridProperties: {
                    width: "40px"
                },
                style: "display-flex ",
                type: 1,
                url: i.variables.selectedAccountIn.iconAttr,
                _idProps: {
                    service: e,
                    name: "ProductIcon2"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(c, {
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
            }, E.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.labelAttr,
                _idProps: {
                    service: e,
                    name: "ProductName3"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(Ie, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    name: "ProductBalanceLabel2"
                },
                _widgetRecordProvider: t
            }, E.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.display_balanceAttr,
                _idProps: {
                    service: e,
                    name: "ProductBalance2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(h, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.currencyAttr,
                _idProps: {
                    service: e,
                    name: "ProductCurrency2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            })))), E.createElement(N, {
                enabled: !0,
                extendedProperties: {
                    style: "background-color: #ff4450;"
                },
                isDefault: !1,
                onClick: a(function() {
                    try {
                        H.Navigation.navigateTo(H.Navigation.generateScreenURL("tradershub", "wallets/transfer/:to?", {}), H.Transitions.createTransition(H.Transitions.TransitionAnimation.Fade), null, !0)
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
            }, E.createElement(y, {
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMArrowUpArrowDown.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }), E.createElement(C, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 12px; font-weight: bold;"
                },
                text: [s(m("0A55Iqpuk0ym_YWurf8vgA#Value", "Transfer"))],
                _idProps: {
                    service: e,
                    name: "TransferText2"
                },
                _widgetRecordProvider: t
            }))), E.createElement(c, {
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
            }, E.createElement(c, {
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
            }, E.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("6w4_kLRGKEehwH+F92jzQw#ValueExpression.-201069322.1", "Username"),
                _idProps: {
                    service: e,
                    name: "UsernameLabel"
                },
                _widgetRecordProvider: t
            })), E.createElement(c, {
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
            }, E.createElement(h, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: i.variables.selectedAccountIn.loginAttr,
                _idProps: {
                    service: e,
                    name: "DynamicUsernameLabel"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._selectedAccountInDataFetchStatus)
            }), E.createElement(F, {
                extendedEvents: {
                    onClick: a(function() {
                        var d = o.clone();
                        l.copyToClipboard$Action(i.variables.selectedAccountIn.loginAttr, l.callContext(d))
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
            }))), E.createElement(c, {
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
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.forgotPasswordOnClick$Action(l.callContext(d))
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
            }, E.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold; text-decoration: underline;"
                },
                style: "cursor-pointer",
                text: [s(m("zyRf+i4DOEay7byfR1VdqQ#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            }))), E.createElement(Se, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    InfoMessage: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("9SLCYD2ApkW_I67s5NFE+Q#Value.881558859.1", "Weekly maintenance: Sundays at 06:00 GMT for up to 2 hours. Service may be affected."),
                    IsDowntime: i.variables.isDowntimeIn,
                    _isDowntimeInDataFetchStatus: H.Model.calculateDataFetchStatus(i.variables._isDowntimeInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
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
            })), E.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: i.getCachedValue(e.getId("DxtradeTradeModalFooter.class"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "cfd-modal-sticky-footer" : ""
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
            }, E.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "CTAButtonsContainer2"
                },
                _widgetRecordProvider: t
            }, E.createElement(N, {
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
                    var d = o.clone();
                    l.downloadAppOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: i.getCachedValue(e.getId("MobileDownloadAppLink2.Visible"), function() {
                    return S.isPhone$Action(o).isPhoneOut
                }),
                _idProps: {
                    service: e,
                    name: "MobileDownloadAppLink2"
                },
                _widgetRecordProvider: t
            }, E.createElement(F, {
                icon: "mobile",
                iconSize: 0,
                style: "icon",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }), E.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("7Wx1jTejhkyLrUwsdmnrmw#ValueExpression.758149271.1", "Deriv X app"),
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            })), E.createElement(N, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; font-weight: normal; height: 48px; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "background:#f3f6f8" : "background:#ff4450")
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0"
                },
                isDefault: !1,
                onClick: a(function() {
                    var d = o.clone();
                    l.webterminalOnClick$Action(l.callContext(d))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "WebTerminalLink2"
                },
                _widgetRecordProvider: t
            }, E.createElement(F, {
                extendedProperties: {
                    style: i.getCachedValue(e.getId("n_TJr+KecE+HkzWKnzBg3w.style"), function() {
                        return S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white"
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
            }), E.createElement(h, {
                extendedProperties: {
                    style: "font-size: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "color:black" : "color:white")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter",
                    width: "auto"
                },
                value: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("izfsKxgVL06RKkI_PaWyoA#ValueExpression.187765778.1", "Deriv X web terminal"),
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }))), E.createElement(c, {
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
                visible: i.getCachedValue(e.getId("ScanToDownloadContainer.Visible"), function() {
                    return S.isDesktop$Action(o).isDesktopOut
                }),
                _idProps: {
                    service: e,
                    name: "ScanToDownloadContainer"
                },
                _widgetRecordProvider: t
            }, E.createElement(y, {
                gridProperties: {
                    width: "80px"
                },
                image: H.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dxtradeOnelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }), E.createElement(C, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: normal;"
                },
                text: [s(m("mrqnSVBRmE6If_BJN329Mw#Value", "Scan to download the mobile app."))],
                _idProps: {
                    service: e,
                    name: "ScanToDownloadText3"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(_e, "View");
var vt = _e,
    Fs = vt;
var B = q(J());
var fi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u0641\u0634\u0644",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u0641\u0634\u0644",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0645\u0643\u062A\u0645\u0644",
        "somkOTVlNkWj6olwMh4slw#Value": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
    },
    mi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fehlgeschlagen",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fehlgeschlagen",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verifiziert",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Abgeschlossen",
        "somkOTVlNkWj6olwMh4slw#Value": "In \xDCberpr\xFCfung",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In \xDCberpr\xFCfung"
    },
    vi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Fallido",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Fallido",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completado",
        "somkOTVlNkWj6olwMh4slw#Value": "En revisi\xF3n",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En revisi\xF3n"
    },
    gi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\xC9chou\xE9",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\xC9chou\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "V\xE9rifi\xE9",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Termin\xE9",
        "somkOTVlNkWj6olwMh4slw#Value": "En r\xE9vision",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "En r\xE9vision"
    },
    hi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Operazione non riuscita",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Operazione non riuscita",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificato",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Completato",
        "somkOTVlNkWj6olwMh4slw#Value": "In revisione",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "In revisione"
    },
    pi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Niepowodzenie",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Niepowodzenie",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Zweryfikowane",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Zako\u0144czono",
        "somkOTVlNkWj6olwMh4slw#Value": "W trakcie sprawdzania",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "W trakcie sprawdzania"
    },
    bi = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "Falhou",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "Falhou",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "Verificado",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "Conclu\xEDdo",
        "somkOTVlNkWj6olwMh4slw#Value": "Em an\xE1lise",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "Em an\xE1lise"
    },
    _i = {
        "aK_wOyqFv06BBkBTCUMb_w#Value": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1": "\u041D\u0435\u0443\u0434\u0430\u0447\u0430",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
        "P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        "somkOTVlNkWj6olwMh4slw#Value": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438",
        "s7xI84343EmHa3yrSOasog#Condition.415251123.1": "\u041D\u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u0438\u0438"
    },
    mr = {
        "ar-001": {
            translations: fi,
            isRTL: !0
        },
        "de-DE": {
            translations: mi,
            isRTL: !1
        },
        "es-ES": {
            translations: vi,
            isRTL: !1
        },
        "fr-FR": {
            translations: gi,
            isRTL: !1
        },
        "it-IT": {
            translations: hi,
            isRTL: !1
        },
        "pl-PL": {
            translations: pi,
            isRTL: !1
        },
        "pt-PT": {
            translations: bi,
            isRTL: !1
        },
        "ru-RU": {
            translations: _i,
            isRTL: !1
        }
    };
var ae = g; {
    let i = class i extends ae.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, mr);
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
                return ae.Logger.startActiveSpan("RedirectToAction", function(r) {
                    return r && (r.setAttribute("code.function", "RedirectToAction"), r.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ae.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RedirectToAction"), e = t.callContext(e), ae.Flow.executeAsyncFlow(function() {
                            return ae.Flow.executeSequence(function() {
                                if (!n.variables.isDisabledIn) return t.redirectToEvent$Action(e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__redirectToAction$Action
        }
        set _redirectToAction$Action(e) {
            this.__redirectToAction$Action = e
        }
        redirectToAction$Action(e) {
            var n = this.controller;
            return ae.Logger.startActiveSpan("RedirectToAction__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RedirectToAction"), t.setAttribute("outsystems.function.key", "26ff6bad-2568-4d4f-8130-7fc2b2b27010"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), ae.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    vr = f
}
var vr, gr = new ae.Controller.ControllerFactory(vr, V);
var $ = g,
    Ys = w.PlaceholderContent,
    Zs = w.IteratorPlaceholderContent,
    ye = class ye extends I.BaseWebBlock {
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
            return Dt
        }
        get controllerFactory() {
            return gr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = ye.ifWidget,
                s = ye.textWidget,
                u = ye.asPrimitiveValue,
                m = ye.getTranslation,
                A = this;
            return B.createElement("div", this.getRootNodeProperties(), B.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.redirectToAction$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "border-color: #DEE2E6; border-radius: 8px; border-style: solid; border-width: 1px; margin-top: 24px; padding: 16px;"
                },
                style: i.getCachedValue(e.getId("oXZ1Z0pb7kOjZiILWyRZxg.Style"), function() {
                    return i.variables.isDisabledIn ? "default-cursor" : "cursor-pointer"
                }, function() {
                    return i.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._isDisabledInDataFetchStatus)
            }, r(i.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("s7xI84343EmHa3yrSOasog#Condition.415251123.1", "In Review"), !1, this, function() {
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
                }, B.createElement(y, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.InReview.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(C, {
                    extendedProperties: {
                        style: "color: #AD4805; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [s(m("somkOTVlNkWj6olwMh4slw#Value", "In review"))],
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                }))]
            }, function() {
                return []
            }), r(i.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.-1929739544.1", "Verified") || i.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("P7CXQni5uEmsiCvnqI+NbQ#Condition.601036331.1", "Completed"), !1, this, function() {
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
                }, B.createElement(y, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.IconSuccessful.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(h, {
                    extendedProperties: {
                        style: "color: #267D36; font-size: 12px; font-weight: bold;"
                    },
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    value: i.variables.statusIn,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t,
                    value_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
                }))]
            }, function() {
                return []
            }), r(i.variables.statusIn === $.Injector.resolve($.ServiceNames.TranslationsService).getMessage("Xb09jOwo10eQRkjotDOYnw#Condition.2096857181.1", "Failed"), !1, this, function() {
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
                }, B.createElement(y, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Error.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }), B.createElement(C, {
                    extendedProperties: {
                        style: "color: #8C1D1D; font-size: 12px; font-weight: bold; margin-left: 8px;"
                    },
                    text: [s(m("aK_wOyqFv06BBkBTCUMb_w#Value", "Failed"))],
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
                style: i.getCachedValue(e.getId("4t1YJ84txEumevu+f4CqOA.Style"), function() {
                    return i.variables.isDisabledIn ? "disabled-class display-flex align-items-center justify-content-space-between" : "display-flex align-items-center justify-content-space-between"
                }, function() {
                    return i.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._isDisabledInDataFetchStatus)
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
            }, B.createElement(y, {
                gridProperties: {
                    width: "32px"
                },
                type: 1,
                url: i.variables.iconIn,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t,
                url_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._iconInDataFetchStatus)
            }), B.createElement(h, {
                extendedProperties: {
                    style: "color: #101213; font-size: 16px; font-weight: bold;"
                },
                gridProperties: {
                    marginLeft: "8px"
                },
                value: i.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._titleInDataFetchStatus)
            })), r(i.variables.isDisabledIn, !1, this, function() {
                return []
            }, function() {
                return [B.createElement(y, {
                    image: $.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "14"
                    },
                    _widgetRecordProvider: t
                })]
            })), B.createElement(h, {
                extendedProperties: {
                    style: "color: #101213;"
                },
                style: i.getCachedValue(e.getId("7H3hQssJoUmatQccgqXuYA.Style"), function() {
                    return i.variables.isDisabledIn ? "disabled-class" : ""
                }, function() {
                    return i.variables.isDisabledIn
                }),
                value: i.variables.descriptionIn,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._isDisabledInDataFetchStatus),
                value_dataFetchStatus: $.Model.calculateDataFetchStatus(i.variables._descriptionInDataFetchStatus)
            })))
        }
    };
a(ye, "View");
var gt = ye,
    el = gt;
var K = q(J());
var hr = {};
var Ce = g; {
    let i = class i extends Ce.Controller.BaseViewController {
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
        get _onClose$Action() {
            return this.hasOwnProperty("__onClose$Action") || (this.__onClose$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return Ce.Logger.startActiveSpan("OnClose", function(r) {
                    return r && (r.setAttribute("code.function", "OnClose"), r.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Ce.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("OnClose"), e = t.callContext(e), Ce.Flow.executeAsyncFlow(function() {
                            return t.closeBOLockModal$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onClose$Action
        }
        set _onClose$Action(e) {
            this.__onClose$Action = e
        }
        onClose$Action(e) {
            var n = this.controller;
            return Ce.Logger.startActiveSpan("OnClose__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnClose"), t.setAttribute("outsystems.function.key", "986b1efb-ab58-4376-aa31-4beb0798815a"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), Ce.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    pr = f
}
var pr, br = new Ce.Controller.ControllerFactory(pr, V);
var Re = g,
    pl = w.PlaceholderContent,
    bl = w.IteratorPlaceholderContent,
    Pe = class Pe extends I.BaseWebBlock {
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
            return Vt
        }
        get controllerFactory() {
            return br
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = Pe.ifWidget,
                s = Pe.textWidget,
                u = Pe.asPrimitiveValue,
                m = Pe.getTranslation,
                A = this;
            return K.createElement("div", this.getRootNodeProperties(), K.createElement(j, {
                showPopup: i.variables.isVisibleIn,
                style: "popup-dialog warning-popup",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: Re.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, K.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center justify-content-flex-end",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PopupHeader"
                },
                _widgetRecordProvider: t
            }, K.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.onClose$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                image: Re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), K.createElement(c, {
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
            }, K.createElement(y, {
                image: Re.Navigation.VersionedURL.getVersionedUrl("img/tradershub.StandaloneSMCircleExclamation.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }), K.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: i.variables.statusIn === "unavailable",
                _idProps: {
                    service: e,
                    name: "AccountUnavailableContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Re.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
            }, K.createElement(C, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Account unavailable"],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), K.createElement(C, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Check back in a few minutes by refreshing the page."],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), K.createElement(c, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column",
                visible: i.variables.statusIn === "under_maintenance" || i.variables.statusIn === "maintenance",
                _idProps: {
                    service: e,
                    name: "ServerMaintenanceContent"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: Re.Model.calculateDataFetchStatus(i.variables._statusInDataFetchStatus)
            }, K.createElement(C, {
                extendedProperties: {
                    style: "color: #101213; font-size: 18px; font-weight: bold; margin-top: 24px;"
                },
                text: ["Maintenance in progress"],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }), K.createElement(C, {
                extendedProperties: {
                    style: "margin-top: 8px;"
                },
                text: ["Some services may be affected and your balance is temporarily unavailable."],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }))), K.createElement(N, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.onClose$Action(l.callContext(d))
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
a(Pe, "View");
var ht = Pe,
    _l = ht;
var ee = q(J());
var yi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    Ci = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Passwort vergessen"
    },
    Pi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Olvid\xE9 la contrase\xF1a"
    },
    Ai = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Mot de passe oubli\xE9"
    },
    wi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Password dimenticato"
    },
    Ei = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Nie pami\u0119tam has\u0142a"
    },
    Si = {
        "buIw4sV9uUGBm0zbchclxw#Value": "Esqueceu-se da palavra-passe"
    },
    Oi = {
        "buIw4sV9uUGBm0zbchclxw#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    _r = {
        "ar-001": {
            translations: yi,
            isRTL: !0
        },
        "de-DE": {
            translations: Ci,
            isRTL: !1
        },
        "es-ES": {
            translations: Pi,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ai,
            isRTL: !1
        },
        "it-IT": {
            translations: wi,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ei,
            isRTL: !1
        },
        "pt-PT": {
            translations: Si,
            isRTL: !1
        },
        "ru-RU": {
            translations: Oi,
            isRTL: !1
        }
    };
var te = g; {
    let i = class i extends te.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, _r);
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
                return te.Logger.startActiveSpan("UpdateProfileOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "UpdateProfileOnClick"), r.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("UpdateProfileOnClick"), e = t.callContext(e), te.Flow.executeAsyncFlow(function() {
                            return t.updateProfile$Action(e)
                        })
                    }, function() {
                        r && r.end()
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
                return te.Logger.startActiveSpan("CloseOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "CloseOnClick"), r.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CloseOnClick"), e = t.callContext(e), te.Flow.executeAsyncFlow(function() {
                            return t.closeEvent$Action(e)
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__closeOnClick$Action
        }
        set _closeOnClick$Action(e) {
            this.__closeOnClick$Action = e
        }
        updateProfileOnClick$Action(e) {
            var n = this.controller;
            return te.Logger.startActiveSpan("UpdateProfileOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "UpdateProfileOnClick"), t.setAttribute("outsystems.function.key", "7f695900-bd23-4004-92d2-ac45df8a3095"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._updateProfileOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        closeOnClick$Action(e) {
            var n = this.controller;
            return te.Logger.startActiveSpan("CloseOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CloseOnClick"), t.setAttribute("outsystems.function.key", "8bd67354-0bdd-4a2a-bf07-f4ef9e54a613"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), te.Flow.tryFinally(function() {
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
            return x.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    yr = f
}
var yr, Cr = new te.Controller.ControllerFactory(yr, V);
var pt = g,
    Ll = w.PlaceholderContent,
    Wl = w.IteratorPlaceholderContent,
    Ae = class Ae extends I.BaseWebBlock {
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
            return Ft
        }
        get controllerFactory() {
            return Cr
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = Ae.ifWidget,
                s = Ae.textWidget,
                u = Ae.asPrimitiveValue,
                m = Ae.getTranslation,
                A = this;
            return ee.createElement("div", this.getRootNodeProperties(), ee.createElement(j, {
                extendedProperties: {
                    style: "height: 100vh; padding: 16px;" + (S.isPhone$Action(o).isPhoneOut ? "" : "overflow:scroll")
                },
                showPopup: i.variables.isVisibleIn,
                style: "full-height-popup display-flex flex-direction-column",
                _idProps: {
                    service: e,
                    name: "PopupWrapper"
                },
                _widgetRecordProvider: t,
                showPopup_dataFetchStatus: pt.Model.calculateDataFetchStatus(i.variables._isVisibleInDataFetchStatus)
            }, ee.createElement(c, {
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
            }, ee.createElement(C, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [s(m("buIw4sV9uUGBm0zbchclxw#Value", "Complete your profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), ee.createElement(y, {
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var d = o.clone();
                            return l.closeOnClick$Action(l.callContext(d))
                        })
                    }, "onClick")
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: pt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    name: "CloseIcon"
                },
                _widgetRecordProvider: t
            })), ee.createElement(c, {
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
            }, ee.createElement(c, {
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
            }, ee.createElement(y, {
                extendedProperties: {
                    style: "height: 100px;"
                },
                gridProperties: {
                    width: "100px"
                },
                image: pt.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_yellow.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            })), ee.createElement(c, {
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
            }, ee.createElement(h, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: "Complete your Profile",
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }), "To continue, provide the required information in the Personal Details section."), ee.createElement(N, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                isDefault: !1,
                onClick: a(function() {
                    return Promise.resolve().then(function() {
                        var d = o.clone();
                        return l.updateProfileOnClick$Action(l.callContext(d))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, "Update profile")), ee.createElement(c, {
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
a(Ae, "View");
var bt = Ae,
    $l = bt;
var we = q(J());
var Pr = {};

function _t(f, i, l, e) {
    f.OnInitializedHandler = i.InitializedHandler, f.OnToggleHandler = i.OnToggleHandler
}
a(_t, "default");
var _ = g; {
    let i = class i extends _.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Pr);
            var o = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: a(function(r) {
                    return r = r === void 0 ? "" : r, o.executeActionInsideJSNode(o._initializedHandler$Action.bind(o, _.DataConversion.JSNodeParamConverter.from(r, _.DataTypes.DataTypes.Text)), o.callContext(), function(s) {
                        return {}
                    }, function() {}, "InitializedHandler")
                }, "initializedHandler$Action"),
                onToggleHandler$Action: a(function(r, s) {
                    return r = r === void 0 ? "" : r, s = s === void 0 ? !1 : s, o.executeActionInsideJSNode(o._onToggleHandler$Action.bind(o, _.DataConversion.JSNodeParamConverter.from(r, _.DataTypes.DataTypes.Text), _.DataConversion.JSNodeParamConverter.from(s, _.DataTypes.DataTypes.Boolean)), o.callContext(), function(u) {
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
                return _.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "2524abba-f9ff-4f1d-9aaf-d7503958a671"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var s = new _.DataTypes.VariableHolder,
                            u = new _.DataTypes.VariableHolder(new _.DataTypes.JSONSerializeOutputType);
                        s.value = S.generateUniqueId$Action(n.variables.internalConfigsVar.uniqueIdAttr, e), n.variables.internalConfigsVar.uniqueIdAttr = s.value.unique_IDOut, n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, u.value.jSONOut = _.JSONUtils.serializeToJSON(n.variables.internalConfigsVar, !0, !1), S.bottomSheetCreate$Action(n.variables.internalConfigsVar.uniqueIdAttr, u.value.jSONOut, e), t._registerCallback$Action(e)
                    } finally {
                        r && r.end()
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
                return _.Logger.startActiveSpan("RegisterCallback", function(r) {
                    r && (r.setAttribute("code.function", "RegisterCallback"), r.setAttribute("outsystems.function.key", "41f7c14d-a29c-4560-bbd7-9d103cc94b7b"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("RegisterCallback"), e = t.callContext(e);
                        var s = new _.DataTypes.VariableHolder;
                        s.value = _.Logger.startActiveSpan("GetCallbackHandler", function(u) {
                            u && (u.setAttribute("code.function", "GetCallbackHandler"), u.setAttribute("outsystems.function.key", "e152b377-7633-4d47-a17f-69d217822e08"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(_t, "GetCallbackHandler", "RegisterCallback", {
                                    OnInitializedHandler: _.DataConversion.JSNodeParamConverter.to(null, _.DataTypes.DataTypes.Object),
                                    OnToggleHandler: _.DataConversion.JSNodeParamConverter.to(null, _.DataTypes.DataTypes.Object)
                                }, function(m) {
                                    var A = new(t.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult"));
                                    return A.onInitializedHandlerOut = _.DataConversion.JSNodeParamConverter.from(m.OnInitializedHandler, _.DataTypes.DataTypes.Object), A.onToggleHandlerOut = _.DataConversion.JSNodeParamConverter.from(m.OnToggleHandler, _.DataTypes.DataTypes.Object), A
                                }, {
                                    InitializedHandler: t.clientActionProxies.initializedHandler$Action,
                                    OnToggleHandler: t.clientActionProxies.onToggleHandler$Action
                                }, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), S.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, $e.registeredCallbackEvents.initialized, s.value.onInitializedHandlerOut, e), S.bottomSheetRegisterCallback$Action(n.variables.internalConfigsVar.uniqueIdAttr, $e.registeredCallbackEvents.onToggle, s.value.onToggleHandlerOut, e)
                    } finally {
                        r && r.end()
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
                    r = this.controller,
                    s = this.idService;
                return _.Logger.startActiveSpan("OnToggleHandler", function(u) {
                    return u && (u.setAttribute("code.function", "OnToggleHandler"), u.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), u.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), u.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnToggleHandler"), t = r.callContext(t);
                        var m = new _.DataTypes.VariableHolder(new(r.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars")));
                        return m.value.bottomSheetIdInLocal = e, m.value.isBottomSheetOpenInLocal = n, _.Flow.executeAsyncFlow(function() {
                            return r.onToggle$Action(m.value.bottomSheetIdInLocal, m.value.isBottomSheetOpenInLocal, t)
                        })
                    }, function() {
                        u && u.end()
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
                    r = this.idService;
                return _.Logger.startActiveSpan("InitializedHandler", function(s) {
                    return s && (s.setAttribute("code.function", "InitializedHandler"), s.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), s.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), s.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        o.ensureControllerAlive("InitializedHandler"), n = o.callContext(n);
                        var u = new _.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars")));
                        return u.value.bottomSheetIdInLocal = e, _.Flow.executeAsyncFlow(function() {
                            return o.initialized$Action(u.value.bottomSheetIdInLocal, n)
                        })
                    }, function() {
                        s && s.end()
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
                return _.Logger.startActiveSpan("OnDestroy", function(r) {
                    r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "b01252a9-6745-4a78-8c14-0ea28199f6d7"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e), S.bottomSheetDestroy$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
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
                return _.Logger.startActiveSpan("OnReady", function(r) {
                    r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "d7309398-de77-4ce8-a165-6aaa09f9d29a"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), S.bottomSheetInitialize$Action(n.variables.internalConfigsVar.uniqueIdAttr, e)
                    } finally {
                        r && r.end()
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
                return _.Logger.startActiveSpan("OnParametersChanged", function(r) {
                    r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f656f73b-6623-4253-abfa-62ad306e2bf1"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), n.variables.internalConfigsVar.shapeAttr !== n.variables.shapeIn && (n.variables.internalConfigsVar.shapeAttr = n.variables.shapeIn, S.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "Shape", n.variables.internalConfigsVar.shapeAttr, e)), n.variables.internalConfigsVar.showHandlerAttr !== n.variables.showHandlerIn && (n.variables.internalConfigsVar.showHandlerAttr = n.variables.showHandlerIn, S.bottomSheetChangeBooleanProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ShowHandler", n.variables.internalConfigsVar.showHandlerAttr, e)), n.variables.internalConfigsVar.extendedClassAttr !== n.variables.extendedClassIn && (n.variables.internalConfigsVar.extendedClassAttr = n.variables.extendedClassIn, S.bottomSheetChangeTextProperty$Action(n.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", n.variables.internalConfigsVar.extendedClassAttr, e))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return _.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
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
            return _.Logger.startActiveSpan("RegisterCallback__proxy", function(t) {
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
            return _.Logger.startActiveSpan("OnToggleHandler__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnToggleHandler"), r.setAttribute("outsystems.function.key", "86105b5d-81c7-4605-b347-cc4da302e909"), r.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), r.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onToggleHandler$Action, t, e, n)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        initializedHandler$Action(e, n) {
            var t = this.controller;
            return _.Logger.startActiveSpan("InitializedHandler__proxy", function(o) {
                return o && (o.setAttribute("code.function", "InitializedHandler"), o.setAttribute("outsystems.function.key", "97bf895d-3030-412e-beac-262ac726e410"), o.setAttribute("outsystems.function.owner.name", "OutSystemsUI"), o.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._initializedHandler$Action, n, e)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return _.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
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
            return _.Logger.startActiveSpan("OnReady__proxy", function(t) {
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
            return _.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
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
            return S.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let f = i;
    xe = f, xe.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.RegisterCallback$getCallbackHandlerJSResult", [{
        name: "OnInitializedHandler",
        attrName: "onInitializedHandlerOut",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }, {
        name: "OnToggleHandler",
        attrName: "onToggleHandlerOut",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Object,
        defaultValue: a(function() {
            return null
        }, "defaultValue")
    }]), xe.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.OnToggleHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "IsBottomSheetOpen",
        attrName: "isBottomSheetOpenInLocal",
        mandatory: !0,
        dataType: _.DataTypes.DataTypes.Boolean,
        defaultValue: a(function() {
            return !1
        }, "defaultValue")
    }]), xe.registerVariableGroupType("OutSystemsUI.Interaction.BottomSheet.InitializedHandler$vars", [{
        name: "BottomSheetId",
        attrName: "bottomSheetIdInLocal",
        mandatory: !1,
        dataType: _.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var xe, Ar = new _.Controller.ControllerFactory(xe, At);
var rc = w.PlaceholderContent,
    ic = w.IteratorPlaceholderContent,
    Ee = class Ee extends I.BaseWebBlock {
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
            return Ht
        }
        get controllerFactory() {
            return Ar
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                l = this.controller,
                e = this.idService,
                n = l.validationService,
                t = this.widgetsRecordProvider,
                o = l.callContext(),
                r = Ee.ifWidget,
                s = Ee.textWidget,
                u = Ee.asPrimitiveValue,
                m = Ee.getTranslation,
                A = this;
            return we.createElement("div", this.getRootNodeProperties(), r(!1, !1, this, function() {
                return []
            }, function() {
                return [we.createElement(c, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        name: i.variables.internalConfigsVar.uniqueIdAttr
                    },
                    style: "osui-bottom-sheet",
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "BottomSheet"
                    },
                    _widgetRecordProvider: t
                }, we.createElement(Pt, {
                    extendedProperties: {
                        className: "osui-bottom-sheet__header"
                    },
                    tag: "header",
                    _idProps: {
                        service: e,
                        name: "Header"
                    },
                    _widgetRecordProvider: t
                }, we.createElement(Be, {
                    align: 0,
                    content: A.props.placeholders.topBar,
                    style: "osui-bottom-sheet__header__top-bar",
                    _idProps: {
                        service: e,
                        name: "TopBar"
                    },
                    _widgetRecordProvider: t
                })), we.createElement(Be, {
                    align: 0,
                    content: A.props.placeholders.content,
                    style: "osui-bottom-sheet__content",
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: t
                })), we.createElement(c, {
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
a(Ee, "View");
var yt = Ee,
    nc = yt;
export {
    Ui as a, dn as b, xn as c, Xn as d, zo as e, la as f, Se as g, ls as h, Fs as i, el as j, _l as k, $l as l, nc as m
};