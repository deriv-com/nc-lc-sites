import {
    a as E
} from "./_oschunk-BJEMSMDT.js";
import {
    h as T,
    j as q,
    k as W,
    l as j,
    r as G,
    s as K,
    t as Q
} from "./_oschunk-E7JQAU4J.js";
import {
    a as U
} from "./_oschunk-5N5TJ3ES.js";
import {
    a as te,
    g as B,
    i as I
} from "./_oschunk-T77XORCW.js";
import {
    d as M
} from "./_oschunk-VADNKVBQ.js";
import {
    l as z
} from "./_oschunk-OOUVJ7PM.js";
import {
    Wb as b,
    ne as p
} from "./_oschunk-KG7LSUIA.js";
import {
    ia as R
} from "./_oschunk-5EPHB76O.js";
import {
    a as F,
    b as H,
    c,
    g as ee
} from "./_oschunk-DVBKI63I.js";
var f = ee(te());
var l = R,
    w = class w extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("ResidenceList", "residenceListIn", "ResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(w, "VariablesRecord");
var A = w;
A.init();
var D = class D extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: l.Model.ValidationWidgetRecord
        }
    }
};
c(D, "WidgetsRecord");
var P = D,
    V = class V extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(s) {
            "ResidenceList" in s && (this.variables.residenceListIn = s.ResidenceList, "_residenceListInDataFetchStatus" in s && (this.variables._residenceListInDataFetchStatus = s._residenceListInDataFetchStatus))
        }
    };
c(V, "Model");
var O = V;
O._hasValidationWidgetsValue = void 0;
var X = new l.Model.ModelFactory(O);
var ne = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "eF3Njcn7SUegNqJnlBnmag#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B"
    },
    ie = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Suche",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Sucheneingabe"
    },
    ae = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Buscar",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Entrada de b\xFAsqueda"
    },
    se = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Recherche",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Saisie de recherche"
    },
    oe = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Cerca",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Input di ricerca"
    },
    ce = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Szukaj",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Wprowadzenie wyszukiwania"
    },
    de = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Pesquisar",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Campo de pesquisa"
    },
    le = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "eF3Njcn7SUegNqJnlBnmag#Value": "\u0412\u0432\u043E\u0434 \u043F\u043E\u0438\u0441\u043A\u0430"
    },
    Y = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        },
        "de-DE": {
            translations: ie,
            isRTL: !1
        },
        "es-ES": {
            translations: ae,
            isRTL: !1
        },
        "fr-FR": {
            translations: se,
            isRTL: !1
        },
        "it-IT": {
            translations: oe,
            isRTL: !1
        },
        "pl-PL": {
            translations: ce,
            isRTL: !1
        },
        "pt-PT": {
            translations: de,
            isRTL: !1
        },
        "ru-RU": {
            translations: le,
            isRTL: !1
        }
    };

function N(m, s, y, e) {
    var i;
    let n = JSON.parse((i = m.ResidenceList) != null ? i : JSON.stringify({})),
        t = JSON.stringify(H(F({}, n), {
            residence_list: n.filter(o => o.text.toLowerCase().includes(m.SearchedResidence.toLowerCase()))
        }));
    m.FilteredResidenceList = t
}
c(N, "default");

