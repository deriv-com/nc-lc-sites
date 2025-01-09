import {
    a as _e,
    b as ye,
    c as Oe,
    d as be,
    e as we
} from "./_oschunk-LEGA6VGU.js";
import {
    a as Ae
} from "./_oschunk-HM77VPRS.js";
import {
    a as z
} from "./_oschunk-ZP2LGY5A.js";
import "./_oschunk-5LFNVMPX.js";
import {
    a as oe
} from "./_oschunk-SI24YMBJ.js";
import {
    a as ae
} from "./_oschunk-FNNSC7KD.js";
import {
    a as ie
} from "./_oschunk-FSPIWF67.js";
import {
    b as R
} from "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import {
    a as P
} from "./_oschunk-FTYAL2B7.js";
import {
    a as $,
    b as ge
} from "./_oschunk-GPNNXU3M.js";
import {
    d as _,
    p as K,
    r as D
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-DSZRJG3L.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as W
} from "./_oschunk-NQZZDANH.js";
import {
    a as G,
    g as E,
    i as O
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-V2VV7FMU.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as I,
    m as Se,
    n as re,
    o as k
} from "./_oschunk-KZFTAIEG.js";
import {
    Sf as ne,
    a as w,
    hj as he
} from "./_oschunk-UATY3RVV.js";
import {
    ia as y
} from "./_oschunk-3RH6DZJJ.js";
import {
    a as ee,
    b as te,
    c as t,
    h as U
} from "./_oschunk-QHO7QY6K.js";
var A = U(G());
var v = U(G());

function se(f, n, s, e) {
    let o = JSON.parse(f.StatusData);
    switch (f.SelectedItemRef) {
        case "poi": {
            f.Status = o.poi_status;
            break
        }
        case "poa": {
            f.Status = o.poa_status;
            break
        }
        case "poo": {
            f.Status = o.poo_status;
            break
        }
        default: {
            f.Status = o.poinc_status;
            break
        }
    }
}
t(se, "default");

