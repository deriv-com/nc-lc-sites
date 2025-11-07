import {
    a as Se
} from "./_oschunk-3UX5CTV3.js";
import {
    a as Ce,
    b as Ae
} from "./_oschunk-LLB25ACX.js";
import {
    a as Ve
} from "./_oschunk-Q5H2JROI.js";
import {
    a as q
} from "./_oschunk-J3DG2BKZ.js";
import {
    a as ut
} from "./_oschunk-24WIHVSN.js";
import {
    h as b,
    i as pe,
    q as R,
    t as D,
    v as z,
    x as E
} from "./_oschunk-O5KC3WOL.js";
import {
    a as ee,
    g as O,
    m as L,
    o as x,
    q as H,
    r as F,
    s as N,
    t as M
} from "./_oschunk-NVHFAAS2.js";
import {
    a as W
} from "./_oschunk-AW35UT34.js";
import {
    a as te
} from "./_oschunk-APHDMPWW.js";
import {
    Ga as k,
    Ha as G,
    J as ye,
    Ka as _,
    Q as st,
    U as lt,
    a as be
} from "./_oschunk-WCMQG33O.js";
import {
    J as I,
    X as V,
    c as i,
    f as $,
    i as T,
    q as p,
    x as P
} from "./_oschunk-DFKJJKI4.js";
var ae = V,
    Re = class Re extends ae.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(ae.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(Re, "VariablesRecord");
var ie = Re;
ie.init();
var Te = class Te extends ae.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Te, "WidgetsRecord");
var we = Te,
    Oe = class Oe extends ae.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return ie
        }
        static getWidgetsRecordConstructor() {
            return we
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {}
    };
i(Oe, "Model");
var oe = Oe;
oe._hasValidationWidgetsValue = void 0;
var dt = new ae.Model.ModelFactory(oe);
var re = V,
    ke = class ke extends re.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(re.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(ke, "VariablesRecord");
var se = ke;
se.init();
var Pe = class Pe extends re.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Pe, "WidgetsRecord");
var De = Pe,
    Le = class Le extends re.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return se
        }
        static getWidgetsRecordConstructor() {
            return De
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {}
    };
i(Le, "Model");
var le = Le;
le._hasValidationWidgetsValue = void 0;
var ct = new re.Model.ModelFactory(le);
var j = V,
    Fe = class Fe extends j.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, j.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, j.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(j.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(Fe, "VariablesRecord");
var ue = Fe;
ue.init();
var Ne = class Ne extends j.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Ne, "WidgetsRecord");
var xe = Ne,
    Me = class Me extends j.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ue
        }
        static getWidgetsRecordConstructor() {
            return xe
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(n) {
            "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus))
        }
    };
i(Me, "Model");
var de = Me;
de._hasValidationWidgetsValue = void 0;
var vt = new j.Model.ModelFactory(de);
var U = V,
    We = class We extends U.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Screen", "screenIn", "Screen", !0, !1, U.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_screenInDataFetchStatus", "_screenInDataFetchStatus", "_screenInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Isvisible", "isvisibleIn", "Isvisible", !0, !1, U.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isvisibleInDataFetchStatus", "_isvisibleInDataFetchStatus", "_isvisibleInDataFetchStatus", !0, !1, U.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(U.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(We, "VariablesRecord");
var ce = We;
ce.init();
var Be = class Be extends U.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(Be, "WidgetsRecord");
var Ge = Be,
    Q = class Q extends U.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return ce
        }
        static getWidgetsRecordConstructor() {
            return Ge
        }
        static get hasValidationWidgets() {
            return Q._hasValidationWidgetsValue === void 0 && (Q._hasValidationWidgetsValue = void 0), Q._hasValidationWidgetsValue
        }
        setInputs(n) {
            "Screen" in n && (this.variables.screenIn = n.Screen, "_screenInDataFetchStatus" in n && (this.variables._screenInDataFetchStatus = n._screenInDataFetchStatus)), "Isvisible" in n && (this.variables.isvisibleIn = n.Isvisible, "_isvisibleInDataFetchStatus" in n && (this.variables._isvisibleInDataFetchStatus = n._isvisibleInDataFetchStatus))
        }
    };
i(Q, "Model");
var ve = Q;
ve._hasValidationWidgetsValue = void 0;
var mt = new U.Model.ModelFactory(ve);
var S = V,
    qe = class qe extends S.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("PII_ClientProfileInformation", "pII_ClientProfileInformationVar", "PII_ClientProfileInformation", !0, !1, S.DataTypes.DataTypes.Record, function() {
                return S.DataTypes.ImmutableBase.getData(new ye)
            }, !1, ye), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Screen", "screenIn", "Screen", !0, !1, S.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_screenInDataFetchStatus", "_screenInDataFetchStatus", "_screenInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasHeroBottomRadius", "hasHeroBottomRadiusIn", "HasHeroBottomRadius", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasHeroBottomRadiusInDataFetchStatus", "_hasHeroBottomRadiusInDataFetchStatus", "_hasHeroBottomRadiusInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasTopPadding", "hasTopPaddingIn", "HasTopPadding", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasTopPaddingInDataFetchStatus", "_hasTopPaddingInDataFetchStatus", "_hasTopPaddingInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsBottomNavVisible", "isBottomNavVisibleIn", "IsBottomNavVisible", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_isBottomNavVisibleInDataFetchStatus", "_isBottomNavVisibleInDataFetchStatus", "_isBottomNavVisibleInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasRightContainer", "hasRightContainerIn", "HasRightContainer", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_hasRightContainerInDataFetchStatus", "_hasRightContainerInDataFetchStatus", "_hasRightContainerInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("HasGuide", "hasGuideIn", "HasGuide", !0, !1, S.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("_hasGuideInDataFetchStatus", "_hasGuideInDataFetchStatus", "_hasGuideInDataFetchStatus", !0, !1, S.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(S.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(qe, "VariablesRecord");
var me = qe;
me.init();
var je = class je extends S.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(je, "WidgetsRecord");
var Je = je,
    X = class X extends S.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return me
        }
        static getWidgetsRecordConstructor() {
            return Je
        }
        static get hasValidationWidgets() {
            return X._hasValidationWidgetsValue === void 0 && (X._hasValidationWidgetsValue = void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0 || void 0), X._hasValidationWidgetsValue
        }
        setInputs(n) {
            "HasFixedHeader" in n && (this.variables.hasFixedHeaderIn = n.HasFixedHeader, "_hasFixedHeaderInDataFetchStatus" in n && (this.variables._hasFixedHeaderInDataFetchStatus = n._hasFixedHeaderInDataFetchStatus)), "EnableAccessibilityFeatures" in n && (this.variables.enableAccessibilityFeaturesIn = n.EnableAccessibilityFeatures, "_enableAccessibilityFeaturesInDataFetchStatus" in n && (this.variables._enableAccessibilityFeaturesInDataFetchStatus = n._enableAccessibilityFeaturesInDataFetchStatus)), "ExtendedClass" in n && (this.variables.extendedClassIn = n.ExtendedClass, "_extendedClassInDataFetchStatus" in n && (this.variables._extendedClassInDataFetchStatus = n._extendedClassInDataFetchStatus)), "Screen" in n && (this.variables.screenIn = n.Screen, "_screenInDataFetchStatus" in n && (this.variables._screenInDataFetchStatus = n._screenInDataFetchStatus)), "HasHeroBottomRadius" in n && (this.variables.hasHeroBottomRadiusIn = n.HasHeroBottomRadius, "_hasHeroBottomRadiusInDataFetchStatus" in n && (this.variables._hasHeroBottomRadiusInDataFetchStatus = n._hasHeroBottomRadiusInDataFetchStatus)), "HasTopPadding" in n && (this.variables.hasTopPaddingIn = n.HasTopPadding, "_hasTopPaddingInDataFetchStatus" in n && (this.variables._hasTopPaddingInDataFetchStatus = n._hasTopPaddingInDataFetchStatus)), "IsBottomNavVisible" in n && (this.variables.isBottomNavVisibleIn = n.IsBottomNavVisible, "_isBottomNavVisibleInDataFetchStatus" in n && (this.variables._isBottomNavVisibleInDataFetchStatus = n._isBottomNavVisibleInDataFetchStatus)), "HasRightContainer" in n && (this.variables.hasRightContainerIn = n.HasRightContainer, "_hasRightContainerInDataFetchStatus" in n && (this.variables._hasRightContainerInDataFetchStatus = n._hasRightContainerInDataFetchStatus)), "HasGuide" in n && (this.variables.hasGuideIn = n.HasGuide, "_hasGuideInDataFetchStatus" in n && (this.variables._hasGuideInDataFetchStatus = n._hasGuideInDataFetchStatus))
        }
    };
i(X, "Model");
var fe = X;
fe._hasValidationWidgetsValue = void 0;
var yt = new S.Model.ModelFactory(fe);
var c = $(ee());
var Nt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u062F\u0644\u064A\u0644",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0627\u0644\u062D\u064A\u0629",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
    },
    Mt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09BF\u0995\u09BE",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u09B2\u09BE\u0987\u09AD \u099A\u09CD\u09AF\u09BE\u099F",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u09B9\u09CB\u09AE",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u09B9\u09CB\u09AE"
    },
    Gt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Anleitung",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Hilfecenter",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Live-Chat",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Startseite",
        "iLgQUlg730+2e6m3qEq84A#Value": "Startseite"
    },
    Ut = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Gu\xEDa",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Centro de ayuda",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Chat en vivo",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Cartera",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Cartera",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Inicio",
        "iLgQUlg730+2e6m3qEq84A#Value": "Inicio"
    },
    Wt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Guide",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Centre d\u2019aide",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Chat en direct",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portefeuille",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portefeuille",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Accueil",
        "iLgQUlg730+2e6m3qEq84A#Value": "Accueil"
    },
    Bt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Guida",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Centro assistenza",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Chat dal vivo",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portafoglio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portafoglio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    Jt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u1798\u1782\u17D2\u1782\u17BB\u1791\u17D2\u1791\u17C1\u179F\u1780\u17CD",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u1798\u1787\u17D2\u1788\u1798\u178E\u17D2\u178C\u179B\u1787\u17C6\u1793\u17BD\u1799",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u1787\u1787\u17C2\u1780\u1795\u17D2\u1791\u17B6\u179B\u17CB",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    zt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\uAC00\uC774\uB4DC",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\uB3C4\uC6C0 \uC13C\uD130",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\uB77C\uC774\uBE0C \uCC44\uD305",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\uD648",
        "iLgQUlg730+2e6m3qEq84A#Value": "\uD648"
    },
    qt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u0413\u0430\u0439\u0436",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0422\u0443\u0441\u043B\u0430\u043C\u0436\u0438\u0439\u043D \u0442\u04E9\u0432",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u0410\u043C\u044C\u0434 \u0447\u0430\u0442",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u0421\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439 \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u0421\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439 \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u041D\u04AF\u04AF\u0440 \u0445\u0443\u0443\u0434\u0430\u0441",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u041D\u04AF\u04AF\u0440 \u0445\u0443\u0443\u0434\u0430\u0441"
    },
    jt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Przewodnik",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Centrum pomocy",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Czat na \u017Cywo",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Strona g\u0142\xF3wna",
        "iLgQUlg730+2e6m3qEq84A#Value": "Strona g\u0142\xF3wna"
    },
    Kt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Guia",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Centro de ajuda",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Chat ao vivo",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portf\xF3lio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portf\xF3lio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "P\xE1gina inicial",
        "iLgQUlg730+2e6m3qEq84A#Value": "P\xE1gina inicial"
    },
    Qt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0426\u0435\u043D\u0442\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u041E\u043D\u043B\u0430\u0439\u043D-\u0447\u0430\u0442",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
    },
    Xt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u0DB8\u0D9C\u0DB4\u0DD9\u0DB1\u0DCA\u0DC0\u0DD3\u0DB8",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0D8B\u0DAF\u0DC0\u0DCA \u0DB8\u0DB0\u0DCA\u200D\u0DBA\u0DC3\u0DCA\u0DAE\u0DCF\u0DB1\u0DBA",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u0DC3\u0DA2\u0DD3\u0DC0\u0DD3 \u0D9A\u0DAD\u0DCF\u0DB6\u0DC4",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    Yt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Mwongozo",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Kituo cha msaada",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Gumzo la moja kwa moja",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    Zt = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0B89\u0BA4\u0BB5\u0BBF \u0BAE\u0BC8\u0BAF\u0BAE\u0BCD",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u0BA8\u0BC7\u0BB0\u0BB2\u0BC8 \u0B87-\u0B85\u0B9E\u0BCD\u0B9A\u0BB2\u0BBF\u0BAF\u0BBE\u0B95",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u0BAA\u0BCA\u0BB1\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u0BAA\u0BCA\u0BB1\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1"
    },
    $t = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u0E41\u0E0A\u0E17\u0E2A\u0E14",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E42\u0E1F\u0E25\u0E34\u0E42\u0E2D",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E42\u0E1F\u0E25\u0E34\u0E42\u0E2D",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"
    },
    ea = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "K\u0131lavuz",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Yard\u0131m merkezi",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Canl\u0131 sohbet",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portf\xF6y",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portf\xF6y",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Ana Sayfa",
        "iLgQUlg730+2e6m3qEq84A#Value": "Ana Sayfa"
    },
    ta = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Qo\u2018llanma",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Yordam markazi",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Jonli chat",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    aa = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "Qo\u2018llanma",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Yordam markazi",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Jonli chat",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Portfolio",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Portfolio",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Home",
        "iLgQUlg730+2e6m3qEq84A#Value": "Home"
    },
    ra = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "H\u01B0\u1EDBng d\u1EABn",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "Trung t\xE2m tr\u1EE3 gi\xFAp",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "Tr\xF2 chuy\u1EC7n tr\u1EF1c ti\u1EBFp",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "Danh m\u1EE5c",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "Danh m\u1EE5c",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "Trang ch\u1EE7",
        "iLgQUlg730+2e6m3qEq84A#Value": "Trang ch\u1EE7"
    },
    na = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u6307\u5357",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u5E2E\u52A9\u4E2D\u5FC3",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u5728\u7EBF\u804A\u5929",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u6295\u8D44\u7EC4\u5408",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u6295\u8D44\u7EC4\u5408",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u9996\u9875",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u9996\u9875"
    },
    ia = {
        "lRE5S5ijn0+24ov6_Y9MqQ#Value": "\u6307\u5357",
        "Hr9pEb9L8UCEbKHDoV9CAw#Value": "\u5E6B\u52A9\u4E2D\u5FC3",
        "l0474P4P6kWbf1z_t6CGLQ#Value": "WhatsApp",
        "Ddu_nawJ1kuu0lMvJlC3Nw#Value": "\u5728\u7DDA\u804A\u5929",
        "Laxdb8JCWE29KKy3tpTcnw#Value": "\u6295\u8CC7\u7D44\u5408",
        "Z+YIgB7pNUGv5J49EHoBLg#Value": "\u6295\u8CC7\u7D44\u5408",
        "JzcAlGFtKkmAjizu_OZW7g#Value": "\u9996\u9801",
        "iLgQUlg730+2e6m3qEq84A#Value": "\u9996\u9801"
    },
    pt = {
        "ar-001": {
            translations: Nt,
            isRTL: !0
        },
        "bn-BD": {
            translations: Mt,
            isRTL: !1
        },
        "de-DE": {
            translations: Gt,
            isRTL: !1
        },
        "es-ES": {
            translations: Ut,
            isRTL: !1
        },
        "fr-FR": {
            translations: Wt,
            isRTL: !1
        },
        "it-IT": {
            translations: Bt,
            isRTL: !1
        },
        "km-KH": {
            translations: Jt,
            isRTL: !1
        },
        "ko-KR": {
            translations: zt,
            isRTL: !1
        },
        "mn-MN": {
            translations: qt,
            isRTL: !1
        },
        "pl-PL": {
            translations: jt,
            isRTL: !1
        },
        "pt-PT": {
            translations: Kt,
            isRTL: !1
        },
        "ru-RU": {
            translations: Qt,
            isRTL: !1
        },
        "si-LK": {
            translations: Xt,
            isRTL: !1
        },
        "sw-KE": {
            translations: Yt,
            isRTL: !1
        },
        "ta-IN": {
            translations: Zt,
            isRTL: !1
        },
        "th-TH": {
            translations: $t,
            isRTL: !1
        },
        "tr-TR": {
            translations: ea,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: ta,
            isRTL: !1
        },
        "uz-UZ": {
            translations: aa,
            isRTL: !1
        },
        "vi-VN": {
            translations: ra,
            isRTL: !1
        },
        "zh-CN": {
            translations: na,
            isRTL: !1
        },
        "zh-TW": {
            translations: ia,
            isRTL: !1
        }
    };

