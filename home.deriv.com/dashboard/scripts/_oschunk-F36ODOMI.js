import {
    a as B
} from "./_oschunk-TNUZI776.js";
import {
    a as $
} from "./_oschunk-J3DG2BKZ.js";
import {
    b as T,
    e as F,
    h as g,
    i as x,
    k as H,
    q as h,
    s as Q,
    t as Ce,
    x as b
} from "./_oschunk-O5KC3WOL.js";
import {
    a as be,
    g as P,
    m as L,
    o as J,
    q as U,
    r as N,
    s as K,
    t as I
} from "./_oschunk-NVHFAAS2.js";
import {
    a as W
} from "./_oschunk-AW35UT34.js";
import {
    Ga as Z,
    Ka as E,
    ia as k,
    n as X,
    v as pe,
    w as fe
} from "./_oschunk-WCMQG33O.js";
import {
    J as A,
    X as D,
    c as l,
    f as ve,
    n as ge,
    o as _e,
    q as y,
    w as M
} from "./_oschunk-DFKJJKI4.js";
var w = D,
    ae = class ae extends w.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("AcceptSettingsChanges", "acceptSettingsChangesVar", "AcceptSettingsChanges", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("IsFetchingToken", "isFetchingTokenVar", "IsFetchingToken", !0, !1, w.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("ActiveTradingDetails", "activeTradingDetailsIn", "ActiveTradingDetails", !0, !1, w.DataTypes.DataTypes.Record, function() {
                return w.DataTypes.ImmutableBase.getData(new k)
            }, !1, k), this.attr("_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", !0, !1, w.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(w.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(ae, "VariablesRecord");
var z = ae;
z.init();
var te = class te extends w.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Checkbox1: w.Model.ValidationWidgetRecord,
            Checkbox2: w.Model.ValidationWidgetRecord,
            Checkbox3: w.Model.ValidationWidgetRecord,
            Checkbox4: w.Model.ValidationWidgetRecord
        }
    }
};
l(te, "WidgetsRecord");
var ee = te,
    re = class re extends w.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return z
        }
        static getWidgetsRecordConstructor() {
            return ee
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(v) {
            "ActiveTradingDetails" in v && (this.variables.activeTradingDetailsIn = v.ActiveTradingDetails, "_activeTradingDetailsInDataFetchStatus" in v && (this.variables._activeTradingDetailsInDataFetchStatus = v._activeTradingDetailsInDataFetchStatus))
        }
    };
