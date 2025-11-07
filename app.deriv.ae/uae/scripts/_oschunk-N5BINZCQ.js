import {
    a as M
} from "./_oschunk-GONH5KKX.js";
import {
    a as W
} from "./_oschunk-SFRA456L.js";
import {
    f as R,
    h as I,
    i as Y,
    j as ee,
    n as D,
    o as te,
    p as re,
    u as ne
} from "./_oschunk-VR5BNL2K.js";
import {
    a as le,
    g as V,
    m as j,
    o as G,
    q as K,
    r as z,
    s as Q,
    t as q
} from "./_oschunk-4VHUVDBV.js";
import {
    a as k
} from "./_oschunk-KXORGPRQ.js";
import {
    C as S,
    Qb as J,
    Sb as A
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as x,
    W as E,
    c as u,
    e as ce,
    m as T,
    n as O,
    p as X,
    v as B,
    w as C
} from "./_oschunk-M5BUVJ72.js";
var d = ce(le());
var m = E,
    U = class U extends m.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new(m.GenericTypeCache.getGenericList(S)))
            }, !1, m.GenericTypeCache.getGenericList(S)), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new(m.GenericTypeCache.getGenericList(S)))
            }, !1, m.GenericTypeCache.getGenericList(S)), this.attr("CountriesList", "countriesListIn", "CountriesList", !0, !1, m.DataTypes.DataTypes.RecordList, function() {
                return m.DataTypes.ImmutableBase.getData(new(m.GenericTypeCache.getGenericList(S)))
            }, !1, m.GenericTypeCache.getGenericList(S)), this.attr("_countriesListInDataFetchStatus", "_countriesListInDataFetchStatus", "_countriesListInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("CurrentResidence", "currentResidenceIn", "CurrentResidence", !0, !1, m.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_currentResidenceInDataFetchStatus", "_currentResidenceInDataFetchStatus", "_currentResidenceInDataFetchStatus", !0, !1, m.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(m.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
u(U, "VariablesRecord");
var P = U;
P.init();
var F = class F extends m.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: m.Model.ValidationWidgetRecord
        }
    }
};
u(F, "WidgetsRecord");
var H = F,
    N = class N extends m.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return P
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(f) {
            "CountriesList" in f && (this.variables.countriesListIn = f.CountriesList, "_countriesListInDataFetchStatus" in f && (this.variables._countriesListInDataFetchStatus = f._countriesListInDataFetchStatus)), "CurrentResidence" in f && (this.variables.currentResidenceIn = f.CurrentResidence, "_currentResidenceInDataFetchStatus" in f && (this.variables._currentResidenceInDataFetchStatus = f._currentResidenceInDataFetchStatus))
        }
    };
