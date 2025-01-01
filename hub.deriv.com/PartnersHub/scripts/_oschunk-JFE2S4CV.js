import {
    a as U,
    b as z
} from "./_oschunk-7WHB3DVB.js";
import {
    a as $
} from "./_oschunk-HPTYFHQT.js";
import {
    a as T
} from "./_oschunk-XSYDT34B.js";
import "./_oschunk-K6KZ63LW.js";
import "./_oschunk-O4ORPF6H.js";
import "./_oschunk-6BFNTJQ7.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    b as B,
    d as y,
    l as F,
    o as J,
    p as L,
    u as w
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-Y7V2YK47.js";
import "./_oschunk-KWCHY67Z.js";
import {
    a as N
} from "./_oschunk-4GXKK3IG.js";
import {
    a as W,
    g as h,
    i as b
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-PDLV67M2.js";
import "./_oschunk-3LDAHYP5.js";
import "./_oschunk-ZO3X5EQS.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as P,
    q as O
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    mc as H,
    yb as A
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as p
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as D
} from "./_oschunk-QHO7QY6K.js";
var R = D(W());
var c = D(W());
var X = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "\u0627\u0644\u062A\u0627\u0644\u064A"
    },
    K = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "N\xE4chste"
    },
    G = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "Siguiente"
    },
    q = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "Suivant"
    },
    Y = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "Prossimo"
    },
    Q = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "Nast\u0119pny"
    },
    Z = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "Pr\xF3ximo"
    },
    ee = {
        "Uz2McX9gT0e5iVjHfJ9Drw#Value": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439"
    },
    M = {
        "ar-001": {
            translations: X,
            isRTL: !0
        },
        "de-DE": {
            translations: K,
            isRTL: !1
        },
        "es-ES": {
            translations: G,
            isRTL: !1
        },
        "fr-FR": {
            translations: q,
            isRTL: !1
        },
        "it-IT": {
            translations: Y,
            isRTL: !1
        },
        "pl-PL": {
            translations: Q,
            isRTL: !1
        },
        "pt-PT": {
            translations: Z,
            isRTL: !1
        },
        "ru-RU": {
            translations: ee,
            isRTL: !1
        }
    };

