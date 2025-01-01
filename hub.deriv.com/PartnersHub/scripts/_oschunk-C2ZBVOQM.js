import {
    a as ve,
    b as Ce,
    c as ge
} from "./_oschunk-U6JJ2AP7.js";
import {
    a as q
} from "./_oschunk-KURWLJI2.js";
import {
    a as Z
} from "./_oschunk-2MST7FR4.js";
import {
    a as b
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as G
} from "./_oschunk-O4ORPF6H.js";
import {
    a as $
} from "./_oschunk-VDU6C3OQ.js";
import {
    a as h,
    d as P,
    f as Q,
    n as F,
    o as fe,
    p as J,
    u as R
} from "./_oschunk-LWMGEL7F.js";
import {
    a as N
} from "./_oschunk-4GXKK3IG.js";
import {
    a as z,
    g as x,
    i as E
} from "./_oschunk-WZHUAZJP.js";
import {
    a as f,
    o as O,
    q as H
} from "./_oschunk-BDI2RWOA.js";
import {
    a as L
} from "./_oschunk-P3RPGEI5.js";
import {
    Af as me,
    Ue as le,
    a as de,
    wd as ce,
    yf as ue
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as S
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as o,
    h as U
} from "./_oschunk-QHO7QY6K.js";
var M = U(z());
var pe = {};
var B = S; {
    let a = class a extends B.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, pe);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _secondaryButtononClick$Action() {
            return this.hasOwnProperty("__secondaryButtononClick$Action") || (this.__secondaryButtononClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return B.Logger.startActiveSpan("SecondaryButtononClick", function(n) {
                    n && (n.setAttribute("code.function", "SecondaryButtononClick"), n.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("SecondaryButtononClick"), e = t.callContext(e);
                        var C = new B.DataTypes.VariableHolder;
                        C.value = O.sidebarOpen$Action(f.getCFDsModalId(), e), f.setshowCFDCommissionModal(!0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__secondaryButtononClick$Action
        }
        set _secondaryButtononClick$Action(e) {
            this.__secondaryButtononClick$Action = e
        }
        secondaryButtononClick$Action(e) {
            var r = this.controller;
            return B.Logger.startActiveSpan("SecondaryButtononClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "SecondaryButtononClick"), t.setAttribute("outsystems.function.key", "85847702-398c-43ad-9623-8dd03380c9b8"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._secondaryButtononClick$Action, e)
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
            return H.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let g = a;
    be = g
}
var be, _e = new B.Controller.ControllerFactory(be, N);
var nt = E.PlaceholderContent,
    ot = E.IteratorPlaceholderContent,
    T = class T extends x.BaseWebBlock {
        static get displayName() {
            return "Home.EnableCFDCommissionBanner"
        }
        static getAttributes() {
            return {
                codeFunction: "EnableCFDCommissionBanner",
                functionKey: "ee13d23b-3a63-4aac-8e2c-e43343ae9feb",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.EnableCFDCommissionBanner.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [Z]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return _e
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                m = this.controller,
                e = this.idService,
                r = m.validationService,
                t = this.widgetsRecordProvider,
                c = m.callContext(),
                n = T.ifWidget,
                C = T.textWidget,
                v = T.asPrimitiveValue,
                y = T.getTranslation,
                l = this;
            return M.createElement("div", this.getRootNodeProperties(), M.createElement(P, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    className: "cfd-commission-banner"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, M.createElement(R, {
                style: "cfd-commission-banner-title",
                text: ["Enable CFD commissions now!"],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), M.createElement(Z, {
                getOwnerSpan: o(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    height: a.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.height"), function() {
                        return O.isDesktop$Action(c).isDesktopOut ? "48px" : "32px"
                    }),
                    borderRadius: "35px",
                    title: "Let\u2019s go",
                    Width: a.getCachedValue(e.getId("_Nh3bgxvkkOOaqGVDacy_w.Width"), function() {
                        return O.isDesktop$Action(c).isDesktopOut ? "136px" : "78px"
                    })
                },
                events: {
                    _handleError: o(function(s) {
                        m.handleError(s)
                    }, "_handleError"),
                    onClick$Action: o(function() {
                        var s = c.clone();
                        m.secondaryButtononClick$Action(m.callContext(s))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))
        }
    };
o(T, "View");
var j = T,
    it = j;
var _ = U(z());
var He = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u062E\u0637\u0648\u0629",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0623\u0643\u0645\u0644 \u0645\u0644\u0641\u064A \u0627\u0644\u0634\u062E\u0635\u064A"
    },
    Re = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Schritt",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Mein Profil vervollst\xE4ndigen"
    },
    Te = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completar mi perfil"
    },
    De = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\xC9tape",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Compl\xE9ter mon profil"
    },
    Ie = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Passo",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completa il mio profilo"
    },
    Ve = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Krok",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Uzupe\u0142nij m\xF3j profil"
    },
    ke = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Step",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Concluir o meu perfil"
    },
    Ne = {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "\u0428\u0430\u0433",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u043C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
    },
    Pe = {
        "ar-001": {
            translations: He,
            isRTL: !0
        },
        "de-DE": {
            translations: Re,
            isRTL: !1
        },
        "es-ES": {
            translations: Te,
            isRTL: !1
        },
        "fr-FR": {
            translations: De,
            isRTL: !1
        },
        "it-IT": {
            translations: Ie,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ve,
            isRTL: !1
        },
        "pt-PT": {
            translations: ke,
            isRTL: !1
        },
        "ru-RU": {
            translations: Ne,
            isRTL: !1
        }
    };

function K(g, a, m, e) {
    var t, c, n;
    let r = JSON.parse(g.ResidenceList || JSON.stringify([])).residence_list.find(C => C.value == g.SelectedCitizenship);
    g.isIDVSupported = !!((n = (c = (t = r == null ? void 0 : r.identity) == null ? void 0 : t.services) == null ? void 0 : c.idv) != null && n.is_country_supported)
}
o(K, "default");

function Y(g, a, m, e) {
    g.Token = localStorage.getItem("token")
}
o(Y, "default");
var p = S; {
    let a = class a extends p.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Pe);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return p.Logger.startActiveSpan("OnClick", function(n) {
                    n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("OnClick"), e = t.callContext(e), p.Navigation.navigateTo(p.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), p.Transitions.createTransition(p.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(e) {
            this.__onClick$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return p.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var C = new p.DataTypes.VariableHolder,
                            v = new p.DataTypes.VariableHolder,
                            y = new p.DataTypes.VariableHolder,
                            l = new p.DataTypes.VariableHolder,
                            s = new p.DataTypes.VariableHolder(new p.DataTypes.JSONSerializeOutputType);
                        return p.Flow.executeAsyncFlow(function() {
                            return l.value = p.Logger.startActiveSpan("GetAuthToken", function(u) {
                                u && (u.setAttribute("code.function", "GetAuthToken"), u.setAttribute("outsystems.function.key", "a90a2d60-98b8-48c2-8c6d-aad580e7b181"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(Y, "GetAuthToken", "OnReady", {
                                        Token: p.DataConversion.JSNodeParamConverter.to("", p.DataTypes.DataTypes.Text)
                                    }, function(w) {
                                        var A = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult"));
                                        return A.tokenOut = p.DataConversion.JSNodeParamConverter.from(w.Token, p.DataTypes.DataTypes.Text), A
                                    }, {}, {})
                                } finally {
                                    u && u.end()
                                }
                            }, 1), r.flush(), H.sendResidenceList$Action(e).then(function(u) {
                                v.value = u
                            }).then(function() {
                                return r.flush(), L.getSettings$Action(f.getServer(), l.value.tokenOut, f.getAppId(), "EN", e).then(function(u) {
                                    C.value = u
                                })
                            }).then(function() {
                                r.variables.residenceListResponseVar = v.value.residenceListResponseOut, s.value.jSONOut = p.JSONUtils.serializeToJSON(v.value.residenceListResponseOut, !1, !1), y.value = p.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function(u) {
                                    u && (u.setAttribute("code.function", "CheckIfIDVIsSupportedJS"), u.setAttribute("outsystems.function.key", "33193da3-481b-4435-9672-2e26c0b62d9e"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return t.safeExecuteJSNode(K, "CheckIfIDVIsSupportedJS", "OnReady", {
                                            ResidenceList: p.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, p.DataTypes.DataTypes.Text),
                                            SelectedCitizenship: p.DataConversion.JSNodeParamConverter.to(C.value.responseOut.get_settingsAttr.citizenAttr, p.DataTypes.DataTypes.Text),
                                            isIDVSupported: p.DataConversion.JSNodeParamConverter.to(!1, p.DataTypes.DataTypes.Boolean)
                                        }, function(w) {
                                            var A = new(t.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult"));
                                            return A.isIDVSupportedOut = p.DataConversion.JSNodeParamConverter.from(w.isIDVSupported, p.DataTypes.DataTypes.Boolean), A
                                        }, {}, {})
                                    } finally {
                                        u && u.end()
                                    }
                                }, 1), f.setRealSignupIsIDVSupported(y.value.isIDVSupportedOut)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onClick$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("OnClick__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClick"), t.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onClick$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return p.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), p.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onReady$Action(e)
            }), this._onInitializeEventHandler
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
            return H.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let g = a;
    W = g, W.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult", [{
        name: "isIDVSupported",
        attrName: "isIDVSupportedOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), W.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: p.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }])
}
var W, we = new p.Controller.ControllerFactory(W, N);
var Fe = S,
    $e = E.PlaceholderContent,
    It = E.IteratorPlaceholderContent,
    D = class D extends x.BaseWebBlock {
        static get displayName() {
            return "Home.CompleteMyProfile"
        }
        static getAttributes() {
            return {
                codeFunction: "CompleteMyProfile",
                functionKey: "77fd153f-1428-463d-ab51-f305d3b0dfae",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CompleteMyProfile.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [G]
        }
        get modelFactory() {
            return Ce
        }
        get controllerFactory() {
            return we
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                m = this.controller,
                e = this.idService,
                r = m.validationService,
                t = this.widgetsRecordProvider,
                c = m.callContext(),
                n = D.ifWidget,
                C = D.textWidget,
                v = D.asPrimitiveValue,
                y = D.getTranslation,
                l = this;
            return _.createElement("div", this.getRootNodeProperties(), _.createElement(P, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        var s = c.clone();
                        m.onClick$Action(m.callContext(s))
                    }, "onClick")
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "complete-my-profile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, _.createElement(P, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-space-between align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, _.createElement(R, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [C(y("V_f6UFrIQkCuMDCeq35TIQ#Value", "Complete my profile"))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), _.createElement(F, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: Fe.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            })), _.createElement(P, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, _.createElement(P, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, _.createElement(J, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }, C(y("zkE0A_QNHUO3f5+rZyPegQ#Value", "Step ")), _.createElement(Q, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: a.getCachedValue(e.getId("5lO5Y__sL0CwhX2+9HxxdQ.Value"), function() {
                    return f.getRealSignupCurrentStep().toString() + "/" + (f.getRealSignupIsIDVSupported() ? 8 : 7).toString() + ":"
                }, function() {
                    return f.getRealSignupCurrentStep()
                }, function() {
                    return f.getRealSignupIsIDVSupported()
                }),
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }), _.createElement(Q, {
                gridProperties: {
                    marginLeft: "5px"
                },
                value: f.getCurrentStepTitle(),
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            })))), _.createElement(P, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, _.createElement(G, {
                getOwnerSpan: o(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Progress: f.getProgressBarLength(),
                    ProgressColor: de.color.primary,
                    Thickness: 10
                },
                events: {
                    _handleError: o(function(s) {
                        m.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: $e.Empty
                },
                _dependencies: []
            }))))
        }
    };
o(D, "View");
var X = D,
    Vt = X;
var d = U(z());
var Ee = {};

function ee(g, a, m, e) {
    let r = JSON.parse(g.Response);
    r != null && r.Error || r != null && r.error ? g.isCFDPasswordCreationFailed = !0 : g.isCFDPasswordCreationFailed = !1
}
o(ee, "default");

function te(g, a, m, e) {
    let r = localStorage.getItem("token");
    r && (g.AuthToken = r)
}
o(te, "default");

function re(g, a, m) {
    let e = document.querySelector(".cfd-modal-is-open");
    e == null || e.classList.remove("cfd-modal-is-open")
}
o(re, "default");

function ne(g, a, m, e) {
    let r = document.getElementById(g.eyeButtonId),
        t = document.getElementById(g.passwordInputId),
        c = document.getElementById(g.passwordHiddenIcon),
        n = document.getElementById(g.passwordVisibleIcon);
    t.type === "text" ? (t.type = "password", n.classList.remove("hidden"), c.classList.add("hidden")) : (t.type = "text", n.classList.add("hidden"), c.classList.remove("hidden"))
}
o(ne, "default");

function oe(g, a, m, e) {
    let r = localStorage.getItem("token");
    g.Token = r
}
o(oe, "default");

function ie(g, a, m, e) {
    let r = {
            LengthCheck: g.password,
            UpperAndLowerCaseCheck: g.password,
            NumberCheck: g.password,
            SpecialCharacterCheck: g.password,
            RequiredCheck: g.password
        },
        t = yup.object().shape({
            UpperAndLowerCaseCheck: yup.string().matches(/(?=.*[A-Z])(?=.*[a-z])/, "HasAtLeastOneUppercaseAndOneLowercase"),
            LengthCheck: yup.string().min(8, "minLength").max(25, "maxLength"),
            NumberCheck: yup.string().matches(/[0-9]/, "HasAtLeastOneNumber"),
            SpecialCharacterCheck: yup.string().matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, "HasAtLeastOneSpecialCharacter"),
            RequiredCheck: yup.string().required()
        }),
        {
            errors: c
        } = validate(t, r);
    g.LengthError = c.LengthCheck ? "true" : "false", g.UppercaseAndLowercaseError = c.UpperAndLowerCaseCheck ? "true" : "false", g.NumberError = c.NumberCheck ? "true" : "false", g.SpecialCharacterError = c.SpecialCharacterCheck ? "true" : "false", g.RequiredError = !!c.RequiredCheck
}
o(ie, "default");
var i = S; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, Ee);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _submitHandler$Action() {
            return this.hasOwnProperty("__submitHandler$Action") || (this.__submitHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("SubmitHandler", function(n) {
                    return n && (n.setAttribute("code.function", "SubmitHandler"), n.setAttribute("outsystems.function.key", "33ccdc6d-5f83-4e81-a45c-7f4e92f08556"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("SubmitHandler"), e = t.callContext(e);
                        var C = new i.DataTypes.VariableHolder,
                            v = new i.DataTypes.VariableHolder,
                            y = new i.DataTypes.VariableHolder,
                            l = new i.DataTypes.VariableHolder,
                            s = new i.DataTypes.VariableHolder(new i.DataTypes.JSONSerializeOutputType);
                        return i.Flow.executeAsyncFlow(function() {
                            return i.Flow.executeSequence(function() {
                                if (i.BuiltinFunctions.length(r.variables.userInputVar) > 0) return i.Flow.executeSequence(function() {
                                    if (!(r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" || r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true")) return r.variables.isSubmittingVar = !0, l.value = i.Logger.startActiveSpan("JavaScript1", function(u) {
                                        u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "ace35d5a-8d78-4bac-8b49-5ccc28d85e94"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return t.safeExecuteJSNode(te, "JavaScript1", "SubmitHandler", {
                                                AuthToken: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text)
                                            }, function(w) {
                                                var A = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript1JSResult"));
                                                return A.authTokenOut = i.DataConversion.JSNodeParamConverter.from(w.AuthToken, i.DataTypes.DataTypes.Text), A
                                            }, {}, {})
                                        } finally {
                                            u && u.end()
                                        }
                                    }, 1), r.flush(), L.postTradingPlatformPasswordChange$Action(f.getServer(), function() {
                                        var u = new me;
                                        return u.new_passwordAttr = r.variables.userInputVar, u.platformAttr = "mt5", u
                                    }(), l.value.authTokenOut, f.getAppId(), "EN", e).then(function(u) {
                                        v.value = u
                                    }).then(function() {
                                        return r.flush(), L.postMT5NewAccount$Action(function() {
                                            var u = new ce;
                                            return u.mt5_new_accountAttr = "1", u.account_typeAttr = "gaming", u.nameAttr = f.getname(), u.emailAttr = f.getemail(), u.leverageAttr = i.BuiltinFunctions.integerToLongInteger(500), u.mainPasswordAttr = r.variables.userInputVar, u.productAttr = "standard", u
                                        }(), l.value.authTokenOut, f.getAppId(), "EN", f.getServer(), e).then(function(u) {
                                            C.value = u
                                        })
                                    }).then(function() {
                                        s.value.jSONOut = i.JSONUtils.serializeToJSON(C.value.responseOut, !1, !1), y.value = i.Logger.startActiveSpan("JavaScript2", function(u) {
                                            u && (u.setAttribute("code.function", "JavaScript2"), u.setAttribute("outsystems.function.key", "73aeb36f-b0b2-4044-8979-ec6d7689feaa"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                            try {
                                                return t.safeExecuteJSNode(ee, "JavaScript2", "SubmitHandler", {
                                                    Response: i.DataConversion.JSNodeParamConverter.to(s.value.jSONOut, i.DataTypes.DataTypes.Text),
                                                    isCFDPasswordCreationFailed: i.DataConversion.JSNodeParamConverter.to(!1, i.DataTypes.DataTypes.Boolean)
                                                }, function(w) {
                                                    var A = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript2JSResult"));
                                                    return A.isCFDPasswordCreationFailedOut = i.DataConversion.JSNodeParamConverter.from(w.isCFDPasswordCreationFailed, i.DataTypes.DataTypes.Boolean), A
                                                }, {}, {})
                                            } finally {
                                                u && u.end()
                                            }
                                        }, 1), r.variables.isSubmittingVar = !1
                                    }).then(function() {
                                        y.value.isCFDPasswordCreationFailedOut === !1 ? f.setisCFDPasswordCreationSucceeded(!0) : f.setisCFDPasswordCreationFailed(!0)
                                    })
                                });
                                r.variables.requiredInputErrorVar = !0
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__submitHandler$Action
        }
        set _submitHandler$Action(e) {
            this.__submitHandler$Action = e
        }
        get _onToggleSidebar$Action() {
            return this.hasOwnProperty("__onToggleSidebar$Action") || (this.__onToggleSidebar$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnToggleSidebar", function(n) {
                    n && (n.setAttribute("code.function", "OnToggleSidebar"), n.setAttribute("outsystems.function.key", "5a712797-1ea4-48dc-aaf3-64e51aff42ec"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleSidebar"), e = t.callContext(e), f.setshowCFDCommissionModal(!1), f.setshowCFDCommisionBanner(!f.getisCFDPasswordCreationSucceeded())
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onToggleSidebar$Action
        }
        set _onToggleSidebar$Action(e) {
            this.__onToggleSidebar$Action = e
        }
        get _sideBarSetModalId$Action() {
            return this.hasOwnProperty("__sideBarSetModalId$Action") || (this.__sideBarSetModalId$Action = function(e, r) {
                var t = this.model,
                    c = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("SideBarSetModalId", function(C) {
                    C && (C.setAttribute("code.function", "SideBarSetModalId"), C.setAttribute("outsystems.function.key", "7e8f1ef5-8c5c-4008-b7b5-49b59e9f8b89"), C.setAttribute("outsystems.function.owner.name", "PartnersHub"), C.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), C.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("SideBarSetModalId"), r = c.callContext(r);
                        var v = new i.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SideBarSetModalId$vars")));
                        v.value.modalIdInLocal = e, f.setCFDsModalId(v.value.modalIdInLocal)
                    } finally {
                        C && C.end()
                    }
                }, 1)
            }), this.__sideBarSetModalId$Action
        }
        set _sideBarSetModalId$Action(e) {
            this.__sideBarSetModalId$Action = e
        }
        get _okHandler$Action() {
            return this.hasOwnProperty("__okHandler$Action") || (this.__okHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OkHandler", function(n) {
                    n && (n.setAttribute("code.function", "OkHandler"), n.setAttribute("outsystems.function.key", "9495fee5-304f-4c70-a9d3-abb8d5922f14"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OkHandler"), e = t.callContext(e);
                        var C = new i.DataTypes.VariableHolder;
                        C.value = O.sidebarClose$Action(f.getCFDsModalId(), e), f.setisCFDPasswordCreationSucceeded(!1), f.setshowCFDCommissionModal(!1), f.setshowCFDCommisionBanner(!1), i.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "d4391505-887e-4c16-8a0d-c22424dc2785"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(re, "JavaScript1", "OkHandler", null, function(y) {}, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__okHandler$Action
        }
        set _okHandler$Action(e) {
            this.__okHandler$Action = e
        }
        get _tryAgainHandler$Action() {
            return this.hasOwnProperty("__tryAgainHandler$Action") || (this.__tryAgainHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("TryAgainHandler", function(n) {
                    n && (n.setAttribute("code.function", "TryAgainHandler"), n.setAttribute("outsystems.function.key", "9ce69f26-e83e-4c3b-93ab-12c31902fef3"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("TryAgainHandler"), e = t.callContext(e), f.setisCFDPasswordCreationFailed(!1), r.variables.userInputVar = "", r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = "", r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = ""
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__tryAgainHandler$Action
        }
        set _tryAgainHandler$Action(e) {
            this.__tryAgainHandler$Action = e
        }
        get _eyeButtonHandler$Action() {
            return this.hasOwnProperty("__eyeButtonHandler$Action") || (this.__eyeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("EyeButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "EyeButtonHandler"), n.setAttribute("outsystems.function.key", "b0a6056d-e53f-4698-877f-11494e9bd2e5"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("EyeButtonHandler"), e = t.callContext(e), i.Logger.startActiveSpan("JavaScript1", function(C) {
                            C && (C.setAttribute("code.function", "JavaScript1"), C.setAttribute("outsystems.function.key", "f1746020-d948-4b2d-b91e-ed43cab0b9e8"), C.setAttribute("outsystems.function.owner.name", "PartnersHub"), C.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), C.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ne, "JavaScript1", "EyeButtonHandler", {
                                    eyeButtonId: i.DataConversion.JSNodeParamConverter.to(c.getId("EyeButton"), i.DataTypes.DataTypes.Text),
                                    passwordHiddenIcon: i.DataConversion.JSNodeParamConverter.to(c.getId("HidePassword"), i.DataTypes.DataTypes.Text),
                                    passwordInputId: i.DataConversion.JSNodeParamConverter.to(c.getId("CFDPasswordInput"), i.DataTypes.DataTypes.Text),
                                    passwordVisibleIcon: i.DataConversion.JSNodeParamConverter.to(c.getId("ShowPassword"), i.DataTypes.DataTypes.Text)
                                }, function(v) {}, {}, {})
                            } finally {
                                C && C.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__eyeButtonHandler$Action
        }
        set _eyeButtonHandler$Action(e) {
            this.__eyeButtonHandler$Action = e
        }
        get _closeButtonHandler$Action() {
            return this.hasOwnProperty("__closeButtonHandler$Action") || (this.__closeButtonHandler$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("CloseButtonHandler", function(n) {
                    n && (n.setAttribute("code.function", "CloseButtonHandler"), n.setAttribute("outsystems.function.key", "b382129d-cbda-485b-b0ec-7368c47cce8d"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CloseButtonHandler"), e = t.callContext(e);
                        var C = new i.DataTypes.VariableHolder;
                        C.value = O.sidebarClose$Action(f.getCFDsModalId(), e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__closeButtonHandler$Action
        }
        set _closeButtonHandler$Action(e) {
            this.__closeButtonHandler$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "d72911e0-d32e-47cc-8248-857ca91dc943"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var C = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return C.value = i.Logger.startActiveSpan("GetAuthToken", function(v) {
                                v && (v.setAttribute("code.function", "GetAuthToken"), v.setAttribute("outsystems.function.key", "25a5ed18-bcc0-40d0-8870-d56dce645ff8"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(oe, "GetAuthToken", "OnReady", {
                                        Token: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text)
                                    }, function(y) {
                                        var l = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.OnReady$getAuthTokenJSResult"));
                                        return l.tokenOut = i.DataConversion.JSNodeParamConverter.from(y.Token, i.DataTypes.DataTypes.Text), l
                                    }, {}, {})
                                } finally {
                                    v && v.end()
                                }
                            }, 1), r.flush(), H.cFDCommissionModalFlow$Action(C.value.tokenOut, e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _cFDPasswordInputOnChange$Action() {
            return this.hasOwnProperty("__cFDPasswordInputOnChange$Action") || (this.__cFDPasswordInputOnChange$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("CFDPasswordInputOnChange", function(n) {
                    n && (n.setAttribute("code.function", "CFDPasswordInputOnChange"), n.setAttribute("outsystems.function.key", "f0f6420d-3eaf-4684-92b3-26b6da744d0a"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("CFDPasswordInputOnChange"), e = t.callContext(e);
                        var C = new i.DataTypes.VariableHolder;
                        C.value = i.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "a0a24214-f1da-4023-bf69-9ca9afc3b960"), v.setAttribute("outsystems.function.owner.name", "PartnersHub"), v.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(ie, "JavaScript1", "CFDPasswordInputOnChange", {
                                    password: i.DataConversion.JSNodeParamConverter.to(r.variables.userInputVar, i.DataTypes.DataTypes.Text),
                                    LengthError: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text),
                                    UppercaseAndLowercaseError: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text),
                                    NumberError: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text),
                                    SpecialCharacterError: i.DataConversion.JSNodeParamConverter.to("", i.DataTypes.DataTypes.Text),
                                    RequiredError: i.DataConversion.JSNodeParamConverter.to(!1, i.DataTypes.DataTypes.Boolean)
                                }, function(y) {
                                    var l = new(t.constructor.getVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult"));
                                    return l.lengthErrorOut = i.DataConversion.JSNodeParamConverter.from(y.LengthError, i.DataTypes.DataTypes.Text), l.uppercaseAndLowercaseErrorOut = i.DataConversion.JSNodeParamConverter.from(y.UppercaseAndLowercaseError, i.DataTypes.DataTypes.Text), l.numberErrorOut = i.DataConversion.JSNodeParamConverter.from(y.NumberError, i.DataTypes.DataTypes.Text), l.specialCharacterErrorOut = i.DataConversion.JSNodeParamConverter.from(y.SpecialCharacterError, i.DataTypes.DataTypes.Text), l.requiredErrorOut = i.DataConversion.JSNodeParamConverter.from(y.RequiredError, i.DataTypes.DataTypes.Boolean), l
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), r.variables.cfdCommissionsPasswordErrorsVar.lengthAttr = C.value.lengthErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr = C.value.uppercaseAndLowercaseErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr = C.value.numberErrorOut, r.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr = C.value.specialCharacterErrorOut, r.variables.requiredInputErrorVar = C.value.requiredErrorOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__cFDPasswordInputOnChange$Action
        }
        set _cFDPasswordInputOnChange$Action(e) {
            this.__cFDPasswordInputOnChange$Action = e
        }
        submitHandler$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("SubmitHandler__proxy", function(t) {
                return t && (t.setAttribute("code.function", "SubmitHandler"), t.setAttribute("outsystems.function.key", "33ccdc6d-5f83-4e81-a45c-7f4e92f08556"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._submitHandler$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onToggleSidebar$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnToggleSidebar__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleSidebar"), t.setAttribute("outsystems.function.key", "5a712797-1ea4-48dc-aaf3-64e51aff42ec"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onToggleSidebar$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        sideBarSetModalId$Action(e, r) {
            var t = this.controller;
            return i.Logger.startActiveSpan("SideBarSetModalId__proxy", function(c) {
                c && (c.setAttribute("code.function", "SideBarSetModalId"), c.setAttribute("outsystems.function.key", "7e8f1ef5-8c5c-4008-b7b5-49b59e9f8b89"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._sideBarSetModalId$Action, r, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        okHandler$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OkHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "OkHandler"), t.setAttribute("outsystems.function.key", "9495fee5-304f-4c70-a9d3-abb8d5922f14"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._okHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        tryAgainHandler$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("TryAgainHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "TryAgainHandler"), t.setAttribute("outsystems.function.key", "9ce69f26-e83e-4c3b-93ab-12c31902fef3"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._tryAgainHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        eyeButtonHandler$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("EyeButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "EyeButtonHandler"), t.setAttribute("outsystems.function.key", "b0a6056d-e53f-4698-877f-11494e9bd2e5"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._eyeButtonHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        closeButtonHandler$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("CloseButtonHandler__proxy", function(t) {
                t && (t.setAttribute("code.function", "CloseButtonHandler"), t.setAttribute("outsystems.function.key", "b382129d-cbda-485b-b0ec-7368c47cce8d"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._closeButtonHandler$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "d72911e0-d32e-47cc-8248-857ca91dc943"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        cFDPasswordInputOnChange$Action(e) {
            var r = this.controller;
            return i.Logger.startActiveSpan("CFDPasswordInputOnChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "CFDPasswordInputOnChange"), t.setAttribute("outsystems.function.key", "f0f6420d-3eaf-4684-92b3-26b6da744d0a"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._cFDPasswordInputOnChange$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var r = this.controller,
                    t = this.model,
                    c = this.idService;
                return r.onReady$Action(e)
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
            return H.defaultTimeout
        }
    };
    o(a, "ControllerInner");
    let g = a;
    I = g, I.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript2JSResult", [{
        name: "isCFDPasswordCreationFailed",
        attrName: "isCFDPasswordCreationFailedOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }]), I.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SubmitHandler$javaScript1JSResult", [{
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.SideBarSetModalId$vars", [{
        name: "ModalId",
        attrName: "modalIdInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.OnReady$getAuthTokenJSResult", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("PartnersHub.CFDs.CFDCommissionsModal.CFDPasswordInputOnChange$javaScript1JSResult", [{
        name: "LengthError",
        attrName: "lengthErrorOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "UppercaseAndLowercaseError",
        attrName: "uppercaseAndLowercaseErrorOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "NumberError",
        attrName: "numberErrorOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SpecialCharacterError",
        attrName: "specialCharacterErrorOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Text,
        defaultValue: o(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "RequiredError",
        attrName: "requiredErrorOut",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Boolean,
        defaultValue: o(function() {
            return !1
        }, "defaultValue")
    }])
}
var I, Oe = new i.Controller.ControllerFactory(I, N);
var V = S,
    ae = E.PlaceholderContent,
    _r = E.IteratorPlaceholderContent,
    k = class k extends x.BaseWebBlock {
        static get displayName() {
            return "CFDs.CFDCommissionsModal"
        }
        static getAttributes() {
            return {
                codeFunction: "CFDCommissionsModal",
                functionKey: "3ed098a3-b19e-4e15-9db5-0c4360b2963c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.CFDs.CFDCommissionsModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [q, b, $]
        }
        get modelFactory() {
            return ge
        }
        get controllerFactory() {
            return Oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                m = this.controller,
                e = this.idService,
                r = m.validationService,
                t = this.widgetsRecordProvider,
                c = m.callContext(),
                n = k.ifWidget,
                C = k.textWidget,
                v = k.asPrimitiveValue,
                y = k.getTranslation,
                l = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(q, {
                getOwnerSpan: o(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: o(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    FooterInfo: a.getCachedValue(e.getId("gaYdsQI1P0KfVe44QwZicQ.FooterInfo"), function() {
                        return function() {
                            var s = new le;
                            return s
                        }()
                    }),
                    HasCustomButton: !0,
                    IsSidebarOpen: f.getshowCFDCommissionModal(),
                    ContentClassName: "cfd-commissions-modal-body",
                    HeaderInfo: a.getCachedValue(e.getId("gaYdsQI1P0KfVe44QwZicQ.HeaderInfo"), function() {
                        return function() {
                            var s = new ue;
                            return s.customRightIconAttr = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M16.125 16.875L12 12.7188L7.84375 16.875C7.65625 17.0625 7.34375 17.0625 7.125 16.875C6.9375 16.6562 6.9375 16.3438 7.125 16.1562L11.2812 12L7.15625 7.875C6.9375 7.6875 6.9375 7.375 7.15625 7.15625C7.34375 6.96875 7.65625 6.96875 7.84375 7.15625L12 11.3125L16.125 7.15625C16.3125 6.96875 16.625 6.96875 16.8438 7.15625C17.0312 7.375 17.0312 7.6875 16.8438 7.875L12.6875 12L16.8438 16.1562C17.0312 16.3438 17.0312 16.6562 16.8438 16.875C16.625 17.0625 16.3125 17.0625 16.125 16.875Z" fill="black" fill-opacity="0.72"/>\r
</svg>`, s.showLeftButtonAttr = !1, s.showRightButtonAttr = !0, s.titleAttr = "Enable CFDs commissions", s
                        }()
                    })
                },
                events: {
                    _handleError: o(function(s) {
                        m.handleError(s)
                    }, "_handleError"),
                    toggleSidebar$Action: o(function(s, u) {
                        var w = c.clone();
                        m.onToggleSidebar$Action(m.callContext(w))
                    }, "toggleSidebar$Action"),
                    headerRightButtonAction$Action: o(function() {
                        var s = c.clone();
                        m.closeButtonHandler$Action(m.callContext(s))
                    }, "headerRightButtonAction$Action"),
                    setModalId$Action: o(function(s) {
                        var u = c.clone();
                        m.sideBarSetModalId$Action(s, m.callContext(u))
                    }, "setModalId$Action")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    customHeader: ae.Empty,
                    bodyContent: new ae(function() {
                        return [d.createElement(P, {
                            align: 0,
                            animate: !1,
                            style: "cfd-commissions-modal-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "content"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("PasswordScreen.class"), function() {
                                    return f.getisCFDPasswordCreationFailed() === !0 || f.getisCFDPasswordCreationSucceeded() === !0 ? "hidden" : ""
                                }, function() {
                                    return f.getisCFDPasswordCreationFailed()
                                }, function() {
                                    return f.getisCFDPasswordCreationSucceeded()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "PasswordScreen"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(R, {
                            style: "cfd-commissions-modal-text font-size-s display-block",
                            text: ["Your MT5 account is ready for receiving commissions. Set a password to enable it."],
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(J, {
                            extendedProperties: {
                                className: "font-size-s margin-bottom-s password-input-label"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(R, {
                            text: ["Password"],
                            _idProps: {
                                service: e,
                                name: "InputLabel"
                            },
                            _widgetRecordProvider: t
                        })), d.createElement(P, {
                            align: 0,
                            animate: !1,
                            style: "padding-bottom-base",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: "password-input"
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "InputField"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(fe, {
                            _validationProps: {
                                validationService: r
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 25,
                            onChange: o(function() {
                                var s = c.clone();
                                m.cFDPasswordInputOnChange$Action(m.callContext(s))
                            }, "onChange"),
                            prompt: "Enter your password",
                            style: a.getCachedValue(e.getId("CFDPasswordInput.Style"), function() {
                                return a.variables.requiredInputErrorVar ? "form-control padding-right-xxl not-valid" : "form-control padding-right-xxl"
                            }, function() {
                                return a.variables.requiredInputErrorVar
                            }),
                            variable: a.createVariable(V.DataTypes.DataTypes.Text, a.variables.userInputVar, function(s) {
                                a.variables.userInputVar = s
                            }),
                            _idProps: {
                                service: e,
                                name: "CFDPasswordInput"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(h, {
                            extendedEvents: {
                                onClick: o(function() {
                                    var s = c.clone();
                                    m.eyeButtonHandler$Action(m.callContext(s))
                                }, "onClick")
                            },
                            extendedProperties: {
                                className: "password-input-button"
                            },
                            tag: "button",
                            _idProps: {
                                service: e,
                                name: "EyeButton"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: "hidden"
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "HidePassword"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="M9.32 11.813C7.64 13.375 6.508 15.25 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c2.734 0 4.96-1.25 6.64-2.812 1.68-1.563 2.813-3.438 3.36-4.688-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-2.773 0-5 1.25-6.68 2.813M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-3.75 8.75c0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281 0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242m8.75 0c0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0A4.97 4.97 0 0 1 11 16.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297"></path></svg>'
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ShowPassword"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" role="img"><path d="m4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5"></path></svg>'
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "13",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })))), n(a.variables.requiredInputErrorVar, !1, this, function() {
                            return [d.createElement(R, {
                                extendedProperties: {
                                    className: "font-size-xs margin-top-s display-block password-input-error"
                                },
                                text: ["Password is required."],
                                _idProps: {
                                    service: e,
                                    name: "RequiredErrorOnSubmit"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: "cfd-commissions-password-policy"
                            },
                            tag: "ul",
                            _idProps: {
                                service: e,
                                name: "Validations"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("4g6BY5kaa0WX_FwBJqokBg.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false" ? "cfd-input-validation valid" : a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("ErrorIcon.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "18",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("SuccessIcon.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "20",
                                alias: "5"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("OutlineIcon.class"), function() {
                                    return V.BuiltinFunctions.length(a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "22",
                                alias: "6"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }, "8\u201325 characters long")), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("Mri_HZEegkmyoDpEbszaPw.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false" ? "cfd-input-validation valid" : a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("ErrorIcon2.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon2"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "26",
                                alias: "7"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("SuccessIcon2.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon2"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "28",
                                alias: "8"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("OutlineIcon2.class"), function() {
                                    return V.BuiltinFunctions.length(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon2"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "30",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, "At least one uppercase and one lowercase letter")), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("QMibd+0FZESCvOe7b2HM+A.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false" ? "cfd-input-validation valid" : a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("ErrorIcon3.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon3"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "34",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("SuccessIcon3.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon3"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "36",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("OutlineIcon3.class"), function() {
                                    return V.BuiltinFunctions.length(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon3"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "38",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: t
                        }, "At least one number")), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("E7sKJY+FXUeVAT1O1Q2z0A.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false" ? "cfd-input-validation valid" : a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true" ? "cfd-input-validation not-valid" : "cfd-input-validation"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("ErrorIcon4.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "true" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "ErrorIcon4"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM4.10156 4.60156C3.86719 4.83594 3.86719 5.1875 4.10156 5.39844L5.20312 6.5L4.10156 7.60156C3.86719 7.83594 3.86719 8.1875 4.10156 8.39844C4.3125 8.63281 4.66406 8.63281 4.875 8.39844L5.97656 7.29688L7.07812 8.39844C7.3125 8.63281 7.66406 8.63281 7.875 8.39844C8.10938 8.1875 8.10938 7.83594 7.875 7.60156L6.77344 6.5L7.875 5.39844C8.10938 5.1875 8.10938 4.83594 7.875 4.60156C7.66406 4.39062 7.3125 4.39062 7.07812 4.60156L5.97656 5.70312L4.875 4.60156C4.66406 4.39062 4.3125 4.39062 4.10156 4.60156Z" fill="#DC2020"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "42",
                                alias: "13"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("SuccessIcon4.class"), function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr === "false" ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "SuccessIcon4"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 12.5C3.84375 12.5 1.875 11.375 0.796875 9.5C-0.28125 7.64844 -0.28125 5.375 0.796875 3.5C1.875 1.64844 3.84375 0.5 6 0.5C8.13281 0.5 10.1016 1.64844 11.1797 3.5C12.2578 5.375 12.2578 7.64844 11.1797 9.5C10.1016 11.375 8.13281 12.5 6 12.5ZM8.64844 5.39844H8.625C8.85938 5.1875 8.85938 4.83594 8.625 4.60156C8.41406 4.39062 8.0625 4.39062 7.85156 4.60156L5.25 7.22656L4.14844 6.125C3.91406 5.89062 3.5625 5.89062 3.35156 6.125C3.11719 6.33594 3.11719 6.6875 3.35156 6.89844L4.85156 8.39844C5.0625 8.63281 5.41406 8.63281 5.64844 8.39844L8.64844 5.39844Z" fill="#29823B"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "44",
                                alias: "14"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("OutlineIcon4.class"), function() {
                                    return V.BuiltinFunctions.length(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr) === 0 ? "display-block" : "hidden"
                                }, function() {
                                    return a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr
                                })
                            },
                            tag: "span",
                            _idProps: {
                                service: e,
                                name: "OutlineIcon4"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(b, {
                            getOwnerSpan: o(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: o(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SVGCode: `<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M10.875 6.5C10.875 4.76562 9.9375 3.17188 8.4375 2.28125C6.91406 1.41406 5.0625 1.41406 3.5625 2.28125C2.03906 3.17188 1.125 4.76562 1.125 6.5C1.125 8.25781 2.03906 9.85156 3.5625 10.7422C5.0625 11.6094 6.91406 11.6094 8.4375 10.7422C9.9375 9.85156 10.875 8.25781 10.875 6.5ZM0 6.5C0 4.36719 1.125 2.39844 3 1.32031C4.85156 0.242188 7.125 0.242188 9 1.32031C10.8516 2.39844 12 4.36719 12 6.5C12 8.65625 10.8516 10.625 9 11.7031C7.125 12.7812 4.85156 12.7812 3 11.7031C1.125 10.625 0 8.65625 0 6.5Z" fill="black" fill-opacity="0.72"/>\r
</svg>`
                            },
                            events: {
                                _handleError: o(function(s) {
                                    m.handleError(s)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: e,
                                uuid: "46",
                                alias: "15"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), d.createElement(h, {
                            extendedProperties: {
                                className: "font-size-xs margin-none"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: t
                        }, "At least one special character")))), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("FailedScreen.class"), function() {
                                    return f.getisCFDPasswordCreationFailed() === !0 ? "cfd-commissions-modal-screen" : "hidden"
                                }, function() {
                                    return f.getisCFDPasswordCreationFailed()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "FailedScreen"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(F, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-img"
                            },
                            image: V.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.SpreadRisks.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(h, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-heading"
                            },
                            tag: "h4",
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: t
                        }, "Password creation failed"), d.createElement(h, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-text"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: t
                        }, "There was an issue creating your password.")), d.createElement(h, {
                            extendedProperties: {
                                className: a.getCachedValue(e.getId("SuccessScreen.class"), function() {
                                    return f.getisCFDPasswordCreationSucceeded() === !0 ? "cfd-commissions-modal-screen" : "hidden"
                                }, function() {
                                    return f.getisCFDPasswordCreationSucceeded()
                                })
                            },
                            tag: "div",
                            _idProps: {
                                service: e,
                                name: "SuccessScreen"
                            },
                            _widgetRecordProvider: t
                        }, d.createElement(F, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-img"
                            },
                            image: V.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.twentyfourhourstrading.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: t
                        }), d.createElement(h, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-heading"
                            },
                            tag: "h4",
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: t
                        }, "Almost there"), d.createElement(h, {
                            extendedProperties: {
                                className: "cfd-commissions-modal-screen-text"
                            },
                            tag: "p",
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: t
                        }, "Your account manager will contact you soon.")))]
                    }),
                    customButton: new ae(function() {
                        return [n(f.getisCFDPasswordCreationFailed() === !1 && f.getisCFDPasswordCreationSucceeded() === !1, !1, this, function() {
                            return [d.createElement($, {
                                getOwnerSpan: o(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "Set up password",
                                    borderRadius: "35px",
                                    Width: "100%",
                                    enabled: a.variables.isSubmittingVar === !1,
                                    isLoading: a.variables.isSubmittingVar
                                },
                                events: {
                                    _handleError: o(function(s) {
                                        m.handleError(s)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        return Promise.resolve().then(function() {
                                            var s = c.clone();
                                            return m.submitHandler$Action(m.callContext(s))
                                        })
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "SubmitButton2",
                                    alias: "16"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), n(f.getisCFDPasswordCreationFailed() === !0, !1, this, function() {
                            return [d.createElement($, {
                                getOwnerSpan: o(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "Try again",
                                    borderRadius: "35px",
                                    Width: "100%"
                                },
                                events: {
                                    _handleError: o(function(s) {
                                        m.handleError(s)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        var s = c.clone();
                                        m.tryAgainHandler$Action(m.callContext(s))
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "TryAgainButton2",
                                    alias: "17"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), n(f.getisCFDPasswordCreationSucceeded() === !0, !1, this, function() {
                            return [d.createElement($, {
                                getOwnerSpan: o(function() {
                                    return l.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: o(function() {
                                    return l.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    title: "OK",
                                    Width: "100%",
                                    borderRadius: "35px"
                                },
                                events: {
                                    _handleError: o(function(s) {
                                        m.handleError(s)
                                    }, "_handleError"),
                                    onClick$Action: o(function() {
                                        var s = c.clone();
                                        m.okHandler$Action(m.callContext(s))
                                    }, "onClick$Action")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: e,
                                    name: "OkButton2",
                                    alias: "18"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        })]
                    })
                },
                _dependencies: [v(a.variables.isSubmittingVar), v(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneSpecialCharacterAttr), v(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneNumberAttr), v(a.variables.cfdCommissionsPasswordErrorsVar.hasAtLeastOneUppercaseAndOneLowercaseAttr), v(a.variables.cfdCommissionsPasswordErrorsVar.lengthAttr), v(a.variables.requiredInputErrorVar), v(a.variables.userInputVar), v(f.getisCFDPasswordCreationSucceeded()), v(f.getisCFDPasswordCreationFailed())]
            }))
        }
    };
o(k, "View");
var se = k,
    Ar = se;
export {
    it as a, Vt as b, Ar as c
};