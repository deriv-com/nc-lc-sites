import {
    a as L
} from "./_oschunk-7TQRI4EL.js";
import {
    i as z
} from "./_oschunk-4VHUVDBV.js";
import {
    B as p,
    H as d,
    N as y,
    P as C,
    Q as P,
    R as O,
    S as I,
    T as w,
    U as D,
    V as N,
    c as e,
    g as h,
    i as v,
    m as l,
    s as g,
    u as f
} from "./_oschunk-M5BUVJ72.js";
var u;
(function(r) {
    r[r.Normal = 0] = "Normal", r[r.AtFunctionReturn = 1] = "AtFunctionReturn", r[r.BetweenAssignments = 2] = "BetweenAssignments"
})(u || (u = {}));
var S = class S {
    startSession() {}
    endSession() {}
    getThreadStack(a) {
        return null
    }
    addBreakpoint(a) {}
    addBreakpoints(a) {}
    allowBreakpointsFromModule(a) {}
    removeBreakpoint(a) {}
    clearBreakpoints() {}
    continue (a) {}
    continueToHere(a, n) {}
    stepInto(a) {}
    stepOver(a) {}
    stepOut(a) {}
    pauseOnAllExceptions(a) {}
    evaluateVariable(a, n, o, i, s, m) {
        return null
    }
    get version() {
        return 0
    }
    isSessionActive() {
        return !1
    }
    isPausedOnException() {
        return !1
    }
    getExceptionMessage(a) {
        return null
    }
    getThreadStartName(a) {
        return null
    }
    initialize(a) {
        return Promise.resolve()
    }
    registerMetaInfo(a) {}
    getRequestHeaders(a) {
        return null
    }
    processResponseHeaders(a, n) {}
    setThreadStartName(a, n) {}
    push(a, n, o, i, s, m) {}
    pop(a, n) {}
    handleFunctionCall(a, n, o) {
        return a()
    }
    handleBreakpoint(a, n, o, i) {
        return u.Normal, !0
    }
    handleException(a, n) {}
    parse(a) {
        return null
    }
    get BreakpointType() {
        return u
    }
};
e(S, "NullDebugger");
var c = S,
    A = "6.53.10";
h.registerPackage("client-runtime-core", A);
var V = typeof window != "undefined" ? window : global;
V.OutSystemsDebugger = new c;