l(re, "Model");
var Y = re;
Y._hasValidationWidgetsValue = void 0;
var ye = new w.Model.ModelFactory(Y);
var O = D,
    ne = class ne extends O.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveTradingDetails", "activeTradingDetailsIn", "ActiveTradingDetails", !0, !1, O.DataTypes.DataTypes.Record, function() {
                return O.DataTypes.ImmutableBase.getData(new k)
            }, !1, k), this.attr("_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", "_activeTradingDetailsInDataFetchStatus", !0, !1, O.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(O.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
l(ne, "VariablesRecord");
var q = ne;
q.init();
var le = class le extends O.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
l(le, "WidgetsRecord");
var ie = le,
    oe = class oe extends O.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return q
        }
        static getWidgetsRecordConstructor() {
            return ie
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(v) {
            "ActiveTradingDetails" in v && (this.variables.activeTradingDetailsIn = v.ActiveTradingDetails, "_activeTradingDetailsInDataFetchStatus" in v && (this.variables._activeTradingDetailsInDataFetchStatus = v._activeTradingDetailsInDataFetchStatus))
        }
    };
l(oe, "Model");
var j = oe;
j._hasValidationWidgetsValue = void 0;
var he = new O.Model.ModelFactory(j);
var r = ve(be());
var Ae = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631\u0647 \u0644\u0627\u062D\u0642\u064B\u0627 \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u062A\u0630\u0643\u0631 \u0627\u062E\u062A\u064A\u0627\u0631\u064A",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644",
        "1HRZy8QDiEOU_89bEvknCw#Value": "\u062A\u0637\u0628\u064A\u0642 Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "\u0637\u0631\u0641\u064A\u0629 Deriv cTrader \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 Deriv cTrader \u0641\u064A \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0623\u0648 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644 \u0644\u0628\u062F\u0621 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631\u0647 \u0644\u0627\u062D\u0642\u064B\u0627 \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u062A\u0630\u0643\u0631 \u0627\u062E\u062A\u064A\u0627\u0631\u064A",
        "OiJvMCd+mUemxkHv_w65GA#Value": "\u0637\u0631\u0641\u064A\u0629 Deriv cTrader \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "InDYlBE5rECid9mw8E1s8Q#Value": "\u062A\u0637\u0628\u064A\u0642 Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 Deriv cTrader \u0641\u064A \u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0648\u064A\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0623\u0648 \u062A\u062B\u0628\u064A\u062A \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u062D\u0645\u0648\u0644 \u0644\u0628\u062F\u0621 \u0627\u0644\u062A\u062F\u0627\u0648\u0644.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631\u0647 \u0644\u0627\u062D\u0642\u064B\u0627 \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u062A\u0630\u0643\u0631 \u0627\u062E\u062A\u064A\u0627\u0631\u064A",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0627\u0645\u0633\u062D \u0644\u062A\u062D\u0645\u064A\u0644",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "\u062A\u0637\u0628\u064A\u0642 MT5 \u0644\u0644\u062C\u0648\u0627\u0644",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "\u062A\u0637\u0628\u064A\u0642 MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "\u0637\u0631\u0641\u064A\u0629 MetaTrader 5 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u064A\u0645\u0643\u0646\u0643 \u062A\u063A\u064A\u064A\u0631\u0647 \u0644\u0627\u062D\u0642\u064B\u0627 \u0641\u064A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u062A\u0630\u0643\u0631 \u0627\u062E\u062A\u064A\u0627\u0631\u064A",
        "3XOcJlvDXESMWHSX68oLiA#Value": "\u0637\u0631\u0641\u064A\u0629 MetaTrader 5 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "\u062A\u0637\u0628\u064A\u0642 MetaTrader 5"
    },
    Re = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0986\u09AA\u09A8\u09BF \u09AA\u09B0\u09C7 \u09B8\u09C7\u099F\u09BF\u0982\u09B8\u09C7 \u098F\u099F\u09BF \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u0986\u09AE\u09BE\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09A4\u09C7",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u0985\u09CD\u09AF\u09BE\u09AA",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u0993\u09AF\u09BC\u09C7\u09AC \u099F\u09BE\u09B0\u09CD\u09AE\u09BF\u09A8\u09BE\u09B2",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0993\u09AF\u09BC\u09C7\u09AC \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 Deriv cTrader \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09C1\u09A8 \u09AC\u09BE \u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09A4\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u0985\u09CD\u09AF\u09BE\u09AA \u0987\u09A8\u09B8\u09CD\u099F\u09B2 \u0995\u09B0\u09C1\u09A8\u0964",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0986\u09AA\u09A8\u09BF \u09AA\u09B0\u09C7 \u09B8\u09C7\u099F\u09BF\u0982\u09B8\u09C7 \u098F\u099F\u09BF \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u0986\u09AE\u09BE\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u0993\u09AF\u09BC\u09C7\u09AC \u099F\u09BE\u09B0\u09CD\u09AE\u09BF\u09A8\u09BE\u09B2",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u0985\u09CD\u09AF\u09BE\u09AA",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0986\u09AA\u09A8\u09BE\u09B0 \u0993\u09AF\u09BC\u09C7\u09AC \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 Deriv cTrader \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09C1\u09A8 \u09AC\u09BE \u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09A4\u09C7 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u0985\u09CD\u09AF\u09BE\u09AA \u0987\u09A8\u09B8\u09CD\u099F\u09B2 \u0995\u09B0\u09C1\u09A8\u0964",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0986\u09AA\u09A8\u09BF \u09AA\u09B0\u09C7 \u09B8\u09C7\u099F\u09BF\u0982\u09B8\u09C7 \u098F\u099F\u09BF \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u0986\u09AE\u09BE\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09A4\u09C7",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u09AE\u09CB\u09AC\u09BE\u0987\u09B2 \u0985\u09CD\u09AF\u09BE\u09AA",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u0985\u09CD\u09AF\u09BE\u09AA",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u0993\u09AF\u09BC\u09C7\u09AC \u099F\u09BE\u09B0\u09CD\u09AE\u09BF\u09A8\u09BE\u09B2",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0986\u09AA\u09A8\u09BF \u09AA\u09B0\u09C7 \u09B8\u09C7\u099F\u09BF\u0982\u09B8\u09C7 \u098F\u099F\u09BF \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u0986\u09AE\u09BE\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u09AE\u09A8\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u0993\u09AF\u09BC\u09C7\u09AC \u099F\u09BE\u09B0\u09CD\u09AE\u09BF\u09A8\u09BE\u09B2",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u0985\u09CD\u09AF\u09BE\u09AA"
    },
    Oe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Du kannst dies sp\xE4ter in den Einstellungen \xE4ndern",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Meine Auswahl merken",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Scannen zum Herunterladen",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader App",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader Web-Terminal",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Zugriff auf Deriv cTrader in deinem Webbrowser oder installiere die mobile App, um mit dem Handel zu beginnen.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Du kannst dies sp\xE4ter in den Einstellungen \xE4ndern",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Meine Auswahl merken",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader Web-Terminal",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader App",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Zugriff auf Deriv cTrader in deinem Webbrowser oder installiere die mobile App, um mit dem Handel zu beginnen.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Du kannst dies sp\xE4ter in den Einstellungen \xE4ndern",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Meine Auswahl merken",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Scannen zum Herunterladen",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 Mobile App",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 App",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 Webterminal",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Du kannst dies sp\xE4ter in den Einstellungen \xE4ndern",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Meine Auswahl merken",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 Webterminal",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 App"
    },
    xe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Puedes cambiar esto m\xE1s tarde en la configuraci\xF3n",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Recuerda mi selecci\xF3n",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Escanear para descargar",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Aplicaci\xF3n Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader terminal web",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Accede a Deriv cTrader en tu navegador web o instala la app m\xF3vil para empezar a operar.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Puedes cambiar esto m\xE1s tarde en la configuraci\xF3n",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Recuerda mi selecci\xF3n",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader terminal web",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Aplicaci\xF3n Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Accede a Deriv cTrader en tu navegador web o instala la app m\xF3vil para empezar a operar.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Puedes cambiar esto m\xE1s tarde en la configuraci\xF3n",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Recuerda mi selecci\xF3n",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Escanear para descargar",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "App m\xF3vil MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "Aplicaci\xF3n MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal web MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Puedes cambiar esto m\xE1s tarde en la configuraci\xF3n",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Recuerda mi selecci\xF3n",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal web MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "Aplicaci\xF3n MetaTrader 5"
    },
    ke = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Vous pouvez modifier cela plus tard dans les param\xE8tres",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Souviens-toi de ma s\xE9lection",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Scanner pour t\xE9l\xE9charger",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Application Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Terminal web Deriv cTrader",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Acc\xE9dez \xE0 Deriv cTrader dans votre navigateur ou installez l'application mobile pour commencer \xE0 trader.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Vous pouvez modifier cela plus tard dans les param\xE8tres",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Souviens-toi de ma s\xE9lection",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Terminal web Deriv cTrader",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Application Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Acc\xE9dez \xE0 Deriv cTrader dans votre navigateur ou installez l'application mobile pour commencer \xE0 trader.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Vous pouvez modifier cela plus tard dans les param\xE8tres",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Souviens-toi de ma s\xE9lection",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Scanner pour t\xE9l\xE9charger",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "Application mobile MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "Application MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal web MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Vous pouvez modifier cela plus tard dans les param\xE8tres",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Souviens-toi de ma s\xE9lection",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal web MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "Application MetaTrader 5"
    },
    Pe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Puoi modificare questo pi\xF9 tardi nelle impostazioni",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Ricorda la mia selezione",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Scansiona per scaricare",
        "1HRZy8QDiEOU_89bEvknCw#Value": "App Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader terminal web",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Accedi a Deriv cTrader nel browser o installa l'app mobile per iniziare a fare trading.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Puoi modificare questo pi\xF9 tardi nelle impostazioni",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Ricorda la mia selezione",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader terminal web",
        "InDYlBE5rECid9mw8E1s8Q#Value": "App Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Accedi a Deriv cTrader nel browser o installa l'app mobile per iniziare a fare trading.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Puoi modificare questo pi\xF9 tardi nelle impostazioni",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Ricorda la mia selezione",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Scansiona per scaricare",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "App mobile MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "App MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal web MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Puoi modificare questo pi\xF9 tardi nelle impostazioni",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Ricorda la mia selezione",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal web MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "App MetaTrader 5"
    },
    Me = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1793\u17C1\u17C7\u1793\u17C5\u1780\u17D2\u179A\u17C4\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1780\u17C6\u178E\u178F\u17CB",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u1780\u17B6\u179A\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F\u179A\u1794\u179F\u17CB\u1781\u17D2\u1789\u17BB\u17C6\u1785\u1784\u1785\u17B6\u17C6\u1791\u17BB\u1780",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u179F\u17D2\u1780\u17C1\u1793\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1791\u17B6\u1789\u1799\u1780",
        "1HRZy8QDiEOU_89bEvknCw#Value": "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8 Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "\u1791\u0AB0\u17D2\u0DB8\u17B8\u178E\u179B Deriv cTrader \u178F\u17B6\u1798\u179C\u17C1\u1794",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u1785\u17BC\u179B\u178A\u179B\u17CB Deriv cTrader \u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB\u17A2\u17CA\u17B8\u1793\u1792\u17BA\u178E\u17C2\u178F\u17AC\u178A\u17C6\u17A1\u17BE\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u1780\u17B6\u179A\u1787\u17BD\u1789\u178A\u17BC\u179A\u17D4",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1793\u17C1\u17C7\u1793\u17C5\u1780\u17D2\u179A\u17C4\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1780\u17C6\u178E\u178F\u17CB",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u1780\u17B6\u179A\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F\u179A\u1794\u179F\u17CB\u1781\u17D2\u1789\u17BB\u17C6\u1785\u1784\u1785\u17B6\u17C6\u1791\u17BB\u1780",
        "OiJvMCd+mUemxkHv_w65GA#Value": "\u1791\u0DBB\u17D2\u1798\u17B8\u178E\u179B Deriv cTrader \u178F\u17B6\u1798\u179C\u17C1\u1794",
        "InDYlBE5rECid9mw8E1s8Q#Value": "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8 Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u1785\u17BC\u179B\u178A\u179B\u17CB Deriv cTrader \u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB\u17A2\u17CA\u17B8\u1793\u1792\u17BA\u178E\u17C2\u178F\u17AC\u178A\u17C6\u17A1\u17BE\u1784\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u1780\u17B6\u179A\u1787\u17BD\u1789\u178A\u17BC\u179A\u17D4",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1793\u17C1\u17C7\u1793\u17C5\u1780\u17D2\u179A\u17C4\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1780\u17C6\u178E\u178F\u17CB",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u1780\u17B6\u179A\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F\u179A\u1794\u179F\u17CB\u1781\u17D2\u1789\u17BB\u17C6\u1785\u1784\u1785\u17B6\u17C6\u1791\u17BB\u1780",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u179F\u17D2\u1780\u17C1\u1793\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1791\u17B6\u1789\u1799\u1780",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1791\u17BC\u179A\u179F\u17D0\u1796\u17D2\u1791 MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8 MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "\u1791\u0DBB\u17D2\u1798\u17B8\u178E\u179B MetaTrader 5 \u178F\u17B6\u1798\u179C\u17C1\u1794",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178F\u17BC\u179A\u1793\u17C1\u17C7\u1793\u17C5\u1780\u17D2\u179A\u17C4\u1799\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1780\u17C6\u178E\u178F\u17CB",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u1780\u17B6\u179A\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F\u179A\u1794\u179F\u17CB\u1781\u17D2\u1789\u17BB\u17C6\u1785\u1784\u1785\u17B6\u17C6\u1791\u17BB\u1780",
        "3XOcJlvDXESMWHSX68oLiA#Value": "\u1791\u0580\u17D2\u1798\u17B8\u178E\u179B MetaTrader 5 \u178F\u17B6\u1798\u179C\u17C1\u1794",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8 MetaTrader 5"
    },
    Fe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\uB098\uC911\uC5D0 \uC124\uC815\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\uB0B4 \uC120\uD0DD \uC800\uC7A5",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\uC2A4\uCE94\uD558\uC5EC \uB2E4\uC6B4\uB85C\uB4DC",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \uC571",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \uC6F9 \uD130\uBBF8\uB110",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\uC6F9 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C Deriv cTrader\uC5D0 \uC811\uC18D\uD558\uAC70\uB098 \uBAA8\uBC14\uC77C \uC571\uC744 \uC124\uCE58\uD558\uC5EC \uAC70\uB798\uB97C \uC2DC\uC791\uD558\uC138\uC694.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\uB098\uC911\uC5D0 \uC124\uC815\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\uB0B4 \uC120\uD0DD \uC800\uC7A5",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \uC6F9 \uD130\uBBF8\uB110",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \uC571",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\uC6F9 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C Deriv cTrader\uC5D0 \uC811\uC18D\uD558\uAC70\uB098 \uBAA8\uBC14\uC77C \uC571\uC744 \uC124\uCE58\uD558\uC5EC \uAC70\uB798\uB97C \uC2DC\uC791\uD558\uC138\uC694.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\uB098\uC911\uC5D0 \uC124\uC815\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\uB0B4 \uC120\uD0DD \uC800\uC7A5",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\uC2A4\uCE94\uD558\uC5EC \uB2E4\uC6B4\uB85C\uB4DC",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \uBAA8\uBC14\uC77C \uC571",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \uC571",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \uC6F9 \uD130\uBBF8\uB110",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\uB098\uC911\uC5D0 \uC124\uC815\uC5D0\uC11C \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\uB0B4 \uC120\uD0DD \uC800\uC7A5",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \uC6F9 \uD130\uBBF8\uB110",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \uC571"
    },
    Qe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0422\u0430 \u04AF\u0437\u043B\u044D\u0433 \u0431\u04AF\u0442\u044D\u044D\u043B\u0434\u044D\u044D \u0434\u0430\u0440\u0430\u0430 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0436 \u0431\u043E\u043B\u043D\u043E",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u041C\u0438\u043D\u0438\u0439 \u0441\u043E\u043D\u0433\u043E\u043B\u0442\u044B\u0433 \u0441\u0430\u043D\u0443\u0443\u043B\u0430\u0445",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0422\u0430\u0442\u0430\u0436 \u0430\u0432\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u0441\u043A\u0430\u043D\u043D\u0435\u0440\u0434\u0430\u0445",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u0430\u043F\u043F\u043B\u0438\u043A\u0435\u0439\u0448\u043D",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u0432\u0435\u0431 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0422\u0430\u043D\u044B \u0432\u0435\u0431 \u0445\u04E9\u0442\u04E9\u0447 \u0434\u044D\u044D\u0440 Deriv cTrader \u0440\u0443\u0443 \u0445\u0430\u043D\u0434\u0430\u0445 \u044D\u0441\u0432\u044D\u043B \u043C\u0435\u0441\u0441\u0435\u0436 \u0430\u043F\u043F \u0442\u0430\u0442\u0430\u0436 \u0430\u0432\u0430\u0445 \u0437\u0430\u043C\u0430\u0430\u0440 \u0430\u0440\u0438\u043B\u0436\u0430\u0430 \u044D\u0445\u043B\u04AF\u04AF\u043B.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0422\u0430 \u04AF\u0437\u043B\u044D\u0433 \u0431\u04AF\u0442\u044D\u044D\u043B\u0434\u044D\u044D \u0434\u0430\u0440\u0430\u0430 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0436 \u0431\u043E\u043B\u043D\u043E",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u041C\u0438\u043D\u0438\u0439 \u0441\u043E\u043D\u0433\u043E\u043B\u0442\u044B\u0433 \u0441\u0430\u043D\u0443\u0443\u043B\u0430\u0445",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u0432\u0435\u0431 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u0430\u043F\u043F\u043B\u0438\u043A\u0435\u0439\u0448\u043D",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0422\u0430\u043D\u044B \u0432\u0435\u0431 \u0445\u04E9\u0442\u04E9\u0447 \u0434\u044D\u044D\u0440 Deriv cTrader \u0440\u0443\u0443 \u0445\u0430\u043D\u0434\u0430\u0445 \u044D\u0441\u0432\u044D\u043B \u043C\u0435\u0441\u0441\u0435\u0436 \u0430\u043F\u043F \u0442\u0430\u0442\u0430\u0436 \u0430\u0432\u0430\u0445 \u0437\u0430\u043C\u0430\u0430\u0440 \u0430\u0440\u0438\u043B\u0436\u0430\u0430 \u044D\u0445\u043B\u04AF\u04AF\u043B.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0422\u0430 \u04AF\u0437\u043B\u044D\u0433 \u0431\u04AF\u0442\u044D\u044D\u043B\u0434\u044D\u044D \u0434\u0430\u0440\u0430\u0430 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0436 \u0431\u043E\u043B\u043D\u043E",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u041C\u0438\u043D\u0438\u0439 \u0441\u043E\u043D\u0433\u043E\u043B\u0442\u044B\u0433 \u0441\u0430\u043D\u0443\u0443\u043B\u0430\u0445",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0422\u0430\u0442\u0430\u0436 \u0430\u0432\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u0441\u043A\u0430\u043D\u043D\u0435\u0440\u0434\u0430\u0445",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u0433\u0430\u0440 \u0443\u0442\u0430\u0441\u043D\u044B \u0430\u043F\u043F",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u0430\u043F\u043F\u043B\u0438\u043A\u0435\u0439\u0448\u043D",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u0432\u044D\u0431 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0422\u0430 \u04AF\u0437\u043B\u044D\u0433 \u0431\u04AF\u0442\u044D\u044D\u043B\u0434\u044D\u044D \u0434\u0430\u0440\u0430\u0430 \u04E9\u04E9\u0440\u0447\u0438\u043B\u0436 \u0431\u043E\u043B\u043D\u043E",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u041C\u0438\u043D\u0438\u0439 \u0441\u043E\u043D\u0433\u043E\u043B\u0442\u044B\u0433 \u0441\u0430\u043D\u0443\u0443\u043B\u0430\u0445",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u0432\u044D\u0431 \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u0430\u043F\u043F\u043B\u0438\u043A\u0435\u0439\u0448\u043D"
    },
    We = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Mo\u017Cesz to zmieni\u0107 p\xF3\u017Aniej w ustawieniach",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Zapami\u0119taj m\xF3j wyb\xF3r",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Zeskanuj, aby pobra\u0107",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Aplikacja Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader terminal internetowy",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Uzyskaj dost\u0119p do Deriv cTrader w przegl\u0105darce internetowej lub zainstaluj aplikacj\u0119 mobiln\u0105, aby zacz\u0105\u0107 trading.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Mo\u017Cesz to zmieni\u0107 p\xF3\u017Aniej w ustawieniach",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Zapami\u0119taj m\xF3j wyb\xF3r",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader terminal internetowy",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Aplikacja Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Uzyskaj dost\u0119p do Deriv cTrader w przegl\u0105darce internetowej lub zainstaluj aplikacj\u0119 mobiln\u0105, aby zacz\u0105\u0107 trading.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Mo\u017Cesz to zmieni\u0107 p\xF3\u017Aniej w ustawieniach",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Zapami\u0119taj m\xF3j wyb\xF3r",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Zeskanuj, aby pobra\u0107",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "Aplikacja mobilna MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "Aplikacja MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal internetowy MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Mo\u017Cesz to zmieni\u0107 p\xF3\u017Aniej w ustawieniach",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Zapami\u0119taj m\xF3j wyb\xF3r",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal internetowy MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "Aplikacja MetaTrader 5"
    },
    Le = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Pode alterar isto mais tarde nas defini\xE7\xF5es",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Lembre-se da minha sele\xE7\xE3o",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Escaneie para descarregar",
        "1HRZy8QDiEOU_89bEvknCw#Value": "App Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Terminal web Deriv cTrader",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Aceda ao Deriv cTrader no seu navegador ou instale a aplica\xE7\xE3o m\xF3vel para come\xE7ar a negociar.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Pode alterar isto mais tarde nas defini\xE7\xF5es",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Lembre-se da minha sele\xE7\xE3o",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Terminal web Deriv cTrader",
        "InDYlBE5rECid9mw8E1s8Q#Value": "App Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Aceda ao Deriv cTrader no seu navegador ou instale a aplica\xE7\xE3o m\xF3vel para come\xE7ar a negociar.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Pode alterar isto mais tarde nas defini\xE7\xF5es",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Lembre-se da minha sele\xE7\xE3o",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Escaneie para descarregar",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "Aplica\xE7\xE3o m\xF3vel MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "App MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal web MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Pode alterar isto mais tarde nas defini\xE7\xF5es",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Lembre-se da minha sele\xE7\xE3o",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal web MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "App MetaTrader 5"
    },
    Je = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F",
        "1HRZy8QDiEOU_89bEvknCw#Value": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "\u0412\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B Deriv cTrader",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A Deriv cTrader \u0432 \u0432\u0430\u0448\u0435\u043C \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438\u043B\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440",
        "OiJvMCd+mUemxkHv_w65GA#Value": "\u0412\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B Deriv cTrader",
        "InDYlBE5rECid9mw8E1s8Q#Value": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A Deriv cTrader \u0432 \u0432\u0430\u0448\u0435\u043C \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0438\u043B\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "\u0412\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044D\u0442\u043E \u043F\u043E\u0437\u0436\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u043E\u0439 \u0432\u044B\u0431\u043E\u0440",
        "3XOcJlvDXESMWHSX68oLiA#Value": "\u0412\u0435\u0431-\u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 MetaTrader 5"
    },
    Ue = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0D94\u0DB6 \u0DB8\u0DD9\u0DBA \u0DB4\u0DC3\u0DD4\u0DC0 \u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DBD\u0DAF\u0DD3 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u0DB8\u0D9C\u0DDA \u0DAD\u0DDA\u0DBB\u0DD3\u0DB8 \u0DB8\u0DAD\u0D9A \u0DAD\u0DB6\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0DB6\u0DCF\u0D9C\u0DAD \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0DC3\u0DCA\u0D9A\u0DD1\u0DB1\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u0DBA\u0DD9\u0DAF\u0DD4\u0DB8",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u0DC0\u0DD9\u0DB6\u0DCA \u0DA7\u0DBB\u0DCA\u0DB8\u0DD2\u0DB1\u0DBD\u0DCA",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB6\u0DCA \u0DB6\u0DCA\u200D\u0DBB\u0DC0\u0DCA\u0DC3\u0DBB\u0DBA\u0DDA Deriv cTrader \u0DC0\u0DD9\u0DAD \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1 \u0DC0\u0DD3\u0DB8\u0DA7 \u0DC4\u0DDD \u0DA7\u0DCA\u200D\u0DBB\u0DDA\u0DA9\u0DCA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0DB8\u0DDC\uBC14\uC77C \u0D85\u0DBA\u0DAF\u0DD4\u0DB8\u0DCA\u0DB4\u0DAD \u0DC3\u0DCA\u0DAE\u0DCF\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0D94\u0DB6 \u0DB8\u0DD9\u0DBA \u0DB4\u0DC3\u0DD4\u0DC0 \u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DBD\u0DAF\u0DD3 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u0DB8\u0D9C\u0DDA \u0DAD\u0DDA\u0DBB\u0DD3\u0DB8 \u0DB8\u0DAD\u0D9A \u0DAD\u0DB6\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u0DC0\u0DD9\u0DB6\u0DCA \u0DA7\u0DBB\u0DCA\u0DB8\u0DD2\u0DB1\u0DBD\u0DCA",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u0DBA\u0DD9\u0DAF\u0DD4\u0DB8",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0D94\u0DB6\u0DDA \u0DC0\u0DD9\u0DB6\u0DCA \u0DB6\u0DCA\u200D\u0DBB\u0DC0\u0DCA\u0DC3\u0DBB\u0DBA\u0DDA Deriv cTrader \u0DC0\u0DD9\u0DAD \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1 \u0DC0\u0DD3\u0DB8\u0DA7 \u0DC4\u0DDD \u0DA7\u0DCA\u200D\u0DBB\u0DDA\u0DA9\u0DCA \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0DB8\u0DDC\uBC14\uC77C \u0D85\u0DBA\u0DAF\u0DD4\u0DB8\u0DCA\u0DB4\u0DAD \u0DC3\u0DCA\u0DAE\u0DCF\u0DB4\u0DB1\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0D94\u0DB6 \u0DB8\u0DD9\u0DBA \u0DB4\u0DC3\u0DD4\u0DC0 \u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DBD\u0DAF\u0DD3 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u0DB8\u0D9C\u0DDA \u0DAD\u0DDA\u0DBB\u0DD3\u0DB8 \u0DB8\u0DAD\u0D9A \u0DAD\u0DB6\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0DB6\u0DCF\u0D9C\u0DAD \u0D9A\u0DD2\u0DBB\u0DD3\u0DB8\u0DA7 \u0DC3\u0DCA\u0D9A\u0DD1\u0DB1\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u0DAF\u0DD4\u0DBB\u0D9A\u0DAE\u0DB1 \u0DBA\u0DD9\u0DAF\u0DD4\u0DB8",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u0DBA\u0DD9\u0DAF\u0DD4\u0DB8",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u0DC0\u0DD9\u0DB6\u0DCA \u0DA7\u0DBB\u0DCA\u0DB8\u0DD2\u0DB1\u0DBD\u0DCA",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0D94\u0DB6 \u0DB8\u0DD9\u0DBA \u0DB4\u0DC3\u0DD4\u0DC0 \u0DC3\u0DD0\u0D9A\u0DC3\u0DD4\u0DB8\u0DBD\u0DAF\u0DD3 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u0DB8\u0D9C\u0DDA \u0DAD\u0DDA\u0DBB\u0DD3\u0DB8 \u0DB8\u0DAD\u0D9A \u0DAD\u0DB6\u0DCF\u0D9C\u0DB1\u0DCA\u0DB1",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u0DC0\u0DD9\u0DB6\u0DCA \u0DA7\u0DBB\u0DCA\u0DB8\u0DD2\u0DB1\u0DBD\u0DCA",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u0DBA\u0DD9\u0DAF\u0DD4\u0DB8"
    },
    Ne = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Unaweza kubadilisha hili baadaye katika mipangilio",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Kumbuka chaguo langu",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Scan kwa ajili ya kupakua",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Programu ya Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader kiwamba ya mtandao",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Pata Deriv cTrader kwenye kivinjari chako cha wavuti au sakinisha programu ya simu kuanza biashara.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Unaweza kubadilisha hili baadaye katika mipangilio",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Kumbuka chaguo langu",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader kiwamba ya mtandao",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Programu ya Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Pata Deriv cTrader kwenye kivinjari chako cha wavuti au sakinisha programu ya simu kuanza biashara.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Unaweza kubadilisha hili baadaye katika mipangilio",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Kumbuka chaguo langu",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Scan kwa ajili ya kupakua",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "Programu ya simu ya MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "Programu ya MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal ya mtandaoni ya MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Unaweza kubadilisha hili baadaye katika mipangilio",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Kumbuka chaguo langu",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal ya mtandaoni ya MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "Programu ya MetaTrader 5"
    },
    Ke = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0B87\u0BA4\u0BC1 \u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB2\u0BBE\u0BAE\u0BCD",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u0B8E\u0BA9\u0BA4\u0BC1 \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC8 \u0BA8\u0BBF\u0BA9\u0BC8\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0BAA\u0BA4\u0BBF\u0BB5\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u0BB5\u0BB2\u0BC8 \u0BA4\u0BC1\u0BB1\u0BC8\u0BAE\u0BC1\u0B95\u0BAE\u0BCD",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BC8 \u0B89\u0BB2\u0BBE\u0BB5\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD Deriv cTrader \u0B90 \u0B85\u0BA3\u0BC1\u0B95\u0BB5\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B86\u0B9F\u0BCD\u0B9F\u0BCB \u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0BAF\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BB5\u0BBF \u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95\u0BAE\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0B87\u0BA4\u0BC1 \u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB2\u0BBE\u0BAE\u0BCD",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u0B8E\u0BA9\u0BA4\u0BC1 \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC8 \u0BA8\u0BBF\u0BA9\u0BC8\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u0BB5\u0BB2\u0BC8 \u0BA4\u0BC1\u0BB1\u0BC8\u0BAE\u0BC1\u0B95\u0BAE\u0BCD",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BB2\u0BC8 \u0B89\u0BB2\u0BBE\u0BB5\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD Deriv cTrader \u0B90 \u0B85\u0BA3\u0BC1\u0B95\u0BB5\u0BC1\u0BAE\u0BCD \u0B85\u0BB2\u0BCD\u0BB2\u0BA4\u0BC1 \u0B86\u0B9F\u0BCD\u0B9F\u0BCB \u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0BAF\u0BC8 \u0BA8\u0BBF\u0BB1\u0BC1\u0BB5\u0BBF \u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95\u0BAE\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0B87\u0BA4\u0BC1 \u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB2\u0BBE\u0BAE\u0BCD",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u0B8E\u0BA9\u0BA4\u0BC1 \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC8 \u0BA8\u0BBF\u0BA9\u0BC8\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0BAA\u0BA4\u0BBF\u0BB5\u0BBF\u0BB1\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BCD \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u0BAE\u0BCA\u0BAA\u0BC8\u0BB2\u0BCD \u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0BBE\u0B9F\u0BC1",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u0B9A\u0BC6\u0BAF\u0BB2\u0BBF",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u0BB5\u0BC6\u0BAA\u0BCD \u0B9F\u0BC6\u0BB0\u0BCD\u0BAE\u0BBF\u0BA9\u0BB2\u0BCD",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0B87\u0BA4\u0BC1 \u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BB0\u0BCD \u0B85\u0BAE\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BCA\u0BB3\u0BCD\u0BB3\u0BB2\u0BBE\u0BAE\u0BCD",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u0B8E\u0BA9\u0BA4\u0BC1 \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC8 \u0BA8\u0BBF\u0BA9\u0BC8\u0BB5\u0BBF\u0BB2\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u0BB5\u0BC6\u0BAA\u0BCD \u0B9F\u0BC6\u0BB0\u0BCD\u0BAE\u0BBF\u0BA9\u0BB2\u0BCD",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u0B9A\u0BC6\u0BAF\u0BB2\u0BBF"
    },
    Ie = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E14\u0E49\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u0E08\u0E14\u0E08\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",
        "1HRZy8QDiEOU_89bEvknCw#Value": "\u0E41\u0E2D\u0E1B Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E19\u0E31\u0E25\u0E40\u0E27\u0E47\u0E1A Deriv cTrader",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07 Deriv cTrader \u0E43\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E2D\u0E1B\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E23\u0E14",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E14\u0E49\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u0E08\u0E14\u0E08\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
        "OiJvMCd+mUemxkHv_w65GA#Value": "\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E19\u0E31\u0E25\u0E40\u0E27\u0E47\u0E1A Deriv cTrader",
        "InDYlBE5rECid9mw8E1s8Q#Value": "\u0E41\u0E2D\u0E1B Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07 Deriv cTrader \u0E43\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E2D\u0E1B\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E40\u0E17\u0E23\u0E14",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E14\u0E49\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u0E08\u0E14\u0E08\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "\u0E41\u0E2D\u0E1B\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "\u0E41\u0E2D\u0E1B MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E19\u0E31\u0E25\u0E40\u0E27\u0E47\u0E1A MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E14\u0E49\u0E43\u0E19\u0E20\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u0E08\u0E14\u0E08\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
        "3XOcJlvDXESMWHSX68oLiA#Value": "\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E21\u0E34\u0E19\u0E31\u0E25\u0E40\u0E27\u0E47\u0E1A MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "\u0E41\u0E2D\u0E1B MetaTrader 5"
    },
    He = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Bunu daha sonra ayarlarda de\u011Fi\u015Ftirebilirsin",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Se\xE7imimi hat\u0131rla",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u0130ndirmek i\xE7in taray\u0131n",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader uygulamas\u0131",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader web terminali",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Web taray\u0131c\u0131n\u0131zda Deriv cTrader'a eri\u015Fin veya i\u015Flem yapmaya ba\u015Flamak i\xE7in mobil uygulamay\u0131 y\xFCkleyin.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Bunu daha sonra ayarlarda de\u011Fi\u015Ftirebilirsin",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Se\xE7imimi hat\u0131rla",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader web terminali",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader uygulamas\u0131",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Web taray\u0131c\u0131n\u0131zda Deriv cTrader'a eri\u015Fin veya i\u015Flem yapmaya ba\u015Flamak i\xE7in mobil uygulamay\u0131 y\xFCkleyin.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Bunu daha sonra ayarlarda de\u011Fi\u015Ftirebilirsin",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Se\xE7imimi hat\u0131rla",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u0130ndirmek i\xE7in taray\u0131n",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 Mobil Uygulamas\u0131",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 uygulamas\u0131",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 web terminali",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Bunu daha sonra ayarlarda de\u011Fi\u015Ftirebilirsin",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Se\xE7imimi hat\u0131rla",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 web terminali",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 uygulamas\u0131"
    },
    Be = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Tanlovimni eslab qol",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Yuklab olish uchun skanerlang",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader ilovasi",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader veb terminali",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "O'z brauzeringizda Deriv cTrader ga kirish yoki savdo qilish uchun mobil ilovani o'rnatish mumkin.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Tanlovimni eslab qol",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader veb terminali",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader ilovasi",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "O'z brauzeringizda Deriv cTrader ga kirish yoki savdo qilish uchun mobil ilovani o'rnatish mumkin.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Tanlovimni eslab qol",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Yuklab olish uchun skanerlang",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 mobil ilovasi",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 ilovasi",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 veb terminal",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Tanlovimni eslab qol",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 veb terminal",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 ilovasi"
    },
    ze = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Tanlovimni eslab qol",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Yuklab olish uchun skanerlang",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader ilovasi",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader veb terminali",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "O'z brauzeringizda Deriv cTrader ga kirish yoki savdo qilish uchun mobil ilovani o'rnatish mumkin.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Tanlovimni eslab qol",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader veb terminali",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader ilovasi",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "O'z brauzeringizda Deriv cTrader ga kirish yoki savdo qilish uchun mobil ilovani o'rnatish mumkin.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Tanlovimni eslab qol",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Yuklab olish uchun skanerlang",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 mobil ilovasi",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 ilovasi",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 veb terminal",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "Buni keyin sozlamalarda o'zgartirishingiz mumkin",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Tanlovimni eslab qol",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 veb terminal",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 ilovasi"
    },
    Ye = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "B\u1EA1n c\xF3 th\u1EC3 thay \u0111\u1ED5i \u0111i\u1EC1u n\xE0y sau trong c\xE0i \u0111\u1EB7t",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "Nh\u1EDB l\u1EF1a ch\u1ECDn c\u1EE7a t\xF4i",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "Qu\xE9t \u0111\u1EC3 t\u1EA3i xu\u1ED1ng",
        "1HRZy8QDiEOU_89bEvknCw#Value": "\u1EE8ng d\u1EE5ng Deriv cTrader",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Tr\xECnh duy\u1EC7t web Deriv cTrader",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "Truy c\u1EADp Deriv cTrader tr\xEAn tr\xECnh duy\u1EC7t web c\u1EE7a b\u1EA1n ho\u1EB7c c\xE0i \u0111\u1EB7t \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u giao d\u1ECBch.",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "B\u1EA1n c\xF3 th\u1EC3 thay \u0111\u1ED5i \u0111i\u1EC1u n\xE0y sau trong c\xE0i \u0111\u1EB7t",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "Nh\u1EDB l\u1EF1a ch\u1ECDn c\u1EE7a t\xF4i",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Tr\xECnh duy\u1EC7t web Deriv cTrader",
        "InDYlBE5rECid9mw8E1s8Q#Value": "\u1EE8ng d\u1EE5ng Deriv cTrader",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "Truy c\u1EADp Deriv cTrader tr\xEAn tr\xECnh duy\u1EC7t web c\u1EE7a b\u1EA1n ho\u1EB7c c\xE0i \u0111\u1EB7t \u1EE9ng d\u1EE5ng di \u0111\u1ED9ng \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u giao d\u1ECBch.",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "B\u1EA1n c\xF3 th\u1EC3 thay \u0111\u1ED5i \u0111i\u1EC1u n\xE0y sau trong c\xE0i \u0111\u1EB7t",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "Nh\u1EDB l\u1EF1a ch\u1ECDn c\u1EE7a t\xF4i",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "Qu\xE9t \u0111\u1EC3 t\u1EA3i xu\u1ED1ng",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "\u1EE8ng d\u1EE5ng di \u0111\u1ED9ng MT5",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "\u1EE8ng d\u1EE5ng MetaTrader 5",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "Terminal web MetaTrader 5",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "B\u1EA1n c\xF3 th\u1EC3 thay \u0111\u1ED5i \u0111i\u1EC1u n\xE0y sau trong c\xE0i \u0111\u1EB7t",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "Nh\u1EDB l\u1EF1a ch\u1ECDn c\u1EE7a t\xF4i",
        "3XOcJlvDXESMWHSX68oLiA#Value": "Terminal web MetaTrader 5",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "\u1EE8ng d\u1EE5ng MetaTrader 5"
    },
    qe = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u4F60\u4EE5\u540E\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u8BB0\u4F4F\u6211\u7684\u9009\u62E9",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u626B\u63CF\u4E0B\u8F7D",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u5E94\u7528\u7A0B\u5E8F",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u7F51\u7EDC\u7EC8\u7AEF",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u5728\u60A8\u7684\u7F51\u9875\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE Deriv cTrader\uFF0C\u6216\u5B89\u88C5\u79FB\u52A8\u5E94\u7528\u5F00\u59CB\u4EA4\u6613\u3002",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u4F60\u4EE5\u540E\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u8BB0\u4F4F\u6211\u7684\u9009\u62E9",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u7F51\u7EDC\u7EC8\u7AEF",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u5E94\u7528\u7A0B\u5E8F",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u5728\u60A8\u7684\u7F51\u9875\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE Deriv cTrader \u6216\u5B89\u88C5\u79FB\u52A8\u5E94\u7528\u5F00\u59CB\u4EA4\u6613\u3002",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u4F60\u4EE5\u540E\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u8BB0\u4F4F\u6211\u7684\u9009\u62E9",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u626B\u63CF\u4E0B\u8F7D",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u624B\u673A\u7248\u5E94\u7528",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u5E94\u7528",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u7F51\u7EDC\u7EC8\u7AEF",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u4F60\u4EE5\u540E\u53EF\u4EE5\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6539",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u8BB0\u4F4F\u6211\u7684\u9009\u62E9",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u7F51\u7EDC\u7EC8\u7AEF",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u5E94\u7528"
    },
    je = {
        "KE0U8aJwiEuyq002mWsgbg#Value": "\u60A8\u53EF\u4EE5\u7A0D\u5F8C\u5728\u8A2D\u7F6E\u4E2D\u66F4\u6539",
        "kxum1+lyYECt0eJUIGn_KQ#Value": "\u8A18\u4F4F\u6211\u7684\u9078\u64C7",
        "k+o3lA6Ea0O0l0Kn_9x+aQ#Value": "\u6383\u63CF\u4E0B\u8F09",
        "1HRZy8QDiEOU_89bEvknCw#Value": "Deriv cTrader \u61C9\u7528\u7A0B\u5F0F",
        "xm6SoSGtFUKCPBaaWoY31A#Value": "Deriv cTrader \u7DB2\u8DEF\u7D42\u7AEF",
        "yO1uhU6M_0yLVd0EYNKNYg#Value": "\u5728\u60A8\u7684\u7DB2\u9801\u700F\u89BD\u5668\u4E2D\u5B58\u53D6 Deriv cTrader \u6216\u5B89\u88DD\u624B\u6A5F\u61C9\u7528\u7A0B\u5F0F\u4F86\u958B\u59CB\u4EA4\u6613\u3002",
        "1RsvZ9WW7UeK7V7cQt6+WA#Value": "\u60A8\u53EF\u4EE5\u7A0D\u5F8C\u5728\u8A2D\u7F6E\u4E2D\u66F4\u6539",
        "nF8R1iOHn0mxzLoviqFqnQ#Value": "\u8A18\u4F4F\u6211\u7684\u9078\u64C7",
        "OiJvMCd+mUemxkHv_w65GA#Value": "Deriv cTrader \u7DB2\u8DEF\u7D42\u7AEF",
        "InDYlBE5rECid9mw8E1s8Q#Value": "Deriv cTrader \u61C9\u7528\u7A0B\u5F0F",
        "ry6SVyl8p0y5RB8Q67Bw1g#Value": "\u5728\u60A8\u7684\u7DB2\u9801\u700F\u89BD\u5668\u4E2D\u5B58\u53D6 Deriv cTrader \u6216\u5B89\u88DD\u624B\u6A5F\u61C9\u7528\u7A0B\u5F0F\u4F86\u958B\u59CB\u4EA4\u6613\u3002",
        "2qLXFwLUw02zC8TCEeFDuQ#Value": "\u60A8\u53EF\u4EE5\u7A0D\u5F8C\u5728\u8A2D\u7F6E\u4E2D\u66F4\u6539",
        "N7qJKtPtU0SwBfu8Pqu_fQ#Value": "\u8A18\u4F4F\u6211\u7684\u9078\u64C7",
        "Nz3lGTLN0EScp2jjER4EKw#Value": "\u6383\u63CF\u4E0B\u8F09",
        "WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1": "MT5 \u884C\u52D5\u61C9\u7528",
        "31Gm8Nh9iECA1tsoV956Yw#Value": "MetaTrader 5 \u61C9\u7528\u7A0B\u5F0F",
        "podxfVOJg0SCA6QUv1jKaQ#Value": "MetaTrader 5 \u7DB2\u9801\u7D42\u7AEF",
        "hmMq8foIFkSJ+SFolK+zVg#Value": "\u60A8\u53EF\u4EE5\u7A0D\u5F8C\u5728\u8A2D\u7F6E\u4E2D\u66F4\u6539",
        "__8Ac1T2o02J_0nL8il7Ng#Value": "\u8A18\u4F4F\u6211\u7684\u9078\u64C7",
        "3XOcJlvDXESMWHSX68oLiA#Value": "MetaTrader 5 \u7DB2\u9801\u7D42\u7AEF",
        "CuWY83Cjuka+j_CiA+XhIw#Value": "MetaTrader 5 \u61C9\u7528\u7A0B\u5F0F"
    },
    we = {
        "ar-001": {
            translations: Ae,
            isRTL: !0
        },
        "bn-BD": {
            translations: Re,
            isRTL: !1
        },
        "de-DE": {
            translations: Oe,
            isRTL: !1
        },
        "es-ES": {
            translations: xe,
            isRTL: !1
        },
        "fr-FR": {
            translations: ke,
            isRTL: !1
        },
        "it-IT": {
            translations: Pe,
            isRTL: !1
        },
        "km-KH": {
            translations: Me,
            isRTL: !1
        },
        "ko-KR": {
            translations: Fe,
            isRTL: !1
        },
        "mn-MN": {
            translations: Qe,
            isRTL: !1
        },
        "pl-PL": {
            translations: We,
            isRTL: !1
        },
        "pt-PT": {
            translations: Le,
            isRTL: !1
        },
        "ru-RU": {
            translations: Je,
            isRTL: !1
        },
        "si-LK": {
            translations: Ue,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ne,
            isRTL: !1
        },
        "ta-IN": {
            translations: Ke,
            isRTL: !1
        },
        "th-TH": {
            translations: Ie,
            isRTL: !1
        },
        "tr-TR": {
            translations: He,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Be,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ze,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ye,
            isRTL: !1
        },
        "zh-CN": {
            translations: qe,
            isRTL: !1
        },
        "zh-TW": {
            translations: je,
            isRTL: !1
        }
    };

