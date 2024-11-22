import {
    a as re,
    b as ne
} from "./_oschunk-R7I5FINE.js";
import {
    a as oe
} from "./_oschunk-ZA4YM7JN.js";
import "./_oschunk-FCTT25EN.js";
import {
    a as B
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as ee,
    h as A,
    j as F,
    p as te,
    s as k,
    t as J
} from "./_oschunk-HUOHOHZB.js";
import {
    a as Z
} from "./_oschunk-Y45M2O2K.js";
import {
    a as X,
    g as R,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as u,
    d as Q
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    ga as w,
    hf as E,
    if as x
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as K
} from "./_oschunk-DVBKI63I.js";
var I = K(X());
var b = K(X());
var ue = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Sauvegarder"
    },
    ie = {
        "fr-FR": {
            translations: ue,
            isRTL: !1
        }
    };

function M(m, l, v, e) {
    let n = JSON.parse(m.Response).residence_list.find(d => d.value == m.Citizenship),
        r = Object.values(n.identity.services.idv.documents_supported);
    m.SupportedDocuments = JSON.stringify(r)
}
s(M, "default");

function H(m, l, v, e) {
    return new Promise(function(n, r) {
        var z, j, U, G, q;

        function d(...D) {
            let [O, ...V] = D;
            return V.reduce((P, ce) => P.concat(ce), O)
        }
        s(d, "mergeSchema");

        function i(D) {
            let O = /\(\?i\)/i,
                V = O.test(D),
                Y = D.replace(O, ""),
                P = V ? "i" : "";
            return new RegExp(Y, P)
        }
        s(i, "transformedRegex");
        let a = JSON.parse((z = m.SupportedDocuments) != null ? z : JSON.stringify([])).find(D => D.display_name === m.SelectedDocument),
            y = !!a.additional,
            c = yup.object().shape({
                DocumentNumber: yup.string().required(a.display_name + " is requried.").matches(i(a.format), a.display_name + " format is incorrect.")
            }),
            f = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(((j = a == null ? void 0 : a.additional) == null ? void 0 : j.display_name) + " is requried.").matches(i((G = (U = a == null ? void 0 : a.additional) == null ? void 0 : U.format) != null ? G : ""), ((q = a == null ? void 0 : a.additional) == null ? void 0 : q.display_name) + " format is incorrect.")
            }),
            o = {
                DocumentNumber: m.DocumentNumber
            };
        y && (o.AdditionalDocumentNumber = m.AdditionalDocumentNumber);
        let {
            errors: N,
            validFields: C
        } = validate(y ? d(c, f) : c, o);
        m.ValidationErrors = JSON.stringify(N), m.ValidFields = JSON.stringify(C), n()
    })
}
s(H, "default");
var t = h; {
    let l = class l extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, ie);
            var d = this.controller;
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
                var n = this.model,
                    r = this.controller,
                    d = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(i) {
                    i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "5a9c92e4-bb13-44a7-b4aa-8c15d9673503"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var a = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(E)));
                        a.value = t.Logger.startActiveSpan("GetIDVCountry", function(c) {
                            c && (c.setAttribute("code.function", "GetIDVCountry"), c.setAttribute("outsystems.function.key", "5c4958ab-37bc-4a0b-b82a-80d51184e86e"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(M, "GetIDVCountry", "OnReady", {
                                    Response: t.DataConversion.JSNodeParamConverter.to(u.getRawResidenceListResponse(), t.DataTypes.DataTypes.Text),
                                    Citizenship: t.DataConversion.JSNodeParamConverter.to(u.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                    SupportedDocuments: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(f) {
                                    var o = new(r.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult"));
                                    return o.supportedDocumentsOut = t.DataConversion.JSNodeParamConverter.from(f.SupportedDocuments, t.DataTypes.DataTypes.Text), o
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(a.value.supportedDocumentsOut, E, !1), n.variables.supportedDocumentsVar = y.value.dataOut
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    d = this.idService;
                return t.Logger.startActiveSpan("NextOnClick", function(i) {
                    return i && (i.setAttribute("code.function", "NextOnClick"), i.setAttribute("outsystems.function.key", "d068ecee-b849-449b-bc84-82631333ca56"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("NextOnClick"), e = r.callContext(e);
                        var a = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            c = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(x))),
                            f = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        return t.Flow.executeAsyncFlow(function() {
                            return y.value.jSONOut = t.JSONUtils.serializeToJSON(n.variables.supportedDocumentsVar, !1, !1), t.Logger.startActiveSpan("ValidateIDV", function(o) {
                                o && (o.setAttribute("code.function", "ValidateIDV"), o.setAttribute("outsystems.function.key", "590199e1-efbb-45ba-a729-bc90bc11fba2"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteAsyncJSNode(H, "ValidateIDV", "NextOnClick", {
                                        AdditionalDocumentNumber: t.DataConversion.JSNodeParamConverter.to(u.getRealSignupIDVAdditionalDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        SupportedDocuments: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                                        SelectedDocument: t.DataConversion.JSNodeParamConverter.to(u.getRealSignupIDVDocumentName(), t.DataTypes.DataTypes.Text),
                                        DocumentNumber: t.DataConversion.JSNodeParamConverter.to(u.getRealSignupIDVDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        ValidationErrors: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        ValidFields: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(N) {
                                        var C = new(r.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult"));
                                        return C.validationErrorsOut = t.DataConversion.JSNodeParamConverter.from(N.ValidationErrors, t.DataTypes.DataTypes.Text), C.validFieldsOut = t.DataConversion.JSNodeParamConverter.from(N.ValidFields, t.DataTypes.DataTypes.Text), C
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1).then(function(o) {
                                a.value = o
                            }).then(function() {
                                c.value.dataOut = t.JSONUtils.deserializeFromJSON(a.value.validationErrorsOut, x, !1), f.value.dataOut = t.JSONUtils.deserializeFromJSON(a.value.validFieldsOut, w, !1), n.widgets.get(d.getId("Input_DocumentName")).validAttr = f.value.dataOut.documentNumberAttr, n.widgets.get(d.getId("Input_DocumentName")).validationMessageAttr = c.value.dataOut.documentNumberAttr, n.widgets.get(d.getId("Input_DocumentName2")).validAttr = f.value.dataOut.additionalDocumentNumberAttr, n.widgets.get(d.getId("Input_DocumentName2")).validationMessageAttr = c.value.dataOut.additionalDocumentNumberAttr
                            }).then(function() {
                                if (n.widgets.get(d.getId("DocumentNumberForm")).validAttr) return u.setRealSignupPassedStepCount(3), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "employment-details", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "5a9c92e4-bb13-44a7-b4aa-8c15d9673503"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        nextOnClick$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("NextOnClick__proxy", function(r) {
                return r && (r.setAttribute("code.function", "NextOnClick"), r.setAttribute("outsystems.function.key", "d068ecee-b849-449b-bc84-82631333ca56"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._nextOnClick$Action, e)
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
                    d = this.idService;
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
            return Q.defaultTimeout
        }
    };
    s(l, "ControllerInner");
    let m = l;
    T = m, T.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, ae = new t.Controller.ControllerFactory(T, Z);
var _ = h,
    we = S.PlaceholderContent,
    Ee = S.IteratorPlaceholderContent,
    p = class p extends R.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "IDVDocumentNumberFormMobileBlock",
                functionKey: "d9288545-14d9-43d4-a071-7f0209866410",
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
            return re
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                d = v.callContext(),
                i = p.ifWidget,
                a = p.textWidget,
                y = p.asPrimitiveValue,
                c = p.getTranslation,
                f = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(te, {
                _validationProps: {
                    validationService: n
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "form",
                _idProps: {
                    service: e,
                    name: "DocumentNumberForm"
                },
                _widgetRecordProvider: r
            }, b.createElement(A, {
                align: 0,
                animate: !1,
                style: l.getCachedValue(e.getId("6O1CWY7b2U2I0Tcm5vNODw.Style"), function() {
                    return l.widgets.get(e.getId("Input_DocumentName")).validAttr ? _.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-base"
                }, function() {
                    return l.widgets.get(e.getId("Input_DocumentName")).validAttr
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, b.createElement(J, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_DocumentName",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, b.createElement(F, {
                value: u.getRealSignupIDVDocumentName() + " number",
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            })), b.createElement(k, {
                _validationProps: {
                    validationService: n,
                    validationParentId: e.getId("DocumentNumberForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 50,
                prompt: l.getCachedValue(e.getId("Input_DocumentName.Prompt"), function() {
                    return "Enter your " + _.BuiltinFunctions.toLower(u.getRealSignupIDVDocumentName()) + " number"
                }, function() {
                    return u.getRealSignupIDVDocumentName()
                }),
                style: "form-control",
                variable: l.createVariable(_.DataTypes.DataTypes.Text, u.getRealSignupIDVDocumentNumber(), function(o) {
                    u.setRealSignupIDVDocumentNumber(o)
                }),
                _idProps: {
                    service: e,
                    name: "Input_DocumentName"
                },
                _widgetRecordProvider: r
            })), i(u.getRealSignupIDVAdditionalDocumentNumberLabel() !== _.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [b.createElement(A, {
                    align: 0,
                    animate: !1,
                    style: l.getCachedValue(e.getId("Mwa7Ny+J0ES97l1YvyxViA.Style"), function() {
                        return l.widgets.get(e.getId("Input_DocumentName2")).validAttr ? _.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-base"
                    }, function() {
                        return l.widgets.get(e.getId("Input_DocumentName2")).validAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: r
                }, b.createElement(J, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mandatory: !0,
                    targetWidget: "Input_DocumentName2",
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: r
                }, b.createElement(F, {
                    value: u.getRealSignupIDVAdditionalDocumentNumberLabel() + " number",
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: r
                })), b.createElement(k, {
                    _validationProps: {
                        validationService: n,
                        validationParentId: e.getId("DocumentNumberForm")
                    },
                    enabled: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: 0,
                    mandatory: !0,
                    maxLength: 50,
                    prompt: "Enter your " + u.getRealSignupIDVAdditionalDocumentNumberLabel() + " number",
                    style: "form-control",
                    variable: l.createVariable(_.DataTypes.DataTypes.Text, u.getRealSignupIDVAdditionalDocumentNumber(), function(o) {
                        u.setRealSignupIDVAdditionalDocumentNumber(o)
                    }),
                    _idProps: {
                        service: e,
                        name: "Input_DocumentName2"
                    },
                    _widgetRecordProvider: r
                }))]
            }, function() {
                return []
            }), b.createElement(A, {
                align: 0,
                animate: !1,
                style: "form-btn-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: r
            }, b.createElement(ee, {
                enabled: !0,
                isDefault: !0,
                onClick: s(function() {
                    return f.validateWidget(e.getId("DocumentNumberForm")), Promise.resolve().then(function() {
                        var o = d.clone();
                        return v.nextOnClick$Action(v.callContext(o))
                    })
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: r
            }, a(c("lCkD_4uwjUmRwL4MuY2OiQ#Value", "Save"))))))
        }
    };
s(p, "View");
var W = p,
    L = W;
var se = h,
    de = S.PlaceholderContent,
    je = S.IteratorPlaceholderContent,
    g = class g extends R.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreationMobile.IDVMobileDocumentDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "IDVMobileDocumentDetails",
                functionKey: "563b9b31-5c91-4b53-a361-c0c26f699a50",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreationMobile.IDVMobileDocumentDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [B, L]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            let l = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = v.callContext(),
                d = g.asPrimitiveValue,
                i = g.getTranslation,
                a = this;
            return se.Injector.resolve(se.ServiceNames.TranslationsService).getMessage("MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1", "Identity verification | Deriv")
        }
        internalRender() {
            let l = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                d = v.callContext(),
                i = g.ifWidget,
                a = g.textWidget,
                y = g.asPrimitiveValue,
                c = g.getTranslation,
                f = this;
            return I.createElement("div", this.getRootNodeProperties(), I.createElement(B, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Identity verification"
                },
                events: {
                    _handleError: s(function(o) {
                        v.handleError(o)
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
                _widgetRecordProvider: r,
                placeholders: {
                    content: new de(function() {
                        return [I.createElement(L, {
                            getOwnerSpan: s(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(o) {
                                    v.handleError(o)
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
s(g, "View");
var $ = g,
    Ue = $;
export {
    Ue as
    default
};