function ce(f, n, s, e) {
    var l, b, a, r, p;
    let o = JSON.parse(f.Response),
        i = !1,
        d = !1,
        u = !1,
        m = {};
    "status" in o && (i = (l = o.status) == null ? void 0 : l.some(h => h === "authenticated")), "authentication" in o && (d = (a = (b = o.authentication) == null ? void 0 : b.needs_verification) == null ? void 0 : a.includes("income"), u = (p = (r = o.authentication) == null ? void 0 : r.needs_verification) == null ? void 0 : p.includes("ownership")), (!i || !d) && (m = te(ee({}, m), {
        poinc: !0
    })), u || (m = te(ee({}, m), {
        poo: !0
    })), f.DisableSectionList = JSON.stringify(m)
}
t(ce, "default");
var c = y; {
    let n = class n extends c.Controller.BaseViewController {
        constructor(e, o, i) {
            super(e, o, i);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _verificationListItemSelectedItem$Action() {
            return this.hasOwnProperty("__verificationListItemSelectedItem$Action") || (this.__verificationListItemSelectedItem$Action = function(e, o) {
                var i = this.model,
                    d = this.controller,
                    u = this.idService;
                return c.Logger.startActiveSpan("VerificationListItemSelectedItem", function(m) {
                    m && (m.setAttribute("code.function", "VerificationListItemSelectedItem"), m.setAttribute("outsystems.function.key", "142d9244-f331-482a-8ac3-4066aba78ebe"), m.setAttribute("outsystems.function.owner.name", "Accounts"), m.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        d.ensureControllerAlive("VerificationListItemSelectedItem"), o = d.callContext(o);
                        var l = new c.DataTypes.VariableHolder(new(d.constructor.getVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.VerificationListItemSelectedItem$vars")));
                        l.value.refInLocal = e;
                        var b = new c.DataTypes.VariableHolder,
                            a = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType);
                        if (a.value.jSONOut = c.JSONUtils.serializeToJSON(i.variables.verificationStatusVar, !0, !1), b.value = c.Logger.startActiveSpan("PickStatus", function(r) {
                                r && (r.setAttribute("code.function", "PickStatus"), r.setAttribute("outsystems.function.key", "bfef82bb-9303-418e-9c6b-b667088dafd4"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return d.safeExecuteJSNode(se, "PickStatus", "VerificationListItemSelectedItem", {
                                        SelectedItemRef: c.DataConversion.JSNodeParamConverter.to(l.value.refInLocal, c.DataTypes.DataTypes.Text),
                                        StatusData: c.DataConversion.JSNodeParamConverter.to(a.value.jSONOut, c.DataTypes.DataTypes.Text),
                                        Status: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text)
                                    }, function(p) {
                                        var h = new(d.constructor.getVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.VerificationListItemSelectedItem$pickStatusJSResult"));
                                        return h.statusOut = c.DataConversion.JSNodeParamConverter.from(p.Status, c.DataTypes.DataTypes.Text), h
                                    }, {}, {})
                                } finally {
                                    r && r.end()
                                }
                            }, 1), l.value.refInLocal === "poi") return c.BuiltinFunctions.index("none required", b.value.statusOut, 0, !1, !0) > -1 ? c.Navigation.navigateTo(c.Navigation.generateScreenURL("Accounts", "ProofOfIdentity", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), o, !0) : c.Navigation.navigateTo(c.Navigation.generateScreenURL("Accounts", "ProofOfIdentityStatus", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), o, !0);
                        if (l.value.refInLocal === "poa" && !(c.BuiltinFunctions.index("verified", b.value.statusOut, 0, !1, !0) > -1)) return c.Navigation.navigateTo(c.Navigation.generateScreenURL("Accounts", "ProofOfAddress", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), o, !0)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__verificationListItemSelectedItem$Action
        }
        set _verificationListItemSelectedItem$Action(e) {
            this.__verificationListItemSelectedItem$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var o = this.model,
                    i = this.controller,
                    d = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(u) {
                    return u && (u.setAttribute("code.function", "OnReady"), u.setAttribute("outsystems.function.key", "e4ab11f5-b158-4eaf-9812-be7cf0bdd36c"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        i.ensureControllerAlive("OnReady"), e = i.callContext(e);
                        var m = new c.DataTypes.VariableHolder,
                            l = new c.DataTypes.VariableHolder,
                            b = new c.DataTypes.VariableHolder,
                            a = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            r = new c.DataTypes.VariableHolder(new c.DataTypes.JSONSerializeOutputType),
                            p = new c.DataTypes.VariableHolder(new(c.Controller.BaseController.getJSONDeserializeOutputType(ne)));
                        return c.Flow.executeAsyncFlow(function() {
                            return o.variables.isLoadingVar = !0, o.flush(), re.kYCAuthStatus$Action(I.getServer(), I.getAuthToken(), I.getAppId(), "en", function() {
                                var h = new he;
                                return h
                            }(), e).then(function(h) {
                                l.value = h
                            }).then(function() {
                                return a.value.jSONOut = c.JSONUtils.serializeToJSON(l.value.responseOut, !1, !1), o.flush(), re.getAccountStatus$Action(I.getServer(), I.getAuthToken(), I.getAppId(), "en", e).then(function(h) {
                                    m.value = h
                                })
                            }).then(function() {
                                r.value.jSONOut = c.JSONUtils.serializeToJSON(m.value.responseOut, !1, !1), b.value = c.Logger.startActiveSpan("CheckSectionsToDisable", function(h) {
                                    h && (h.setAttribute("code.function", "CheckSectionsToDisable"), h.setAttribute("outsystems.function.key", "564407f1-dd5e-4e9e-b622-715d53705d55"), h.setAttribute("outsystems.function.owner.name", "Accounts"), h.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return i.safeExecuteJSNode(ce, "CheckSectionsToDisable", "OnReady", {
                                            Response: c.DataConversion.JSNodeParamConverter.to(r.value.jSONOut, c.DataTypes.DataTypes.Text),
                                            DisableSectionList: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text)
                                        }, function(Le) {
                                            var me = new(i.constructor.getVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.OnReady$checkSectionsToDisableJSResult"));
                                            return me.disableSectionListOut = c.DataConversion.JSNodeParamConverter.from(Le.DisableSectionList, c.DataTypes.DataTypes.Text), me
                                        }, {}, {})
                                    } finally {
                                        h && h.end()
                                    }
                                }, 1), p.value.dataOut = c.JSONUtils.deserializeFromJSON(b.value.disableSectionListOut, ne, !1), o.variables.verificationStatusVar.pOIStatusAttr = l.value.responseOut.kYCAuthStatusAttr.identityAttr.statusAttr, o.variables.verificationStatusVar.pOAStatusAttr = l.value.responseOut.kYCAuthStatusAttr.addressAttr.statusAttr, o.variables.verificationStatusVar.pOOStatusAttr = m.value.responseOut.getAccountStatusAttr.authenticationAttr.ownershipAttr.statusAttr, o.variables.disableSectionsVar.pOIncAttr = p.value.dataOut.pOIncAttr, o.variables.disableSectionsVar.pOOAttr = p.value.dataOut.pOOAttr, o.variables.isLoadingVar = !1
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        verificationListItemSelectedItem$Action(e, o) {
            var i = this.controller;
            return c.Logger.startActiveSpan("VerificationListItemSelectedItem__proxy", function(d) {
                d && (d.setAttribute("code.function", "VerificationListItemSelectedItem"), d.setAttribute("outsystems.function.key", "142d9244-f331-482a-8ac3-4066aba78ebe"), d.setAttribute("outsystems.function.owner.name", "Accounts"), d.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._verificationListItemSelectedItem$Action, o, e)
                } finally {
                    d && d.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var o = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(i) {
                return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "e4ab11f5-b158-4eaf-9812-be7cf0bdd36c"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                }, function() {
                    i && i.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var o = this.controller,
                    i = this.model,
                    d = this.idService;
                return o.onReady$Action(e)
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
            return k.defaultTimeout
        }
    };
    t(n, "ControllerInner");
    let f = n;
    j = f, j.registerVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.VerificationListItemSelectedItem$vars", [{
        name: "Ref",
        attrName: "refInLocal",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: t(function() {
            return ""
        }, "defaultValue")
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.VerificationListItemSelectedItem$pickStatusJSResult", [{
        name: "Status",
        attrName: "statusOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: t(function() {
            return ""
        }, "defaultValue")
    }]), j.registerVariableGroupType("Accounts.ProofOfIdentity.VerificationItems.OnReady$checkSectionsToDisableJSResult", [{
        name: "DisableSectionList",
        attrName: "disableSectionListOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: t(function() {
            return ""
        }, "defaultValue")
    }])
}
var j, Pe = new c.Controller.ControllerFactory(j, W);
var g = U(G());
var Ce = y; {
    let n = class n extends Ce.Controller.BaseViewController {
        constructor(e, o, i) {
            super(e, o, i);
            var d = this.controller;
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
            return k.defaultTimeout
        }
    };
    t(n, "ControllerInner");
    let f = n;
    Ie = f
}
var Ie, Re = new Ce.Controller.ControllerFactory(Ie, W);
var de = U(G());
var De = {};
var Ve = y; {
    let n = class n extends Ve.Controller.BaseViewController {
        constructor(e, o, i) {
            super(e, o, i, De);
            var d = this.controller;
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
            return Se.defaultTimeout
        }
    };
    t(n, "ControllerInner");
    let f = n;
    xe = f
}
var xe, He = new Ve.Controller.ControllerFactory(xe, ge);
var Te = y,
    ht = O.PlaceholderContent,
    St = O.IteratorPlaceholderContent,
    H = class H extends E.BaseWebBlock {
        static get displayName() {
            return "Content.Tag"
        }
        static getAttributes() {
            return {
                codeFunction: "Tag",
                functionKey: "8a67ba94-c4c8-4792-a082-33aeb0de5590",
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
            return _e
        }
        get controllerFactory() {
            return He
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                u = H.ifWidget,
                m = H.textWidget,
                l = H.asPrimitiveValue,
                b = H.getTranslation,
                a = this;
            return de.createElement("div", this.getRootNodeProperties(), de.createElement(K, {
                align: 0,
                content: a.props.placeholders.tag,
                gridProperties: {
                    classes: "OSInline"
                },
                style: n.getCachedValue(e.getId("Tag.Style"), function() {
                    return "tag" + (n.variables.sizeIn !== Te.BuiltinFunctions.nullTextIdentifier() ? " tag-" + n.variables.sizeIn : "") + " border-radius-" + n.variables.shapeIn + (n.variables.isLightIn ? " background-" + n.variables.colorIn + "-lightest text-" + n.variables.colorIn + "-darker" : " background-" + n.variables.colorIn) + (n.variables.extendedClassIn === "" ? "" : " " + n.variables.extendedClassIn)
                }, function() {
                    return n.variables.sizeIn
                }, function() {
                    return n.variables.shapeIn
                }, function() {
                    return n.variables.isLightIn
                }, function() {
                    return n.variables.colorIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                _idProps: {
                    service: e,
                    name: "Tag"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: Te.Model.calculateDataFetchStatus(n.variables._sizeInDataFetchStatus, n.variables._shapeInDataFetchStatus, n.variables._isLightInDataFetchStatus, n.variables._colorInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
            }))
        }
    };
t(H, "View");
var le = H,
    M = le;
var We = y,
    Q = O.PlaceholderContent,
    Ct = O.IteratorPlaceholderContent,
    T = class T extends E.BaseWebBlock {
        static get displayName() {
            return "Common.StatusBadge"
        }
        static getAttributes() {
            return {
                codeFunction: "StatusBadge",
                functionKey: "b72cf305-f34c-41e2-b275-d7f597f168b3",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.StatusBadge.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [M, R]
        }
        get modelFactory() {
            return ye
        }
        get controllerFactory() {
            return Re
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                u = T.ifWidget,
                m = T.textWidget,
                l = T.asPrimitiveValue,
                b = T.getTranslation,
                a = this;
            return g.createElement("div", this.getRootNodeProperties(), u(n.variables.statusIn === "verified", !1, this, function() {
                return [g.createElement(M, {
                    getOwnerSpan: t(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: t(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ExtendedClass: "badge-verified",
                        Color: w.color.transparent,
                        Size: w.size.small,
                        Shape: w.shape.rounded
                    },
                    events: {
                        _handleError: t(function(r) {
                            s.handleError(r)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: e,
                        name: "Verified",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        tag: new Q(function() {
                            return [g.createElement(_, {
                                align: 0,
                                animate: !1,
                                style: "display-flex column-gap-s align-items-center badge--container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: i
                            }, g.createElement(R, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" role="img" id="selected_downloadable_icon_id"><g><path d="M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m3.09-8.285-3.5 3.5c-.274.273-.684.273-.93 0l-1.75-1.75a.6.6 0 0 1 0-.902c.246-.274.656-.274.93 0l1.285 1.285L9.16 8.562c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903"></path></g><defs><clipPath id="9db03c7e2e332cd63887c59da2d09aee__a"><path d="M0 0h14v22H0z"></path></clipPath></defs></svg>',
                                    ExtendedClass: "badge--icon badge-verified--icon"
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), g.createElement(D, {
                                style: "font-size-xs badge--text font-bold",
                                text: ["Verified"],
                                _idProps: {
                                    service: e,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: i
                            }))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [u(n.variables.statusIn === "suspected" || n.variables.statusIn === "rejected" || n.variables.statusIn === "resubmit" || n.variables.statusIn === "expired", !1, this, function() {
                    return [g.createElement(M, {
                        getOwnerSpan: t(function() {
                            return a.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: t(function() {
                            return a.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            Size: w.size.small,
                            Color: w.color.transparent,
                            Shape: w.shape.rounded,
                            ExtendedClass: "badge-failed"
                        },
                        events: {
                            _handleError: t(function(r) {
                                s.handleError(r)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: o
                        },
                        _idProps: {
                            service: e,
                            name: "Failed",
                            alias: "3"
                        },
                        _widgetRecordProvider: i,
                        placeholders: {
                            tag: new Q(function() {
                                return [g.createElement(_, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex column-gap-s align-items-center badge--container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "5"
                                    },
                                    _widgetRecordProvider: i
                                }, g.createElement(R, {
                                    getOwnerSpan: t(function() {
                                        return a.getChildSpan("render")
                                    }, "getOwnerSpan"),
                                    getOwnerDisposeSpan: t(function() {
                                        return a.getChildSpan("destroy")
                                    }, "getOwnerDisposeSpan"),
                                    inputs: {
                                        SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" role="img" id="selected_downloadable_icon_id"><g><path d="m6.781 6.074-5.414 8.887c-.054.082-.054.137-.054.219 0 .218.164.383.382.383h10.582c.22 0 .41-.165.41-.383 0-.082-.027-.137-.082-.22L7.192 6.075A.21.21 0 0 0 7 5.938c-.11 0-.164.054-.219.136m-1.12-.683A1.57 1.57 0 0 1 7 4.625c.52 0 1.04.3 1.313.766l5.414 8.886c.164.274.273.575.273.903 0 .93-.766 1.695-1.723 1.695H1.695C.765 16.875 0 16.109 0 15.18q0-.493.246-.903zm2.214 8.422c0 .492-.41.874-.875.874a.864.864 0 0 1-.875-.874c0-.465.383-.876.875-.876a.9.9 0 0 1 .875.876M7.656 8.78v2.625c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V8.781c0-.355.273-.656.656-.656.355 0 .656.3.656.656"></path></g><defs><clipPath id="b6dcf8e18ca8efb2506a32f7f4067635__a"><path d="M0 0h14v22H0z"></path></clipPath></defs></svg>',
                                        ExtendedClass: "badge--icon badge-failed--icon"
                                    },
                                    events: {
                                        _handleError: t(function(r) {
                                            s.handleError(r)
                                        }, "_handleError")
                                    },
                                    _validationProps: {
                                        validationService: o
                                    },
                                    _idProps: {
                                        service: e,
                                        uuid: "6",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: i,
                                    _dependencies: []
                                }), g.createElement(D, {
                                    style: "font-size-xs badge--text font-bold",
                                    text: ["Failed"],
                                    _idProps: {
                                        service: e,
                                        uuid: "7"
                                    },
                                    _widgetRecordProvider: i
                                }))]
                            })
                        },
                        _dependencies: []
                    })]
                }, function() {
                    return [u(n.variables.statusIn === "pending", !1, this, function() {
                        return [g.createElement(M, {
                            getOwnerSpan: t(function() {
                                return a.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return a.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Color: w.color.transparent,
                                Shape: w.shape.rounded,
                                Size: w.size.small,
                                ExtendedClass: "badge-inreview"
                            },
                            events: {
                                _handleError: t(function(r) {
                                    s.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                name: "InReview",
                                alias: "5"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                tag: new Q(function() {
                                    return [g.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex column-gap-s align-items-center badge--container",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: i
                                    }, g.createElement(R, {
                                        getOwnerSpan: t(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ExtendedClass: "badge--icon badge-inreview--icon",
                                            SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" role="img" id="selected_downloadable_icon_id"><g><path d="M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m6.344-3.719c0-.355.273-.656.656-.656.355 0 .656.3.656.656v3.063h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H7a.63.63 0 0 1-.656-.656z"></path></g><defs><clipPath id="14b7046bdef76ccafa13aab2993c5ea0__a"><path d="M0 0h14v22H0z"></path></clipPath></defs></svg>'
                                        },
                                        events: {
                                            _handleError: t(function(r) {
                                                s.handleError(r)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: o
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "10",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    }), g.createElement(D, {
                                        style: "font-size-xs badge--text font-bold",
                                        text: ["In review"],
                                        _idProps: {
                                            service: e,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: i
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    }, function() {
                        return [u(We.BuiltinFunctions.index("required revoked", n.variables.statusIn, 0, !1, !0) > -1, !1, this, function() {
                            return [g.createElement(M, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Color: w.color.transparent,
                                    Shape: w.shape.rounded,
                                    Size: w.size.small,
                                    ExtendedClass: "badge-pending"
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    name: "Pending",
                                    alias: "7"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    tag: new Q(function() {
                                        return [g.createElement(_, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex column-gap-s align-items-center badge--container",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "13"
                                            },
                                            _widgetRecordProvider: i
                                        }, g.createElement(R, {
                                            getOwnerSpan: t(function() {
                                                return a.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: t(function() {
                                                return a.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                ExtendedClass: "badge--icon badge-pending--icon",
                                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22" role="img" id="selected_downloadable_icon_id"><g><path d="M7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75m0-10.5c.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V7.906c0-.355.273-.656.656-.656m.875 6.125c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875"></path></g><defs><clipPath id="12cd130bd4c8e820f18277e7b8cf94ee__a"><path d="M0 0h14v22H0z"></path></clipPath></defs></svg>'
                                            },
                                            events: {
                                                _handleError: t(function(r) {
                                                    s.handleError(r)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "14",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        }), g.createElement(D, {
                                            style: "font-size-xs badge--text font-bold",
                                            text: ["Needs verification"],
                                            _idProps: {
                                                service: e,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: i
                                        }))]
                                    })
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        })]
                    })]
                })]
            }))
        }
    };
t(T, "View");
var ue = T,
    C = ue;
var x = U(G());
var V = y; {
    let n = class n extends V.Controller.BaseViewController {
        constructor(e, o, i) {
            super(e, o, i);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _itemOnClick$Action() {
            return this.hasOwnProperty("__itemOnClick$Action") || (this.__itemOnClick$Action = function(e) {
                var o = this.model,
                    i = this.controller,
                    d = this.idService;
                return V.Logger.startActiveSpan("ItemOnClick", function(u) {
                    return u && (u.setAttribute("code.function", "ItemOnClick"), u.setAttribute("outsystems.function.key", "4ea7d968-648a-47f4-8990-9c43417249c4"), u.setAttribute("outsystems.function.owner.name", "Accounts"), u.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), V.Flow.tryFinally(function() {
                        return i.ensureControllerAlive("ItemOnClick"), e = i.callContext(e), V.Flow.executeAsyncFlow(function() {
                            return V.Flow.executeSequence(function() {
                                if (!o.variables.isDisabledIn) return i.selectedItem$Action(o.variables.refIn, e)
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__itemOnClick$Action
        }
        set _itemOnClick$Action(e) {
            this.__itemOnClick$Action = e
        }
        itemOnClick$Action(e) {
            var o = this.controller;
            return V.Logger.startActiveSpan("ItemOnClick__proxy", function(i) {
                return i && (i.setAttribute("code.function", "ItemOnClick"), i.setAttribute("outsystems.function.key", "4ea7d968-648a-47f4-8990-9c43417249c4"), i.setAttribute("outsystems.function.owner.name", "Accounts"), i.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), V.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._itemOnClick$Action, e)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        get selectedItem$Action() {
            return this.hasOwnProperty("_selectedItem$Action") || (this._selectedItem$Action = function() {
                return Promise.resolve()
            }), this._selectedItem$Action
        }
        set selectedItem$Action(e) {
            this._selectedItem$Action = e
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
            return k.defaultTimeout
        }
    };
    t(n, "ControllerInner");
    let f = n;
    Fe = f
}
var Fe, Ne = new V.Controller.ControllerFactory(Fe, W);
var X = y,
    Bt = O.PlaceholderContent,
    Jt = O.IteratorPlaceholderContent,
    F = class F extends E.BaseWebBlock {
        static get displayName() {
            return "Common.MobileVerificationListItem"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileVerificationListItem",
                functionKey: "cbf86f33-4d7c-4267-9bbf-fb6090a3a552",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.MobileVerificationListItem.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [R]
        }
        get modelFactory() {
            return Oe
        }
        get controllerFactory() {
            return Ne
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                u = F.ifWidget,
                m = F.textWidget,
                l = F.asPrimitiveValue,
                b = F.getTranslation,
                a = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(_, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: t(function() {
                        return Promise.resolve().then(function() {
                            var r = d.clone();
                            return s.itemOnClick$Action(s.callContext(r))
                        })
                    }, "onClick")
                },
                style: n.getCachedValue(e.getId("L8OJFKWkqUmx50uySi9oUw.Style"), function() {
                    return "verificationListItem-layout display-flex justify-content-space-between align-items-center " + (n.variables.isDisabledIn || X.BuiltinFunctions.index("verified pending", n.variables.statusIn, 0, !1, !0) > -1 ? "verificationListItem-layout--disable" : "")
                }, function() {
                    return n.variables.isDisabledIn
                }, function() {
                    return n.variables.statusIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: X.Model.calculateDataFetchStatus(n.variables._isDisabledInDataFetchStatus, n.variables._statusInDataFetchStatus)
            }, x.createElement(_, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("zqFHEr1Xe0mkwM0F8IFzaw.Style"), function() {
                    return "font-regular verificationListItem-text display-flex flex-direction-column row-gap-xs " + (n.variables.isDisabledIn ? "verificationListItem-text--disable" : "")
                }, function() {
                    return n.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: i,
                style_dataFetchStatus: X.Model.calculateDataFetchStatus(n.variables._isDisabledInDataFetchStatus)
            }, x.createElement(K, {
                align: 0,
                content: a.props.placeholders.text,
                _idProps: {
                    service: e,
                    name: "Text"
                },
                _widgetRecordProvider: i
            }), x.createElement(K, {
                align: 0,
                content: a.props.placeholders.badge,
                _idProps: {
                    service: e,
                    name: "Badge"
                },
                _widgetRecordProvider: i
            })), x.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex column-gap-s align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: i
            }, x.createElement(R, {
                getOwnerSpan: t(function() {
                    return a.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return a.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>',
                    ExtendedClass: n.getCachedValue(e.getId("l3s+wHAQeUi+0pkL8BA_6A.ExtendedClass"), function() {
                        return "verificationListItem-action " + (n.variables.statusIn === "verified" || n.variables.isDisabledIn ? "verificationListItem-action--disable" : "")
                    }, function() {
                        return n.variables.statusIn
                    }, function() {
                        return n.variables.isDisabledIn
                    }),
                    _extendedClassInDataFetchStatus: X.Model.calculateDataFetchStatus(n.variables._statusInDataFetchStatus, n.variables._isDisabledInDataFetchStatus)
                },
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            }))))
        }
    };
t(F, "View");
var ve = F,
    B = ve;
var S = O.PlaceholderContent,
    cn = O.IteratorPlaceholderContent,
    N = class N extends E.BaseWebBlock {
        static get displayName() {
            return "ProofOfIdentity.VerificationItems"
        }
        static getAttributes() {
            return {
                codeFunction: "VerificationItems",
                functionKey: "7c0a248f-d033-4b35-b097-642c10c0735b",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.ProofOfIdentity.VerificationItems.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [oe, $, z, C, P, B]
        }
        get modelFactory() {
            return be
        }
        get controllerFactory() {
            return Pe
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                u = N.ifWidget,
                m = N.textWidget,
                l = N.asPrimitiveValue,
                b = N.getTranslation,
                a = this;
            return v.createElement("div", this.getRootNodeProperties(), v.createElement(_, {
                align: 0,
                animate: !1,
                style: "position-relative",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, u(n.variables.isLoadingVar, !0, this, function() {
                return [v.createElement(oe, {
                    getOwnerSpan: t(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: t(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: t(function(r) {
                            s.handleError(r)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    _dependencies: []
                })]
            }, function() {
                return [v.createElement($, {
                    getOwnerSpan: t(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: t(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: t(function(r) {
                            s.handleError(r)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: e,
                        uuid: "2",
                        alias: "2"
                    },
                    _widgetRecordProvider: i,
                    placeholders: {
                        desktopLayout: new S(function() {
                            return [v.createElement(_, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: i
                            }, v.createElement(z, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: n.variables.verificationStatusVar.pOIStatusAttr,
                                    IsDisabled: n.variables.disableSectionsVar.pOIAttr,
                                    Ref: "poi"
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "4",
                                    alias: "3"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of identity"]
                                    }),
                                    badge: new S(function() {
                                        return [v.createElement(C, {
                                            getOwnerSpan: t(function() {
                                                return a.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: t(function() {
                                                return a.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: n.variables.verificationStatusVar.pOIStatusAttr
                                            },
                                            events: {
                                                _handleError: t(function(r) {
                                                    s.handleError(r)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "5",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOIStatusAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "6",
                                    alias: "5"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(z, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsDisabled: n.variables.disableSectionsVar.pOAAttr,
                                    Ref: "poa",
                                    Status: n.variables.verificationStatusVar.pOAStatusAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "7",
                                    alias: "6"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of address"]
                                    }),
                                    badge: new S(function() {
                                        return [v.createElement(C, {
                                            getOwnerSpan: t(function() {
                                                return a.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: t(function() {
                                                return a.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: n.variables.verificationStatusVar.pOAStatusAttr
                                            },
                                            events: {
                                                _handleError: t(function(r) {
                                                    s.handleError(r)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "8",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOAStatusAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "9",
                                    alias: "8"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(z, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsDisabled: n.variables.disableSectionsVar.pOIncAttr,
                                    Ref: "poinc",
                                    Status: n.variables.verificationStatusVar.pOIncStatusAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "10",
                                    alias: "9"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of ownership"]
                                    }),
                                    badge: new S(function() {
                                        return [u(n.variables.disableSectionsVar.pOOAttr, !1, this, function() {
                                            return []
                                        }, function() {
                                            return [v.createElement(C, {
                                                getOwnerSpan: t(function() {
                                                    return a.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: t(function() {
                                                    return a.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Status: n.variables.verificationStatusVar.pOOStatusAttr
                                                },
                                                events: {
                                                    _handleError: t(function(r) {
                                                        s.handleError(r)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: o
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "11",
                                                    alias: "10"
                                                },
                                                _widgetRecordProvider: i,
                                                _dependencies: []
                                            })]
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOOStatusAttr), l(n.variables.disableSectionsVar.pOOAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "12",
                                    alias: "11"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(z, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Ref: "poo",
                                    IsDisabled: n.variables.disableSectionsVar.pOOAttr,
                                    Status: n.variables.verificationStatusVar.pOOStatusAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "13",
                                    alias: "12"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of income"]
                                    }),
                                    badge: new S(function() {
                                        return [u(n.variables.disableSectionsVar.pOIncAttr, !1, this, function() {
                                            return []
                                        }, function() {
                                            return [v.createElement(C, {
                                                getOwnerSpan: t(function() {
                                                    return a.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: t(function() {
                                                    return a.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Status: n.variables.verificationStatusVar.pOIncStatusAttr
                                                },
                                                events: {
                                                    _handleError: t(function(r) {
                                                        s.handleError(r)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: o
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "14",
                                                    alias: "13"
                                                },
                                                _widgetRecordProvider: i,
                                                _dependencies: []
                                            })]
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOIncStatusAttr), l(n.variables.disableSectionsVar.pOIncAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "15",
                                    alias: "14"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }))]
                        }),
                        tabletLayout: S.Empty,
                        defaultLayout: new S(function() {
                            return [v.createElement(_, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: i
                            }, v.createElement(B, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Ref: "poi",
                                    IsDisabled: n.variables.disableSectionsVar.pOIAttr,
                                    Status: n.variables.verificationStatusVar.pOIStatusAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "17",
                                    alias: "15"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of identity"]
                                    }),
                                    badge: new S(function() {
                                        return [v.createElement(C, {
                                            getOwnerSpan: t(function() {
                                                return a.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: t(function() {
                                                return a.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: n.variables.verificationStatusVar.pOIStatusAttr
                                            },
                                            events: {
                                                _handleError: t(function(r) {
                                                    s.handleError(r)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "18",
                                                alias: "16"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOIStatusAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "19",
                                    alias: "17"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(B, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: n.variables.verificationStatusVar.pOAStatusAttr,
                                    IsDisabled: n.variables.disableSectionsVar.pOAAttr,
                                    Ref: "poa"
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "20",
                                    alias: "18"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of address"]
                                    }),
                                    badge: new S(function() {
                                        return [v.createElement(C, {
                                            getOwnerSpan: t(function() {
                                                return a.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: t(function() {
                                                return a.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Status: n.variables.verificationStatusVar.pOAStatusAttr
                                            },
                                            events: {
                                                _handleError: t(function(r) {
                                                    s.handleError(r)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: o
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "21",
                                                alias: "19"
                                            },
                                            _widgetRecordProvider: i,
                                            _dependencies: []
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOAStatusAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "22",
                                    alias: "20"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(B, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Status: n.variables.verificationStatusVar.pOIncStatusAttr,
                                    Ref: "poinc",
                                    IsDisabled: n.variables.disableSectionsVar.pOIncAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "23",
                                    alias: "21"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of ownership"]
                                    }),
                                    badge: new S(function() {
                                        return [u(n.variables.disableSectionsVar.pOOAttr, !1, this, function() {
                                            return []
                                        }, function() {
                                            return [v.createElement(C, {
                                                getOwnerSpan: t(function() {
                                                    return a.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: t(function() {
                                                    return a.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Status: n.variables.verificationStatusVar.pOOStatusAttr
                                                },
                                                events: {
                                                    _handleError: t(function(r) {
                                                        s.handleError(r)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: o
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "24",
                                                    alias: "22"
                                                },
                                                _widgetRecordProvider: i,
                                                _dependencies: []
                                            })]
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOOStatusAttr), l(n.variables.disableSectionsVar.pOOAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "25",
                                    alias: "23"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }), v.createElement(B, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Ref: "poo",
                                    IsDisabled: n.variables.disableSectionsVar.pOOAttr,
                                    Status: n.variables.verificationStatusVar.pOOStatusAttr
                                },
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError"),
                                    selectedItem$Action: t(function(r) {
                                        var p = d.clone();
                                        s.verificationListItemSelectedItem$Action(r, s.callContext(p))
                                    }, "selectedItem$Action")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "26",
                                    alias: "24"
                                },
                                _widgetRecordProvider: i,
                                placeholders: {
                                    text: new S(function() {
                                        return ["Proof of income"]
                                    }),
                                    badge: new S(function() {
                                        return [u(n.variables.disableSectionsVar.pOIncAttr, !1, this, function() {
                                            return []
                                        }, function() {
                                            return [v.createElement(C, {
                                                getOwnerSpan: t(function() {
                                                    return a.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: t(function() {
                                                    return a.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    Status: n.variables.verificationStatusVar.pOIncStatusAttr
                                                },
                                                events: {
                                                    _handleError: t(function(r) {
                                                        s.handleError(r)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: o
                                                },
                                                _idProps: {
                                                    service: e,
                                                    uuid: "27",
                                                    alias: "25"
                                                },
                                                _widgetRecordProvider: i,
                                                _dependencies: []
                                            })]
                                        })]
                                    })
                                },
                                _dependencies: [l(n.variables.verificationStatusVar.pOIncStatusAttr), l(n.variables.disableSectionsVar.pOIncAttr)]
                            }), v.createElement(P, {
                                getOwnerSpan: t(function() {
                                    return a.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: t(function() {
                                    return a.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: t(function(r) {
                                        s.handleError(r)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: o
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "28",
                                    alias: "26"
                                },
                                _widgetRecordProvider: i,
                                _dependencies: []
                            }))]
                        })
                    },
                    _dependencies: [l(n.variables.disableSectionsVar.pOOAttr), l(n.variables.disableSectionsVar.pOIncAttr), l(n.variables.disableSectionsVar.pOAAttr), l(n.variables.disableSectionsVar.pOIAttr), l(n.variables.verificationStatusVar.pOOStatusAttr), l(n.variables.verificationStatusVar.pOIncStatusAttr), l(n.variables.verificationStatusVar.pOAStatusAttr), l(n.variables.verificationStatusVar.pOIStatusAttr)]
                })]
            })))
        }
    };
t(N, "View");
var fe = N,
    Z = fe;
var J = O.PlaceholderContent,
    bn = O.IteratorPlaceholderContent,
    L = class L extends E.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Verification"
        }
        static getAttributes() {
            return {
                codeFunction: "Verification",
                functionKey: "9931b71f-a96d-4fcd-98f5-1cf176247963",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.MainFlow.Verification.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [$, ie, Z, ae]
        }
        get modelFactory() {
            return we
        }
        get controllerFactory() {
            return Ae
        }
        get title() {
            return "Verification"
        }
        internalRender() {
            let n = this.model,
                s = this.controller,
                e = this.idService,
                o = s.validationService,
                i = this.widgetsRecordProvider,
                d = s.callContext(),
                u = L.ifWidget,
                m = L.textWidget,
                l = L.asPrimitiveValue,
                b = L.getTranslation,
                a = this;
            return A.createElement("div", this.getRootNodeProperties(), A.createElement($, {
                getOwnerSpan: t(function() {
                    return a.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: t(function() {
                    return a.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsDesktop: I.getDevice() === "desktop"
                },
                events: {
                    _handleError: t(function(r) {
                        s.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                placeholders: {
                    desktopLayout: new J(function() {
                        return [A.createElement(ie, {
                            getOwnerSpan: t(function() {
                                return a.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return a.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "verification"
                            },
                            events: {
                                _handleError: t(function(r) {
                                    s.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                content: new J(function() {
                                    return [A.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column row-gap-s verification-section selected-content",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: i
                                    }, A.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: i
                                    }, A.createElement(D, {
                                        style: "font-size-h5 font-bold verification-section--title",
                                        text: ["Verification"],
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: i
                                    })), A.createElement(Z, {
                                        getOwnerSpan: t(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: t(function(r) {
                                                s.handleError(r)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: o
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "5",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: J.Empty,
                    defaultLayout: new J(function() {
                        return [A.createElement(ae, {
                            getOwnerSpan: t(function() {
                                return a.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: t(function() {
                                return a.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                DisplayBackButton: !0,
                                DisplayCloseButton: !1
                            },
                            events: {
                                _handleError: t(function(r) {
                                    s.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                uuid: "6",
                                alias: "4"
                            },
                            _widgetRecordProvider: i,
                            placeholders: {
                                title: new J(function() {
                                    return [A.createElement(D, {
                                        style: "font-size-h6 font-bold",
                                        text: ["Verification"],
                                        _idProps: {
                                            service: e,
                                            name: "Verification"
                                        },
                                        _widgetRecordProvider: i
                                    })]
                                }),
                                sectioncontent: new J(function() {
                                    return [A.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "verification-section__items",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: i
                                    }, A.createElement(Z, {
                                        getOwnerSpan: t(function() {
                                            return a.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: t(function() {
                                            return a.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: t(function(r) {
                                                s.handleError(r)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: o
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "9",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: i,
                                        _dependencies: []
                                    }))]
                                })
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
t(L, "View");
var pe = L,
    wn = pe;
export {
    wn as
    default
};