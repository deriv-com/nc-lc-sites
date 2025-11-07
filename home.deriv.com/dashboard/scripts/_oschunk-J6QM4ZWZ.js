import {
    a as J
} from "./_oschunk-3ZH3BUVJ.js";
import {
    a as Q
} from "./_oschunk-OSUI2M44.js";
import {
    a as H
} from "./_oschunk-V2GLUWLZ.js";
import {
    a as $
} from "./_oschunk-O3C4A522.js";
import {
    h as A,
    i as p,
    j as ce,
    k as he,
    q as fe,
    r as W,
    s as G,
    x as be
} from "./_oschunk-O5KC3WOL.js";
import {
    a as me,
    g as U,
    m as ie,
    o as oe,
    q as se,
    r as le,
    s as ue,
    t as de
} from "./_oschunk-NVHFAAS2.js";
import {
    a as ne
} from "./_oschunk-AW35UT34.js";
import {
    Ba as k,
    F as m,
    Fa as ae,
    Ga as T,
    Ka as M,
    a as P,
    ua as re
} from "./_oschunk-WCMQG33O.js";
import {
    J as g,
    L as x,
    X as R,
    a as K,
    b as q,
    c as d,
    f as ye,
    n as w,
    o as V,
    q as ee,
    w as L,
    x as E,
    y as te
} from "./_oschunk-DFKJJKI4.js";
var b = ye(me());
var v = R,
    B = class B extends v.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, v.DataTypes.DataTypes.Record, function() {
                return v.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CountryShortCode", "countryShortCodeVar", "CountryShortCode", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("ResidenceList", "residenceListVar", "ResidenceList", !0, !1, v.DataTypes.DataTypes.Record, function() {
                return v.DataTypes.ImmutableBase.getData(new m)
            }, !1, m), this.attr("Input_BaseState", "input_BaseStateVar", "Input_BaseState", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("Input_Label", "input_LabelIn", "Input_Label", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_input_LabelInDataFetchStatus", "_input_LabelInDataFetchStatus", "_input_LabelInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Enabled", "enabledIn", "Enabled", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_enabledInDataFetchStatus", "_enabledInDataFetchStatus", "_enabledInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("InitialValue", "initialValueIn", "InitialValue", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_initialValueInDataFetchStatus", "_initialValueInDataFetchStatus", "_initialValueInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FilterRestrictedCountries", "filterRestrictedCountriesIn", "FilterRestrictedCountries", !0, !1, v.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_filterRestrictedCountriesInDataFetchStatus", "_filterRestrictedCountriesInDataFetchStatus", "_filterRestrictedCountriesInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", !0, !1, v.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", !0, !1, v.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(v.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(B, "VariablesRecord");
var D = B;
D.init();
var z = class z extends v.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_Base: v.Model.ValidationWidgetRecord,
            Input_SearchedItem: v.Model.ValidationWidgetRecord
        }
    }
};
d(z, "WidgetsRecord");
var j = z,
    X = class X extends v.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return D
        }
        static getWidgetsRecordConstructor() {
            return j
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(c) {
            "Input_Label" in c && (this.variables.input_LabelIn = c.Input_Label, "_input_LabelInDataFetchStatus" in c && (this.variables._input_LabelInDataFetchStatus = c._input_LabelInDataFetchStatus)), "Enabled" in c && (this.variables.enabledIn = c.Enabled, "_enabledInDataFetchStatus" in c && (this.variables._enabledInDataFetchStatus = c._enabledInDataFetchStatus)), "InitialValue" in c && (this.variables.initialValueIn = c.InitialValue, "_initialValueInDataFetchStatus" in c && (this.variables._initialValueInDataFetchStatus = c._initialValueInDataFetchStatus)), "FilterRestrictedCountries" in c && (this.variables.filterRestrictedCountriesIn = c.FilterRestrictedCountries, "_filterRestrictedCountriesInDataFetchStatus" in c && (this.variables._filterRestrictedCountriesInDataFetchStatus = c._filterRestrictedCountriesInDataFetchStatus)), "ErrorMessage" in c && (this.variables.errorMessageIn = c.ErrorMessage, "_errorMessageInDataFetchStatus" in c && (this.variables._errorMessageInDataFetchStatus = c._errorMessageInDataFetchStatus))
        }
    };
