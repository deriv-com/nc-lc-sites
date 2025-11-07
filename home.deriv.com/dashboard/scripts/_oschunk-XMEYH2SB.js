import {
    a as pe
} from "./_oschunk-UCREYJML.js";
import {
    a as Ve
} from "./_oschunk-X4B4R4YZ.js";
import {
    a as ge
} from "./_oschunk-TNUZI776.js";
import {
    a as fe
} from "./_oschunk-J3DG2BKZ.js";
import {
    b as ke,
    h as _,
    i as E,
    j as ne,
    k as se,
    q as z,
    x as A
} from "./_oschunk-O5KC3WOL.js";
import {
    a as Le,
    g as J,
    m as $,
    o as ee,
    q as te,
    r as ae,
    s as re,
    t as ie
} from "./_oschunk-NVHFAAS2.js";
import {
    a as X
} from "./_oschunk-AW35UT34.js";
import {
    Ga as M,
    Ha as Y,
    Ja as Re,
    Ka as H,
    ia as _e,
    o as me,
    q,
    r as L
} from "./_oschunk-WCMQG33O.js";
import {
    J as C,
    X as I,
    c as v,
    f as Ae,
    n as N,
    o as Z,
    q as j,
    x as O
} from "./_oschunk-DFKJJKI4.js";
var D = I,
    ye = class ye extends D.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("TransactionList", "transactionListVar", "TransactionList", !0, !1, D.DataTypes.DataTypes.RecordList, function() {
                return D.DataTypes.ImmutableBase.getData(new(D.GenericTypeCache.getGenericList(q)))
            }, !1, D.GenericTypeCache.getGenericList(q)), this.attr("ActiveTransaction", "activeTransactionVar", "ActiveTransaction", !0, !1, D.DataTypes.DataTypes.Record, function() {
                return D.DataTypes.ImmutableBase.getData(new q)
            }, !1, q), this.attr("Transactions", "transactionsIn", "Transactions", !0, !1, D.DataTypes.DataTypes.RecordList, function() {
                return D.DataTypes.ImmutableBase.getData(new(D.GenericTypeCache.getGenericList(L)))
            }, !1, D.GenericTypeCache.getGenericList(L)), this.attr("_transactionsInDataFetchStatus", "_transactionsInDataFetchStatus", "_transactionsInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("TransactionDate", "transactionDateIn", "TransactionDate", !0, !1, D.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_transactionDateInDataFetchStatus", "_transactionDateInDataFetchStatus", "_transactionDateInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDemo", "isDemoIn", "IsDemo", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDemoInDataFetchStatus", "_isDemoInDataFetchStatus", "_isDemoInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsPortfolio", "isPortfolioIn", "IsPortfolio", !0, !1, D.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPortfolioInDataFetchStatus", "_isPortfolioInDataFetchStatus", "_isPortfolioInDataFetchStatus", !0, !1, D.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(D.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
v(ye, "VariablesRecord");
var oe = ye;
oe.init();
var Te = class Te extends D.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
v(Te, "WidgetsRecord");
var he = Te,
    K = class K extends D.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return oe
        }
        static getWidgetsRecordConstructor() {
            return he
        }
        static get hasValidationWidgets() {
            return K._hasValidationWidgetsValue === void 0 && (K._hasValidationWidgetsValue = void 0), K._hasValidationWidgetsValue
        }
        setInputs(d) {
            "Transactions" in d && (this.variables.transactionsIn = d.Transactions, "_transactionsInDataFetchStatus" in d && (this.variables._transactionsInDataFetchStatus = d._transactionsInDataFetchStatus)), "TransactionDate" in d && (this.variables.transactionDateIn = d.TransactionDate, "_transactionDateInDataFetchStatus" in d && (this.variables._transactionDateInDataFetchStatus = d._transactionDateInDataFetchStatus)), "IsDemo" in d && (this.variables.isDemoIn = d.IsDemo, "_isDemoInDataFetchStatus" in d && (this.variables._isDemoInDataFetchStatus = d._isDemoInDataFetchStatus)), "IsPortfolio" in d && (this.variables.isPortfolioIn = d.IsPortfolio, "_isPortfolioInDataFetchStatus" in d && (this.variables._isPortfolioInDataFetchStatus = d._isPortfolioInDataFetchStatus))
        }
    };
v(K, "Model");
var le = K;
le._hasValidationWidgetsValue = void 0;
var Me = new D.Model.ModelFactory(le);
var y = I,
    Se = class Se extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("DateList2", "dateList2Var", "DateList2", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new y.DataTypes.TextList)
            }, !1, y.DataTypes.TextList), this.attr("TransactionList", "transactionListVar", "TransactionList", !0, !1, y.DataTypes.DataTypes.RecordList, function() {
                return y.DataTypes.ImmutableBase.getData(new(y.GenericTypeCache.getGenericList(L)))
            }, !1, y.GenericTypeCache.getGenericList(L)), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("Offset", "offsetVar", "Offset", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 0
            }, !1), this.attr("Limit", "limitVar", "Limit", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 15
            }, !1), this.attr("HasMoreTransactions", "hasMoreTransactionsVar", "HasMoreTransactions", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("FetchingNewTransactions", "fetchingNewTransactionsVar", "FetchingNewTransactions", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActiveTradingDetails", "activeTradingDetailsIn", "ActiveTradingDetails", !0, !1, y.DataTypes.DataTypes.Record, function() {
                return y.DataTypes.ImmutableBase.getData(new _e)
            }, !1, _e), this.attr("_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FetchedTransactionsAt", "fetchedTransactionsAtIn", "FetchedTransactionsAt", !0, !1, y.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_fetchedTransactionsAtInDataFetchStatus", "_fetchedTransactionsAtInDataFetchStatus", "_fetchedTransactionsAtInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsPortfolio", "isPortfolioIn", "IsPortfolio", !0, !1, y.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isPortfolioInDataFetchStatus", "_isPortfolioInDataFetchStatus", "_isPortfolioInDataFetchStatus", !0, !1, y.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
v(Se, "VariablesRecord");
var ce = Se;
ce.init();
var xe = class xe extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
v(xe, "WidgetsRecord");
var De = xe,
    G = class G extends y.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ce
        }
        static getWidgetsRecordConstructor() {
            return De
        }
        static get hasValidationWidgets() {
            return G._hasValidationWidgetsValue === void 0 && (G._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0), G._hasValidationWidgetsValue
        }
        setInputs(d) {
            "ActiveTradingDetails" in d && (this.variables.activeTradingDetailsIn = d.ActiveTradingDetails, "_activeTradingDetailsInDataFetchStatus" in d && (this.variables._activeTradingDetailsInDataFetchStatus = d._activeTradingDetailsInDataFetchStatus)), "FetchedTransactionsAt" in d && (this.variables.fetchedTransactionsAtIn = d.FetchedTransactionsAt, "_fetchedTransactionsAtInDataFetchStatus" in d && (this.variables._fetchedTransactionsAtInDataFetchStatus = d._fetchedTransactionsAtInDataFetchStatus)), "IsPortfolio" in d && (this.variables.isPortfolioIn = d.IsPortfolio, "_isPortfolioInDataFetchStatus" in d && (this.variables._isPortfolioInDataFetchStatus = d._isPortfolioInDataFetchStatus))
        }
    };
