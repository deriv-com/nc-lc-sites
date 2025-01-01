import {
    a as Q
} from "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import {
    a as de,
    b as me
} from "./_oschunk-XNZ46QWV.js";
import {
    a as pe
} from "./_oschunk-X6KJTAMG.js";
import {
    a as z
} from "./_oschunk-DD6SH73A.js";
import "./_oschunk-F2QOJGMT.js";
import "./_oschunk-HQNDBRSO.js";
import "./_oschunk-IYRDNBIZ.js";
import {
    a as M
} from "./_oschunk-XSYDT34B.js";
import "./_oschunk-K6KZ63LW.js";
import "./_oschunk-O4ORPF6H.js";
import "./_oschunk-6BFNTJQ7.js";
import {
    a as j
} from "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    d as S,
    e as oe,
    f as I,
    g as ae,
    h as se,
    l as ce,
    n as ue,
    o as W,
    p as k,
    u as le
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-Y7V2YK47.js";
import "./_oschunk-KWCHY67Z.js";
import {
    a as ne
} from "./_oschunk-4GXKK3IG.js";
import {
    a as ie,
    g as N,
    i as R
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-PDLV67M2.js";
import "./_oschunk-3LDAHYP5.js";
import "./_oschunk-ZO3X5EQS.js";
import "./_oschunk-QPRDDNSX.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as p,
    q as V
} from "./_oschunk-BDI2RWOA.js";
import {
    a as $
} from "./_oschunk-P3RPGEI5.js";
import {
    Gd as B,
    Uf as F,
    he as J
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as O
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as re
} from "./_oschunk-QHO7QY6K.js";
var x = re(ie());
var u = re(ie());
var be = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "\u0646\u0648\u0639 \u0627\u0644\u0648\u062B\u064A\u0642\u0629",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "\u062A\u062E\u0637\u064A"
    },
    _e = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Dokumenttyp",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "\xDCberspringen"
    },
    Se = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo de documento",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Saltar"
    },
    De = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Type de document",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Passer"
    },
    Ce = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo di documento",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Salta"
    },
    Ae = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Typ dokumentu",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Pomi\u0144"
    },
    Pe = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "Tipo de documento",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "Saltar"
    },
    he = {
        "vY7c60w2M0i4Bs1j8s6ywA#Value": "\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        "IbeY70bFwk+wGhMdJ5KQ5Q#Value": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C"
    },
    fe = {
        "ar-001": {
            translations: be,
            isRTL: !0
        },
        "de-DE": {
            translations: _e,
            isRTL: !1
        },
        "es-ES": {
            translations: Se,
            isRTL: !1
        },
        "fr-FR": {
            translations: De,
            isRTL: !1
        },
        "it-IT": {
            translations: Ce,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ae,
            isRTL: !1
        },
        "pt-PT": {
            translations: Pe,
            isRTL: !1
        },
        "ru-RU": {
            translations: he,
            isRTL: !1
        }
    };

function G(g, c, f, e) {
    return new Promise(function(n, t) {
        var v, E, T, X, ee;

        function a(...b) {
            let [h, ...H] = b;
            return H.reduce((L, ge) => L.concat(ge), h)
        }
        s(a, "mergeSchema");

        function o(b) {
            let h = /\(\?i\)/i,
                H = h.test(b),
                te = b.replace(h, ""),
                L = H ? "i" : "";
            return new RegExp(te, L)
        }
        s(o, "transformedRegex");
        let l, d, m;
        if (g.SelectedDocument) {
            let b = JSON.parse((v = g.SupportedDocuments) != null ? v : JSON.stringify([])).find(h => h.display_name === g.SelectedDocument);
            l = yup.object().shape({
                DocumentType: yup.string().required("Document type is required."),
                DocumentNumber: yup.string().required(b.display_name + " number is requried.").matches(o(b.format), b.display_name + " format is incorrect.")
            }), d = !!(b != null && b.additional), m = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(((E = b == null ? void 0 : b.additional) == null ? void 0 : E.display_name) + " number is requried.").matches(o((X = (T = b == null ? void 0 : b.additional) == null ? void 0 : T.format) != null ? X : ""), ((ee = b == null ? void 0 : b.additional) == null ? void 0 : ee.display_name) + " format is incorrect.")
            })
        } else l = yup.object().shape({
            DocumentType: yup.string().required("Document type is required."),
            DocumentNumber: yup.string().required("Document number is required.")
        });
        let y = {
            DocumentType: g.SelectedDocument,
            DocumentNumber: g.DocumentNumber
        };
        d && (y.AdditionalDocumentNumber = g.AdditionalDocumentNumber);
        let {
            errors: i,
            validFields: _
        } = validate(d ? a(l, m) : l, y);
        g.ValidationErrors = JSON.stringify(i), g.ValidFields = JSON.stringify(_), n()
    })
}
s(G, "default");

