import {
    a as y
} from "./_oschunk-4KUIOJTQ.js";
import {
    a as P
} from "./_oschunk-3DUHVNXP.js";
import {
    a as x
} from "./_oschunk-OQXPOKCG.js";
import {
    h as u,
    j as b,
    r as C,
    u as k,
    w as I,
    y as H
} from "./_oschunk-42NACYKQ.js";
import {
    a as T
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as V,
    g as O,
    i as A
} from "./_oschunk-RKYF3TWC.js";
import {
    a as s,
    c as R
} from "./_oschunk-DOFMR6EA.js";
import {
    a as w
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as g
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as N
} from "./_oschunk-DVBKI63I.js";
var i = N(V());
var z = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "\u0642\u0645 \u0628\u0625\u062F\u062E\u0627\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u062D\u0633\u0627\u0628\u0643 \u0644\u0625\u062C\u0631\u0627\u0621 \u0623\u0648\u0644 \u0625\u064A\u062F\u0627\u0639."
    },
    W = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "F\xFCllen Sie Ihre Kontodaten aus, um Ihre erste Einzahlung zu t\xE4tigen."
    },
    M = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "Rellene los detalles de su cuenta para hacer su primer dep\xF3sito."
    },
    K = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "Remplissez les d\xE9tails de votre compte pour effectuer votre premier d\xE9p\xF4t."
    },
    q = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "Compila i dettagli del tuo conto per effettuare il tuo primo deposito."
    },
    Y = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "Wype\u0142nij dane swojego konta, aby dokona\u0107 pierwszej wp\u0142aty."
    },
    Z = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "Preencha os dados da sua conta para efetuar o seu primeiro dep\xF3sito."
    },
    U = {
        "R2tYdO6LDkqZS4pTBKCxSA#Value": "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442."
    },
    F = {
        "ar-001": {
            translations: z,
            isRTL: !0
        },
        "de-DE": {
            translations: W,
            isRTL: !1
        },
        "es-ES": {
            translations: M,
            isRTL: !1
        },
        "fr-FR": {
            translations: K,
            isRTL: !1
        },
        "it-IT": {
            translations: q,
            isRTL: !1
        },
        "pl-PL": {
            translations: Y,
            isRTL: !1
        },
        "pt-PT": {
            translations: Z,
            isRTL: !1
        },
        "ru-RU": {
            translations: U,
            isRTL: !1
        }
    };
