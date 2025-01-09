import {
    a as oe
} from "./_oschunk-G7LBZKRW.js";
import {
    a as ie
} from "./_oschunk-5ZYL2O4C.js";
import {
    a as Ae,
    b as Re,
    c as Oe,
    d as be,
    e as we,
    f as ke,
    g as xe
} from "./_oschunk-RNCU77PF.js";
import "./_oschunk-CKBUXFBK.js";
import "./_oschunk-BUTX27QI.js";
import {
    a as He
} from "./_oschunk-LB4HNT2Z.js";
import "./_oschunk-7TZ3KR6K.js";
import {
    a as ne
} from "./_oschunk-SI24YMBJ.js";
import "./_oschunk-FSWTA5WV.js";
import {
    a as O
} from "./_oschunk-FTYAL2B7.js";
import {
    a as w,
    b as Se
} from "./_oschunk-GPNNXU3M.js";
import {
    b as U,
    d as l,
    f as X,
    g as Pe,
    j as Ee,
    k as W,
    p as Q,
    q as Ce,
    r as v
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-DSZRJG3L.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as R
} from "./_oschunk-NQZZDANH.js";
import {
    a as I,
    g as p,
    i as h
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-YIVLIJ7Z.js";
import "./_oschunk-XBVY76NY.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as re,
    m as q,
    o as S
} from "./_oschunk-KZFTAIEG.js";
import {
    a as pe
} from "./_oschunk-UATY3RVV.js";
import {
    ia as m
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var b = H(I());
var ee = H(I());
var Ie = m; {
    let a = class a extends Ie.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var u = this.controller;
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
            return S.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    We = f
}
var We, De = new Ie.Controller.ControllerFactory(We, R);
var y = H(I());
var k = m; {
    let a = class a extends k.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return k.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "93168236-3f50-42ce-a9ab-103b92cb0d21"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var E = new k.DataTypes.VariableHolder;
                        i.variables.passkeyDataIn.lastUsedAttr.gt(k.BuiltinFunctions.integerToLongInteger(0)) ? (E.value = S.formatUnixDateToDate$Action(i.variables.passkeyDataIn.lastUsedAttr, "LL", e), i.variables.lastUsedVar = k.BuiltinFunctions.dateToText(E.value.formatedDateOut)) : i.variables.lastUsedVar = "Never"
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onRename$Action() {
            return this.hasOwnProperty("__onRename$Action") || (this.__onRename$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return k.Logger.startActiveSpan("OnRename", function(n) {
                    n && (n.setAttribute("code.function", "OnRename"), n.setAttribute("outsystems.function.key", "94865d07-ebc1-4868-85b2-e1c9cb695f24"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRename"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onRename$Action
        }
        set _onRename$Action(e) {
            this.__onRename$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return k.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "93168236-3f50-42ce-a9ab-103b92cb0d21"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRename$Action(e) {
            var i = this.controller;
            return k.Logger.startActiveSpan("OnRename__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRename"), t.setAttribute("outsystems.function.key", "94865d07-ebc1-4868-85b2-e1c9cb695f24"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onRename$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    u = this.idService;
                return i.onReady$Action(e)
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
            return S.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    Fe = f
}
var Fe, $e = new k.Controller.ControllerFactory(Fe, R);
var x = H(I());
var Te = {};
var Ne = m; {
    let a = class a extends Ne.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, Te);
            var u = this.controller;
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
            return q.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    Le = f
}
var Le, Ve = new Ne.Controller.ControllerFactory(Le, Se);
var Ze = m,
    wt = h.PlaceholderContent,
    kt = h.IteratorPlaceholderContent,
    D = class D extends p.BaseWebBlock {
        static get displayName() {
            return "Content.CardItem"
        }
        static getAttributes() {
            return {
                codeFunction: "CardItem",
                functionKey: "3ad57f01-6c5d-4747-bbdb-8aca699bb1ba",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return Ae
        }
        get controllerFactory() {
            return Ve
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = D.ifWidget,
                E = D.textWidget,
                _ = D.asPrimitiveValue,
                z = D.getTranslation,
                c = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(l, {
                align: 0,
                animate: !1,
                style: "card card-detail " + a.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: Ze.Model.calculateDataFetchStatus(a.variables._extendedClassInDataFetchStatus)
            }, x.createElement(Q, {
                align: 0,
                content: c.props.placeholders.left,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "ph card-detail-left",
                _idProps: {
                    service: e,
                    name: "Left"
                },
                _widgetRecordProvider: t
            }), x.createElement(l, {
                align: 0,
                animate: !1,
                style: "card-detail-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, x.createElement(Q, {
                align: 0,
                content: c.props.placeholders.title,
                style: "ph card-detail-title",
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            }), x.createElement(Q, {
                align: 0,
                content: c.props.placeholders.content,
                style: "ph card-detail-text text-grey",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            })), x.createElement(Q, {
                align: 0,
                content: c.props.placeholders.right,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "ph card-detail-right",
                _idProps: {
                    service: e,
                    name: "Right"
                },
                _widgetRecordProvider: t
            })))
        }
    };
r(D, "View");
var se = D,
    J = se;
var ae = m,
    j = h.PlaceholderContent,
    Vt = h.IteratorPlaceholderContent,
    F = class F extends p.BaseWebBlock {
        static get displayName() {
            return "Passkeys.PasskeyItem"
        }
        static getAttributes() {
            return {
                codeFunction: "PasskeyItem",
                functionKey: "08185f71-963e-4fa5-bcc5-cc265ae50360",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Passkeys.PasskeyItem.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [J, O]
        }
        get modelFactory() {
            return Re
        }
        get controllerFactory() {
            return $e
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = F.ifWidget,
                E = F.textWidget,
                _ = F.asPrimitiveValue,
                z = F.getTranslation,
                c = this;
            return y.createElement("div", this.getRootNodeProperties(), y.createElement(J, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    left: new j(function() {
                        return [y.createElement(W, {
                            image: ae.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandalonePasskeyBoldIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    title: new j(function() {
                        return [y.createElement(X, {
                            style: "font-size-base item-color",
                            value: a.variables.passkeyDataIn.nameAttr,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: ae.Model.calculateDataFetchStatus(a.variables._passkeyDataInDataFetchStatus)
                        })]
                    }),
                    content: new j(function() {
                        return [y.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column font-size-s item-color",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(X, {
                            value: "Stored on: " + a.variables.passkeyDataIn.storedOnAttr,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: ae.Model.calculateDataFetchStatus(a.variables._passkeyDataInDataFetchStatus)
                        })), y.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, y.createElement(X, {
                            style: "",
                            value: "Last used on: " + a.variables.lastUsedVar,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        })))]
                    }),
                    right: new j(function() {
                        return [n(re.getDevice() === "desktop", !1, this, function() {
                            return [y.createElement(l, {
                                align: 0,
                                animate: !1,
                                style: "display-flex",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: t
                            }, y.createElement(l, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: t
                            }, "Rename"), y.createElement(O, {
                                getOwnerSpan: r(function() {
                                    return c.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: r(function() {
                                    return c.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsVertical: !0
                                },
                                events: {
                                    _handleError: r(function(s) {
                                        o.handleError(s)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: i
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "10",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), y.createElement(l, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: t
                            }, "Remove"))]
                        }, function() {
                            return [y.createElement(Ce, {
                                popoverWidth: 0,
                                style: "popover",
                                _idProps: {
                                    service: e,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    topContent: new j(function() {
                                        return [y.createElement(Ee, {
                                            icon: "ellipsis-v",
                                            iconSize: 0,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: t
                                        })]
                                    }),
                                    bottomContent: new j(function() {
                                        return [y.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "item-color",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: t
                                        }, y.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "padding-base",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "RenameLink"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Rename"), y.createElement(l, {
                                            align: 0,
                                            animate: !1,
                                            style: "padding-base",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "RemoveLink"
                                            },
                                            _widgetRecordProvider: t
                                        }, "Remove"))]
                                    })
                                }
                            })]
                        })]
                    })
                },
                _dependencies: [_(re.getDevice()), _(a.variables.lastUsedVar), _(a.variables._passkeyDataInDataFetchStatus), _(a.variables.passkeyDataIn.storedOnAttr), _(a.variables.passkeyDataIn.nameAttr)]
            }))
        }
    };
r(F, "View");
var ce = F,
    de = ce;
var Me = m,
    Qt = h.PlaceholderContent,
    et = h.IteratorPlaceholderContent,
    $ = class $ extends p.BaseWebBlock {
        static get displayName() {
            return "Passkeys.PasskeysList"
        }
        static getAttributes() {
            return {
                codeFunction: "PasskeysList",
                functionKey: "3db20bc4-eabd-4fea-8d85-24f433e6b3ab",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
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
            return Oe
        }
        get controllerFactory() {
            return De
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = $.ifWidget,
                E = $.textWidget,
                _ = $.asPrimitiveValue,
                z = $.getTranslation,
                c = this;
            return ee.createElement("div", this.getRootNodeProperties(), ee.createElement(Pe, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: a.variables.passkeysListIn,
                style: "list list-group padding-base row-gap-base display-flex flex-direction-column",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                source_dataFetchStatus: Me.Model.calculateDataFetchStatus(a.variables._passkeysListInDataFetchStatus),
                placeholders: {
                    content: new et(function(s, qe) {
                        return [ee.createElement(de, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PasskeyData: a.variables.passkeysListIn.getCurrent(qe.iterationContext),
                                _passkeyDataInDataFetchStatus: Me.Model.calculateDataFetchStatus(a.variables._passkeysListInDataFetchStatus)
                            },
                            events: {
                                _handleError: r(function(Qe) {
                                    o.handleError(Qe)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: s,
                                uuid: "1",
                                alias: "1"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })]
                    }, u, e, "1")
                },
                _dependencies: [_(a.variables._passkeysListInDataFetchStatus)]
            }))
        }
    };
r($, "View");
var le = $,
    ue = le;
var P = H(I());
var g = m; {
    let a = class a extends g.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _backToSecuritySection$Action() {
            return this.hasOwnProperty("__backToSecuritySection$Action") || (this.__backToSecuritySection$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return g.Logger.startActiveSpan("BackToSecuritySection", function(n) {
                    n && (n.setAttribute("code.function", "BackToSecuritySection"), n.setAttribute("outsystems.function.key", "27c1e7a6-3f81-4ead-8651-fcf004d12594"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("BackToSecuritySection"), e = t.callContext(e), g.Navigation.navigateTo(g.Navigation.generateScreenURL("Accounts", "Passkeys", {}), g.Transitions.createTransition(g.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__backToSecuritySection$Action
        }
        set _backToSecuritySection$Action(e) {
            this.__backToSecuritySection$Action = e
        }
        get _learnMoreOnClick$Action() {
            return this.hasOwnProperty("__learnMoreOnClick$Action") || (this.__learnMoreOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return g.Logger.startActiveSpan("LearnMoreOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "LearnMoreOnClick"), n.setAttribute("outsystems.function.key", "7891711e-b0d2-43aa-8784-5115fc40665f"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("LearnMoreOnClick"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return t.learnMore$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__learnMoreOnClick$Action
        }
        set _learnMoreOnClick$Action(e) {
            this.__learnMoreOnClick$Action = e
        }
        get _createPasskeysOnClick$Action() {
            return this.hasOwnProperty("__createPasskeysOnClick$Action") || (this.__createPasskeysOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return g.Logger.startActiveSpan("CreatePasskeysOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CreatePasskeysOnClick"), n.setAttribute("outsystems.function.key", "fdfee8a2-091b-4b26-8f3a-62ab10c4ce49"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CreatePasskeysOnClick"), e = t.callContext(e), g.Flow.executeAsyncFlow(function() {
                            return t.createPasskeys$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__createPasskeysOnClick$Action
        }
        set _createPasskeysOnClick$Action(e) {
            this.__createPasskeysOnClick$Action = e
        }
        backToSecuritySection$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("BackToSecuritySection__proxy", function(t) {
                t && (t.setAttribute("code.function", "BackToSecuritySection"), t.setAttribute("outsystems.function.key", "27c1e7a6-3f81-4ead-8651-fcf004d12594"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._backToSecuritySection$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        learnMoreOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("LearnMoreOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "LearnMoreOnClick"), t.setAttribute("outsystems.function.key", "7891711e-b0d2-43aa-8784-5115fc40665f"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._learnMoreOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        createPasskeysOnClick$Action(e) {
            var i = this.controller;
            return g.Logger.startActiveSpan("CreatePasskeysOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CreatePasskeysOnClick"), t.setAttribute("outsystems.function.key", "fdfee8a2-091b-4b26-8f3a-62ab10c4ce49"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), g.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._createPasskeysOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get learnMore$Action() {
            return this.hasOwnProperty("_learnMore$Action") || (this._learnMore$Action = function() {
                return Promise.resolve()
            }), this._learnMore$Action
        }
        set learnMore$Action(e) {
            this._learnMore$Action = e
        }
        get createPasskeys$Action() {
            return this.hasOwnProperty("_createPasskeys$Action") || (this._createPasskeys$Action = function() {
                return Promise.resolve()
            }), this._createPasskeys$Action
        }
        set createPasskeys$Action(e) {
            this._createPasskeys$Action = e
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
            return S.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    Be = f
}
var Be, ze = new g.Controller.ControllerFactory(Be, R);
var C = H(I());
var A = m; {
    let a = class a extends A.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _createpasskeysOnClick$Action() {
            return this.hasOwnProperty("__createpasskeysOnClick$Action") || (this.__createpasskeysOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return A.Logger.startActiveSpan("CreatepasskeysOnClick", function(n) {
                    n && (n.setAttribute("code.function", "CreatepasskeysOnClick"), n.setAttribute("outsystems.function.key", "9426e34e-3e53-4314-9932-0198286c66be"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CreatepasskeysOnClick"), e = t.callContext(e);
                        var E = new A.DataTypes.VariableHolder;
                        E.value = q.bottomSheetOpen$Action(u.getId("SetupPasskeys"), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__createpasskeysOnClick$Action
        }
        set _createpasskeysOnClick$Action(e) {
            this.__createpasskeysOnClick$Action = e
        }
        get _continueOnClick$Action() {
            return this.hasOwnProperty("__continueOnClick$Action") || (this.__continueOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return A.Logger.startActiveSpan("ContinueOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "ContinueOnClick"), n.setAttribute("outsystems.function.key", "c5774b01-9fe2-40f4-b9fd-22def20fb62e"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                        t.ensureControllerAlive("ContinueOnClick"), e = t.callContext(e);
                        var E = new A.DataTypes.VariableHolder;
                        return A.Flow.executeAsyncFlow(function() {
                            return E.value = q.bottomSheetClose$Action(u.getId("SetupPasskeys"), e), t.createPassKeys$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__continueOnClick$Action
        }
        set _continueOnClick$Action(e) {
            this.__continueOnClick$Action = e
        }
        createpasskeysOnClick$Action(e) {
            var i = this.controller;
            return A.Logger.startActiveSpan("CreatepasskeysOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "CreatepasskeysOnClick"), t.setAttribute("outsystems.function.key", "9426e34e-3e53-4314-9932-0198286c66be"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._createpasskeysOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        continueOnClick$Action(e) {
            var i = this.controller;
            return A.Logger.startActiveSpan("ContinueOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "ContinueOnClick"), t.setAttribute("outsystems.function.key", "c5774b01-9fe2-40f4-b9fd-22def20fb62e"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), A.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._continueOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get createPassKeys$Action() {
            return this.hasOwnProperty("_createPassKeys$Action") || (this._createPassKeys$Action = function() {
                return Promise.resolve()
            }), this._createPassKeys$Action
        }
        set createPassKeys$Action(e) {
            this._createPassKeys$Action = e
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
            return S.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    Ue = f
}
var Ue, Ke = new A.Controller.ControllerFactory(Ue, R);
var Ge = h.PlaceholderContent,
    Sr = h.IteratorPlaceholderContent,
    T = class T extends p.BaseWebBlock {
        static get displayName() {
            return "Passkeys.MobileCreatePasskeysButton"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileCreatePasskeysButton",
                functionKey: "566ee6fe-0c46-4317-a81c-d911adcc0cfc",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Passkeys.MobileCreatePasskeysButton.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [oe]
        }
        get modelFactory() {
            return be
        }
        get controllerFactory() {
            return Ke
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = T.ifWidget,
                E = T.textWidget,
                _ = T.asPrimitiveValue,
                z = T.getTranslation,
                c = this;
            return C.createElement("div", this.getRootNodeProperties(), C.createElement(U, {
                enabled: !0,
                isDefault: !1,
                onClick: r(function() {
                    var s = u.clone();
                    o.createpasskeysOnClick$Action(o.callContext(s))
                }, "onClick"),
                style: "btn btn-primary deriv-btn full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, "CreatePasskeys"), C.createElement(oe, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "passkeys-bottom-sheet",
                    Shape: pe.shape.rounded
                },
                events: {
                    _handleError: r(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    name: "SetupPasskeys",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    topBar: Ge.Empty,
                    content: new Ge(function() {
                        return [C.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column full-height",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, C.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column align-items-flex-start passkeys-bottom-sheet-body",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, C.createElement(v, {
                            style: "heading5 padding-base",
                            text: ["Set up passkeys"],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }), C.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "padding-base display-flex flex-direction-column text-align-left margin-left-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }, C.createElement(v, {
                            style: "bullet-item",
                            text: ["Enable screen lock on your device."],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }), C.createElement(v, {
                            style: "bullet-item",
                            text: ["Sign in to your Google or iCloud account."],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }))), C.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "full-width padding-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Footer"
                            },
                            _widgetRecordProvider: t
                        }, C.createElement(U, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: r(function() {
                                return Promise.resolve().then(function() {
                                    var s = u.clone();
                                    return o.continueOnClick$Action(o.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary deriv-btn full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, "Continue")))]
                    })
                },
                _dependencies: []
            }))
        }
    };
r(T, "View");
var ve = T,
    Y = ve;
var tt = m,
    me = h.PlaceholderContent,
    Dr = h.IteratorPlaceholderContent,
    N = class N extends p.BaseWebBlock {
        static get displayName() {
            return "Passkeys.CreatePasskeys"
        }
        static getAttributes() {
            return {
                codeFunction: "CreatePasskeys",
                functionKey: "4185af1d-1339-4e02-a3fe-334b680751b8",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Passkeys.CreatePasskeys.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, Y]
        }
        get modelFactory() {
            return we
        }
        get controllerFactory() {
            return ze
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = N.ifWidget,
                E = N.textWidget,
                _ = N.asPrimitiveValue,
                z = N.getTranslation,
                c = this;
            return P.createElement("div", this.getRootNodeProperties(), P.createElement(w, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    desktopLayout: me.Empty,
                    tabletLayout: me.Empty,
                    defaultLayout: new me(function() {
                        return [P.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column full-height create-passkeys",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, P.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column create-passkeys-body row-gap-m align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Body"
                            },
                            _widgetRecordProvider: t
                        }, P.createElement(W, {
                            image: tt.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightIcAddPasskeyIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), P.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, P.createElement(v, {
                            style: "heading6 font-bold create-passkeys-body__title",
                            text: ["Your key to safer logins"],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }), P.createElement(v, {
                            style: "font-size-base create-passkeys-body__content",
                            text: ["Enhanced security is just a tap away. "],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }))), P.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s padding-base create-passkeys-footer",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Footer"
                            },
                            _widgetRecordProvider: t
                        }, P.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !1,
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }, P.createElement(U, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: r(function() {
                                return Promise.resolve().then(function() {
                                    var s = u.clone();
                                    return o.createPasskeysOnClick$Action(o.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn btn-primary deriv-btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, "Create passkeys")), P.createElement(Y, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError"),
                                createPassKeys$Action: r(function() {
                                    return Promise.resolve().then(function() {
                                        var s = u.clone();
                                        return o.createPasskeysOnClick$Action(o.callContext(s))
                                    })
                                }, "createPassKeys$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "10",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), P.createElement(U, {
                            enabled: !0,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            isDefault: !1,
                            onClick: r(function() {
                                return Promise.resolve().then(function() {
                                    var s = u.clone();
                                    return o.learnMoreOnClick$Action(o.callContext(s))
                                })
                            }, "onClick"),
                            style: "btn deriv-btn",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }, "Learn more")))]
                    })
                },
                _dependencies: []
            }))
        }
    };
r(N, "View");
var fe = N,
    he = fe;
var d = H(I());
var L = m; {
    let a = class a extends L.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _createPasskeyOnClick$Action() {
            return this.hasOwnProperty("__createPasskeyOnClick$Action") || (this.__createPasskeyOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    u = this.idService;
                return L.Logger.startActiveSpan("CreatePasskeyOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "CreatePasskeyOnClick"), n.setAttribute("outsystems.function.key", "7b27c9da-9d6e-464e-b2e2-779b03a24d1e"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), L.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CreatePasskeyOnClick"), e = t.callContext(e), L.Flow.executeAsyncFlow(function() {
                            return t.createPasskeys$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__createPasskeyOnClick$Action
        }
        set _createPasskeyOnClick$Action(e) {
            this.__createPasskeyOnClick$Action = e
        }
        createPasskeyOnClick$Action(e) {
            var i = this.controller;
            return L.Logger.startActiveSpan("CreatePasskeyOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CreatePasskeyOnClick"), t.setAttribute("outsystems.function.key", "7b27c9da-9d6e-464e-b2e2-779b03a24d1e"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), L.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._createPasskeyOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get createPasskeys$Action() {
            return this.hasOwnProperty("_createPasskeys$Action") || (this._createPasskeys$Action = function() {
                return Promise.resolve()
            }), this._createPasskeys$Action
        }
        set createPasskeys$Action(e) {
            this._createPasskeys$Action = e
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
            return S.defaultTimeout
        }
    };
    r(a, "ControllerInner");
    let f = a;
    Je = f
}
var Je, je = new L.Controller.ControllerFactory(Je, R);
var Ye = m,
    V = h.PlaceholderContent,
    Zr = h.IteratorPlaceholderContent,
    M = class M extends p.BaseWebBlock {
        static get displayName() {
            return "Passkeys.LearnMore"
        }
        static getAttributes() {
            return {
                codeFunction: "LearnMore",
                functionKey: "0a842ac1-b609-4626-a561-df67a3a3f5a5",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Passkeys.LearnMore.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, O, J, Y]
        }
        get modelFactory() {
            return ke
        }
        get controllerFactory() {
            return je
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = M.ifWidget,
                E = M.textWidget,
                _ = M.asPrimitiveValue,
                z = M.getTranslation,
                c = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(w, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    desktopLayout: V.Empty,
                    tabletLayout: V.Empty,
                    defaultLayout: new V(function() {
                        return [d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column learn-more-section",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-m padding-base learn-more-body",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Body"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(W, {
                            image: Ye.Navigation.VersionedURL.getVersionedUrl("img/Accounts.DerivLightIcInfoPasskeyIcon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(v, {
                            style: "text-align-center font-size-base font-bold",
                            text: ["Effortless login with passkeys"],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "faq",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FAQs"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "font-bold",
                            text: ["What are passkeys?"],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Secure alternative to passwords."],
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Unlock your account like your phone - with biometrics, face scan or PIN."],
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(O, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "12",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "font-bold",
                            text: ["Why passkeys?"],
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Extra security layer."],
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Shields against unauthorised access and phishing."],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(O, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "font-bold",
                            text: ["How to create a passkey?"],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Go to \u2018Account Settings\u2019 on Deriv."],
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(v, {
                            style: "bullet-item ",
                            text: ["You can create one passkey per device."],
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(O, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "24",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "font-bold",
                            text: ["Where are passkeys saved?"],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Android: Google password manager."],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(v, {
                            style: "bullet-item ",
                            text: ["iOS: iCloud keychain."],
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(O, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "30",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column row-gap-s",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "font-bold",
                            text: ["What happens if my Deriv account email is changed?"],
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(v, {
                            style: "bullet-item ",
                            text: ["No problem! Your passkey still works."],
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(v, {
                            style: "bullet-item ",
                            text: ["Sign in to Deriv with your existing passkey."],
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: t
                        }))), d.createElement(O, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), d.createElement(J, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ExtendedClass: "tips"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "37",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                left: new V(function() {
                                    return [d.createElement(W, {
                                        image: Ye.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneLightbulbBoldIcon.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                title: new V(function() {
                                    return [d.createElement(v, {
                                        style: "font-size-s",
                                        text: ["Tips:"],
                                        _idProps: {
                                            service: e,
                                            uuid: "39"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                content: new V(function() {
                                    return [d.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "font-size-xs display-flex flex-direction-column tips row-gap-xs",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "40"
                                        },
                                        _widgetRecordProvider: t
                                    }, d.createElement(v, {
                                        style: "bu",
                                        text: ["Before using passkeys:"],
                                        _idProps: {
                                            service: e,
                                            uuid: "41"
                                        },
                                        _widgetRecordProvider: t
                                    }), d.createElement(l, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-left-s",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "42"
                                        },
                                        _widgetRecordProvider: t
                                    }, d.createElement(v, {
                                        style: "bullet-item",
                                        text: ["Enable screen lock on your device."],
                                        _idProps: {
                                            service: e,
                                            uuid: "43"
                                        },
                                        _widgetRecordProvider: t
                                    }), d.createElement(v, {
                                        style: "bullet-item",
                                        text: ["Sign in to your Google or iCloud account. "],
                                        _idProps: {
                                            service: e,
                                            uuid: "44"
                                        },
                                        _widgetRecordProvider: t
                                    }), d.createElement(v, {
                                        style: "bullet-item",
                                        text: ["Enable Bluetooth."],
                                        _idProps: {
                                            service: e,
                                            uuid: "45"
                                        },
                                        _widgetRecordProvider: t
                                    })))]
                                }),
                                right: V.Empty
                            },
                            _dependencies: []
                        }))), d.createElement(l, {
                            align: 0,
                            animate: !1,
                            style: "learn-more-footer padding-base full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Footer"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(Y, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError"),
                                createPassKeys$Action: r(function() {
                                    return Promise.resolve().then(function() {
                                        var s = u.clone();
                                        return o.createPasskeyOnClick$Action(o.callContext(s))
                                    })
                                }, "createPassKeys$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "47",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))]
                    })
                },
                _dependencies: []
            }))
        }
    };
r(M, "View");
var ye = M,
    _e = ye;
var te = h.PlaceholderContent,
    yn = h.IteratorPlaceholderContent,
    B = class B extends p.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Passkeys"
        }
        static getAttributes() {
            return {
                codeFunction: "Passkeys",
                functionKey: "8884b2f5-d9c3-4f1c-ac06-4f4881beb8a3",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [w, ie, ne, ue, he, _e]
        }
        get modelFactory() {
            return xe
        }
        get controllerFactory() {
            return He
        }
        get title() {
            return "Passkeys"
        }
        internalRender() {
            let a = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                u = o.callContext(),
                n = B.ifWidget,
                E = B.textWidget,
                _ = B.asPrimitiveValue,
                z = B.getTranslation,
                c = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(w, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(s) {
                        o.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    desktopLayout: te.Empty,
                    tabletLayout: te.Empty,
                    defaultLayout: new te(function() {
                        return [b.createElement(ie, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayBackButton: !1,
                                DisplayCloseButton: !0,
                                Title: "Passkeys"
                            },
                            events: {
                                _handleError: r(function(s) {
                                    o.handleError(s)
                                }, "_handleError"),
                                eventClose$Action: r(function() {
                                    var s = u.clone();
                                    o.onCloseInMobile$Action(o.callContext(s))
                                }, "eventClose$Action")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                sectioncontent: new te(function() {
                                    return [n(a.variables.isLoadingVar, !1, this, function() {
                                        return [b.createElement(ne, {
                                            getOwnerSpan: r(function() {
                                                return c.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return c.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {},
                                            events: {
                                                _handleError: r(function(s) {
                                                    o.handleError(s)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: i
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "2",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: t,
                                            _dependencies: []
                                        })]
                                    }, function() {
                                        return [n(!a.variables.passkeysListVar.isEmpty, !1, this, function() {
                                            return [b.createElement(ue, {
                                                getOwnerSpan: r(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: r(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    PasskeysList: a.variables.passkeysListVar
                                                },
                                                events: {
                                                    _handleError: r(function(s) {
                                                        o.handleError(s)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "3",
                                                    alias: "4"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })]
                                        }, function() {
                                            return [b.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "full-height",
                                                visible: !a.variables.showLearnMoreVar,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "4"
                                                },
                                                _widgetRecordProvider: t
                                            }, b.createElement(he, {
                                                getOwnerSpan: r(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: r(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {},
                                                events: {
                                                    _handleError: r(function(s) {
                                                        o.handleError(s)
                                                    }, "_handleError"),
                                                    createPasskeys$Action: r(function() {
                                                        var s = u.clone();
                                                        o.handleCreatePasskeys$Action(o.callContext(s))
                                                    }, "createPasskeys$Action"),
                                                    learnMore$Action: r(function() {
                                                        var s = u.clone();
                                                        o.handleLearnMore$Action(o.callContext(s))
                                                    }, "learnMore$Action")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "5",
                                                    alias: "5"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            })), b.createElement(l, {
                                                align: 0,
                                                animate: !0,
                                                style: "full-height",
                                                visible: a.variables.showLearnMoreVar,
                                                _idProps: {
                                                    service: e,
                                                    uuid: "6"
                                                },
                                                _widgetRecordProvider: t
                                            }, b.createElement(_e, {
                                                getOwnerSpan: r(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: r(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {},
                                                events: {
                                                    _handleError: r(function(s) {
                                                        o.handleError(s)
                                                    }, "_handleError"),
                                                    createPasskeys$Action: r(function() {
                                                        var s = u.clone();
                                                        o.handleCreatePasskeys$Action(o.callContext(s))
                                                    }, "createPasskeys$Action")
                                                },
                                                _validationProps: {
                                                    validationService: i
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "7",
                                                    alias: "6"
                                                },
                                                _widgetRecordProvider: t,
                                                _dependencies: []
                                            }))]
                                        })]
                                    })]
                                })
                            },
                            _dependencies: [_(a.variables.showLearnMoreVar), _(a.variables.passkeysListVar), _(a.variables.isLoadingVar)]
                        })]
                    })
                },
                _dependencies: [_(a.variables.showLearnMoreVar), _(a.variables.passkeysListVar), _(a.variables.isLoadingVar)]
            }))
        }
    };
r(B, "View");
var ge = B,
    _n = ge;
export {
    _n as
    default
};