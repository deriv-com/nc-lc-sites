import {
    a as F
} from "./_oschunk-ILTRYJXV.js";
import {
    a as P
} from "./_oschunk-Y45M2O2K.js";
import {
    a as m,
    d as N
} from "./_oschunk-27GDEXUT.js";
import {
    ga as O,
    hf as S,
    if as g
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as L
} from "./_oschunk-NTQBNJ73.js";
import {
    c as y
} from "./_oschunk-DVBKI63I.js";
var z = {
        "Pj10iobUZ02yNHL_mn2r4Q#Value": "Suivant",
        "IsCVlHAg60yzbIoHFFOqgg#Value": "Type de document",
        "V+t_iesdbkGcAVN32D4V0w#Value": "Passer",
        "8PranFMcskO1Vm95fI64Gg#Title": "V\xE9rification d'identit\xE9 | Deriv",
        "8PranFMcskO1Vm95fI64Gg#TitleExpression.1272643895.1": "V\xE9rification d'identit\xE9 | Deriv"
    },
    $ = {
        "fr-FR": {
            translations: z,
            isRTL: !1
        }
    };

function R(a, p, _, n) {
    var o, r, u;
    let i = JSON.parse(a.Response).residence_list.find(s => s.value == a.Residence),
        t = Object.values(i.identity.services.idv.documents_supported);
    a.SupportedDocuments = JSON.stringify(t), a.AdditionalDocumentLabel = (u = (r = (o = t.find(s => s.display_name === a.SelectedDocument)) == null ? void 0 : o.additional) == null ? void 0 : r.display_name) != null ? u : ""
}
y(R, "default");

function I(a, p, _, n) {
    var o, r, u;
    let i = JSON.parse(a.Response).residence_list.find(s => s.value == a.Residence),
        t = Object.values(i.identity.services.idv.documents_supported);
    a.SupportedDocuments = JSON.stringify(t), a.AdditionalDocumentLabel = (u = (r = (o = t.find(s => s.display_name === a.SelectedDocument)) == null ? void 0 : o.additional) == null ? void 0 : r.display_name) != null ? u : ""
}
y(I, "default");

function V(a, p, _, n) {
    return new Promise(function(i, t) {
        var r, u, s;
        let o = JSON.parse((r = a.DocumentsList) != null ? r : JSON.stringify([])).find(d => d.display_name === a.SelectedDocument);
        a.AdditionalDocumentLabel = (s = (u = o == null ? void 0 : o.additional) == null ? void 0 : u.display_name) != null ? s : "", i()
    })
}
y(V, "default");

