import {
    v as t,
    x as Fr
} from "./_oschunk-5KJVGEL7.js";
import {
    c as e
} from "./_oschunk-QHO7QY6K.js";
var Ph = class Ph extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("code", "codeAttr", "code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("message", "messageAttr", "message", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ph, "ST_ce3665169ee165087a4fa593347f539dStructure");
var $ = Ph;
$.init();
var Bh = class Bh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $)
        }, !0, $)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Bh, "ST_0a849d490938e0e6be2b66ff11091523Structure");
var Vr = Bh;
Vr.init();
var Eh = class Eh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Applies_to", "applies_toAttr", "applies_to", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Max", "maxAttr", "max", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Eh, "ST_c2546146ca44bb59a2a2de5acfe0b484Structure");
var tt = Eh;
tt.init();
var Ch = class Ch extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Applies_to", "applies_toAttr", "applies_to", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Hourly", "hourlyAttr", "hourly", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Minutely", "minutelyAttr", "minutely", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ch, "ST_e422048bbd3aba1526832ee4606bb980Structure");
var G = Ch;
G.init();
var Lh = class Lh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "max_proposal_subscription", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tt)
        }, !0, tt), this.attr("Max_requestes_general", "max_requestes_generalAttr", "max_requestes_general", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G), this.attr("Max_requests_outcome", "max_requests_outcomeAttr", "max_requests_outcome", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G), this.attr("Max_requests_pricing", "max_requests_pricingAttr", "max_requests_pricing", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Lh, "ST_141ef15563438703b2e42d78c6c7aefeStructure");
var et = Lh;
et.init();
var vh = class vh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BTC", "bTCAttr", "BTC", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ETH", "eTHAttr", "ETH", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("EUR", "eURAttr", "EUR", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("GBP", "gBPAttr", "GBP", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("LTC", "lTCAttr", "LTC", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("USDC", "uSDCAttr", "USDC", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("UST", "uSTAttr", "UST", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("XRP", "xRPAttr", "XRP", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("EUSDT", "eUSDTAttr", "eUSDT", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("TUSDT", "tUSDTAttr", "tUSDT", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vh, "ST_2a14839a43e1fca3e50600e797d0e612Structure");
var rt = vh;
rt.init();
var qh = class qh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max", "maxAttr", "max", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Min", "minAttr", "min", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qh, "ST_8b8a7d131f11e4011391f72ed3597a0eStructure");
var d = qh;
d.init();
var jh = class jh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fees", "feesAttr", "fees", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rt)
        }, !0, rt), this.attr("Limits", "limitsAttr", "limits", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d), this.attr("Limits_ctrader", "limits_ctraderAttr", "limits_ctrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d), this.attr("Limits_derivez", "limits_derivezAttr", "limits_derivez", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d), this.attr("Limits_dxtrade", "limits_dxtradeAttr", "limits_dxtrade", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d), this.attr("Limits_mt5", "limits_mt5Attr", "limits_mt5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jh, "ST_b81b243ca5642018a62b9438e213af08Structure");
var w = jh;
w.init();
var kh = class kh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Stake_default", "stake_defaultAttr", "stake_default", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(kh, "ST_2b2fc63a2c5dd19a88c97ed75635ef82Structure");
var x = kh;
x.init();
var Uh = class Uh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Stake_default", "stake_defaultAttr", "stake_default", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Uh, "ST_e9aa881415a78b4026eaae8ff05abb61Structure");
var f = Uh;
f.init();
var Fh = class Fh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x), this.attr("BTC", "bTCAttr", "BTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("ETH", "eTHAttr", "ETH", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("EUR", "eURAttr", "EUR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x), this.attr("GBP", "gBPAttr", "GBP", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x), this.attr("LTC", "lTCAttr", "LTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x), this.attr("USDC", "uSDCAttr", "USDC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("UST", "uSTAttr", "UST", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("XRP", "xRPAttr", "XRP", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("EUSDT", "eUSDTAttr", "eUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f), this.attr("TUSDT", "tUSDTAttr", "tUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Fh, "ST_f85e728670d653d5fa01ee2557e6e730Structure");
var at = Fh;
at.init();
var Vh = class Vh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "all", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Demo", "demoAttr", "demo", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Real", "realAttr", "real", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Vh, "ST_f20c843fba72b4c6aef8e435f175a9e5Structure");
var st = Vh;
st.init();
var _h = class _h extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "all", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Server_number", "server_numberAttr", "server_number", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Deposits", "depositsAttr", "deposits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Withdrawals", "withdrawalsAttr", "withdrawals", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(_h, "ST_46f1b4e2ecb4e84910e0b09c3d82ea15Structure");
var _r = _h;
_r.init();
var Nh = class Nh extends t.GenericRecordList {
    static getItemType() {
        return _r
    }
};
e(Nh, "RL_d4fccd3e80d193e265d34ff56d4a302a");
var Ka = Nh;
var Mh = class Mh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Demo", "demoAttr", "demo", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Ka)
        }, !0, Ka), this.attr("Real", "realAttr", "real", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Ka)
        }, !0, Ka)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Mh, "ST_66479ac0d3a37fcf31e7645e323ef0e1Structure");
var it = Mh;
it.init();
var zh = class zh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BR", "bRAttr", "BR", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("BW", "bWAttr", "BW", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ID", "iDAttr", "ID", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("IN", "iNAttr", "IN", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("KE", "kEAttr", "KE", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("LK", "lKAttr", "LK", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("NG", "nGAttr", "NG", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("TZ", "tZAttr", "TZ", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ZA", "zAAttr", "ZA", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ZW", "zWAttr", "ZW", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Default", "defaultAttr", "default", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(zh, "ST_9b7c28a3650c4dbadc24c2da4c77a3f5Structure");
var nt = zh;
nt.init();
var AD = class AD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "initial_deposit_per_country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nt)
        }, !0, nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new AD(new AD.RecordClass({
            initial_deposit_per_countryAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(AD, "ST_c7bba0c276d724a640fd9ae5d39aa04eStructure");
var ot = AD;
ot.init();
var Xh = class Xh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limits", "api_call_limitsAttr", "api_call_limits", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new et)
        }, !0, et), this.attr("Broker_codes", "broker_codesAttr", "broker_codes", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Clients_country", "clients_countryAttr", "clients_country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currencies_config", "currencies_configAttr", "currencies_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new at)
        }, !0, at), this.attr("Dxtrade_status", "dxtrade_statusAttr", "dxtrade_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new st)
        }, !0, st), this.attr("Mt5_status", "mt5_statusAttr", "mt5_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new it)
        }, !0, it), this.attr("Payment_agents", "payment_agentsAttr", "payment_agents", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ot)
        }, !0, ot), this.attr("Site_status", "site_statusAttr", "site_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Supported_languages", "supported_languagesAttr", "supported_languages", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Terms_conditions_version", "terms_conditions_versionAttr", "terms_conditions_version", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Xh, "ST_4fc107f3f00705667fa092c970065f35Structure");
var ct = Xh;
ct.init();
var GD = class GD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "website_status", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new GD(new GD.RecordClass({
            website_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(GD, "ST_cef11b56e6da93b85f992e1455ba4717Structure");
var ut = GD;
ut.init();
var Wh = class Wh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ut)
        }, !0, ut), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Website_status", "website_statusAttr", "website_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ct)
        }, !0, ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Wh, "ST_e61d85f6aadd57329cc664ba1d0e64c1Structure");
var Nr = Wh;
Nr.init();
var Hh = class Hh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Phone_number_verify", "phone_number_verifyAttr", "phone_number_verify", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Otp", "otpAttr", "otp", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Hh, "ST_1b66e77b43cfa957e304643e93df7a64Structure");
var Mr = Hh;
Mr.init();
var Jh = class Jh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Bvi", "bviAttr", "bvi", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Labuan", "labuanAttr", "labuan", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Vanuatu", "vanuatuAttr", "vanuatu", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Jh, "ST_349094d98d9594831ba9e5194411246fStructure");
var gt = Jh;
gt.init();
var Yh = class Yh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Default", "defaultAttr", "default", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Landing_company", "landing_companyAttr", "landing_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gt)
        }, !0, gt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Yh, "ST_55ea19c18b42991c3f5575c063ad7ca7Structure");
var xt = Yh;
xt.init();
var wD = class wD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Invalid_pattern", "invalid_patternAttr", "invalid_pattern", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wD(new wD.RecordClass({
            invalid_patternAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(wD, "ST_333caa433a680d581b2dfdf80dcbab60Structure");
var bt = wD;
bt.init();
var Zh = class Zh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mandatory", "mandatoryAttr", "mandatory", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Tin_cleaner", "tin_cleanerAttr", "tin_cleaner", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tin_format", "tin_formatAttr", "tin_format", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Tin_format_description", "tin_format_descriptionAttr", "tin_format_description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Zh, "ST_1c923b28044712e7268167783ecfdfbeStructure");
var Rt = Zh;
Rt.init();
var Kh = class Kh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Non_participating_jurisdictions", "non_participating_jurisdictionsAttr", "non_participating_jurisdictions", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xt)
        }, !0, xt), this.attr("Postcode", "postcodeAttr", "postcode", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bt)
        }, !0, bt), this.attr("Tax", "taxAttr", "tax", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rt)
        }, !0, Rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Kh, "ST_b5282edb36283adb40969ef7004c3e79Structure");
var It = Kh;
It.init();
var Qh = class Qh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Lifetime_valid", "lifetime_validAttr", "lifetime_valid", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Providers", "providersAttr", "providers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Qh, "ST_709b151c5172b8ff1042e5fecf4be0ecStructure");
var u = Qh;
u.init();
var PD = class PD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Nik", "nikAttr", "nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new PD(new PD.RecordClass({
            nikAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(PD, "ST_3b8df1b0da2c2bbfdff9bb6416b86701Structure");
var ht = PD;
ht.init();
var $h = class $h extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Additional", "additionalAttr", "additional", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($h, "ST_803bffb999fad6a38040b2086877902eStructure");
var W = $h;
W.init();
var tA = class tA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dni", "dniAttr", "dni", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("National_id", "national_idAttr", "national_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Cpf", "cpfAttr", "cpf", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Passport", "passportAttr", "passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W), this.attr("Aadhaar", "aadhaarAttr", "aadhaar", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W), this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Epic", "epicAttr", "epic", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Pan", "panAttr", "pan", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Nik", "nikAttr", "nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Alien_card", "alien_cardAttr", "alien_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Curp", "curpAttr", "curp", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u), this.attr("Nin_slip", "nin_slipAttr", "nin_slip", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(tA, "ST_e9350867621f419f78bd47d2bb88d9ceStructure");
var At = tA;
At.init();
var eA = class eA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document_types", "document_typesAttr", "document_types", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ht)
        }, !0, ht), this.attr("Has_visual_sample", "has_visual_sampleAttr", "has_visual_sample", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new At)
        }, !0, At), this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(eA, "ST_30cf47a274820f1ac96cf412803888fdStructure");
var q = eA;
q.init();
var BD = class BD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new BD(new BD.RecordClass({
            display_nameAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(BD, "ST_c4a5ea0056d7d4d64b0630a9fc26f60bStructure");
var l = BD;
l.init();
var rA = class rA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_identity_card", "national_identity_cardAttr", "national_identity_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Passport", "passportAttr", "passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Driving_licence", "driving_licenceAttr", "driving_licence", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Residence_permit", "residence_permitAttr", "residence_permit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Immigration_status_document", "immigration_status_documentAttr", "immigration_status_document", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("National_health_insurance_card", "national_health_insurance_cardAttr", "national_health_insurance_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Asylum_registration_card", "asylum_registration_cardAttr", "asylum_registration_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Visa", "visaAttr", "visa", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Service_identity_card", "service_identity_cardAttr", "service_identity_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l), this.attr("Voter_id", "voter_idAttr", "voter_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(rA, "ST_2aef4efdcc8a8ad935c2f051f3051327Structure");
var Gt = rA;
Gt.init();
var aA = class aA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gt)
        }, !0, Gt), this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(aA, "ST_10e78341d21be3a7dc573dcf4252c9dbStructure");
var wt = aA;
wt.init();
var sA = class sA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "idv", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q), this.attr("Onfido", "onfidoAttr", "onfido", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wt)
        }, !0, wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(sA, "ST_6669f981cb8653c55787de44bdd42a18Structure");
var Pt = sA;
Pt.init();
var ED = class ED extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Services", "servicesAttr", "services", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pt)
        }, !0, Pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ED(new ED.RecordClass({
            servicesAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ED, "ST_8812c3cbc0a0d322acb5354526a670b4Structure");
var Bt = ED;
Bt.init();
var iA = class iA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Accept", "acceptAttr", "accept", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Message", "messageAttr", "message", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iA, "ST_a37989da54adde60afe7657f5bc1d06eStructure");
var Et = iA;
Et.init();
var nA = class nA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Bvi", "bviAttr", "bvi", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Labuan", "labuanAttr", "labuan", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Vanuatu", "vanuatuAttr", "vanuatu", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(nA, "ST_d845e9af38689337f2bff5d766253a88Structure");
var Ct = nA;
Ct.init();
var oA = class oA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Default", "defaultAttr", "default", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Landing_company", "landing_companyAttr", "landing_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ct)
        }, !0, Ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(oA, "ST_c77c7364c5e093c1d601fe854bbf1fd7Structure");
var Lt = oA;
Lt.init();
var CD = class CD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_limit", "max_limitAttr", "max_limit", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new CD(new CD.RecordClass({
            max_limitAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(CD, "ST_113226709b84b71c70ebd50296313568Structure");
var vt = CD;
vt.init();
var cA = class cA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Disclaimer", "disclaimerAttr", "disclaimer", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Et)
        }, !0, Et), this.attr("Risk_level", "risk_levelAttr", "risk_level", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Lt)
        }, !0, Lt), this.attr("Turnover", "turnoverAttr", "turnover", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vt)
        }, !0, vt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cA, "ST_9eb2d1268b055c9ba20852d2758a5050Structure");
var qt = cA;
qt.init();
var uA = class uA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Common_reporting_standard", "common_reporting_standardAttr", "common_reporting_standard", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new It)
        }, !0, It), this.attr("Identity", "identityAttr", "identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bt)
        }, !0, Bt), this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "jurisdiction_risk_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qt)
        }, !0, qt), this.attr("Phone_idd", "phone_iddAttr", "phone_idd", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tin_format", "tin_formatAttr", "tin_format", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Disabled", "disabledAttr", "disabled", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Partner_signup", "partner_signupAttr", "partner_signup", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Selected", "selectedAttr", "selected", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Account_opening_self_declaration_required", "account_opening_self_declaration_requiredAttr", "account_opening_self_declaration_required", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uA, "ST_bf5d4ab423fae3ff38a977653adc8398Structure");
var xr = uA;
xr.init();
var pA = class pA extends t.GenericRecordList {
    static getItemType() {
        return xr
    }
};
e(pA, "RL_071a5687136a6dbeecb0a0d193c188a2");
var LD = pA;
var vD = class vD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Residence_list", "residence_listAttr", "residence_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new LD)
        }, !0, LD)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vD(new vD.RecordClass({
            residence_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(vD, "ST_63a473e932ef99f5271718b62399e682Structure");
var Qa = vD;
Qa.init();
var lA = class lA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsSuccess", "isSuccessAttr", "IsSuccess", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("IsError", "isErrorAttr", "IsError", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("IsWarning", "isWarningAttr", "IsWarning", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lA, "ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure");
var zr = lA;
zr.init();
var mA = class mA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Phone_number_challenge", "phone_number_challengeAttr", "phone_number_challenge", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Carrier", "carrierAttr", "carrier", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email_code", "email_codeAttr", "email_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mA, "ST_b04713a56316d52deeb5eab31f0fde62Structure");
var Xr = mA;
Xr.init();
var fA = class fA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Client_password", "client_passwordAttr", "client_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Residence", "residenceAttr", "residence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Verification_code", "verification_codeAttr", "verification_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Affiliate_token", "affiliate_tokenAttr", "affiliate_token", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Gclid_url", "gclid_urlAttr", "gclid_url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_ad_id", "utm_ad_idAttr", "utm_ad_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_adgroup_id", "utm_adgroup_idAttr", "utm_adgroup_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_adrollclk_id", "utm_adrollclk_idAttr", "utm_adrollclk_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_campaign", "utm_campaignAttr", "utm_campaign", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_campaign_id", "utm_campaign_idAttr", "utm_campaign_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_content", "utm_contentAttr", "utm_content", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_fbcl_id", "utm_fbcl_idAttr", "utm_fbcl_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_gl_client_id", "utm_gl_client_idAttr", "utm_gl_client_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_medium", "utm_mediumAttr", "utm_medium", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_msclk_id", "utm_msclk_idAttr", "utm_msclk_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_source", "utm_sourceAttr", "utm_source", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_term", "utm_termAttr", "utm_term", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fA, "ST_d4ed48681c55954edc02f19b0ed492e7Structure");
var jt = fA;
jt.init();
var qD = class qD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "website_status", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qD(new qD.RecordClass({
            website_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(qD, "ST_39c69c310b1fed6e6a637381cf367162Structure");
var kt = qD;
kt.init();
var TA = class TA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Applies_to", "applies_toAttr", "applies_to", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Max", "maxAttr", "max", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TA, "ST_ac4f1b4870aba80de82d4c04f7b530ceStructure");
var Ut = TA;
Ut.init();
var DA = class DA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Applies_to", "applies_toAttr", "applies_to", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Hourly", "hourlyAttr", "hourly", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Minutely", "minutelyAttr", "minutely", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(DA, "ST_e9af53f34f5d2c71a49407f1ed42d7f7Structure");
var P = DA;
P.init();
var yA = class yA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "max_proposal_subscription", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ut)
        }, !0, Ut), this.attr("Max_requestes_general", "max_requestes_generalAttr", "max_requestes_general", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P), this.attr("Max_requests_outcome", "max_requests_outcomeAttr", "max_requests_outcome", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P), this.attr("Max_requests_pricing", "max_requests_pricingAttr", "max_requests_pricing", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yA, "ST_af8134183a4bd7e3eec97ada0cf46b5eStructure");
var Ft = yA;
Ft.init();
var dA = class dA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "cashier", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Ramp", "rampAttr", "ramp", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dA, "ST_b8e5132e8639404a10bb651dc17997bcStructure");
var j = dA;
j.init();
var SA = class SA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BTC", "bTCAttr", "BTC", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("ETH", "eTHAttr", "ETH", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("EUR", "eURAttr", "EUR", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("GBP", "gBPAttr", "GBP", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("LTC", "lTCAttr", "LTC", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("USDC", "uSDCAttr", "USDC", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("UST", "uSTAttr", "UST", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("XRP", "xRPAttr", "XRP", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("EUSDT", "eUSDTAttr", "eUSDT", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("TUSDT", "tUSDTAttr", "tUSDT", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(SA, "ST_ae69fbe61d3588d5f7a813905e5dc3aeStructure");
var Vt = SA;
Vt.init();
var OA = class OA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max", "maxAttr", "max", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Min", "minAttr", "min", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(OA, "ST_d15d22dc3a60a2e6365116c61a16aaa0Structure");
var O = OA;
O.init();
var gA = class gA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fees", "feesAttr", "fees", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vt)
        }, !0, Vt), this.attr("Limits", "limitsAttr", "limits", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O), this.attr("Limits_ctrader", "limits_ctraderAttr", "limits_ctrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O), this.attr("Limits_derivez", "limits_derivezAttr", "limits_derivez", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O), this.attr("Limits_dxtrade", "limits_dxtradeAttr", "limits_dxtrade", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O), this.attr("Limits_mt5", "limits_mt5Attr", "limits_mt5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gA, "ST_4e063a3cef8e9e085284fb57c1326006Structure");
var k = gA;
k.init();
var xA = class xA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j), this.attr("Stake_default", "stake_defaultAttr", "stake_default", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xA, "ST_6eafdf6bd9852632690d0672a511a98fStructure");
var R = xA;
R.init();
var bA = class bA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_deposit_suspended", "is_deposit_suspendedAttr", "is_deposit_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_suspended", "is_suspendedAttr", "is_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_withdrawal_suspended", "is_withdrawal_suspendedAttr", "is_withdrawal_suspended", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j), this.attr("Stake_default", "stake_defaultAttr", "stake_default", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Transfer_between_accounts", "transfer_between_accountsAttr", "transfer_between_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(bA, "ST_04eaf04e4147681bc07ba614af4e7e78Structure");
var T = bA;
T.init();
var RA = class RA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R), this.attr("BTC", "bTCAttr", "BTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("ETH", "eTHAttr", "ETH", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("EUR", "eURAttr", "EUR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R), this.attr("GBP", "gBPAttr", "GBP", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R), this.attr("LTC", "lTCAttr", "LTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R), this.attr("USDC", "uSDCAttr", "USDC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("UST", "uSTAttr", "UST", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("XRP", "xRPAttr", "XRP", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("EUSDT", "eUSDTAttr", "eUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T), this.attr("TUSDT", "tUSDTAttr", "tUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(RA, "ST_4fa180d49a839964a4a640104b10a272Structure");
var _t = RA;
_t.init();
var IA = class IA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "all", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Demo", "demoAttr", "demo", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Real", "realAttr", "real", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(IA, "ST_977d84487e32bee2c1a14da15d247b5fStructure");
var Nt = IA;
Nt.init();
var hA = class hA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "all", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Server_number", "server_numberAttr", "server_number", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Deposits", "depositsAttr", "deposits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Withdrawals", "withdrawalsAttr", "withdrawals", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hA, "ST_cd83fe90bac6d8f5fe1d8e3dce9729c1Structure");
var br = hA;
br.init();
var AA = class AA extends t.GenericRecordList {
    static getItemType() {
        return br
    }
};
e(AA, "RL_593060ea0fb9fd453ef904bd5780284a");
var co = AA;
var GA = class GA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Demo", "demoAttr", "demo", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new co)
        }, !0, co), this.attr("Real", "realAttr", "real", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new co)
        }, !0, co)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(GA, "ST_9d2eeec2f5ab741e3d87ce62bfe442ffStructure");
var Mt = GA;
Mt.init();
var wA = class wA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BR", "bRAttr", "BR", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("BW", "bWAttr", "BW", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ID", "iDAttr", "ID", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("IN", "iNAttr", "IN", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("KE", "kEAttr", "KE", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("LK", "lKAttr", "LK", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("NG", "nGAttr", "NG", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("TZ", "tZAttr", "TZ", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ZA", "zAAttr", "ZA", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("ZW", "zWAttr", "ZW", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Default", "defaultAttr", "default", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(wA, "ST_af97180714ce3993e80d246ca4429825Structure");
var zt = wA;
zt.init();
var jD = class jD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "initial_deposit_per_country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zt)
        }, !0, zt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jD(new jD.RecordClass({
            initial_deposit_per_countryAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(jD, "ST_d331548db274235fee458e1a8f950858Structure");
var Xt = jD;
Xt.init();
var PA = class PA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limits", "api_call_limitsAttr", "api_call_limits", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ft)
        }, !0, Ft), this.attr("Broker_codes", "broker_codesAttr", "broker_codes", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Clients_country", "clients_countryAttr", "clients_country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currencies_config", "currencies_configAttr", "currencies_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _t)
        }, !0, _t), this.attr("Dxtrade_status", "dxtrade_statusAttr", "dxtrade_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nt)
        }, !0, Nt), this.attr("Mt5_status", "mt5_statusAttr", "mt5_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mt)
        }, !0, Mt), this.attr("Payment_agents", "payment_agentsAttr", "payment_agents", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xt)
        }, !0, Xt), this.attr("Supported_languages", "supported_languagesAttr", "supported_languages", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Terms_conditions_version", "terms_conditions_versionAttr", "terms_conditions_version", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PA, "ST_bbf8c5d47c5db3fd5346cb42e483a9fdStructure");
var Wt = PA;
Wt.init();
var BA = class BA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kt)
        }, !0, kt), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Website_status", "website_statusAttr", "website_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wt)
        }, !0, Wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(BA, "ST_c864353821feed79663806f3e445d40eStructure");
var $a = BA;
$a.init();
var EA = class EA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(EA, "ST_eda668e7f210db3d136460db1684b63bStructure");
var o = EA;
o.init();
var CA = class CA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Additional", "additionalAttr", "additional", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(CA, "ST_6d2f2a84ec0b7321167e27d19b6d33f8Structure");
var D = CA;
D.init();
var LA = class LA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_id", "national_idAttr", "national_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Cpf", "cpfAttr", "cpf", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Passport", "passportAttr", "passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D), this.attr("Ssnit", "ssnitAttr", "ssnit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Aadhaar", "aadhaarAttr", "aadhaar", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D), this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Epic", "epicAttr", "epic", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Pan", "panAttr", "pan", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Nik", "nikAttr", "nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Alien_card", "alien_cardAttr", "alien_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Nin_slip", "nin_slipAttr", "nin_slip", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("National_id_no_photo", "national_id_no_photoAttr", "national_id_no_photo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(LA, "ST_b539dd26c0de381503da71ca2655394fStructure");
var pt = LA;
pt.init();
var vA = class vA extends t.GenericRecordList {
    static getItemType() {
        return o
    }
};
e(vA, "RL_72539fe43229e47c6f0bb03bc660d8fe");
var uo = vA;
var qA = class qA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Has_visual_sample", "has_visual_sampleAttr", "has_visual_sample", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pt)
        }, !0, pt), this.attr("Documents_supported_list", "documents_supported_listAttr", "Documents_supported_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new uo)
        }, !0, uo)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qA, "ST_0c954cdeca234316306bb67c6b24f05bStructure");
var lt = qA;
lt.init();
var jA = class jA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_id", "national_idAttr", "national_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Cpf", "cpfAttr", "cpf", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Passport", "passportAttr", "passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D), this.attr("Ssnit", "ssnitAttr", "ssnit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Aadhaar", "aadhaarAttr", "aadhaar", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D), this.attr("Drivers_license", "drivers_licenseAttr", "drivers_license", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Epic", "epicAttr", "epic", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Pan", "panAttr", "pan", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Nik", "nikAttr", "nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Alien_card", "alien_cardAttr", "alien_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("Nin_slip", "nin_slipAttr", "nin_slip", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o), this.attr("National_id_no_photo", "national_id_no_photoAttr", "national_id_no_photo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jA, "ST_537325baeed781544ed9f203cd7f9384Structure");
var mt = jA;
mt.init();
var kA = class kA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mt)
        }, !0, mt), this.attr("Is_country_supported", "is_country_supportedAttr", "is_country_supported", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(kA, "ST_8c2ccdb8651c27e0fadf6d9395795b9fStructure");
var ft = kA;
ft.init();
var UA = class UA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "idv", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lt)
        }, !0, lt), this.attr("Onfido", "onfidoAttr", "onfido", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ft)
        }, !0, ft)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(UA, "ST_dbace2176e52429900d8209086350204Structure");
var Tt = UA;
Tt.init();
var kD = class kD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Services", "servicesAttr", "services", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tt)
        }, !0, Tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kD(new kD.RecordClass({
            servicesAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(kD, "ST_b4cd08f1a2e52c6c30b2b1fd8abf3029Structure");
var Dt = kD;
Dt.init();
var FA = class FA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity", "identityAttr", "identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dt)
        }, !0, Dt), this.attr("Phone_idd", "phone_iddAttr", "phone_idd", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tin_format", "tin_formatAttr", "tin_format", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Disabled", "disabledAttr", "disabled", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Selected", "selectedAttr", "selected", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Account_opening_self_declaration_required", "account_opening_self_declaration_requiredAttr", "account_opening_self_declaration_required", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(FA, "ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure");
var Wr = FA;
Wr.init();
var VA = class VA extends t.GenericRecordList {
    static getItemType() {
        return Wr
    }
};
e(VA, "RL_ad0d7e810e49e61265e2d337c04416fc");
var po = VA;
var _A = class _A extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Residence_list", "residence_listAttr", "residence_list", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(_A, "ST_c98d478d92307b8784bb1e90423f775bStructure");
var B = _A;
B.init();
var NA = class NA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Residence_list", "residence_listAttr", "residence_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new po)
        }, !0, po)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(NA, "ST_0be4704c381e15995202804b221a5e3aStructure");
var Hr = NA;
Hr.init();
var MA = class MA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Verify_email", "verify_emailAttr", "verify_email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(MA, "ST_8ae1180ce44995afc567de3f72e5c712Structure");
var Jr = MA;
Jr.init();
var zA = class zA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Tabs", "tabsAttr", "Tabs", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(zA, "EN_88a0b98029aeb361728476a53c43c460EntityRecord");
var Yr = zA;
Yr.init();
var UD = class UD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsTabInfo", "cFDsTabInfoAttr", "CFDsTabInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yr)
        }, !0, Yr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new UD(new UD.RecordClass({
            cFDsTabInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "267bfdc5-97ed-3128-1a85-e5f086e458b7"
    }
};
e(UD, "RC_267bfdc597ed31281a85e5f086e458b7");
var lo = UD;
lo.init();
var WA = class WA extends t.GenericRecordList {
    static getItemType() {
        return lo
    }
};
e(WA, "RL_16ee1202e8f0deac948d800309773e12");
var XA = WA;
var FD = class FD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_settings", "get_settingsAttr", "get_settings", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new FD(new FD.RecordClass({
            get_settingsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(FD, "ST_96047f3e265fbed2401212ad81dfa1f4Structure");
var Ht = FD;
Ht.init();
var VD = class VD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Wallet", "walletAttr", "wallet", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new VD(new VD.RecordClass({
            walletAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(VD, "ST_0543ba6e58ccc819d0ba65db33df025eStructure");
var Jt = VD;
Jt.init();
var HA = class HA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_turnover", "account_turnoverAttr", "account_turnover", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commodities_trading_experience", "commodities_trading_experienceAttr", "commodities_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commodities_trading_frequency", "commodities_trading_frequencyAttr", "commodities_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Education_level", "education_levelAttr", "education_level", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Employment_industry", "employment_industryAttr", "employment_industry", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Employment_status", "employment_statusAttr", "employment_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Estimated_worth", "estimated_worthAttr", "estimated_worth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Forex_trading_experience", "forex_trading_experienceAttr", "forex_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Forex_trading_frequency", "forex_trading_frequencyAttr", "forex_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Income_source", "income_sourceAttr", "income_source", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Indices_trading_experience", "indices_trading_experienceAttr", "indices_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Indices_trading_frequency", "indices_trading_frequencyAttr", "indices_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Net_income", "net_incomeAttr", "net_income", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Occupation", "occupationAttr", "occupation", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_derivatives_trading_experience", "other_derivatives_trading_experienceAttr", "other_derivatives_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_derivatives_trading_frequency", "other_derivatives_trading_frequencyAttr", "other_derivatives_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_instruments_trading_experience", "other_instruments_trading_experienceAttr", "other_instruments_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Other_instruments_trading_frequency", "other_instruments_trading_frequencyAttr", "other_instruments_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Stocks_trading_experience", "stocks_trading_experienceAttr", "stocks_trading_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Stocks_trading_frequency", "stocks_trading_frequencyAttr", "stocks_trading_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(HA, "ST_35e76a2e1583feb611523ac6c760c8a9Structure");
var Yt = HA;
Yt.init();
var JA = class JA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Carriers", "carriersAttr", "carriers", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Next_attempt", "next_attemptAttr", "next_attempt", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Next_email_attempt", "next_email_attemptAttr", "next_email_attempt", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Next_verify_attempt", "next_verify_attemptAttr", "next_verify_attempt", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Verified", "verifiedAttr", "verified", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(JA, "ST_ef2ca9573c3bd1e27b35145a902be10bStructure");
var Zt = JA;
Zt.init();
var YA = class YA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_opening_reason", "account_opening_reasonAttr", "account_opening_reason", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Address_city", "address_cityAttr", "address_city", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Address_line_1", "address_line_1Attr", "address_line_1", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Address_line_2", "address_line_2Attr", "address_line_2", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Address_postcode", "address_postcodeAttr", "address_postcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Address_state", "address_stateAttr", "address_state", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Allow_copiers", "allow_copiersAttr", "allow_copiers", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Citizen", "citizenAttr", "citizen", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Client_tnc_status", "client_tnc_statusAttr", "client_tnc_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Country_code", "country_codeAttr", "country_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Date_of_birth", "date_of_birthAttr", "date_of_birth", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Dxtrade_user_exception", "dxtrade_user_exceptionAttr", "dxtrade_user_exception", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email_consent", "email_consentAttr", "email_consent", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Employment_status", "employment_statusAttr", "employment_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Feature_flag", "feature_flagAttr", "feature_flag", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jt)
        }, !0, Jt), this.attr("Financial_assessment", "financial_assessmentAttr", "financial_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yt)
        }, !0, Yt), this.attr("First_name", "first_nameAttr", "first_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Has_secret_answer", "has_secret_answerAttr", "has_secret_answer", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Immutable_fields", "immutable_fieldsAttr", "immutable_fields", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Is_authenticated_payment_agent", "is_authenticated_payment_agentAttr", "is_authenticated_payment_agent", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Last_name", "last_nameAttr", "last_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Non_pep_declaration", "non_pep_declarationAttr", "non_pep_declaration", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Phone", "phoneAttr", "phone", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Phone_number_verification", "phone_number_verificationAttr", "phone_number_verification", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zt)
        }, !0, Zt), this.attr("Place_of_birth", "place_of_birthAttr", "place_of_birth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Request_professional_status", "request_professional_statusAttr", "request_professional_status", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Residence", "residenceAttr", "residence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Salutation", "salutationAttr", "salutation", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tax_identification_number", "tax_identification_numberAttr", "tax_identification_number", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tax_residence", "tax_residenceAttr", "tax_residence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_hub", "trading_hubAttr", "trading_hub", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("User_hash", "user_hashAttr", "user_hash", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(YA, "ST_ccbd4ab860fdf3c4690e46bb49937de5Structure");
var Kt = YA;
Kt.init();
var _D = class _D extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Field", "fieldAttr", "field", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _D(new _D.RecordClass({
            fieldAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(_D, "ST_f1644d81fb90e6f4882b198c996831d1Structure");
var H = _D;
H.init();
var ZA = class ZA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Code", "codeAttr", "code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Message", "messageAttr", "message", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Details", "detailsAttr", "details", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new H)
        }, !0, H)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ZA, "ST_8517d9c8b73e866553a1a7b806af5079Structure");
var n = ZA;
n.init();
var KA = class KA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ht)
        }, !0, Ht), this.attr("Get_settings", "get_settingsAttr", "get_settings", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kt)
        }, !0, Kt), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(KA, "ST_5fc2e4a935064c1413d6e989e87decd2Structure");
var ts = KA;
ts.init();
var QA = class QA extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("action", "actionAttr", "action", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("cta_name", "cta_nameAttr", "cta_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("cta_placement", "cta_placementAttr", "cta_placement", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("timestamp", "timestampAttr", "timestamp", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("show_user_id", "show_user_idAttr", "show_user_id", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(QA, "ST_23ff1d290ec4691b1c668ad437100cd0Structure");
var Zr = QA;
Zr.init();
var $A = class $A extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Location", "locationAttr", "Location", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DateTime", "dateTimeAttr", "DateTime", !0, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("TimeZone", "timeZoneAttr", "TimeZone", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($A, "ST_9f1e67525baf02c5f10f80cc2f462aacStructure");
var Kr = $A;
Kr.init();
var tG = class tG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("TypeoOption", "typeoOptionAttr", "TypeoOption", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(tG, "EN_49efcc116edb1d3d6cd601eea8516e64EntityRecord");
var Qr = tG;
Qr.init();
var ND = class ND extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Options", "optionsAttr", "Options", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qr)
        }, !0, Qr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ND(new ND.RecordClass({
            optionsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "500d6aff-d752-292b-92c8-cddd9b92f7b9"
    }
};
e(ND, "RC_500d6affd752292b92c8cddd9b92f7b9");
var mo = ND;
mo.init();
var rG = class rG extends t.GenericRecordList {
    static getItemType() {
        return mo
    }
};
e(rG, "RL_232c89a2d5038d57a9042dc25af9b70b");
var eG = rG;
var MD = class MD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("authorize", "authorizeAttr", "authorize", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new MD(new MD.RecordClass({
            authorizeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(MD, "ST_450f06937a42e6bd68832beac9fd4297Structure");
var Qt = MD;
Qt.init();
var aG = class aG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("DesktopImage", "desktopImageAttr", "DesktopImage", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MobileImage", "mobileImageAttr", "MobileImage", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "Description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DateTime", "dateTimeAttr", "DateTime", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Url", "urlAttr", "Url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Published", "publishedAttr", "Published", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("EventTypeId", "eventTypeIdAttr", "EventTypeId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("LanguageId", "languageIdAttr", "LanguageId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("CountryId", "countryIdAttr", "CountryId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(aG, "EN_f95392f2815efea8bab83c5950c7808fEntityRecord");
var I = aG;
I.init();
var sG = class sG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TimeZone", "timeZoneAttr", "TimeZone", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(sG, "EN_09463e6707d58df93aeeef6ddf271e0dEntityRecord");
var h = sG;
h.init();
var iG = class iG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Event", "eventAttr", "Event", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I), this.attr("Country", "countryAttr", "Country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iG, "ST_0304887a4ae5c8d0581245d3ac4ea5ecStructure");
var $r = iG;
$r.init();
var oG = class oG extends t.GenericRecordList {
    static getItemType() {
        return $r
    }
};
e(oG, "RL_264e3cd600d4f0ed793e9a3a83f297a2");
var nG = oG;
var cG = class cG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DesktopImage", "desktopImageAttr", "DesktopImage", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0), this.attr("MobileImage", "mobileImageAttr", "MobileImage", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cG, "ST_49dc3bc2d063241aae5dd3879dfa11a4Structure");
var es = cG;
es.init();
var uG = class uG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", !1, !1, t.DataTypes.Text, function() {
            return "There are no options to show."
        }, !0), this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", !1, !1, t.DataTypes.Text, function() {
            return "Search..."
        }, !0), this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", !1, !1, t.DataTypes.Text, function() {
            return "There are no options to show."
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uG, "ST_4e53cb8815b86020ced1d2f2652c9b1dStructure");
var rs = uG;
rs.init();
var pG = class pG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DesktopImageName", "desktopImageNameAttr", "DesktopImageName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MobileImageName", "mobileImageNameAttr", "MobileImageName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(pG, "ST_5aac4e0eb05c7f4c7f14409f9c2e3d4dStructure");
var $t = pG;
$t.init();
var lG = class lG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("FileNames", "fileNamesAttr", "FileNames", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $t)
        }, !0, $t)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lG, "ST_2a7ac328ca1ac01bfb70fc00237a0973Structure");
var as = lG;
as.init();
var mG = class mG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CFDsAllPlanId", "cFDsAllPlanIdAttr", "CFDsAllPlanId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("CommissionTypeId", "commissionTypeIdAttr", "CommissionTypeId", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Note", "noteAttr", "Note", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mG, "EN_493b76e80f7e7874bfdae0a32005bfd8EntityRecord");
var yt = mG;
yt.init();
var fG = class fG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Type", "typeAttr", "Type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fG, "EN_b900afe2f8bd767b223227ad3b78ca65EntityRecord");
var E = fG;
E.init();
var TG = class TG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsAllSubPlans", "cFDsAllSubPlansAttr", "CFDsAllSubPlans", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yt)
        }, !0, yt), this.attr("CommissionType", "commissionTypeAttr", "CommissionType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "553aeb2a-b813-7242-0840-47bfd76bf592"
    }
};
e(TG, "RC_553aeb2ab8137242084047bfd76bf592");
var fo = TG;
fo.init();
var yG = class yG extends t.GenericRecordList {
    static getItemType() {
        return fo
    }
};
e(yG, "RL_3fe2b81fb8157cd749809684cb1997db");
var DG = yG;
var dG = class dG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Affiliate_token", "affiliate_tokenAttr", "affiliate_token", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Date_first_contact", "date_first_contactAttr", "date_first_contact", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Gclid_url", "gclid_urlAttr", "gclid_url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Pa_amount", "pa_amountAttr", "pa_amount", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Pa_currency", "pa_currencyAttr", "pa_currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Pa_loginid", "pa_loginidAttr", "pa_loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Pa_remarks", "pa_remarksAttr", "pa_remarks", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Redirect_to", "redirect_toAttr", "redirect_to", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Signup_device", "signup_deviceAttr", "signup_device", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_ad_id", "utm_ad_idAttr", "utm_ad_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_adgroup_id", "utm_adgroup_idAttr", "utm_adgroup_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_adrollclk_id", "utm_adrollclk_idAttr", "utm_adrollclk_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_campaign", "utm_campaignAttr", "utm_campaign", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_campaign_id", "utm_campaign_idAttr", "utm_campaign_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_content", "utm_contentAttr", "utm_content", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_fbcl_id", "utm_fbcl_idAttr", "utm_fbcl_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_gl_client_id", "utm_gl_client_idAttr", "utm_gl_client_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_medium", "utm_mediumAttr", "utm_medium", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_msclk_id", "utm_msclk_idAttr", "utm_msclk_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_source", "utm_sourceAttr", "utm_source", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Utm_term", "utm_termAttr", "utm_term", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dG, "ST_66a31b6dc85d7150aaf5da4cc4b359a4Structure");
var te = dG;
te.init();
var SG = class SG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Verify_email", "verify_emailAttr", "verify_email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Url_parameters", "url_parametersAttr", "url_parameters", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new te)
        }, !0, te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(SG, "ST_89d14f8b4008cb2b12eb9082eeeb95a6Structure");
var ee = SG;
ee.init();
var zD = class zD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("states_list", "states_listAttr", "states_list", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zD(new zD.RecordClass({
            states_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(zD, "ST_8401e8b399f219fdd97b12284d97703eStructure");
var ta = zD;
ta.init();
var OG = class OG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LanguagesId", "languagesIdAttr", "LanguagesId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("LanguagesLabel", "languagesLabelAttr", "LanguagesLabel", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(OG, "ST_665ddcde45231212c1414d09c350b4cfStructure");
var ea = OG;
ea.init();
var gG = class gG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Reset_password", "reset_passwordAttr", "reset_password", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("New_password", "new_passwordAttr", "new_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Verification_code", "verification_codeAttr", "verification_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gG, "ST_589441840ccb78b5cd4edd1d387aefc9Structure");
var ra = gG;
ra.init();
var xG = class xG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Enum", "enumAttr", "enum", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.LongIntegerList)
        }, !0, t.LongIntegerList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xG, "ST_4087e2614b3e169a49eb4d5e4388f847Structure");
var m = xG;
m.init();
var bG = class bG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Enum", "enumAttr", "enum", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Pattern", "patternAttr", "pattern", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sensitive", "sensitiveAttr", "sensitive", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("MaxLength", "maxLengthAttr", "maxLength", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("MinLength", "minLengthAttr", "minLength", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(bG, "ST_e359c0b5b9349701a8aae8cc7d75c0ffStructure");
var c = bG;
c.init();
var RG = class RG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Pattern", "patternAttr", "pattern", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sensitive", "sensitiveAttr", "sensitive", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(RG, "ST_65cc30429520bca006e707d60d653719Structure");
var b = RG;
b.init();
var XD = class XD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Wallet", "walletAttr", "wallet", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new XD(new XD.RecordClass({
            walletAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(XD, "ST_efe926326d5cdd33b2fe29d22b8327daStructure");
var dt = XD;
dt.init();
var IG = class IG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("AdditionalProperties", "additionalPropertiesAttr", "additionalProperties", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Properties", "propertiesAttr", "properties", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dt)
        }, !0, dt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(IG, "ST_a3416b67a2103d8d37252bdfacc86bfbStructure");
var U = IG;
U.init();
var hG = class hG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Set_settings", "set_settingsAttr", "set_settings", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Account_opening_reason", "account_opening_reasonAttr", "account_opening_reason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Address_city", "address_cityAttr", "address_city", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Address_line_1", "address_line_1Attr", "address_line_1", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Address_line_2", "address_line_2Attr", "address_line_2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b), this.attr("Address_postcode", "address_postcodeAttr", "address_postcode", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Address_state", "address_stateAttr", "address_state", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Allow_copiers", "allow_copiersAttr", "allow_copiers", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Citizen", "citizenAttr", "citizen", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b), this.attr("Date_of_birth", "date_of_birthAttr", "date_of_birth", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Dxtrade_user_exception", "dxtrade_user_exceptionAttr", "dxtrade_user_exception", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Email_consent", "email_consentAttr", "email_consent", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Employment_status", "employment_statusAttr", "employment_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Feature_flag", "feature_flagAttr", "feature_flag", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U), this.attr("First_name", "first_nameAttr", "first_name", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Last_name", "last_nameAttr", "last_name", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Non_pep_declaration", "non_pep_declarationAttr", "non_pep_declaration", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Phone", "phoneAttr", "phone", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Place_of_birth", "place_of_birthAttr", "place_of_birth", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b), this.attr("Request_professional_status", "request_professional_statusAttr", "request_professional_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Residence", "residenceAttr", "residence", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b), this.attr("Salutation", "salutationAttr", "salutation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Secret_answer", "secret_answerAttr", "secret_answer", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Secret_question", "secret_questionAttr", "secret_question", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Tax_identification_number", "tax_identification_numberAttr", "tax_identification_number", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Tax_residence", "tax_residenceAttr", "tax_residence", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Trading_hub", "trading_hubAttr", "trading_hub", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c), this.attr("Passthrough", "passthroughAttr", "passthrough", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hG, "ST_7ceca022f8a0e753c145701ba5d76f4eStructure");
var aa = hG;
aa.init();
var AG = class AG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("value", "valueAttr", "value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(AG, "ST_db915d6b5cc14a9247531baaa76ce4a5Structure");
var sa = AG;
sa.init();
var GG = class GG extends t.GenericRecordList {
    static getItemType() {
        return sa
    }
};
e(GG, "RL_27bf68eaead02a99ca09aef3148704b7");
var To = GG;
var WD = class WD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("States_list", "states_listAttr", "states_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new To)
        }, !0, To)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new WD(new WD.RecordClass({
            states_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(WD, "ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure");
var ia = WD;
ia.init();
var wG = class wG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PrimaryButtonLabel", "primaryButtonLabelAttr", "PrimaryButtonLabel", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SecondaryButtonLabel", "secondaryButtonLabelAttr", "SecondaryButtonLabel", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ShouldHideOnDesktop", "shouldHideOnDesktopAttr", "ShouldHideOnDesktop", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "70e48684-6b33-8a9a-4b21-29d5cf7818eb"
    }
};
e(wG, "RC_70e486846b338a9a4b2129d5cf7818eb");
var Do = wG;
Do.init();
var PG = class PG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventTypeId", "eventTypeIdAttr", "EventTypeId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("EventTypeLabel", "eventTypeLabelAttr", "EventTypeLabel", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PG, "ST_17efa8cb4e52620a1eff42d6585eb8c0Structure");
var St = PG;
St.init();
var BG = class BG extends t.GenericRecordList {
    static getItemType() {
        return ea
    }
};
e(BG, "RL_491198091a0ec4ee010ab38bbfa3769c");
var yo = BG;
var EG = class EG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventTypesFilter", "eventTypesFilterAttr", "EventTypesFilter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new St)
        }, !0, St), this.attr("EventLanguagesFilter", "eventLanguagesFilterAttr", "EventLanguagesFilter", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new yo)
        }, !0, yo)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7ac6b1cc-0d02-0809-b117-a5d87e79570c"
    }
};
e(EG, "RC_7ac6b1cc0d020809b117a5d87e79570c");
var So = EG;
So.init();
var CG = class CG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(CG, "EN_82898159ccdab210fb8345db5c607db1EntityRecord");
var C = CG;
C.init();
var LG = class LG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Name", "nameAttr", "Name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Icon", "iconAttr", "Icon", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Code", "codeAttr", "Code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("EnvironmentId", "environmentIdAttr", "EnvironmentId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(LG, "EN_6adfebcd5bbca71129a168d2e2d91049EntityRecord");
var L = LG;
L.init();
var vG = class vG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Environment", "environmentAttr", "Environment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C), this.attr("Languages", "languagesAttr", "Languages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a19cc905-5121-ac1f-2503-af4a7a4ef0bf"
    }
};
e(vG, "RC_a19cc9055121ac1f2503af4a7a4ef0bf");
var Oo = vG;
Oo.init();
var jG = class jG extends t.GenericRecordList {
    static getItemType() {
        return Oo
    }
};
e(jG, "RL_8c597fb6cd4a582ba849bd4dfae97586");
var qG = jG;
var UG = class UG extends t.GenericRecordList {
    static getItemType() {
        return Yr
    }
};
e(UG, "RL_9d46439f193576489847e7629b97a4f1");
var kG = UG;
var FG = class FG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CustomRightIcon", "customRightIconAttr", "CustomRightIcon", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ShowLeftButton", "showLeftButtonAttr", "ShowLeftButton", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("ShowRightButton", "showRightButtonAttr", "ShowRightButton", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a88d52bf-98c8-0c25-5692-69c859d46687"
    }
};
e(FG, "RC_a88d52bf98c80c25569269c859d46687");
var go = FG;
go.init();
var VG = class VG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LoginId", "loginIdAttr", "LoginId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a9f25bb2-c774-0606-f250-04be67497628"
    }
};
e(VG, "RC_a9f25bb2c7740606f25004be67497628");
var xo = VG;
xo.init();
var _G = class _G extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Type", "typeAttr", "Type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(_G, "EN_8ce803cf87988828ab54aa3ac3da6f8fEntityRecord");
var F = _G;
F.init();
var NG = class NG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventType", "eventTypeAttr", "EventType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F), this.attr("Selected", "selectedAttr", "Selected", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dd353182-333d-f12f-19f4-a3158771517e"
    }
};
e(NG, "RC_dd353182333df12f19f4a3158771517e");
var bo = NG;
bo.init();
var zG = class zG extends t.GenericRecordList {
    static getItemType() {
        return bo
    }
};
e(zG, "RL_add3618ab73ae51245f46e4498f0d0ad");
var MG = zG;
var XG = class XG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Environment", "environmentAttr", "Environment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C), this.attr("Languages", "languagesAttr", "Languages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L), this.attr("Selected", "selectedAttr", "Selected", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cfb0d3dd-a80b-a82a-cc87-359bb6a1e96a"
    }
};
e(XG, "RC_cfb0d3dda80ba82acc87359bb6a1e96a");
var Ro = XG;
Ro.init();
var HG = class HG extends t.GenericRecordList {
    static getItemType() {
        return Ro
    }
};
e(HG, "RL_ae9d3b46b4707769d7b4ee3006c4f3a2");
var WG = HG;
var JG = class JG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B), this.attr("tnc_approval", "tnc_approvalAttr", "tnc_approval", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(JG, "ST_c68ca2b5352eede25365718c29283667Structure");
var na = JG;
na.init();
var YG = class YG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Value", "valueAttr", "value", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Label", "labelAttr", "label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ImageUrlOrIconClass", "imageUrlOrIconClassAttr", "image_url_or_class", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("GroupName", "groupNameAttr", "group_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(YG, "ST_60f22bd2e9b10a22278b8afe6d7f601aStructure");
var ss = YG;
ss.init();
var KG = class KG extends t.GenericRecordList {
    static getItemType() {
        return ss
    }
};
e(KG, "RL_c0f17d75c546075264f5d075e00ba65b");
var ZG = KG;
var QG = class QG extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("authorize", "authorizeAttr", "authorize", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("add_to_login_history", "add_to_login_historyAttr", "add_to_login_history", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tokens", "tokensAttr", "Tokens", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(QG, "ST_e00c986a2a7690520557f1ea58ae1d82Structure");
var oa = QG;
oa.init();
var $G = class $G extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Event", "eventAttr", "Event", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I), this.attr("Country", "countryAttr", "Country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "74fba7fb-1869-7339-da88-244fa3fc5435"
    }
};
e($G, "RC_74fba7fb18697339da88244fa3fc5435");
var Io = $G;
Io.init();
var ew = class ew extends t.GenericRecordList {
    static getItemType() {
        return Io
    }
};
e(ew, "RL_c442eae242b2b02d93575027f6e75422");
var tw = ew;
var rw = class rw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("NetRevenue", "netRevenueAttr", "NetRevenue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(rw, "EN_0dcda44afe6ec5d5c1d41878a92983e1EntityRecord");
var ca = rw;
ca.init();
var HD = class HD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RevShareInfoTable", "revShareInfoTableAttr", "RevShareInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ca)
        }, !0, ca)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new HD(new HD.RecordClass({
            revShareInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6f106c95-1dc6-97db-2b84-044542653e21"
    }
};
e(HD, "RC_6f106c951dc697db2b84044542653e21");
var ho = HD;
ho.init();
var sw = class sw extends t.GenericRecordList {
    static getItemType() {
        return ho
    }
};
e(sw, "RL_c7f6e3aeb0c29b42f5c7f4e8a4d38c61");
var aw = sw;
var iw = class iw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Probability", "probabilityAttr", "Probability", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iw, "EN_a32d86be435c41298a268fbb6a8a2358EntityRecord");
var ua = iw;
ua.init();
var JD = class JD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DigitalOptions", "digitalOptionsAttr", "DigitalOptions", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ua)
        }, !0, ua)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new JD(new JD.RecordClass({
            digitalOptionsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a67f16d1-367e-4867-4c02-78c0312479e0"
    }
};
e(JD, "RC_a67f16d1367e48674c0278c0312479e0");
var Ao = JD;
Ao.init();
var ow = class ow extends t.GenericRecordList {
    static getItemType() {
        return Ao
    }
};
e(ow, "RL_ca06e5bf8b5ed2faf11935e078ed0bf5");
var nw = ow;
var cw = class cw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_category", "account_categoryAttr", "account_category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Broker", "brokerAttr", "broker", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Created_at", "created_atAttr", "created_at", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency_type", "currency_typeAttr", "currency_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_disabled", "is_disabledAttr", "is_disabled", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_virtual", "is_virtualAttr", "is_virtual", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cw, "ST_02211ece4f8ea033ae9a7fa2710f4a32Structure");
var Rr = cw;
Rr.init();
var uw = class uw extends t.GenericRecordList {
    static getItemType() {
        return Rr
    }
};
e(uw, "RL_d03621281d953210a5f7643c5f395ddc");
var is = uw;
var YD = class YD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new YD(new YD.RecordClass({
            fractional_digitsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(YD, "ST_6e7638d850b78b46a75a04e2dcd58f58Structure");
var re = YD;
re.init();
var ZD = class ZD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR", "iDRAttr", "IDR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new re)
        }, !0, re)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ZD(new ZD.RecordClass({
            iDRAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ZD, "ST_123df4fc5615aac2800d1fa4847bc440Structure");
var ae = ZD;
ae.init();
var pw = class pw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_list", "account_listAttr", "account_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new is)
        }, !0, is), this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Fullname", "fullnameAttr", "fullname", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_virtual", "is_virtualAttr", "is_virtual", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Landing_company_fullname", "landing_company_fullnameAttr", "landing_company_fullname", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Local_currencies", "local_currenciesAttr", "local_currencies", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ae)
        }, !0, ae), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Scopes", "scopesAttr", "scopes", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Upgradeable_landing_companies", "upgradeable_landing_companiesAttr", "upgradeable_landing_companies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("User_id", "user_idAttr", "user_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(pw, "ST_e5081373b9c17bf97c001a46f1739ffeStructure");
var se = pw;
se.init();
var lw = class lw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "authorize", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new se)
        }, !0, se), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qt)
        }, !0, Qt), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lw, "ST_f502318fbe2f943e6cfbba125766780aStructure");
var ns = lw;
ns.init();
var mw = class mw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Event", "eventAttr", "Event", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I), this.attr("Country", "countryAttr", "Country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h), this.attr("EventType", "eventTypeAttr", "EventType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b93f5c57-f06e-1ce1-f61c-c2fdbe0d7c52"
    }
};
e(mw, "RC_b93f5c57f06e1ce1f61cc2fdbe0d7c52");
var Go = mw;
Go.init();
var Tw = class Tw extends t.GenericRecordList {
    static getItemType() {
        return Go
    }
};
e(Tw, "RL_ece689df05adbd14fd8c52f51e2c24dc");
var fw = Tw;
var s = {
    staticEntities: {}
};
s.staticEntities.environment = {};
Object.defineProperty(s.staticEntities.environment, "production", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.environment, "dev", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.environment, "staging", {
    get: e(function() {
        return 1
    }, "get")
});
s.staticEntities.optionsTable = {};
Object.defineProperty(s.staticEntities.optionsTable, "test", {
    get: e(function() {
        return 1
    }, "get")
});
s.staticEntities.affiliateLinks = {};
Object.defineProperty(s.staticEntities.affiliateLinks, "firstVideo", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "eigthVideo", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "thirdVideo", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "sixthVideo", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "fourthVideo", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "seventhVideo", {
    get: e(function() {
        return 8
    }, "get")
});
Object.defineProperty(s.staticEntities.affiliateLinks, "fifthVideo", {
    get: e(function() {
        return 6
    }, "get")
});
s.staticEntities.messages = {};
Object.defineProperty(s.staticEntities.messages, "record2", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.messages, "record1", {
    get: e(function() {
        return 1
    }, "get")
});
s.staticEntities.employmentStatus = {};
Object.defineProperty(s.staticEntities.employmentStatus, "unemployed", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.employmentStatus, "selfEmployed", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.employmentStatus, "student", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.employmentStatus, "employed", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.employmentStatus, "pensioner", {
    get: e(function() {
        return 2
    }, "get")
});
s.staticEntities.currencies = {};
Object.defineProperty(s.staticEntities.currencies, "ethereum", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "uSDCoin", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "litecoin", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "ripple", {
    get: e(function() {
        return 10
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "uSD", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "tetherTRC20", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "tetherERC20", {
    get: e(function() {
        return 8
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "euro", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.currencies, "bitcoin", {
    get: e(function() {
        return 3
    }, "get")
});
s.staticEntities.email = {};
s.staticEntities.realSignupSteps = {};
Object.defineProperty(s.staticEntities.realSignupSteps, "termsOfUseStep", {
    get: e(function() {
        return 8
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "accountTypeStep", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "employmentDetailsStep", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "addressDetailsStep", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "accountCurrencyStep", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "cFDCommissionStep", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "promotionPlatformsStep", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "personalDetailsStep", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.realSignupSteps, "identityVerificationStep", {
    get: e(function() {
        return 4
    }, "get")
});
s.staticEntities.accountPurpose = {};
Object.defineProperty(s.staticEntities.accountPurpose, "spectulative", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.accountPurpose, "incomeearning", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.accountPurpose, "hedging", {
    get: e(function() {
        return 3
    }, "get")
});
s.staticEntities.cFDsAllPlans = {};
Object.defineProperty(s.staticEntities.cFDsAllPlans, "mT5FinancialSTP", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderCrashBoomIndices", {
    get: e(function() {
        return 21
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXVolatilityIndices", {
    get: e(function() {
        return 28
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXForex", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXRangeBreakIndices", {
    get: e(function() {
        return 30
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderVolatilityIndices", {
    get: e(function() {
        return 22
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXCrash_BoomIndices", {
    get: e(function() {
        return 27
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXDriftSwitchingIndices", {
    get: e(function() {
        return 34
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "mT5Standard", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXStocks_ETFsStockIndices", {
    get: e(function() {
        return 26
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderCommodities", {
    get: e(function() {
        return 18
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "mT5Swapfree", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXJumpIndices", {
    get: e(function() {
        return 31
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderStepIndices", {
    get: e(function() {
        return 23
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXStepIndices", {
    get: e(function() {
        return 29
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXDEXIndices", {
    get: e(function() {
        return 33
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXCryptocurrencies", {
    get: e(function() {
        return 25
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXBasketIndices", {
    get: e(function() {
        return 32
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "derivXCommodities", {
    get: e(function() {
        return 24
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "mT5Financial", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderStocksETFsStockIndices", {
    get: e(function() {
        return 20
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllPlans, "cTraderForex", {
    get: e(function() {
        return 17
    }, "get")
});
s.staticEntities.cFDsTabInfo = {};
Object.defineProperty(s.staticEntities.cFDsTabInfo, "derivX", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsTabInfo, "derivMT5", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsTabInfo, "derivcTrader", {
    get: e(function() {
        return 3
    }, "get")
});
s.staticEntities.links = {};
s.staticEntities.languages = {};
Object.defineProperty(s.staticEntities.languages, "german", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "eS", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "francais", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "italiano", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "arabic", {
    get: e(function() {
        return 12
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "eN", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "russian", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "portugues", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.languages, "polski", {
    get: e(function() {
        return 6
    }, "get")
});
s.staticEntities.digitalOptions = {};
Object.defineProperty(s.staticEntities.digitalOptions, "record2", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.digitalOptions, "record3", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.digitalOptions, "record6", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(s.staticEntities.digitalOptions, "record4", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.digitalOptions, "record5", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.digitalOptions, "record1", {
    get: e(function() {
        return 1
    }, "get")
});
s.staticEntities.cFDsPlansTableData = {};
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility50Index", {
    get: e(function() {
        return 27
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStocksETFsStockIndicesStockIndices", {
    get: e(function() {
        return 62
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesCrash1000Index", {
    get: e(function() {
        return 37
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardBasketIndicesGBPBasket", {
    get: e(function() {
        return 93
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX1500UPIndex", {
    get: e(function() {
        return 151
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXBasketIndicesEURBasket", {
    get: e(function() {
        return 142
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesCrash1000Index", {
    get: e(function() {
        return 65
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX900UPIndex", {
    get: e(function() {
        return 99
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXBasketIndicesAUDBasket", {
    get: e(function() {
        return 141
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeStepIndicesStepIndex", {
    get: e(function() {
        return 41
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialForex_Minor_", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardJumpIndicesJump50Index", {
    get: e(function() {
        return 88
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCryptocurrencies", {
    get: e(function() {
        return 19
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility75_1s_Index", {
    get: e(function() {
        return 128
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility10Index", {
    get: e(function() {
        return 23
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialStocksETFsStockIndicesETFs", {
    get: e(function() {
        return 13
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX600DOWNIndex", {
    get: e(function() {
        return 49
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardBasketIndicesUSDBasket", {
    get: e(function() {
        return 94
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardBasketIndicesEURBasket", {
    get: e(function() {
        return 92
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility10Index", {
    get: e(function() {
        return 121
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXBasketIndicesUSDBasket", {
    get: e(function() {
        return 144
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesCrash1000Index", {
    get: e(function() {
        return 117
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCommoditiesEnergies_OilsandNaturalGas_", {
    get: e(function() {
        return 18
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility25_1s_Index", {
    get: e(function() {
        return 26
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialStocksETFsStockIndicesStockIndices", {
    get: e(function() {
        return 14
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderStocksETFsStockIndicesETFs", {
    get: e(function() {
        return 161
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardBasketIndicesGoldBasket", {
    get: e(function() {
        return 95
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeRangeBreakIndicesRangeBreak200Index", {
    get: e(function() {
        return 43
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility250_1s_Index", {
    get: e(function() {
        return 132
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDriftSwitchingIndicesDriftSwitchIndex20", {
    get: e(function() {
        return 103
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility50_1s_Index", {
    get: e(function() {
        return 28
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility75Index", {
    get: e(function() {
        return 29
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility100_1s_Index", {
    get: e(function() {
        return 130
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderStepIndicesStepIndex400", {
    get: e(function() {
        return 170
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStepIndicesStepIndex500", {
    get: e(function() {
        return 83
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility25Index", {
    get: e(function() {
        return 25
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStepIndicesStepIndex", {
    get: e(function() {
        return 81
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderVolatilityIndicesVolatility90_1s_Index", {
    get: e(function() {
        return 168
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility75_1s_Index", {
    get: e(function() {
        return 76
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX1500UPIndex", {
    get: e(function() {
        return 101
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesBoom1000Index", {
    get: e(function() {
        return 40
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCommoditiesMetals", {
    get: e(function() {
        return 157
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderVolatilityIndicesVolatility15_1s_Index", {
    get: e(function() {
        return 166
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXRangeBreakIndicesRangeBreak200Index", {
    get: e(function() {
        return 135
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardJumpIndicesJump100Index", {
    get: e(function() {
        return 90
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility75Index", {
    get: e(function() {
        return 75
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX600UPIndex", {
    get: e(function() {
        return 50
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialCryptocurrencies", {
    get: e(function() {
        return 11
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXStocksETFsStockIndicesStockIndices", {
    get: e(function() {
        return 113
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility150_1s_Index", {
    get: e(function() {
        return 33
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesCrash300Index", {
    get: e(function() {
        return 63
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX900UPIndex", {
    get: e(function() {
        return 149
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility100_1s_Index", {
    get: e(function() {
        return 78
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialSTPForex_Major_", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesCrash500Index", {
    get: e(function() {
        return 64
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXJumpIndicesJump10Index", {
    get: e(function() {
        return 136
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility25_1s_Index", {
    get: e(function() {
        return 124
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesBoom300Index", {
    get: e(function() {
        return 66
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility10_1s_Index", {
    get: e(function() {
        return 24
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialCommoditiesEnergies_OilsandNaturalGas_", {
    get: e(function() {
        return 10
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility10_1s_Index", {
    get: e(function() {
        return 70
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialSTPCryptocurrencies", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderStocksETFsStockIndicesStockIndices", {
    get: e(function() {
        return 160
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialStocksETFsStockIndicesStocks", {
    get: e(function() {
        return 12
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCrashBoomIndicesCrash600Index", {
    get: e(function() {
        return 162
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialSTPForex_Micro_", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderVolatilityIndicesVolatility30_1s_Index", {
    get: e(function() {
        return 167
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDriftSwitchingIndicesDriftSwitchIndex10", {
    get: e(function() {
        return 102
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCommoditiesMetals", {
    get: e(function() {
        return 57
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility10_1s_Index", {
    get: e(function() {
        return 122
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialSTPForex_Minor_", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXStocksETFsStockIndicesETFs", {
    get: e(function() {
        return 114
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesCrash500Index", {
    get: e(function() {
        return 36
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX900DOWNIndex", {
    get: e(function() {
        return 98
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCommoditiesMetals", {
    get: e(function() {
        return 109
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesBoom1000Index", {
    get: e(function() {
        return 68
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesBoom300Index", {
    get: e(function() {
        return 38
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderStepIndicesStepIndex300", {
    get: e(function() {
        return 169
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXStepIndicesStepIndex", {
    get: e(function() {
        return 133
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCryptocurrencies", {
    get: e(function() {
        return 111
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStocksETFsStockIndicesETFs", {
    get: e(function() {
        return 61
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardJumpIndicesJump75Index", {
    get: e(function() {
        return 89
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeRangeBreakIndicesRangeBreak100Index", {
    get: e(function() {
        return 42
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDriftSwitchingIndicesDriftSwitchIndex20", {
    get: e(function() {
        return 153
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeStocksETFsStockIndicesETFs", {
    get: e(function() {
        return 21
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility150_1s_Index", {
    get: e(function() {
        return 131
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX1500UPIndex", {
    get: e(function() {
        return 54
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX600DOWNIndex", {
    get: e(function() {
        return 96
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility250_1s_Index", {
    get: e(function() {
        return 80
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardJumpIndicesJump25Index", {
    get: e(function() {
        return 87
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX900UPIndex", {
    get: e(function() {
        return 52
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCommoditiesEnergies_OilsandNaturalGas_", {
    get: e(function() {
        return 110
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeJumpIndicesJump50Index", {
    get: e(function() {
        return 46
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDriftSwitchingIndicesDriftSwitchIndex30", {
    get: e(function() {
        return 104
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXJumpIndicesJump50Index", {
    get: e(function() {
        return 138
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardRangeBreakIndicesRangeBreak200Index", {
    get: e(function() {
        return 85
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeJumpIndicesJump10Index", {
    get: e(function() {
        return 44
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderForex_Major_", {
    get: e(function() {
        return 155
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility50Index", {
    get: e(function() {
        return 73
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXRangeBreakIndicesRangeBreak100Index", {
    get: e(function() {
        return 134
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility10Index", {
    get: e(function() {
        return 69
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCommoditiesEnergies_OilsandNaturalGas_", {
    get: e(function() {
        return 158
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialCommoditiesMetals", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXJumpIndicesJump100Index", {
    get: e(function() {
        return 140
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX1500DOWNIndex", {
    get: e(function() {
        return 150
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX600DOWNIndex", {
    get: e(function() {
        return 146
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility150_1s_Index", {
    get: e(function() {
        return 79
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialForex_Major_", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesBoom500Index", {
    get: e(function() {
        return 39
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStepIndicesStepIndex200", {
    get: e(function() {
        return 82
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardJumpIndicesJump10Index", {
    get: e(function() {
        return 86
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX1500DOWNIndex", {
    get: e(function() {
        return 100
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility50_1s_Index", {
    get: e(function() {
        return 126
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeJumpIndicesJump100Index", {
    get: e(function() {
        return 48
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCommoditiesMetals", {
    get: e(function() {
        return 17
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderForex_Minor_", {
    get: e(function() {
        return 156
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderStocksETFsStockIndicesStocks", {
    get: e(function() {
        return 159
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeCrashBoomIndicesCrash300Index", {
    get: e(function() {
        return 35
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility50Index", {
    get: e(function() {
        return 125
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility100_1s_Index", {
    get: e(function() {
        return 32
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeStocksETFsStockIndicesStocks", {
    get: e(function() {
        return 20
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXBasketIndicesGBPBasket", {
    get: e(function() {
        return 143
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXForex_Minor_", {
    get: e(function() {
        return 106
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesCrash500Index", {
    get: e(function() {
        return 116
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeStocksETFsStockIndicesStockIndices", {
    get: e(function() {
        return 22
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility50_1s_Index", {
    get: e(function() {
        return 74
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDriftSwitchingIndicesDriftSwitchIndex30", {
    get: e(function() {
        return 154
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility75_1s_Index", {
    get: e(function() {
        return 30
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility100Index", {
    get: e(function() {
        return 31
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX900DOWNIndex", {
    get: e(function() {
        return 51
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility100Index", {
    get: e(function() {
        return 77
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesCrash300Index", {
    get: e(function() {
        return 115
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX900DOWNIndex", {
    get: e(function() {
        return 148
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDriftSwitchingIndicesDriftSwitchIndex10", {
    get: e(function() {
        return 152
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXBasketIndicesGoldBasket", {
    get: e(function() {
        return 145
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility75Index", {
    get: e(function() {
        return 127
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXJumpIndicesJump75Index", {
    get: e(function() {
        return 139
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility100Index", {
    get: e(function() {
        return 129
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCrashBoomIndicesBoom600Index", {
    get: e(function() {
        return 164
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXForex_Micro_", {
    get: e(function() {
        return 108
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeJumpIndicesJump25Index", {
    get: e(function() {
        return 45
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXForex_Exotics_", {
    get: e(function() {
        return 107
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXJumpIndicesJump25Index", {
    get: e(function() {
        return 137
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5FinancialForex_Micro_", {
    get: e(function() {
        return 8
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeVolatilityIndicesVolatility250_1s_Index", {
    get: e(function() {
        return 34
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCrashBoomIndicesBoom500Index", {
    get: e(function() {
        return 67
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeJumpIndicesJump75Index", {
    get: e(function() {
        return 47
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility25Index", {
    get: e(function() {
        return 71
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXForex_Major_", {
    get: e(function() {
        return 105
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCryptocurrencies", {
    get: e(function() {
        return 59
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardRangeBreakIndicesRangeBreak100Index", {
    get: e(function() {
        return 84
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCrashBoomIndicesBoom900Index", {
    get: e(function() {
        return 165
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardStocksETFsStockIndicesStocks", {
    get: e(function() {
        return 60
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXDEXIndicesDEX600UPIndex", {
    get: e(function() {
        return 147
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesBoom1000Index", {
    get: e(function() {
        return 120
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardForex_Major_", {
    get: e(function() {
        return 55
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardDEXIndicesDEX600UPIndex", {
    get: e(function() {
        return 97
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardBasketIndicesAUDBasket", {
    get: e(function() {
        return 91
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardForex_Minor_", {
    get: e(function() {
        return 56
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardCommodities10_perUSD100kturnover_", {
    get: e(function() {
        return 58
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeDEXIndicesDEX1500DOWNIndex", {
    get: e(function() {
        return 53
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXStocksETFsStockIndicesStocks", {
    get: e(function() {
        return 112
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeForex_Major_", {
    get: e(function() {
        return 15
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5StandardVolatilityIndicesVolatility25_1s_Index", {
    get: e(function() {
        return 72
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXVolatilityIndicesVolatility25Index", {
    get: e(function() {
        return 123
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesBoom300Index", {
    get: e(function() {
        return 118
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "mT5SwapfreeForex_Minor_", {
    get: e(function() {
        return 16
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "derivXCrashBoomIndicesBoom500Index", {
    get: e(function() {
        return 119
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsPlansTableData, "cTraderCrashBoomIndicesCrash900Index", {
    get: e(function() {
        return 163
    }, "get")
});
s.staticEntities.cFDsAllSubPlans = {};
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardCommodities", {
    get: e(function() {
        return 17
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeCrashBoomIndices", {
    get: e(function() {
        return 11
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeVolatilityIndices", {
    get: e(function() {
        return 10
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeRangeBreakIndices", {
    get: e(function() {
        return 13
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialStocksETFsStockIndices", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardForex", {
    get: e(function() {
        return 16
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeJumpIndices", {
    get: e(function() {
        return 14
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialForex", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardRangeBreakIndices", {
    get: e(function() {
        return 23
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardDEXIndices", {
    get: e(function() {
        return 26
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeCryptocurrencies", {
    get: e(function() {
        return 8
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardCrashBoomIndices", {
    get: e(function() {
        return 20
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardVolatilityIndices", {
    get: e(function() {
        return 21
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeCommodities", {
    get: e(function() {
        return 7
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialCryptocurrencies", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardBasketIndices", {
    get: e(function() {
        return 25
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeStocksETFsStockIndices", {
    get: e(function() {
        return 9
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardStocksETFsStockIndices", {
    get: e(function() {
        return 19
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardCryptocurrencies", {
    get: e(function() {
        return 18
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialSTPForex", {
    get: e(function() {
        return 28
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardStepIndices", {
    get: e(function() {
        return 22
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardJumpIndices", {
    get: e(function() {
        return 24
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeStepIndices", {
    get: e(function() {
        return 12
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialCommodities", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5StandardDriftSwitchingIndices", {
    get: e(function() {
        return 27
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5FinancialSTPCryptocurrencies", {
    get: e(function() {
        return 29
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeDEXIndices", {
    get: e(function() {
        return 15
    }, "get")
});
Object.defineProperty(s.staticEntities.cFDsAllSubPlans, "mT5SwapfreeForex", {
    get: e(function() {
        return 6
    }, "get")
});
s.staticEntities.options = {};
Object.defineProperty(s.staticEntities.options, "accumulatorOptions", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.options, "multipliers", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.options, "vanillaOptions", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.options, "turboOptions", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.options, "lookbacks", {
    get: e(function() {
        return 5
    }, "get")
});
s.staticEntities.revShareInfoTable = {};
Object.defineProperty(s.staticEntities.revShareInfoTable, "record1", {
    get: e(function() {
        return Fr.integerToLongInteger(1)
    }, "get")
});
Object.defineProperty(s.staticEntities.revShareInfoTable, "record2", {
    get: e(function() {
        return Fr.integerToLongInteger(2)
    }, "get")
});
s.staticEntities.commissionType = {};
Object.defineProperty(s.staticEntities.commissionType, "commissionperUSD100kturnover", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.commissionType, "commission", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.commissionType, "commissionperlot", {
    get: e(function() {
        return 3
    }, "get")
});
s.staticEntities.stackingType_v1 = {};
Object.defineProperty(s.staticEntities.stackingType_v1, "stacked100Percent", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.stackingType_v1, "noStacking", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.stackingType_v1, "stacked", {
    get: e(function() {
        return 2
    }, "get")
});
s.staticEntities.legendPosition_v1 = {};
Object.defineProperty(s.staticEntities.legendPosition_v1, "bottom", {
    get: e(function() {
        return "Bottom"
    }, "get")
});
Object.defineProperty(s.staticEntities.legendPosition_v1, "right", {
    get: e(function() {
        return "Right"
    }, "get")
});
Object.defineProperty(s.staticEntities.legendPosition_v1, "inside", {
    get: e(function() {
        return "Inside"
    }, "get")
});
Object.defineProperty(s.staticEntities.legendPosition_v1, "left", {
    get: e(function() {
        return "Left"
    }, "get")
});
Object.defineProperty(s.staticEntities.legendPosition_v1, "hidden", {
    get: e(function() {
        return "Hidden"
    }, "get")
});
Object.defineProperty(s.staticEntities.legendPosition_v1, "top", {
    get: e(function() {
        return "Top"
    }, "get")
});
s.staticEntities.xAxisValuesType_v1 = {};
Object.defineProperty(s.staticEntities.xAxisValuesType_v1, "text", {
    get: e(function() {
        return 3
    }, "get")
});
Object.defineProperty(s.staticEntities.xAxisValuesType_v1, "auto", {
    get: e(function() {
        return 4
    }, "get")
});
s.staticEntities.animationType = {};
Object.defineProperty(s.staticEntities.animationType, "topToBottom", {
    get: e(function() {
        return "top-to-bottom"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "bounce", {
    get: e(function() {
        return "bounce"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "fadeIn", {
    get: e(function() {
        return "fade-in"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "scaleDown", {
    get: e(function() {
        return "scale-down"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "scale", {
    get: e(function() {
        return "scale"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "spinner", {
    get: e(function() {
        return "spinner"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "bottomToTop", {
    get: e(function() {
        return "bottom-to-top"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "rightToLeft", {
    get: e(function() {
        return "right-to-left"
    }, "get")
});
Object.defineProperty(s.staticEntities.animationType, "leftToRight", {
    get: e(function() {
        return "left-to-right"
    }, "get")
});
s.staticEntities.speed = {};
Object.defineProperty(s.staticEntities.speed, "fast", {
    get: e(function() {
        return "fast"
    }, "get")
});
Object.defineProperty(s.staticEntities.speed, "normal", {
    get: e(function() {
        return "normal"
    }, "get")
});
Object.defineProperty(s.staticEntities.speed, "slow", {
    get: e(function() {
        return "slow"
    }, "get")
});
s.staticEntities.sideMenuBehavior = {};
Object.defineProperty(s.staticEntities.sideMenuBehavior, "visible", {
    get: e(function() {
        return "aside-visible"
    }, "get")
});
Object.defineProperty(s.staticEntities.sideMenuBehavior, "expandable", {
    get: e(function() {
        return "aside-expandable"
    }, "get")
});
Object.defineProperty(s.staticEntities.sideMenuBehavior, "overlay", {
    get: e(function() {
        return "aside-overlay"
    }, "get")
});
s.staticEntities.size = {};
Object.defineProperty(s.staticEntities.size, "medium", {
    get: e(function() {
        return "medium"
    }, "get")
});
Object.defineProperty(s.staticEntities.size, "small", {
    get: e(function() {
        return "small"
    }, "get")
});
s.staticEntities.deviceResponsive = {};
Object.defineProperty(s.staticEntities.deviceResponsive, "desktopAndTablet", {
    get: e(function() {
        return "DesktopAndTablet"
    }, "get")
});
Object.defineProperty(s.staticEntities.deviceResponsive, "tabletOnly", {
    get: e(function() {
        return "TabletOnly"
    }, "get")
});
Object.defineProperty(s.staticEntities.deviceResponsive, "allDevices", {
    get: e(function() {
        return "AllDevices"
    }, "get")
});
Object.defineProperty(s.staticEntities.deviceResponsive, "phoneOnly", {
    get: e(function() {
        return "PhoneOnly"
    }, "get")
});
Object.defineProperty(s.staticEntities.deviceResponsive, "tabletAndPhone", {
    get: e(function() {
        return "TabletAndPhone"
    }, "get")
});
Object.defineProperty(s.staticEntities.deviceResponsive, "desktopOnly", {
    get: e(function() {
        return "DesktopOnly"
    }, "get")
});
s.staticEntities.gutterSize = {};
Object.defineProperty(s.staticEntities.gutterSize, "xXLarge", {
    get: e(function() {
        return "gutter-xxl"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "medium", {
    get: e(function() {
        return "gutter-m"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "none", {
    get: e(function() {
        return "gutter-none"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "extraLarge", {
    get: e(function() {
        return "gutter-xl"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "small", {
    get: e(function() {
        return "gutter-s"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "large", {
    get: e(function() {
        return "gutter-l"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "base", {
    get: e(function() {
        return "gutter-base"
    }, "get")
});
Object.defineProperty(s.staticEntities.gutterSize, "extraSmall", {
    get: e(function() {
        return "gutter-xs"
    }, "get")
});
s.staticEntities.month = {};
Object.defineProperty(s.staticEntities.month, "june", {
    get: e(function() {
        return "June"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "march", {
    get: e(function() {
        return "March"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "december", {
    get: e(function() {
        return "December"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "february", {
    get: e(function() {
        return "February"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "may", {
    get: e(function() {
        return "May"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "april", {
    get: e(function() {
        return "April"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "november", {
    get: e(function() {
        return "November"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "august", {
    get: e(function() {
        return "August"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "january", {
    get: e(function() {
        return "January"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "july", {
    get: e(function() {
        return "July"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "september", {
    get: e(function() {
        return "September"
    }, "get")
});
Object.defineProperty(s.staticEntities.month, "october", {
    get: e(function() {
        return "October"
    }, "get")
});
s.staticEntities.datePickerLanguage = {};
Object.defineProperty(s.staticEntities.datePickerLanguage, "japanese", {
    get: e(function() {
        return "ja"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "dutchFlemish", {
    get: e(function() {
        return "nl"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "czech", {
    get: e(function() {
        return "cs"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "indonesian", {
    get: e(function() {
        return "id"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "punjabiPanjabi", {
    get: e(function() {
        return "pa"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "latvian", {
    get: e(function() {
        return "lv"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "chinese", {
    get: e(function() {
        return "zh"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "polish", {
    get: e(function() {
        return "pl"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "estonian", {
    get: e(function() {
        return "et"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "catalanValencian", {
    get: e(function() {
        return "ca"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "malay", {
    get: e(function() {
        return "ms"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "slovak", {
    get: e(function() {
        return "sk"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
    get: e(function() {
        return "si"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "danish", {
    get: e(function() {
        return "da"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "english", {
    get: e(function() {
        return "en"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "hungarian", {
    get: e(function() {
        return "hu"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "norwegianNynorsk", {
    get: e(function() {
        return "nn"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "norwegianBokmal", {
    get: e(function() {
        return "nb"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "arabic", {
    get: e(function() {
        return "ar"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "faroese", {
    get: e(function() {
        return "fo"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "centralKhmer", {
    get: e(function() {
        return "km"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
    get: e(function() {
        return "ro"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "chineseTraditional", {
    get: e(function() {
        return "zh_tw"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "norwegian", {
    get: e(function() {
        return "no"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "esperanto", {
    get: e(function() {
        return "eo"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "croatian", {
    get: e(function() {
        return "hr"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "albanian", {
    get: e(function() {
        return "sq"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "korean", {
    get: e(function() {
        return "ko"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "thai", {
    get: e(function() {
        return "th"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "mongolian", {
    get: e(function() {
        return "mn"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "spanishCastilian", {
    get: e(function() {
        return "es"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "slovenian", {
    get: e(function() {
        return "sl"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "vietnamese", {
    get: e(function() {
        return "vi"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "bosnian", {
    get: e(function() {
        return "bs"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "french", {
    get: e(function() {
        return "fr"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "turkish", {
    get: e(function() {
        return "tr"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "russian", {
    get: e(function() {
        return "ru"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "serbian", {
    get: e(function() {
        return "sr"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "lithuanian", {
    get: e(function() {
        return "lt"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "portuguese", {
    get: e(function() {
        return "pt"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "hebrew", {
    get: e(function() {
        return "he"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "uzbek", {
    get: e(function() {
        return "uz"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "burmese", {
    get: e(function() {
        return "my"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "italian", {
    get: e(function() {
        return "it"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "georgian", {
    get: e(function() {
        return "ka"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "swedish", {
    get: e(function() {
        return "sv"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "azerbaijani", {
    get: e(function() {
        return "az"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "hindi", {
    get: e(function() {
        return "hi"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "bulgarian", {
    get: e(function() {
        return "bg"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "finnish", {
    get: e(function() {
        return "fi"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "persian", {
    get: e(function() {
        return "fa"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "armenian", {
    get: e(function() {
        return "hy"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "german", {
    get: e(function() {
        return "de"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "belarusian", {
    get: e(function() {
        return "be"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "welsh", {
    get: e(function() {
        return "cy"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "ukrainian", {
    get: e(function() {
        return "uk"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "bengali", {
    get: e(function() {
        return "bn"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerLanguage, "macedonian", {
    get: e(function() {
        return "mk"
    }, "get")
});
s.staticEntities.orientation = {};
Object.defineProperty(s.staticEntities.orientation, "horizontal", {
    get: e(function() {
        return "horizontal"
    }, "get")
});
Object.defineProperty(s.staticEntities.orientation, "vertical", {
    get: e(function() {
        return "vertical"
    }, "get")
});
s.staticEntities.datePickerTimeFormat = {};
Object.defineProperty(s.staticEntities.datePickerTimeFormat, "disabled", {
    get: e(function() {
        return "disabled"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerTimeFormat, "time24hFormat", {
    get: e(function() {
        return "24"
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerTimeFormat, "time12hFormat", {
    get: e(function() {
        return "12"
    }, "get")
});
s.staticEntities.accordionIconType = {};
Object.defineProperty(s.staticEntities.accordionIconType, "custom", {
    get: e(function() {
        return "Custom"
    }, "get")
});
Object.defineProperty(s.staticEntities.accordionIconType, "plusMinus", {
    get: e(function() {
        return "PlusMinus"
    }, "get")
});
Object.defineProperty(s.staticEntities.accordionIconType, "caret", {
    get: e(function() {
        return "Caret"
    }, "get")
});
s.staticEntities.direction = {};
Object.defineProperty(s.staticEntities.direction, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(s.staticEntities.direction, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
s.staticEntities.breakColumns = {};
Object.defineProperty(s.staticEntities.breakColumns, "none", {
    get: e(function() {
        return "break-none"
    }, "get")
});
Object.defineProperty(s.staticEntities.breakColumns, "first", {
    get: e(function() {
        return "break-first"
    }, "get")
});
Object.defineProperty(s.staticEntities.breakColumns, "all", {
    get: e(function() {
        return "break-all"
    }, "get")
});
Object.defineProperty(s.staticEntities.breakColumns, "middle", {
    get: e(function() {
        return "break-middle"
    }, "get")
});
Object.defineProperty(s.staticEntities.breakColumns, "last", {
    get: e(function() {
        return "break-last"
    }, "get")
});
s.staticEntities.shape = {};
Object.defineProperty(s.staticEntities.shape, "sharp", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(s.staticEntities.shape, "softRounded", {
    get: e(function() {
        return "soft"
    }, "get")
});
Object.defineProperty(s.staticEntities.shape, "rounded", {
    get: e(function() {
        return "rounded"
    }, "get")
});
s.staticEntities.stackedCardsPosition = {};
Object.defineProperty(s.staticEntities.stackedCardsPosition, "bottom", {
    get: e(function() {
        return "Bottom"
    }, "get")
});
Object.defineProperty(s.staticEntities.stackedCardsPosition, "top", {
    get: e(function() {
        return "Top"
    }, "get")
});
Object.defineProperty(s.staticEntities.stackedCardsPosition, "none", {
    get: e(function() {
        return "None"
    }, "get")
});
s.staticEntities.carouselDirection = {};
Object.defineProperty(s.staticEntities.carouselDirection, "rightToLeft", {
    get: e(function() {
        return "RightToLeft"
    }, "get")
});
Object.defineProperty(s.staticEntities.carouselDirection, "leftToRight", {
    get: e(function() {
        return "LeftToRight"
    }, "get")
});
s.staticEntities.autoplay = {};
Object.defineProperty(s.staticEntities.autoplay, "disabled", {
    get: e(function() {
        return "disabled"
    }, "get")
});
Object.defineProperty(s.staticEntities.autoplay, "slow", {
    get: e(function() {
        return "slow"
    }, "get")
});
Object.defineProperty(s.staticEntities.autoplay, "fast", {
    get: e(function() {
        return "fast"
    }, "get")
});
Object.defineProperty(s.staticEntities.autoplay, "normal", {
    get: e(function() {
        return "normal"
    }, "get")
});
s.staticEntities.position = {};
Object.defineProperty(s.staticEntities.position, "top", {
    get: e(function() {
        return "top"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "bottomRight", {
    get: e(function() {
        return "bottom-right"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "bottomLeft", {
    get: e(function() {
        return "bottom-left"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "topLeft", {
    get: e(function() {
        return "top-left"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "topRight", {
    get: e(function() {
        return "top-right"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "center", {
    get: e(function() {
        return "center"
    }, "get")
});
Object.defineProperty(s.staticEntities.position, "bottom", {
    get: e(function() {
        return "bottom"
    }, "get")
});
s.staticEntities.identityProvider = {};
Object.defineProperty(s.staticEntities.identityProvider, "facebook", {
    get: e(function() {
        return "facebook"
    }, "get")
});
Object.defineProperty(s.staticEntities.identityProvider, "google", {
    get: e(function() {
        return "google"
    }, "get")
});
Object.defineProperty(s.staticEntities.identityProvider, "apple", {
    get: e(function() {
        return "apple"
    }, "get")
});
s.staticEntities.trigger = {};
Object.defineProperty(s.staticEntities.trigger, "onClick", {
    get: e(function() {
        return "onclick"
    }, "get")
});
Object.defineProperty(s.staticEntities.trigger, "onHover", {
    get: e(function() {
        return "onhover"
    }, "get")
});
s.staticEntities.space = {};
Object.defineProperty(s.staticEntities.space, "large", {
    get: e(function() {
        return "l"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "medium", {
    get: e(function() {
        return "m"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "xXLarge", {
    get: e(function() {
        return "xxl"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "extraSmall", {
    get: e(function() {
        return "xs"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "small", {
    get: e(function() {
        return "s"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "base", {
    get: e(function() {
        return "base"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "extraLarge", {
    get: e(function() {
        return "xl"
    }, "get")
});
Object.defineProperty(s.staticEntities.space, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
s.staticEntities.alert = {};
Object.defineProperty(s.staticEntities.alert, "success", {
    get: e(function() {
        return "alert-success"
    }, "get")
});
Object.defineProperty(s.staticEntities.alert, "error", {
    get: e(function() {
        return "alert-error"
    }, "get")
});
Object.defineProperty(s.staticEntities.alert, "info", {
    get: e(function() {
        return "alert-info"
    }, "get")
});
Object.defineProperty(s.staticEntities.alert, "warning", {
    get: e(function() {
        return "alert-warning"
    }, "get")
});
s.staticEntities.floatingPosition = {};
Object.defineProperty(s.staticEntities.floatingPosition, "leftStart", {
    get: e(function() {
        return "left-start"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "topEnd", {
    get: e(function() {
        return "top-end"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "top", {
    get: e(function() {
        return "top"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "bottomEnd", {
    get: e(function() {
        return "bottom-end"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "auto", {
    get: e(function() {
        return "auto"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "leftEnd", {
    get: e(function() {
        return "left-end"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "bottomStart", {
    get: e(function() {
        return "bottom-start"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "rightEnd", {
    get: e(function() {
        return "right-end"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "topStart", {
    get: e(function() {
        return "top-start"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "rightStart", {
    get: e(function() {
        return "right-start"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "center", {
    get: e(function() {
        return "center"
    }, "get")
});
Object.defineProperty(s.staticEntities.floatingPosition, "bottom", {
    get: e(function() {
        return "bottom"
    }, "get")
});
s.staticEntities.booleanTypes = {};
Object.defineProperty(s.staticEntities.booleanTypes, "true", {
    get: e(function() {
        return "true"
    }, "get")
});
Object.defineProperty(s.staticEntities.booleanTypes, "unset", {
    get: e(function() {
        return "unset"
    }, "get")
});
Object.defineProperty(s.staticEntities.booleanTypes, "false", {
    get: e(function() {
        return "false"
    }, "get")
});
s.staticEntities.menuAction = {};
Object.defineProperty(s.staticEntities.menuAction, "menu", {
    get: e(function() {
        return "Menu"
    }, "get")
});
Object.defineProperty(s.staticEntities.menuAction, "auto", {
    get: e(function() {
        return "Auto"
    }, "get")
});
Object.defineProperty(s.staticEntities.menuAction, "hidden", {
    get: e(function() {
        return "Hidden"
    }, "get")
});
Object.defineProperty(s.staticEntities.menuAction, "back", {
    get: e(function() {
        return "Back"
    }, "get")
});
s.staticEntities.accordionIconPosition = {};
Object.defineProperty(s.staticEntities.accordionIconPosition, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(s.staticEntities.accordionIconPosition, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
s.staticEntities.messageStatus = {};
Object.defineProperty(s.staticEntities.messageStatus, "hidden", {
    get: e(function() {
        return "Hidden"
    }, "get")
});
Object.defineProperty(s.staticEntities.messageStatus, "read", {
    get: e(function() {
        return "Read"
    }, "get")
});
Object.defineProperty(s.staticEntities.messageStatus, "sent", {
    get: e(function() {
        return "Sent"
    }, "get")
});
Object.defineProperty(s.staticEntities.messageStatus, "received", {
    get: e(function() {
        return "Received"
    }, "get")
});
s.staticEntities.scrollbarStyle = {};
Object.defineProperty(s.staticEntities.scrollbarStyle, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(s.staticEntities.scrollbarStyle, "default", {
    get: e(function() {
        return "default"
    }, "get")
});
Object.defineProperty(s.staticEntities.scrollbarStyle, "compact", {
    get: e(function() {
        return "compact"
    }, "get")
});
s.staticEntities.color = {};
Object.defineProperty(s.staticEntities.color, "neutral9", {
    get: e(function() {
        return "neutral-9"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "grape", {
    get: e(function() {
        return "grape"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral7", {
    get: e(function() {
        return "neutral-7"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral10", {
    get: e(function() {
        return "neutral-10"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "teal", {
    get: e(function() {
        return "teal"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "primary", {
    get: e(function() {
        return "primary"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral4", {
    get: e(function() {
        return "neutral-4"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral8", {
    get: e(function() {
        return "neutral-8"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "indigo", {
    get: e(function() {
        return "indigo"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "orange", {
    get: e(function() {
        return "orange"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "lime", {
    get: e(function() {
        return "lime"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "cyan", {
    get: e(function() {
        return "cyan"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "secondary", {
    get: e(function() {
        return "secondary"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral6", {
    get: e(function() {
        return "neutral-6"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "yellow", {
    get: e(function() {
        return "yellow"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral2", {
    get: e(function() {
        return "neutral-2"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral1", {
    get: e(function() {
        return "neutral-1"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral3", {
    get: e(function() {
        return "neutral-3"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "transparent", {
    get: e(function() {
        return "transparent"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "violet", {
    get: e(function() {
        return "violet"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "blue", {
    get: e(function() {
        return "blue"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral5", {
    get: e(function() {
        return "neutral-5"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "red", {
    get: e(function() {
        return "red"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "pink", {
    get: e(function() {
        return "pink"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "green", {
    get: e(function() {
        return "green"
    }, "get")
});
Object.defineProperty(s.staticEntities.color, "neutral0", {
    get: e(function() {
        return "neutral-0"
    }, "get")
});
s.staticEntities.columnBreak = {};
Object.defineProperty(s.staticEntities.columnBreak, "breakMiddle", {
    get: e(function() {
        return "break-middle"
    }, "get")
});
Object.defineProperty(s.staticEntities.columnBreak, "breakAll", {
    get: e(function() {
        return "break-all"
    }, "get")
});
Object.defineProperty(s.staticEntities.columnBreak, "breakNone", {
    get: e(function() {
        return "break-none"
    }, "get")
});
Object.defineProperty(s.staticEntities.columnBreak, "breakLast", {
    get: e(function() {
        return "break-last"
    }, "get")
});
Object.defineProperty(s.staticEntities.columnBreak, "breakFirst", {
    get: e(function() {
        return "break-first"
    }, "get")
});
s.staticEntities.steps = {};
Object.defineProperty(s.staticEntities.steps, "next", {
    get: e(function() {
        return "next"
    }, "get")
});
Object.defineProperty(s.staticEntities.steps, "past", {
    get: e(function() {
        return "past"
    }, "get")
});
Object.defineProperty(s.staticEntities.steps, "active", {
    get: e(function() {
        return "active"
    }, "get")
});
s.staticEntities.carouselNavigation = {};
Object.defineProperty(s.staticEntities.carouselNavigation, "dots", {
    get: e(function() {
        return "dots"
    }, "get")
});
Object.defineProperty(s.staticEntities.carouselNavigation, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(s.staticEntities.carouselNavigation, "arrows", {
    get: e(function() {
        return "arrows"
    }, "get")
});
Object.defineProperty(s.staticEntities.carouselNavigation, "both", {
    get: e(function() {
        return "both"
    }, "get")
});
s.staticEntities.videoState = {};
Object.defineProperty(s.staticEntities.videoState, "unstarted", {
    get: e(function() {
        return "Unstarted"
    }, "get")
});
Object.defineProperty(s.staticEntities.videoState, "paused", {
    get: e(function() {
        return "Paused"
    }, "get")
});
Object.defineProperty(s.staticEntities.videoState, "ended", {
    get: e(function() {
        return "Ended"
    }, "get")
});
Object.defineProperty(s.staticEntities.videoState, "playing", {
    get: e(function() {
        return "Playing"
    }, "get")
});
s.staticEntities.datePickerWeekDay = {};
Object.defineProperty(s.staticEntities.datePickerWeekDay, "monday", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "saturday", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "sunday", {
    get: e(function() {
        return 0
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "friday", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "tuesday", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "thursday", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(s.staticEntities.datePickerWeekDay, "wednesday", {
    get: e(function() {
        return 3
    }, "get")
});
s.staticEntities.consoleErrorType = {};
Object.defineProperty(s.staticEntities.consoleErrorType, "error", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(s.staticEntities.consoleErrorType, "warning", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(s.staticEntities.consoleErrorType, "information", {
    get: e(function() {
        return 0
    }, "get")
});
var Att = s.staticEntities;
var KD = class KD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new KD(new KD.RecordClass({
            statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(KD, "ST_9b4c1d7f5790df008534dfd8d1c97a7cStructure");
var ie = KD;
ie.init();
var QD = class QD extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new QD(new QD.RecordClass({
            statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(QD, "ST_c2a39fad163b5682839c1093a2166c0eStructure");
var ne = QD;
ne.init();
var $D = class $D extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $D(new $D.RecordClass({
            statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e($D, "ST_239e96529c2ff56a340b6e14573fd053Structure");
var oe = $D;
oe.init();
var Dw = class Dw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NeedsVerification", "needsVerificationAttr", "needs_verification", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Ownership", "ownershipAttr", "ownership", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ie)
        }, !0, ie), this.attr("Document", "documentAttr", "document", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ne)
        }, !0, ne), this.attr("Identity", "identityAttr", "identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oe)
        }, !0, oe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Dw, "ST_15693c4dffeb1c18ce04ec8c251678cfStructure");
var ce = Dw;
ce.init();
var yw = class yw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authentication", "authenticationAttr", "authentication", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ce)
        }, !0, ce), this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("P2p_poa_required", "p2p_poa_requiredAttr", "p2p_poa_required", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("P2p_status", "p2p_statusAttr", "p2p_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Risk_classification", "risk_classificationAttr", "risk_classification", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yw, "ST_41688d261db663d4544900081e65767bStructure");
var ue = yw;
ue.init();
var ty = class ty extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatus", "getAccountStatusAttr", "GetAccountStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ue)
        }, !0, ue)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ty(new ty.RecordClass({
            getAccountStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3183b1f3-faf6-969c-32d1-f8eb3c0f8d02"
    }
};
e(ty, "RC_3183b1f3faf6969c32d1f8eb3c0f8d02");
var wo = ty;
wo.init();
var Sw = class Sw extends t.GenericRecordList {
    static getItemType() {
        return wo
    }
};
e(Sw, "RL_004e51f9bad0ff9671e9f54d029f6acd");
var dw = Sw;
var gw = class gw extends t.GenericRecordList {
    static getItemType() {
        return Vr
    }
};
e(gw, "RL_008b350b8469d88f8d9de8d4f0175b3c");
var Ow = gw;
var bw = class bw extends t.GenericRecordList {
    static getItemType() {
        return m
    }
};
e(bw, "RL_00cdc15bf4b56ecced31398a6b36a9ce");
var xw = bw;
var ey = class ey extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tt)
        }, !0, tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ey(new ey.RecordClass({
            max_proposal_subscriptionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7ff1313a-5ad2-d5f9-92c5-208ece4f2c29"
    }
};
e(ey, "RC_7ff1313a5ad2d5f992c5208ece4f2c29");
var Po = ey;
Po.init();
var Iw = class Iw extends t.GenericRecordList {
    static getItemType() {
        return Po
    }
};
e(Iw, "RL_00dbabde250f433c717b63003f893b2f");
var Rw = Iw;
var Aw = class Aw extends t.GenericRecordList {
    static getItemType() {
        return te
    }
};
e(Aw, "RL_00e1daf27d32b8b4e98978c4e9e58544");
var hw = Aw;
var Gw = class Gw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FirstName", "firstNameAttr", "FirstName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LastName", "lastNameAttr", "LastName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Gw, "ST_24f25c56883af3fb98f750bd4c11bbdcStructure");
var pa = Gw;
pa.init();
var ry = class ry extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PersonalDetailsValidationError", "personalDetailsValidationErrorAttr", "PersonalDetailsValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pa)
        }, !0, pa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ry(new ry.RecordClass({
            personalDetailsValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "00f5a471-7da5-984b-8400-92143f716896"
    }
};
e(ry, "RC_00f5a4717da5984b840092143f716896");
var Bo = ry;
Bo.init();
var Pw = class Pw extends t.GenericRecordList {
    static getItemType() {
        return H
    }
};
e(Pw, "RL_86f7d82f5d3c332697414c565e947945");
var ww = Pw;
var Bw = class Bw extends t.GenericRecordList {
    static getItemType() {
        return H
    }
};
e(Bw, "RL_86f7d82f5d3c332697414c565e947945");
var ay = Bw;
var Ew = class Ew extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_currency", "account_currencyAttr", "account_currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Active_orders", "active_ordersAttr", "active_orders", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_details", "advertiser_detailsAttr", "advertiser_details", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new ay)
        }, !0, ay), this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.Currency, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ew, "ST_c0ab917f51608bd071ade39beb7d22faStructure");
var pe = Ew;
pe.init();
var Lw = class Lw extends t.GenericRecordList {
    static getItemType() {
        return pe
    }
};
e(Lw, "RL_00f6e92c07403e159ff2340d01820a0d");
var Cw = Lw;
var sy = class sy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Postcode", "postcodeAttr", "Postcode2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bt)
        }, !0, bt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sy(new sy.RecordClass({
            postcodeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "012b2720-fb0d-cd44-2416-908af4498cef"
    }
};
e(sy, "RC_012b2720fb0dcd442416908af4498cef");
var Eo = sy;
Eo.init();
var vw = class vw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Minimum", "minimumAttr", "minimum", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Percentage", "percentageAttr", "percentage", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vw, "ST_af7c8c24e0881fcad517d74c916f7352Structure");
var le = vw;
le.init();
var iy = class iy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new iy(new iy.RecordClass({
            loginidAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(iy, "ST_1427747d29628e6a194ee75a554479e4Structure");
var J = iy;
J.init();
var qw = class qw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action_type", "action_typeAttr", "action_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("App_id", "app_idAttr", "app_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Balance_after", "balance_afterAttr", "balance_after", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Fees", "feesAttr", "fees", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new le)
        }, !0, le), this.attr("From", "fromAttr", "from", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Longcode", "longcodeAttr", "longcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("To", "toAttr", "to", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J), this.attr("Transaction_id", "transaction_idAttr", "transaction_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Transaction_time", "transaction_timeAttr", "transaction_time", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qw, "ST_bf8a7e4d5139901f795596a5fbda1b90Structure");
var Ir = qw;
Ir.init();
var kw = class kw extends t.GenericRecordList {
    static getItemType() {
        return Ir
    }
};
e(kw, "RL_1fe22685e54a8e74085b50df987ed7fb");
var jw = kw;
var Uw = class Uw extends t.GenericRecordList {
    static getItemType() {
        return Ir
    }
};
e(Uw, "RL_1fe22685e54a8e74085b50df987ed7fb");
var ny = Uw;
var Fw = class Fw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Count", "countAttr", "count", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Transactions", "transactionsAttr", "transactions", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new ny)
        }, !0, ny)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Fw, "ST_ae14fa1d3d419850de9a85b162df7c73Structure");
var me = Fw;
me.init();
var oy = class oy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Statement", "statementAttr", "Statement", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new me)
        }, !0, me)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oy(new oy.RecordClass({
            statementAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "37b9abdf-c568-1e06-0cfc-cd92139f3527"
    }
};
e(oy, "RC_37b9abdfc5681e060cfccd92139f3527");
var Co = oy;
Co.init();
var _w = class _w extends t.GenericRecordList {
    static getItemType() {
        return Co
    }
};
e(_w, "RL_016b438202bb8683ed0088796cbdae5f");
var Vw = _w;
var cy = class cy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Financial_assessment", "financial_assessmentAttr", "financial_assessment", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cy(new cy.RecordClass({
            financial_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(cy, "ST_77d1f9105abe302fa373f146c295ea17Structure");
var fe = cy;
fe.init();
var Nw = class Nw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5", "mt5Attr", "mt5", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Tax_information", "tax_informationAttr", "tax_information", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Nw, "ST_83fbd707f872e92b597918150eff1f3eStructure");
var Te = Nw;
Te.init();
var Mw = class Mw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Signup", "signupAttr", "signup", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Withdrawal", "withdrawalAttr", "withdrawal", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("After_first_deposit", "after_first_depositAttr", "after_first_deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fe)
        }, !0, fe), this.attr("Compliance", "complianceAttr", "compliance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Te)
        }, !0, Te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Mw, "ST_98319758945048a72386b9e9466c220aStructure");
var S = Mw;
S.init();
var zw = class zw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_leverage", "max_leverageAttr", "max_leverage", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Min_spread", "min_spreadAttr", "min_spread", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(zw, "ST_839b1aebc8b507d4259e4312bdc21d4bStructure");
var V = zw;
V.init();
var Xw = class Xw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Is_default_jurisdiction", "is_default_jurisdictionAttr", "is_default_jurisdiction", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Linkable_landing_companies", "linkable_landing_companiesAttr", "linkable_landing_companies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product", "productAttr", "product", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Requirements", "requirementsAttr", "requirements", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S), this.attr("Shortcode", "shortcodeAttr", "shortcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Instruments", "instrumentsAttr", "instruments", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Jurisdiction", "jurisdictionAttr", "jurisdiction", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Licence_number", "licence_numberAttr", "licence_number", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product_details", "product_detailsAttr", "product_details", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V), this.attr("Regulatory_authority", "regulatory_authorityAttr", "regulatory_authority", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Xw, "ST_9b3eaf42648c2b28591e8ee92b7ce159Structure");
var hr = Xw;
hr.init();
var Hw = class Hw extends t.GenericRecordList {
    static getItemType() {
        return hr
    }
};
e(Hw, "RL_016ebe8f15c3060e53dd56f2fea28791");
var Ww = Hw;
var Jw = class Jw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Space", "spaceAttr", "Space", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Jw, "EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord");
var os = Jw;
os.init();
var uy = class uy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Space", "spaceAttr", "Space", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new os)
        }, !0, os)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uy(new uy.RecordClass({
            spaceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9589ecc0-6297-88c2-aca6-b47bcbae782c"
    }
};
e(uy, "RC_9589ecc0629788c2aca6b47bcbae782c");
var Lo = uy;
Lo.init();
var Zw = class Zw extends t.GenericRecordList {
    static getItemType() {
        return Lo
    }
};
e(Zw, "RL_021cf4e3f37562560ed722ed4a5446c1");
var Yw = Zw;
var Kw = class Kw extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Kw, "EN_1e2af88601c0491260411e1369eb104cEntityRecord");
var cs = Kw;
cs.init();
var $w = class $w extends t.GenericRecordList {
    static getItemType() {
        return cs
    }
};
e($w, "RL_024c65775fda4a7c95336ab422a752c4");
var Qw = $w;
var eP = class eP extends t.GenericRecordList {
    static getItemType() {
        return Vt
    }
};
e(eP, "RL_0253348eb22ed9882ec1d8af3ef0b76e");
var tP = eP;
var rP = class rP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(rP, "EN_7e91f0d7966642cf0627c6392e43ce45EntityRecord");
var la = rP;
la.init();
var sP = class sP extends t.GenericRecordList {
    static getItemType() {
        return la
    }
};
e(sP, "RL_026ef1e58feb0498538a2796109e0f64");
var aP = sP;
var py = class py extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Orientation", "orientationAttr", "Orientation", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new py(new py.RecordClass({
            orientationAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(py, "EN_8d4f783227026ce93d50126c7f028443EntityRecord");
var us = py;
us.init();
var nP = class nP extends t.GenericRecordList {
    static getItemType() {
        return us
    }
};
e(nP, "RL_028be7f802152b5f25a868ed964b5ea2");
var iP = nP;
var ly = class ly extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatus", "getAccountStatusAttr", "get_account_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ue)
        }, !0, ue)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ly(new ly.RecordClass({
            getAccountStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ly, "ST_746d074ddcc08e0df3b269ffb1933d5aStructure");
var ps = ly;
ps.init();
var cP = class cP extends t.GenericRecordList {
    static getItemType() {
        return ps
    }
};
e(cP, "RL_02995be0d4089fecb83f5ff06bf3de7f");
var oP = cP;
var uP = class uP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DisplayName", "displayNameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Document_format", "document_formatAttr", "document_format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Example_format", "example_formatAttr", "example_format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uP, "ST_2558553bf4a6ee7213c353b5b0699253Structure");
var De = uP;
De.init();
var pP = class pP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AvailableServices", "availableServicesAttr", "available_services", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("DisplayName", "displayNameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentType", "documentTypeAttr", "document_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ExampleFormat", "exampleFormatAttr", "example_format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sides", "sidesAttr", "Sides", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("LifeTimeValid", "lifeTimeValidAttr", "lifetime_valid", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("AdditionalDocument", "additionalDocumentAttr", "additional", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new De)
        }, !0, De)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(pP, "ST_fa5b335817319f3b089d446a032cf9abStructure");
var Ar = pP;
Ar.init();
var my = class my extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SupportedDocuments", "supportedDocumentsAttr", "SupportedDocuments", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ar)
        }, !0, Ar)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new my(new my.RecordClass({
            supportedDocumentsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "02b3156d-da71-1037-d0bf-0bf8ba2d349b"
    }
};
e(my, "RC_02b3156dda711037d0bf0bf8ba2d349b");
var vo = my;
vo.init();
var fy = class fy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Landing_company", "landing_companyAttr", "landing_company", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fy(new fy.RecordClass({
            landing_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(fy, "ST_2aa6b158772e078b381113da0ab825f8Structure");
var ye = fy;
ye.init();
var lP = class lP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "idv", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q), this.attr("Tax_details_required", "tax_details_requiredAttr", "tax_details_required", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Tin_format", "tin_formatAttr", "tin_format", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Tin_format_description", "tin_format_descriptionAttr", "tin_format_description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lP, "ST_628e5221d510e98bcfe00cce5f107d21Structure");
var de = lP;
de.init();
var Ty = class Ty extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Standard", "standardAttr", "standard", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ty(new Ty.RecordClass({
            standardAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Ty, "ST_9adaf3e13b31a4c3f4ee4c0b223b00bcStructure");
var Se = Ty;
Se.init();
var Dy = class Dy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "all", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Se)
        }, !0, Se)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dy(new Dy.RecordClass({
            allAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Dy, "ST_5ba9c80e587385c94102779d8eab301cStructure");
var Y = Dy;
Y.init();
var mP = class mP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Only_before_auth", "only_before_authAttr", "only_before_auth", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Personal_details_not_locked", "personal_details_not_lockedAttr", "personal_details_not_locked", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mP, "ST_ddeabbcab252c99fc5f083425434b2a7Structure");
var Oe = mP;
Oe.init();
var fP = class fP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_payout", "max_payoutAttr", "max_payout", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Min_stake", "min_stakeAttr", "min_stake", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fP, "ST_b47d3155c531939aabdd10ec3a99049dStructure");
var p = fP;
p.init();
var TP = class TP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("BTC", "bTCAttr", "BTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("ETH", "eTHAttr", "ETH", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("EUR", "eURAttr", "EUR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("GBP", "gBPAttr", "GBP", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("LTC", "lTCAttr", "LTC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("USDC", "uSDCAttr", "USDC", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("EUSDT", "eUSDTAttr", "eUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p), this.attr("TUSDT", "tUSDTAttr", "tUSDT", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TP, "ST_5b838c70a2bbb273d7a479efa1e8ea87Structure");
var g = TP;
g.init();
var DP = class DP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Commodities", "commoditiesAttr", "commodities", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g), this.attr("Cryptocurrency", "cryptocurrencyAttr", "cryptocurrency", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g), this.attr("Forex", "forexAttr", "forex", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g), this.attr("Indices", "indicesAttr", "indices", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g), this.attr("Synthetic_index", "synthetic_indexAttr", "synthetic_index", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(DP, "ST_72e91b438c2e206bca7398a7a69902dfStructure");
var ge = DP;
ge.init();
var yP = class yP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Changeable_fields", "changeable_fieldsAttr", "changeable_fields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oe)
        }, !0, Oe), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency_config", "currency_configAttr", "currency_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ge)
        }, !0, ge), this.attr("Has_reality_check", "has_reality_checkAttr", "has_reality_check", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Legal_allowed_contract_categories", "legal_allowed_contract_categoriesAttr", "legal_allowed_contract_categories", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Legal_allowed_currencies", "legal_allowed_currenciesAttr", "legal_allowed_currencies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Legal_allowed_markets", "legal_allowed_marketsAttr", "legal_allowed_markets", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Legal_default_currency", "legal_default_currencyAttr", "legal_default_currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Requirements", "requirementsAttr", "requirements", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S), this.attr("Shortcode", "shortcodeAttr", "shortcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Support_professional_client", "support_professional_clientAttr", "support_professional_client", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Tin_not_mandatory", "tin_not_mandatoryAttr", "tin_not_mandatory", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yP, "ST_6cf1ba858957788c000fe8d27578f9c1Structure");
var y = yP;
y.init();
var yy = class yy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Standard", "standardAttr", "standard", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yy(new yy.RecordClass({
            standardAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(yy, "ST_cea376e9e95ae6d491d188174483cdceStructure");
var xe = yy;
xe.init();
var dy = class dy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("USD", "uSDAttr", "USD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dy(new dy.RecordClass({
            uSDAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(dy, "ST_6168fd7b9ba43ed0f5fe1ccbd8f82e90Structure");
var be = dy;
be.init();
var Sy = class Sy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Forex", "forexAttr", "forex", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new be)
        }, !0, be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sy(new Sy.RecordClass({
            forexAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Sy, "ST_bccc1fae1833449eea329fa137ba885aStructure");
var Re = Sy;
Re.init();
var dP = class dP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address", "addressAttr", "address", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Has_reality_check", "has_reality_checkAttr", "has_reality_check", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Legal_allowed_currencies", "legal_allowed_currenciesAttr", "legal_allowed_currencies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Legal_default_currency", "legal_default_currencyAttr", "legal_default_currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Requirements", "requirementsAttr", "requirements", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S), this.attr("Shortcode", "shortcodeAttr", "shortcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Support_professional_client", "support_professional_clientAttr", "support_professional_client", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Tin_not_mandatory", "tin_not_mandatoryAttr", "tin_not_mandatory", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Currency_config", "currency_configAttr", "currency_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Re)
        }, !0, Re), this.attr("Legal_allowed_contract_categories", "legal_allowed_contract_categoriesAttr", "legal_allowed_contract_categories", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dP, "ST_159cd2ead3b4ce7cf017e33699885453Structure");
var _ = dP;
_.init();
var SP = class SP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Swap_free", "swap_freeAttr", "swap_free", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y), this.attr("Zero_spread", "zero_spreadAttr", "zero_spread", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _)
        }, !0, _)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(SP, "ST_60a5d7a279694c475c6cf2585b652410Structure");
var Ie = SP;
Ie.init();
var OP = class OP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Financial", "financialAttr", "financial", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y), this.attr("Financial_stp", "financial_stpAttr", "financial_stp", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _)
        }, !0, _)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(OP, "ST_8ddbf1b6e2eccc5a160b5fab6b9b9b86Structure");
var Z = OP;
Z.init();
var gP = class gP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All_company", "all_companyAttr", "all_company", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Config", "configAttr", "config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new de)
        }, !0, de), this.attr("Ctrader", "ctraderAttr", "ctrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Y)
        }, !0, Y), this.attr("Derivez", "derivezAttr", "derivez", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Y)
        }, !0, Y), this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "dxtrade_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xe)
        }, !0, xe), this.attr("Financial_company", "financial_companyAttr", "financial_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y), this.attr("Gaming_company", "gaming_companyAttr", "gaming_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y), this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_idv_supported", "is_idv_supportedAttr", "is_idv_supported", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Minimum_age", "minimum_ageAttr", "minimum_age", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Mt_all_company", "mt_all_companyAttr", "mt_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ie)
        }, !0, Ie), this.attr("Mt_financial_company", "mt_financial_companyAttr", "mt_financial_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Z)
        }, !0, Z), this.attr("Mt_gaming_company", "mt_gaming_companyAttr", "mt_gaming_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Z)
        }, !0, Z), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Virtual_company", "virtual_companyAttr", "virtual_company", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gP, "ST_d12f6a9e29cbb97250918a3fc7bc632aStructure");
var he = gP;
he.init();
var xP = class xP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ye)
        }, !0, ye), this.attr("Landing_company", "landing_companyAttr", "landing_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new he)
        }, !0, he), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xP, "ST_55477c48be760e041c4dbfa365f63009Structure");
var ls = xP;
ls.init();
var Oy = class Oy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyResponse", "getLandingCompanyResponseAttr", "GetLandingCompanyResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ls)
        }, !0, ls)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oy(new Oy.RecordClass({
            getLandingCompanyResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e16346b0-5b03-d5a8-388d-39bb24b7660c"
    }
};
e(Oy, "RC_e16346b05b03d5a8388d39bb24b7660c");
var qo = Oy;
qo.init();
var RP = class RP extends t.GenericRecordList {
    static getItemType() {
        return qo
    }
};
e(RP, "RL_02c7187c7ba98cee9be98803b8e6dc25");
var bP = RP;
var gy = class gy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "Type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gy(new gy.RecordClass({
            typeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(gy, "EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord");
var ms = gy;
ms.init();
var xy = class xy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ms)
        }, !0, ms)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xy(new xy.RecordClass({
            carouselDirectionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fb5d22b1-003c-ff23-4a58-8ab54b5367f0"
    }
};
e(xy, "RC_fb5d22b1003cff234a588ab54b5367f0");
var jo = xy;
jo.init();
var hP = class hP extends t.GenericRecordList {
    static getItemType() {
        return jo
    }
};
e(hP, "RL_02cff45c25b99caaf51dba44a0e0b754");
var IP = hP;
var AP = class AP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_dispute", "order_disputeAttr", "p2p_order_dispute", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(AP, "ST_14af92e1255335a1e3d4bd8d827598f2Structure");
var fs = AP;
fs.init();
var by = class by extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeResponse", "p2POrderDisputeResponseAttr", "P2POrderDisputeResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fs)
        }, !0, fs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new by(new by.RecordClass({
            p2POrderDisputeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "52cd3192-fe25-a809-00d1-3891f43fdafe"
    }
};
e(by, "RC_52cd3192fe25a80900d13891f43fdafe");
var ko = by;
ko.init();
var wP = class wP extends t.GenericRecordList {
    static getItemType() {
        return ko
    }
};
e(wP, "RL_02db0f35ddb2c08edb356b6a4e1e4b4a");
var GP = wP;
var BP = class BP extends t.GenericRecordList {
    static getItemType() {
        return Ar
    }
};
e(BP, "RL_1ebbc103f2ce4210af7051ee87bd80c0");
var PP = BP;
var EP = class EP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentType", "documentTypeAttr", "document_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("RejectedReasons", "rejectedReasonsAttr", "rejected_reasons", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ReportAvailable", "reportAvailableAttr", "report_available", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(EP, "ST_5fa58ebfdb56dbce84a161c55c337777Structure");
var N = EP;
N.init();
var CP = class CP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SupportedDocuments", "supportedDocumentsAttr", "supported_documents", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("LastRejected", "lastRejectedAttr", "last_rejected", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(CP, "ST_433eb5ffcea5c3c69d4be061c9113711Structure");
var Ae = CP;
Ae.init();
var LP = class LP extends t.GenericRecordList {
    static getItemType() {
        return Ar
    }
};
e(LP, "RL_1ebbc103f2ce4210af7051ee87bd80c0");
var Ry = LP;
var vP = class vP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AvailableServices", "availableServicesAttr", "available_services", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SupportedDocuments", "supportedDocumentsAttr", "supported_documents", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Ry)
        }, !0, Ry), this.attr("LastRejected", "lastRejectedAttr", "last_rejected", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N), this.attr("Service", "serviceAttr", "service", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vP, "ST_ec58aaccd7b190d47a2dd7159fa0d866Structure");
var Ge = vP;
Ge.init();
var qP = class qP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address", "addressAttr", "address", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ae)
        }, !0, Ae), this.attr("Identity", "identityAttr", "identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ge)
        }, !0, Ge), this.attr("RiskClassification", "riskClassificationAttr", "risk_classification", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qP, "ST_50afbe86b1f98695d7a2eacc451587a7Structure");
var we = qP;
we.init();
var Iy = class Iy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "KYCAuthStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new we)
        }, !0, we)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Iy(new Iy.RecordClass({
            kYCAuthStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5490f87-f20f-2000-0a36-a875dced4a8f"
    }
};
e(Iy, "RC_f5490f87f20f20000a36a875dced4a8f");
var Uo = Iy;
Uo.init();
var kP = class kP extends t.GenericRecordList {
    static getItemType() {
        return Uo
    }
};
e(kP, "RL_02fe2e113b5eb9c675da8b940dcff7a8");
var jP = kP;
var UP = class UP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Length", "lengthAttr", "Length", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("HasAtLeastOneUppercaseAndOneLowercase", "hasAtLeastOneUppercaseAndOneLowercaseAttr", "HasAtLeastOneUppercaseAndOneLowercase", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberAttr", "HasAtLeastOneNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterAttr", "HasAtLeastOneSpecialCharacter", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(UP, "ST_0314d78ca6806dcc3e7ca8803a68ff6aStructure");
var ma = UP;
ma.init();
var hy = class hy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("WebsiteStatusResponse", "websiteStatusResponseAttr", "WebsiteStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nr)
        }, !0, Nr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hy(new hy.RecordClass({
            websiteStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0319dc7a-bb74-e428-6ec0-cb2872f5908a"
    }
};
e(hy, "RC_0319dc7abb74e4286ec0cb2872f5908a");
var Fo = hy;
Fo.init();
var FP = class FP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Binary_user_id", "binary_user_idAttr", "binary_user_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Company_name", "company_nameAttr", "company_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Company_registration_no", "company_registration_noAttr", "company_registration_no", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Partner_loginid", "partner_loginidAttr", "partner_loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Partner_type", "partner_typeAttr", "partner_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Provider", "providerAttr", "provider", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Website", "websiteAttr", "website", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(FP, "ST_d14d6f16c3fac1eeddbfb986f8c96a3cStructure");
var Gr = FP;
Gr.init();
var _P = class _P extends t.GenericRecordList {
    static getItemType() {
        return Gr
    }
};
e(_P, "RL_8814fb844598465c5d35556ac2fb3bb5");
var VP = _P;
var NP = class NP extends t.GenericRecordList {
    static getItemType() {
        return Gr
    }
};
e(NP, "RL_8814fb844598465c5d35556ac2fb3bb5");
var Ay = NP;
var MP = class MP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dynamicworks", "dynamicworksAttr", "dynamicworks", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Myaffiliates", "myaffiliatesAttr", "myaffiliates", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Myaffiliate", "myaffiliateAttr", "myaffiliate", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(MP, "ST_32482be3161a6f43acc69f26815515ceStructure");
var Pe = MP;
Pe.init();
var zP = class zP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_settings", "partner_settingsAttr", "partner_settings", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Ay)
        }, !0, Ay), this.attr("Platform_url", "platform_urlAttr", "platform_url", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pe)
        }, !0, Pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(zP, "ST_90a15bb276ca02f2e58568845784072cStructure");
var Be = zP;
Be.init();
var Gy = class Gy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_account", "partner_accountAttr", "Partner_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Be)
        }, !0, Be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gy(new Gy.RecordClass({
            partner_accountAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0340cb56-c492-8ed7-e579-290b842d6376"
    }
};
e(Gy, "RC_0340cb56c4928ed7e579290b842d6376");
var Vo = Gy;
Vo.init();
var wy = class wy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PhoneNumberVerifyRequest", "phoneNumberVerifyRequestAttr", "PhoneNumberVerifyRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mr)
        }, !0, Mr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wy(new wy.RecordClass({
            phoneNumberVerifyRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6f00f3b7-7edc-31dc-709d-f5f75d5609b5"
    }
};
e(wy, "RC_6f00f3b77edc31dc709df5f75d5609b5");
var _o = wy;
_o.init();
var WP = class WP extends t.GenericRecordList {
    static getItemType() {
        return _o
    }
};
e(WP, "RL_0342c3044f74459cfc95e18bd327b8f0");
var XP = WP;
var Py = class Py extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("State", "stateAttr", "State", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Py(new Py.RecordClass({
            stateAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Py, "EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord");
var Ts = Py;
Ts.init();
var By = class By extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("VideoState", "videoStateAttr", "VideoState", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ts)
        }, !0, Ts)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new By(new By.RecordClass({
            videoStateAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "03619642-a06d-e094-78f0-b8f506c364eb"
    }
};
e(By, "RC_03619642a06de09478f0b8f506c364eb");
var No = By;
No.init();
var JP = class JP extends t.GenericRecordList {
    static getItemType() {
        return Se
    }
};
e(JP, "RL_03ad86d8c1630b012ffc7d14eb428cff");
var HP = JP;
var ZP = class ZP extends t.GenericRecordList {
    static getItemType() {
        return ft
    }
};
e(ZP, "RL_03fbfb1822cd8450600257cdfa89156a");
var YP = ZP;
var KP = class KP extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Add_blocked", "add_blockedAttr", "add_blocked", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Add_favourites", "add_favouritesAttr", "add_favourites", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Remove_blocked", "remove_blockedAttr", "remove_blocked", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Remove_favourites", "remove_favouritesAttr", "remove_favourites", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(KP, "ST_43e34b530185a530d10be78dff4ece45Structure");
var Ds = KP;
Ds.init();
var $P = class $P extends t.GenericRecordList {
    static getItemType() {
        return Ds
    }
};
e($P, "RL_04d18d7e4131a1487094ff1d381d4a05");
var QP = $P;
var tB = class tB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Value", "valueAttr", "value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Creator", "creatorAttr", "creator", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Last_set", "last_setAttr", "last_set", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(tB, "ST_ff6fa4367123aaf1ab10608dcb16ba43Structure");
var K = tB;
K.init();
var rB = class rB extends t.GenericRecordList {
    static getItemType() {
        return K
    }
};
e(rB, "RL_04d46e2886f2b55aae00a9596448295c");
var eB = rB;
var Ey = class Ey extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAccountStatusRes", "getAccountStatusResAttr", "GetAccountStatusRes", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ps)
        }, !0, ps)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ey(new Ey.RecordClass({
            getAccountStatusResAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e70e9077-4605-2ce9-2e69-1c25e5a4ffd3"
    }
};
e(Ey, "RC_e70e907746052ce92e691c25e5a4ffd3");
var Mo = Ey;
Mo.init();
var sB = class sB extends t.GenericRecordList {
    static getItemType() {
        return Mo
    }
};
e(sB, "RL_05831c3634322d723355d086c3117149");
var aB = sB;
var Cy = class Cy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Integer7", "integer7Attr", "Integer7", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new m)
        }, !0, m)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cy(new Cy.RecordClass({
            integer7Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "05cf75e6-1d98-5a21-44c0-c1483a839445"
    }
};
e(Cy, "RC_05cf75e61d985a2144c0c1483a839445");
var zo = Cy;
zo.init();
var Ly = class Ly extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ly(new Ly.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Ly, "ST_2f83f0a44c31e76c12440b162d598457Structure");
var Ee = Ly;
Ee.init();
var iB = class iB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advert_list", "advert_listAttr", "p2p_advert_list", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ee)
        }, !0, Ee)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iB, "ST_d4e039bbd70c593954382df471fdac2aStructure");
var ys = iB;
ys.init();
var vy = class vy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertListResponse", "p2PAdvertListResponseAttr", "P2PAdvertListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ys)
        }, !0, ys)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vy(new vy.RecordClass({
            p2PAdvertListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aaae25c6-5f55-ba27-fa3b-d1194aa7adb1"
    }
};
e(vy, "RC_aaae25c65f55ba27fa3bd1194aa7adb1");
var Xo = vy;
Xo.init();
var oB = class oB extends t.GenericRecordList {
    static getItemType() {
        return Xo
    }
};
e(oB, "RL_0603e4560918555f40e94b916d53c558");
var nB = oB;
var uB = class uB extends t.GenericRecordList {
    static getItemType() {
        return xr
    }
};
e(uB, "RL_071a5687136a6dbeecb0a0d193c188a2");
var cB = uB;
var qy = class qy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetResidenceListResponse", "getResidenceListResponseAttr", "GetResidenceListResponse2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qa)
        }, !0, Qa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qy(new qy.RecordClass({
            getResidenceListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a5ac308-5c04-4e0c-9df1-51a275033fc0"
    }
};
e(qy, "RC_0a5ac3085c044e0c9df151a275033fc0");
var Wo = qy;
Wo.init();
var lB = class lB extends t.GenericRecordList {
    static getItemType() {
        return Wo
    }
};
e(lB, "RL_06044e18a6adcb4a057162249eab9621");
var pB = lB;
var mB = class mB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mB, "EN_4d1bc898bacd43263e8d01ffe2f5fae1EntityRecord");
var fa = mB;
fa.init();
var jy = class jy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5FinancialCommisionInfoTable2", "mT5FinancialCommisionInfoTable2Attr", "MT5FinancialCommisionInfoTable2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fa)
        }, !0, fa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jy(new jy.RecordClass({
            mT5FinancialCommisionInfoTable2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "85c55ea8-b743-56ab-faef-898536eb52ee"
    }
};
e(jy, "RC_85c55ea8b74356abfaef898536eb52ee");
var Ho = jy;
Ho.init();
var TB = class TB extends t.GenericRecordList {
    static getItemType() {
        return Ho
    }
};
e(TB, "RL_0626089332b5e453c3aa7ee2cc5c8fe2");
var fB = TB;
var ky = class ky extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AlertType", "alertTypeAttr", "AlertType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zr)
        }, !0, zr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ky(new ky.RecordClass({
            alertTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "064778dd-c816-44dd-cf14-06b573b875a4"
    }
};
e(ky, "RC_064778ddc81644ddcf1406b573b875a4");
var Jo = ky;
Jo.init();
var Uy = class Uy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Logout", "logoutAttr", "logout", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Uy(new Uy.RecordClass({
            logoutAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Uy, "ST_ae40a5e8008c1f0252b9952ccf57ee94Structure");
var Ce = Uy;
Ce.init();
var DB = class DB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ce)
        }, !0, Ce), this.attr("Logout", "logoutAttr", "logout", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(DB, "ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure");
var ds = DB;
ds.init();
var dB = class dB extends t.GenericRecordList {
    static getItemType() {
        return ds
    }
};
e(dB, "RL_06622fbce6cdd9c0cef8e5e1e42d7483");
var yB = dB;
var Fy = class Fy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Common_reporting_standard", "common_reporting_standardAttr", "Common_reporting_standard2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new It)
        }, !0, It)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fy(new Fy.RecordClass({
            common_reporting_standardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7501a1e5-9336-7174-3a2b-bef56326a047"
    }
};
e(Fy, "RC_7501a1e5933671743a2bbef56326a047");
var Yo = Fy;
Yo.init();
var OB = class OB extends t.GenericRecordList {
    static getItemType() {
        return Yo
    }
};
e(OB, "RL_06ad8081ecdd4854820e95cbc9df15a8");
var SB = OB;
var gB = class gB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Max_order_amount", "max_order_amountAttr", "max_order_amount", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Payment_method_ids", "payment_method_idsAttr", "payment_method_ids", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Payment_method_names", "payment_method_namesAttr", "payment_method_names", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Rate", "rateAttr", "rate", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Rate_type", "rate_typeAttr", "rate_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Min_order_amount", "min_order_amountAttr", "min_order_amount", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gB, "ST_506e59df587c990463d9332a4a38f192Structure");
var Ss = gB;
Ss.init();
var Vy = class Vy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateRequest", "p2PAdvertCreateRequestAttr", "P2PAdvertCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ss)
        }, !0, Ss)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vy(new Vy.RecordClass({
            p2PAdvertCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78c58bb8-00be-d93f-ede1-f23d20908730"
    }
};
e(Vy, "RC_78c58bb800bed93fede1f23d20908730");
var Zo = Vy;
Zo.init();
var bB = class bB extends t.GenericRecordList {
    static getItemType() {
        return Zo
    }
};
e(bB, "RL_06babe1eae4ab7ef44e040e05b96ad18");
var xB = bB;
var _y = class _y extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new k)
        }, !0, k)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _y(new _y.RecordClass({
            transfer_between_accountAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "08d13aa3-0e14-041e-8a41-4b5d62b51845"
    }
};
e(_y, "RC_08d13aa30e14041e8a414b5d62b51845");
var Ko = _y;
Ko.init();
var IB = class IB extends t.GenericRecordList {
    static getItemType() {
        return Ko
    }
};
e(IB, "RL_0706637a7e12b34ea54e4ad5e3fa7774");
var RB = IB;
var hB = class hB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Direction", "directionAttr", "Direction", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hB, "EN_50814454e481dd1773c2250bc248da5eEntityRecord");
var Os = hB;
Os.init();
var Ny = class Ny extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Direction", "directionAttr", "Direction", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Os)
        }, !0, Os)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ny(new Ny.RecordClass({
            directionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "070998dc-6b3d-c951-b52d-8108550fe380"
    }
};
e(Ny, "RC_070998dc6b3dc951b52d8108550fe380");
var Qo = Ny;
Qo.init();
var AB = class AB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Link", "linkAttr", "link", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(AB, "ST_ea8a5b552e6867ec254c90e9d858cc93Structure");
var wr = AB;
wr.init();
var wB = class wB extends t.GenericRecordList {
    static getItemType() {
        return wr
    }
};
e(wB, "RL_0715dddce4dc71206268eca3f2bfe194");
var GB = wB;
var My = class My extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("WeekDay", "weekDayAttr", "WeekDay", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new My(new My.RecordClass({
            weekDayAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(My, "EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord");
var gs = My;
gs.init();
var zy = class zy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gs)
        }, !0, gs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zy(new zy.RecordClass({
            datePickerWeekDayAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "210f541f-43ec-6384-ba59-bfd8fe4b8837"
    }
};
e(zy, "RC_210f541f43ec6384ba59bfd8fe4b8837");
var $o = zy;
$o.init();
var BB = class BB extends t.GenericRecordList {
    static getItemType() {
        return $o
    }
};
e(BB, "RL_073741b4a94a52714ff12683c5a2ca93");
var PB = BB;
var EB = class EB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("new_password", "new_passwordAttr", "new_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("verification_code", "verification_codeAttr", "verification_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(EB, "ST_514eb2dd1a273e9cef6da33626bbf692Structure");
var xs = EB;
xs.init();
var Xy = class Xy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetRequest", "postTradingPlatformPasswordResetRequestAttr", "PostTradingPlatformPasswordResetRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xs)
        }, !0, xs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xy(new Xy.RecordClass({
            postTradingPlatformPasswordResetRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b95c380c-099a-10aa-1c6c-66ff29a6b5ad"
    }
};
e(Xy, "RC_b95c380c099a10aa1c6c66ff29a6b5ad");
var tc = Xy;
tc.init();
var LB = class LB extends t.GenericRecordList {
    static getItemType() {
        return tc
    }
};
e(LB, "RL_0755631e3e89e106d6250421ad51275f");
var CB = LB;
var Wy = class Wy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PhoneNumberChallengeRequest", "phoneNumberChallengeRequestAttr", "PhoneNumberChallengeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xr)
        }, !0, Xr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wy(new Wy.RecordClass({
            phoneNumberChallengeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "87906c34-db11-62e5-75ac-d2eb3da72825"
    }
};
e(Wy, "RC_87906c34db1162e575acd2eb3da72825");
var ec = Wy;
ec.init();
var qB = class qB extends t.GenericRecordList {
    static getItemType() {
        return ec
    }
};
e(qB, "RL_07b880fb97f8ddb3f3b26eabfe5c1153");
var vB = qB;
var jB = class jB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Client_id", "client_idAttr", "client_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency_type", "currency_typeAttr", "currency_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Oauth_token", "oauth_tokenAttr", "oauth_token", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jB, "ST_94d54d268b2cff4f4ed014a5df48da20Structure");
var Le = jB;
Le.init();
var kB = class kB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jt)
        }, !0, jt), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("New_account_virtual", "new_account_virtualAttr", "new_account_virtual", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Le)
        }, !0, Le), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(kB, "ST_72900159fa859d96c9b5e8531e637a4cStructure");
var bs = kB;
bs.init();
var FB = class FB extends t.GenericRecordList {
    static getItemType() {
        return bs
    }
};
e(FB, "RL_07d4f66324fea8299f2f66d1b9c5293b");
var UB = FB;
var VB = class VB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_info", "order_infoAttr", "p2p_order_info", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(VB, "ST_019dc1f94c4673ed88c9dc3f4cd5419bStructure");
var Rs = VB;
Rs.init();
var Hy = class Hy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoResponse", "p2POrderInfoResponseAttr", "P2POrderInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rs)
        }, !0, Rs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hy(new Hy.RecordClass({
            p2POrderInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fa0982e-2ffd-4315-2927-0d85cdcda612"
    }
};
e(Hy, "RC_9fa0982e2ffd431529270d85cdcda612");
var rc = Hy;
rc.init();
var NB = class NB extends t.GenericRecordList {
    static getItemType() {
        return rc
    }
};
e(NB, "RL_0801fe4c458fcd2bde490e69fb5c203d");
var _B = NB;
var MB = class MB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PlaceOfBirth", "placeOfBirthAttr", "PlaceOfBirth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(MB, "ST_0838c962fcebffa0995cc58090869a8eStructure");
var Ta = MB;
Ta.init();
var XB = class XB extends t.GenericRecordList {
    static getItemType() {
        return At
    }
};
e(XB, "RL_08493c76d04a33db201691368d61ec98");
var zB = XB;
var HB = class HB extends t.GenericRecordList {
    static getItemType() {
        return l
    }
};
e(HB, "RL_085f95fe6d8c0993316da931c0bd457a");
var WB = HB;
var YB = class YB extends t.GenericRecordList {
    static getItemType() {
        return h
    }
};
e(YB, "RL_08bffec12838f816de8f6be57340d56f");
var JB = YB;
var Jy = class Jy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Identity", "kYC_IdentityAttr", "KYC_Identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ge)
        }, !0, Ge)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jy(new Jy.RecordClass({
            kYC_IdentityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b654e7cd-3dd9-ac2b-1fbd-d9af9d59a56a"
    }
};
e(Jy, "RC_b654e7cd3dd9ac2b1fbdd9af9d59a56a");
var ac = Jy;
ac.init();
var KB = class KB extends t.GenericRecordList {
    static getItemType() {
        return ac
    }
};
e(KB, "RL_08d09f34c86e6f5622489301d79ff8a8");
var ZB = KB;
var QB = class QB extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(QB, "ST_4dc58b9edb8582c76248b762d6650913Structure");
var M = QB;
M.init();
var Yy = class Yy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req10", "echo_req10Attr", "Echo_req14", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yy(new Yy.RecordClass({
            echo_req10Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "832614e4-42cb-2846-7f1d-84472c884ebb"
    }
};
e(Yy, "RC_832614e442cb28467f1d84472c884ebb");
var sc = Yy;
sc.init();
var tE = class tE extends t.GenericRecordList {
    static getItemType() {
        return sc
    }
};
e(tE, "RL_08ec9fd9082ce97be1a7ef16873ad7f8");
var $B = tE;
var rE = class rE extends t.GenericRecordList {
    static getItemType() {
        return br
    }
};
e(rE, "RL_593060ea0fb9fd453ef904bd5780284a");
var eE = rE;
var Zy = class Zy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetWebsiteStatusResponse", "getWebsiteStatusResponseAttr", "GetWebsiteStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $a)
        }, !0, $a)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zy(new Zy.RecordClass({
            getWebsiteStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "09124448-3290-da76-33fe-64666de188c0"
    }
};
e(Zy, "RC_091244483290da7633fe64666de188c0");
var ic = Zy;
ic.init();
var aE = class aE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("New_password", "new_passwordAttr", "new_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Verification_code", "verification_codeAttr", "verification_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Reset_password", "reset_passwordAttr", "reset_password", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(aE, "ST_24b97ac8060a9349e09da2d88e1dea00Structure");
var ve = aE;
ve.init();
var sE = class sE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ve)
        }, !0, ve), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Reset_password", "reset_passwordAttr", "reset_password", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(sE, "ST_b8e1602bee02fb2422c9742384775a7bStructure");
var Is = sE;
Is.init();
var nE = class nE extends t.GenericRecordList {
    static getItemType() {
        return Is
    }
};
e(nE, "RL_098222569d614b59c720a7d15f2e16c6");
var iE = nE;
var Ky = class Ky extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NonParticipatingJurisdiction_LandingCompany", "nonParticipatingJurisdiction_LandingCompanyAttr", "Landing_company5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gt)
        }, !0, gt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ky(new Ky.RecordClass({
            nonParticipatingJurisdiction_LandingCompanyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8e2ccc4c-b2bb-c580-c7d8-c36277a3970f"
    }
};
e(Ky, "RC_8e2ccc4cb2bbc580c7d8c36277a3970f");
var nc = Ky;
nc.init();
var cE = class cE extends t.GenericRecordList {
    static getItemType() {
        return nc
    }
};
e(cE, "RL_09aadf2f3a6cc14ff58d7e91ed9aa591");
var oE = cE;
var Qy = class Qy extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsAllSubPlans", "cFDsAllSubPlansAttr", "CFDsAllSubPlans", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yt)
        }, !0, yt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qy(new Qy.RecordClass({
            cFDsAllSubPlansAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a3e2fd7-625c-ea89-2a02-f1f3f2b6a105"
    }
};
e(Qy, "RC_0a3e2fd7625cea892a02f1f3f2b6a105");
var oc = Qy;
oc.init();
var uE = class uE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Subtype", "subtypeAttr", "subtype", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Ts", "tsAttr", "ts", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Bot_id", "bot_idAttr", "bot_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("User", "userAttr", "user", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Bot_link", "bot_linkAttr", "bot_link", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uE, "ST_3782d35f5f28ff9dd18fb6881ab471a9Structure");
var Q = uE;
Q.init();
var lE = class lE extends t.GenericRecordList {
    static getItemType() {
        return Q
    }
};
e(lE, "RL_7674e0699bf7786228f1b11887afe770");
var pE = lE;
var mE = class mE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Shape", "shapeAttr", "Shape", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mE, "EN_d11562be18a7e40ca777aa336c946163EntityRecord");
var hs = mE;
hs.init();
var $y = class $y extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Shape", "shapeAttr", "Shape", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new hs)
        }, !0, hs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $y(new $y.RecordClass({
            shapeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a89eeb6-0fa1-f44b-6316-ca69b462007b"
    }
};
e($y, "RC_0a89eeb60fa1f44b6316ca69b462007b");
var cc = $y;
cc.init();
var td = class td extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new td(new td.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(td, "ST_aaf5fb010d4587166eb3dd80473d736dStructure");
var As = td;
As.init();
var ed = class ed extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoRequest", "p2PAdvertInfoRequestAttr", "P2PAdvertInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new As)
        }, !0, As)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ed(new ed.RecordClass({
            p2PAdvertInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0a9739b2-dd1c-62d5-697e-ad34293597d7"
    }
};
e(ed, "RC_0a9739b2dd1c62d5697ead34293597d7");
var uc = ed;
uc.init();
var fE = class fE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_channel", "is_channelAttr", "is_channel", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Created", "createdAttr", "created", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_archived", "is_archivedAttr", "is_archived", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Is_general", "is_generalAttr", "is_general", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Unlinked", "unlinkedAttr", "unlinked", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Creator", "creatorAttr", "creator", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name_normalized", "name_normalizedAttr", "name_normalized", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_shared", "is_sharedAttr", "is_shared", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Is_org_shared", "is_org_sharedAttr", "is_org_shared", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Is_member", "is_memberAttr", "is_member", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Is_private", "is_privateAttr", "is_private", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Is_mpim", "is_mpimAttr", "is_mpim", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Last_read", "last_readAttr", "last_read", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Latest", "latestAttr", "latest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Q)
        }, !0, Q), this.attr("Unread_count", "unread_countAttr", "unread_count", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Unread_count_display", "unread_count_displayAttr", "unread_count_display", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Members", "membersAttr", "members", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Topic", "topicAttr", "topic", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K), this.attr("Purpose", "purposeAttr", "purpose", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fE, "ST_a7c2d4fb0a81e8416c70379886c39274Structure");
var qe = fE;
qe.init();
var DE = class DE extends t.GenericRecordList {
    static getItemType() {
        return qe
    }
};
e(DE, "RL_0aa9e930032976c41db5078db1705487");
var TE = DE;
var rd = class rd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_all_company", "dxtrade_all_companyAttr", "Dxtrade_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xe)
        }, !0, xe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rd(new rd.RecordClass({
            dxtrade_all_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0af1f162-a4f1-17f1-f3e8-ae4dce5af0db"
    }
};
e(rd, "RC_0af1f162a4f117f1f3e8ae4dce5af0db");
var pc = rd;
pc.init();
var ad = class ad extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Token", "tokenAttr", "token", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ad(new ad.RecordClass({
            tokenAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ad, "ST_32ba270e49d07771f91f1f34d388e228Structure");
var je = ad;
je.init();
var yE = class yE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AppId", "appIdAttr", "app_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Expiry_time", "expiry_timeAttr", "expiry_time", !1, !1, t.DataTypes.Time, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("Token", "tokenAttr", "token", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yE, "ST_ee0fad031c8fb70025ad4f6b3dc33f10Structure");
var ke = yE;
ke.init();
var dE = class dE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Onfido", "onfidoAttr", "onfido", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new je)
        }, !0, je), this.attr("SendBird", "sendBirdAttr", "sendbird", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ke)
        }, !0, ke)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dE, "ST_35b06be36f4ceab0d926d48d7ff02f22Structure");
var Ue = dE;
Ue.init();
var sd = class sd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceToken", "serviceTokenAttr", "ServiceToken", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ue)
        }, !0, Ue)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sd(new sd.RecordClass({
            serviceTokenAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0b060544-2077-afaf-f405-34ee187e6408"
    }
};
e(sd, "RC_0b0605442077afaff40534ee187e6408");
var lc = sd;
lc.init();
var id = class id extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_login_list", "mt5_login_listAttr", "mt5_login_list", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new id(new id.RecordClass({
            mt5_login_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(id, "ST_1e4e8e93f82bd7d0c82446a55ed8dee2Structure");
var Fe = id;
Fe.init();
var nd = class nd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req5", "echo_req5Attr", "Echo_req9", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fe)
        }, !0, Fe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nd(new nd.RecordClass({
            echo_req5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "177ce791-066f-e3e5-2ef3-d9c99be27198"
    }
};
e(nd, "RC_177ce791066fe3e52ef3d9c99be27198");
var mc = nd;
mc.init();
var OE = class OE extends t.GenericRecordList {
    static getItemType() {
        return mc
    }
};
e(OE, "RL_0b481988946c6f5bbb65b67a84007644");
var SE = OE;
var gE = class gE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ImageName", "imageNameAttr", "ImageName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SpeakerRoleId", "speakerRoleIdAttr", "SpeakerRoleId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gE, "EN_7710952ed757fea535b17cc3f62e943cEntityRecord");
var Ve = gE;
Ve.init();
var xE = class xE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Role", "roleAttr", "Role", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xE, "EN_1ed9d30a04c6983dfd25cb2bf738a03bEntityRecord");
var _e = xE;
_e.init();
var bE = class bE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("EventId", "eventIdAttr", "EventId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("EventSpeakerId", "eventSpeakerIdAttr", "EventSpeakerId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(bE, "EN_5fe01be53a95c3d6f80a6694bc22455aEntityRecord");
var Ne = bE;
Ne.init();
var RE = class RE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventSpeakers", "eventSpeakersAttr", "EventSpeakers", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ve)
        }, !0, Ve), this.attr("SpeakerRole", "speakerRoleAttr", "SpeakerRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _e)
        }, !0, _e), this.attr("EventSpeakerMapping", "eventSpeakerMappingAttr", "EventSpeakerMapping", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ne)
        }, !0, Ne)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0ba7e979-e12f-a40c-2f55-55de45482f78"
    }
};
e(RE, "RC_0ba7e979e12fa40c2f5555de45482f78");
var fc = RE;
fc.init();
var od = class od extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SendbirdService", "sendbirdServiceAttr", "SendbirdService", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ke)
        }, !0, ke)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new od(new od.RecordClass({
            sendbirdServiceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d44f16e3-0a06-0986-4b9b-1cd234f36b0d"
    }
};
e(od, "RC_d44f16e30a0609864b9b1cd234f36b0d");
var Tc = od;
Tc.init();
var hE = class hE extends t.GenericRecordList {
    static getItemType() {
        return Tc
    }
};
e(hE, "RL_0bdff19b177f7c68e65187599418c3f6");
var IE = hE;
var AE = class AE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PlaceOfBirth", "placeOfBirthAttr", "PlaceOfBirth", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(AE, "ST_0bf22241d1cbe538c3a6a5d88308ad6cStructure");
var Da = AE;
Da.init();
var cd = class cd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetLandingCompanyRequest", "getLandingCompanyRequestAttr", "GetLandingCompanyRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ye)
        }, !0, ye)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cd(new cd.RecordClass({
            getLandingCompanyRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe47240-f7e3-e380-42a8-c23b7b2b02e0"
    }
};
e(cd, "RC_fbe47240f7e3e38042a8c23b7b2b02e0");
var Dc = cd;
Dc.init();
var wE = class wE extends t.GenericRecordList {
    static getItemType() {
        return Dc
    }
};
e(wE, "RL_0c13bf82c0e754513401b974c717dc2b");
var GE = wE;
var ud = class ud extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nt)
        }, !0, nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ud(new ud.RecordClass({
            initial_deposit_per_countryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0c21bac0-f0d5-95b4-25f0-72410353d305"
    }
};
e(ud, "RC_0c21bac0f0d595b425f072410353d305");
var yc = ud;
yc.init();
var PE = class PE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("account_opening_reason", "account_opening_reasonAttr", "account_opening_reason", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("address_city", "address_cityAttr", "address_city", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("address_line_1", "address_line_1Attr", "address_line_1", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("address_line_2", "address_line_2Attr", "address_line_2", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("address_postcode", "address_postcodeAttr", "address_postcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("address_state", "address_stateAttr", "address_state", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("citizen", "citizenAttr", "citizen", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("date_of_birth", "date_of_birthAttr", "date_of_birth", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("employment_status", "employment_statusAttr", "employment_status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("first_name", "first_nameAttr", "first_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("last_name", "last_nameAttr", "last_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("phone", "phoneAttr", "phone", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("place_of_birth", "place_of_birthAttr", "place_of_birth", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("preferred_language", "preferred_languageAttr", "preferred_language", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("residence", "residenceAttr", "residence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("salutation", "salutationAttr", "salutation", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("tax_identification_number", "tax_identification_numberAttr", "tax_identification_number", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("tax_residence", "tax_residenceAttr", "tax_residence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PE, "ST_0f5a50b395c52c47c6da386a52aa5b06Structure");
var Gs = PE;
Gs.init();
var EE = class EE extends t.GenericRecordList {
    static getItemType() {
        return Gs
    }
};
e(EE, "RL_0c323972ef75bc243979fff356a6bb1c");
var BE = EE;
var pd = class pd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Crypto", "cryptoAttr", "Crypto", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new f)
        }, !0, f)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pd(new pd.RecordClass({
            cryptoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0c55dfa0-5375-7f7d-d55c-c397f37755a2"
    }
};
e(pd, "RC_0c55dfa053757f7dd55cc397f37755a2");
var dc = pd;
dc.init();
var LE = class LE extends t.GenericRecordList {
    static getItemType() {
        return fe
    }
};
e(LE, "RL_0c71b2fc045fad5c4e0f7f80c50bd453");
var CE = LE;
var vE = class vE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Attribute1", "attribute1Attr", "Attribute1", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vE, "EN_4c707c7ccff133f1198a8b9c73decb83EntityRecord");
var ya = vE;
ya.init();
var ld = class ld extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OptionsTable", "optionsTableAttr", "OptionsTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ya)
        }, !0, ya)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ld(new ld.RecordClass({
            optionsTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a2e2001-e60d-fd22-9175-d10cb383dd20"
    }
};
e(ld, "RC_7a2e2001e60dfd229175d10cb383dd20");
var Sc = ld;
Sc.init();
var jE = class jE extends t.GenericRecordList {
    static getItemType() {
        return Sc
    }
};
e(jE, "RL_0d03906c34728350f0cfb0c371fcaf7c");
var qE = jE;
var md = class md extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_status", "trading_platform_statusAttr", "trading_platform_status", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new md(new md.RecordClass({
            trading_platform_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(md, "ST_26b581032ad004235c0d5c566e39b1dcStructure");
var Me = md;
Me.init();
var fd = class fd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req2", "echo_req2Attr", "Echo_req6", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Me)
        }, !0, Me)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fd(new fd.RecordClass({
            echo_req2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0d71b623-ce5a-409a-df80-e6d9d4a7031e"
    }
};
e(fd, "RC_0d71b623ce5a409adf80e6d9d4a7031e");
var Oc = fd;
Oc.init();
var Td = class Td extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Steps", "stepsAttr", "Steps", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Td(new Td.RecordClass({
            stepsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Td, "EN_7441573ccf264d27ef548a39a846bd68EntityRecord");
var ws = Td;
ws.init();
var Dd = class Dd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Steps", "stepsAttr", "Steps", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ws)
        }, !0, ws)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dd(new Dd.RecordClass({
            stepsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0d776a4e-191f-af32-1030-d5ce57aa4167"
    }
};
e(Dd, "RC_0d776a4e191faf321030d5ce57aa4167");
var gc = Dd;
gc.init();
var yd = class yd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website", "websiteAttr", "Website", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yd(new yd.RecordClass({
            websiteAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(yd, "ST_e96a6519d80d7a16349a873d1506dd8bStructure");
var da = yd;
da.init();
var dd = class dd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IndividualDetailsValidFields", "individualDetailsValidFieldsAttr", "IndividualDetailsValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new da)
        }, !0, da)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dd(new dd.RecordClass({
            individualDetailsValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0d950ec4-890d-ba92-0b66-3c356d622fbe"
    }
};
e(dd, "RC_0d950ec4890dba920b663c356d622fbe");
var xc = dd;
xc.init();
var kE = class kE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentFormat", "documentFormatAttr", "document_format", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentID", "documentIDAttr", "document_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentType", "documentTypeAttr", "document_type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ExpectedChecksum", "expectedChecksumAttr", "expected_checksum", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ExpirationDate", "expirationDateAttr", "expiration_date", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("FileSize", "fileSizeAttr", "file_size", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("LifetimeValid", "lifetimeValidAttr", "lifetime_valid", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("DocumentIssuingCountry", "documentIssuingCountryAttr", "document_issuing_country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("PageType", "pageTypeAttr", "page_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("FileName", "fileNameAttr", "file_name", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(kE, "ST_5b50423d811eb7c792dd37d3d80886a3Structure");
var Ps = kE;
Ps.init();
var Sd = class Sd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadRequest", "documentUploadRequestAttr", "DocumentUploadRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ps)
        }, !0, Ps)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sd(new Sd.RecordClass({
            documentUploadRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "20eb62e8-6c4b-f568-3a13-4577868b24d1"
    }
};
e(Sd, "RC_20eb62e86c4bf5683a134577868b24d1");
var bc = Sd;
bc.init();
var FE = class FE extends t.GenericRecordList {
    static getItemType() {
        return bc
    }
};
e(FE, "RL_0db7fd9e745d38c354f97f0b888be6d8");
var UE = FE;
var Od = class Od extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "Echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ut)
        }, !0, ut)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Od(new Od.RecordClass({
            echo_reqAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0de0b53e-c81c-56a7-6116-944828ba7a89"
    }
};
e(Od, "RC_0de0b53ec81c56a76116944828ba7a89");
var Rc = Od;
Rc.init();
var gd = class gd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Password", "passwordAttr", "Password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gd(new gd.RecordClass({
            passwordAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(gd, "ST_e76ad42f067f0e001aaa1c3ada36905eStructure");
var Sa = gd;
Sa.init();
var xd = class xd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CreatePassword", "createPasswordAttr", "CreatePassword", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sa)
        }, !0, Sa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xd(new xd.RecordClass({
            createPasswordAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0defd940-676d-2025-2479-bde82e078cfd"
    }
};
e(xd, "RC_0defd940676d20252479bde82e078cfd");
var Ic = xd;
Ic.init();
var VE = class VE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Available_count", "available_countAttr", "available_count", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "instruments", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Jurisdiction", "jurisdictionAttr", "jurisdiction", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Licence_number", "licence_numberAttr", "licence_number", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Linkable_landing_companies", "linkable_landing_companiesAttr", "linkable_landing_companies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Max_count", "max_countAttr", "max_count", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product", "productAttr", "product", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product_details", "product_detailsAttr", "product_details", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V), this.attr("Regulatory_authority", "regulatory_authorityAttr", "regulatory_authority", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Requirements", "requirementsAttr", "requirements", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S), this.attr("Shortcode", "shortcodeAttr", "shortcode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(VE, "ST_ae15e885fd6defd7e40491664a35bff0Structure");
var Pr = VE;
Pr.init();
var bd = class bd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemCtrader", "trading_platform_available_accountItemCtraderAttr", "Trading_platform_available_accountItemCtrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pr)
        }, !0, Pr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bd(new bd.RecordClass({
            trading_platform_available_accountItemCtraderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bc4d289-68c6-b7a4-6635-811add966ded"
    }
};
e(bd, "RC_6bc4d28968c6b7a46635811add966ded");
var hc = bd;
hc.init();
var NE = class NE extends t.GenericRecordList {
    static getItemType() {
        return hc
    }
};
e(NE, "RL_0e22e79825d574ddeb21017d3fee72f5");
var _E = NE;
var ME = class ME extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Contact_info", "contact_infoAttr", "contact_info", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Default_advert_description", "default_advert_descriptionAttr", "default_advert_description", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_listed", "is_listedAttr", "is_listed", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Payment_info", "payment_infoAttr", "payment_info", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ME, "ST_1402e2338dff154debadf7b72803a581Structure");
var Bs = ME;
Bs.init();
var Rd = class Rd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateRequest", "p2PAdvertiserUpdateRequestAttr", "P2PAdvertiserUpdateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bs)
        }, !0, Bs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rd(new Rd.RecordClass({
            p2PAdvertiserUpdateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0e4c0f67-b048-5239-6e81-eab6b78286b5"
    }
};
e(Rd, "RC_0e4c0f67b04852396e81eab6b78286b5");
var Ac = Rd;
Ac.init();
var Id = class Id extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Nik", "nikAttr", "Nik", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new u)
        }, !0, u)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Id(new Id.RecordClass({
            nikAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5a174d68-7425-3917-600b-578d844943be"
    }
};
e(Id, "RC_5a174d6874253917600b578d844943be");
var Gc = Id;
Gc.init();
var XE = class XE extends t.GenericRecordList {
    static getItemType() {
        return Gc
    }
};
e(XE, "RL_0ebbc09ab880f9576c75a250e0dd80b4");
var zE = XE;
var hd = class hd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new et)
        }, !0, et)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hd(new hd.RecordClass({
            api_call_limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "812368e6-b4b8-b30f-e730-945bc2820fd5"
    }
};
e(hd, "RC_812368e6b4b8b30fe730945bc2820fd5");
var wc = hd;
wc.init();
var HE = class HE extends t.GenericRecordList {
    static getItemType() {
        return wc
    }
};
e(HE, "RL_0ed99306a92665c51c1f5a5e119abde1");
var WE = HE;
var JE = class JE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_list", "advertiser_listAttr", "p2p_advertiser_list", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(JE, "ST_1eaff43aca523f2e537db1085abb9969Structure");
var Es = JE;
Es.init();
var Ad = class Ad extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserListResponse", "p2PAdvertiserListResponseAttr", "P2PAdvertiserListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Es)
        }, !0, Es)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ad(new Ad.RecordClass({
            p2PAdvertiserListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "0eea76ca-7a3d-c279-121f-6b469bc38e1e"
    }
};
e(Ad, "RC_0eea76ca7a3dc279121f6b469bc38e1e");
var Pc = Ad;
Pc.init();
var YE = class YE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Purpose", "purposeAttr", "Purpose", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(YE, "EN_bf18792ec035d6d895366ebc072e8ae8EntityRecord");
var Oa = YE;
Oa.init();
var KE = class KE extends t.GenericRecordList {
    static getItemType() {
        return Oa
    }
};
e(KE, "RL_0f5f4980f6214237abc9bbc8ae0a43be");
var ZE = KE;
var QE = class QE extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Asset", "assetAttr", "Asset", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CFDsAllSubPlanId", "cFDsAllSubPlanIdAttr", "CFDsAllSubPlanId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("CFDsAllPlansId", "cFDsAllPlansIdAttr", "CFDsAllPlansId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(QE, "EN_0f6fdd9309a44b721498902bfa87efe5EntityRecord");
var Ot = QE;
Ot.init();
var $E = class $E extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advert_create", "advert_createAttr", "p2p_advert_create", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pe)
        }, !0, pe), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($E, "ST_0879f01858a2bc3ad7b4670abe9d0a7cStructure");
var Cs = $E;
Cs.init();
var eC = class eC extends t.GenericRecordList {
    static getItemType() {
        return Cs
    }
};
e(eC, "RL_0f70af24101cfcf6a86201a88d67a596");
var tC = eC;
var Gd = class Gd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gd(new Gd.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Gd, "ST_0eb66cf97c1ee09af4d8de7b5c075da8Structure");
var ze = Gd;
ze.init();
var rC = class rC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_create", "order_createAttr", "p2p_order_create", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ze)
        }, !0, ze), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(rC, "ST_7db1e9bcd0fe59811889d8b408745096Structure");
var Ls = rC;
Ls.init();
var sC = class sC extends t.GenericRecordList {
    static getItemType() {
        return Ls
    }
};
e(sC, "RL_0fd675088573602f70fccecb4a8edbc5");
var aC = sC;
var wd = class wd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_accounts", "partner_accountsAttr", "partner_accounts", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wd(new wd.RecordClass({
            partner_accountsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(wd, "ST_e8ac58634398be26e7956f8525fa40c1Structure");
var Xe = wd;
Xe.init();
var Pd = class Pd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req13", "echo_req13Attr", "Echo_req17", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xe)
        }, !0, Xe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pd(new Pd.RecordClass({
            echo_req13Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "644701ec-7e0c-c471-c137-db9f55944f2f"
    }
};
e(Pd, "RC_644701ec7e0cc471c137db9f55944f2f");
var Bc = Pd;
Bc.init();
var nC = class nC extends t.GenericRecordList {
    static getItemType() {
        return Bc
    }
};
e(nC, "RL_10077f623e910c5c644432e024b51bb7");
var iC = nC;
var Bd = class Bd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_id", "national_idAttr", "National_id", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bd(new Bd.RecordClass({
            national_idAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1024838f-82dd-b82d-a0b6-8c4f564c9503"
    }
};
e(Bd, "RC_1024838f82ddb82da0b68c4f564c9503");
var Ec = Bd;
Ec.init();
var oC = class oC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(oC, "ST_e17c093645b6df840d3423fc6893e70fStructure");
var vs = oC;
vs.init();
var Ed = class Ed extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Error", "errorAttr", "Error2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vs)
        }, !0, vs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ed(new Ed.RecordClass({
            errorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "10cf50ec-45fc-7281-6b85-b8f216ccf5f5"
    }
};
e(Ed, "RC_10cf50ec45fc72816b85b8f216ccf5f5");
var Cc = Ed;
Cc.init();
var uC = class uC extends t.GenericRecordList {
    static getItemType() {
        return vo
    }
};
e(uC, "RL_10f2dc321384405a2c0e9f4711d0d4de");
var cC = uC;
var Cd = class Cd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventTypesFilter", "eventTypesFilterAttr", "EventTypesFilter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new St)
        }, !0, St)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cd(new Cd.RecordClass({
            eventTypesFilterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "16f9ef85-8da7-463a-fc60-91e5c8eb9877"
    }
};
e(Cd, "RC_16f9ef858da7463afc6091e5c8eb9877");
var Lc = Cd;
Lc.init();
var lC = class lC extends t.GenericRecordList {
    static getItemType() {
        return Lc
    }
};
e(lC, "RL_116003d3973f96b15ad0bf4d292ac624");
var pC = lC;
var fC = class fC extends t.GenericRecordList {
    static getItemType() {
        return Jr
    }
};
e(fC, "RL_116fa19c58f8a0bcf7251972f3b488c2");
var mC = fC;
var TC = class TC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Status", "statusAttr", "Status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TC, "EN_39603b0ef897e1de470e9d95a95e49f8EntityRecord");
var ga = TC;
ga.init();
var Ld = class Ld extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentStatus", "employmentStatusAttr", "EmploymentStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ga)
        }, !0, ga)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ld(new Ld.RecordClass({
            employmentStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4535b2a6-8fa0-4382-d886-8d60004b6438"
    }
};
e(Ld, "RC_4535b2a68fa04382d8868d60004b6438");
var vc = Ld;
vc.init();
var yC = class yC extends t.GenericRecordList {
    static getItemType() {
        return vc
    }
};
e(yC, "RL_117c7b7da327962152f7a4113c25ca3f");
var DC = yC;
var dC = class dC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Ok", "okAttr", "ok", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Channel", "channelAttr", "channel", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qe)
        }, !0, qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dC, "ST_a01186a03a6c4b831d48748ff6ff136bStructure");
var qs = dC;
qs.init();
var vd = class vd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetChannelInfoResponse", "getChannelInfoResponseAttr", "GetChannelInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qs)
        }, !0, qs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vd(new vd.RecordClass({
            getChannelInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3b64ee7-6991-773d-7381-701280e3c6d4"
    }
};
e(vd, "RC_e3b64ee76991773d7381701280e3c6d4");
var qc = vd;
qc.init();
var OC = class OC extends t.GenericRecordList {
    static getItemType() {
        return qc
    }
};
e(OC, "RL_11d5fc250d09046167baedb6f3c2fb4b");
var SC = OC;
var gC = class gC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_payment_methods", "advertiser_payment_methodsAttr", "p2p_advertiser_payment_methods", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gC, "ST_741b22262e1abaa71c2c6102c32e5868Structure");
var js = gC;
js.init();
var bC = class bC extends t.GenericRecordList {
    static getItemType() {
        return js
    }
};
e(bC, "RL_11d6eb7e137d31b8bce20a34fef0d788");
var xC = bC;
var IC = class IC extends t.GenericRecordList {
    static getItemType() {
        return Ft
    }
};
e(IC, "RL_126434276122aa915715df7da7c75609");
var RC = IC;
var qd = class qd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_index", "asset_indexAttr", "asset_index", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qd(new qd.RecordClass({
            asset_indexAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(qd, "ST_812466b8d5a9a4a768bb1404c7c0b0e5Structure");
var We = qd;
We.init();
var jd = class jd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req6", "echo_req6Attr", "Echo_req10", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new We)
        }, !0, We)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jd(new jd.RecordClass({
            echo_req6Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "127d33c3-734e-3f0c-ecd5-3087584e156c"
    }
};
e(jd, "RC_127d33c3734e3f0cecd53087584e156c");
var jc = jd;
jc.init();
var hC = class hC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Group", "groupAttr", "group", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Location", "locationAttr", "location", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Region", "regionAttr", "region", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sequence", "sequenceAttr", "sequence", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hC, "ST_13505e54da5ba49238f8f2a40834f63fStructure");
var He = hC;
He.init();
var GC = class GC extends t.GenericRecordList {
    static getItemType() {
        return He
    }
};
e(GC, "RL_12d1ba6d0f7dc76efbcc2fac29abf585");
var AC = GC;
var kd = class kd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AUD", "aUDAttr", "AUD", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new p)
        }, !0, p)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kd(new kd.RecordClass({
            aUDAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "334ec8eb-11cb-b1f9-00eb-82a622de6be5"
    }
};
e(kd, "RC_334ec8eb11cbb1f900eb82a622de6be5");
var kc = kd;
kc.init();
var PC = class PC extends t.GenericRecordList {
    static getItemType() {
        return kc
    }
};
e(PC, "RL_130306c98b85aa803514000e3331edb0");
var wC = PC;
var Ud = class Ud extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config2", "currency_config2Attr", "Currency_config2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Re)
        }, !0, Re)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ud(new Ud.RecordClass({
            currency_config2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "131ec4af-e292-e506-94c2-940b1e3c9a73"
    }
};
e(Ud, "RC_131ec4afe292e50694c2940b1e3c9a73");
var Uc = Ud;
Uc.init();
var Fd = class Fd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents", "documentsAttr", "documents", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fd(new Fd.RecordClass({
            documentsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Fd, "ST_a3bb07924a89f370c871b3cb12d77f65Structure");
var Je = Fd;
Je.init();
var BC = class BC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Category", "categoryAttr", "category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Event", "eventAttr", "event", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Args", "argsAttr", "args", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Je)
        }, !0, Je)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(BC, "ST_776bbd191df189ae2b5f20c613dc695aStructure");
var ks = BC;
ks.init();
var CC = class CC extends t.GenericRecordList {
    static getItemType() {
        return ks
    }
};
e(CC, "RL_1333403c8473cebcdce283d3f038a58c");
var EC = CC;
var Vd = class Vd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading", "tradingAttr", "Trading", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Le)
        }, !0, Le)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vd(new Vd.RecordClass({
            tradingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d54336ec-6049-dff9-c99f-14fd62e782c4"
    }
};
e(Vd, "RC_d54336ec6049dff9c99f14fd62e782c4");
var Fc = Vd;
Fc.init();
var vC = class vC extends t.GenericRecordList {
    static getItemType() {
        return Fc
    }
};
e(vC, "RL_13576b5dee00a62e9c40a0c658db0a38");
var LC = vC;
var qC = class qC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("TooManyFailedLoginAttempts", "tooManyFailedLoginAttemptsAttr", "TooManyFailedLoginAttempts", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qC, "UserLoginFailureReasonRec");
var Ye = qC;
Ye.init();
var jC = class jC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RetryAfterSeconds", "retryAfterSecondsAttr", "RetryAfterSeconds", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UserId", "userIdAttr", "UserId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ye)
        }, !0, Ye)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jC, "UserLoginResultRec");
var Us = jC;
Us.init();
var _d = class _d extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginResult", "userLoginResultAttr", "UserLoginResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Us)
        }, !0, Us)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _d(new _d.RecordClass({
            userLoginResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f9a589fe-5b81-c3bd-a7db-0e574d5d11fb"
    }
};
e(_d, "RC_f9a589fe5b81c3bda7db0e574d5d11fb");
var Vc = _d;
Vc.init();
var UC = class UC extends t.GenericRecordList {
    static getItemType() {
        return Vc
    }
};
e(UC, "RL_137c1fde2390fc7845ae92a0265be990");
var kC = UC;
var Nd = class Nd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AnimationType", "animationTypeAttr", "AnimationType", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nd(new Nd.RecordClass({
            animationTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Nd, "EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord");
var Fs = Nd;
Fs.init();
var Md = class Md extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AnimationType", "animationTypeAttr", "AnimationType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fs)
        }, !0, Fs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Md(new Md.RecordClass({
            animationTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78b6d6ed-7d52-800a-8a68-e7d796ec6850"
    }
};
e(Md, "RC_78b6d6ed7d52800a8a68e7d796ec6850");
var _c = Md;
_c.init();
var VC = class VC extends t.GenericRecordList {
    static getItemType() {
        return _c
    }
};
e(VC, "RL_13dce2cada552f2b003eedebc4cfbf64");
var FC = VC;
var NC = class NC extends t.GenericRecordList {
    static getItemType() {
        return bt
    }
};
e(NC, "RL_13f4e7ea22b9e316259c119567103cf9");
var _C = NC;
var zC = class zC extends t.GenericRecordList {
    static getItemType() {
        return xe
    }
};
e(zC, "RL_143abbfebca3c373ef0923e4c8b26336");
var MC = zC;
var WC = class WC extends t.GenericRecordList {
    static getItemType() {
        return da
    }
};
e(WC, "RL_1477b6453f1d6faf38a9b8d4e0f74102");
var XC = WC;
var zd = class zd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SpeakerRole", "speakerRoleAttr", "SpeakerRole", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _e)
        }, !0, _e)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zd(new zd.RecordClass({
            speakerRoleAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "14a68168-b2c4-8c18-1cb8-4b21b0fa2a9e"
    }
};
e(zd, "RC_14a68168b2c48c181cb84b21b0fa2a9e");
var Nc = zd;
Nc.init();
var JC = class JC extends t.GenericRecordList {
    static getItemType() {
        return wt
    }
};
e(JC, "RL_14c5bb80b83da1321f2059f42deabf95");
var HC = JC;
var YC = class YC extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Email, function() {
            return ""
        }, !0), this.attr("PhotoURL", "photoURLAttr", "PhotoURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(YC, "UserInfoRec");
var Vs = YC;
Vs.init();
var Xd = class Xd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserInfo", "userInfoAttr", "UserInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vs)
        }, !0, Vs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xd(new Xd.RecordClass({
            userInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "79f003ba-a030-e546-826e-d42c3962f582"
    }
};
e(Xd, "RC_79f003baa030e546826ed42c3962f582");
var Mc = Xd;
Mc.init();
var KC = class KC extends t.GenericRecordList {
    static getItemType() {
        return Mc
    }
};
e(KC, "RL_1503951706c05a1675ae923dc239c757");
var ZC = KC;
var $C = class $C extends t.GenericRecordList {
    static getItemType() {
        return os
    }
};
e($C, "RL_157fced35d515bf7b615f06f3ed59864");
var QC = $C;
var tL = class tL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "Type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(tL, "EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord");
var _s = tL;
_s.init();
var Wd = class Wd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _s)
        }, !0, _s)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wd(new Wd.RecordClass({
            deviceResponsiveAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1583be5d-90a9-4b6a-7317-0ffa868eecc5"
    }
};
e(Wd, "RC_1583be5d90a94b6a73170ffa868eecc5");
var zc = Wd;
zc.init();
var Hd = class Hd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Orientation", "orientationAttr", "Orientation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new us)
        }, !0, us)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hd(new Hd.RecordClass({
            orientationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6"
    }
};
e(Hd, "RC_3ba1d238c8e0f0c3e875fb37f0381cc6");
var Xc = Hd;
Xc.init();
var rL = class rL extends t.GenericRecordList {
    static getItemType() {
        return Xc
    }
};
e(rL, "RL_1608d9419ce68c1bc879636bc5f915cc");
var eL = rL;
var sL = class sL extends t.GenericRecordList {
    static getItemType() {
        return Hr
    }
};
e(sL, "RL_160b38a7b435bdb88031e1c5a1aa1773");
var aL = sL;
var nL = class nL extends t.GenericRecordList {
    static getItemType() {
        return w
    }
};
e(nL, "RL_161ac57da3ec97a38ca59158439bfb6c");
var iL = nL;
var cL = class cL extends t.GenericRecordList {
    static getItemType() {
        return re
    }
};
e(cL, "RL_1659ef22005bb5893eb1c95011619009");
var oL = cL;
var uL = class uL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_create", "advertiser_createAttr", "p2p_advertiser_create", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uL, "ST_ae6a01bb8adb6c18fb3b2d01ca300b15Structure");
var Ns = uL;
Ns.init();
var Jd = class Jd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateResponse", "p2PAdvertiserCreateResponseAttr", "P2PAdvertiserCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ns)
        }, !0, Ns)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jd(new Jd.RecordClass({
            p2PAdvertiserCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "169ba1f5-7e05-3870-b84c-de6379a8d367"
    }
};
e(Jd, "RC_169ba1f57e053870b84cde6379a8d367");
var Wc = Jd;
Wc.init();
var Yd = class Yd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform_url", "platform_urlAttr", "Platform_url", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pe)
        }, !0, Pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yd(new Yd.RecordClass({
            platform_urlAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31f62058-9c23-b6cb-76ee-cd5ffbdcff89"
    }
};
e(Yd, "RC_31f620589c23b6cb76eecd5ffbdcff89");
var Hc = Yd;
Hc.init();
var lL = class lL extends t.GenericRecordList {
    static getItemType() {
        return Hc
    }
};
e(lL, "RL_170db2205fb819d098837fbce8de05cd");
var pL = lL;
var Zd = class Zd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zd(new Zd.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Zd, "ST_a138c9d86955bf2ced1c92c23da39091Structure");
var Ms = Zd;
Ms.init();
var Kd = class Kd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderInfoRequest", "p2POrderInfoRequestAttr", "P2POrderInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ms)
        }, !0, Ms)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kd(new Kd.RecordClass({
            p2POrderInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "172b8dd4-a9be-ebc4-b3ea-80a0def2b2fe"
    }
};
e(Kd, "RC_172b8dd4a9beebc4b3ea80a0def2b2fe");
var Jc = Kd;
Jc.init();
var Qd = class Qd extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Limit", "limitAttr", "limit", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qd(new Qd.RecordClass({
            limitAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Qd, "ST_609b8b40acc9750c8c3a2d077df910daStructure");
var zs = Qd;
zs.init();
var $d = class $d extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryRequest", "loginHistoryRequestAttr", "LoginHistoryRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zs)
        }, !0, zs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $d(new $d.RecordClass({
            loginHistoryRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b9ce541-263d-e6cf-9008-8eb6665236ea"
    }
};
e($d, "RC_2b9ce541263de6cf90088eb6665236ea");
var Yc = $d;
Yc.init();
var fL = class fL extends t.GenericRecordList {
    static getItemType() {
        return Yc
    }
};
e(fL, "RL_17364cfe47b7832a9885e85b408e32b2");
var mL = fL;
var TL = class TL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CallType", "callTypeAttr", "call_type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Checksum", "checksumAttr", "checksum", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentIssuingCountry", "documentIssuingCountryAttr", "document_issuing_country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Size", "sizeAttr", "size", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UploadID", "uploadIDAttr", "upload_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TL, "ST_1a4c65dfed800432ab999fe827c4d5cfStructure");
var Ze = TL;
Ze.init();
var tS = class tS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUpload", "documentUploadAttr", "document_upload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ze)
        }, !0, Ze)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tS(new tS.RecordClass({
            documentUploadAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(tS, "ST_8298e25b4ee60f76d22250711b4bff2eStructure");
var Xs = tS;
Xs.init();
var yL = class yL extends t.GenericRecordList {
    static getItemType() {
        return Xs
    }
};
e(yL, "RL_17c1c88f1431ca6ce7bfc6ae6eb41ed4");
var DL = yL;
var dL = class dL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dL, "EN_1876f437d76222f2a9bb4f9f307d57c6EntityRecord");
var xa = dL;
xa.init();
var OL = class OL extends t.GenericRecordList {
    static getItemType() {
        return ge
    }
};
e(OL, "RL_18994bd1cd31a465f2635a0d68fa478a");
var SL = OL;
var gL = class gL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_info", "advertiser_infoAttr", "p2p_advertiser_info", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gL, "ST_254a95af2bb66abb401551d01686c0a6Structure");
var Ws = gL;
Ws.init();
var eS = class eS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoResponse", "p2PAdvertiserInfoResponseAttr", "P2PAdvertiserInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ws)
        }, !0, Ws)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eS(new eS.RecordClass({
            p2PAdvertiserInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfbe7737-63c5-31fd-0720-12a9fe708316"
    }
};
e(eS, "RC_dfbe773763c531fd072012a9fe708316");
var Zc = eS;
Zc.init();
var bL = class bL extends t.GenericRecordList {
    static getItemType() {
        return Zc
    }
};
e(bL, "RL_18a059102e367451eb780e1388f118f5");
var xL = bL;
var rS = class rS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Product_detail", "product_detailAttr", "Product_detail", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new V)
        }, !0, V)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rS(new rS.RecordClass({
            product_detailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18cf7a63-3c2e-b19c-8f4a-71d50c228fa8"
    }
};
e(rS, "RC_18cf7a633c2eb19c8f4a71d50c228fa8");
var Kc = rS;
Kc.init();
var aS = class aS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_list", "account_listAttr", "account_list", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new aS(new aS.RecordClass({
            account_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(aS, "ST_84a0cd0731252abf8ed782a87ccaad58Structure");
var Ke = aS;
Ke.init();
var sS = class sS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req4", "echo_req4Attr", "Echo_req8", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ke)
        }, !0, Ke)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sS(new sS.RecordClass({
            echo_req4Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d748f9b2-c205-0386-4494-73bdb4b3b0cb"
    }
};
e(sS, "RC_d748f9b2c2050386449473bdb4b3b0cb");
var Qc = sS;
Qc.init();
var IL = class IL extends t.GenericRecordList {
    static getItemType() {
        return Qc
    }
};
e(IL, "RL_18e77429a52b049bf869659c0cf9f64f");
var RL = IL;
var iS = class iS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatesList", "statesListAttr", "states_list", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new iS(new iS.RecordClass({
            statesListAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(iS, "ST_a4800a0232074a24c4afcdc4d2e852b0Structure");
var Hs = iS;
Hs.init();
var nS = class nS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateListRequest", "stateListRequestAttr", "StateListRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Hs)
        }, !0, Hs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nS(new nS.RecordClass({
            stateListRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "18ece4d5-d5de-8052-51b5-b7c411edc0a0"
    }
};
e(nS, "RC_18ece4d5d5de805251b5b7c411edc0a0");
var $c = nS;
$c.init();
var AL = class AL extends t.GenericRecordList {
    static getItemType() {
        return Mr
    }
};
e(AL, "RL_18fb42250d06ad7070f3cb354e03942c");
var hL = AL;
var oS = class oS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nt)
        }, !0, Nt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oS(new oS.RecordClass({
            dxtrade_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "191172c9-4e64-292c-8bf1-a2dce4b5e876"
    }
};
e(oS, "RC_191172c94e64292c8bf1a2dce4b5e876");
var tu = oS;
tu.init();
var cS = class cS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Tax", "taxAttr", "Tax2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rt)
        }, !0, Rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cS(new cS.RecordClass({
            taxAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19aa8964-1c73-98ce-acf4-370c69126f64"
    }
};
e(cS, "RC_19aa89641c7398ceacf4370c69126f64");
var eu = cS;
eu.init();
var uS = class uS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fractional_digits", "fractional_digitsAttr", "fractional_digits", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uS(new uS.RecordClass({
            fractional_digitsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(uS, "ST_1d9346af7c96c8938257535a9fc60a9cStructure");
var Qe = uS;
Qe.init();
var pS = class pS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR2", "iDR2Attr", "IDR2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qe)
        }, !0, Qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pS(new pS.RecordClass({
            iDR2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "19cbceda-d67b-422e-c73a-8118b5b40a41"
    }
};
e(pS, "RC_19cbcedad67b422ec73a8118b5b40a41");
var ru = pS;
ru.init();
var GL = class GL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(GL, "EN_19dadc7afbb2c1873c7b698fbb261a65EntityRecord");
var ba = GL;
ba.init();
var lS = class lS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trigger", "triggerAttr", "Trigger", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lS(new lS.RecordClass({
            triggerAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(lS, "EN_52e55d60c515b6016f81404afb220594EntityRecord");
var Js = lS;
Js.init();
var PL = class PL extends t.GenericRecordList {
    static getItemType() {
        return Js
    }
};
e(PL, "RL_19efe67c3ea3fa4b4b07aaa801b42f8c");
var wL = PL;
var EL = class EL extends t.GenericRecordList {
    static getItemType() {
        return Vo
    }
};
e(EL, "RL_19fdcf365ab6aa26528a4b518cbfcf32");
var BL = EL;
var mS = class mS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Languages", "languagesAttr", "Languages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new L)
        }, !0, L)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mS(new mS.RecordClass({
            languagesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1a05c904-c294-f37e-92db-8f7002105183"
    }
};
e(mS, "RC_1a05c904c294f37e92db8f7002105183");
var au = mS;
au.init();
var fS = class fS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Autoplay", "autoplayAttr", "Autoplay", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fS(new fS.RecordClass({
            autoplayAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(fS, "EN_c3a2475ae6370a2f746040280495b4a2EntityRecord");
var Ys = fS;
Ys.init();
var TS = class TS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Autoplay", "autoplayAttr", "Autoplay", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ys)
        }, !0, Ys)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new TS(new TS.RecordClass({
            autoplayAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c6831d06-e579-de4e-dbcf-59e128b60b13"
    }
};
e(TS, "RC_c6831d06e579de4edbcf59e128b60b13");
var su = TS;
su.init();
var LL = class LL extends t.GenericRecordList {
    static getItemType() {
        return su
    }
};
e(LL, "RL_1a211c52d9450d4da06f34c1b8aa3b76");
var CL = LL;
var vL = class vL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("value", "valueAttr", "value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vL, "ST_c3cc9588b99464ac12b429e10e69d60fStructure");
var Br = vL;
Br.init();
var jL = class jL extends t.GenericRecordList {
    static getItemType() {
        return Br
    }
};
e(jL, "RL_1a22572c52e5532cb792825a498a12f0");
var qL = jL;
var DS = class DS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_financial_company", "mt_financial_companyAttr", "Mt_financial_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Z)
        }, !0, Z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new DS(new DS.RecordClass({
            mt_financial_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "39bf756e-3f16-0420-2cf1-d7ac5fb3b260"
    }
};
e(DS, "RC_39bf756e3f1604202cf1d7ac5fb3b260");
var iu = DS;
iu.init();
var UL = class UL extends t.GenericRecordList {
    static getItemType() {
        return iu
    }
};
e(UL, "RL_1a2d97d3def0e6b808795f4f98a3a588");
var kL = UL;
var VL = class VL extends t.GenericRecordList {
    static getItemType() {
        return au
    }
};
e(VL, "RL_1a5cf00c92b0ec1b5c534af85d952dbc");
var FL = VL;
var yS = class yS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DerivXInfoTable", "derivXInfoTableAttr", "DerivXInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new la)
        }, !0, la)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yS(new yS.RecordClass({
            derivXInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5d5d5f00-a6d0-b41c-664d-5621f366190d"
    }
};
e(yS, "RC_5d5d5f00a6d0b41c664d5621f366190d");
var nu = yS;
nu.init();
var NL = class NL extends t.GenericRecordList {
    static getItemType() {
        return nu
    }
};
e(NL, "RL_1ac3d3ab269762306321bb7760937f2c");
var _L = NL;
var zL = class zL extends t.GenericRecordList {
    static getItemType() {
        return Ns
    }
};
e(zL, "RL_1ad625019f4848d09f7266282d4e315e");
var ML = zL;
var XL = class XL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentStatus", "employmentStatusAttr", "EmploymentStatus", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("TaxResidence", "taxResidenceAttr", "TaxResidence", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("TaxIdentificationNumber", "taxIdentificationNumberAttr", "TaxIdentificationNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(XL, "ST_b5dd817fa61c45f96c6cb802ea7c9118Structure");
var Ra = XL;
Ra.init();
var HL = class HL extends t.GenericRecordList {
    static getItemType() {
        return Ra
    }
};
e(HL, "RL_1b04e3e773519e342de5d63d1b5b377b");
var WL = HL;
var dS = class dS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Feature_flag", "feature_flagAttr", "Feature_flag", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jt)
        }, !0, Jt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dS(new dS.RecordClass({
            feature_flagAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1b2532ef-629f-2b32-59be-b09a3dc495b4"
    }
};
e(dS, "RC_1b2532ef629f2b3259beb09a3dc495b4");
var ou = dS;
ou.init();
var SS = class SS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Turnover", "turnoverAttr", "Turnover2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vt)
        }, !0, vt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new SS(new SS.RecordClass({
            turnoverAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ea9565dd-c265-550c-2d38-c39dc154035f"
    }
};
e(SS, "RC_ea9565ddc265550c2d38c39dc154035f");
var cu = SS;
cu.init();
var YL = class YL extends t.GenericRecordList {
    static getItemType() {
        return cu
    }
};
e(YL, "RL_1b71a02dea96d4cd97c73eba8bb674c6");
var JL = YL;
var ZL = class ZL extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidVerificationCode", "invalidVerificationCodeAttr", "InvalidVerificationCode", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidEmail", "invalidEmailAttr", "InvalidEmail", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ZL, "FinishResetPasswordFailureReasonRec");
var $e = ZL;
$e.init();
var OS = class OS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $e)
        }, !0, $e)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new OS(new OS.RecordClass({
            finishResetPasswordFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1ba3db8c-7175-cd09-5b4f-1a36c3a1e53d"
    }
};
e(OS, "RC_1ba3db8c7175cd095b4f1a36c3a1e53d");
var uu = OS;
uu.init();
var gS = class gS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatesListProperties", "statesListPropertiesAttr", "StatesListProperties", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sa)
        }, !0, sa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gS(new gS.RecordClass({
            statesListPropertiesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6f7ceb67-acc3-37c0-a17d-106477990c4a"
    }
};
e(gS, "RC_6f7ceb67acc337c0a17d106477990c4a");
var pu = gS;
pu.init();
var QL = class QL extends t.GenericRecordList {
    static getItemType() {
        return pu
    }
};
e(QL, "RL_1bb3aa44d64789d21e2e5b1cfe76b045");
var KL = QL;
var xS = class xS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xS(new xS.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(xS, "ST_3612fcc680d052de2c30dcfaf1d328c5Structure");
var tr = xS;
tr.init();
var $L = class $L extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advert_info", "advert_infoAttr", "p2p_advert_info", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tr)
        }, !0, tr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($L, "ST_d7788a11837ccb63472925e3f2cd934fStructure");
var Zs = $L;
Zs.init();
var ev = class ev extends t.GenericRecordList {
    static getItemType() {
        return Zs
    }
};
e(ev, "RL_1c3088abbab1e36a4992a44ac6444a28");
var tv = ev;
var bS = class bS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website", "websiteAttr", "Website", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bS(new bS.RecordClass({
            websiteAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(bS, "ST_644b44fa626b6f737fea986b5d6b3b48Structure");
var Ia = bS;
Ia.init();
var av = class av extends t.GenericRecordList {
    static getItemType() {
        return Ia
    }
};
e(av, "RL_1c49d550aa6a26b820aa90ed547d7c52");
var rv = av;
var sv = class sv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RequestId", "requestIdAttr", "requestId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CurrentRequestCount", "currentRequestCountAttr", "currentRequestCount", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("MonthlyRequestLimit", "monthlyRequestLimitAttr", "monthlyRequestLimit", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(sv, "ST_905231b0a989fd7194489d4fd56d2382Structure");
var z = sv;
z.init();
var iv = class iv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ExecutionId", "executionIdAttr", "executionId", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MetaData", "metaDataAttr", "metaData", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iv, "ST_0cbd27f3f37d67634546c1cc70cd2310Structure");
var Ks = iv;
Ks.init();
var ov = class ov extends t.GenericRecordList {
    static getItemType() {
        return Ks
    }
};
e(ov, "RL_1c9df6292bc01420d5e585cf483a3f07");
var nv = ov;
var cv = class cv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "cashier", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Provider", "providerAttr", "provider", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cv, "ST_a61a52fb9a0db4861b8e2b8110ef16c4Structure");
var X = cv;
X.init();
var uv = class uv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "cashier", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(uv, "ST_8e8af6ab08708eb9bf2a2c09b57c23f5Structure");
var Qs = uv;
Qs.init();
var lv = class lv extends t.GenericRecordList {
    static getItemType() {
        return Qs
    }
};
e(lv, "RL_1d3883baf2a25f26e9aa7de12c9a4468");
var pv = lv;
var mv = class mv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_id", "account_idAttr", "account_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Display_balance", "display_balanceAttr", "display_balance", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Enabled", "enabledAttr", "enabled", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Landing_company_short", "landing_company_shortAttr", "landing_company_short", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Login", "loginAttr", "login", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ctrader_total_balance", "ctrader_total_balanceAttr", "ctrader_total_balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mv, "ST_a64a97da9ee822b4b21c919739567011Structure");
var Er = mv;
Er.init();
var Tv = class Tv extends t.GenericRecordList {
    static getItemType() {
        return Er
    }
};
e(Tv, "RL_d2e8d01cb1d1df6bef4310379df28149");
var fv = Tv;
var Dv = class Dv extends t.GenericRecordList {
    static getItemType() {
        return Er
    }
};
e(Dv, "RL_d2e8d01cb1d1df6bef4310379df28149");
var $s = Dv;
var yv = class yv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new $s)
        }, !0, $s)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yv, "ST_711f7ad16da273bf9e6563303a17ad00Structure");
var ti = yv;
ti.init();
var Sv = class Sv extends t.GenericRecordList {
    static getItemType() {
        return ti
    }
};
e(Sv, "RL_1dae29f574cdcca95ce8a85935b8f3fa");
var dv = Sv;
var gv = class gv extends t.GenericRecordList {
    static getItemType() {
        return Te
    }
};
e(gv, "RL_1dc527401e57829601dc86609514b95f");
var Ov = gv;
var RS = class RS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DemoItem", "demoItemAttr", "DemoItem3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new br)
        }, !0, br)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new RS(new RS.RecordClass({
            demoItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f643b3ac-fc27-a4fe-cd1e-2e4d216ea947"
    }
};
e(RS, "RC_f643b3acfc27a4fecd1e2e4d216ea947");
var lu = RS;
lu.init();
var bv = class bv extends t.GenericRecordList {
    static getItemType() {
        return lu
    }
};
e(bv, "RL_1dea2ab8630085ef26828f80f7648065");
var xv = bv;
var IS = class IS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetGetSettingsResponse", "getGetSettingsResponseAttr", "GetGetSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ts)
        }, !0, ts)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new IS(new IS.RecordClass({
            getGetSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a1310fc4-b666-4d1d-807e-e5336bf20c28"
    }
};
e(IS, "RC_a1310fc4b6664d1d807ee5336bf20c28");
var mu = IS;
mu.init();
var Iv = class Iv extends t.GenericRecordList {
    static getItemType() {
        return mu
    }
};
e(Iv, "RL_1e027ac5f8769ea4d4adbbcc7903f418");
var Rv = Iv;
var hS = class hS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Value", "valueAttr", "Value", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hS(new hS.RecordClass({
            valueAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(hS, "IntegerLiteralRec");
var ei = hS;
ei.init();
var AS = class AS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IntegerLiteral", "integerLiteralAttr", "IntegerLiteral", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ei)
        }, !0, ei)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new AS(new AS.RecordClass({
            integerLiteralAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "501f23bc-6d75-0fe0-b76b-3bfaa246f6ae"
    }
};
e(AS, "RCIntegerLiteralRecord");
var fu = AS;
fu.init();
var Av = class Av extends t.GenericRecordList {
    static getItemType() {
        return fu
    }
};
e(Av, "RLIntegerLiteralRecordList");
var hv = Av;
var GS = class GS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfo", "p2PAdvertInfoAttr", "P2PAdvertInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tr)
        }, !0, tr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new GS(new GS.RecordClass({
            p2PAdvertInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1e93678e-eb2c-f74d-c2fe-ef60cb655062"
    }
};
e(GS, "RC_1e93678eeb2cf74dc2feef60cb655062");
var Tu = GS;
Tu.init();
var wS = class wS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Position", "positionAttr", "Position", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wS(new wS.RecordClass({
            positionAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(wS, "EN_4f86046673de081f9834eb306850ab22EntityRecord");
var ri = wS;
ri.init();
var PS = class PS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FloatingPosition", "floatingPositionAttr", "FloatingPosition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ri)
        }, !0, ri)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new PS(new PS.RecordClass({
            floatingPositionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "95c47313-6722-ba73-7961-1f73a3471de3"
    }
};
e(PS, "RC_95c473136722ba7379611f73a3471de3");
var Du = PS;
Du.init();
var wv = class wv extends t.GenericRecordList {
    static getItemType() {
        return Du
    }
};
e(wv, "RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2");
var Gv = wv;
var BS = class BS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cs)
        }, !0, cs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new BS(new BS.RecordClass({
            booleanTypesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "1ea63146-d7f1-d969-afc2-06832e751192"
    }
};
e(BS, "RC_1ea63146d7f1d969afc206832e751192");
var yu = BS;
yu.init();
var Pv = class Pv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Pv, "EN_ae9e4b56ac8f5d5b47650c3d944e3608EntityRecord");
var ha = Pv;
ha.init();
var Ev = class Ev extends t.GenericRecordList {
    static getItemType() {
        return ha
    }
};
e(Ev, "RL_1ec153ffcbb8719bc5fc6960e360ef3f");
var Bv = Ev;
var Lv = class Lv extends t.GenericRecordList {
    static getItemType() {
        return ye
    }
};
e(Lv, "RL_1ee2701fb233e597575036a6d1cfcb5b");
var Cv = Lv;
var vv = class vv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cfd_experience", "cfd_experienceAttr", "cfd_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_frequency", "cfd_frequencyAttr", "cfd_frequency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Cfd_trading_definition", "cfd_trading_definitionAttr", "cfd_trading_definition", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage_impact_trading", "leverage_impact_tradingAttr", "leverage_impact_trading", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage_trading_high_risk_stop_loss", "leverage_trading_high_risk_stop_lossAttr", "leverage_trading_high_risk_stop_loss", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Required_initial_margin", "required_initial_marginAttr", "required_initial_margin", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Risk_tolerance", "risk_toleranceAttr", "risk_tolerance", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Source_of_experience", "source_of_experienceAttr", "source_of_experience", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_experience_financial_instruments", "trading_experience_financial_instrumentsAttr", "trading_experience_financial_instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_frequency_financial_instruments", "trading_frequency_financial_instrumentsAttr", "trading_frequency_financial_instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vv, "ST_d6cde1e565375d0e174c752d34c0680fStructure");
var er = vv;
er.init();
var ES = class ES extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_experience_regulated", "trading_experience_regulatedAttr", "Trading_experience_regulated", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new er)
        }, !0, er)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ES(new ES.RecordClass({
            trading_experience_regulatedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "602d30d2-5172-58c1-7f17-cacc00827d33"
    }
};
e(ES, "RC_602d30d2517258c17f17cacc00827d33");
var du = ES;
du.init();
var jv = class jv extends t.GenericRecordList {
    static getItemType() {
        return du
    }
};
e(jv, "RL_1f4f73f3e46b4a334991485ac13ee1d2");
var qv = jv;
var kv = class kv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidName", "invalidNameAttr", "InvalidName", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidPhotoURL", "invalidPhotoURLAttr", "InvalidPhotoURL", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(kv, "UpdateUserFailureReasonRec");
var rr = kv;
rr.init();
var Uv = class Uv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UserPhotoURL", "userPhotoURLAttr", "UserPhotoURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rr)
        }, !0, rr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Uv, "UpdateUserResultRec");
var ai = Uv;
ai.init();
var CS = class CS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserResult", "updateUserResultAttr", "UpdateUserResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ai)
        }, !0, ai)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new CS(new CS.RecordClass({
            updateUserResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bd573fb2-cb52-1691-dc6a-8c4b02eeb054"
    }
};
e(CS, "RC_bd573fb2cb521691dc6a8c4b02eeb054");
var Su = CS;
Su.init();
var Vv = class Vv extends t.GenericRecordList {
    static getItemType() {
        return Su
    }
};
e(Vv, "RL_201410915258bdd92387bbd4bec2a7bb");
var Fv = Vv;
var LS = class LS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RudderstackTrackPayload", "rudderstackTrackPayloadAttr", "RudderstackTrackPayload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zr)
        }, !0, Zr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new LS(new LS.RecordClass({
            rudderstackTrackPayloadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c4db4f3a-eb5e-dd9a-b802-a278b6663f3f"
    }
};
e(LS, "RC_c4db4f3aeb5edd9ab802a278b6663f3f");
var Ou = LS;
Ou.init();
var Nv = class Nv extends t.GenericRecordList {
    static getItemType() {
        return Ou
    }
};
e(Nv, "RL_20322c58eb45fb0d1b1de5d7c79573e2");
var _v = Nv;
var vS = class vS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vS(new vS.RecordClass({
            nameAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(vS, "ST_18ad6961998d53ee63bc4d04b91a9152Structure");
var si = vS;
si.init();
var qS = class qS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserCreateRequest", "p2PAdvertiserCreateRequestAttr", "P2PAdvertiserCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new si)
        }, !0, si)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qS(new qS.RecordClass({
            p2PAdvertiserCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c42160ad-5158-80f4-7b5a-0f78fe1a495c"
    }
};
e(qS, "RC_c42160ad515880f47b5a0f78fe1a495c");
var gu = qS;
gu.init();
var zv = class zv extends t.GenericRecordList {
    static getItemType() {
        return gu
    }
};
e(zv, "RL_2053af017804ccdd2b9c3428357fafcc");
var Mv = zv;
var jS = class jS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jS(new jS.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(jS, "ST_3d1a46622c09608d98a230622b852106Structure");
var ii = jS;
ii.init();
var kS = class kS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserInfoRequest", "p2PAdvertiserInfoRequestAttr", "P2PAdvertiserInfoRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ii)
        }, !0, ii)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kS(new kS.RecordClass({
            p2PAdvertiserInfoRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2058a904-a5af-7403-07bc-28a7bafc955c"
    }
};
e(kS, "RC_2058a904a5af740307bc28a7bafc955c");
var xu = kS;
xu.init();
var US = class US extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR", "iDRAttr", "IDR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qe)
        }, !0, Qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new US(new US.RecordClass({
            iDRAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(US, "ST_4cf21e951c9e4f29302e0e457ab5a673Structure");
var ar = US;
ar.init();
var FS = class FS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency2", "local_currency2Attr", "Local_currency2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ar)
        }, !0, ar)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new FS(new FS.RecordClass({
            local_currency2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2081831f-b79d-9a80-56f0-4161074e9cd5"
    }
};
e(FS, "RC_2081831fb79d9a8056f04161074e9cd5");
var bu = FS;
bu.init();
var VS = class VS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("After_first_deposit", "after_first_depositAttr", "After_first_deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fe)
        }, !0, fe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new VS(new VS.RecordClass({
            after_first_depositAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a336dc96-fafc-2e7f-fdb8-8fdcc24fe482"
    }
};
e(VS, "RC_a336dc96fafc2e7ffdb88fdcc24fe482");
var Ru = VS;
Ru.init();
var Wv = class Wv extends t.GenericRecordList {
    static getItemType() {
        return Ru
    }
};
e(Wv, "RL_2083bc83b9d077075ef50c2bd63b6965");
var Xv = Wv;
var Hv = class Hv extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Display_balance", "display_balanceAttr", "display_balance", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Login", "loginAttr", "login", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Mt5_account_category", "mt5_account_categoryAttr", "mt5_account_category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product", "productAttr", "product", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Hv, "ST_d118772d36fe47c2ad1fe46d71b38a0cStructure");
var sr = Hv;
sr.init();
var _S = class _S extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_new_accountItem", "mt5_new_accountItemAttr", "Mt5_new_accountItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sr)
        }, !0, sr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _S(new _S.RecordClass({
            mt5_new_accountItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "210d3c7c-0382-d69c-0f14-edb5d1eb7d2c"
    }
};
e(_S, "RC_210d3c7c0382d69c0f14edb5d1eb7d2c");
var Iu = _S;
Iu.init();
var Yv = class Yv extends t.GenericRecordList {
    static getItemType() {
        return Kr
    }
};
e(Yv, "RL_210e858519cee8fb492f2c3ecddefa1d");
var Jv = Yv;
var Kv = class Kv extends t.GenericRecordList {
    static getItemType() {
        return Iu
    }
};
e(Kv, "RL_21a53417044e5801f591fd68a063d1de");
var Zv = Kv;
var NS = class NS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Onfido", "onfidoAttr", "Onfido3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wt)
        }, !0, wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new NS(new NS.RecordClass({
            onfidoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6da37637-b059-3f4e-c39c-bdb7fca0818f"
    }
};
e(NS, "RC_6da37637b0593f4ec39cbdb7fca0818f");
var hu = NS;
hu.init();
var $v = class $v extends t.GenericRecordList {
    static getItemType() {
        return hu
    }
};
e($v, "RL_21aa582dbaa7e503639ee59cca230a00");
var Qv = $v;
var MS = class MS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Jurisdiction_risk_assessment", "jurisdiction_risk_assessmentAttr", "Jurisdiction_risk_assessment2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qt)
        }, !0, qt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new MS(new MS.RecordClass({
            jurisdiction_risk_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30490951-2908-54c2-926b-2cf8ec7b4a20"
    }
};
e(MS, "RC_30490951290854c2926b2cf8ec7b4a20");
var Au = MS;
Au.init();
var eq = class eq extends t.GenericRecordList {
    static getItemType() {
        return Au
    }
};
e(eq, "RL_222c4cca834a8b261e24304f207bc884");
var tq = eq;
var aq = class aq extends t.GenericRecordList {
    static getItemType() {
        return Tt
    }
};
e(aq, "RL_2236019573133d80bb70080e1c69863c");
var rq = aq;
var zS = class zS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("States_list", "states_listAttr", "states_list", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zS(new zS.RecordClass({
            states_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(zS, "ST_69807011f0e625c555e5100bf2e89391Structure");
var ir = zS;
ir.init();
var iq = class iq extends t.GenericRecordList {
    static getItemType() {
        return ir
    }
};
e(iq, "RL_2249cd644da747f0537bdd3570d34b56");
var sq = iq;
var XS = class XS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new P)
        }, !0, P)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new XS(new XS.RecordClass({
            max_requestes_generalAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "224fc997-0e96-93b0-73b4-9748bfa1459a"
    }
};
e(XS, "RC_224fc9970e9693b073b49748bfa1459a");
var Gu = XS;
Gu.init();
var WS = class WS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "Platform2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new j)
        }, !0, j)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new WS(new WS.RecordClass({
            platformAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2296852f-b68f-fc0d-98bf-144361127c38"
    }
};
e(WS, "RC_2296852fb68ffc0d98bf144361127c38");
var wu = WS;
wu.init();
var HS = class HS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new HS(new HS.RecordClass({
            labelAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(HS, "EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord");
var ni = HS;
ni.init();
var oq = class oq extends t.GenericRecordList {
    static getItemType() {
        return ni
    }
};
e(oq, "RL_230328260e3d7a695b9562201483a549");
var nq = oq;
var JS = class JS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeRequest", "postAuthorizeRequestAttr", "PostAuthorizeRequest2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qt)
        }, !0, Qt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new JS(new JS.RecordClass({
            postAuthorizeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "236b9780-ed98-eefd-23c7-d452d5b32785"
    }
};
e(JS, "RC_236b9780ed98eefd23c7d452d5b32785");
var Pu = JS;
Pu.init();
var uq = class uq extends t.GenericRecordList {
    static getItemType() {
        return Me
    }
};
e(uq, "RL_23c5170e5cae92676806075f1dc0926f");
var cq = uq;
var pq = class pq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LanguageCode", "languageCodeAttr", "LanguageCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("SourceFile", "sourceFileAttr", "SourceFile", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Label", "labelAttr", "Label", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(pq, "ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure");
var oi = pq;
oi.init();
var YS = class YS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("VideoCaptions", "videoCaptionsAttr", "VideoCaptions", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oi)
        }, !0, oi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new YS(new YS.RecordClass({
            videoCaptionsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "23e4ac7b-03ba-2050-af58-11737c8cc89f"
    }
};
e(YS, "RC_23e4ac7b03ba2050af5811737c8cc89f");
var Bu = YS;
Bu.init();
var lq = class lq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentStatus", "employmentStatusAttr", "EmploymentStatus", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TaxResidence", "taxResidenceAttr", "TaxResidence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TaxIdentificationNumber", "taxIdentificationNumberAttr", "TaxIdentificationNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lq, "ST_7fbab05f3644735e219d7d120bd6a352Structure");
var Aa = lq;
Aa.init();
var ZS = class ZS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentDetailsValidationError2", "employmentDetailsValidationError2Attr", "EmploymentDetailsValidationError2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Aa)
        }, !0, Aa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ZS(new ZS.RecordClass({
            employmentDetailsValidationError2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f1b73cc7-d4dc-6be4-1f2a-301a7c6e5499"
    }
};
e(ZS, "RC_f1b73cc7d4dc6be41f2a301a7c6e5499");
var Eu = ZS;
Eu.init();
var fq = class fq extends t.GenericRecordList {
    static getItemType() {
        return Eu
    }
};
e(fq, "RL_241bbadb270b4904f30c39fc10e165c5");
var mq = fq;
var KS = class KS extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Payment_agent", "payment_agentAttr", "Payment_agent", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ot)
        }, !0, ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new KS(new KS.RecordClass({
            payment_agentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "244e2749-d288-11b4-841e-2dbbd8dedcb9"
    }
};
e(KS, "RC_244e2749d28811b4841e2dbbd8dedcb9");
var Cu = KS;
Cu.init();
var Dq = class Dq extends t.GenericRecordList {
    static getItemType() {
        return oc
    }
};
e(Dq, "RL_24aecc0a64a09132883fa9dfbc57900b");
var Tq = Dq;
var dq = class dq extends t.GenericRecordList {
    static getItemType() {
        return Pr
    }
};
e(dq, "RL_e615c73f7c49d5c9a1b81b0e5505c2d5");
var yq = dq;
var Sq = class Sq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Country_code", "country_codeAttr", "country_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Sq, "ST_e25657c96fdb654707c20af3bb230787Structure");
var A = Sq;
A.init();
var Oq = class Oq extends t.GenericRecordList {
    static getItemType() {
        return Pr
    }
};
e(Oq, "RL_e615c73f7c49d5c9a1b81b0e5505c2d5");
var QS = Oq;
var gq = class gq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new QS)
        }, !0, QS)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gq, "ST_a6a60f46ebdfbc286beab7fb13984df8Structure");
var ci = gq;
ci.init();
var bq = class bq extends t.GenericRecordList {
    static getItemType() {
        return ci
    }
};
e(bq, "RL_24d00c079b23f7e47e2ee86991545c06");
var xq = bq;
var Rq = class Rq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChannelUrl", "channelUrlAttr", "channel_url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("OrderId", "orderIdAttr", "order_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Rq, "ST_1ef105b99eb7bf3da44ada0667cc82ddStructure");
var nr = Rq;
nr.init();
var $S = class $S extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChatResponse", "chatResponseAttr", "ChatResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nr)
        }, !0, nr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $S(new $S.RecordClass({
            chatResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f67acfc2-edb3-49f3-9f53-1637fcf64924"
    }
};
e($S, "RC_f67acfc2edb349f39f531637fcf64924");
var Lu = $S;
Lu.init();
var hq = class hq extends t.GenericRecordList {
    static getItemType() {
        return Lu
    }
};
e(hq, "RL_24d759ee687c211ac7033a77a13d226f");
var Iq = hq;
var Gq = class Gq extends t.GenericRecordList {
    static getItemType() {
        return W
    }
};
e(Gq, "RL_25008888c069155597e1a02e1b9ea813");
var Aq = Gq;
var tO = class tO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualResponse", "postNewAccountVirtualResponseAttr", "PostNewAccountVirtualResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bs)
        }, !0, bs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tO(new tO.RecordClass({
            postNewAccountVirtualResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "96175866-bef7-bdbf-7496-5597575b319c"
    }
};
e(tO, "RC_96175866bef7bdbf74965597575b319c");
var vu = tO;
vu.init();
var Pq = class Pq extends t.GenericRecordList {
    static getItemType() {
        return vu
    }
};
e(Pq, "RL_2567d50fd0e540a33e71ee0dd4edef5d");
var wq = Pq;
var Bq = class Bq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Bq, "EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord");
var ui = Bq;
ui.init();
var eO = class eO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LegendPosition_v1", "legendPosition_v1Attr", "LegendPosition_v1", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ui)
        }, !0, ui)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eO(new eO.RecordClass({
            legendPosition_v1Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d2362d0d-0bb3-6623-a5f0-020a47954dfc"
    }
};
e(eO, "RC_d2362d0d0bb36623a5f0020a47954dfc");
var qu = eO;
qu.init();
var Cq = class Cq extends t.GenericRecordList {
    static getItemType() {
        return qu
    }
};
e(Cq, "RL_257ff75163dcb7f5df49442c867d608a");
var Eq = Cq;
var vq = class vq extends t.GenericRecordList {
    static getItemType() {
        return c
    }
};
e(vq, "RL_259f695d96f0de3932ec1e360faf929e");
var Lq = vq;
var rO = class rO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList2", "stateList2Attr", "StateList2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ir)
        }, !0, ir)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rO(new rO.RecordClass({
            stateList2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e8ee0dbc-2253-234a-59bc-e144fb184297"
    }
};
e(rO, "RC_e8ee0dbc2253234a59bce144fb184297");
var ju = rO;
ju.init();
var jq = class jq extends t.GenericRecordList {
    static getItemType() {
        return ju
    }
};
e(jq, "RL_25c69d60a99eff98bc1861f4dbb035a0");
var qq = jq;
var aO = class aO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Landing_company", "landing_companyAttr", "Landing_company4", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new he)
        }, !0, he)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new aO(new aO.RecordClass({
            landing_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e1b3eaed-bd13-3d4e-bfdb-497dc119e9c1"
    }
};
e(aO, "RC_e1b3eaedbd133d4ebfdb497dc119e9c1");
var ku = aO;
ku.init();
var Uq = class Uq extends t.GenericRecordList {
    static getItemType() {
        return ku
    }
};
e(Uq, "RL_25ca4d2fe256f651a7214d9f28b70caa");
var kq = Uq;
var Fq = class Fq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Environment", "environmentAttr", "environment", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Geolocation", "geolocationAttr", "geolocation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new He)
        }, !0, He), this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Fq, "ST_b3b8308da7c5dcdc42b3f87ca949eb8cStructure");
var or = Fq;
or.init();
var _q = class _q extends t.GenericRecordList {
    static getItemType() {
        return or
    }
};
e(_q, "RL_260232560d4d04c2013fce278e787f24");
var Vq = _q;
var sO = class sO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sO(new sO.RecordClass({
            breakColumnsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(sO, "EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord");
var pi = sO;
pi.init();
var iO = class iO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pi)
        }, !0, pi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new iO(new iO.RecordClass({
            breakColumnsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "261685da-2c79-9bcc-3b48-73485e008694"
    }
};
e(iO, "RC_261685da2c799bcc3b4873485e008694");
var Uu = iO;
Uu.init();
var Nq = class Nq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LandingCompanies", "landingCompaniesAttr", "LandingCompanies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Nq, "ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure");
var li = Nq;
li.init();
var nO = class nO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusRequest", "kYCAuthStatusRequestAttr", "KYCAuthStatusRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new li)
        }, !0, li)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nO(new nO.RecordClass({
            kYCAuthStatusRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "264d82ff-2942-8f3c-d43e-be0810111d5a"
    }
};
e(nO, "RC_264d82ff29428f3cd43ebe0810111d5a");
var Fu = nO;
Fu.init();
var Mq = class Mq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("AccountType", "accountTypeAttr", "AccountType", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency", "currencyAttr", "Currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("FirstMiddleName", "firstMiddleNameAttr", "FirstMiddleName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LastName", "lastNameAttr", "LastName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Mq, "EN_26b877e1d832e90c0fea3059eec067b6EntityRecord");
var Ga = Mq;
Ga.init();
var oO = class oO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5SwapFreeCommissionInfoTable", "mT5SwapFreeCommissionInfoTableAttr", "MT5SwapFreeCommissionInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xa)
        }, !0, xa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oO(new oO.RecordClass({
            mT5SwapFreeCommissionInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "404c4599-4382-7781-a6e4-30bd69037b23"
    }
};
e(oO, "RC_404c459943827781a6e430bd69037b23");
var Vu = oO;
Vu.init();
var Xq = class Xq extends t.GenericRecordList {
    static getItemType() {
        return Vu
    }
};
e(Xq, "RL_26b9b28e49f6aa45aba24d43f71894e9");
var zq = Xq;
var cO = class cO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Size", "sizeAttr", "Size", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cO(new cO.RecordClass({
            sizeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(cO, "EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord");
var mi = cO;
mi.init();
var uO = class uO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Size", "sizeAttr", "Size", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mi)
        }, !0, mi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uO(new uO.RecordClass({
            sizeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ca426fec-0751-e5b6-dcf0-15e9fdc2120e"
    }
};
e(uO, "RC_ca426fec0751e5b6dcf015e9fdc2120e");
var _u = uO;
_u.init();
var Hq = class Hq extends t.GenericRecordList {
    static getItemType() {
        return _u
    }
};
e(Hq, "RL_27a81319ef1cef112a91632cbf388562");
var Wq = Hq;
var Jq = class Jq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Code", "codeAttr", "code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Message", "messageAttr", "message", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Jq, "ST_b7d405ca4407e572da091e54d07e3bd1Structure");
var fi = Jq;
fi.init();
var pO = class pO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage_OSUI", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fi)
        }, !0, fi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pO(new pO.RecordClass({
            errorMessageAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "27b5a164-e828-de9b-9068-6831c7908b4a"
    }
};
e(pO, "RC_27b5a164e828de9b90686831c7908b4a");
var Nu = pO;
Nu.init();
var lO = class lO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currencies_config", "currencies_configAttr", "Currencies_config3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _t)
        }, !0, _t)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lO(new lO.RecordClass({
            currencies_configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2827a9b1-8791-37de-b3aa-a08d45397068"
    }
};
e(lO, "RC_2827a9b1879137deb3aaa08d45397068");
var Mu = lO;
Mu.init();
var mO = class mO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_indexItem", "asset_indexItemAttr", "__singleArrayAttribute", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mO(new mO.RecordClass({
            asset_indexItemAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(mO, "ST_d5a14f6db075b658d013dc3ad63d0c60Structure");
var Cr = mO;
Cr.init();
var Zq = class Zq extends t.GenericRecordList {
    static getItemType() {
        return Cr
    }
};
e(Zq, "RL_96ea0e5dbed7b91dda2061420ea7817a");
var Yq = Zq;
var Kq = class Kq extends t.GenericRecordList {
    static getItemType() {
        return Cr
    }
};
e(Kq, "RL_96ea0e5dbed7b91dda2061420ea7817a");
var fO = Kq;
var Qq = class Qq extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_index", "asset_indexAttr", "asset_index", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new fO)
        }, !0, fO), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new We)
        }, !0, We), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Qq, "ST_870defcbb5bf4a58a2a009971edc7d07Structure");
var Ti = Qq;
Ti.init();
var TO = class TO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetAssetIndexResponse", "getAssetIndexResponseAttr", "GetAssetIndexResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ti)
        }, !0, Ti)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new TO(new TO.RecordClass({
            getAssetIndexResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2838f738-beb9-0761-e9ec-634e42207f58"
    }
};
e(TO, "RC_2838f738beb90761e9ec634e42207f58");
var zu = TO;
zu.init();
var $q = class $q extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FileName", "fileNameAttr", "FileName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("FileContent", "fileContentAttr", "FileContent", !1, !1, t.DataTypes.BinaryData, function() {
            return t.BinaryData.defaultValue
        }, !0), this.attr("MimeType", "mimeTypeAttr", "MimeType", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e($q, "AttachmentRec");
var Xu = $q;
Xu.init();
var DO = class DO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document", "documentAttr", "Document", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ne)
        }, !0, ne)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new DO(new DO.RecordClass({
            documentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "288f369a-ef43-887c-2cd0-e3a40ac97aef"
    }
};
e(DO, "RC_288f369aef43887c2cd0e3a40ac97aef");
var Wu = DO;
Wu.init();
var yO = class yO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yO(new yO.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(yO, "ST_9737eba44981be7e1e2e600a29fca443Structure");
var Di = yO;
Di.init();
var dO = class dO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelRequest", "p2POrderCancelRequestAttr", "P2POrderCancelRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Di)
        }, !0, Di)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dO(new dO.RecordClass({
            p2POrderCancelRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31374cc3-19a3-3edc-2c32-77744eb207a6"
    }
};
e(dO, "RC_31374cc319a33edc2c3277744eb207a6");
var Hu = dO;
Hu.init();
var ej = class ej extends t.GenericRecordList {
    static getItemType() {
        return Hu
    }
};
e(ej, "RL_28998766f8c046c9335904011fbbefd7");
var tj = ej;
var aj = class aj extends t.GenericRecordList {
    static getItemType() {
        return $
    }
};
e(aj, "RL_28c65a6ca00ce3f3c6a90d7190b6966d");
var rj = aj;
var SO = class SO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("National_identity_card", "national_identity_cardAttr", "National_identity_card", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new l)
        }, !0, l)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new SO(new SO.RecordClass({
            national_identity_cardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "82e915cb-6126-9c2e-1fb3-0ed84469e07b"
    }
};
e(SO, "RC_82e915cb61269c2e1fb30ed84469e07b");
var Ju = SO;
Ju.init();
var ij = class ij extends t.GenericRecordList {
    static getItemType() {
        return Ju
    }
};
e(ij, "RL_29080a69ee1ce69b9b697bf94281f9ff");
var sj = ij;
var OO = class OO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Non_participating_jurisdiction", "non_participating_jurisdictionAttr", "Non_participating_jurisdiction2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xt)
        }, !0, xt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new OO(new OO.RecordClass({
            non_participating_jurisdictionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cd5e42a0-793d-8eb6-9fbc-5056fff3f372"
    }
};
e(OO, "RC_cd5e42a0793d8eb69fbc5056fff3f372");
var Yu = OO;
Yu.init();
var oj = class oj extends t.GenericRecordList {
    static getItemType() {
        return Yu
    }
};
e(oj, "RL_296c80117ea3feed92d93a9342c06001");
var nj = oj;
var gO = class gO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventLocationDateTime", "eventLocationDateTimeAttr", "EventLocationDateTime", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kr)
        }, !0, Kr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gO(new gO.RecordClass({
            eventLocationDateTimeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "40447fd0-f693-adcd-3ef5-284b976485b5"
    }
};
e(gO, "RC_40447fd0f693adcd3ef5284b976485b5");
var Zu = gO;
Zu.init();
var uj = class uj extends t.GenericRecordList {
    static getItemType() {
        return Zu
    }
};
e(uj, "RL_29eb97d3b528de402f967238a1044a23");
var cj = uj;
var lj = class lj extends t.GenericRecordList {
    static getItemType() {
        return ei
    }
};
e(lj, "RLIntegerLiteralList");
var pj = lj;
var fj = class fj extends t.GenericRecordList {
    static getItemType() {
        return es
    }
};
e(fj, "RL_2a382b66fe5d14d7973947bc856957a1");
var mj = fj;
var xO = class xO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rs)
        }, !0, rs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xO(new xO.RecordClass({
            dropdownOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2ac88c51-f2d9-ed90-8454-e6a06ffe188e"
    }
};
e(xO, "RC_2ac88c51f2d9ed908454e6a06ffe188e");
var Ku = xO;
Ku.init();
var bO = class bO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Residence", "residenceAttr", "Residence", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wr)
        }, !0, Wr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bO(new bO.RecordClass({
            residenceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b1773f6-e92c-4d29-296f-4e350964dbb2"
    }
};
e(bO, "RC_2b1773f6e92c4d29296f4e350964dbb2");
var Qu = bO;
Qu.init();
var Dj = class Dj extends t.GenericRecordList {
    static getItemType() {
        return Oe
    }
};
e(Dj, "RL_2b1a3419eafdbc343d89f210b76f82c7");
var Tj = Dj;
var yj = class yj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceToken", "serviceTokenAttr", "service_token", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ue)
        }, !0, Ue), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yj, "ST_2ffa7d64546da67e71986ee16644bc99Structure");
var yi = yj;
yi.init();
var RO = class RO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenResponse", "serviceTokenResponseAttr", "ServiceTokenResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yi)
        }, !0, yi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new RO(new RO.RecordClass({
            serviceTokenResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b27eac2-43a7-0dcd-c8d6-ad57a1a8b8af"
    }
};
e(RO, "RC_2b27eac243a70dcdc8d6ad57a1a8b8af");
var $u = RO;
$u.init();
var IO = class IO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Country", "countryAttr", "Country", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new h)
        }, !0, h)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new IO(new IO.RecordClass({
            countryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b30f89d-36a0-d111-2396-86e3e4da5c64"
    }
};
e(IO, "RC_2b30f89d36a0d111239686e3e4da5c64");
var tp = IO;
tp.init();
var dj = class dj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("UseAnimation", "useAnimationAttr", "UseAnimation", !0, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dj, "ST_639b8c480159ce740702f0a0cf3b55a5Structure");
var di = dj;
di.init();
var hO = class hO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_ChartFormat", "legacy_ChartFormatAttr", "Legacy_ChartFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new di)
        }, !0, di)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hO(new hO.RecordClass({
            legacy_ChartFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53"
    }
};
e(hO, "RC_2b9e41428d5c5ca3b04a80be4ce98f53");
var ep = hO;
ep.init();
var Sj = class Sj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api", "apiAttr", "api", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Api_deprecated", "api_deprecatedAttr", "api_deprecated", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Confirmed", "confirmedAttr", "confirmed", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Enabled", "enabledAttr", "enabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Exclude_reports", "exclude_reportsAttr", "exclude_reports", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Expert", "expertAttr", "expert", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Investor", "investorAttr", "investor", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Otp_enabled", "otp_enabledAttr", "otp_enabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Password_change", "password_changeAttr", "password_change", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Push", "pushAttr", "push", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Readonly", "readonlyAttr", "readonly", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Reports", "reportsAttr", "reports", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Reset_pass", "reset_passAttr", "reset_pass", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Sponsored", "sponsoredAttr", "sponsored", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Technical", "technicalAttr", "technical", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Trade_disabled", "trade_disabledAttr", "trade_disabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Trailing", "trailingAttr", "trailing", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Sj, "ST_605da9a1009ce00d8c64718f9c13e284Structure");
var cr = Sj;
cr.init();
var Oj = class Oj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Android", "androidAttr", "android", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Ios", "iosAttr", "ios", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Webtrader_url", "webtrader_urlAttr", "webtrader_url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Windows", "windowsAttr", "windows", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Oj, "ST_b96e8d04448b693f79e4aebf0b6ee4fbStructure");
var ur = Oj;
ur.init();
var gj = class gj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Display_balance", "display_balanceAttr", "display_balance", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Group", "groupAttr", "group", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Landing_company", "landing_companyAttr", "landing_company", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Landing_company_short", "landing_company_shortAttr", "landing_company_short", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage", "leverageAttr", "leverage", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Login", "loginAttr", "login", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Market_type", "market_typeAttr", "market_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product", "productAttr", "product", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Request_timestamp", "request_timestampAttr", "request_timestamp", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Rights", "rightsAttr", "rights", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cr)
        }, !0, cr), this.attr("Server", "serverAttr", "server", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Server_info", "server_infoAttr", "server_info", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new or)
        }, !0, or), this.attr("Sub_account_category", "sub_account_categoryAttr", "sub_account_category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Sub_account_type", "sub_account_typeAttr", "sub_account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("White_label_links", "white_label_linksAttr", "white_label_links", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ur)
        }, !0, ur), this.attr("Is_main_agent", "is_main_agentAttr", "is_main_agent", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Platform", "platformAttr", "paltform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gj, "ST_2361699202fda01d7c8ade7cab583650Structure");
var Lr = gj;
Lr.init();
var bj = class bj extends t.GenericRecordList {
    static getItemType() {
        return Lr
    }
};
e(bj, "RL_d214456dc511920f517885542ecb318a");
var xj = bj;
var Rj = class Rj extends t.GenericRecordList {
    static getItemType() {
        return Lr
    }
};
e(Rj, "RL_d214456dc511920f517885542ecb318a");
var AO = Rj;
var Ij = class Ij extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fe)
        }, !0, Fe), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Mt5_login_list", "mt5_login_listAttr", "mt5_login_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new AO)
        }, !0, AO)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ij, "ST_2f457e0a5b13526850516eea23ae0e9aStructure");
var Si = Ij;
Si.init();
var GO = class GO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetMT5LoginListResponse", "getMT5LoginListResponseAttr", "GetMT5LoginListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Si)
        }, !0, Si)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new GO(new GO.RecordClass({
            getMT5LoginListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5c073669-af4d-1bb9-a059-222c06ae3a49"
    }
};
e(GO, "RC_5c073669af4d1bb9a059222c06ae3a49");
var rp = GO;
rp.init();
var Aj = class Aj extends t.GenericRecordList {
    static getItemType() {
        return rp
    }
};
e(Aj, "RL_2bc6600c37d3f99d4190f0fccf1bad67");
var hj = Aj;
var wO = class wO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Asset_indexItem", "asset_indexItemAttr", "Asset_indexItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Cr)
        }, !0, Cr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wO(new wO.RecordClass({
            asset_indexItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2bf25d62-d530-e43a-49ce-5fb7ed436ea0"
    }
};
e(wO, "RC_2bf25d62d530e43a49ce5fb7ed436ea0");
var ap = wO;
ap.init();
var wj = class wj extends t.GenericRecordList {
    static getItemType() {
        return ru
    }
};
e(wj, "RL_2bf38081f793cc6bdbb750e00466b9fc");
var Gj = wj;
var Bj = class Bj extends t.GenericRecordList {
    static getItemType() {
        return bu
    }
};
e(Bj, "RL_2c050584f5f999c4a429248dacf4dd97");
var Pj = Bj;
var Ej = class Ej extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "Type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ej, "EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord");
var Oi = Ej;
Oi.init();
var PO = class PO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oi)
        }, !0, Oi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new PO(new PO.RecordClass({
            messageStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "63c659b6-dc55-4b0b-4f81-d60382bf5fd6"
    }
};
e(PO, "RC_63c659b6dc554b0b4f81d60382bf5fd6");
var sp = PO;
sp.init();
var Lj = class Lj extends t.GenericRecordList {
    static getItemType() {
        return sp
    }
};
e(Lj, "RL_2c7706a8fd91e45cb8a8b97418bcf4d0");
var Cj = Lj;
var BO = class BO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MenuAction", "menuActionAttr", "MenuAction", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new BO(new BO.RecordClass({
            menuActionAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(BO, "EN_f43f179caddf7f7b68b18272d67285d6EntityRecord");
var gi = BO;
gi.init();
var EO = class EO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MenuAction", "menuActionAttr", "MenuAction", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gi)
        }, !0, gi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new EO(new EO.RecordClass({
            menuActionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "954cd123-1210-e70f-33f1-84017bf580ac"
    }
};
e(EO, "RC_954cd1231210e70f33f184017bf580ac");
var ip = EO;
ip.init();
var qj = class qj extends t.GenericRecordList {
    static getItemType() {
        return ip
    }
};
e(qj, "RL_2cadeb0c6f7df3cfbe06d89edb556615");
var vj = qj;
var jj = class jj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_confirm", "order_confirmAttr", "p2p_order_confirm", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jj, "ST_7bb5c8caef220d73a9d6936569f73c53Structure");
var xi = jj;
xi.init();
var CO = class CO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmResponse", "p2POrderConfirmResponseAttr", "P2POrderConfirmResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xi)
        }, !0, xi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new CO(new CO.RecordClass({
            p2POrderConfirmResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2ccf07e5-bcc4-c939-49f8-4625930efb62"
    }
};
e(CO, "RC_2ccf07e5bcc4c93949f84625930efb62");
var np = CO;
np.init();
var Uj = class Uj extends t.GenericRecordList {
    static getItemType() {
        return Da
    }
};
e(Uj, "RL_2d3a0cd7107cbee4ce6ed7f8111ba6e6");
var kj = Uj;
var LO = class LO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseCtrader", "postTradingPlatformAvailableAccountResponseCtraderAttr", "PostTradingPlatformAvailableAccountResponseCtrader", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ci)
        }, !0, ci)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new LO(new LO.RecordClass({
            postTradingPlatformAvailableAccountResponseCtraderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f4690c82-1393-576c-d1cd-e60070daa64f"
    }
};
e(LO, "RC_f4690c821393576cd1cde60070daa64f");
var op = LO;
op.init();
var Vj = class Vj extends t.GenericRecordList {
    static getItemType() {
        return op
    }
};
e(Vj, "RL_2d46a49728c41d7be4ec88ca0d4e8266");
var Fj = Vj;
var vO = class vO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Limit", "limitAttr", "Limit3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new O)
        }, !0, O)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vO(new vO.RecordClass({
            limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "441f684d-3efb-a387-3565-54fe17c62bec"
    }
};
e(vO, "RC_441f684d3efba387356554fe17c62bec");
var cp = vO;
cp.init();
var Nj = class Nj extends t.GenericRecordList {
    static getItemType() {
        return cp
    }
};
e(Nj, "RL_2d74cc19c3ab1a029c34be65ea3b289a");
var _j = Nj;
var qO = class qO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $)
        }, !0, $)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qO(new qO.RecordClass({
            errorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ff8454b-f93a-3174-f295-03bcb1750130"
    }
};
e(qO, "RC_9ff8454bf93a3174f29503bcb1750130");
var up = qO;
up.init();
var zj = class zj extends t.GenericRecordList {
    static getItemType() {
        return up
    }
};
e(zj, "RL_2db239cd8a3a4c3591211d902015d1ed");
var Mj = zj;
var Wj = class Wj extends t.GenericRecordList {
    static getItemType() {
        return Fo
    }
};
e(Wj, "RL_2dd84e3677ccc0ce86d887b1ce011274");
var Xj = Wj;
var Jj = class Jj extends t.GenericRecordList {
    static getItemType() {
        return Yt
    }
};
e(Jj, "RL_2e550e70d4f60fcf474568418d9dcf73");
var Hj = Jj;
var jO = class jO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fiat", "fiatAttr", "Fiat3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new R)
        }, !0, R)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jO(new jO.RecordClass({
            fiatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "2e6da4a8-98d5-5ae9-6aab-51b6e09d6a22"
    }
};
e(jO, "RC_2e6da4a898d55ae96aab51b6e09d6a22");
var pp = jO;
pp.init();
var Zj = class Zj extends t.GenericRecordList {
    static getItemType() {
        return $u
    }
};
e(Zj, "RL_2e8ff77664b8f7bc11c223ef3badd7c7");
var Yj = Zj;
var Kj = class Kj extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Kj, "EN_c206e072354abd28c734a686a107801eEntityRecord");
var bi = Kj;
bi.init();
var kO = class kO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("XAxisValuesType_v1", "xAxisValuesType_v1Attr", "XAxisValuesType_v1", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bi)
        }, !0, bi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kO(new kO.RecordClass({
            xAxisValuesType_v1Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "700a042c-18a5-2538-bbda-09226917700a"
    }
};
e(kO, "RC_700a042c18a52538bbda09226917700a");
var lp = kO;
lp.init();
var $j = class $j extends t.GenericRecordList {
    static getItemType() {
        return lp
    }
};
e($j, "RL_2ed820148ec0066544c2529736074c83");
var Qj = $j;
var UO = class UO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatus", "kYCAuthStatusAttr", "kyc_auth_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new we)
        }, !0, we)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new UO(new UO.RecordClass({
            kYCAuthStatusAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(UO, "ST_4820561c523dc84c471446a46147a065Structure");
var Ri = UO;
Ri.init();
var FO = class FO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYCAuthStatusResponse", "kYCAuthStatusResponseAttr", "KYCAuthStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ri)
        }, !0, Ri)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new FO(new FO.RecordClass({
            kYCAuthStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "98e502ff-c9bd-2440-1241-ef277fce403c"
    }
};
e(FO, "RC_98e502ffc9bd24401241ef277fce403c");
var mp = FO;
mp.init();
var ek = class ek extends t.GenericRecordList {
    static getItemType() {
        return mp
    }
};
e(ek, "RL_2f1c969e24c9ba731c5c1c39ceea50ec");
var tk = ek;
var VO = class VO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_proposal_subscription", "max_proposal_subscriptionAttr", "Max_proposal_subscription3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ut)
        }, !0, Ut)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new VO(new VO.RecordClass({
            max_proposal_subscriptionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "71e7722a-7761-502e-1fc1-ee9175838bd9"
    }
};
e(VO, "RC_71e7722a7761502e1fc1ee9175838bd9");
var fp = VO;
fp.init();
var ak = class ak extends t.GenericRecordList {
    static getItemType() {
        return fp
    }
};
e(ak, "RL_2f43bfa975a498b49479ea4ecbc98b48");
var rk = ak;
var _O = class _O extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AccountPurpose", "accountPurposeAttr", "AccountPurpose", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oa)
        }, !0, Oa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _O(new _O.RecordClass({
            accountPurposeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ce6ceb3f-c099-6999-c0af-a122cb74649e"
    }
};
e(_O, "RC_ce6ceb3fc0996999c0afa122cb74649e");
var Tp = _O;
Tp.init();
var ik = class ik extends t.GenericRecordList {
    static getItemType() {
        return Tp
    }
};
e(ik, "RL_301842845c94a0162dda3fccbf6857b2");
var sk = ik;
var NO = class NO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mt)
        }, !0, Mt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new NO(new NO.RecordClass({
            mt5_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a9f1d8f-cf08-e196-ae4f-cb70fce3ae4d"
    }
};
e(NO, "RC_7a9f1d8fcf08e196ae4fcb70fce3ae4d");
var Dp = NO;
Dp.init();
var ok = class ok extends t.GenericRecordList {
    static getItemType() {
        return Dp
    }
};
e(ok, "RL_30996d47f459830cdd860ac4090ef40a");
var nk = ok;
var ck = class ck extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Revenuebasis", "revenuebasisAttr", "Revenuebasis", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(ck, "EN_3b02862a28f878d1e3184c6f668529b4EntityRecord");
var wa = ck;
wa.init();
var pk = class pk extends t.GenericRecordList {
    static getItemType() {
        return wa
    }
};
e(pk, "RL_30a372c728c5d10f2ed9cd29e9029837");
var uk = pk;
var MO = class MO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordResponse", "postResetPasswordResponseAttr", "PostResetPasswordResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Is)
        }, !0, Is)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new MO(new MO.RecordClass({
            postResetPasswordResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "30f7e77f-4f85-f62f-55a7-49d558899db1"
    }
};
e(MO, "RC_30f7e77f4f85f62f55a749d558899db1");
var yp = MO;
yp.init();
var i = {
    staticEntities: {}
};
i.staticEntities.carouselProvider = {};
Object.defineProperty(i.staticEntities.carouselProvider, "splide", {
    get: e(function() {
        return "Splide"
    }, "get")
});
i.staticEntities.animationType = {};
Object.defineProperty(i.staticEntities.animationType, "topToBottom", {
    get: e(function() {
        return "top-to-bottom"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "bounce", {
    get: e(function() {
        return "bounce"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "fadeIn", {
    get: e(function() {
        return "fade-in"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "scaleDown", {
    get: e(function() {
        return "scale-down"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "scale", {
    get: e(function() {
        return "scale"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "spinner", {
    get: e(function() {
        return "spinner"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "bottomToTop", {
    get: e(function() {
        return "bottom-to-top"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "rightToLeft", {
    get: e(function() {
        return "right-to-left"
    }, "get")
});
Object.defineProperty(i.staticEntities.animationType, "leftToRight", {
    get: e(function() {
        return "left-to-right"
    }, "get")
});
i.staticEntities.speed = {};
Object.defineProperty(i.staticEntities.speed, "fast", {
    get: e(function() {
        return "fast"
    }, "get")
});
Object.defineProperty(i.staticEntities.speed, "normal", {
    get: e(function() {
        return "normal"
    }, "get")
});
Object.defineProperty(i.staticEntities.speed, "slow", {
    get: e(function() {
        return "slow"
    }, "get")
});
i.staticEntities.sideMenuBehavior = {};
Object.defineProperty(i.staticEntities.sideMenuBehavior, "visible", {
    get: e(function() {
        return "aside-visible"
    }, "get")
});
Object.defineProperty(i.staticEntities.sideMenuBehavior, "expandable", {
    get: e(function() {
        return "aside-expandable"
    }, "get")
});
Object.defineProperty(i.staticEntities.sideMenuBehavior, "overlay", {
    get: e(function() {
        return "aside-overlay"
    }, "get")
});
i.staticEntities.gradient = {};
Object.defineProperty(i.staticEntities.gradient, "linearHorizontal", {
    get: e(function() {
        return "LinearHorizontal"
    }, "get")
});
Object.defineProperty(i.staticEntities.gradient, "radial", {
    get: e(function() {
        return "Radial"
    }, "get")
});
Object.defineProperty(i.staticEntities.gradient, "linearDiagonally", {
    get: e(function() {
        return "LinearDiagonally"
    }, "get")
});
Object.defineProperty(i.staticEntities.gradient, "linearVertical", {
    get: e(function() {
        return "LinearVertical"
    }, "get")
});
i.staticEntities.size = {};
Object.defineProperty(i.staticEntities.size, "medium", {
    get: e(function() {
        return "medium"
    }, "get")
});
Object.defineProperty(i.staticEntities.size, "small", {
    get: e(function() {
        return "small"
    }, "get")
});
i.staticEntities.deviceResponsive = {};
Object.defineProperty(i.staticEntities.deviceResponsive, "desktopAndTablet", {
    get: e(function() {
        return "DesktopAndTablet"
    }, "get")
});
Object.defineProperty(i.staticEntities.deviceResponsive, "tabletOnly", {
    get: e(function() {
        return "TabletOnly"
    }, "get")
});
Object.defineProperty(i.staticEntities.deviceResponsive, "allDevices", {
    get: e(function() {
        return "AllDevices"
    }, "get")
});
Object.defineProperty(i.staticEntities.deviceResponsive, "phoneOnly", {
    get: e(function() {
        return "PhoneOnly"
    }, "get")
});
Object.defineProperty(i.staticEntities.deviceResponsive, "tabletAndPhone", {
    get: e(function() {
        return "TabletAndPhone"
    }, "get")
});
Object.defineProperty(i.staticEntities.deviceResponsive, "desktopOnly", {
    get: e(function() {
        return "DesktopOnly"
    }, "get")
});
i.staticEntities.gutterSize = {};
Object.defineProperty(i.staticEntities.gutterSize, "xXLarge", {
    get: e(function() {
        return "gutter-xxl"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "medium", {
    get: e(function() {
        return "gutter-m"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "none", {
    get: e(function() {
        return "gutter-none"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "extraLarge", {
    get: e(function() {
        return "gutter-xl"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "small", {
    get: e(function() {
        return "gutter-s"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "large", {
    get: e(function() {
        return "gutter-l"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "base", {
    get: e(function() {
        return "gutter-base"
    }, "get")
});
Object.defineProperty(i.staticEntities.gutterSize, "extraSmall", {
    get: e(function() {
        return "gutter-xs"
    }, "get")
});
i.staticEntities.month = {};
Object.defineProperty(i.staticEntities.month, "june", {
    get: e(function() {
        return "June"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "march", {
    get: e(function() {
        return "March"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "december", {
    get: e(function() {
        return "December"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "february", {
    get: e(function() {
        return "February"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "may", {
    get: e(function() {
        return "May"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "april", {
    get: e(function() {
        return "April"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "november", {
    get: e(function() {
        return "November"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "august", {
    get: e(function() {
        return "August"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "january", {
    get: e(function() {
        return "January"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "july", {
    get: e(function() {
        return "July"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "september", {
    get: e(function() {
        return "September"
    }, "get")
});
Object.defineProperty(i.staticEntities.month, "october", {
    get: e(function() {
        return "October"
    }, "get")
});
i.staticEntities.datePickerLanguage = {};
Object.defineProperty(i.staticEntities.datePickerLanguage, "japanese", {
    get: e(function() {
        return "ja"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "dutchFlemish", {
    get: e(function() {
        return "nl"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "czech", {
    get: e(function() {
        return "cs"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "indonesian", {
    get: e(function() {
        return "id"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "punjabiPanjabi", {
    get: e(function() {
        return "pa"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "latvian", {
    get: e(function() {
        return "lv"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "chinese", {
    get: e(function() {
        return "zh"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "polish", {
    get: e(function() {
        return "pl"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "estonian", {
    get: e(function() {
        return "et"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "catalanValencian", {
    get: e(function() {
        return "ca"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "malay", {
    get: e(function() {
        return "ms"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "slovak", {
    get: e(function() {
        return "sk"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
    get: e(function() {
        return "si"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "danish", {
    get: e(function() {
        return "da"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "english", {
    get: e(function() {
        return "en"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "hungarian", {
    get: e(function() {
        return "hu"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "norwegianNynorsk", {
    get: e(function() {
        return "nn"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "norwegianBokmal", {
    get: e(function() {
        return "nb"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "arabic", {
    get: e(function() {
        return "ar"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "faroese", {
    get: e(function() {
        return "fo"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "centralKhmer", {
    get: e(function() {
        return "km"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
    get: e(function() {
        return "ro"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "chineseTraditional", {
    get: e(function() {
        return "zh_tw"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "norwegian", {
    get: e(function() {
        return "no"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "esperanto", {
    get: e(function() {
        return "eo"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "croatian", {
    get: e(function() {
        return "hr"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "albanian", {
    get: e(function() {
        return "sq"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "korean", {
    get: e(function() {
        return "ko"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "thai", {
    get: e(function() {
        return "th"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "mongolian", {
    get: e(function() {
        return "mn"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "spanishCastilian", {
    get: e(function() {
        return "es"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "slovenian", {
    get: e(function() {
        return "sl"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "vietnamese", {
    get: e(function() {
        return "vi"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "bosnian", {
    get: e(function() {
        return "bs"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "french", {
    get: e(function() {
        return "fr"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "turkish", {
    get: e(function() {
        return "tr"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "russian", {
    get: e(function() {
        return "ru"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "serbian", {
    get: e(function() {
        return "sr"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "lithuanian", {
    get: e(function() {
        return "lt"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "portuguese", {
    get: e(function() {
        return "pt"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "hebrew", {
    get: e(function() {
        return "he"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "uzbek", {
    get: e(function() {
        return "uz"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "burmese", {
    get: e(function() {
        return "my"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "italian", {
    get: e(function() {
        return "it"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "georgian", {
    get: e(function() {
        return "ka"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "swedish", {
    get: e(function() {
        return "sv"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "azerbaijani", {
    get: e(function() {
        return "az"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "hindi", {
    get: e(function() {
        return "hi"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "bulgarian", {
    get: e(function() {
        return "bg"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "finnish", {
    get: e(function() {
        return "fi"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "persian", {
    get: e(function() {
        return "fa"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "armenian", {
    get: e(function() {
        return "hy"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "german", {
    get: e(function() {
        return "de"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "belarusian", {
    get: e(function() {
        return "be"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "welsh", {
    get: e(function() {
        return "cy"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "ukrainian", {
    get: e(function() {
        return "uk"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "bengali", {
    get: e(function() {
        return "bn"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerLanguage, "macedonian", {
    get: e(function() {
        return "mk"
    }, "get")
});
i.staticEntities.dEPRECATED_Color = {};
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "white", {
    get: e(function() {
        return "white"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "blue", {
    get: e(function() {
        return "blue"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "black", {
    get: e(function() {
        return "black"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "violet", {
    get: e(function() {
        return "violet"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "none", {
    get: e(function() {
        return "default"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "orange", {
    get: e(function() {
        return "orange"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "red", {
    get: e(function() {
        return "red"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "primaryColor", {
    get: e(function() {
        return "primary-color"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "green", {
    get: e(function() {
        return "green"
    }, "get")
});
Object.defineProperty(i.staticEntities.dEPRECATED_Color, "grey", {
    get: e(function() {
        return "grey"
    }, "get")
});
i.staticEntities.orientation = {};
Object.defineProperty(i.staticEntities.orientation, "horizontal", {
    get: e(function() {
        return "horizontal"
    }, "get")
});
Object.defineProperty(i.staticEntities.orientation, "vertical", {
    get: e(function() {
        return "vertical"
    }, "get")
});
i.staticEntities.datePickerTimeFormat = {};
Object.defineProperty(i.staticEntities.datePickerTimeFormat, "disabled", {
    get: e(function() {
        return "disabled"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerTimeFormat, "time24hFormat", {
    get: e(function() {
        return "24"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerTimeFormat, "time12hFormat", {
    get: e(function() {
        return "12"
    }, "get")
});
i.staticEntities.accordionIconType = {};
Object.defineProperty(i.staticEntities.accordionIconType, "custom", {
    get: e(function() {
        return "Custom"
    }, "get")
});
Object.defineProperty(i.staticEntities.accordionIconType, "plusMinus", {
    get: e(function() {
        return "PlusMinus"
    }, "get")
});
Object.defineProperty(i.staticEntities.accordionIconType, "caret", {
    get: e(function() {
        return "Caret"
    }, "get")
});
i.staticEntities.direction = {};
Object.defineProperty(i.staticEntities.direction, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(i.staticEntities.direction, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
i.staticEntities.breakColumns = {};
Object.defineProperty(i.staticEntities.breakColumns, "none", {
    get: e(function() {
        return "break-none"
    }, "get")
});
Object.defineProperty(i.staticEntities.breakColumns, "first", {
    get: e(function() {
        return "break-first"
    }, "get")
});
Object.defineProperty(i.staticEntities.breakColumns, "all", {
    get: e(function() {
        return "break-all"
    }, "get")
});
Object.defineProperty(i.staticEntities.breakColumns, "middle", {
    get: e(function() {
        return "break-middle"
    }, "get")
});
Object.defineProperty(i.staticEntities.breakColumns, "last", {
    get: e(function() {
        return "break-last"
    }, "get")
});
i.staticEntities.rangeSliderType = {};
Object.defineProperty(i.staticEntities.rangeSliderType, "single", {
    get: e(function() {
        return "single"
    }, "get")
});
Object.defineProperty(i.staticEntities.rangeSliderType, "interval", {
    get: e(function() {
        return "interval"
    }, "get")
});
i.staticEntities.shape = {};
Object.defineProperty(i.staticEntities.shape, "sharp", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(i.staticEntities.shape, "softRounded", {
    get: e(function() {
        return "soft"
    }, "get")
});
Object.defineProperty(i.staticEntities.shape, "rounded", {
    get: e(function() {
        return "rounded"
    }, "get")
});
i.staticEntities.stackedCardsPosition = {};
Object.defineProperty(i.staticEntities.stackedCardsPosition, "bottom", {
    get: e(function() {
        return "Bottom"
    }, "get")
});
Object.defineProperty(i.staticEntities.stackedCardsPosition, "top", {
    get: e(function() {
        return "Top"
    }, "get")
});
Object.defineProperty(i.staticEntities.stackedCardsPosition, "none", {
    get: e(function() {
        return "None"
    }, "get")
});
i.staticEntities.carouselDirection = {};
Object.defineProperty(i.staticEntities.carouselDirection, "rightToLeft", {
    get: e(function() {
        return "RightToLeft"
    }, "get")
});
Object.defineProperty(i.staticEntities.carouselDirection, "leftToRight", {
    get: e(function() {
        return "LeftToRight"
    }, "get")
});
i.staticEntities.rangeSliderProvider = {};
Object.defineProperty(i.staticEntities.rangeSliderProvider, "noUiSlider", {
    get: e(function() {
        return "noUiSlider"
    }, "get")
});
i.staticEntities.registeredCallbackEvents = {};
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "carousel_OnSlideMoved", {
    get: e(function() {
        return "OnSlideMoved"
    }, "get")
});
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "onChange", {
    get: e(function() {
        return "OnChange"
    }, "get")
});
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "initialized", {
    get: e(function() {
        return "Initialized"
    }, "get")
});
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "rangeSlider_OnValueChange", {
    get: e(function() {
        return "OnValueChange"
    }, "get")
});
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "onSelected", {
    get: e(function() {
        return "OnSelected"
    }, "get")
});
Object.defineProperty(i.staticEntities.registeredCallbackEvents, "onToggle", {
    get: e(function() {
        return "OnToggle"
    }, "get")
});
i.staticEntities.autoplay = {};
Object.defineProperty(i.staticEntities.autoplay, "disabled", {
    get: e(function() {
        return "disabled"
    }, "get")
});
Object.defineProperty(i.staticEntities.autoplay, "slow", {
    get: e(function() {
        return "slow"
    }, "get")
});
Object.defineProperty(i.staticEntities.autoplay, "fast", {
    get: e(function() {
        return "fast"
    }, "get")
});
Object.defineProperty(i.staticEntities.autoplay, "normal", {
    get: e(function() {
        return "normal"
    }, "get")
});
i.staticEntities.position = {};
Object.defineProperty(i.staticEntities.position, "top", {
    get: e(function() {
        return "top"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "bottomRight", {
    get: e(function() {
        return "bottom-right"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "bottomLeft", {
    get: e(function() {
        return "bottom-left"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "topLeft", {
    get: e(function() {
        return "top-left"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "topRight", {
    get: e(function() {
        return "top-right"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "center", {
    get: e(function() {
        return "center"
    }, "get")
});
Object.defineProperty(i.staticEntities.position, "bottom", {
    get: e(function() {
        return "bottom"
    }, "get")
});
i.staticEntities.identityProvider = {};
Object.defineProperty(i.staticEntities.identityProvider, "facebook", {
    get: e(function() {
        return "facebook"
    }, "get")
});
Object.defineProperty(i.staticEntities.identityProvider, "google", {
    get: e(function() {
        return "google"
    }, "get")
});
Object.defineProperty(i.staticEntities.identityProvider, "apple", {
    get: e(function() {
        return "apple"
    }, "get")
});
i.staticEntities.trigger = {};
Object.defineProperty(i.staticEntities.trigger, "onClick", {
    get: e(function() {
        return "onclick"
    }, "get")
});
Object.defineProperty(i.staticEntities.trigger, "onHover", {
    get: e(function() {
        return "onhover"
    }, "get")
});
i.staticEntities.space = {};
Object.defineProperty(i.staticEntities.space, "large", {
    get: e(function() {
        return "l"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "medium", {
    get: e(function() {
        return "m"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "xXLarge", {
    get: e(function() {
        return "xxl"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "extraSmall", {
    get: e(function() {
        return "xs"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "small", {
    get: e(function() {
        return "s"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "base", {
    get: e(function() {
        return "base"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "extraLarge", {
    get: e(function() {
        return "xl"
    }, "get")
});
Object.defineProperty(i.staticEntities.space, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
i.staticEntities.alert = {};
Object.defineProperty(i.staticEntities.alert, "success", {
    get: e(function() {
        return "alert-success"
    }, "get")
});
Object.defineProperty(i.staticEntities.alert, "error", {
    get: e(function() {
        return "alert-error"
    }, "get")
});
Object.defineProperty(i.staticEntities.alert, "info", {
    get: e(function() {
        return "alert-info"
    }, "get")
});
Object.defineProperty(i.staticEntities.alert, "warning", {
    get: e(function() {
        return "alert-warning"
    }, "get")
});
i.staticEntities.floatingPosition = {};
Object.defineProperty(i.staticEntities.floatingPosition, "leftStart", {
    get: e(function() {
        return "left-start"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "topEnd", {
    get: e(function() {
        return "top-end"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "top", {
    get: e(function() {
        return "top"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "bottomEnd", {
    get: e(function() {
        return "bottom-end"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "auto", {
    get: e(function() {
        return "auto"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "leftEnd", {
    get: e(function() {
        return "left-end"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "bottomStart", {
    get: e(function() {
        return "bottom-start"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "rightEnd", {
    get: e(function() {
        return "right-end"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "topStart", {
    get: e(function() {
        return "top-start"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "rightStart", {
    get: e(function() {
        return "right-start"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "center", {
    get: e(function() {
        return "center"
    }, "get")
});
Object.defineProperty(i.staticEntities.floatingPosition, "bottom", {
    get: e(function() {
        return "bottom"
    }, "get")
});
i.staticEntities.booleanTypes = {};
Object.defineProperty(i.staticEntities.booleanTypes, "true", {
    get: e(function() {
        return "true"
    }, "get")
});
Object.defineProperty(i.staticEntities.booleanTypes, "unset", {
    get: e(function() {
        return "unset"
    }, "get")
});
Object.defineProperty(i.staticEntities.booleanTypes, "false", {
    get: e(function() {
        return "false"
    }, "get")
});
i.staticEntities.menuAction = {};
Object.defineProperty(i.staticEntities.menuAction, "menu", {
    get: e(function() {
        return "Menu"
    }, "get")
});
Object.defineProperty(i.staticEntities.menuAction, "auto", {
    get: e(function() {
        return "Auto"
    }, "get")
});
Object.defineProperty(i.staticEntities.menuAction, "hidden", {
    get: e(function() {
        return "Hidden"
    }, "get")
});
Object.defineProperty(i.staticEntities.menuAction, "back", {
    get: e(function() {
        return "Back"
    }, "get")
});
i.staticEntities.accordionIconPosition = {};
Object.defineProperty(i.staticEntities.accordionIconPosition, "left", {
    get: e(function() {
        return "left"
    }, "get")
});
Object.defineProperty(i.staticEntities.accordionIconPosition, "right", {
    get: e(function() {
        return "right"
    }, "get")
});
i.staticEntities.datePickerCalendarType = {};
Object.defineProperty(i.staticEntities.datePickerCalendarType, "single", {
    get: e(function() {
        return "single"
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerCalendarType, "range", {
    get: e(function() {
        return "range"
    }, "get")
});
i.staticEntities.logType = {};
Object.defineProperty(i.staticEntities.logType, "performance", {
    get: e(function() {
        return "Performance"
    }, "get")
});
Object.defineProperty(i.staticEntities.logType, "debug", {
    get: e(function() {
        return "Debug"
    }, "get")
});
Object.defineProperty(i.staticEntities.logType, "error", {
    get: e(function() {
        return "Error"
    }, "get")
});
Object.defineProperty(i.staticEntities.logType, "general", {
    get: e(function() {
        return "General"
    }, "get")
});
Object.defineProperty(i.staticEntities.logType, "warning", {
    get: e(function() {
        return "Warning"
    }, "get")
});
i.staticEntities.progressType = {};
Object.defineProperty(i.staticEntities.progressType, "bar", {
    get: e(function() {
        return "Bar"
    }, "get")
});
Object.defineProperty(i.staticEntities.progressType, "circle", {
    get: e(function() {
        return "Circle"
    }, "get")
});
Object.defineProperty(i.staticEntities.progressType, "circleFraction", {
    get: e(function() {
        return "CircleFraction"
    }, "get")
});
i.staticEntities.messageStatus = {};
Object.defineProperty(i.staticEntities.messageStatus, "hidden", {
    get: e(function() {
        return "Hidden"
    }, "get")
});
Object.defineProperty(i.staticEntities.messageStatus, "read", {
    get: e(function() {
        return "Read"
    }, "get")
});
Object.defineProperty(i.staticEntities.messageStatus, "sent", {
    get: e(function() {
        return "Sent"
    }, "get")
});
Object.defineProperty(i.staticEntities.messageStatus, "received", {
    get: e(function() {
        return "Received"
    }, "get")
});
i.staticEntities.scrollbarStyle = {};
Object.defineProperty(i.staticEntities.scrollbarStyle, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(i.staticEntities.scrollbarStyle, "default", {
    get: e(function() {
        return "default"
    }, "get")
});
Object.defineProperty(i.staticEntities.scrollbarStyle, "compact", {
    get: e(function() {
        return "compact"
    }, "get")
});
i.staticEntities.dropdownProvider = {};
Object.defineProperty(i.staticEntities.dropdownProvider, "oSUIComponents", {
    get: e(function() {
        return "osui-components"
    }, "get")
});
Object.defineProperty(i.staticEntities.dropdownProvider, "virtualSelect", {
    get: e(function() {
        return "virtual-select"
    }, "get")
});
i.staticEntities.color = {};
Object.defineProperty(i.staticEntities.color, "neutral9", {
    get: e(function() {
        return "neutral-9"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "grape", {
    get: e(function() {
        return "grape"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral7", {
    get: e(function() {
        return "neutral-7"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral10", {
    get: e(function() {
        return "neutral-10"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "teal", {
    get: e(function() {
        return "teal"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "primary", {
    get: e(function() {
        return "primary"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral4", {
    get: e(function() {
        return "neutral-4"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral8", {
    get: e(function() {
        return "neutral-8"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "indigo", {
    get: e(function() {
        return "indigo"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "orange", {
    get: e(function() {
        return "orange"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "lime", {
    get: e(function() {
        return "lime"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "cyan", {
    get: e(function() {
        return "cyan"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "secondary", {
    get: e(function() {
        return "secondary"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral6", {
    get: e(function() {
        return "neutral-6"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "yellow", {
    get: e(function() {
        return "yellow"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral2", {
    get: e(function() {
        return "neutral-2"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral1", {
    get: e(function() {
        return "neutral-1"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral3", {
    get: e(function() {
        return "neutral-3"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "transparent", {
    get: e(function() {
        return "transparent"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "violet", {
    get: e(function() {
        return "violet"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "blue", {
    get: e(function() {
        return "blue"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral5", {
    get: e(function() {
        return "neutral-5"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "red", {
    get: e(function() {
        return "red"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "pink", {
    get: e(function() {
        return "pink"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "green", {
    get: e(function() {
        return "green"
    }, "get")
});
Object.defineProperty(i.staticEntities.color, "neutral0", {
    get: e(function() {
        return "neutral-0"
    }, "get")
});
i.staticEntities.columnBreak = {};
Object.defineProperty(i.staticEntities.columnBreak, "breakMiddle", {
    get: e(function() {
        return "break-middle"
    }, "get")
});
Object.defineProperty(i.staticEntities.columnBreak, "breakAll", {
    get: e(function() {
        return "break-all"
    }, "get")
});
Object.defineProperty(i.staticEntities.columnBreak, "breakNone", {
    get: e(function() {
        return "break-none"
    }, "get")
});
Object.defineProperty(i.staticEntities.columnBreak, "breakLast", {
    get: e(function() {
        return "break-last"
    }, "get")
});
Object.defineProperty(i.staticEntities.columnBreak, "breakFirst", {
    get: e(function() {
        return "break-first"
    }, "get")
});
i.staticEntities.dropdownType = {};
Object.defineProperty(i.staticEntities.dropdownType, "tags", {
    get: e(function() {
        return "tags"
    }, "get")
});
Object.defineProperty(i.staticEntities.dropdownType, "serverSide", {
    get: e(function() {
        return "server-side"
    }, "get")
});
Object.defineProperty(i.staticEntities.dropdownType, "search", {
    get: e(function() {
        return "search"
    }, "get")
});
i.staticEntities.steps = {};
Object.defineProperty(i.staticEntities.steps, "next", {
    get: e(function() {
        return "next"
    }, "get")
});
Object.defineProperty(i.staticEntities.steps, "past", {
    get: e(function() {
        return "past"
    }, "get")
});
Object.defineProperty(i.staticEntities.steps, "active", {
    get: e(function() {
        return "active"
    }, "get")
});
i.staticEntities.datePickerProvider = {};
Object.defineProperty(i.staticEntities.datePickerProvider, "flatpickr", {
    get: e(function() {
        return "flatpickr"
    }, "get")
});
i.staticEntities.carouselNavigation = {};
Object.defineProperty(i.staticEntities.carouselNavigation, "dots", {
    get: e(function() {
        return "dots"
    }, "get")
});
Object.defineProperty(i.staticEntities.carouselNavigation, "none", {
    get: e(function() {
        return "none"
    }, "get")
});
Object.defineProperty(i.staticEntities.carouselNavigation, "arrows", {
    get: e(function() {
        return "arrows"
    }, "get")
});
Object.defineProperty(i.staticEntities.carouselNavigation, "both", {
    get: e(function() {
        return "both"
    }, "get")
});
i.staticEntities.videoState = {};
Object.defineProperty(i.staticEntities.videoState, "unstarted", {
    get: e(function() {
        return "Unstarted"
    }, "get")
});
Object.defineProperty(i.staticEntities.videoState, "paused", {
    get: e(function() {
        return "Paused"
    }, "get")
});
Object.defineProperty(i.staticEntities.videoState, "ended", {
    get: e(function() {
        return "Ended"
    }, "get")
});
Object.defineProperty(i.staticEntities.videoState, "playing", {
    get: e(function() {
        return "Playing"
    }, "get")
});
i.staticEntities.datePickerWeekDay = {};
Object.defineProperty(i.staticEntities.datePickerWeekDay, "monday", {
    get: e(function() {
        return 1
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "saturday", {
    get: e(function() {
        return 6
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "sunday", {
    get: e(function() {
        return 0
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "friday", {
    get: e(function() {
        return 5
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "tuesday", {
    get: e(function() {
        return 2
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "thursday", {
    get: e(function() {
        return 4
    }, "get")
});
Object.defineProperty(i.staticEntities.datePickerWeekDay, "wednesday", {
    get: e(function() {
        return 3
    }, "get")
});
var Ii = i.staticEntities;
var lk = class lk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("MinDate", "minDateAttr", "MinDate", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("MaxDate", "maxDateAttr", "MaxDate", !1, !1, t.DataTypes.Date, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", !1, !1, t.DataTypes.Integer, function() {
            return Ii.datePickerWeekDay.sunday
        }, !0), this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lk, "ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure");
var hi = lk;
hi.init();
var zO = class zO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new hi)
        }, !0, hi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zO(new zO.RecordClass({
            datePickerRangeOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e"
    }
};
e(zO, "RC_310dae2b4d3a1f1ded7570a6ee74f16e");
var dp = zO;
dp.init();
var XO = class XO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Url_parameter", "url_parameterAttr", "Url_parameter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new te)
        }, !0, te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new XO(new XO.RecordClass({
            url_parameterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "31254dd0-eceb-66de-83ea-4d3f76038ef7"
    }
};
e(XO, "RC_31254dd0eceb66de83ea4d3f76038ef7");
var Sp = XO;
Sp.init();
var mk = class mk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", !1, !1, t.DataTypes.Text, function() {
            return "There are no options to show."
        }, !0), this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", !1, !1, t.DataTypes.Text, function() {
            return "Search..."
        }, !0), this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", !1, !1, t.DataTypes.Text, function() {
            return "There are no options to show."
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mk, "ST_34444d0742578c128ebc8b2594439346Structure");
var Ai = mk;
Ai.init();
var WO = class WO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ai)
        }, !0, Ai)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new WO(new WO.RecordClass({
            dropdownTagsOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d01ba74-7615-bc6d-c01c-586f0b43450a"
    }
};
e(WO, "RC_4d01ba747615bc6dc01c586f0b43450a");
var Op = WO;
Op.init();
var Tk = class Tk extends t.GenericRecordList {
    static getItemType() {
        return Op
    }
};
e(Tk, "RL_3168a7a1678dfe8f6720ee5fb1eb68a1");
var fk = Tk;
var yk = class yk extends t.GenericRecordList {
    static getItemType() {
        return $e
    }
};
e(yk, "RL_31d7615454c0155a64f826d4e0cf4cb5");
var Dk = yk;
var dk = class dk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InitialDate", "initialDateAttr", "InitialDate", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("MinDate", "minDateAttr", "MinDate", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("MaxDate", "maxDateAttr", "MaxDate", !1, !1, t.DataTypes.DateTime, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", !1, !1, t.DataTypes.Integer, function() {
            return Ii.datePickerWeekDay.sunday
        }, !0), this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dk, "ST_bc4abb4233d9ce894e855c520a20c76fStructure");
var Gi = dk;
Gi.init();
var HO = class HO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gi)
        }, !0, Gi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new HO(new HO.RecordClass({
            datePickerOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "327e36bc-408e-dd04-6ca4-0df8a4e734bb"
    }
};
e(HO, "RC_327e36bc408edd046ca40df8a4e734bb");
var gp = HO;
gp.init();
var Sk = class Sk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_category", "account_categoryAttr", "account_category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Broker", "brokerAttr", "broker", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Created_at", "created_atAttr", "created_at", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency_type", "currency_typeAttr", "currency_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_disabled", "is_disabledAttr", "is_disabled", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Is_virtual", "is_virtualAttr", "is_virtual", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Sk, "ST_5d64f7af81bd13f79312da5e4a53a59eStructure");
var vr = Sk;
vr.init();
var gk = class gk extends t.GenericRecordList {
    static getItemType() {
        return vr
    }
};
e(gk, "RL_cdb3f12da2c928d2f50e403534a82d1e");
var Ok = gk;
var JO = class JO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new JO(new JO.RecordClass({
            labelAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(JO, "EN_92679525739afa328c09890d25f5ac45EntityRecord");
var wi = JO;
wi.init();
var bk = class bk extends t.GenericRecordList {
    static getItemType() {
        return wi
    }
};
e(bk, "RL_3325417b3e1ae27173e1161b12a2b345");
var xk = bk;
var Rk = class Rk extends t.GenericRecordList {
    static getItemType() {
        return Q
    }
};
e(Rk, "RL_7674e0699bf7786228f1b11887afe770");
var YO = Rk;
var Ik = class Ik extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Ok", "okAttr", "ok", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Messages", "messagesAttr", "messages", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new YO)
        }, !0, YO), this.attr("Has_more", "has_moreAttr", "has_more", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Ik, "ST_0a66c582c77592abee52988e6d0524e2Structure");
var Pi = Ik;
Pi.init();
var ZO = class ZO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetChannelsHistoryResponse", "getChannelsHistoryResponseAttr", "GetChannelsHistoryResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pi)
        }, !0, Pi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ZO(new ZO.RecordClass({
            getChannelsHistoryResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3375dbdf-4212-0d4c-d749-42f1cc4f9d88"
    }
};
e(ZO, "RC_3375dbdf42120d4cd74942f1cc4f9d88");
var xp = ZO;
xp.init();
var KO = class KO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Topic", "topicAttr", "Topic", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new K)
        }, !0, K)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new KO(new KO.RecordClass({
            topicAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3391a407-605c-2903-e720-42e67177aeae"
    }
};
e(KO, "RC_3391a407605c2903e72042e67177aeae");
var bp = KO;
bp.init();
var hk = class hk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Chat_create", "chat_createAttr", "p2p_chat_create", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nr)
        }, !0, nr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hk, "ST_e6b7ce3d1a8480717883f29f3bf1ccf8Structure");
var Bi = hk;
Bi.init();
var QO = class QO extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateResponse", "p2PChatCreateResponseAttr", "P2PChatCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bi)
        }, !0, Bi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new QO(new QO.RecordClass({
            p2PChatCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f5d4a2f5-a332-d76f-5ccc-15cdf118da23"
    }
};
e(QO, "RC_f5d4a2f5a332d76f5ccc15cdf118da23");
var Rp = QO;
Rp.init();
var Gk = class Gk extends t.GenericRecordList {
    static getItemType() {
        return Rp
    }
};
e(Gk, "RL_33edd9b86cc900a5c27fee339170b32d");
var Ak = Gk;
var $O = class $O extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("BucketObject", "bucketObjectAttr", "BucketObject", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new as)
        }, !0, as)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $O(new $O.RecordClass({
            bucketObjectAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "859ef53f-d8ef-4c4c-a0ea-34f7cfc34868"
    }
};
e($O, "RC_859ef53fd8ef4c4ca0ea34f7cfc34868");
var Ip = $O;
Ip.init();
var Pk = class Pk extends t.GenericRecordList {
    static getItemType() {
        return Ip
    }
};
e(Pk, "RL_3474e4700dc4926ae089c3343a57f059");
var wk = Pk;
var Bk = class Bk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Advert_id", "advert_idAttr", "advert_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Paymen_method_ids", "paymen_method_idsAttr", "payment_method_ids", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Rate", "rateAttr", "rate", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Contact_info", "contact_infoAttr", "contact_info", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Payment_info", "payment_infoAttr", "payment_info", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Bk, "ST_1480f374773845f8188d81a5e43451f4Structure");
var Ei = Bk;
Ei.init();
var tg = class tg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateRequest", "p2POrderCreateRequestAttr", "P2POrderCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ei)
        }, !0, Ei)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tg(new tg.RecordClass({
            p2POrderCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905c1d78-5335-0013-6fba-e2d1469b85c5"
    }
};
e(tg, "RC_905c1d78533500136fbae2d1469b85c5");
var hp = tg;
hp.init();
var Ck = class Ck extends t.GenericRecordList {
    static getItemType() {
        return hp
    }
};
e(Ck, "RL_34e8557baae595dff1b0bd54b344a395");
var Ek = Ck;
var Lk = class Lk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xe)
        }, !0, Xe), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Partner_accounts", "partner_accountsAttr", "partner_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Be)
        }, !0, Be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Lk, "ST_80cfad7cfd3d8af4d81e0f273be7fee9Structure");
var Ci = Lk;
Ci.init();
var qk = class qk extends t.GenericRecordList {
    static getItemType() {
        return Ci
    }
};
e(qk, "RL_351ccc651b9c0a8538ed48a164756a75");
var vk = qk;
var eg = class eg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Requirement", "requirementAttr", "Requirement", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new S)
        }, !0, S)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eg(new eg.RecordClass({
            requirementAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e693c35b-4813-1a7d-9d29-6aba5185b8c6"
    }
};
e(eg, "RC_e693c35b48131a7d9d296aba5185b8c6");
var Ap = eg;
Ap.init();
var kk = class kk extends t.GenericRecordList {
    static getItemType() {
        return Ap
    }
};
e(kk, "RL_354382860a4523a089cd5a3761912fe2");
var jk = kk;
var Uk = class Uk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Shape", "shapeAttr", "Shape", !1, !1, t.DataTypes.Text, function() {
            return Ii.shape.rounded
        }, !0), this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Uk, "ST_8391f9d0c6b78f74493c47987669deecStructure");
var Li = Uk;
Li.init();
var rg = class rg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Li)
        }, !0, Li)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rg(new rg.RecordClass({
            progressBarOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3554b1e2-806a-5b82-7c45-7cdecc492d4a"
    }
};
e(rg, "RC_3554b1e2806a5b827c457cdecc492d4a");
var Gp = rg;
Gp.init();
var Vk = class Vk extends t.GenericRecordList {
    static getItemType() {
        return Gt
    }
};
e(Vk, "RL_357030bc20ba450abe6756927d50ad98");
var Fk = Vk;
var Nk = class Nk extends t.GenericRecordList {
    static getItemType() {
        return Ws
    }
};
e(Nk, "RL_35a3e1f455c3dbbaa14c7a628aaa1ba3");
var _k = Nk;
var Mk = class Mk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_new_account", "mt5_new_accountAttr", "mt5_new_account", !1, !1, t.DataTypes.Text, function() {
            return "1"
        }, !0), this.attr("Account_type", "account_typeAttr", "account_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Leverage", "leverageAttr", "leverage", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("MainPassword", "mainPasswordAttr", "mainPassword", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Product", "productAttr", "product", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("InvestPassword", "investPasswordAttr", "investPassword", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Mk, "ST_c7e48234a44c41827c7b70f1ea8aa0b1Structure");
var pr = Mk;
pr.init();
var Xk = class Xk extends t.GenericRecordList {
    static getItemType() {
        return pr
    }
};
e(Xk, "RL_35e2cb93968d7c489481f7d30eeb5afd");
var zk = Xk;
var Wk = class Wk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Wk, "EN_0c0b103cba961483054afffbc30b3066EntityRecord");
var vi = Wk;
vi.init();
var ag = class ag extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StackingType_v1", "stackingType_v1Attr", "StackingType_v1", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vi)
        }, !0, vi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ag(new ag.RecordClass({
            stackingType_v1Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "35e37489-cb29-f7a3-04d5-12a403000665"
    }
};
e(ag, "RC_35e37489cb29f7a304d512a403000665");
var wp = ag;
wp.init();
var Jk = class Jk extends t.GenericRecordList {
    static getItemType() {
        return sr
    }
};
e(Jk, "RL_35f83b3d4ef557b9a9bf6629bdb261f7");
var Hk = Jk;
var sg = class sg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RealAccountCreation", "realAccountCreationAttr", "RealAccountCreation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ga)
        }, !0, Ga)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sg(new sg.RecordClass({
            realAccountCreationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cee03dab-e8a3-c7c6-2ed3-d8558ec3c251"
    }
};
e(sg, "RC_cee03dabe8a3c7c62ed3d8558ec3c251");
var Pp = sg;
Pp.init();
var Zk = class Zk extends t.GenericRecordList {
    static getItemType() {
        return Pp
    }
};
e(Zk, "RL_35fd36b62523241f1c11dcc6ebf80e7a");
var Yk = Zk;
var Kk = class Kk extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("New_password", "new_passwordAttr", "new_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Old_password", "old_passwordAttr", "old_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_password_change", "trading_platform_password_changeAttr", "trading_platform_password_change", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Kk, "ST_95720c0132c7c8b07166d48790a0a129Structure");
var lr = Kk;
lr.init();
var $k = class $k extends t.GenericRecordList {
    static getItemType() {
        return lr
    }
};
e($k, "RL_360fcdf4e596d82c75762f808854a5a1");
var Qk = $k;
var ig = class ig extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ig(new ig.RecordClass({
            columnBreakAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ig, "EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord");
var qi = ig;
qi.init();
var eU = class eU extends t.GenericRecordList {
    static getItemType() {
        return qi
    }
};
e(eU, "RL_362950b7d5d9798e12950648533599a1");
var tU = eU;
var aU = class aU extends t.GenericRecordList {
    static getItemType() {
        return ai
    }
};
e(aU, "RL_36d4d7e2109bafadf398450826580bed");
var rU = aU;
var iU = class iU extends t.GenericRecordList {
    static getItemType() {
        return li
    }
};
e(iU, "RL_36ff7df6547fc6551e99dc50dec2ec00");
var sU = iU;
var ng = class ng extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Type", "typeAttr", "Type", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ng(new ng.RecordClass({
            typeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ng, "EN_59aacee1cb91627a0f497366b24e4500EntityRecord");
var ji = ng;
ji.init();
var og = class og extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ji)
        }, !0, ji)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new og(new og.RecordClass({
            carouselNavigationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "373fec8a-2329-a8b1-ecd5-5cf717893131"
    }
};
e(og, "RC_373fec8a2329a8b1ecd55cf717893131");
var Bp = og;
Bp.init();
var oU = class oU extends t.GenericRecordList {
    static getItemType() {
        return N
    }
};
e(oU, "RL_37550157d48087a2b4e428de3d9521d0");
var nU = oU;
var cU = class cU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_adverts", "advertiser_advertsAttr", "p2p_advertiser_adverts", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cU, "ST_8adbe420d80a0b7b8c828a81a654f9e3Structure");
var ki = cU;
ki.init();
var cg = class cg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserAdvertsResponse", "p2PAdvertiserAdvertsResponseAttr", "P2PAdvertiserAdvertsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ki)
        }, !0, ki)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cg(new cg.RecordClass({
            p2PAdvertiserAdvertsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5709f0ba-27cf-be0e-e5ee-bb438acbd667"
    }
};
e(cg, "RC_5709f0ba27cfbe0ee5eebb438acbd667");
var Ep = cg;
Ep.init();
var pU = class pU extends t.GenericRecordList {
    static getItemType() {
        return Ep
    }
};
e(pU, "RL_37f2873798bf421962ea50333055fbe6");
var uU = pU;
var ug = class ug extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_Address", "kYC_AddressAttr", "KYC_Address", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ae)
        }, !0, Ae)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ug(new ug.RecordClass({
            kYC_AddressAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "60071085-ccdc-1a93-9c98-b76e05aec53e"
    }
};
e(ug, "RC_60071085ccdc1a939c98b76e05aec53e");
var Cp = ug;
Cp.init();
var mU = class mU extends t.GenericRecordList {
    static getItemType() {
        return Cp
    }
};
e(mU, "RL_3860d269e9dd680bb74541283f709b44");
var lU = mU;
var TU = class TU extends t.GenericRecordList {
    static getItemType() {
        return It
    }
};
e(TU, "RL_386f6a281c08d72d0376417e02fe0b4b");
var fU = TU;
var DU = class DU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(DU, "EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord");
var Ui = DU;
Ui.init();
var dU = class dU extends t.GenericRecordList {
    static getItemType() {
        return Ui
    }
};
e(dU, "RL_389fedb389f062cabae44513c3a5330f");
var yU = dU;
var OU = class OU extends t.GenericRecordList {
    static getItemType() {
        return wp
    }
};
e(OU, "RL_392b64bd075fc192968825bc0bc06ae0");
var SU = OU;
var pg = class pg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fiat", "fiatAttr", "Fiat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new x)
        }, !0, x)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pg(new pg.RecordClass({
            fiatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "39920828-6269-e792-88e6-32f4faf899e3"
    }
};
e(pg, "RC_399208286269e79288e632f4faf899e3");
var Lp = pg;
Lp.init();
var xU = class xU extends t.GenericRecordList {
    static getItemType() {
        return at
    }
};
e(xU, "RL_39e4b9d56d5f803650985cef34aa5a13");
var gU = xU;
var RU = class RU extends t.GenericRecordList {
    static getItemType() {
        return fc
    }
};
e(RU, "RL_39fb6dc5ee04c0d26b88d36ed39f3ebe");
var bU = RU;
var IU = class IU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action", "actionAttr", "action", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Environment", "environmentAttr", "environment", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Time", "timeAttr", "time", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(IU, "ST_619d9a3f632a416c703364587bc2d9afStructure");
var qr = IU;
qr.init();
var lg = class lg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistory", "loginHistoryAttr", "LoginHistory", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qr)
        }, !0, qr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lg(new lg.RecordClass({
            loginHistoryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a05443c-535c-9845-39df-34bdb9b3f117"
    }
};
e(lg, "RC_3a05443c535c984539df34bdb9b3f117");
var vp = lg;
vp.init();
var mg = class mg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api_call_limit", "api_call_limitAttr", "Api_call_limit3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ft)
        }, !0, Ft)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mg(new mg.RecordClass({
            api_call_limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3a2d986a-770a-9c3e-6f10-96b16961e5a9"
    }
};
e(mg, "RC_3a2d986a770a9c3e6f1096b16961e5a9");
var qp = mg;
qp.init();
var AU = class AU extends t.GenericRecordList {
    static getItemType() {
        return ca
    }
};
e(AU, "RL_3a7769295a90f3ebda84fe6e535bb92a");
var hU = AU;
var wU = class wU extends t.GenericRecordList {
    static getItemType() {
        return yi
    }
};
e(wU, "RL_3a9fb32bad24cac6334039ea3a90ab41");
var GU = wU;
var PU = class PU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document_Additional", "document_AdditionalAttr", "document_additional", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Document_Number", "document_NumberAttr", "document_number", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Document_Type", "document_TypeAttr", "document_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Issuing_country", "issuing_countryAttr", "issuing_country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PU, "ST_a6721f8f6846d021b1c635da9bdd2e8cStructure");
var Fi = PU;
Fi.init();
var fg = class fg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddRequest", "iDVDocumentAddRequestAttr", "IDVDocumentAddRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fi)
        }, !0, Fi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fg(new fg.RecordClass({
            iDVDocumentAddRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee45c2d9-55f3-8571-a263-1cf48c22c217"
    }
};
e(fg, "RC_ee45c2d955f38571a2631cf48c22c217");
var jp = fg;
jp.init();
var EU = class EU extends t.GenericRecordList {
    static getItemType() {
        return jp
    }
};
e(EU, "RL_3aafd554dca4ac72ea77647f2a1258e3");
var BU = EU;
var Tg = class Tg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MetaDatum", "metaDatumAttr", "MetaDatum", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tg(new Tg.RecordClass({
            metaDatumAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3ac77d19-5404-c60d-b3e9-9e071fb2d3f7"
    }
};
e(Tg, "RC_3ac77d195404c60db3e99e071fb2d3f7");
var kp = Tg;
kp.init();
var CU = class CU extends t.GenericRecordList {
    static getItemType() {
        return Br
    }
};
e(CU, "RL_1a22572c52e5532cb792825a498a12f0");
var Dg = CU;
var LU = class LU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ir)
        }, !0, ir), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("States_list", "states_listAttr", "states_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Dg)
        }, !0, Dg)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(LU, "ST_cab7386b3f457cedb5cb6bb7db56df4eStructure");
var Vi = LU;
Vi.init();
var qU = class qU extends t.GenericRecordList {
    static getItemType() {
        return Vi
    }
};
e(qU, "RL_3adc943e052fb4ede1c36a156e01df95");
var vU = qU;
var jU = class jU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AdditionalDocumentNumber", "additionalDocumentNumberAttr", "AdditionalDocumentNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DocumentType", "documentTypeAttr", "DocumentType", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jU, "ST_3b8f7a9e49bbec7ed0ab55bd440bab7dStructure");
var Pa = jU;
Pa.init();
var UU = class UU extends t.GenericRecordList {
    static getItemType() {
        return Ye
    }
};
e(UU, "RL_3b8feaa11cc930133dbb7eecb085b527");
var kU = UU;
var yg = class yg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Provider", "providerAttr", "Provider", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yg(new yg.RecordClass({
            providerAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(yg, "EN_f9178b4aae1879ea388b92402c64db4cEntityRecord");
var _i = yg;
_i.init();
var dg = class dg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IdentityProvider", "identityProviderAttr", "IdentityProvider", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _i)
        }, !0, _i)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dg(new dg.RecordClass({
            identityProviderAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3bbfc6c9-1fcd-8a2d-d978-47564be30682"
    }
};
e(dg, "RC_3bbfc6c91fcd8a2dd97847564be30682");
var Up = dg;
Up.init();
var Sg = class Sg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Config", "configAttr", "Config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new de)
        }, !0, de)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sg(new Sg.RecordClass({
            configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3c60a184-6470-070c-1bba-e2a1d22163d2"
    }
};
e(Sg, "RC_3c60a1846470070c1bbae2a1d22163d2");
var Fp = Sg;
Fp.init();
var Og = class Og extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsRequest", "setSettingsRequestAttr", "SetSettingsRequest2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gs)
        }, !0, Gs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Og(new Og.RecordClass({
            setSettingsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "73205161-18aa-6508-370e-b4c09e583c84"
    }
};
e(Og, "RC_7320516118aa6508370eb4c09e583c84");
var Vp = Og;
Vp.init();
var VU = class VU extends t.GenericRecordList {
    static getItemType() {
        return Vp
    }
};
e(VU, "RL_3c898c4aa1038e5ba7cd2e3e10d93b3d");
var FU = VU;
var gg = class gg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RealSignupSteps", "realSignupStepsAttr", "RealSignupSteps", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ba)
        }, !0, ba)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gg(new gg.RecordClass({
            realSignupStepsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3c932c88-487f-9121-3472-b65d598457af"
    }
};
e(gg, "RC_3c932c88487f91213472b65d598457af");
var _p = gg;
_p.init();
var _U = class _U extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("country_code", "country_codeAttr", "country_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(_U, "ST_3a8fd8b28bfeab1bd267f04e730ca9e6Structure");
var mr = _U;
mr.init();
var NU = class NU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_accounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mr)
        }, !0, mr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(NU, "ST_5a8f9ede296ad9cf5b81205656c8b54fStructure");
var Ni = NU;
Ni.init();
var xg = class xg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingPlatformAvailableAccounts", "tradingPlatformAvailableAccountsAttr", "TradingPlatformAvailableAccounts", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ni)
        }, !0, Ni)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xg(new xg.RecordClass({
            tradingPlatformAvailableAccountsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "deb49656-ca36-ac30-3bff-f5ecbe52b196"
    }
};
e(xg, "RC_deb49656ca36ac303bfff5ecbe52b196");
var Np = xg;
Np.init();
var zU = class zU extends t.GenericRecordList {
    static getItemType() {
        return Np
    }
};
e(zU, "RL_3cdb40add777d21caa9a01b033bdd702");
var MU = zU;
var XU = class XU extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new M)
        }, !0, M), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new $s)
        }, !0, $s)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(XU, "ST_75725e65d106c1568a850780233a08baStructure");
var Mi = XU;
Mi.init();
var bg = class bg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsResponse", "postTradingPlatformAccountsResponseAttr", "PostTradingPlatformAccountsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mi)
        }, !0, Mi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bg(new bg.RecordClass({
            postTradingPlatformAccountsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3ce5a011-7187-c9d1-b6ee-0d6f65f07553"
    }
};
e(bg, "RC_3ce5a0117187c9d1b6ee0d6f65f07553");
var Mp = bg;
Mp.init();
var Rg = class Rg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DemoItem", "demoItemAttr", "DemoItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _r)
        }, !0, _r)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rg(new Rg.RecordClass({
            demoItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "80fdac61-068a-824f-2594-509a1ecd2e4d"
    }
};
e(Rg, "RC_80fdac61068a824f2594509a1ecd2e4d");
var zp = Rg;
zp.init();
var HU = class HU extends t.GenericRecordList {
    static getItemType() {
        return zp
    }
};
e(HU, "RL_3cfdbb9ac951074a0e6189d574fe170b");
var WU = HU;
var YU = class YU extends t.GenericRecordList {
    static getItemType() {
        return Li
    }
};
e(YU, "RL_3cfea1a1e933b75750f570ea368d3da2");
var JU = YU;
var Ig = class Ig extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Style", "styleAttr", "Style", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ig(new Ig.RecordClass({
            styleAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Ig, "EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord");
var zi = Ig;
zi.init();
var hg = class hg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zi)
        }, !0, zi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hg(new hg.RecordClass({
            scrollbarStyleAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3d7c5be4-055c-8fe2-c227-afc40d8dee2f"
    }
};
e(hg, "RC_3d7c5be4055c8fe2c227afc40d8dee2f");
var Xp = hg;
Xp.init();
var KU = class KU extends t.GenericRecordList {
    static getItemType() {
        return Wt
    }
};
e(KU, "RL_3da257b38954975290536b7e144f85a1");
var ZU = KU;
var $U = class $U extends t.GenericRecordList {
    static getItemType() {
        return Xt
    }
};
e($U, "RL_3dd031951f15020fcf2011e126c45859");
var QU = $U;
var eF = class eF extends t.GenericRecordList {
    static getItemType() {
        return vt
    }
};
e(eF, "RL_3ddab8163c31ef065226c1ec689ad1e9");
var tF = eF;
var Ag = class Ag extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_experience_regulated", "trading_experience_regulatedAttr", "trading_experience_regulated", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new er)
        }, !0, er)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ag(new Ag.RecordClass({
            trading_experience_regulatedAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Ag, "ST_2691c70432c10ff9ae9f9be629a9dc46Structure");
var Xi = Ag;
Xi.init();
var aF = class aF extends t.GenericRecordList {
    static getItemType() {
        return Xi
    }
};
e(aF, "RL_3e24cd4a78a15b6185b1b9dd6cb6a553");
var rF = aF;
var Gg = class Gg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem2", "account_listItem2Attr", "Account_listItem2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vr)
        }, !0, vr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gg(new Gg.RecordClass({
            account_listItem2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3e628d7d-792d-29fe-0a1a-8c7463cb9df4"
    }
};
e(Gg, "RC_3e628d7d792d29fe0a1a8c7463cb9df4");
var Wp = Gg;
Wp.init();
var iF = class iF extends t.GenericRecordList {
    static getItemType() {
        return qr
    }
};
e(iF, "RL_c2a306cbeea41f57ca50ddd6a6d49511");
var sF = iF;
var nF = class nF extends t.GenericRecordList {
    static getItemType() {
        return qr
    }
};
e(nF, "RL_c2a306cbeea41f57ca50ddd6a6d49511");
var wg = nF;
var Pg = class Pg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistory", "loginHistoryAttr", "login_history", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new wg)
        }, !0, wg)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pg(new Pg.RecordClass({
            loginHistoryAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Pg, "ST_92e8c92924c6f96b11c8b9bf865fb39cStructure");
var Wi = Pg;
Wi.init();
var Bg = class Bg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LoginHistoryResponse", "loginHistoryResponseAttr", "LoginHistoryResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wi)
        }, !0, Wi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bg(new Bg.RecordClass({
            loginHistoryResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "97911e72-0405-71d3-4b10-f1ecb9e4b4ab"
    }
};
e(Bg, "RC_97911e72040571d34b10f1ecb9e4b4ab");
var Hp = Bg;
Hp.init();
var cF = class cF extends t.GenericRecordList {
    static getItemType() {
        return Hp
    }
};
e(cF, "RL_3eb3396269cac08cf750e4a2b75c6321");
var oF = cF;
var pF = class pF extends t.GenericRecordList {
    static getItemType() {
        return Es
    }
};
e(pF, "RL_3f2ac242127a6c8f8eecade02bd1a934");
var uF = pF;
var Eg = class Eg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported6", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gt)
        }, !0, Gt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Eg(new Eg.RecordClass({
            documents_supported2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "3f4d741c-30bd-5473-dc9c-679433c442c3"
    }
};
e(Eg, "RC_3f4d741c30bd5473dc9c679433c442c3");
var Jp = Eg;
Jp.init();
var lF = class lF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("FinishResetPasswordFailureReason", "finishResetPasswordFailureReasonAttr", "FinishResetPasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $e)
        }, !0, $e)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lF, "FinishResetPasswordResultRec");
var Hi = lF;
Hi.init();
var Cg = class Cg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FinishResetPasswordResult", "finishResetPasswordResultAttr", "FinishResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Hi)
        }, !0, Hi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cg(new Cg.RecordClass({
            finishResetPasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9817a574-7e4b-09aa-3a6a-7eb35ce9f66e"
    }
};
e(Cg, "RC_9817a5747e4b09aa3a6a7eb35ce9f66e");
var Yp = Cg;
Yp.init();
var fF = class fF extends t.GenericRecordList {
    static getItemType() {
        return Yp
    }
};
e(fF, "RL_3f7b36d8bbcf12054b7e2f49497f214f");
var mF = fF;
var TF = class TF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CompanyName", "companyNameAttr", "CompanyName", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("CompanyRegistrationNumber", "companyRegistrationNumberAttr", "CompanyRegistrationNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("CompanyWebsite", "companyWebsiteAttr", "CompanyWebsite", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TF, "ST_77e6801b182d5477e712105a2d67f02fStructure");
var Ba = TF;
Ba.init();
var Lg = class Lg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CompanyDetailsValidFields", "companyDetailsValidFieldsAttr", "CompanyDetailsValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ba)
        }, !0, Ba)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lg(new Lg.RecordClass({
            companyDetailsValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "74145ea2-781a-e60f-333b-9d3e99741f6d"
    }
};
e(Lg, "RC_74145ea2781ae60f333b9d3e99741f6d");
var Zp = Lg;
Zp.init();
var yF = class yF extends t.GenericRecordList {
    static getItemType() {
        return Zp
    }
};
e(yF, "RL_40199ac60c10517053097c13bb5dc499");
var DF = yF;
var dF = class dF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0), this.attr("Loop", "loopAttr", "Loop", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0), this.attr("Padding", "paddingAttr", "Padding", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(dF, "ST_7d99fd1de65649f174aff6854b052539Structure");
var Ji = dF;
Ji.init();
var vg = class vg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ji)
        }, !0, Ji)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vg(new vg.RecordClass({
            carouselOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4028c834-35ff-8f3f-a19c-27e5a3252dd5"
    }
};
e(vg, "RC_4028c83435ff8f3fa19c27e5a3252dd5");
var Kp = vg;
Kp.init();
var OF = class OF extends t.GenericRecordList {
    static getItemType() {
        return C
    }
};
e(OF, "RL_40324a3c2e2105f04258d795b46f8ef0");
var SF = OF;
var qg = class qg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertList", "p2PAdvertListAttr", "P2PAdvertList", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ee)
        }, !0, Ee)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qg(new qg.RecordClass({
            p2PAdvertListAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "403419e7-2476-e3a4-7280-a2d420ccc9e0"
    }
};
e(qg, "RC_403419e72476e3a47280a2d420ccc9e0");
var Qp = qg;
Qp.init();
var xF = class xF extends t.GenericRecordList {
    static getItemType() {
        return X
    }
};
e(xF, "RL_409d5d24f3ff15709c6eb8292127d3ba");
var gF = xF;
var jg = class jg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("states_list", "states_listAttr", "states_list", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jg(new jg.RecordClass({
            states_listAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(jg, "ST_a67c544d9efb2ed7a818e6289b80fd02Structure");
var Yi = jg;
Yi.init();
var kg = class kg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListRequest", "fetchStatesListRequestAttr", "FetchStatesListRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yi)
        }, !0, Yi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kg(new kg.RecordClass({
            fetchStatesListRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "40eef503-a8ea-72db-a0e9-29f47890471d"
    }
};
e(kg, "RC_40eef503a8ea72dba0e929f47890471d");
var $p = kg;
$p.init();
var RF = class RF extends t.GenericRecordList {
    static getItemType() {
        return eu
    }
};
e(RF, "RL_4153455d8943850f971d65d82f35900b");
var bF = RF;
var Ug = class Ug extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Limit", "limitAttr", "Limit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new d)
        }, !0, d)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ug(new Ug.RecordClass({
            limitAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "78060f9d-9359-b761-76f0-2c2e892daf92"
    }
};
e(Ug, "RC_78060f9d9359b76176f02c2e892daf92");
var tl = Ug;
tl.init();
var hF = class hF extends t.GenericRecordList {
    static getItemType() {
        return tl
    }
};
e(hF, "RL_41783439fb3b7b12d51c2ee5eea16ee3");
var IF = hF;
var GF = class GF extends t.GenericRecordList {
    static getItemType() {
        return Gu
    }
};
e(GF, "RL_41e67aa458234493e723d2243db01144");
var AF = GF;
var wF = class wF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LabelsRotation", "labelsRotationAttr", "LabelsRotation", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("MinValue", "minValueAttr", "MinValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MaxValue", "maxValueAttr", "MaxValue", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ValuesType", "valuesTypeAttr", "ValuesType", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(wF, "ST_87973ae5f6c07db6193b59603f29dce6Structure");
var Zi = wF;
Zi.init();
var Fg = class Fg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_XAxisFormat", "legacy_XAxisFormatAttr", "Legacy_XAxisFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zi)
        }, !0, Zi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fg(new Fg.RecordClass({
            legacy_XAxisFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "424d57a2-d666-c8ed-b034-3600d6705eee"
    }
};
e(Fg, "RC_424d57a2d666c8edb0343600d6705eee");
var el = Fg;
el.init();
var Vg = class Vg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address", "addressAttr", "address", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vg(new Vg.RecordClass({
            addressAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Vg, "ST_4814bb948c1b48da4f5ecccbe35da450Structure");
var fr = Vg;
fr.init();
var PF = class PF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action", "actionAttr", "action", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Deposit", "depositAttr", "deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fr)
        }, !0, fr), this.attr("Url", "urlAttr", "url", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PF, "ST_1e493399566287dd50f49a441f58a8caStructure");
var Tr = PF;
Tr.init();
var BF = class BF extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "cashier", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tr)
        }, !0, Tr), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(BF, "ST_2f46c6fecf81fe9d91763f789141eec9Structure");
var Ki = BF;
Ki.init();
var _g = class _g extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierCryptoResponse", "postCashierCryptoResponseAttr", "PostCashierCryptoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ki)
        }, !0, Ki)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _g(new _g.RecordClass({
            postCashierCryptoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c0258e0f-6ca8-7b3e-5e39-e33c3e5f0c77"
    }
};
e(_g, "RC_c0258e0f6ca87b3e5e39e33c3e5f0c77");
var rl = _g;
rl.init();
var CF = class CF extends t.GenericRecordList {
    static getItemType() {
        return rl
    }
};
e(CF, "RL_42ae10f2ee499169129a9427d0491b08");
var EF = CF;
var vF = class vF extends t.GenericRecordList {
    static getItemType() {
        return Rr
    }
};
e(vF, "RL_d03621281d953210a5f7643c5f395ddc");
var LF = vF;
var Ng = class Ng extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Crypto", "cryptoAttr", "Crypto3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new T)
        }, !0, T)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ng(new Ng.RecordClass({
            cryptoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72576653-6428-f476-02ca-54f05f55b577"
    }
};
e(Ng, "RC_725766536428f47602ca54f05f55b577");
var al = Ng;
al.init();
var jF = class jF extends t.GenericRecordList {
    static getItemType() {
        return al
    }
};
e(jF, "RL_43065d40fb42cf2e1c75ff4cebf95a65");
var qF = jF;
var Mg = class Mg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new At)
        }, !0, At)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mg(new Mg.RecordClass({
            documents_supportedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "655de439-743f-6ef6-6e4c-426b009f58b1"
    }
};
e(Mg, "RC_655de439743f6ef66e4c426b009f58b1");
var sl = Mg;
sl.init();
var UF = class UF extends t.GenericRecordList {
    static getItemType() {
        return sl
    }
};
e(UF, "RL_431a1d9d775d905a0fa33726ccc368ad");
var kF = UF;
var zg = class zg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OptionsTurnoverInfoTable", "optionsTurnoverInfoTableAttr", "OptionsTurnoverInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wa)
        }, !0, wa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zg(new zg.RecordClass({
            optionsTurnoverInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7319f641-bd81-6660-fa0b-06c8ae60d9ad"
    }
};
e(zg, "RC_7319f641bd816660fa0b06c8ae60d9ad");
var il = zg;
il.init();
var VF = class VF extends t.GenericRecordList {
    static getItemType() {
        return il
    }
};
e(VF, "RL_4366b3780998868c9628ae20f3ebcc1c");
var FF = VF;
var NF = class NF extends t.GenericRecordList {
    static getItemType() {
        return ls
    }
};
e(NF, "RL_43c33c0f3b9a2eb3199ef87eb6b6c7b3");
var _F = NF;
var zF = class zF extends t.GenericRecordList {
    static getItemType() {
        return Bo
    }
};
e(zF, "RL_43ca0597982cbded980f0a6041972518");
var MF = zF;
var Xg = class Xg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ui)
        }, !0, Ui)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xg(new Xg.RecordClass({
            consoleErrorTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f045d5e7-dbbf-fce8-6c51-999e90634954"
    }
};
e(Xg, "RC_f045d5e7dbbffce86c51999e90634954");
var nl = Xg;
nl.init();
var WF = class WF extends t.GenericRecordList {
    static getItemType() {
        return nl
    }
};
e(WF, "RL_441c5b272aa90d830e05d5f4bd551e45");
var XF = WF;
var JF = class JF extends t.GenericRecordList {
    static getItemType() {
        return Ts
    }
};
e(JF, "RL_4438108cb3e8b9ed9e8aaff799663860");
var HF = JF;
var Wg = class Wg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Disclaimer", "disclaimerAttr", "Disclaimer2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Et)
        }, !0, Et)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wg(new Wg.RecordClass({
            disclaimerAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d5f1faf2-f682-624c-1c27-e7a932faee50"
    }
};
e(Wg, "RC_d5f1faf2f682624c1c27e7a932faee50");
var ol = Wg;
ol.init();
var ZF = class ZF extends t.GenericRecordList {
    static getItemType() {
        return ol
    }
};
e(ZF, "RL_44cebee119c996a470fbff1d981600f0");
var YF = ZF;
var QF = class QF extends t.GenericRecordList {
    static getItemType() {
        return Wu
    }
};
e(QF, "RL_44fa669238d0e932bda1a17383c85231");
var KF = QF;
var Hg = class Hg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hg(new Hg.RecordClass({
            idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Hg, "EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord");
var Qi = Hg;
Qi.init();
var Jg = class Jg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qi)
        }, !0, Qi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jg(new Jg.RecordClass({
            accordionIconTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "73fae692-0f82-1133-20dc-cc89ef073c01"
    }
};
e(Jg, "RC_73fae6920f82113320dccc89ef073c01");
var cl = Jg;
cl.init();
var tV = class tV extends t.GenericRecordList {
    static getItemType() {
        return cl
    }
};
e(tV, "RL_452bae0381b3504e486b471d2123e658");
var $F = tV;
var eV = class eV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Amount", "amountAttr", "amount", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Max_order_amount", "max_order_amountAttr", "max_order_amount", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Payment_method_ids", "payment_method_idsAttr", "payment_method_ids", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Payment_method_names", "payment_method_namesAttr", "payment_method_names", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Rate", "rateAttr", "rate", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Rate_type", "rate_typeAttr", "rate_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Type", "typeAttr", "type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(eV, "ST_8e422363b5a82bdaf5e61cc1198b7e5dStructure");
var $i = eV;
$i.init();
var Yg = class Yg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateRequest", "p2PAdvertUpdateRequestAttr", "P2PAdvertUpdateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $i)
        }, !0, $i)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yg(new Yg.RecordClass({
            p2PAdvertUpdateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "45556c10-a150-2a71-7de4-1a97a7e0de1e"
    }
};
e(Yg, "RC_45556c10a1502a717de41a97a7e0de1e");
var ul = Yg;
ul.init();
var aV = class aV extends t.GenericRecordList {
    static getItemType() {
        return yt
    }
};
e(aV, "RL_4560e1bdd8720efa62ee48a72be4b7d0");
var rV = aV;
var Zg = class Zg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req9", "echo_req9Attr", "Echo_req13", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zg(new Zg.RecordClass({
            echo_req9Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99c00189-36e3-cec1-2f03-7bf056295951"
    }
};
e(Zg, "RC_99c0018936e3cec12f037bf056295951");
var pl = Zg;
pl.init();
var iV = class iV extends t.GenericRecordList {
    static getItemType() {
        return pl
    }
};
e(iV, "RL_458a7ae223160b2af1e7ca666afa22e4");
var sV = iV;
var oV = class oV extends t.GenericRecordList {
    static getItemType() {
        return d
    }
};
e(oV, "RL_45c103ec13f133a69182acf4157a0f9a");
var nV = oV;
var uV = class uV extends t.GenericRecordList {
    static getItemType() {
        return $t
    }
};
e(uV, "RL_45cddd3c466123d5b32df09cbae54a1c");
var cV = uV;
var lV = class lV extends t.GenericRecordList {
    static getItemType() {
        return Fp
    }
};
e(lV, "RL_45f425cbfe3f41d3fac973fe3238818f");
var pV = lV;
var fV = class fV extends t.GenericRecordList {
    static getItemType() {
        return Ku
    }
};
e(fV, "RL_4645896d20bae069726fdb473c154d2d");
var mV = fV;
var TV = class TV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ee)
        }, !0, ee), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Verify_email", "verify_emailAttr", "verify_email", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TV, "ST_b5532fbd5672db40752d556a46e96eaeStructure");
var tn = TV;
tn.init();
var Kg = class Kg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostVerifyEmailResponse", "postVerifyEmailResponseAttr", "PostVerifyEmailResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new tn)
        }, !0, tn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kg(new Kg.RecordClass({
            postVerifyEmailResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f6746cbb-50b7-a6a3-6f45-4937aab260b0"
    }
};
e(Kg, "RC_f6746cbb50b7a6a36f454937aab260b0");
var ll = Kg;
ll.init();
var yV = class yV extends t.GenericRecordList {
    static getItemType() {
        return ll
    }
};
e(yV, "RL_466fd140517db96d071045e35052d015");
var DV = yV;
var Qg = class Qg extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TaxResidence", "taxResidenceAttr", "TaxResidence", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qg(new Qg.RecordClass({
            taxResidenceAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Qg, "ST_46d2d4840819045971995a2d73a31f87Structure");
var Ea = Qg;
Ea.init();
var SV = class SV extends t.GenericRecordList {
    static getItemType() {
        return uu
    }
};
e(SV, "RL_47595c6744be14d2bd677fd05324180f");
var dV = SV;
var $g = class $g extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Get_setting", "get_settingAttr", "Get_setting", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kt)
        }, !0, Kt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $g(new $g.RecordClass({
            get_settingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "47772cad-80dc-4a78-7d65-fd52470ca2cd"
    }
};
e($g, "RC_47772cad80dc4a787d65fd52470ca2cd");
var ml = $g;
ml.init();
var gV = class gV extends t.GenericRecordList {
    static getItemType() {
        return fi
    }
};
e(gV, "RL_478659cf4d50eb426ae425e9399ed35f");
var OV = gV;
var tx = class tx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("From", "fromAttr", "From", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new J)
        }, !0, J)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tx(new tx.RecordClass({
            fromAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "99e19ace-3996-a5f3-b75c-a1e86886d33d"
    }
};
e(tx, "RC_99e19ace3996a5f3b75ca1e86886d33d");
var fl = tx;
fl.init();
var bV = class bV extends t.GenericRecordList {
    static getItemType() {
        return fl
    }
};
e(bV, "RL_47976f4a0ffd4defdfe43b4b464cb87c");
var xV = bV;
var ex = class ex extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Channel", "channelAttr", "Channel", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qe)
        }, !0, qe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ex(new ex.RecordClass({
            channelAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9bd05b4d-db49-09b9-d4ca-a679f6e81971"
    }
};
e(ex, "RC_9bd05b4ddb4909b9d4caa679f6e81971");
var Tl = ex;
Tl.init();
var IV = class IV extends t.GenericRecordList {
    static getItemType() {
        return Tl
    }
};
e(IV, "RL_47e7c934a3575d224a082efe32355ab7");
var RV = IV;
var hV = class hV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Order_id", "order_idAttr", "order_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Rating", "ratingAttr", "rating", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Recommended", "recommendedAttr", "recommended", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hV, "ST_e9841f58336063558acf37c980346e02Structure");
var en = hV;
en.init();
var rx = class rx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewRequest", "p2POrderReviewRequestAttr", "P2POrderReviewRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new en)
        }, !0, en)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rx(new rx.RecordClass({
            p2POrderReviewRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5df5d94c-6805-d6c9-59ff-b69a06f0b3f5"
    }
};
e(rx, "RC_5df5d94c6805d6c959ffb69a06f0b3f5");
var Dl = rx;
Dl.init();
var GV = class GV extends t.GenericRecordList {
    static getItemType() {
        return Dl
    }
};
e(GV, "RL_48101f5eb21d918bcd9ac61785b18853");
var AV = GV;
var ax = class ax extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Changeable_field", "changeable_fieldAttr", "Changeable_field", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Oe)
        }, !0, Oe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ax(new ax.RecordClass({
            changeable_fieldAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4bf765d-f28d-c44c-fc97-7eebedb13ed3"
    }
};
e(ax, "RC_d4bf765df28dc44cfc977eebedb13ed3");
var yl = ax;
yl.init();
var PV = class PV extends t.GenericRecordList {
    static getItemType() {
        return yl
    }
};
e(PV, "RL_481ef41ed0fae7f08c6f7bee79db99dc");
var wV = PV;
var sx = class sx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatesListRequest", "statesListRequestAttr", "StatesListRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ta)
        }, !0, ta)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sx(new sx.RecordClass({
            statesListRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4825b839-4d83-318d-a50b-db57a69e9ba8"
    }
};
e(sx, "RC_4825b8394d83318da50bdb57a69e9ba8");
var dl = sx;
dl.init();
var BV = class BV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Month", "monthAttr", "Month", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Year", "yearAttr", "Year", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(BV, "ST_5c08eaa15b890a2d617cabe547c34f0bStructure");
var rn = BV;
rn.init();
var ix = class ix extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MonthYear", "monthYearAttr", "MonthYear", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rn)
        }, !0, rn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ix(new ix.RecordClass({
            monthYearAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4835a3b0-a2d4-ab28-e154-f8a8831a00ef"
    }
};
e(ix, "RC_4835a3b0a2d4ab28e154f8a8831a00ef");
var Sl = ix;
Sl.init();
var CV = class CV extends t.GenericRecordList {
    static getItemType() {
        return j
    }
};
e(CV, "RL_4887faff529164a4e041bdf0dc5e469f");
var EV = CV;
var nx = class nx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TradingAssessmentRequest", "tradingAssessmentRequestAttr", "TradingAssessmentRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xi)
        }, !0, Xi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nx(new nx.RecordClass({
            tradingAssessmentRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0f17bd3-ffd9-2654-92a6-5f2a59166722"
    }
};
e(nx, "RC_f0f17bd3ffd9265492a65f2a59166722");
var Ol = nx;
Ol.init();
var vV = class vV extends t.GenericRecordList {
    static getItemType() {
        return Ol
    }
};
e(vV, "RL_4902441390afa821483ceed9dce30aad");
var LV = vV;
var ox = class ox extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountRequest", "postMT5NewAccountRequestAttr", "PostMT5NewAccountRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pr)
        }, !0, pr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ox(new ox.RecordClass({
            postMT5NewAccountRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "49154554-e74c-2f48-646b-2e0ec7eb74a6"
    }
};
e(ox, "RC_49154554e74c2f48646b2e0ec7eb74a6");
var gl = ox;
gl.init();
var qV = class qV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Settings", "settingsAttr", "p2p_settings", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qV, "ST_370fde1db6758aa39a364a98c4d26988Structure");
var an = qV;
an.init();
var cx = class cx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PSettingsResponse", "p2PSettingsResponseAttr", "P2PSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new an)
        }, !0, an)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cx(new cx.RecordClass({
            p2PSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4930d0ff-5274-fa4a-3e2b-1c3a57449104"
    }
};
e(cx, "RC_4930d0ff5274fa4a3e2b1c3a57449104");
var xl = cx;
xl.init();
var jV = class jV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("trading_platform_accounts", "trading_platform_accountsAttr", "trading_platform_accounts", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(jV, "ST_091b86786925fd05b892541280481403Structure");
var sn = jV;
sn.init();
var ux = class ux extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAccountsRequest", "postTradingPlatformAccountsRequestAttr", "PostTradingPlatformAccountsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sn)
        }, !0, sn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ux(new ux.RecordClass({
            postTradingPlatformAccountsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8349a704-d7e4-5979-09be-fcd4d12d85b4"
    }
};
e(ux, "RC_8349a704d7e4597909befcd4d12d85b4");
var bl = ux;
bl.init();
var UV = class UV extends t.GenericRecordList {
    static getItemType() {
        return bl
    }
};
e(UV, "RL_495e996e3e491370fac39f81d4d0c440");
var kV = UV;
var px = class px extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventLanguagesFilter", "eventLanguagesFilterAttr", "EventLanguagesFilter", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ea)
        }, !0, ea)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new px(new px.RecordClass({
            eventLanguagesFilterAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5cb5a6b5-a007-ebaa-61c9-922ba72a42ef"
    }
};
e(px, "RC_5cb5a6b5a007ebaa61c9922ba72a42ef");
var Rl = px;
Rl.init();
var VV = class VV extends t.GenericRecordList {
    static getItemType() {
        return Rl
    }
};
e(VV, "RL_4987fbc39448623894dd9abe65402b19");
var FV = VV;
var lx = class lx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "Idv3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new q)
        }, !0, q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lx(new lx.RecordClass({
            idvAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5e1b44d0-3865-4ac1-9cd2-18a2a7d6a6b8"
    }
};
e(lx, "RC_5e1b44d038654ac19cd218a2a7d6a6b8");
var Il = lx;
Il.init();
var NV = class NV extends t.GenericRecordList {
    static getItemType() {
        return Il
    }
};
e(NV, "RL_49a4d531de393d17563dea4ec0d88883");
var _V = NV;
var MV = class MV extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Title", "titleAttr", "Title", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Links", "linksAttr", "Links", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Thumbail", "thumbailAttr", "Thumbail", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(MV, "EN_a93ee00b1703fd73b488758ba52ee897EntityRecord");
var Ca = MV;
Ca.init();
var XV = class XV extends t.GenericRecordList {
    static getItemType() {
        return Ca
    }
};
e(XV, "RL_49ba78cb9111e83f5bd1ecd3c61747f9");
var zV = XV;
var HV = class HV extends t.GenericRecordList {
    static getItemType() {
        return uc
    }
};
e(HV, "RL_49ccc40ded7b810643f52a486f4c18ba");
var WV = HV;
var mx = class mx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Financial_assessment", "financial_assessmentAttr", "Financial_assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yt)
        }, !0, Yt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mx(new mx.RecordClass({
            financial_assessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4a76c214-f34f-eb84-1d0c-1a2d8cdbec01"
    }
};
e(mx, "RC_4a76c214f34feb841d0c1a2d8cdbec01");
var hl = mx;
hl.init();
var YV = class YV extends t.GenericRecordList {
    static getItemType() {
        return gi
    }
};
e(YV, "RL_4aa1509142da7c0b9e4be414c8f7c6f5");
var JV = YV;
var fx = class fx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Timeformat", "timeformatAttr", "Timeformat", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fx(new fx.RecordClass({
            timeformatAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(fx, "EN_b4e36c9529d7446e086560192df48d7cEntityRecord");
var nn = fx;
nn.init();
var KV = class KV extends t.GenericRecordList {
    static getItemType() {
        return nn
    }
};
e(KV, "RL_4ac7560fd222f165e8fbfd92d25d984e");
var ZV = KV;
var Tx = class Tx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUploadResponse", "documentUploadResponseAttr", "DocumentUploadResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xs)
        }, !0, Xs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tx(new Tx.RecordClass({
            documentUploadResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fe323b94-d86a-33a2-36dd-565a79123960"
    }
};
e(Tx, "RC_fe323b94d86a33a236dd565a79123960");
var Al = Tx;
Al.init();
var $V = class $V extends t.GenericRecordList {
    static getItemType() {
        return Al
    }
};
e($V, "RL_4bc0edb5a2f27a4baa3999fdb6172ba5");
var QV = $V;
var t_ = class t_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AdditionalDocumentNumber", "additionalDocumentNumberAttr", "AdditionalDocumentNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DocumentType", "documentTypeAttr", "DocumentType", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(t_, "ST_fd472dd876adddab32395354eb83b1e8Structure");
var La = t_;
La.init();
var Dx = class Dx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVValidationError", "iDVValidationErrorAttr", "IDVValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new La)
        }, !0, La)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dx(new Dx.RecordClass({
            iDVValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c2c5c3b3-4c73-46c6-7deb-4734f492ed4a"
    }
};
e(Dx, "RC_c2c5c3b34c7346c67deb4734f492ed4a");
var Gl = Dx;
Gl.init();
var r_ = class r_ extends t.GenericRecordList {
    static getItemType() {
        return Gl
    }
};
e(r_, "RL_4bd1ca73c8c35254341b3530fb617e19");
var e_ = r_;
var yx = class yx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Environment", "environmentAttr", "Environment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new C)
        }, !0, C)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yx(new yx.RecordClass({
            environmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7d0a8f3e-72f7-41cb-81d5-94cb23f74bb3"
    }
};
e(yx, "RC_7d0a8f3e72f741cb81d594cb23f74bb3");
var wl = yx;
wl.init();
var s_ = class s_ extends t.GenericRecordList {
    static getItemType() {
        return wl
    }
};
e(s_, "RL_4c4f9dfe31d26c984c0680105f712e1e");
var a_ = s_;
var n_ = class n_ extends t.GenericRecordList {
    static getItemType() {
        return ma
    }
};
e(n_, "RL_4c5b6856a65560f6ccabf921a762250b");
var i_ = n_;
var c_ = class c_ extends t.GenericRecordList {
    static getItemType() {
        return As
    }
};
e(c_, "RL_4cb4fe0818ecc772f4186b3d75c995e2");
var o_ = c_;
var p_ = class p_ extends t.GenericRecordList {
    static getItemType() {
        return hi
    }
};
e(p_, "RL_4d556c695c13b2c308f888cfb68cea19");
var u_ = p_;
var l_ = class l_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MinimumLength", "minimumLengthAttr", "MinimumLength", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("UpperCaseLetterRequired", "upperCaseLetterRequiredAttr", "UpperCaseLetterRequired", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("LowerCaseLetterRequired", "lowerCaseLetterRequiredAttr", "LowerCaseLetterRequired", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("NumberRequired", "numberRequiredAttr", "NumberRequired", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("SpecialCharacterRequired", "specialCharacterRequiredAttr", "SpecialCharacterRequired", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(l_, "PasswordComplexityPolicyRec");
var on = l_;
on.init();
var dx = class dx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new on)
        }, !0, on)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dx(new dx.RecordClass({
            passwordComplexityPolicyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d77cfdd-567b-2086-8037-7834fc8205a2"
    }
};
e(dx, "RC_4d77cfdd567b208680377834fc8205a2");
var Pl = dx;
Pl.init();
var f_ = class f_ extends t.GenericRecordList {
    static getItemType() {
        return _p
    }
};
e(f_, "RL_4d7b8cbd6dab38c9cb08786f22d0d9cb");
var m_ = f_;
var T_ = class T_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advert_update", "advert_updateAttr", "p2p_advert_update", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(T_, "ST_5c66d0ce00d79562a27920db6fb2bbf3Structure");
var cn = T_;
cn.init();
var Sx = class Sx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertUpdateResponse", "p2PAdvertUpdateResponseAttr", "P2PAdvertUpdateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cn)
        }, !0, cn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sx(new Sx.RecordClass({
            p2PAdvertUpdateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4d9da0dd-8267-6f0a-214b-72ed70ed22f4"
    }
};
e(Sx, "RC_4d9da0dd82676f0a214b72ed70ed22f4");
var Bl = Sx;
Bl.init();
var D_ = class D_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Version", "versionAttr", "version", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("App_name", "app_nameAttr", "app_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Environment", "environmentAttr", "environment", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Execution_id", "execution_idAttr", "execution_id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(D_, "ST_074de63327cc6281abd591a06ac7a3ebStructure");
var un = D_;
un.init();
var Ox = class Ox extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ReleaseFrontendRequest", "releaseFrontendRequestAttr", "ReleaseFrontendRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new un)
        }, !0, un)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ox(new Ox.RecordClass({
            releaseFrontendRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4e0347af-69e4-9e93-f28b-4b0de4bcad85"
    }
};
e(Ox, "RC_4e0347af69e49e93f28b4b0de4bcad85");
var El = Ox;
El.init();
var y_ = class y_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_cancel", "order_cancelAttr", "p2p_order_cancel", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(y_, "ST_c4bad47c2be3dee614048e4005e9f85dStructure");
var pn = y_;
pn.init();
var gx = class gx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCancelResponse", "p2POrderCancelResponseAttr", "P2POrderCancelResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pn)
        }, !0, pn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gx(new gx.RecordClass({
            p2POrderCancelResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e68e51e7-06a4-0174-8c06-1e6ee756eb05"
    }
};
e(gx, "RC_e68e51e706a401748c061e6ee756eb05");
var Cl = gx;
Cl.init();
var S_ = class S_ extends t.GenericRecordList {
    static getItemType() {
        return Cl
    }
};
e(S_, "RL_4e3b331f6df36e10312e1d92651799b7");
var d_ = S_;
var O_ = class O_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("VerificationCode", "verificationCodeAttr", "VerificationCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(O_, "StartResetPasswordResultRec");
var ln = O_;
ln.init();
var x_ = class x_ extends t.GenericRecordList {
    static getItemType() {
        return ln
    }
};
e(x_, "RL_4e4931d865c8789e9e6ef1d8540ae228");
var g_ = x_;
var xx = class xx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Dxtrade_status", "dxtrade_statusAttr", "Dxtrade_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new st)
        }, !0, st)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xx(new xx.RecordClass({
            dxtrade_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4e51545b-c16a-221a-ad8a-db982c5469bc"
    }
};
e(xx, "RC_4e51545bc16a221aad8adb982c5469bc");
var Ll = xx;
Ll.init();
var R_ = class R_ extends t.GenericRecordList {
    static getItemType() {
        return gs
    }
};
e(R_, "RL_4e7296c1aceb3bd3dd9793888e254d07");
var b_ = R_;
var h_ = class h_ extends t.GenericRecordList {
    static getItemType() {
        return xu
    }
};
e(h_, "RL_4e8f077e202afd0a501d7855e9111a4f");
var I_ = h_;
var G_ = class G_ extends t.GenericRecordList {
    static getItemType() {
        return jc
    }
};
e(G_, "RL_4e941b17c99d61ac0f67eb4722e53670");
var A_ = G_;
var bx = class bx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CountNumber", "countNumberAttr", "CountNumber", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bx(new bx.RecordClass({
            countNumberAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(bx, "ST_b779d4afe9996707919e755f24a47b3cStructure");
var va = bx;
va.init();
var Rx = class Rx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Count", "countAttr", "Count", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new va)
        }, !0, va)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rx(new Rx.RecordClass({
            countAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4ea59a8d-94c1-abfc-d6a0-c16b78f8dd53"
    }
};
e(Rx, "RC_4ea59a8d94c1abfcd6a0c16b78f8dd53");
var vl = Rx;
vl.init();
var P_ = class P_ extends t.GenericRecordList {
    static getItemType() {
        return z
    }
};
e(P_, "RL_4eaa50c04057336ddc344ca84d0b7464");
var w_ = P_;
var E_ = class E_ extends t.GenericRecordList {
    static getItemType() {
        return Uu
    }
};
e(E_, "RL_4f6dde27a1d6ecd82e9d6a4d041d32f3");
var B_ = E_;
var Ix = class Ix extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventRequest", "notificationEventRequestAttr", "NotificationEventRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ks)
        }, !0, ks)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ix(new Ix.RecordClass({
            notificationEventRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4f8f859a-92cd-f3a7-b0ae-8abf2e183a70"
    }
};
e(Ix, "RC_4f8f859a92cdf3a7b0ae8abf2e183a70");
var ql = Ix;
ql.init();
var L_ = class L_ extends t.GenericRecordList {
    static getItemType() {
        return Pt
    }
};
e(L_, "RL_4f9f1230897f0a3e8b129024e1de623d");
var C_ = L_;
var hx = class hx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Initial_deposit_per_country", "initial_deposit_per_countryAttr", "Initial_deposit_per_country3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zt)
        }, !0, zt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hx(new hx.RecordClass({
            initial_deposit_per_countryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50444655-28c9-4ee4-68cc-97cee02c2f31"
    }
};
e(hx, "RC_5044465528c94ee468cc97cee02c2f31");
var jl = hx;
jl.init();
var q_ = class q_ extends t.GenericRecordList {
    static getItemType() {
        return jl
    }
};
e(q_, "RL_4faa698f8fe1178a7e2d85375093f6ee");
var v_ = q_;
var j_ = class j_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Step", "stepAttr", "Step", !1, !1, t.DataTypes.Decimal, function() {
            return Fr.integerToDecimal(1)
        }, !0), this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0), this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(j_, "ST_7167810326c75456a7ce120ed2dbd76bStructure");
var mn = j_;
mn.init();
var Ax = class Ax extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mn)
        }, !0, mn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ax(new Ax.RecordClass({
            rangeSliderOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "4fc16da6-9510-8ad1-b034-b7256ffa868d"
    }
};
e(Ax, "RC_4fc16da695108ad1b034b7256ffa868d");
var kl = Ax;
kl.init();
var U_ = class U_ extends t.GenericRecordList {
    static getItemType() {
        return Bp
    }
};
e(U_, "RL_4feb2fb00f9cd7e5ee8abc58513e6f4d");
var k_ = U_;
var Gx = class Gx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Text", "textAttr", "text", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gx(new Gx.RecordClass({
            textAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Gx, "ST_92400cc7724ed583cb86d67e1fc7e7c5Structure");
var fn = Gx;
fn.init();
var V_ = class V_ extends t.GenericRecordList {
    static getItemType() {
        return fn
    }
};
e(V_, "RL_4ffd9ff6b5fa667b88d79ba8f3c6640e");
var F_ = V_;
var wx = class wx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDCommissionsPasswordErrors", "cFDCommissionsPasswordErrorsAttr", "CFDCommissionsPasswordErrors", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ma)
        }, !0, ma)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wx(new wx.RecordClass({
            cFDCommissionsPasswordErrorsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5008dcf5-6519-ca45-fe79-000670b8bfe1"
    }
};
e(wx, "RC_5008dcf56519ca45fe79000670b8bfe1");
var Ul = wx;
Ul.init();
var N_ = class N_ extends t.GenericRecordList {
    static getItemType() {
        return gt
    }
};
e(N_, "RL_508855d25108765122be317d42e36c82");
var __ = N_;
var z_ = class z_ extends t.GenericRecordList {
    static getItemType() {
        return Ji
    }
};
e(z_, "RL_50d3e0774fce43a1ce1cf3a9009855f8");
var M_ = z_;
var Px = class Px extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentUpload", "documentUploadAttr", "DocumentUpload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ze)
        }, !0, Ze)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Px(new Px.RecordClass({
            documentUploadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "50f2a392-2a1e-7010-2f05-77d9e1e336c7"
    }
};
e(Px, "RC_50f2a3922a1e70102f0577d9e1e336c7");
var Fl = Px;
Fl.init();
var Bx = class Bx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new nn)
        }, !0, nn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bx(new Bx.RecordClass({
            datePickerTimeFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51b1c159-4930-8af5-f9b2-dba7043d5ae6"
    }
};
e(Bx, "RC_51b1c15949308af5f9b2dba7043d5ae6");
var Vl = Bx;
Vl.init();
var Ex = class Ex extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fee", "feeAttr", "Fee3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vt)
        }, !0, Vt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ex(new Ex.RecordClass({
            feeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a77cae61-9f7a-824f-faa6-e30caf3829e5"
    }
};
e(Ex, "RC_a77cae619f7a824ffaa6e30caf3829e5");
var _l = Ex;
_l.init();
var W_ = class W_ extends t.GenericRecordList {
    static getItemType() {
        return _l
    }
};
e(W_, "RL_51c36384638fb46b29235e79e23007b4");
var X_ = W_;
var Cx = class Cx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity", "identityAttr", "Identity3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bt)
        }, !0, Bt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cx(new Cx.RecordClass({
            identityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51c73f64-1f2d-0554-0b68-c15e7660196f"
    }
};
e(Cx, "RC_51c73f641f2d05540b68c15e7660196f");
var Nl = Cx;
Nl.init();
var J_ = class J_ extends t.GenericRecordList {
    static getItemType() {
        return Nt
    }
};
e(J_, "RL_51cb6ee93d723ed4d67f527a1090ade3");
var H_ = J_;
var Y_ = class Y_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pr)
        }, !0, pr), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Mt5_new_account", "mt5_new_accountAttr", "mt5_new_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new sr)
        }, !0, sr), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Y_, "ST_78c818dad6d0af8d67b898e33e5a3dfbStructure");
var Tn = Y_;
Tn.init();
var Lx = class Lx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMT5NewAccountResponse", "postMT5NewAccountResponseAttr", "PostMT5NewAccountResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tn)
        }, !0, Tn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lx(new Lx.RecordClass({
            postMT5NewAccountResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "51e680c6-048a-c999-ddcf-2924d0b41c65"
    }
};
e(Lx, "RC_51e680c6048ac999ddcf2924d0b41c65");
var Ml = Lx;
Ml.init();
var vx = class vx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostPlanRunResponse", "postPlanRunResponseAttr", "PostPlanRunResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ks)
        }, !0, Ks)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vx(new vx.RecordClass({
            postPlanRunResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5241236a-152a-2af5-1c04-3097ec227ddd"
    }
};
e(vx, "RC_5241236a152a2af51c043097ec227ddd");
var zl = vx;
zl.init();
var K_ = class K_ extends t.GenericRecordList {
    static getItemType() {
        return St
    }
};
e(K_, "RL_528837c1d2411489cd3966f16cf99bab");
var Z_ = K_;
var Q_ = class Q_ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !0, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("SeriesName", "seriesNameAttr", "SeriesName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Tooltip", "tooltipAttr", "Tooltip", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Color", "colorAttr", "Color", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Q_, "ST_9498db02a236485a96a27db0bd61b81eStructure");
var Dr = Q_;
Dr.init();
var tN = class tN extends t.GenericRecordList {
    static getItemType() {
        return Dr
    }
};
e(tN, "RL_52a96e0500b1d6d23d93e10409e37890");
var $_ = tN;
var qx = class qx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Service", "serviceAttr", "Service", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tt)
        }, !0, Tt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qx(new qx.RecordClass({
            serviceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c491d711-5400-bc6f-5e71-c50c6432916b"
    }
};
e(qx, "RC_c491d7115400bc6f5e71c50c6432916b");
var Xl = qx;
Xl.init();
var rN = class rN extends t.GenericRecordList {
    static getItemType() {
        return Xl
    }
};
e(rN, "RL_5321f1812704d502d5efc067d0a9fde0");
var eN = rN;
var sN = class sN extends t.GenericRecordList {
    static getItemType() {
        return Kt
    }
};
e(sN, "RL_53248a1b8ab3b0462ffd76c73f4f1eba");
var aN = sN;
var iN = class iN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Status", "statusAttr", "status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iN, "ST_9d1062fa4257a03d2f3c4e1f302af3d7Structure");
var jr = iN;
jr.init();
var oN = class oN extends t.GenericRecordList {
    static getItemType() {
        return jr
    }
};
e(oN, "RL_535207a4cf1e4bc1dcc85faad9d4014e");
var nN = oN;
var uN = class uN extends t.GenericRecordList {
    static getItemType() {
        return ce
    }
};
e(uN, "RL_538ff2f1d030482c84c803644c8c1240");
var cN = uN;
var jx = class jx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt_all_company", "mt_all_companyAttr", "Mt_all_company", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ie)
        }, !0, Ie)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jx(new jx.RecordClass({
            mt_all_companyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cb3c04d8-8b11-4a07-5539-728cafcde6e0"
    }
};
e(jx, "RC_cb3c04d88b114a075539728cafcde6e0");
var Wl = jx;
Wl.init();
var lN = class lN extends t.GenericRecordList {
    static getItemType() {
        return Wl
    }
};
e(lN, "RL_53c372dc61bea6ee9ca5f8120f4350e8");
var pN = lN;
var fN = class fN extends t.GenericRecordList {
    static getItemType() {
        return ra
    }
};
e(fN, "RL_53c5043e2ef1b8d746a3a44abb7a9b98");
var mN = fN;
var TN = class TN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordComplexityPolicyFailed", "passwordComplexityPolicyFailedAttr", "PasswordComplexityPolicyFailed", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("InvalidCredentials", "invalidCredentialsAttr", "InvalidCredentials", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("TooManyFailedAttempts", "tooManyFailedAttemptsAttr", "TooManyFailedAttempts", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(TN, "ChangePasswordFailureReasonRec");
var yr = TN;
yr.init();
var DN = class DN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Success", "successAttr", "Success", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yr)
        }, !0, yr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(DN, "ChangePasswordResultRec");
var Dn = DN;
Dn.init();
var kx = class kx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordResult", "changePasswordResultAttr", "ChangePasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dn)
        }, !0, Dn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kx(new kx.RecordClass({
            changePasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "53d49141-7faf-149f-9fb8-a0dda9c12d06"
    }
};
e(kx, "RC_53d491417faf149f9fb8a0dda9c12d06");
var Hl = kx;
Hl.init();
var Ux = class Ux extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req3", "echo_req3Attr", "Echo_req7", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kt)
        }, !0, kt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ux(new Ux.RecordClass({
            echo_req3Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9156a578-055c-e3e9-05fa-78bea04b423e"
    }
};
e(Ux, "RC_9156a578055ce3e905fa78bea04b423e");
var Jl = Ux;
Jl.init();
var dN = class dN extends t.GenericRecordList {
    static getItemType() {
        return Jl
    }
};
e(dN, "RL_541d7d6fd4a21fe8865c00049e5532a0");
var yN = dN;
var ON = class ON extends t.GenericRecordList {
    static getItemType() {
        return Eo
    }
};
e(ON, "RL_545c5578385333732449204f3e942ed0");
var SN = ON;
var gN = class gN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Service", "serviceAttr", "service", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(gN, "ST_eaa015e1f32bcbf45e00f7d814d7249aStructure");
var yn = gN;
yn.init();
var bN = class bN extends t.GenericRecordList {
    static getItemType() {
        return yn
    }
};
e(bN, "RL_546e1909ff09813803e242c5d08fbfa6");
var xN = bN;
var IN = class IN extends t.GenericRecordList {
    static getItemType() {
        return hs
    }
};
e(IN, "RL_549974f3b4457a3de60891ae7d23d2bc");
var RN = IN;
var AN = class AN extends t.GenericRecordList {
    static getItemType() {
        return Vs
    }
};
e(AN, "RL_54fab648630d41e343fad35c1143481d");
var hN = AN;
var wN = class wN extends t.GenericRecordList {
    static getItemType() {
        return Yi
    }
};
e(wN, "RL_55379448d5b56a955b8b1cc39ca50913");
var GN = wN;
var Fx = class Fx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreateResponse", "p2POrderCreateResponseAttr", "P2POrderCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ls)
        }, !0, Ls)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fx(new Fx.RecordClass({
            p2POrderCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5556936b-5229-2543-d97d-2fca85735389"
    }
};
e(Fx, "RC_5556936b52292543d97d2fca85735389");
var Yl = Fx;
Yl.init();
var PN = class PN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Is_Active", "is_ActiveAttr", "Is_Active", !0, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(PN, "EN_8d1d70f3958628cc0e50b9bd4f5961e8EntityRecord");
var qa = PN;
qa.init();
var Vx = class Vx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qa)
        }, !0, qa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vx(new Vx.RecordClass({
            emailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "555c492e-2e3c-aa25-ad7c-b968c9ec957a"
    }
};
e(Vx, "RC_555c492e2e3caa25ad7cb968c9ec957a");
var Zl = Vx;
Zl.init();
var EN = class EN extends t.GenericRecordList {
    static getItemType() {
        return si
    }
};
e(EN, "RL_556e855874a9b6c53a4ae07106497cfa");
var BN = EN;
var LN = class LN extends t.GenericRecordList {
    static getItemType() {
        return vi
    }
};
e(LN, "RL_55e12cf788c1bd3aa183436567f86c54");
var CN = LN;
var qN = class qN extends t.GenericRecordList {
    static getItemType() {
        return Mu
    }
};
e(qN, "RL_560d4c8f65a370a0f5f40af5ea7ad8af");
var vN = qN;
var kN = class kN extends t.GenericRecordList {
    static getItemType() {
        return ht
    }
};
e(kN, "RL_5615c834166e52223964bada9f9f6329");
var jN = kN;
var UN = class UN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Value", "valueAttr", "Value", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Text", "textAttr", "Text", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(UN, "ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure");
var dn = UN;
dn.init();
var _x = class _x extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dn)
        }, !0, dn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _x(new _x.RecordClass({
            dropdownItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "56805fde-f633-2e01-f13c-0f9217357dbc"
    }
};
e(_x, "RC_56805fdef6332e01f13c0f9217357dbc");
var Kl = _x;
Kl.init();
var Nx = class Nx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IndividualDetailsValidationError", "individualDetailsValidationErrorAttr", "IndividualDetailsValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ia)
        }, !0, Ia)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nx(new Nx.RecordClass({
            individualDetailsValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "56815f7d-21b1-f8fa-946e-a8d30719aa83"
    }
};
e(Nx, "RC_56815f7d21b1f8fa946ea8d30719aa83");
var Ql = Nx;
Ql.init();
var Mx = class Mx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventWithCountry", "eventWithCountryAttr", "EventWithCountry", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $r)
        }, !0, $r)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mx(new Mx.RecordClass({
            eventWithCountryAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6964a34f-c0e3-ef65-062c-2f2457bfaea1"
    }
};
e(Mx, "RC_6964a34fc0e3ef65062c2f2457bfaea1");
var $l = Mx;
$l.init();
var VN = class VN extends t.GenericRecordList {
    static getItemType() {
        return $l
    }
};
e(VN, "RL_569634a06f07384b971e7ec70daad534");
var FN = VN;
var zx = class zx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TestPlanItem", "testPlanItemAttr", "TestPlanItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wr)
        }, !0, wr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zx(new zx.RecordClass({
            testPlanItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a7f4e3a-1273-4846-9560-ba4d7074c0f9"
    }
};
e(zx, "RC_7a7f4e3a127348469560ba4d7074c0f9");
var tm = zx;
tm.init();
var NN = class NN extends t.GenericRecordList {
    static getItemType() {
        return tm
    }
};
e(NN, "RL_56c1f4a22ef29f366042d0c186fb36fa");
var _N = NN;
var Xx = class Xx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Payment_agent", "payment_agentAttr", "Payment_agent3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xt)
        }, !0, Xt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xx(new Xx.RecordClass({
            payment_agentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "56c6ce1b-0108-db2c-43eb-2e512b9aa7da"
    }
};
e(Xx, "RC_56c6ce1b0108db2c43eb2e512b9aa7da");
var em = Xx;
em.init();
var zN = class zN extends t.GenericRecordList {
    static getItemType() {
        return ui
    }
};
e(zN, "RL_571b103d9a95a8c3a2deb1712897dca8");
var MN = zN;
var Wx = class Wx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_accountItem", "trading_platform_accountItemAttr", "Trading_platform_accountItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Er)
        }, !0, Er)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wx(new Wx.RecordClass({
            trading_platform_accountItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7e52722-439a-b79f-06cc-9b853e2e0eda"
    }
};
e(Wx, "RC_b7e52722439ab79f06cc9b853e2e0eda");
var rm = Wx;
rm.init();
var WN = class WN extends t.GenericRecordList {
    static getItemType() {
        return rm
    }
};
e(WN, "RL_57698c22786db8cfbee18c9cbf33ed66");
var XN = WN;
var JN = class JN extends t.GenericRecordList {
    static getItemType() {
        return Zl
    }
};
e(JN, "RL_5802b033679d635392b87202db740282");
var HN = JN;
var ZN = class ZN extends t.GenericRecordList {
    static getItemType() {
        return Qu
    }
};
e(ZN, "RL_581fca9d3fac382e5d136ff857d3462e");
var YN = ZN;
var KN = class KN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Status", "statusAttr", "Status", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(KN, "EN_7e7c6006f18d7aeaad0edc93ed0f62fcEntityRecord");
var ja = KN;
ja.init();
var Hx = class Hx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TestStatusTable", "testStatusTableAttr", "TestStatusTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ja)
        }, !0, ja)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hx(new Hx.RecordClass({
            testStatusTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "58887f4a-4274-72f6-7021-85b7ab32c4c9"
    }
};
e(Hx, "RC_58887f4a427472f6702185b7ab32c4c9");
var am = Hx;
am.init();
var QN = class QN extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(QN, "EN_f2941aa4ceb8548588805d7ea79e08d0EntityRecord");
var ka = QN;
ka.init();
var Jx = class Jx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5FinancialCommisionInfoTable", "mT5FinancialCommisionInfoTableAttr", "MT5FinancialCommisionInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ka)
        }, !0, ka)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Jx(new Jx.RecordClass({
            mT5FinancialCommisionInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "594f80d6-698b-a3ac-9bf2-6419ddae299d"
    }
};
e(Jx, "RC_594f80d6698ba3ac9bf26419ddae299d");
var sm = Jx;
sm.init();
var tM = class tM extends t.GenericRecordList {
    static getItemType() {
        return Fl
    }
};
e(tM, "RL_59f6c38878962f59e9d822ce8cc295b2");
var $N = tM;
var rM = class rM extends t.GenericRecordList {
    static getItemType() {
        return Jp
    }
};
e(rM, "RL_5a17cb0f64de6697951894cea5524431");
var eM = rM;
var Yx = class Yx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PlaceOfBirthValidationError", "placeOfBirthValidationErrorAttr", "PlaceOfBirthValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ta)
        }, !0, Ta)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yx(new Yx.RecordClass({
            placeOfBirthValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5a1a2b25-c120-e4ac-980e-6c6b466fc54f"
    }
};
e(Yx, "RC_5a1a2b25c120e4ac980e6c6b466fc54f");
var im = Yx;
im.init();
var aM = class aM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Link", "linkAttr", "Link", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Thumbnail3", "thumbnail3Attr", "Thumbnail3", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(aM, "EN_5a50b1207c66825bfc9e9688dde972baEntityRecord");
var Ua = aM;
Ua.init();
var iM = class iM extends t.GenericRecordList {
    static getItemType() {
        return Bs
    }
};
e(iM, "RL_5ad725bb1f834f208aba441411dfb7ce");
var sM = iM;
var oM = class oM extends t.GenericRecordList {
    static getItemType() {
        return Lp
    }
};
e(oM, "RL_5b03fcb846a256a3a783d07598b5a229");
var nM = oM;
var Zx = class Zx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsRequest", "setSettingsRequestAttr", "SetSettingsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new aa)
        }, !0, aa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zx(new Zx.RecordClass({
            setSettingsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cd24b51e-c49c-a4f8-08ec-ab137d447838"
    }
};
e(Zx, "RC_cd24b51ec49ca4f808ecab137d447838");
var nm = Zx;
nm.init();
var uM = class uM extends t.GenericRecordList {
    static getItemType() {
        return nm
    }
};
e(uM, "RL_5b60fc2f6c13e2923a01ad7cd0ddff0e");
var cM = uM;
var Kx = class Kx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("KYC_AdditionalDocument", "kYC_AdditionalDocumentAttr", "KYC_AdditionalDocument", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new De)
        }, !0, De)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kx(new Kx.RecordClass({
            kYC_AdditionalDocumentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5b83aabb-b0d4-2636-22ef-07d7fe4b2ce0"
    }
};
e(Kx, "RC_5b83aabbb0d4263622ef07d7fe4b2ce0");
var om = Kx;
om.init();
var Qx = class Qx extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Position", "positionAttr", "Position", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qx(new Qx.RecordClass({
            positionAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Qx, "EN_5d1279724e719322292e34ef3c5500a0EntityRecord");
var Sn = Qx;
Sn.init();
var $x = class $x extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Position", "positionAttr", "Position", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sn)
        }, !0, Sn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $x(new $x.RecordClass({
            positionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5f28219a-5e30-fb90-023f-cbc295513e7c"
    }
};
e($x, "RC_5f28219a5e30fb90023fcbc295513e7c");
var cm = $x;
cm.init();
var lM = class lM extends t.GenericRecordList {
    static getItemType() {
        return cm
    }
};
e(lM, "RL_5ba41fd2555db2daaba8da89df34a9b8");
var pM = lM;
var mM = class mM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Action_type", "action_typeAttr", "action_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Description", "descriptionAttr", "description", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Statement", "statementAttr", "statement", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Limit", "limitAttr", "limit", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Offset", "offsetAttr", "offset", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mM, "ST_5685a40fa48e8876538e1df2a0c39d3eStructure");
var dr = mM;
dr.init();
var fM = class fM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dr)
        }, !0, dr), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Statement", "statementAttr", "statement", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new me)
        }, !0, me)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fM, "ST_857e70f98678e5b68f53de5829bd685aStructure");
var On = fM;
On.init();
var tb = class tb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementResponse", "statementResponseAttr", "StatementResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new On)
        }, !0, On)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tb(new tb.RecordClass({
            statementResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "905d6976-00d1-c54d-4a69-5286706965fc"
    }
};
e(tb, "RC_905d697600d1c54d4a695286706965fc");
var um = tb;
um.init();
var DM = class DM extends t.GenericRecordList {
    static getItemType() {
        return um
    }
};
e(DM, "RL_5c7e4c6a39ce75c4706471fcf0bc97b4");
var TM = DM;
var eb = class eb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreate", "p2PAdvertCreateAttr", "P2PAdvertCreate", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pe)
        }, !0, pe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eb(new eb.RecordClass({
            p2PAdvertCreateAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5cf1b34e-d2ad-7e7e-10f9-b1f73ac14122"
    }
};
e(eb, "RC_5cf1b34ed2ad7e7e10f9b1f73ac14122");
var pm = eb;
pm.init();
var rb = class rb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UpdateUserFailureReason", "updateUserFailureReasonAttr", "UpdateUserFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rr)
        }, !0, rr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rb(new rb.RecordClass({
            updateUserFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "5d4c0a98-b977-3e48-9e7e-27bfe5360793"
    }
};
e(rb, "RC_5d4c0a98b9773e489e7e27bfe5360793");
var lm = rb;
lm.init();
var dM = class dM extends t.GenericRecordList {
    static getItemType() {
        return ct
    }
};
e(dM, "RL_5da010aef0d1afcd66c759013df89e34");
var yM = dM;
var OM = class OM extends t.GenericRecordList {
    static getItemType() {
        return em
    }
};
e(OM, "RL_5db208bc12424f6e7604bf538be9d9a9");
var SM = OM;
var gM = class gM extends t.GenericRecordList {
    static getItemType() {
        return vr
    }
};
e(gM, "RL_cdb3f12da2c928d2f50e403534a82d1e");
var ab = gM;
var xM = class xM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_list", "account_listAttr", "account_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new ab)
        }, !0, ab), this.attr("Balance", "balanceAttr", "balance", !1, !1, t.DataTypes.Decimal, function() {
            return t.Decimal.defaultValue
        }, !0), this.attr("Country", "countryAttr", "country", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Currency", "currencyAttr", "currency", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "email", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Fullname", "fullnameAttr", "fullname", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Is_virtual", "is_virtualAttr", "is_virtual", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Landing_company_fullname", "landing_company_fullnameAttr", "landing_company_fullname", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Landing_company_name", "landing_company_nameAttr", "landing_company_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Local_currencies", "local_currenciesAttr", "local_currencies", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ar)
        }, !0, ar), this.attr("Loginid", "loginidAttr", "loginid", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Preferred_language", "preferred_languageAttr", "preferred_language", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Scopes", "scopesAttr", "scopes", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("Upgradeable_landing_companies", "upgradeable_landing_companiesAttr", "upgradeable_landing_companies", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new t.TextList)
        }, !0, t.TextList), this.attr("User_id", "user_idAttr", "user_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xM, "ST_328c83c38f97bef0d26efcff47040359Structure");
var Sr = xM;
Sr.init();
var sb = class sb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "authorize", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sb(new sb.RecordClass({
            authorizeAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(sb, "ST_870a57499f5823024d83cfe455822b86Structure");
var Or = sb;
Or.init();
var bM = class bM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "authorize", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sr)
        }, !0, Sr), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Or)
        }, !0, Or), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(bM, "ST_5704bf4b81a79ea92b14c563cc98154bStructure");
var gn = bM;
gn.init();
var IM = class IM extends t.GenericRecordList {
    static getItemType() {
        return gn
    }
};
e(IM, "RL_5e5ec69271e920fb7cafebfca681f7d6");
var RM = IM;
var hM = class hM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MinTime", "minTimeAttr", "MinTime", !1, !1, t.DataTypes.Time, function() {
            return t.DateTime.defaultValue
        }, !0), this.attr("MaxTime", "maxTimeAttr", "MaxTime", !1, !1, t.DataTypes.Time, function() {
            return t.DateTime.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(hM, "ST_b96c67f06fdfae580256b7081d85460dStructure");
var xn = hM;
xn.init();
var GM = class GM extends t.GenericRecordList {
    static getItemType() {
        return xn
    }
};
e(GM, "RL_5f1eb42ec5e25a70109aeb71587a7f0b");
var AM = GM;
var PM = class PM extends t.GenericRecordList {
    static getItemType() {
        return Qt
    }
};
e(PM, "RL_5f96baf85bbca68a104650af9c95a482");
var wM = PM;
var ib = class ib extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsPlansTableData", "cFDsPlansTableDataAttr", "CFDsPlansTableData", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ot)
        }, !0, Ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ib(new ib.RecordClass({
            cFDsPlansTableDataAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "68ac16d5-2444-e599-2cfc-1456c72a3eb3"
    }
};
e(ib, "RC_68ac16d52444e5992cfc1456c72a3eb3");
var mm = ib;
mm.init();
var EM = class EM extends t.GenericRecordList {
    static getItemType() {
        return mm
    }
};
e(EM, "RL_5fc243903ae10beb07a4a2c827ee50d1");
var BM = EM;
var LM = class LM extends t.GenericRecordList {
    static getItemType() {
        return ze
    }
};
e(LM, "RL_5fd11e861ff8404974ab23ab133b96b9");
var CM = LM;
var nb = class nb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Notification_event", "notification_eventAttr", "notification_event", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nb(new nb.RecordClass({
            notification_eventAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(nb, "ST_dd93278b2756b05a5d284868241cc3d7Structure");
var bn = nb;
bn.init();
var qM = class qM extends t.GenericRecordList {
    static getItemType() {
        return bn
    }
};
e(qM, "RL_602374ca64bbf9e26533dca6775aa750");
var vM = qM;
var kM = class kM extends t.GenericRecordList {
    static getItemType() {
        return Ea
    }
};
e(kM, "RL_606bd321243a908f1a5ba8f05b4c4e55");
var jM = kM;
var UM = class UM extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_relations", "advertiser_relationsAttr", "p2p_advertiser_relations", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(UM, "ST_417bf9c3f6ce648dc8e6f005a5b6ba26Structure");
var Rn = UM;
Rn.init();
var VM = class VM extends t.GenericRecordList {
    static getItemType() {
        return Rn
    }
};
e(VM, "RL_60aa1ccd6c64fd81d5fcb96f2a83dfd1");
var FM = VM;
var ob = class ob extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsResponse", "p2PAdvertiserRelationsResponseAttr", "P2PAdvertiserRelationsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rn)
        }, !0, Rn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ob(new ob.RecordClass({
            p2PAdvertiserRelationsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c3c26eca-f28f-4142-ec61-613a2af66795"
    }
};
e(ob, "RC_c3c26ecaf28f4142ec61613a2af66795");
var fm = ob;
fm.init();
var NM = class NM extends t.GenericRecordList {
    static getItemType() {
        return fm
    }
};
e(NM, "RL_60cd4e292ea47ae7340affa43c25fbca");
var _M = NM;
var cb = class cb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported", "documents_supportedAttr", "Documents_supported", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new pt)
        }, !0, pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cb(new cb.RecordClass({
            documents_supportedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61247e0b-6472-9cac-8e6e-357df0db7eed"
    }
};
e(cb, "RC_61247e0b64729cac8e6e357df0db7eed");
var Tm = cb;
Tm.init();
var ub = class ub extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_settingItem", "partner_settingItemAttr", "Partner_settingItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gr)
        }, !0, Gr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ub(new ub.RecordClass({
            partner_settingItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "af41a824-8bec-9d37-1332-c6d1030994d1"
    }
};
e(ub, "RC_af41a8248bec9d371332c6d1030994d1");
var Dm = ub;
Dm.init();
var zM = class zM extends t.GenericRecordList {
    static getItemType() {
        return Dm
    }
};
e(zM, "RL_61663a8f8c45cf7747ae131a649be82c");
var MM = zM;
var WM = class WM extends t.GenericRecordList {
    static getItemType() {
        return Zt
    }
};
e(WM, "RL_617ce086b197e1cd7e2af2a1c0d1c20b");
var XM = WM;
var pb = class pb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Local_currency", "local_currencyAttr", "Local_currency", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ae)
        }, !0, ae)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pb(new pb.RecordClass({
            local_currencyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61df84f9-9699-2899-1e57-5f5d3cdeb6cf"
    }
};
e(pb, "RC_61df84f9969928991e575f5d3cdeb6cf");
var ym = pb;
ym.init();
var lb = class lb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Server_info", "server_infoAttr", "Server_info", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new or)
        }, !0, or)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lb(new lb.RecordClass({
            server_infoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "61e849a6-b27c-65d4-f84d-a11bc7fcd961"
    }
};
e(lb, "RC_61e849a6b27c65d4f84da11bc7fcd961");
var dm = lb;
dm.init();
var mb = class mb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "Echo_req5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ht)
        }, !0, Ht)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mb(new mb.RecordClass({
            echo_reqAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "623a04a7-e1c6-88b7-ec13-3f2b7ca28f8e"
    }
};
e(mb, "RC_623a04a7e1c688b7ec133f2b7ca28f8e");
var Sm = mb;
Sm.init();
var JM = class JM extends t.GenericRecordList {
    static getItemType() {
        return Ve
    }
};
e(JM, "RL_62713af495cafb0f42fc60b0b962185a");
var HM = JM;
var ZM = class ZM extends t.GenericRecordList {
    static getItemType() {
        return Ba
    }
};
e(ZM, "RL_627de0b69ec66602894c3c67acbee6a3");
var YM = ZM;
var QM = class QM extends t.GenericRecordList {
    static getItemType() {
        return No
    }
};
e(QM, "RL_62db41b41dbf507c50e0bafe4d455ef4");
var KM = QM;
var t2 = class t2 extends t.GenericRecordList {
    static getItemType() {
        return ur
    }
};
e(t2, "RL_6389593f218720e640897f2a30c71a02");
var $M = t2;
var r2 = class r2 extends t.GenericRecordList {
    static getItemType() {
        return xa
    }
};
e(r2, "RL_63c0d280fae1c76c130bb4eaa6325fae");
var e2 = r2;
var fb = class fb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PlaceOfBirthValidFields", "placeOfBirthValidFieldsAttr", "PlaceOfBirthValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Da)
        }, !0, Da)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fb(new fb.RecordClass({
            placeOfBirthValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "63c9f922-44fc-7d95-4d74-284c6de7d388"
    }
};
e(fb, "RC_63c9f92244fc7d954d74284c6de7d388");
var Om = fb;
Om.init();
var Tb = class Tb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize3", "authorize3Attr", "Authorize3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Or)
        }, !0, Or)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Tb(new Tb.RecordClass({
            authorize3Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "642aabe8-5fdb-3eb2-ce28-228a997dfa13"
    }
};
e(Tb, "RC_642aabe85fdb3eb2ce28228a997dfa13");
var gm = Tb;
gm.init();
var Db = class Db extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventSpeakerMapping", "eventSpeakerMappingAttr", "EventSpeakerMapping", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ne)
        }, !0, Ne)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Db(new Db.RecordClass({
            eventSpeakerMappingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c31db94f-669a-fbd2-940e-333d10b15caf"
    }
};
e(Db, "RC_c31db94f669afbd2940e333d10b15caf");
var xm = Db;
xm.init();
var s2 = class s2 extends t.GenericRecordList {
    static getItemType() {
        return xm
    }
};
e(s2, "RL_645bd694744635e63a6e9c2ba8a12113");
var a2 = s2;
var yb = class yb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostMessageRequest", "postMessageRequestAttr", "PostMessageRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fn)
        }, !0, fn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yb(new yb.RecordClass({
            postMessageRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "645e6d99-c629-50d5-33c6-73c938aae9c2"
    }
};
e(yb, "RC_645e6d99c62950d533c673c938aae9c2");
var bm = yb;
bm.init();
var i2 = class i2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Shape", "shapeAttr", "Shape", !1, !1, t.DataTypes.Text, function() {
            return Ii.shape.rounded
        }, !0), this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(i2, "ST_eb161a8909408fbd30eac1833398f018Structure");
var In = i2;
In.init();
var db = class db extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new In)
        }, !0, In)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new db(new db.RecordClass({
            progressCircleOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "646e6c02-297b-69c2-ac89-36bd87cff545"
    }
};
e(db, "RC_646e6c02297b69c2ac8936bd87cff545");
var Rm = db;
Rm.init();
var o2 = class o2 extends t.GenericRecordList {
    static getItemType() {
        return ut
    }
};
e(o2, "RL_64d4432e93c4c639d6d9c3570ad64bb3");
var n2 = o2;
var Sb = class Sb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trigger", "triggerAttr", "Trigger", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Js)
        }, !0, Js)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sb(new Sb.RecordClass({
            triggerAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ab84a98a-3ac9-de80-e927-8e5b21681a23"
    }
};
e(Sb, "RC_ab84a98a3ac9de80e9278e5b21681a23");
var Im = Sb;
Im.init();
var u2 = class u2 extends t.GenericRecordList {
    static getItemType() {
        return Im
    }
};
e(u2, "RL_6534465d8eaff1ed770420b9742876dc");
var c2 = u2;
var Ob = class Ob extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Order_id", "order_idAttr", "order_id", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ob(new Ob.RecordClass({
            order_idAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(Ob, "ST_8f98c50b947141d1bd6783e2abc5e9e4Structure");
var hn = Ob;
hn.init();
var gb = class gb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PChatCreateRequest", "p2PChatCreateRequestAttr", "P2PChatCreateRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new hn)
        }, !0, hn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gb(new gb.RecordClass({
            p2PChatCreateRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6554cbff-778b-b836-f708-19c17df738b2"
    }
};
e(gb, "RC_6554cbff778bb836f70819c17df738b2");
var hm = gb;
hm.init();
var l2 = class l2 extends t.GenericRecordList {
    static getItemType() {
        return mt
    }
};
e(l2, "RL_6574d6863458b7ea468f69130f5ace60");
var p2 = l2;
var f2 = class f2 extends t.GenericRecordList {
    static getItemType() {
        return Qi
    }
};
e(f2, "RL_65b4601c7246ad02da4e6c18fe619d03");
var m2 = f2;
var T2 = class T2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SeriesName", "seriesNameAttr", "SeriesName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DataSeriesJSON", "dataSeriesJSONAttr", "DataSeriesJSON", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(T2, "ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure");
var kr = T2;
kr.init();
var xb = class xb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_AdvancedDataSeriesFormat", "legacy_AdvancedDataSeriesFormatAttr", "Legacy_AdvancedDataSeriesFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kr)
        }, !0, kr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xb(new xb.RecordClass({
            legacy_AdvancedDataSeriesFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3eb1896-9a1d-0856-d6aa-6db7946dac4d"
    }
};
e(xb, "RC_e3eb18969a1d0856d6aa6db7946dac4d");
var Am = xb;
Am.init();
var y2 = class y2 extends t.GenericRecordList {
    static getItemType() {
        return Am
    }
};
e(y2, "RL_65d3df966a7e3cf88a00a473fc2b09d2");
var D2 = y2;
var S2 = class S2 extends t.GenericRecordList {
    static getItemType() {
        return Ht
    }
};
e(S2, "RL_66079fd510547022662fad21af9161f1");
var d2 = S2;
var bb = class bb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_listItem", "account_listItemAttr", "Account_listItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Rr)
        }, !0, Rr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bb(new bb.RecordClass({
            account_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f481c39b-6dc5-7144-1408-fc418f17e793"
    }
};
e(bb, "RC_f481c39b6dc571441408fc418f17e793");
var Gm = bb;
Gm.init();
var g2 = class g2 extends t.GenericRecordList {
    static getItemType() {
        return Gm
    }
};
e(g2, "RL_6611d2d9fcbfcbfe8fb57800c9eecc82");
var O2 = g2;
var x2 = class x2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lr)
        }, !0, lr), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_password_change", "trading_platform_password_changeAttr", "trading_platform_password_change", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(x2, "ST_e184b5e893ff6633d3c7357dd29941faStructure");
var An = x2;
An.init();
var Rb = class Rb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeResponse", "postTradingPlatformPasswordChangeResponseAttr", "PostTradingPlatformPasswordChangeResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new An)
        }, !0, An)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rb(new Rb.RecordClass({
            postTradingPlatformPasswordChangeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ff4ee45-dfc9-2afe-92e4-874530f95001"
    }
};
e(Rb, "RC_6ff4ee45dfc92afe92e4874530f95001");
var wm = Rb;
wm.init();
var R2 = class R2 extends t.GenericRecordList {
    static getItemType() {
        return wm
    }
};
e(R2, "RL_66125dc2e07150403638a7f77e4d88ff");
var b2 = R2;
var h2 = class h2 extends t.GenericRecordList {
    static getItemType() {
        return dp
    }
};
e(h2, "RL_662f9a01faab4debe4196401f9ed4c71");
var I2 = h2;
var A2 = class A2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("English", "englishAttr", "English", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Arabic", "arabicAttr", "Arabic", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(A2, "EN_b4f43c10c367dc23b48b95922d30bd17EntityRecord");
var Fa = A2;
Fa.init();
var Ib = class Ib extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Messages", "messagesAttr", "Messages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fa)
        }, !0, Fa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ib(new Ib.RecordClass({
            messagesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9a69c033-e623-a431-f3a4-9714efbab2bd"
    }
};
e(Ib, "RC_9a69c033e623a431f3a49714efbab2bd");
var Pm = Ib;
Pm.init();
var w2 = class w2 extends t.GenericRecordList {
    static getItemType() {
        return Pm
    }
};
e(w2, "RL_66e9181738e5aaaf266c0bcbbbbba5a1");
var G2 = w2;
var B2 = class B2 extends t.GenericRecordList {
    static getItemType() {
        return pi
    }
};
e(B2, "RL_67211e5ef9090bf1006a3e1da6767024");
var P2 = B2;
var E2 = class E2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Alpha2Code", "alpha2CodeAttr", "Alpha2Code", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("LanguageName", "languageNameAttr", "LanguageName", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(E2, "EN_ac6f62956e278d5390a5f27c607338d0EntityRecord");
var Gn = E2;
Gn.init();
var hb = class hb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Gn)
        }, !0, Gn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hb(new hb.RecordClass({
            datePickerLanguageAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "673cc0a6-3dbc-3f58-36f7-732ba0712544"
    }
};
e(hb, "RC_673cc0a63dbc3f5836f7732ba0712544");
var Bm = hb;
Bm.init();
var Ab = class Ab extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("All", "allAttr", "All", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Se)
        }, !0, Se)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ab(new Ab.RecordClass({
            allAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fb91f9ea-b17d-1348-84b2-213f47fb4a68"
    }
};
e(Ab, "RC_fb91f9eab17d134884b2213f47fb4a68");
var Em = Ab;
Em.init();
var L2 = class L2 extends t.GenericRecordList {
    static getItemType() {
        return Em
    }
};
e(L2, "RL_6742097cd0e1b80b9f740ab5594fc0b1");
var C2 = L2;
var q2 = class q2 extends t.GenericRecordList {
    static getItemType() {
        return Ot
    }
};
e(q2, "RL_67489198c39fbcf1ac201784c943f33a");
var v2 = q2;
var k2 = class k2 extends t.GenericRecordList {
    static getItemType() {
        return cc
    }
};
e(k2, "RL_6753b1849ff4bc19e62c553317f17751");
var j2 = k2;
var F2 = class F2 extends t.GenericRecordList {
    static getItemType() {
        return xs
    }
};
e(F2, "RL_67903d82f67a613e6457850e3fe75a1b");
var U2 = F2;
var _2 = class _2 extends t.GenericRecordList {
    static getItemType() {
        return dc
    }
};
e(_2, "RL_682331dd8419e94ee9d9a269052472d4");
var V2 = _2;
var Gb = class Gb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address_line_", "address_line_Attr", "Address_line_", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new b)
        }, !0, b)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gb(new Gb.RecordClass({
            address_line_Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "682f9122-89e0-ec9e-8311-c537097d9585"
    }
};
e(Gb, "RC_682f912289e0ec9e8311c537097d9585");
var Cm = Gb;
Cm.init();
var N2 = class N2 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FirstName", "firstNameAttr", "FirstName", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("LastName", "lastNameAttr", "LastName", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("DateOfBirth", "dateOfBirthAttr", "DateOfBirth", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(N2, "ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure");
var Va = N2;
Va.init();
var z2 = class z2 extends t.GenericRecordList {
    static getItemType() {
        return Va
    }
};
e(z2, "RL_687b63111dd8ad44eb25d2280ecb58fd");
var M2 = z2;
var W2 = class W2 extends t.GenericRecordList {
    static getItemType() {
        return Mt
    }
};
e(W2, "RL_687d5246fd214b4298d42d80fa4abd54");
var X2 = W2;
var J2 = class J2 extends t.GenericRecordList {
    static getItemType() {
        return Hi
    }
};
e(J2, "RL_68be9dd68c0e161ac2c65c1092c999e6");
var H2 = J2;
var Z2 = class Z2 extends t.GenericRecordList {
    static getItemType() {
        return Ul
    }
};
e(Z2, "RL_68c70e90a56f763a58cac53aabe21635");
var Y2 = Z2;
var Q2 = class Q2 extends t.GenericRecordList {
    static getItemType() {
        return ee
    }
};
e(Q2, "RL_68d94344bca87ca3c6e8048bda3cfcff");
var K2 = Q2;
var wb = class wb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertCreateResponse", "p2PAdvertCreateResponseAttr", "P2PAdvertCreateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Cs)
        }, !0, Cs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wb(new wb.RecordClass({
            p2PAdvertCreateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b0469763-808d-c073-8ee5-33d3241a3fc4"
    }
};
e(wb, "RC_b0469763808dc0738ee533d3241a3fc4");
var Lm = wb;
Lm.init();
var tz = class tz extends t.GenericRecordList {
    static getItemType() {
        return Lm
    }
};
e(tz, "RL_69045c5eb3eae12903ebdf79ae78ffdb");
var $2 = tz;
var rz = class rz extends t.GenericRecordList {
    static getItemType() {
        return $p
    }
};
e(rz, "RL_69ca4bc8038345e2219991dcaa3abf35");
var ez = rz;
var sz = class sz extends t.GenericRecordList {
    static getItemType() {
        return We
    }
};
e(sz, "RL_6a09e143d0e4a59a21ce23725d2e887e");
var az = sz;
var Pb = class Pb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Passport", "passportAttr", "Passport", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new D)
        }, !0, D)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Pb(new Pb.RecordClass({
            passportAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bca9fdc5-bae6-f7d1-e7c9-f66cae277937"
    }
};
e(Pb, "RC_bca9fdc5bae6f7d1e7c9f66cae277937");
var vm = Pb;
vm.init();
var nz = class nz extends t.GenericRecordList {
    static getItemType() {
        return vm
    }
};
e(nz, "RL_6a247ddb1b875bf472d001a74076b191");
var iz = nz;
var cz = class cz extends t.GenericRecordList {
    static getItemType() {
        return Z
    }
};
e(cz, "RL_6a534bbcb28aa4f96e8b5853e0208016");
var oz = cz;
var Bb = class Bb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity2", "identity2Attr", "Identity2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oe)
        }, !0, oe)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Bb(new Bb.RecordClass({
            identity2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6a71f9dc-e751-66d7-6993-18075e64be6d"
    }
};
e(Bb, "RC_6a71f9dce75166d7699318075e64be6d");
var qm = Bb;
qm.init();
var Eb = class Eb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req2", "echo_req2Attr", "Echo_req2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new B)
        }, !0, B)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Eb(new Eb.RecordClass({
            echo_req2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6a75354f-a4c2-2f10-c7d3-494623ca83be"
    }
};
e(Eb, "RC_6a75354fa4c22f10c7d3494623ca83be");
var jm = Eb;
jm.init();
var pz = class pz extends t.GenericRecordList {
    static getItemType() {
        return Cc
    }
};
e(pz, "RL_6ab251fa7982343300d60d8656ef0279");
var uz = pz;
var lz = class lz extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_list", "order_listAttr", "p2p_order_list", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(lz, "ST_d48bf8d95ece559f969e94f01654ff6bStructure");
var wn = lz;
wn.init();
var Cb = class Cb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderListResponse", "p2POrderListResponseAttr", "P2POrderListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wn)
        }, !0, wn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Cb(new Cb.RecordClass({
            p2POrderListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ad9207e-51a4-b642-b6e1-db89f79e31b5"
    }
};
e(Cb, "RC_6ad9207e51a4b642b6e1db89f79e31b5");
var km = Cb;
km.init();
var mz = class mz extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Verification_code", "verification_codeAttr", "verification_code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Dry_run", "dry_runAttr", "dry_run", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(mz, "ST_c9c05587514bf40891ef7d6e333dc809Structure");
var Pn = mz;
Pn.init();
var Tz = class Tz extends t.GenericRecordList {
    static getItemType() {
        return Pn
    }
};
e(Tz, "RL_6adb6e7c3b995869d80f7cca91748aa8");
var fz = Tz;
var yz = class yz extends t.GenericRecordList {
    static getItemType() {
        return Ri
    }
};
e(yz, "RL_6aefb6b34ff9f8b6e1084c5b438522bb");
var Dz = yz;
var Lb = class Lb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authentication", "authenticationAttr", "Authentication", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ce)
        }, !0, ce)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Lb(new Lb.RecordClass({
            authenticationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6afb7faf-6b2a-5fdc-14e3-fd34318f5ba5"
    }
};
e(Lb, "RC_6afb7faf6b2a5fdc14e3fd34318f5ba5");
var Um = Lb;
Um.init();
var vb = class vb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "Website_status3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wt)
        }, !0, Wt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vb(new vb.RecordClass({
            website_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6bf0b0ff-c630-1cb0-6881-8135121fba90"
    }
};
e(vb, "RC_6bf0b0ffc6301cb068818135121fba90");
var Fm = vb;
Fm.init();
var Sz = class Sz extends t.GenericRecordList {
    static getItemType() {
        return Ie
    }
};
e(Sz, "RL_6c06f81aeda50ab8c2d5788ceef7d4fc");
var dz = Sz;
var gz = class gz extends t.GenericRecordList {
    static getItemType() {
        return Ic
    }
};
e(gz, "RL_6c0d37b49870d4d159723ff35b01e012");
var Oz = gz;
var bz = class bz extends t.GenericRecordList {
    static getItemType() {
        return Rs
    }
};
e(bz, "RL_6c516272c5b3311f4dfc181117b96b16");
var xz = bz;
var qb = class qb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currencies_config", "currencies_configAttr", "Currencies_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new at)
        }, !0, at)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qb(new qb.RecordClass({
            currencies_configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6c51c666-49f8-fcb2-9b35-426854249357"
    }
};
e(qb, "RC_6c51c66649f8fcb29b35426854249357");
var Vm = qb;
Vm.init();
var Iz = class Iz extends t.GenericRecordList {
    static getItemType() {
        return wu
    }
};
e(Iz, "RL_6cc055cc55710603767f0fd9910db36c");
var Rz = Iz;
var Az = class Az extends t.GenericRecordList {
    static getItemType() {
        return xl
    }
};
e(Az, "RL_6cc6cf468d4e55dff2682f40779f25aa");
var hz = Az;
var jb = class jb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_DataPoint", "legacy_DataPointAttr", "Legacy_DataPoint", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dr)
        }, !0, Dr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jb(new jb.RecordClass({
            legacy_DataPointAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1"
    }
};
e(jb, "RC_6ceb0a54ddbc92446ab66e8c847870c1");
var _m = jb;
_m.init();
var kb = class kb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Onfido", "onfidoAttr", "Onfido", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ft)
        }, !0, ft)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kb(new kb.RecordClass({
            onfidoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e70fafe9-612d-d12c-b3b3-f591b7825932"
    }
};
e(kb, "RC_e70fafe9612dd12cb3b3f591b7825932");
var Nm = kb;
Nm.init();
var wz = class wz extends t.GenericRecordList {
    static getItemType() {
        return Nm
    }
};
e(wz, "RL_6d221bb77e8713fb00452c33abb3e846");
var Gz = wz;
var Bz = class Bz extends t.GenericRecordList {
    static getItemType() {
        return et
    }
};
e(Bz, "RL_6d251545ccd757184cb56eb413debf18");
var Pz = Bz;
var Cz = class Cz extends t.GenericRecordList {
    static getItemType() {
        return Le
    }
};
e(Cz, "RL_6d35299704f3eec23ed812a5a367da37");
var Ez = Cz;
var Lz = class Lz extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Req_id", "req_idAttr", "req_id", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Trading_platform_password_reset", "trading_platform_password_resetAttr", "trading_platform_password_reset", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Lz, "ST_07c55c1e5241bcf8a9665901701e0dbfStructure");
var Bn = Lz;
Bn.init();
var qz = class qz extends t.GenericRecordList {
    static getItemType() {
        return Bn
    }
};
e(qz, "RL_6d8078983e84d9f62576b9b597c42453");
var vz = qz;
var kz = class kz extends t.GenericRecordList {
    static getItemType() {
        return k
    }
};
e(kz, "RL_6daa7fd7043bd22e153f9e359a31e19f");
var jz = kz;
var Fz = class Fz extends t.GenericRecordList {
    static getItemType() {
        return La
    }
};
e(Fz, "RL_6dbbf02a4665986883d0e9dbec050d5b");
var Uz = Fz;
var Ub = class Ub extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Links", "linksAttr", "Links", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ca)
        }, !0, Ca)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ub(new Ub.RecordClass({
            linksAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d3634c53-2c52-6ffe-7f0e-5eb9c98258b9"
    }
};
e(Ub, "RC_d3634c532c526ffe7f0e5eb9c98258b9");
var Mm = Ub;
Mm.init();
var _z = class _z extends t.GenericRecordList {
    static getItemType() {
        return Mm
    }
};
e(_z, "RL_6dbe5cbec4359da825ec778f9ae3fe0b");
var Vz = _z;
var Mz = class Mz extends t.GenericRecordList {
    static getItemType() {
        return yp
    }
};
e(Mz, "RL_6ded88896f4420155f9228fa8926d25d");
var Nz = Mz;
var Xz = class Xz extends t.GenericRecordList {
    static getItemType() {
        return Fe
    }
};
e(Xz, "RL_6e4709c964d7b46a3afebff315d0d559");
var zz = Xz;
var Fb = class Fb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity", "identityAttr", "Identity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dt)
        }, !0, Dt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Fb(new Fb.RecordClass({
            identityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6ed70ee7-17bf-0900-eb8e-06c219db56ee"
    }
};
e(Fb, "RC_6ed70ee717bf0900eb8e06c219db56ee");
var zm = Fb;
zm.init();
var Vb = class Vb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PersonalDetailsValidFields", "personalDetailsValidFieldsAttr", "PersonalDetailsValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Va)
        }, !0, Va)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Vb(new Vb.RecordClass({
            personalDetailsValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "6f4c6d64-3c38-fc73-93e8-69b67917268e"
    }
};
e(Vb, "RC_6f4c6d643c38fc7393e869b67917268e");
var Xm = Vb;
Xm.init();
var Hz = class Hz extends t.GenericRecordList {
    static getItemType() {
        return oe
    }
};
e(Hz, "RL_6fc3333f685ab59772d893597401dc0f");
var Wz = Hz;
var Yz = class Yz extends t.GenericRecordList {
    static getItemType() {
        return Wc
    }
};
e(Yz, "RL_6fd5ceba4a344fe3bd560a02ec48fa9b");
var Jz = Yz;
var Zz = class Zz extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PhoneWidth", "phoneWidthAttr", "PhoneWidth", !1, !1, t.DataTypes.Integer, function() {
            return 767
        }, !0), this.attr("TabletWidth", "tabletWidthAttr", "TabletWidth", !1, !1, t.DataTypes.Integer, function() {
            return 1024
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(Zz, "ST_0262e6910ebecc922f633b08db78d688Structure");
var En = Zz;
En.init();
var _b = class _b extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new En)
        }, !0, En)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _b(new _b.RecordClass({
            deviceConfigurationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "abb6a3eb-a858-3e4a-b062-5de8f38fb719"
    }
};
e(_b, "RC_abb6a3eba8583e4ab0625de8f38fb719");
var Wm = _b;
Wm.init();
var Qz = class Qz extends t.GenericRecordList {
    static getItemType() {
        return Wm
    }
};
e(Qz, "RL_703668b187ab39de3436f6485526e12a");
var Kz = Qz;
var Nb = class Nb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Service", "serviceAttr", "Service3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pt)
        }, !0, Pt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Nb(new Nb.RecordClass({
            serviceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7096ca00-9972-8124-fcaf-f6ac0bf8440c"
    }
};
e(Nb, "RC_7096ca0099728124fcaff6ac0bf8440c");
var Hm = Nb;
Hm.init();
var Mb = class Mb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("VerifyEmailPayload", "verifyEmailPayloadAttr", "VerifyEmailPayload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jr)
        }, !0, Jr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Mb(new Mb.RecordClass({
            verifyEmailPayloadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "79570c01-8419-cf20-5b6b-1363497623c8"
    }
};
e(Mb, "RC_79570c018419cf205b6b1363497623c8");
var Jm = Mb;
Jm.init();
var tX = class tX extends t.GenericRecordList {
    static getItemType() {
        return Jm
    }
};
e(tX, "RL_70a8331f6beea7f27870b3bf7babd9e9");
var $z = tX;
var eX = class eX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CompanyName", "companyNameAttr", "CompanyName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CompanyRegistrationNumber", "companyRegistrationNumberAttr", "CompanyRegistrationNumber", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CompanyWebsite", "companyWebsiteAttr", "CompanyWebsite", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(eX, "ST_d4a90cbee654cb75906c44b5d5aefa81Structure");
var _a = eX;
_a.init();
var zb = class zb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CompanyDetailsValidationError", "companyDetailsValidationErrorAttr", "CompanyDetailsValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _a)
        }, !0, _a)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zb(new zb.RecordClass({
            companyDetailsValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "70caa5bf-961b-8492-5359-385fa1237198"
    }
};
e(zb, "RC_70caa5bf961b84925359385fa1237198");
var Ym = zb;
Ym.init();
var aX = class aX extends t.GenericRecordList {
    static getItemType() {
        return gm
    }
};
e(aX, "RL_70cbcd4f3fa22ae115b8f290ce9c0859");
var rX = aX;
var Xb = class Xb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ResetPasswordPayload", "resetPasswordPayloadAttr", "ResetPasswordPayload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ra)
        }, !0, ra)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Xb(new Xb.RecordClass({
            resetPasswordPayloadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "70fc701e-c108-9fcf-9915-5a06492a06f2"
    }
};
e(Xb, "RC_70fc701ec1089fcf99155a06492a06f2");
var Zm = Xb;
Zm.init();
var iX = class iX extends t.GenericRecordList {
    static getItemType() {
        return Oi
    }
};
e(iX, "RL_718bfa5485b42466fae8f4ad1fc16180");
var sX = iX;
var oX = class oX extends t.GenericRecordList {
    static getItemType() {
        return J
    }
};
e(oX, "RL_720c5f8bdedf3ce92188a2fbe493fa9c");
var nX = oX;
var uX = class uX extends t.GenericRecordList {
    static getItemType() {
        return Do
    }
};
e(uX, "RL_72c34bc3168c371c93c1f3fa489af668");
var cX = uX;
var pX = class pX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(pX, "EN_d889bc3ca3014fc2b05daa3c2a4a0897EntityRecord");
var Na = pX;
Na.init();
var mX = class mX extends t.GenericRecordList {
    static getItemType() {
        return Na
    }
};
e(mX, "RL_72d3468658c04f718aaf1354cc74d3e4");
var lX = mX;
var Wb = class Wb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Residence_listItem", "residence_listItemAttr", "Residence_listItem2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xr)
        }, !0, xr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Wb(new Wb.RecordClass({
            residence_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "72deccc4-588d-d4c5-9ea2-12c47055f933"
    }
};
e(Wb, "RC_72deccc4588dd4c59ea212c47055f933");
var Km = Wb;
Km.init();
var Hb = class Hb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new wi)
        }, !0, wi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Hb(new Hb.RecordClass({
            stackedCardsPositionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "967cb657-10fd-1a34-6ebf-0b0d8dbea56b"
    }
};
e(Hb, "RC_967cb65710fd1a346ebf0b0d8dbea56b");
var Qm = Hb;
Qm.init();
var TX = class TX extends t.GenericRecordList {
    static getItemType() {
        return Qm
    }
};
e(TX, "RL_73c285d01c2c56407f6a3b6c7863f99b");
var fX = TX;
var DX = class DX extends t.GenericRecordList {
    static getItemType() {
        return wr
    }
};
e(DX, "RL_0715dddce4dc71206268eca3f2bfe194");
var Jb = DX;
var yX = class yX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TestPlans", "testPlansAttr", "testPlans", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new Jb)
        }, !0, Jb), this.attr("MetaData", "metaDataAttr", "metaData", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new z)
        }, !0, z)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yX, "ST_87d48b4b7c0b379943dcee59095bbdd5Structure");
var Cn = yX;
Cn.init();
var Yb = class Yb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetPlanSearchResponse", "getPlanSearchResponseAttr", "GetPlanSearchResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Cn)
        }, !0, Cn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Yb(new Yb.RecordClass({
            getPlanSearchResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "73c61ca7-f65d-872a-1eeb-bd91126c43f2"
    }
};
e(Yb, "RC_73c61ca7f65d872a1eebbd91126c43f2");
var $m = Yb;
$m.init();
var SX = class SX extends t.GenericRecordList {
    static getItemType() {
        return _m
    }
};
e(SX, "RL_7466d1f73cbd2c703ddb7258bc2f245b");
var dX = SX;
var gX = class gX extends t.GenericRecordList {
    static getItemType() {
        return Ps
    }
};
e(gX, "RL_7545ab9c9158f795c77f16f31b0fc3cd");
var OX = gX;
var bX = class bX extends t.GenericRecordList {
    static getItemType() {
        return ja
    }
};
e(bX, "RL_756fb6e2b9d549868e73e6b90310c36f");
var xX = bX;
var Zb = class Zb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5SwapFreeCommissionInfoTable2", "mT5SwapFreeCommissionInfoTable2Attr", "MT5SwapFreeCommissionInfoTable2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Na)
        }, !0, Na)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Zb(new Zb.RecordClass({
            mT5SwapFreeCommissionInfoTable2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ada5f8d-a53e-b89c-641b-16bac1494144"
    }
};
e(Zb, "RC_9ada5f8da53eb89c641b16bac1494144");
var tf = Zb;
tf.init();
var IX = class IX extends t.GenericRecordList {
    static getItemType() {
        return tf
    }
};
e(IX, "RL_759e60093aaaa8b1c5c7a466cd817b84");
var RX = IX;
var AX = class AX extends t.GenericRecordList {
    static getItemType() {
        return M
    }
};
e(AX, "RL_7649b6f3b5d31da383ad943effdeab99");
var hX = AX;
var GX = class GX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Month", "monthAttr", "Month", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MonthOrder", "monthOrderAttr", "MonthOrder", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Year", "yearAttr", "Year", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(GX, "ST_71bc196daedd9ac0648bfd56a713859dStructure");
var Ln = GX;
Ln.init();
var Kb = class Kb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ln)
        }, !0, Ln)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Kb(new Kb.RecordClass({
            monthOrderYearAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1"
    }
};
e(Kb, "RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1");
var ef = Kb;
ef.init();
var PX = class PX extends t.GenericRecordList {
    static getItemType() {
        return ef
    }
};
e(PX, "RL_7682dd80718b550d6c5a921d5990d04e");
var wX = PX;
var Qb = class Qb extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Compliance", "complianceAttr", "Compliance", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Te)
        }, !0, Te)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Qb(new Qb.RecordClass({
            complianceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "769b74cf-243b-ca7e-23f6-d8b3e094aafe"
    }
};
e(Qb, "RC_769b74cf243bca7e23f6d8b3e094aafe");
var rf = Qb;
rf.init();
var EX = class EX extends t.GenericRecordList {
    static getItemType() {
        return Tr
    }
};
e(EX, "RL_76a4a5b2c454ce7cb9d8436e9849949e");
var BX = EX;
var LX = class LX extends t.GenericRecordList {
    static getItemType() {
        return Sa
    }
};
e(LX, "RL_76a60ca6adfb580ac2b00e4e4f586899");
var CX = LX;
var vX = class vX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Advertiser_update", "advertiser_updateAttr", "p2p_advertiser_update", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(vX, "ST_a0e3ec28876716cff2e8393c0a8d7e49Structure");
var vn = vX;
vn.init();
var $b = class $b extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserUpdateResponse", "p2PAdvertiserUpdateResponseAttr", "P2PAdvertiserUpdateResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new vn)
        }, !0, vn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $b(new $b.RecordClass({
            p2PAdvertiserUpdateResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "76c3b37a-218d-89cb-61ba-aeeb835fdcd7"
    }
};
e($b, "RC_76c3b37a218d89cb61baaeeb835fdcd7");
var af = $b;
af.init();
var qX = class qX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Identity_verification_document_add", "identity_verification_document_addAttr", "identity_verification_document_add", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(qX, "ST_7e69cc84f253f5c0a2cdd55aa624238cStructure");
var qn = qX;
qn.init();
var tR = class tR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVDocumentAddResponse", "iDVDocumentAddResponseAttr", "IDVDocumentAddResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qn)
        }, !0, qn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tR(new tR.RecordClass({
            iDVDocumentAddResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f2634b8e-faff-648b-1462-2bd5b25d8167"
    }
};
e(tR, "RC_f2634b8efaff648b14622bd5b25d8167");
var sf = tR;
sf.init();
var kX = class kX extends t.GenericRecordList {
    static getItemType() {
        return sf
    }
};
e(kX, "RL_7780b2a9492505990d4a901334a00d28");
var jX = kX;
var eR = class eR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Error", "errorAttr", "Error3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eR(new eR.RecordClass({
            errorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "854dbd28-04fb-b731-b146-8b879331bbde"
    }
};
e(eR, "RC_854dbd2804fbb731b1468b879331bbde");
var nf = eR;
nf.init();
var FX = class FX extends t.GenericRecordList {
    static getItemType() {
        return nf
    }
};
e(FX, "RL_77d062a6109acd64f7dab8d805a7e390");
var UX = FX;
var _X = class _X extends t.GenericRecordList {
    static getItemType() {
        return Os
    }
};
e(_X, "RL_78373738575ac72ef55dea9c617c7d1f");
var VX = _X;
var MX = class MX extends t.GenericRecordList {
    static getItemType() {
        return st
    }
};
e(MX, "RL_787a6fcd35e19f81587bf6f3a2fa11fc");
var NX = MX;
var XX = class XX extends t.GenericRecordList {
    static getItemType() {
        return Jc
    }
};
e(XX, "RL_7887e44cb06676c07450b33a89d88acf");
var zX = XX;
var WX = class WX extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DataPoint", "dataPointAttr", "DataPoint", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Dr)
        }, !0, Dr), this.attr("DataPointJSON", "dataPointJSONAttr", "DataPointJSON", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(WX, "ST_e76d7672809d02d24c5a5adfeacd07eeStructure");
var Ur = WX;
Ur.init();
var JX = class JX extends t.GenericRecordList {
    static getItemType() {
        return Ur
    }
};
e(JX, "RL_7917133dcbda5cd4a6decab71f2048c1");
var HX = JX;
var ZX = class ZX extends t.GenericRecordList {
    static getItemType() {
        return gl
    }
};
e(ZX, "RL_797ea25955211e661a31ab21177322ea");
var YX = ZX;
var QX = class QX extends t.GenericRecordList {
    static getItemType() {
        return ri
    }
};
e(QX, "RL_799b7146a2a08781a419c46b161fba52");
var KX = QX;
var t5 = class t5 extends t.GenericRecordList {
    static getItemType() {
        return jt
    }
};
e(t5, "RL_79e5f7b3f667162d18056364b5add7d4");
var $X = t5;
var r5 = class r5 extends t.GenericRecordList {
    static getItemType() {
        return P
    }
};
e(r5, "RL_7a119d08ddaa03a9adb755d998da5288");
var e5 = r5;
var a5 = class a5 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Autoplay", "autoplayAttr", "Autoplay", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Loop", "loopAttr", "Loop", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("Muted", "mutedAttr", "Muted", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("PosterURL", "posterURLAttr", "PosterURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(a5, "ST_6510d2524fe77fcc6c285159d4000cfbStructure");
var jn = a5;
jn.init();
var rR = class rR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("VideoOptionalConfigs", "videoOptionalConfigsAttr", "VideoOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jn)
        }, !0, jn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rR(new rR.RecordClass({
            videoOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "85af8fa7-a4c9-fca4-ade9-4e1edb0d5f7d"
    }
};
e(rR, "RC_85af8fa7a4c9fca4ade94e1edb0d5f7d");
var of = rR; of .init();
var i5 = class i5 extends t.GenericRecordList {
    static getItemType() {
        return of
    }
};
e(i5, "RL_7a204c55a54d7fc5a49ee67743d390cb");
var s5 = i5;
var n5 = class n5 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "id", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Dispute_reason", "dispute_reasonAttr", "dispute_reason", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(n5, "ST_7b4d691c1393b5e9e9f74d1c61904866Structure");
var kn = n5;
kn.init();
var aR = class aR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderDisputeRequest", "p2POrderDisputeRequestAttr", "P2POrderDisputeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new kn)
        }, !0, kn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new aR(new aR.RecordClass({
            p2POrderDisputeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7a45e74e-27c6-f71f-6317-3a4101e26602"
    }
};
e(aR, "RC_7a45e74e27c6f71f63173a4101e26602");
var cf = aR;
cf.init();
var c5 = class c5 extends t.GenericRecordList {
    static getItemType() {
        return Ct
    }
};
e(c5, "RL_7a61959884cd1d97a8df26308775a5c7");
var o5 = c5;
var p5 = class p5 extends t.GenericRecordList {
    static getItemType() {
        return Ec
    }
};
e(p5, "RL_7a6506d7d0805aae912714500d07a2a1");
var u5 = p5;
var m5 = class m5 extends t.GenericRecordList {
    static getItemType() {
        return _t
    }
};
e(m5, "RL_7aafab926cc9835b50687e3590d16e83");
var l5 = m5;
var T5 = class T5 extends t.GenericRecordList {
    static getItemType() {
        return Aa
    }
};
e(T5, "RL_7ad8e54249abddc3df9e78afc23d2079");
var f5 = T5;
var y5 = class y5 extends t.GenericRecordList {
    static getItemType() {
        return zc
    }
};
e(y5, "RL_7afe2e3802b1138fe7c019f238334de4");
var D5 = y5;
var sR = class sR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_statusItem", "trading_platform_statusItemAttr", "Trading_platform_statusItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jr)
        }, !0, jr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sR(new sR.RecordClass({
            trading_platform_statusItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7b274cb5-f96a-8ac2-97db-685000547ab1"
    }
};
e(sR, "RC_7b274cb5f96a8ac297db685000547ab1");
var uf = sR;
uf.init();
var iR = class iR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Event", "eventAttr", "Event", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new I)
        }, !0, I)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new iR(new iR.RecordClass({
            eventAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7bd0e252-fd03-0a54-6f5f-38214e1904a5"
    }
};
e(iR, "RC_7bd0e252fd030a546f5f38214e1904a5");
var pf = iR;
pf.init();
var S5 = class S5 extends t.GenericRecordList {
    static getItemType() {
        return bi
    }
};
e(S5, "RL_7c036597cf3d8c9e8050976e7b9cd21a");
var d5 = S5;
var g5 = class g5 extends t.GenericRecordList {
    static getItemType() {
        return ji
    }
};
e(g5, "RL_7c155d6f9991d43524221e40a2ecb02b");
var O5 = g5;
var b5 = class b5 extends t.GenericRecordList {
    static getItemType() {
        return $c
    }
};
e(b5, "RL_7c61a4d6660756cbdce1ad8d8a460eb6");
var x5 = b5;
var nR = class nR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FileNames", "fileNamesAttr", "FileNames", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $t)
        }, !0, $t)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nR(new nR.RecordClass({
            fileNamesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7c6222ad-af5e-347a-3ec1-46c0fb60e75c"
    }
};
e(nR, "RC_7c6222adaf5e347a3ec146c0fb60e75c");
var lf = nR;
lf.init();
var oR = class oR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Geolocation", "geolocationAttr", "Geolocation", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new He)
        }, !0, He)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oR(new oR.RecordClass({
            geolocationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7c67e52a-2329-c05d-78ed-79fcc452835e"
    }
};
e(oR, "RC_7c67e52a2329c05d78ed79fcc452835e");
var mf = oR;
mf.init();
var I5 = class I5 extends t.GenericRecordList {
    static getItemType() {
        return de
    }
};
e(I5, "RL_7c9f790fa5c2ed1fbdf0de41347402fa");
var R5 = I5;
var cR = class cR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StateList", "stateListAttr", "StateList", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Br)
        }, !0, Br)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cR(new cR.RecordClass({
            stateListAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7cea7a7f-a663-9b24-1a75-c9e6bd8028d0"
    }
};
e(cR, "RC_7cea7a7fa6639b241a75c9e6bd8028d0");
var ff = cR;
ff.init();
var h5 = class h5 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", !1, !1, t.DataTypes.Boolean, function() {
            return !0
        }, !0), this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(h5, "ST_09173c1b0f41f719b9efd6430c2e737dStructure");
var Un = h5;
Un.init();
var uR = class uR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Un)
        }, !0, Un)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uR(new uR.RecordClass({
            notificationOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e5ad8f04-c380-4744-1643-c6868992c277"
    }
};
e(uR, "RC_e5ad8f04c38047441643c6868992c277");
var Tf = uR;
Tf.init();
var G5 = class G5 extends t.GenericRecordList {
    static getItemType() {
        return Tf
    }
};
e(G5, "RL_7d09eb138f7abf181049d020e739a58f");
var A5 = G5;
var pR = class pR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GenericResponse", "genericResponseAttr", "GenericResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vr)
        }, !0, Vr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pR(new pR.RecordClass({
            genericResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fd5747c8-0d83-9934-a536-0c3482c6e1a4"
    }
};
e(pR, "RC_fd5747c80d839934a5360c3482c6e1a4");
var Df = pR;
Df.init();
var P5 = class P5 extends t.GenericRecordList {
    static getItemType() {
        return Df
    }
};
e(P5, "RL_7d0f37ab255ddbd5de53ae22a5f93739");
var w5 = P5;
var E5 = class E5 extends t.GenericRecordList {
    static getItemType() {
        return im
    }
};
e(E5, "RL_7d6cd8134c4c182b8511d838421d7e81");
var B5 = E5;
var lR = class lR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventArgs", "notificationEventArgsAttr", "NotificationEventArgs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Je)
        }, !0, Je)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lR(new lR.RecordClass({
            notificationEventArgsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4e53cdc-7541-b46b-3d5d-c63fe53b6ea7"
    }
};
e(lR, "RC_d4e53cdc7541b46b3d5dc63fe53b6ea7");
var yf = lR;
yf.init();
var L5 = class L5 extends t.GenericRecordList {
    static getItemType() {
        return yf
    }
};
e(L5, "RL_7dbc7753dcc77f4ba03f73d24b5f31fa");
var C5 = L5;
var mR = class mR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Trading_platform_available_accountItemMT5", "trading_platform_available_accountItemMT5Attr", "Trading_platform_available_accountItemMT5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new hr)
        }, !0, hr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mR(new mR.RecordClass({
            trading_platform_available_accountItemMT5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7de6f1e2-c998-00d3-c6e1-aaeb14f3afdd"
    }
};
e(mR, "RC_7de6f1e2c99800d3c6e1aaeb14f3afdd");
var df = mR;
df.init();
var q5 = class q5 extends t.GenericRecordList {
    static getItemType() {
        return Fu
    }
};
e(q5, "RL_7e823839a7f836a297fa8d09d5b77858");
var v5 = q5;
var k5 = class k5 extends t.GenericRecordList {
    static getItemType() {
        return xt
    }
};
e(k5, "RL_7ea0e409b1b42e8e6d7ca54869209a73");
var j5 = k5;
var F5 = class F5 extends t.GenericRecordList {
    static getItemType() {
        return y
    }
};
e(F5, "RL_7ec701d4086b9503e816fe47fc7b3996");
var U5 = F5;
var fR = class fR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Cashier", "cashierAttr", "Cashier", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Tr)
        }, !0, Tr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fR(new fR.RecordClass({
            cashierAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "7f36dbf2-6349-b8c7-8224-f133e993735e"
    }
};
e(fR, "RC_7f36dbf26349b8c78224f133e993735e");
var Sf = fR;
Sf.init();
var TR = class TR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordResetResponse", "postTradingPlatformPasswordResetResponseAttr", "PostTradingPlatformPasswordResetResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Bn)
        }, !0, Bn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new TR(new TR.RecordClass({
            postTradingPlatformPasswordResetResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "86cda441-e1db-9e62-e574-ab54636ea9ea"
    }
};
e(TR, "RC_86cda441e1db9e62e574ab54636ea9ea");
var Of = TR;
Of.init();
var _5 = class _5 extends t.GenericRecordList {
    static getItemType() {
        return Of
    }
};
e(_5, "RL_7f64f8c0aaa300d34c79a90785135151");
var V5 = _5;
var DR = class DR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5DerivedCommissionInfoTable", "mT5DerivedCommissionInfoTableAttr", "MT5DerivedCommissionInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ha)
        }, !0, ha)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new DR(new DR.RecordClass({
            mT5DerivedCommissionInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b63e3909-af05-1b88-70fc-f422ece5607a"
    }
};
e(DR, "RC_b63e3909af051b8870fcf422ece5607a");
var gf = DR;
gf.init();
var M5 = class M5 extends t.GenericRecordList {
    static getItemType() {
        return gf
    }
};
e(M5, "RL_7fa6655fc4f73bac145b96306b51a51b");
var N5 = M5;
var X5 = class X5 extends t.GenericRecordList {
    static getItemType() {
        return zu
    }
};
e(X5, "RL_802322074908177d1de132f062300275");
var z5 = X5;
var H5 = class H5 extends t.GenericRecordList {
    static getItemType() {
        return Gi
    }
};
e(H5, "RL_806e82a94733d0af9e43960265151f80");
var W5 = H5;
var Y5 = class Y5 extends t.GenericRecordList {
    static getItemType() {
        return kl
    }
};
e(Y5, "RL_80cc885cccb8696830df8ec337645f92");
var J5 = Y5;
var K5 = class K5 extends t.GenericRecordList {
    static getItemType() {
        return vs
    }
};
e(K5, "RL_818242b85443e5c7fa45b1c41378ddb5");
var Z5 = K5;
var $5 = class $5 extends t.GenericRecordList {
    static getItemType() {
        return Bt
    }
};
e($5, "RL_81d2bc71eb1c605f53ae134ad3caa1c0");
var Q5 = $5;
var yR = class yR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("OnfidoService", "onfidoServiceAttr", "OnfidoService", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new je)
        }, !0, je)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yR(new yR.RecordClass({
            onfidoServiceAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "81d96dbb-343b-41f5-5c20-2064ee7f136d"
    }
};
e(yR, "RC_81d96dbb343b41f55c202064ee7f136d");
var xf = yR;
xf.init();
var e1 = class e1 extends t.GenericRecordList {
    static getItemType() {
        return Yl
    }
};
e(e1, "RL_82612f53b8d711fd3715db0c86244345");
var t1 = e1;
var r1 = class r1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order_review", "order_reviewAttr", "p2p_order_review", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(r1, "ST_f0117a9263a599e510e75f4e61b79c85Structure");
var Fn = r1;
Fn.init();
var dR = class dR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderReviewResponse", "p2POrderReviewResponseAttr", "P2POrderReviewResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Fn)
        }, !0, Fn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dR(new dR.RecordClass({
            p2POrderReviewResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8274740c-430e-d1e3-9b7a-1549b09d4ca3"
    }
};
e(dR, "RC_8274740c430ed1e39b7a1549b09d4ca3");
var bf = dR;
bf.init();
var a1 = class a1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address", "addressAttr", "Address", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("TownCity", "townCityAttr", "TownCity", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("PostalZipCode", "postalZipCodeAttr", "PostalZipCode", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("StateProvince", "stateProvinceAttr", "StateProvince", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(a1, "ST_e091544222b72cbcabfeb8a6a6d57003Structure");
var Ma = a1;
Ma.init();
var SR = class SR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AddressDetailsValidFields", "addressDetailsValidFieldsAttr", "AddressDetailsValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ma)
        }, !0, Ma)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new SR(new SR.RecordClass({
            addressDetailsValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d450b9ed-1446-e483-9946-4b16592c346f"
    }
};
e(SR, "RC_d450b9ed1446e48399464b16592c346f");
var Rf = SR;
Rf.init();
var i1 = class i1 extends t.GenericRecordList {
    static getItemType() {
        return Rf
    }
};
e(i1, "RL_839ec349cf54b0fd6cd8cfd37f50ae0f");
var s1 = i1;
var n1 = class n1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Email", "emailAttr", "Email", !1, !1, t.DataTypes.Email, function() {
            return ""
        }, !0), this.attr("PhotoUrl", "photoUrlAttr", "PhotoUrl", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(n1, "ENUserEntityRecord");
var Vn = n1;
Vn.init();
var OR = class OR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("User", "userAttr", "User", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vn)
        }, !0, Vn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new OR(new OR.RecordClass({
            userAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ced01335-8a82-a813-f1d9-a5108f17ce79"
    }
};
e(OR, "RC_ced013358a82a813f1d9a5108f17ce79");
var If = OR;
If.init();
var c1 = class c1 extends t.GenericRecordList {
    static getItemType() {
        return If
    }
};
e(c1, "RL_8430333e95ceffc00def96d8abb01f75");
var o1 = c1;
var p1 = class p1 extends t.GenericRecordList {
    static getItemType() {
        return Ai
    }
};
e(p1, "RL_843bbe6b5508d5a1ce4c6547db1f1385");
var u1 = p1;
var l1 = class l1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Icon", "iconAttr", "Icon", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Code", "codeAttr", "Code", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Category", "categoryAttr", "Category", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(l1, "EN_8476f8009941f077eecf6fb67b7e9001EntityRecord");
var za = l1;
za.init();
var f1 = class f1 extends t.GenericRecordList {
    static getItemType() {
        return zm
    }
};
e(f1, "RL_848f8b2bb658ddd4e5a07dd90226eb44");
var m1 = f1;
var gR = class gR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("RiskLevel_LandingCompany", "riskLevel_LandingCompanyAttr", "Landing_company6", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ct)
        }, !0, Ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gR(new gR.RecordClass({
            riskLevel_LandingCompanyAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "890f16fe-63a6-b66b-2130-ac1a285dc1bf"
    }
};
e(gR, "RC_890f16fe63a6b66b2130ac1a285dc1bf");
var hf = gR;
hf.init();
var D1 = class D1 extends t.GenericRecordList {
    static getItemType() {
        return hf
    }
};
e(D1, "RL_855c9279ae87db4555d2fbb8ba90afc5");
var T1 = D1;
var d1 = class d1 extends t.GenericRecordList {
    static getItemType() {
        return F
    }
};
e(d1, "RL_860038d42bee7c93bf861582a762bd77");
var y1 = d1;
var xR = class xR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_AdvancedDataPointFormat", "legacy_AdvancedDataPointFormatAttr", "Legacy_AdvancedDataPointFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ur)
        }, !0, Ur)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xR(new xR.RecordClass({
            legacy_AdvancedDataPointFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "860a186f-93e9-fe7f-e0d4-2f4282c2ec00"
    }
};
e(xR, "RC_860a186f93e9fe7fe0d42f4282c2ec00");
var Af = xR;
Af.init();
var O1 = class O1 extends t.GenericRecordList {
    static getItemType() {
        return fa
    }
};
e(O1, "RL_863ea1614b7c19486045cd9a76848c6b");
var S1 = O1;
var bR = class bR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_opening", "account_openingAttr", "Account_opening", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ee)
        }, !0, ee)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bR(new bR.RecordClass({
            account_openingAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8688a658-a83b-6884-b85d-11d8db4546d3"
    }
};
e(bR, "RC_8688a658a83b6884b85d11d8db4546d3");
var Gf = bR;
Gf.init();
var x1 = class x1 extends t.GenericRecordList {
    static getItemType() {
        return _e
    }
};
e(x1, "RL_869c4e99bfb95c6cde1465857798ee8b");
var g1 = x1;
var b1 = class b1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Color", "colorAttr", "Color", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(b1, "EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord");
var _n = b1;
_n.init();
var RR = class RR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Color", "colorAttr", "Color", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _n)
        }, !0, _n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new RR(new RR.RecordClass({
            colorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "87351e3b-0fa2-ca59-cf6c-6749c6405006"
    }
};
e(RR, "RC_87351e3b0fa2ca59cf6c6749c6405006");
var wf = RR;
wf.init();
var I1 = class I1 extends t.GenericRecordList {
    static getItemType() {
        return un
    }
};
e(I1, "RL_875b321486a40627f7580de2ed881b7d");
var R1 = I1;
var A1 = class A1 extends t.GenericRecordList {
    static getItemType() {
        return rt
    }
};
e(A1, "RL_87d104b9319b98dfa22f5d0022580250");
var h1 = A1;
var w1 = class w1 extends t.GenericRecordList {
    static getItemType() {
        return Ae
    }
};
e(w1, "RL_87e06844679358e0f8214e75ce605df1");
var G1 = w1;
var B1 = class B1 extends t.GenericRecordList {
    static getItemType() {
        return An
    }
};
e(B1, "RL_87e64e62a021a7f641dffaaa73541aa5");
var P1 = B1;
var E1 = class E1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(E1, "EN_a751f78951c300e8acce65cba9217c6bEntityRecord");
var Xa = E1;
Xa.init();
var L1 = class L1 extends t.GenericRecordList {
    static getItemType() {
        return Xa
    }
};
e(L1, "RL_8816a9c7c80c0a0a7f003077f2df12aa");
var C1 = L1;
var q1 = class q1 extends t.GenericRecordList {
    static getItemType() {
        return mf
    }
};
e(q1, "RL_881e0bd330dc44a0f930b17dfa132522");
var v1 = q1;
var k1 = class k1 extends t.GenericRecordList {
    static getItemType() {
        return el
    }
};
e(k1, "RL_886e75f265a0a7fbc13b3d74d89a8d0b");
var j1 = k1;
var F1 = class F1 extends t.GenericRecordList {
    static getItemType() {
        return zt
    }
};
e(F1, "RL_88893b2b6478ca91e7c481f161053cfa");
var U1 = F1;
var IR = class IR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventSpeakers", "eventSpeakersAttr", "EventSpeakers", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ve)
        }, !0, Ve)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new IR(new IR.RecordClass({
            eventSpeakersAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8893a2b0-0921-10e7-fe88-380d93aa9f1b"
    }
};
e(IR, "RC_8893a2b0092110e7fe88380d93aa9f1b");
var Pf = IR;
Pf.init();
var hR = class hR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ServiceTokenRequest", "serviceTokenRequestAttr", "ServiceTokenRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yn)
        }, !0, yn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hR(new hR.RecordClass({
            serviceTokenRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c6db6e25-83d5-8b1f-7d91-b76a532e7eb0"
    }
};
e(hR, "RC_c6db6e2583d58b1f7d91b76a532e7eb0");
var Bf = hR;
Bf.init();
var _1 = class _1 extends t.GenericRecordList {
    static getItemType() {
        return Bf
    }
};
e(_1, "RL_88d704bede9d351ca8b921e5d8b5e60c");
var V1 = _1;
var M1 = class M1 extends t.GenericRecordList {
    static getItemType() {
        return Oc
    }
};
e(M1, "RL_8972d3be5f5c984833af7ea32d6710e8");
var N1 = M1;
var X1 = class X1 extends t.GenericRecordList {
    static getItemType() {
        return n
    }
};
e(X1, "RL_89efb8ec15cf4e133db42b43e8a70d31");
var z1 = X1;
var H1 = class H1 extends t.GenericRecordList {
    static getItemType() {
        return mi
    }
};
e(H1, "RL_8add23b891a53c086b7017fd4cdd211b");
var W1 = H1;
var J1 = class J1 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("set_settings", "set_settingsAttr", "set_settings", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(J1, "ST_0a41599a3a2ec3b22722247f2d2affffStructure");
var Nn = J1;
Nn.init();
var AR = class AR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SetSettingsResponse", "setSettingsResponseAttr", "SetSettingsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Nn)
        }, !0, Nn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new AR(new AR.RecordClass({
            setSettingsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5a2375a-3e91-041c-bcce-ac771e133575"
    }
};
e(AR, "RC_a5a2375a3e91041cbcceac771e133575");
var Ef = AR;
Ef.init();
var Z1 = class Z1 extends t.GenericRecordList {
    static getItemType() {
        return Ef
    }
};
e(Z1, "RL_8b2f8ecc4ceeaac972acb8a50205485d");
var Y1 = Z1;
var Q1 = class Q1 extends t.GenericRecordList {
    static getItemType() {
        return q
    }
};
e(Q1, "RL_8b3193777919a00b12740a1aa0e7a669");
var K1 = Q1;
var tW = class tW extends t.GenericRecordList {
    static getItemType() {
        return rr
    }
};
e(tW, "RL_8b34cec2d3a4e3170e329009c7e2bef8");
var $1 = tW;
var GR = class GR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req8", "echo_req8Attr", "Echo_req12", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ce)
        }, !0, Ce)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new GR(new GR.RecordClass({
            echo_req8Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8b362302-b596-6ced-d4e8-c7c42d7e46f8"
    }
};
e(GR, "RC_8b362302b5966cedd4e8c7c42d7e46f8");
var Cf = GR;
Cf.init();
var rW = class rW extends t.GenericRecordList {
    static getItemType() {
        return kr
    }
};
e(rW, "RL_a401bbc515f324607832f48e5f845362");
var eW = rW;
var aW = class aW extends t.GenericRecordList {
    static getItemType() {
        return Ur
    }
};
e(aW, "RL_7917133dcbda5cd4a6decab71f2048c1");
var wR = aW;
var sW = class sW extends t.GenericRecordList {
    static getItemType() {
        return kr
    }
};
e(sW, "RL_a401bbc515f324607832f48e5f845362");
var PR = sW;
var iW = class iW extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DataPointFormats", "dataPointFormatsAttr", "DataPointFormats", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new wR)
        }, !0, wR), this.attr("DataSeriesFormats", "dataSeriesFormatsAttr", "DataSeriesFormats", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new PR)
        }, !0, PR), this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(iW, "ST_934e7357fa36babd8aa5d2585785fd1aStructure");
var Mn = iW;
Mn.init();
var BR = class BR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_AdvancedFormat", "legacy_AdvancedFormatAttr", "Legacy_AdvancedFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Mn)
        }, !0, Mn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new BR(new BR.RecordClass({
            legacy_AdvancedFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8bd0ab07-a3f3-c2d2-a572-a84134c564bd"
    }
};
e(BR, "RC_8bd0ab07a3f3c2d2a572a84134c564bd");
var Lf = BR;
Lf.init();
var oW = class oW extends t.GenericRecordList {
    static getItemType() {
        return Tn
    }
};
e(oW, "RL_8bede31a859ddf52ef4cc59746531ef8");
var nW = oW;
var uW = class uW extends t.GenericRecordList {
    static getItemType() {
        return di
    }
};
e(uW, "RL_8c4fcbceb61f253df73da643e4b9ae13");
var cW = uW;
var ER = class ER extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StartResetPasswordResult", "startResetPasswordResultAttr", "StartResetPasswordResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ln)
        }, !0, ln)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ER(new ER.RecordClass({
            startResetPasswordResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8f8c9b77-bcc0-9965-64fe-bb7d38ea930a"
    }
};
e(ER, "RC_8f8c9b77bcc0996564febb7d38ea930a");
var vf = ER;
vf.init();
var lW = class lW extends t.GenericRecordList {
    static getItemType() {
        return vf
    }
};
e(lW, "RL_8c6f3d2b086b4a75242a7e7c084f1692");
var pW = lW;
var fW = class fW extends t.GenericRecordList {
    static getItemType() {
        return hm
    }
};
e(fW, "RL_8c761c273f71d4bef4e43f7373a08758");
var mW = fW;
var CR = class CR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("MT5FinancialSTPCommissionInfoTable", "mT5FinancialSTPCommissionInfoTableAttr", "MT5FinancialSTPCommissionInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xa)
        }, !0, Xa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new CR(new CR.RecordClass({
            mT5FinancialSTPCommissionInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c85058ef-d001-ab5b-b941-89be59a9e6e9"
    }
};
e(CR, "RC_c85058efd001ab5bb94189be59a9e6e9");
var qf = CR;
qf.init();
var DW = class DW extends t.GenericRecordList {
    static getItemType() {
        return qf
    }
};
e(DW, "RL_8c8fae00a98e307e746e877f35f1e5ab");
var TW = DW;
var yW = class yW extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Address", "addressAttr", "Address", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TownCity", "townCityAttr", "TownCity", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("PostalZipCode", "postalZipCodeAttr", "PostalZipCode", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("StateProvince", "stateProvinceAttr", "StateProvince", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(yW, "ST_def7c79af49a7a6d484362f09eb0f690Structure");
var Wa = yW;
Wa.init();
var LR = class LR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AddressDetailsValidationError", "addressDetailsValidationErrorAttr", "AddressDetailsValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wa)
        }, !0, Wa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new LR(new LR.RecordClass({
            addressDetailsValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3addb08-8c04-3f65-86d0-067a0d4f53c2"
    }
};
e(LR, "RC_e3addb088c043f6586d0067a0d4f53c2");
var jf = LR;
jf.init();
var SW = class SW extends t.GenericRecordList {
    static getItemType() {
        return jf
    }
};
e(SW, "RL_8cbb4c1d0ea3410d853a86fdd3afe948");
var dW = SW;
var vR = class vR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Passport", "passportAttr", "Passport3", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new W)
        }, !0, W)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vR(new vR.RecordClass({
            passportAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8ccc0915-7954-5400-bb55-58b597337647"
    }
};
e(vR, "RC_8ccc091579545400bb5558b597337647");
var kf = vR;
kf.init();
var qR = class qR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserRelationsRequest", "p2PAdvertiserRelationsRequestAttr", "P2PAdvertiserRelationsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ds)
        }, !0, Ds)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qR(new qR.RecordClass({
            p2PAdvertiserRelationsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aa38f0f8-6a36-8b5a-a97d-09652c85df95"
    }
};
e(qR, "RC_aa38f0f86a368b5aa97d09652c85df95");
var Uf = qR;
Uf.init();
var gW = class gW extends t.GenericRecordList {
    static getItemType() {
        return Uf
    }
};
e(gW, "RL_8d1eec609ccea2aa18ac0df726cafa33");
var OW = gW;
var jR = class jR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Idv", "idvAttr", "Idv", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lt)
        }, !0, lt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jR(new jR.RecordClass({
            idvAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8d219107-7b27-24e2-6d03-dfd89ce20eb3"
    }
};
e(jR, "RC_8d2191077b2724e26d03dfd89ce20eb3");
var Ff = jR;
Ff.init();
var bW = class bW extends t.GenericRecordList {
    static getItemType() {
        return xi
    }
};
e(bW, "RL_8d376ab44b9f0e7b6d06a6332f1483f2");
var xW = bW;
var IW = class IW extends t.GenericRecordList {
    static getItemType() {
        return Nn
    }
};
e(IW, "RL_8d67858abdde3dd334c892c5fd9176b4");
var RW = IW;
var kR = class kR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementFee", "statementFeeAttr", "StatementFee", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new le)
        }, !0, le)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kR(new kR.RecordClass({
            statementFeeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "955ccd26-a5d9-8bb4-3926-051cccd6f301"
    }
};
e(kR, "RC_955ccd26a5d98bb43926051cccd6f301");
var Vf = kR;
Vf.init();
var AW = class AW extends t.GenericRecordList {
    static getItemType() {
        return Vf
    }
};
e(AW, "RL_8d98f970a808a859e46d763c2a9f5e6c");
var hW = AW;
var UR = class UR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Website_status", "website_statusAttr", "Website_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ct)
        }, !0, ct)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new UR(new UR.RecordClass({
            website_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b5bc59fd-6b9d-0d1d-e199-4f4ad185a4d9"
    }
};
e(UR, "RC_b5bc59fd6b9d0d1de1994f4ad185a4d9");
var _f = UR;
_f.init();
var wW = class wW extends t.GenericRecordList {
    static getItemType() {
        return _f
    }
};
e(wW, "RL_8e08be092703b41c20785e76f67d241a");
var GW = wW;
var BW = class BW extends t.GenericRecordList {
    static getItemType() {
        return Pe
    }
};
e(BW, "RL_8e09be908eb2289212bd0eb58ad9bdb1");
var PW = BW;
var CW = class CW extends t.GenericRecordList {
    static getItemType() {
        return yu
    }
};
e(CW, "RL_8e0fc5c9e799d27970a97b6552ea83ed");
var EW = CW;
var LW = class LW extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventId", "eventIdAttr", "EventId", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("MobileImage", "mobileImageAttr", "MobileImage", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("DateTime", "dateTimeAttr", "DateTime", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("CountryName", "countryNameAttr", "CountryName", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TimeZone", "timeZoneAttr", "TimeZone", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(LW, "ST_a141c3f09a0767655c68f8c2b249b3e4Structure");
var Ha = LW;
Ha.init();
var FR = class FR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventListData", "eventListDataAttr", "EventListData", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ha)
        }, !0, Ha)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new FR(new FR.RecordClass({
            eventListDataAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b77f3e48-8d17-7a58-f401-5c1317596d14"
    }
};
e(FR, "RC_b77f3e488d177a58f4015c1317596d14");
var Nf = FR;
Nf.init();
var qW = class qW extends t.GenericRecordList {
    static getItemType() {
        return Nf
    }
};
e(qW, "RL_8e178f5291545706fdbc1cea23475365");
var vW = qW;
var kW = class kW extends t.GenericRecordList {
    static getItemType() {
        return qp
    }
};
e(kW, "RL_8e38afd3984d04ce643edcb181b91ae7");
var jW = kW;
var FW = class FW extends t.GenericRecordList {
    static getItemType() {
        return ep
    }
};
e(FW, "RL_8ed647be048e617fa817eb8a6da1f2ef");
var UW = FW;
var VW = class VW extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Title", "titleAttr", "Title", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("MinValue", "minValueAttr", "MinValue", !1, !1, t.DataTypes.Decimal, function() {
            return Fr.integerToDecimal(-2147483647)
        }, !0), this.attr("MaxValue", "maxValueAttr", "MaxValue", !1, !1, t.DataTypes.Decimal, function() {
            return Fr.integerToDecimal(-2147483647)
        }, !0), this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", !1, !1, t.DataTypes.Decimal, function() {
            return Fr.integerToDecimal(-2147483647)
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(VW, "ST_80a54fdc5a44237df505b3e5b63ad0feStructure");
var zn = VW;
zn.init();
var VR = class VR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Legacy_YAxisFormat", "legacy_YAxisFormatAttr", "Legacy_YAxisFormat", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new zn)
        }, !0, zn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new VR(new VR.RecordClass({
            legacy_YAxisFormatAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10"
    }
};
e(VR, "RC_9ac3a73b5c3ddd8f3923cd00427e8e10");
var Mf = VR;
Mf.init();
var NW = class NW extends t.GenericRecordList {
    static getItemType() {
        return Mf
    }
};
e(NW, "RL_8ed7a0e74bf62a56d225f393fa1fdf35");
var _W = NW;
var MW = class MW extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Label", "labelAttr", "Label", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("TabID", "tabIDAttr", "TabID", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("CommissionTypesId", "commissionTypesIdAttr", "CommissionTypesId", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Note", "noteAttr", "Note", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(MW, "EN_dcf7678da69441705db7a0b29acff19dEntityRecord");
var v = MW;
v.init();
var XW = class XW extends t.GenericRecordList {
    static getItemType() {
        return v
    }
};
e(XW, "RL_8edd31413d0554247fa62ea04ab700c4");
var zW = XW;
var _R = class _R extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Right", "rightAttr", "Right", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new cr)
        }, !0, cr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new _R(new _R.RecordClass({
            rightAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "8f3efc29-bef9-11e7-4df2-22fdba36c135"
    }
};
e(_R, "RC_8f3efc29bef911e74df222fdba36c135");
var zf = _R;
zf.init();
var HW = class HW extends t.GenericRecordList {
    static getItemType() {
        return rn
    }
};
e(HW, "RL_8f663be7596d4724f6146bc0b1d8cb69");
var WW = HW;
var YW = class YW extends t.GenericRecordList {
    static getItemType() {
        return am
    }
};
e(YW, "RL_8f8d59d165c243d87e0cdd5e7eb64454");
var JW = YW;
var NR = class NR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("FetchStatesListResponse", "fetchStatesListResponseAttr", "FetchStatesListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Vi)
        }, !0, Vi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new NR(new NR.RecordClass({
            fetchStatesListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "900ac3fb-84b1-d9ad-8b5d-550f75e57f07"
    }
};
e(NR, "RC_900ac3fb84b1d9ad8b5d550f75e57f07");
var Xf = NR;
Xf.init();
var KW = class KW extends t.GenericRecordList {
    static getItemType() {
        return ka
    }
};
e(KW, "RL_90182782bfbed6bd51242d26b23603c5");
var ZW = KW;
var $W = class $W extends t.GenericRecordList {
    static getItemType() {
        return pc
    }
};
e($W, "RL_904325e5d042a099908ed28253c5b8a6");
var QW = $W;
var MR = class MR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_status", "mt5_statusAttr", "Mt5_status", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new it)
        }, !0, it)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new MR(new MR.RecordClass({
            mt5_statusAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c2f8f904-842d-d6be-5032-2db106dd129c"
    }
};
e(MR, "RC_c2f8f904842dd6be50322db106dd129c");
var Wf = MR;
Wf.init();
var e0 = class e0 extends t.GenericRecordList {
    static getItemType() {
        return Wf
    }
};
e(e0, "RL_90a6f18cea83457c3d1abcb92c744156");
var t0 = e0;
var a0 = class a0 extends t.GenericRecordList {
    static getItemType() {
        return Jt
    }
};
e(a0, "RL_90dfebee20aff7c26e30042add874567");
var r0 = a0;
var i0 = class i0 extends t.GenericRecordList {
    static getItemType() {
        return Kp
    }
};
e(i0, "RL_9155b46cc5c187efb7cc10c67b592005");
var s0 = i0;
var o0 = class o0 extends t.GenericRecordList {
    static getItemType() {
        return Pl
    }
};
e(o0, "RL_919d8bc896529858c8cc8f0f3e5cb019");
var n0 = o0;
var u0 = class u0 extends t.GenericRecordList {
    static getItemType() {
        return Y
    }
};
e(u0, "RL_91f3ef19dd1007f7116bdf96cd006384");
var c0 = u0;
var l0 = class l0 extends t.GenericRecordList {
    static getItemType() {
        return Cf
    }
};
e(l0, "RL_9238bba5cbd10e6024ffc4f7cd576720");
var p0 = l0;
var f0 = class f0 extends t.GenericRecordList {
    static getItemType() {
        return Wi
    }
};
e(f0, "RL_92402dd058de79af9f22de1380779555");
var m0 = f0;
var D0 = class D0 extends t.GenericRecordList {
    static getItemType() {
        return Pc
    }
};
e(D0, "RL_925417f32894fd9622f9ac4a0f6d3848");
var T0 = D0;
var zR = class zR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("String8", "string8Attr", "String8", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new c)
        }, !0, c)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zR(new zR.RecordClass({
            string8Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a0738320-bb0b-0b33-65d0-bbf873ec9067"
    }
};
e(zR, "RC_a0738320bb0b0b3365d0bbf873ec9067");
var Hf = zR;
Hf.init();
var d0 = class d0 extends t.GenericRecordList {
    static getItemType() {
        return Hf
    }
};
e(d0, "RL_932b6f0edf4b9016f2d4cb34d31b2bde");
var y0 = d0;
var O0 = class O0 extends t.GenericRecordList {
    static getItemType() {
        return Mn
    }
};
e(O0, "RL_934c26b501c2cab7b0a48c8dcd029c23");
var S0 = O0;
var x0 = class x0 extends t.GenericRecordList {
    static getItemType() {
        return pp
    }
};
e(x0, "RL_93708d7bb7d0fbdca673f09a924bcdb7");
var g0 = x0;
var R0 = class R0 extends t.GenericRecordList {
    static getItemType() {
        return ar
    }
};
e(R0, "RL_93a1caf6b09cfa25aafd4d96e7527613");
var b0 = R0;
var XR = class XR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Detail", "detailAttr", "Detail", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new H)
        }, !0, H)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new XR(new XR.RecordClass({
            detailAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9469645a-6983-eeba-9173-683938b54abe"
    }
};
e(XR, "RC_9469645a6983eeba9173683938b54abe");
var Jf = XR;
Jf.init();
var h0 = class h0 extends t.GenericRecordList {
    static getItemType() {
        return Ha
    }
};
e(h0, "RL_94a1b45f4033800d2277f58b3bed560c");
var I0 = h0;
var G0 = class G0 extends t.GenericRecordList {
    static getItemType() {
        return ie
    }
};
e(G0, "RL_94cd9fdaaf1a67a3bfa0e32663c1fe70");
var A0 = G0;
var P0 = class P0 extends t.GenericRecordList {
    static getItemType() {
        return zl
    }
};
e(P0, "RL_953e04cab396096bc5ddcbafa1a5cb78");
var w0 = P0;
var B0 = class B0 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Country_list", "country_listAttr", "p2p_country_list", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(B0, "ST_b12d67ef17b1896a838b57ca02b5f67dStructure");
var Xn = B0;
Xn.init();
var C0 = class C0 extends t.GenericRecordList {
    static getItemType() {
        return Xn
    }
};
e(C0, "RL_954847ed7a29426b04fcc994e669e176");
var E0 = C0;
var v0 = class v0 extends t.GenericRecordList {
    static getItemType() {
        return hl
    }
};
e(v0, "RL_958ee6d9719c17433ce81822ca60f4a2");
var L0 = v0;
var j0 = class j0 extends t.GenericRecordList {
    static getItemType() {
        return jn
    }
};
e(j0, "RL_95d0d522cef60364076f377317e08b52");
var q0 = j0;
var U0 = class U0 extends t.GenericRecordList {
    static getItemType() {
        return vl
    }
};
e(U0, "RL_961d30fd81df57de3ea9a6712d9fd6ce");
var k0 = U0;
var V0 = class V0 extends t.GenericRecordList {
    static getItemType() {
        return bp
    }
};
e(V0, "RL_962cf0371c958f3149af000f463cc1c8");
var F0 = V0;
var N0 = class N0 extends t.GenericRecordList {
    static getItemType() {
        return El
    }
};
e(N0, "RL_9635a3e1743352b2172de2b697e7b083");
var _0 = N0;
var z0 = class z0 extends t.GenericRecordList {
    static getItemType() {
        return Rm
    }
};
e(z0, "RL_9797ec0d56ee4ca8b93bd458944f1a08");
var M0 = z0;
var W0 = class W0 extends t.GenericRecordList {
    static getItemType() {
        return kf
    }
};
e(W0, "RL_97e8f3375611a96a6012eed05d91f59d");
var X0 = W0;
var J0 = class J0 extends t.GenericRecordList {
    static getItemType() {
        return zr
    }
};
e(J0, "RL_9896dac2c563c83b6f49b5dba97c59e8");
var H0 = J0;
var Z0 = class Z0 extends t.GenericRecordList {
    static getItemType() {
        return Pu
    }
};
e(Z0, "RL_98f3b8624fe7a466ac7ebfc153dac373");
var Y0 = Z0;
var Q0 = class Q0 extends t.GenericRecordList {
    static getItemType() {
        return De
    }
};
e(Q0, "RL_995adbfa0595ff6f2931f3c493a96ab6");
var K0 = Q0;
var tH = class tH extends t.GenericRecordList {
    static getItemType() {
        return Kc
    }
};
e(tH, "RL_996bbb10b9805c390cf8671b30f6d3a4");
var $0 = tH;
var WR = class WR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ni)
        }, !0, ni)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new WR(new WR.RecordClass({
            accordionIconPositionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ab72f035-aa34-ddb5-ec31-3dc02adb1f18"
    }
};
e(WR, "RC_ab72f035aa34ddb5ec313dc02adb1f18");
var Yf = WR;
Yf.init();
var rH = class rH extends t.GenericRecordList {
    static getItemType() {
        return Yf
    }
};
e(rH, "RL_996fbee06ca423494c6785889a54264f");
var eH = rH;
var aH = class aH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Display_name", "display_nameAttr", "display_name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Format", "formatAttr", "format", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Additional", "additionalAttr", "additional", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new o)
        }, !0, o)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(aH, "ST_9a29ef26037f71a833a7717922f3c172Structure");
var Ja = aH;
Ja.init();
var iH = class iH extends t.GenericRecordList {
    static getItemType() {
        return Ut
    }
};
e(iH, "RL_9a37b428e209f265109cf020c957ba69");
var sH = iH;
var nH = class nH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("PhotoURL", "photoURLAttr", "PhotoURL", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(nH, "UserUpdateInfoRec");
var Wn = nH;
Wn.init();
var cH = class cH extends t.GenericRecordList {
    static getItemType() {
        return Wn
    }
};
e(cH, "RL_9ab59cf1963fbe94eddb7ebb18232c35");
var oH = cH;
var pH = class pH extends t.GenericRecordList {
    static getItemType() {
        return hn
    }
};
e(pH, "RL_9b308ec16292e64220de49e79891128d");
var uH = pH;
var mH = class mH extends t.GenericRecordList {
    static getItemType() {
        return qn
    }
};
e(mH, "RL_9b333bac761e70e0fa5925ace6c6b732");
var lH = mH;
var fH = class fH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Account_list", "account_listAttr", "account_list", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new is)
        }, !0, is), this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ke)
        }, !0, Ke), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Error", "errorAttr", "Error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fH, "ST_42e091eee706086ba45ab77d0ef6821fStructure");
var Hn = fH;
Hn.init();
var DH = class DH extends t.GenericRecordList {
    static getItemType() {
        return Hn
    }
};
e(DH, "RL_9b5ff325fa2b1963afc7ac5fe1fefcac");
var TH = DH;
var HR = class HR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderConfirmRequest", "p2POrderConfirmRequestAttr", "P2POrderConfirmRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pn)
        }, !0, Pn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new HR(new HR.RecordClass({
            p2POrderConfirmRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9b6a5f6a-0f99-ac90-86bb-3ba26d838bf1"
    }
};
e(HR, "RC_9b6a5f6a0f99ac9086bb3ba26d838bf1");
var Zf = HR;
Zf.init();
var JR = class JR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currency_config", "currency_configAttr", "Currency_config", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ge)
        }, !0, ge)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new JR(new JR.RecordClass({
            currency_configAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fed8226e-0551-19cd-a977-5f74ac223ef2"
    }
};
e(JR, "RC_fed8226e055119cda9775f74ac223ef2");
var Kf = JR;
Kf.init();
var dH = class dH extends t.GenericRecordList {
    static getItemType() {
        return Kf
    }
};
e(dH, "RL_9b9241a2f74aae5dad6a96c423cf89d8");
var yH = dH;
var OH = class OH extends t.GenericRecordList {
    static getItemType() {
        return se
    }
};
e(OH, "RL_9ba938eac8f7611815bf878625e7d65e");
var SH = OH;
var xH = class xH extends t.GenericRecordList {
    static getItemType() {
        return pm
    }
};
e(xH, "RL_9baf947baad965c500c2d89efd8d1d67");
var gH = xH;
var RH = class RH extends t.GenericRecordList {
    static getItemType() {
        return lm
    }
};
e(RH, "RL_9bba1220f91628d35d17687902f382ad");
var bH = RH;
var hH = class hH extends t.GenericRecordList {
    static getItemType() {
        return Nl
    }
};
e(hH, "RL_9bbf3501c857fa771241aed7c9717166");
var IH = hH;
var AH = class AH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Id", "idAttr", "Id", !0, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0), this.attr("Instruments", "instrumentsAttr", "Instruments", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Commission", "commissionAttr", "Commission", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(AH, "EN_d20bdb75c1efb29ce702c3a9c7f8584dEntityRecord");
var Ya = AH;
Ya.init();
var YR = class YR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CTraderInfoTable", "cTraderInfoTableAttr", "CTraderInfoTable", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ya)
        }, !0, Ya)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new YR(new YR.RecordClass({
            cTraderInfoTableAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d9ce9640-ed6f-b829-a91a-89a8787c5326"
    }
};
e(YR, "RC_d9ce9640ed6fb829a91a89a8787c5326");
var Qf = YR;
Qf.init();
var wH = class wH extends t.GenericRecordList {
    static getItemType() {
        return Qf
    }
};
e(wH, "RL_9c0fe2e8bd36912c085460725d0787bb");
var GH = wH;
var BH = class BH extends t.GenericRecordList {
    static getItemType() {
        return Gp
    }
};
e(BH, "RL_9c28fba2ad5d9bbe6b5a769d4094590b");
var PH = BH;
var CH = class CH extends t.GenericRecordList {
    static getItemType() {
        return Gf
    }
};
e(CH, "RL_9c3b367f2c06676be4f28fe9c7a59a38");
var EH = CH;
var ZR = class ZR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Alert", "alertAttr", "Alert", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ZR(new ZR.RecordClass({
            alertAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ZR, "EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord");
var Jn = ZR;
Jn.init();
var KR = class KR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Alert", "alertAttr", "Alert", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Jn)
        }, !0, Jn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new KR(new KR.RecordClass({
            alertAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a"
    }
};
e(KR, "RC_9ca6a18cc49ca7246c44c0f7c2cef62a");
var $f = KR;
$f.init();
var vH = class vH extends t.GenericRecordList {
    static getItemType() {
        return bm
    }
};
e(vH, "RL_9cb7bfaaafb49f2d821d7361f41fe71b");
var LH = vH;
var QR = class QR extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatesListResponse", "statesListResponseAttr", "StatesListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ia)
        }, !0, ia)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new QR(new QR.RecordClass({
            statesListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ca0d2aac-1e11-a6a4-1023-53e595f34482"
    }
};
e(QR, "RC_ca0d2aac1e11a6a4102353e595f34482");
var tT = QR;
tT.init();
var jH = class jH extends t.GenericRecordList {
    static getItemType() {
        return tT
    }
};
e(jH, "RL_9cb7cd98b724492c8a879b00f91bcf20");
var qH = jH;
var UH = class UH extends t.GenericRecordList {
    static getItemType() {
        return km
    }
};
e(UH, "RL_9d3186e90bc9d9c992bd1289281160e2");
var kH = UH;
var VH = class VH extends t.GenericRecordList {
    static getItemType() {
        return yc
    }
};
e(VH, "RL_9d3f56dc0f77227ac337a1c3c235d2c4");
var FH = VH;
var NH = class NH extends t.GenericRecordList {
    static getItemType() {
        return Re
    }
};
e(NH, "RL_9d69b2d3ce2ad95c00706adc74706b15");
var _H = NH;
var zH = class zH extends t.GenericRecordList {
    static getItemType() {
        return dr
    }
};
e(zH, "RL_9da5c6764fa38cdbc45ffab2fe9a4d33");
var MH = zH;
var XH = class XH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Payment_methods", "payment_methodsAttr", "p2p_payment_methods", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(XH, "ST_b08a5be4fd4ca77058e6256ff8f39643Structure");
var Yn = XH;
Yn.init();
var HH = class HH extends t.GenericRecordList {
    static getItemType() {
        return Yn
    }
};
e(HH, "RL_9e08984c04aa3363c26f26b284faa96b");
var WH = HH;
var JH = class JH extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(JH, "ST_e3f9af4171d5e4a41700770295d05c77Structure");
var Zn = JH;
Zn.init();
var $R = class $R extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zn)
        }, !0, Zn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $R(new $R.RecordClass({
            tabsOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7283e2c-6e9c-6bcb-5286-d1ae04959554"
    }
};
e($R, "RC_b7283e2c6e9c6bcb5286d1ae04959554");
var eT = $R;
eT.init();
var ZH = class ZH extends t.GenericRecordList {
    static getItemType() {
        return eT
    }
};
e(ZH, "RL_9e12f04bf3ce19087cbbf62097a9932a");
var YH = ZH;
var tI = class tI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Deposit", "depositAttr", "Deposit", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new fr)
        }, !0, fr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new tI(new tI.RecordClass({
            depositAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9ea5c08a-e168-00a6-4582-da5745fe48cf"
    }
};
e(tI, "RC_9ea5c08ae16800a64582da5745fe48cf");
var rT = tI;
rT.init();
var QH = class QH extends t.GenericRecordList {
    static getItemType() {
        return rT
    }
};
e(QH, "RL_9e1ff0949548eb09d4dbb455a422d959");
var KH = QH;
var tJ = class tJ extends t.GenericRecordList {
    static getItemType() {
        return vn
    }
};
e(tJ, "RL_9e58d9497ee0afabaafd8b106b944074");
var $H = tJ;
var rJ = class rJ extends t.GenericRecordList {
    static getItemType() {
        return wf
    }
};
e(rJ, "RL_9e8eb507fc82c7005600a2499b6a668c");
var eJ = rJ;
var sJ = class sJ extends t.GenericRecordList {
    static getItemType() {
        return Cm
    }
};
e(sJ, "RL_9ec7f7a8dba6a7008e752800c6efcda2");
var aJ = sJ;
var eI = class eI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NilooAuthorize2Response", "nilooAuthorize2ResponseAttr", "NilooAuthorize2Response", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gn)
        }, !0, gn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eI(new eI.RecordClass({
            nilooAuthorize2ResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9edae87b-d34d-57fa-71f2-a72c0cc57e1a"
    }
};
e(eI, "RC_9edae87bd34d57fa71f2a72c0cc57e1a");
var aT = eI;
aT.init();
var nJ = class nJ extends t.GenericRecordList {
    static getItemType() {
        return xf
    }
};
e(nJ, "RL_9f08b56176d33deee65495f413d78949");
var iJ = nJ;
var cJ = class cJ extends t.GenericRecordList {
    static getItemType() {
        return ou
    }
};
e(cJ, "RL_9f7e64e3acb92ada6c7cc1def60ee7ce");
var oJ = cJ;
var rI = class rI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Phone_number_verification", "phone_number_verificationAttr", "Phone_number_verification", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zt)
        }, !0, Zt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rI(new rI.RecordClass({
            phone_number_verificationAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "9fdefb14-23ae-0af9-c1d3-21109b8695e4"
    }
};
e(rI, "RC_9fdefb1423ae0af9c1d321109b8695e4");
var sT = rI;
sT.init();
var aI = class aI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventImages", "eventImagesAttr", "EventImages", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new es)
        }, !0, es)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new aI(new aI.RecordClass({
            eventImagesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a1594f19-c4bb-b962-af10-0318a59756da"
    }
};
e(aI, "RC_a1594f19c4bbb962af100318a59756da");
var iT = aI;
iT.init();
var pJ = class pJ extends t.GenericRecordList {
    static getItemType() {
        return Pf
    }
};
e(pJ, "RL_a1f5641cdfddcfd4462231ca8dc88cc7");
var uJ = pJ;
var mJ = class mJ extends t.GenericRecordList {
    static getItemType() {
        return Qe
    }
};
e(mJ, "RL_a20cf7a86706288fea479fd0bec09085");
var lJ = mJ;
var sI = class sI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertiserPaymentMethodsResponse", "p2PAdvertiserPaymentMethodsResponseAttr", "P2PAdvertiserPaymentMethodsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new js)
        }, !0, js)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sI(new sI.RecordClass({
            p2PAdvertiserPaymentMethodsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a246c61e-9fab-a433-ef6d-84fa27cfa397"
    }
};
e(sI, "RC_a246c61e9faba433ef6d84fa27cfa397");
var nT = sI;
nT.init();
var TJ = class TJ extends t.GenericRecordList {
    static getItemType() {
        return Sp
    }
};
e(TJ, "RL_a269dfd9a948aad7cbddba837f8c095f");
var fJ = TJ;
var yJ = class yJ extends t.GenericRecordList {
    static getItemType() {
        return Ll
    }
};
e(yJ, "RL_a2739472f732c76e6497d74ccb553278");
var DJ = yJ;
var SJ = class SJ extends t.GenericRecordList {
    static getItemType() {
        return sT
    }
};
e(SJ, "RL_a2a3d623cff8db0b23d39b4d88a9486f");
var dJ = SJ;
var gJ = class gJ extends t.GenericRecordList {
    static getItemType() {
        return Fs
    }
};
e(gJ, "RL_a3746675e7afa0a411750081849db606");
var OJ = gJ;
var xJ = class xJ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Month", "monthAttr", "Month", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(xJ, "EN_5be8b31925746693c09b3f64c4898006EntityRecord");
var Kn = xJ;
Kn.init();
var iI = class iI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Month", "monthAttr", "Month", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Kn)
        }, !0, Kn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new iI(new iI.RecordClass({
            monthAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e092deac-f9bc-8885-dd34-714ac00f33e4"
    }
};
e(iI, "RC_e092deacf9bc8885dd34714ac00f33e4");
var oT = iI;
oT.init();
var RJ = class RJ extends t.GenericRecordList {
    static getItemType() {
        return oT
    }
};
e(RJ, "RL_a48ae6e6aedeec60d7b351d47494aa56");
var bJ = RJ;
var IJ = class IJ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GutterSize", "gutterSizeAttr", "GutterSize", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Order", "orderAttr", "Order", !0, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(IJ, "EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord");
var Qn = IJ;
Qn.init();
var nI = class nI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GutterSize", "gutterSizeAttr", "GutterSize", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qn)
        }, !0, Qn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nI(new nI.RecordClass({
            gutterSizeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5018402-fa6c-90c5-e826-e54b2748cedc"
    }
};
e(nI, "RC_a5018402fa6c90c5e826e54b2748cedc");
var cT = nI;
cT.init();
var oI = class oI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("LastRejected", "lastRejectedAttr", "LastRejected", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new N)
        }, !0, N)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oI(new oI.RecordClass({
            lastRejectedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a51985e6-b89e-e511-d2ab-23981acd721e"
    }
};
e(oI, "RC_a51985e6b89ee511d2ab23981acd721e");
var uT = oI;
uT.init();
var AJ = class AJ extends t.GenericRecordList {
    static getItemType() {
        return Qr
    }
};
e(AJ, "RL_a55e145b92d730f4363e159cde35442b");
var hJ = AJ;
var wJ = class wJ extends t.GenericRecordList {
    static getItemType() {
        return Vm
    }
};
e(wJ, "RL_a580b6522f03efa46ba6d394dc540c4d");
var GJ = wJ;
var cI = class cI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserUpdateInfo", "userUpdateInfoAttr", "UserUpdateInfo", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Wn)
        }, !0, Wn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new cI(new cI.RecordClass({
            userUpdateInfoAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a582d846-34a3-0a3a-3b1e-61cbfd3db9de"
    }
};
e(cI, "RC_a582d84634a30a3a3b1e61cbfd3db9de");
var pT = cI;
pT.init();
var BJ = class BJ extends t.GenericRecordList {
    static getItemType() {
        return pT
    }
};
e(BJ, "RL_a5b6b975942e234f0350205b728240be");
var PJ = BJ;
var CJ = class CJ extends t.GenericRecordList {
    static getItemType() {
        return Je
    }
};
e(CJ, "RL_a5d549866b2ac93eae1f3fb2e43c0bf7");
var EJ = CJ;
var uI = class uI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostNewAccountVirtualRequest", "postNewAccountVirtualRequestAttr", "PostNewAccountVirtualRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new jt)
        }, !0, jt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uI(new uI.RecordClass({
            postNewAccountVirtualRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a5fc3d62-312a-89b3-2ae3-93e0571bcad7"
    }
};
e(uI, "RC_a5fc3d62312a89b32ae393e0571bcad7");
var lT = uI;
lT.init();
var vJ = class vJ extends t.GenericRecordList {
    static getItemType() {
        return yr
    }
};
e(vJ, "RL_a60626c1780bfe250dcef75d5dfa5fd1");
var LJ = vJ;
var jJ = class jJ extends t.GenericRecordList {
    static getItemType() {
        return Cu
    }
};
e(jJ, "RL_a67ac7d80c7ef3e94cad052357c9c645");
var qJ = jJ;
var pI = class pI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TaxResidence", "taxResidenceAttr", "TaxResidence", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new pI(new pI.RecordClass({
            taxResidenceAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(pI, "ST_ed25c05f01c113e76dce143270b6165eStructure");
var Za = pI;
Za.init();
var lI = class lI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentDetailsValidFields", "employmentDetailsValidFieldsAttr", "EmploymentDetailsValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Za)
        }, !0, Za)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lI(new lI.RecordClass({
            employmentDetailsValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "adc6eedf-2459-e8c5-73d5-b2a018d7a05e"
    }
};
e(lI, "RC_adc6eedf2459e8c573d5b2a018d7a05e");
var mT = lI;
mT.init();
var UJ = class UJ extends t.GenericRecordList {
    static getItemType() {
        return mT
    }
};
e(UJ, "RL_a6bd162055461d6101d3170682ab4799");
var kJ = UJ;
var mI = class mI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Partner_accounts", "partner_accountsAttr", "partner_settings", !1, !1, t.DataTypes.LongInteger, function() {
            return t.LongInteger.defaultValue
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mI(new mI.RecordClass({
            partner_accountsAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(mI, "ST_3d96747747f3d41e23c92ff9ec0f78ebStructure");
var $n = mI;
$n.init();
var VJ = class VJ extends t.GenericRecordList {
    static getItemType() {
        return $n
    }
};
e(VJ, "RL_a6ed4fd2e7e0b79f06fecc8c65713a43");
var FJ = VJ;
var NJ = class NJ extends t.GenericRecordList {
    static getItemType() {
        return ic
    }
};
e(NJ, "RL_a7094b4040c9bc1f29f799c201256c99");
var _J = NJ;
var fI = class fI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TransactionItem", "transactionItemAttr", "TransactionItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ir)
        }, !0, Ir)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fI(new fI.RecordClass({
            transactionItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a83c5350-1675-e1b1-a92d-ce121c194a38"
    }
};
e(fI, "RC_a83c53501675e1b1a92dce121c194a38");
var fT = fI;
fT.init();
var zJ = class zJ extends t.GenericRecordList {
    static getItemType() {
        return we
    }
};
e(zJ, "RL_a85951adc11db15827205a4c30d6e88f");
var MJ = zJ;
var TI = class TI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDR", "iDRAttr", "IDR", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new re)
        }, !0, re)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new TI(new TI.RecordClass({
            iDRAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a8681099-a96d-9738-6677-79eaaccedc4a"
    }
};
e(TI, "RC_a8681099a96d9738667779eaaccedc4a");
var TT = TI;
TT.init();
var WJ = class WJ extends t.GenericRecordList {
    static getItemType() {
        return ml
    }
};
e(WJ, "RL_a8b7c276560c35af141714ac8a51d257");
var XJ = WJ;
var JJ = class JJ extends t.GenericRecordList {
    static getItemType() {
        return je
    }
};
e(JJ, "RL_a8d533a0f4e6b4998d1e5475942bbcf3");
var HJ = JJ;
var DI = class DI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostResetPasswordRequest", "postResetPasswordRequestAttr", "PostResetPasswordRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ve)
        }, !0, ve)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new DI(new DI.RecordClass({
            postResetPasswordRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "a9755f38-b054-2dfb-6acd-d8617637c169"
    }
};
e(DI, "RC_a9755f38b0542dfb6acdd8617637c169");
var DT = DI;
DT.init();
var ZJ = class ZJ extends t.GenericRecordList {
    static getItemType() {
        return Bu
    }
};
e(ZJ, "RL_a9a9108148017b3108e7788d5e0b597c");
var YJ = ZJ;
var QJ = class QJ extends t.GenericRecordList {
    static getItemType() {
        return Ac
    }
};
e(QJ, "RL_a9afb210b5496f25c21da21e788199b5");
var KJ = QJ;
var tY = class tY extends t.GenericRecordList {
    static getItemType() {
        return S
    }
};
e(tY, "RL_a9ea31b939f652b4b427fa383c80cdbb");
var $J = tY;
var eY = class eY extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("new_password", "new_passwordAttr", "new_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("old_password", "old_passwordAttr", "old_password", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("platform", "platformAttr", "platform", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(eY, "ST_d1246d83c419f598cf8e4e18d5276097Structure");
var to = eY;
to.init();
var yI = class yI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformPasswordChangeRequest", "postTradingPlatformPasswordChangeRequestAttr", "PostTradingPlatformPasswordChangeRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new to)
        }, !0, to)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yI(new yI.RecordClass({
            postTradingPlatformPasswordChangeRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7ccb1d3-7481-9fab-b1f3-fad7a6c0dd99"
    }
};
e(yI, "RC_b7ccb1d374819fabb1f3fad7a6c0dd99");
var yT = yI;
yT.init();
var aY = class aY extends t.GenericRecordList {
    static getItemType() {
        return yT
    }
};
e(aY, "RL_aa768f1f5f08fea3fa4adb58f7814e07");
var rY = aY;
var iY = class iY extends t.GenericRecordList {
    static getItemType() {
        return qa
    }
};
e(iY, "RL_aae5261643eceafe792727f1ae080d68");
var sY = iY;
var oY = class oY extends t.GenericRecordList {
    static getItemType() {
        return fr
    }
};
e(oY, "RL_aae9a3766bc818ac211c0ea434d05161");
var nY = oY;
var uY = class uY extends t.GenericRecordList {
    static getItemType() {
        return pf
    }
};
e(uY, "RL_aaf5b1e2b773710766863b43f6cf9229");
var cY = uY;
var lY = class lY extends t.GenericRecordList {
    static getItemType() {
        return Fn
    }
};
e(lY, "RL_ab5f17238b4d916b868f1aadc23a7d36");
var pY = lY;
var fY = class fY extends t.GenericRecordList {
    static getItemType() {
        return Di
    }
};
e(fY, "RL_ab79e9426faff446a04dca332793c58f");
var mY = fY;
var DY = class DY extends t.GenericRecordList {
    static getItemType() {
        return ts
    }
};
e(DY, "RL_abbb06caa2dc3007694c8b499e93ac42");
var TY = DY;
var dY = class dY extends t.GenericRecordList {
    static getItemType() {
        return fs
    }
};
e(dY, "RL_ac654ecd19209e7187154374b6dafe24");
var yY = dY;
var dI = class dI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Standard", "standardAttr", "Standard", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new y)
        }, !0, y)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dI(new dI.RecordClass({
            standardAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "aca073df-88d4-0d31-252f-a904cba1bb39"
    }
};
e(dI, "RC_aca073df88d40d31252fa904cba1bb39");
var dT = dI;
dT.init();
var OY = class OY extends t.GenericRecordList {
    static getItemType() {
        return Ym
    }
};
e(OY, "RL_acd5293f66179e401e8caf770ebbf5fc");
var SY = OY;
var xY = class xY extends t.GenericRecordList {
    static getItemType() {
        return ua
    }
};
e(xY, "RL_acf032e090fcf4c3139771c17de499e0");
var gY = xY;
var SI = class SI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostCashierFiatResponse", "postCashierFiatResponseAttr", "PostCashierFiatResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Qs)
        }, !0, Qs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new SI(new SI.RecordClass({
            postCashierFiatResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad1368b4-9b01-cac1-05fa-b51dcf07c686"
    }
};
e(SI, "RC_ad1368b49b01cac105fab51dcf07c686");
var ST = SI;
ST.init();
var bY = class bY extends t.GenericRecordList {
    static getItemType() {
        return hr
    }
};
e(bY, "RL_016ebe8f15c3060e53dd56f2fea28791");
var OI = bY;
var RY = class RY extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new A)
        }, !0, A), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("trading_platform_available_accounts", "trading_platform_available_accountsAttr", "trading_platform_available_accounts", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new OI)
        }, !0, OI), this.attr("Error", "errorAttr", "error", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new n)
        }, !0, n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(RY, "ST_7a752455e27bb9ea87d724bbb902dd16Structure");
var eo = RY;
eo.init();
var gI = class gI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountResponseMT5", "postTradingPlatformAvailableAccountResponseMT5Attr", "PostTradingPlatformAvailableAccountResponseMT5", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new eo)
        }, !0, eo)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gI(new gI.RecordClass({
            postTradingPlatformAvailableAccountResponseMT5Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ad160031-f42d-1788-0074-48cccfc906ac"
    }
};
e(gI, "RC_ad160031f42d1788007448cccfc906ac");
var OT = gI;
OT.init();
var xI = class xI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EventType", "eventTypeAttr", "EventType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new F)
        }, !0, F)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xI(new xI.RecordClass({
            eventTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e225715f-d2bd-2194-23cc-15189415e330"
    }
};
e(xI, "RC_e225715fd2bd219423cc15189415e330");
var gT = xI;
gT.init();
var hY = class hY extends t.GenericRecordList {
    static getItemType() {
        return gT
    }
};
e(hY, "RL_ad41872f2de8dd96a0a3342b36c4be55");
var IY = hY;
var bI = class bI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Zero_spread", "zero_spreadAttr", "Zero_spread", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new _)
        }, !0, _)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bI(new bI.RecordClass({
            zero_spreadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ada7ae2f-7fca-dfe9-ad4c-b9dbd1c4caf8"
    }
};
e(bI, "RC_ada7ae2f7fcadfe9ad4cb9dbd1c4caf8");
var xT = bI;
xT.init();
var GY = class GY extends t.GenericRecordList {
    static getItemType() {
        return ms
    }
};
e(GY, "RL_adbfc30c899ef88f92a4ffb0fe1c08d9");
var AY = GY;
var PY = class PY extends t.GenericRecordList {
    static getItemType() {
        return qm
    }
};
e(PY, "RL_ae4b771a164f6684a9910e7d97abd12c");
var wY = PY;
var RI = class RI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Commodity", "commodityAttr", "Commodity", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new g)
        }, !0, g)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new RI(new RI.RecordClass({
            commodityAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e62fa91c-e8ed-0a38-e810-cad8c726da2f"
    }
};
e(RI, "RC_e62fa91ce8ed0a38e810cad8c726da2f");
var bT = RI;
bT.init();
var EY = class EY extends t.GenericRecordList {
    static getItemType() {
        return bT
    }
};
e(EY, "RL_aecf700fcd9c0ef5df9dda4dac8947af");
var BY = EY;
var LY = class LY extends t.GenericRecordList {
    static getItemType() {
        return Jn
    }
};
e(LY, "RL_af071f8b45f2932e1364f15bc3e90819");
var CY = LY;
var qY = class qY extends t.GenericRecordList {
    static getItemType() {
        return En
    }
};
e(qY, "RL_af7f649b9a00c07af59590b0760c28af");
var vY = qY;
var kY = class kY extends t.GenericRecordList {
    static getItemType() {
        return Sf
    }
};
e(kY, "RL_b045e9b0e4d1bde192865267e3d1c52b");
var jY = kY;
var II = class II extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ResidenceListResponse", "residenceListResponseAttr", "ResidenceListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Hr)
        }, !0, Hr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new II(new II.RecordClass({
            residenceListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b301ee5c-bf9a-fe78-71d2-5666ae59fb76"
    }
};
e(II, "RC_b301ee5cbf9afe7871d25666ae59fb76");
var RT = II;
RT.init();
var FY = class FY extends t.GenericRecordList {
    static getItemType() {
        return RT
    }
};
e(FY, "RL_b05e7a85d3c8c87f3a95046d3a3e82ca");
var UY = FY;
var _Y = class _Y extends t.GenericRecordList {
    static getItemType() {
        return Xe
    }
};
e(_Y, "RL_b0a8bd7843abab931adac2b23c884550");
var VY = _Y;
var MY = class MY extends t.GenericRecordList {
    static getItemType() {
        return Af
    }
};
e(MY, "RL_b115fffa775eacd174e4dc6056343607");
var NY = MY;
var XY = class XY extends t.GenericRecordList {
    static getItemType() {
        return Rt
    }
};
e(XY, "RL_b12f7a71666929e6ceec6559f200d213");
var zY = XY;
var HY = class HY extends t.GenericRecordList {
    static getItemType() {
        return tn
    }
};
e(HY, "RL_b15112cdeeac0d3ba922a9de50cd9ca3");
var WY = HY;
var hI = class hI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ss)
        }, !0, ss)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hI(new hI.RecordClass({
            dropdownOptionAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e03a4930-8bfa-ca02-257d-451178bbf041"
    }
};
e(hI, "RC_e03a49308bfaca02257d451178bbf041");
var IT = hI;
IT.init();
var YY = class YY extends t.GenericRecordList {
    static getItemType() {
        return IT
    }
};
e(YY, "RL_b17522b541f7e019c0443ba6658c825f");
var JY = YY;
var AI = class AI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req7", "echo_req7Attr", "Echo_req11", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new lr)
        }, !0, lr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new AI(new AI.RecordClass({
            echo_req7Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b17c3526-d6de-ec2e-a51f-e6ca6895e3ea"
    }
};
e(AI, "RC_b17c3526d6deec2ea51fe6ca6895e3ea");
var hT = AI;
hT.init();
var GI = class GI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostTradingPlatformAvailableAccountsRequest", "postTradingPlatformAvailableAccountsRequestAttr", "PostTradingPlatformAvailableAccountsRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mr)
        }, !0, mr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new GI(new GI.RecordClass({
            postTradingPlatformAvailableAccountsRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f1102e0e-903c-36b8-9dd3-a8ad41701e5f"
    }
};
e(GI, "RC_f1102e0e903c36b89dd3a8ad41701e5f");
var AT = GI;
AT.init();
var KY = class KY extends t.GenericRecordList {
    static getItemType() {
        return AT
    }
};
e(KY, "RL_b180a59f8f5def3150ec40c96b1bacf2");
var ZY = KY;
var $Y = class $Y extends t.GenericRecordList {
    static getItemType() {
        return ba
    }
};
e($Y, "RL_b1aa5dcb1499d7f1c78cdf33b91cc48b");
var QY = $Y;
var wI = class wI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AllAccountTypePlatforms", "allAccountTypePlatformsAttr", "AllAccountTypePlatforms", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Y)
        }, !0, Y)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new wI(new wI.RecordClass({
            allAccountTypePlatformsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b1f9a62a-a1eb-0e79-79aa-ceb89243cea9"
    }
};
e(wI, "RC_b1f9a62aa1eb0e7979aaceb89243cea9");
var GT = wI;
GT.init();
var PI = class PI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new qi)
        }, !0, qi)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new PI(new PI.RecordClass({
            columnBreakAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b6adbbf4-e08b-ad29-75a6-f8f796279b71"
    }
};
e(PI, "RC_b6adbbf4e08bad2975a6f8f796279b71");
var wT = PI;
wT.init();
var eZ = class eZ extends t.GenericRecordList {
    static getItemType() {
        return wT
    }
};
e(eZ, "RL_b2003a063523641b68ecff9e50755bc3");
var tZ = eZ;
var aZ = class aZ extends t.GenericRecordList {
    static getItemType() {
        return df
    }
};
e(aZ, "RL_b2061216c3d82010dc8c3226204dac46");
var rZ = aZ;
var iZ = class iZ extends t.GenericRecordList {
    static getItemType() {
        return Mi
    }
};
e(iZ, "RL_b2117356ef65d3231f992a69f03538c4");
var sZ = iZ;
var oZ = class oZ extends t.GenericRecordList {
    static getItemType() {
        return Jf
    }
};
e(oZ, "RL_b25c3a0fcffbc750be1c6409a1753ee3");
var nZ = oZ;
var cZ = class cZ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IsValid", "isValidAttr", "IsValid", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("MissingLowerCaseLetter", "missingLowerCaseLetterAttr", "MissingLowerCaseLetter", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("MissingMinimumLength", "missingMinimumLengthAttr", "MissingMinimumLength", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("MissingUpperCaseLetter", "missingUpperCaseLetterAttr", "MissingUpperCaseLetter", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("MissingNumber", "missingNumberAttr", "MissingNumber", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0), this.attr("MissingSpecialCharacter", "missingSpecialCharacterAttr", "MissingSpecialCharacter", !1, !1, t.DataTypes.Boolean, function() {
            return !1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(cZ, "PasswordValidationResultRec");
var ro = cZ;
ro.init();
var BI = class BI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ro)
        }, !0, ro)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new BI(new BI.RecordClass({
            passwordValidationResultAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27"
    }
};
e(BI, "RC_b27f0b968b0f7cea61506ac9d6ee7c27");
var PT = BI;
PT.init();
var EI = class EI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentDetailsValidFields2", "employmentDetailsValidFields2Attr", "EmploymentDetailsValidFields2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ra)
        }, !0, Ra)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new EI(new EI.RecordClass({
            employmentDetailsValidFields2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d698d151-b2e6-6aaa-28aa-360a3fb88128"
    }
};
e(EI, "RC_d698d151b2e66aaa28aa360a3fb88128");
var BT = EI;
BT.init();
var pZ = class pZ extends t.GenericRecordList {
    static getItemType() {
        return BT
    }
};
e(pZ, "RL_b3642d95210ec5298d58a36489692835");
var uZ = pZ;
var mZ = class mZ extends t.GenericRecordList {
    static getItemType() {
        return uf
    }
};
e(mZ, "RL_b36cbf00535b19d854633a6aebe03044");
var lZ = mZ;
var TZ = class TZ extends t.GenericRecordList {
    static getItemType() {
        return Up
    }
};
e(TZ, "RL_b399fd74f6375cee8461023a74406333");
var fZ = TZ;
var yZ = class yZ extends t.GenericRecordList {
    static getItemType() {
        return Ne
    }
};
e(yZ, "RL_b3a4372973bd6a9f1d0acc33502a4d8c");
var DZ = yZ;
var SZ = class SZ extends t.GenericRecordList {
    static getItemType() {
        return Zn
    }
};
e(SZ, "RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc");
var dZ = SZ;
var gZ = class gZ extends t.GenericRecordList {
    static getItemType() {
        return lt
    }
};
e(gZ, "RL_b4065b2497c437409e9ee62aa23c452d");
var OZ = gZ;
var bZ = class bZ extends t.GenericRecordList {
    static getItemType() {
        return tu
    }
};
e(bZ, "RL_b412922a0a29f17092810fe62dd48743");
var xZ = bZ;
var IZ = class IZ extends t.GenericRecordList {
    static getItemType() {
        return zs
    }
};
e(IZ, "RL_b41818dfe314f17b4b47c38bc584ee3d");
var RZ = IZ;
var AZ = class AZ extends t.GenericRecordList {
    static getItemType() {
        return nT
    }
};
e(AZ, "RL_b4a5c9d3dcebe6413a999de1e05b8c08");
var hZ = AZ;
var CI = class CI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetPartnerAccountResponse", "getPartnerAccountResponseAttr", "GetPartnerAccountResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ci)
        }, !0, Ci)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new CI(new CI.RecordClass({
            getPartnerAccountResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c8e982ea-92b4-7c78-8902-752bff73a401"
    }
};
e(CI, "RC_c8e982ea92b47c788902752bff73a401");
var ET = CI;
ET.init();
var wZ = class wZ extends t.GenericRecordList {
    static getItemType() {
        return ET
    }
};
e(wZ, "RL_b4f9773535cc09d3c6dd55ec7a4df8d1");
var GZ = wZ;
var BZ = class BZ extends t.GenericRecordList {
    static getItemType() {
        return to
    }
};
e(BZ, "RL_b50ecc69bf1d35f5563a812d2e69bf9c");
var PZ = BZ;
var LI = class LI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Property4", "property4Attr", "Property4", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dt)
        }, !0, dt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new LI(new LI.RecordClass({
            property4Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dc6aa0e1-d127-d52a-bc5f-e664ea01c3d4"
    }
};
e(LI, "RC_dc6aa0e1d127d52abc5fe664ea01c3d4");
var CT = LI;
CT.init();
var CZ = class CZ extends t.GenericRecordList {
    static getItemType() {
        return CT
    }
};
e(CZ, "RL_b54404eb98d2b81f86adea505019f478");
var EZ = CZ;
var vZ = class vZ extends t.GenericRecordList {
    static getItemType() {
        return Dt
    }
};
e(vZ, "RL_b56e095b35b79d4b45c235a25225317a");
var LZ = vZ;
var vI = class vI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2POrderCreate", "p2POrderCreateAttr", "P2POrderCreate", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ze)
        }, !0, ze)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new vI(new vI.RecordClass({
            p2POrderCreateAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f327fc16-005a-306a-d5fb-3f70f9f60d4b"
    }
};
e(vI, "RC_f327fc16005a306ad5fb3f70f9f60d4b");
var LT = vI;
LT.init();
var jZ = class jZ extends t.GenericRecordList {
    static getItemType() {
        return LT
    }
};
e(jZ, "RL_b5bd9751396d473958f1150970a30598");
var qZ = jZ;
var UZ = class UZ extends t.GenericRecordList {
    static getItemType() {
        return he
    }
};
e(UZ, "RL_b60c30f70d5c7d39a851eeb74ad499d4");
var kZ = UZ;
var qI = class qI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req11", "echo_req11Attr", "Echo_req16", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ti)
        }, !0, ti)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new qI(new qI.RecordClass({
            echo_req11Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b66f106f-fca3-ec8b-9893-c19faf2ae442"
    }
};
e(qI, "RC_b66f106ffca3ec8b9893c19faf2ae442");
var vT = qI;
vT.init();
var VZ = class VZ extends t.GenericRecordList {
    static getItemType() {
        return _i
    }
};
e(VZ, "RL_b693780c9c2e91ec100b6cde72ab3ad5");
var FZ = VZ;
var jI = class jI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CommissionType", "commissionTypeAttr", "CommissionType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new jI(new jI.RecordClass({
            commissionTypeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b69a6b3d-f952-1467-f986-c333bdf57978"
    }
};
e(jI, "RC_b69a6b3df9521467f986c333bdf57978");
var qT = jI;
qT.init();
var kI = class kI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("ChangePasswordFailureReason", "changePasswordFailureReasonAttr", "ChangePasswordFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new yr)
        }, !0, yr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new kI(new kI.RecordClass({
            changePasswordFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e5c662d4-06f8-3f7f-791b-d7e5c8b0c543"
    }
};
e(kI, "RC_e5c662d406f83f7f791bd7e5c8b0c543");
var jT = kI;
jT.init();
var NZ = class NZ extends t.GenericRecordList {
    static getItemType() {
        return jT
    }
};
e(NZ, "RL_b6f4bbf36a4770c53788c60d2b555d3c");
var _Z = NZ;
var UI = class UI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Object8", "object8Attr", "Object8", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new U)
        }, !0, U)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new UI(new UI.RecordClass({
            object8Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b7327b19-dbb7-70ea-9a49-f2ca519bdd0b"
    }
};
e(UI, "RC_b7327b19dbb770ea9a49f2ca519bdd0b");
var kT = UI;
kT.init();
var zZ = class zZ extends t.GenericRecordList {
    static getItemType() {
        return Mp
    }
};
e(zZ, "RL_b7369d5f4cafbbcd5483c083235b9d49");
var MZ = zZ;
var WZ = class WZ extends t.GenericRecordList {
    static getItemType() {
        return ys
    }
};
e(WZ, "RL_b78395d0ac2f16e352960c06dc226372");
var XZ = WZ;
var JZ = class JZ extends t.GenericRecordList {
    static getItemType() {
        return qt
    }
};
e(JZ, "RL_b7a05579761da982186db0cb56ca5900");
var HZ = JZ;
var FI = class FI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Message", "messageAttr", "Message", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Q)
        }, !0, Q)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new FI(new FI.RecordClass({
            messageAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d4817385-d3db-1686-3330-1f8c73e2d828"
    }
};
e(FI, "RC_d4817385d3db168633301f8c73e2d828");
var UT = FI;
UT.init();
var ZZ = class ZZ extends t.GenericRecordList {
    static getItemType() {
        return UT
    }
};
e(ZZ, "RL_b7ce76296993c7fe1a92e2eeb8b1ed65");
var YZ = ZZ;
var VI = class VI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Ownership", "ownershipAttr", "Ownership", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ie)
        }, !0, ie)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new VI(new VI.RecordClass({
            ownershipAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "b8272ebc-b560-c4fc-5c96-482b705582ba"
    }
};
e(VI, "RC_b8272ebcb560c4fc5c96482b705582ba");
var FT = VI;
FT.init();
var QZ = class QZ extends t.GenericRecordList {
    static getItemType() {
        return g
    }
};
e(QZ, "RL_b88c0ed17712805463deb6be1a1ca760");
var KZ = QZ;
var tK = class tK extends t.GenericRecordList {
    static getItemType() {
        return tr
    }
};
e(tK, "RL_b89c914195d1eb859bace1db1e3d63f3");
var $Z = tK;
var eK = class eK extends t.GenericRecordList {
    static getItemType() {
        return jr
    }
};
e(eK, "RL_535207a4cf1e4bc1dcc85faad9d4014e");
var _I = eK;
var rK = class rK extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req", "echo_reqAttr", "echo_req", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Me)
        }, !0, Me), this.attr("Msg_type", "msg_typeAttr", "msg_type", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Trading_platform_status", "trading_platform_statusAttr", "trading_platform_status", !1, !1, t.DataTypes.RecordList, function() {
            return t.ImmutableBase.getData(new _I)
        }, !0, _I)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(rK, "ST_e3b9823599cdef8012785f8875d8da38Structure");
var ao = rK;
ao.init();
var sK = class sK extends t.GenericRecordList {
    static getItemType() {
        return ao
    }
};
e(sK, "RL_b903ad96980478d7874f689155c88d6c");
var aK = sK;
var nK = class nK extends t.GenericRecordList {
    static getItemType() {
        return go
    }
};
e(nK, "RL_b9652ede746cef284846c75c31612851");
var iK = nK;
var cK = class cK extends t.GenericRecordList {
    static getItemType() {
        return Za
    }
};
e(cK, "RL_b9c5006c8952247213a88f1d5a29ff4e");
var oK = cK;
var pK = class pK extends t.GenericRecordList {
    static getItemType() {
        return Or
    }
};
e(pK, "RL_ba16f8261986c6b18df245be53196ced");
var uK = pK;
var mK = class mK extends t.GenericRecordList {
    static getItemType() {
        return Ta
    }
};
e(mK, "RL_ba4b389039c629b80648a12e9efb4f2c");
var lK = mK;
var fK = class fK extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFD_Score", "cFD_ScoreAttr", "cfd_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Financial_Information_Score", "financial_Information_ScoreAttr", "financial_information_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Total_Score", "total_ScoreAttr", "total_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0), this.attr("Trading_Score", "trading_ScoreAttr", "trading_score", !1, !1, t.DataTypes.Integer, function() {
            return 0
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(fK, "ST_9cdac378250b09743e8cce04f5239c88Structure");
var gr = fK;
gr.init();
var NI = class NI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Set_Financial_Assessment", "set_Financial_AssessmentAttr", "set_financial_assessment", !0, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gr)
        }, !0, gr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new NI(new NI.RecordClass({
            set_Financial_AssessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(NI, "ST_6db282dee329dd9bb2375ad053cb46d2Structure");
var so = NI;
so.init();
var MI = class MI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AssessmentResponse", "assessmentResponseAttr", "AssessmentResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new so)
        }, !0, so)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new MI(new MI.RecordClass({
            assessmentResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bb0ca189-1ae5-9927-0dda-01dce8b71766"
    }
};
e(MI, "RC_bb0ca1891ae599270dda01dce8b71766");
var VT = MI;
VT.init();
var DK = class DK extends t.GenericRecordList {
    static getItemType() {
        return dn
    }
};
e(DK, "RL_bb23cfabef259372d4ccc6deba43b63b");
var TK = DK;
var dK = class dK extends t.GenericRecordList {
    static getItemType() {
        return Ua
    }
};
e(dK, "RL_bb38c3ab91cd808b60d5ca14bf9b4dbc");
var yK = dK;
var OK = class OK extends t.GenericRecordList {
    static getItemType() {
        return bf
    }
};
e(OK, "RL_bb3acec9ee51c7f4799aac90c90128ef");
var SK = OK;
var zI = class zI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new xn)
        }, !0, xn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new zI(new zI.RecordClass({
            timePickerOptionalConfigsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88"
    }
};
e(zI, "RC_bb80a04f7ea6a5bb3d33db9b2bca4c88");
var _T = zI;
_T.init();
var XI = class XI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Api", "apiAttr", "Api", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new X)
        }, !0, X)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new XI(new XI.RecordClass({
            apiAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdef44d8-6581-2d5f-122c-87c3e4a61605"
    }
};
e(XI, "RC_cdef44d865812d5f122c87c3e4a61605");
var NT = XI;
NT.init();
var xK = class xK extends t.GenericRecordList {
    static getItemType() {
        return NT
    }
};
e(xK, "RL_bbe2c440b74c8377ca81d2556840a89a");
var gK = xK;
var WI = class WI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("TncApprovalResponse", "tncApprovalResponseAttr", "TncApprovalResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new na)
        }, !0, na)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new WI(new WI.RecordClass({
            tncApprovalResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "bc1d8808-c6b6-91d6-3b7c-e4b84f5f5668"
    }
};
e(WI, "RC_bc1d8808c6b691d63b7ce4b84f5f5668");
var MT = WI;
MT.init();
var RK = class RK extends t.GenericRecordList {
    static getItemType() {
        return gp
    }
};
e(RK, "RL_bd4587648373bf4d3e2c5fb636046bee");
var bK = RK;
var hK = class hK extends t.GenericRecordList {
    static getItemType() {
        return Fm
    }
};
e(hK, "RL_be5a886e16881f9049697d324754da74");
var IK = hK;
var HI = class HI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("IDVValidFields", "iDVValidFieldsAttr", "IDVValidFields", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Pa)
        }, !0, Pa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new HI(new HI.RecordClass({
            iDVValidFieldsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "becf146c-6950-a917-9713-6bc45fb81e1a"
    }
};
e(HI, "RC_becf146c6950a91797136bc45fb81e1a");
var zT = HI;
zT.init();
var GK = class GK extends t.GenericRecordList {
    static getItemType() {
        return L
    }
};
e(GK, "RL_bef3e6a67021fb567854973ac4534a61");
var AK = GK;
var PK = class PK extends t.GenericRecordList {
    static getItemType() {
        return Nu
    }
};
e(PK, "RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f");
var wK = PK;
var EK = class EK extends t.GenericRecordList {
    static getItemType() {
        return Be
    }
};
e(EK, "RL_bf51b2a749ab1c5a248d7019c556ff5a");
var BK = EK;
var JI = class JI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Set_Financial_Assessment", "set_Financial_AssessmentAttr", "Set_Financial_Assessment", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new gr)
        }, !0, gr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new JI(new JI.RecordClass({
            set_Financial_AssessmentAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f3f53373-0e3b-38e3-3f51-970def154551"
    }
};
e(JI, "RC_f3f533730e3b38e33f51970def154551");
var XT = JI;
XT.init();
var LK = class LK extends t.GenericRecordList {
    static getItemType() {
        return XT
    }
};
e(LK, "RL_bf9d4b591d666db95ff5f8501490c138");
var CK = LK;
var qK = class qK extends t.GenericRecordList {
    static getItemType() {
        return ym
    }
};
e(qK, "RL_bfdb0a00a150c65e1e25049482edba6b");
var vK = qK;
var kK = class kK extends t.GenericRecordList {
    static getItemType() {
        return Us
    }
};
e(kK, "RL_bfe5e088b2f6df6ae697d4a263069bca");
var jK = kK;
var FK = class FK extends t.GenericRecordList {
    static getItemType() {
        return kp
    }
};
e(FK, "RL_bff307d70f446f7253411514e4792551");
var UK = FK;
var _K = class _K extends t.GenericRecordList {
    static getItemType() {
        return gr
    }
};
e(_K, "RL_c10d98e0396eaff1d08672f779ec63cb");
var VK = _K;
var MK = class MK extends t.GenericRecordList {
    static getItemType() {
        return xo
    }
};
e(MK, "RL_c1407eef4068fdc203f218120af1bf44");
var NK = MK;
var XK = class XK extends t.GenericRecordList {
    static getItemType() {
        return lT
    }
};
e(XK, "RL_c1b551b639cf44782c03b977f31ed021");
var zK = XK;
var HK = class HK extends t.GenericRecordList {
    static getItemType() {
        return Ma
    }
};
e(HK, "RL_c1be89f5b6de305a128bf16d8a98a075");
var WK = HK;
var YI = class YI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("NotificationEventResponse", "notificationEventResponseAttr", "NotificationEventResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new bn)
        }, !0, bn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new YI(new YI.RecordClass({
            notificationEventResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cdd09318-1252-d8c3-9658-eb7271017441"
    }
};
e(YI, "RC_cdd093181252d8c39658eb7271017441");
var WT = YI;
WT.init();
var YK = class YK extends t.GenericRecordList {
    static getItemType() {
        return WT
    }
};
e(YK, "RL_c1fc2d91a927b6c04c65f17fe69d7364");
var JK = YK;
var KK = class KK extends t.GenericRecordList {
    static getItemType() {
        return Fa
    }
};
e(KK, "RL_c203bcfb6bf6e15de46094614f4afa20");
var ZK = KK;
var $K = class $K extends t.GenericRecordList {
    static getItemType() {
        return Ze
    }
};
e($K, "RL_c228801268cde38f697e01100ad11a20");
var QK = $K;
var eQ = class eQ extends t.GenericRecordList {
    static getItemType() {
        return Ce
    }
};
e(eQ, "RL_c229edfd5a861b3989c3898b88a89f90");
var tQ = eQ;
var ZI = class ZI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AuthorizePayload", "authorizePayloadAttr", "AuthorizePayload", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oa)
        }, !0, oa)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ZI(new ZI.RecordClass({
            authorizePayloadAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c2a1fb32-99bb-a375-b344-c1c9b33ef2ea"
    }
};
e(ZI, "RC_c2a1fb3299bba375b344c1c9b33ef2ea");
var HT = ZI;
HT.init();
var aQ = class aQ extends t.GenericRecordList {
    static getItemType() {
        return Xm
    }
};
e(aQ, "RL_c2a3ea4fb238a17e874113aa7e434cad");
var rQ = aQ;
var KI = class KI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Mt5_login_listItem", "mt5_login_listItemAttr", "Mt5_login_listItem", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Lr)
        }, !0, Lr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new KI(new KI.RecordClass({
            mt5_login_listItemAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3b76e5c-6918-ce63-091a-cb36b11f3fe2"
    }
};
e(KI, "RC_e3b76e5c6918ce63091acb36b11f3fe2");
var JT = KI;
JT.init();
var iQ = class iQ extends t.GenericRecordList {
    static getItemType() {
        return JT
    }
};
e(iQ, "RL_c2ff81a5529fadc0682cd0e233934577");
var sQ = iQ;
var oQ = class oQ extends t.GenericRecordList {
    static getItemType() {
        return TT
    }
};
e(oQ, "RL_c336d58dd96d2c1d5470075e96b2dfe2");
var nQ = oQ;
var uQ = class uQ extends t.GenericRecordList {
    static getItemType() {
        return Ge
    }
};
e(uQ, "RL_c35bbded731f8ecb695157b429b6b213");
var cQ = uQ;
var lQ = class lQ extends t.GenericRecordList {
    static getItemType() {
        return Ql
    }
};
e(lQ, "RL_c365ce2506ed574ed65fe595b749770c");
var pQ = lQ;
var fQ = class fQ extends t.GenericRecordList {
    static getItemType() {
        return Ff
    }
};
e(fQ, "RL_c369c9b33992b0b31d3c834af6220bf1");
var mQ = fQ;
var DQ = class DQ extends t.GenericRecordList {
    static getItemType() {
        return Ya
    }
};
e(DQ, "RL_c3b8cba0fbc47ed9657b955a859cf977");
var TQ = DQ;
var dQ = class dQ extends t.GenericRecordList {
    static getItemType() {
        return Ln
    }
};
e(dQ, "RL_c542301ba033767f97d37c7ac8f0f71c");
var yQ = dQ;
var OQ = class OQ extends t.GenericRecordList {
    static getItemType() {
        return Vl
    }
};
e(OQ, "RL_c564b1e63d41953ea9734fb248f40109");
var SQ = OQ;
var QI = class QI extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAccountListResponse", "postAccountListResponseAttr", "PostAccountListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Hn)
        }, !0, Hn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new QI(new QI.RecordClass({
            postAccountListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c567cbac-2969-babe-c315-08d5ba9b8248"
    }
};
e(QI, "RC_c567cbac2969babec31508d5ba9b8248");
var YT = QI;
YT.init();
var xQ = class xQ extends t.GenericRecordList {
    static getItemType() {
        return D
    }
};
e(xQ, "RL_c57bee494a7b59efa829527c57b9922e");
var gQ = xQ;
var RQ = class RQ extends t.GenericRecordList {
    static getItemType() {
        return In
    }
};
e(RQ, "RL_c58ca0a921eee43537149b3c5b7a13e2");
var bQ = RQ;
var hQ = class hQ extends t.GenericRecordList {
    static getItemType() {
        return GT
    }
};
e(hQ, "RL_c5909a8b1377430a2e36d2ce210bb739");
var IQ = hQ;
var GQ = class GQ extends t.GenericRecordList {
    static getItemType() {
        return nt
    }
};
e(GQ, "RL_c5992e3683e9f3f60844c31fd0aa7945");
var AQ = GQ;
var PQ = class PQ extends t.GenericRecordList {
    static getItemType() {
        return I
    }
};
e(PQ, "RL_c5a2c6cca3ac9abd623572381d94e72b");
var wQ = PQ;
var EQ = class EQ extends t.GenericRecordList {
    static getItemType() {
        return Ki
    }
};
e(EQ, "RL_c5c6c21effa285fee00f8dc17d9ba72f");
var BQ = EQ;
var LQ = class LQ extends t.GenericRecordList {
    static getItemType() {
        return Xr
    }
};
e(LQ, "RL_c6491fa29594270d54ced72bf0d6733c");
var CQ = LQ;
var qQ = class qQ extends t.GenericRecordList {
    static getItemType() {
        return wn
    }
};
e(qQ, "RL_c6a47a1068f494ccd422ebb6efa80b1c");
var vQ = qQ;
var kQ = class kQ extends t.GenericRecordList {
    static getItemType() {
        return ke
    }
};
e(kQ, "RL_c6c5bbed4698a9104285c2ffcc29f228");
var jQ = kQ;
var $I = class $I extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsAllPlans", "cFDsAllPlansAttr", "CFDsAllPlans", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new v)
        }, !0, v)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new $I(new $I.RecordClass({
            cFDsAllPlansAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ddd4434c-168a-0ada-8981-4bb2e58ea557"
    }
};
e($I, "RC_ddd4434c168a0ada89814bb2e58ea557");
var ZT = $I;
ZT.init();
var FQ = class FQ extends t.GenericRecordList {
    static getItemType() {
        return ZT
    }
};
e(FQ, "RL_c6d27f5b90f8f2a5480a5ec90b76659f");
var UQ = FQ;
var _Q = class _Q extends t.GenericRecordList {
    static getItemType() {
        return mn
    }
};
e(_Q, "RL_c70c6fbde641bc249181616cec2cfcdf");
var VQ = _Q;
var MQ = class MQ extends t.GenericRecordList {
    static getItemType() {
        return Rc
    }
};
e(MQ, "RL_c735140696f242417f2b717aa3cc5ab8");
var NQ = MQ;
var XQ = class XQ extends t.GenericRecordList {
    static getItemType() {
        return Ga
    }
};
e(XQ, "RL_c75e7bfd399429df0d1491c78629cc1e");
var zQ = XQ;
var HQ = class HQ extends t.GenericRecordList {
    static getItemType() {
        return zo
    }
};
e(HQ, "RL_c79778980015bfefb44dd278a594556b");
var WQ = HQ;
var YQ = class YQ extends t.GenericRecordList {
    static getItemType() {
        return pt
    }
};
e(YQ, "RL_c7d3dc9c14ef57dbf8aab2a2748a6117");
var JQ = YQ;
var KQ = class KQ extends t.GenericRecordList {
    static getItemType() {
        return On
    }
};
e(KQ, "RL_c7f26a72e57a4dddb6b0448d22dc5863");
var ZQ = KQ;
var $Q = class $Q extends t.GenericRecordList {
    static getItemType() {
        return So
    }
};
e($Q, "RL_c84d9a2d98a954eef511696b270c4545");
var QQ = $Q;
var e$ = class e$ extends t.GenericRecordList {
    static getItemType() {
        return Zm
    }
};
e(e$, "RL_c8e1741a326095801c28c5e51506faf0");
var t$ = e$;
var a$ = class a$ extends t.GenericRecordList {
    static getItemType() {
        return ap
    }
};
e(a$, "RL_c8ec1067f658d445cb4bb406a536d6e4");
var r$ = a$;
var i$ = class i$ extends t.GenericRecordList {
    static getItemType() {
        return eo
    }
};
e(i$, "RL_c9802391ccf1fcf76850377db0a5a2bd");
var s$ = i$;
var n$ = class n$ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsAllPlans", "cFDsAllPlansAttr", "CFDsAllPlans", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new v)
        }, !0, v), this.attr("CommissionType", "commissionTypeAttr", "CommissionType", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new E)
        }, !0, E)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "c9b451e3-3f0b-1f65-b4c8-4c971f12b1d0"
    }
};
e(n$, "RC_c9b451e33f0b1f65b4c84c971f12b1d0");
var KT = n$;
KT.init();
var th = class th extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize2", "authorize2Attr", "Authorize2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Sr)
        }, !0, Sr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new th(new th.RecordClass({
            authorize2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ca29307c-32c3-b6ee-4bca-4fca61db0923"
    }
};
e(th, "RC_ca29307c32c3b6ee4bca4fca61db0923");
var QT = th;
QT.init();
var c$ = class c$ extends t.GenericRecordList {
    static getItemType() {
        return PT
    }
};
e(c$, "RL_ca4befaa7d5de5d9bbcd4bf59c44b15c");
var o$ = c$;
var p$ = class p$ extends t.GenericRecordList {
    static getItemType() {
        return me
    }
};
e(p$, "RL_cad88a69fdf904df26f5066dd5cffb79");
var u$ = p$;
var m$ = class m$ extends t.GenericRecordList {
    static getItemType() {
        return B
    }
};
e(m$, "RL_cb751ddebeb9909df76ed8b8d1c8c369");
var l$ = m$;
var T$ = class T$ extends t.GenericRecordList {
    static getItemType() {
        return cf
    }
};
e(T$, "RL_cb7a85895e8c7191ce89431d283aecb7");
var f$ = T$;
var y$ = class y$ extends t.GenericRecordList {
    static getItemType() {
        return Ti
    }
};
e(y$, "RL_cb7f36c20c1100a526f054e4bd5ee331");
var D$ = y$;
var eh = class eh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("AffiliateLinks", "affiliateLinksAttr", "AffiliateLinks", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ua)
        }, !0, Ua)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new eh(new eh.RecordClass({
            affiliateLinksAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f096f7fd-8261-c816-438b-be7b5d4454b4"
    }
};
e(eh, "RC_f096f7fd8261c816438bbe7b5d4454b4");
var $T = eh;
$T.init();
var S$ = class S$ extends t.GenericRecordList {
    static getItemType() {
        return $T
    }
};
e(S$, "RL_cb813e01813ea34c8f66a8be7f90e6b0");
var d$ = S$;
var g$ = class g$ extends t.GenericRecordList {
    static getItemType() {
        return $i
    }
};
e(g$, "RL_cbaa449aac56180c04dc0dfa93e6b55e");
var O$ = g$;
var b$ = class b$ extends t.GenericRecordList {
    static getItemType() {
        return ws
    }
};
e(b$, "RL_cbac71e3b2383e8c0c384139f6b34f78");
var x$ = b$;
var I$ = class I$ extends t.GenericRecordList {
    static getItemType() {
        return ns
    }
};
e(I$, "RL_cbd45ffb64bc9c47450a3b6cf63434c5");
var R$ = I$;
var A$ = class A$ extends t.GenericRecordList {
    static getItemType() {
        return aa
    }
};
e(A$, "RL_cbd5c5f6e399c35495bbdeff492e56a3");
var h$ = A$;
var w$ = class w$ extends t.GenericRecordList {
    static getItemType() {
        return QT
    }
};
e(w$, "RL_cd7aae7110549eb2398675e1d9a7e14e");
var G$ = w$;
var P$ = class P$ extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Name", "nameAttr", "Name", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0), this.attr("Value", "valueAttr", "Value", !1, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "cddf704a-a3f0-60f9-6b1a-7542e1972a40"
    }
};
e(P$, "RC_cddf704aa3f060f96b1a7542e1972a40");
var tD = P$;
tD.init();
var E$ = class E$ extends t.GenericRecordList {
    static getItemType() {
        return iT
    }
};
e(E$, "RL_ce88911b84fc13ed7c43e363bec447f0");
var B$ = E$;
var L$ = class L$ extends t.GenericRecordList {
    static getItemType() {
        return R
    }
};
e(L$, "RL_cead5d196d772d870bc3f7d4fa164d8c");
var C$ = L$;
var q$ = class q$ extends t.GenericRecordList {
    static getItemType() {
        return le
    }
};
e(q$, "RL_ceeb5cf67227d230352f98416e3a5708");
var v$ = q$;
var k$ = class k$ extends t.GenericRecordList {
    static getItemType() {
        return Ee
    }
};
e(k$, "RL_cf17f57129ad6a4c2ec02e2afc77ae2b");
var j$ = k$;
var F$ = class F$ extends t.GenericRecordList {
    static getItemType() {
        return an
    }
};
e(F$, "RL_cf3e55591f725fd3bc6b2d0d3ee5730f");
var U$ = F$;
var _$ = class _$ extends t.GenericRecordList {
    static getItemType() {
        return zT
    }
};
e(_$, "RL_cf635d00d7a777270f51af0d1e0af9bc");
var V$ = _$;
var M$ = class M$ extends t.GenericRecordList {
    static getItemType() {
        return Wa
    }
};
e(M$, "RL_cfd1f00b484b4b7cbc1b631c1247cf2f");
var N$ = M$;
var X$ = class X$ extends t.GenericRecordList {
    static getItemType() {
        return Lt
    }
};
e(X$, "RL_d020274c0ef0b03336f86133d39e8e5d");
var z$ = X$;
var H$ = class H$ extends t.GenericRecordList {
    static getItemType() {
        return U
    }
};
e(H$, "RL_d072422d8e5664dbfa9272c5eb4cf5e8");
var W$ = H$;
var Y$ = class Y$ extends t.GenericRecordList {
    static getItemType() {
        return FT
    }
};
e(Y$, "RL_d085e8d032d69f30c1ff1fcbd1a431a3");
var J$ = Y$;
var rh = class rh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Currencies", "currenciesAttr", "Currencies", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new za)
        }, !0, za)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new rh(new rh.RecordClass({
            currenciesAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d156596b-f0ac-ca79-4568-b1ed43180f6e"
    }
};
e(rh, "RC_d156596bf0acca794568b1ed43180f6e");
var eD = rh;
eD.init();
var ah = class ah extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Speed", "speedAttr", "Speed", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ah(new ah.RecordClass({
            speedAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(ah, "EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord");
var io = ah;
io.init();
var sh = class sh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Speed", "speedAttr", "Speed", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new io)
        }, !0, io)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new sh(new sh.RecordClass({
            speedAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d15ba8cc-56cc-5ee5-8bd8-acaffd974239"
    }
};
e(sh, "RC_d15ba8cc56cc5ee58bd8acaffd974239");
var rD = sh;
rD.init();
var ih = class ih extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PPaymentMethodsResponse", "p2PPaymentMethodsResponseAttr", "P2PPaymentMethodsResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Yn)
        }, !0, Yn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ih(new ih.RecordClass({
            p2PPaymentMethodsResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fbe26d11-e9d7-e815-ab8f-8d312685ebe8"
    }
};
e(ih, "RC_fbe26d11e9d7e815ab8f8d312685ebe8");
var aD = ih;
aD.init();
var K$ = class K$ extends t.GenericRecordList {
    static getItemType() {
        return aD
    }
};
e(K$, "RL_d169ac2c2610bcd30201dd6066aabbc8");
var Z$ = K$;
var $$ = class $$ extends t.GenericRecordList {
    static getItemType() {
        return ya
    }
};
e($$, "RL_d16bda7af8a28dea619439b98c92af4f");
var Q$ = $$;
var e8 = class e8 extends t.GenericRecordList {
    static getItemType() {
        return OT
    }
};
e(e8, "RL_d170df24c2e1d399274b953b3ea7ee8d");
var t8 = e8;
var a8 = class a8 extends t.GenericRecordList {
    static getItemType() {
        return Ke
    }
};
e(a8, "RL_d1730959bead5ace9709263653c5c805");
var r8 = a8;
var i8 = class i8 extends t.GenericRecordList {
    static getItemType() {
        return _s
    }
};
e(i8, "RL_d1ce957a73e235b2c1f9383b50c6c777");
var s8 = i8;
var nh = class nh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", !0, !1, t.DataTypes.Text, function() {
            return ""
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new nh(new nh.RecordClass({
            sideMenuBehaviorAttr: t.ImmutableBase.getData(a)
        }))
    }
};
e(nh, "EN_c1e622743b79c1510fd62a0adf89686bEntityRecord");
var no = nh;
no.init();
var o8 = class o8 extends t.GenericRecordList {
    static getItemType() {
        return no
    }
};
e(o8, "RL_d1ec4133b9c9274ea17a14b497f44d93");
var n8 = o8;
var u8 = class u8 extends t.GenericRecordList {
    static getItemType() {
        return _n
    }
};
e(u8, "RL_d24415aae8bc2d864868eb4166823bd0");
var c8 = u8;
var l8 = class l8 extends t.GenericRecordList {
    static getItemType() {
        return $a
    }
};
e(l8, "RL_d2789538425b9b75ea10631ae0abd383");
var p8 = l8;
var f8 = class f8 extends t.GenericRecordList {
    static getItemType() {
        return Qn
    }
};
e(f8, "RL_d28765f0509bd8278495bc8b55d5a50e");
var m8 = f8;
var D8 = class D8 extends t.GenericRecordList {
    static getItemType() {
        return Lf
    }
};
e(D8, "RL_d29c29f210f2cded5fc40a6b552dfbd2");
var T8 = D8;
var d8 = class d8 extends t.GenericRecordList {
    static getItemType() {
        return zi
    }
};
e(d8, "RL_d2c71de812e44763974172e04508cef5");
var y8 = d8;
var S8 = class S8 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CFDsAllPlans", "cFDsAllPlansAttr", "CFDsAllPlans", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new v)
        }, !0, v), this.attr("CFDsPlansTableData", "cFDsPlansTableDataAttr", "CFDsPlansTableData", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ot)
        }, !0, Ot)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d2c76d3d-0624-5dba-c20c-f9f0e0b899cf"
    }
};
e(S8, "RC_d2c76d3d06245dbac20cf9f0e0b899cf");
var sD = S8;
sD.init();
var g8 = class g8 extends t.GenericRecordList {
    static getItemType() {
        return Si
    }
};
e(g8, "RL_d2d0068f3a07cb94ca20f9308415ffee");
var O8 = g8;
var oh = class oh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Max_requestes_general", "max_requestes_generalAttr", "Max_requestes_general", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new G)
        }, !0, G)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new oh(new oh.RecordClass({
            max_requestes_generalAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "eebe57a3-100c-293a-3ad4-01503386e7ad"
    }
};
e(oh, "RC_eebe57a3100c293a3ad401503386e7ad");
var iD = oh;
iD.init();
var b8 = class b8 extends t.GenericRecordList {
    static getItemType() {
        return iD
    }
};
e(b8, "RL_d2ee604faf53e19485d4e30297dd6443");
var x8 = b8;
var I8 = class I8 extends t.GenericRecordList {
    static getItemType() {
        return KT
    }
};
e(I8, "RL_d33f26f168193562dc76ee2abb116b7d");
var R8 = I8;
var ch = class ch extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PAdvertInfoResponse", "p2PAdvertInfoResponseAttr", "P2PAdvertInfoResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Zs)
        }, !0, Zs)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ch(new ch.RecordClass({
            p2PAdvertInfoResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d33f8c00-9e3e-781c-ecef-ae4af6e8d57d"
    }
};
e(ch, "RC_d33f8c009e3e781cecefae4af6e8d57d");
var nD = ch;
nD.init();
var A8 = class A8 extends t.GenericRecordList {
    static getItemType() {
        return ae
    }
};
e(A8, "RL_d3a7744852f4b782bcbb3dc9b2b5a3a2");
var h8 = A8;
var uh = class uh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Risk_level", "risk_levelAttr", "Risk_level2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Lt)
        }, !0, Lt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new uh(new uh.RecordClass({
            risk_levelAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "da31320f-8816-6d86-4fc3-96c0fddbecc9"
    }
};
e(uh, "RC_da31320f88166d864fc396c0fddbecc9");
var oD = uh;
oD.init();
var w8 = class w8 extends t.GenericRecordList {
    static getItemType() {
        return oD
    }
};
e(w8, "RL_d40367d2d21dcbcbaa0f7166365925a3");
var G8 = w8;
var B8 = class B8 extends t.GenericRecordList {
    static getItemType() {
        return _a
    }
};
e(B8, "RL_d47243dd6d191231af442d5a386f79f9");
var P8 = B8;
var C8 = class C8 extends t.GenericRecordList {
    static getItemType() {
        return jm
    }
};
e(C8, "RL_d4e233856a843249137106dbf3a700c8");
var E8 = C8;
var ph = class ph extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Forex", "forexAttr", "Forex", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new be)
        }, !0, be)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new ph(new ph.RecordClass({
            forexAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "d509bf89-cda0-9ba7-8055-eb96d496078b"
    }
};
e(ph, "RC_d509bf89cda09ba78055eb96d496078b");
var cD = ph;
cD.init();
var v8 = class v8 extends t.GenericRecordList {
    static getItemType() {
        return VT
    }
};
e(v8, "RL_d5159c26a8f588daf2427ff93eedcebd");
var L8 = v8;
var j8 = class j8 extends t.GenericRecordList {
    static getItemType() {
        return dt
    }
};
e(j8, "RL_d64d106e7fd9ddd4ee4875985d8acecd");
var q8 = j8;
var U8 = class U8 extends t.GenericRecordList {
    static getItemType() {
        return Gn
    }
};
e(U8, "RL_d656c399e70b60822640f73b89cbc71f");
var k8 = U8;
var V8 = class V8 extends t.GenericRecordList {
    static getItemType() {
        return Un
    }
};
e(V8, "RL_d689c0ceaaa6201af233ffc179beef2f");
var F8 = V8;
var lh = class lh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostLogoutResponse", "postLogoutResponseAttr", "PostLogoutResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ds)
        }, !0, ds)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new lh(new lh.RecordClass({
            postLogoutResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0c73e6d-bd84-2809-86cd-2f30c5ab1891"
    }
};
e(lh, "RC_f0c73e6dbd84280986cd2f30c5ab1891");
var uD = lh;
uD.init();
var N8 = class N8 extends t.GenericRecordList {
    static getItemType() {
        return uD
    }
};
e(N8, "RL_d6c2b0b2d82cc83f0e12ff8864bc303a");
var _8 = N8;
var z8 = class z8 extends t.GenericRecordList {
    static getItemType() {
        return T
    }
};
e(z8, "RL_d7120c737b749736ea0a72e73d61514e");
var M8 = z8;
var W8 = class W8 extends t.GenericRecordList {
    static getItemType() {
        return hT
    }
};
e(W8, "RL_d7b37aab928d287662d2a0dadc210fec");
var X8 = W8;
var J8 = class J8 extends t.GenericRecordList {
    static getItemType() {
        return Uc
    }
};
e(J8, "RL_d7c25a5fb9a8943a745839a83027088a");
var H8 = J8;
var Z8 = class Z8 extends t.GenericRecordList {
    static getItemType() {
        return Sn
    }
};
e(Z8, "RL_d7cde0d346486a854aee07525f121a90");
var Y8 = Z8;
var Q8 = class Q8 extends t.GenericRecordList {
    static getItemType() {
        return vT
    }
};
e(Q8, "RL_d879fd0f70d45798161ae7b5ea69146c");
var K8 = Q8;
var t6 = class t6 extends t.GenericRecordList {
    static getItemType() {
        return Kl
    }
};
e(t6, "RL_d8959d4c81c965e073d03471f545ed85");
var $8 = t6;
var r6 = class r6 extends t.GenericRecordList {
    static getItemType() {
        return sm
    }
};
e(r6, "RL_d8f009bde8fe909fe2505fd89431fe09");
var e6 = r6;
var s6 = class s6 extends t.GenericRecordList {
    static getItemType() {
        return Ms
    }
};
e(s6, "RL_d9225646df1b3ea490560d0f68cd306f");
var a6 = s6;
var mh = class mh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("EmploymentDetailsValidationError", "employmentDetailsValidationErrorAttr", "EmploymentDetailsValidationError", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ea)
        }, !0, Ea)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new mh(new mh.RecordClass({
            employmentDetailsValidationErrorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "df5b929f-85f2-858f-3228-44c52e01694c"
    }
};
e(mh, "RC_df5b929f85f2858f322844c52e01694c");
var pD = mh;
pD.init();
var n6 = class n6 extends t.GenericRecordList {
    static getItemType() {
        return pD
    }
};
e(n6, "RL_d94979c28f9581c2a8700db37dc646a0");
var i6 = n6;
var fh = class fh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("P2PCountryListResponse", "p2PCountryListResponseAttr", "P2PCountryListResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Xn)
        }, !0, Xn)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new fh(new fh.RecordClass({
            p2PCountryListResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "eb80e7f8-6333-4c54-8fcb-a763018eae6f"
    }
};
e(fh, "RC_eb80e7f863334c548fcba763018eae6f");
var lD = fh;
lD.init();
var c6 = class c6 extends t.GenericRecordList {
    static getItemType() {
        return lD
    }
};
e(c6, "RL_d999f9e69b527a00490f20d6bcd32988");
var o6 = c6;
var p6 = class p6 extends t.GenericRecordList {
    static getItemType() {
        return Ja
    }
};
e(p6, "RL_d9adde0b03f648d52095292753e14389");
var u6 = p6;
var m6 = class m6 extends t.GenericRecordList {
    static getItemType() {
        return V
    }
};
e(m6, "RL_da6c5178f53e986289bf2ed71791858d");
var l6 = m6;
var T6 = class T6 extends t.GenericRecordList {
    static getItemType() {
        return Hs
    }
};
e(T6, "RL_da97e9972bbc2e3a4820944c29604e6f");
var f6 = T6;
var y6 = class y6 extends t.GenericRecordList {
    static getItemType() {
        return Sm
    }
};
e(y6, "RL_da9f97f6a3c8b98228b608b130222591");
var D6 = y6;
var d6 = class d6 extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Desktop", "desktopAttr", "Desktop", !1, !1, t.DataTypes.Integer, function() {
            return 1
        }, !0), this.attr("Tablet", "tabletAttr", "Tablet", !1, !1, t.DataTypes.Integer, function() {
            return 1
        }, !0), this.attr("Phone", "phoneAttr", "Phone", !1, !1, t.DataTypes.Integer, function() {
            return 1
        }, !0)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
};
e(d6, "ST_660adb7a9db48bff1b12c6e03515b415Structure");
var oo = d6;
oo.init();
var Th = class Th extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new oo)
        }, !0, oo)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Th(new Th.RecordClass({
            carouselItemsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dac62773-434c-f92b-5236-8fd089bbfc2a"
    }
};
e(Th, "RC_dac62773434cf92b52368fd089bbfc2a");
var mD = Th;
mD.init();
var O6 = class O6 extends t.GenericRecordList {
    static getItemType() {
        return ff
    }
};
e(O6, "RL_db8c7152c23e79d6b562599761b9fd23");
var S6 = O6;
var x6 = class x6 extends t.GenericRecordList {
    static getItemType() {
        return u
    }
};
e(x6, "RL_dba1429f774712c36d3ea0b48ab6b63d");
var g6 = x6;
var R6 = class R6 extends t.GenericRecordList {
    static getItemType() {
        return as
    }
};
e(R6, "RL_dc64b7a82e1258fe9af8a4df56d80bc6");
var b6 = R6;
var h6 = class h6 extends t.GenericRecordList {
    static getItemType() {
        return E
    }
};
e(h6, "RL_dc6b278a4e91348f12f79797e6ed546e");
var I6 = h6;
var G6 = class G6 extends t.GenericRecordList {
    static getItemType() {
        return Ys
    }
};
e(G6, "RL_dce031541ffd7ddb60ff42662d8a6be6");
var A6 = G6;
var P6 = class P6 extends t.GenericRecordList {
    static getItemType() {
        return fT
    }
};
e(P6, "RL_dd08ea713bebe4875033a5f91c469c77");
var w6 = P6;
var Dh = class Dh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("White_label_link", "white_label_linkAttr", "White_label_link", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ur)
        }, !0, ur)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Dh(new Dh.RecordClass({
            white_label_linkAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dd79bf27-114c-bc81-0592-c451d8bd2280"
    }
};
e(Dh, "RC_dd79bf27114cbc810592c451d8bd2280");
var fD = Dh;
fD.init();
var E6 = class E6 extends t.GenericRecordList {
    static getItemType() {
        return HT
    }
};
e(E6, "RL_dd9462378f9bdfd544e8c5704f9c3cdc");
var B6 = E6;
var L6 = class L6 extends t.GenericRecordList {
    static getItemType() {
        return Qp
    }
};
e(L6, "RL_de09afc3e002b5b30d13a4761423fa1e");
var C6 = L6;
var yh = class yh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Transfer_between_account", "transfer_between_accountAttr", "Transfer_between_account", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new w)
        }, !0, w)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new yh(new yh.RecordClass({
            transfer_between_accountAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f2817038-16a6-0eab-09e9-22a615ce0fa1"
    }
};
e(yh, "RC_f281703816a60eab09e922a615ce0fa1");
var TD = yh;
TD.init();
var q6 = class q6 extends t.GenericRecordList {
    static getItemType() {
        return TD
    }
};
e(q6, "RL_deb2cdc1dcbdc9c277346305677d36aa");
var v6 = q6;
var k6 = class k6 extends t.GenericRecordList {
    static getItemType() {
        return Sr
    }
};
e(k6, "RL_df2c3a1ff9c9b2892bfd0324597f5d4e");
var j6 = k6;
var F6 = class F6 extends t.GenericRecordList {
    static getItemType() {
        return $m
    }
};
e(F6, "RL_df3a12aa8bf53bae5ba1e12561771888");
var U6 = F6;
var _6 = class _6 extends t.GenericRecordList {
    static getItemType() {
        return Nc
    }
};
e(_6, "RL_df544357baa556920af5c4547dac3251");
var V6 = _6;
var M6 = class M6 extends t.GenericRecordList {
    static getItemType() {
        return x
    }
};
e(M6, "RL_dfba22f71b53ae700474aaf2483be84a");
var N6 = M6;
var X6 = class X6 extends t.GenericRecordList {
    static getItemType() {
        return va
    }
};
e(X6, "RL_dfd9f5e674664aea49c31b134a661eb5");
var z6 = X6;
var H6 = class H6 extends t.GenericRecordList {
    static getItemType() {
        return _
    }
};
e(H6, "RL_dfdebdca8e822b537628659338ad0660");
var W6 = H6;
var dh = class dh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("PostAuthorizeResponse", "postAuthorizeResponseAttr", "PostAuthorizeResponse2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ns)
        }, !0, ns)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new dh(new dh.RecordClass({
            postAuthorizeResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "dfe43d1a-19f2-f910-9388-05ce519a6be0"
    }
};
e(dh, "RC_dfe43d1a19f2f910938805ce519a6be0");
var DD = dh;
DD.init();
var Y6 = class Y6 extends t.GenericRecordList {
    static getItemType() {
        return tD
    }
};
e(Y6, "RL_e04e4766a07df2f747be6ea6a7659074");
var J6 = Y6;
var K6 = class K6 extends t.GenericRecordList {
    static getItemType() {
        return Zi
    }
};
e(K6, "RL_e0d14ad0ade0a943d9ecc9ebb8efce77");
var Z6 = K6;
var Sh = class Sh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Document_type", "document_typeAttr", "Document_type", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ht)
        }, !0, ht)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Sh(new Sh.RecordClass({
            document_typeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e0e41cb9-4b03-3378-d915-3e95b9660ef9"
    }
};
e(Sh, "RC_e0e41cb94b033378d9153e95b9660ef9");
var yD = Sh;
yD.init();
var $6 = class $6 extends t.GenericRecordList {
    static getItemType() {
        return ve
    }
};
e($6, "RL_e1278fe9427d99d4150ff61ea3f65e79");
var Q6 = $6;
var e7 = class e7 extends t.GenericRecordList {
    static getItemType() {
        return be
    }
};
e(e7, "RL_e14755a881df87b3e885c798489a1f9a");
var t7 = e7;
var a7 = class a7 extends t.GenericRecordList {
    static getItemType() {
        return Et
    }
};
e(a7, "RL_e17c98c9ebad9849b38663a52005be50");
var r7 = a7;
var i7 = class i7 extends t.GenericRecordList {
    static getItemType() {
        return ki
    }
};
e(i7, "RL_e262f34e8ebc580be4a46070104de21e");
var s7 = i7;
var o7 = class o7 extends t.GenericRecordList {
    static getItemType() {
        return sn
    }
};
e(o7, "RL_e27fd9e7224bf0c7e999a01ff4028f6a");
var n7 = o7;
var u7 = class u7 extends t.GenericRecordList {
    static getItemType() {
        return oa
    }
};
e(u7, "RL_e2a0ef2b12ed2393efff5e28a812a1b7");
var c7 = u7;
var l7 = class l7 extends t.GenericRecordList {
    static getItemType() {
        return ta
    }
};
e(l7, "RL_e2f9a8103c154c4bce9a99666b2dd109");
var p7 = l7;
var f7 = class f7 extends t.GenericRecordList {
    static getItemType() {
        return G
    }
};
e(f7, "RL_e3233c0633e57d854cfb9e5e59427cd2");
var m7 = f7;
var Oh = class Oh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new no)
        }, !0, no)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Oh(new Oh.RecordClass({
            sideMenuBehaviorAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "e3607d6b-9254-5e57-93fb-eb99fc16b7e7"
    }
};
e(Oh, "RC_e3607d6b92545e5793fbeb99fc16b7e7");
var dD = Oh;
dD.init();
var D7 = class D7 extends t.GenericRecordList {
    static getItemType() {
        return Km
    }
};
e(D7, "RL_e377a277aec73abf25e2c35110f340eb");
var T7 = D7;
var d7 = class d7 extends t.GenericRecordList {
    static getItemType() {
        return lf
    }
};
e(d7, "RL_e37cdb444cc02303f6282ba8c5645353");
var y7 = d7;
var O7 = class O7 extends t.GenericRecordList {
    static getItemType() {
        return ST
    }
};
e(O7, "RL_e40d2b9c559a333983e00711676426d8");
var S7 = O7;
var x7 = class x7 extends t.GenericRecordList {
    static getItemType() {
        return mD
    }
};
e(x7, "RL_e42632965fbacac756c3d935f97df7a8");
var g7 = x7;
var R7 = class R7 extends t.GenericRecordList {
    static getItemType() {
        return np
    }
};
e(R7, "RL_e42c760f113562d06aa40fd3c0801719");
var b7 = R7;
var h7 = class h7 extends t.GenericRecordList {
    static getItemType() {
        return O
    }
};
e(h7, "RL_e4cc4242bd1a5b513b2d0e5945f5ee99");
var I7 = h7;
var G7 = class G7 extends t.GenericRecordList {
    static getItemType() {
        return Xf
    }
};
e(G7, "RL_e53ad3844d662ab92dd8c87975a2786f");
var A7 = G7;
var P7 = class P7 extends t.GenericRecordList {
    static getItemType() {
        return Zr
    }
};
e(P7, "RL_e54265daa0fee1429a5ffe9458d7e5df");
var w7 = P7;
var E7 = class E7 extends t.GenericRecordList {
    static getItemType() {
        return ro
    }
};
e(E7, "RL_e57523dcca7e6d3766c4721a0ef109ee");
var B7 = E7;
var L7 = class L7 extends t.GenericRecordList {
    static getItemType() {
        return Um
    }
};
e(L7, "RL_e5d4eff1d9ba5ba2377f189321ef5ca3");
var C7 = L7;
var q7 = class q7 extends t.GenericRecordList {
    static getItemType() {
        return aT
    }
};
e(q7, "RL_e689b1d5e863d2210639c8b8940a0d2e");
var v7 = q7;
var k7 = class k7 extends t.GenericRecordList {
    static getItemType() {
        return dl
    }
};
e(k7, "RL_e6be3728922963524c3d5e5b7daf8e9b");
var j7 = k7;
var F7 = class F7 extends t.GenericRecordList {
    static getItemType() {
        return it
    }
};
e(F7, "RL_e6ca5ece28432165687b89d202323524");
var U7 = F7;
var _7 = class _7 extends t.GenericRecordList {
    static getItemType() {
        return ul
    }
};
e(_7, "RL_e6e5069f4a35d175fdfe79a6d3342703");
var V7 = _7;
var M7 = class M7 extends t.GenericRecordList {
    static getItemType() {
        return dT
    }
};
e(M7, "RL_e6eb0a62197c37db299beb6105b3c02d");
var N7 = M7;
var X7 = class X7 extends t.GenericRecordList {
    static getItemType() {
        return kt
    }
};
e(X7, "RL_e76c00ddf7abece102174559911adf6e");
var z7 = X7;
var H7 = class H7 extends t.GenericRecordList {
    static getItemType() {
        return oi
    }
};
e(H7, "RL_e76ce0f7deb6f6a812e61bd92e29120f");
var W7 = H7;
var Y7 = class Y7 extends t.GenericRecordList {
    static getItemType() {
        return na
    }
};
e(Y7, "RL_e7f01d39aa334c6bb0dd24764e988699");
var J7 = Y7;
var K7 = class K7 extends t.GenericRecordList {
    static getItemType() {
        return Ni
    }
};
e(K7, "RL_e80a0f2e1d0d40303b1a689b4ad27a7b");
var Z7 = K7;
var $7 = class $7 extends t.GenericRecordList {
    static getItemType() {
        return io
    }
};
e($7, "RL_e8445d61f812c92de860d050e73a5e29");
var Q7 = $7;
var e3 = class e3 extends t.GenericRecordList {
    static getItemType() {
        return Tu
    }
};
e(e3, "RL_e84e513163ad816621561ddde34cafa3");
var t3 = e3;
var gh = class gh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("GetTradingPlatformStatusResponse", "getTradingPlatformStatusResponseAttr", "GetTradingPlatformStatusResponse", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new ao)
        }, !0, ao)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new gh(new gh.RecordClass({
            getTradingPlatformStatusResponseAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ee239f88-c5d7-794f-e9f6-9be69a94411a"
    }
};
e(gh, "RC_ee239f88c5d7794fe9f69be69a94411a");
var SD = gh;
SD.init();
var a3 = class a3 extends t.GenericRecordList {
    static getItemType() {
        return SD
    }
};
e(a3, "RL_e87e0e80051f6c55e06e3dcb63f790d9");
var r3 = a3;
var i3 = class i3 extends t.GenericRecordList {
    static getItemType() {
        return Om
    }
};
e(i3, "RL_e898ea48ed79ce14df0192528a65d848");
var s3 = i3;
var o3 = class o3 extends t.GenericRecordList {
    static getItemType() {
        return qT
    }
};
e(o3, "RL_e8a571e7f07b0ee6ff433d5dc34e7552");
var n3 = o3;
var u3 = class u3 extends t.GenericRecordList {
    static getItemType() {
        return er
    }
};
e(u3, "RL_e8c7c8d9b0c15a0f31835e82c0493c59");
var c3 = u3;
var l3 = class l3 extends t.GenericRecordList {
    static getItemType() {
        return kT
    }
};
e(l3, "RL_e91f1f1926ce73207f685175530d77f4");
var p3 = l3;
var f3 = class f3 extends t.GenericRecordList {
    static getItemType() {
        return Ei
    }
};
e(f3, "RL_e9493e2064d4adee404db0ec2ed9ea58");
var m3 = f3;
var D3 = class D3 extends t.GenericRecordList {
    static getItemType() {
        return eD
    }
};
e(D3, "RL_e94fe10aad1bb3316bae03b78b2b2cba");
var T3 = D3;
var d3 = class d3 extends t.GenericRecordList {
    static getItemType() {
        return xc
    }
};
e(d3, "RL_e959ca04800aa63e19913daa8cd9fe06");
var y3 = d3;
var O3 = class O3 extends t.GenericRecordList {
    static getItemType() {
        return dm
    }
};
e(O3, "RL_e9715121ffbe4e5204c4a1c3804c7361");
var S3 = O3;
var x3 = class x3 extends t.GenericRecordList {
    static getItemType() {
        return Ss
    }
};
e(x3, "RL_e97ff3c0bfb989f1940aae6c80a5b4e2");
var g3 = x3;
var R3 = class R3 extends t.GenericRecordList {
    static getItemType() {
        return ue
    }
};
e(R3, "RL_e9b4b68e021e5613bf728dccd1cf9139");
var b3 = R3;
var h3 = class h3 extends t.GenericRecordList {
    static getItemType() {
        return so
    }
};
e(h3, "RL_e9b8e0faabc7236ff8432ae937c37582");
var I3 = h3;
var G3 = class G3 extends t.GenericRecordList {
    static getItemType() {
        return ii
    }
};
e(G3, "RL_ea01f38fd4ed134d9fe25df7dd6868c6");
var A3 = G3;
var P3 = class P3 extends t.GenericRecordList {
    static getItemType() {
        return cr
    }
};
e(P3, "RL_ea69c6358f758ea1e34787db7dc19db9");
var w3 = P3;
var E3 = class E3 extends t.GenericRecordList {
    static getItemType() {
        return Wp
    }
};
e(E3, "RL_ea6b4a7a90122a1598d490842491288c");
var B3 = E3;
var xh = class xh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("StatementRequest", "statementRequestAttr", "StatementRequest", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new dr)
        }, !0, dr)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new xh(new xh.RecordClass({
            statementRequestAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f9632cc2-4336-eb4b-b7e5-e5f64f7de5b5"
    }
};
e(xh, "RC_f9632cc24336eb4bb7e5e5f64f7de5b5");
var OD = xh;
OD.init();
var L3 = class L3 extends t.GenericRecordList {
    static getItemType() {
        return OD
    }
};
e(L3, "RL_ea81ff3a6f3a76c2ed12260f624c4969");
var C3 = L3;
var q3 = class q3 extends t.GenericRecordList {
    static getItemType() {
        return gc
    }
};
e(q3, "RL_eaefbf6dde0f7f83dd46a12f58dd150a");
var v3 = q3;
var k3 = class k3 extends t.GenericRecordList {
    static getItemType() {
        return Bm
    }
};
e(k3, "RL_eafe76043375465a898a3d00608f23b6");
var j3 = k3;
var F3 = class F3 extends t.GenericRecordList {
    static getItemType() {
        return nD
    }
};
e(F3, "RL_eba0c4cf72b2b3e62c746cfba3f154a7");
var U3 = F3;
var _3 = class _3 extends t.GenericRecordList {
    static getItemType() {
        return Cn
    }
};
e(_3, "RL_ebe915073624a927cad5ecba5b3b8f0d");
var V3 = _3;
var M3 = class M3 extends t.GenericRecordList {
    static getItemType() {
        return cn
    }
};
e(M3, "RL_ebfadc626673a2cb97eaa02a96c0f7b1");
var N3 = M3;
var X3 = class X3 extends t.GenericRecordList {
    static getItemType() {
        return uT
    }
};
e(X3, "RL_ec22c8a81ca6b85273257f4da311b491");
var z3 = X3;
var bh = class bh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Fee", "feeAttr", "Fee", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new rt)
        }, !0, rt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new bh(new bh.RecordClass({
            feeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "ecdf5049-54a2-dbb5-8bd0-279c57a31f42"
    }
};
e(bh, "RC_ecdf504954a2dbb58bd0279c57a31f42");
var gD = bh;
gD.init();
var H3 = class H3 extends t.GenericRecordList {
    static getItemType() {
        return fD
    }
};
e(H3, "RL_ece3ed6e115187092667bb2ed6368718");
var W3 = H3;
var Y3 = class Y3 extends t.GenericRecordList {
    static getItemType() {
        return nr
    }
};
e(Y3, "RL_ece7ed41a3f28d1c15291a0f58620332");
var J3 = Y3;
var K3 = class K3 extends t.GenericRecordList {
    static getItemType() {
        return lc
    }
};
e(K3, "RL_ed046b9a00e90447bae294a818054036");
var Z3 = K3;
var $3 = class $3 extends t.GenericRecordList {
    static getItemType() {
        return Ml
    }
};
e($3, "RL_ed077587a2a2ae91a6da402a7068b922");
var Q3 = $3;
var e4 = class e4 extends t.GenericRecordList {
    static getItemType() {
        return pa
    }
};
e(e4, "RL_ee2f8fa85755ad93e3bfb7018e04dc2e");
var t4 = e4;
var a4 = class a4 extends t.GenericRecordList {
    static getItemType() {
        return Tm
    }
};
e(a4, "RL_ee8cb1d24523ad1486df11df8e33b115");
var r4 = a4;
var i4 = class i4 extends t.GenericRecordList {
    static getItemType() {
        return Pa
    }
};
e(i4, "RL_eee8d6419da204b0d2b927678083cdc9");
var s4 = i4;
var o4 = class o4 extends t.GenericRecordList {
    static getItemType() {
        return Pi
    }
};
e(o4, "RL_ef15c0d597df53b7b8648a57b9e97d87");
var n4 = o4;
var u4 = class u4 extends t.GenericRecordList {
    static getItemType() {
        return vp
    }
};
e(u4, "RL_efa24a85b9574efa4fcc498bf948428b");
var c4 = u4;
var l4 = class l4 extends t.GenericRecordList {
    static getItemType() {
        return sD
    }
};
e(l4, "RL_f06dcc4aac1888d5c11e768ee5c77cb8");
var p4 = l4;
var f4 = class f4 extends t.GenericRecordList {
    static getItemType() {
        return mr
    }
};
e(f4, "RL_f078853eb4e1ea502520482773117b08");
var m4 = f4;
var D4 = class D4 extends t.GenericRecordList {
    static getItemType() {
        return Hl
    }
};
e(D4, "RL_f07d4ee6d8af2ad822d0947b26fdf6f3");
var T4 = D4;
var d4 = class d4 extends t.GenericRecordList {
    static getItemType() {
        return A
    }
};
e(d4, "RL_f09c659879e2269528f7b678199b971f");
var y4 = d4;
var Rh = class Rh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Documents_supported2", "documents_supported2Attr", "Documents_supported2", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new mt)
        }, !0, mt)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Rh(new Rh.RecordClass({
            documents_supported2Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f0a1ff7c-7320-7fb1-b2a1-936e7a7bb59b"
    }
};
e(Rh, "RC_f0a1ff7c73207fb1b2a1936e7a7bb59b");
var xD = Rh;
xD.init();
var Ih = class Ih extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("DocumentWithAdditionalDocuments", "documentWithAdditionalDocumentsAttr", "DocumentWithAdditionalDocuments", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ja)
        }, !0, Ja)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ih(new Ih.RecordClass({
            documentWithAdditionalDocumentsAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f17ac82c-4b5a-6103-ceb8-5b5c6ab07617"
    }
};
e(Ih, "RC_f17ac82c4b5a6103ceb85b5c6ab07617");
var bD = Ih;
bD.init();
var O4 = class O4 extends t.GenericRecordList {
    static getItemType() {
        return bD
    }
};
e(O4, "RL_f0ca8bad539b41965d8185812d857b45");
var S4 = O4;
var x4 = class x4 extends t.GenericRecordList {
    static getItemType() {
        return cT
    }
};
e(x4, "RL_f115a666c5540eef6697d9968af9fe8e");
var g4 = x4;
var R4 = class R4 extends t.GenericRecordList {
    static getItemType() {
        return xp
    }
};
e(R4, "RL_f1196bd579546c29194106cace86bf26");
var b4 = R4;
var hh = class hh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Echo_req12", "echo_req12Attr", "Echo_req15", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new $n)
        }, !0, $n)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new hh(new hh.RecordClass({
            echo_req12Attr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "fcf4341f-7efd-9506-f671-d9240030f6a0"
    }
};
e(hh, "RC_fcf4341f7efd9506f671d9240030f6a0");
var RD = hh;
RD.init();
var h4 = class h4 extends t.GenericRecordList {
    static getItemType() {
        return RD
    }
};
e(h4, "RL_f11b3648faafeee87f9baa4118b19aeb");
var I4 = h4;
var G4 = class G4 extends t.GenericRecordList {
    static getItemType() {
        return za
    }
};
e(G4, "RL_f11f2783845d109e2716e7158d803ceb");
var A4 = G4;
var P4 = class P4 extends t.GenericRecordList {
    static getItemType() {
        return Hm
    }
};
e(P4, "RL_f15b302598caef69c6cdd4e0690795f9");
var w4 = P4;
var E4 = class E4 extends t.GenericRecordList {
    static getItemType() {
        return dD
    }
};
e(E4, "RL_f1db162aca08aae7be68b7aedc571752");
var B4 = E4;
var L4 = class L4 extends t.GenericRecordList {
    static getItemType() {
        return Vn
    }
};
e(L4, "RLUserList");
var C4 = L4;
var q4 = class q4 extends t.GenericRecordList {
    static getItemType() {
        return Nr
    }
};
e(q4, "RL_f330ac8506077f4753a32e22b183d727");
var v4 = q4;
var k4 = class k4 extends t.GenericRecordList {
    static getItemType() {
        return ne
    }
};
e(k4, "RL_f3b2e91fdf0a2323522d24198d2308a9");
var j4 = k4;
var F4 = class F4 extends t.GenericRecordList {
    static getItemType() {
        return Bi
    }
};
e(F4, "RL_f3d5e0456ba6498c43c176da8eb24aac");
var U4 = F4;
var _4 = class _4 extends t.GenericRecordList {
    static getItemType() {
        return MT
    }
};
e(_4, "RL_f4468f4018bb6751324bb4305b7f473b");
var V4 = _4;
var M4 = class M4 extends t.GenericRecordList {
    static getItemType() {
        return kn
    }
};
e(M4, "RL_f4798657318ea5aa25857d23b6f4d362");
var N4 = M4;
var X4 = class X4 extends t.GenericRecordList {
    static getItemType() {
        return on
    }
};
e(X4, "RL_f50879d0da007880fcd304f3378f0a9e");
var z4 = X4;
var H4 = class H4 extends t.GenericRecordList {
    static getItemType() {
        return $f
    }
};
e(H4, "RL_f51d1b2f3972179080ca5027bc7c8f43");
var W4 = H4;
var Y4 = class Y4 extends t.GenericRecordList {
    static getItemType() {
        return rD
    }
};
e(Y4, "RL_f523c7921013f0781080fba3bca3beb7");
var J4 = Y4;
var K4 = class K4 extends t.GenericRecordList {
    static getItemType() {
        return zf
    }
};
e(K4, "RL_f565e985301ac9dd26dbfb84b70bf745");
var Z4 = K4;
var $4 = class $4 extends t.GenericRecordList {
    static getItemType() {
        return om
    }
};
e($4, "RL_f6031c1bbdf2129f541b15130dcc6f35");
var Q4 = $4;
var Ah = class Ah extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("UserLoginFailureReason", "userLoginFailureReasonAttr", "UserLoginFailureReason", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new Ye)
        }, !0, Ye)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Ah(new Ah.RecordClass({
            userLoginFailureReasonAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f61c868e-f053-db94-121c-e89ee15a14fe"
    }
};
e(Ah, "RC_f61c868ef053db94121ce89ee15a14fe");
var ID = Ah;
ID.init();
var e9 = class e9 extends t.GenericRecordList {
    static getItemType() {
        return xT
    }
};
e(e9, "RL_f63f2b83c2121dc349d7190f0745a6cf");
var t9 = e9;
var a9 = class a9 extends t.GenericRecordList {
    static getItemType() {
        return _T
    }
};
e(a9, "RL_f6b054c71a69c2b6a6022397c94198cd");
var r9 = a9;
var i9 = class i9 extends t.GenericRecordList {
    static getItemType() {
        return Qo
    }
};
e(i9, "RL_f6bc0d68163ce9d4c64ce162194bde5e");
var s9 = i9;
var o9 = class o9 extends t.GenericRecordList {
    static getItemType() {
        return b
    }
};
e(o9, "RL_f6efe1d0cb8a4c0cbddb4a5846a82246");
var n9 = o9;
var u9 = class u9 extends t.GenericRecordList {
    static getItemType() {
        return af
    }
};
e(u9, "RL_f7fbc672dcb160d0968ff55ca529958c");
var c9 = u9;
var l9 = class l9 extends t.GenericRecordList {
    static getItemType() {
        return Sl
    }
};
e(l9, "RL_f895ce68953fdb97b2f37d55699f4e66");
var p9 = l9;
var f9 = class f9 extends t.GenericRecordList {
    static getItemType() {
        return DD
    }
};
e(f9, "RL_f898b92d666caff04b8ec558b53a2f60");
var m9 = f9;
var D9 = class D9 extends t.GenericRecordList {
    static getItemType() {
        return xD
    }
};
e(D9, "RL_f89d4acf47b456a6c9abfbd419fc2347");
var T9 = D9;
var d9 = class d9 extends t.GenericRecordList {
    static getItemType() {
        return Qa
    }
};
e(d9, "RL_f8eb431cfa3719b526bb3d4eaa81a60a");
var y9 = d9;
var O9 = class O9 extends t.GenericRecordList {
    static getItemType() {
        return Fi
    }
};
e(O9, "RL_f905ae60fd778c280a86f4a55692cd45");
var S9 = O9;
var x9 = class x9 extends t.GenericRecordList {
    static getItemType() {
        return Kn
    }
};
e(x9, "RL_f90829e8248d7dd911b648b9522ef82a");
var g9 = x9;
var Gh = class Gh extends t.GenericRecord {
    static attributesToDeclare() {
        return [this.attr("Authorize", "authorizeAttr", "Authorize", !1, !1, t.DataTypes.Record, function() {
            return t.ImmutableBase.getData(new se)
        }, !0, se)].concat(t.GenericRecord.attributesToDeclare.call(this))
    }
    static fromStructure(a) {
        return new Gh(new Gh.RecordClass({
            authorizeAttr: t.ImmutableBase.getData(a)
        }))
    }
    static get _isAnonymousRecord() {
        return !0
    }
    static get UniqueId() {
        return "f92c9dfd-eaab-a0d0-6f3a-62c3b604cf58"
    }
};
e(Gh, "RC_f92c9dfdeaaba0d06f3a62c3b604cf58");
var hD = Gh;
hD.init();
var R9 = class R9 extends t.GenericRecordList {
    static getItemType() {
        return oo
    }
};
e(R9, "RL_f9624ab6e814fdb86dd00a59d573aa8e");
var b9 = R9;
var h9 = class h9 extends t.GenericRecordList {
    static getItemType() {
        return Zf
    }
};
e(h9, "RL_f97a03a16fd2375285dc3e9458533295");
var I9 = h9;
var G9 = class G9 extends t.GenericRecordList {
    static getItemType() {
        return yD
    }
};
e(G9, "RL_f9cd69a99a23afb6393c39463c23b25f");
var A9 = G9;
var P9 = class P9 extends t.GenericRecordList {
    static getItemType() {
        return ql
    }
};
e(P9, "RL_f9cefb8116fef94f410821fd0b26bf72");
var w9 = P9;
var E9 = class E9 extends t.GenericRecordList {
    static getItemType() {
        return rf
    }
};
e(E9, "RL_fa00e44a222cdab3fe910e0337033680");
var B9 = E9;
var L9 = class L9 extends t.GenericRecordList {
    static getItemType() {
        return Ue
    }
};
e(L9, "RL_fa0811c05f47ad6ac421ba30d6fabadb");
var C9 = L9;
var q9 = class q9 extends t.GenericRecordList {
    static getItemType() {
        return zn
    }
};
e(q9, "RL_fa146924f6833ee5375b7cfb2ad97f66");
var v9 = q9;
var k9 = class k9 extends t.GenericRecordList {
    static getItemType() {
        return qs
    }
};
e(k9, "RL_fa1cf4d41a97ccd464505d7fd43080f2");
var j9 = k9;
var F9 = class F9 extends t.GenericRecordList {
    static getItemType() {
        return f
    }
};
e(F9, "RL_fa51920e14b90042334b4ea4ba154ef7");
var U9 = F9;
var _9 = class _9 extends t.GenericRecordList {
    static getItemType() {
        return tp
    }
};
e(_9, "RL_fa7c4d35c7f50b6b2c7f74dc4f25509e");
var V9 = _9;
var M9 = class M9 extends t.GenericRecordList {
    static getItemType() {
        return YT
    }
};
e(M9, "RL_fa7dab07e8682b9feaee7f3f61a4e712");
var N9 = M9;
var X9 = class X9 extends t.GenericRecordList {
    static getItemType() {
        return gD
    }
};
e(X9, "RL_fae62bc1217c86c35fdcc204892ff65e");
var z9 = X9;
var H9 = class H9 extends t.GenericRecordList {
    static getItemType() {
        return ga
    }
};
e(H9, "RL_fae8ff1e4df3e9064717a557895b340b");
var W9 = H9;
var Y9 = class Y9 extends t.GenericRecordList {
    static getItemType() {
        return p
    }
};
e(Y9, "RL_fbb2fb86c40f3e5602392d2ab7885f06");
var J9 = Y9;
var K9 = class K9 extends t.GenericRecordList {
    static getItemType() {
        return ID
    }
};
e(K9, "RL_fbc9fc52e3cef45822e06efc69df5a4a");
var Z9 = K9;
var $9 = class $9 extends t.GenericRecordList {
    static getItemType() {
        return Xu
    }
};
e($9, "RLAttachmentList");
var Q9 = $9;
var ett = class ett extends t.GenericRecordList {
    static getItemType() {
        return pn
    }
};
e(ett, "RL_fbf59dcc654f2f0b7a14e0b382f6c6e6");
var ttt = ett;
var att = class att extends t.GenericRecordList {
    static getItemType() {
        return en
    }
};
e(att, "RL_fc49c3d0746a5ddcc900872f9c42917c");
var rtt = att;
var itt = class itt extends t.GenericRecordList {
    static getItemType() {
        return Dn
    }
};
e(itt, "RL_fc9a0541e530960ed38d7662d5b2141b");
var stt = itt;
var ott = class ott extends t.GenericRecordList {
    static getItemType() {
        return hD
    }
};
e(ott, "RL_fca3607c6d54863878369f2fe3a05b5b");
var ntt = ott;
var utt = class utt extends t.GenericRecordList {
    static getItemType() {
        return DT
    }
};
e(utt, "RL_fced28719a91c598d8625322837974e1");
var ctt = utt;
var ltt = class ltt extends t.GenericRecordList {
    static getItemType() {
        return Jo
    }
};
e(ltt, "RL_fd85f9fc632673fe3bd8b8365a60f022");
var ptt = ltt;
var ftt = class ftt extends t.GenericRecordList {
    static getItemType() {
        return Bl
    }
};
e(ftt, "RL_fdb8336efd8c04b2985357fda051ffd2");
var mtt = ftt;
var Dtt = class Dtt extends t.GenericRecordList {
    static getItemType() {
        return tt
    }
};
e(Dtt, "RL_fdf02fdc3151829b13c9dd15d339feae");
var Ttt = Dtt;
var dtt = class dtt extends t.GenericRecordList {
    static getItemType() {
        return ot
    }
};
e(dtt, "RL_fe1987a5826e59cd420a13ab0cb1ad66");
var ytt = dtt;
var Ott = class Ott extends t.GenericRecordList {
    static getItemType() {
        return rs
    }
};
e(Ott, "RL_fea339219699b0d78ea5a0c4450d0c70");
var Stt = Ott;
var xtt = class xtt extends t.GenericRecordList {
    static getItemType() {
        return ia
    }
};
e(xtt, "RL_fecb3d01dc7f0a1e775ad9d43b2b41ce");
var gtt = xtt;
var Rtt = class Rtt extends t.GenericRecordList {
    static getItemType() {
        return Xp
    }
};
e(Rtt, "RL_ff5ba20b0d42d4170d7b63779346dc5d");
var btt = Rtt;
var htt = class htt extends t.GenericRecordList {
    static getItemType() {
        return cD
    }
};
e(htt, "RL_fff77ec615be0e1e441a98afc10c6f02");
var Itt = htt;
export {
    Att as a, ie as b, ne as c, oe as d, ce as e, ue as f, $ as g, Vr as h, te as i, pa as j, H as k, pe as l, bt as m, le as n, J as o, Ir as p, me as q, fe as r, Te as s, S as t, V as u, hr as v, os as w, cs as x, Vt as y, us as z, ps as A, De as B, Ar as C, ye as D, u as E, ht as F, W as G, At as H, q as I, de as J, Se as K, Y as L, Oe as M, p as N, g as O, ge as P, y as Q, xe as R, be as S, Re as T, _ as U, Ie as V, Z as W, he as X, n as Y, ls as Z, ms as _, fs as $, N as aa, Ae as ba, Ge as ca, we as da, ma as ea, ct as fa, Nr as ga, Gr as ha, Pe as ia, Be as ja, Mr as ka, Ts as la, Ds as ma, Ee as na, ys as oa, gt as pa, xt as qa, Rt as ra, It as sa, l as ta, Gt as ua, wt as va, Pt as wa, Bt as xa, Et as ya, Ct as za, Lt as Aa, vt as Ba, qt as Ca, xr as Da, Qa as Ea, zr as Fa, Ce as Ga, ds as Ha, Ss as Ia, O as Ja, k as Ka, Os as La, gs as Ma, xs as Na, Xr as Oa, jt as Pa, Le as Qa, bs as Ra, Rs as Sa, Ta, M as Ua, br as Va, kt as Wa, Ut as Xa, P as Ya, Ft as Za, j as _a, R as $a, T as ab, _t as bb, Nt as cb, Mt as db, zt as eb, Xt as fb, Wt as gb, $a as hb, ve as ib, Is as jb, hs as kb, As as lb, je as mb, ke as nb, Ue as ob, Fe as pb, Wr as qb, po as rb, Hr as sb, Da as tb, Gs as ub, Me as vb, ws as wb, da as xb, Ps as yb, Sa as zb, Pr as Ab, Bs as Bb, Es as Cb, Cs as Db, ze as Eb, Ls as Fb, Xe as Gb, Jr as Hb, DC as Ib, js as Jb, We as Kb, He as Lb, Je as Mb, ks as Nb, Ye as Ob, Us as Pb, Fs as Qb, Vs as Rb, _s as Sb, re as Tb, Ns as Ub, XA as Vb, Ms as Wb, zs as Xb, Ze as Yb, Xs as Zb, Ws as _b, Ke as $b, Hs as ac, Qe as bc, Js as cc, Ys as dc, Br as ec, Ra as fc, Jt as gc, $e as hc, tr as ic, Zs as jc, Ia as kc, X as lc, Qs as mc, Er as nc, ti as oc, Ht as pc, Yt as qc, Zt as rc, Kt as sc, ts as tc, ri as uc, er as vc, rr as wc, ai as xc, Zr as yc, si as zc, ii as Ac, ar as Bc, sr as Cc, Kr as Dc, ir as Ec, ni as Fc, eG as Gc, Qt as Hc, oi as Ic, Aa as Jc, A as Kc, QS as Lc, ci as Mc, nr as Nc, or as Oc, pi as Pc, li as Qc, nG as Rc, mi as Sc, fi as Tc, Cr as Uc, Ti as Vc, Di as Wc, es as Xc, rs as Yc, yi as Zc, cr as _c, ur as $c, Lr as ad, Si as bd, Oi as cd, gi as dd, xi as ed, Ri as fd, sk as gd, Ii as hd, hi as id, Ai as jd, Gi as kd, vr as ld, wi as md, Bi as nd, $t as od, as as pd, Ei as qd, Ci as rd, Li as sd, pr as td, lr as ud, qi as vd, ji as wd, ki as xd, Ui as yd, bU as zd, qr as Ad, Fi as Bd, Vi as Cd, Pa as Dd, _i as Ed, mr as Fd, Ni as Gd, Mi as Hd, zi as Id, Xi as Jd, Wi as Kd, Hi as Ld, DG as Md, Ba as Nd, Ji as Od, Yi as Pd, fr as Qd, Tr as Rd, Ki as Sd, Rr as Td, Qi as Ud, $i as Vd, ee as Wd, tn as Xd, Ea as Yd, en as Zd, ta as _d, rn as $d, ea as ae, an as be, sn as ce, nn as de, La as ee, on as fe, cn as ge, pn as he, ln as ie, va as je, mn as ke, Tn as le, jr as me, ra as ne, yr as oe, Dn as pe, yn as qe, dn as re, Ua as se, aa as te, Sn as ue, dr as ve, On as we, Sr as xe, Or as ye, gn as ze, xn as Ae, BM as Be, bn as Ce, Rn as De, ia as Ee, ae as Fe, In as Ge, hn as He, An as Ie, Gn as Je, v2 as Ke, Va as Le, wn as Me, Pn as Ne, Bn as Oe, En as Pe, _a as Qe, Do as Re, Ln as Se, vn as Te, qn as Ue, jn as Ve, kn as We, So as Xe, Un as Ye, Fn as Ze, Ma as _e, Vn as $e, _n as af, Nn as bf, qG as cf, Wa as df, v as ef, Xn as ff, Wn as gf, Hn as hf, se as
    if, Jn as jf, kG as kf, Yn as lf, Zn as mf, Kn as nf, Qn as of , Za as pf, $n as qf, go as rf, xo as sf, to as tf, eo as uf, MG as vf, WG as wf, ss as xf, ro as yf, ao as zf, gr as Af, so as Bf, na as Cf, ZG as Df, oa as Ef, tw as Ff, aw as Gf, nw as Hf, d$ as If, ns as Jf, io as Kf, no as Lf, R8 as Mf, u6 as Nf, oo as Of, fw as Pf, p4 as Qf, A4 as Rf
};