function Ke(v, n, s, e) {
    sessionStorage.setItem("email", v.email || "")
}
i(Ke, "default");

function Qe(v, n, s) {
    var e;
    (e = window.__driverJSInstance) == null || e.drive()
}
i(Qe, "default");

function Xe(v, n, s, e) {
    let a = new URLSearchParams(window.location.search).get("lang"),
        d = new URL(window.location);
    d.searchParams.delete("lang"), window.history.replaceState({}, "", d.toString()), v.LanguageCode = a || ""
}
i(Xe, "default");

function Ye(v, n, s) {
    window.open(`https://trade.deriv.com/help-centre?lang=${v.LanguageMapper().CharCode}`)
}
i(Ye, "default");
var u = V; {
    let n = class n extends u.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, pt);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "0ac56334-6316-4577-8c8d-c8db5ee45771"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        if (a.ensureControllerAlive("OnInitialize"), e = a.callContext(e), !(_.savedAuthInfo$Action(e).responseOut.dataAttr.userAttr.emailAttr === u.BuiltinFunctions.nullTextIdentifier() || _.savedAuthInfo$Action(e).responseOut.dataAttr.userAttr.user_metadataAttr.user_set_passwordAttr)) return u.Logger.startActiveSpan("setSessionStorage", function(m) {
                            m && (m.setAttribute("code.function", "setSessionStorage"), m.setAttribute("outsystems.function.key", "74fb455e-3551-4c23-b169-d989d0442158"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(Ke, "setSessionStorage", "OnInitialize", {
                                    email: u.DataConversion.JSNodeParamConverter.to(u.BuiltinFunctions.trim(_.savedAuthInfo$Action(e).responseOut.dataAttr.userAttr.emailAttr), u.DataTypes.DataTypes.Text)
                                }, function(h) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), u.Navigation.navigateTo(u.Navigation.generateScreenURL("dashboard", "set-password", {
                            source: u.DataConversion.ServerDataConverter.to("login", u.DataTypes.DataTypes.Text)
                        }), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        get _guideOnClick$Action() {
            return this.hasOwnProperty("__guideOnClick$Action") || (this.__guideOnClick$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("GuideOnClick", function(o) {
                    o && (o.setAttribute("code.function", "GuideOnClick"), o.setAttribute("outsystems.function.key", "3c63ee15-aa1c-4bfe-8277-25ac7dd1512a"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("GuideOnClick"), e = a.callContext(e), u.Logger.startActiveSpan("Drive", function(m) {
                            m && (m.setAttribute("code.function", "Drive"), m.setAttribute("outsystems.function.key", "c52d8f44-111b-458a-8099-c92419c6a7d7"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(Qe, "Drive", "GuideOnClick", null, function(h) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__guideOnClick$Action
        }
        set _guideOnClick$Action(e) {
            this.__guideOnClick$Action = e
        }
        get _settingUsersLanguage$Action() {
            return this.hasOwnProperty("__settingUsersLanguage$Action") || (this.__settingUsersLanguage$Action = function(e, t) {
                var a = this.model,
                    d = this.controller,
                    o = this.idService;
                return u.Logger.startActiveSpan("SettingUsersLanguage", function(m) {
                    return m && (m.setAttribute("code.function", "SettingUsersLanguage"), m.setAttribute("outsystems.function.key", "58d6be08-1efa-4029-a51a-0936c7f0aa96"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        d.ensureControllerAlive("SettingUsersLanguage"), t = d.callContext(t);
                        var h = new u.DataTypes.VariableHolder(new(d.constructor.getVariableGroupType("dashboard.Layouts.LayoutBase.SettingUsersLanguage$vars")));
                        h.value.preferredLanguageInLocal = e;
                        var r = new u.DataTypes.VariableHolder,
                            y = new u.DataTypes.VariableHolder,
                            A = new u.DataTypes.VariableHolder,
                            g = new u.DataTypes.VariableHolder,
                            f = new u.DataTypes.VariableHolder,
                            Ht = new u.DataTypes.VariableHolder,
                            Z = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return Z.value = u.Logger.startActiveSpan("GetLanguageCode", function(w) {
                                w && (w.setAttribute("code.function", "GetLanguageCode"), w.setAttribute("outsystems.function.key", "8fd83ff7-8311-4eaa-bc91-c7fe612fbcbe"), w.setAttribute("outsystems.function.owner.name", "dashboard"), w.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), w.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return d.safeExecuteJSNode(Xe, "GetLanguageCode", "SettingUsersLanguage", {
                                        LanguageCode: u.DataConversion.JSNodeParamConverter.to("", u.DataTypes.DataTypes.Text)
                                    }, function(Ft) {
                                        var ot = new(d.constructor.getVariableGroupType("dashboard.Layouts.LayoutBase.SettingUsersLanguage$getLanguageCodeJSResult"));
                                        return ot.languageCodeOut = u.DataConversion.JSNodeParamConverter.from(Ft.LanguageCode, u.DataTypes.DataTypes.Text), ot
                                    }, {}, {})
                                } finally {
                                    w && w.end()
                                }
                            }, 1), u.Flow.executeSequence(function() {
                                return Z.value.languageCodeOut !== u.BuiltinFunctions.nullTextIdentifier() ? (a.flush(), _.getSupportedLanguages$Action(t).then(function(w) {
                                    A.value = w
                                }).then(function() {
                                    te.consoleLog$Action("url languagecode: " + Z.value.languageCodeOut, 0, t), g.value = u.SystemActions.listFilter(A.value.languagesOut, function(w) {
                                        return w.languageCodeAttr === Z.value.languageCodeOut
                                    }, t)
                                }).then(function() {
                                    return u.Flow.executeSequence(function() {
                                        if (G.getLanguage() !== g.value.filteredListOut.getCurrent(t.iterationContext).codeAttr) return G.setLanguage(g.value.filteredListOut.getCurrent(t.iterationContext).codeAttr === u.BuiltinFunctions.nullTextIdentifier() ? "en-EN" : g.value.filteredListOut.getCurrent(t.iterationContext).codeAttr), u.SystemActions.setCurrentLocale(g.value.filteredListOut.getCurrent(t.iterationContext).codeAttr === u.BuiltinFunctions.nullTextIdentifier() ? "en-EN" : g.value.filteredListOut.getCurrent(t.iterationContext).codeAttr, t), f.value = _.languageMapper$Action(!1, Z.value.languageCodeOut, t), te.consoleLog$Action("calling here...." + f.value.charCodeOut, 0, t), a.flush(), _.pUT_PreferredLanguage$Action((function() {
                                            var w = new lt;
                                            return w.preferred_languageAttr = u.BuiltinFunctions.toLower(f.value.charCodeOut), w
                                        })(), t).then(function(w) {
                                            Ht.value = w
                                        })
                                    })
                                })) : (a.flush(), _.getSupportedLanguages$Action(t).then(function(w) {
                                    y.value = w
                                }).then(function() {
                                    r.value = u.SystemActions.listFilter(y.value.languagesOut, function(w) {
                                        return w.languageCodeAttr === h.value.preferredLanguageInLocal
                                    }, t)
                                }).then(function() {
                                    G.getLanguage() !== r.value.filteredListOut.getCurrent(t.iterationContext).codeAttr && (G.setLanguage(r.value.filteredListOut.getCurrent(t.iterationContext).codeAttr === u.BuiltinFunctions.nullTextIdentifier() ? "en-EN" : r.value.filteredListOut.getCurrent(t.iterationContext).codeAttr), u.SystemActions.setCurrentLocale(r.value.filteredListOut.getCurrent(t.iterationContext).codeAttr === u.BuiltinFunctions.nullTextIdentifier() ? "en-EN" : r.value.filteredListOut.getCurrent(t.iterationContext).codeAttr, t))
                                }))
                            })
                        })
                    }, function() {
                        m && m.end()
                    })
                }, 1)
            }), this.__settingUsersLanguage$Action
        }
        set _settingUsersLanguage$Action(e) {
            this.__settingUsersLanguage$Action = e
        }
        get _connectIntercom$Action() {
            return this.hasOwnProperty("__connectIntercom$Action") || (this.__connectIntercom$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("ConnectIntercom", function(o) {
                    return o && (o.setAttribute("code.function", "ConnectIntercom"), o.setAttribute("outsystems.function.key", "607c5bff-42b5-4548-acfe-177b7279c170"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return a.ensureControllerAlive("ConnectIntercom"), e = a.callContext(e), u.Flow.executeAsyncFlow(function() {
                            return t.flush(), _.openIntercom$Action(e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__connectIntercom$Action
        }
        set _connectIntercom$Action(e) {
            this.__connectIntercom$Action = e
        }
        get _redirectToHelpCenter$Action() {
            return this.hasOwnProperty("__redirectToHelpCenter$Action") || (this.__redirectToHelpCenter$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("RedirectToHelpCenter", function(o) {
                    o && (o.setAttribute("code.function", "RedirectToHelpCenter"), o.setAttribute("outsystems.function.key", "7329cadb-2dd9-421d-9fd1-4a4c993884af"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("RedirectToHelpCenter"), e = a.callContext(e), u.Logger.startActiveSpan("JavaScript1", function(m) {
                            m && (m.setAttribute("code.function", "JavaScript1"), m.setAttribute("outsystems.function.key", "0916ef0e-6a6c-44e5-af57-c5d669e3f826"), m.setAttribute("outsystems.function.owner.name", "dashboard"), m.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return a.safeExecuteJSNode(Ye, "JavaScript1", "RedirectToHelpCenter", null, function(h) {}, {
                                    LanguageMapper: _.clientActionProxies.languageMapper$Action
                                }, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__redirectToHelpCenter$Action
        }
        set _redirectToHelpCenter$Action(e) {
            this.__redirectToHelpCenter$Action = e
        }
        get _connectWhatsApp$Action() {
            return this.hasOwnProperty("__connectWhatsApp$Action") || (this.__connectWhatsApp$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("ConnectWhatsApp", function(o) {
                    o && (o.setAttribute("code.function", "ConnectWhatsApp"), o.setAttribute("outsystems.function.key", "a7e82cd7-cfc1-47df-b0fd-de121fb1e802"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ConnectWhatsApp"), e = a.callContext(e), _.whatsAppChat$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__connectWhatsApp$Action
        }
        set _connectWhatsApp$Action(e) {
            this.__connectWhatsApp$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "ac2bf3eb-805e-44d2-842d-17682b9bece4"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var m = new u.DataTypes.VariableHolder,
                            h = new u.DataTypes.VariableHolder;
                        return u.Flow.executeAsyncFlow(function() {
                            return t.flush(), k.layoutReady$Action(e).then(function() {
                                return u.Flow.executeSequence(function() {
                                    if (_.featureFlagValueByName$Action("ORY_AUTHENTHICATION", e).isEnabledOut) return t.flush(), _.oRY_GetSession$Action(e).then(function(r) {
                                        h.value = r
                                    }).then(function() {
                                        if (h.value.isErrorOut && u.BuiltinFunctions.index(u.BuiltinFunctions.getBookmarkableURL(), "/dev/flags", 0, !1, !0) === -1) return u.Flow.returnAsync(u.Navigation.navigateTo(u.Navigation.generateScreenURL("dashboard", "ory/login", {}), u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default), e, !0));
                                        t.variables.isLoadingVar = !1
                                    })
                                })
                            }).then(function() {
                                return t.flush(), _.gET_PII_ClientProfile$Action(e).then(function(r) {
                                    m.value = r
                                }).then(function() {
                                    return t.variables.pII_ClientProfileInformationVar = m.value.responseOut.dataAttr, a._settingUsersLanguage$Action(m.value.responseOut.dataAttr.preferred_languageAttr, e)
                                }).then(function() {
                                    return t.flush(), _.initalizeIntercom$Action(e)
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return u.Logger.startActiveSpan("OnDestroy", function(o) {
                    o && (o.setAttribute("code.function", "OnDestroy"), o.setAttribute("outsystems.function.key", "ffe88366-a822-4fb8-98f8-67b750d9102e"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("OnDestroy"), e = a.callContext(e), k.layoutDestroy$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onInitialize$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnInitialize__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnInitialize"), a.setAttribute("outsystems.function.key", "0ac56334-6316-4577-8c8d-c8db5ee45771"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onInitialize$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        guideOnClick$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("GuideOnClick__proxy", function(a) {
                a && (a.setAttribute("code.function", "GuideOnClick"), a.setAttribute("outsystems.function.key", "3c63ee15-aa1c-4bfe-8277-25ac7dd1512a"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._guideOnClick$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        settingUsersLanguage$Action(e, t) {
            var a = this.controller;
            return u.Logger.startActiveSpan("SettingUsersLanguage__proxy", function(d) {
                return d && (d.setAttribute("code.function", "SettingUsersLanguage"), d.setAttribute("outsystems.function.key", "58d6be08-1efa-4029-a51a-0936c7f0aa96"), d.setAttribute("outsystems.function.owner.name", "dashboard"), d.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), d.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._settingUsersLanguage$Action, t, e)
                }, function() {
                    d && d.end()
                })
            }, 0)
        }
        connectIntercom$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("ConnectIntercom__proxy", function(a) {
                return a && (a.setAttribute("code.function", "ConnectIntercom"), a.setAttribute("outsystems.function.key", "607c5bff-42b5-4548-acfe-177b7279c170"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._connectIntercom$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        redirectToHelpCenter$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("RedirectToHelpCenter__proxy", function(a) {
                a && (a.setAttribute("code.function", "RedirectToHelpCenter"), a.setAttribute("outsystems.function.key", "7329cadb-2dd9-421d-9fd1-4a4c993884af"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._redirectToHelpCenter$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        connectWhatsApp$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("ConnectWhatsApp__proxy", function(a) {
                a && (a.setAttribute("code.function", "ConnectWhatsApp"), a.setAttribute("outsystems.function.key", "a7e82cd7-cfc1-47df-b0fd-de121fb1e802"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._connectWhatsApp$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "ac2bf3eb-805e-44d2-842d-17682b9bece4"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var t = this.controller;
            return u.Logger.startActiveSpan("OnDestroy__proxy", function(a) {
                a && (a.setAttribute("code.function", "OnDestroy"), a.setAttribute("outsystems.function.key", "ffe88366-a822-4fb8-98f8-67b750d9102e"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onDestroy$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    d = this.idService;
                return t.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    d = this.idService;
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
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var t = this.controller,
                    a = this.model,
                    d = this.idService;
                return t.onDestroy$Action(e)
            }), this._onDestroyEventHandler
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
            return _.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let v = n;
    ge = v, ge.registerVariableGroupType("dashboard.Layouts.LayoutBase.SettingUsersLanguage$vars", [{
        name: "PreferredLanguage",
        attrName: "preferredLanguageInLocal",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), ge.registerVariableGroupType("dashboard.Layouts.LayoutBase.SettingUsersLanguage$getLanguageCodeJSResult", [{
        name: "LanguageCode",
        attrName: "languageCodeOut",
        mandatory: !0,
        dataType: u.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var ge, St = new u.Controller.ControllerFactory(ge, W);
var $e = $(ee());
var Ct = {};
var K = V; {
    let n = class n extends K.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ct);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return K.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "a04f2669-beb8-4068-b7d8-1406e779b198"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                        return a.ensureControllerAlive("OnReady"), e = a.callContext(e), K.Flow.executeAsyncFlow(function() {
                            return t.flush(), _.initializeNovu$Action(e)
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var t = this.controller;
            return K.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "a04f2669-beb8-4068-b7d8-1406e779b198"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), K.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
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
                    a = this.model,
                    d = this.idService;
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return _.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let v = n;
    Vt = v
}
var Vt, At = new K.Controller.ControllerFactory(Vt, W);
var rn = O.PlaceholderContent,
    nn = O.IteratorPlaceholderContent,
    sa = i(function() {
        var v = x(function(n) {
            var s = n.model,
                e = n.controller,
                t = n.controller.idService,
                a = e.validationService,
                d = e.callContext(),
                o = N,
                m = M,
                h = {
                    props: n,
                    validateWidget: i(function(f) {
                        n.validateWidget(n, f)
                    }, "validateWidget")
                },
                r = s,
                y = F,
                A = H,
                g = L();
            return $e.createElement("div", n.rootNodeProperties, $e.createElement(b, {
                align: 0,
                animate: !1,
                style: "notifications-container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "NotificationsContainer"
                },
                _widgetRecordProvider: r
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "Notifications",
                    functionKey: "14eb5383-c002-4c71-9d47-c66776844587",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.Notifications",
            modelFactory: dt,
            controllerFactory: At
        });
        return v.getCssDependencies = function() {
            return ["css/dashboard.Common.Notifications.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.ReactLibs.js"]
        }, v.getBlocks = function() {
            return []
        }, v
    }, "componentFactory"),
    tt = sa();
var Tt = $(ee());
var la = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0625\u0630\u0627 \u0643\u0646\u062A \u0628\u062D\u0627\u062C\u0629 \u0625\u0644\u0649 \u0627\u0644\u062A\u0639\u0644\u0645 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649\u060C \u0627\u062E\u062A\u0631 Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u0641\u0647\u0645\u062A",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u064A\u0645\u0643\u0646\u0643 \u062F\u0627\u0626\u0645\u064B\u0627 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0627\u0644\u062F\u0644\u064A\u0644 \u0641\u064A \u0642\u0633\u0645 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u062A\u062D\u062A Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0627\u0643\u062A\u0634\u0641 \u0643\u0644 \u0634\u064A\u0621 \u0645\u062A\u0627\u062D \u0644\u0643.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u062A\u062F\u0627\u0648\u0644 CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0643\u062B\u0631 \u0645\u0646 80 \u0623\u0635\u0644\u064B\u0627\u060C \u0645\u0646 \u0627\u0644\u0641\u0648\u0631\u0643\u0633 \u0648\u0627\u0644\u0623\u0633\u0647\u0645 \u0625\u0644\u0649 \u0627\u0644\u0633\u0644\u0639 \u0648\u0645\u0624\u0634\u0631\u0627\u062A Deriv \u0627\u0644\u062D\u0635\u0631\u064A\u0629.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u0631\u062C\u0648\u0639",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0643\u0644 \u0634\u064A\u0621 \u0641\u064A \u0645\u062D\u0641\u0638\u0629 \u0648\u0627\u062D\u062F\u0629",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0623\u0639\u062F \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062F\u0644\u064A\u0644",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0625\u062F\u0627\u0631\u0629 \u0645\u062D\u0627\u0641\u0638\u0643\u060C \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u062A\u062F\u0627\u0648\u0644 \u0648\u062C\u0645\u064A\u0639 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u0643 \u0628\u0633\u0631\u0639\u0629 \u0648\u0633\u0647\u0648\u0644\u0629.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0639\u062F \u0625\u0644\u0649 \u0647\u0646\u0627 \u0641\u064A \u0623\u064A \u0648\u0642\u062A",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0645\u0639 \u0631\u0641\u0639 \u0645\u0627\u0644\u064A \u064A\u0635\u0644 \u0625\u0644\u0649 1:1000 \u0639\u0644\u0649 MT5."
    },
    ua = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0986\u09AA\u09A8\u09BF \u09AF\u09A6\u09BF \u0986\u09AC\u09BE\u09B0 \u09B6\u09BF\u0996\u09A4\u09C7 \u099A\u09BE\u09A8, \u0997\u09BE\u0987\u09A1 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u09AC\u09C1\u099D\u09C7\u099B\u09BF",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u0986\u09AA\u09A8\u09BF \u09B8\u09B0\u09CD\u09AC\u09A6\u09BE Resources \u098F\u09B0 \u0985\u09A7\u09C0\u09A8\u09C7 Guide-\u098F \u0997\u09BE\u0987\u09A1\u099F\u09BF \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8\u0964",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u09AC\u09BF\u0995\u09B2\u09CD\u09AA\u09B8\u09AE\u09C2\u09B9 \u099F\u09CD\u09B0\u09C7\u09A1 \u0995\u09B0\u09C1\u09A8",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0986\u09AA\u09A8\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u0989\u09A8\u09CD\u09AE\u09C1\u0995\u09CD\u09A4 \u09B8\u09AE\u09B8\u09CD\u09A4 \u0995\u09BF\u099B\u09C1 \u0986\u09AC\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8\u0964",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \u099F\u09CD\u09B0\u09C7\u09A1 \u0995\u09B0\u09C1\u09A8",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "80+ \u09B8\u09AE\u09CD\u09AA\u09A6 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u0995\u09B0\u09C1\u09A8, \u09AB\u09B0\u09C7\u0995\u09CD\u09B8 \u098F\u09AC\u0982 \u09B8\u09CD\u099F\u0995 \u09A5\u09C7\u0995\u09C7 \u0995\u09AE\u09CB\u09A1\u09BF\u099F\u09BF\u099C \u0993 \u098F\u0995\u099A\u09C7\u099F\u09BF\u09AF\u09BC\u09BE Derived \u09B8\u09C2\u099A\u0995\u09C7\u09B0\u0993\u0964",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u09AA\u09BF\u099B\u09A8\u09C7",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u098F\u0995\u099F\u09BF \u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993\u09A4\u09C7 \u09B8\u09AC\u0995\u09BF\u099B\u09C1",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0986\u09B0\u0993 \u0985\u09A8\u09CD\u09AC\u09C7\u09B7\u09A3 \u0995\u09B0\u09C1\u09A8",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0997\u09BE\u0987\u09A1\u099F\u09BF \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0986\u09AA\u09A8\u09BE\u09B0 Wallets, \u099F\u09CD\u09B0\u09C7\u09A1\u09BF\u0982 \u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F \u098F\u09AC\u0982 \u09B8\u09AC \u09B2\u09C7\u09A8\u09A6\u09C7\u09A8 \u09A6\u09CD\u09B0\u09C1\u09A4 \u0993 \u09B8\u09B9\u099C\u09C7 \u09AA\u09B0\u09BF\u099A\u09BE\u09B2\u09A8\u09BE \u0995\u09B0\u09C1\u09A8\u0964",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u09AF\u09C7 \u0995\u09CB\u09A8\u0993 \u09B8\u09AE\u09AF\u09BC \u09AB\u09BF\u09B0\u09C7 \u0986\u09B8\u09C1\u09A8",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5-\u098F 1:1000 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B2\u09BF\u09AD\u09BE\u09B0\u09C7\u099C \u09B8\u09B9 \u09AC\u09BF\u09B6\u09CD\u09AC\u09AC\u09CD\u09AF\u09BE\u09AA\u09C0 \u09AE\u09BE\u09B0\u09CD\u0995\u09C7\u099F\u09C7 \u09AA\u09CD\u09B0\u09AC\u09C7\u09B6 \u0995\u09B0\u09C1\u09A8\u0964"
    },
    da = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Wenn du erneut lernen m\xF6chtest, w\xE4hle Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Verstanden",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Du kannst den Guide immer wieder in Resources unter Guide aufrufen.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Weiter",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Handelsoptionen",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Entdecken Sie alles, was Ihnen zur Verf\xFCgung steht.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFDs handeln",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Zugriff auf \xFCber 80 Assets, von Forex und Aktien bis hin zu Commodities und exklusiven Derived Indices.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Zur\xFCck",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Alles in einem Portfolio",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Mehr entdecken",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Den Guide neu starten",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Verwalten Sie Ihre Wallets, Handelskonten und alle Transaktionen sofort und einfach.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Kommen Sie jederzeit zur\xFCck",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Greifen Sie auf globale M\xE4rkte mit einem Hebel von bis zu 1:1000 auf MT5 zu."
    },
    ca = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Si necesitas aprender de nuevo, selecciona Gu\xEDa.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Entendido",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Siempre puedes volver a la gu\xEDa en Recursos bajo Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Siguiente",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Opciones de Trading",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Descubre todo lo que tienes a tu disposici\xF3n.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Operar con CFDs",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Accede a m\xE1s de 80 activos, desde Forex y acciones hasta commodities e \xEDndices derivados exclusivos.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Atr\xE1s",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Todo en un portafolio",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Explora m\xE1s",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Reiniciar la gu\xEDa",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Administra tus Wallets, cuentas de trading y todas tus transacciones de forma instant\xE1nea y f\xE1cil.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Vuelve cuando quieras",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Accede a mercados globales con apalancamiento de hasta 1:1000 en MT5."
    },
    va = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Si vous devez apprendre \xE0 nouveau, s\xE9lectionnez Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Compris",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Vous pouvez toujours revoir le guide dans Resources sous Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Suivant",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Options de Trading",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "D\xE9couvrez tout ce qui est \xE0 votre disposition.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Trader des CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Acc\xE9dez \xE0 plus de 80 actifs, du Forex et des actions aux commodities et indices d\xE9riv\xE9s exclusifs.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Retour",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Tout en un seul portefeuille",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Explorez plus",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Red\xE9marrer le guide",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "G\xE9rez vos portefeuilles, comptes de trading et toutes vos transactions instantan\xE9ment et facilement.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Revenez quand vous voulez",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Acc\xE9dez aux march\xE9s mondiaux avec un effet de levier jusqu\u2019\xE0 1:1000 sur MT5."
    },
    ma = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Se devi imparare di nuovo, seleziona Guida.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Capito",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Puoi sempre rivedere la guida in Resources sotto Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Avanti",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Opzioni di trading",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Scopri tutto ci\xF2 che hai a disposizione.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Negozia CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Accedi a oltre 80 asset, dal Forex e azioni alle materie prime e indici derivati esclusivi.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Indietro",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Tutto in un portafoglio",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Scopri di pi\xF9",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Riavvia la guida",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Gestisci i tuoi Wallet, account di trading e tutte le transazioni istantaneamente e facilmente.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Torna quando vuoi",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Accedi ai mercati globali con leva fino a 1:1000 su MT5."
    },
    fa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u1794\u17D2\u179A\u179F\u17B7\u1793\u1794\u17BE\u17A2\u17D2\u1793\u1780\u1785\u1784\u17CB\u179A\u17C0\u1793\u1798\u17D2\u178F\u1784\u1791\u17C0\u178F, \u1787\u17D2\u179A\u17BE\u179F Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u1794\u17B6\u1793\u17A0\u17BE\u1799",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u17A2\u17D2\u1793\u1780\u17A2\u17B6\u1785\u1798\u17BE\u179B\u1798\u1782\u17D2\u1782\u17BB\u1791\u17D2\u1791\u17C1\u179F\u1780\u17CD\u17A1\u17BE\u1784\u179C\u17B7\u1789\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 Resources \u1780\u17D2\u179A\u17C4\u1798 Guide \u1794\u17B6\u1793\u1787\u17B6\u1793\u17B7\u1785\u17D2\u1785\u17D4",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u1794\u1793\u17D2\u178F",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u1787\u1798\u17D2\u179A\u17BE\u179F\u1787\u17BD\u1789\u178A\u17BC\u179A",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780\u17A2\u17D2\u179C\u17B8\u17D7\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u178A\u17C2\u179B\u1798\u17B6\u1793\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u17A2\u17D2\u1793\u1780\u17D4",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u1787\u17B6\u1798\u17BD\u1799 CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1794\u17B6\u1793\u179B\u17BE\u179F 80 \u17AF\u1780\u179F\u17B6\u179A, \u1796\u17B8 Forex \u1793\u17B7\u1784\u1797\u17B6\u1782\u17A0\u17CA\u17BB\u1793\u178A\u179B\u17CB Commodities \u1793\u17B7\u1784\u1785\u17B7\u1793\u17D2\u178F\u17B6\u178A Derived \u178A\u17C2\u179B\u1798\u17B6\u1793\u17A2\u178F\u17D2\u1790\u1794\u17D2\u179A\u1799\u17C4\u1787\u1793\u17CD\u17D4",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u178F\u17D2\u179A\u17A1\u1794\u17CB\u1798\u1780\u1780\u17D2\u179A\u17C4\u1799",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u17A2\u17D2\u179C\u17B8\u17D7\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 Portfolio \u1798\u17BD\u1799",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u179F\u17D2\u179C\u17C2\u1784\u179A\u1780\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1794\u1793\u17D2\u1790\u17C2\u1798",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u1798\u1782\u17D2\u1782\u17BB\u1791\u17D2\u1791\u17C1\u179F\u1780\u17CD\u17A1\u17BE\u1784\u179C\u17B7\u1789",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784 Wallets, \u1782\u178E\u1793\u17B8\u1787\u17BD\u1789\u178A\u17BC\u179A \u1793\u17B7\u1784\u1794\u17D2\u179A\u178F\u17B7\u1794\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB\u179A\u1794\u179F\u17CB\u17A2\u17D2\u1793\u1780\u1794\u17B6\u1793\u1797\u17D2\u179B\u17B6\u1798\u17D7 \u1793\u17B7\u1784\u1784\u17B6\u1799\u179F\u17D2\u179A\u17BD\u179B\u17D4",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u1798\u1780\u179C\u17B7\u1789\u1794\u17B6\u1793\u0E17\u0E38\u0E01\u200B\u1796\u17C1\u179B",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u1785\u17BC\u179B\u1794\u17D2\u179A\u17BE\u1791\u17B8\u1795\u17D2\u179F\u17B6\u179A\u1796\u17B7\u1797\u1796\u179B\u17C4\u1780\u1787\u17B6\u1798\u17BD\u1799 leverage \u178A\u179B\u17CB 1:1000 \u1793\u17C5\u179B\u17BE MT5\u17D4"
    },
    ga = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\uB2E4\uC2DC \uBC30\uC6B0\uB294 \uAC83\uC774 \uD544\uC694\uD558\uBA74, \uAC00\uC774\uB4DC \uC120\uD0DD\uD558\uC138\uC694.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\uC54C\uC558\uC5B4\uC694",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\uC5B8\uC81C\uB4E0 Resources\uC758 Guide \uC139\uC158\uC5D0\uC11C \uAC00\uC774\uB4DC\uB97C \uB2E4\uC2DC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\uB2E4\uC74C",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\uAC70\uB798 \uC635\uC158",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uBAA8\uB4E0 \uAC83\uC744 \uCC3E\uC544\uBCF4\uC138\uC694.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \uAC70\uB798",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "80\uAC1C \uC774\uC0C1\uC758 \uC790\uC0B0\uC5D0 \uC811\uADFC\uD558\uC138\uC694 \u2014 Forex, \uC8FC\uC2DD, \uC6D0\uC790\uC7AC \uBC0F \uB3C5\uC810 Derived Indices \uD3EC\uD568.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\uB4A4\uB85C",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\uBAA8\uB4E0 \uAC83\uC744 \uD558\uB098\uC758 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uC5D0",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\uB354 \uC54C\uC544\uBCF4\uAE30",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\uAC00\uC774\uB4DC\uB97C \uC7AC\uC2DC\uC791\uD558\uC138\uC694",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\uC9C0\uAC11, \uAC70\uB798 \uACC4\uC88C \uBC0F \uBAA8\uB4E0 \uAC70\uB798\uB97C \uC989\uC2DC \uADF8\uB9AC\uACE0 \uC27D\uAC8C \uAD00\uB9AC\uD558\uC138\uC694.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\uC5B8\uC81C\uB4E0 \uB3CC\uC544\uC624\uC138\uC694",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5\uC5D0\uC11C \uCD5C\uB300 1:1000 \uB808\uBC84\uB9AC\uC9C0\uB85C \uAE00\uB85C\uBC8C \uC2DC\uC7A5\uC5D0 \uC811\uC18D\uD558\uC138\uC694."
    },
    ha = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0414\u0430\u0445\u0438\u043D \u0441\u0443\u0440\u0430\u0445 \u0445\u044D\u0440\u044D\u0433\u0442\u044D\u0439 \u0431\u043E\u043B, Guide-\u0438\u0439\u0433 \u0441\u043E\u043D\u0433\u043E\u043E\u0440\u043E\u0439.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u041C\u044D\u0434\u043B\u044D\u044D",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u0422\u0430 \u0443\u0434\u0430\u0445\u0433\u04AF\u0439 Resources \u0434\u043E\u0442\u043E\u0440\u0445 Guide-\u0434 \u0445\u044D\u0437\u044D\u044D \u0447 \u0434\u0430\u0445\u0438\u043D \u0445\u044F\u043D\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0442\u043E\u0439.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0414\u0430\u0440\u0430\u0430\u0433\u0438\u0439\u043D",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0410\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u0441\u043E\u043D\u0433\u043E\u043B\u0442",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0411\u04AF\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0438\u0439\u0433 \u043D\u044D\u044D\u043D \u0438\u043B\u0440\u04AF\u04AF\u043B\u044D\u044D\u0440\u044D\u0439.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \u0430\u0440\u0438\u043B\u0436\u0430\u0430",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "80 \u0433\u0430\u0440\u0443\u0439 \u0445\u04E9\u0440\u04E9\u043D\u0433\u04E9, \u0432\u0430\u043B\u044E\u0442, \u0445\u0443\u0432\u044C\u0446\u0430\u0430, \u0422\u04AF\u04AF\u0445\u0438\u0439 \u044D\u0434 \u0431\u0430 \u0442\u044D\u0440\u0433\u04AF\u04AF\u043B\u044D\u0433\u0447 Deriv \u04AF\u0437\u04AF\u04AF\u043B\u044D\u043B\u0442\u04AF\u04AF\u0434\u044D\u0434 \u0445\u0430\u043D\u0434\u0430\u0445 \u0431\u043E\u043B\u043E\u043C\u0436\u0442\u043E\u0439.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u0411\u0443\u0446\u0430\u0445",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0411\u04AF\u0445 \u0437\u04AF\u0439\u043B \u043D\u044D\u0433 \u0445\u044D\u0442\u044D\u0432\u0447\u0438\u043D\u0434",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0418\u043B\u04AF\u04AF \u0438\u0445\u0438\u0439\u0433 \u0441\u0443\u0434\u043B\u0430\u0430\u0440\u0430\u0439",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0413\u0430\u0439\u0434\u0430\u0433 \u0434\u0430\u0445\u0438\u043D \u044D\u0445\u043B\u04AF\u04AF\u043B\u044D\u0445",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0422\u0430\u043D\u044B Wallets, \u0430\u0440\u0438\u043B\u0436\u0430\u0430\u043D\u044B \u0434\u0430\u043D\u0441 \u0431\u043E\u043B\u043E\u043D \u0431\u04AF\u0445 \u0433\u04AF\u0439\u043B\u0433\u044D\u044D\u0433 \u0434\u0430\u0440\u0443\u0439 \u0445\u0443\u0440\u0434\u0430\u043D \u0445\u044F\u043B\u0431\u0430\u0440\u0445\u0430\u043D \u0443\u0434\u0438\u0440\u0434\u0430\u0445.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0425\u044D\u0437\u044D\u044D \u0447 \u0438\u0440\u044D\u044D\u0440\u044D\u0439",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5 \u0434\u044D\u044D\u0440 1:1000 \u0445\u04AF\u0440\u0442\u044D\u043B\u0445 \u04E9\u0441\u04E9\u0440\u0445 with \u0434\u044D\u043B\u0445\u0438\u0439\u043D \u0437\u0430\u0445 \u0437\u044D\u044D\u043B\u0434 \u043D\u044D\u0432\u0442\u0440\u044D\u0445."
    },
    _a = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Je\u015Bli musisz si\u0119 nauczy\u0107 ponownie, wybierz Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Zrozumia\u0142em",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Mo\u017Cesz zawsze ponownie zajrze\u0107 do przewodnika w Resources pod Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Dalej",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Opcje handlowe",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Odkryj wszystko, co jest dost\u0119pne dla Ciebie.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Handluj CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Uzyskaj dost\u0119p do ponad 80 aktyw\xF3w, od Forex i akcji po surowce i ekskluzywne Derived Indices.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Wstecz",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Wszystko w jednym portfelu",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Odkryj wi\u0119cej",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Zrestartuj przewodnik",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Zarz\u0105dzaj swoimi portfelami, kontami handlowymi i wszystkimi transakcjami szybko i \u0142atwo.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Wr\xF3\u0107 kiedy chcesz",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Uzyskaj dost\u0119p do rynk\xF3w globalnych z d\u017Awigni\u0105 do 1:1000 na MT5."
    },
    ba = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Se precisa aprender novamente, selecione Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Entendido",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Sempre pode rever o guia em Resources sob Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Pr\xF3ximo",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Op\xE7\xF5es de negocia\xE7\xE3o",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Descubra tudo o que est\xE1 dispon\xEDvel para si.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Negocie CFDs",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Aceda a mais de 80 ativos, desde Forex e a\xE7\xF5es at\xE9 commodities e \xEDndices derivados exclusivos.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Voltar",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Tudo numa s\xF3 carteira",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Explore mais",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Reiniciar o guia",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Gerencie as suas Wallets, contas de trading e todas as suas transa\xE7\xF5es de forma r\xE1pida e f\xE1cil.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Volte sempre que quiser",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Aceda aos mercados globais com uma alavancagem de at\xE9 1:1000 no MT5."
    },
    ya = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0415\u0441\u043B\u0438 \u043D\u0443\u0436\u043D\u043E \u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u041F\u043E\u043D\u044F\u0442\u043D\u043E",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0443 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 Resources \u0432 Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0414\u0430\u043B\u0435\u0435",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0432\u0441\u0435, \u0447\u0442\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0441.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u0422\u043E\u0440\u0433\u043E\u0432\u043B\u044F CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0431\u043E\u043B\u0435\u0435 \u0447\u0435\u043C 80 \u0430\u043A\u0442\u0438\u0432\u0430\u043C \u2014 \u043E\u0442 Forex \u0438 \u0430\u043A\u0446\u0438\u0439 \u0434\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0445 Derived Indices.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u041D\u0430\u0437\u0430\u0434",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0412\u0441\u0451 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0418\u0441\u0441\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u0432\u043E\u0438\u043C\u0438 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430\u043C\u0438, \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u043C\u0438 \u0441\u0447\u0435\u0442\u0430\u043C\u0438 \u0438 \u0432\u0441\u0435\u043C\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u0438 \u043B\u0435\u0433\u043A\u043E.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C \u0440\u044B\u043D\u043A\u0430\u043C \u0441 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u043C \u043F\u043B\u0435\u0447\u043E\u043C \u0434\u043E 1:1000 \u043D\u0430 MT5."
    },
    pa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0DB1\u0DD0\u0DC0\u0DAD \u0D89\u0D9C\u0DD9\u0DB1 \u0D9C\u0DD0\u0DB1\u0DD3\u0DB8\u0DA7 \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA \u0DB1\u0DB8\u0DCA, Guide \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u0DAD\u0DDA\u0DBB\u0DD4\u0DAB\u0DCF",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u0D94\u0DB6\u0DA7 Guide \u0DBA\u0DA7\u0DAD\u0DDA Resources \u0DC4\u0DD2 \u0DB8\u0DCF\u0DBB\u0DCA\u0D9C\u0DDD\u0DAF\u0DD9\u0DC1\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0DC3\u0DB8\u0DD3\u0D9A\u0DCA\u0DC2\u0DAB\u0DBA \u0D9A\u0DC5 \u0DC4\u0DD0\u0D9A\u0DD2\u0DBA.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0D8A\u0DC5\u0D9F",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0DC0\u0DCF\u0DAB\u0DD2\u0DA2 \u0DC0\u0DD2\u0D9A\u0DBD\u0DCA\u0DB4",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0D94\u0DB6\u0DA7 \u0DBD\u0DB6\u0DCF \u0D9C\u0DAD \u0DC4\u0DD0\u0D9A\u0DD2 \u0DC3\u0DD2\u0DBA\u0DBD\u0DCA\u0DBD \u0DC3\u0DDC\u0DBA\u0DCF \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \u0DC0\u0DCA\u200D\u0DBA\u0DCF\u0DB4\u0DCF\u0DBB",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Forex, \u0D9A\u0DDC\u0DA7\u0DC3\u0DCA, \u0DB7\u0DCF\u0DAB\u0DCA\u0DA9 \u0DC3\u0DC4 \u0DC0\u0DD2\u0DC1\u0DDA\u0DC2 Derived Indices \u0DBA\u0DA7\u0DAD\u0DDA 80+ \u0DC0\u0DAD\u0DCA\u0D9A\u0DB8\u0DCA \u0DC0\u0DD9\u0DAD \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1 \u0DC0\u0DB1\u0DCA\u0DB1.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u0D86\u0DB4\u0DC3\u0DD4",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DAF\u0DDA \u0D91\u0D9A\u0DCA \u0D86\u0DBA\u0DDD\u0DA2\u0DB1 \u0D9A\u0DC5\u0DB9\u0D9A",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0DAD\u0DC0\u0DAD\u0DCA \u0DAF\u0DD0\u0DB1\u0D9C\u0DB1\u0DCA\u0DB1",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0DB8\u0DCF\u0DBB\u0DCA\u0D9C\u0DDD\u0DAF\u0DD9\u0DC1\u0DBA \u0DB1\u0DD0\u0DC0\u0DAD \u0D86\u0DBB\u0DB8\u0DCA\u0DB7 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0D94\u0DB6\u0DDA Wallets, \u0DC0\u0DD9\u0DC5\u0DB3 \u0D9C\u0DD2\u0DAB\u0DD4\u0DB8\u0DCA \u0DC3\u0DC4 \u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4 \u0D89\u0D9A\u0DCA\u0DB8\u0DB1\u0DD2\u0DB1\u0DCA \u0DC3\u0DC4 \u0DB4\u0DC4\u0DC3\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA \u0D9A\u0DC5\u0DB8\u0DB1\u0DCF\u0D9A\u0DBB\u0DAB\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0D95\u0DB1\u0DD1\u0DB8 \u0DC0\u0DDA\u0DBD\u0DCF\u0DC0\u0D9A \u0D86\u0DB4\u0DC3\u0DD4 \u0D91\u0DB1\u0DCA\u0DB1",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5 \u0DC4\u0DD2 \u0D8B\u0DB4\u0DBB\u0DD2\u0DB8 1:1000 \u0DBD\u0DD2\u0DC0\u0DBB\u0DDA\u0DA2\u0DCA \u0DC3\u0DB8\u0D9F \u0D9C\u0DDD\u0DBD\u0DD3\u0DBA \u0DC0\u0DD9\u0DC5\u0DB3\u0DB4\u0DDC\u0DBD\u0DC0\u0DBD\u0DA7 \u0DB4\u0DCA\u200D\u0DBB\u0DC0\u0DDA\u0DC1 \u0DC0\u0DB1\u0DCA\u0DB1."
    },
    Sa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Ikiwa unahitaji kujifunza tena, chagua Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Nimeelewa",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Daima unaweza kurudi kwenye Guide katika Resources chini ya Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Ifuatayo",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Chaguzi za Biashara",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Gundua kila kitu kinachopatikana kwako.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Fanya biashara za CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Pata mali zaidi ya 80, kutoka Forex na Hisa hadi Bidhaa na Indices za Derived.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Rudi",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Kila kitu katika portfolio moja",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Chunguza zaidi",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Anzisha upya mwongozo",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Simamia Wallet zako, account za biashara na shughuli zako zote kwa haraka na kwa urahisi.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Rudi wakati wowote",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Pata masoko ya dunia kwa leverage hadi 1:1000 kwenye MT5."
    },
    Ca = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B95\u0BB1\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BBE\u0BA9\u0BBE\u0BB2\u0BCD, Guide-\u0B90 \u0BA4\u0BC7\u0BB0\u0BCD\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u0BAA\u0BC1\u0BB0\u0BBF\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Resources -\u0BB2\u0BCD Guide \u0B85\u0B9E\u0BCD\u0B9A\u0BB2\u0BBF\u0BB2\u0BCD \u0BA8\u0BC0\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B8E\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1\u0BAE\u0BCD \u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BC8 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BB2\u0BBE\u0BAE\u0BCD.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0C24\u0C26\u0C41\u0C2A\u0C30\u0C3F",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0B9A\u0BA4\u0BBF \u0B89\u0BB3\u0BCD\u0BB3 \u0B8E\u0BB2\u0BCD\u0BB2\u0BBE\u0BAE\u0BCD \u0B95\u0BA3\u0BCD\u0B9F\u0BB1\u0BBF\u0BAF\u0BB5\u0BC1\u0BAE\u0BCD.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95\u0BAE\u0BCD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Forex, \u0BAA\u0B99\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD, \u0BAA\u0BCA\u0BB0\u0BC1\u0B9F\u0BCD\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD Deriv \u0B87\u0BA9\u0BCD \u0B9A\u0BBF\u0BB1\u0BAA\u0BCD\u0BAA\u0BC1 \u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BBF\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC1\u0B9F\u0BA9\u0BCD 80+ \u0B9A\u0BCA\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAA\u0BC6\u0BB1\u0BB5\u0BC1\u0BAE\u0BCD.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u0BAA\u0BBF\u0BA9\u0BCD\u0BA9\u0BA3\u0BBF",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1\u0BAE\u0BCD \u0B92\u0BB0\u0BC1 \u0BAA\u0BCB\u0BB0\u0BCD\u0B9F\u0BCD\u0B83\u0BAA\u0BCB\u0BB2\u0BBF\u0BAF\u0BCB\u0BB5\u0BBF\u0BB2\u0BCD",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0B86\u0BB0\u0BBE\u0BAF\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0BB5\u0BB4\u0BBF\u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BC8 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0B86\u0BB0\u0BAE\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD Wallets, \u0BB5\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0B95 \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B85\u0BA9\u0BC8\u0BA4\u0BCD\u0BA4\u0BC1 \u0D9C\u0DB1\u0DD4\u0DAF\u0DD9\u0DB1\u0DD4\u0DB1\u0DCA \u0DB8\u0DDC\u0DC4\u0DDC\u0DAD\u0DDA \u0DC4\u0DCF \u0DB4\u0DC4\u0DC3\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA \u0D9A\u0DC5\u0DB8\u0DB1\u0DCF\u0D9A\u0DBB\u0DAB\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0B8E\u0BAA\u0BCD\u0BAA\u0BCB\u0BA4\u0BC1\u0BAE\u0BCD \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BB5\u0BBE\u0BB0\u0BC1\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5-\u0BB2\u0BCD leverage 1:1000 \u0BB5\u0BB0\u0BC8 \u0B89\u0BB2\u0B95 \u0B9A\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BB3\u0BBF\u0BB2\u0BCD \u0B85\u0BA3\u0BC1\u0B95\u0BB2\u0BCD."
    },
    Va = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E40\u0E25\u0E37\u0E2D\u0E01 Guide",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E41\u0E25\u0E49\u0E27",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E14\u0E39\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E43\u0E19 Resources \u0E20\u0E32\u0E22\u0E43\u0E15\u0E49 Guide \u0E44\u0E14\u0E49\u0E40\u0E2A\u0E21\u0E2D",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u0E16\u0E31\u0E14\u0E44\u0E1B",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E40\u0E17\u0E23\u0E14",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u0E40\u0E17\u0E23\u0E14 CFDs",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E2A\u0E34\u0E19\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E01\u0E27\u0E48\u0E32 80 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48 Forex \u0E41\u0E25\u0E30 \u0E2B\u0E38\u0E49\u0E19 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07 Commodities \u0E41\u0E25\u0E30\u0E14\u0E31\u0E0A\u0E19\u0E35 Derived \u0E1E\u0E34\u0E40\u0E28\u0E29",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u0E01\u0E25\u0E31\u0E1A",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u0E17\u0E38\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E42\u0E1F\u0E25\u0E34\u0E42\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E21\u0E48\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 Wallets, \u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E40\u0E17\u0E23\u0E14 \u0E41\u0E25\u0E30\u0E18\u0E38\u0E23\u0E01\u0E23\u0E23\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27\u0E41\u0E25\u0E30\u0E07\u0E48\u0E32\u0E22\u0E14\u0E32\u0E22",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E23\u0E01\u0E47\u0E44\u0E14\u0E49",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E15\u0E25\u0E32\u0E14\u0E42\u0E25\u0E01\u0E14\u0E49\u0E27\u0E22 leverage \u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 1:1000 \u0E1A\u0E19 MT5"
    },
    Aa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "E\u011Fer tekrar \xF6\u011Frenmeniz gerekiyorsa, Guide'\u0131 se\xE7in.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Anlad\u0131m",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Her zaman Guide alt\u0131nda Resources'taki rehbere tekrar eri\u015Febilirsiniz.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Sonraki",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u0130\u015Flem Se\xE7enekleri",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Size sunulan her \u015Feyi ke\u015Ffedin.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD \u0130\u015Flemi Yap\u0131n",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "80+ varl\u0131\u011Fa eri\u015Fin, Forex ve Hisse senetleri, Emtia ve \xF6zel Derived Endeksler dahil.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Geri",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Her \u015Fey tek portf\xF6yde",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Daha fazlas\u0131n\u0131 ke\u015Ffet",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "K\u0131lavuzu yeniden ba\u015Flat",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "C\xFCzdanlar\u0131n\u0131z\u0131, ticaret hesaplar\u0131n\u0131z\u0131 ve t\xFCm i\u015Flemlerinizi an\u0131nda ve kolayca y\xF6netin.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u0130stedi\u011Finiz zaman geri gelin",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5 \xFCzerinde 1:1000\u2019e kadar kald\u0131ra\xE7la k\xFCresel piyasalara eri\u015Fim."
    },
    wa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Agar yana o'rganish kerak bo'lsa, Guide ni tanlang.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Tushunarli",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Har doim Guide ostida Resources da k\u0131lavuzni qayta ko\u2018rishingiz mumkin.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Keyingi",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Savdo variantlari",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Siz uchun mavjud bo'lgan hamma narsani kashf qiling.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD bilan savdo qiling",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "79 dan ortiq aktivlarga kiring, Forex va Stocklardan to Commodities va eksklyuziv Derived Indicesga.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Orqaga",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Hammasi bitta portfeldagi",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Ko\u2019proq kashf eting",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Yo'l-yo'riqnoma qayta ishga tushiring",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Walletlaringizni, savdo hisoblaringizni va barcha tranzaktsiyalarni tez va oson boshqaring.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Xohlagan vaqtingizda qaytib keling",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5 da maksimal 1:1000 leverage bilan dunyo bozorlariga kirish."
    },
    Ea = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "Agar yana o'rganish kerak bo'lsa, Guide ni tanlang.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Tushunarli",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "Har doim Guide ostida Resources da k\u0131lavuzni qayta ko\u2018rishingiz mumkin.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Keyingi",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "Savdo variantlari",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Siz uchun mavjud bo'lgan hamma narsani kashf qiling.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "CFD bilan savdo qiling",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "80 dan ortiq aktivlarga kiring, Forex va Stocklardan to Commodities va eksklyuziv Derived Indicesga.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Orqaga",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "Hammasi bitta portfeldagi",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Ko\u2019proq kashf eting",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Yo'l-yo'riqnoma qayta ishga tushiring",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Walletlaringizni, savdo hisoblaringizni va barcha tranzaktsiyalarni tez va oson boshqaring.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Xohlagan vaqtingizda qaytib keling",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "MT5 da maksimal 1:1000 leverage bilan dunyo bozorlariga kirish."
    },
    Ra = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "N\u1EBFu b\u1EA1n c\u1EA7n h\u1ECDc l\u1EA1i, ch\u1ECDn Guide.",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "Hi\u1EC3u r\u1ED3i",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "B\u1EA1n lu\xF4n c\xF3 th\u1EC3 xem l\u1EA1i h\u01B0\u1EDBng d\u1EABn trong Resources d\u01B0\u1EDBi m\u1EE5c Guide.",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "Ti\u1EBFp theo",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "T\xF9y ch\u1ECDn Giao d\u1ECBch",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "Kh\xE1m ph\xE1 t\u1EA5t c\u1EA3 nh\u1EEFng g\xEC b\u1EA1n c\xF3 th\u1EC3 truy c\u1EADp.",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "Giao d\u1ECBch CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "Truy c\u1EADp h\u01A1n 80 s\u1EA3n ph\u1EA9m, t\u1EEB Forex v\xE0 C\u1ED5 phi\u1EBFu \u0111\u1EBFn h\xE0ng h\xF3a v\xE0 Ch\u1EC9 s\u1ED1 Derived \u0111\u1ED9c quy\u1EC1n.",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "Tr\u1EDF l\u1EA1i",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "M\u1ECDi th\u1EE9 trong m\u1ED9t danh m\u1EE5c \u0111\u1EA7u t\u01B0",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "Kh\xE1m ph\xE1 th\xEAm",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i h\u01B0\u1EDBng d\u1EABn",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "Qu\u1EA3n l\xFD V\xED, t\xE0i kho\u1EA3n giao d\u1ECBch v\xE0 t\u1EA5t c\u1EA3 c\xE1c giao d\u1ECBch c\u1EE7a b\u1EA1n m\u1ED9t c\xE1ch nhanh ch\xF3ng v\xE0 d\u1EC5 d\xE0ng.",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "Quay l\u1EA1i b\u1EA5t c\u1EE9 l\xFAc n\xE0o",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "Truy c\u1EADp th\u1ECB tr\u01B0\u1EDDng to\xE0n c\u1EA7u v\u1EDBi \u0111\xF2n b\u1EA9y l\xEAn \u0111\u1EBFn 1:1000 tr\xEAn MT5."
    },
    Ta = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u5982\u679C\u4F60\u9700\u8981\u91CD\u65B0\u5B66\u4E60\uFF0C\u9009\u62E9 Guide\u3002",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u660E\u767D",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u60A8\u53EF\u4EE5\u968F\u65F6\u5728 Resources \u4E2D\u7684 Guide \u91CD\u65B0\u8BBF\u95EE\u6307\u5357\u3002",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u4E0B\u4E00\u6B65",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u4EA4\u6613\u9009\u9879",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u53D1\u73B0\u6240\u6709\u53EF\u7528\u7684\u5185\u5BB9\u3002",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u4EA4\u6613 CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u8BBF\u95EE80+\u8D44\u4EA7\uFF0C\u4ECE\u5916\u6C47\u548C\u80A1\u7968\u5230\u5546\u54C1\u53CA\u4E13\u5C5EDerived\u6307\u6570\u3002",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u8FD4\u56DE",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u6240\u6709\u5185\u5BB9\u5728\u4E00\u4E2A\u6295\u8D44\u7EC4\u5408\u4E2D",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u63A2\u7D22\u66F4\u591A",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u91CD\u65B0\u542F\u52A8\u6307\u5357",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u5373\u523B\u8F7B\u677E\u7BA1\u7406\u60A8\u7684\u94B1\u5305\u3001\u4EA4\u6613\u8D26\u6237\u548C\u6240\u6709\u4EA4\u6613\u3002",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u4EFB\u4F55\u65F6\u5019\u90FD\u53EF\u4EE5\u56DE\u6765",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u4F7F\u7528\u9AD8\u8FBE1:1000\u7684\u6760\u6746\u5728MT5\u4E0A\u8BBF\u95EE\u5168\u7403\u5E02\u573A\u3002"
    },
    Oa = {
        "2haT89gIc0u4MUtVMsc3xg#Value.221609757.1": "\u5982\u679C\u4F60\u9700\u8981\u91CD\u65B0\u5B78\u7FD2\uFF0C\u9078\u64C7 Guide\u3002",
        "5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1": "\u660E\u767D",
        "4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1": "\u60A8\u96A8\u6642\u90FD\u53EF\u4EE5\u5728 Resources \u7684 Guide \u4E2D\u91CD\u65B0\u67E5\u770B\u6307\u5357\u3002",
        "8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1": "\u4E0B\u4E00\u6B65",
        "bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1": "\u4EA4\u6613\u9078\u9805",
        "cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1": "\u767C\u73FE\u4E00\u5207\u53EF\u7528\u7684\u8CC7\u6E90\u3002",
        "6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1": "\u4EA4\u6613 CFD",
        "YZQrhEi+4U+0giWEXea9GA#Value.174130095.1": "\u5B58\u53D6\u8D85\u904E80\u500B\u8CC7\u7522\uFF0C\u6DB5\u84CB\u5916\u532F\u3001\u80A1\u7968\u3001\u5927\u5B97\u5546\u54C1\u8207\u5C08\u5C6CDerived\u6307\u6578\u3002",
        "_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1": "\u8FD4\u56DE",
        "8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1": "\u4E00\u5207\u90FD\u5728\u4E00\u500B\u6295\u8CC7\u7D44\u5408\u4E2D",
        "vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1": "\u63A2\u7D22\u66F4\u591A",
        "uisVHpA080uSYGSJxvGF4g#Value.-698011236.1": "\u91CD\u65B0\u555F\u52D5\u6307\u5357",
        "nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1": "\u5373\u6642\u8F15\u9B06\u7BA1\u7406\u60A8\u7684\u9322\u5305\u3001\u4EA4\u6613\u5E33\u6236\u548C\u6240\u6709\u4EA4\u6613\u3002",
        "z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1": "\u96A8\u6642\u56DE\u4F86",
        "aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1": "\u4F7F\u7528\u9AD8\u90541:1000\u7684\u69D3\u687F\u5728MT5\u4E0A\u9032\u5165\u5168\u7403\u5E02\u5834\u3002"
    },
    wt = {
        "ar-001": {
            translations: la,
            isRTL: !0
        },
        "bn-BD": {
            translations: ua,
            isRTL: !1
        },
        "de-DE": {
            translations: da,
            isRTL: !1
        },
        "es-ES": {
            translations: ca,
            isRTL: !1
        },
        "fr-FR": {
            translations: va,
            isRTL: !1
        },
        "it-IT": {
            translations: ma,
            isRTL: !1
        },
        "km-KH": {
            translations: fa,
            isRTL: !1
        },
        "ko-KR": {
            translations: ga,
            isRTL: !1
        },
        "mn-MN": {
            translations: ha,
            isRTL: !1
        },
        "pl-PL": {
            translations: _a,
            isRTL: !1
        },
        "pt-PT": {
            translations: ba,
            isRTL: !1
        },
        "ru-RU": {
            translations: ya,
            isRTL: !1
        },
        "si-LK": {
            translations: pa,
            isRTL: !1
        },
        "sw-KE": {
            translations: Sa,
            isRTL: !1
        },
        "ta-IN": {
            translations: Ca,
            isRTL: !1
        },
        "th-TH": {
            translations: Va,
            isRTL: !1
        },
        "tr-TR": {
            translations: Aa,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: wa,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Ea,
            isRTL: !1
        },
        "vi-VN": {
            translations: Ra,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ta,
            isRTL: !1
        },
        "zh-TW": {
            translations: Oa,
            isRTL: !1
        }
    };

function at(v, n, s, e) {
    var d, o;
    let t = (o = (d = window == null ? void 0 : window.driver) == null ? void 0 : d.js) == null ? void 0 : o.driver,
        a = n.IsDesktop().IsDesktop;
    window.__driverJSInstance = t({
        showProgress: !0,
        showButtons: ["next", "previous", "close"],
        nextBtnText: v.Text_Next,
        prevBtnText: v.Text_Back,
        doneBtnText: v.Text_GotIt,
        progressText: "{{current}}/{{total}}",
        disableActiveInteraction: !0,
        overlayColor: "rgba(255, 255, 255, 0.72)",
        onDestroyed: n.DriverJSOnComplete,
        onPopoverRender: i((m, {
            config: h,
            state: r
        }) => {
            if (a || r.activeIndex > 1) return;
            let y = document.getElementsByClassName("driver-popover-arrow")[0];
            if (y) {
                let A = r.activeIndex === 0 ? "40%" : "50%",
                    g = r.activeIndex === 0 ? "48%" : "63%";
                y.style.insetInlineEnd = "unset", y.style.insetInlineStart = v.IsRTL ? g : A, window.innerWidth > 460 && (y.style.insetInlineStart = "50%")
            }
        }, "onPopoverRender"),
        steps: [{
            element: ".driver-cfds",
            popover: {
                title: v.Text_CFDTitle,
                description: v.Text_CFDDescription,
                side: a ? "right" : "top",
                align: a ? "start" : "center"
            }
        }, {
            element: ".driver-options",
            popover: {
                title: v.Text_OptionTitle,
                description: v.Text_OptionDescription,
                side: a ? "right" : "top",
                align: a ? "start" : "center"
            }
        }, {
            element: ".driver-portfolio",
            popover: {
                title: v.Text_PortfolioTitle,
                description: v.Text_PortfolioDescription
            }
        }, {
            element: ".driver-more",
            popover: {
                title: v.Text_MoreTitle,
                description: v.Text_MoreDescription
            }
        }, {
            element: ".driver-resource",
            popover: {
                title: a ? v.Text_ResourceDesktopTitle : v.Text_ResourceMobileTitle,
                description: a ? v.Text_ResourceDesktopDescription : v.Text_ResourceMobileDescription
            }
        }]
    })
}
i(at, "default");

function rt(v, n, s) {
    var e;
    (e = window.__driverJSInstance) == null || e.drive()
}
i(rt, "default");
var l = V; {
    let n = class n extends l.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, wt);
            var d = this.controller;
            this.clientActionProxies = {
                driverJSOnComplete$Action: i(function() {
                    return d.executeActionInsideJSNode(d._driverJSOnComplete$Action.bind(d), d.callContext(), function(o) {
                        return {}
                    }, function() {}, "DriverJSOnComplete")
                }, "driverJSOnComplete$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _driverJSOnComplete$Action() {
            return this.hasOwnProperty("__driverJSOnComplete$Action") || (this.__driverJSOnComplete$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return l.Logger.startActiveSpan("DriverJSOnComplete", function(o) {
                    return o && (o.setAttribute("code.function", "DriverJSOnComplete"), o.setAttribute("outsystems.function.key", "30753e02-71e2-4ae1-b6bd-2334d7ccf3d7"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        a.ensureControllerAlive("DriverJSOnComplete"), e = a.callContext(e);
                        var m = new l.DataTypes.VariableHolder,
                            h = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return t.flush(), _.gET_FeatureFlags$Action(e).then(function(r) {
                                h.value = r
                            }).then(function() {
                                return l.Flow.executeSequence(function() {
                                    if (!h.value.responseOut.dataAttr.onboarding_tour_completedAttr) return t.flush(), _.pOST_FeatureFlag$Action((function() {
                                        var r = new st;
                                        return r.flagAttr = "onboarding_tour_completed", r.valueAttr = !0, r
                                    })(), e).then(function(r) {
                                        m.value = r
                                    })
                                })
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__driverJSOnComplete$Action
        }
        set _driverJSOnComplete$Action(e) {
            this.__driverJSOnComplete$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "858788b4-a07a-4437-9fc4-d7d8c48934c4"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                        a.ensureControllerAlive("OnReady"), e = a.callContext(e);
                        var m = new l.DataTypes.VariableHolder;
                        return l.Flow.executeAsyncFlow(function() {
                            return l.Logger.startActiveSpan("InitializeDriverJS", function(h) {
                                h && (h.setAttribute("code.function", "InitializeDriverJS"), h.setAttribute("outsystems.function.key", "101d572b-7d8b-4bc4-aefd-ce76af0ff90d"), h.setAttribute("outsystems.function.owner.name", "dashboard"), h.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return a.safeExecuteJSNode(at, "InitializeDriverJS", "OnReady", {
                                        IsRTL: l.DataConversion.JSNodeParamConverter.to(l.BuiltinFunctions.toLower(l.BuiltinFunctions.substr(G.getLanguage(), 0, 2)) === "ar", l.DataTypes.DataTypes.Boolean),
                                        Text_CFDDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("aVcZBW+lSkuTbqxxDnHA4A#Value.710157892.1", "Access global markets with leverage up to 1:1000 on MT5."), l.DataTypes.DataTypes.Text),
                                        Text_ResourceMobileTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("z60_CL57+U22bwBYkMO1JA#Value.-1314740228.1", "Come back anytime"), l.DataTypes.DataTypes.PhoneNumber),
                                        Text_PortfolioDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("nuWPGXU0w0qXdGR_KeT8qg#Value.1884093103.1", "Manage your Wallets, trading accounts and all your transactions instantly and easily."), l.DataTypes.DataTypes.Text),
                                        Text_ResourceDesktopTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("uisVHpA080uSYGSJxvGF4g#Value.-698011236.1", "Restart the guide"), l.DataTypes.DataTypes.Text),
                                        Text_MoreTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("vvr6WlzlBUqxsQ2GwkoS4g#Value.-1836177182.1", "Explore more"), l.DataTypes.DataTypes.Text),
                                        Text_PortfolioTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("8Hradn0ObUOCG2M+T38bmA#Value.-38296064.1", "Everything in one portfolio"), l.DataTypes.DataTypes.Text),
                                        Text_Back: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("_mU9fmMzKEKQlrpRBRvCwA#Value.2062599.1", "Back"), l.DataTypes.DataTypes.Text),
                                        Text_OptionDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("YZQrhEi+4U+0giWEXea9GA#Value.174130095.1", "Access 80+ assets, from Forex and Stocks to Commodities and exclusive Derived Indices."), l.DataTypes.DataTypes.Text),
                                        Text_CFDTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("6y5xjSdJP0mN8MR2krJLcw#Value.-485515858.1", "Trade CFDs"), l.DataTypes.DataTypes.Text),
                                        Text_MoreDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("cj12kGXrRkmtMgTtlZ_22A#Value.990501031.1", "Discover everything available to you."), l.DataTypes.DataTypes.Text),
                                        Text_OptionTitle: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("bwlkrsRMukmCNDDPtFBNjg#Value.458635170.1", "Trade Options"), l.DataTypes.DataTypes.Text),
                                        Text_Next: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("8XIYr8S5Wk6J5MLxLI0Rqw#Value.2424595.1", "Next"), l.DataTypes.DataTypes.Text),
                                        Text_ResourceMobileDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("4DljsDj8j0ODqtxKwcf4LQ#Value.1979311285.1", "You can always revisit the guide in Resources under Guide."), l.DataTypes.DataTypes.PhoneNumber),
                                        Text_GotIt: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("5jDEyX3NiUG3+kbkiJZXaQ#Value.2138670431.1", "Got it"), l.DataTypes.DataTypes.Text),
                                        Text_ResourceDesktopDescription: l.DataConversion.JSNodeParamConverter.to(l.Injector.resolve(l.ServiceNames.TranslationsService).getMessage("2haT89gIc0u4MUtVMsc3xg#Value.221609757.1", "If you need to learn again, select Guide."), l.DataTypes.DataTypes.Text)
                                    }, function(r) {}, {
                                        IsDesktop: k.clientActionProxies.isDesktop$Action,
                                        DriverJSOnComplete: a.clientActionProxies.driverJSOnComplete$Action
                                    }, {})
                                } finally {
                                    h && h.end()
                                }
                            }, 1), t.flush(), _.gET_FeatureFlags$Action(e).then(function(h) {
                                m.value = h
                            }).then(function() {
                                te.consoleLog$Action("This is tour completed" + (m.value.responseOut.dataAttr.onboarding_tour_completedAttr ? "True" : "False") + "This is set password" + (_.savedAuthInfo$Action(e).responseOut.dataAttr.userAttr.user_metadataAttr.user_set_passwordAttr ? "True" : "False"), 0, e)
                            }).then(function() {
                                m.value.responseOut.dataAttr.onboarding_tour_completedAttr || _.savedAuthInfo$Action(e).responseOut.dataAttr.userAttr.user_metadataAttr.user_set_passwordAttr && l.BuiltinFunctions.index(l.BuiltinFunctions.getBookmarkableURL(), "/home", 0, !1, !0) > -1 && l.Logger.startActiveSpan("Drive", function(h) {
                                    h && (h.setAttribute("code.function", "Drive"), h.setAttribute("outsystems.function.key", "60eb138b-1179-46b2-999b-aab34d2632a5"), h.setAttribute("outsystems.function.owner.name", "dashboard"), h.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), h.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return a.safeExecuteJSNode(rt, "Drive", "OnReady", null, function(r) {}, {}, {})
                                    } finally {
                                        h && h.end()
                                    }
                                }, 1)
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        driverJSOnComplete$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("DriverJSOnComplete__proxy", function(a) {
                return a && (a.setAttribute("code.function", "DriverJSOnComplete"), a.setAttribute("outsystems.function.key", "30753e02-71e2-4ae1-b6bd-2334d7ccf3d7"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._driverJSOnComplete$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(a) {
                return a && (a.setAttribute("code.function", "OnReady"), a.setAttribute("outsystems.function.key", "858788b4-a07a-4437-9fc4-d7d8c48934c4"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), l.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    a && a.end()
                })
            }, 0)
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
                    a = this.model,
                    d = this.idService;
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
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
            return _.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let v = n;
    Et = v
}
var Et, Rt = new l.Controller.ControllerFactory(Et, W);
var kn = O.PlaceholderContent,
    Pn = O.IteratorPlaceholderContent,
    Da = i(function() {
        var v = x(function(n) {
            var s = n.model,
                e = n.controller,
                t = n.controller.idService,
                a = e.validationService,
                d = e.callContext(),
                o = N,
                m = M,
                h = {
                    props: n,
                    validateWidget: i(function(f) {
                        n.validateWidget(n, f)
                    }, "validateWidget")
                },
                r = s,
                y = F,
                A = H,
                g = L();
            return Tt.createElement("div", n.rootNodeProperties)
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "DriverJS",
                    functionKey: "abe8e4a4-cdd2-44a8-b1e4-fdf9f0b7c00e",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.DriverJS",
            modelFactory: ct,
            controllerFactory: Rt
        });
        return v.getCssDependencies = function() {
            return ["css/dashboard.Layouts.DriverJS.css"]
        }, v.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.driverjs.js"]
        }, v.getBlocks = function() {
            return []
        }, v
    }, "componentFactory"),
    nt = Da();
var C = $(ee());
var Ia = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u0627\u0644\u0645\u062D\u0641\u0638\u0629",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
    },
    ka = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u09B9\u09CB\u09AE",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u09B9\u09CB\u09AE"
    },
    Pa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portfolio",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portfolio",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Startseite",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Startseite"
    },
    La = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Cartera",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Cartera",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Inicio",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Inicio"
    },
    xa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portefeuille",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portefeuille",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Accueil",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Accueil"
    },
    Ha = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portafoglio",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portafoglio",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Home",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Home"
    },
    Fa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u1795\u178F\u17A0\u17D2\u179C\u17BC\u179B\u17B8\u1799\u17C4",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u1795\u178F\u17A0\u17D2\u179C\u17BC\u179B\u17B8\u1799\u17C4",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u1791\u17C6\u1796\u17D0\u179A\u178A\u17BE\u1798"
    },
    Na = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\uD648",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\uD648"
    },
    Ma = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u0421\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439 \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u0421\u0430\u043D\u0445\u04AF\u04AF\u0433\u0438\u0439\u043D \u0434\u044D\u043B\u0433\u044D\u0440\u044D\u043D\u0433\u04AF\u0439 \u043C\u044D\u0434\u044D\u044D\u043B\u044D\u043B",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u041D\u04AF\u04AF\u0440 \u0445\u0443\u0443\u0434\u0430\u0441",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u041D\u04AF\u04AF\u0440 \u0445\u0443\u0443\u0434\u0430\u0441"
    },
    Ga = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portfolio",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portfolio",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Strona g\u0142\xF3wna",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Strona g\u0142\xF3wna"
    },
    Ua = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portf\xF3lio",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portf\xF3lio",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "P\xE1gina inicial",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "P\xE1gina inicial"
    },
    Wa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u041F\u043E\u0440\u0442\u0444\u0435\u043B\u044C",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
    },
    Ba = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u0D9A\u0DC5\u0DB9",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u0D9A\u0DC5\u0DB9",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u0DB8\u0DD4\u0DBD\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u0DB8\u0DD4\u0DBD\u0DCA \u0DB4\u0DD2\u0DA7\u0DD4\u0DC0"
    },
    Ja = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Mkusanyiko",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Mkusanyiko",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Nyumbani",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Nyumbani"
    },
    za = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u0BAA\u0BCA\u0BB1\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u0BAA\u0BCA\u0BB1\u0BBF\u0BAE\u0BC1\u0BB1\u0BC8",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u0BAE\u0BC1\u0B95\u0BAA\u0BCD\u0BAA\u0BC1"
    },
    qa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E42\u0E1F\u0E25\u0E34\u0E42\u0E2D",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E42\u0E1F\u0E25\u0E34\u0E42\u0E2D",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"
    },
    ja = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portf\xF6y",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portf\xF6y",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Ana Sayfa",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Ana Sayfa"
    },
    Ka = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portfel",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portfel",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Bosh sahifa",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Bosh sahifa"
    },
    Qa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Portfel",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Portfel",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Bosh sahifa",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Bosh sahifa"
    },
    Xa = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "Danh m\u1EE5c",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "Danh m\u1EE5c",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "Trang ch\u1EE7",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "Trang ch\u1EE7"
    },
    Ya = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u6295\u8D44\u7EC4\u5408",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u6295\u8D44\u7EC4\u5408",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u9996\u9875",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u9996\u9875"
    },
    Za = {
        "VY2kOS1I7k6bAjXcY6vM5Q#Value": "\u6295\u8CC7\u7D44\u5408",
        "ntdtEk0rtU+XkqJMXOFIxQ#Value": "\u6295\u8CC7\u7D44\u5408",
        "FCNNbs76I0u9d1OhF0qmBw#Value": "\u9996\u9801",
        "aGbKAnKMo0uwTx1nOaq6oQ#Value": "\u9996\u9801"
    },
    Ot = {
        "ar-001": {
            translations: Ia,
            isRTL: !0
        },
        "bn-BD": {
            translations: ka,
            isRTL: !1
        },
        "de-DE": {
            translations: Pa,
            isRTL: !1
        },
        "es-ES": {
            translations: La,
            isRTL: !1
        },
        "fr-FR": {
            translations: xa,
            isRTL: !1
        },
        "it-IT": {
            translations: Ha,
            isRTL: !1
        },
        "km-KH": {
            translations: Fa,
            isRTL: !1
        },
        "ko-KR": {
            translations: Na,
            isRTL: !1
        },
        "mn-MN": {
            translations: Ma,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ga,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ua,
            isRTL: !1
        },
        "ru-RU": {
            translations: Wa,
            isRTL: !1
        },
        "si-LK": {
            translations: Ba,
            isRTL: !1
        },
        "sw-KE": {
            translations: Ja,
            isRTL: !1
        },
        "ta-IN": {
            translations: za,
            isRTL: !1
        },
        "th-TH": {
            translations: qa,
            isRTL: !1
        },
        "tr-TR": {
            translations: ja,
            isRTL: !1
        },
        "uz-Latn-UZ": {
            translations: Ka,
            isRTL: !1
        },
        "uz-UZ": {
            translations: Qa,
            isRTL: !1
        },
        "vi-VN": {
            translations: Xa,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ya,
            isRTL: !1
        },
        "zh-TW": {
            translations: Za,
            isRTL: !1
        }
    };
var B = V; {
    let n = class n extends B.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, Ot);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _goToOptions$Action() {
            return this.hasOwnProperty("__goToOptions$Action") || (this.__goToOptions$Action = function(e) {
                var t = this.model,
                    a = this.controller,
                    d = this.idService;
                return B.Logger.startActiveSpan("GoToOptions", function(o) {
                    o && (o.setAttribute("code.function", "GoToOptions"), o.setAttribute("outsystems.function.key", "7c05203f-7253-43f2-9872-e61fd162ed4f"), o.setAttribute("outsystems.function.owner.name", "dashboard"), o.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return a.ensureControllerAlive("GoToOptions"), e = a.callContext(e), _.rudderstackTrackEvent$Action("ce_tradershub_form_v2", "click", "", "", "home_page_navigation", "", "", "", "options_home_page", "Options", "bottom_nav_tab", "", "", "", "", !1, G.getOptionsAccountType(), "", "", "", !1, e), B.Navigation.navigateTo(B.Navigation.generateScreenURL("dashboard", "options", {}), B.Transitions.createTransition(B.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__goToOptions$Action
        }
        set _goToOptions$Action(e) {
            this.__goToOptions$Action = e
        }
        goToOptions$Action(e) {
            var t = this.controller;
            return B.Logger.startActiveSpan("GoToOptions__proxy", function(a) {
                a && (a.setAttribute("code.function", "GoToOptions"), a.setAttribute("outsystems.function.key", "7c05203f-7253-43f2-9872-e61fd162ed4f"), a.setAttribute("outsystems.function.owner.name", "dashboard"), a.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._goToOptions$Action, e)
                } finally {
                    a && a.end()
                }
            }, 0)
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
            return _.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let v = n;
    Dt = v
}
var Dt, It = new B.Controller.ControllerFactory(Dt, W);
var ne = $(ee());
var kt = {};
var Pt = V; {
    let n = class n extends Pt.Controller.BaseViewController {
        constructor(e, t, a) {
            super(e, t, a, kt);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
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
            return k.defaultTimeout
        }
    };
    i(n, "ControllerInner");
    let v = n;
    Lt = v
}
var Lt, xt = new Pt.Controller.ControllerFactory(Lt, ut);
var ei = O.PlaceholderContent,
    ti = O.IteratorPlaceholderContent,
    $a = i(function() {
        var v = x(function(n) {
            var s = n.model,
                e = n.controller,
                t = n.controller.idService,
                a = e.validationService,
                d = e.callContext(),
                o = N,
                m = M,
                h = {
                    props: n,
                    validateWidget: i(function(f) {
                        n.validateWidget(n, f)
                    }, "validateWidget")
                },
                r = s,
                y = F,
                A = H,
                g = L();
            return ne.createElement("div", n.rootNodeProperties, ne.createElement(b, {
                align: 0,
                animate: !1,
                style: "bottom-bar-item " + s.variables.extendedClassIn,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: r,
                style_dataFetchStatus: I.calculateDataFetchStatus(s.variables._extendedClassInDataFetchStatus)
            }, ne.createElement(z, {
                align: 2,
                content: h.props.placeholders.icon,
                style: "ph bottom-bar-item-icon",
                _idProps: {
                    service: t,
                    name: "Icon"
                },
                _widgetRecordProvider: r
            }), ne.createElement(z, {
                align: 2,
                content: h.props.placeholders.text,
                style: "ph bottom-bar-item-text",
                _idProps: {
                    service: t,
                    name: "Text"
                },
                _widgetRecordProvider: r
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "BottomBarItem",
                    functionKey: "d79ab315-2bb1-4098-b112-4d368de99365",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Navigation.BottomBarItem",
            modelFactory: vt,
            controllerFactory: xt
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return []
        }, v
    }, "componentFactory"),
    Y = $a();
var J = O.PlaceholderContent,
    vi = O.IteratorPlaceholderContent,
    er = i(function() {
        var v = x(function(n) {
            var s = n.model,
                e = n.controller,
                t = n.controller.idService,
                a = e.validationService,
                d = e.callContext(),
                o = N,
                m = M,
                h = {
                    props: n,
                    validateWidget: i(function(f) {
                        n.validateWidget(n, f)
                    }, "validateWidget")
                },
                r = s,
                y = F,
                A = H,
                g = L();
            return C.createElement("div", n.rootNodeProperties, C.createElement(b, {
                align: 0,
                animate: !0,
                extendedProperties: {
                    style: "background-color: #fff; border-top: 1px solid rgba(0, 0, 0, 0.08);"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "display-flex position-absolute justify-content-space-between padding-s padding-x-base absolute-bottom",
                visible: s.variables.isvisibleIn,
                _idProps: {
                    service: t,
                    name: "BottomNav"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: I.calculateDataFetchStatus(s.variables._isvisibleInDataFetchStatus)
            }, C.createElement(D, {
                enabled: !0,
                transition: T.createTransition(T.TransitionAnimation.None),
                url: p.generateScreenURL("dashboard", "home", {}),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, C.createElement(Y, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    icon: new J(function() {
                        return [y(s.variables.screenIn === "HOME", !1, this, function() {
                            return [C.createElement(R, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.homeico.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(R, {
                                gridProperties: {
                                    width: "24px"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.homeicoblank.png"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    }),
                    text: new J(function() {
                        return [y(s.variables.screenIn === "HOME", !1, this, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "color: #ff4450;"
                                },
                                text: [A(m("aGbKAnKMo0uwTx1nOaq6oQ#Value", "Home"))],
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "color: #222;"
                                },
                                text: [A(m("FCNNbs76I0u9d1OhF0qmBw#Value", "Home"))],
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    })
                },
                _dependencies: [o(s.variables._screenInDataFetchStatus), o(s.variables.screenIn)]
            })), C.createElement(D, {
                enabled: !0,
                extendedProperties: {
                    style: "color: #222;"
                },
                style: "driver-cfds",
                transition: T.createTransition(T.TransitionAnimation.None),
                url: p.generateScreenURL("dashboard", "cfds", {}),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }, C.createElement(Y, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    uuid: "8",
                    alias: "2"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    icon: new J(function() {
                        return [y(s.variables.screenIn === "TRADE", !1, this, function() {
                            return [C.createElement(R, {
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.chartcandlesticksm2.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(R, {
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.chartcandlesticksm.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    }),
                    text: new J(function() {
                        return [y(s.variables.screenIn === "TRADE", !1, this, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "color: #ff4450;"
                                },
                                text: ["CFDs"],
                                _idProps: {
                                    service: t,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return ["CFDs"]
                        })]
                    })
                },
                _dependencies: [o(s.variables._screenInDataFetchStatus), o(s.variables.screenIn)]
            })), C.createElement(D, {
                enabled: !0,
                onClick: i(function() {
                    var f = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                    e.goToOptions$Action(e.callContext(f))
                }, "onClick"),
                style: "driver-options",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "12"
                },
                _widgetRecordProvider: r
            }, C.createElement(Y, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    name: "Nav_Options",
                    alias: "3"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    icon: new J(function() {
                        return [y(s.variables.screenIn === "OPTIONS", !1, this, function() {
                            return [C.createElement(R, {
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.options_icon.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(R, {
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.options_light.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    }),
                    text: new J(function() {
                        return [y(s.variables.screenIn === "OPTIONS", !1, this, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "border-color: #000; color: #ff4450;"
                                },
                                text: ["Options"],
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "border-color: #000; color: #000;"
                                },
                                text: ["Options"],
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    })
                },
                _dependencies: [o(s.variables._screenInDataFetchStatus), o(s.variables.screenIn)]
            })), C.createElement(D, {
                enabled: !0,
                extendedProperties: {
                    style: "color: #222;"
                },
                style: "driver-portfolio",
                transition: T.createTransition(T.TransitionAnimation.None),
                url: p.generateScreenURL("dashboard", "portfolio", {}),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "18"
                },
                _widgetRecordProvider: r
            }, C.createElement(Y, {
                getOwnerSpan: i(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(f) {
                        e.handleError(f)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: a
                },
                _idProps: {
                    service: t,
                    name: "Nav_Portfolio",
                    alias: "4"
                },
                _widgetRecordProvider: r,
                placeholders: {
                    icon: new J(function() {
                        return [y(s.variables.screenIn === "PORTFOLIO", !1, this, function() {
                            return [C.createElement(R, {
                                extendedProperties: {
                                    style: "color: #ff4450;"
                                },
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.walletsm2.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [C.createElement(R, {
                                image: p.VersionedURL.getVersionedUrl("img/dashboard.walletsm.svg"),
                                type: 0,
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            })]
                        })]
                    }),
                    text: new J(function() {
                        return [y(s.variables.screenIn === "PORTFOLIO", !1, this, function() {
                            return [C.createElement(E, {
                                extendedProperties: {
                                    style: "color: #ff4450;"
                                },
                                text: [A(m("ntdtEk0rtU+XkqJMXOFIxQ#Value", "Portfolio"))],
                                _idProps: {
                                    service: t,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: r
                            })]
                        }, function() {
                            return [A(m("VY2kOS1I7k6bAjXcY6vM5Q#Value", "Portfolio"))]
                        })]
                    })
                },
                _dependencies: [o(s.variables._screenInDataFetchStatus), o(s.variables.screenIn)]
            }))))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "BottomNav",
                    functionKey: "f1d023d3-058e-4dce-999d-6b76a30352a8",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.BottomNav",
            modelFactory: mt,
            controllerFactory: It
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [Y]
        }, v
    }, "componentFactory"),
    it = er();
var Oi = O.PlaceholderContent,
    Di = O.IteratorPlaceholderContent,
    tr = i(function() {
        var v = x(function(n) {
            var s = n.model,
                e = n.controller,
                t = n.controller.idService,
                a = e.validationService,
                d = e.callContext(),
                o = N,
                m = M,
                h = {
                    props: n,
                    validateWidget: i(function(f) {
                        n.validateWidget(n, f)
                    }, "validateWidget")
                },
                r = s,
                y = F,
                A = H,
                g = L();
            return c.createElement("div", n.rootNodeProperties, y(_.featureFlagValueByName$Action("ORY_AUTHENTHICATION", d).isEnabledOut ? !s.variables.isLoadingVar || P.index(P.getBookmarkableURL(), "/dev/flags", 0, !1, !0) > -1 : _.savedAuthInfo$Action(d).responseOut.dataAttr.userAttr.emailAttr !== P.nullTextIdentifier() || P.index(P.getBookmarkableURL(), "/dev/flags", 0, !1, !0) > -1, !1, this, function() {
                return [c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: s.getCachedValue(t.getId("LayoutWrapperDesktop.Style"), function() {
                        return "full-width full-height layout layout-blank display-flex justify-content-center layout-base" + (s.variables.extendedClassIn === "" ? "" : " " + s.variables.extendedClassIn)
                    }, function() {
                        return s.variables.extendedClassIn
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LayoutWrapperDesktop"
                    },
                    _widgetRecordProvider: r,
                    style_dataFetchStatus: I.calculateDataFetchStatus(s.variables._extendedClassInDataFetchStatus)
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "max-width: 1232px;"
                    },
                    style: "display-flex full-width gap-base",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "1"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "border-color: rgba(0, 0, 0, 0.08); border-style: none solid none none; border-width: 0px 1px 0px 0px; height: auto; max-width: 296px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "display-flex flex-direction-column gap-m padding-x-base full-width rtl-side-panel",
                    visible: s.getCachedValue(t.getId("LeftContainer.Visible"), function() {
                        return k.isDesktop$Action(d).isDesktopOut
                    }),
                    _idProps: {
                        service: t,
                        name: "LeftContainer"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: 44px;"
                    },
                    style: "display-flex justify-content-space-between align-items-center",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "3"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(R, {
                    image: p.VersionedURL.getVersionedUrl("img/dashboard.logo3.svg"),
                    type: 0,
                    _idProps: {
                        service: t,
                        uuid: "4"
                    },
                    _widgetRecordProvider: r
                }), c.createElement(b, {
                    align: 0,
                    animate: !0,
                    visible: s.getCachedValue(t.getId("NotificationsContainer.Visible"), function() {
                        return _.featureFlagValueByName$Action("NOVU_NOTIFICATIONS", d).isEnabledOut && _.savedAuthInfo$Action(d).responseOut.dataAttr.userAttr.emailAttr !== P.nullTextIdentifier()
                    }),
                    _idProps: {
                        service: t,
                        name: "NotificationsContainer"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(tt, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "6",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }))), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    style: "nav-container display-flex justify-content-space-between flex-direction-column gap-base",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "Nav"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(D, {
                    enabled: !0,
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    transition: T.createTransition(T.TransitionAnimation.None),
                    url: p.generateScreenURL("dashboard", "home", {}),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "8"
                    },
                    _widgetRecordProvider: r
                }, y(s.variables.screenIn === "HOME", !1, this, function() {
                    return [c.createElement(R, {
                        gridProperties: {
                            width: "24px"
                        },
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.homeico.png"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "9"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(R, {
                        gridProperties: {
                            width: "24px"
                        },
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.homeicoblank.png"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "10"
                        },
                        _widgetRecordProvider: r
                    })]
                }), y(s.variables.screenIn === "HOME", !1, this, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #ff4450;"
                        },
                        text: [A(m("iLgQUlg730+2e6m3qEq84A#Value", "Home"))],
                        _idProps: {
                            service: t,
                            uuid: "11"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #11141b;"
                        },
                        text: [A(m("JzcAlGFtKkmAjizu_OZW7g#Value", "Home"))],
                        _idProps: {
                            service: t,
                            uuid: "12"
                        },
                        _widgetRecordProvider: r
                    })]
                })), c.createElement(D, {
                    enabled: !0,
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    transition: T.createTransition(T.TransitionAnimation.None),
                    url: p.generateScreenURL("dashboard", "cfds", {}),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "13"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center gap-s driver-cfds",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "14"
                    },
                    _widgetRecordProvider: r
                }, y(s.variables.screenIn === "TRADE", !1, this, function() {
                    return [c.createElement(R, {
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.chartcandlesticksm2.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "15"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(R, {
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.chartcandlesticksm.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "16"
                        },
                        _widgetRecordProvider: r
                    })]
                }), y(s.variables.screenIn === "TRADE", !1, this, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #ff4450;"
                        },
                        text: ["CFDs"],
                        _idProps: {
                            service: t,
                            uuid: "17"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #11141b;"
                        },
                        text: ["CFDs"],
                        _idProps: {
                            service: t,
                            uuid: "18"
                        },
                        _widgetRecordProvider: r
                    })]
                }))), c.createElement(D, {
                    enabled: !0,
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    transition: T.createTransition(T.TransitionAnimation.Default),
                    url: p.generateScreenURL("dashboard", "options", {}),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "19"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center gap-s driver-options",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "20"
                    },
                    _widgetRecordProvider: r
                }, y(s.variables.screenIn === "OPTIONS", !1, this, function() {
                    return [c.createElement(R, {
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.options_icon.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "21"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(R, {
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.options_light.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "22"
                        },
                        _widgetRecordProvider: r
                    })]
                }), y(s.variables.screenIn === "OPTIONS", !1, this, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "border-color: #000; color: #ff4450;"
                        },
                        text: ["Options"],
                        _idProps: {
                            service: t,
                            uuid: "23"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "border-color: #000; color: #11141b;"
                        },
                        text: ["Options"],
                        _idProps: {
                            service: t,
                            uuid: "24"
                        },
                        _widgetRecordProvider: r
                    })]
                }))), c.createElement(D, {
                    enabled: !0,
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    transition: T.createTransition(T.TransitionAnimation.None),
                    url: p.generateScreenURL("dashboard", "portfolio", {}),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "25"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "display-flex align-items-center gap-s driver-portfolio",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "26"
                    },
                    _widgetRecordProvider: r
                }, y(s.variables.screenIn === "PORTFOLIO", !1, this, function() {
                    return [c.createElement(R, {
                        extendedProperties: {
                            style: "color: #ff4450;"
                        },
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.walletsm2.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "27"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(R, {
                        image: p.VersionedURL.getVersionedUrl("img/dashboard.walletsm.svg"),
                        type: 0,
                        _idProps: {
                            service: t,
                            uuid: "28"
                        },
                        _widgetRecordProvider: r
                    })]
                }), y(s.variables.screenIn === "PORTFOLIO", !1, this, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #ff4450;"
                        },
                        text: [A(m("Z+YIgB7pNUGv5J49EHoBLg#Value", "Portfolio"))],
                        _idProps: {
                            service: t,
                            uuid: "29"
                        },
                        _widgetRecordProvider: r
                    })]
                }, function() {
                    return [c.createElement(E, {
                        extendedProperties: {
                            style: "color: #11141b;"
                        },
                        text: [A(m("Laxdb8JCWE29KKy3tpTcnw#Value", "Portfolio"))],
                        _idProps: {
                            service: t,
                            uuid: "30"
                        },
                        _widgetRecordProvider: r
                    })]
                })))), c.createElement(Se, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Space: be.space.small
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "31",
                        alias: "2"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: "flex-1 display-flex flex-direction-column gap-base resources",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "ResourcesContainer"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(D, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    onClick: i(function() {
                        return Promise.resolve().then(function() {
                            var f = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                            return e.connectIntercom$Action(e.callContext(f))
                        })
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "33"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "34"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(q, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M8.3125 13H13C13.5312 13 14 12.5625 14 12V6C14 5.46875 13.5312 5 13 5H4C3.4375 5 3 5.46875 3 6V12C3 12.5625 3.4375 13 4 13H5C5.53125 13 6 13.4688 6 14V14.5L7.71875 13.2188C7.90625 13.0938 8.09375 13 8.3125 13ZM13 14H8.3125L5.78125 15.9062C5.625 16.0312 5.4375 16.0312 5.25 15.9688C5.09375 15.875 5 15.7188 5 15.5V15V14H4C2.875 14 2 13.125 2 12V6C2 4.90625 2.875 4 4 4H13C14.0938 4 15 4.90625 15 6V12C15 13.125 14.0938 14 13 14ZM12 18C10.875 18 10 17.125 10 16V15H11V16C11 16.5625 11.4375 17 12 17H15.6562C15.875 17 16.0938 17.0938 16.25 17.2188L18 18.5V18C18 17.4688 18.4375 17 19 17H20C20.5312 17 21 16.5625 21 16V10C21 9.46875 20.5312 9 20 9H16V8H20C21.0938 8 22 8.90625 22 10V16C22 17.125 21.0938 18 20 18H19V19V19.5C19 19.7188 18.875 19.875 18.7188 19.9688C18.5312 20.0312 18.3438 20.0312 18.1875 19.9062L15.6562 18H12ZM7.75 6.21875C7.21875 6.21875 6.78125 6.53125 6.59375 7V7.03125C6.5 7.3125 6.65625 7.59375 6.90625 7.6875C7.15625 7.78125 7.4375 7.625 7.53125 7.375L7.5625 7.34375C7.5625 7.25 7.65625 7.21875 7.75 7.21875H9.03125C9.25 7.21875 9.40625 7.375 9.40625 7.5625C9.40625 7.71875 9.34375 7.84375 9.21875 7.90625L8.25 8.46875C8.09375 8.5625 8 8.71875 8 8.90625V9.1875C8 9.46875 8.21875 9.6875 8.5 9.6875C8.75 9.6875 9 9.46875 9 9.1875L9.71875 8.75C10.1562 8.53125 10.4062 8.0625 10.4062 7.59375C10.4062 6.8125 9.78125 6.21875 9.03125 6.21875H7.75ZM8.5 11.8438C8.75 11.875 9 11.75 9.125 11.5C9.28125 11.2812 9.28125 11 9.125 10.7812C9 10.5625 8.75 10.4062 8.5 10.4375C8.21875 10.4062 7.96875 10.5625 7.84375 10.7812C7.6875 11 7.6875 11.2812 7.84375 11.5C7.96875 11.75 8.21875 11.875 8.5 11.8438Z' fill='black' fill-opacity='0.72'/>\r
</svg>\r
`
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "35",
                        alias: "3"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(E, {
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    text: [A(m("Ddu_nawJ1kuu0lMvJlC3Nw#Value", "Live chat"))],
                    _idProps: {
                        service: t,
                        uuid: "36"
                    },
                    _widgetRecordProvider: r
                }))), c.createElement(D, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    onClick: i(function() {
                        var f = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                        e.connectWhatsApp$Action(e.callContext(f))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "37"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "38"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(q, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M16.875 7.0625C18.1875 8.375 19 10.0938 19 11.9688C19 15.7812 15.8125 18.9062 11.9688 18.9062C10.8125 18.9062 9.6875 18.5938 8.65625 18.0625L5 19L5.96875 15.4062C5.375 14.375 5.03125 13.1875 5.03125 11.9375C5.03125 8.125 8.15625 5 11.9688 5C13.8438 5 15.5938 5.75 16.875 7.0625ZM11.9688 17.7188C15.1562 17.7188 17.8125 15.125 17.8125 11.9688C17.8125 10.4062 17.1562 8.96875 16.0625 7.875C14.9688 6.78125 13.5312 6.1875 12 6.1875C8.8125 6.1875 6.21875 8.78125 6.21875 11.9375C6.21875 13.0312 6.53125 14.0938 7.09375 15.0312L7.25 15.25L6.65625 17.375L8.84375 16.7812L9.03125 16.9062C9.9375 17.4375 10.9375 17.7188 11.9688 17.7188ZM15.1562 13.4062C15.3125 13.5 15.4375 13.5312 15.4688 13.625C15.5312 13.6875 15.5312 14.0312 15.375 14.4375C15.2188 14.8438 14.5312 15.2188 14.2188 15.25C13.6562 15.3438 13.2188 15.3125 12.125 14.8125C10.375 14.0625 9.25 12.3125 9.15625 12.2188C9.0625 12.0938 8.46875 11.2812 8.46875 10.4062C8.46875 9.5625 8.90625 9.15625 9.0625 8.96875C9.21875 8.78125 9.40625 8.75 9.53125 8.75C9.625 8.75 9.75 8.75 9.84375 8.75C9.96875 8.75 10.0938 8.71875 10.25 9.0625C10.375 9.40625 10.75 10.25 10.7812 10.3438C10.8125 10.4375 10.8438 10.5312 10.7812 10.6562C10.4688 11.3125 10.0938 11.2812 10.2812 11.5938C10.9688 12.75 11.625 13.1562 12.6562 13.6562C12.8125 13.75 12.9062 13.7188 13.0312 13.625C13.125 13.5 13.4688 13.0938 13.5625 12.9375C13.6875 12.75 13.8125 12.7812 13.9688 12.8438C14.125 12.9062 14.9688 13.3125 15.1562 13.4062Z' fill='black' fill-opacity='0.72'/>\r
</svg>`
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "39",
                        alias: "4"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(E, {
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    text: [A(m("l0474P4P6kWbf1z_t6CGLQ#Value", "WhatsApp"))],
                    _idProps: {
                        service: t,
                        uuid: "40"
                    },
                    _widgetRecordProvider: r
                }))), c.createElement(D, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    onClick: i(function() {
                        var f = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                        e.redirectToHelpCenter$Action(e.callContext(f))
                    }, "onClick"),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "41"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "42"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(q, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M16.5625 17.3125L13.7188 14.4688C13.2188 14.8125 12.625 15 12 15C11.3438 15 10.75 14.8125 10.25 14.4688L7.40625 17.3125C8.625 18.375 10.2188 19 12 19C13.75 19 15.3438 18.375 16.5625 17.3125ZM17.2812 16.5938C18.3438 15.375 19 13.7812 19 12C19 10.25 18.3438 8.65625 17.2812 7.4375L14.4375 10.2812C14.7812 10.7812 15 11.375 15 12C15 12.6562 14.7812 13.25 14.4375 13.75L17.2812 16.5938ZM18 17.3125L18.3438 17.6562C18.5312 17.8438 18.5312 18.1875 18.3438 18.375C18.1562 18.5625 17.8125 18.5625 17.625 18.375L17.2812 18C15.875 19.25 14.0312 20 12 20C9.96875 20 8.09375 19.25 6.6875 18L6.34375 18.375C6.15625 18.5625 5.8125 18.5625 5.625 18.375C5.4375 18.1875 5.4375 17.8438 5.625 17.6562L6 17.3125C4.75 15.9062 4 14.0312 4 12C4 10 4.75 8.125 6 6.71875L5.625 6.375C5.4375 6.1875 5.4375 5.84375 5.625 5.65625C5.8125 5.46875 6.15625 5.46875 6.34375 5.65625L6.6875 6C8.09375 4.78125 9.96875 4 12 4C14 4 15.875 4.78125 17.2812 6L17.625 5.65625C17.8125 5.46875 18.1562 5.46875 18.3438 5.65625C18.5312 5.84375 18.5312 6.1875 18.3438 6.375L18 6.71875C19.2188 8.125 20 9.96875 20 12C20 14.0312 19.2188 15.9062 18 17.3125ZM16.5625 6.71875C15.3438 5.65625 13.75 5 12 5C10.2188 5 8.625 5.65625 7.40625 6.71875L10.25 9.5625C10.75 9.21875 11.3438 9 12 9C12.625 9 13.2188 9.21875 13.7188 9.5625L16.5625 6.71875ZM9.53125 13.75C9.1875 13.25 9 12.6562 9 12C9 11.375 9.1875 10.7812 9.53125 10.2812L6.6875 7.4375C5.625 8.65625 5 10.25 5 12C5 13.7812 5.625 15.375 6.6875 16.5938L9.53125 13.75ZM10 12C10 12.7188 10.375 13.375 11 13.75C11.5938 14.0938 12.375 14.0938 13 13.75C13.5938 13.375 14 12.7188 14 12C14 11.3125 13.5938 10.6562 13 10.2812C12.375 9.9375 11.5938 9.9375 11 10.2812C10.375 10.6562 10 11.3125 10 12Z' fill='black' fill-opacity='0.72'/>\r
</svg>\r
`
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "43",
                        alias: "5"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(E, {
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    text: [A(m("Hr9pEb9L8UCEbKHDoV9CAw#Value", "Help centre"))],
                    _idProps: {
                        service: t,
                        uuid: "44"
                    },
                    _widgetRecordProvider: r
                }))), c.createElement(D, {
                    enabled: !0,
                    gridProperties: {
                        marginLeft: "0px"
                    },
                    onClick: i(function() {
                        var f = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                        e.guideOnClick$Action(e.callContext(f))
                    }, "onClick"),
                    visible: s.variables.screenIn === "HOME" && s.variables.hasGuideIn,
                    _idProps: {
                        service: t,
                        uuid: "45"
                    },
                    _widgetRecordProvider: r,
                    visible_dataFetchStatus: I.calculateDataFetchStatus(s.variables._screenInDataFetchStatus, s.variables._hasGuideInDataFetchStatus)
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    gridProperties: {
                        classes: "OSInline",
                        width: "fit-content"
                    },
                    style: "driver-resource",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "46"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(q, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M3.5 4H20.5C20.75 4 21 4.25 21 4.5C21 4.78125 20.75 5 20.5 5H3.5C3.21875 5 3 4.78125 3 4.5C3 4.25 3.21875 4 3.5 4ZM4 6H5V13C5 13.5625 5.4375 14 6 14H12H18C18.5312 14 19 13.5625 19 13V6H20V13C20 14.125 19.0938 15 18 15H12.5V16.3125L15.3438 19.1562C15.5312 19.3438 15.5312 19.6875 15.3438 19.875C15.1562 20.0625 14.8125 20.0625 14.625 19.875L12 17.2188L9.34375 19.875C9.15625 20.0625 8.8125 20.0625 8.625 19.875C8.4375 19.6875 8.4375 19.3438 8.625 19.1562L11.5 16.3125V15H6C4.875 15 4 14.125 4 13V6Z' fill='black' fill-opacity='0.72'/>\r
</svg>\r
`
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "47",
                        alias: "6"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(E, {
                    extendedProperties: {
                        style: "color: #11141b;"
                    },
                    text: [A(m("lRE5S5ijn0+24ov6_Y9MqQ#Value", "Guide"))],
                    _idProps: {
                        service: t,
                        uuid: "48"
                    },
                    _widgetRecordProvider: r
                })))), c.createElement(D, {
                    enabled: !0,
                    extendedProperties: {
                        style: "color: #181c25;"
                    },
                    style: "display-flex align-items-center gap-base full-width justify-content-space-between",
                    transition: T.createTransition(T.TransitionAnimation.Default),
                    url: p.generateScreenURL("dashboard", "profile", {}),
                    visible: s.getCachedValue(t.getId("mbgBJ8MsOkut07jK4ngpGA.Visible"), function() {
                        return s.variables.pII_ClientProfileInformationVar.emailAttr !== P.nullTextIdentifier()
                    }, function() {
                        return s.variables.pII_ClientProfileInformationVar.emailAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "49"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: "display-flex align-items-center gap-base",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "50"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(Ce, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Color: be.color.neutral3,
                        Name: s.getCachedValue(t.getId("hDsjXVH1dk2sEe2rxyIL8g.Name"), function() {
                            return s.variables.pII_ClientProfileInformationVar.first_nameAttr === P.nullTextIdentifier() ? s.variables.pII_ClientProfileInformationVar.emailAttr : _.stringSplit$Action(s.variables.pII_ClientProfileInformationVar.first_nameAttr, " ", d).listOut.getItem(0) + " " + s.variables.pII_ClientProfileInformationVar.last_nameAttr
                        }, function() {
                            return s.variables.pII_ClientProfileInformationVar.first_nameAttr
                        }, function() {
                            return s.variables.pII_ClientProfileInformationVar.emailAttr
                        }, function() {
                            return s.variables.pII_ClientProfileInformationVar.last_nameAttr
                        })
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "51",
                        alias: "7"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "52"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !0,
                    visible: s.getCachedValue(t.getId("mR2Wn1bXekmg7_9yTlNjFg.Visible"), function() {
                        return s.variables.pII_ClientProfileInformationVar.first_nameAttr !== P.nullTextIdentifier()
                    }, function() {
                        return s.variables.pII_ClientProfileInformationVar.first_nameAttr
                    }),
                    _idProps: {
                        service: t,
                        uuid: "53"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(pe, {
                    extendedProperties: {
                        style: "font-size: 16px; font-weight: bold;"
                    },
                    value: s.variables.pII_ClientProfileInformationVar.first_nameAttr + " " + s.variables.pII_ClientProfileInformationVar.last_nameAttr,
                    _idProps: {
                        service: t,
                        uuid: "54"
                    },
                    _widgetRecordProvider: r
                })), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "overflow-wrap: anywhere;"
                    },
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "55"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(pe, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    value: s.variables.pII_ClientProfileInformationVar.emailAttr,
                    _idProps: {
                        service: t,
                        uuid: "56"
                    },
                    _widgetRecordProvider: r
                })))), c.createElement(q, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: `<svg width='14' height='24' viewBox='0 0 14 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M11.5312 11.4688C11.8125 11.7812 11.8125 12.25 11.5312 12.5312L5.53125 18.5312C5.21875 18.8438 4.75 18.8438 4.46875 18.5312C4.15625 18.25 4.15625 17.7812 4.46875 17.5L9.9375 12.0312L4.46875 6.53125C4.15625 6.25 4.15625 5.78125 4.46875 5.5C4.75 5.1875 5.21875 5.1875 5.5 5.5L11.5312 11.4688Z' fill='#181C25'/>\r
</svg>\r
`,
                        ExtendedClass: "rotate-180"
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "57",
                        alias: "8"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }))), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "height: auto; overscroll-behavior: none;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: "center-content-container overflow-vertical",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "CenterContainer"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: s.getCachedValue(t.getId("LayoutWrapper.Style"), function() {
                        return "full-height layout layout-blank" + (s.variables.hasFixedHeaderIn ? " fixed-header" : "") + (s.variables.enableAccessibilityFeaturesIn ? " has-accessible-features" : "") + (s.variables.extendedClassIn === "" ? "" : " " + s.variables.extendedClassIn)
                    }, function() {
                        return s.variables.hasFixedHeaderIn
                    }, function() {
                        return s.variables.enableAccessibilityFeaturesIn
                    }, function() {
                        return s.variables.extendedClassIn
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "LayoutWrapper"
                    },
                    _widgetRecordProvider: r,
                    style_dataFetchStatus: I.calculateDataFetchStatus(s.variables._hasFixedHeaderInDataFetchStatus, s.variables._enableAccessibilityFeaturesInDataFetchStatus, s.variables._extendedClassInDataFetchStatus)
                }, c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #fff;"
                    },
                    style: "content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "Content"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(z, {
                    align: 0,
                    content: h.props.placeholders.header,
                    extendedProperties: {
                        style: "background-color: #181c25; color: #181c25; padding: 0px;"
                    },
                    style: s.getCachedValue(t.getId("Header.Style"), function() {
                        return k.isDesktop$Action(d).isDesktopOut ? "display-none" : ""
                    }),
                    _idProps: {
                        service: t,
                        name: "Header"
                    },
                    _widgetRecordProvider: r
                }), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    style: s.getCachedValue(t.getId("SubYJTS8R0ulOwdQhpm2TA.Style"), function() {
                        return "layout-base-hero-bg " + (s.variables.hasHeroBottomRadiusIn ? "layout-base-hero-radius" : "")
                    }, function() {
                        return s.variables.hasHeroBottomRadiusIn
                    }),
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "62"
                    },
                    _widgetRecordProvider: r,
                    style_dataFetchStatus: I.calculateDataFetchStatus(s.variables._hasHeroBottomRadiusInDataFetchStatus)
                }, c.createElement(z, {
                    align: 0,
                    content: h.props.placeholders.heroContent,
                    style: s.getCachedValue(t.getId("HeroContent.Style"), function() {
                        return (s.variables.hasTopPaddingIn ? "layout-base-hero-top-padding" : "") + " layout-hero-content"
                    }, function() {
                        return s.variables.hasTopPaddingIn
                    }),
                    _idProps: {
                        service: t,
                        name: "HeroContent"
                    },
                    _widgetRecordProvider: r,
                    style_dataFetchStatus: I.calculateDataFetchStatus(s.variables._hasTopPaddingInDataFetchStatus)
                })), c.createElement(b, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        role: "main",
                        style: "background-color: #fff;"
                    },
                    style: "main-content",
                    visible: !0,
                    _idProps: {
                        service: t,
                        name: "MainContentWrapper"
                    },
                    _widgetRecordProvider: r
                }, c.createElement(z, {
                    align: 0,
                    content: h.props.placeholders.mainContent,
                    style: "content-middle",
                    _idProps: {
                        service: t,
                        name: "MainContent"
                    },
                    _widgetRecordProvider: r
                }))))), c.createElement(b, {
                    align: 0,
                    animate: !0,
                    gridProperties: {
                        classes: "OSInline",
                        width: "23%"
                    },
                    visible: s.variables.hasRightContainerIn,
                    _idProps: {
                        service: t,
                        uuid: "66"
                    },
                    _widgetRecordProvider: r,
                    visible_dataFetchStatus: I.calculateDataFetchStatus(s.variables._hasRightContainerInDataFetchStatus)
                }))), c.createElement(nt, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "67",
                        alias: "9"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(Ve, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "68",
                        alias: "10"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(Ae, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "69",
                        alias: "11"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                }), c.createElement(it, {
                    getOwnerSpan: i(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: i(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Isvisible: s.getCachedValue(t.getId("g0tYncz3tECDXKAxY2E_aA.Isvisible"), function() {
                            return s.variables.isBottomNavVisibleIn && !k.isDesktop$Action(d).isDesktopOut
                        }, function() {
                            return s.variables.isBottomNavVisibleIn
                        }),
                        _isvisibleInDataFetchStatus: I.calculateDataFetchStatus(s.variables._isBottomNavVisibleInDataFetchStatus),
                        Screen: s.variables.screenIn,
                        _screenInDataFetchStatus: I.calculateDataFetchStatus(s.variables._screenInDataFetchStatus)
                    },
                    events: {
                        _handleError: i(function(f) {
                            e.handleError(f)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: a
                    },
                    _idProps: {
                        service: t,
                        uuid: "70",
                        alias: "12"
                    },
                    _widgetRecordProvider: r,
                    _dependencies: []
                })]
            }, function() {
                return []
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: i(function() {
                return {
                    codeFunction: "LayoutBase",
                    functionKey: "555912bf-fb5a-4664-a8e3-085728fdece4",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Layouts.LayoutBase",
            modelFactory: yt,
            controllerFactory: St
        });
        return v.getCssDependencies = function() {
            return ["css/dashboard.Layouts.LayoutBase.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return ["scripts/dashboard.UserScripts.AppTheme.js"]
        }, v.getBlocks = function() {
            return [tt, Se, q, Ce, nt, Ve, Ae, it]
        }, v
    }, "componentFactory"),
    Ii = tr();
export {
    tt as a, Ii as b
};