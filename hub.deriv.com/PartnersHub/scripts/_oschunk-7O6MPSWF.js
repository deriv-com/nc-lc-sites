import {
    a as k
} from "./_oschunk-SOFSRMHQ.js";
import {
    a as N
} from "./_oschunk-3FJD3ZUN.js";
import {
    a as ee,
    b as te
} from "./_oschunk-U7MJ4XO3.js";
import "./_oschunk-GPU7XYUR.js";
import {
    a as re
} from "./_oschunk-ZQ74VJUD.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as v,
    f as T,
    g as X,
    h as I,
    m as W,
    o as K,
    p as Y,
    u as Z
} from "./_oschunk-OO36B6PN.js";
import "./_oschunk-YFNTRMC5.js";
import "./_oschunk-7BKGLZMI.js";
import {
    a as G
} from "./_oschunk-6WALBPGV.js";
import {
    a as Q,
    g as O,
    i as P
} from "./_oschunk-IL57OEHH.js";
import "./_oschunk-CMUJJDSY.js";
import {
    a as _,
    p as j
} from "./_oschunk-DW3HXDMW.js";
import {
    a as D
} from "./_oschunk-PNRBOTIK.js";
import {
    Ea as V,
    rb as L,
    sb as H
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as C
} from "./_oschunk-5KJVGEL7.js";
import {
    a as U,
    b as z,
    c,
    h as q
} from "./_oschunk-QHO7QY6K.js";
var w = q(Q());
var l = q(Q());
var ae = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "\u0628\u062D\u062B"
    },
    oe = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Dienste nicht verf\xFCgbar",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Suche"
    },
    se = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Servicios no disponibles",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Buscar"
    },
    ce = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Services non disponibles",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Recherche"
    },
    le = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Servizi non disponibili",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Cerca"
    },
    de = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Us\u0142ugi niedost\u0119pne",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Szukaj"
    },
    ue = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "Servi\xE7os n\xE3o dispon\xEDveis",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "Pesquisar"
    },
    fe = {
        "Pq_nLXnMW0yDEm8xRV0uRg#Value": "\u0423\u0441\u043B\u0443\u0433\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B",
        "+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A"
    },
    ne = {
        "ar-001": {
            translations: ae,
            isRTL: !0
        },
        "de-DE": {
            translations: oe,
            isRTL: !1
        },
        "es-ES": {
            translations: se,
            isRTL: !1
        },
        "fr-FR": {
            translations: ce,
            isRTL: !1
        },
        "it-IT": {
            translations: le,
            isRTL: !1
        },
        "pl-PL": {
            translations: de,
            isRTL: !1
        },
        "pt-PT": {
            translations: ue,
            isRTL: !1
        },
        "ru-RU": {
            translations: fe,
            isRTL: !1
        }
    };

function $(g, i, u, t) {
    let o = JSON.parse(g.ResidenceList);
    o.residence_list.sort((e, s) => e.value === g.CurrentResidence ? -1 : 1), g.SortedResidenceList = JSON.stringify(o)
}
c($, "default");