d(X, "Model");
var N = X;
N._hasValidationWidgetsValue = void 0;
var _e = new v.Model.ModelFactory(N);
var Ae = {
        "aImvaF714UacQAk8r28QvA#Value": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0627\u062E\u062A\u0631",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0628\u062D\u062B",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C"
    },
    pe = {
        "aImvaF714UacQAk8r28QvA#Value": "\u0995\u09CB\u09A8\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u099A\u09DF\u09A8 \u0995\u09B0\u09C1\u09A8",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u099A\u09DF\u09A8 \u0995\u09B0\u09C1\u09A8",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u0995\u09CB\u09A8\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0996\u09C1\u0981\u099C\u09C1\u09A8",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u0995\u09CB\u09A8\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u09AF\u09BE\u09AF\u09BC\u09A8\u09BF"
    },
    Ce = {
        "aImvaF714UacQAk8r28QvA#Value": "Kein Ergebnis gefunden",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Suche",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "W\xE4hlen",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "W\xE4hlen",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Kein Ergebnis gefunden",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Suche",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Kein Ergebnis gefunden"
    },
    we = {
        "aImvaF714UacQAk8r28QvA#Value": "No se encontraron resultados",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Buscar",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Seleccionar",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Seleccionar",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "No se encontraron resultados",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Buscar",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "No se encontraron resultados"
    },
    Ve = {
        "aImvaF714UacQAk8r28QvA#Value": "Aucun r\xE9sultat trouv\xE9",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Recherche",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "S\xE9lectionner",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "S\xE9lectionner",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Aucun r\xE9sultat trouv\xE9",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Rechercher",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Aucun r\xE9sultat trouv\xE9"
    },
    Ie = {
        "aImvaF714UacQAk8r28QvA#Value": "Nessun risultato trovato",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Cerca",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Seleziona",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Seleziona",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Nessun risultato trovato",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Cerca",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Nessun risultato trovato"
    },
    Ee = {
        "aImvaF714UacQAk8r28QvA#Value": "\u1798\u17B7\u1793\u1798\u17B6\u1793\u179B\u1791\u17D2\u1792\u1795\u179B\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u1798\u17B7\u1793\u1798\u17B6\u1793\u179B\u1791\u17D2\u1792\u1795\u179B\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u1798\u17B7\u1793\u1798\u17B6\u1793\u179B\u1791\u17D2\u1792\u1795\u179B\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780"
    },
    Te = {
        "aImvaF714UacQAk8r28QvA#Value": "\uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\uAC80\uC0C9",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\uC120\uD0DD",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\uC120\uD0DD",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\uAC80\uC0C9",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC74C"
    },
    Oe = {
        "aImvaF714UacQAk8r28QvA#Value": "\u04AE\u0440 \u0434\u04AF\u043D \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439.",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0425\u0430\u0439\u0445",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0421\u043E\u043D\u0433\u043E\u0445",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0421\u043E\u043D\u0433\u043E\u0445",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u04AE\u0440 \u0434\u04AF\u043D \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439.",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0425\u0430\u0439\u0445",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u04AE\u0440 \u0434\u04AF\u043D \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439."
    },
    Re = {
        "aImvaF714UacQAk8r28QvA#Value": "Nie znaleziono wynik\xF3w",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Szukaj",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Wybierz",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Wybierz",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Nie znaleziono wynik\xF3w",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Szukaj",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Nie znaleziono wynik\xF3w"
    },
    Fe = {
        "aImvaF714UacQAk8r28QvA#Value": "Nenhum resultado encontrado",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Pesquisar",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Selecionar",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Selecionar",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Nenhum resultado encontrado",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Procurar",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Nenhum resultado encontrado"
    },
    Pe = {
        "aImvaF714UacQAk8r28QvA#Value": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B"
    },
    ke = {
        "aImvaF714UacQAk8r28QvA#Value": "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB5\u0DBD \u0D9A\u0DD2\u0DC3\u0DD2\u0DC0\u0D9A\u0DCA \u0DC4\u0DB8\u0DD4 \u0DB1\u0DDC\u0DC0\u0DD3\u0DBA",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0DC3\u0DD9\u0DC0\u0DD3\u0DB8",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB5\u0DBD \u0D9A\u0DD2\u0DC3\u0DD2\u0DC0\u0D9A\u0DCA \u0DC4\u0DB8\u0DD4 \u0DB1\u0DDC\u0DC0\u0DD3\u0DBA",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB5\u0DBD \u0D9A\u0DD2\u0DC3\u0DD2\u0DC0\u0D9A\u0DCA \u0DC4\u0DB8\u0DD4 \u0DB1\u0DDC\u0DC0\u0DD3\u0DBA"
    },
    Me = {
        "aImvaF714UacQAk8r28QvA#Value": "Hakuna matokeo yaliyopatikana",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Tafuta",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Chagua",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Chagua",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Hakuna matokeo yaliyopatikana",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Tafuta",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Hakuna matokeo yaliyopatikana"
    },
    De = {
        "aImvaF714UacQAk8r28QvA#Value": "\u043D\u04D9\u0442\u0438\u099C\u0BCD \u0B95\u0BBE\u0BA3\u0BBFialli",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0BA4\u0BC7\u0B9F\u0BB2\u0BCD",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u043D\u04D9\u0442\u0438\u099C\u0BCD \u0B95\u0BBE\u0BA3\u0BBFia\u0142li",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0BA4\u0BC7\u0B9F\u0BB2\u0BCD",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u043D\u04D9\u0442\u0438\u099C\u0BCD \u0B95\u0BBE\u0BA3\u06CC\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8"
    },
    Ne = {
        "aImvaF714UacQAk8r28QvA#Value": "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u0E04\u0E49\u0E19\u0E2B\u0E32",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u0E40\u0E25\u0E37\u0E2D\u0E01",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u0E40\u0E25\u0E37\u0E2D\u0E01",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u0E04\u0E49\u0E19\u0E2B\u0E32",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C"
    },
    Le = {
        "aImvaF714UacQAk8r28QvA#Value": "Sonu\xE7 bulunamad\u0131",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Ara",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Se\xE7",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Se\xE7",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Sonu\xE7 bulunamad\u0131",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Ara",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Sonu\xE7 bulunamad\u0131"
    },
    xe = {
        "aImvaF714UacQAk8r28QvA#Value": "Natija topilmadi",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Qidirish",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Tanlang",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Tanlang",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Natija topilmadi",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Qidirish",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Natija topilmadi"
    },
    Ue = {
        "aImvaF714UacQAk8r28QvA#Value": "Natija topilmadi",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Qidirish",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Tanlang",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Tanlang",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Natija topilmadi",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "Qidirish",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Natija topilmadi"
    },
    We = {
        "aImvaF714UacQAk8r28QvA#Value": "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "T\xECm ki\u1EBFm",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "Ch\u1ECDn",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "Ch\u1ECDn",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "T\xECm ki\u1EBFm",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3"
    },
    Ge = {
        "aImvaF714UacQAk8r28QvA#Value": "\u672A\u627E\u5230\u7ED3\u679C",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u641C\u7D22",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u9009\u62E9",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u9009\u62E9",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u672A\u627E\u5230\u7ED3\u679C",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u641C\u7D22",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u672A\u627E\u5230\u7ED3\u679C"
    },
    $e = {
        "aImvaF714UacQAk8r28QvA#Value": "\u672A\u627E\u5230\u7D50\u679C",
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "\u641C\u5C0B",
        "2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1": "\u9078\u64C7",
        "V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1": "\u9078\u64C7",
        "vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1": "\u672A\u627E\u5230\u7D50\u679C",
        "w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1": "\u641C\u5C0B",
        "_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1": "\u672A\u627E\u5230\u7D50\u679C"
    },
    Qe = {
        "W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1": "Qidirish"
    },
    Se = {
        "ar-001": {
            translations: Ae,
            isRTL: !0
        },
        "bn-BD": {
            translations: pe,
            isRTL: !1
        },
        "de-DE": {
            translations: Ce,
            isRTL: !1
        },
        "es-ES": {
            translations: we,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ve,
            isRTL: !1
        },
        "it-IT": {
            translations: Ie,
            isRTL: !1
        },
        "km-KH": {
            translations: Ee,
            isRTL: !1
        },
        "ko-KR": {
            translations: Te,
            isRTL: !1
        },
        "mn-MN": {
            translations: Oe,
            isRTL: !1
        },
        "pl-PL": {
            translations: Re,
            isRTL: !1
        },
        "pt-PT": {
            translations: Fe,
            isRTL: !1
        },
        "ru-RU": {
            translations: Pe,
            isRTL: !1
        },
        "si-LK": {
            translations: ke,
            isRTL: !1
        },
        "sw-KE": {
            translations: Me,
            isRTL: !1
        },
        "ta-IN": {
            translations: De,
            isRTL: !1
        },
        "th-TH": {
            translations: Ne,
            isRTL: !1
        },
        "tr-TR": {
            translations: Le,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: xe,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ue,
            isRTL: !1
        },
        "vi-VN": {
            translations: We,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ge,
            isRTL: !1
        },
        "zh-TW": {
            translations: $e,
            isRTL: !1
        },
        "uz-Latn": {
            translations: Qe,
            isRTL: !1
        }
    };