var c = g; {
    let n = class n extends c.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, F);
            var v = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _redirectToRealAccountCreation$Action() {
            return this.hasOwnProperty("__redirectToRealAccountCreation$Action") || (this.__redirectToRealAccountCreation$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    v = this.idService;
                return c.Logger.startActiveSpan("RedirectToRealAccountCreation", function(r) {
                    r && (r.setAttribute("code.function", "RedirectToRealAccountCreation"), r.setAttribute("outsystems.function.key", "2f0022c0-cadf-4075-b2df-ba4345353e5c"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return t.ensureControllerAlive("RedirectToRealAccountCreation"), e = t.callContext(e), s.setInitializeRealSignup(!0), c.Navigation.navigateTo(c.Navigation.generateScreenURL("tradershub", "currency-selection", {}), c.Transitions.createTransition(c.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__redirectToRealAccountCreation$Action
        }
        set _redirectToRealAccountCreation$Action(e) {
            this.__redirectToRealAccountCreation$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var o = this.model,
                    t = this.controller,
                    v = this.idService;
                return c.Logger.startActiveSpan("OnInitialize", function(r) {
                    r && (r.setAttribute("code.function", "OnInitialize"), r.setAttribute("outsystems.function.key", "bd06f36a-bae6-4ef6-be1a-ff7c6c8aa6bf"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var m = new c.DataTypes.VariableHolder;
                        s.getOnInitialPageLoad() && (m.value = R.getWalletsAccountsList$Action(e), s.setNoRealAccount(!m.value.hasRealAccountOut), s.setOnInitialPageLoad(!1), s.getNoRealAccount() ? s.setAccountType("demo") : s.setAccountType("real"))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        redirectToRealAccountCreation$Action(e) {
            var o = this.controller;
            return c.Logger.startActiveSpan("RedirectToRealAccountCreation__proxy", function(t) {
                t && (t.setAttribute("code.function", "RedirectToRealAccountCreation"), t.setAttribute("outsystems.function.key", "2f0022c0-cadf-4075-b2df-ba4345353e5c"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._redirectToRealAccountCreation$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var o = this.controller;
            return c.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "bd06f36a-bae6-4ef6-be1a-ff7c6c8aa6bf"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onRealClick$Action() {
            return this.hasOwnProperty("_onRealClick$Action") || (this._onRealClick$Action = function() {
                return Promise.resolve()
            }), this._onRealClick$Action
        }
        set onRealClick$Action(e) {
            this._onRealClick$Action = e
        }
        get onDemoClick$Action() {
            return this.hasOwnProperty("_onDemoClick$Action") || (this._onDemoClick$Action = function() {
                return Promise.resolve()
            }), this._onDemoClick$Action
        }
        set onDemoClick$Action(e) {
            this._onDemoClick$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var o = this.controller,
                    t = this.model,
                    v = this.idService;
                return o.onInitialize$Action(e)
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
            return R.defaultTimeout
        }
    };
    a(n, "ControllerInner");
    let p = n;
    D = p
}
var D, L = new c.Controller.ControllerFactory(D, T);
var h = g,
    $ = A.PlaceholderContent,
    ve = A.IteratorPlaceholderContent,
    f = class f extends O.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.PageHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "PageHeader",
                functionKey: "4a668908-ad74-4a1f-a836-c130c6dacbf1",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.PageHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [P, y]
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return L
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                l = this.controller,
                e = this.idService,
                o = l.validationService,
                t = this.widgetsRecordProvider,
                v = l.callContext(),
                r = f.ifWidget,
                m = f.textWidget,
                E = f.asPrimitiveValue,
                B = f.getTranslation,
                _ = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, i.createElement(k, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                onClick: a(function() {
                    var d = v.clone();
                    l.redirectToRealAccountCreation$Action(l.callContext(d))
                }, "onClick"),
                style: "account-activation-banner",
                visible: n.getCachedValue(e.getId("ActivateRealAccountBanner.Visible"), function() {
                    return s.getNoRealAccount() && s.getAuthToken() !== h.BuiltinFunctions.nullTextIdentifier()
                }, function() {
                    return s.getNoRealAccount()
                }, function() {
                    return s.getAuthToken()
                }),
                _idProps: {
                    service: e,
                    name: "ActivateRealAccountBanner"
                },
                _widgetRecordProvider: t
            }, i.createElement(H, {
                extendedProperties: {
                    style: "color: #101213; font-weight: 400;"
                },
                text: [m(B("R2tYdO6LDkqZS4pTBKCxSA#Value", "Fill in your account details to make your first deposit."))],
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }), i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "padding: 0 11px;"
                },
                gridProperties: {
                    marginLeft: "4px"
                },
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "ChevronIcon"
                },
                _widgetRecordProvider: t
            }, i.createElement(C, {
                image: h.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }))), i.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-bottom: 0px;"
                },
                style: "page-header",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PageHeader"
                },
                _widgetRecordProvider: t
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "left-container full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "LeftContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Title"
                },
                _widgetRecordProvider: t
            }, i.createElement(b, {
                style: "page-title",
                value: n.variables.pageTitleIn,
                _idProps: {
                    service: e,
                    name: "PageTitleExpression"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: h.Model.calculateDataFetchStatus(n.variables._pageTitleInDataFetchStatus)
            }), i.createElement(u, {
                align: 0,
                animate: !0,
                visible: n.getCachedValue(e.getId("TooltipContainer.Visible"), function() {
                    return n.variables.descriptionIn !== h.BuiltinFunctions.nullTextIdentifier()
                }, function() {
                    return n.variables.descriptionIn
                }),
                _idProps: {
                    service: e,
                    name: "TooltipContainer"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: h.Model.calculateDataFetchStatus(n.variables._descriptionInDataFetchStatus)
            }, i.createElement(P, {
                getOwnerSpan: a(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Position: w.position.bottom
                },
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new $(function() {
                        return [i.createElement(C, {
                            extendedProperties: {
                                style: "margin-top: 8px;"
                            },
                            gridProperties: {
                                marginLeft: "8px"
                            },
                            image: h.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "InfoIcon"
                            },
                            _widgetRecordProvider: t
                        })]
                    }),
                    tooltip: new $(function() {
                        return [i.createElement(b, {
                            style: "tooltip-text",
                            value: n.variables.descriptionIn,
                            _idProps: {
                                service: e,
                                name: "TooltipContent"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: h.Model.calculateDataFetchStatus(n.variables._descriptionInDataFetchStatus)
                        })]
                    })
                },
                _dependencies: [E(n.variables._descriptionInDataFetchStatus), E(n.variables.descriptionIn)]
            }))), i.createElement(y, {
                getOwnerSpan: a(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(d) {
                        l.handleError(d)
                    }, "_handleError"),
                    demoClickEvent$Action: a(function() {
                        var d = v.clone();
                        l.onDemoClick$Action(l.callContext(d))
                    }, "demoClickEvent$Action"),
                    realClickEvent$Action: a(function() {
                        var d = v.clone();
                        l.onRealClick$Action(l.callContext(d))
                    }, "realClickEvent$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "13",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "RightContainer"
                },
                _widgetRecordProvider: t
            }, i.createElement(I, {
                align: 0,
                content: _.props.placeholders.rightSectionPlaceholder,
                _idProps: {
                    service: e,
                    name: "RightSectionPlaceholder"
                },
                _widgetRecordProvider: t
            })))))
        }
    };
a(f, "View");
var S = f,
    he = S;
export {
    he as a
};