u(N, "Model");
var L = N;
L._hasValidationWidgetsValue = void 0;
var ae = new m.Model.ModelFactory(L);
var de = {
        "7OThHlQ6jkWP9uxA7z1ihg#ValueExpression.974258437.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u062E\u064A\u0627\u0631\u0627\u062A \u0644\u0644\u0639\u0631\u0636.",
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B",
        "2z81Io53jU2L24SdiMGXZA#Value": "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0623\u0643\u062B\u0631 \u0645\u0646 3M \u0645\u062A\u062F\u0627\u0648\u0644 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645"
    },
    fe = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0987\u09A8\u09AA\u09C1\u099F"
    },
    me = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Suche",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Sucheneingabe"
    },
    ve = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Buscar",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Entrada de b\xFAsqueda"
    },
    ge = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Recherche",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Saisie de recherche"
    },
    he = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Cerca",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Input di ricerca"
    },
    pe = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u1794\u1789\u17D2\u1785\u17BC\u179B\u1780\u17B6\u179A\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780"
    },
    _e = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\uAC80\uC0C9",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\uAC80\uC0C9 \uC785\uB825"
    },
    Se = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Szukaj",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Wprowadzenie wyszukiwania"
    },
    ye = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Pesquisar",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Campo de pesquisa"
    },
    Re = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u041F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u043F\u043E\u0438\u0441\u043A\u0430"
    },
    be = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u0DC3\u0DD9\u0DC0\u0DD3\u0DB8",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u0DC3\u0DD9\u0DC0\u0DD4\u0DB8\u0DCA \u0D86\u0DAF\u0DCF\u0DB1\u0DBA"
    },
    Ce = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Tafuta",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Ingizo la utafutaji"
    },
    Ee = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u0E04\u0E49\u0E19\u0E2B\u0E32",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u0E0A\u0E48\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32"
    },
    Ae = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Ara",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Arama giri\u015Fi"
    },
    we = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Qidirish",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Qidirish maydoni"
    },
    Ie = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "Qidirish",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "Qidirish maydoni"
    },
    Pe = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "T\xECm ki\u1EBFm",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\xD4 t\xECm ki\u1EBFm"
    },
    Le = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u641C\u7D22",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u641C\u7D22\u8F93\u5165"
    },
    Te = {
        "0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1": "\u641C\u5C0B",
        "jW4WCgxUKEa1gX5QePSwIg#Value": "\u641C\u5C0B\u8F38\u5165"
    },
    ie = {
        "ar-001": {
            translations: de,
            isRTL: !0
        },
        "bn-BD": {
            translations: fe,
            isRTL: !1
        },
        "de-DE": {
            translations: me,
            isRTL: !1
        },
        "es-ES": {
            translations: ve,
            isRTL: !1
        },
        "fr-FR": {
            translations: ge,
            isRTL: !1
        },
        "it-IT": {
            translations: he,
            isRTL: !1
        },
        "km-KH": {
            translations: pe,
            isRTL: !1
        },
        "ko-KR": {
            translations: _e,
            isRTL: !1
        },
        "pl-PL": {
            translations: Se,
            isRTL: !1
        },
        "pt-PT": {
            translations: ye,
            isRTL: !1
        },
        "ru-RU": {
            translations: Re,
            isRTL: !1
        },
        "si-LK": {
            translations: be,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ce,
            isRTL: !1
        },
        "th-TH": {
            translations: Ee,
            isRTL: !1
        },
        "tr-TR": {
            translations: Ae,
            isRTL: !1
        },
        "uz-Latn": {
            translations: we,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ie,
            isRTL: !1
        },
        "vi-VN": {
            translations: Pe,
            isRTL: !1
        },
        "zh-CN": {
            translations: Le,
            isRTL: !1
        },
        "zh-TW": {
            translations: Te,
            isRTL: !1
        }
    };

function Z(h, f, r, e) {
    var s, p;
    let n = (s = JSON.parse(h.ResidenceList)) != null ? s : [],
        a = ((p = h.SearchedResidence) != null ? p : " ").trim().toLowerCase(),
        o = n.filter(function(_) {
            var v;
            if (!_.country_calling_codes || ((v = _.country_calling_codes) == null ? void 0 : v.length) === 0 || !_.twilio || _.twilio.supported !== !0) return !1;
            let c = h.Language === "en" ? _.name.toLowerCase().includes(a) : _.nameAr.toLowerCase().includes(a),
                y = _.country_calling_codes.some(function(g) {
                    return g.replace(/\s+/g, "").includes(a.replace(/\s+/g, ""))
                });
            return c || y
        });
    h.FilteredResidenceList = JSON.stringify(o)
}
u(Z, "default");