function k(m, s, y, e) {
    let n = JSON.parse(m.ResidenceList);
    n.sort((t, i) => t.value === m.CurrentResidence && t.disabled !== "DISABLED" ? -1 : 1), m.SortedResidenceList = JSON.stringify({
        residence_list: n
    })
}
c(k, "default");
var r = R; {
    let s = class s extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Y);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnSearch", function(u) {
                    u && (u.setAttribute("code.function", "OnSearch"), u.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSearch"), n = i.callContext(n);
                        var h = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars")));
                        h.value.searchedItemArgInLocal = e;
                        var S = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            a = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(p)));
                        r.BuiltinFunctions.length(h.value.searchedItemArgInLocal) > 0 ? (v.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.residenceListIn, !1, !1), S.value = r.Logger.startActiveSpan("SearchCountry", function(d) {
                            d && (d.setAttribute("code.function", "SearchCountry"), d.setAttribute("outsystems.function.key", "7a1f9258-dca0-4f0b-b978-a43774a1fec3"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(N, "SearchCountry", "OnSearch", {
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(v.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    SearchedResidence: r.DataConversion.JSNodeParamConverter.to(h.value.searchedItemArgInLocal, r.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var $ = new(i.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult"));
                                    return $.filteredResidenceListOut = r.DataConversion.JSNodeParamConverter.from(g.FilteredResidenceList, r.DataTypes.DataTypes.Text), $
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), a.value.dataOut = r.JSONUtils.deserializeFromJSON(S.value.filteredResidenceListOut, p, !1), t.variables.filteredResidenceListVar = a.value.dataOut.residence_listAttr) : t.variables.filteredResidenceListVar = t.variables.sortedResidenceListVar
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder,
                            S = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            v = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(p)));
                        S.value.jSONOut = r.JSONUtils.serializeToJSON(n.variables.residenceListIn, !1, !1), h.value = r.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "0a2ae31e-6b5a-4787-9df2-0bf5b668e89d"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(k, "JavaScript1", "OnReady", {
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    CurrentResidence: r.DataConversion.JSNodeParamConverter.to(n.variables.currentResidenceVar, r.DataTypes.DataTypes.Text),
                                    SortedResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var g = new(t.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult"));
                                    return g.sortedResidenceListOut = r.DataConversion.JSNodeParamConverter.from(d.SortedResidenceList, r.DataTypes.DataTypes.Text), g
                                }, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), v.value.dataOut = r.JSONUtils.deserializeFromJSON(h.value.sortedResidenceListOut, p, !1), n.variables.filteredResidenceListVar = v.value.dataOut.residence_listAttr, n.variables.sortedResidenceListVar = v.value.dataOut.residence_listAttr, u.value = z.setFocus$Action(i.getId("Input_SearchedItem"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onSearch$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSearch__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSearch"), i.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClickCountry$Action() {
            return this.hasOwnProperty("_onClickCountry$Action") || (this._onClickCountry$Action = function() {
                return Promise.resolve()
            }), this._onClickCountry$Action
        }
        set onClickCountry$Action(e) {
            this._onClickCountry$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onReady$Action(e)
            }), this._onParametersChangedEventHandler
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
            return M.defaultTimeout
        }
    };
    c(s, "ControllerInner");
    let m = s;
    C = m, C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult", [{
        name: "SortedResidenceList",
        attrName: "sortedResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, Z = new r.Controller.ControllerFactory(C, U);
var L = R,
    x = I.PlaceholderContent,
    ue = I.IteratorPlaceholderContent,
    _ = class _ extends B.BaseWebBlock {
        static get displayName() {
            return "Common.CountryOfTaxResidenceSelector"
        }
        static getAttributes() {
            return {
                codeFunction: "CountryOfTaxResidenceSelector",
                functionKey: "04f5ac6c-5931-480d-8e1e-389c272225d8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.CountryOfTaxResidenceSelector.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E]
        }
        get modelFactory() {
            return X
        }
        get controllerFactory() {
            return Z
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                y = this.controller,
                e = this.idService,
                n = y.validationService,
                t = this.widgetsRecordProvider,
                i = y.callContext(),
                o = _.ifWidget,
                u = _.textWidget,
                h = _.asPrimitiveValue,
                S = _.getTranslation,
                v = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(T, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, f.createElement(E, {
                getOwnerSpan: c(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(a) {
                        y.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    input: new x(function() {
                        return [f.createElement(Q, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "wcag-hide-text",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, u(S("eF3Njcn7SUegNqJnlBnmag#Value", "Search input"))), f.createElement(K, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 14px; margin-bottom: 8px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 8,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: c(function() {
                                var a = i.clone();
                                y.onSearch$Action(s.variables.searchedResidenceVar, y.callContext(a))
                            }, "onChange"),
                            prompt: L.Injector.resolve(L.ServiceNames.TranslationsService).getMessage("v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: s.createVariable(L.DataTypes.DataTypes.Text, s.variables.searchedResidenceVar, function(a) {
                                s.variables.searchedResidenceVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [h(s.variables.searchedResidenceVar)]
            }), f.createElement(T, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: calc(100vh - 140px); overflow-y: scroll;"
                },
                style: "country-list-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, f.createElement(W, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: s.variables.filteredResidenceListVar,
                style: "list list-group residence-list ",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new ue(function(a, d) {
                        return [f.createElement(j, {
                            extendedProperties: {
                                style: "cursor: pointer; height: fit-content;"
                            },
                            onClick: c(function() {
                                var g = d.clone();
                                y.onClickCountry$Action(s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).valueAttr, s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr, y.callContext(g))
                            }, "onClick"),
                            style: "margin-y-base",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: a,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: x.Empty,
                                content: new x(function() {
                                    return [f.createElement(T, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                        },
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: a,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, f.createElement(q, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 400;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr,
                                        _idProps: {
                                            service: a,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), f.createElement(G, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: L.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: a,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: x.Empty
                            },
                            _dependencies: [h(s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr)]
                        })]
                    }, i, e, "1")
                },
                _dependencies: []
            }))))
        }
    };
c(_, "View");
var J = _,
    qe = J;
export {
    qe as a
};