function J(g, i, u, t) {
    let o = JSON.parse(g.ResidenceList),
        e = JSON.stringify(z(U({}, o), {
            residence_list: o.filter(s => s.text.toLowerCase().startsWith(g.SearchedResidence.toLowerCase()))
        }));
    g.FilteredResidenceList = e
}
c(J, "default");
var n = C; {
    let i = class i extends n.Controller.BaseViewController {
        constructor(t, o, e) {
            super(t, o, e, ne);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var o = this.model,
                    e = this.controller,
                    s = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(p) {
                    return p && (p.setAttribute("code.function", "OnReady"), p.setAttribute("outsystems.function.key", "5e7ff0b0-163e-412e-bf00-eb1db69521e2"), p.setAttribute("outsystems.function.owner.name", "PartnersHub"), p.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var m = new n.DataTypes.VariableHolder,
                            f = new n.DataTypes.VariableHolder,
                            y = new n.DataTypes.VariableHolder,
                            R = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            a = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(V)));
                        return n.Flow.executeAsyncFlow(function() {
                            return o.flush(), D.getWebsiteStatus$Action(_.getServer(), "1", "en", t).then(function(r) {
                                f.value = r
                            }).then(function() {
                                return o.flush(), D.residenceList$Action(_.getServer(), "1", "en", t).then(function(r) {
                                    m.value = r
                                })
                            }).then(function() {
                                R.value.jSONOut = n.JSONUtils.serializeToJSON(m.value.responseOut, !1, !1), y.value = n.Logger.startActiveSpan("JavaScript1", function(r) {
                                    r && (r.setAttribute("code.function", "JavaScript1"), r.setAttribute("outsystems.function.key", "39b374c0-43ae-4922-9c38-8194659a328d"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode($, "JavaScript1", "OnReady", {
                                            CurrentResidence: n.DataConversion.JSNodeParamConverter.to(f.value.responseOut.website_statusAttr.clients_countryAttr, n.DataTypes.DataTypes.Text),
                                            ResidenceList: n.DataConversion.JSNodeParamConverter.to(R.value.jSONOut, n.DataTypes.DataTypes.Text),
                                            SortedResidenceList: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                        }, function(d) {
                                            var A = new(e.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult"));
                                            return A.sortedResidenceListOut = n.DataConversion.JSNodeParamConverter.from(d.SortedResidenceList, n.DataTypes.DataTypes.Text), A
                                        }, {}, {})
                                    } finally {
                                        r && r.end()
                                    }
                                }, 1), a.value.dataOut = n.JSONUtils.deserializeFromJSON(y.value.sortedResidenceListOut, V, !1), o.variables.filteredResidenceListVar = n.DataConversion.JSConversions.typeConvertRecordList(a.value.dataOut.residence_listAttr, new L, function(r, d) {
                                    return d.phone_iddAttr = r.phone_iddAttr, d.textAttr = r.textAttr, d.valueAttr = r.valueAttr, d.tin_formatAttr = r.tin_formatAttr, d.disabledAttr = r.disabledAttr, d.selectedAttr = r.selectedAttr, d.account_opening_self_declaration_requiredAttr = r.account_opening_self_declaration_requiredAttr, d
                                }), o.variables.sortedResidenceListVar = n.DataConversion.JSConversions.typeConvertRecordList(a.value.dataOut.residence_listAttr, new L, function(r, d) {
                                    return d.phone_iddAttr = r.phone_iddAttr, d.textAttr = r.textAttr, d.valueAttr = r.valueAttr, d.tin_formatAttr = r.tin_formatAttr, d.disabledAttr = r.disabledAttr, d.selectedAttr = r.selectedAttr, d.account_opening_self_declaration_requiredAttr = r.account_opening_self_declaration_requiredAttr, d
                                }), o.variables.currentResidenceVar = f.value.responseOut.website_statusAttr.clients_countryAttr, _.setClientCountry(f.value.responseOut.website_statusAttr.clients_countryAttr)
                            })
                        })
                    }, function() {
                        p && p.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(t, o) {
                var e = this.model,
                    s = this.controller,
                    p = this.idService;
                return n.Logger.startActiveSpan("OnSearch", function(m) {
                    m && (m.setAttribute("code.function", "OnSearch"), m.setAttribute("outsystems.function.key", "62348fe3-970d-43c6-9cc4-17e6bfb0ee74"), m.setAttribute("outsystems.function.owner.name", "PartnersHub"), m.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSearch"), o = s.callContext(o);
                        var f = new n.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$vars")));
                        f.value.searchedItemArgInLocal = t;
                        var y = new n.DataTypes.VariableHolder,
                            R = new n.DataTypes.VariableHolder(new n.DataTypes.JSONSerializeOutputType),
                            a = new n.DataTypes.VariableHolder(new(n.Controller.BaseController.getJSONDeserializeOutputType(H)));
                        n.BuiltinFunctions.length(f.value.searchedItemArgInLocal) > 0 ? (R.value.jSONOut = n.JSONUtils.serializeToJSON(e.variables.filteredResidenceListVar, !1, !1), y.value = n.Logger.startActiveSpan("JavaScript1", function(r) {
                            r && (r.setAttribute("code.function", "JavaScript1"), r.setAttribute("outsystems.function.key", "475cf908-8076-419a-87d7-e5be1ec66c7f"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(J, "JavaScript1", "OnSearch", {
                                    SearchedResidence: n.DataConversion.JSNodeParamConverter.to(f.value.searchedItemArgInLocal, n.DataTypes.DataTypes.Text),
                                    ResidenceList: n.DataConversion.JSNodeParamConverter.to(R.value.jSONOut, n.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: n.DataConversion.JSNodeParamConverter.to("", n.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var A = new(s.constructor.getVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult"));
                                    return A.filteredResidenceListOut = n.DataConversion.JSNodeParamConverter.from(d.FilteredResidenceList, n.DataTypes.DataTypes.Text), A
                                }, {}, {})
                            } finally {
                                r && r.end()
                            }
                        }, 1), a.value.dataOut = n.JSONUtils.deserializeFromJSON(y.value.filteredResidenceListOut, H, !1), e.variables.filteredResidenceListVar = a.value.dataOut.residence_listAttr) : e.variables.filteredResidenceListVar = e.variables.sortedResidenceListVar
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(t) {
            this.__onSearch$Action = t
        }
        onReady$Action(t) {
            var o = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "5e7ff0b0-163e-412e-bf00-eb1db69521e2"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return o.safeExecuteClientAction(o._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onSearch$Action(t, o) {
            var e = this.controller;
            return n.Logger.startActiveSpan("OnSearch__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSearch"), s.setAttribute("outsystems.function.key", "62348fe3-970d-43c6-9cc4-17e6bfb0ee74"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onSearch$Action, o, t)
                } finally {
                    s && s.end()
                }
            }, 0)
        }
        get onClickBack$Action() {
            return this.hasOwnProperty("_onClickBack$Action") || (this._onClickBack$Action = function() {
                return Promise.resolve()
            }), this._onClickBack$Action
        }
        set onClickBack$Action(t) {
            this._onClickBack$Action = t
        }
        get onClickCountry$Action() {
            return this.hasOwnProperty("_onClickCountry$Action") || (this._onClickCountry$Action = function() {
                return Promise.resolve()
            }), this._onClickCountry$Action
        }
        set onClickCountry$Action(t) {
            this._onClickCountry$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var o = this.controller,
                    e = this.model,
                    s = this.idService;
                return o.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(t) {
                var o = this.controller,
                    e = this.model,
                    s = this.idService;
                return o.onReady$Action(t)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return j.defaultTimeout
        }
    };
    c(i, "ControllerInner");
    let g = i;
    x = g, x.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnReady$javaScript1JSResult", [{
        name: "SortedResidenceList",
        attrName: "sortedResidenceListOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), x.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), x.registerVariableGroupType("PartnersHub.RealAccountCreation.ResidenceSelector.OnSearch$javaScript1JSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: n.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var x, ie = new n.Controller.ControllerFactory(x, G);
var E = C,
    b = P.PlaceholderContent,
    me = P.IteratorPlaceholderContent,
    S = class S extends O.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreation.ResidenceSelector"
        }
        static getAttributes() {
            return {
                codeFunction: "ResidenceSelector",
                functionKey: "502d31df-3057-4dfa-a393-1b3b8435bbfd",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreation.ResidenceSelector.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [k]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                u = this.controller,
                t = this.idService,
                o = u.validationService,
                e = this.widgetsRecordProvider,
                s = u.callContext(),
                p = S.ifWidget,
                m = S.textWidget,
                f = S.asPrimitiveValue,
                y = S.getTranslation,
                R = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff; height: 100vh;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, l.createElement(v, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: 16px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e
            }, l.createElement(k, {
                getOwnerSpan: c(function() {
                    return R.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return R.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(a) {
                        u.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    input: new b(function() {
                        return [l.createElement(K, {
                            _validationProps: {
                                validationService: o
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0px"
                            },
                            inputType: 8,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: c(function() {
                                var a = s.clone();
                                u.onSearch$Action(i.variables.searchedResidenceVar, u.callContext(a))
                            }, "onChange"),
                            prompt: E.Injector.resolve(E.ServiceNames.TranslationsService).getMessage("+52G+A0_7Eq8rgCUpryQRA#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: i.createVariable(E.DataTypes.DataTypes.Text, i.variables.searchedResidenceVar, function(a) {
                                i.variables.searchedResidenceVar = a
                            }),
                            _idProps: {
                                service: t,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: e
                        })]
                    })
                },
                _dependencies: [f(i.variables.searchedResidenceVar)]
            })), p(E.BuiltinFunctions.length(i.variables.subtitleIn) > 0, !1, this, function() {
                return [l.createElement(T, {
                    extendedProperties: {
                        style: "color: #222; font-size: 14px; margin-right: 16px;"
                    },
                    gridProperties: {
                        marginLeft: "16px"
                    },
                    value: i.variables.subtitleIn,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: e,
                    value_dataFetchStatus: E.Model.calculateDataFetchStatus(i.variables._subtitleInDataFetchStatus)
                })]
            }, function() {
                return []
            }), p(i.variables.filteredResidenceListVar.length > 0 && !i.variables.filteredResidenceListVar.isEmpty, !1, this, function() {
                return [l.createElement(X, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: i.variables.filteredResidenceListVar,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: t,
                        uuid: "5"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        content: new me(function(a, r) {
                            return [l.createElement(v, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: e,
                                _dependencies: [f(_.getIsCountryUnavailable()), f(i.variables.currentResidenceVar), f(i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).textAttr), f(i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr)]
                            }, p(i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr === i.variables.currentResidenceVar, !1, this, function() {
                                return [l.createElement(I, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: c(function() {
                                        var d = r.clone();
                                        u.onClickCountry$Action(i.variables.filteredResidenceListVar.getCurrent(r.iterationContext), u.callContext(d))
                                    }, "onClick"),
                                    style: "list-item residence-item",
                                    triggerActionOnFullSwipeLeft: !0,
                                    triggerActionOnFullSwipeRight: !0,
                                    _idProps: {
                                        service: a,
                                        name: "CurrentCountryItem"
                                    },
                                    _widgetRecordProvider: e,
                                    placeholders: {
                                        leftActions: b.Empty,
                                        content: new b(function() {
                                            return [l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #e9ecef; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "8"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 16px; margin-top: 0px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "16px"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "9"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "border-color: #e9ecef; border-style: solid; border-width: 0px; padding: 12px 0px 12px 0px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(T, {
                                                extendedProperties: {
                                                    style: "font-size: 18px; font-weight: 700;"
                                                },
                                                style: i.getCachedValue(a.getId("QfA3x+7CbUarWL_o7M9Tmg.Style"), function() {
                                                    return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr === i.variables.currentResidenceVar ? "current-country" : "country-list"
                                                }, function() {
                                                    return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr
                                                }, function() {
                                                    return i.variables.currentResidenceVar
                                                }),
                                                value: i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).textAttr,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: e
                                            }))))), l.createElement(W, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "15"
                                                },
                                                _widgetRecordProvider: e
                                            })))]
                                        }),
                                        rightActions: b.Empty
                                    }
                                })]
                            }, function() {
                                return [l.createElement(I, {
                                    extendedProperties: {
                                        style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                    },
                                    onClick: c(function() {
                                        var d = r.clone();
                                        u.onClickCountry$Action(i.variables.filteredResidenceListVar.getCurrent(r.iterationContext), u.callContext(d))
                                    }, "onClick"),
                                    style: i.getCachedValue(a.getId("ListItem1.Style"), function() {
                                        return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr === i.variables.currentResidenceVar ? _.getIsCountryUnavailable() ? "list-item current-residence-item no-select" : "list-item current-residence-item" : "list-item residence-item"
                                    }, function() {
                                        return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr
                                    }, function() {
                                        return i.variables.currentResidenceVar
                                    }, function() {
                                        return _.getIsCountryUnavailable()
                                    }),
                                    triggerActionOnFullSwipeLeft: !0,
                                    triggerActionOnFullSwipeRight: !0,
                                    _idProps: {
                                        service: a,
                                        name: "ListItem1"
                                    },
                                    _widgetRecordProvider: e,
                                    placeholders: {
                                        leftActions: b.Empty,
                                        content: new b(function() {
                                            return [l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "17"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "18"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(v, {
                                                align: 0,
                                                animate: !1,
                                                extendedProperties: {
                                                    style: "align-items: center; display: flex; gap: 8px;"
                                                },
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "19"
                                                },
                                                _widgetRecordProvider: e
                                            }, l.createElement(T, {
                                                extendedProperties: {
                                                    style: "font-size: 15px;"
                                                },
                                                gridProperties: {
                                                    marginLeft: "0px"
                                                },
                                                style: i.getCachedValue(a.getId("R6PU7_wpl0KQx+d+deVYXw.Style"), function() {
                                                    return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr === i.variables.currentResidenceVar ? "current-country" : "country-list"
                                                }, function() {
                                                    return i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).valueAttr
                                                }, function() {
                                                    return i.variables.currentResidenceVar
                                                }),
                                                value: i.variables.filteredResidenceListVar.getCurrent(r.iterationContext).textAttr,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "20"
                                                },
                                                _widgetRecordProvider: e
                                            }))), l.createElement(W, {
                                                extendedProperties: {
                                                    style: "cursor: pointer;"
                                                },
                                                icon: "angle-right",
                                                iconSize: 1,
                                                style: "icon",
                                                visible: !0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "21"
                                                },
                                                _widgetRecordProvider: e
                                            }))]
                                        }),
                                        rightActions: b.Empty
                                    }
                                })]
                            }))]
                        }, s, t, "1")
                    },
                    _dependencies: [f(_.getIsCountryUnavailable()), f(i.variables.currentResidenceVar)]
                })]
            }, function() {
                return [l.createElement(v, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 12px; text-align: center;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "22"
                    },
                    _widgetRecordProvider: e
                }, l.createElement(Y, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: t,
                        uuid: "23"
                    },
                    _widgetRecordProvider: e
                }, l.createElement(Z, {
                    extendedProperties: {
                        style: "color: #222; font-size: 16px;"
                    },
                    text: [m(y("Pq_nLXnMW0yDEm8xRV0uRg#Value", "Services not available"))],
                    _idProps: {
                        service: t,
                        uuid: "24"
                    },
                    _widgetRecordProvider: e
                })))]
            })))
        }
    };
