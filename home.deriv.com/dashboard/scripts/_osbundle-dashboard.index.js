import {
    a as z
} from "./_oschunk-Y6DPS6WF.js";
import {
    i as b
} from "./_oschunk-NVHFAAS2.js";
import {
    C as p,
    I as g,
    O as P,
    Q as C,
    R as y,
    S as I,
    T as O,
    U as D,
    V as N,
    W as L,
    c as e,
    h as S,
    j as d,
    n as l,
    t as v,
    v as m
} from "./_oschunk-DFKJJKI4.js";
var u;
(function(a) {
    a[a.Normal = 0] = "Normal", a[a.AtFunctionReturn = 1] = "AtFunctionReturn", a[a.BetweenAssignments = 2] = "BetweenAssignments"
})(u || (u = {}));
var h = class h {
    startSession() {}
    endSession() {}
    getThreadStack(r) {
        return null
    }
    addBreakpoint(r) {}
    addBreakpoints(r) {}
    allowBreakpointsFromModule(r) {}
    removeBreakpoint(r) {}
    clearBreakpoints() {}
    continue (r) {}
    continueToHere(r, n) {}
    stepInto(r) {}
    stepOver(r) {}
    stepOut(r) {}
    pauseOnAllExceptions(r) {}
    evaluateVariable(r, n, o, i, s, f) {
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
    getExceptionMessage(r) {
        return null
    }
    getThreadStartName(r) {
        return null
    }
    initialize(r) {
        return Promise.resolve()
    }
    registerMetaInfo(r) {}
    getRequestHeaders(r) {
        return null
    }
    processResponseHeaders(r, n) {}
    setThreadStartName(r, n) {}
    push(r, n, o, i, s, f) {}
    pop(r, n) {}
    handleFunctionCall(r, n, o) {
        return r()
    }
    handleBreakpoint(r, n, o, i) {
        return u.Normal, !0
    }
    handleException(r, n) {}
    parse(r) {
        return null
    }
    get BreakpointType() {
        return u
    }
};
e(h, "NullDebugger");
var c = h,
    F = "6.53.10";
S.registerPackage("client-runtime-core", F);
var k = typeof window != "undefined" ? window : global;
k.OutSystemsDebugger = new c;

function t(a) {
    var r = d.getBasePath();
    return r = r.replace(/\/$/, ""), a ? r + "/" + a : r
}
e(t, "buildURL");
var w = [{
        get pathname() {
            return t()
        },
        screenName: "Home.home",
        forDefaultPath: !0,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-VEF4KMVE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc/identity")
        },
        screenName: "UserProfile.ProofofIdentity",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SMDCVNHQ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc/confirm-detail")
        },
        screenName: "UserProfile.Confirmyourdetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-QJ3QCQEK.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc/address")
        },
        screenName: "UserProfile.ProofofAddress",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-LZNC4TZL.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("language")
        },
        screenName: "UserProfile.Language",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-Y54RCDPY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("reset-password")
        },
        screenName: "UserProfile.ResetPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-2RIF2REJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc/identity-completed")
        },
        screenName: "UserProfile.ProofofIdentityComplete",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-5FIRQ37N.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("profile")
        },
        screenName: "UserProfile.Profile",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BVLZAK5D.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("address")
        },
        screenName: "UserProfile.AddressDetail",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-52FLIIQ5.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-phone-number")
        },
        screenName: "UserProfile.VerifyPhoneNumber",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WJ6OKKCL.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-reset-password")
        },
        screenName: "UserProfile.VerifyResetPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-P3ICSRDJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("details")
        },
        screenName: "UserProfile.PersonalDetail",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-P46OHRUZ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("kyc/address-submitted")
        },
        screenName: "UserProfile.ProofofAddressComplete",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-RHLRZCAA.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("recover-password-reset")
        },
        screenName: "Common.RecoverPasswordReset",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-J3BEUGX6.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("Verifypassword")
        },
        screenName: "Common.ResetPasswordOTP",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-X75U44IZ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("invalid-permissions")
        },
        screenName: "Common.InvalidPermissions",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-TBWWBHVZ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("recover-password-request")
        },
        screenName: "Common.RecoverPasswordRequest",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-5PQMSY66.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify")
        },
        screenName: "Common.VerifyOTP",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-MUPNYBEP.js")
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
                return import("./_oschunk-WQ2YI6N4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ForgotPassword")
        },
        screenName: "Common.ForgotPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-GFGGT5KK.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("verify-password")
        },
        screenName: "Common.VerifyPassword",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-B2RX2VWF.js")
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
                return import("./_oschunk-S4HI66P5.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ory/signup")
        },
        screenName: "ORY.signupORY",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WMFRQFCI.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ory/login/password")
        },
        screenName: "ORY.LoginWithPasswordORY",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-CDHAS3WC.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ory/login")
        },
        screenName: "ORY.loginORY",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZZNXOBTS.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ory/set-password")
        },
        screenName: "ORY.SetPasswordORY",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-K5LHL7EB.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("ory/verify")
        },
        screenName: "ORY.VerifyORY",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-F67XHCWE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("cfds/details")
        },
        screenName: "CFDs.CFDAvailableAccountDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-JNMICZVZ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("cfds/account")
        },
        screenName: "CFDs.CFDAccountDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-PGTRXF3E.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("cfds/compare-account")
        },
        screenName: "CFDs.CFDCompareAccounts",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-MGSKC7GP.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("CtraderRedirection")
        },
        screenName: "CFDs.CtraderRedirection",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-R3T54WWV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("transfer")
        },
        screenName: "Portfolio.Transfer",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-46KB6SLN.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("deposit")
        },
        screenName: "Portfolio.Deposit",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UWE6M4QJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("withdraw")
        },
        screenName: "Portfolio.Withdraw",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-FLFORA6R.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("wallet")
        },
        screenName: "Portfolio.Wallet",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SLBBKJIY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("convert")
        },
        screenName: "Portfolio.Convert",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-SYH3UZ3N.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("trading")
        },
        screenName: "Portfolio.Trading",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YZMGHD7D.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("dev/flags/:secret?")
        },
        screenName: "Development.Flags",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YOQ3LM55.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/kyc-poa")
        },
        screenName: "Onboarding.KYCPOAScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-ZWV6Y6OX.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/personal-details")
        },
        screenName: "Onboarding.PersonalDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YK6FVVTC.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/nickname")
        },
        screenName: "Onboarding.Nickname",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-BHNEFUXM.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/terms-of-use")
        },
        screenName: "Onboarding.TermsOfUse",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-UDN4QXI4.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/address")
        },
        screenName: "Onboarding.AddressDetails",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-IKF7JSOE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/verify")
        },
        screenName: "Onboarding.Verify",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-CJVNXPAY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("onboarding/kyc-poi")
        },
        screenName: "Onboarding.KYCPOIScreen",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-XYCL7JAY.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("portfolio")
        },
        screenName: "MainFlow.Portfolio",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-GUPT7TGE.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("options")
        },
        screenName: "MainFlow.Options",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-YXPOMCPU.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("cfds")
        },
        screenName: "MainFlow.CFDs",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-4GITB6XV.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("redirect")
        },
        screenName: "MainFlow.Redirect",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-WWBZJHBJ.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("signup")
        },
        screenName: "GlobalLoginSignup.signup",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-K4MGXPE6.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("login")
        },
        screenName: "GlobalLoginSignup.login",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-Q6KALTL3.js")
            }, "importer")
        }
    }, {
        get pathname() {
            return t("home")
        },
        screenName: "Home.home",
        forDefaultPath: !1,
        lazyComponentInfo: {
            isStatic: !0,
            shallSaveStateOnLeave: !0,
            importer: e(function() {
                return import("./_oschunk-VEF4KMVE.js")
            }, "importer")
        }
    }],
    R = null;
