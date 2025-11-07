import {
    h as A,
    q as b,
    x as v
} from "./_oschunk-O5KC3WOL.js";
import {
    a as U,
    g as p,
    m as L,
    o as B,
    q as x,
    r as T,
    s as Q,
    t as F
} from "./_oschunk-NVHFAAS2.js";
import {
    a as I
} from "./_oschunk-AW35UT34.js";
import {
    Ga as E,
    Ka as P,
    T as H
} from "./_oschunk-WCMQG33O.js";
import {
    J as h,
    X as S,
    c as d,
    f as N,
    q as y
} from "./_oschunk-DFKJJKI4.js";
var c = S,
    R = class R extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("CurrencyList", "currencyListIn", "CurrencyList", !0, !1, c.DataTypes.DataTypes.RecordList, function() {
                return c.DataTypes.ImmutableBase.getData(new(c.GenericTypeCache.getGenericList(H)))
            }, !1, c.GenericTypeCache.getGenericList(H)), this.attr("_currencyListInDataFetchStatus", "_currencyListInDataFetchStatus", "_currencyListInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("DarkMode", "darkModeIn", "DarkMode", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_darkModeInDataFetchStatus", "_darkModeInDataFetchStatus", "_darkModeInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasBalance", "hasBalanceIn", "HasBalance", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasBalanceInDataFetchStatus", "_hasBalanceInDataFetchStatus", "_hasBalanceInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsTrading", "isTradingIn", "IsTrading", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isTradingInDataFetchStatus", "_isTradingInDataFetchStatus", "_isTradingInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsP2P", "isP2PIn", "IsP2P", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isP2PInDataFetchStatus", "_isP2PInDataFetchStatus", "_isP2PInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(R, "VariablesRecord");
var O = R;
O.init();
var D = class D extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
d(D, "WidgetsRecord");
var k = D,
    w = class w extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return O
        }
        static getWidgetsRecordConstructor() {
            return k
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(i) {
            "CurrencyList" in i && (this.variables.currencyListIn = i.CurrencyList, "_currencyListInDataFetchStatus" in i && (this.variables._currencyListInDataFetchStatus = i._currencyListInDataFetchStatus)), "DarkMode" in i && (this.variables.darkModeIn = i.DarkMode, "_darkModeInDataFetchStatus" in i && (this.variables._darkModeInDataFetchStatus = i._darkModeInDataFetchStatus)), "HasBalance" in i && (this.variables.hasBalanceIn = i.HasBalance, "_hasBalanceInDataFetchStatus" in i && (this.variables._hasBalanceInDataFetchStatus = i._hasBalanceInDataFetchStatus)), "IsTrading" in i && (this.variables.isTradingIn = i.IsTrading, "_isTradingInDataFetchStatus" in i && (this.variables._isTradingInDataFetchStatus = i._isTradingInDataFetchStatus)), "IsP2P" in i && (this.variables.isP2PIn = i.IsP2P, "_isP2PInDataFetchStatus" in i && (this.variables._isP2PInDataFetchStatus = i._isP2PInDataFetchStatus))
        }
    };