function se(_, v, n, a) {
    let e = "";
    _.isDemo ? e = `https://mt5-demo-web.deriv.com/terminal?login=${_.loginId}` : e = `https://mt5-real01-web-svg.deriv.com/terminal?login=${_.loginId}`, window.open(e, "_blank")
}
l(se, "default");

function de(_, v, n, a) {
    let e = "";
    _.isDemo ? e = `https://mt5-dev-demo-web.regentmarkets.com/terminal?login=${_.loginId}` : e = `https://mt5-dev-real-web.regentmarkets.com/terminal?login=${_.loginId}`, window.open(e, "_blank")
}
l(de, "default");

function ue(_, v, n, a) {
    var t;
    let e = _.GetOs,
        d = _.Platform,
        i = _.Login,
        u = _.IsDesktop,
        p = (t = {
            mt5: {
                ios: "https://download.mql5.com/cdn/mobile/mt5/ios?server=DerivSVG-Demo,DerivSVG-Server,DerivSVG-Server-02,DerivSVG-Server-03",
                android: "market://details?id=net.metaquotes.metatrader5",
                osx: "https://apps.apple.com/us/app/metatrader-5/id413251709",
                windows: "https://download.mql5.com/cdn/web/deriv.com.limited/mt5/deriv5setup.exe",
                linux: "https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux"
            },
            ctrader: {
                ios: "itms-apps://itunes.apple.com/app/id6466996509",
                android: "market://details?id=com.deriv.ct",
                osx: "https://getctradermac.com/deriv/ctrader-deriv-setup.dmg",
                windows: "https://getctrader.com/deriv/ctrader-deriv-setup.exe"
            },
            derivgo: {
                ios: "itms-apps://itunes.apple.com/app/id1550561298",
                android: "market://details?id=com.deriv.app",
                huawei: "appmarket://details?id=com.deriv.app"
            },
            nakala: {
                ios: "https://apps.apple.com/si/app/deriv-nakala/id6742988869",
                android: "https://play.google.com/store/apps/details?id=com.deriv.pelican",
                huawei: ""
            }
        } [d]) == null ? void 0 : t[e];
    window.open(p, "_blank"), document.addEventListener("visibilitychange", function() {
        document.hidden && clearTimeout(window == null ? void 0 : window.timeout), window.onblur && (clearTimeout(window == null ? void 0 : window.timeout), document.hidden || window.location.open(p, "_blank"))
    })
}
l(ue, "default");
var s = D; {
    let v = class v extends s.Controller.BaseViewController {
        constructor(a, e, d) {
            super(a, e, d, we);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _metatrader5WebTerminalOnClick$Action() {
            return this.hasOwnProperty("__metatrader5WebTerminalOnClick$Action") || (this.__metatrader5WebTerminalOnClick$Action = function(a, e, d) {
                var i = this.model,
                    u = this.controller,
                    m = this.idService;
                return s.Logger.startActiveSpan("Metatrader5WebTerminalOnClick", function(p) {
                    p && (p.setAttribute("code.function", "Metatrader5WebTerminalOnClick"), p.setAttribute("outsystems.function.key", "07054822-b41e-4f51-b8bc-a99d6d5952ae"), p.setAttribute("outsystems.function.owner.name", "dashboard"), p.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        u.ensureControllerAlive("Metatrader5WebTerminalOnClick"), d = u.callContext(d);
                        var t = new s.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("dashboard.CFDs.CFDTradeActionsModalContent.Metatrader5WebTerminalOnClick$vars")));
                        t.value.loginIdInLocal = a, t.value.is_demoInLocal = e;
                        var V = new s.DataTypes.VariableHolder;
                        V.value = E.checkEnvironment$Action(d), V.value.isProductionOut ? s.Logger.startActiveSpan("ProdCreateRedirectUrl", function(o) {
                            o && (o.setAttribute("code.function", "ProdCreateRedirectUrl"), o.setAttribute("outsystems.function.key", "2d4bb738-1fd2-4e99-babe-c14f08f23a89"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return u.safeExecuteJSNode(se, "ProdCreateRedirectUrl", "Metatrader5WebTerminalOnClick", {
                                    isDemo: s.DataConversion.JSNodeParamConverter.to(t.value.is_demoInLocal, s.DataTypes.DataTypes.Boolean),
                                    loginId: s.DataConversion.JSNodeParamConverter.to(t.value.loginIdInLocal, s.DataTypes.DataTypes.Text)
                                }, function(C) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1) : s.Logger.startActiveSpan("StaigngCreateRedirectUrl", function(o) {
                            o && (o.setAttribute("code.function", "StaigngCreateRedirectUrl"), o.setAttribute("outsystems.function.key", "4d178f5d-b996-44c3-91cb-b76453a87cf1"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return u.safeExecuteJSNode(de, "StaigngCreateRedirectUrl", "Metatrader5WebTerminalOnClick", {
                                    isDemo: s.DataConversion.JSNodeParamConverter.to(t.value.is_demoInLocal, s.DataTypes.DataTypes.Boolean),
                                    loginId: s.DataConversion.JSNodeParamConverter.to(t.value.loginIdInLocal, s.DataTypes.DataTypes.Text)
                                }, function(C) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__metatrader5WebTerminalOnClick$Action
        }
        set _metatrader5WebTerminalOnClick$Action(a) {
            this.__metatrader5WebTerminalOnClick$Action = a
        }
        get _cFDAppOnClick$Action() {
            return this.hasOwnProperty("__cFDAppOnClick$Action") || (this.__cFDAppOnClick$Action = function(a, e, d) {
                var i = this.model,
                    u = this.controller,
                    m = this.idService;
                return s.Logger.startActiveSpan("CFDAppOnClick", function(p) {
                    p && (p.setAttribute("code.function", "CFDAppOnClick"), p.setAttribute("outsystems.function.key", "07be23ad-4fc4-4b5f-8dcb-8ac919a8c245"), p.setAttribute("outsystems.function.owner.name", "dashboard"), p.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), p.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        u.ensureControllerAlive("CFDAppOnClick"), d = u.callContext(d);
                        var t = new s.DataTypes.VariableHolder(new(u.constructor.getVariableGroupType("dashboard.CFDs.CFDTradeActionsModalContent.CFDAppOnClick$vars")));
                        t.value.platformInLocal = a, t.value.loginInLocal = e;
                        var V = new s.DataTypes.VariableHolder,
                            o = new s.DataTypes.VariableHolder;
                        o.value = Z.isDesktop$Action(d), V.value = Z.getOS$Action(s.BuiltinFunctions.getUserAgent(), d), s.Logger.startActiveSpan("OpenDeeplinkHandler", function(C) {
                            C && (C.setAttribute("code.function", "OpenDeeplinkHandler"), C.setAttribute("outsystems.function.key", "005972c9-8151-4e9f-9061-49d1d622a401"), C.setAttribute("outsystems.function.owner.name", "dashboard"), C.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), C.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return u.safeExecuteJSNode(ue, "OpenDeeplinkHandler", "CFDAppOnClick", {
                                    Login: s.DataConversion.JSNodeParamConverter.to(t.value.loginInLocal, s.DataTypes.DataTypes.Text),
                                    Platform: s.DataConversion.JSNodeParamConverter.to(t.value.platformInLocal, s.DataTypes.DataTypes.Text),
                                    IsDesktop: s.DataConversion.JSNodeParamConverter.to(o.value.isDesktopOut, s.DataTypes.DataTypes.Boolean),
                                    GetOs: s.DataConversion.JSNodeParamConverter.to(V.value.oSOut, s.DataTypes.DataTypes.Text)
                                }, function(c) {}, {}, {})
                            } finally {
                                C && C.end()
                            }
                        }, 1)
                    } finally {
                        p && p.end()
                    }
                }, 1)
            }), this.__cFDAppOnClick$Action
        }
        set _cFDAppOnClick$Action(a) {
            this.__cFDAppOnClick$Action = a
        }
        get _derivCtraderWebTerminalOnClick$Action() {
            return this.hasOwnProperty("__derivCtraderWebTerminalOnClick$Action") || (this.__derivCtraderWebTerminalOnClick$Action = function(a) {
                var e = this.model,
                    d = this.controller,
                    i = this.idService;
                return s.Logger.startActiveSpan("DerivCtraderWebTerminalOnClick", function(u) {
                    return u && (u.setAttribute("code.function", "DerivCtraderWebTerminalOnClick"), u.setAttribute("outsystems.function.key", "d2063982-6a35-48f3-a3ee-41c3cfcc3bcc"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        d.ensureControllerAlive("DerivCtraderWebTerminalOnClick"), a = d.callContext(a);
                        var m = new s.DataTypes.VariableHolder,
                            p = new s.DataTypes.VariableHolder,
                            t = new s.DataTypes.VariableHolder,
                            V = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(X)));
                        return s.Flow.executeAsyncFlow(function() {
                            return e.variables.isFetchingTokenVar = !0, m.value = E.isProduction$Action(a), e.flush(), E.fetch_Get$Action(m.value.isProductionOut ? "https://api-core.deriv.com/cfd/v1/ctrader/oauth2/service_token" : "https://staging-api-core.deriv.com/cfd/v1/ctrader/oauth2/service_token", !1, "", 600, "", new(s.GenericTypeCache.getGenericList(pe)), new(s.GenericTypeCache.getGenericList(fe)), a).then(function(o) {
                                t.value = o
                            }).then(function() {
                                t.value.isErrorOut ? (e.variables.isFetchingTokenVar = !1, E.toasterError$Action(t.value.errorResponseOut.errorsAttr.getCurrent(a.iterationContext).messageAttr, a)) : (V.value.dataOut = s.JSONUtils.deserializeFromJSON(t.value.responseOut, X, !1), p.value = E.checkEnvironment$Action(a), E.redirectToExternalURL$Action(p.value.isProductionOut ? "https://ct.deriv.com/?token=" + V.value.dataOut.dataAttr.tokenAttr : "https://ct-uat.deriv.com/?token=" + V.value.dataOut.dataAttr.tokenAttr, !0, a), e.variables.isFetchingTokenVar = !1)
                            })
                        })
                    }, function() {
                        u && u.end()
                    })
                }, 1)
            }), this.__derivCtraderWebTerminalOnClick$Action
        }
        set _derivCtraderWebTerminalOnClick$Action(a) {
            this.__derivCtraderWebTerminalOnClick$Action = a
        }
        metatrader5WebTerminalOnClick$Action(a, e, d) {
            var i = this.controller;
            return s.Logger.startActiveSpan("Metatrader5WebTerminalOnClick__proxy", function(u) {
                u && (u.setAttribute("code.function", "Metatrader5WebTerminalOnClick"), u.setAttribute("outsystems.function.key", "07054822-b41e-4f51-b8bc-a99d6d5952ae"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._metatrader5WebTerminalOnClick$Action, d, a, e)
                } finally {
                    u && u.end()
                }
            }, 0)
        }
        cFDAppOnClick$Action(a, e, d) {
            var i = this.controller;
            return s.Logger.startActiveSpan("CFDAppOnClick__proxy", function(u) {
                u && (u.setAttribute("code.function", "CFDAppOnClick"), u.setAttribute("outsystems.function.key", "07be23ad-4fc4-4b5f-8dcb-8ac919a8c245"), u.setAttribute("outsystems.function.owner.name", "dashboard"), u.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._cFDAppOnClick$Action, d, a, e)
                } finally {
                    u && u.end()
                }
            }, 0)
        }
        derivCtraderWebTerminalOnClick$Action(a) {
            var e = this.controller;
            return s.Logger.startActiveSpan("DerivCtraderWebTerminalOnClick__proxy", function(d) {
                return d && (d.setAttribute("code.function", "DerivCtraderWebTerminalOnClick"), d.setAttribute("outsystems.function.key", "d2063982-6a35-48f3-a3ee-41c3cfcc3bcc"), d.setAttribute("outsystems.function.owner.name", "dashboard"), d.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return e.safeExecuteClientAction(e._derivCtraderWebTerminalOnClick$Action, a)
                }, function() {
                    d && d.end()
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return E.defaultTimeout
        }
    };
    l(v, "ControllerInner");
    let _ = v;
    G = _, G.registerVariableGroupType("dashboard.CFDs.CFDTradeActionsModalContent.Metatrader5WebTerminalOnClick$vars", [{
        name: "loginId",
        attrName: "loginIdInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "is_demo",
        attrName: "is_demoInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Boolean,
        defaultValue: l(function() {
            return !1
        }, "defaultValue")
    }]), G.registerVariableGroupType("dashboard.CFDs.CFDTradeActionsModalContent.CFDAppOnClick$vars", [{
        name: "Platform",
        attrName: "platformInLocal",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "Login",
        attrName: "loginInLocal",
        mandatory: !1,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var G, Te = new s.Controller.ControllerFactory(G, W);
var Ee = P.PlaceholderContent,
    nt = P.IteratorPlaceholderContent,
    $e = l(function() {
        var _ = J(function(v) {
            var n = v.model,
                a = v.controller,
                e = v.controller.idService,
                d = a.validationService,
                i = a.callContext(),
                u = K,
                m = I,
                p = {
                    props: v,
                    validateWidget: l(function(c) {
                        v.validateWidget(v, c)
                    }, "validateWidget")
                },
                t = n,
                V = N,
                o = U,
                C = L();
            return r.createElement("div", v.rootNodeProperties, r.createElement(g, {
                align: 0,
                animate: !0,
                style: "hide-desktop",
                visible: n.variables.activeTradingDetailsIn.platform_codeAttr === "mt5",
                _idProps: {
                    service: e,
                    name: "StandardMobile"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column align-items-center gap-base full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, r.createElement(T, {
                enabled: !0,
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.cFDAppOnClick$Action(n.variables.activeTradingDetailsIn.platform_codeAttr, n.variables.activeTradingDetailsIn.account_idAttr, a.callContext(c))
                }, "onClick"),
                style: "btn btn-primary full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                image: y.VersionedURL.getVersionedUrl("img/dashboard.phone__white.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("CuWY83Cjuka+j_CiA+XhIw#Value", "MetaTrader 5 app"))],
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            })), r.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.metatrader5WebTerminalOnClick$Action(n.variables.activeTradingDetailsIn.account_idAttr, n.variables.activeTradingDetailsIn.typeAttr === "demo", a.callContext(c))
                }, "onClick"),
                style: "btn btn-outline full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                image: y.VersionedURL.getVersionedUrl("img/dashboard.iconLeft_11_.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("3XOcJlvDXESMWHSX68oLiA#Value", "MetaTrader 5 web terminal"))],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex full-width gap-s  align-content-flex-start",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, r.createElement(F, {
                _validationProps: {
                    validationService: d
                },
                enabled: !0,
                style: "checkbox cfd-trade-checkbox",
                variable: n.createVariable(M.DataTypes.Boolean, n.variables.acceptSettingsChangesVar, function(c) {
                    n.variables.acceptSettingsChangesVar = c
                }),
                _idProps: {
                    service: e,
                    name: "Checkbox1"
                },
                _widgetRecordProvider: t
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-left",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            }, r.createElement(Q, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                style: "text-align-left",
                targetWidget: "Checkbox1",
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: t
            }, o(m("__8Ac1T2o02J_0nL8il7Ng#Value", "Remember my selection"))), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("hmMq8foIFkSJ+SFolK+zVg#Value", "You can change this later in settings"))],
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }))))), r.createElement(g, {
                align: 0,
                animate: !0,
                style: "hide-mobile",
                visible: n.variables.activeTradingDetailsIn.platform_codeAttr === "mt5",
                _idProps: {
                    service: e,
                    name: "StandardDesktop"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: t
            }, r.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.metatrader5WebTerminalOnClick$Action(n.variables.activeTradingDetailsIn.account_idAttr, n.variables.activeTradingDetailsIn.typeAttr === "demo", a.callContext(c))
                }, "onClick"),
                style: "btn  full-width btn-rounded btn-primary",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                gridProperties: {
                    width: "24px"
                },
                image: y.VersionedURL.getVersionedUrl("img/dashboard.globe_white.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("podxfVOJg0SCA6QUv1jKaQ#Value", "MetaTrader 5 web terminal"))],
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            })), r.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.cFDAppOnClick$Action(n.variables.activeTradingDetailsIn.platform_codeAttr, n.variables.activeTradingDetailsIn.account_idAttr, a.callContext(c))
                }, "onClick"),
                style: "btn btn-outline full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                gridProperties: {
                    width: "24px"
                },
                image: y.VersionedURL.getVersionedUrl("img/dashboard.desktop_dark.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("31Gm8Nh9iECA1tsoV956Yw#Value", "MetaTrader 5 app"))],
                _idProps: {
                    service: e,
                    uuid: "20"
                },
                _widgetRecordProvider: t
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border: 1px solid var(--semantic-color-monochrome-border-normal-mid, rgba(0, 0, 0, 0.08)); border-radius: 24px;"
                },
                style: "padding-m display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t
            }, r.createElement(x, {
                style: "font-bold",
                value: ge.resolve(_e.TranslationsService).getMessage("WroOY_ilgkKuwotPJsOMuw#ValueExpression.1600140693.1", "MT5 Mobile App"),
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("Nz3lGTLN0EScp2jjER4EKw#Value", "Scan to download"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            })), r.createElement(h, {
                gridProperties: {
                    width: "104px"
                },
                image: y.VersionedURL.getVersionedUrl("img/dashboard.mt5Onelink.png"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex full-width gap-s  align-content-flex-start",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, r.createElement(F, {
                _validationProps: {
                    validationService: d
                },
                enabled: !0,
                style: "checkbox cfd-trade-checkbox",
                variable: n.createVariable(M.DataTypes.Boolean, n.variables.acceptSettingsChangesVar, function(c) {
                    n.variables.acceptSettingsChangesVar = c
                }),
                _idProps: {
                    service: e,
                    name: "Checkbox2"
                },
                _widgetRecordProvider: t
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-left",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "28"
                },
                _widgetRecordProvider: t
            }, r.createElement(Q, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                style: "text-align-left",
                targetWidget: "Checkbox2",
                _idProps: {
                    service: e,
                    uuid: "29"
                },
                _widgetRecordProvider: t
            }, o(m("N7qJKtPtU0SwBfu8Pqu_fQ#Value", "Remember my selection"))), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("2qLXFwLUw02zC8TCEeFDuQ#Value", "You can change this later in settings"))],
                _idProps: {
                    service: e,
                    uuid: "30"
                },
                _widgetRecordProvider: t
            }))))), r.createElement(g, {
                align: 0,
                animate: !0,
                style: "hide-desktop",
                visible: n.variables.activeTradingDetailsIn.platform_codeAttr === "ctrader",
                _idProps: {
                    service: e,
                    name: "CtraderMobile"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column align-items-center gap-base full-width ctrader-mobile-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "32"
                },
                _widgetRecordProvider: t
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "33"
                },
                _widgetRecordProvider: t
            }, r.createElement(b, {
                style: "font-base",
                text: [o(m("ry6SVyl8p0y5RB8Q67Bw1g#Value", "Access Deriv cTrader in your web browser or install the mobile app to start trading."))],
                _idProps: {
                    service: e,
                    uuid: "34"
                },
                _widgetRecordProvider: t
            })), r.createElement(T, {
                enabled: !0,
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.cFDAppOnClick$Action(n.variables.activeTradingDetailsIn.platform_codeAttr, n.variables.activeTradingDetailsIn.account_idAttr, a.callContext(c))
                }, "onClick"),
                style: "btn btn-primary full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "35"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                image: y.VersionedURL.getVersionedUrl("img/dashboard.phone__white.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "36"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("InDYlBE5rECid9mw8E1s8Q#Value", "Deriv cTrader app"))],
                _idProps: {
                    service: e,
                    uuid: "37"
                },
                _widgetRecordProvider: t
            })), r.createElement(B, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "full-width",
                    IsLoading: n.variables.isFetchingTokenVar,
                    ShowLabelOnLoading: !1
                },
                events: {
                    _handleError: l(function(c) {
                        a.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: e,
                    uuid: "38",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    button: new Ee(function() {
                        return [r.createElement(T, {
                            enabled: !n.variables.isFetchingTokenVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                    return a.derivCtraderWebTerminalOnClick$Action(a.callContext(c))
                                })
                            }, "onClick"),
                            style: "btn  full-width btn-rounded btn-outline",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "39"
                            },
                            _widgetRecordProvider: t
                        }, V(n.variables.isFetchingTokenVar, !1, this, function() {
                            return []
                        }, function() {
                            return [r.createElement($, {
                                getOwnerSpan: l(function() {
                                    return C.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: l(function() {
                                    return C.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='16' height='24' viewBox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<g clip-path='url(#clip0_354_10535)'>\r
<path d='M8 18.5C8.21875 18.5 8.84375 18.2812 9.46875 17C9.75 16.4375 10 15.7812 10.1562 15H5.8125C6 15.7812 6.21875 16.4375 6.5 17C7.15625 18.2812 7.75 18.5 8 18.5ZM5.5625 13.5H10.4062C10.4688 13.0312 10.5 12.5312 10.5 12C10.5 11.5 10.4688 11 10.4062 10.5H5.5625C5.5 11 5.5 11.5 5.5 12C5.5 12.5312 5.5 13.0312 5.5625 13.5ZM5.8125 9H10.1562C10 8.25 9.75 7.59375 9.46875 7.03125C8.84375 5.75 8.21875 5.5 8 5.5C7.75 5.5 7.15625 5.75 6.5 7.03125C6.21875 7.59375 6 8.25 5.8125 9ZM11.9062 10.5C11.9688 11 11.9688 11.5 11.9688 12C11.9688 12.5312 11.9688 13.0312 11.9062 13.5H14.3125C14.4375 13.0312 14.5 12.5312 14.5 12C14.5 11.5 14.4375 11 14.3125 10.5H11.9062ZM13.75 9C13.0938 7.71875 12 6.6875 10.6875 6.09375C11.125 6.90625 11.4688 7.90625 11.6875 9H13.75ZM4.28125 9C4.5 7.90625 4.84375 6.90625 5.28125 6.09375C3.96875 6.6875 2.875 7.71875 2.21875 9H4.28125ZM1.65625 10.5C1.5625 11 1.5 11.5 1.5 12C1.5 12.5312 1.53125 13.0312 1.65625 13.5H4.0625C4 13.0312 4 12.5312 4 12C4 11.5 4 11 4.0625 10.5H1.65625ZM10.6875 17.9375C12 17.3438 13.0938 16.3125 13.75 15H11.6875C11.4688 16.125 11.125 17.125 10.6875 17.9375ZM5.28125 17.9375C4.84375 17.125 4.5 16.125 4.28125 15H2.21875C2.875 16.3125 3.96875 17.3438 5.28125 17.9375ZM8 20C5.125 20 2.5 18.5 1.0625 16C-0.375 13.5312 -0.375 10.5 1.0625 8C2.5 5.53125 5.125 4 8 4C10.8438 4 13.4688 5.53125 14.9062 8C16.3438 10.5 16.3438 13.5312 14.9062 16C13.4688 18.5 10.8438 20 8 20Z' fill='#181C25'/>\r
</g>\r
<defs>\r
<clipPath id='clip0_354_10535'>\r
<rect width='16' height='24' fill='white'/>\r
</clipPath>\r
</defs>\r
</svg>\r
`
                                },
                                events: {
                                    _handleError: l(function(c) {
                                        a.handleError(c)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: d
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "40",
                                    alias: "2"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            }), r.createElement(b, {
                                style: "full-width",
                                text: [o(m("OiJvMCd+mUemxkHv_w65GA#Value", "Deriv cTrader web terminal"))],
                                _idProps: {
                                    service: e,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: t
                            })]
                        }), r.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "42"
                            },
                            _widgetRecordProvider: t
                        }))]
                    })
                },
                _dependencies: [u(n.variables.isFetchingTokenVar)]
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex full-width gap-s  align-content-flex-start",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "43"
                },
                _widgetRecordProvider: t
            }, r.createElement(F, {
                _validationProps: {
                    validationService: d
                },
                enabled: !0,
                style: "checkbox cfd-trade-checkbox",
                variable: n.createVariable(M.DataTypes.Boolean, n.variables.acceptSettingsChangesVar, function(c) {
                    n.variables.acceptSettingsChangesVar = c
                }),
                _idProps: {
                    service: e,
                    name: "Checkbox3"
                },
                _widgetRecordProvider: t
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-left",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "45"
                },
                _widgetRecordProvider: t
            }, r.createElement(Q, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                style: "text-align-left",
                targetWidget: "Checkbox3",
                _idProps: {
                    service: e,
                    uuid: "46"
                },
                _widgetRecordProvider: t
            }, o(m("nF8R1iOHn0mxzLoviqFqnQ#Value", "Remember my selection"))), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("1RsvZ9WW7UeK7V7cQt6+WA#Value", "You can change this later in settings"))],
                _idProps: {
                    service: e,
                    uuid: "47"
                },
                _widgetRecordProvider: t
            }))))), r.createElement(g, {
                align: 0,
                animate: !0,
                style: "hide-mobile",
                visible: n.variables.activeTradingDetailsIn.platform_codeAttr === "ctrader",
                _idProps: {
                    service: e,
                    name: "CtraderDesktop"
                },
                _widgetRecordProvider: t,
                visible_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "49"
                },
                _widgetRecordProvider: t
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "50"
                },
                _widgetRecordProvider: t
            }, r.createElement(b, {
                style: "font-base",
                text: [o(m("yO1uhU6M_0yLVd0EYNKNYg#Value", "Access Deriv cTrader in your web browser or install the mobile app to start trading."))],
                _idProps: {
                    service: e,
                    uuid: "51"
                },
                _widgetRecordProvider: t
            })), r.createElement(B, {
                getOwnerSpan: l(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: l(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "full-width",
                    ShowLabelOnLoading: !1,
                    IsLoading: n.variables.isFetchingTokenVar
                },
                events: {
                    _handleError: l(function(c) {
                        a.handleError(c)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: e,
                    uuid: "52",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    button: new Ee(function() {
                        return [r.createElement(T, {
                            enabled: !n.variables.isFetchingTokenVar,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: !1,
                            onClick: l(function() {
                                return Promise.resolve().then(function() {
                                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                    return a.derivCtraderWebTerminalOnClick$Action(a.callContext(c))
                                })
                            }, "onClick"),
                            style: "btn  full-width btn-rounded btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "53"
                            },
                            _widgetRecordProvider: t
                        }, V(n.variables.isFetchingTokenVar, !1, this, function() {
                            return []
                        }, function() {
                            return [r.createElement(h, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: y.VersionedURL.getVersionedUrl("img/dashboard.globe_white.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(b, {
                                style: "full-width",
                                text: [o(m("xm6SoSGtFUKCPBaaWoY31A#Value", "Deriv cTrader web terminal"))],
                                _idProps: {
                                    service: e,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: t
                            })]
                        }), r.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "osui-btn-loading__spinner-animation",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "56"
                            },
                            _widgetRecordProvider: t
                        }))]
                    })
                },
                _dependencies: [u(n.variables.isFetchingTokenVar)]
            }), r.createElement(T, {
                enabled: !0,
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: !1,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.cFDAppOnClick$Action(n.variables.activeTradingDetailsIn.platform_codeAttr, n.variables.activeTradingDetailsIn.account_idAttr, a.callContext(c))
                }, "onClick"),
                style: "btn btn-outline full-width btn-rounded",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "57"
                },
                _widgetRecordProvider: t
            }, r.createElement(h, {
                gridProperties: {
                    width: "24px"
                },
                image: y.VersionedURL.getVersionedUrl("img/dashboard.desktop_dark.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "58"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "full-width",
                text: [o(m("1HRZy8QDiEOU_89bEvknCw#Value", "Deriv cTrader app"))],
                _idProps: {
                    service: e,
                    uuid: "59"
                },
                _widgetRecordProvider: t
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "border: 1px solid var(--semantic-color-monochrome-border-normal-mid, rgba(0, 0, 0, 0.08)); border-radius: 24px;"
                },
                style: "padding-m display-flex align-items-center justify-content-space-between",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "60"
                },
                _widgetRecordProvider: t
            }, r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "61"
                },
                _widgetRecordProvider: t
            }, r.createElement(x, {
                style: "font-bold",
                value: "cTrader Mobile App",
                _idProps: {
                    service: e,
                    uuid: "62"
                },
                _widgetRecordProvider: t
            }), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("k+o3lA6Ea0O0l0Kn_9x+aQ#Value", "Scan to download"))],
                _idProps: {
                    service: e,
                    uuid: "63"
                },
                _widgetRecordProvider: t
            })), r.createElement(h, {
                gridProperties: {
                    width: "104px"
                },
                image: y.VersionedURL.getVersionedUrl("img/dashboard.CTraderQRCode.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "64"
                },
                _widgetRecordProvider: t
            })), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex full-width gap-s  align-content-flex-start",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "65"
                },
                _widgetRecordProvider: t
            }, r.createElement(F, {
                _validationProps: {
                    validationService: d
                },
                enabled: !0,
                style: "checkbox cfd-trade-checkbox",
                variable: n.createVariable(M.DataTypes.Boolean, n.variables.acceptSettingsChangesVar, function(c) {
                    n.variables.acceptSettingsChangesVar = c
                }),
                _idProps: {
                    service: e,
                    name: "Checkbox4"
                },
                _widgetRecordProvider: t
            }), r.createElement(g, {
                align: 0,
                animate: !1,
                style: "flex-1 text-align-left",
                visible: !1,
                _idProps: {
                    service: e,
                    uuid: "67"
                },
                _widgetRecordProvider: t
            }, r.createElement(Q, {
                extendedProperties: {
                    style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                },
                gridProperties: {
                    classes: "OSFillParent",
                    marginLeft: "0px"
                },
                style: "text-align-left",
                targetWidget: "Checkbox4",
                _idProps: {
                    service: e,
                    uuid: "68"
                },
                _widgetRecordProvider: t
            }, o(m("kxum1+lyYECt0eJUIGn_KQ#Value", "Remember my selection"))), r.createElement(b, {
                style: "text-subtle",
                text: [o(m("KE0U8aJwiEuyq002mWsgbg#Value", "You can change this later in settings"))],
                _idProps: {
                    service: e,
                    uuid: "69"
                },
                _widgetRecordProvider: t
            }))))))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "CFDTradeActionsModalContent",
                    functionKey: "836ecfce-52cf-4f45-90f3-b269c81f76f1",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDTradeActionsModalContent",
            modelFactory: ye,
            controllerFactory: Te
        });
        return _.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDTradeActionsModalContent.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return [B, $]
        }, _
    }, "componentFactory"),
    lt = $e();
var f = ve(be());
var ea = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u062E\u0648\u0644",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0627\u0644\u062E\u0627\u062F\u0645",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0627\u0644\u0648\u0633\u064A\u0637",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E!"
    },
    aa = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u09AA\u09BE\u09B8\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u09A1 \u09AD\u09C1\u09B2\u09C7 \u0997\u09C7\u099B\u09C7\u09A8?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u09B2\u0997\u0987\u09A8 \u0986\u0987\u09A1\u09BF",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u09B8\u09BE\u09B0\u09CD\u09AD\u09BE\u09B0",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u09AC\u09CD\u09B0\u09CB\u0995\u09BE\u09B0",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0995\u09AA\u09BF \u0995\u09B0\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7!"
    },
    ta = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Passwort vergessen?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Anmelde-ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Server",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Kopiert!"
    },
    ra = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\xBFOlvidaste la contrase\xF1a?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "ID de inicio de sesi\xF3n",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Servidor",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Corredor",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\xA1Copiado!"
    },
    ia = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Mot de passe oubli\xE9 ?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Identifiant de connexion",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Serveur",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Courtier",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Copi\xE9 !"
    },
    na = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Password dimenticata?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "ID di accesso",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Server",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Copiato!"
    },
    la = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u1797\u17D2\u179B\u17C1\u1785\u1796\u17B6\u1780\u17D2\u1799\u179F\u1798\u17D2\u1784\u17B6\u178F\u17CB?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u179B\u17C1\u1781\u179F\u1798\u17D2\u1782\u17B6\u179B\u17CB\u1785\u17BC\u179B",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u1798\u17C9\u17B6\u179F\u17CA\u17B8\u1793\u1794\u1798\u17D2\u179A\u17BE",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u1788\u17D2\u1798\u17BD\u1789\u1780\u178E\u17D2\u178F\u17B6\u179B",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u1794\u17B6\u1793\u1785\u17C6\u179B\u1784\u17A0\u17BE\u1799!"
    },
    oa = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\uB85C\uADF8\uC778 ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\uC11C\uBC84",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\uBE0C\uB85C\uCEE4",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!"
    },
    sa = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u041D\u0443\u0443\u0446 \u04AF\u0433 \u043C\u0430\u0440\u0442\u0441\u0430\u043D \u0443\u0443?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0413\u044D\u0440\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0434\u0443\u0433\u0430\u0430\u0440",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0421\u0435\u0440\u0432\u0435\u0440",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0411\u0440\u043E\u043A\u0435\u0440",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0445\u0443\u0443\u043B\u0441\u0430\u043D!"
    },
    da = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Zapomnia\u0142e\u015B has\u0142a?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Login ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Serwer",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Skopiowano!"
    },
    ua = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Esqueceu a palavra-passe?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "ID de login",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Servidor",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Corretor",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Copiado!"
    },
    ca = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u0445\u043E\u0434\u0430",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0421\u0435\u0440\u0432\u0435\u0440",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0411\u0440\u043E\u043A\u0435\u0440",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E!"
    },
    ma = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DB8\u0DAD\u0D9A \u0DB1\u0DDC\u0DC0\u0DB1\u0DC0\u0DCF\u0DAF?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0DBD\u0DDC\u0D9C\u0DD2\u0DB1\u0DCA \u0DC4\u0DD0\u0DB3\u0DD4\u0DB1\u0DD4\u0DB8\u0DCA\u0DB4\u0DAD",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0DC3\u0DDA\u0DC0\u0DCF\u0DAF\u0DCF\u0DBA\u0D9A\u0DBA",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0DB6\u0DCA\u200D\u0DBB\u0DDD\u0D9A\u0DBB\u0DCA",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0DB4\u0DD2\u0DA7\u0DB4\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1 \u0DBD\u0DAF\u0DD3!"
    },
    va = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Umesahau nenosiri?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Kitambulisho cha kuingia",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Seva",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Wakala",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Imenakiliwa!"
    },
    ga = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BC6\u0BBE\u0BB2\u0BCD \u0BAE\u0BB1\u0BA8\u0BCD\u0BA4\u0BC1\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BC0\u0BB0\u0BCD\u0B95\u0BB3\u0BBE?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8\u0BB5\u0BC1 ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0A38\u0A30\u0BCD\u0BB5\u0631",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0B92\u0BB0\u0BC7 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0BA8\u0B95\u0BB2\u0BC6\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1!"
    },
    _a = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u0E23\u0E2B\u0E31\u0E2A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u0E42\u0E1A\u0E23\u0E01\u0E40\u0E01\u0E2D\u0E23\u0E4C",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27!"
    },
    pa = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u015Eifrenizi mi unuttunuz?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Giri\u015F Kimli\u011Fi",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Sunucu",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Kopyaland\u0131!"
    },
    fa = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Parolingizni unutdingizmi?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Kirish IDsi",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Server",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Nusxaland\u0131!"
    },
    ba = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Parolingizni unutdingizmi?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "Kirish IDsi",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "Server",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Broker",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "Nusxaland\u0131!"
    },
    Ca = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "Qu\xEAn m\u1EADt kh\u1EA9u?",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "ID \u0111\u0103ng nh\u1EADp",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "M\xE1y ch\u1EE7",
        "Id+yStB600egnQ_JQmMw8Q#Value": "Nh\xE0 m\xF4i gi\u1EDBi",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u0110\xE3 sao ch\xE9p!"
    },
    Va = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u5FD8\u8BB0\u5BC6\u7801\uFF1F",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u767B\u5F55ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u670D\u52A1\u5668",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u7ECF\u7EAA\u4EBA",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u5DF2\u590D\u5236\uFF01"
    },
    ya = {
        "MrNdYbo9aU6WZwFqQfCbRQ#Value": "\u5FD8\u8A18\u5BC6\u78BC\uFF1F",
        "6fMT+ofJw0iPr4xRGRRa4A#Value": "\u767B\u5165ID",
        "OKsE6rytJk+QLuJwBw4d1A#Value": "\u4F3A\u670D\u5668",
        "Id+yStB600egnQ_JQmMw8Q#Value": "\u7D93\u7D00\u4EBA",
        "Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1": "\u5DF2\u8907\u88FD\uFF01"
    },
    Se = {
        "ar-001": {
            translations: ea,
            isRTL: !0
        },
        "bn-BD": {
            translations: aa,
            isRTL: !1
        },
        "de-DE": {
            translations: ta,
            isRTL: !1
        },
        "es-ES": {
            translations: ra,
            isRTL: !1
        },
        "fr-FR": {
            translations: ia,
            isRTL: !1
        },
        "it-IT": {
            translations: na,
            isRTL: !1
        },
        "km-KH": {
            translations: la,
            isRTL: !1
        },
        "ko-KR": {
            translations: oa,
            isRTL: !1
        },
        "mn-MN": {
            translations: sa,
            isRTL: !1
        },
        "pl-PL": {
            translations: da,
            isRTL: !1
        },
        "pt-PT": {
            translations: ua,
            isRTL: !1
        },
        "ru-RU": {
            translations: ca,
            isRTL: !1
        },
        "si-LK": {
            translations: ma,
            isRTL: !1
        },
        "sw-KE": {
            translations: va,
            isRTL: !1
        },
        "ta-IN": {
            translations: ga,
            isRTL: !1
        },
        "th-TH": {
            translations: _a,
            isRTL: !1
        },
        "tr-TR": {
            translations: pa,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: fa,
            isRTL: !1
        },
        "uz-UZ": {
            translations: ba,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ca,
            isRTL: !1
        },
        "zh-CN": {
            translations: Va,
            isRTL: !1
        },
        "zh-TW": {
            translations: ya,
            isRTL: !1
        }
    };

function ce(_, v, n, a) {
    navigator.clipboard.writeText(_.TextToCopy)
}
l(ce, "default");
var S = D; {
    let v = class v extends S.Controller.BaseViewController {
        constructor(a, e, d) {
            super(a, e, d, Se);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(a) {
            this._dataFetchActionNames = a
        }
        get _copyToClipboard$Action() {
            return this.hasOwnProperty("__copyToClipboard$Action") || (this.__copyToClipboard$Action = function(a, e) {
                var d = this.model,
                    i = this.controller,
                    u = this.idService;
                return S.Logger.startActiveSpan("CopyToClipboard", function(m) {
                    m && (m.setAttribute("code.function", "CopyToClipboard"), m.setAttribute("outsystems.function.key", "827a21a5-fe51-49af-a7a1-39601a891571"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("CopyToClipboard"), e = i.callContext(e);
                        var p = new S.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("dashboard.CFDs.CFDAccountDetailModalContent.CopyToClipboard$vars")));
                        p.value.textToCopyInLocal = a, S.Logger.startActiveSpan("JavaScript1", function(t) {
                            t && (t.setAttribute("code.function", "JavaScript1"), t.setAttribute("outsystems.function.key", "3c7236bb-8063-41a1-9a8d-7ab47c9034fa"), t.setAttribute("outsystems.function.owner.name", "dashboard"), t.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), t.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(ce, "JavaScript1", "CopyToClipboard", {
                                    TextToCopy: S.DataConversion.JSNodeParamConverter.to(p.value.textToCopyInLocal, S.DataTypes.DataTypes.Text)
                                }, function(V) {}, {}, {})
                            } finally {
                                t && t.end()
                            }
                        }, 1), E.toasterSuccess$Action(S.Injector.resolve(S.ServiceNames.TranslationsService).getMessage("Z1ldDbHet0+_XNicfL8hjQ#Value.-1677264451.1", "Copied!"), e)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__copyToClipboard$Action
        }
        set _copyToClipboard$Action(a) {
            this.__copyToClipboard$Action = a
        }
        copyToClipboard$Action(a, e) {
            var d = this.controller;
            return S.Logger.startActiveSpan("CopyToClipboard__proxy", function(i) {
                i && (i.setAttribute("code.function", "CopyToClipboard"), i.setAttribute("outsystems.function.key", "827a21a5-fe51-49af-a7a1-39601a891571"), i.setAttribute("outsystems.function.owner.name", "dashboard"), i.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return d.safeExecuteClientAction(d._copyToClipboard$Action, e, a)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get forgotPasswordOnClick$Action() {
            return this.hasOwnProperty("_forgotPasswordOnClick$Action") || (this._forgotPasswordOnClick$Action = function() {
                return Promise.resolve()
            }), this._forgotPasswordOnClick$Action
        }
        set forgotPasswordOnClick$Action(a) {
            this._forgotPasswordOnClick$Action = a
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(a) {
            this._onInitializeEventHandler = a
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return E.defaultTimeout
        }
    };
    l(v, "ControllerInner");
    let _ = v;
    me = _, me.registerVariableGroupType("dashboard.CFDs.CFDAccountDetailModalContent.CopyToClipboard$vars", [{
        name: "TextToCopy",
        attrName: "textToCopyInLocal",
        mandatory: !0,
        dataType: S.DataTypes.DataTypes.Text,
        defaultValue: l(function() {
            return ""
        }, "defaultValue")
    }])
}
var me, De = new S.Controller.ControllerFactory(me, W);
var R = P.PlaceholderContent,
    Dt = P.IteratorPlaceholderContent,
    ha = l(function() {
        var _ = J(function(v) {
            var n = v.model,
                a = v.controller,
                e = v.controller.idService,
                d = a.validationService,
                i = a.callContext(),
                u = K,
                m = I,
                p = {
                    props: v,
                    validateWidget: l(function(c) {
                        v.validateWidget(v, c)
                    }, "validateWidget")
                },
                t = n,
                V = N,
                o = U,
                C = L();
            return f.createElement("div", v.rootNodeProperties, f.createElement(g, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "AccountDetailsWrapper"
                },
                _widgetRecordProvider: t
            }, f.createElement(H, {
                style: "list-item cfd-trade-modal__list-item",
                triggerActionOnFullSwipeLeft: !0,
                triggerActionOnFullSwipeRight: !0,
                _idProps: {
                    service: e,
                    name: "BrokerDetails"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    leftActions: R.Empty,
                    content: new R(function() {
                        return [f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(b, {
                            style: "text-neutral-6 text-align-left",
                            text: [o(m("Id+yStB600egnQ_JQmMw8Q#Value", "Broker"))],
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }), f.createElement(x, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "text-align-left font-size-base",
                            value: n.variables.activeTradingDetailsIn.brokerAttr,
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
                        })), f.createElement(T, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: l(function() {
                                var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                a.copyToClipboard$Action(n.variables.activeTradingDetailsIn.brokerAttr, a.callContext(c))
                            }, "onClick"),
                            style: "btn btn-outline btn-circle__small",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(h, {
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: y.VersionedURL.getVersionedUrl("img/dashboard.copy_dark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        })))]
                    }),
                    rightActions: R.Empty
                }
            }), f.createElement(H, {
                style: "list-item cfd-trade-modal__list-item",
                triggerActionOnFullSwipeLeft: !0,
                triggerActionOnFullSwipeRight: !0,
                _idProps: {
                    service: e,
                    name: "ServerDetails"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    leftActions: R.Empty,
                    content: new R(function() {
                        return [f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(b, {
                            style: "text-neutral-6 text-align-left",
                            text: [o(m("OKsE6rytJk+QLuJwBw4d1A#Value", "Server"))],
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }), f.createElement(x, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "text-align-left font-size-base",
                            value: n.variables.activeTradingDetailsIn.metadataAttr.descriptionAttr,
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
                        })), f.createElement(T, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: l(function() {
                                var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                a.copyToClipboard$Action(n.variables.activeTradingDetailsIn.metadataAttr.descriptionAttr, a.callContext(c))
                            }, "onClick"),
                            style: "btn btn-outline btn-circle__small",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(h, {
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: y.VersionedURL.getVersionedUrl("img/dashboard.copy_dark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        })))]
                    }),
                    rightActions: R.Empty
                }
            }), f.createElement(H, {
                style: "list-item cfd-trade-modal__list-item",
                triggerActionOnFullSwipeLeft: !0,
                triggerActionOnFullSwipeRight: !0,
                _idProps: {
                    service: e,
                    name: "LoginIDDetails"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    leftActions: R.Empty,
                    content: new R(function() {
                        return [f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column full-width",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "17"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(b, {
                            style: "text-neutral-6 text-align-left",
                            text: [o(m("6fMT+ofJw0iPr4xRGRRa4A#Value", "Login ID"))],
                            _idProps: {
                                service: e,
                                uuid: "18"
                            },
                            _widgetRecordProvider: t
                        }), f.createElement(x, {
                            extendedProperties: {
                                style: "margin-bottom: 0px; margin-right: 0px; margin-top: 0px;"
                            },
                            gridProperties: {
                                marginLeft: "0px"
                            },
                            style: "text-align-left font-size-base",
                            value: n.variables.activeTradingDetailsIn.account_idAttr,
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t,
                            value_dataFetchStatus: A.calculateDataFetchStatus(n.variables._activeTradingDetailsInDataFetchStatus)
                        })), f.createElement(T, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: l(function() {
                                var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                                a.copyToClipboard$Action(n.variables.activeTradingDetailsIn.platform_account_idAttr, a.callContext(c))
                            }, "onClick"),
                            style: "btn btn-outline btn-circle__small",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        }, f.createElement(h, {
                            extendedProperties: {
                                style: "height: auto;"
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: y.VersionedURL.getVersionedUrl("img/dashboard.copy_dark.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        })))]
                    }),
                    rightActions: R.Empty
                }
            }), f.createElement(g, {
                align: 0,
                animate: !1,
                style: "full-width text-align-right",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t
            }, f.createElement(Ce, {
                enabled: !0,
                onClick: l(function() {
                    var c = typeof i != "undefined" && i !== null ? i.clone() : a.callContext().clone();
                    a.forgotPasswordOnClick$Action(a.callContext(c))
                }, "onClick"),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }, f.createElement(b, {
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                style: "text-neutral-9 font-bold",
                text: [o(m("MrNdYbo9aU6WZwFqQfCbRQ#Value", "Forgot password?"))],
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: l(function() {
                return {
                    codeFunction: "CFDAccountDetailModalContent",
                    functionKey: "0faa9a2f-0840-4269-84d7-7d90fcefed6f",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "CFDs.CFDAccountDetailModalContent",
            modelFactory: he,
            controllerFactory: De
        });
        return _.getCssDependencies = function() {
            return ["css/dashboard.CFDs.CFDAccountDetailModalContent.css", "css/OutSystemsReactWidgets.css"]
        }, _.getJsDependencies = function() {
            return []
        }, _.getBlocks = function() {
            return []
        }, _
    }, "componentFactory"),
    At = ha();
export {
    lt as a, At as b
};