C(l, {
    applicationDefinition: z
}).then(function() {
    return Promise.all([N(l, {
        dateTimeFormat: new m.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"),
        numberFormat: new m.NumberFormatInfo(".", "")
    }), I(l), O(l, {
        onSettingsUpdated: L
    }), D()])
}).then(function() {
    return y({
        initType: g.Application.InitializationType.Full,
        executeRequiredScripts: e(function() {
            return Promise.all(["scripts/dashboard.UserScripts.LoadFonts.js", "scripts/dashboard.UserScripts.FeatureFlags.js", "scripts/dashboard.UserScripts.axios_min.js", "scripts/dashboard.UserScripts.MarketingUtilsCookieCDN.js", "scripts/dashboard.UserScripts.JSCookie.js", "scripts/dashboard.UserScripts.GTM.js", "scripts/dashboard.UserScripts.DerivAnalytics.js", "scripts/dashboard.UserScripts.CachingScript.js", "scripts/dashboard.UserScripts.ConsoleOverride.js", "scripts/dashboard.UserScripts.TrackJS.js", "scripts/dashboard.UserScripts.Ory.js", "scripts/dashboard.UserScripts.ReactLibs.js", "scripts/dashboard.UserScripts.DerivDatadog.js"].map(function(a) {
                return P.requireScript(a)
            }))
        }, "executeRequiredScripts")
    }).then(function(a) {
        if (a) {
            let r = function() {
                    return new Promise(function(o) {
                        Promise.all([import("./_oschunk-RJSPK4GB.js")]).then(function(i) {
                            var s = i[0];
                            p.default.registerDefaultErrorHandler(function() {
                                return function(f, U) {
                                    return s.default.handleError(f, U)
                                }
                            }), o()
                        })
                    })
                },
                n = function() {
                    return new Promise(function(o, i) {
                        try {
                            b.load(p.default, void 0, {
                                staticScreenRoutes: w,
                                staticSplashRoute: R
                            }), o()
                        } catch (s) {
                            i(s)
                        }
                    })
                };
            return e(r, "initGlobalExceptionHandler"), e(n, "initView"), r().then(n)
        }
    })
}).catch(function(a) {
    v.handleError(a)
});