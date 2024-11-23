import {
    a as K,
    b as Q
} from "./_oschunk-2W2LLOSV.js";
import {
    a as G
} from "./_oschunk-C3DTS2R4.js";
import {
    a as k
} from "./_oschunk-NQ24OQU5.js";
import "./_oschunk-CXNBRKWX.js";
import "./_oschunk-KPHXUNYC.js";
import {
    a as I
} from "./_oschunk-DJKPIQCU.js";
import {
    a as T
} from "./_oschunk-3FJD3ZUN.js";
import "./_oschunk-GPU7XYUR.js";
import {
    a as H
} from "./_oschunk-FO4UPS6K.js";
import "./_oschunk-XLHEEBMK.js";
import "./_oschunk-QLPTYLG6.js";
import "./_oschunk-ANY3DTL7.js";
import {
    a as x
} from "./_oschunk-NCLFVAQF.js";
import {
    a as V
} from "./_oschunk-QCCZFQH6.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as v,
    n as y,
    o as U,
    u as M
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as W
} from "./_oschunk-6WALBPGV.js";
import {
    a as J,
    g as h,
    i as w
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-CMUJJDSY.js";
import {
    o as B,
    p as O
} from "./_oschunk-DW3HXDMW.js";
import "./_oschunk-PNRBOTIK.js";
import "./_oschunk-JXJHSAQS.js";
import {
    ia as _
} from "./_oschunk-5KJVGEL7.js";
import {
    c as r,
    h as D
} from "./_oschunk-QHO7QY6K.js";
var l = D(J());
var f = D(J());
var q = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"
    },
    X = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Passwort"
    },
    Z = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Contrase\xF1a"
    },
    ee = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Mot de passe"
    },
    te = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Password"
    },
    re = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Has\u0142o"
    },
    ne = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "Palavra-passe"
    },
    ie = {
        "HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1": "\u041F\u0430\u0440\u043E\u043B\u044C"
    },
    z = {
        "ar-001": {
            translations: q,
            isRTL: !0
        },
        "de-DE": {
            translations: X,
            isRTL: !1
        },
        "es-ES": {
            translations: Z,
            isRTL: !1
        },
        "fr-FR": {
            translations: ee,
            isRTL: !1
        },
        "it-IT": {
            translations: te,
            isRTL: !1
        },
        "pl-PL": {
            translations: re,
            isRTL: !1
        },
        "pt-PT": {
            translations: ne,
            isRTL: !1
        },
        "ru-RU": {
            translations: ie,
            isRTL: !1
        }
    };