c(S, "View");
var F = S,
    B = F;
var Re = P.PlaceholderContent,
    et = P.IteratorPlaceholderContent,
    h = class h extends O.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PlaceOfBirthCountrySelector"
        }
        static getAttributes() {
            return {
                codeFunction: "PlaceOfBirthCountrySelector",
                functionKey: "4c9b464d-d57d-490f-a0c5-0a55eb8da090",
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
            return [N, B]
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return O.BaseWebScreen.getTranslation("TUabTH3VD0mgxQpV642gkA#Title", "PlaceOfBirthCountrySelector")
        }
        internalRender() {
            let i = this.model,
                u = this.controller,
                t = this.idService,
                o = u.validationService,
                e = this.widgetsRecordProvider,
                s = u.callContext(),
                p = h.ifWidget,
                m = h.textWidget,
                f = h.asPrimitiveValue,
                y = h.getTranslation,
                R = this;
            return w.createElement("div", this.getRootNodeProperties(), w.createElement(N, {
                getOwnerSpan: c(function() {
                    return R.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return R.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Place of birth",
                    HasCloseIcon: !1,
                    HasBackButton: !0
                },
                events: {
                    _handleError: c(function(a) {
                        u.handleError(a)
                    }, "_handleError"),
                    onBack$Action: c(function() {
                        var a = s.clone();
                        u.fullScreenMobileModalOnBack$Action(u.callContext(a))
                    }, "onBack$Action")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    content: new Re(function() {
                        return [w.createElement(v, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 10px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: e
                        }, w.createElement(B, {
                            getOwnerSpan: c(function() {
                                return R.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return R.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: c(function(a) {
                                    u.handleError(a)
                                }, "_handleError"),
                                onClickCountry$Action: c(function(a) {
                                    var r = s.clone();
                                    u.residenceSelectorOnClickCountry$Action(a, u.callContext(r))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: t,
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
c(h, "View");
var M = h,
    tt = M;
export {
    tt as
    default
};