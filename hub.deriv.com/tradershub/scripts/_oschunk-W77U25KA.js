import {
    a as oe
} from "./_oschunk-BZFJSTHT.js";
import "./_oschunk-OOA3SUUU.js";
import {
    a as re,
    b as ne
} from "./_oschunk-GY5OI5QA.js";
import {
    a as B
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as ee,
    h as O,
    j as x,
    p as te,
    s as F,
    t as M
} from "./_oschunk-42NACYKQ.js";
import {
    a as K
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as X,
    g as V,
    i as S
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as l,
    c as q
} from "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Zj as w,
    _j as E,
    lb as P
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as h
} from "./_oschunk-2JKANR6M.js";
import {
    c as s,
    g as Z
} from "./_oschunk-DVBKI63I.js";
var T = Z(X());
var f = Z(X());
var le = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "\u062D\u0641\u0638",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "\u0642\u0645 \u0628\u0625\u062F\u062E\u0627\u0644",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "\u0642\u0645 \u0628\u0625\u062F\u062E\u0627\u0644"
    },
    ce = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Speichern",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Geben Sie ein",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "Geben Sie Ihre ein"
    },
    de = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Guardar",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Introduzca su",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "Introduzca su "
    },
    me = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Sauvegarder",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Entrez"
    },
    ve = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Salva",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Inserisci",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "Inserisci il tuo"
    },
    be = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Zapisz",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Wprowad\u017A",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "Wprowad\u017A"
    },
    fe = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "Guardar",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "Introduza",
        "u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1": "Introduza o seu"
    },
    pe = {
        "lCkD_4uwjUmRwL4MuY2OiQ#Value": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
        "gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435"
    },
    ae = {
        "ar-001": {
            translations: le,
            isRTL: !0
        },
        "de-DE": {
            translations: ce,
            isRTL: !1
        },
        "es-ES": {
            translations: de,
            isRTL: !1
        },
        "fr-FR": {
            translations: me,
            isRTL: !1
        },
        "it-IT": {
            translations: ve,
            isRTL: !1
        },
        "pl-PL": {
            translations: be,
            isRTL: !1
        },
        "pt-PT": {
            translations: fe,
            isRTL: !1
        },
        "ru-RU": {
            translations: pe,
            isRTL: !1
        }
    };

function H(m, c, v, e) {
    let n = JSON.parse(m.Response).residence_list.find(d => d.value == m.Citizenship),
        r = Object.values(n.identity.services.idv.documents_supported);
    m.SupportedDocuments = JSON.stringify(r)
}
s(H, "default");