d(w, "Model");
var C = w;
C._hasValidationWidgetsValue = void 0;
var z = new c.Model.ModelFactory(C);
var o = N(U());
var J = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0633\u062D\u0628",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u0628\u064A\u0639",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0633\u062D\u0628",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u0628\u064A\u0639",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u062A\u062D\u0648\u064A\u0644",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u062A\u062D\u0648\u064A\u0644",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u062A\u062D\u0648\u064A\u0644",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u062A\u062D\u0648\u064A\u0644",
        "46lOECc8M0KO9HrO32va0g#Value": "\u0625\u064A\u062F\u0627\u0639",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0634\u0631\u0627\u0621",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u0625\u064A\u062F\u0627\u0639",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0634\u0631\u0627\u0621"
    },
    Z = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B9\u09BE\u09B0",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B9\u09BE\u09B0",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09C1\u09A8",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u09B8\u09CD\u09A5\u09BE\u09A8\u09BE\u09A8\u09CD\u09A4\u09B0",
        "46lOECc8M0KO9HrO32va0g#Value": "\u099C\u09AE\u09BE",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0995\u09BF\u09A8\u09C1\u09A8",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u099C\u09AE\u09BE",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0995\u09BF\u09A8\u09C1\u09A8"
    },
    $ = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Abheben",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Verkaufen",
        "cadAaA34MEWB97hZs7gCDw#Value": "Abheben",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Verkaufen",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\xDCberweisen",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\xDCberweisen",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\xDCberweisen",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\xDCberweisen",
        "46lOECc8M0KO9HrO32va0g#Value": "Einzahlung",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Kaufen",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Einzahlung",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Kaufen"
    },
    Y = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Retirar",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Vender",
        "cadAaA34MEWB97hZs7gCDw#Value": "Retirar",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Vender",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Transferir",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Transferir",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Transferir",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Transferir",
        "46lOECc8M0KO9HrO32va0g#Value": "Dep\xF3sito",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Comprar",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Dep\xF3sito",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Comprar"
    },
    G = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Retirer",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Vendre",
        "cadAaA34MEWB97hZs7gCDw#Value": "Retirer",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Vendre",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Transf\xE9rer",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Transf\xE9rer",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Transf\xE9rer",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Transf\xE9rer",
        "46lOECc8M0KO9HrO32va0g#Value": "D\xE9p\xF4t",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Acheter",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "D\xE9p\xF4t",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Acheter"
    },
    j = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Prelievo",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Vendi",
        "cadAaA34MEWB97hZs7gCDw#Value": "Prelievo",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Vendi",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Trasferisci",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Trasferisci",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Trasferisci",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Trasferisci",
        "46lOECc8M0KO9HrO32va0g#Value": "Deposito",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Compra",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Deposito",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Compra"
    },
    q = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u178A\u1780\u1794\u17D2\u179A\u17B6\u1780\u17CB",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u179B\u1780\u17CB",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u178A\u1780\u1794\u17D2\u179A\u17B6\u1780\u17CB",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u179B\u1780\u17CB",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u1795\u17D2\u1791\u17C1\u179A",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u1795\u17D2\u1791\u17C1\u179A",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u1795\u17D2\u1791\u17C1\u179A",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u1795\u17D2\u1791\u17C1\u179A",
        "46lOECc8M0KO9HrO32va0g#Value": "\u178A\u17B6\u1780\u17CB\u1794\u17D2\u179A\u17B6\u1780\u17CB",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u1791\u17B7\u1789",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u178A\u17B6\u1780\u17CB\u1794\u17D2\u179A\u17B6\u1780\u17CB",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u1791\u17B7\u1789"
    },
    X = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\uCD9C\uAE08",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\uD310\uB9E4",
        "cadAaA34MEWB97hZs7gCDw#Value": "\uCD9C\uAE08",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\uD310\uB9E4",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\uC774\uCCB4",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\uC774\uCCB4",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\uC774\uCCB4",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\uC774\uCCB4",
        "46lOECc8M0KO9HrO32va0g#Value": "\uC785\uAE08",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\uAD6C\uB9E4\uD558\uAE30",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\uC785\uAE08",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\uAD6C\uB9E4\uD558\uAE30"
    },
    ee = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0410\u0432\u0447 \u0433\u0430\u0440\u0433\u0430\u0445",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u0417\u0430\u0440\u043D\u0430",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0410\u0432\u0447 \u0433\u0430\u0440\u0433\u0430\u0445",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u0417\u0430\u0440\u043D\u0430",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u0425\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u0425\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u0425\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u0425\u04E9\u0434\u04E9\u043B\u0433\u04E9\u04E9\u043D",
        "46lOECc8M0KO9HrO32va0g#Value": "\u0422\u04E9\u043B\u0431\u04E9\u0440",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0425\u0443\u0434\u0430\u043B\u0434\u0430\u043D \u0430\u0432\u0430\u0445",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u0422\u04E9\u043B\u0431\u04E9\u0440",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0425\u0443\u0434\u0430\u043B\u0434\u0430\u043D \u0430\u0432\u0430\u0445"
    },
    te = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Wyp\u0142ata",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Sprzedaj",
        "cadAaA34MEWB97hZs7gCDw#Value": "Wyp\u0142ata",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Sprzedaj",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Przelew",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Przelew",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Przelew",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Przelew",
        "46lOECc8M0KO9HrO32va0g#Value": "Depozyt",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Kup",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Depozyt",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Kup"
    },
    ae = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Levantar",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Vender",
        "cadAaA34MEWB97hZs7gCDw#Value": "Levantar",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Vender",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Transferir",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Transferir",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Transferir",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Transferir",
        "46lOECc8M0KO9HrO32va0g#Value": "Dep\xF3sito",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Comprar",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Dep\xF3sito",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Comprar"
    },
    re = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0412\u044B\u0432\u043E\u0434",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u041F\u0440\u043E\u0434\u0430\u0442\u044C",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0412\u044B\u0432\u043E\u0434",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u041F\u0440\u043E\u0434\u0430\u0442\u044C",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
        "46lOECc8M0KO9HrO32va0g#Value": "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u041A\u0443\u043F\u0438\u0442\u044C",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u041A\u0443\u043F\u0438\u0442\u044C"
    },
    ne = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0DB8\u0DD4\u0DAF\u0DBD\u0DCA \u0D86\u0DB4\u0DC3\u0DD4 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u0DC0\u0DD2\u0D9A\u0DD2\u0DAB\u0DD4\u0DB8\u0DCA",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0DB8\u0DD4\u0DAF\u0DBD\u0DCA \u0D86\u0DB4\u0DC3\u0DD4 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u0DC0\u0DD2\u0D9A\u0DD2\u0DAB\u0DD4\u0DB8\u0DCA",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u0DB8\u0DCF\u0DBB\u0DD4",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u0DB8\u0DCF\u0DBB\u0DD4",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u0DB8\u0DCF\u0DBB\u0DD4",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u0DB8\u0DCF\u0DBB\u0DD4",
        "46lOECc8M0KO9HrO32va0g#Value": "\u0DAD\u0DD0\u0DB1\u0DCA\u0DB4\u0DAD\u0DD4",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0DB8\u0DD2\u0DBD\u0DAF\u0DD3 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u0DAD\u0DD0\u0DB1\u0DCA\u0DB4\u0DAD\u0DD4",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0DB8\u0DD2\u0DBD\u0DAF\u0DD3 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8"
    },
    ie = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Toa pesa",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Uzae",
        "cadAaA34MEWB97hZs7gCDw#Value": "Toa pesa",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Uzae",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Hamisha fedha",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Hamisha fedha",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Hamisha fedha",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Hamisha fedha",
        "46lOECc8M0KO9HrO32va0g#Value": "Amana",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Nunua",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Amana",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Nunua"
    },
    oe = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0BAA\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 kg-\u0B9F\u0BC1",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u0BB5\u0BBF\u0BB1\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0BAA\u0BA3\u0BA4\u0BCD\u0BA4\u0BC8 kg-\u0B9F\u0BC1",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u0BB5\u0BBF\u0BB1\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
        "46lOECc8M0KO9HrO32va0g#Value": "\u0BB5\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0BB5\u0BBE\u0B99\u0BCD\u0B95\u0BC1",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u0BB5\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0BB5\u0BBE\u0B99\u0BCD\u0B95\u0BC1"
    },
    se = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u0E16\u0E2D\u0E19",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u0E02\u0E32\u0E22",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u0E16\u0E2D\u0E19",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u0E02\u0E32\u0E22",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19",
        "46lOECc8M0KO9HrO32va0g#Value": "\u0E1D\u0E32\u0E01\u0E40\u0E07\u0E34\u0E19",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u0E0B\u0E37\u0E49\u0E2D",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u0E1D\u0E32\u0E01\u0E40\u0E07\u0E34\u0E19",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u0E0B\u0E37\u0E49\u0E2D"
    },
    le = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\xC7ekim yap",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Sat",
        "cadAaA34MEWB97hZs7gCDw#Value": "\xC7ekim yap",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Sat",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Transfer et",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Transfer et",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Transfer et",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Transfer et",
        "46lOECc8M0KO9HrO32va0g#Value": "Para yat\u0131rma",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Sat\u0131n al",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Para yat\u0131rma",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Sat\u0131n al"
    },
    ue = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Pul chiqarish",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Sotish",
        "cadAaA34MEWB97hZs7gCDw#Value": "Pul chiqarish",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Sotish",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "O'tkazish",
        "Huepk9rV30e7MiHR0dhlBg#Value": "O'tkazish",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "O'tkazish",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "O'tkazish",
        "46lOECc8M0KO9HrO32va0g#Value": "Depozit",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Sotib olish",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Depozit",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Sotib olish"
    },
    ce = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "Pul chiqarish",
        "3jNWs6yKN0md4hZ267s3bA#Value": "Sotish",
        "cadAaA34MEWB97hZs7gCDw#Value": "Pul chiqarish",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "Sotish",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "O'tkazish",
        "Huepk9rV30e7MiHR0dhlBg#Value": "O'tkazish",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "O'tkazish",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "O'tkazish",
        "46lOECc8M0KO9HrO32va0g#Value": "Depozit",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Sotib olish",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "Depozit",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Sotib olish"
    },
    de = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "R\xFAt ti\u1EC1n",
        "3jNWs6yKN0md4hZ267s3bA#Value": "B\xE1n",
        "cadAaA34MEWB97hZs7gCDw#Value": "R\xFAt ti\u1EC1n",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "B\xE1n",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "Chuy\u1EC3n ti\u1EC1n",
        "Huepk9rV30e7MiHR0dhlBg#Value": "Chuy\u1EC3n ti\u1EC1n",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "Chuy\u1EC3n ti\u1EC1n",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "Chuy\u1EC3n ti\u1EC1n",
        "46lOECc8M0KO9HrO32va0g#Value": "G\u1EEDi ti\u1EC1n",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "Mua",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "G\u1EEDi ti\u1EC1n",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "Mua"
    },
    he = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u63D0\u53D6",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u5356\u51FA",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u63D0\u53D6",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u5356\u51FA",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u8F6C\u8D26",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u8F6C\u8D26",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u8F6C\u8D26",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u8F6C\u8D26",
        "46lOECc8M0KO9HrO32va0g#Value": "\u5B58\u6B3E",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u8D2D\u4E70",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u5B58\u6B3E",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u8D2D\u4E70"
    },
    fe = {
        "So8yvHL3bEKEJbmMIOUPSQ#Value": "\u63D0\u9818",
        "3jNWs6yKN0md4hZ267s3bA#Value": "\u8CE3\u51FA",
        "cadAaA34MEWB97hZs7gCDw#Value": "\u63D0\u9818",
        "Q4zHl85mF06Ai9HdUckmPQ#Value": "\u8CE3\u51FA",
        "VPeb4t59xkGhxJrLjcyhJw#Value": "\u8F49\u5E33",
        "Huepk9rV30e7MiHR0dhlBg#Value": "\u8F49\u5E33",
        "D1rHA6Jbuk+yoS5gLqQmZA#Value": "\u8F49\u5E33",
        "D0KB6RuzVEWoEtxQ+xno0g#Value": "\u8F49\u5E33",
        "46lOECc8M0KO9HrO32va0g#Value": "\u5B58\u6B3E",
        "ABQYGVv6wE2PvvT0z9Ry1Q#Value": "\u8CFC\u8CB7",
        "7Ysnr_8E10aOBhLiF+YCEg#Value": "\u5B58\u6B3E",
        "LcQB3fo4H0O6NpUzSu58KA#Value": "\u8CFC\u8CB7"
    },
    M = {
        "ar-001": {
            translations: J,
            isRTL: !0
        },
        "bn-BD": {
            translations: Z,
            isRTL: !1
        },
        "de-DE": {
            translations: $,
            isRTL: !1
        },
        "es-ES": {
            translations: Y,
            isRTL: !1
        },
        "fr-FR": {
            translations: G,
            isRTL: !1
        },
        "it-IT": {
            translations: j,
            isRTL: !1
        },
        "km-KH": {
            translations: q,
            isRTL: !1
        },
        "ko-KR": {
            translations: X,
            isRTL: !1
        },
        "mn-MN": {
            translations: ee,
            isRTL: !1
        },
        "pl-PL": {
            translations: te,
            isRTL: !1
        },
        "pt-PT": {
            translations: ae,
            isRTL: !1
        },
        "ru-RU": {
            translations: re,
            isRTL: !1
        },
        "si-LK": {
            translations: ne,
            isRTL: !1
        },
        "sw-KE": {
            translations: ie,
            isRTL: !1
        },
        "ta-IN": {
            translations: oe,
            isRTL: !1
        },
        "th-TH": {
            translations: se,
            isRTL: !1
        },
        "tr-TR": {
            translations: le,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ue,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ce,
            isRTL: !1
        },
        "vi-VN": {
            translations: de,
            isRTL: !1
        },
        "zh-CN": {
            translations: he,
            isRTL: !1
        },
        "zh-TW": {
            translations: fe,
            isRTL: !1
        }
    };
