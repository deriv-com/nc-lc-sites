import {
    a as ie
} from "./_oschunk-IMTRGHLD.js";
import {
    a as M
} from "./_oschunk-3XHELSFS.js";
import "./_oschunk-5DW66ZV2.js";
import "./_oschunk-MQYFLHOB.js";
import "./_oschunk-MUB32TUL.js";
import {
    a as $
} from "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as O,
    f as W,
    l as te,
    o as B,
    p as L
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-J6YOU2SX.js";
import "./_oschunk-D7X2Q6KG.js";
import {
    a as re,
    b as ne
} from "./_oschunk-HHEFO7QX.js";
import {
    a as Y
} from "./_oschunk-6WALBPGV.js";
import {
    a as ee,
    g as N,
    i as h
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-BFQJHNK7.js";
import "./_oschunk-RO5KMNGS.js";
import "./_oschunk-UVWOQOAC.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import {
    a as d,
    p as T
} from "./_oschunk-FZ6FUHBV.js";
import {
    a as J
} from "./_oschunk-S5DOOZ7G.js";
import {
    Fd as x,
    Pf as F,
    ge as k
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as A
} from "./_oschunk-5KJVGEL7.js";
import {
    c as a,
    h as X
} from "./_oschunk-QHO7QY6K.js";
var E = X(ee());
var f = X(ee());
var ae = {};

function z(m, l, p, e) {
    return new Promise(function(n, r) {
        var u, V, R, K, Z;

        function v(...s) {
            let [P, ...I] = s;
            return I.reduce((H, se) => H.concat(se), P)
        }
        a(v, "mergeSchema");

        function o(s) {
            let P = /\(\?i\)/i,
                I = P.test(s),
                Q = s.replace(P, ""),
                H = I ? "i" : "";
            return new RegExp(Q, H)
        }
        a(o, "transformedRegex");
        let b, y, g;
        if (m.SelectedDocument) {
            let s = JSON.parse((u = m.SupportedDocuments) != null ? u : JSON.stringify([])).find(P => P.display_name === m.SelectedDocument);
            b = yup.object().shape({
                DocumentType: yup.string().required("Document type is required."),
                DocumentNumber: yup.string().required(s.display_name + " number is requried.").matches(o(s.format), s.display_name + " format is incorrect.")
            }), y = !!(s != null && s.additional), g = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(((V = s == null ? void 0 : s.additional) == null ? void 0 : V.display_name) + " number is requried.").matches(o((K = (R = s == null ? void 0 : s.additional) == null ? void 0 : R.format) != null ? K : ""), ((Z = s == null ? void 0 : s.additional) == null ? void 0 : Z.display_name) + " format is incorrect.")
            })
        } else b = yup.object().shape({
            DocumentType: yup.string().required("Document type is required."),
            DocumentNumber: yup.string().required("Document number is required.")
        });
        let c = {
            DocumentType: m.SelectedDocument,
            DocumentNumber: m.DocumentNumber
        };
        y && (c.AdditionalDocumentNumber = m.AdditionalDocumentNumber);
        let {
            errors: i,
            validFields: S
        } = validate(y ? v(b, g) : b, c);
        m.ValidationErrors = JSON.stringify(i), m.ValidFields = JSON.stringify(S), n()
    })
}
a(z, "default");