function L(m, c, v, e) {
    return new Promise(function(n, r) {
        var z, Q, $, G, U;

        function d(..._) {
            let [N, ...I] = _;
            return I.reduce((k, ue) => k.concat(ue), N)
        }
        s(d, "mergeSchema");

        function a(_) {
            let N = /\(\?i\)/i,
                I = N.test(_),
                Y = _.replace(N, ""),
                k = I ? "i" : "";
            return new RegExp(Y, k)
        }
        s(a, "transformedRegex");
        let i = JSON.parse((z = m.SupportedDocuments) != null ? z : JSON.stringify([])).find(_ => _.display_name === m.SelectedDocument),
            p = !!i.additional,
            u = yup.object().shape({
                DocumentNumber: yup.string().required(i.display_name + " is requried.").matches(a(i.format), i.display_name + " format is incorrect.")
            }),
            b = yup.object().shape({
                AdditionalDocumentNumber: yup.string().required(((Q = i == null ? void 0 : i.additional) == null ? void 0 : Q.display_name) + " is requried.").matches(a((G = ($ = i == null ? void 0 : i.additional) == null ? void 0 : $.format) != null ? G : ""), ((U = i == null ? void 0 : i.additional) == null ? void 0 : U.display_name) + " format is incorrect.")
            }),
            o = {
                DocumentNumber: m.DocumentNumber
            };
        p && (o.AdditionalDocumentNumber = m.AdditionalDocumentNumber);
        let {
            errors: C,
            validFields: R
        } = validate(p ? d(u, b) : u, o);
        m.ValidationErrors = JSON.stringify(C), m.ValidFields = JSON.stringify(R), n()
    })
}
s(L, "default");
var t = h; {
    let c = class c extends t.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, ae);
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
                return t.Logger.startActiveSpan("OnReady", function(a) {
                    a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "5a9c92e4-bb13-44a7-b4aa-8c15d9673503"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var i = new t.DataTypes.VariableHolder,
                            p = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(w)));
                        i.value = t.Logger.startActiveSpan("GetIDVCountry", function(u) {
                            u && (u.setAttribute("code.function", "GetIDVCountry"), u.setAttribute("outsystems.function.key", "5c4958ab-37bc-4a0b-b82a-80d51184e86e"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(H, "GetIDVCountry", "OnReady", {
                                    Response: t.DataConversion.JSNodeParamConverter.to(l.getRawResidenceListResponse(), t.DataTypes.DataTypes.Text),
                                    Citizenship: t.DataConversion.JSNodeParamConverter.to(l.getSelectedCitizenship(), t.DataTypes.DataTypes.Text),
                                    SupportedDocuments: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(b) {
                                    var o = new(r.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult"));
                                    return o.supportedDocumentsOut = t.DataConversion.JSNodeParamConverter.from(b.SupportedDocuments, t.DataTypes.DataTypes.Text), o
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), p.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.supportedDocumentsOut, w, !1), n.variables.supportedDocumentsVar = p.value.dataOut
                    } finally {
                        a && a.end()
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
                return t.Logger.startActiveSpan("NextOnClick", function(a) {
                    return a && (a.setAttribute("code.function", "NextOnClick"), a.setAttribute("outsystems.function.key", "d068ecee-b849-449b-bc84-82631333ca56"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), t.Flow.tryFinally(function() {
                        r.ensureControllerAlive("NextOnClick"), e = r.callContext(e);
                        var i = new t.DataTypes.VariableHolder,
                            p = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            u = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(E))),
                            b = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(P)));
                        return t.Flow.executeAsyncFlow(function() {
                            return p.value.jSONOut = t.JSONUtils.serializeToJSON(n.variables.supportedDocumentsVar, !1, !1), t.Logger.startActiveSpan("ValidateIDV", function(o) {
                                o && (o.setAttribute("code.function", "ValidateIDV"), o.setAttribute("outsystems.function.key", "590199e1-efbb-45ba-a729-bc90bc11fba2"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return r.safeExecuteAsyncJSNode(L, "ValidateIDV", "NextOnClick", {
                                        AdditionalDocumentNumber: t.DataConversion.JSNodeParamConverter.to(l.getRealSignupIDVAdditionalDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        SupportedDocuments: t.DataConversion.JSNodeParamConverter.to(p.value.jSONOut, t.DataTypes.DataTypes.Text),
                                        SelectedDocument: t.DataConversion.JSNodeParamConverter.to(l.getRealSignupIDVDocumentName(), t.DataTypes.DataTypes.Text),
                                        DocumentNumber: t.DataConversion.JSNodeParamConverter.to(l.getRealSignupIDVDocumentNumber(), t.DataTypes.DataTypes.Text),
                                        ValidationErrors: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text),
                                        ValidFields: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                    }, function(C) {
                                        var R = new(r.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult"));
                                        return R.validationErrorsOut = t.DataConversion.JSNodeParamConverter.from(C.ValidationErrors, t.DataTypes.DataTypes.Text), R.validFieldsOut = t.DataConversion.JSNodeParamConverter.from(C.ValidFields, t.DataTypes.DataTypes.Text), R
                                    }, {}, {})
                                } finally {
                                    o && o.end()
                                }
                            }, 1).then(function(o) {
                                i.value = o
                            }).then(function() {
                                u.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.validationErrorsOut, E, !1), b.value.dataOut = t.JSONUtils.deserializeFromJSON(i.value.validFieldsOut, P, !1), n.widgets.get(d.getId("Input_DocumentName")).validAttr = b.value.dataOut.documentNumberAttr, n.widgets.get(d.getId("Input_DocumentName")).validationMessageAttr = u.value.dataOut.documentNumberAttr, n.widgets.get(d.getId("Input_DocumentName2")).validAttr = b.value.dataOut.additionalDocumentNumberAttr, n.widgets.get(d.getId("Input_DocumentName2")).validationMessageAttr = u.value.dataOut.additionalDocumentNumberAttr
                            }).then(function() {
                                if (n.widgets.get(d.getId("DocumentNumberForm")).validAttr) return l.setRealSignupPassedStepCount(3), t.Flow.returnAsync(t.Navigation.navigateTo(t.Navigation.generateScreenURL("tradershub", "employment-details", {}), t.Transitions.createTransition(t.Transitions.TransitionAnimation.Default), e, !0))
                            })
                        })
                    }, function() {
                        a && a.end()
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
            return q.defaultTimeout
        }
    };
    s(c, "ControllerInner");
    let m = c;
    A = m, A.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.OnReady$getIDVCountryJSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), A.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentNumberFormMobileBlock.NextOnClick$validateIDVJSResult", [{
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
var A, ie = new t.Controller.ControllerFactory(A, K);
var g = h,
    He = S.PlaceholderContent,
    Le = S.IteratorPlaceholderContent,
    y = class y extends V.BaseWebBlock {
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
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let c = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                d = v.callContext(),
                a = y.ifWidget,
                i = y.textWidget,
                p = y.asPrimitiveValue,
                u = y.getTranslation,
                b = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(te, {
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
            }, f.createElement(O, {
                align: 0,
                animate: !1,
                style: c.getCachedValue(e.getId("6O1CWY7b2U2I0Tcm5vNODw.Style"), function() {
                    return c.widgets.get(e.getId("Input_DocumentName")).validAttr ? g.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-base"
                }, function() {
                    return c.widgets.get(e.getId("Input_DocumentName")).validAttr
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, f.createElement(M, {
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
            }, f.createElement(x, {
                value: l.getRealSignupIDVDocumentName() + " number",
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            })), f.createElement(F, {
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
                prompt: c.getCachedValue(e.getId("Input_DocumentName.Prompt"), function() {
                    return g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("u9H+QoTPZk+7Hfjm130kMg#ValueExpression.269129445.1", "Enter your ") + g.BuiltinFunctions.toLower(l.getRealSignupIDVDocumentName()) + " number"
                }, function() {
                    return l.getRealSignupIDVDocumentName()
                }),
                style: "form-control",
                variable: c.createVariable(g.DataTypes.DataTypes.Text, l.getRealSignupIDVDocumentNumber(), function(o) {
                    l.setRealSignupIDVDocumentNumber(o)
                }),
                _idProps: {
                    service: e,
                    name: "Input_DocumentName"
                },
                _widgetRecordProvider: r
            })), a(l.getRealSignupIDVAdditionalDocumentNumberLabel() !== g.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [f.createElement(O, {
                    align: 0,
                    animate: !1,
                    style: c.getCachedValue(e.getId("Mwa7Ny+J0ES97l1YvyxViA.Style"), function() {
                        return c.widgets.get(e.getId("Input_DocumentName2")).validAttr ? g.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-base"
                    }, function() {
                        return c.widgets.get(e.getId("Input_DocumentName2")).validAttr
                    }),
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: r
                }, f.createElement(M, {
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
                }, f.createElement(x, {
                    value: l.getRealSignupIDVAdditionalDocumentNumberLabel() + " number",
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: r
                })), f.createElement(F, {
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
                    prompt: g.Injector.resolve(g.ServiceNames.TranslationsService).getMessage("gVfRG1kpokW0ypCN+N4tdQ#ValueExpression.269129445.1", "Enter your ") + l.getRealSignupIDVAdditionalDocumentNumberLabel() + " number",
                    style: "form-control",
                    variable: c.createVariable(g.DataTypes.DataTypes.Text, l.getRealSignupIDVAdditionalDocumentNumber(), function(o) {
                        l.setRealSignupIDVAdditionalDocumentNumber(o)
                    }),
                    _idProps: {
                        service: e,
                        name: "Input_DocumentName2"
                    },
                    _widgetRecordProvider: r
                }))]
            }, function() {
                return []
            }), f.createElement(O, {
                align: 0,
                animate: !1,
                style: "form-btn-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: r
            }, f.createElement(ee, {
                enabled: !0,
                isDefault: !0,
                onClick: s(function() {
                    return b.validateWidget(e.getId("DocumentNumberForm")), Promise.resolve().then(function() {
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
            }, i(u("lCkD_4uwjUmRwL4MuY2OiQ#Value", "Save"))))))
        }
    };
s(y, "View");
var J = y,
    W = J;
var se = h,
    De = S.PlaceholderContent,
    Ke = S.IteratorPlaceholderContent,
    D = class D extends V.BaseWebScreen {
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
            return [B, W]
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            let c = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = v.callContext(),
                d = D.asPrimitiveValue,
                a = D.getTranslation,
                i = this;
            return se.Injector.resolve(se.ServiceNames.TranslationsService).getMessage("MZs7VpFcU0ujYcDCb2maUA#TitleExpression.1272643895.1", "Identity verification | Deriv")
        }
        internalRender() {
            let c = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                d = v.callContext(),
                a = D.ifWidget,
                i = D.textWidget,
                p = D.asPrimitiveValue,
                u = D.getTranslation,
                b = this;
            return T.createElement("div", this.getRootNodeProperties(), T.createElement(B, {
                getOwnerSpan: s(function() {
                    return b.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return b.getChildSpan("destroy")
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
                    content: new De(function() {
                        return [T.createElement(W, {
                            getOwnerSpan: s(function() {
                                return b.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return b.getChildSpan("destroy")
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
s(D, "View");
var j = D,
    Xe = j;
export {
    Xe as
    default
};