v(G, "Model");
var ue = G;
ue._hasValidationWidgetsValue = void 0;
var Ze = new y.Model.ModelFactory(ue);
var x = Ae(Le());
var Ge = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0623\u062E\u064A\u0631\u0629",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u0627\u0628\u062F\u0623 \u0628\u0625\u062C\u0631\u0627\u0621 \u0623\u0648\u0644 \u062A\u062D\u0648\u064A\u0644 \u0644\u0643 \u0644\u0631\u0624\u064A\u0629 \u0646\u0634\u0627\u0637 \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0647\u0646\u0627.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0628\u0639\u062F",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0627\u0644\u0628\u0627\u0631\u062D\u0629",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0627\u0644\u064A\u0648\u0645",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0627\u0644\u0628\u0627\u0631\u062D\u0629",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0627\u0644\u064A\u0648\u0645"
    },
    Qe = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u09B2\u09C7\u09A8\u09A6\u09C7\u09A8\u09C7\u09B0 \u09B8\u09AE\u09BE\u09AA\u09CD\u09A4\u09BF",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0986\u09B0\u0993 \u09A6\u09C7\u0996\u09C1\u09A8",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u09B8\u09BE\u09AE\u09CD\u09AA\u09CD\u09B0\u09A4\u09BF\u0995 \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u098F\u0996\u09BE\u09A8\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09CD\u09B0\u09A5\u09AE \u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0\u09A3 \u0995\u09B0\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8\u0964",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u098F\u0996\u09A8\u0993 \u0995\u09CB\u09A8\u09CB \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u09B9\u09AF\u09BC\u09A8\u09BF",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0997\u09A4\u0995\u09BE\u09B2",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0986\u099C\u0995\u09C7",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0997\u09A4\u0995\u09BE\u09B2",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0986\u099C\u0995\u09C7"
    },
    We = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Ende der Transaktion",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Mehr anzeigen",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "K\xFCrzliche Transaktionen",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Beginnen Sie, indem Sie Ihre erste \xDCberweisung t\xE4tigen, um Ihre Handelsaktivit\xE4t hier zu sehen.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Bisher keine Transaktionen",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Gestern",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Heute",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Gestern",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Heute"
    },
    je = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Fin de la transacci\xF3n",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Ver m\xE1s",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Transacciones recientes",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Comienza realizando tu primera transferencia para ver tu actividad de trading aqu\xED.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "A\xFAn no hay transacciones",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Ayer",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Hoy",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Ayer",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Hoy"
    },
    Ye = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Fin de la transaction",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Voir plus",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Transactions r\xE9centes",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Commencez par effectuer votre premier transfert pour voir votre activit\xE9 de trading ici.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Pas encore de transactions",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Hier",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Aujourd'hui",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Hier",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Aujourd'hui"
    },
    Xe = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Fine della transazione",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Vedi di pi\xF9",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Transazioni recenti",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Inizia effettuando il primo bonifico per vedere la tua attivit\xE0 di trading qui.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Nessuna transazione ancora",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Ieri",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Oggi",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Ieri",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Oggi"
    },
    $e = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u1794\u1789\u17D2\u1785\u1794\u17CB\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u1780\u17B6\u179A",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u1798\u17BE\u179B\u1794\u1793\u17D2\u1790\u17C2\u1798",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u1790\u17D2\u1798\u17B8\u17D7",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799\u1780\u17B6\u179A\u1795\u17D2\u1791\u17C1\u179A\u1796\u17B8\u179B\u17BE\u178A\u17C6\u1794\u17BC\u1784\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780 \u178A\u17BE\u1798\u17D2\u1794\u17B8\u1798\u17BE\u179B\u179F\u1780\u1798\u17D2\u1798\u1797\u17B6\u1796\u1796\u17B6\u178E\u17B7\u1787\u17D2\u1787\u1780\u1798\u17D2\u1798\u1793\u17C5\u1791\u17B8\u1793\u17C1\u17C7\u17D4",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u1782\u17D2\u1798\u17B6\u1793\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u178E\u17CD\u1791\u17C1",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7"
    },
    et = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\uAC70\uB798 \uC885\uB8CC",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\uB354 \uBCF4\uAE30",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\uCD5C\uADFC \uAC70\uB798",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\uCCAB \uC774\uCCB4\uB97C \uD558\uC5EC \uC5EC\uAE30\uC11C \uAC70\uB798 \uD65C\uB3D9\uC744 \uD655\uC778\uD558\uC138\uC694.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\uC544\uC9C1 \uAC70\uB798 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\uC5B4\uC81C",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\uC624\uB298",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\uC5B4\uC81C",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\uC624\uB298"
    },
    tt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0413\u04AF\u0439\u043B\u0433\u044D\u044D \u0434\u0443\u0443\u0441\u0430\u0445",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0418\u043B\u04AF\u04AF \u0438\u0445\u0438\u0439\u0433 \u04AF\u0437\u044D\u0445",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u0428\u0438\u043D\u044D \u0433\u04AF\u0439\u043B\u0433\u044D\u044D",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u042D\u043D\u0434 \u0430\u043D\u0445\u043D\u044B \u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u0433\u044D\u044D \u0445\u0438\u0439\u0436, \u0442\u0430\u043D\u044B \u0430\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u04AF\u0439\u043B \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0430\u0430\u0433 \u04AF\u0437\u044D\u0445.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u041E\u0434\u043E\u043E\u0433\u043E\u043E\u0440 \u0433\u04AF\u0439\u043B\u0433\u044D\u044D\u0433\u04AF\u0439",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u04E8\u0447\u0438\u0433\u0434\u04E9\u0440",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440"
    },
    at = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Koniec transakcji",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Zobacz wi\u0119cej",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Ostatnie transakcje",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Zacznij od wykonania pierwszego przelewu, aby zobaczy\u0107 swoj\u0105 aktywno\u015B\u0107 handlow\u0105 tutaj.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Brak transakcji",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Wczoraj",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Dzisiaj",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Wczoraj",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Dzisiaj"
    },
    rt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Fim da transa\xE7\xE3o",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Ver mais",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Transa\xE7\xF5es recentes",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Comece fazendo a sua primeira transfer\xEAncia para ver a sua atividade de trading aqui.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Ainda n\xE3o h\xE1 transa\xE7\xF5es",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Ontem",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Hoje",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Ontem",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Hoje"
    },
    it = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u041A\u043E\u043D\u0435\u0446 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0443 \u0442\u043E\u0440\u0433\u043E\u0432\u0443\u044E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0437\u0434\u0435\u0441\u044C.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u041F\u043E\u043A\u0430 \u0431\u0435\u0437 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0412\u0447\u0435\u0440\u0430",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0412\u0447\u0435\u0440\u0430",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F"
    },
    nt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4\u0DC0 \u0D85\u0DC0\u0DC3\u0DB1\u0DCA \u0DC0\u0DD2\u0DBA",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0DAD\u0DC0\u0DAD\u0DCA \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u0DB8\u0DD1\u0DAD \u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u0D94\u0DB6\u0DDA \u0DB4\u0DC5\u0DB8\u0DD4 \u0DB8\u0DCF\u0DBB\u0DD4 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8 \u0DC3\u0DD2\u0DAF\u0DD4 \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DD9\u0DB1\u0DCA \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1, \u0DB8\u0DD9\u0DC4\u0DD2 \u0D94\u0DB6\u0D9C\u0DDA \u0DC0\u0DD9\u0DC5\u0DB3 \u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF\u0D9A\u0DCF\u0DBB\u0D9A\u0DB8\u0DCA \u0DB6\u0DD0\u0DBD\u0DD3\u0DB8\u0DA7.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u0DAD\u0DC0\u0DB8 \u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4\u0DB8 \u0DB1\u0DDC\u0DB8\u0DD0\u0DAD",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0D8A\u0DBA\u0DDA",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0D85\u0DAF",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0D8A\u0DBA\u0DDA",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0D85\u0DAF"
    },
    st = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Kumaliza muamala",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Ona zaidi",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Muamala za hivi karibuni",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Anza kwa kufanya uhamisho wako wa kwanza ili kuona shughuli zako za biashara hapa.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Hakuna miamala bado",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Jana",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Leo",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Jana",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Leo"
    },
    ot = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8 \u0BAE\u0BC1\u0B9F\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BB5\u0BC8\u0BAF\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u0B9A\u0BAE\u0BC0\u0BAA\u0BA4\u0BCD\u0BA4\u0BBF\u0BAF \u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8\u0B95\u0BB3\u0BCD",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u0B87\u0B99\u0BCD\u0B95\u0BC7 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95 \u0B9A\u0BC6\u0BAF\u0BB1\u0BCD\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC8 \u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95 \u0BAE\u0BC1\u0BA4\u0BB2\u0BBE\u0BB5\u0BA4\u0BC1 \u0BAA\u0BB0\u0BBF\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BA4\u0BCD\u0BA4\u0BC8\u0B9A\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u0B8E\u0BB5\u0BCD\u0BB5\u0BB3\u0BB5\u0BC1 \u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8\u0B95\u0BB3\u0BC1\u0BAE\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1"
    },
    lt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E01\u0E32\u0E23\u0E17\u0E33\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u0E14\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49"
    },
    ct = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u0130\u015Flem sona erdi",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Daha fazla g\xF6ster",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Son i\u015Flemler",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Burada ticaret etkinli\u011Finizi g\xF6rmek i\xE7in ilk transferinizi yaparak ba\u015Flay\u0131n.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Hen\xFCz i\u015Flem yok",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "D\xFCn",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Bug\xFCn",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "D\xFCn",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Bug\xFCn"
    },
    ut = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Tranzaksiya yakunlandi",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Ko'proq ko'rish",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "So\u2018nggi amaliyotlar",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Bu yerda savdo faoliyatingizni ko'rish uchun birinchi transferingizni amalga oshiring.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Hali tranzaksiyalar yo'q",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Kecha",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Bugun",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Kecha",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Bugun"
    },
    dt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "Tranzaksiya yakunlandi",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Ko'proq ko'rish",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "So\u2018nggi amaliyotlar",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "Bu yerda savdo faoliyatingizni ko'rish uchun birinchi transferingizni amalga oshiring.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Hali tranzaksiyalar yo'q",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "Kecha",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "Bugun",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "Kecha",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "Bugun"
    },
    vt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "K\u1EBFt th\xFAc giao d\u1ECBch",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "Xem th\xEAm",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "Giao d\u1ECBch g\u1EA7n \u0111\xE2y",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "B\u1EAFt \u0111\u1EA7u b\u1EB1ng c\xE1ch th\u1EF1c hi\u1EC7n chuy\u1EC3n kho\u1EA3n \u0111\u1EA7u ti\xEAn c\u1EE7a b\u1EA1n \u0111\u1EC3 xem ho\u1EA1t \u0111\u1ED9ng giao d\u1ECBch c\u1EE7a b\u1EA1n t\u1EA1i \u0111\xE2y.",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "Ch\u01B0a c\xF3 giao d\u1ECBch n\xE0o",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "H\xF4m qua",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "H\xF4m nay",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "H\xF4m qua",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "H\xF4m nay"
    },
    mt = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u4EA4\u6613\u7ED3\u675F",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u67E5\u770B\u66F4\u591A",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u6700\u8FD1\u7684\u4EA4\u6613",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u9996\u5148\u8FDB\u884C\u60A8\u7684\u7B2C\u4E00\u6B21\u8F6C\u8D26\uFF0C\u4EE5\u67E5\u770B\u60A8\u7684\u4EA4\u6613\u6D3B\u52A8\u3002",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u5C1A\u65E0\u4EA4\u6613",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u6628\u5929",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u4ECA\u5929",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u6628\u5929",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u4ECA\u5929"
    },
    _t = {
        "wCaOhx24ikK810Pc_vmu1Q#Value": "\u4EA4\u6613\u7D50\u675F",
        "sRUBhLffL0mqzSRv7xOP2g#Value": "\u770B\u66F4\u591A",
        "F_YZ0DpJeUW_PIojAvSaKw#Value": "\u6700\u8FD1\u7684\u4EA4\u6613",
        "BtyieyCs_UuvUNgk7OG+gw#Value": "\u958B\u59CB\u9032\u884C\u60A8\u7684\u7B2C\u4E00\u6B21\u8F49\u5E33\uFF0C\u4EE5\u67E5\u770B\u60A8\u7684\u4EA4\u6613\u6D3B\u52D5\u3002",
        "9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1": "\u5C1A\u7121\u4EA4\u6613",
        "YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1": "\u6628\u5929",
        "6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1": "\u4ECA\u5929",
        "fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1": "\u6628\u5929",
        "q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1": "\u4ECA\u5929"
    },
    qe = {
        "ar-001": {
            translations: Ge,
            isRTL: !0
        },
        "bn-BD": {
            translations: Qe,
            isRTL: !1
        },
        "de-DE": {
            translations: We,
            isRTL: !1
        },
        "es-ES": {
            translations: je,
            isRTL: !1
        },
        "fr-FR": {
            translations: Ye,
            isRTL: !1
        },
        "it-IT": {
            translations: Xe,
            isRTL: !1
        },
        "km-KH": {
            translations: $e,
            isRTL: !1
        },
        "ko-KR": {
            translations: et,
            isRTL: !1
        },
        "mn-MN": {
            translations: tt,
            isRTL: !1
        },
        "pl-PL": {
            translations: at,
            isRTL: !1
        },
        "pt-PT": {
            translations: rt,
            isRTL: !1
        },
        "ru-RU": {
            translations: it,
            isRTL: !1
        },
        "si-LK": {
            translations: nt,
            isRTL: !1
        },
        "sw-KE": {
            translations: st,
            isRTL: !1
        },
        "ta-IN": {
            translations: ot,
            isRTL: !1
        },
        "th-TH": {
            translations: lt,
            isRTL: !1
        },
        "tr-TR": {
            translations: ct,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ut,
            isRTL: !1
        },
        "uz-UZ": {
            translations: dt,
            isRTL: !1
        },
        "vi-VN": {
            translations: vt,
            isRTL: !1
        },
        "zh-CN": {
            translations: mt,
            isRTL: !1
        },
        "zh-TW": {
            translations: _t,
            isRTL: !1
        }
    };