var u = _; {
    let d = class d extends u.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, z);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _createPasswordOnClick$Action() {
            return this.hasOwnProperty("__createPasswordOnClick$Action") || (this.__createPasswordOnClick$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("CreatePasswordOnClick", function(o) {
                    return o && (o.setAttribute("code.function", "CreatePasswordOnClick"), o.setAttribute("outsystems.function.key", "07d87a4c-1d72-4075-9b84-801e36471b6b"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("CreatePasswordOnClick"), e = t.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return t.onSubmit$Action(n.variables.createPasswordVar.passwordAttr, e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__createPasswordOnClick$Action
        }
        set _createPasswordOnClick$Action(e) {
            this.__createPasswordOnClick$Action = e
        }
        get _onPasswordCompliant$Action() {
            return this.hasOwnProperty("__onPasswordCompliant$Action") || (this.__onPasswordCompliant$Action = function(e, n) {
                var t = this.model,
                    a = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("OnPasswordCompliant", function(m) {
                    m && (m.setAttribute("code.function", "OnPasswordCompliant"), m.setAttribute("outsystems.function.key", "332e8476-398f-4617-baa9-7ae339642229"), m.setAttribute("outsystems.function.owner.name", "PartnersHub"), m.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnPasswordCompliant"), n = a.callContext(n);
                        var p = new u.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.OnPasswordCompliant$vars")));
                        p.value.isValidInLocal = e, t.variables.isPasswordValidVar = p.value.isValidInLocal
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onPasswordCompliant$Action
        }
        set _onPasswordCompliant$Action(e) {
            this.__onPasswordCompliant$Action = e
        }
        get _onTogglePasswordVisibility$Action() {
            return this.hasOwnProperty("__onTogglePasswordVisibility$Action") || (this.__onTogglePasswordVisibility$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("OnTogglePasswordVisibility", function(o) {
                    o && (o.setAttribute("code.function", "OnTogglePasswordVisibility"), o.setAttribute("outsystems.function.key", "3e4378b8-5217-495f-8754-58dfc9009d99"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnTogglePasswordVisibility"), e = t.callContext(e);
                        var m = new u.DataTypes.VariableHolder;
                        n.variables.isPasswordVisibleVar = !n.variables.isPasswordVisibleVar, m.value = B.showPassword$Action(a.getId("CreatePasswordField"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onTogglePasswordVisibility$Action
        }
        set _onTogglePasswordVisibility$Action(e) {
            this.__onTogglePasswordVisibility$Action = e
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    a = this.idService;
                return u.Logger.startActiveSpan("OnRender", function(o) {
                    o && (o.setAttribute("code.function", "OnRender"), o.setAttribute("outsystems.function.key", "c755cedb-2298-4b59-8422-9fea32f38add"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e), O.useDevice$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        createPasswordOnClick$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("CreatePasswordOnClick__proxy", function(t) {
                return t && (t.setAttribute("code.function", "CreatePasswordOnClick"), t.setAttribute("outsystems.function.key", "07d87a4c-1d72-4075-9b84-801e36471b6b"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._createPasswordOnClick$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onPasswordCompliant$Action(e, n) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnPasswordCompliant__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnPasswordCompliant"), a.setAttribute("outsystems.function.key", "332e8476-398f-4617-baa9-7ae339642229"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onPasswordCompliant$Action, n, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onTogglePasswordVisibility$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnTogglePasswordVisibility__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnTogglePasswordVisibility"), t.setAttribute("outsystems.function.key", "3e4378b8-5217-495f-8754-58dfc9009d99"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onTogglePasswordVisibility$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onRender$Action(e) {
            var n = this.controller;
            return u.Logger.startActiveSpan("OnRender__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "c755cedb-2298-4b59-8422-9fea32f38add"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onRender$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onSubmit$Action() {
            return this.hasOwnProperty("_onSubmit$Action") || (this._onSubmit$Action = function() {
                return Promise.resolve()
            }), this._onSubmit$Action
        }
        set onSubmit$Action(e) {
            this._onSubmit$Action = e
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
    r(d, "ControllerInner");
    let R = d;
    $ = R, $.registerVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePasswordBlock.OnPasswordCompliant$vars", [{
        name: "IsValid",
        attrName: "isValidInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Boolean,
        defaultValue: r(function() {
            return !1
        }, "defaultValue")
    }])
}
var $, Y = new u.Controller.ControllerFactory($, W);
var C = _,
    j = w.PlaceholderContent,
    xe = w.IteratorPlaceholderContent,
    P = class P extends h.BaseWebBlock {
        static get displayName() {
            return "VirtualAccountCreation.CreatePasswordBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "CreatePasswordBlock",
                functionKey: "b113dab6-e06d-4b5d-96aa-d6f83607a2b9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.VirtualAccountCreation.CreatePasswordBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [x, I, V]
        }
        get modelFactory() {
            return K
        }
        get controllerFactory() {
            return Y
        }
        get title() {
            return ""
        }
        internalRender() {
            let d = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                a = s.callContext(),
                o = P.ifWidget,
                m = P.textWidget,
                p = P.asPrimitiveValue,
                F = P.getTranslation,
                c = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; padding: 0px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, f.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-top: 0px;"
                },
                style: "password-input",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, f.createElement(x, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    AlignIconRight: !0
                },
                events: {
                    _handleError: r(function(i) {
                        s.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    name: "CreatePasswordField",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    icon: new j(function() {
                        return [f.createElement(y, {
                            extendedEvents: {
                                onClick: r(function() {
                                    var i = a.clone();
                                    s.onTogglePasswordVisibility$Action(s.callContext(i))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "cursor: pointer; font-size: 18px; height: 18px; margin-right: 10px;"
                            },
                            gridProperties: {
                                width: "18px"
                            },
                            image: C.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.ic_eye.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    input: new j(function() {
                        return [f.createElement(U, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            extendedEvents: {
                                onFocus: r(function() {
                                    var i = a.clone();
                                    s.onRender$Action(s.callContext(i))
                                }, "onFocus")
                            },
                            extendedProperties: {
                                style: "border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 4px; height: 50px; margin-bottom: 16px; margin-top: 16px; padding: 5px 16px 5px 16px;"
                            },
                            gridProperties: {
                                width: "100%"
                            },
                            inputType: 1,
                            mandatory: !0,
                            maxLength: 0,
                            prompt: C.Injector.resolve(C.ServiceNames.TranslationsService).getMessage("HGRdi3QCaE6JIdJ3CeVYKA#ValueExpression.1281629883.1", "Password"),
                            style: d.getCachedValue(e.getId("MobilePasswordField.Style"), function() {
                                return C.BuiltinFunctions.length(d.variables.createPasswordVar.passwordAttr) === 0 ? "password-input__field" : d.variables.isPasswordValidVar ? "password-input__field password-input__field--success" : "password-input__field password-input__field--failure"
                            }, function() {
                                return d.variables.createPasswordVar.passwordAttr
                            }, function() {
                                return d.variables.isPasswordValidVar
                            }),
                            variable: d.createVariable(C.DataTypes.DataTypes.Text, d.variables.createPasswordVar.passwordAttr, function(i) {
                                d.variables.createPasswordVar.passwordAttr = i
                            }),
                            _idProps: {
                                service: e,
                                name: "MobilePasswordField"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [p(d.variables.isPasswordValidVar), p(d.variables.createPasswordVar.passwordAttr)]
            })), f.createElement(I, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HasAtLeastOneSpecialCharacter: !1,
                    Length: 8,
                    Password: d.variables.createPasswordVar.passwordAttr
                },
                events: {
                    _handleError: r(function(i) {
                        s.handleError(i)
                    }, "_handleError"),
                    compliant$Action: r(function(i) {
                        var b = a.clone();
                        s.onPasswordCompliant$Action(i, s.callContext(b))
                    }, "compliant$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), f.createElement(V, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    isLoading: d.variables.isLoadingIn,
                    _isLoadingInDataFetchStatus: C.Model.calculateDataFetchStatus(d.variables._isLoadingInDataFetchStatus),
                    enabled: d.variables.isPasswordValidVar,
                    class: "create-password-button",
                    borderRadius: "50px",
                    Width: "100%",
                    title: "Create password"
                },
                events: {
                    _handleError: r(function(i) {
                        s.handleError(i)
                    }, "_handleError"),
                    onClick$Action: r(function() {
                        return Promise.resolve().then(function() {
                            var i = a.clone();
                            return s.createPasswordOnClick$Action(s.callContext(i))
                        })
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "6",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })))
        }
    };
r(P, "View");
var L = P,
    S = L;
var E = _,
    A = w.PlaceholderContent,
    Ke = w.IteratorPlaceholderContent,
    g = class g extends h.BaseWebScreen {
        static get displayName() {
            return "VirtualAccountCreation.CreatePassword"
        }
        static getAttributes() {
            return {
                codeFunction: "CreatePassword",
                functionKey: "d269ebb2-ae02-4a08-bdd5-36804a29f409",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.VirtualAccountCreation.CreatePassword.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [k, H, S, T]
        }
        get modelFactory() {
            return Q
        }
        get controllerFactory() {
            return G
        }
        get title() {
            return h.BaseWebScreen.getTranslation("sutp0gKuCEq91TaASin0CQ#Title", "CreatePassword")
        }
        internalRender() {
            let d = this.model,
                s = this.controller,
                e = this.idService,
                n = s.validationService,
                t = this.widgetsRecordProvider,
                a = s.callContext(),
                o = g.ifWidget,
                m = g.textWidget,
                p = g.asPrimitiveValue,
                F = g.getTranslation,
                c = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(k, {
                getOwnerSpan: r(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    BackgroundColor: "white",
                    HasHeader: !1
                },
                events: {
                    _handleError: r(function(i) {
                        s.handleError(i)
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
                    mainContent: new A(function() {
                        return [l.createElement(H, {
                            getOwnerSpan: r(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(i) {
                                    s.handleError(i)
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
                            placeholders: {
                                desktopContent: new A(function() {
                                    return [l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "LogoContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(y, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "286px"
                                        },
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    })), l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; background-color: #F8F9FA; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "392px"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(y, {
                                        extendedEvents: {
                                            onClick: r(function() {
                                                var i = a.clone();
                                                s.onClickBack$Action(s.callContext(i))
                                            }, "onClick")
                                        },
                                        extendedProperties: {
                                            style: "cursor: pointer; height: 34px; margin-right: 16px; margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            width: "14px"
                                        },
                                        image: E.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }), l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "display: flex; flex-direction: column;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "100%"
                                        },
                                        style: "country-of-residence-dropdown",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(v, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 0px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "HeaderContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, l.createElement(M, {
                                        extendedProperties: {
                                            style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                                        },
                                        text: [m(F("yALQS6L4p0ikr4zVTXq2zw#Value", "Password"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: t
                                    })), l.createElement(S, {
                                        getOwnerSpan: r(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            isLoading: d.variables.isLoadingVar
                                        },
                                        events: {
                                            _handleError: r(function(i) {
                                                s.handleError(i)
                                            }, "_handleError"),
                                            onSubmit$Action: r(function(i) {
                                                return Promise.resolve().then(function() {
                                                    var b = a.clone();
                                                    return s.onSubmit$Action(i, s.callContext(b))
                                                })
                                            }, "onSubmit$Action")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "11",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })))))]
                                }),
                                tabletContent: A.Empty,
                                mobileContent: new A(function() {
                                    return [l.createElement(T, {
                                        getOwnerSpan: r(function() {
                                            return c.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return c.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Title: E.Injector.resolve(E.ServiceNames.TranslationsService).getMessage("PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1", "Password"),
                                            HasBackButton: !0,
                                            HasCloseIcon: !1
                                        },
                                        events: {
                                            _handleError: r(function(i) {
                                                s.handleError(i)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: n
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "12",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            content: new A(function() {
                                                return [l.createElement(v, {
                                                    align: 0,
                                                    animate: !1,
                                                    extendedProperties: {
                                                        style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: 100dvh; padding: 16px;"
                                                    },
                                                    visible: !0,
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "13"
                                                    },
                                                    _widgetRecordProvider: t
                                                }, l.createElement(S, {
                                                    getOwnerSpan: r(function() {
                                                        return c.getChildSpan("render")
                                                    }, "getOwnerSpan"),
                                                    getOwnerDisposeSpan: r(function() {
                                                        return c.getChildSpan("destroy")
                                                    }, "getOwnerDisposeSpan"),
                                                    inputs: {
                                                        isLoading: d.variables.isLoadingVar
                                                    },
                                                    events: {
                                                        _handleError: r(function(i) {
                                                            s.handleError(i)
                                                        }, "_handleError"),
                                                        onSubmit$Action: r(function(i) {
                                                            return Promise.resolve().then(function() {
                                                                var b = a.clone();
                                                                return s.onSubmit$Action(i, s.callContext(b))
                                                            })
                                                        }, "onSubmit$Action")
                                                    },
                                                    _validationProps: {
                                                        validationService: n
                                                    },
                                                    _idProps: {
                                                        service: e,
                                                        uuid: "14",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    _dependencies: []
                                                }))]
                                            })
                                        },
                                        _dependencies: [p(d.variables.isLoadingVar)]
                                    })]
                                })
                            },
                            _dependencies: [p(d.variables.isLoadingVar)]
                        })]
                    })
                },
                _dependencies: [p(d.variables.isLoadingVar)]
            }))
        }
    };
r(g, "View");
var N = g,
    Qe = N;
export {
    Qe as
    default
};