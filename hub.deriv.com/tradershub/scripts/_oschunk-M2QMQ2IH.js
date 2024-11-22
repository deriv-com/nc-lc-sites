import {
    a as oe
} from "./_oschunk-A2B4DQXF.js";
import {
    a as ae
} from "./_oschunk-6LA7MOLO.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as W
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as Y,
    h as y,
    i as ee,
    j as P,
    k as te,
    l as re,
    p as ie,
    r as ne,
    s as B,
    t as x,
    u as E,
    y as I
} from "./_oschunk-HUOHOHZB.js";
import {
    a as X
} from "./_oschunk-Y45M2O2K.js";
import {
    a as q,
    g as k,
    i as O
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as c,
    d as K
} from "./_oschunk-27GDEXUT.js";
import {
    a as F
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    hf as A
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as h
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as Z
} from "./_oschunk-DVBKI63I.js";
var l = Z(q());
var b = Z(q());
var R = h,
    T = class T extends R.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", !0, !1, R.DataTypes.DataTypes.RecordList, function() {
                return R.DataTypes.ImmutableBase.getData(new A)
            }, !1, A)].concat(R.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
        static fromStructure(n) {
            return new T(new T.RecordClass({
                supportedDocumentsVar: R.DataTypes.ImmutableBase.getData(n)
            }))
        }
    };
