import {
    a as U,
    b as $
} from "./_oschunk-S7TZTXXA.js";
import {
    a as K
} from "./_oschunk-7VHAFG56.js";
import {
    a as x
} from "./_oschunk-T235ANIR.js";
import "./_oschunk-3YBO6G6W.js";
import "./_oschunk-SLDZWO3Q.js";
import "./_oschunk-22UUXQ4S.js";
import "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    b as L,
    d as _,
    l as J,
    o as R,
    p as S,
    u as M
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-YFNTRMC5.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as V
} from "./_oschunk-6WALBPGV.js";
import {
    a as B,
    g as h,
    i as f
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-BFQJHNK7.js";
import "./_oschunk-RO5KMNGS.js";
import "./_oschunk-4XEIQ5YX.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as d,
    p as w
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import {
    Nd as H,
    Qe as T
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as P
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var A = F(B());
var i = F(B());
var z = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "\u0627\u0644\u062A\u0627\u0644\u064A"
    },
    q = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "N\xE4chste"
    },
    Z = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "Siguiente"
    },
    X = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "Suivant"
    },
    Y = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "Prossimo"
    },
    j = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "Nast\u0119pny"
    },
    ee = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "Pr\xF3ximo"
    },
    te = {
        "3Q7iG50tnUKa2rhDgeMHgA#Value": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439"
    },
    G = {
        "ar-001": {
            translations: z,
            isRTL: !0
        },
        "de-DE": {
            translations: q,
            isRTL: !1
        },
        "es-ES": {
            translations: Z,
            isRTL: !1
        },
        "fr-FR": {
            translations: X,
            isRTL: !1
        },
        "it-IT": {
            translations: Y,
            isRTL: !1
        },
        "pl-PL": {
            translations: j,
            isRTL: !1
        },
        "pt-PT": {
            translations: ee,
            isRTL: !1
        },
        "ru-RU": {
            translations: te,
            isRTL: !1
        }
    };