function $(h, f, r, e) {
    var o;
    let a = ((o = JSON.parse(h.ResidenceList)) != null ? o : []).filter(function(s) {
        return s.country_calling_codes && s.country_calling_codes.length > 0 && s.twilio && s.twilio.supported === !0
    });
    h.FilteredResidenceList = JSON.stringify(a)
}
u($, "default");
var t = E; {
    let f = class f extends t.Controller.BaseViewController {
        constructor(e, n, a) {
            super(e, n, a, ie);
            var o = this.controller;
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
                var a = this.model,
                    o = this.controller,
                    s = this.idService;
                return t.Logger.startActiveSpan("OnSearch", function(p) {
                    p && (p.setAttribute("code.function", "OnSearch"), p.setAttribute("outsystems.function.key", "70bfd4ad-aa41-44b2-95ca-800e842dc9da"), p.setAttribute("outsystems.function.owner.name", "uae"), p.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSearch"), n = o.callContext(n);
                        var _ = new t.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnSearch$vars")));
                        _.value.searchedItemArgInLocal = e;
                        var c = new t.DataTypes.VariableHolder,
                            y = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            v = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.GenericTypeCache.getGenericList(S))));
                        t.BuiltinFunctions.length(_.value.searchedItemArgInLocal) > 0 ? (y.value.jSONOut = t.JSONUtils.serializeToJSON(a.variables.sortedResidenceListVar, !1, !1), c.value = t.Logger.startActiveSpan("SearchCountry", function(g) {
                            g && (g.setAttribute("code.function", "SearchCountry"), g.setAttribute("outsystems.function.key", "a5b5f193-8754-4b9f-9eec-3c403c420d7d"), g.setAttribute("outsystems.function.owner.name", "uae"), g.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), g.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(Z, "SearchCountry", "OnSearch", {
                                    SearchedResidence: t.DataConversion.JSNodeParamConverter.to(_.value.searchedItemArgInLocal, t.DataTypes.DataTypes.Text),
                                    Language: t.DataConversion.JSNodeParamConverter.to(t.BuiltinFunctions.toLower(A.languageMapper$Action(n).charCodeOut), t.DataTypes.DataTypes.Text),
                                    ResidenceList: t.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, t.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(l) {
                                    var i = new(o.constructor.getVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnSearch$searchCountryJSResult"));
                                    return i.filteredResidenceListOut = t.DataConversion.JSNodeParamConverter.from(l.FilteredResidenceList, t.DataTypes.DataTypes.Text), i
                                }, {}, {})
                            } finally {
                                g && g.end()
                            }
                        }, 1), v.value.dataOut = t.JSONUtils.deserializeFromJSON(c.value.filteredResidenceListOut, t.GenericTypeCache.getGenericList(S), !1), a.variables.filteredResidenceListVar = v.value.dataOut) : a.variables.filteredResidenceListVar = a.variables.sortedResidenceListVar
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    a = this.controller,
                    o = this.idService;
                return t.Logger.startActiveSpan("OnReady", function(s) {
                    s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "f8465a04-c6fa-4354-9607-22c2ca987cd4"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var p = new t.DataTypes.VariableHolder,
                            _ = new t.DataTypes.VariableHolder,
                            c = new t.DataTypes.VariableHolder(new t.DataTypes.JSONSerializeOutputType),
                            y = new t.DataTypes.VariableHolder(new(t.Controller.BaseController.getJSONDeserializeOutputType(t.GenericTypeCache.getGenericList(S))));
                        c.value.jSONOut = t.JSONUtils.serializeToJSON(n.variables.countriesListIn, !1, !1), _.value = t.Logger.startActiveSpan("JavaScript1", function(v) {
                            v && (v.setAttribute("code.function", "JavaScript1"), v.setAttribute("outsystems.function.key", "6b0632bf-d14c-47f0-8e78-f387c0b54e1c"), v.setAttribute("outsystems.function.owner.name", "uae"), v.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), v.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode($, "JavaScript1", "OnReady", {
                                    ResidenceList: t.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, t.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: t.DataConversion.JSNodeParamConverter.to("", t.DataTypes.DataTypes.Text)
                                }, function(g) {
                                    var l = new(a.constructor.getVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnReady$javaScript1JSResult"));
                                    return l.filteredResidenceListOut = t.DataConversion.JSNodeParamConverter.from(g.FilteredResidenceList, t.DataTypes.DataTypes.Text), l
                                }, {}, {})
                            } finally {
                                v && v.end()
                            }
                        }, 1), y.value.dataOut = t.JSONUtils.deserializeFromJSON(_.value.filteredResidenceListOut, t.GenericTypeCache.getGenericList(S), !1), n.variables.filteredResidenceListVar = y.value.dataOut, n.variables.sortedResidenceListVar = y.value.dataOut, p.value = J.setFocus$Action(o.getId("Input_SearchedItem"), e)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onSearch$Action(e, n) {
            var a = this.controller;
            return t.Logger.startActiveSpan("OnSearch__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSearch"), o.setAttribute("outsystems.function.key", "70bfd4ad-aa41-44b2-95ca-800e842dc9da"), o.setAttribute("outsystems.function.owner.name", "uae"), o.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return a.safeExecuteClientAction(a._onSearch$Action, n, e)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return t.Logger.startActiveSpan("OnReady__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "f8465a04-c6fa-4354-9607-22c2ca987cd4"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    a && a.end()
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
        get closeDropdown$Action() {
            return this.hasOwnProperty("_closeDropdown$Action") || (this._closeDropdown$Action = function() {
                return Promise.resolve()
            }), this._closeDropdown$Action
        }
        set closeDropdown$Action(e) {
            this._closeDropdown$Action = e
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
                    a = this.model,
                    o = this.idService;
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
                    a = this.model,
                    o = this.idService;
                return n.onReady$Action(e)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return A.defaultTimeout
        }
    };
    u(f, "ControllerInner");
    let h = f;
    w = h, w.registerVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnSearch$searchCountryJSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }]), w.registerVariableGroupType("uae.Common.InternationalPhoneSelectorMobile.OnReady$javaScript1JSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: t.DataTypes.DataTypes.Text,
        defaultValue: u(function() {
            return ""
        }, "defaultValue")
    }])
}
var w, oe = new t.Controller.ControllerFactory(w, k);
var b = V.PlaceholderContent,
    xe = V.IteratorPlaceholderContent,
    Ve = u(function() {
        var h = G(function(f) {
            var r = f.model,
                e = f.controller,
                n = f.controller.idService,
                a = e.validationService,
                o = e.callContext(),
                s = Q,
                p = q,
                _ = {
                    props: f,
                    validateWidget: u(function(l) {
                        f.validateWidget(f, l)
                    }, "validateWidget")
                },
                c = r,
                y = z,
                v = K,
                g = j();
            return d.createElement("div", f.rootNodeProperties, d.createElement(W, {
                getOwnerSpan: u(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: u(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsCustomStyle: !0,
                    has_back_button: !0,
                    hasActionLeftButton: !0
                },
                events: {
                    _handleError: u(function(l) {
                        e.handleError(l)
                    }, "_handleError"),
                    onLeftActionEvent$Action: u(function() {
                        var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                        e.closeDropdown$Action(e.callContext(l))
                    }, "onLeftActionEvent$Action")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: c,
                placeholders: {
                    content: new b(function() {
                        return [d.createElement(R, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background-color: #fff;"
                            },
                            style: "display-flex flex-direction-column full-height",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "1"
                            },
                            _widgetRecordProvider: c
                        }, d.createElement(R, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-xs",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "Title"
                            },
                            _widgetRecordProvider: c
                        }, d.createElement(ne, {
                            style: "phone-number-selector__title",
                            text: [v(p("2z81Io53jU2L24SdiMGXZA#Value", "Select country or code"))],
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: c
                        })), d.createElement(M, {
                            getOwnerSpan: u(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: u(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: u(function(l) {
                                    e.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: a
                            },
                            _idProps: {
                                service: n,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: c,
                            placeholders: {
                                input: new b(function() {
                                    return [d.createElement(re, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "wcag-hide-text",
                                        _idProps: {
                                            service: n,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: c
                                    }, v(p("jW4WCgxUKEa1gX5QePSwIg#Value", "Search input"))), d.createElement(te, {
                                        _validationProps: {
                                            validationService: a
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
                                        onChange: u(function() {
                                            var l = typeof o != "undefined" && o !== null ? o.clone() : e.callContext().clone();
                                            e.onSearch$Action(r.variables.searchedResidenceVar, e.callContext(l))
                                        }, "onChange"),
                                        prompt: T.resolve(O.TranslationsService).getMessage("0p4L8AwSR0qB3oZEU8XZIA#ValueExpression.-1822469688.1", "Search"),
                                        style: "form-control",
                                        variable: r.createVariable(B.DataTypes.Text, r.variables.searchedResidenceVar, function(l) {
                                            r.variables.searchedResidenceVar = l
                                        }),
                                        _idProps: {
                                            service: n,
                                            name: "Input_SearchedItem"
                                        },
                                        _widgetRecordProvider: c
                                    })]
                                })
                            },
                            _dependencies: [s(r.variables.searchedResidenceVar)]
                        }), d.createElement(R, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "height: calc(100vh - 224px); overflow-y: scroll; padding-bottom: 24px;"
                            },
                            style: "country-list-container margin-top-base",
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "7"
                            },
                            _widgetRecordProvider: c
                        }, y(!r.variables.filteredResidenceListVar.isEmpty, !1, this, function() {
                            return [d.createElement(Y, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: r.variables.filteredResidenceListVar,
                                style: "list list-group residence-list ",
                                tag: "div",
                                _idProps: {
                                    service: n,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: c,
                                placeholders: {
                                    content: new xe(function(l, i) {
                                        return [d.createElement(ee, {
                                            extendedProperties: {
                                                style: "cursor: pointer; height: fit-content;"
                                            },
                                            onClick: u(function() {
                                                var se = typeof i != "undefined" && i !== null ? i.clone() : e.callContext().clone();
                                                e.onClickCountry$Action(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameAttr, r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr, r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameAttr, e.callContext(se))
                                            }, "onClick"),
                                            style: "display-flex align-items-center gap-s margin-bottom-s",
                                            triggerActionOnFullSwipeLeft: !1,
                                            triggerActionOnFullSwipeRight: !1,
                                            _idProps: {
                                                service: l,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: c,
                                            placeholders: {
                                                leftActions: b.Empty,
                                                content: new b(function() {
                                                    return [d.createElement(R, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                                        },
                                                        style: r.getCachedValue(l.getId("jrAxCUvusUSxNIgutI8XyQ.Style"), function() {
                                                            return "display-flex justify-content-space-between full-width phone-number-selector__container " + (r.variables.currentResidenceIn === r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr ? "phone-number-selector__container--selected" : "")
                                                        }, function() {
                                                            return r.variables.currentResidenceIn
                                                        }, function() {
                                                            return r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr
                                                        }),
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: c,
                                                        style_dataFetchStatus: x.calculateDataFetchStatus(r.variables._currentResidenceInDataFetchStatus)
                                                    }, d.createElement(R, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: "display-flex align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }, d.createElement(D, {
                                                        extendedProperties: {
                                                            style: "border-radius: 2px; height: 15px;"
                                                        },
                                                        gridProperties: {
                                                            width: "20px"
                                                        },
                                                        style: "shadow-xs border-radius-bottom-left-soft",
                                                        type: 1,
                                                        url: "https://flagcdn.com/w20/" + r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr + ".png",
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "12"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }), d.createElement(I, {
                                                        extendedProperties: {
                                                            style: "font-size: 14px; font-weight: 400; margin-right: 8px;"
                                                        },
                                                        gridProperties: {
                                                            marginLeft: "8px"
                                                        },
                                                        style: "flex-1",
                                                        value: r.getCachedValue(l.getId("vLN1xenr5k6E1Y9dMqec9g.Value"), function() {
                                                            return C.toLower(A.languageMapper$Action(i).charCodeOut) === "en" ? r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameAttr : r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameArAttr
                                                        }, function() {
                                                            return r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameAttr
                                                        }, function() {
                                                            return r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameArAttr
                                                        }),
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "13"
                                                        },
                                                        _widgetRecordProvider: c
                                                    }), d.createElement(I, {
                                                        extendedProperties: {
                                                            dir: "ltr",
                                                            style: "font-size: 14px; font-weight: 400;"
                                                        },
                                                        value: r.getCachedValue(l.getId("wJprZNXDH0OuRhaAE1zFNg.Value"), function() {
                                                            return " (" + (C.index(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext), " ", 0, !1, !1) === -1 ? r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext) : C.substr(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext), 0, C.index(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext), " ", 0, !1, !1))) + ")"
                                                        }, function() {
                                                            return r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext)
                                                        }),
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "14"
                                                        },
                                                        _widgetRecordProvider: c
                                                    })), d.createElement(R, {
                                                        align: 0,
                                                        animate: !0,
                                                        visible: r.variables.currentResidenceIn === r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "15"
                                                        },
                                                        _widgetRecordProvider: c,
                                                        visible_dataFetchStatus: x.calculateDataFetchStatus(r.variables._currentResidenceInDataFetchStatus)
                                                    }, d.createElement(D, {
                                                        extendedProperties: {
                                                            style: "height: 24px;"
                                                        },
                                                        gridProperties: {
                                                            width: "24px"
                                                        },
                                                        image: X.VersionedURL.getVersionedUrl("img/uae.ic_success_tick.svg"),
                                                        type: 0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "16"
                                                        },
                                                        _widgetRecordProvider: c
                                                    })))]
                                                }),
                                                rightActions: b.Empty
                                            },
                                            _dependencies: [s(r.variables._currentResidenceInDataFetchStatus), s(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).country_calling_codesAttr.getCurrent(i.iterationContext)), s(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameArAttr), s(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).nameAttr), s(r.variables.filteredResidenceListVar.getCurrent(i.iterationContext).alpha2Attr), s(r.variables.currentResidenceIn)]
                                        })]
                                    }, o, n, "1")
                                },
                                _dependencies: [s(r.variables._currentResidenceInDataFetchStatus), s(r.variables.currentResidenceIn)]
                            })]
                        }, function() {
                            return [d.createElement(R, {
                                align: 0,
                                animate: !0,
                                visible: r.variables.filteredResidenceListVar.isEmpty,
                                _idProps: {
                                    service: n,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: c
                            }, d.createElement(R, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; align-self: stretch; display: flex; gap: 16px; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: c
                            }, d.createElement(R, {
                                align: 0,
                                animate: !1,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "flex align-center",
                                visible: !0,
                                _idProps: {
                                    service: n,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: c
                            }, d.createElement(I, {
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                value: T.resolve(O.TranslationsService).getMessage("7OThHlQ6jkWP9uxA7z1ihg#ValueExpression.974258437.1", "There are no options to show."),
                                _idProps: {
                                    service: n,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: c
                            }))))]
                        })))]
                    }),
                    footer: b.Empty
                },
                _dependencies: [s(r.variables._currentResidenceInDataFetchStatus), s(r.variables.currentResidenceIn), s(r.variables.filteredResidenceListVar), s(r.variables.searchedResidenceVar)]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: u(function() {
                return {
                    codeFunction: "InternationalPhoneSelectorMobile",
                    functionKey: "e06b3c86-19d3-40dd-9c6a-5671b97f52e4",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.InternationalPhoneSelectorMobile",
            modelFactory: ae,
            controllerFactory: oe
        });
        return h.getCssDependencies = function() {
            return ["css/uae.Common.InternationalPhoneSelectorMobile.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [W, M]
        }, h
    }, "componentFactory"),
    vt = Ve();
export {
    vt as a
};