s(T, "VariablesRecord");
var N = T;
N.init();
var $ = class $ extends R.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s($, "WidgetsRecord");
var H = $,
    J = class J extends R.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return N
        }
        static getWidgetsRecordConstructor() {
            return H
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
var ue = {
        "DL2B6kiE2UaHdszRXywp2w#Value": "Sauter",
        "sQ2mDUpLSkeVulBs+z6XMA#Value": "V\xE9rification d'identit\xE9"
    },
    ce = {
        "fr-FR": {
            translations: ue,
            isRTL: !1
        }
    };

function M(v, n, u, e) {
    let a = JSON.parse(v.Response).residence_list.find(o => o.value == v.Citizenship),
        t = Object.values(a.identity.services.idv.documents_supported);
    v.SupportedDocuments = JSON.stringify(t)
}
s(M, "default");

function G(v, n, u, e) {
    return new Promise(function(a, t) {
        var d, m, f, p, g;
        let o = JSON.parse((d = v.DocumentsList) != null ? d : JSON.stringify([])).find(i => i.display_name === v.SelectedDocument);
        v.AdditionalDocumentLabel = (f = (m = o == null ? void 0 : o.additional) == null ? void 0 : m.display_name) != null ? f : "", v.AdditionalDocumentFormat = (g = (p = o == null ? void 0 : o.additional) == null ? void 0 : p.format) != null ? g : "", a()
    })
}
s(G, "default");
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
                return r.Logger.startActiveSpan("OnReady", function(d) {
                    d && (d.setAttribute("code.function", "OnReady"), d.setAttribute("outsystems.function.key", "6e9dafa6-2ff3-4e53-a310-f21aef09815b"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new r.DataTypes.VariableHolder,
                            f = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        m.value = r.Logger.startActiveSpan("GetIDVCountry", function(p) {
                            p && (p.setAttribute("code.function", "GetIDVCountry"), p.setAttribute("outsystems.function.key", "69eda138-5ae5-47aa-905d-1cf21cb37cdc"), p.setAttribute("outsystems.function.owner.name", "tradershub"), p.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), p.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(M, "GetIDVCountry", "OnReady", {
                                    Response: r.DataConversion.JSNodeParamConverter.to(c.getRawResidenceListResponse(), r.DataTypes.DataTypes.Text),
                                    Citizenship: r.DataConversion.JSNodeParamConverter.to(c.getSelectedCitizenship(), r.DataTypes.DataTypes.Text),
                                    SupportedDocuments: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var i = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult"));
                                    return i.supportedDocumentsOut = r.DataConversion.JSNodeParamConverter.from(g.SupportedDocuments, r.DataTypes.DataTypes.Text), i
                                }, {}, {})
                            } finally {
                                p && p.end()
                            }
                        }, 1), f.value.dataOut = r.JSONUtils.deserializeFromJSON(m.value.supportedDocumentsOut, A, !1), a.variables.supportedDocumentsVar = f.value.dataOut
                    } finally {
                        d && d.end()
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
                return r.Logger.startActiveSpan("SkipOnClick", function(d) {
                    d && (d.setAttribute("code.function", "SkipOnClick"), d.setAttribute("outsystems.function.key", "7b4605d0-b749-4afa-9a7f-ccc851a1a84f"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("SkipOnClick"), e = t.callContext(e), c.setRealSignupSkippedIDV(!0), r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "employment-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        d && d.end()
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
                    d = this.idService;
                return r.Logger.startActiveSpan("ListItemOnClick", function(m) {
                    return m && (m.setAttribute("code.function", "ListItemOnClick"), m.setAttribute("outsystems.function.key", "9a00aef2-14a7-42a5-a74f-a54a56d83a11"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("ListItemOnClick"), a = o.callContext(a);
                        var f = new r.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars")));
                        f.value.documentNameInLocal = e;
                        var p = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType);
                        return r.Flow.executeAsyncFlow(function() {
                            return c.setRealSignupIDVDocumentName(f.value.documentNameInLocal), c.setRealSignupIDVDocumentNumber(r.BuiltinFunctions.nullTextIdentifier()), c.setRealSignupIDVAdditionalDocumentNumber(r.BuiltinFunctions.nullTextIdentifier()), c.setRealSignupSkippedIDV(!1), g.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.supportedDocumentsVar, !1, !1), r.Logger.startActiveSpan("JavaScript1", function(i) {
                                i && (i.setAttribute("code.function", "JavaScript1"), i.setAttribute("outsystems.function.key", "ebd6ef6b-bb68-4ab1-a4b9-85a952754dc7"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return o.safeExecuteAsyncJSNode(G, "JavaScript1", "ListItemOnClick", {
                                        SelectedDocument: r.DataConversion.JSNodeParamConverter.to(c.getRealSignupIDVDocumentName(), r.DataTypes.DataTypes.Text),
                                        DocumentsList: r.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentLabel: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                        AdditionalDocumentFormat: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(_) {
                                        var w = new(o.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult"));
                                        return w.additionalDocumentLabelOut = r.DataConversion.JSNodeParamConverter.from(_.AdditionalDocumentLabel, r.DataTypes.DataTypes.Text), w.additionalDocumentFormatOut = r.DataConversion.JSNodeParamConverter.from(_.AdditionalDocumentFormat, r.DataTypes.DataTypes.Text), w
                                    }, {}, {})
                                } finally {
                                    i && i.end()
                                }
                            }, 1).then(function(i) {
                                p.value = i
                            }).then(function() {
                                return c.setRealSignupIDVAdditionalDocumentNumberLabel(p.value.additionalDocumentLabelOut), r.Flow.returnAsync(r.Navigation.navigateTo(r.Navigation.generateScreenURL("tradershub", "identity-verification/document-details", {}), r.Transitions.createTransition(r.Transitions.TransitionAnimation.Default), a, !0))
                            })
                        })
                    }, function() {
                        m && m.end()
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
            return K.defaultTimeout
        }
    };
    s(n, "ControllerInner");
    let v = n;
    V = v, V.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult", [{
        name: "SupportedDocuments",
        attrName: "supportedDocumentsOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), V.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars", [{
        name: "DocumentName",
        attrName: "documentNameInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), V.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult", [{
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
var V, de = new r.Controller.ControllerFactory(V, X);
var fe = h,
    z = O.PlaceholderContent,
    ge = O.IteratorPlaceholderContent,
    C = class C extends k.BaseWebBlock {
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
            return de
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = this.widgetsRecordProvider,
                o = u.callContext(),
                d = C.ifWidget,
                m = C.textWidget,
                f = C.asPrimitiveValue,
                p = C.getTranslation,
                g = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(y, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, b.createElement(y, {
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
            }, b.createElement(I, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: [m(p("sQ2mDUpLSkeVulBs+z6XMA#Value", "Identity verification"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), b.createElement(E, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: s(function() {
                    var i = o.clone();
                    u.skipOnClick$Action(u.callContext(i))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, b.createElement(I, {
                extendedProperties: {
                    style: "color: #222; font-style: normal; font-weight: bold; margin-bottom: 8px; text-decoration: underline;"
                },
                text: [m(p("DL2B6kiE2UaHdszRXywp2w#Value", "Skip"))],
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }))), b.createElement(te, {
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
                    content: new ge(function(i, _) {
                        return [b.createElement(re, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; padding: 16px;"
                            },
                            onClick: s(function() {
                                return Promise.resolve().then(function() {
                                    var w = _.clone();
                                    return u.listItemOnClick$Action(n.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr, u.callContext(w))
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
                                    return [b.createElement(y, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, b.createElement(P, {
                                        extendedProperties: {
                                            style: "font-weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: n.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: i,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), b.createElement(ne, {
                                        image: fe.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
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
                            _dependencies: [f(n.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr)]
                        })]
                    }, o, e, "1")
                },
                _dependencies: []
            })))
        }
    };
s(C, "View");
var U = C,
    j = U;
var D = h,
    ve = O.PlaceholderContent,
    ye = O.IteratorPlaceholderContent,
    S = class S extends k.BaseWebScreen {
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
            return [W, j]
        }
        get modelFactory() {
            return oe
        }
        get controllerFactory() {
            return ae
        }
        get title() {
            let n = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = u.callContext(),
                o = S.asPrimitiveValue,
                d = S.getTranslation,
                m = this;
            return D.Injector.resolve(D.ServiceNames.TranslationsService).getMessage("8PranFMcskO1Vm95fI64Gg#TitleExpression.1272643895.1", "Identity verification | Deriv")
        }
        internalRender() {
            let n = this.model,
                u = this.controller,
                e = this.idService,
                a = u.validationService,
                t = this.widgetsRecordProvider,
                o = u.callContext(),
                d = S.ifWidget,
                m = S.textWidget,
                f = S.asPrimitiveValue,
                p = S.getTranslation,
                g = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(W, {
                getOwnerSpan: s(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Identity verification",
                    HideTitle: !0
                },
                events: {
                    _handleError: s(function(i) {
                        u.handleError(i)
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
                    content: new ve(function() {
                        return [l.createElement(y, {
                            align: 0,
                            animate: !0,
                            style: "full-width identity-verification-list__desktop",
                            visible: n.getCachedValue(e.getId("sa7oVEAUIUqf0f7UVATGwQ.Visible"), function() {
                                return F.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(ie, {
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
                        }, l.createElement(y, {
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
                        }, l.createElement(E, {
                            enabled: !0,
                            extendedProperties: {
                                style: "color: #000;"
                            },
                            onClick: s(function() {
                                var i = o.clone();
                                u.skipOnClick$Action(u.callContext(i))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(I, {
                            extendedProperties: {
                                style: "font-weight: bold; text-decoration: underline;"
                            },
                            text: [m(p("V+t_iesdbkGcAVN32D4V0w#Value", "Skip"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }))), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            style: n.getCachedValue(e.getId("Ft2vvm6xGEGcrU3GXJ5OcQ.Style"), function() {
                                return n.widgets.get(e.getId("Input_DocumentType")).validAttr ? D.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-xl"
                            }, function() {
                                return n.widgets.get(e.getId("Input_DocumentType")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(x, {
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
                        }, m(p("IsCVlHAg60yzbIoHFFOqgg#Value", "Document type"))), l.createElement(ee, {
                            _validationProps: {
                                validationService: a,
                                validationParentId: e.getId("Form")
                            },
                            dropdownMode: 1,
                            emptyValue: "Select your document type",
                            enabled: !0,
                            list: n.variables.supportedDocumentsVar,
                            mandatory: !0,
                            onChange: s(function() {
                                return Promise.resolve().then(function() {
                                    var i = o.clone();
                                    return u.input_DocumentTypeOnChange$Action(u.callContext(i))
                                })
                            }, "onChange"),
                            style: "dropdown",
                            values: s(function(i) {
                                return i.display_nameAttr
                            }, "values"),
                            variable: n.createVariable(D.DataTypes.DataTypes.Text, c.getRealSignupIDVDocumentName(), function(i) {
                                c.setRealSignupIDVDocumentName(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_DocumentType"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new ye(function(i, _) {
                                    return [l.createElement(P, {
                                        value: n.variables.supportedDocumentsVar.getCurrent(_.iterationContext).display_nameAttr,
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
                        })), l.createElement(y, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: n.getCachedValue(e.getId("CeRGFVzPhkygrIB3Z4Hy+A.Style"), function() {
                                return n.widgets.get(e.getId("Input_DocumentNumber")).validAttr ? D.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                            }, function() {
                                return n.widgets.get(e.getId("Input_DocumentNumber")).validAttr
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(x, {
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
                        }, l.createElement(P, {
                            value: n.getCachedValue(e.getId("MBPeVTgu00ikn35ZdN350Q.Value"), function() {
                                return D.BuiltinFunctions.length(c.getRealSignupIDVDocumentName()) > 0 ? c.getRealSignupIDVDocumentName() + " number" : "Document number"
                            }, function() {
                                return c.getRealSignupIDVDocumentName()
                            }),
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: t
                        })), l.createElement(B, {
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
                                return D.BuiltinFunctions.length(c.getRealSignupIDVDocumentName()) > 0 ? "Enter your " + c.getRealSignupIDVDocumentName() + " number" : "Enter your document number"
                            }, function() {
                                return c.getRealSignupIDVDocumentName()
                            }),
                            style: "form-control",
                            variable: n.createVariable(D.DataTypes.DataTypes.Text, c.getRealSignupIDVDocumentNumber(), function(i) {
                                c.setRealSignupIDVDocumentNumber(i)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_DocumentNumber"
                            },
                            _widgetRecordProvider: t
                        })), d(D.BuiltinFunctions.length(n.variables.additionalDocumentLabelVar) > 0, !1, this, function() {
                            return [l.createElement(y, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: n.getCachedValue(e.getId("lsboBH3agEa9wnQe0bayHg.Style"), function() {
                                    return n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr ? D.BuiltinFunctions.nullTextIdentifier() : "margin-bottom-l"
                                }, function() {
                                    return n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr
                                }),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: t
                            }, l.createElement(x, {
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
                            }, l.createElement(P, {
                                value: n.variables.additionalDocumentLabelVar + " number",
                                _idProps: {
                                    service: e,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: t
                            })), l.createElement(B, {
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
                                prompt: "Enter your " + n.variables.additionalDocumentLabelVar + " number",
                                style: "form-control",
                                variable: n.createVariable(D.DataTypes.DataTypes.Text, c.getRealSignupIDVAdditionalDocumentNumber(), function(i) {
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
                        }), l.createElement(y, {
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
                        }, l.createElement(Y, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            isDefault: !0,
                            onClick: s(function() {
                                return g.validateWidget(e.getId("Form")), Promise.resolve().then(function() {
                                    var i = o.clone();
                                    return u.nextOnClick$Action(u.callContext(i))
                                })
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(I, {
                            extendedProperties: {
                                style: "border-radius: 1px;"
                            },
                            text: [m(p("Pj10iobUZ02yNHL_mn2r4Q#Value", "Next"))],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }))))), l.createElement(y, {
                            align: 0,
                            animate: !0,
                            style: "full-width identity-verification-list__mobile",
                            visible: n.getCachedValue(e.getId("SZffVKcZkk6JlZbVtBHriQ.Visible"), function() {
                                return !F.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }, l.createElement(j, {
                            getOwnerSpan: s(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(i) {
                                    u.handleError(i)
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
                _dependencies: [f(c.getRealSignupIDVAdditionalDocumentNumber()), f(n.widgets.get(e.getId("Input_DocumentNumber2")).validAttr), f(n.variables.additionalDocumentLabelVar), f(c.getRealSignupIDVDocumentNumber()), f(n.widgets.get(e.getId("Input_DocumentNumber")).validAttr), f(n.variables.supportedDocumentsVar), f(c.getRealSignupIDVDocumentName()), f(n.widgets.get(e.getId("Input_DocumentType")).validAttr)]
            }))
        }
    };
s(S, "View");
var Q = S,
    Ze = Q;
export {
    Ze as
    default
};