function Ee(g, d, t, a) {
    let e = JSON.parse(g.TransactionsResponse),
        o = JSON.parse(g.CurrentDateList),
        f = JSON.parse(g.CurrentTransactionList);

    function s(i) {
        let h = new Date(i),
            b = {
                day: "numeric",
                month: "long",
                year: "numeric"
            };
        return h.toLocaleDateString("en-GB", b)
    }
    v(s, "formatDate");

    function p(i) {
        return new Date(i).toUTCString().split(" ")[4] + " GMT"
    }
    v(p, "formatTime");

    function w(i) {
        let h = new Date(i),
            b = new Date;
        b.setHours(0, 0, 0, 0);
        let V = new Date(b);
        V.setDate(b.getDate() - 1);
        let m = new Date(h);
        return m.setHours(0, 0, 0, 0), m.getTime() === b.getTime() ? g.Text_Today : m.getTime() === V.getTime() ? g.Text_Yesterday : s(i)
    }
    v(w, "getDayLabel");

    function n(i) {
        switch (i == null ? void 0 : i.toLowerCase()) {
            case "deposit":
                return "Deposit";
            case "withdrawal":
            case "withdraw":
                return "Withdrawal";
            case "transfer":
                return "Transfer";
            default:
                return i || "Unknown"
        }
    }
    v(n, "mapTransactionType");
    let S = {};
    f.forEach(i => {
        S[i.date] = [...i.transactions]
    }), e.forEach(i => {
        var W, Pe;
        let h = i.executed_at || i.created_at,
            b = n(i.transfer_type),
            V = i.currency || "USD",
            m = "",
            P = "";
        b === "Deposit" ? (m = "Wallet", P = g.CFDProductName) : b === "Withdrawal" ? (m = g.CFDProductName, P = "Wallet") : b === "Transfer" && (m = g.CFDProductName, P = g.CFDProductName);
        let R = d.GetFractionalDigits(V),
            U = {
                transaction_id: ((W = i.id) == null ? void 0 : W.toString()) || "",
                platform_deal_id: i.platform_deal_id || "",
                request_id: i.request_id || "",
                transaction_type: b,
                amount: i.amount || 0,
                formatted_date: w(h),
                source_currency: V,
                transaction_status: "Completed",
                timestamp: p(h),
                date: s(h),
                destination_currency: V,
                from_account: m,
                to_account: P,
                account_id: i.account_id || "",
                client_name: i.client_name || "",
                fractional_digits: (R == null ? void 0 : R.FractionalDigits) || 2
            },
            k = w(h);
        ((Pe = S[k]) == null ? void 0 : Pe.some(Ke => Ke.transaction_id === U.transaction_id)) || (S[k] || (S[k] = []), S[k].push(U))
    });
    let c = Object.keys(S).map(i => ({
            date: i,
            transactions: S[i].sort((h, b) => {
                let V = v(R => {
                        let U = e.find(k => {
                            var B;
                            return ((B = k.id) == null ? void 0 : B.toString()) === R.transaction_id
                        });
                        return U ? new Date(U.executed_at || U.created_at) : new Date(R.date + " " + R.timestamp.replace(" GMT", ""))
                    }, "getTransactionDate"),
                    m = V(h);
                return V(b) - m
            })
        })).sort((i, h) => {
            let b = v(V => {
                let m = new Date;
                if (m.setHours(0, 0, 0, 0), V === g.Text_Today) return m;
                if (V === g.Text_Yesterday) {
                    let P = new Date(m);
                    return P.setDate(m.getDate() - 1), P
                }
                return new Date(V)
            }, "getDateValue");
            return b(h.date) - b(i.date)
        }),
        u = c.map(i => i.date);
    g.TransactionsList = JSON.stringify(c || []), g.DatesList = JSON.stringify(u || [])
}
v(Ee, "default");