function Y(g, c, f, e) {
    return new Promise(function(n, t) {
        var o, l, d;
        let a = JSON.parse((o = g.DocumentsList) != null ? o : JSON.stringify([])).find(m => m.display_name === g.SelectedDocument);
        g.AdditionalDocumentLabel = (d = (l = a == null ? void 0 : a.additional) == null ? void 0 : l.display_name) != null ? d : "", n()
    })
}
s(Y, "default");

function U(g, c, f, e) {
    let n = JSON.parse(g.ResidenceList).residence_list.find(a => a.value === g.Citizenship),
        t = Object.values(n.identity.services.idv.documents_supported);
    g.supportedDocuments = JSON.stringify(t)
}
s(U, "default");
var r = O; {
    let c = class c extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, fe);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _primaryButtononClick$Action() {
            return this.hasOwnProperty("__primaryButtononClick$Action") || (this.__primaryButtononClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("PrimaryButtononClick", function(o) {
                    return o && (o.setAttribute("code.function", "PrimaryButtononClick"), o.setAttribute("outsystems.function.key", "15d67213-ec78-40ab-8afe-f02d21e73ff7"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("PrimaryButtononClick"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            m = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(B))),
                            y = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(J)));
                        return r.Flow.executeAsyncFlow(function() {
                            return d.value.jSONOut = r.JSONUtils.serializeToJSON(n.variables.supportedDocumentsVar, !1, !1), r.Logger.startActiveSpan("ValidateTheIDV", function(i) {
                                i && (i.setAttribute("code.function", "ValidateTheIDV"), i.setAttribute("outsystems.function.key", "2e81cf45-9538-43a1-a7f9-b6a6e46517be"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(G, "ValidateTheIDV", "PrimaryButtononClick", {
                                        DocumentNumber: r.DataConversion.JSNodeParamConverter.to(p.getRealSignupIDVDocumentNumber(), r.DataTypes.DataTypes.Text),
                                        SelectedDocument: r.DataConversion.JSNodeParamConverter.to(p.getRealSignupIDVDocumentName(), r.DataTypes.DataTypes.Text),
                                        SupportedDocuments: r.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentNumber: r.DataConversion.JSNodeParamConverter.to(p.getRealSignupIDVAdditionalDocumentNumber(), r.DataTypes.DataTypes.Text),
                                        ValidationErrors: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        ValidFields: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(_) {
                                        var v = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.PrimaryButtononClick$validateTheIDVJSResult"));
                                        return v.validationErrorsOut = r.DataConversion.JSNodeParamConverter.from(_.ValidationErrors, r.DataTypes.DataTypes.Text), v.validFieldsOut = r.DataConversion.JSNodeParamConverter.from(_.ValidFields, r.DataTypes.DataTypes.Text), v
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1).then(function(i) {
                                l.value = i
                            }).then(function() {
                                y.value.dataOut = r.JSONUtils.deserializeFromJSON(l.value.validationErrorsOut, J, !1), m.value.dataOut = r.JSONUtils.deserializeFromJSON(l.value.validFieldsOut, B, !1), n.widgets.get(a.getId("Input_DocumentNumber")).validAttr = m.value.dataOut.documentNumberAttr, n.widgets.get(a.getId("Input_DocumentNumber")).validationMessageAttr = y.value.dataOut.documentNumberAttr, n.widgets.get(a.getId("Input_DocumentNumber2")).validAttr = m.value.dataOut.additionalDocumentNumberAttr, n.widgets.get(a.getId("Input_DocumentNumber2")).validationMessageAttr = y.value.dataOut.additionalDocumentNumberAttr, n.widgets.get(a.getId("Dropdown1")).validAttr = m.value.dataOut.documentTypeAttr, n.widgets.get(a.getId("Dropdown1")).validationMessageAttr = y.value.dataOut.documentTypeAttr
                            }).then(function() {
                                n.widgets.get(a.getId("IDVDesktop")).validAttr && t._onClickNext$Action(e)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__primaryButtononClick$Action
        }
        set _primaryButtononClick$Action(e) {
            this.__primaryButtononClick$Action = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnClickNext", function(o) {
                    o && (o.setAttribute("code.function", "OnClickNext"), o.setAttribute("outsystems.function.key", "7a301e2e-a7bb-4bb6-b22f-150fb795c5ca"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClickNext"), e = t.callContext(e), V.realSignupNextStep$Action(1, e), V.getHeaderTitle$Action(e), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _dropdown1OnChange$Action() {
            return this.hasOwnProperty("__dropdown1OnChange$Action") || (this.__dropdown1OnChange$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("Dropdown1OnChange", function(o) {
                    return o && (o.setAttribute("code.function", "Dropdown1OnChange"), o.setAttribute("outsystems.function.key", "80db5dca-b907-4ba8-a632-35c461f8fc05"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("Dropdown1OnChange"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return d.value.jSONOut = r.JSONUtils.serializeToJSON(n.variables.supportedDocumentsVar, !1, !1), r.Logger.startActiveSpan("JavaScript1", function(m) {
                                m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "fdc720f9-bd9a-4fd3-a1a5-6bfec404112c"), m.setAttribute("outsystems.function.owner.name", "PartnersHub"), m.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(Y, "JavaScript1", "Dropdown1OnChange", {
                                        SelectedDocument: r.DataConversion.JSNodeParamConverter.to(p.getRealSignupIDVDocumentName(), r.DataTypes.DataTypes.Text),
                                        DocumentsList: r.DataConversion.JSNodeParamConverter.to(d.value.jSONOut, r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentLabel: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(y) {
                                        var i = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.Dropdown1OnChange$javaScript1JSResult"));
                                        return i.additionalDocumentLabelOut = r.DataConversion.JSNodeParamConverter.from(y.AdditionalDocumentLabel, r.DataTypes.DataTypes.Text), i
                                    }, {}, {})
                                } finally {
                                    m && m.end()
                                }
                            }, 1).then(function(m) {
                                l.value = m
                            }).then(function() {
                                n.variables.additionalDocumentLabelVar = l.value.additionalDocumentLabelOut, p.setRealSignupIDVDocumentNumber(r.BuiltinFunctions.nullTextIdentifier()), p.setRealSignupIDVAdditionalDocumentNumber(r.BuiltinFunctions.nullTextIdentifier())
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__dropdown1OnChange$Action
        }
        set _dropdown1OnChange$Action(e) {
            this.__dropdown1OnChange$Action = e
        }
        get _onClickDocumentType$Action() {
            return this.hasOwnProperty("__onClickDocumentType$Action") || (this.__onClickDocumentType$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnClickDocumentType", function(l) {
                    l && (l.setAttribute("code.function", "OnClickDocumentType"), l.setAttribute("outsystems.function.key", "c4cb3541-59c3-4b22-874c-60061f28ee42"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnClickDocumentType"), n = a.callContext(n);
                        var d = new r.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnClickDocumentType$vars")));
                        return d.value.documentTypeInLocal = e, p.setRealSignupIDVDocumentName(d.value.documentTypeInLocal), r.Navigation.navigateTo(r.Navigation.generateScreenURL("PartnersHub", "IdentityVerificationDetailsScreen", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onClickDocumentType$Action
        }
        set _onClickDocumentType$Action(e) {
            this.__onClickDocumentType$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "d71fc0a9-a571-4d19-a15b-f56385581d5e"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var l = new r.DataTypes.VariableHolder,
                            d = new r.DataTypes.VariableHolder,
                            m = new r.DataTypes.VariableHolder,
                            y = new r.DataTypes.VariableHolder,
                            i = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            _ = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(F)));
                        return r.Flow.executeAsyncFlow(function() {
                            return l.value = V.getToken$Action(e), n.flush(), $.getSettings$Action(p.getServer(), l.value.tokenOut, "1", "en", e).then(function(v) {
                                d.value = v
                            }).then(function() {
                                return n.flush(), $.residenceList$Action(p.getServer(), "1", "en", e).then(function(v) {
                                    m.value = v
                                })
                            }).then(function() {
                                n.variables.residenceListResponseVar = m.value.responseOut, n.variables.getSettingsResponseVar = d.value.responseOut, i.value.jSONOut = r.JSONUtils.serializeToJSON(m.value.responseOut, !1, !1), y.value = r.Logger.startActiveSpan("JavaScript1", function(v) {
                                    v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "8402b06a-b31f-405a-b52e-17f8655f7c6f"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(U, "JavaScript1", "OnReady", {
                                            ResidenceList: r.DataConversion.JSNodeParamConverter.to(i.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            Citizenship: r.DataConversion.JSNodeParamConverter.to(d.value.responseOut.get_settingsAttr.citizenAttr, r.DataTypes.DataTypes.Text),
                                            supportedDocuments: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                        }, function(E) {
                                            var T = new(t.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnReady$javaScript1JSResult"));
                                            return T.supportedDocumentsOut = r.DataConversion.JSNodeParamConverter.from(E.supportedDocuments, r.DataTypes.DataTypes.Text), T
                                        }, {}, {})
                                    } finally {
                                        v && v.end()
                                    }
                                }, 1), _.value.dataOut = r.JSONUtils.deserializeFromJSON(y.value.supportedDocumentsOut, F, !1), n.variables.supportedDocumentsVar = _.value.dataOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        primaryButtononClick$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("PrimaryButtononClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "PrimaryButtononClick"), t.setAttribute("outsystems.function.key", "15d67213-ec78-40ab-8afe-f02d21e73ff7"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._primaryButtononClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickNext$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnClickNext__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickNext"), t.setAttribute("outsystems.function.key", "7a301e2e-a7bb-4bb6-b22f-150fb795c5ca"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickNext$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        dropdown1OnChange$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("Dropdown1OnChange__proxy", function(t) {
                return t && (t.setAttribute("code.function", "Dropdown1OnChange"), t.setAttribute("outsystems.function.key", "80db5dca-b907-4ba8-a632-35c461f8fc05"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._dropdown1OnChange$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onClickDocumentType$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnClickDocumentType__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnClickDocumentType"), a.setAttribute("outsystems.function.key", "c4cb3541-59c3-4b22-874c-60061f28ee42"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onClickDocumentType$Action, n, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d71fc0a9-a571-4d19-a15b-f56385581d5e"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    a = this.idService;
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
            return V.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let g = c;
    w = g, w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.PrimaryButtononClick$validateTheIDVJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.Dropdown1OnChange$javaScript1JSResult", [{
        name: "AdditionalDocumentLabel",
        attrName: "additionalDocumentLabelOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnClickDocumentType$vars", [{
        name: "DocumentType",
        attrName: "documentTypeInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationListBlock.OnReady$javaScript1JSResult", [{
        name: "supportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var w, ye = new r.Controller.ControllerFactory(w, ne);
var D = O,
    C = R.PlaceholderContent,
    ve = R.IteratorPlaceholderContent,
    A = class A extends N.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.IdentityVerificationListBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "IdentityVerificationListBlock",
                functionKey: "7e40fbd8-675c-4f5a-94ab-2d32b45030ce",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.IdentityVerificationListBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [z, j, Q]
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return ye
        }
        get title() {
            return ""
        }
        internalRender() {
            let c = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                a = f.callContext(),
                o = A.ifWidget,
                l = A.textWidget,
                d = A.asPrimitiveValue,
                m = A.getTranslation,
                y = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(z, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(i) {
                        f.handleError(i)
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
                    desktopContent: new C(function() {
                        return [u.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: s(function() {
                                    var i = a.clone();
                                    f.onClickNext$Action(f.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "display: flex; justify-content: flex-end; margin-top: 20px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(le, {
                            extendedProperties: {
                                style: "font-style: normal; font-weight: bold; text-decoration: underline;"
                            },
                            text: [l(m("IbeY70bFwk+wGhMdJ5KQ5Q#Value", "Skip"))],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(ce, {
                            _validationProps: {
                                validationService: n
                            },
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 16px; margin-top: 20px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: '"form card"',
                            _idProps: {
                                service: e,
                                name: "IDVDesktop"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(k, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, l(m("vY7c60w2M0i4Bs1j8s6ywA#Value", "Document type"))), u.createElement(oe, {
                            _validationProps: {
                                validationService: n,
                                validationParentId: e.getId("IDVDesktop")
                            },
                            dropdownMode: 1,
                            emptyValue: "-- Select your document type --",
                            enabled: !0,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            list: c.variables.supportedDocumentsVar,
                            mandatory: !0,
                            onChange: s(function() {
                                return Promise.resolve().then(function() {
                                    var i = a.clone();
                                    return f.dropdown1OnChange$Action(f.callContext(i))
                                })
                            }, "onChange"),
                            style: "dropdown",
                            values: s(function(i) {
                                return i.display_nameAttr
                            }, "values"),
                            variable: c.createVariable(D.DataTypes.DataTypes.Text, p.getRealSignupIDVDocumentName(), function(i) {
                                p.setRealSignupIDVDocumentName(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Dropdown1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new ve(function(i, _) {
                                    return [u.createElement(I, {
                                        value: c.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, a, e, "1")
                            },
                            _dependencies: []
                        })), u.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: c.getCachedValue(e.getId("a3uZloQjQU65m51LIRnYsg.Style"), function() {
                                return c.widgets.get(e.getId("Input_DocumentNumber")).validAttr ? D.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                            }, function() {
                                return c.widgets.get(e.getId("Input_DocumentNumber")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(k, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_DocumentNumber",
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(I, {
                            value: c.getCachedValue(e.getId("QhwUhre5LE2M1HhTMjWvxw.Value"), function() {
                                return D.BuiltinFunctions.length(p.getRealSignupIDVDocumentName()) > 0 ? p.getRealSignupIDVDocumentName() + " number" : "Document number"
                            }, function() {
                                return p.getRealSignupIDVDocumentName()
                            }),
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(W, {
                            _validationProps: {
                                validationService: n,
                                validationParentId: e.getId("IDVDesktop")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: c.getCachedValue(e.getId("Input_DocumentNumber.Prompt"), function() {
                                return D.BuiltinFunctions.length(p.getRealSignupIDVDocumentName()) > 0 ? "Enter your " + p.getRealSignupIDVDocumentName() + " number" : "Enter your document number"
                            }, function() {
                                return p.getRealSignupIDVDocumentName()
                            }),
                            style: "form-control",
                            variable: c.createVariable(D.DataTypes.DataTypes.Text, p.getRealSignupIDVDocumentNumber(), function(i) {
                                p.setRealSignupIDVDocumentNumber(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_DocumentNumber"
                            },
                            _widgetRecordProvider: t
                        })), o(D.BuiltinFunctions.length(c.variables.additionalDocumentLabelVar) > 0, !1, this, function() {
                            return [u.createElement(S, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: c.getCachedValue(e.getId("lspp8ZiGXU+BymU0YLvF_Q.Style"), function() {
                                    return c.widgets.get(e.getId("Input_DocumentNumber2")).validAttr ? D.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                                }, function() {
                                    return c.widgets.get(e.getId("Input_DocumentNumber2")).validAttr
                                }),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(k, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "Input_DocumentNumber2",
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(I, {
                                value: c.variables.additionalDocumentLabelVar + " number",
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            })), u.createElement(W, {
                                _validationProps: {
                                    validationService: n,
                                    validationParentId: e.getId("IDVDesktop")
                                },
                                enabled: !0,
                                extendedProperties: {
                                    style: "margin-top: 10px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !0,
                                maxLength: 0,
                                prompt: "Enter your " + c.variables.additionalDocumentLabelVar + " number",
                                style: "form-control",
                                variable: c.createVariable(D.DataTypes.DataTypes.Text, p.getRealSignupIDVAdditionalDocumentNumber(), function(i) {
                                    p.setRealSignupIDVAdditionalDocumentNumber(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Input_DocumentNumber2"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return []
                        })), u.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(j, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Width: "100px",
                                enabled: !0,
                                title: "Next",
                                borderRadius: "100px"
                            },
                            events: {
                                _handleError: s(function(i) {
                                    f.handleError(i)
                                }, "_handleError"),
                                onClick$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var i = a.clone();
                                        return f.primaryButtononClick$Action(f.callContext(i))
                                    })
                                }, "onClick$Action")
                            },
                            _validationProps: {
                                validationService: n
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))]
                    }),
                    tabletContent: C.Empty,
                    mobileContent: new C(function() {
                        return [u.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }, o(c.variables.supportedDocumentsVar.length > 0, !1, this, function() {
                            return [u.createElement(ae, {
                                animateItems: !0,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: c.variables.supportedDocumentsVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new ve(function(i, _) {
                                        return [u.createElement(se, {
                                            onClick: s(function() {
                                                var v = _.clone();
                                                f.onClickDocumentType$Action(c.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr, f.callContext(v))
                                            }, "onClick"),
                                            style: "listitem1",
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: i,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                leftActions: C.Empty,
                                                content: new C(function() {
                                                    return [u.createElement(S, {
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
                                                            service: i,
                                                            uuid: "23"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, u.createElement(S, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100% justify-content: space-between"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, u.createElement(S, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "padding: 6px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "25"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, u.createElement(I, {
                                                        extendedProperties: {
                                                            style: "font-weight: 700;"
                                                        },
                                                        value: c.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "26"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }))), u.createElement(S, {
                                                        align: 0,
                                                        animate: !1,
                                                        visible: !0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "27"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, u.createElement(ue, {
                                                        image: D.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: i,
                                                            uuid: "28"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })))]
                                                }),
                                                rightActions: C.Empty
                                            },
                                            _dependencies: [d(c.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr)]
                                        })]
                                    }, a, e, "2")
                                },
                                _dependencies: []
                            })]
                        }, function() {
                            return [u.createElement(S, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 10px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(Q, {
                                getOwnerSpan: s(function() {
                                    return y.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return y.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    IsLoading: !0
                                },
                                events: {
                                    _handleError: s(function(i) {
                                        f.handleError(i)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: n
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "30",
                                    alias: "3"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: C.Empty
                                },
                                _dependencies: []
                            }))]
                        })))]
                    })
                },
                _dependencies: [d(p.getRealSignupIDVAdditionalDocumentNumber()), d(c.widgets.get(e.getId("Input_DocumentNumber2")).validAttr), d(c.variables.additionalDocumentLabelVar), d(p.getRealSignupIDVDocumentNumber()), d(c.widgets.get(e.getId("Input_DocumentNumber")).validAttr), d(c.variables.supportedDocumentsVar), d(p.getRealSignupIDVDocumentName())]
            }))
        }
    };
s(A, "View");
var K = A,
    q = K;
var we = R.PlaceholderContent,
    vt = R.IteratorPlaceholderContent,
    P = class P extends N.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.IDVScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "IDVScreen",
                functionKey: "668bc60b-eda4-471a-afb4-48d110c4741a",
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
            return [M, q]
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return pe
        }
        get title() {
            return N.BaseWebScreen.getTranslation("C8aLZqTtGkevtEjREMR0Gg#Title", "IDVScreen")
        }
        internalRender() {
            let c = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                a = f.callContext(),
                o = P.ifWidget,
                l = P.textWidget,
                d = P.asPrimitiveValue,
                m = P.getTranslation,
                y = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(M, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(i) {
                        f.handleError(i)
                    }, "_handleError"),
                    onClickSkip$Action: s(function() {
                        var i = a.clone();
                        f.realAccountCreationLayoutScreenBasedOnClickSkip$Action(f.callContext(i))
                    }, "onClickSkip$Action"),
                    onClickBack2$Action: s(function() {
                        var i = a.clone();
                        f.realAccountCreationLayoutScreenBasedonClickBack2$Action(f.callContext(i))
                    }, "onClickBack2$Action")
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
                    content: new we(function() {
                        return [x.createElement(q, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(i) {
                                    f.handleError(i)
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
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
s(P, "View");
var Z = P,
    gt = Z;
export {
    gt as
    default
};