function E(m, p, l, e) {
    let a = {
            CompanyName: m.CompanyName,
            CompanyRegistrationNumber: m.CompanyRegistrationNumber,
            CompanyWebsite: m.CompanyWebsite
        },
        t = yup.object().shape({
            CompanyName: yup.string().required("Company name is required.").noConsecutiveSpaces("Company name must not contain consecutive spaces.").matches(/^[A-Za-z0-9\s\.\,\-\&]+$/, "Company name can only include letters, numbers, spaces, commas, periods, hyphens, and ampersands (&).").max(100, "Company name must be at most 100 characters long."),
            CompanyRegistrationNumber: yup.string().required("Company registration number is required.").matches(/^[A-Za-z0-9]+$/, "Company registration number can only include letters and numbers.").max(30, "Company registration number must be at most 30 characters long."),
            CompanyWebsite: yup.string().required("Company website is required.").url("Company website must be a valid URL starting with http or https. Example: https://example.com").matches(/^https?:\/\/.+/, "Company website must start with http or https. Example: https://example.com").max(100, "Company website must be at most 100 characters long.")
        }),
        {
            errors: c,
            validFields: u
        } = validate(t, a);
    m.ValidationErrors = JSON.stringify(c), m.ValidFields = JSON.stringify(u)
}
n(E, "default");
var r = P; {
    let p = class p extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, G);
            var c = this.controller;
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
                var a = this.model,
                    t = this.controller,
                    c = this.idService;
                return r.Logger.startActiveSpan("NextOnClick", function(u) {
                    u && (u.setAttribute("code.function", "NextOnClick"), u.setAttribute("outsystems.function.key", "2f3a9cc0-f69b-4a4a-b8bf-ab6268989b6b"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("NextOnClick"), e = t.callContext(e);
                        var C = new r.DataTypes.VariableHolder,
                            b = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(T))),
                            g = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(H)));
                        if (C.value = r.Logger.startActiveSpan("Validate", function(s) {
                                s && (s.setAttribute("code.function", "Validate"), s.setAttribute("outsystems.function.key", "85578e06-ed91-4862-b4cd-102680eab55f"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(E, "Validate", "NextOnClick", {
                                        CompanyRegistrationNumber: r.DataConversion.JSNodeParamConverter.to(d.getRealSignupCompanyRegistrationNumber(), r.DataTypes.DataTypes.Text),
                                        CompanyWebsite: r.DataConversion.JSNodeParamConverter.to(d.getRealSignupCompanyWebsite(), r.DataTypes.DataTypes.Text),
                                        CompanyName: r.DataConversion.JSNodeParamConverter.to(d.getRealSignupCompanyName(), r.DataTypes.DataTypes.Text),
                                        ValidationErrors: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        ValidFields: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(o) {
                                        var O = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.NextOnClick$validateJSResult"));
                                        return O.validationErrorsOut = r.DataConversion.JSNodeParamConverter.from(o.ValidationErrors, r.DataTypes.DataTypes.Text), O.validFieldsOut = r.DataConversion.JSNodeParamConverter.from(o.ValidFields, r.DataTypes.DataTypes.Text), O
                                    }, {}, {})
                                } finally {
                                    s && s.end()
                                }
                            }, 1), b.value.dataOut = r.JSONUtils.deserializeFromJSON(C.value.validationErrorsOut, T, !1), g.value.dataOut = r.JSONUtils.deserializeFromJSON(C.value.validFieldsOut, H, !1), a.widgets.get(c.getId("CompanyNameInput")).validAttr = g.value.dataOut.companyNameAttr, a.widgets.get(c.getId("CompanyNameInput")).validationMessageAttr = b.value.dataOut.companyNameAttr, a.widgets.get(c.getId("CompanyRegistrationNumberInput")).validAttr = g.value.dataOut.companyRegistrationNumberAttr, a.widgets.get(c.getId("CompanyRegistrationNumberInput")).validationMessageAttr = b.value.dataOut.companyRegistrationNumberAttr, a.widgets.get(c.getId("CompanyWebsiteInput")).validAttr = g.value.dataOut.companyWebsiteAttr, a.widgets.get(c.getId("CompanyWebsiteInput")).validationMessageAttr = b.value.dataOut.companyWebsiteAttr, a.widgets.get(c.getId("CompanyDetailsForm")).validAttr) return w.realSignupNextStep$Action(1, e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "TermsOfUseScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        nextOnClick$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "2f3a9cc0-f69b-4a4a-b8bf-ab6268989b6b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._nextOnClick$Action, e)
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
            return w.defaultTimeout
        }
    };
    n(p, "ControllerInner");
    let m = p;
    D = m, D.registerVariableGroupType("PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.NextOnClick$validateJSResult", [{
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
var D, Q = new r.Controller.ControllerFactory(D, V);
var N = P,
    Pe = f.PlaceholderContent,
    he = f.IteratorPlaceholderContent,
    y = class y extends h.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.CompanyAccountDetailsBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "CompanyAccountDetailsBlock",
                functionKey: "15ef1809-b52e-4cbc-8968-7a4934be06b9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.CompanyAccountDetailsBlock.css"]
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
            return Q
        }
        get title() {
            return ""
        }
        internalRender() {
            let p = this.model,
                l = this.controller,
                e = this.idService,
                a = l.validationService,
                t = this.widgetsRecordProvider,
                c = l.callContext(),
                u = y.ifWidget,
                C = y.textWidget,
                b = y.asPrimitiveValue,
                g = y.getTranslation,
                s = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(_, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, i.createElement(J, {
                _validationProps: {
                    validationService: a
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex flex-direction-column gap-m",
                _idProps: {
                    service: e,
                    name: "CompanyDetailsForm"
                },
                _widgetRecordProvider: t
            }, i.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, i.createElement(S, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, "Company name"), i.createElement(R, {
                _validationProps: {
                    validationService: a,
                    validationParentId: e.getId("CompanyDetailsForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 100,
                prompt: "Enter your company name",
                style: "form-control",
                variable: p.createVariable(N.DataTypes.DataTypes.Text, d.getRealSignupCompanyName(), function(o) {
                    d.setRealSignupCompanyName(o)
                }),
                _idProps: {
                    service: e,
                    name: "CompanyNameInput"
                },
                _widgetRecordProvider: t
            })), i.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, i.createElement(S, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, "Company registration number"), i.createElement(R, {
                _validationProps: {
                    validationService: a,
                    validationParentId: e.getId("CompanyDetailsForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 0,
                prompt: "Enter your company registration number",
                style: "form-control",
                variable: p.createVariable(N.DataTypes.DataTypes.Text, d.getRealSignupCompanyRegistrationNumber(), function(o) {
                    d.setRealSignupCompanyRegistrationNumber(o)
                }),
                _idProps: {
                    service: e,
                    name: "CompanyRegistrationNumberInput"
                },
                _widgetRecordProvider: t
            })), i.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, i.createElement(S, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, "Company website"), i.createElement(R, {
                _validationProps: {
                    validationService: a,
                    validationParentId: e.getId("CompanyDetailsForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 100,
                prompt: "Enter your company website address",
                style: "form-control",
                variable: p.createVariable(N.DataTypes.DataTypes.Text, d.getRealSignupCompanyWebsite(), function(o) {
                    d.setRealSignupCompanyWebsite(o)
                }),
                _idProps: {
                    service: e,
                    name: "CompanyWebsiteInput"
                },
                _widgetRecordProvider: t
            })), i.createElement(_, {
                align: 0,
                animate: !1,
                style: "real-signup-next-button-company-screen",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, i.createElement(L, {
                enabled: !0,
                isDefault: !1,
                onClick: n(function() {
                    s.validateWidget(e.getId("CompanyDetailsForm"));
                    var o = c.clone();
                    l.nextOnClick$Action(l.callContext(o))
                }, "onClick"),
                style: "real-signup-company-next-button",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, i.createElement(M, {
                extendedProperties: {
                    style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                },
                text: [C(g("3Q7iG50tnUKa2rhDgeMHgA#Value", "Next"))],
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
n(y, "View");
var k = y,
    I = k;
var ae = f.PlaceholderContent,
    ke = f.IteratorPlaceholderContent,
    v = class v extends h.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.CompanyAccountScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "CompanyAccountScreen",
                functionKey: "8df002d1-e465-4db5-927f-877a1509b097",
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
            return [x, I]
        }
        get modelFactory() {
            return $
        }
        get controllerFactory() {
            return K
        }
        get title() {
            return h.BaseWebScreen.getTranslation("0QLwjWXktU2Sf4d6FQmwlw#Title", "CompanyAccountScreen")
        }
        internalRender() {
            let p = this.model,
                l = this.controller,
                e = this.idService,
                a = l.validationService,
                t = this.widgetsRecordProvider,
                c = l.callContext(),
                u = v.ifWidget,
                C = v.textWidget,
                b = v.asPrimitiveValue,
                g = v.getTranslation,
                s = this;
            return A.createElement("div", this.getRootNodeProperties(), A.createElement(x, {
                getOwnerSpan: n(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: n(function(o) {
                        l.handleError(o)
                    }, "_handleError"),
                    onClickBack2$Action: n(function() {
                        var o = c.clone();
                        l.realAccountCreationLayoutScreenBasedonClickBack2$Action(l.callContext(o))
                    }, "onClickBack2$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new ae(function() {
                        return [A.createElement(I, {
                            getOwnerSpan: n(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: n(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: n(function(o) {
                                    l.handleError(o)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
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
n(v, "View");
var W = v,
    Ie = W;
export {
    Ie as
    default
};