function t(r) {
    var a = v.getBasePath();
    return a = a.replace(/\/$/, ""), r ? a + "/" + r : a
}
e(t, "buildURL");
var F = [{
        get pathname() {
            return t()
        },
        screenName: "Common.signup",
        forDefaultPath: !0,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-RCOGO6JE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("biometics/verify")
        },
        screenName: "Biometrics.VerifyBiometric",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-J6BIIOK3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("biometrics")
        },
        screenName: "Biometrics.BiometricsList",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PWPDO7EW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("retake-assessment")
        },
        screenName: "TradingSuitability.RetakeAssessment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AHXCYDDW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user/cfd-trading-experience")
        },
        screenName: "TradingSuitability.UserInstrumentsTradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JXT7K7NU.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user/trading-experience")
        },
        screenName: "TradingSuitability.UserTradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-Z6IHT5VI.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user/previous-trading-experience")
        },
        screenName: "TradingSuitability.UserPreviousTradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AQUNBHAF.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user/trading-frequency")
        },
        screenName: "TradingSuitability.UserTradingFrequency",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-CU7S5N2L.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("retake-trading-assessment")
        },
        screenName: "TradingSuitability.RetakeTradingAssessment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-GTIIQFB4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("RecoverPasswordReset")
        },
        screenName: "Common.RecoverPasswordReset",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-P2MJ3CZG.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("login")
        },
        screenName: "Common.Login",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-OXFNBZQ3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("session-expired")
        },
        screenName: "Common.SessionExpired",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BKPRWAZT.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("signup")
        },
        screenName: "Common.signup",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-RCOGO6JE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("invalid")
        },
        screenName: "Common.InvalidPermissions",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-KNUBF6DN.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("forgot-password")
        },
        screenName: "Common.ForgotPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-MKHIRH4K.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("RecoverPasswordRequest")
        },
        screenName: "Common.RecoverPasswordRequest",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-HU34MA3L.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("password-login/:action?")
        },
        screenName: "Common.LoginWithPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-DPXRBMAM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("linked-successfully")
        },
        screenName: "Common.LinkedSuccessfully",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WFEEN7PA.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("closed-account")
        },
        screenName: "Common.ClosedAccount",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-XAGOCH72.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("Uaepass/Callback")
        },
        screenName: "Common.Callback",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WNVGJPIP.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("change-password")
        },
        screenName: "Common.ChangePassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FO6RSNXW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("LinkToUAEPASS")
        },
        screenName: "Common.LinkToUAEPASS",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-XRBTXSHP.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("reset-password")
        },
        screenName: "Common.ResetPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-6SUPJFNB.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("set-password")
        },
        screenName: "Common.SetPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JZNSKXTJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("UserProfile")
        },
        screenName: "Common.UserProfile",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-D2L3GVEV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("otp")
        },
        screenName: "Common.OTP",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SIJTP3PI.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("change-password-screen")
        },
        screenName: "Common.ChangePasswordScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-IDD3YEL6.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("code-info")
        },
        screenName: "Common.CodeInfo",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-E3PEEXSQ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("confirm-withdraw")
        },
        screenName: "WithdrawFlow.ConfirmWithdraw",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-CTRV2XUN.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("withdraw")
        },
        screenName: "WithdrawFlow.Withdraw",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-OK5FE3GR.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("withdraw-amount")
        },
        screenName: "WithdrawFlow.WithdrawAmount",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BW7MSXJ7.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("withdraw-status")
        },
        screenName: "WithdrawFlow.WithdrawStatus",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PXVSSBBQ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-source-of-income")
        },
        screenName: "FinancialAssessmentFlow.UserSourceOfIncome",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BHKU72QA.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("annual-income")
        },
        screenName: "FinancialAssessmentFlow.UserAnnualIncome",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UXDX4AIY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-net-worth")
        },
        screenName: "FinancialAssessmentFlow.UserNetWorth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AUDJ3S77.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-financial-assessment-status")
        },
        screenName: "FinancialAssessmentFlow.UserFinancialAssessmentCompletion",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-LPVBTC5A.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-source-of-wealth")
        },
        screenName: "FinancialAssessmentFlow.UserSourceOfWealth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PYQXFMLH.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-education-level")
        },
        screenName: "FinancialAssessmentFlow.UserEducationLevel",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-DP436KD3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("occupation")
        },
        screenName: "FinancialAssessmentFlow.UserOccupation",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-O5T2PYN4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-monthly-essential-expenditure")
        },
        screenName: "FinancialAssessmentFlow.UserMonthlyEssentialExpenditure",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JVDULYMX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-industry-of-employment")
        },
        screenName: "FinancialAssessmentFlow.UserIndustryOfEmployment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JGKBIVGX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("CurrencySelectionV2")
        },
        screenName: "V2Flow.CurrencySelection_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-NVGBE7NK.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("KYCStatus_V2")
        },
        screenName: "V2Flow.KYCStatus_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-OOHFSIS2.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("CreatePassword_V2")
        },
        screenName: "V2Flow.MT5CreatePassword_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FCGFMBOJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("AccountCreationSuccess_V2")
        },
        screenName: "V2Flow.MT5AccountCreationSuccess_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-TADFYPJ4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("MT5EnterPassword_V2")
        },
        screenName: "V2Flow.MT5EnterPassword_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZLRUJL3V.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("VerifyYourself")
        },
        screenName: "V2Flow.VerifyYourself",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-N34DZBIE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("SubmitPOA")
        },
        screenName: "V2Flow.SubmitPOA",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZFLPBSQ7.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ConfirmPersonalDetails")
        },
        screenName: "V2Flow.ConfirmPersonalDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-7Y3Y7QSE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("TradingAccountMT5")
        },
        screenName: "V2Flow.TradingAccountMT5",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PSAJZ67B.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("MT5AccountType")
        },
        screenName: "V2Flow.MT5AccountType",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WWYF5HGT.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/account-details")
        },
        screenName: "MT5Flow.MT5AccountDetailsScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-33WDSAS7.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/account-creation/success")
        },
        screenName: "MT5Flow.MT5AccountCreationSuccess",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-V3YSKEKF.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/reset-password/success")
        },
        screenName: "MT5Flow.MT5PasswordResetSuccess",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JRV2QS5X.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/activation")
        },
        screenName: "MT5Flow.MT5TypeActivationScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-LXLYUORX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/reset-password")
        },
        screenName: "MT5Flow.MT5ResetPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AZOMZSVE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/create-password")
        },
        screenName: "MT5Flow.MT5CreatePassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-NGUM5KSE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/deposit")
        },
        screenName: "MT5Flow.MT5DepositScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-7Q6GQRJA.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/password")
        },
        screenName: "MT5Flow.MT5EnterPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-43RRRYER.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("mt5/login-details")
        },
        screenName: "MT5Flow.MT5LoginDetailsScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SYNK675T.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("transfer-status")
        },
        screenName: "TransferFlow.TransferStatus",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YBGZAL6P.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("confirm-transfer")
        },
        screenName: "TransferFlow.ConfirmTransfer",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ELJJPP5M.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("transfer-amount")
        },
        screenName: "TransferFlow.TransferAmount",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-4RBYC6DU.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("select-transfer-direction")
        },
        screenName: "TransferFlow.TransferDirection",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WUMJLY64.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("select-transfer-account")
        },
        screenName: "TransferFlow.TransferAccount",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-M6WWXIFL.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("deposit")
        },
        screenName: "DepositFlow.Deposit",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-O7RKUIOW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("deposit-wallet")
        },
        screenName: "DepositFlow.DepositWallet",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ADKGLLPX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-personal-details")
        },
        screenName: "UserProfileFlow.BasicPersonalDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-655YEXN3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-financial-assessment")
        },
        screenName: "UserProfileFlow.FinancialAssessment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-3CKOAKTB.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-phone-number")
        },
        screenName: "UserProfileFlow.PhoneNumber",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SGRFWJCD.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("secondary-verification")
        },
        screenName: "UserProfileFlow.AddSecondaryVerification",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-7QIMJW2C.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("identity-verification-status")
        },
        screenName: "UserProfileFlow.IdentityVerificationStatus",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZOJDGL3U.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("uaepass-details")
        },
        screenName: "UserProfileFlow.UAEPASSDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ACHCUK7C.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-contact")
        },
        screenName: "UserProfileFlow.EmailAddress",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-CL7GEYLM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verification-status")
        },
        screenName: "UserProfileFlow.VerificationStatus",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-57INYCNJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-suitability-assessment")
        },
        screenName: "UserProfileFlow.SuitabiliyAssessment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-4P5ZEHWU.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("account-verification")
        },
        screenName: "UserProfileFlow.AccountVerification",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2RYRRIXJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-email-phone")
        },
        screenName: "UserProfileFlow.VerifyEmailPasswordPhone",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-32IQGZCW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("home-address")
        },
        screenName: "UserProfileFlow.ResidentialAddress",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-DRKRTT77.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-email-section")
        },
        screenName: "UserProfileFlow.EmailSection",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-LOZ45YBL.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-additional-info")
        },
        screenName: "UserProfileFlow.AdditionalInfo",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2T5FTXF6.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("profile-verification-otp")
        },
        screenName: "UserProfileFlow.ProfileVerificationOTP",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-6HTYEI6G.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("change-phone-email")
        },
        screenName: "UserProfileFlow.ChangePhoneEmail",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZEQGE7PE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("activate-biometrics")
        },
        screenName: "UserProfileFlow.Biometrics",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UGWASGAS.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("choose-verification-method")
        },
        screenName: "UserProfileFlow.ChooseVerificationMethod",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SFMQZAVX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("login-history")
        },
        screenName: "UserProfileFlow.LoginHistory",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-6HADKWR3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-profile")
        },
        screenName: "UserProfileFlow.MainUserProfile",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-K33RJB5F.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("trade")
        },
        screenName: "MainFlow.Trade",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-VS64ZTM3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("add-wallet")
        },
        screenName: "MainFlow.AddWallet",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-GWIMLZ2G.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("wallet")
        },
        screenName: "MainFlow.Wallet",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-L6GI7VR4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("wallet-activated")
        },
        screenName: "MainFlow.WalletActivatedSuccessScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FUZ4AKPM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("home")
        },
        screenName: "MainFlow.Home",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-HTMV6UHK.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc-inprogress")
        },
        screenName: "KYCFlow.VerificationInProgress",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZIDO7KWC.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verification-limit-reached")
        },
        screenName: "KYCFlow.VerificationLimitReached",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AITHQWGM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-poi")
        },
        screenName: "KYCFlow.VerifyPOI",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-NTNJKHC5.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("system-status-info")
        },
        screenName: "KYCFlow.SystemStatusInfo",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-R2GKAYJR.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-poa")
        },
        screenName: "KYCFlow.VerifyPOA",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ME7SPYTI.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("get-verified")
        },
        screenName: "KYCFlow.CompleteYourVerification",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2JJCT5EL.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verification-paused")
        },
        screenName: "KYCFlow.VerificationPaused",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-U5Q7WU2L.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc")
        },
        screenName: "KYCFlow.StartKYCFromMT5",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-TLJC7S27.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc-transition")
        },
        screenName: "KYCFlow.TransitionPage",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-MRF73WDW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc-status")
        },
        screenName: "KYCFlow.KYCStatusPage",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-4XSQXTQC.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("Home_V2")
        },
        screenName: "V2Design.Home_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-XHOFCKVR.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("FinancialAssessment_V2")
        },
        screenName: "V2Onboarding.FinancialAssessment_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-RLREUVMV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/verify-email-phone-v2")
        },
        screenName: "V2Onboarding.VerifyEmailPhone_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-LSACGXFQ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("FinancialAssessmentSetup_V2")
        },
        screenName: "V2Onboarding.FinancialAssessmentSetup_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2MAZXT6P.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/personal-details_v2")
        },
        screenName: "V2Onboarding.PersonalDetails_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-IUJX3F6D.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("TradingSuitability_V2")
        },
        screenName: "V2Onboarding.TradingSuitability_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-7MI3CNFJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("TermsOfUse_V2")
        },
        screenName: "V2Onboarding.TermsOfUse_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WUMLRV7A.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("TradingSuitabilityWarning_V2")
        },
        screenName: "V2Onboarding.TradingSuitabilityWarning_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-NGRRDZHT.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("EmploymentStatus_V2")
        },
        screenName: "V2Onboarding.EmploymentStatus_V2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WEUPWGG3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("date-of-birth")
        },
        screenName: "OnboardingFlow.DateofBirth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-F4UDGKTS.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("suitability-assessment")
        },
        screenName: "OnboardingFlow.TradingSuitablity",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-MF6HYDR7.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("terms-and-condition")
        },
        screenName: "OnboardingFlow.TermsAndConditions",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZCIBDQUY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("make-a-deposit")
        },
        screenName: "OnboardingFlow.MakeADeposit",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-4CTGO3CR.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("trading-experience")
        },
        screenName: "OnboardingFlow.TradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YAUHRFLD.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("monthly-essential-expenditure")
        },
        screenName: "OnboardingFlow.MonthlyEssentialExpenditure",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WXER2R3L.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("previous-trading-experience")
        },
        screenName: "OnboardingFlow.PreviousTradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-QQNUIJVZ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("residence")
        },
        screenName: "OnboardingFlow.ResidenceSelection",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-T5GM2WFK.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("financial-assessment-status")
        },
        screenName: "OnboardingFlow.FinancialAssessmentCompletion",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-M6J5TH2K.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("source-of-wealth")
        },
        screenName: "OnboardingFlow.SourceOfWealth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UPNQVISD.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("currency-selection")
        },
        screenName: "OnboardingFlow.CurrencySelection",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-35L6KNDE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("phone-number")
        },
        screenName: "OnboardingFlow.PhoneNumberInput",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UCNN6H5B.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("net-worth")
        },
        screenName: "OnboardingFlow.NetWorth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FNPTKCBP.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("currency-selection-wallets")
        },
        screenName: "OnboardingFlow.CurrencySelectionForWallets",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-S676QF2H.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("main-goal")
        },
        screenName: "OnboardingFlow.MainGoal",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WTXTF23M.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("phone-and-email")
        },
        screenName: "OnboardingFlow.AddYourPhone_Email2",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PLNRFFES.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("education-level")
        },
        screenName: "OnboardingFlow.EducationLevel",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-AQ6X3O7C.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("employment-status")
        },
        screenName: "OnboardingFlow.EmploymentStatus",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BWK3PHSE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("foreign-tax")
        },
        screenName: "OnboardingFlow.PayTaxesOutsideUAE",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-7ZHCCGHH.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("employment-details")
        },
        screenName: "OnboardingFlow.EmploymentDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-QN7Q3WNW.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("personal-details")
        },
        screenName: "OnboardingFlow.PersonalDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FSGDAA7F.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-your-identity")
        },
        screenName: "OnboardingFlow.VerifiyIdentityToMakeDeposit",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-5E3PCZYF.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-email-phone")
        },
        screenName: "OnboardingFlow.EmailPhone",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-G2TP54HV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("nationality")
        },
        screenName: "OnboardingFlow.Nationality",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-36E6QM26.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("industry-of-employment")
        },
        screenName: "OnboardingFlow.IndustryOfEmployment",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WVNTQA74.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("source-of-income")
        },
        screenName: "OnboardingFlow.SourceOfIncome",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PVY6NTVP.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("email")
        },
        screenName: "OnboardingFlow.Email",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-QWVJDNAV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("suitability-test-warning")
        },
        screenName: "OnboardingFlow.SuitabilityTestWarning",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BJ5K33SS.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("tax-info")
        },
        screenName: "OnboardingFlow.TaxInfo",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-VKVAXI7F.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("net-annual-income")
        },
        screenName: "OnboardingFlow.AnnualIncome",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-5RQKOTZH.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("place-of-birth")
        },
        screenName: "OnboardingFlow.PlaceofBirth",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2IDNCXMG.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("user-name")
        },
        screenName: "OnboardingFlow.UserName",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-W6RAAZN2.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("cfd-trading-experience")
        },
        screenName: "OnboardingFlow.InstrumentsTradingExperience",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SHVZ7OMM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("address-details")
        },
        screenName: "OnboardingFlow.AddressDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-5ARIPZDB.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("trading-frequency")
        },
        screenName: "OnboardingFlow.TradingFrequency",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-OUNSD2NQ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("transaction-details")
        },
        screenName: "CashierFlow.TransactionDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-IFLJLKYQ.js")
            }, "importer")
        }
    }],
    b = null;