function x(u, v, o, e) {
    let i = {
            Website: u.Website
        },
        t = yup.object().shape({
            Website: yup.string().required("Website is required.").max(100, "Website must be at most 100 characters long.").matches(/^(https?:\/\/.+|www\..+)$/, "Website must be a valid URL starting with http, https, or www. Example: https://example.com or www.example.com.").url("Website must be a valid URL.")
        }),
        {
            errors: d,
            validFields: s
        } = validate(t, i);
    u.ValidationErrors = JSON.stringify(d), u.ValidFields = JSON.stringify(s)
}
n(x, "default");
var r = p; {
    let v = class v extends r.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, M);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    d = this.idService;
                return r.Logger.startActiveSpan("NextOnClick", function(s) {
                    s && (s.setAttribute("code.function", "NextOnClick"), s.setAttribute("outsystems.function.key", "5bb106e1-5933-4e39-a861-b40c925f83ce"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("NextOnClick"), e = t.callContext(e);
                        var g = new r.DataTypes.VariableHolder,
                            C = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(H))),
                            _ = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        if (g.value = r.Logger.startActiveSpan("Validate", function(a) {
                                a && (a.setAttribute("code.function", "Validate"), a.setAttribute("outsystems.function.key", "f334991e-d777-4ce0-8901-b84bc8324e6f"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(x, "Validate", "NextOnClick", {
                                        Website: r.DataConversion.JSNodeParamConverter.to(P.getRealSignupIndividualWebsite(), r.DataTypes.DataTypes.Text),
                                        ValidationErrors: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        ValidFields: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(l) {
                                        var S = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IndividualAccountBlock.NextOnClick$validateJSResult"));
                                        return S.validationErrorsOut = r.DataConversion.JSNodeParamConverter.from(l.ValidationErrors, r.DataTypes.DataTypes.Text), S.validFieldsOut = r.DataConversion.JSNodeParamConverter.from(l.ValidFields, r.DataTypes.DataTypes.Text), S
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), C.value.dataOut = r.JSONUtils.deserializeFromJSON(g.value.validationErrorsOut, H, !1), _.value.dataOut = r.JSONUtils.deserializeFromJSON(g.value.validFieldsOut, A, !1), i.widgets.get(d.getId("IndividualWebsite")).validAttr = _.value.dataOut.websiteAttr, i.widgets.get(d.getId("IndividualWebsite")).validationMessageAttr = C.value.dataOut.websiteAttr, i.widgets.get(d.getId("IndividualForm")).validAttr) return O.realSignupNextStep$Action(1, e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "TermsOfUseScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        nextOnClick$Action(e) {
            var i = this.controller;
            return r.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "5bb106e1-5933-4e39-a861-b40c925f83ce"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, e)
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
            return O.defaultTimeout
        }
    };
    n(v, "ControllerInner");
    let u = v;
    E = u, E.registerVariableGroupType("PartnersHub.RealAccountCreation.IndividualAccountBlock.NextOnClick$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: n(function() {
            return ""
        }, "defaultValue")
    }])
}
var E, j = new r.Controller.ControllerFactory(E, N);
var re = p,
    ye = b.PlaceholderContent,
    Ce = b.IteratorPlaceholderContent,
    m = class m extends h.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.IndividualAccountBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "IndividualAccountBlock",
                functionKey: "3027d0f8-72ee-4b2a-8801-4955a75d325b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.IndividualAccountBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return j
        }
        get title() {
            return ""
        }
        internalRender() {
            let v = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                d = o.callContext(),
                s = m.ifWidget,
                g = m.textWidget,
                C = m.asPrimitiveValue,
                _ = m.getTranslation,
                a = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, c.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, c.createElement(w, {
                extendedProperties: {
                    style: "color: #272B30; font-size: 16px;"
                },
                text: ["Share the website URL you'll use for promoting our services."],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), c.createElement(y, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, c.createElement(L, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, "Your website"), c.createElement(F, {
                _validationProps: {
                    validationService: i
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: '"form card"',
                _idProps: {
                    service: e,
                    name: "IndividualForm"
                },
                _widgetRecordProvider: t
            }, c.createElement(J, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("IndividualForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 50,
                prompt: "Enter your website address",
                style: "form-control",
                variable: v.createVariable(re.DataTypes.DataTypes.Text, P.getRealSignupIndividualWebsite(), function(l) {
                    P.setRealSignupIndividualWebsite(l)
                }),
                _idProps: {
                    service: e,
                    name: "IndividualWebsite"
                },
                _widgetRecordProvider: t
            }), c.createElement(y, {
                align: 0,
                animate: !1,
                style: "real-signup-next-button-individual-screen",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, c.createElement(B, {
                enabled: !0,
                isDefault: !1,
                onClick: n(function() {
                    a.validateWidget(e.getId("IndividualForm"));
                    var l = d.clone();
                    o.nextOnClick$Action(o.callContext(l))
                }, "onClick"),
                style: "real-signup-individual-next-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, c.createElement(w, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                },
                text: [g(_("Uz2McX9gT0e5iVjHfJ9Drw#Value", "Next"))],
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            })))))))
        }
    };
n(m, "View");
var I = m,
    V = I;
var ne = b.PlaceholderContent,
    ke = b.IteratorPlaceholderContent,
    f = class f extends h.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.IndividualAccountScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "IndividualAccountScreen",
                functionKey: "b1c7caed-d8b3-45b0-b657-a6e555e7657f",
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
            return [T, V]
        }
        get modelFactory() {
            return z
        }
        get controllerFactory() {
            return $
        }
        get title() {
            return h.BaseWebScreen.getTranslation("7crHsbPYsEW2V6blVedlfw#Title", "IndividualAccountScreen")
        }
        internalRender() {
            let v = this.model,
                o = this.controller,
                e = this.idService,
                i = o.validationService,
                t = this.widgetsRecordProvider,
                d = o.callContext(),
                s = f.ifWidget,
                g = f.textWidget,
                C = f.asPrimitiveValue,
                _ = f.getTranslation,
                a = this;
            return R.createElement("div", this.getRootNodeProperties(), R.createElement(T, {
                getOwnerSpan: n(function() {
                    return a.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return a.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(l) {
                        o.handleError(l)
                    }, "_handleError"),
                    onClickBack2$Action: n(function() {
                        var l = d.clone();
                        o.realAccountCreationLayoutScreenBasedonClickBack2$Action(o.callContext(l))
                    }, "onClickBack2$Action")
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
                    content: new ne(function() {
                        return [R.createElement(V, {
                            getOwnerSpan: n(function() {
                                return a.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return a.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(l) {
                                    o.handleError(l)
                                }, "_handleError")
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
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
n(f, "View");
var k = f,
    De = k;
export {
    De as
    default
};