function Oe(g, d, t, a) {
    let e = JSON.parse(g.TransactionsResponse);

    function o(c) {
        let u = new Date(c),
            i = {
                day: "numeric",
                month: "long",
                year: "numeric"
            };
        return u.toLocaleDateString("en-GB", i)
    }
    v(o, "formatDate");

    function f(c) {
        return new Date(c).toUTCString().split(" ")[4] + " GMT"
    }
    v(f, "formatTime");

    function s(c) {
        let u = new Date(c),
            i = new Date;
        i.setHours(0, 0, 0, 0);
        let h = new Date(i);
        h.setDate(i.getDate() - 1);
        let b = new Date(u);
        return b.setHours(0, 0, 0, 0), b.getTime() === i.getTime() ? g.Text_Today : b.getTime() === h.getTime() ? g.Text_Yesterday : o(c)
    }
    v(s, "getDayLabel");

    function p(c) {
        switch (c == null ? void 0 : c.toLowerCase()) {
            case "deposit":
                return "Deposit";
            case "withdrawal":
            case "withdraw":
                return "Withdrawal";
            case "transfer":
                return "Transfer";
            default:
                return c || "Unknown"
        }
    }
    v(p, "mapTransactionType");
    let w = {};
    e.forEach(c => {
        var B;
        let u = c.executed_at || c.created_at,
            i = p(c.transfer_type),
            h = c.currency || "USD",
            b = v(W => W.replace(/^(ctd|ctr)/i, ""), "removePrefix"),
            V = g.PlatformCode === "ctrader" ? g.CFDProductName + " [" + b(c.account_id) + "]" : g.CFDProductName,
            m = "",
            P = "";
        i === "Deposit" ? (m = "Wallet", P = V) : i === "Withdrawal" ? (m = V, P = "Wallet") : i === "Transfer" && (m = V, P = V);
        let R = d.GetFractionalDigits(h),
            U = {
                transaction_id: ((B = c.id) == null ? void 0 : B.toString()) || "",
                platform_deal_id: c.platform_deal_id || "",
                request_id: c.request_id || "",
                transaction_type: i,
                amount: c.amount || 0,
                formatted_date: s(u),
                source_currency: h,
                transaction_status: "Completed",
                timestamp: f(u),
                date: o(u),
                destination_currency: h,
                from_account: m,
                to_account: P,
                account_id: c.account_id || "",
                client_name: c.client_name || "",
                fractional_digits: (R == null ? void 0 : R.FractionalDigits) || 2
            },
            k = s(u);
        w[k] || (w[k] = []), w[k].push(U)
    });
    let n = Object.keys(w).map(c => ({
            date: c,
            transactions: w[c].sort((u, i) => {
                let h = new Date(e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === u.transaction_id
                }).executed_at || e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === u.transaction_id
                }).created_at);
                return new Date(e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === i.transaction_id
                }).executed_at || e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === i.transaction_id
                }).created_at) - h
            })
        })),
        S = Object.keys(w).map(c => ({
            date: c,
            transactions: w[c].sort((u, i) => {
                let h = new Date(e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === u.transaction_id
                }).executed_at || e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === u.transaction_id
                }).created_at);
                return new Date(e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === i.transaction_id
                }).executed_at || e.find(V => {
                    var m;
                    return ((m = V.id) == null ? void 0 : m.toString()) === i.transaction_id
                }).created_at).getTime() - h.getTime()
            })
        })),
        T = Object.keys(w);
    g.TransactionsList = d.FeatureFlagValueByName("TRANSACTION_FIX") ? JSON.stringify(S || []) : JSON.stringify(n || []), g.DatesList = JSON.stringify(T || [])
}
v(Oe, "default");
var r = I; {
    let d = class d extends r.Controller.BaseViewController {
        constructor(a, e, o) {
            super(a, e, o, qe);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _loadMoreOnClick$Action() {
            return this.hasOwnProperty("__loadMoreOnClick$Action") || (this.__loadMoreOnClick$Action = function(a) {
                var e = this.model,
                    o = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("LoadMoreOnClick", function(s) {
                    return s && (s.setAttribute("code.function", "LoadMoreOnClick"), s.setAttribute("outsystems.function.key", "6cf1512d-1a7b-4b4d-bed4-0e2f15ab3dc7"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("LoadMoreOnClick"), a = o.callContext(a);
                        var p = new r.DataTypes.VariableHolder,
                            w = new r.DataTypes.VariableHolder,
                            n = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            S = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            T = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            c = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.GenericTypeCache.getGenericList(L)))),
                            u = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.DataTypes.TextList)));
                        return r.Flow.executeAsyncFlow(function() {
                            return e.variables.offsetVar = e.variables.offsetVar + e.variables.limitVar, e.variables.fetchingNewTransactionsVar = !0, e.flush(), H.get_CFDTransasctionsList$Action((function() {
                                var i = new me;
                                return i.platformAccountIdAttr = e.variables.activeTradingDetailsIn.platform_account_idAttr, i.isDemoAttr = e.variables.activeTradingDetailsIn.typeAttr === "demo" ? "true" : "false", i.providerAttr = e.variables.activeTradingDetailsIn.platform_codeAttr, i.offsetAttr = e.variables.offsetVar, i.limitAttr = e.variables.limitVar, i
                            })(), a).then(function(i) {
                                p.value = i
                            }).then(function() {
                                p.value.isErrorOut ? e.variables.fetchingNewTransactionsVar = !1 : p.value.responseOut.dataAttr.isEmpty ? (e.variables.hasMoreTransactionsVar = !1, e.variables.fetchingNewTransactionsVar = !1) : (S.value.jSONOut = r.JSONUtils.serializeToJSON(e.variables.dateList2Var, !0, !1, r.DataTypes.DataTypes.Text), T.value.jSONOut = r.JSONUtils.serializeToJSON(e.variables.transactionListVar, !1, !1), n.value.jSONOut = r.JSONUtils.serializeToJSON(p.value.responseOut.dataAttr, !0, !1), w.value = r.Logger.startActiveSpan("mapTransactionsByDate", function(i) {
                                    i && (i.setAttribute("code.function", "mapTransactionsByDate"), i.setAttribute("outsystems.function.key", "400e138d-a455-4539-a347-d182e61b0f52"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return o.safeExecuteJSNode(Ee, "mapTransactionsByDate", "LoadMoreOnClick", {
                                            CFDProductName: r.DataConversion.JSNodeParamConverter.to(r.BuiltinFunctions.toUpper(e.variables.activeTradingDetailsIn.platform_codeAttr) + " " + e.variables.activeTradingDetailsIn.nameAttr, r.DataTypes.DataTypes.Text),
                                            Text_Today: r.DataConversion.JSNodeParamConverter.to(r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("q1Eoi9VDjUqK23XHkSXF9A#Value.80981793.1", "Today"), r.DataTypes.DataTypes.Text),
                                            CurrentDateList: r.DataConversion.JSNodeParamConverter.to(S.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            Text_Yesterday: r.DataConversion.JSNodeParamConverter.to(r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("fsMwz76snUaw3z7Qbrr7GQ#Value.381988194.1", "Yesterday"), r.DataTypes.DataTypes.Text),
                                            TransactionsResponse: r.DataConversion.JSNodeParamConverter.to(n.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            CurrentTransactionList: r.DataConversion.JSNodeParamConverter.to(T.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            TransactionsList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                            DatesList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                        }, function(h) {
                                            var b = new(o.constructor.getVariableGroupType("dashboard.CFDs.CFDTransactionList.LoadMoreOnClick$mapTransactionsByDateJSResult"));
                                            return b.transactionsListOut = r.DataConversion.JSNodeParamConverter.from(h.TransactionsList, r.DataTypes.DataTypes.Text), b.datesListOut = r.DataConversion.JSNodeParamConverter.from(h.DatesList, r.DataTypes.DataTypes.Text), b
                                        }, {
                                            GetFractionalDigits: H.clientActionProxies.getFractionalDigits$Action
                                        }, {})
                                    } finally {
                                        i && i.end()
                                    }
                                }, 1), u.value.dataOut = r.JSONUtils.deserializeFromJSON(w.value.datesListOut, r.DataTypes.TextList, !1), c.value.dataOut = r.JSONUtils.deserializeFromJSON(w.value.transactionsListOut, r.GenericTypeCache.getGenericList(L), !1), e.variables.fetchingNewTransactionsVar = !1, e.variables.dateList2Var = u.value.dataOut, e.variables.transactionListVar = c.value.dataOut)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__loadMoreOnClick$Action
        }
        set _loadMoreOnClick$Action(a) {
            this.__loadMoreOnClick$Action = a
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(a) {
                var e = this.model,
                    o = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("OnParametersChanged", function(s) {
                    return s && (s.setAttribute("code.function", "OnParametersChanged"), s.setAttribute("outsystems.function.key", "701e71a2-a21e-4312-beec-5ea558ea0666"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return o.ensureControllerAlive("OnParametersChanged"), a = o.callContext(a), r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (e.variables.fetchedTransactionsAtIn !== r.BuiltinFunctions.nullTextIdentifier()) return e.flush(), Re.sleep$Action("1500", a).then(function() {
                                    return e.variables.isLoadingVar = !0, o._onReady$Action(a)
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(a) {
            this.__onParametersChanged$Action = a
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(a) {
                var e = this.model,
                    o = this.controller,
                    f = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "8534af12-3fea-400b-bba2-c8e734bf51af"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        o.ensureControllerAlive("OnReady"), a = o.callContext(a);
                        var p = new r.DataTypes.VariableHolder,
                            w = new r.DataTypes.VariableHolder,
                            n = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            S = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.GenericTypeCache.getGenericList(L)))),
                            T = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(r.DataTypes.TextList)));
                        return r.Flow.executeAsyncFlow(function() {
                            return r.Flow.executeSequence(function() {
                                if (e.variables.activeTradingDetailsIn.idAttr.equals(r.BuiltinFunctions.integerToLongInteger(r.BuiltinFunctions.nullIdentifier()))) e.variables.isLoadingVar = !1;
                                else return e.flush(), H.get_CFDTransasctionsList$Action((function() {
                                    var c = new me;
                                    return c.platformAccountIdAttr = e.variables.activeTradingDetailsIn.platform_account_idAttr, c.isDemoAttr = e.variables.activeTradingDetailsIn.typeAttr === "demo" ? "true" : "false", c.providerAttr = e.variables.activeTradingDetailsIn.platform_codeAttr, c.offsetAttr = e.variables.offsetVar, c.limitAttr = e.variables.limitVar, c
                                })(), a).then(function(c) {
                                    p.value = c
                                }).then(function() {
                                    p.value.isErrorOut || (p.value.responseOut.dataAttr.length < e.variables.limitVar && (e.variables.hasMoreTransactionsVar = !1), n.value.jSONOut = r.JSONUtils.serializeToJSON(p.value.responseOut.dataAttr, !0, !1), w.value = r.Logger.startActiveSpan("mapTransactionsByDate", function(c) {
                                        c && (c.setAttribute("code.function", "mapTransactionsByDate"), c.setAttribute("outsystems.function.key", "c980a9d3-f8df-4487-9345-29f505f0cc59"), c.setAttribute("outsystems.function.owner.name", "dashboard"), c.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                        try {
                                            return o.safeExecuteJSNode(Oe, "mapTransactionsByDate", "OnReady", {
                                                TransactionsResponse: r.DataConversion.JSNodeParamConverter.to(n.value.jSONOut, r.DataTypes.DataTypes.Text),
                                                Text_Today: r.DataConversion.JSNodeParamConverter.to(r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("6_JPXhJUX02cK2oMiRzo+g#Value.80981793.1", "Today"), r.DataTypes.DataTypes.Text),
                                                CFDProductName: r.DataConversion.JSNodeParamConverter.to(e.variables.activeTradingDetailsIn.nameAttr, r.DataTypes.DataTypes.Text),
                                                PlatformCode: r.DataConversion.JSNodeParamConverter.to(e.variables.activeTradingDetailsIn.platform_codeAttr, r.DataTypes.DataTypes.Text),
                                                Text_Yesterday: r.DataConversion.JSNodeParamConverter.to(r.Injector.resolve(r.ServiceNames.TranslationsService).getMessage("YBpd6w4Mv0+EeWZ5RwENaw#Value.381988194.1", "Yesterday"), r.DataTypes.DataTypes.Text),
                                                TransactionsList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                                DatesList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                            }, function(u) {
                                                var i = new(o.constructor.getVariableGroupType("dashboard.CFDs.CFDTransactionList.OnReady$mapTransactionsByDateJSResult"));
                                                return i.transactionsListOut = r.DataConversion.JSNodeParamConverter.from(u.TransactionsList, r.DataTypes.DataTypes.Text), i.datesListOut = r.DataConversion.JSNodeParamConverter.from(u.DatesList, r.DataTypes.DataTypes.Text), i
                                            }, {
                                                GetFractionalDigits: H.clientActionProxies.getFractionalDigits$Action,
                                                FeatureFlagValueByName: H.clientActionProxies.featureFlagValueByName$Action
                                            }, {})
                                        } finally {
                                            c && c.end()
                                        }
                                    }, 1), T.value.dataOut = r.JSONUtils.deserializeFromJSON(w.value.datesListOut, r.DataTypes.TextList, !1), S.value.dataOut = r.JSONUtils.deserializeFromJSON(w.value.transactionsListOut, r.GenericTypeCache.getGenericList(L), !1), e.variables.dateList2Var = T.value.dataOut, e.variables.transactionListVar = S.value.dataOut), e.variables.isLoadingVar = !1
                                })
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        loadMoreOnClick$Action(a) {
            var e = this.controller;
            return r.Logger.startActiveSpan("LoadMoreOnClick__proxy", function(o) {
                return o && (o.setAttribute("code.function", "LoadMoreOnClick"), o.setAttribute("outsystems.function.key", "6cf1512d-1a7b-4b4d-bed4-0e2f15ab3dc7"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._loadMoreOnClick$Action, a)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onParametersChanged$Action(a) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnParametersChanged__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnParametersChanged"), o.setAttribute("outsystems.function.key", "701e71a2-a21e-4312-beec-5ea558ea0666"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onParametersChanged$Action, a)
                }, function() {
                    o && o.end()
                })
            }, 0)
        }
        onReady$Action(a) {
            var e = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(o) {
                return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "8534af12-3fea-400b-bba2-c8e734bf51af"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._onReady$Action, a)
                }, function() {
                    o && o.end()
                })
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
                var e = this.controller,
                    o = this.model,
                    f = this.idService;
                return e.onReady$Action(a)
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
                var e = this.controller,
                    o = this.model,
                    f = this.idService;
                return e.onParametersChanged$Action(a)
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
            return H.defaultTimeout
        }
    };
    v(d, "ControllerInner");
    let g = d;
    de = g, de.registerVariableGroupType("dashboard.CFDs.CFDTransactionList.LoadMoreOnClick$mapTransactionsByDateJSResult", [{
        name: "TransactionsList",
        attrName: "transactionsListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: v(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DatesList",
        attrName: "datesListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: v(function() {
            return ""
        }, "defaultValue")
    }]), de.registerVariableGroupType("dashboard.CFDs.CFDTransactionList.OnReady$mapTransactionsByDateJSResult", [{
        name: "TransactionsList",
        attrName: "transactionsListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: v(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "DatesList",
        attrName: "datesListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: v(function() {
            return ""
        }, "defaultValue")
    }])
}
var de, Be = new r.Controller.ControllerFactory(de, X);
var l = Ae(Le());
var pt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0627\u0644\u0648\u0642\u062A",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u0627\u0644\u062A\u0627\u0631\u064A\u062E",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u0627\u0644\u0645\u0628\u0644\u063A",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0625\u0644\u0649",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u0645\u0646",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u062A\u062D\u0648\u064A\u0644",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0646\u0648\u0639 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0645\u0643\u062A\u0645\u0644",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0631\u0635\u064A\u062F",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u062A\u062D\u0648\u064A\u0644"
    },
    gt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u09B8\u09AE\u09AF\u09BC",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u09A4\u09BE\u09B0\u09BF\u0996",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u09AA\u09CD\u09B0\u09A4\u09BF",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u09A5\u09C7\u0995\u09C7",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u09B2\u09C7\u09A8\u09A6\u09C7\u09A8\u09C7\u09B0 \u09A7\u09B0\u09A8",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u0986\u0987\u09A1\u09BF",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u09AE\u09C1\u09B2\u09A4\u09C1\u09AC\u09BF",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u09B2\u09C7\u09A8\u09A6\u09C7\u09A8\u09C7\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u09AC\u09CD\u09AF\u09BE\u09B2\u09C7\u09A8\u09CD\u09B8 \u09B0\u09BF\u09B8\u09C7\u099F \u0995\u09B0\u09C1\u09A8",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u099F\u09CD\u09B0\u09BE\u09A8\u09CD\u09B8\u09AB\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8"
    },
    Vt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Zeit",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Datum",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Betrag",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "An",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Von",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\xDCberweisung",
        "JOhdMN6120+xv8o+64dsEA#Value": "Transaktionstyp",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "Transaktions-ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Abgeschlossen",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Ausstehend",
        "x3UrkH3aYkiHwE567quD0w#Value": "Transaktionsstatus",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Saldo zur\xFCcksetzen",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\xDCberweisung"
    },
    ht = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Hora",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Fecha",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Monto",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "A",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Desde",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transferir",
        "JOhdMN6120+xv8o+64dsEA#Value": "Tipo de transacci\xF3n",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID de transacci\xF3n",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Completado",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Pendiente",
        "x3UrkH3aYkiHwE567quD0w#Value": "Estado de la transacci\xF3n",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Restablecer saldo",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Transferir"
    },
    bt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Heure",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Date",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Montant",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\xC0",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "De",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transf\xE9rer",
        "JOhdMN6120+xv8o+64dsEA#Value": "Type de transaction",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID de transaction",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Termin\xE9",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "En attente",
        "x3UrkH3aYkiHwE567quD0w#Value": "Statut de la transaction",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "R\xE9initialiser le solde",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Transf\xE9rer"
    },
    wt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Ora",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Data",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Importo",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "A",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Da",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Trasferisci",
        "JOhdMN6120+xv8o+64dsEA#Value": "Tipo di transazione",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID transazione",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Completato",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "In attesa",
        "x3UrkH3aYkiHwE567quD0w#Value": "Stato della transazione",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Resetta saldo",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Trasferisci"
    },
    yt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u1796\u17C1\u179B\u179C\u17C1\u179B\u17B6",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u1785\u17C6\u1793\u17BD\u1793\u1791\u17B9\u1780\u1794\u17D2\u179A\u17B6\u1780\u17CB",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u1791\u17C5",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u1796\u17B8",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u1795\u17D2\u1791\u17C1\u179A",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u1794\u17D2\u179A\u1797\u17C1\u1791\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u179B\u17C1\u1781\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u1794\u1789\u17D2\u1785\u1794\u17CB",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u1780\u17C6\u1796\u17BB\u1784\u179A\u1784\u1785\u17B6\u17C6",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u179F\u17D2\u1790\u17B6\u1793\u1797\u17B6\u1796\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u1780\u17C6\u178E\u178F\u17CB\u179F\u1798\u178F\u17BB\u179B\u17D2\u1799\u1790\u17D2\u1798\u17B8",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u1795\u17D2\u1791\u17C1\u179A"
    },
    Tt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\uC2DC\uAC04",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\uB0A0\uC9DC",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\uAE08\uC561",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\uC5D0",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\uCD9C\uCC98",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\uC774\uCCB4",
        "JOhdMN6120+xv8o+64dsEA#Value": "\uAC70\uB798 \uC720\uD615",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\uD2B8\uB79C\uC7AD\uC158 ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\uC644\uB8CC\uB428",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\uB300\uAE30 \uC911",
        "x3UrkH3aYkiHwE567quD0w#Value": "\uAC70\uB798 \uC0C1\uD0DC",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\uC794\uC561 \uC7AC\uC124\uC815",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\uC774\uCCB4"
    },
    Dt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0426\u0430\u0433",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u041E\u0433\u043D\u043E\u043E",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u041C\u04E9\u043B\u0433\u04E9\u04E9\u043D\u0438\u0439 \u0443\u0442\u0433\u0430",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0440\u0443\u0443",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "-\u0410\u0430\u0441",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0413\u04AF\u0439\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0442\u04E9\u0440\u04E9\u043B",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0413\u04AF\u0439\u043B\u0433\u044D\u044D\u043D\u0438\u0439 ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0414\u0443\u0443\u0441\u0441\u0430\u043D",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0443\u0439",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0413\u04AF\u0439\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u04AF\u043B\u0434\u044D\u0433\u0434\u043B\u0438\u0439\u0433 \u0434\u0430\u0445\u0438\u043D \u0442\u043E\u0445\u0438\u0440\u0443\u0443\u043B\u0430\u0445",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u0448\u0438\u043B\u0436\u04AF\u04AF\u043B\u044D\u0445"
    },
    St = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Czas",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Data",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Kwota",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Do",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Od",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Przelew",
        "JOhdMN6120+xv8o+64dsEA#Value": "Typ transakcji",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID transakcji",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Zako\u0144czono",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Oczekuj\u0105ce",
        "x3UrkH3aYkiHwE567quD0w#Value": "Status transakcji",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Zresetuj saldo",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Przelew"
    },
    xt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Hora",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Data",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Montante",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Para",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "De",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transferir",
        "JOhdMN6120+xv8o+64dsEA#Value": "Tipo de transa\xE7\xE3o",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID da transa\xE7\xE3o",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Completo",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Pendente",
        "x3UrkH3aYkiHwE567quD0w#Value": "Estado da transa\xE7\xE3o",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Redefinir saldo",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Transferir"
    },
    Et = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0412\u0440\u0435\u043C\u044F",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u0414\u0430\u0442\u0430",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u0421\u0443\u043C\u043C\u0430",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0412",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u041E\u0442",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0422\u0438\u043F \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0421\u0442\u0430\u0442\u0443\u0441 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"
    },
    Ot = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0DC0\u0DDA\u0DBD\u0DCF\u0DC0",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u0DAF\u0DD2\u0DB1\u0DBA",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u0DB8\u0DD6\u0DBD\u0DCA\u200D\u0DBA\u0DB4\u0DCA\u200D\u0DBB\u0DB8\u0DCF\u0DAB\u0DBA",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0DC0\u0DD9\u0DAD",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u0DC3\u0DD2\u0DA7",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u0DB8\u0DCF\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4 \u0DC0\u0DBB\u0DCA\u0D9C\u0DBA",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4 \u0DC4\u0DD0\u0DB3\u0DD4\u0DB1\u0DD4\u0DB8\u0DCA \u0D85\u0D82\u0D9A\u0DBA",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0DC3\u0DB8\u0DCA\u0DB4\u0DD6\u0DBB\u0DCA\u0DAB\u0DBA\u0DD2",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0DBB\u0DD0\u0DB3\u0DD3 \u0DC3\u0DD2\u0DA7\u0DD3",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4 \u0DAD\u0DAD\u0DCA\u0DC0\u0DBA",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0DC0\u0DAF\u0DB1\u0DCA \u0DB1\u0DD0\u0DC0\u0DAD \u0DC3\u0DD0\u0D9A\u0DC3\u0DD3\u0DB8",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u0DB8\u0DCF\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1"
    },
    Ct = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Wakati",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Tarehe",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Kiasi",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Kwa",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Kutoka kwa",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Hamisha",
        "JOhdMN6120+xv8o+64dsEA#Value": "Aina ya muamala",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "Kitambulisho cha muamala",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Imekamilika",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Inaendelea",
        "x3UrkH3aYkiHwE567quD0w#Value": "Hali ya muamala",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Weka salio upya",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Hamisha"
    },
    Ft = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u0BA4\u0BC7\u0BA4\u0BBF",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u0BB0\u0BBE\u0B9A\u0BBF",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0B95\u0BCD\u0B95\u0BC1",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u0B87\u0BB2\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAE\u0BCD",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8 \u0BB5\u0B95ikara",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8 ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0BAE\u0BC1\u0BB4\u0BC1\u0BAE\uD654\u0BBF\u0BAF\u0BA4\u0BC1",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0B95\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BBF\u0BB1\u0BA4\u0BC1",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0BAA\u0BB0\u0BBF\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BA9\u0BC8 \u0BA8\u0BBF\u0BB2\u0BC8\u0BAE\u0BC8",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0B9A\u0BAE\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0BA8\u0BBF\u0BB2\u0BC1\u0BB5\u0BC8",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BAE\u0BCD"
    },
    Pt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u0E40\u0E27\u0E25\u0E32",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0E16\u0E36\u0E07",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u0E08\u0E32\u0E01",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0E23\u0E2B\u0E31\u0E2A\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0E23\u0E2D\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E22\u0E2D\u0E14\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19"
    },
    At = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Zaman",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Tarih",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Tutar",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Al\u0131c\u0131",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Kimden",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transfer",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u0130\u015Flem t\xFCr\xFC",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u0130\u015Flem Kimli\u011Fi",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Tamamland\u0131",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Beklemede",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u0130\u015Flem Durumu",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Bakiyeyi s\u0131f\u0131rla",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Transfer et"
    },
    Rt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Vaqt",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Sana",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Miqdor",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Ga",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Dan",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transfer",
        "JOhdMN6120+xv8o+64dsEA#Value": "Amaliyot turi",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "Amaliyot ID si",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "To'liq",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Kutilmoqda",
        "x3UrkH3aYkiHwE567quD0w#Value": "Amaliyot holati",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Balansni tiklash",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "O'tkazish"
    },
    Lt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Vaqt",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Sana",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "Miqdor",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "Ga",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "Dan",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Transfer",
        "JOhdMN6120+xv8o+64dsEA#Value": "Amaliyot turi",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "Amaliyot ID si",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "To'liq",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "Kutilmoqda",
        "x3UrkH3aYkiHwE567quD0w#Value": "Amaliyot holati",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "Balansni tiklash",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "O'tkazish"
    },
    kt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "Th\u1EDDi gian",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "Ng\xE0y",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "S\u1ED1 ti\u1EC1n",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u0110\u1EBFn",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "T\u1EEB",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "Chuy\u1EC3n kho\u1EA3n",
        "JOhdMN6120+xv8o+64dsEA#Value": "Lo\u1EA1i giao d\u1ECBch",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "ID giao d\u1ECBch",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "Ho\xE0n t\u1EA5t",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u0110ang ch\u1EDD x\u1EED l\xFD",
        "x3UrkH3aYkiHwE567quD0w#Value": "Tr\u1EA1ng th\xE1i giao d\u1ECBch",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u0110\u1EB7t l\u1EA1i s\u1ED1 d\u01B0",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "Chuy\u1EC3n kho\u1EA3n"
    },
    It = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u65F6\u95F4",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u65E5\u671F",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u91D1\u989D",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u5230",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u4ECE",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u8F6C\u8D26",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u4EA4\u6613\u7C7B\u578B",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u4EA4\u6613ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u5B8C\u6210",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u5F85\u5904\u7406",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u4EA4\u6613\u72B6\u6001",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u91CD\u7F6E\u4F59\u989D",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u8F6C\u8D26"
    },
    Mt = {
        "OHjzh3c+DEiqVrdNNqH2_Q#Value": "\u6642\u9593",
        "Gu___u5hcEWHSyVxF8Zqng#Value": "\u65E5\u671F",
        "FmZ6kumbM0+kFVHVvqG_iQ#Value": "\u91D1\u984D",
        "9vcMZmQ2GE+a4PoAAOY2tw#Value": "\u5230",
        "nb1+j_JlG0KkBrKOj0Lv1w#Value": "\u5F9E",
        "d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1": "\u8F49\u5E33",
        "JOhdMN6120+xv8o+64dsEA#Value": "\u4EA4\u6613\u985E\u578B",
        "gIALGGDIUk20YOlZA8q6lQ#Value": "\u4EA4\u6613ID",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1": "\u5B8C\u6210",
        "hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1": "\u5F85\u8655\u7406",
        "x3UrkH3aYkiHwE567quD0w#Value": "\u4EA4\u6613\u72C0\u614B",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1": "\u91CD\u8A2D\u9918\u984D",
        "Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1": "\u8F49\u5E33"
    },
    Je = {
        "ar-001": {
            translations: pt,
            isRTL: !0
        },
        "bn-BD": {
            translations: gt,
            isRTL: !1
        },
        "de-DE": {
            translations: Vt,
            isRTL: !1
        },
        "es-ES": {
            translations: ht,
            isRTL: !1
        },
        "fr-FR": {
            translations: bt,
            isRTL: !1
        },
        "it-IT": {
            translations: wt,
            isRTL: !1
        },
        "km-KH": {
            translations: yt,
            isRTL: !1
        },
        "ko-KR": {
            translations: Tt,
            isRTL: !1
        },
        "mn-MN": {
            translations: Dt,
            isRTL: !1
        },
        "pl-PL": {
            translations: St,
            isRTL: !1
        },
        "pt-PT": {
            translations: xt,
            isRTL: !1
        },
        "ru-RU": {
            translations: Et,
            isRTL: !1
        },
        "si-LK": {
            translations: Ot,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ct,
            isRTL: !1
        },
        "ta-IN": {
            translations: Ft,
            isRTL: !1
        },
        "th-TH": {
            translations: Pt,
            isRTL: !1
        },
        "tr-TR": {
            translations: At,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Rt,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Lt,
            isRTL: !1
        },
        "vi-VN": {
            translations: kt,
            isRTL: !1
        },
        "zh-CN": {
            translations: It,
            isRTL: !1
        },
        "zh-TW": {
            translations: Mt,
            isRTL: !1
        }
    };
