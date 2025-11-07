import {
    i as I,
    j,
    k as q,
    q as Q
} from "./_oschunk-O5KC3WOL.js";
import {
    a as Y,
    g as S,
    m as L,
    o as W,
    q as R,
    r as F,
    s as M,
    t as U
} from "./_oschunk-NVHFAAS2.js";
import {
    a as H
} from "./_oschunk-AW35UT34.js";
import {
    Ka as A,
    h
} from "./_oschunk-WCMQG33O.js";
import {
    X as k,
    c as l,
    f as J
} from "./_oschunk-DFKJJKI4.js";
var i = k,
    p = class p extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("MarlketListWithIcons", "marlketListWithIconsVar", "MarlketListWithIcons", !0, !1, i.DataTypes.DataTypes.RecordList, function() {
                return i.DataTypes.ImmutableBase.getData(new(i.GenericTypeCache.getGenericList(h)))
            }, !1, i.GenericTypeCache.getGenericList(h)), this.attr("MarketList", "marketListIn", "MarketList", !0, !1, i.DataTypes.DataTypes.RecordList, function() {
                return i.DataTypes.ImmutableBase.getData(new i.DataTypes.TextList)
            }, !1, i.DataTypes.TextList), this.attr("_marketListInDataFetchStatus", "_marketListInDataFetchStatus", "_marketListInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(p, "VariablesRecord");
var f = p;
f.init();
var E = class E extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(E, "WidgetsRecord");
var C = E,
    w = class w extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return f
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "MarketList" in n && (this.variables.marketListIn = n.MarketList, "_marketListInDataFetchStatus" in n && (this.variables._marketListInDataFetchStatus = n._marketListInDataFetchStatus))
        }
    };