function j(m, l, p, e) {
    let n = JSON.parse(m.ResidenceList).residence_list.find(v => v.value === m.Citizenship),
        r = Object.values(n.identity.services.idv.documents_supported);
    m.supportedDocuments = JSON.stringify(r)
}
a(j, "default");
var t = A; {
    let l = class l extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, ae);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _mobileOnClick$Action() {
            return this.hasOwnProperty("__mobileOnClick$Action") || (this.__mobileOnClick$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    v = this.idService;
                return t.Logger.startActiveSpan("MobileOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "MobileOnClick"), o.setAttribute("outsystems.function.key", "5aa11fbd-03ec-4962-a667-2994442996e6"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("MobileOnClick"), e = r.callContext(e);
                        var b = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            g = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(k))),
                            c = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(x)));
                        return t.Flow.executeAsyncFlow(function() {
                            return y.value.jSONOut = t.JSONUtils.serializeToJSON(n.variables.supportedDocumentsVar, !1, !1), t.Logger.startActiveSpan("ValidateTheIDV", function(i) {
                                i && (i.setAttribute("code.function", "ValidateTheIDV"), i.setAttribute("outsystems.function.key", "ac9c0ec8-79c2-4e6e-a8bf-7c3f2ddd90a0"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteAsyncJSNode(z, "ValidateTheIDV", "MobileOnClick", {
                                        SupportedDocuments: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                                        SelectedDocument: t.DataConversion.JSNodeParamConverter.to(d.getRealSignupIDVDocumentName(), t.DataTypes.DataTypes.Text),
                                        AdditionalDocumentNumber: t.DataConversion.JSNodeParamConverter.to(d.getRealSignupIDVAdditionalDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        DocumentNumber: t.DataConversion.JSNodeParamConverter.to(d.getRealSignupIDVDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        ValidationErrors: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        ValidFields: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(S) {
                                        var u = new(r.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.MobileOnClick$validateTheIDVJSResult"));
                                        return u.validationErrorsOut = t.DataConversion.JSNodeParamConverter.from(S.ValidationErrors, t.DataTypes.DataTypes.Text), u.validFieldsOut = t.DataConversion.JSNodeParamConverter.from(S.ValidFields, t.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1).then(function(i) {
                                b.value = i
                            }).then(function() {
                                g.value.dataOut = t.JSONUtils.deserializeFromJSON(b.value.validationErrorsOut, k, !1), c.value.dataOut = t.JSONUtils.deserializeFromJSON(b.value.validFieldsOut, x, !1), n.widgets.get(v.getId("Input_DocumentNumber3")).validAttr = c.value.dataOut.documentNumberAttr, n.widgets.get(v.getId("Input_DocumentNumber3")).validationMessageAttr = g.value.dataOut.documentNumberAttr, n.widgets.get(v.getId("Input_DocumentNumber4")).validAttr = c.value.dataOut.additionalDocumentNumberAttr, n.widgets.get(v.getId("Input_DocumentNumber4")).validationMessageAttr = g.value.dataOut.additionalDocumentNumberAttr
                            }).then(function() {
                                if (n.widgets.get(v.getId("MobileNumberForm")).validAttr) return T.realSignupNextStep$Action(1, e), T.getHeaderTitle$Action(e), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("PartnersHub", "EmploymentDetailsScreen", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__mobileOnClick$Action
        }
        set _mobileOnClick$Action(e) {
            this.__mobileOnClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    v = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "609c2955-655e-41f8-84a1-826e05476f73"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var b = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder,
                            g = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder,
                            i = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            S = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(F)));
                        return t.Flow.executeAsyncFlow(function() {
                            return b.value = T.getToken$Action(e), n.flush(), J.getSettings$Action(d.getServer(), b.value.tokenOut, "1", "en", e).then(function(u) {
                                y.value = u
                            }).then(function() {
                                return n.flush(), J.residenceList$Action(d.getServer(), "1", "en", e).then(function(u) {
                                    g.value = u
                                })
                            }).then(function() {
                                n.variables.residenceListResponseVar = g.value.responseOut, n.variables.getSettingsResponseVar = y.value.responseOut, i.value.jSONOut = t.JSONUtils.serializeToJSON(g.value.responseOut, !1, !1), c.value = t.Logger.startActiveSpan("JavaScript1", function(u) {
                                    u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "0e472a2e-cab1-4a97-be20-b37032577e82"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return r.safeExecuteJSNode(j, "JavaScript1", "OnReady", {
                                            ResidenceList: t.DataConversion.JSNodeParamConverter.to(i.value.jSONOut, t.DataTypes.DataTypes.Text),
                                            Citizenship: t.DataConversion.JSNodeParamConverter.to(y.value.responseOut.get_settingsAttr.citizenAttr, t.DataTypes.DataTypes.Text),
                                            supportedDocuments: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                        }, function(V) {
                                            var R = new(r.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.OnReady$javaScript1JSResult"));
                                            return R.supportedDocumentsOut = t.DataConversion.JSNodeParamConverter.from(V.supportedDocuments, t.DataTypes.DataTypes.Text), R
                                        }, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), S.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.supportedDocumentsOut, F, !1), n.variables.supportedDocumentsVar = S.value.dataOut
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
        mobileOnClick$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("MobileOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "MobileOnClick"), r.setAttribute("outsystems.function.key", "5aa11fbd-03ec-4962-a667-2994442996e6"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._mobileOnClick$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "609c2955-655e-41f8-84a1-826e05476f73"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    r && r.end()
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
                    r = this.model,
                    v = this.idService;
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
            return T.defaultTimeout
        }
    };
    a(l, "ControllerInner");
    let m = l;
    w = m, w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.MobileOnClick$validateTheIDVJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("PartnersHub.RealAccountCreation.IdentityVerificationDetailsBlock.OnReady$javaScript1JSResult", [{
        name: "supportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var w, oe = new t.Controller.ControllerFactory(w, Y);
var C = A,
    ke = h.PlaceholderContent,
    Fe = h.IteratorPlaceholderContent,
    D = class D extends N.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.IdentityVerificationDetailsBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "IdentityVerificationDetailsBlock",
                functionKey: "da6eff2a-c26e-4928-81ea-d9b56157826d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [$]
        }
        get modelFactory() {
            return re
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                p = this.controller,
                e = this.idService,
                n = p.validationService,
                r = this.widgetsRecordProvider,
                v = p.callContext(),
                o = D.ifWidget,
                b = D.textWidget,
                y = D.asPrimitiveValue,
                g = D.getTranslation,
                c = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(te, {
                _validationProps: {
                    validationService: n
                },
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: '"form card"',
                _idProps: {
                    service: e,
                    name: "MobileNumberForm"
                },
                _widgetRecordProvider: r
            }, f.createElement(O, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, f.createElement(O, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, f.createElement(O, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            }, f.createElement(L, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_DocumentNumber3",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r
            }, f.createElement(W, {
                value: l.getCachedValue(e.getId("uH_jmFfiP0esmbvjrxUK+w.Value"), function() {
                    return C.BuiltinFunctions.length(d.getRealSignupIDVDocumentName()) > 0 ? d.getRealSignupIDVDocumentName() + " number" : "Document number"
                }, function() {
                    return d.getRealSignupIDVDocumentName()
                }),
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: r
            })), f.createElement(B, {
                _validationProps: {
                    validationService: n,
                    validationParentId: e.getId("MobileNumberForm")
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
                prompt: l.getCachedValue(e.getId("Input_DocumentNumber3.Prompt"), function() {
                    return C.BuiltinFunctions.length(d.getRealSignupIDVDocumentName()) > 0 ? "Enter your " + d.getRealSignupIDVDocumentName() + " number" : "Enter your document number"
                }, function() {
                    return d.getRealSignupIDVDocumentName()
                }),
                style: "form-control",
                variable: l.createVariable(C.DataTypes.DataTypes.Text, d.getRealSignupIDVDocumentNumber(), function(i) {
                    d.setRealSignupIDVDocumentNumber(i)
                }),
                _idProps: {
                    service: e,
                    name: "Input_DocumentNumber3"
                },
                _widgetRecordProvider: r
            })), f.createElement(O, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: l.getCachedValue(e.getId("J1R3Su8ZdUqEZeDWvxEiCA.Style"), function() {
                    return l.widgets.get(e.getId("Input_DocumentNumber4")).validAttr ? C.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                }, function() {
                    return l.widgets.get(e.getId("Input_DocumentNumber4")).validAttr
                }),
                visible: l.getCachedValue(e.getId("J1R3Su8ZdUqEZeDWvxEiCA.Visible"), function() {
                    return C.BuiltinFunctions.length(l.variables.additionalDocumentLabelVar) > 0
                }, function() {
                    return l.variables.additionalDocumentLabelVar
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }, f.createElement(L, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_DocumentNumber4",
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: r
            }, f.createElement(W, {
                value: l.variables.additionalDocumentLabelVar + " number",
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: r
            })), f.createElement(B, {
                _validationProps: {
                    validationService: n,
                    validationParentId: e.getId("MobileNumberForm")
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
                prompt: "Enter your " + l.variables.additionalDocumentLabelVar + " number",
                style: "form-control",
                variable: l.createVariable(C.DataTypes.DataTypes.Text, d.getRealSignupIDVAdditionalDocumentNumber(), function(i) {
                    d.setRealSignupIDVAdditionalDocumentNumber(i)
                }),
                _idProps: {
                    service: e,
                    name: "Input_DocumentNumber4"
                },
                _widgetRecordProvider: r
            })), f.createElement(O, {
                align: 0,
                animate: !1,
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: r
            }, f.createElement($, {
                getOwnerSpan: a(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Width: "100%",
                    title: "Next",
                    enabled: !0
                },
                events: {
                    _handleError: a(function(i) {
                        p.handleError(i)
                    }, "_handleError"),
                    onClick$Action: a(function() {
                        return Promise.resolve().then(function() {
                            var i = v.clone();
                            return p.mobileOnClick$Action(p.callContext(i))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n,
                    validationParentId: e.getId("MobileNumberForm")
                },
                _idProps: {
                    service: e,
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }))))))
        }
    };
a(D, "View");
var q = D,
    U = q;
var ue = h.PlaceholderContent,
    Ke = h.IteratorPlaceholderContent,
    _ = class _ extends N.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.IdentityVerificationDetailsScreen"
        }
        static getAttributes() {
            return {
                codeFunction: "IdentityVerificationDetailsScreen",
                functionKey: "14929096-3332-420d-bf80-619b03326ce5",
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
            return [M, U]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return N.BaseWebScreen.getTranslation("lpCSFDIzDUK_gGGbAzJs5Q#Title", "IdentityVerificationDetailsScreen")
        }
        internalRender() {
            let l = this.model,
                p = this.controller,
                e = this.idService,
                n = p.validationService,
                r = this.widgetsRecordProvider,
                v = p.callContext(),
                o = _.ifWidget,
                b = _.textWidget,
                y = _.asPrimitiveValue,
                g = _.getTranslation,
                c = this;
            return E.createElement("div", this.getRootNodeProperties(), E.createElement(M, {
                getOwnerSpan: a(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(i) {
                        p.handleError(i)
                    }, "_handleError"),
                    onClickBack2$Action: a(function() {
                        var i = v.clone();
                        p.realAccountCreationLayoutScreenBasedonClickBack2$Action(p.callContext(i))
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
                _widgetRecordProvider: r,
                placeholders: {
                    content: new ue(function() {
                        return [E.createElement(U, {
                            getOwnerSpan: a(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: a(function(i) {
                                    p.handleError(i)
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
                            _widgetRecordProvider: r,
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: []
            }))
        }
    };
a(_, "View");
var G = _,
    Ze = G;
export {
    Ze as
    default
};