function w(a, p, _, n) {
    return new Promise(function(i, t) {
        var D, v, E, J, x;

        function o(...l) {
            let [A, ...h] = l;
            return h.reduce((C, H) => C.concat(H), A)
        }
        y(o, "mergeSchema");

        function r(l) {
            let A = /\(\?i\)/i,
                h = A.test(l),
                k = l.replace(A, ""),
                C = h ? "i" : "";
            return new RegExp(k, C)
        }
        y(r, "transformedRegex");
        let u, s, d;
        if (a.SelectedDocument) {
            let l = JSON.parse((D = a.SupportedDocuments) != null ? D : JSON.stringify([])).find(A => A.display_name === a.SelectedDocument);
            u = yup.object().shape({
                DocumentType: yup.string().required("Document type is required."),
                DocumentNumber: yup.string().required(l.display_name + " number is requried.").matches(r(l.format), l.display_name + " format is incorrect.")
            }), s = !!(l != null && l.additional), d = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(((v = l == null ? void 0 : l.additional) == null ? void 0 : v.display_name) + " number is requried.").matches(r((J = (E = l == null ? void 0 : l.additional) == null ? void 0 : E.format) != null ? J : ""), ((x = l == null ? void 0 : l.additional) == null ? void 0 : x.display_name) + " format is incorrect.")
            })
        } else u = yup.object().shape({
            DocumentType: yup.string().required("Document type is required."),
            DocumentNumber: yup.string().required("Document number is required.")
        });
        let b = {
            DocumentType: a.SelectedDocument,
            DocumentNumber: a.DocumentNumber
        };
        s && (b.AdditionalDocumentNumber = a.AdditionalDocumentNumber);
        let {
            errors: f,
            validFields: c
        } = validate(s ? o(u, d) : u, b);
        a.ValidationErrors = JSON.stringify(f), a.ValidFields = JSON.stringify(c), i()
    })
}
y(w, "default");
var e = L; {
    let p = class p extends e.Controller.BaseViewController {
        constructor(n, i, t) {
            super(n, i, t, $);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "185e439b-b1d2-4685-a325-06c7d3ebfd23"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), n = t.callContext(n);
                        var u = new e.DataTypes.VariableHolder,
                            s = new e.DataTypes.VariableHolder,
                            d = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(S))),
                            f = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(S)));
                        return e.Flow.executeAsyncFlow(function() {
                            return e.Flow.executeSequence(function() {
                                if (m.getRawResidenceListResponse() !== e.BuiltinFunctions.nullTextIdentifier()) d.value = e.Logger.startActiveSpan("GetIDVCountry", function(c) {
                                    c && (c.setAttribute("code.function", "GetIDVCountry"), c.setAttribute("outsystems.function.key", "74c1a47e-f0f5-4e93-aeda-0189185064c0"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(I, "GetIDVCountry", "OnReady", {
                                            SelectedDocument: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVDocumentName(), e.DataTypes.DataTypes.Text),
                                            Response: e.DataConversion.JSNodeParamConverter.to(m.getRawResidenceListResponse(), e.DataTypes.DataTypes.Text),
                                            Residence: e.DataConversion.JSNodeParamConverter.to(m.getSelectedResidence(), e.DataTypes.DataTypes.Text),
                                            SupportedDocuments: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                            AdditionalDocumentLabel: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                        }, function(D) {
                                            var v = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountryJSResult"));
                                            return v.supportedDocumentsOut = e.DataConversion.JSNodeParamConverter.from(D.SupportedDocuments, e.DataTypes.DataTypes.Text), v.additionalDocumentLabelOut = e.DataConversion.JSNodeParamConverter.from(D.AdditionalDocumentLabel, e.DataTypes.DataTypes.Text), v
                                        }, {}, {})
                                    } finally {
                                        c && c.end()
                                    }
                                }, 1), b.value.dataOut = e.JSONUtils.deserializeFromJSON(d.value.supportedDocumentsOut, S, !1), i.variables.supportedDocumentsVar = b.value.dataOut, i.variables.additionalDocumentLabelVar = d.value.additionalDocumentLabelOut;
                                else return i.flush(), N.derivApiSendMessage$Action("", "residence_list", !1, n).then(function(c) {
                                    u.value = c
                                }).then(function() {
                                    m.setRawResidenceListResponse(u.value.responseOut), s.value = e.Logger.startActiveSpan("GetIDVCountry2", function(c) {
                                        c && (c.setAttribute("code.function", "GetIDVCountry2"), c.setAttribute("outsystems.function.key", "138518ed-9175-409b-b9d7-262301695d60"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(R, "GetIDVCountry2", "OnReady", {
                                                Residence: e.DataConversion.JSNodeParamConverter.to(m.getSelectedResidence(), e.DataTypes.DataTypes.Text),
                                                Response: e.DataConversion.JSNodeParamConverter.to(u.value.responseOut, e.DataTypes.DataTypes.Text),
                                                SelectedDocument: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVDocumentName(), e.DataTypes.DataTypes.Text),
                                                SupportedDocuments: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                                AdditionalDocumentLabel: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                            }, function(D) {
                                                var v = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountry2JSResult"));
                                                return v.supportedDocumentsOut = e.DataConversion.JSNodeParamConverter.from(D.SupportedDocuments, e.DataTypes.DataTypes.Text), v.additionalDocumentLabelOut = e.DataConversion.JSNodeParamConverter.from(D.AdditionalDocumentLabel, e.DataTypes.DataTypes.Text), v
                                            }, {}, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), f.value.dataOut = e.JSONUtils.deserializeFromJSON(s.value.supportedDocumentsOut, S, !1), i.variables.supportedDocumentsVar = f.value.dataOut, i.variables.additionalDocumentLabelVar = s.value.additionalDocumentLabelOut
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(n) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "4f73d4f9-d569-4fc0-9c5b-220f61efada1"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), n = t.callContext(n), m.setRealSignupCurrentStep(3)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(n) {
            this.__onInitialize$Action = n
        }
        get _skipOnClick$Action() {
            return this.hasOwnProperty("__skipOnClick$Action") || (this.__skipOnClick$Action = function(n) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("SkipOnClick", function(r) {
                    r && (r.setAttribute("code.function", "SkipOnClick"), r.setAttribute("outsystems.function.key", "c20ad14c-1d8d-4bea-a286-9ca4ed03eed8"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("SkipOnClick"), n = t.callContext(n), m.setRealSignupSkippedIDV(!0), e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "employment-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__skipOnClick$Action
        }
        set _skipOnClick$Action(n) {
            this.__skipOnClick$Action = n
        }
        get _input_DocumentTypeOnChange$Action() {
            return this.hasOwnProperty("__input_DocumentTypeOnChange$Action") || (this.__input_DocumentTypeOnChange$Action = function(n) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("Input_DocumentTypeOnChange", function(r) {
                    return r && (r.setAttribute("code.function", "Input_DocumentTypeOnChange"), r.setAttribute("outsystems.function.key", "de19446b-6b5a-44ed-b667-aede24fcc569"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("Input_DocumentTypeOnChange"), n = t.callContext(n);
                        var u = new e.DataTypes.VariableHolder,
                            s = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType);
                        return e.Flow.executeAsyncFlow(function() {
                            return s.value.jSONOut = e.JSONUtils.serializeToJSON(i.variables.supportedDocumentsVar, !1, !1), e.Logger.startActiveSpan("JavaScript1", function(d) {
                                d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "7cdac7be-6744-4622-a2dc-94b0aee3ca4c"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(V, "JavaScript1", "Input_DocumentTypeOnChange", {
                                        SelectedDocument: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVDocumentName(), e.DataTypes.DataTypes.Text),
                                        DocumentsList: e.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, e.DataTypes.DataTypes.Text),
                                        AdditionalDocumentLabel: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(b) {
                                        var f = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.Input_DocumentTypeOnChange$javaScript1JSResult"));
                                        return f.additionalDocumentLabelOut = e.DataConversion.JSNodeParamConverter.from(b.AdditionalDocumentLabel, e.DataTypes.DataTypes.Text), f
                                    }, {}, {})
                                } finally {
                                    d && d.end()
                                }
                            }, 1).then(function(d) {
                                u.value = d
                            }).then(function() {
                                i.variables.additionalDocumentLabelVar = u.value.additionalDocumentLabelOut, m.setRealSignupIDVDocumentNumber(e.BuiltinFunctions.nullTextIdentifier()), m.setRealSignupIDVAdditionalDocumentNumber(e.BuiltinFunctions.nullTextIdentifier())
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__input_DocumentTypeOnChange$Action
        }
        set _input_DocumentTypeOnChange$Action(n) {
            this.__input_DocumentTypeOnChange$Action = n
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(n) {
                var i = this.model,
                    t = this.controller,
                    o = this.idService;
                return e.Logger.startActiveSpan("NextOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "e493d082-514b-480e-9f14-952b1a1dcfa4"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                        t.ensureControllerAlive("NextOnClick"), n = t.callContext(n);
                        var u = new e.DataTypes.VariableHolder,
                            s = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            d = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(O))),
                            b = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(g)));
                        return e.Flow.executeAsyncFlow(function() {
                            return s.value.jSONOut = e.JSONUtils.serializeToJSON(i.variables.supportedDocumentsVar, !1, !1), e.Logger.startActiveSpan("ValidateIDV", function(f) {
                                f && (f.setAttribute("code.function", "ValidateIDV"), f.setAttribute("outsystems.function.key", "1f392b2d-d376-4b77-91fc-e8aaabdb72f9"), f.setAttribute("outsystems.function.owner.name", "tradershub"), f.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), f.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteAsyncJSNode(w, "ValidateIDV", "NextOnClick", {
                                        SelectedDocument: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVDocumentName(), e.DataTypes.DataTypes.Text),
                                        SupportedDocuments: e.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, e.DataTypes.DataTypes.Text),
                                        DocumentNumber: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVDocumentNumber(), e.DataTypes.DataTypes.Text),
                                        AdditionalDocumentNumber: e.DataConversion.JSNodeParamConverter.to(m.getRealSignupIDVAdditionalDocumentNumber(), e.DataTypes.DataTypes.Text),
                                        ValidationErrors: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text),
                                        ValidFields: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                    }, function(c) {
                                        var D = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.NextOnClick$validateIDVJSResult"));
                                        return D.validationErrorsOut = e.DataConversion.JSNodeParamConverter.from(c.ValidationErrors, e.DataTypes.DataTypes.Text), D.validFieldsOut = e.DataConversion.JSNodeParamConverter.from(c.ValidFields, e.DataTypes.DataTypes.Text), D
                                    }, {}, {})
                                } finally {
                                    f && f.end()
                                }
                            }, 1).then(function(f) {
                                u.value = f
                            }).then(function() {
                                b.value.dataOut = e.JSONUtils.deserializeFromJSON(u.value.validationErrorsOut, g, !1), d.value.dataOut = e.JSONUtils.deserializeFromJSON(u.value.validFieldsOut, O, !1), i.widgets.get(o.getId("Input_DocumentNumber")).validAttr = d.value.dataOut.documentNumberAttr, i.widgets.get(o.getId("Input_DocumentNumber")).validationMessageAttr = b.value.dataOut.documentNumberAttr, i.widgets.get(o.getId("Input_DocumentNumber2")).validAttr = d.value.dataOut.additionalDocumentNumberAttr, i.widgets.get(o.getId("Input_DocumentNumber2")).validationMessageAttr = b.value.dataOut.additionalDocumentNumberAttr, i.widgets.get(o.getId("Input_DocumentType")).validAttr = d.value.dataOut.documentTypeAttr, i.widgets.get(o.getId("Input_DocumentType")).validationMessageAttr = b.value.dataOut.documentTypeAttr
                            }).then(function() {
                                if (i.widgets.get(o.getId("Form")).validAttr) return m.setRealSignupSkippedIDV(!1), m.setRealSignupPassedStepCount(3), e.Flow.returnAsync(e.Navigation.navigateTo(e.Navigation.generateScreenURL("tradershub", "employment-details", {}), e.Transitions.createTransition(e.Transitions.TransitionAnimation.Default), n, !0))
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(n) {
            this.__nextOnClick$Action = n
        }
        onReady$Action(n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "185e439b-b1d2-4685-a325-06c7d3ebfd23"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "4f73d4f9-d569-4fc0-9c5b-220f61efada1"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        skipOnClick$Action(n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("SkipOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SkipOnClick"), t.setAttribute("outsystems.function.key", "c20ad14c-1d8d-4bea-a286-9ca4ed03eed8"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._skipOnClick$Action, n)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        input_DocumentTypeOnChange$Action(n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("Input_DocumentTypeOnChange__proxy", function(t) {
                return t && (t.setAttribute("code.function", "Input_DocumentTypeOnChange"), t.setAttribute("outsystems.function.key", "de19446b-6b5a-44ed-b667-aede24fcc569"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._input_DocumentTypeOnChange$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        nextOnClick$Action(n) {
            var i = this.controller;
            return e.Logger.startActiveSpan("NextOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "NextOnClick"), t.setAttribute("outsystems.function.key", "e493d082-514b-480e-9f14-952b1a1dcfa4"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), e.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, n)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(n) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onInitialize$Action(n)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var i = this.controller,
                    t = this.model,
                    o = this.idService;
                return i.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(n) {
            this._onDestroyEventHandler = n
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(n) {
            this._onParametersChangedEventHandler = n
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(n) {
                return F.default.handleError(n, this.callContext())
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return N.defaultTimeout
        }
    };
    y(p, "ControllerInner");
    let a = p;
    T = a, T.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountry2JSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AdditionalDocumentLabel",
        attrName: "additionalDocumentLabelOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.OnReady$getIDVCountryJSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AdditionalDocumentLabel",
        attrName: "additionalDocumentLabelOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.Input_DocumentTypeOnChange$javaScript1JSResult", [{
        name: "AdditionalDocumentLabel",
        attrName: "additionalDocumentLabelOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreation.IdentityVerification.NextOnClick$validateIDVJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: y(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, de = new e.Controller.ControllerFactory(T, P);
export {
    de as a
};