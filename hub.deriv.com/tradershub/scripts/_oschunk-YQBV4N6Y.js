import {
    a as ae
} from "./_oschunk-COT2DGEM.js";
import "./_oschunk-JTBJ32DE.js";
import {
    a as oe
} from "./_oschunk-NNFEE2HR.js";
import {
    a as H
} from "./_oschunk-PON5R23U.js";
import "./_oschunk-KIZC2IWB.js";
import "./_oschunk-U5BVDMC7.js";
import "./_oschunk-GRCLOXGJ.js";
import "./_oschunk-VWJXDAKN.js";
import {
    b as Y,
    h as b,
    i as ee,
    j as I,
    k as te,
    l as re,
    p as ie,
    r as ne,
    s as F,
    t as E,
    u as x,
    y as V
} from "./_oschunk-E7JQAU4J.js";
import {
    a as K
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as q,
    g as w,
    i as P
} from "./_oschunk-T77XORCW.js";
import "./_oschunk-2TPJE4AL.js";
import {
    a as c,
    d as Z
} from "./_oschunk-VADNKVBQ.js";
import {
    l as B
} from "./_oschunk-OOUVJ7PM.js";
import "./_oschunk-ZKKCTARK.js";
import "./_oschunk-X4K3PA43.js";
import {
    Mf as A
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as h
} from "./_oschunk-5EPHB76O.js";
import {
    c as s,
    g as j
} from "./_oschunk-DVBKI63I.js";
var u = j(q());
var _ = j(q());
var R = h,
    k = class k extends R.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, R.DataTypes.DataTypes.RecordList, function() {
                return R.DataTypes.ImmutableBase.getData(new A)
            }, !1, A)].concat(R.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(n) {
            return new k(new k.RecordClass({
                supportedDocumentsVar: R.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
s(k, "VariablesRecord");
var N = k;
N.init();
var W = class W extends R.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(W, "WidgetsRecord");
var M = W,
    J = class J extends R.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return M
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {}
    };
s(J, "Model");
var L = J;
L._hasValidationWidgetsValue = void 0;
var se = new R.Model.ModelFactory(L);
var de = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "\u062A\u062E\u0637\u064A",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0647\u0648\u064A\u0629"
    },
    me = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "\xDCberspringen",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "Identit\xE4tspr\xFCfung"
    },
    pe = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Saltar",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "Verificaci\xF3n de identidad"
    },
    ve = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Passer",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "V\xE9rification d'identit\xE9"
    },
    ge = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Salta",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "Verifica dell'identit\xE0"
    },
    fe = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Pomi\u0144",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "Weryfikacja to\u017Csamo\u015Bci"
    },
    ye = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Ignorar",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "Verifica\xE7\xE3o de identidade"
    },
    be = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
    },
    ce = {
        "ar-001": {
            translations: de,
            isRTL: !0
        },
        "de-DE": {
            translations: me,
            isRTL: !1
        },
        "es-ES": {
            translations: pe,
            isRTL: !1
        },
        "fr-FR": {
            translations: ve,
            isRTL: !1
        },
        "it-IT": {
            translations: ge,
            isRTL: !1
        },
        "pl-PL": {
            translations: fe,
            isRTL: !1
        },
        "pt-PT": {
            translations: ye,
            isRTL: !1
        },
        "ru-RU": {
            translations: be,
            isRTL: !1
        }
    };

function U(y, n, m, e) {
    let a = JSON.parse(y.Response).residence_list.find(o => o.value == y.Citizenship),
        t = Object.values(a.identity.services.idv.documents_supported);
    y.SupportedDocuments = JSON.stringify(t)
}
s(U, "default");