var l = S; {
    let i = class i extends l.Controller.BaseViewController {
        constructor(t, a, r) {
            super(t, a, r, M);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickDeposit$Action() {
            return this.hasOwnProperty("__onClickDeposit$Action") || (this.__onClickDeposit$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    u = this.idService;
                return l.Logger.startActiveSpan("OnClickDeposit", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickDeposit"), n.setAttribute("outsystems.function.key", "33b77b81-5b73-4b4a-a78f-948a6de2251f"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickDeposit"), t = r.callContext(t), l.Flow.executeAsyncFlow(function() {
                            return r.depositEvent$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickDeposit$Action
        }
        set _onClickDeposit$Action(t) {
            this.__onClickDeposit$Action = t
        }
        get _onClickConvert$Action() {
            return this.hasOwnProperty("__onClickConvert$Action") || (this.__onClickConvert$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    u = this.idService;
                return l.Logger.startActiveSpan("OnClickConvert", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickConvert"), n.setAttribute("outsystems.function.key", "659ec2ca-1ade-4c5f-8100-339deaa9f028"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickConvert"), t = r.callContext(t), l.Flow.executeAsyncFlow(function() {
                            return l.Flow.executeSequence(function() {
                                if (!(a.variables.currencyListIn.length < 1 || !a.variables.hasBalanceIn)) return r.convertEvent$Action(t)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickConvert$Action
        }
        set _onClickConvert$Action(t) {
            this.__onClickConvert$Action = t
        }
        get _onClickTransfer$Action() {
            return this.hasOwnProperty("__onClickTransfer$Action") || (this.__onClickTransfer$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    u = this.idService;
                return l.Logger.startActiveSpan("OnClickTransfer", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickTransfer"), n.setAttribute("outsystems.function.key", "6faea20a-d4a8-4c76-954d-16bff9a5ab65"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickTransfer"), t = r.callContext(t), l.Flow.executeAsyncFlow(function() {
                            return l.Flow.executeSequence(function() {
                                if (!(a.variables.currencyListIn.length < 1 || !a.variables.hasBalanceIn)) return r.transferEvent$Action(t)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickTransfer$Action
        }
        set _onClickTransfer$Action(t) {
            this.__onClickTransfer$Action = t
        }
        get _onClickWithdraw$Action() {
            return this.hasOwnProperty("__onClickWithdraw$Action") || (this.__onClickWithdraw$Action = function(t) {
                var a = this.model,
                    r = this.controller,
                    u = this.idService;
                return l.Logger.startActiveSpan("OnClickWithdraw", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickWithdraw"), n.setAttribute("outsystems.function.key", "8a091322-0f9b-4f7e-9b9e-c8a0b7ac363a"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnClickWithdraw"), t = r.callContext(t), l.Flow.executeAsyncFlow(function() {
                            return l.Flow.executeSequence(function() {
                                if (!(a.variables.currencyListIn.length < 1 || !a.variables.hasBalanceIn)) return r.withdrawEvent$Action(t)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickWithdraw$Action
        }
        set _onClickWithdraw$Action(t) {
            this.__onClickWithdraw$Action = t
        }
        onClickDeposit$Action(t) {
            var a = this.controller;
            return l.Logger.startActiveSpan("OnClickDeposit__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickDeposit"), r.setAttribute("outsystems.function.key", "33b77b81-5b73-4b4a-a78f-948a6de2251f"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickDeposit$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickConvert$Action(t) {
            var a = this.controller;
            return l.Logger.startActiveSpan("OnClickConvert__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickConvert"), r.setAttribute("outsystems.function.key", "659ec2ca-1ade-4c5f-8100-339deaa9f028"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickConvert$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickTransfer$Action(t) {
            var a = this.controller;
            return l.Logger.startActiveSpan("OnClickTransfer__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickTransfer"), r.setAttribute("outsystems.function.key", "6faea20a-d4a8-4c76-954d-16bff9a5ab65"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickTransfer$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        onClickWithdraw$Action(t) {
            var a = this.controller;
            return l.Logger.startActiveSpan("OnClickWithdraw__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnClickWithdraw"), r.setAttribute("outsystems.function.key", "8a091322-0f9b-4f7e-9b9e-c8a0b7ac363a"), r.setAttribute("outsystems.function.owner.name", "dashboard"), r.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._onClickWithdraw$Action, t)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get convertEvent$Action() {
            return this.hasOwnProperty("_convertEvent$Action") || (this._convertEvent$Action = function() {
                return Promise.resolve()
            }), this._convertEvent$Action
        }
        set convertEvent$Action(t) {
            this._convertEvent$Action = t
        }
        get withdrawEvent$Action() {
            return this.hasOwnProperty("_withdrawEvent$Action") || (this._withdrawEvent$Action = function() {
                return Promise.resolve()
            }), this._withdrawEvent$Action
        }
        set withdrawEvent$Action(t) {
            this._withdrawEvent$Action = t
        }
        get transferEvent$Action() {
            return this.hasOwnProperty("_transferEvent$Action") || (this._transferEvent$Action = function() {
                return Promise.resolve()
            }), this._transferEvent$Action
        }
        set transferEvent$Action(t) {
            this._transferEvent$Action = t
        }
        get depositEvent$Action() {
            return this.hasOwnProperty("_depositEvent$Action") || (this._depositEvent$Action = function() {
                return Promise.resolve()
            }), this._depositEvent$Action
        }
        set depositEvent$Action(t) {
            this._depositEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
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
            return P.defaultTimeout
        }
    };
    d(i, "ControllerInner");
    let _ = i;
    K = _
}
var K, W = new l.Controller.ControllerFactory(K, I);
var We = p.PlaceholderContent,
    Ne = p.IteratorPlaceholderContent,
    ge = d(function() {
        var _ = B(function(i) {
            var e = i.model,
                t = i.controller,
                a = i.controller.idService,
                r = t.validationService,
                u = t.callContext(),
                n = Q,
                g = F,
                Ve = {
                    props: i,
                    validateWidget: d(function(m) {
                        i.validateWidget(i, m)
                    }, "validateWidget")
                },
                s = e,
                f = T,
                V = x,
                ye = L();
            return o.createElement("div", i.rootNodeProperties, o.createElement(A, {
                align: 0,
                animate: !1,
                style: e.getCachedValue(a.getId("FlsHf_eKK0SKgNomyhFugw.Style"), function() {
                    return "display-grid justify-content-space-evenly padding-m portfolio-actions" + (E.isDesktop$Action(u).isDesktopOut ? " column-gap-xxl" : " column-gap-base") + (e.variables.isTradingIn ? " trading-portfolio-actions" : "")
                }, function() {
                    return e.variables.isTradingIn
                }),
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: s,
                style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._isTradingInDataFetchStatus)
            }, o.createElement(A, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: d(function() {
                        return Promise.resolve().then(function() {
                            var m = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                            return t.onClickDeposit$Action(t.callContext(m))
                        })
                    }, "onClick")
                },
                style: "display-flex flex-direction-column align-items-center",
                visible: !e.variables.isTradingIn,
                _idProps: {
                    service: a,
                    name: "Deposit"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: h.calculateDataFetchStatus(e.variables._isTradingInDataFetchStatus)
            }, o.createElement(b, {
                image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_deposit.svg"),
                style: "header-icon",
                type: 0,
                _idProps: {
                    service: a,
                    uuid: "2"
                },
                _widgetRecordProvider: s
            }), f(e.variables.darkModeIn, !1, this, function() {
                return [f(e.variables.isP2PIn, !1, this, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #fff; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("LcQB3fo4H0O6NpUzSu58KA#Value", "Buy"))],
                        _idProps: {
                            service: a,
                            uuid: "3"
                        },
                        _widgetRecordProvider: s
                    })]
                }, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #fff; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("7Ysnr_8E10aOBhLiF+YCEg#Value", "Deposit"))],
                        _idProps: {
                            service: a,
                            uuid: "4"
                        },
                        _widgetRecordProvider: s
                    })]
                })]
            }, function() {
                return [f(e.variables.isP2PIn, !1, this, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #000; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("ABQYGVv6wE2PvvT0z9Ry1Q#Value", "Buy"))],
                        _idProps: {
                            service: a,
                            uuid: "5"
                        },
                        _widgetRecordProvider: s
                    })]
                }, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #000; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("46lOECc8M0KO9HrO32va0g#Value", "Deposit"))],
                        _idProps: {
                            service: a,
                            uuid: "6"
                        },
                        _widgetRecordProvider: s
                    })]
                })]
            })), o.createElement(A, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: d(function() {
                        return Promise.resolve().then(function() {
                            var m = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                            return t.onClickTransfer$Action(t.callContext(m))
                        })
                    }, "onClick")
                },
                style: "display-flex flex-direction-column align-items-center",
                visible: !0,
                _idProps: {
                    service: a,
                    name: "Transfer"
                },
                _widgetRecordProvider: s
            }, f(e.variables.isTradingIn, !1, this, function() {
                return [o.createElement(b, {
                    image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer_trading.svg"),
                    style: e.getCachedValue(a.getId("51wzQMhqk0i6NTV2lXw03g.Style"), function() {
                        return (e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon") + (E.isDesktop$Action(u).isDesktopOut ? " margin-right-l" : "")
                    }, function() {
                        return e.variables.currencyListIn.length
                    }, function() {
                        return e.variables.hasBalanceIn
                    }),
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "8"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                })]
            }, function() {
                return [f(e.variables.darkModeIn, !1, this, function() {
                    return [o.createElement(b, {
                        image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer.svg"),
                        style: e.getCachedValue(a.getId("h83gin7T2kGyWK7JNEOOcw.Style"), function() {
                            return e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon"
                        }, function() {
                            return e.variables.currencyListIn.length
                        }, function() {
                            return e.variables.hasBalanceIn
                        }),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "9"
                        },
                        _widgetRecordProvider: s,
                        style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                    })]
                }, function() {
                    return [o.createElement(b, {
                        image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer_dark.svg"),
                        style: e.getCachedValue(a.getId("ghEBfRpMlE+BU3Vuajsw1g.Style"), function() {
                            return e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon"
                        }, function() {
                            return e.variables.currencyListIn.length
                        }, function() {
                            return e.variables.hasBalanceIn
                        }),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "10"
                        },
                        _widgetRecordProvider: s,
                        style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                    })]
                })]
            }), f(e.variables.darkModeIn, !1, this, function() {
                return [o.createElement(v, {
                    extendedProperties: {
                        style: "color: #fff; font-size: 12px;"
                    },
                    style: e.getCachedValue(a.getId("D0KB6RuzVEWoEtxQ+xno0g.Style"), function() {
                        return "margin-top-s" + (E.isDesktop$Action(u).isDesktopOut && e.variables.isTradingIn ? " margin-right-l" : "")
                    }, function() {
                        return e.variables.isTradingIn
                    }),
                    text: [V(g("D0KB6RuzVEWoEtxQ+xno0g#Value", "Transfer"))],
                    _idProps: {
                        service: a,
                        uuid: "11"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._isTradingInDataFetchStatus)
                })]
            }, function() {
                return [o.createElement(v, {
                    extendedProperties: {
                        style: "color: #000; font-size: 12px;"
                    },
                    style: "margin-top-s",
                    text: [V(g("D1rHA6Jbuk+yoS5gLqQmZA#Value", "Transfer"))],
                    _idProps: {
                        service: a,
                        uuid: "12"
                    },
                    _widgetRecordProvider: s
                })]
            })), o.createElement(A, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: d(function() {
                        return Promise.resolve().then(function() {
                            var m = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                            return t.onClickConvert$Action(t.callContext(m))
                        })
                    }, "onClick")
                },
                style: "display-flex flex-direction-column align-items-center",
                visible: e.getCachedValue(a.getId("Convert.Visible"), function() {
                    return P.featureFlagValueByName$Action("PORTFOLIO_CONVERT_FLOW", u).isEnabledOut
                }),
                _idProps: {
                    service: a,
                    name: "Convert"
                },
                _widgetRecordProvider: s
            }, f(e.variables.isTradingIn, !1, this, function() {
                return [o.createElement(b, {
                    image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer_trading.svg"),
                    style: e.getCachedValue(a.getId("KwoBDh0Xl0uIwFUroIY3jQ.Style"), function() {
                        return (e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon") + (E.isDesktop$Action(u).isDesktopOut ? " margin-right-l" : "")
                    }, function() {
                        return e.variables.currencyListIn.length
                    }, function() {
                        return e.variables.hasBalanceIn
                    }),
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "14"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                })]
            }, function() {
                return [f(e.variables.darkModeIn, !1, this, function() {
                    return [o.createElement(b, {
                        image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer.svg"),
                        style: e.getCachedValue(a.getId("mM2bFGUDdUuvehOWjmyRcQ.Style"), function() {
                            return e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon"
                        }, function() {
                            return e.variables.currencyListIn.length
                        }, function() {
                            return e.variables.hasBalanceIn
                        }),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "15"
                        },
                        _widgetRecordProvider: s,
                        style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                    })]
                }, function() {
                    return [o.createElement(b, {
                        image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_transfer_dark.svg"),
                        style: e.getCachedValue(a.getId("yI1Uelu70Uu7StXUiPdU3g.Style"), function() {
                            return e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon"
                        }, function() {
                            return e.variables.currencyListIn.length
                        }, function() {
                            return e.variables.hasBalanceIn
                        }),
                        type: 0,
                        _idProps: {
                            service: a,
                            uuid: "16"
                        },
                        _widgetRecordProvider: s,
                        style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                    })]
                })]
            }), f(e.variables.darkModeIn, !1, this, function() {
                return [o.createElement(v, {
                    extendedProperties: {
                        style: "color: #fff; font-size: 12px;"
                    },
                    style: e.getCachedValue(a.getId("Huepk9rV30e7MiHR0dhlBg.Style"), function() {
                        return "margin-top-s" + (E.isDesktop$Action(u).isDesktopOut && e.variables.isTradingIn ? " margin-right-l" : "")
                    }, function() {
                        return e.variables.isTradingIn
                    }),
                    text: [V(g("Huepk9rV30e7MiHR0dhlBg#Value", "Convert"))],
                    _idProps: {
                        service: a,
                        uuid: "17"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._isTradingInDataFetchStatus)
                })]
            }, function() {
                return [o.createElement(v, {
                    extendedProperties: {
                        style: "color: #000; font-size: 12px;"
                    },
                    style: "margin-top-s",
                    text: [V(g("VPeb4t59xkGhxJrLjcyhJw#Value", "Convert"))],
                    _idProps: {
                        service: a,
                        uuid: "18"
                    },
                    _widgetRecordProvider: s
                })]
            })), o.createElement(A, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: d(function() {
                        return Promise.resolve().then(function() {
                            var m = typeof u != "undefined" && u !== null ? u.clone() : t.callContext().clone();
                            return t.onClickWithdraw$Action(t.callContext(m))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "text-align: center;"
                },
                style: "display-flex flex-direction-column align-items-center",
                visible: !e.variables.isTradingIn,
                _idProps: {
                    service: a,
                    name: "Withdraw"
                },
                _widgetRecordProvider: s,
                visible_dataFetchStatus: h.calculateDataFetchStatus(e.variables._isTradingInDataFetchStatus)
            }, f(e.variables.darkModeIn, !1, this, function() {
                return [o.createElement(b, {
                    image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_withdraw.svg"),
                    style: e.getCachedValue(a.getId("wcZ4DwPuzkywg3A+TQqo7A.Style"), function() {
                        return e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn ? "disabled-header-icon" : "header-icon"
                    }, function() {
                        return e.variables.currencyListIn.length
                    }, function() {
                        return e.variables.hasBalanceIn
                    }),
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "20"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus)
                })]
            }, function() {
                return [o.createElement(b, {
                    image: y.VersionedURL.getVersionedUrl("img/dashboard.btn_withdraw_dark.svg"),
                    style: e.getCachedValue(a.getId("w8TaNyoQR0SrfmKn5p72kw.Style"), function() {
                        return (e.variables.currencyListIn.length < 1 || !e.variables.hasBalanceIn) && !e.variables.isP2PIn ? "disabled-header-icon" : "header-icon"
                    }, function() {
                        return e.variables.currencyListIn.length
                    }, function() {
                        return e.variables.hasBalanceIn
                    }, function() {
                        return e.variables.isP2PIn
                    }),
                    type: 0,
                    _idProps: {
                        service: a,
                        uuid: "21"
                    },
                    _widgetRecordProvider: s,
                    style_dataFetchStatus: h.calculateDataFetchStatus(e.variables._currencyListInDataFetchStatus, e.variables._hasBalanceInDataFetchStatus, e.variables._isP2PInDataFetchStatus)
                })]
            }), f(e.variables.darkModeIn, !1, this, function() {
                return [f(e.variables.isP2PIn, !1, this, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #fff; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("Q4zHl85mF06Ai9HdUckmPQ#Value", "Sell"))],
                        _idProps: {
                            service: a,
                            uuid: "22"
                        },
                        _widgetRecordProvider: s
                    })]
                }, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #fff; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("cadAaA34MEWB97hZs7gCDw#Value", "Withdraw"))],
                        _idProps: {
                            service: a,
                            uuid: "23"
                        },
                        _widgetRecordProvider: s
                    })]
                })]
            }, function() {
                return [f(e.variables.isP2PIn, !1, this, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #000; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("3jNWs6yKN0md4hZ267s3bA#Value", "Sell"))],
                        _idProps: {
                            service: a,
                            uuid: "24"
                        },
                        _widgetRecordProvider: s
                    })]
                }, function() {
                    return [o.createElement(v, {
                        extendedProperties: {
                            style: "color: #000; font-size: 12px;"
                        },
                        style: "margin-top-s",
                        text: [V(g("So8yvHL3bEKEJbmMIOUPSQ#Value", "Withdraw"))],
                        _idProps: {
                            service: a,
                            uuid: "25"
                        },
                        _widgetRecordProvider: s
                    })]
                })]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: d(function() {
                return {
                    codeFunction: "PortfolioActions",
                    functionKey: "d74ed844-6f63-4cc5-bf6b-b625c40f2831",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Portfolio.PortfolioActions",
            modelFactory: z,
            controllerFactory: W
        });
        return _.getCssDependencies = function() {
            return ["css/dashboard.Portfolio.PortfolioActions.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return []
        }, _
    }, "componentFactory"),
    Ue = ge();
export {
    Ue as a
};