function Z(S, c, n, e) {
    var a, i;
    let t = JSON.parse((a = S.ResidenceList) != null ? a : JSON.stringify({})),
        r = JSON.stringify(q(K({}, t), {
            data: ((i = t.data) != null ? i : []).filter(u => {
                var f;
                return typeof u.name == "string" && u.name.toLowerCase().includes(((f = S.SearchedResidence) != null ? f : "").toLowerCase())
            })
        }));
    S.FilteredResidenceList = r
}
d(Z, "default");

function Y(S, c, n, e) {
    if (S.CountryShortCode) {
        let t = document.querySelector(`#${S.CountrySelectionSheet_Id} [data-shortcode=${S.CountryShortCode}]`);
        t && t.scrollIntoView({
            block: "start"
        })
    }
}
d(Y, "default");
var o = R; {
    let c = class c extends o.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, Se);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, t) {
                var r = this.model,
                    a = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("OnSearch", function(u) {
                    u && (u.setAttribute("code.function", "OnSearch"), u.setAttribute("outsystems.function.key", "0aeacceb-60d7-4e65-b239-42726288b208"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnSearch"), t = a.callContext(t);
                        var f = new o.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.Onboarding.CountrySelector.OnSearch$vars")));
                        f.value.searchedItemArgInLocal = e;
                        var s = new o.DataTypes.VariableHolder,
                            y = new o.DataTypes.VariableHolder(new o.DataTypes.JSONSerializeOutputType),
                            F = new o.DataTypes.VariableHolder(new(o.Controller.BaseController.getJSONDeserializeOutputType(m)));
                        y.value.jSONOut = o.JSONUtils.serializeToJSON(r.variables.residenceListVar, !1, !1), o.BuiltinFunctions.length(f.value.searchedItemArgInLocal) > 0 ? (s.value = o.Logger.startActiveSpan("SearchCountry", function(_) {
                            _ && (_.setAttribute("code.function", "SearchCountry"), _.setAttribute("outsystems.function.key", "23b8bdf3-0e7c-40ad-a274-ef1c96c0c32b"), _.setAttribute("outsystems.function.owner.name", "dashboard"), _.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), _.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(Z, "SearchCountry", "OnSearch", {
                                    ResidenceList: o.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, o.DataTypes.DataTypes.Text),
                                    SearchedResidence: o.DataConversion.JSNodeParamConverter.to(f.value.searchedItemArgInLocal, o.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: o.DataConversion.JSNodeParamConverter.to("", o.DataTypes.DataTypes.Text)
                                }, function(l) {
                                    var h = new(a.constructor.getVariableGroupType("dashboard.Onboarding.CountrySelector.OnSearch$searchCountryJSResult"));
                                    return h.filteredResidenceListOut = o.DataConversion.JSNodeParamConverter.from(l.FilteredResidenceList, o.DataTypes.DataTypes.Text), h
                                }, {}, {})
                            } finally {
                                _ && _.end()
                            }
                        }, 1), F.value.dataOut = o.JSONUtils.deserializeFromJSON(s.value.filteredResidenceListOut, m, !1), r.variables.filteredResidenceListVar = F.value.dataOut) : r.variables.filteredResidenceListVar = r.variables.residenceListVar
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _bottomSheetOnClickCountry$Action() {
            return this.hasOwnProperty("__bottomSheetOnClickCountry$Action") || (this.__bottomSheetOnClickCountry$Action = function(e, t, r) {
                var a = this.model,
                    i = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("BottomSheetOnClickCountry", function(f) {
                    return f && (f.setAttribute("code.function", "BottomSheetOnClickCountry"), f.setAttribute("outsystems.function.key", "6f334027-f1ac-48a3-a22e-c74a2ecafdd4"), f.setAttribute("outsystems.function.owner.name", "dashboard"), f.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        i.ensureControllerAlive("BottomSheetOnClickCountry"), r = i.callContext(r);
                        var s = new o.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("dashboard.Onboarding.CountrySelector.BottomSheetOnClickCountry$vars")));
                        s.value.residenceInLocal = e, s.value.shortCodeInLocal = t;
                        var y = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return a.variables.countryShortCodeVar = s.value.shortCodeInLocal, a.variables.input_BaseStateVar = s.value.residenceInLocal, a.variables.errorMessageIn = o.BuiltinFunctions.nullTextIdentifier(), i.event_OnCountrySelect$Action(s.value.shortCodeInLocal, a.variables.input_BaseStateVar, r).then(function() {
                                y.value = T.bottomSheetClose$Action(u.getId("CountrySelectionSheet"), r)
                            })
                        })
                    }, function() {
                        f && f.end()
                    })
                }, 1)
            }), this.__bottomSheetOnClickCountry$Action
        }
        set _bottomSheetOnClickCountry$Action(e) {
            this.__bottomSheetOnClickCountry$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(i) {
                    return i && (i.setAttribute("code.function", "OnReady"), i.setAttribute("outsystems.function.key", "82ecb8d2-8b95-4e9a-95ae-8cc326797a9c"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        r.ensureControllerAlive("OnReady"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder,
                            f = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return t.flush(), M.gET_Countries$Action("", e).then(function(s) {
                                f.value = s
                            }).then(function() {
                                u.value = o.SystemActions.listFilter(f.value.responseOut.dataAttr, function(s) {
                                    return t.variables.filterRestrictedCountriesIn ? !s.client_restrictedAttr : !0
                                }, e), t.variables.filteredResidenceListVar = f.value.responseOut, t.variables.filteredResidenceListVar.dataAttr = u.value.filteredListOut, t.variables.residenceListVar = t.variables.filteredResidenceListVar, r._setInitialValue$Action(e), M.bottomSheet_CloseOnClickOutside$Action(a.getId("CountrySelectionSheet"), e)
                            })
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _setInitialValue$Action() {
            return this.hasOwnProperty("__setInitialValue$Action") || (this.__setInitialValue$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("SetInitialValue", function(i) {
                    i && (i.setAttribute("code.function", "SetInitialValue"), i.setAttribute("outsystems.function.key", "a842bec1-c82a-4444-a9ef-84b215d56989"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("SetInitialValue"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder;
                        t.variables.initialValueIn !== o.BuiltinFunctions.nullTextIdentifier() && (u.value = o.SystemActions.listFilter(t.variables.residenceListVar.dataAttr, function(f) {
                            return f.alpha2Attr === t.variables.initialValueIn
                        }, e), u.value.filteredListOut.isEmpty || (t.variables.input_BaseStateVar = u.value.filteredListOut.getCurrent(e.iterationContext).emojiAttr + " " + u.value.filteredListOut.getCurrent(e.iterationContext).nameAttr, t.variables.countryShortCodeVar = t.variables.initialValueIn))
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__setInitialValue$Action
        }
        set _setInitialValue$Action(e) {
            this.__setInitialValue$Action = e
        }
        get _bottomSheetOnToggle$Action() {
            return this.hasOwnProperty("__bottomSheetOnToggle$Action") || (this.__bottomSheetOnToggle$Action = function(e, t) {
                var r = this.model,
                    a = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("BottomSheetOnToggle", function(u) {
                    u && (u.setAttribute("code.function", "BottomSheetOnToggle"), u.setAttribute("outsystems.function.key", "aa4f6165-a864-4a93-bb4d-36af62b52750"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("BottomSheetOnToggle"), t = a.callContext(t);
                        var f = new o.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.Onboarding.CountrySelector.BottomSheetOnToggle$vars")));
                        f.value.isOpenInLocal = e, r.variables.searchedResidenceVar = o.BuiltinFunctions.nullTextIdentifier(), r.variables.filteredResidenceListVar = r.variables.residenceListVar, f.value.isOpenInLocal && o.Logger.startActiveSpan("ScrollToSelection", function(s) {
                            s && (s.setAttribute("code.function", "ScrollToSelection"), s.setAttribute("outsystems.function.key", "82c836e3-cab1-4ebf-9fde-569efa47cc24"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(Y, "ScrollToSelection", "BottomSheetOnToggle", {
                                    CountryShortCode: o.DataConversion.JSNodeParamConverter.to(o.BuiltinFunctions.toLower(r.variables.initialValueIn), o.DataTypes.DataTypes.Text),
                                    CountrySelectionSheet_Id: o.DataConversion.JSNodeParamConverter.to(i.getId("CountrySelectionSheet"), o.DataTypes.DataTypes.Text)
                                }, function(y) {}, {}, {})
                            } finally {
                                s && s.end()
                            }
                        }, 1)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__bottomSheetOnToggle$Action
        }
        set _bottomSheetOnToggle$Action(e) {
            this.__bottomSheetOnToggle$Action = e
        }
        get _dropdownSearchInitialized$Action() {
            return this.hasOwnProperty("__dropdownSearchInitialized$Action") || (this.__dropdownSearchInitialized$Action = function(e, t) {
                var r = this.model,
                    a = this.controller,
                    i = this.idService;
                return o.Logger.startActiveSpan("DropdownSearchInitialized", function(u) {
                    u && (u.setAttribute("code.function", "DropdownSearchInitialized"), u.setAttribute("outsystems.function.key", "b16dcc78-2355-4c16-897c-b81749829291"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("DropdownSearchInitialized"), t = a.callContext(t);
                        var f = new o.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("dashboard.Onboarding.CountrySelector.DropdownSearchInitialized$vars")));
                        f.value.dropdownSearchIdInLocal = e;
                        var s = new o.DataTypes.VariableHolder;
                        s.value = T.setVirtualSelectConfigs$Action(f.value.dropdownSearchIdInLocal, (function() {
                            var y = new ae;
                            return y.ariaLabelledbyAttr = i.getId("Label2"), y.hideClearButtonAttr = P.booleanTypes.true, y
                        })(), t)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__dropdownSearchInitialized$Action
        }
        set _dropdownSearchInitialized$Action(e) {
            this.__dropdownSearchInitialized$Action = e
        }
        get _buttonOnClick$Action() {
            return this.hasOwnProperty("__buttonOnClick$Action") || (this.__buttonOnClick$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("ButtonOnClick", function(i) {
                    i && (i.setAttribute("code.function", "ButtonOnClick"), i.setAttribute("outsystems.function.key", "e95ef10b-52ac-4a50-837a-8776d5205f33"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("ButtonOnClick"), e = r.callContext(e);
                        var u = new o.DataTypes.VariableHolder;
                        u.value = T.bottomSheetOpen$Action(a.getId("CountrySelectionSheet"), e)
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__buttonOnClick$Action
        }
        set _buttonOnClick$Action(e) {
            this.__buttonOnClick$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    a = this.idService;
                return o.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "f5690450-5be2-47e5-a67a-0e33ffb23b81"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e), r._setInitialValue$Action(e), t.variables.errorMessageIn !== o.BuiltinFunctions.nullTextIdentifier() ? t.widgets.get(a.getId("Input_Base")).validAttr = !1 : (t.widgets.get(a.getId("Input_Base")).validAttr = !0, t.widgets.get(a.getId("Input_Base")).validationMessageAttr = o.BuiltinFunctions.nullTextIdentifier())
                    } finally {
                        i && i.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onSearch$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("OnSearch__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnSearch"), a.setAttribute("outsystems.function.key", "0aeacceb-60d7-4e65-b239-42726288b208"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSearch$Action, t, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        bottomSheetOnClickCountry$Action(e, t, r) {
            var a = this.controller;
            return o.Logger.startActiveSpan("BottomSheetOnClickCountry__proxy", function(i) {
                return i && (i.setAttribute("code.function", "BottomSheetOnClickCountry"), i.setAttribute("outsystems.function.key", "6f334027-f1ac-48a3-a22e-c74a2ecafdd4"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._bottomSheetOnClickCountry$Action, r, e, t)
                }, function() {
                    i && i.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "82ecb8d2-8b95-4e9a-95ae-8cc326797a9c"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        setInitialValue$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("SetInitialValue__proxy", function(r) {
                r && (r.setAttribute("code.function", "SetInitialValue"), r.setAttribute("outsystems.function.key", "a842bec1-c82a-4444-a9ef-84b215d56989"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setInitialValue$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        bottomSheetOnToggle$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("BottomSheetOnToggle__proxy", function(a) {
                a && (a.setAttribute("code.function", "BottomSheetOnToggle"), a.setAttribute("outsystems.function.key", "aa4f6165-a864-4a93-bb4d-36af62b52750"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._bottomSheetOnToggle$Action, t, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        dropdownSearchInitialized$Action(e, t) {
            var r = this.controller;
            return o.Logger.startActiveSpan("DropdownSearchInitialized__proxy", function(a) {
                a && (a.setAttribute("code.function", "DropdownSearchInitialized"), a.setAttribute("outsystems.function.key", "b16dcc78-2355-4c16-897c-b81749829291"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._dropdownSearchInitialized$Action, t, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        buttonOnClick$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("ButtonOnClick__proxy", function(r) {
                r && (r.setAttribute("code.function", "ButtonOnClick"), r.setAttribute("outsystems.function.key", "e95ef10b-52ac-4a50-837a-8776d5205f33"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._buttonOnClick$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "f5690450-5be2-47e5-a67a-0e33ffb23b81"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onParametersChanged$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get event_OnCountrySelect$Action() {
            return this.hasOwnProperty("_event_OnCountrySelect$Action") || (this._event_OnCountrySelect$Action = function() {
                return Promise.resolve()
            }), this._event_OnCountrySelect$Action
        }
        set event_OnCountrySelect$Action(e) {
            this._event_OnCountrySelect$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    a = this.idService;
                return t.onReady$Action(e)
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
                var t = this.controller,
                    r = this.model,
                    a = this.idService;
                return t.onParametersChanged$Action(e)
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
            return M.defaultTimeout
        }
    };
    d(c, "ControllerInner");
    let S = c;
    I = S, I.registerVariableGroupType("dashboard.Onboarding.CountrySelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("dashboard.Onboarding.CountrySelector.OnSearch$searchCountryJSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("dashboard.Onboarding.CountrySelector.BottomSheetOnClickCountry$vars", [{
        name: "Residence",
        attrName: "residenceInLocal",
        mandatory: !1,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ShortCode",
        attrName: "shortCodeInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("dashboard.Onboarding.CountrySelector.BottomSheetOnToggle$vars", [{
        name: "IsOpen",
        attrName: "isOpenInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Boolean,
        defaultValue: d(function() {
            return !1
        }, "defaultValue")
    }]), I.registerVariableGroupType("dashboard.Onboarding.CountrySelector.DropdownSearchInitialized$vars", [{
        name: "DropdownSearchId",
        attrName: "dropdownSearchIdInLocal",
        mandatory: !0,
        dataType: o.DataTypes.DataTypes.Text,
        defaultValue: d(function() {
            return ""
        }, "defaultValue")
    }])
}
var I, ge = new o.Controller.ControllerFactory(I, ne);
var C = U.PlaceholderContent,
    je = U.IteratorPlaceholderContent,
    Be = d(function() {
        var S = oe(function(c) {
            var n = c.model,
                e = c.controller,
                t = c.controller.idService,
                r = e.validationService,
                a = e.callContext(),
                i = ue,
                u = de,
                f = {
                    props: c,
                    validateWidget: d(function(l) {
                        c.validateWidget(c, l)
                    }, "validateWidget")
                },
                s = n,
                y = le,
                F = se,
                _ = ie();
            return b.createElement("div", c.rootNodeProperties, y(T.isDesktop$Action(a).isDesktopOut, !1, this, function() {
                return [b.createElement(A, {
                    align: 0,
                    animate: !1,
                    style: "desktop_country-code-dropdown",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "0"
                    },
                    _widgetRecordProvider: s
                }, b.createElement(G, {
                    extendedProperties: {
                        style: "font-family: 'Inter', Arial, sans-serif; font-size: 0.875rem; font-style: normal; font-weight: 400; letter-spacing: 0; line-height: 1.25rem;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: t,
                        name: "Label2"
                    },
                    _widgetRecordProvider: s
                }, b.createElement(p, {
                    value: n.variables.input_LabelIn,
                    _idProps: {
                        service: t,
                        uuid: "2"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: g.calculateDataFetchStatus(n.variables._input_LabelInDataFetchStatus)
                })), b.createElement(J, {
                    getOwnerSpan: d(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        StartingSelection: n.getCachedValue(t.getId("D+n77foK70meks2VqDRQ4A.StartingSelection"), function() {
                            return (function() {
                                var l = new(x.getGenericList(k));
                                return l.pushAll([(function() {
                                    var h = new k;
                                    return h.valueAttr = n.variables.countryShortCodeVar, h.labelAttr = n.variables.input_BaseStateVar, h
                                })()]), l
                            })()
                        }, function() {
                            return n.variables.countryShortCodeVar
                        }, function() {
                            return n.variables.input_BaseStateVar
                        }),
                        ExtendedClass: n.getCachedValue(t.getId("D+n77foK70meks2VqDRQ4A.ExtendedClass"), function() {
                            return n.variables.errorMessageIn !== E.nullTextIdentifier() ? "not-valid" : ""
                        }, function() {
                            return n.variables.errorMessageIn
                        }),
                        _extendedClassInDataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus),
                        OptionalConfigs: n.getCachedValue(t.getId("D+n77foK70meks2VqDRQ4A.OptionalConfigs"), function() {
                            return (function() {
                                var l = new re;
                                return l.isDisabledAttr = !n.variables.enabledIn, l.noResultsTextAttr = w.resolve(V.TranslationsService).getMessage("_4MZbrMNUkGWEFnhFkmF_w#Value.-742472290.1", "No result found"), l.searchPromptAttr = w.resolve(V.TranslationsService).getMessage("w2JXc0igg0aGjhiIPdtPtw#Value.-1822469688.1", "Search"), l.noOptionsTextAttr = w.resolve(V.TranslationsService).getMessage("vsYeWbQMSE2MTdkPGQAUdw#Value.-742472290.1", "No result found"), l.sanitizeDropdownValuesAttr = !0, l
                            })()
                        }, function() {
                            return n.variables.enabledIn
                        }),
                        _optionalConfigsInDataFetchStatus: g.calculateDataFetchStatus(n.variables._enabledInDataFetchStatus),
                        Prompt: w.resolve(V.TranslationsService).getMessage("V9lH14NdTE27+jD3RtaPGg#Value.-1822154468.1", "Select"),
                        OptionsList: n.getCachedValue(t.getId("D+n77foK70meks2VqDRQ4A.OptionsList"), function() {
                            return te.JSConversions.typeConvertRecordList(n.variables.filteredResidenceListVar.dataAttr, new(x.getGenericList(k)), function(l, h) {
                                return h.valueAttr = l.alpha2Attr, h.labelAttr = l.emojiAttr + "  " + l.nameAttr, h
                            })
                        }, function() {
                            return n.variables.filteredResidenceListVar.dataAttr
                        })
                    },
                    events: {
                        _handleError: d(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        initialized$Action: d(function(l) {
                            var h = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.dropdownSearchInitialized$Action(l, e.callContext(h))
                        }, "initialized$Action"),
                        onChanged$Action: d(function(l, h) {
                            return Promise.resolve().then(function() {
                                var O = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                return e.bottomSheetOnClickCountry$Action(h.getCurrent(a.iterationContext).labelAttr, h.getCurrent(a.iterationContext).valueAttr, e.callContext(O))
                            })
                        }, "onChanged$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: s,
                    _dependencies: []
                })), b.createElement(A, {
                    align: 0,
                    animate: !0,
                    visible: n.getCachedValue(t.getId("01qso4hx60eLkMfdICWWGg.Visible"), function() {
                        return n.variables.errorMessageIn !== E.nullTextIdentifier()
                    }, function() {
                        return n.variables.errorMessageIn
                    }),
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: s,
                    visible_dataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
                }, b.createElement(p, {
                    style: "validation-message",
                    value: n.variables.errorMessageIn,
                    _idProps: {
                        service: t,
                        uuid: "5"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
                }))]
            }, function() {
                return [b.createElement(A, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "6"
                    },
                    _widgetRecordProvider: s
                }, b.createElement(G, {
                    extendedProperties: {
                        style: "font-family: 'Inter', Arial, sans-serif; font-size: 0.875rem; font-style: normal; font-weight: 400; letter-spacing: 0; line-height: 1.25rem;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mandatory: !1,
                    targetWidget: "Input_Base",
                    _idProps: {
                        service: t,
                        name: "Label"
                    },
                    _widgetRecordProvider: s
                }, b.createElement(p, {
                    value: n.variables.input_LabelIn,
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: g.calculateDataFetchStatus(n.variables._input_LabelInDataFetchStatus)
                })), b.createElement(H, {
                    getOwnerSpan: d(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        AlignIconRight: !0
                    },
                    events: {
                        _handleError: d(function(l) {
                            e.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        uuid: "9",
                        alias: "2"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        icon: new C(function() {
                            return [b.createElement(fe, {
                                extendedEvents: {
                                    onClick: d(function() {
                                        var l = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                        e.buttonOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                image: ee.VersionedURL.getVersionedUrl("img/dashboard.iconchevron5.svg"),
                                style: "cursor-pointer",
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: s
                            })]
                        }),
                        input: new C(function() {
                            return [b.createElement(W, {
                                _validationProps: {
                                    validationService: r
                                },
                                enabled: n.variables.enabledIn,
                                extendedEvents: {
                                    onClick: d(function() {
                                        var l = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                        e.buttonOnClick$Action(e.callContext(l))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    readOnly: "True",
                                    style: "font-size: 14px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: 0,
                                mandatory: !1,
                                maxLength: 50,
                                prompt: w.resolve(V.TranslationsService).getMessage("2JjdN__ewku+iyiF24oAAw#ValueExpression.-1822154468.1", "Select"),
                                style: n.getCachedValue(t.getId("Input_Base.Style"), function() {
                                    return "form-control " + (n.variables.errorMessageIn !== E.nullTextIdentifier() ? "not-valid" : "")
                                }, function() {
                                    return n.variables.errorMessageIn
                                }),
                                variable: n.createVariable(L.DataTypes.Text, n.variables.input_BaseStateVar, function(l) {
                                    n.variables.input_BaseStateVar = l
                                }),
                                _idProps: {
                                    service: t,
                                    name: "Input_Base"
                                },
                                _widgetRecordProvider: s,
                                enabled_dataFetchStatus: g.calculateDataFetchStatus(n.variables._enabledInDataFetchStatus),
                                style_dataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
                            })]
                        })
                    },
                    _dependencies: [i(n.variables.errorMessageIn), i(n.variables._errorMessageInDataFetchStatus), i(n.variables._enabledInDataFetchStatus), i(n.variables.enabledIn), i(n.variables.input_BaseStateVar)]
                }), b.createElement(A, {
                    align: 0,
                    animate: !0,
                    visible: n.getCachedValue(t.getId("UJ+BBFcx0kiGODFsI1IHRw.Visible"), function() {
                        return n.variables.errorMessageIn !== E.nullTextIdentifier()
                    }, function() {
                        return n.variables.errorMessageIn
                    }),
                    _idProps: {
                        service: t,
                        uuid: "12"
                    },
                    _widgetRecordProvider: s,
                    visible_dataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
                }, b.createElement(p, {
                    style: "validation-message",
                    value: n.variables.errorMessageIn,
                    _idProps: {
                        service: t,
                        uuid: "13"
                    },
                    _widgetRecordProvider: s,
                    value_dataFetchStatus: g.calculateDataFetchStatus(n.variables._errorMessageInDataFetchStatus)
                }))), b.createElement($, {
                    getOwnerSpan: d(function() {
                        return _.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: d(function() {
                        return _.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Shape: P.shape.rounded,
                        ExtendedClass: "display-flex flex-direction-column gap-s bottom-sheet country-selector"
                    },
                    events: {
                        _handleError: d(function(l) {
                            e.handleError(l)
                        }, "_handleError"),
                        onToggle$Action: d(function(l, h) {
                            var O = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                            e.bottomSheetOnToggle$Action(h, e.callContext(O))
                        }, "onToggle$Action")
                    },
                    _validationProps: {
                        validationService: r
                    },
                    _idProps: {
                        service: t,
                        name: "CountrySelectionSheet",
                        alias: "3"
                    },
                    _widgetRecordProvider: s,
                    placeholders: {
                        topBar: new C(function() {
                            return [b.createElement(p, {
                                extendedProperties: {
                                    style: "font-family: var(--core-fontFamily-inter, 'Inter', system-ui, Arial, sans-serif); font-size: 20px; font-weight: 800; Height: 28px;"
                                },
                                gridProperties: {
                                    width: "246px"
                                },
                                value: n.variables.input_LabelIn,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: s,
                                value_dataFetchStatus: g.calculateDataFetchStatus(n.variables._input_LabelInDataFetchStatus)
                            }), b.createElement(A, {
                                align: 0,
                                animate: !1,
                                style: "margin-top-s",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: s
                            }, b.createElement(Q, {
                                getOwnerSpan: d(function() {
                                    return _.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: d(function() {
                                    return _.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {},
                                events: {
                                    _handleError: d(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: r
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "17",
                                    alias: "4"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    input: new C(function() {
                                        return [b.createElement(W, {
                                            _validationProps: {
                                                validationService: r
                                            },
                                            enabled: !0,
                                            extendedProperties: {
                                                style: "height: 32px; margin-bottom: 5px;"
                                            },
                                            gridProperties: {
                                                width: "340px"
                                            },
                                            inputType: 8,
                                            mandatory: !1,
                                            maxLength: 0,
                                            onChange: d(function() {
                                                var l = typeof a != "undefined" && a !== null ? a.clone() : e.callContext().clone();
                                                e.onSearch$Action(n.variables.searchedResidenceVar, e.callContext(l))
                                            }, "onChange"),
                                            prompt: w.resolve(V.TranslationsService).getMessage("W4n4lr+2JUmXM4dMpunghg#ValueExpression.-1822469688.1", "Search"),
                                            style: "form-control font-size-base full-width",
                                            variable: n.createVariable(L.DataTypes.Text, n.variables.searchedResidenceVar, function(l) {
                                                n.variables.searchedResidenceVar = l
                                            }),
                                            _idProps: {
                                                service: t,
                                                name: "Input_SearchedItem"
                                            },
                                            _widgetRecordProvider: s
                                        })]
                                    })
                                },
                                _dependencies: [i(n.variables.searchedResidenceVar)]
                            }))]
                        }),
                        content: new C(function() {
                            return [b.createElement(A, {
                                align: 0,
                                animate: !0,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                visible: n.variables.filteredResidenceListVar.dataAttr.isEmpty,
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: s
                            }, b.createElement(be, {
                                extendedProperties: {
                                    style: "color: rgba(0, 0, 0, 0.48);"
                                },
                                text: [F(u("aImvaF714UacQAk8r28QvA#Value", "No result found"))],
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: s
                            })), b.createElement(ce, {
                                animateItems: !0,
                                extendedProperties: {
                                    "disable-virtualization": "True"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: n.variables.filteredResidenceListVar.dataAttr,
                                style: "list list-group countries-list",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: s,
                                placeholders: {
                                    content: new je(function(l, h) {
                                        return [b.createElement(he, {
                                            extendedProperties: {
                                                "data-shortcode": n.getCachedValue(l.getId("ListItem2.data-shortcode"), function() {
                                                    return E.toLower(n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).alpha2Attr)
                                                }, function() {
                                                    return n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).alpha2Attr
                                                }),
                                                style: "cursor: pointer; height: fit-content; padding-left: 16px;"
                                            },
                                            onClick: d(function() {
                                                return Promise.resolve().then(function() {
                                                    var O = typeof h != "undefined" && h !== null ? h.clone() : e.callContext().clone();
                                                    return e.bottomSheetOnClickCountry$Action(n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).nameAttr, n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).alpha2Attr, e.callContext(O))
                                                })
                                            }, "onClick"),
                                            style: n.getCachedValue(l.getId("ListItem2.Style"), function() {
                                                return (n.variables.filteredResidenceListVar.dataAttr.getCurrentRowNumber(h.iterationContext) === 0 ? "margin-bottom-base" : "margin-y-base") + (n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).alpha2Attr === n.variables.countryShortCodeVar ? " selected" : "")
                                            }, function() {
                                                return n.variables.filteredResidenceListVar.dataAttr.getCurrentRowNumber(h.iterationContext)
                                            }, function() {
                                                return n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).alpha2Attr
                                            }, function() {
                                                return n.variables.countryShortCodeVar
                                            }),
                                            triggerActionOnFullSwipeLeft: !1,
                                            triggerActionOnFullSwipeRight: !1,
                                            _idProps: {
                                                service: l,
                                                name: "ListItem2"
                                            },
                                            _widgetRecordProvider: s,
                                            placeholders: {
                                                leftActions: C.Empty,
                                                content: new C(function() {
                                                    return [b.createElement(A, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "display: flex; font-size: 18px; font-weight: bold; gap: 8px; height: fit-content;"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "23"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }, b.createElement(p, {
                                                        extendedProperties: {
                                                            style: "height: 16px;"
                                                        },
                                                        gridProperties: {
                                                            width: "24px"
                                                        },
                                                        value: n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).emojiAttr,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }), b.createElement(p, {
                                                        extendedProperties: {
                                                            style: "font-family: Inter; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;"
                                                        },
                                                        value: n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).nameAttr,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "25"
                                                        },
                                                        _widgetRecordProvider: s
                                                    }))]
                                                }),
                                                rightActions: C.Empty
                                            },
                                            _dependencies: [i(n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).nameAttr), i(n.variables.filteredResidenceListVar.dataAttr.getCurrent(h.iterationContext).emojiAttr)]
                                        })]
                                    }, a, t, "1")
                                },
                                _dependencies: [i(n.variables.countryShortCodeVar)]
                            })]
                        })
                    },
                    _dependencies: [i(n.variables.countryShortCodeVar), i(n.variables.filteredResidenceListVar.dataAttr), i(n.variables.searchedResidenceVar), i(n.variables._input_LabelInDataFetchStatus), i(n.variables.input_LabelIn)]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: d(function() {
                return {
                    codeFunction: "CountrySelector",
                    functionKey: "94324b35-9f42-44e4-8879-50f57d8e62ec",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Onboarding.CountrySelector",
            modelFactory: _e,
            controllerFactory: ge
        });
        return S.getCssDependencies = function() {
            return ["css/dashboard.Onboarding.CountrySelector.css", "css/OutSystemsReactWidgets.css"]
        }, S.getJsDependencies = function() {
            return []
        }, S.getBlocks = function() {
            return [J, H, $, Q]
        }, S
    }, "componentFactory"),
    Et = Be();
export {
    Et as a
};