function $(y, n, m, e) {
    return new Promise(function(a, t) {
        var l, p, g, v, f;
        let o = JSON.parse((l = y.DocumentsList) != null ? l : JSON.stringify([])).find(i => i.display_name === y.SelectedDocument);
        y.AdditionalDocumentLabel = (g = (p = o == null ? void 0 : o.additional) == null ? void 0 : p.display_name) != null ? g : "", y.AdditionalDocumentFormat = (f = (v = o == null ? void 0 : o.additional) == null ? void 0 : v.format) != null ? f : "", a()
    })
}
s($, "default");
var r = h; {
    let n = class n extends r.Controller.BaseViewController {
        constructor(e, a, t) {
            super(e, a, t, ce);
            var o = this.controller;
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
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(l) {
                    l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "6e9dafa6-2ff3-4e53-a310-f21aef09815b"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var p = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        p.value = r.Logger.startActiveSpan("GetIDVCountry", function(v) {
                            v && (v.setAttribute("code.function", "GetIDVCountry"), v.setAttribute("outsystems.function.key", "69eda138-5ae5-47aa-905d-1cf21cb37cdc"), v.setAttribute("outsystems.function.owner.name", "tradershub"), v.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(U, "GetIDVCountry", "OnReady", {
                                    Response: r.DataConversion.JSNodeParamConverter.to(c.getRawResidenceListResponse(), r.DataTypes.DataTypes.Text),
                                    Citizenship: r.DataConversion.JSNodeParamConverter.to(c.getSelectedCitizenship(), r.DataTypes.DataTypes.Text),
                                    SupportedDocuments: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(f) {
                                    var i = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult"));
                                    return i.supportedDocumentsOut = r.DataConversion.JSNodeParamConverter.from(f.SupportedDocuments, r.DataTypes.DataTypes.Text), i
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), g.value.dataOut = r.JSONUtils.deserializeFromJSON(p.value.supportedDocumentsOut, A, !1), a.variables.supportedDocumentsVar = g.value.dataOut
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _skipOnClick$Action() {
            return this.hasOwnProperty("__skipOnClick$Action") || (this.__skipOnClick$Action = function(e) {
                var a = this.model,
                    t = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("SkipOnClick", function(l) {
                    l && (l.setAttribute("code.function", "SkipOnClick"), l.setAttribute("outsystems.function.key", "7b4605d0-b749-4afa-9a7f-ccc851a1a84f"), l.setAttribute("outsystems.function.owner.name", "tradershub"), l.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("SkipOnClick"), e = t.callContext(e), c.setRealSignupSkippedIDV(!0), r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "employment-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__skipOnClick$Action
        }
        set _skipOnClick$Action(e) {
            this.__skipOnClick$Action = e
        }
        get _listItemOnClick$Action() {
            return this.hasOwnProperty("__listItemOnClick$Action") || (this.__listItemOnClick$Action = function(e, a) {
                var t = this.model,
                    o = this.controller,
                    l = this.idService;
                return r.Logger.startActiveSpan("ListItemOnClick", function(p) {
                    return p && (p.setAttribute("code.function", "ListItemOnClick"), p.setAttribute("outsystems.function.key", "9a00aef2-14a7-42a5-a74f-a54a56d83a11"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ListItemOnClick"), a = o.callContext(a);
                        var g = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars")));
                        g.value.documentNameInLocal = e;
                        var v = new r.DataTypes.VariableHolder,
                            f = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return c.setRealSignupIDVDocumentName(g.value.documentNameInLocal), c.setRealSignupIDVDocumentNumber(r.BuiltinFunctions.nullTextIdentifier()), c.setRealSignupIDVAdditionalDocumentNumber(r.BuiltinFunctions.nullTextIdentifier()), c.setRealSignupSkippedIDV(!1), f.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.supportedDocumentsVar, !1, !1), r.Logger.startActiveSpan("JavaScript1", function(i) {
                                i && (i.setAttribute("code.function", "JavaScript1"), i.setAttribute("outsystems.function.key", "ebd6ef6b-bb68-4ab1-a4b9-85a952754dc7"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteAsyncJSNode($, "JavaScript1", "ListItemOnClick", {
                                        SelectedDocument: r.DataConversion.JSNodeParamConverter.to(c.getRealSignupIDVDocumentName(), r.DataTypes.DataTypes.Text),
                                        DocumentsList: r.DataConversion.JSNodeParamConverter.to(f.value.jSONOut, r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentLabel: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentFormat: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(D) {
                                        var O = new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult"));
                                        return O.additionalDocumentLabelOut = r.DataConversion.JSNodeParamConverter.from(D.AdditionalDocumentLabel, r.DataTypes.DataTypes.Text), O.additionalDocumentFormatOut = r.DataConversion.JSNodeParamConverter.from(D.AdditionalDocumentFormat, r.DataTypes.DataTypes.Text), O
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1).then(function(i) {
                                v.value = i
                            }).then(function() {
                                return c.setRealSignupIDVAdditionalDocumentNumberLabel(v.value.additionalDocumentLabelOut), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "identity-verification/document-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), a, !0))
                            })
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1)
            }), this.__listItemOnClick$Action
        }
        set _listItemOnClick$Action(e) {
            this.__listItemOnClick$Action = e
        }
        onReady$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "6e9dafa6-2ff3-4e53-a310-f21aef09815b"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        skipOnClick$Action(e) {
            var a = this.controller;
            return r.Logger.startActiveSpan("SkipOnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SkipOnClick"), t.setAttribute("outsystems.function.key", "7b4605d0-b749-4afa-9a7f-ccc851a1a84f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._skipOnClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        listItemOnClick$Action(e, a) {
            var t = this.controller;
            return r.Logger.startActiveSpan("ListItemOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "ListItemOnClick"), o.setAttribute("outsystems.function.key", "9a00aef2-14a7-42a5-a74f-a54a56d83a11"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._listItemOnClick$Action, a, e)
                }, function() {
                    o && o.end()
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
                var a = this.controller,
                    t = this.model,
                    o = this.idService;
                return a.onReady$Action(e)
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
            return Z.defaultTimeout
        }
    };
    s(n, "ControllerInner");
    let y = n;
    T = y, T.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars", [{
        name: "DocumentName",
        attrName: "documentNameInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), T.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult", [{
        name: "AdditionalDocumentLabel",
        attrName: "additionalDocumentLabelOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "AdditionalDocumentFormat",
        attrName: "additionalDocumentFormatOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var T, le = new r.Controller.ControllerFactory(T, K);
var Se = h,
    z = P.PlaceholderContent,
    he = P.IteratorPlaceholderContent,
    C = class C extends w.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "IDVDocumentSelectionMobileBlock",
                functionKey: "134d5383-5297-4ee2-b181-e144168be0c2",
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
            return se
        }
        get controllerFactory() {
            return le
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                m = this.controller,
                e = this.idService,
                a = m.validationService,
                t = this.widgetsRecordProvider,
                o = m.callContext(),
                l = C.ifWidget,
                p = C.textWidget,
                g = C.asPrimitiveValue,
                v = C.getTranslation,
                f = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(b, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, _.createElement(b, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 8px; text-align: left;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, _.createElement(V, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [p(v("sQ2mDUpLSkeVulBs+z6XMA#Value", "Identity verification"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), _.createElement(x, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var i = o.clone();
                    m.skipOnClick$Action(m.callContext(i))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, _.createElement(V, {
                extendedProperties: {
                    style: "color: #222; font-style: normal; font-weight: bold; margin-bottom: 8px; text-decoration: underline;"
                },
                text: [p(v("DL2B6kiE2UaHdszRXywp2w#Value", "Skip"))],
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }))), _.createElement(te, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: n.variables.supportedDocumentsVar,
                style: "list list-group display-flex flex-direction-column gap-base",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new he(function(i, D) {
                        return [_.createElement(re, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; padding: 16px;"
                            },
                            onClick: s(function() {
                                return Promise.resolve().then(function() {
                                    var O = D.clone();
                                    return m.listItemOnClick$Action(n.variables.supportedDocumentsVar.getCurrent(D.iterationContext).display_nameAttr, m.callContext(O))
                                })
                            }, "onClick"),
                            style: "list-item",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: i,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: z.Empty,
                                content: new z(function() {
                                    return [_.createElement(b, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, _.createElement(I, {
                                        extendedProperties: {
                                            style: "font-weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: n.variables.supportedDocumentsVar.getCurrent(D.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), _.createElement(ne, {
                                        image: Se.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: z.Empty
                            },
                            _dependencies: [g(n.variables.supportedDocumentsVar.getCurrent(D.iterationContext).display_nameAttr)]
                        })]
                    }, o, e, "1")
                },
                _dependencies: []
            })))
        }
    };
s(C, "View");
var Q = C,
    G = Q;
var d = h,
    Re = P.PlaceholderContent,
    Ce = P.IteratorPlaceholderContent,
    S = class S extends w.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.IdentityVerification"
        }
        static getAttributes() {
            return {
                codeFunction: "IdentityVerification",
                functionKey: "9cdafaf0-1c53-43b2-b556-6f797c8eb81a",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.IdentityVerification.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [H, G]
        }
        get modelFactory() {
            return oe
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            let n = this.model,
                m = this.controller,
                e = this.idService,
                a = m.validationService,
                t = m.callContext(),
                o = S.asPrimitiveValue,
                l = S.getTranslation,
                p = this;
            return d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("8PranFMcskO1Vm95fI64Gg#TitleExpression.1272643895.1", "Identity verification | Deriv")
        }
        internalRender() {
            let n = this.model,
                m = this.controller,
                e = this.idService,
                a = m.validationService,
                t = this.widgetsRecordProvider,
                o = m.callContext(),
                l = S.ifWidget,
                p = S.textWidget,
                g = S.asPrimitiveValue,
                v = S.getTranslation,
                f = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(H, {
                getOwnerSpan: s(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("Hj3pKCxUGESS3_0IZWlqhQ#Value.-1330566627.1", "Identity verification"),
                    HideTitle: !0
                },
                events: {
                    _handleError: s(function(i) {
                        m.handleError(i)
                    }, "_handleError")
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
                    content: new Re(function() {
                        return [u.createElement(b, {
                            align: 0,
                            animate: !0,
                            style: "full-width identity-verification-list__desktop",
                            visible: n.getCachedValue(e.getId("sa7oVEAUIUqf0f7UVATGwQ.Visible"), function() {
                                return B.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(ie, {
                            _validationProps: {
                                validationService: a
                            },
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form",
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(x, {
                            enabled: !0,
                            extendedProperties: {
                                style: "color: #000;"
                            },
                            onClick: s(function() {
                                var i = o.clone();
                                m.skipOnClick$Action(m.callContext(i))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(V, {
                            extendedProperties: {
                                style: "font-weight: bold; text-decoration: underline;"
                            },
                            text: [p(v("V+t_iesdbkGcAVN32D4V0w#Value", "Skip"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }))), u.createElement(b, {
                            align: 0,
                            animate: !1,
                            style: n.getCachedValue(e.getId("Ft2vvm6xGEGcrU3GXJ5OcQ.Style"), function() {
                                return n.widgets.get(e.getId("Input_DocumentType")).validAttr ? d.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-xl"
                            }, function() {
                                return n.widgets.get(e.getId("Input_DocumentType")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(E, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_DocumentType",
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }, p(v("IsCVlHAg60yzbIoHFFOqgg#Value", "Document type"))), u.createElement(ee, {
                            _validationProps: {
                                validationService: a,
                                validationParentId: e.getId("Form")
                            },
                            dropdownMode: 1,
                            emptyValue: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("B6uOXJubvUqPXa6xy0IsQw#ValueExpression.-964944010.1", "Select your document type"),
                            enabled: !0,
                            list: n.variables.supportedDocumentsVar,
                            mandatory: !0,
                            onChange: s(function() {
                                return Promise.resolve().then(function() {
                                    var i = o.clone();
                                    return m.input_DocumentTypeOnChange$Action(m.callContext(i))
                                })
                            }, "onChange"),
                            style: "dropdown",
                            values: s(function(i) {
                                return i.display_nameAttr
                            }, "values"),
                            variable: n.createVariable(d.DataTypes.DataTypes.Text, c.getRealSignupIDVDocumentName(), function(i) {
                                c.setRealSignupIDVDocumentName(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_DocumentType"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new Ce(function(i, D) {
                                    return [u.createElement(I, {
                                        value: n.variables.supportedDocumentsVar.getCurrent(D.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, o, e, "1")
                            },
                            _dependencies: []
                        })), u.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: n.getCachedValue(e.getId("CeRGFVzPhkygrIB3Z4Hy+A.Style"), function() {
                                return n.widgets.get(e.getId("Input_DocumentNumber")).validAttr ? d.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                            }, function() {
                                return n.widgets.get(e.getId("Input_DocumentNumber")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(E, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_DocumentNumber",
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(I, {
                            value: n.getCachedValue(e.getId("MBPeVTgu00ikn35ZdN350Q.Value"), function() {
                                return d.BuiltinFunctions.length(c.getRealSignupIDVDocumentName()) > 0 ? c.getRealSignupIDVDocumentName() + " number" : d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("sVMUT2B9AEGgyTfLq4AQQg#ValueExpression.2067318222.1", "Document number")
                            }, function() {
                                return c.getRealSignupIDVDocumentName()
                            }),
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: t
                        })), u.createElement(F, {
                            _validationProps: {
                                validationService: a,
                                validationParentId: e.getId("Form")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: n.getCachedValue(e.getId("Input_DocumentNumber.Prompt"), function() {
                                return d.BuiltinFunctions.length(c.getRealSignupIDVDocumentName()) > 0 ? d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("Joy7QHQO9U6PPn1ZP0kU6Q#ValueExpression.269129445.1", "Enter your ") + c.getRealSignupIDVDocumentName() + " number" : d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("Joy7QHQO9U6PPn1ZP0kU6Q#ValueExpression.-1864880023.1", "Enter your document number")
                            }, function() {
                                return c.getRealSignupIDVDocumentName()
                            }),
                            style: "form-control",
                            variable: n.createVariable(d.DataTypes.DataTypes.Text, c.getRealSignupIDVDocumentNumber(), function(i) {
                                c.setRealSignupIDVDocumentNumber(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_DocumentNumber"
                            },
                            _widgetRecordProvider: t
                        })), l(d.BuiltinFunctions.length(n.variables.additionalDocumentLabelVar) > 0, !1, this, function() {
                            return [u.createElement(b, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: n.getCachedValue(e.getId("lsboBH3agEa9wnQe0bayHg.Style"), function() {
                                    return n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr ? d.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                                }, function() {
                                    return n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr
                                }),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(E, {
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mandatory: !0,
                                targetWidget: "Input_DocumentNumber2",
                                _idProps: {
                                    service: e,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: t
                            }, u.createElement(I, {
                                value: n.variables.additionalDocumentLabelVar + " number",
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            })), u.createElement(F, {
                                _validationProps: {
                                    validationService: a,
                                    validationParentId: e.getId("Form")
                                },
                                enabled: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !0,
                                maxLength: 0,
                                prompt: d.Injector.resolve(d.ServiceNames.TranslationsService).getMessage("NP4LFJC0_0+gYJuZ4XVF8g#ValueExpression.269129445.1", "Enter your ") + n.variables.additionalDocumentLabelVar + " number",
                                style: "form-control",
                                variable: n.createVariable(d.DataTypes.DataTypes.Text, c.getRealSignupIDVAdditionalDocumentNumber(), function(i) {
                                    c.setRealSignupIDVAdditionalDocumentNumber(i)
                                }),
                                _idProps: {
                                    service: e,
                                    name: "Input_DocumentNumber2"
                                },
                                _widgetRecordProvider: t
                            }))]
                        }, function() {
                            return []
                        }), u.createElement(b, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: right;"
                            },
                            style: "form-btn-container btn-container",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(Y, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            isDefault: !0,
                            onClick: s(function() {
                                return f.validateWidget(e.getId("Form")), Promise.resolve().then(function() {
                                    var i = o.clone();
                                    return m.nextOnClick$Action(m.callContext(i))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(V, {
                            extendedProperties: {
                                style: "border-radius: 1px;"
                            },
                            text: [p(v("Pj10iobUZ02yNHL_mn2r4Q#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }))))), u.createElement(b, {
                            align: 0,
                            animate: !0,
                            style: "full-width identity-verification-list__mobile",
                            visible: n.getCachedValue(e.getId("SZffVKcZkk6JlZbVtBHriQ.Visible"), function() {
                                return !B.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }, u.createElement(G, {
                            getOwnerSpan: s(function() {
                                return f.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return f.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(i) {
                                    m.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [g(c.getRealSignupIDVAdditionalDocumentNumber()), g(n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr), g(n.variables.additionalDocumentLabelVar), g(c.getRealSignupIDVDocumentNumber()), g(n.widgets.get(e.getId("Input_DocumentNumber")).validAttr), g(n.variables.supportedDocumentsVar), g(c.getRealSignupIDVDocumentName()), g(n.widgets.get(e.getId("Input_DocumentType")).validAttr)]
            }))
        }
    };
s(S, "View");
var X = S,
    rt = X;
export {
    rt as
    default
};