C(l, {
    applicationDefinition: L
}).then(function() {
    return Promise.all([D(l, {
        dateTimeFormat: new f.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"),
        numberFormat: new f.NumberFormatInfo(".", "")
    }), O(l), I(l, {
        onSettingsUpdated: N
    }), w()])
}).then(function() {
    return P({
        initType: d.Application.InitializationType.Full,
        executeRequiredScripts: e(function() {
            return Promise.all(["scripts/uae.UserScripts.sumsub.js", "scripts/uae.UserScripts.yupumd.js", "scripts/uae.UserScripts.JSCookie.js", "scripts/uae.UserScripts.OverwriteConsole.js", "scripts/uae.UserScripts.i18n.js", "scripts/uae.UserScripts.CancellablePromise.js", "scripts/uae.UserScripts.NavigationListener.js", "scripts/uae.UserScripts.webauthn.js", "scripts/uae.UserScripts.GTM.js", "scripts/uae.UserScripts.DerivDatadog.js", "scripts/uae.UserScripts.TrackJS.js", "scripts/uae.UserScripts.DerivAnalytics.js", "scripts/uae.UserScripts.CachingScript.js", "scripts/uae.UserScripts.DerivCookies.js", "scripts/uae.UserScripts.ConsoleOverride.js"].map(function(r) {
                return y.requireScript(r)
            }))
        }, "executeRequiredScripts")
    }).then(function(r) {
        if (r) {
            let a = function() {
                    return new Promise(function(o) {
                        Promise.all([import("./_oschunk-52TA4PJR.js")]).then(function(i) {
                            var s = i[0];
                            p.default.registerDefaultErrorHandler(function() {
                                return function(m, T) {
                                    return s.default.handleError(m, T)
                                }
                            }), o()
                        })
                    })
                },
                n = function() {
                    return new Promise(function(o, i) {
                        try {
                            z.load(p.default, void 0, {
                                staticScreenRoutes: F,
                                staticSplashRoute: b
                            }), o()
                        } catch (s) {
                            i(s)
                        }
                    })
                };
            return e(a, "initGlobalExceptionHandler"), e(n, "initView"), a().then(n)
        }
    })
}).catch(function(r) {
    g.handleError(r)
});