l(w, "Model");
var g = w;
g._hasValidationWidgetsValue = void 0;
var P = new i.Model.ModelFactory(g);
var _ = J(Y());
var z = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0633\u0644\u0629",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0627\u0644\u0633\u0644\u0639",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u0641\u0648\u0631\u0643\u0633: \u0642\u064A\u0627\u0633\u064A",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u0641\u0648\u0631\u0643\u0633 (\u0631\u0626\u064A\u0633\u064A/\u062B\u0627\u0646\u0648\u064A)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u0629",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "\u0627\u0644\u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644\u0629 \u0641\u064A \u0627\u0644\u0628\u0648\u0631\u0635\u0629",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0627\u0644\u0631\u0642\u0645\u064A\u0629",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u0633\u0647\u0645",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0627\u0644\u0623\u0633\u0647\u0645"
    },
    B = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u09AC\u09BE\u09B8\u09CD\u0995\u09C7\u099F \u09B8\u09C2\u099A\u0995",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0995\u09AE\u09CB\u09A1\u09BF\u099F\u09BF\u099C",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u09AB\u09B0\u09C7\u0995\u09CD\u09B8: \u09AE\u09BE\u09A8\u0995",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u09AB\u09B0\u09C7\u0995\u09CD\u09B8 (\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8/\u0989\u09AA-\u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09BF\u0995)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u09B8\u09BF\u09A8\u09CD\u09A5\u09C7\u099F\u09BF\u0995 \u0987\u09A8\u09A1\u09BF\u09B8",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F\u09CB\u0995\u09BE\u09B0\u09C7\u09A8\u09CD\u09B8\u09BF",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u09B8\u09CD\u099F\u0995 \u09B8\u09C2\u099A\u0995",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u09B8\u09CD\u099F\u0995\u09B8"
    },
    $ = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Korbindizes",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Rohstoffe",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: Standard",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Synthetische Indizes",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Kryptow\xE4hrungen",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Aktienindizes",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Aktien"
    },
    Z = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\xCDndices de cesta",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Materias primas",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: est\xE1ndar",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (mayor/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\xCDndices sint\xE9ticos",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Criptomonedas",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\xCDndices burs\xE1tiles",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Acciones"
    },
    ee = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Indices panier",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Mati\xE8res premi\xE8res",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex : standard",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (majeur/mineur)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Indices synth\xE9tiques",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Cryptomonnaies",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Indices boursiers",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Actions"
    },
    ae = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Indici basket",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Commodities",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: standard",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Indici sintetici",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Criptovalute",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Indici di borsa",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Azioni"
    },
    te = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u179F\u1793\u17D2\u1791\u179F\u17D2\u179F\u1793\u17CD\u1794\u17B6\u179B\u17CB\u1794\u17C4\u17C7",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u1791\u17C6\u1793\u17B7\u1789",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: \u179F\u17D2\u178F\u1784\u17CB\u178A\u17B6\u179A",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u179F\u1793\u17D2\u1791\u179F\u17D2\u179F\u1793\u17CD\u179F\u17C6\u1799\u17C4\u1782",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u179A\u17BC\u1794\u17B7\u1799\u1794\u17D0\u178E\u17D2\u178E\u1782\u17D2\u179A\u17B8\u1794\u178F\u17BC",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u179F\u1793\u17D2\u1791\u179F\u17D2\u179F\u1793\u17CD\u1797\u17B6\u1782\u17A0\u17CA\u17BB\u1793",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u1797\u17B6\u1782\u17A0\u17CA\u17BB\u1793"
    },
    re = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\uBC14\uC2A4\uCF13 \uC9C0\uC218",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\uC0C1\uD488",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: \uD45C\uC900",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\uC678\uD658 (\uC8FC\uC694/\uBD80\uCC28)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\uD569\uC131 \uC9C0\uC218",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\uC554\uD638\uD654\uD3D0",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\uC8FC\uAC00\uC9C0\uC218",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\uC8FC\uC2DD"
    },
    se = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u04AE\u043D\u0434\u0441\u044D\u043D \u0438\u043D\u0434\u0435\u043A\u0441\u04AF\u04AF\u0434\u0438\u0439\u043D \u0441\u0430\u0433\u0441",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0411\u0430\u0440\u0430\u0430 \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D\u04AF\u04AF\u0434",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u0424\u043E\u0440\u0435\u043A\u0441: \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u0424\u043E\u0440\u0435\u043A\u0441 (\u0438\u0445 \u0445\u044D\u043C\u0436\u044D\u044D/\u0434\u044D\u0434 \u0445\u044D\u043C\u0436\u044D\u044D)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u04AE\u0439\u043B\u0434\u0432\u044D\u0440\u043B\u044D\u043B\u0438\u0439\u043D \u0438\u043D\u0434\u0435\u043A\u0441\u04AF\u04AF\u0434",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u041A\u0440\u0438\u043F\u0442\u043E \u0432\u0430\u043B\u044E\u0442\u0443\u0443\u0434",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0425\u0443\u0432\u044C\u0446\u0430\u0430\u043D\u044B \u0438\u043D\u0434\u0435\u043A\u0441\u04AF\u04AF\u0434",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0425\u0443\u0432\u044C\u0446\u0430\u0430"
    },
    ne = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Indeksy koszykowe",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Surowce",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: standard",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (g\u0142\xF3wny/podporz\u0105dkowy)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Indeksy syntetyczne",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Kryptowaluty",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Indeksy gie\u0142dowe",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Akcje"
    },
    ie = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\xCDndices de cesta",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Commodities",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: padr\xE3o",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (principal/secund\xE1rio)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\xCDndices sint\xE9ticos",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Criptomoedas",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\xCDndices de a\xE7\xF5es",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "A\xE7\xF5es"
    },
    oe = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u0418\u043D\u0434\u0435\u043A\u0441\u044B \u043A\u043E\u0440\u0437\u0438\u043D",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0422\u043E\u0432\u0430\u0440\u044B",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u0424\u043E\u0440\u0435\u043A\u0441: \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u0424\u043E\u0440\u0435\u043A\u0441 (\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439/\u043C\u043B\u0430\u0434\u0448\u0438\u0439)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u043D\u0434\u0435\u043A\u0441\u044B",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0418\u043D\u0434\u0435\u043A\u0441\u044B \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u0439 \u0431\u0438\u0440\u0436\u0438",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0410\u043A\u0446\u0438\u0438"
    },
    le = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u0D9A\u0DD6\u0DA9 \u0DAF\u0DBB\u0DCA\u0DC1\u0D9A",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0DB7\u0DCF\u0DAB\u0DCA\u0DA9",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: \u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DD2\u0DAD\u0DD2\u0DBA",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u0D9A\u0DD8\u0DAD\u0DD2\u0DB8 \u0DAF\u0DBB\u0DCA\u0DC1\u0D9A",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DB4\u0DCA\u0DA7\u0DDD \u0DB8\u0DD4\u0DAF\u0DBD\u0DCA",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0D9A\u0DDC\u0DA7\u0DC3\u0DCA \u0DAF\u0DBB\u0DCA\u0DC1\u0D9A",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0D9A\u0DDC\u0DA7\u0DC3\u0DCA"
    },
    de = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Viashiria vya kikapu",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Bidhaa",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: ya kawaida",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Viashiria vya bandia",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Sarafu za Kidijitali",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Viashiria vya soko la hisa",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Hisa"
    },
    ue = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u0B95\u0BC2\u0B9F\u0BC8 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0BAA\u0BCA\u0BB0\u0BC1\u0BB3\u0BCD\u0B95\u0BB3\u0BCD",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: \u0BB5\u0BB4\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (\u0BAA\u0BC6\u0BB0\u0BBF\u0BA4\u0BC1\u0BAE\u0BCD/\u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u0B9A\u0BC6\u0BAF\u0BB1\u0BCD\u0B95\u0BC8 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u0BA8\u0BBE\u0BA3\u0BAF\u0B99\u0BCD\u0B95\u0BB3\u0BCD (Cryptocurrencies)",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0BAA\u0B99\u0BCD\u0B95\u0BC1\u0B9A\u0BCD \u0B9A\u0BC1\u0B9F\u0BCD\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0BAA\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD"
    },
    ce = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u0E14\u0E31\u0E0A\u0E19\u0E35\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E42\u0E20\u0E04\u0E20\u0E31\u0E13\u0E11\u0E4C",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: \u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u0E1F\u0E2D\u0E40\u0E23\u0E47\u0E01\u0E0B\u0E4C (\u0E2B\u0E25\u0E31\u0E01/\u0E23\u0E2D\u0E07)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u0E14\u0E31\u0E0A\u0E19\u0E35\u0E2A\u0E31\u0E07\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u0E2A\u0E01\u0E38\u0E25\u0E40\u0E07\u0E34\u0E19\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u0E14\u0E31\u0E0A\u0E19\u0E35\u0E2B\u0E38\u0E49\u0E19",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u0E2B\u0E38\u0E49\u0E19"
    },
    Ve = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Sepet endeksleri",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Emtia",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: standart",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (major/minor)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Sentetik endeksler",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Kripto paralar",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Hisse senedi endeksleri",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Hisseler"
    },
    ve = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Savat indekslari",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Sanoat mahsulotlari",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: standart",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (asosiy/kichik)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Sintetik indekslar",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Kriptovalyutalar",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Aksiya indekslari",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Aktsiyalar"
    },
    he = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Savat indekslari",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "Sanoat mahsulotlari",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: standart",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (asosiy/kichik)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Sintetik indekslar",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETF",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Kriptovalyutalar",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Aksiya indekslari",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "Aktsiyalar"
    },
    _e = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "Ch\u1EC9 s\u1ED1 gi\u1ECF h\xE0ng",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "H\xE0ng h\xF3a",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "Forex: ti\xEAu chu\u1EA9n",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "Forex (ch\xEDnh/th\u1EE9 c\u1EA5p)",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "Ch\u1EC9 s\u1ED1 t\u1ED5ng h\u1EE3p",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "ETFs",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "Ti\u1EC1n \u0111i\u1EC7n t\u1EED",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "Ch\u1EC9 s\u1ED1 ch\u1EE9ng kho\xE1n",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "C\u1ED5 phi\u1EBFu"
    },
    me = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u6346\u7ED1\u6307\u6570",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u5546\u54C1",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u5916\u6C47\uFF1A\u6807\u51C6",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u5916\u6C47\uFF08\u4E3B\u8981/\u6B21\u8981\uFF09",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u5408\u6210\u6307\u6570",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "\u4EA4\u6613\u6240\u4EA4\u6613\u57FA\u91D1",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u52A0\u5BC6\u8D27\u5E01",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u80A1\u4EF7\u6307\u6570",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u80A1\u7968"
    },
    ye = {
        "HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1": "Derived FX",
        "hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1": "\u7C43\u5B50\u6307\u6578",
        "Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1": "\u5546\u54C1",
        "aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1": "\u5916\u532F\uFF1A\u6A19\u6E96",
        "9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1": "\u5916\u532F\uFF08\u4E3B\u8981/\u6B21\u8981\uFF09",
        "vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1": "\u5408\u6210\u6307\u6578",
        "iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1": "\u4EA4\u6613\u6240\u8CB7\u8CE3\u57FA\u91D1",
        "76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1": "\u52A0\u5BC6\u8CA8\u5E63",
        "uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1": "\u80A1\u50F9\u6307\u6578",
        "L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1": "\u80A1\u7968"
    },
    N = {
        "ar-001": {
            translations: z,
            isRTL: !0
        },
        "bn-BD": {
            translations: B,
            isRTL: !1
        },
        "de-DE": {
            translations: $,
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
            translations: ae,
            isRTL: !1
        },
        "km-KH": {
            translations: te,
            isRTL: !1
        },
        "ko-KR": {
            translations: re,
            isRTL: !1
        },
        "mn-MN": {
            translations: se,
            isRTL: !1
        },
        "pl-PL": {
            translations: ne,
            isRTL: !1
        },
        "pt-PT": {
            translations: ie,
            isRTL: !1
        },
        "ru-RU": {
            translations: oe,
            isRTL: !1
        },
        "si-LK": {
            translations: le,
            isRTL: !1
        },
        "sw-KE": {
            translations: de,
            isRTL: !1
        },
        "ta-IN": {
            translations: ue,
            isRTL: !1
        },
        "th-TH": {
            translations: ce,
            isRTL: !1
        },
        "tr-TR": {
            translations: Ve,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ve,
            isRTL: !1
        },
        "uz-UZ": {
            translations: he,
            isRTL: !1
        },
        "vi-VN": {
            translations: _e,
            isRTL: !1
        },
        "zh-CN": {
            translations: me,
            isRTL: !1
        },
        "zh-TW": {
            translations: ye,
            isRTL: !1
        }
    };