var F = I; {
    let d = class d extends F.Controller.BaseViewController {
        constructor(a, e, o) {
            super(a, e, o, Je);
            var f = this.controller;
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
                var e = this.model,
                    o = this.controller,
                    f = this.idService;
                return F.Logger.startActiveSpan("OnReady", function(s) {
                    s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "ba721d71-aa1c-4f8f-8e75-783060496f49"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnReady"), a = o.callContext(a);
                        var p = new F.DataTypes.VariableHolder;
                        p.value = F.SystemActions.listFilter(e.variables.transactionsIn, function(w) {
                            return w.dateAttr === e.variables.transactionDateIn
                        }, a), e.variables.transactionListVar = p.value.filteredListOut.getCurrent(a.iterationContext).transactionsAttr
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(a) {
            this.__onReady$Action = a
        }
        get _onClickTransactionItem$Action() {
            return this.hasOwnProperty("__onClickTransactionItem$Action") || (this.__onClickTransactionItem$Action = function(a, e) {
                var o = this.model,
                    f = this.controller,
                    s = this.idService;
                return F.Logger.startActiveSpan("OnClickTransactionItem", function(p) {
                    p && (p.setAttribute("code.function", "OnClickTransactionItem"), p.setAttribute("outsystems.function.key", "bcb3315a-54cb-4e6f-a425-517004734fb2"), p.setAttribute("outsystems.function.owner.name", "dashboard"), p.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        f.ensureControllerAlive("OnClickTransactionItem"), e = f.callContext(e);
                        var w = new F.DataTypes.VariableHolder(new(f.constructor.getVariableGroupType("dashboard.CFDs.CFDTransactionItem.OnClickTransactionItem$vars")));
                        w.value.transactionDetailsInLocal = a.clone();
                        var n = new F.DataTypes.VariableHolder;
                        o.variables.isPortfolioIn && (o.variables.activeTransactionVar = w.value.transactionDetailsInLocal, n.value = M.sidebarOpen$Action(s.getId("CFDTransactionDetailsPopup"), e))
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__onClickTransactionItem$Action
        }
        set _onClickTransactionItem$Action(a) {
            this.__onClickTransactionItem$Action = a
        }
        get _closeSidebar$Action() {
            return this.hasOwnProperty("__closeSidebar$Action") || (this.__closeSidebar$Action = function(a) {
                var e = this.model,
                    o = this.controller,
                    f = this.idService;
                return F.Logger.startActiveSpan("CloseSidebar", function(s) {
                    s && (s.setAttribute("code.function", "CloseSidebar"), s.setAttribute("outsystems.function.key", "e646c2ec-0fe3-4f2e-91a6-ba3337c5382b"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("CloseSidebar"), a = o.callContext(a);
                        var p = new F.DataTypes.VariableHolder;
                        p.value = M.sidebarClose$Action(f.getId("CFDTransactionDetailsPopup"), a)
                    } finally {
                        s && s.end()
                    }
                }, 1)
            }), this.__closeSidebar$Action
        }
        set _closeSidebar$Action(a) {
            this.__closeSidebar$Action = a
        }
        onReady$Action(a) {
            var e = this.controller;
            return F.Logger.startActiveSpan("OnReady__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "ba721d71-aa1c-4f8f-8e75-783060496f49"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._onReady$Action, a)
                } finally {
                    o && o.end()
                }
            }, 0)
        }
        onClickTransactionItem$Action(a, e) {
            var o = this.controller;
            return F.Logger.startActiveSpan("OnClickTransactionItem__proxy", function(f) {
                f && (f.setAttribute("code.function", "OnClickTransactionItem"), f.setAttribute("outsystems.function.key", "bcb3315a-54cb-4e6f-a425-517004734fb2"), f.setAttribute("outsystems.function.owner.name", "dashboard"), f.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onClickTransactionItem$Action, e, a)
                } finally {
                    f && f.end()
                }
            }, 0)
        }
        closeSidebar$Action(a) {
            var e = this.controller;
            return F.Logger.startActiveSpan("CloseSidebar__proxy", function(o) {
                o && (o.setAttribute("code.function", "CloseSidebar"), o.setAttribute("outsystems.function.key", "e646c2ec-0fe3-4f2e-91a6-ba3337c5382b"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return e.safeExecuteClientAction(e._closeSidebar$Action, a)
                } finally {
                    o && o.end()
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
                var e = this.controller,
                    o = this.model,
                    f = this.idService;
                return e.onReady$Action(a)
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return H.defaultTimeout
        }
    };
    v(d, "ControllerInner");
    let g = d;
    Ce = g, Ce.registerVariableGroupType("dashboard.CFDs.CFDTransactionItem.OnClickTransactionItem$vars", [{
        name: "TransactionDetails",
        attrName: "transactionDetailsInLocal",
        mandatory: !0,
        dataType: F.DataTypes.DataTypes.Record,
        defaultValue: v(function() {
            return new q
        }, "defaultValue"),
        complexType: q
    }])
}
var Ce, ze = new F.Controller.ControllerFactory(Ce, X);
var Q = J.PlaceholderContent,
    Zt = J.IteratorPlaceholderContent,
    qt = v(function() {
        var g = ee(function(d) {
            var t = d.model,
                a = d.controller,
                e = d.controller.idService,
                o = a.validationService,
                f = a.callContext(),
                s = re,
                p = ie,
                w = {
                    props: d,
                    validateWidget: v(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                n = t,
                S = ae,
                T = te,
                c = $();
            return l.createElement("div", d.rootNodeProperties, l.createElement(ne, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: t.variables.transactionListVar,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    content: new Zt(function(u, i) {
                        return [l.createElement(se, {
                            onClick: v(function() {
                                var h = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                a.onClickTransactionItem$Action(t.variables.transactionListVar.getCurrent(i.iterationContext), a.callContext(h))
                            }, "onClick"),
                            style: t.getCachedValue(u.getId("ListItem.Style"), function() {
                                return "list-item cfd-transaction-list" + (t.variables.isPortfolioIn ? " cursor-pointer" : " list-item-no-click-effect list-item-no-hover")
                            }, function() {
                                return t.variables.isPortfolioIn
                            }),
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: u,
                                name: "ListItem"
                            },
                            _widgetRecordProvider: n,
                            style_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isPortfolioInDataFetchStatus),
                            placeholders: {
                                leftActions: Q.Empty,
                                content: new Q(function() {
                                    return [l.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center gap-m",
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: n
                                    }, l.createElement(z, {
                                        extendedProperties: {
                                            style: "padding: 14px 0px 14px 0px;"
                                        },
                                        type: 1,
                                        url: t.getCachedValue(u.getId("h_gdgxXNzEGkBoi75mMw7w.Url"), function() {
                                            return t.variables.isDemoIn ? "/dashboard/img/dashboard.resetbalance_black.svg" : "/dashboard/img/dashboard.icon_transfer.svg"
                                        }, function() {
                                            return t.variables.isDemoIn
                                        }),
                                        _idProps: {
                                            service: u,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: n,
                                        url_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                                    }), l.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "padding: 14px 0px 14px 0px;"
                                        },
                                        style: "cfd-transaction-list__content",
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: n
                                    }, l.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width flex-1",
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: n
                                    }, l.createElement(E, {
                                        style: "font-size-base",
                                        value: t.getCachedValue(u.getId("EBV4tVVAzEq_VZ16DkUEtA.Value"), function() {
                                            return t.variables.isDemoIn ? N.resolve(Z.TranslationsService).getMessage("Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.-910911253.1", "Reset balance") : N.resolve(Z.TranslationsService).getMessage("Tv1TZi1kL06M5wiM2prdMQ#ValueExpression.1345526795.1", "Transfer")
                                        }, function() {
                                            return t.variables.isDemoIn
                                        }),
                                        _idProps: {
                                            service: u,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: n,
                                        value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                                    }), l.createElement(_, {
                                        align: 0,
                                        animate: !0,
                                        style: "full-width",
                                        visible: !t.variables.isDemoIn,
                                        _idProps: {
                                            service: u,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: n,
                                        visible_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                                    }, l.createElement(E, {
                                        extendedProperties: {
                                            style: "font-size: 12px;"
                                        },
                                        style: "text-subtle",
                                        value: t.getCachedValue(u.getId("L4L3DYQ2O0Ol4ql7T2L0Xw.Value"), function() {
                                            return t.variables.isDemoIn ? "" : t.variables.transactionListVar.getCurrent(i.iterationContext).from_accountAttr + " -> " + t.variables.transactionListVar.getCurrent(i.iterationContext).to_accountAttr
                                        }, function() {
                                            return t.variables.isDemoIn
                                        }, function() {
                                            return t.variables.transactionListVar.getCurrent(i.iterationContext).from_accountAttr
                                        }, function() {
                                            return t.variables.transactionListVar.getCurrent(i.iterationContext).to_accountAttr
                                        }),
                                        _idProps: {
                                            service: u,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: n,
                                        value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                                    }))), l.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: u,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: n
                                    }, S(t.variables.isPortfolioIn && Y.getHideCurrency(), !1, this, function() {
                                        return [l.createElement(E, {
                                            extendedProperties: {
                                                style: "padding: 14px 0px 14px 0px;"
                                            },
                                            style: "font-size-base full-width text-align-right",
                                            value: "*******",
                                            _idProps: {
                                                service: u,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: n
                                        })]
                                    }, function() {
                                        return [l.createElement(E, {
                                            extendedProperties: {
                                                style: "padding: 14px 0px 14px 0px;"
                                            },
                                            style: "font-size-base full-width text-align-right",
                                            value: t.getCachedValue(u.getId("GwbvGUjMsEGjiEFVjvSVMw.Value"), function() {
                                                return (t.variables.isDemoIn ? O.formatDecimal(O.integerToDecimal(1e4), t.variables.transactionListVar.getCurrent(i.iterationContext).fractionalDigitsAttr, ".", ",") : O.formatDecimal(O.textToDecimal(O.decimalToText(t.variables.transactionListVar.getCurrent(i.iterationContext).amountAttr)), t.variables.transactionListVar.getCurrent(i.iterationContext).fractionalDigitsAttr, ".", ",")) + " " + t.variables.transactionListVar.getCurrent(i.iterationContext).destination_currencyAttr
                                            }, function() {
                                                return t.variables.isDemoIn
                                            }, function() {
                                                return t.variables.transactionListVar.getCurrent(i.iterationContext).fractionalDigitsAttr
                                            }, function() {
                                                return t.variables.transactionListVar.getCurrent(i.iterationContext).amountAttr
                                            }, function() {
                                                return t.variables.transactionListVar.getCurrent(i.iterationContext).destination_currencyAttr
                                            }),
                                            _idProps: {
                                                service: u,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: n,
                                            value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                                        })]
                                    }))))]
                                }),
                                rightActions: Q.Empty
                            },
                            _dependencies: [s(Y.getHideCurrency()), s(t.variables.isPortfolioIn), s(t.variables.transactionListVar.getCurrent(i.iterationContext).destination_currencyAttr), s(t.variables.transactionListVar.getCurrent(i.iterationContext).amountAttr), s(t.variables.transactionListVar.getCurrent(i.iterationContext).fractionalDigitsAttr), s(t.variables.transactionListVar.getCurrent(i.iterationContext).to_accountAttr), s(t.variables.transactionListVar.getCurrent(i.iterationContext).from_accountAttr), s(t.variables._isPortfolioInDataFetchStatus), s(t.variables._isDemoInDataFetchStatus), s(t.variables.isDemoIn)]
                        })]
                    }, f, e, "1")
                },
                _dependencies: [s(Y.getHideCurrency()), s(t.variables.isDemoIn), s(t.variables._isDemoInDataFetchStatus), s(t.variables._isPortfolioInDataFetchStatus), s(t.variables.isPortfolioIn)]
            }), l.createElement(pe, {
                getOwnerSpan: v(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: v(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "transaction-details-popup",
                    Width: "100vw"
                },
                events: {
                    _handleError: v(function(u) {
                        a.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    name: "CFDTransactionDetailsPopup",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                placeholders: {
                    header: Q.Empty,
                    content: new Q(function() {
                        return [l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "transaction-details-popup-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(z, {
                            extendedEvents: {
                                onClick: v(function() {
                                    var u = typeof f != "undefined" && f !== null ? f.clone() : a.callContext().clone();
                                    a.closeSidebar$Action(a.callContext(u))
                                }, "onClick")
                            },
                            extendedProperties: {
                                style: "cursor: pointer; display: flex; margin-inline-end: 0px; margin-inline-start: 24px; margin-top: 24px;"
                            },
                            image: j.VersionedURL.getVersionedUrl("img/dashboard.buttonback.svg"),
                            style: "rotate-180",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "15"
                            },
                            _widgetRecordProvider: n
                        }), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "transaction-item-header-content",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(z, {
                            gridProperties: {
                                width: "64px",
                                marginLeft: "0px"
                            },
                            type: 1,
                            url: "/dashboard/img/dashboard.transaction_transfer.svg",
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; text-align: center;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: 800;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: t.getCachedValue(e.getId("PPIetqFoWkCBHJhG4THv7w.Style"), function() {
                                return M.isDesktop$Action(f).isDesktopOut ? "text-align-left" : "text-align-center"
                            }),
                            value: t.getCachedValue(e.getId("PPIetqFoWkCBHJhG4THv7w.Value"), function() {
                                return (t.variables.isDemoIn ? O.formatDecimal(O.integerToDecimal(1e4), t.variables.activeTransactionVar.fractionalDigitsAttr, ".", ",") : O.formatDecimal(O.textToDecimal(O.decimalToText(t.variables.activeTransactionVar.amountAttr)), t.variables.activeTransactionVar.fractionalDigitsAttr, ".", ",")) + " " + t.variables.activeTransactionVar.destination_currencyAttr
                            }, function() {
                                return t.variables.isDemoIn
                            }, function() {
                                return t.variables.activeTransactionVar.fractionalDigitsAttr
                            }, function() {
                                return t.variables.activeTransactionVar.amountAttr
                            }, function() {
                                return t.variables.activeTransactionVar.destination_currencyAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: n,
                            value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                        }), l.createElement(E, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48);"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: t.getCachedValue(e.getId("3h2RauuWz0iNBzS+i6dPFg.Style"), function() {
                                return M.isDesktop$Action(f).isDesktopOut ? "text-align-left" : "text-align-center"
                            }),
                            value: t.getCachedValue(e.getId("3h2RauuWz0iNBzS+i6dPFg.Value"), function() {
                                return t.variables.isDemoIn ? "" : t.variables.activeTransactionVar.from_accountAttr + " -> " + t.variables.activeTransactionVar.to_accountAttr
                            }, function() {
                                return t.variables.isDemoIn
                            }, function() {
                                return t.variables.activeTransactionVar.from_accountAttr
                            }, function() {
                                return t.variables.activeTransactionVar.to_accountAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: n,
                            value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                        }))))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 24px;"
                            },
                            style: t.getCachedValue(e.getId("K5sNr2YZ60iGF61YPjzm0Q.Style"), function() {
                                return M.isDesktop$Action(f).isDesktopOut ? "margin-right-m margin-left-m" : ""
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "display-flex flex-direction-column justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 24px; padding: 0px 0px 4px 0px;"
                            },
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("x3UrkH3aYkiHwE567quD0w#Value", "Transaction Status"))],
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            style: t.getCachedValue(e.getId("p7mi4PUirkSS+4b3UUO4AQ.Style"), function() {
                                return t.variables.activeTransactionVar.transaction_statusAttr === "Complete" || t.variables.activeTransactionVar.transaction_statusAttr === "Completed" || t.variables.activeTransactionVar.transaction_statusAttr === "Success" || t.variables.activeTransactionVar.transaction_statusAttr === "Released" ? "transaction-status-success" : t.variables.activeTransactionVar.transaction_statusAttr === "Failed" || t.variables.activeTransactionVar.transaction_statusAttr === "Reverted" || t.variables.activeTransactionVar.transaction_statusAttr === "Cancelled" ? "transaction-status-error" : "transaction-status-warning"
                            }, function() {
                                return t.variables.activeTransactionVar.transaction_statusAttr
                            }),
                            value: t.getCachedValue(e.getId("p7mi4PUirkSS+4b3UUO4AQ.Value"), function() {
                                return t.variables.activeTransactionVar.transaction_statusAttr === "complete" ? N.resolve(Z.TranslationsService).getMessage("hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.-534801063.1", "Complete") : t.variables.activeTransactionVar.transaction_statusAttr === "pending" ? N.resolve(Z.TranslationsService).getMessage("hB3ZFZJmiUmwV9XbLKVHxw#ValueExpression.982065527.1", "Pending") : t.variables.activeTransactionVar.transaction_statusAttr
                            }, function() {
                                return t.variables.activeTransactionVar.transaction_statusAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 24px; padding: 4px 0px 4px 0px;"
                            },
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("gIALGGDIUk20YOlZA8q6lQ#Value", "Transaction ID"))],
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: t.variables.activeTransactionVar.transaction_idAttr,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 4px 24px 14px 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: t.getCachedValue(e.getId("pUA8i4RdJkqeVzDP+thhVQ.Style"), function() {
                                return "display-flex flex-direction-row justify-content-space-between" + (M.isDesktop$Action(f).isDesktopOut ? " border-bottom-small" : " border-bottom-large")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("JOhdMN6120+xv8o+64dsEA#Value", "Transaction type"))],
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: N.resolve(Z.TranslationsService).getMessage("d1me2b5F50qqSix0J8s3mw#ValueExpression.1345526795.1", "Transfer"),
                            _idProps: {
                                service: e,
                                uuid: "38"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 24px; padding: 24px 0px 4px 0px; text-align: end;"
                            },
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "40"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("nb1+j_JlG0KkBrKOj0Lv1w#Value", "From"))],
                            _idProps: {
                                service: e,
                                uuid: "41"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "max-width: 200px; text-align: end;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px; max-width: 200px; text-align: end;"
                            },
                            value: t.variables.activeTransactionVar.from_accountAttr,
                            _idProps: {
                                service: e,
                                uuid: "43"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 24px; padding: 4px 0px 4px 0px;"
                            },
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "44"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "45"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("9vcMZmQ2GE+a4PoAAOY2tw#Value", "To"))],
                            _idProps: {
                                service: e,
                                uuid: "46"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "max-width: 200px; text-align: end;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "47"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px; max-width: 200px; text-align: end;"
                            },
                            value: t.variables.activeTransactionVar.to_accountAttr,
                            _idProps: {
                                service: e,
                                uuid: "48"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 4px 24px 14px 24px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: t.getCachedValue(e.getId("rHHZbPPXY0azn4YrojtlMw.Style"), function() {
                                return "display-flex flex-direction-row justify-content-space-between" + (M.isDesktop$Action(f).isDesktopOut ? " border-bottom-small" : " border-bottom-large")
                            }),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "49"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "50"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("FmZ6kumbM0+kFVHVvqG_iQ#Value", "Amount"))],
                            _idProps: {
                                service: e,
                                uuid: "51"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "52"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: t.getCachedValue(e.getId("nJttXQUSr0ScI3wCbs9Pjw.Value"), function() {
                                return (t.variables.isDemoIn ? O.formatDecimal(O.integerToDecimal(1e4), t.variables.activeTransactionVar.fractionalDigitsAttr, ".", ",") : O.formatDecimal(O.textToDecimal(O.decimalToText(t.variables.activeTransactionVar.amountAttr)), t.variables.activeTransactionVar.fractionalDigitsAttr, ".", ",")) + " " + t.variables.activeTransactionVar.destination_currencyAttr
                            }, function() {
                                return t.variables.isDemoIn
                            }, function() {
                                return t.variables.activeTransactionVar.fractionalDigitsAttr
                            }, function() {
                                return t.variables.activeTransactionVar.amountAttr
                            }, function() {
                                return t.variables.activeTransactionVar.destination_currencyAttr
                            }),
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: n,
                            value_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isDemoInDataFetchStatus)
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-inline-end: 24px; margin-inline-start: 24px; padding: 24px 0px 4px 0px;"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "54"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "55"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("Gu___u5hcEWHSyVxF8Zqng#Value", "Date"))],
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "direction: ltr; text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "57"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: t.variables.activeTransactionVar.dateAttr,
                            _idProps: {
                                service: e,
                                uuid: "58"
                            },
                            _widgetRecordProvider: n
                        }))), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 24px; padding: 4px 0px 24px 0px;"
                            },
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex flex-direction-row justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "59"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "60"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(A, {
                            extendedProperties: {
                                style: "color: rgba(0, 0, 0, 0.48); font-size: 14px;"
                            },
                            text: [T(p("OHjzh3c+DEiqVrdNNqH2_Q#Value", "Time"))],
                            _idProps: {
                                service: e,
                                uuid: "61"
                            },
                            _widgetRecordProvider: n
                        })), l.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "text-align: start;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "62"
                            },
                            _widgetRecordProvider: n
                        }, l.createElement(E, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            value: t.variables.activeTransactionVar.timestampAttr,
                            _idProps: {
                                service: e,
                                uuid: "63"
                            },
                            _widgetRecordProvider: n
                        })))))]
                    })
                },
                _dependencies: [s(t.variables._isDemoInDataFetchStatus), s(t.variables.activeTransactionVar.timestampAttr), s(t.variables.activeTransactionVar.dateAttr), s(t.variables.activeTransactionVar.transaction_idAttr), s(t.variables.activeTransactionVar.transaction_statusAttr), s(t.variables.activeTransactionVar.to_accountAttr), s(t.variables.activeTransactionVar.from_accountAttr), s(t.variables.activeTransactionVar.destination_currencyAttr), s(t.variables.activeTransactionVar.amountAttr), s(t.variables.activeTransactionVar.fractionalDigitsAttr), s(t.variables.isDemoIn)]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: v(function() {
                return {
                    codeFunction: "CFDTransactionItem",
                    functionKey: "e014288d-3621-481d-88cb-7e4c8d1757ad",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDTransactionItem",
            modelFactory: Me,
            controllerFactory: ze
        });
        return g.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDTransactionItem.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [pe]
        }, g
    }, "componentFactory"),
    Fe = qt();