function x(t, n, u, a) {
    let s = JSON.parse(t.MarketList),
        r = {
            "Forex: standard": "/dashboard/img/dashboard.forex.svg",
            "Forex: major/minor": "/dashboard/img/dashboard.forex.svg",
            Stocks: "/dashboard/img/dashboard.stocks.svg",
            "Stock Indices": "/dashboard/img/dashboard.stockindices.svg",
            Commodities: "/dashboard/img/dashboard.commodities.svg",
            Cryptocurrencies: "/dashboard/img/dashboard.cryptocurrencies.svg",
            ETFs: "/dashboard/img/dashboard.etf.svg",
            "Synthetic indices": "/dashboard/img/dashboard.syntheticindices.svg",
            "Basket indices": "/dashboard/img/dashboard.basketindices.svg",
            "Derived FX": "/dashboard/img/dashboard.derivedfx.svg"
        },
        c = {
            "Forex: standard": t.Name_ForexStandard,
            "Forex: major/minor": t.Name_ForexMajorMinor,
            Stocks: t.Name_Stocks,
            "Stock Indices": t.Name_StockIndices,
            Commodities: t.Name_Commodities,
            Cryptocurrencies: t.Name_Crypto,
            ETFs: t.Name_ETFs,
            "Synthetic indices": t.Name_SyntheticIndices,
            "Basket indices": t.Name_BasketIndices,
            "Derived FX": t.Name_DerivFx
        },
        o = s == null ? void 0 : s.map(v => ({
            name: c[v],
            icon: r[v]
        }));
    t.MarketsListWithIcon = JSON.stringify(o)
}
l(x, "default");
var e = k; {
    let n = class n extends e.Controller.BaseViewController {
        constructor(a, s, r) {
            super(a, s, r, N);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var s = this.model,
                    r = this.controller,
                    c = this.idService;
                return e.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "20eaf58d-e5c7-4865-b10f-8cb8eefdd13f"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnReady"), a = r.callContext(a);
                        var v = new e.DataTypes.VariableHolder,
                            b = new e.DataTypes.VariableHolder(new e.DataTypes.JSONSerializeOutputType),
                            V = new e.DataTypes.VariableHolder(new(e.Controller.BaseController.getJSONDeserializeOutputType(e.GenericTypeCache.getGenericList(h))));
                        b.value.jSONOut = e.JSONUtils.serializeToJSON(s.variables.marketListIn, !1, !1, e.DataTypes.DataTypes.Text), v.value = e.Logger.startActiveSpan("IconMap", function(d) {
                            d && (d.setAttribute("code.function", "IconMap"), d.setAttribute("outsystems.function.key", "08a5e613-d80f-468e-ac31-2db8f80b27f5"), d.setAttribute("outsystems.function.owner.name", "dashboard"), d.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return r.safeExecuteJSNode(x, "IconMap", "OnReady", {
                                    Name_Stocks: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("L08cCbSjb0e9nVyRVudpdg#Value.-1808213955.1", "Stocks"), e.DataTypes.DataTypes.Text),
                                    Name_StockIndices: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("uWwNEHko6kejvgXj2xqAng#Value.-1537691555.1", "Stock Indices"), e.DataTypes.DataTypes.Text),
                                    Name_Crypto: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("76ULGVKhW02vftbWQ_xiOA#Value.-222169072.1", "Cryptocurrencies"), e.DataTypes.DataTypes.Text),
                                    MarketList: e.DataConversion.JSNodeParamConverter.to(b.value.jSONOut, e.DataTypes.DataTypes.Text),
                                    Name_ETFs: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("iKAtOWvacEa3ogVknvc3hQ#Value.2138588.1", "ETFs"), e.DataTypes.DataTypes.Text),
                                    Name_SyntheticIndices: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("vr+7cVdpC0+Vx3TCf29M8Q#Value.407861676.1", "Synthetic indices"), e.DataTypes.DataTypes.Text),
                                    Name_ForexMajorMinor: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("9H6wrEIIKk2XMCxYsY0UuQ#Value.-621036978.1", "Forex (major/minor)"), e.DataTypes.DataTypes.Text),
                                    Name_ForexStandard: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("aKxVtKULfUScJ6P1QpV+8g#Value.-1153759233.1", "Forex: standard"), e.DataTypes.DataTypes.Text),
                                    Name_Commodities: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("Xjm3yOKn5kSPW8aVHvUmMw#Value.-533956501.1", "Commodities"), e.DataTypes.DataTypes.Text),
                                    Name_BasketIndices: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("hO_y0q3T_k2R1Thrwq2WHA#Value.1261356909.1", "Basket indices"), e.DataTypes.DataTypes.Text),
                                    Name_DerivFx: e.DataConversion.JSNodeParamConverter.to(e.Injector.resolve(e.ServiceNames.TranslationsService).getMessage("HbDq+AYDwEqO29eKUJ_86w#Value.642725333.1", "Derived FX"), e.DataTypes.DataTypes.Text),
                                    MarketsListWithIcon: e.DataConversion.JSNodeParamConverter.to("", e.DataTypes.DataTypes.Text)
                                }, function(K) {
                                    var T = new(r.constructor.getVariableGroupType("dashboard.CFDs.MarketsList.OnReady$iconMapJSResult"));
                                    return T.marketsListWithIconOut = e.DataConversion.JSNodeParamConverter.from(K.MarketsListWithIcon, e.DataTypes.DataTypes.Text), T
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), V.value.dataOut = e.JSONUtils.deserializeFromJSON(v.value.marketsListWithIconOut, e.GenericTypeCache.getGenericList(h), !1), s.variables.marlketListWithIconsVar = V.value.dataOut
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        onReady$Action(a) {
            var s = this.controller;
            return e.Logger.startActiveSpan("OnReady__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "20eaf58d-e5c7-4865-b10f-8cb8eefdd13f"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onReady$Action, a)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(a) {
                var s = this.controller,
                    r = this.model,
                    c = this.idService;
                return s.onReady$Action(a)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(a) {
            this._onReadyEventHandler = a
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(a) {
            this._onRenderEventHandler = a
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(a) {
            this._onDestroyEventHandler = a
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(a) {
                var s = this.controller,
                    r = this.model,
                    c = this.idService;
                return s.onReady$Action(a)
            }), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(a) {
            this._onParametersChangedEventHandler = a
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(a) {
            this._onSyncStartEventHandler = a
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(a) {
            this._onSyncCompleteEventHandler = a
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(a) {
            this._onSyncErrorEventHandler = a
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(a) {
                return controller.handleError(a)
            }), this._handleError
        }
        set handleError(a) {
            this._handleError = a
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return A.defaultTimeout
        }
    };
    l(n, "ControllerInner");
    let t = n;
    D = t, D.registerVariableGroupType("dashboard.CFDs.MarketsList.OnReady$iconMapJSResult", [{
        name: "MarketsListWithIcon",
        attrName: "marketsListWithIconOut",
        mandatory: !0,
        dataType: e.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var D, X = new e.Controller.ControllerFactory(D, H);
var O = S.PlaceholderContent,
    ke = S.IteratorPlaceholderContent,
    fe = l(function() {
        var t = W(function(n) {
            var u = n.model,
                a = n.controller,
                s = n.controller.idService,
                r = a.validationService,
                c = a.callContext(),
                o = M,
                v = U,
                b = {
                    props: n,
                    validateWidget: l(function(m) {
                        n.validateWidget(n, m)
                    }, "validateWidget")
                },
                V = u,
                d = F,
                K = R,
                T = L();
            return _.createElement("div", n.rootNodeProperties, _.createElement(j, {
                animateItems: !0,
                extendedProperties: {
                    "disable-virtualization": "True"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: u.variables.marlketListWithIconsVar,
                style: "list list-group market-list",
                tag: "div",
                _idProps: {
                    service: s,
                    name: "List"
                },
                _widgetRecordProvider: V,
                placeholders: {
                    content: new ke(function(m, y) {
                        return [_.createElement(q, {
                            style: "list-item market-list-item",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: m,
                                name: "ListItem"
                            },
                            _widgetRecordProvider: V,
                            placeholders: {
                                leftActions: O.Empty,
                                content: new O(function() {
                                    return [_.createElement(Q, {
                                        type: 1,
                                        url: u.variables.marlketListWithIconsVar.getCurrent(y.iterationContext).iconAttr,
                                        _idProps: {
                                            service: m,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: V
                                    }), _.createElement(I, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "market-list__label",
                                        value: u.variables.marlketListWithIconsVar.getCurrent(y.iterationContext).nameAttr,
                                        _idProps: {
                                            service: m,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: V
                                    })]
                                }),
                                rightActions: O.Empty
                            },
                            _dependencies: [o(u.variables.marlketListWithIconsVar.getCurrent(y.iterationContext).nameAttr), o(u.variables.marlketListWithIconsVar.getCurrent(y.iterationContext).iconAttr)]
                        })]
                    }, c, s, "1")
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "MarketsList",
                    functionKey: "b28bdd7e-3244-43a3-ae23-61274fef2f20",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.MarketsList",
            modelFactory: P,
            controllerFactory: X
        });
        return t.getCssDependencies = function() {
            return ["css/dashboard.CFDs.MarketsList.css", "css/OutSystemsReactWidgets.css"]
        }, t.getJsDependencies = function() {
            return []
        }, t.getBlocks = function() {
            return []
        }, t
    }, "componentFactory"),
    Qe = fe();
export {
    Qe as a
};