var ve = J.PlaceholderContent,
    Bt = J.IteratorPlaceholderContent,
    Jt = v(function() {
        var g = ee(function(d) {
            var t = d.model,
                a = d.controller,
                e = d.controller.idService,
                o = a.validationService,
                f = a.callContext(),
                s = re,
                p = ie,
                w = {
                    props: d,
                    validateWidget: v(function(u) {
                        d.validateWidget(d, u)
                    }, "validateWidget")
                },
                n = t,
                S = ae,
                T = te,
                c = $();
            return x.createElement("div", d.rootNodeProperties, S(t.variables.isLoadingVar, !1, this, function() {
                return [x.createElement(Ve, {
                    getOwnerSpan: v(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: v(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: v(function(u) {
                            a.handleError(u)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: o
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    _dependencies: []
                })]
            }, function() {
                return [S(t.variables.dateList2Var.isEmpty, !1, this, function() {
                    return [x.createElement(_, {
                        align: 0,
                        animate: !1,
                        style: "full-width display-flex flex-direction-column justify-content-center align-items-center",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "1"
                        },
                        _widgetRecordProvider: n
                    }, x.createElement(z, {
                        image: j.VersionedURL.getVersionedUrl("img/dashboard.clock.png"),
                        style: "cfd-transaction__empty-icon",
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "2"
                        },
                        _widgetRecordProvider: n
                    }), x.createElement(E, {
                        extendedProperties: {
                            style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                        },
                        gridProperties: {
                            marginLeft: "0px"
                        },
                        style: "font-bold font-size-base",
                        value: N.resolve(Z.TranslationsService).getMessage("9K1AeBYlfUi5knE6pY1F_w#ValueExpression.431081980.1", "No transactions yet"),
                        _idProps: {
                            service: e,
                            uuid: "3"
                        },
                        _widgetRecordProvider: n
                    }), x.createElement(A, {
                        style: "text-subtle text-align-center",
                        text: [T(p("BtyieyCs_UuvUNgk7OG+gw#Value", "Start by making your first transfer to see your trading activity here."))],
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: n
                    }))]
                }, function() {
                    return [x.createElement(_, {
                        align: 0,
                        animate: !0,
                        style: "full-width margin-bottom-s display-flex align-items-center gap-s",
                        visible: !t.variables.isPortfolioIn,
                        _idProps: {
                            service: e,
                            name: "Header"
                        },
                        _widgetRecordProvider: n,
                        visible_dataFetchStatus: C.calculateDataFetchStatus(t.variables._isPortfolioInDataFetchStatus)
                    }, x.createElement(A, {
                        style: "font-size-h6 font-bold",
                        text: [T(p("F_YZ0DpJeUW_PIojAvSaKw#Value", "Recent transactions"))],
                        _idProps: {
                            service: e,
                            uuid: "6"
                        },
                        _widgetRecordProvider: n
                    }), x.createElement(fe, {
                        getOwnerSpan: v(function() {
                            return c.getChildSpan("render")
                        }, "getOwnerSpan"),
                        getOwnerDisposeSpan: v(function() {
                            return c.getChildSpan("destroy")
                        }, "getOwnerDisposeSpan"),
                        inputs: {
                            SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M16.6875 11.3125C17.0938 11.6875 17.0938 12.3438 16.6875 12.7188L10.6875 18.7188C10.3125 19.125 9.65625 19.125 9.28125 18.7188C8.875 18.3438 8.875 17.6875 9.28125 17.3125L14.5625 12L9.28125 6.71875C8.875 6.34375 8.875 5.6875 9.28125 5.3125C9.65625 4.90625 10.3125 4.90625 10.6875 5.3125L16.6875 11.3125Z' fill='#181C25'/>\r
</svg>`,
                            ExtendedClass: "rotate-180"
                        },
                        events: {
                            _handleError: v(function(u) {
                                a.handleError(u)
                            }, "_handleError")
                        },
                        _validationProps: {
                            validationService: o
                        },
                        _idProps: {
                            service: e,
                            uuid: "7",
                            alias: "2"
                        },
                        _widgetRecordProvider: n,
                        _dependencies: []
                    })), x.createElement(ne, {
                        animateItems: !0,
                        extendedProperties: {
                            "disable-virtualization": "True"
                        },
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mode: 0,
                        source: t.variables.dateList2Var,
                        style: "list list-group",
                        tag: "div",
                        _idProps: {
                            service: e,
                            uuid: "8"
                        },
                        _widgetRecordProvider: n,
                        placeholders: {
                            content: new Bt(function(u, i) {
                                return [x.createElement(se, {
                                    style: '"list-item"',
                                    triggerActionOnFullSwipeLeft: !1,
                                    triggerActionOnFullSwipeRight: !1,
                                    _idProps: {
                                        service: u,
                                        name: "DateList"
                                    },
                                    _widgetRecordProvider: n,
                                    placeholders: {
                                        leftActions: ve.Empty,
                                        content: new ve(function() {
                                            return [x.createElement(_, {
                                                align: 0,
                                                animate: !1,
                                                style: "margin-y-base",
                                                visible: !0,
                                                _idProps: {
                                                    service: u,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: n
                                            }, x.createElement(E, {
                                                style: "text-subtle",
                                                value: t.variables.dateList2Var.getCurrent(i.iterationContext),
                                                _idProps: {
                                                    service: u,
                                                    name: "Dates"
                                                },
                                                _widgetRecordProvider: n
                                            }), x.createElement(Fe, {
                                                getOwnerSpan: v(function() {
                                                    return c.getChildSpan("render")
                                                }, "getOwnerSpan"),
                                                getOwnerDisposeSpan: v(function() {
                                                    return c.getChildSpan("destroy")
                                                }, "getOwnerDisposeSpan"),
                                                inputs: {
                                                    IsPortfolio: t.variables.isPortfolioIn,
                                                    _isPortfolioInDataFetchStatus: C.calculateDataFetchStatus(t.variables._isPortfolioInDataFetchStatus),
                                                    IsDemo: t.variables.activeTradingDetailsIn.typeAttr === "demo",
                                                    _isDemoInDataFetchStatus: C.calculateDataFetchStatus(t.variables._activeTradingDetailsInDataFetchStatus),
                                                    TransactionDate: t.variables.dateList2Var.getCurrent(i.iterationContext),
                                                    Transactions: t.variables.transactionListVar
                                                },
                                                events: {
                                                    _handleError: v(function(h) {
                                                        a.handleError(h)
                                                    }, "_handleError")
                                                },
                                                _validationProps: {
                                                    validationService: o
                                                },
                                                _idProps: {
                                                    service: u,
                                                    uuid: "12",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: n,
                                                _dependencies: []
                                            }))]
                                        }),
                                        rightActions: ve.Empty
                                    },
                                    _dependencies: [s(t.variables.transactionListVar), s(t.variables.activeTradingDetailsIn.typeAttr), s(t.variables._activeTradingDetailsInDataFetchStatus), s(t.variables._isPortfolioInDataFetchStatus), s(t.variables.isPortfolioIn), s(t.variables.dateList2Var.getCurrent(i.iterationContext))]
                                })]
                            }, f, e, "1")
                        },
                        _dependencies: [s(t.variables.transactionListVar), s(t.variables.activeTradingDetailsIn.typeAttr), s(t.variables._activeTradingDetailsInDataFetchStatus), s(t.variables._isPortfolioInDataFetchStatus), s(t.variables.isPortfolioIn)]
                    }), x.createElement(_, {
                        align: 0,
                        animate: !1,
                        style: "full-width text-align-center padding-y-m",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "13"
                        },
                        _widgetRecordProvider: n
                    }, S(t.variables.hasMoreTransactionsVar, !1, this, function() {
                        return [x.createElement(ge, {
                            getOwnerSpan: v(function() {
                                return c.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: v(function() {
                                return c.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: t.variables.fetchingNewTransactionsVar,
                                ShowLabelOnLoading: !0
                            },
                            events: {
                                _handleError: v(function(u) {
                                    a.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "4"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                button: new ve(function() {
                                    return [x.createElement(ke, {
                                        enabled: !0,
                                        gridProperties: {
                                            width: "auto"
                                        },
                                        isDefault: !1,
                                        onClick: v(function() {
                                            return Promise.resolve().then(function() {
                                                var u = typeof f != "undefined" && f !== null ? f.clone() : a.callContext().clone();
                                                return a.loadMoreOnClick$Action(a.callContext(u))
                                            })
                                        }, "onClick"),
                                        style: "btn btn-outline btn-rounded",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: n
                                    }, x.createElement(_, {
                                        align: 0,
                                        animate: !1,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: n
                                    }), T(p("sRUBhLffL0mqzSRv7xOP2g#Value", "See more")))]
                                })
                            },
                            _dependencies: []
                        })]
                    }, function() {
                        return [x.createElement(A, {
                            style: "text-subtle",
                            text: [T(p("wCaOhx24ikK810Pc_vmu1Q#Value", "End of transaction"))],
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: n
                        })]
                    }))]
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: v(function() {
                return {
                    codeFunction: "CFDTransactionList",
                    functionKey: "3a48726c-e0fd-455f-8495-dddb6320700c",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDTransactionList",
            modelFactory: Ze,
            controllerFactory: Be
        });
        return g.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDTransactionList.css", "css/OutSystemsReactWidgets.css"]
        }, g.getJsDependencies = function() {
            return []
        }, g.getBlocks = function() {
            return [Ve, fe, Fe, ge]
        }, g
    }, "componentFactory"),
    Ka = Jt();
export {
    Ka as a
};